import PublicServersMenu from "./components/menu";
import Globe from "./components/icons/globe";
import Styles from "./styles.css";

const {React, ReactDOM, Webpack, Patcher, DOM} = new BdApi("PublicServers");
const Dispatcher = Webpack.getModule(Webpack.Filters.byProps("dispatch", "subscribe", "register"));

const LayerManager = {
    pushLayer(component) {Dispatcher.dispatch({type: "LAYER_PUSH", component});},
    popLayer() {Dispatcher.dispatch({type: "LAYER_POP"});},
    popAllLayers() {Dispatcher.dispatch({type: "LAYER_POP_ALL"});}
};

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {hasError: false};
    }

    componentDidCatch() {
      this.setState({hasError: true});
    }

    render() {
      if (this.state.hasError) return null;
      return this.props.children;
    }
}

export default class PublicServers {

    start() {
        const PrivateChannelList = Webpack.getModule(m => m?.toString().includes("privateChannelIds"), {defaultExport: false});
        if (!PrivateChannelList || !PrivateChannelList.Z) return console.warn("Could not find PrivateChannelList", PrivateChannelList); // eslint-disable-line no-console
        const PrivateChannelButton = Webpack.getModule(m => m?.prototype?.render?.toString().includes("linkButton"), {searchExports: true});
        if (!PrivateChannelButton) return console.warn("Could not find PrivateChannelButton", PrivateChannelButton); // eslint-disable-line no-console

        Patcher.after(PrivateChannelList, "Z", (_, __, returnValue) => {
            const destination = returnValue?.props?.children?.props?.children;
            if (!destination || !Array.isArray(destination)) return;
            if (destination.find(b => b?.props?.children?.props?.id === "public-servers-button")) return; // If it exists, don't try to add again
            
            destination.push(
                React.createElement(ErrorBoundary, null,
                    React.createElement(PrivateChannelButton,
                        {
                            id: "public-servers-button",
                            onClick: () => this.openPublicServers(),
                            text: "Public Servers",
                            icon: () => React.createElement(Globe, {color: "currentColor"})
                        }
                    )
                )
            );
        });

        DOM.addStyle(Styles);

        /**
         * On being first enabled, we have no way of forceUpdating the list,
         * so clone and modify an existing button and add it to the end
         * of the button list.
         */
        const header = document.querySelector(`[class*="privateChannelsHeaderContainer-"]`);
        if (!header) return; // No known element
        const oldButton = header.previousElementSibling;
        if (!oldButton.className.includes("channel-")) return; // Not what we expected to be there

        // Clone existing button and set click handler
        const newButton = oldButton.cloneNode(true);
        newButton.addEventListener("click", (event) => {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
            this.openPublicServers();
        });

        // Remove existing route and id
        const aSlot = newButton.querySelector("a");
        aSlot.href = "";
        aSlot.dataset.listItemId = "public-servers";

        // Remove any badges
        const premiumBadge = newButton.querySelector(`[class*="premiumTrial"]`);
        premiumBadge?.remove?.();
        const numberBadge = newButton.querySelector(`[class*="numberBadge-"]`);
        numberBadge?.remove?.();

        // Render our icon in the avatar slot
        const avatarSlot = newButton.querySelector(`[class*="avatar-"]`);
        avatarSlot.replaceChildren();
        ReactDOM.render(React.createElement(Globe, {color: "currentColor"}), avatarSlot);
        DOM.onRemoved(avatarSlot, () => ReactDOM.unmountComponentAtNode(avatarSlot));

        // Replace the existing name
        const nameSlot = newButton.querySelector(`[class*="name-"]`);
        nameSlot.textContent = "Public Servers";

        // Insert before the header, end of the list
        header.parentNode.insertBefore(newButton, header);

        this.button = newButton;
    }

    stop() {
        Patcher.unpatchAll();
        this.button?.remove?.();
        document.querySelector("#public-servers-button")?.parentElement?.parentElement?.remove?.();
        DOM.removeStyle();
    }

    openPublicServers() {
        LayerManager.pushLayer(() => React.createElement(PublicServersMenu, {close: LayerManager.popLayer}));
    }
}