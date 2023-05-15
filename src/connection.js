const {Webpack} = BdApi;

const SortedGuildStore = Webpack.getModule(Webpack.Filters.byProps("getSortedGuilds"));
const AvatarDefaults = Webpack.getModule(Webpack.Filters.byProps("DEFAULT_AVATARS"));
const InviteActions = Webpack.getModule(Webpack.Filters.byProps("acceptInvite"));


const betterDiscordServer = {
    name: "BetterDiscord",
    members: 110000,
    categories: ["community", "programming", "support"],
    description: "Official BetterDiscord server for plugins, themes, support, etc",
    identifier: "86004744966914048",
    iconUrl: "https://cdn.discordapp.com/icons/86004744966914048/babd1af3fa6011a50e418a80f4970ceb.webp",
    nativejoin: true,
    invite_code: "BJD2yvJ",
    pinned: true,
    insertDate: 1517806800
};

const ITEMS_PER_PAGE = 50;

export default new class PublicServersConnection {

    constructor() {
        this.cache = new Map();
        this.cache.set("featured", [betterDiscordServer]);
        this.cache.set("popular", []);
        this.cache.set("keywords", []);
        this.cache.set("accessToken", "");
    }

    get endPoint() {return "https://search.discordservers.com";}
    get joinEndPoint() {return "https://j.discordservers.com";}
    get connectEndPoint() {return "https://auth.discordservers.com/info";}
    get authorizeEndPoint() {return `https://auth.discordservers.com/connect?scopes=guilds.join&previousUrl=${this.connectEndPoint}`;}

    getDefaultAvatar() {
        return AvatarDefaults.DEFAULT_AVATARS[Math.floor(Math.random() * 5)];
    }

    hasJoined(id) {
        return SortedGuildStore.getFlattenedGuildIds().includes(id);
    }

    async search({term = "", keyword = "", page = 1} = {}) {
        if (this.cache.has(term + keyword + page)) return this.cache.get(term + keyword + page);

        const from = (page - 1) * ITEMS_PER_PAGE;
        const queries = [];
        if (keyword) queries.push(`keyword=${keyword.replace(/ /g, "%20").toLowerCase()}`);
        if (term) queries.push(`term=${term.replace(/ /g, "%20")}`);
        if (from) queries.push(`from=${from}`);
        const query = `?${queries.join("&")}`;
        
        try {
            const response = await fetch(`${this.endPoint}${query}`, {method: "GET"});
            const data = await response.json();
            const results = {
                servers: data.results,
                size: data.size,
                total: data.total,
                page: Math.ceil(from / ITEMS_PER_PAGE) + 1,
                numPages: Math.ceil(data.total / ITEMS_PER_PAGE)
            };
            this.cache.set(term + keyword + page, results);
            return results;
        }
        catch (error) {
            console.error("PublicServers", "Could not reach search endpoint.", error); // eslint-disable-line no-console
        }
    }

    async getDashboard() {
        const cachedKeywords = this.cache.get("keywords");
        if (cachedKeywords && cachedKeywords.length) return {featured: this.cache.get("featured"), popular: this.cache.get("popular"), keywords: cachedKeywords};
        try {
            const response = await fetch(`${this.endPoint}/dashboard`, {method: "GET"});
            const data = await response.json();

            const featuredFirst = data.results[0].key === "featured";
            const featuredServers = data.results[featuredFirst ? 0 : 1].response.hits;
            const popularServers = data.results[featuredFirst ? 1 : 0].response.hits;
            const mainKeywords = data.mainKeywords.map(k => k.charAt(0).toUpperCase() + k.slice(1)).sort();

            featuredServers.unshift(betterDiscordServer);
            
            this.cache.set("featured", featuredServers);
            this.cache.set("popular", popularServers);
            this.cache.set("keywords", mainKeywords);
            return {featured: this.cache.get("featured"), popular: this.cache.get("popular"), keywords: this.cache.get("keywords")};
        }
        catch (error) {
            console.error("PublicServers", "Could not download dashboard.", error); // eslint-disable-line no-console
            return {featured: this.cache.get("featured"), popular: this.cache.get("popular"), keywords: this.cache.get("keywords")};
        }
    }

    async join(id, native = false) {
        if (native) return InviteActions.acceptInvite({inviteKey: id});
        try {
            await fetch(`${this.joinEndPoint}/${id}`,{
                method: "GET",
                credentials: "include",
                mode: "cors",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            return true;
        }
        catch (error) {
            console.warn("PublicServers", "Could not join server."); // eslint-disable-line no-console
            return false;
        }
    }

    async checkConnection() {
        try {
            const response = await fetch(this.connectEndPoint, {
                method: "GET",
                credentials: "include",
                mode: "cors",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            this._accessToken = data.access_token;
            return data;
        }
        catch (error) {
            console.warn("PublicServers", "Could not verify connection.", error); // eslint-disable-line no-console
            return false;
        }
    }

    async connect() {
        const ipc = __non_webpack_require__("electron").ipcRenderer;
        await ipc.invoke("bd-open-window", this.authorizeEndPoint, {
            windowOptions: this.windowOptions,
            closeOnUrl: this.connectEndPoint
        });
    }

    get windowOptions() {
        return {
            width: 520,
            height: 580,
            backgroundColor: "#282b30",
            show: true,
            resizable: true,
            maximizable: false,
            minimizable: false,
            alwaysOnTop: true,
            frame: false,
            center: true,
            webPreferences: {
                nodeIntegration: false
            }
        };
    }
};
