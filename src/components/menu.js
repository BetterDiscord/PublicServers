import SettingsTitle from "./title";
import ServerCard from "./card";
import EmptyResults from "./blankslates/noresults";
import Connection from "../connection";
import Search from "./search";
import Previous from "./icons/previous";
import Next from "./icons/next";

const {React, Webpack, UI} = BdApi;
const SettingsView = Webpack.getModule(Webpack.Filters.byPrototypeFields("renderSidebar"));
const GuildActions = Webpack.getModule(Webpack.Filters.byProps("transitionToGuildSync"));
const Dispatcher = Webpack.getModule(Webpack.Filters.byProps("dispatch", "subscribe", "register"));
const LayerManager = {
    pushLayer(component) {Dispatcher.dispatch({type: "LAYER_PUSH", component});},
    popLayer() {Dispatcher.dispatch({type: "LAYER_POP"});},
    popAllLayers() {Dispatcher.dispatch({type: "LAYER_POP_ALL"});}
};

const EMPTY_RESULTS = {
    servers: [],
    size: 0,
    total: 0,
    page: 1,
    numPages: 1
};

export default class PublicServers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: "Featured",
            query: "",
            loading: true,
            user: null,
            results: Object.assign({}, EMPTY_RESULTS)
        };

        this.featured = [];
        this.popular = [];
        this.keywords = [];

        this.changeTab = this.changeTab.bind(this);
        this.searchKeyDown = this.searchKeyDown.bind(this);
        this.connect = this.connect.bind(this);
        this.loadPreviousPage = this.loadPreviousPage.bind(this);
        this.loadNextPage = this.loadNextPage.bind(this);
        this.join = this.join.bind(this);
        this.navigateTo = this.navigateTo.bind(this);
    }

    componentDidMount() {
        this.getDashboard();
        this.checkConnection();
        UI.showConfirmationModal("Connection Issues", "Please notes there are currently issues connecting accounts with DiscordServers.com\n\nWe are both investigating this issue.", {cancelText: null});
    }

    async checkConnection() {
        const userData = await Connection.checkConnection();
        if (!userData) return this.setState({user: null});
        this.setState({user: userData});
    }

    async getDashboard() {
        const dashboardData = await Connection.getDashboard();
        
        this.featured = dashboardData.featured;
        this.popular = dashboardData.popular;
        this.keywords = dashboardData.keywords;
        
        this.setState({loading: false}, () => this.changeTab(this.state.tab));
        

        if (!this.keywords || !this.keywords.length) UI.showConfirmationModal("Connection Error", "There was an error connecting to DiscordServers.com, it's possible their website/api is down. Please try again later.");
    }

    async connect() {
        await Connection.connect();
        this.checkConnection();
    }

    searchKeyDown(e) {
        if (this.state.loading || e.key !== "Enter") return;
        const term = e.target.value;
        if (this.state.tab == "Featured" || this.state.tab == "Popular") this.setState({tab: "All"}, () => this.search(term));
        else this.search(term);
    }

    async search(term = "", page = 1) {
        this.setState({query: term, loading: true});
        const results = await Connection.search({term, keyword: this.state.tab == "All" || this.state.tab == "Featured" || this.state.tab == "Popular" ? "" : this.state.tab, page});
        if (!results) return this.setState({results: Object.assign({}, EMPTY_RESULTS)});

        this.setState({loading: false, results});
    }

    async changeTab(id) {
        if (this.state.loading) return;
        await new Promise(resolve => this.setState({tab: id}, resolve));
        if (this.state.tab === "Featured" || this.state.tab == "Popular") {
            const fakeResults = {
                servers: this[this.state.tab.toLowerCase()],
                size: this[this.state.tab.toLowerCase()].length,
                total: this[this.state.tab.toLowerCase()].length,
                page: 1,
                numPages: 1
            };
            return this.setState({results: fakeResults});
        }

        this.search();
    }

    get hasPrevious() {return this.state.results.page > 1;}
    get hasNext() {return this.state.results.page < this.state.results.numPages;}

    loadPreviousPage() {
        if (this.state.loading || !this.hasPrevious) return;
        this.search(this.state.query, this.state.results.page - 1);
    }

    loadNextPage() {
        if (this.state.loading || !this.hasNext) return;
        this.search(this.state.query, this.state.results.page + 1);
    }

    async join(id, native = false) {
        if (!this.state.user && !native) {
            return UI.showConfirmationModal("Not Connected", "You must connect your account in order to join servers.", {
                cancelText: "Nevermind",
                confirmText: "Okay",
                onConfirm: () => {
                    this.connect().then(() => Connection.join(id, native));
                }
            });
        }
        return await Connection.join(id, native);
    }

    navigateTo(id) {
        if (GuildActions) GuildActions.transitionToGuildSync(id);
        if (LayerManager) LayerManager.popLayer();
    }

    get searchBox() {
        return <Search onKeyDown={this.searchKeyDown} className="bd-server-search" placeholder="Search" value={this.state.query} />;
    }

    get title() {
        if (this.state.loading) return `Loading...`;
        if (this.state.query) {
            const start = ((this.state.results.page - 1) * this.state.results.size) + 1;
            const total = this.state.results.total;
            const end = this.hasNext ? (start - 1) + this.state.results.size : total;
            let title = `Showing ${start}-${end} of ${total} results in ${this.state.tab}`;
            if (this.state.query) title += " for " + this.state.query;
            return title;
        }
        return this.state.tab;
    }

    get content() {
        const connectButton = this.state.user ? null : {title: "Connect", onClick: this.connect};
        const servers = this.state.results.servers.map((server) => {
            return React.createElement(ServerCard, {key: server.identifier, server: server, joined: Connection.hasJoined(server.identifier), join: this.join, navigateTo: this.navigateTo, defaultAvatar: Connection.getDefaultAvatar});
        });

        let content = React.createElement(EmptyResults);
        if (this.state.loading) content = this.loadingScreen;
        else if (this.state.results.total) content = React.createElement("div", {className: "bd-card-list"}, servers);

        return [React.createElement(SettingsTitle, {text: this.title, button: connectButton}),
            this.state.results.numPages > 1 && this.pagination,
            content,
            this.state.results.numPages > 1 && this.pagination
        ];
    }

    get loadingScreen() {
        return <div className="bd-card-list">
                <div className="bd-placeholder-card"></div>
                <div className="bd-placeholder-card"></div>
                <div className="bd-placeholder-card"></div>
                <div className="bd-placeholder-card"></div>
                <div className="bd-placeholder-card"></div>
                <div className="bd-placeholder-card"></div>
                <div className="bd-placeholder-card"></div>
                <div className="bd-placeholder-card"></div>
            </div>;
    }

    get pagination() {
        return React.createElement("div", {className: "bd-pagination"},
            React.createElement("button", {type: "button", className: "bd-button bd-pagination-previous", disabled: !this.hasPrevious, onClick: this.loadPreviousPage}, <Previous />),
            React.createElement("span", {className: "bd-pagination-info"}, `Page ${this.state.results.page} of ${this.state.results.numPages}`),
            React.createElement("button", {type: "button", className: "bd-button bd-pagination-next", disabled: !this.hasNext, onClick: this.loadNextPage}, <Next />)
        );
    }

    get connection() {
        const {user} = this.state;
        if (!user) return React.createElement("div", {id: "bd-connection"});
        return React.createElement("div", {id: "bd-connection"},
            React.createElement("div", {className: "bd-footnote"}, `Connected as: ${user.username}#${user.discriminator}`),
            React.createElement("button", {type: "button", className: "bd-button bd-button-reconnect", onClick: this.connect}, "Reconnect")
        );
    }

    render() {
        const keywords = this.keywords.map(name => ({
                section: name,
                label: name,
                element: () => this.content
            })
        );
        return React.createElement(SettingsView, {
            onClose: this.props.close,
            onSetSection: this.changeTab,
            section: this.state.tab,
            sections: [
                {section: "HEADER", label: "Search"},
                {section: "CUSTOM", element: () => this.searchBox},
                {section: "DIVIDER"},
                {section: "HEADER", label: "Categories"},
                {section: "All", label: "All", element: () => this.content},
                {section: "Featured", label: "Featured", element: () => this.content},
                {section: "Popular", label: "Popular", element: () => this.content},
                {section: "DIVIDER"},
                {section: "HEADER", label: "Keywords"},
                ...keywords,
                {section: "DIVIDER"},
                {section: "HEADER", label: React.createElement("a", {href: "https://discordservers.com", target: "_blank"}, "DiscordServers.com")},
                {section: "DIVIDER"},
                {section: "CUSTOM", element: () => this.connection}
            ],
            theme: "dark"
        });
    }
}
