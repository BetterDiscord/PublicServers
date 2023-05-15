/**
 * @name PublicServers
 * @description Adds the ability to browse DiscordServers.com directly inside Discord!
 * @version 0.1.0
 * @author BetterDiscord
 * @source https://github.com/BetterDiscord/PublicServers
 */


/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/blankslates/noresults.jsx":
/*!**************************************************!*\
  !*** ./src/components/blankslates/noresults.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoResults)
/* harmony export */ });
/* harmony import */ var _icons_magnifyingglass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/magnifyingglass */ "./src/components/icons/magnifyingglass.jsx");

const {
  React
} = BdApi;
function NoResults(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bd-empty-results" + (props.className ? ` ${props.className}` : "")
  }, /*#__PURE__*/React.createElement(_icons_magnifyingglass__WEBPACK_IMPORTED_MODULE_0__["default"], null), /*#__PURE__*/React.createElement("div", {
    className: "bd-empty-results-text"
  }, props.text || ""));
}

/***/ }),

/***/ "./src/components/card.jsx":
/*!*********************************!*\
  !*** ./src/components/card.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServerCard)
/* harmony export */ });
const {
  React
} = BdApi;
const badge = /*#__PURE__*/React.createElement("div", {
  className: "flowerStarContainer-3zDVtj verified-1eC5dy background-2uufRq guildBadge-RlDbED",
  style: {
    width: "16px",
    height: "16px"
  }
}, /*#__PURE__*/React.createElement("svg", {
  "aria-label": "Verified & Partnered",
  className: "flowerStar-1GeTsn",
  "aria-hidden": "false",
  width: "16",
  height: "16",
  viewBox: "0 0 16 15.2"
}, /*#__PURE__*/React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
})), /*#__PURE__*/React.createElement("div", {
  className: "childContainer-1wxZNh"
}, /*#__PURE__*/React.createElement("svg", {
  className: "icon-1ihkOt",
  "aria-hidden": "false",
  width: "16",
  height: "16",
  viewBox: "0 0 16 15.2"
}, /*#__PURE__*/React.createElement("path", {
  d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
  fill: "currentColor"
}))));
class ServerCard extends React.Component {
  constructor(props) {
    super(props);
    if (!this.props.server.iconUrl) this.props.server.iconUrl = this.props.defaultAvatar();
    this.state = {
      joined: this.props.joined
    };
    this.join = this.join.bind(this);
    this.handleError = this.handleError.bind(this);
  }
  render() {
    const {
      server
    } = this.props;
    const addedDate = new Date(server.insertDate * 1000); // Convert from unix timestamp
    const buttonText = typeof this.state.joined == "string" ? `Joining...` : this.state.joined ? "Joined" : "Join";
    return /*#__PURE__*/React.createElement("div", {
      className: "bd-server-card",
      role: "button",
      tabIndex: "0",
      onClick: this.join
    }, /*#__PURE__*/React.createElement("div", {
      className: "bd-server-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bd-server-splash-container"
    }, /*#__PURE__*/React.createElement("img", {
      src: server.iconUrl,
      onError: this.handleError,
      className: "bd-server-splash"
    })), /*#__PURE__*/React.createElement("img", {
      src: server.iconUrl,
      onError: this.handleError,
      className: "bd-server-icon"
    })), /*#__PURE__*/React.createElement("div", {
      className: "bd-server-info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bd-server-title"
    }, server.pinned && badge, /*#__PURE__*/React.createElement("div", {
      className: "bd-server-name"
    }, server.name), this.state.joined && /*#__PURE__*/React.createElement("div", {
      className: "bd-server-tag"
    }, buttonText)), /*#__PURE__*/React.createElement("div", {
      className: "bd-server-description"
    }, server.description), /*#__PURE__*/React.createElement("div", {
      className: "bd-server-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bd-server-count"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bd-server-count-dot"
    }), /*#__PURE__*/React.createElement("div", {
      className: "bd-server-count-text"
    }, server.members.toLocaleString(), " Members")), /*#__PURE__*/React.createElement("div", {
      className: "bd-server-count"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bd-server-count-dot"
    }), /*#__PURE__*/React.createElement("div", {
      className: "bd-server-count-text"
    }, "Added ", addedDate.toLocaleDateString())))));
  }
  handleError() {
    this.props.server.iconUrl = this.props.defaultAvatar();
  }
  async join() {
    if (this.state.joined) return this.props.navigateTo(this.props.server.identifier);
    this.setState({
      joined: "joining"
    });
    const didJoin = await this.props.join(this.props.server.identifier, this.props.server.nativejoin);
    this.setState({
      joined: didJoin
    });
  }
}

/***/ }),

/***/ "./src/components/icons/globe.jsx":
/*!****************************************!*\
  !*** ./src/components/icons/globe.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Globe)
/* harmony export */ });
const {
  React
} = BdApi;
function Globe(props) {
  const size = props.size || "18px";
  const color = props.color || "#FFFFFF";
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "2 2 20 20",
    fill: color,
    style: {
      width: size,
      height: size
    },
    onClick: props.onClick
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
  }));
}

/***/ }),

/***/ "./src/components/icons/magnifyingglass.jsx":
/*!**************************************************!*\
  !*** ./src/components/icons/magnifyingglass.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MagnifyingGlass)
/* harmony export */ });
const {
  React
} = BdApi;
function MagnifyingGlass(props) {
  const size = props.size || "160px";
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      width: size,
      height: size
    },
    viewBox: "0 0 160 160"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(9 9)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "rgba(0,0,0,0.1)",
    d: "M42.1262,100.7598 C25.1382,83.7718 25.1382,56.2288 42.1262,39.2408 C59.1142,22.2538 86.6572,22.2538 103.6452,39.2408 C120.6322,56.2288 120.6322,83.7718 103.6452,100.7598 C86.6572,117.7478 59.1142,117.7478 42.1262,100.7598"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#1E2126",
    strokeWidth: "2",
    d: "M121.8938,119.4976 C94.5578,146.8346 50.2358,146.8346 22.8988,119.4976 C-4.4382,92.1616 -4.4382,47.8396 22.8988,20.5026 C50.2358,-6.8334 94.5578,-6.8344 121.8938,20.5026 C149.2308,47.8396 149.2308,92.1616 121.8938,119.4976 Z",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeDasharray: "4 5"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#C9D2F0",
    d: "M1.8313,140.566 L1.8313,140.566 C-0.6097,138.125 -0.6097,134.166 1.8313,131.725 L38.6023,94.954 L47.4433,103.795 L10.6723,140.566 C8.2303,143.007 4.2723,143.007 1.8313,140.566"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#1E2126",
    strokeWidth: "2",
    d: "M1.8313,140.566 L1.8313,140.566 C-0.6097,138.125 -0.6097,134.166 1.8313,131.725 L38.6023,94.954 L47.4433,103.795 L10.6723,140.566 C8.2303,143.007 4.2723,143.007 1.8313,140.566 Z",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#9F7373",
    d: "M12.1457,139.0923 L3.3047,130.2513 C1.6767,128.6233 1.6767,125.9853 3.3047,124.3573 L20.7417,106.9203 C22.3687,105.2923 25.0077,105.2923 26.6357,106.9203 L35.4767,115.7613 C37.1037,117.3893 37.1037,120.0283 35.4767,121.6553 L18.0397,139.0923 C16.4127,140.7193 13.7727,140.7193 12.1457,139.0923"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#1E2126",
    strokeWidth: "2",
    d: "M12.1457,139.0923 L3.3047,130.2513 C1.6767,128.6233 1.6767,125.9853 3.3047,124.3573 L20.7417,106.9203 C22.3687,105.2923 25.0077,105.2923 26.6357,106.9203 L35.4767,115.7613 C37.1037,117.3893 37.1037,120.0283 35.4767,121.6553 L18.0397,139.0923 C16.4127,140.7193 13.7727,140.7193 12.1457,139.0923 Z",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#F3F9FF",
    d: "M44.112,98.2847 C28.491,82.6637 28.491,57.3377 44.112,41.7167 C59.733,26.0957 85.06,26.0957 100.681,41.7157 C116.302,57.3367 116.302,82.6637 100.681,98.2847 C85.06,113.9057 59.733,113.9057 44.112,98.2847 M108.007,34.3897 C88.34,14.7227 56.453,14.7227 36.786,34.3897 C17.119,54.0567 17.119,85.9437 36.786,105.6107 C56.453,125.2777 88.34,125.2777 108.007,105.6107 C127.674,85.9437 127.674,54.0567 108.007,34.3897"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#1E2126",
    strokeWidth: "2",
    d: "M116.386 94.545C115.853 95.498 115.287 96.438 114.688 97.362M108.0071 105.6109C88.3401 125.2779 56.4531 125.2779 36.7861 105.6109 17.1191 85.9439 17.1191 54.0569 36.7861 34.3899 56.4531 14.7229 88.3401 14.7229 108.0071 34.3899 122.7701 49.1529 126.4511 70.7999 119.0511 88.9969",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    stroke: "#1E2126",
    strokeWidth: "2",
    d: "M44.112,98.2847 C28.491,82.6637 28.491,57.3377 44.112,41.7167 C59.733,26.0957 85.06,26.0957 100.681,41.7157 C116.302,57.3367 116.302,82.6637 100.681,98.2847 C85.06,113.9057 59.733,113.9057 44.112,98.2847 Z",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("rect", {
    width: "160",
    height: "160",
    y: "-1"
  })));
}

/***/ }),

/***/ "./src/components/icons/next.jsx":
/*!***************************************!*\
  !*** ./src/components/icons/next.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArrowRight)
/* harmony export */ });
const {
  React
} = BdApi;
function ArrowRight(props) {
  const size = props.size || "24px";
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 17l5-5-5-5v10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 24V0h24v24H0z",
    fill: "none"
  }));
}

/***/ }),

/***/ "./src/components/icons/previous.jsx":
/*!*******************************************!*\
  !*** ./src/components/icons/previous.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArrowLeft)
/* harmony export */ });
const {
  React
} = BdApi;
function ArrowLeft(props) {
  const size = props.size || "24px";
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 7l-5 5 5 5V7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24 0v24H0V0h24z",
    fill: "none"
  }));
}

/***/ }),

/***/ "./src/components/icons/search.jsx":
/*!*****************************************!*\
  !*** ./src/components/icons/search.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
const {
  React
} = BdApi;
function Search(props) {
  const size = props.size || "16px";
  return /*#__PURE__*/React.createElement("svg", {
    className: props.className || "",
    fill: "#FFFFFF",
    viewBox: "0 0 24 24",
    style: {
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
  }));
}

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PublicServers)
/* harmony export */ });
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title */ "./src/components/title.jsx");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./src/components/card.jsx");
/* harmony import */ var _blankslates_noresults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blankslates/noresults */ "./src/components/blankslates/noresults.jsx");
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connection */ "./src/connection.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ "./src/components/search.jsx");
/* harmony import */ var _icons_previous__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/previous */ "./src/components/icons/previous.jsx");
/* harmony import */ var _icons_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/next */ "./src/components/icons/next.jsx");







const {
  React,
  Webpack,
  UI
} = BdApi;
const SettingsView = Webpack.getModule(Webpack.Filters.byPrototypeFields("renderSidebar"));
const GuildActions = Webpack.getModule(Webpack.Filters.byProps("transitionToGuildSync"));
const Dispatcher = Webpack.getModule(Webpack.Filters.byProps("dispatch", "subscribe", "register"));
const LayerManager = {
  pushLayer(component) {
    Dispatcher.dispatch({
      type: "LAYER_PUSH",
      component
    });
  },
  popLayer() {
    Dispatcher.dispatch({
      type: "LAYER_POP"
    });
  },
  popAllLayers() {
    Dispatcher.dispatch({
      type: "LAYER_POP_ALL"
    });
  }
};
const EMPTY_RESULTS = {
  servers: [],
  size: 0,
  total: 0,
  page: 1,
  numPages: 1
};
class PublicServers extends React.Component {
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
    UI.showConfirmationModal("Connection Issues", "Please notes there are currently issues connecting accounts with DiscordServers.com\n\nWe are both investigating this issue.", {
      cancelText: null
    });
  }
  async checkConnection() {
    const userData = await _connection__WEBPACK_IMPORTED_MODULE_3__["default"].checkConnection();
    if (!userData) return this.setState({
      user: null
    });
    this.setState({
      user: userData
    });
  }
  async getDashboard() {
    const dashboardData = await _connection__WEBPACK_IMPORTED_MODULE_3__["default"].getDashboard();
    this.featured = dashboardData.featured;
    this.popular = dashboardData.popular;
    this.keywords = dashboardData.keywords;
    this.setState({
      loading: false
    }, () => this.changeTab(this.state.tab));
    if (!this.keywords || !this.keywords.length) UI.showConfirmationModal("Connection Error", "There was an error connecting to DiscordServers.com, it's possible their website/api is down. Please try again later.");
  }
  async connect() {
    await _connection__WEBPACK_IMPORTED_MODULE_3__["default"].connect();
    this.checkConnection();
  }
  searchKeyDown(e) {
    if (this.state.loading || e.key !== "Enter") return;
    const term = e.target.value;
    if (this.state.tab == "Featured" || this.state.tab == "Popular") this.setState({
      tab: "All"
    }, () => this.search(term));else this.search(term);
  }
  async search(term = "", page = 1) {
    this.setState({
      query: term,
      loading: true
    });
    const results = await _connection__WEBPACK_IMPORTED_MODULE_3__["default"].search({
      term,
      keyword: this.state.tab == "All" || this.state.tab == "Featured" || this.state.tab == "Popular" ? "" : this.state.tab,
      page
    });
    if (!results) return this.setState({
      results: Object.assign({}, EMPTY_RESULTS)
    });
    this.setState({
      loading: false,
      results
    });
  }
  async changeTab(id) {
    if (this.state.loading) return;
    await new Promise(resolve => this.setState({
      tab: id
    }, resolve));
    if (this.state.tab === "Featured" || this.state.tab == "Popular") {
      const fakeResults = {
        servers: this[this.state.tab.toLowerCase()],
        size: this[this.state.tab.toLowerCase()].length,
        total: this[this.state.tab.toLowerCase()].length,
        page: 1,
        numPages: 1
      };
      return this.setState({
        results: fakeResults
      });
    }
    this.search();
  }
  get hasPrevious() {
    return this.state.results.page > 1;
  }
  get hasNext() {
    return this.state.results.page < this.state.results.numPages;
  }
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
          this.connect().then(() => _connection__WEBPACK_IMPORTED_MODULE_3__["default"].join(id, native));
        }
      });
    }
    return await _connection__WEBPACK_IMPORTED_MODULE_3__["default"].join(id, native);
  }
  navigateTo(id) {
    if (GuildActions) GuildActions.transitionToGuildSync(id);
    if (LayerManager) LayerManager.popLayer();
  }
  get searchBox() {
    return /*#__PURE__*/React.createElement(_search__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onKeyDown: this.searchKeyDown,
      className: "bd-server-search",
      placeholder: "Search",
      value: this.state.query
    });
  }
  get title() {
    if (this.state.loading) return `Loading...`;
    if (this.state.query) {
      const start = (this.state.results.page - 1) * this.state.results.size + 1;
      const total = this.state.results.total;
      const end = this.hasNext ? start - 1 + this.state.results.size : total;
      let title = `Showing ${start}-${end} of ${total} results in ${this.state.tab}`;
      if (this.state.query) title += " for " + this.state.query;
      return title;
    }
    return this.state.tab;
  }
  get content() {
    const connectButton = this.state.user ? null : {
      title: "Connect",
      onClick: this.connect
    };
    const servers = this.state.results.servers.map(server => {
      return React.createElement(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: server.identifier,
        server: server,
        joined: _connection__WEBPACK_IMPORTED_MODULE_3__["default"].hasJoined(server.identifier),
        join: this.join,
        navigateTo: this.navigateTo,
        defaultAvatar: _connection__WEBPACK_IMPORTED_MODULE_3__["default"].getDefaultAvatar
      });
    });
    let content = React.createElement(_blankslates_noresults__WEBPACK_IMPORTED_MODULE_2__["default"]);
    if (this.state.loading) content = this.loadingScreen;else if (this.state.results.total) content = React.createElement("div", {
      className: "bd-card-list"
    }, servers);
    return [React.createElement(_title__WEBPACK_IMPORTED_MODULE_0__["default"], {
      text: this.title,
      button: connectButton
    }), this.state.results.numPages > 1 && this.pagination, content, this.state.results.numPages > 1 && this.pagination];
  }
  get loadingScreen() {
    return /*#__PURE__*/React.createElement("div", {
      className: "bd-card-list"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/React.createElement("div", {
      className: "bd-placeholder-card"
    }));
  }
  get pagination() {
    return React.createElement("div", {
      className: "bd-pagination"
    }, React.createElement("button", {
      type: "button",
      className: "bd-button bd-pagination-previous",
      disabled: !this.hasPrevious,
      onClick: this.loadPreviousPage
    }, /*#__PURE__*/React.createElement(_icons_previous__WEBPACK_IMPORTED_MODULE_5__["default"], null)), React.createElement("span", {
      className: "bd-pagination-info"
    }, `Page ${this.state.results.page} of ${this.state.results.numPages}`), React.createElement("button", {
      type: "button",
      className: "bd-button bd-pagination-next",
      disabled: !this.hasNext,
      onClick: this.loadNextPage
    }, /*#__PURE__*/React.createElement(_icons_next__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
  }
  get connection() {
    const {
      user
    } = this.state;
    if (!user) return React.createElement("div", {
      id: "bd-connection"
    });
    return React.createElement("div", {
      id: "bd-connection"
    }, React.createElement("div", {
      className: "bd-footnote"
    }, `Connected as: ${user.username}#${user.discriminator}`), React.createElement("button", {
      type: "button",
      className: "bd-button bd-button-reconnect",
      onClick: this.connect
    }, "Reconnect"));
  }
  render() {
    const keywords = this.keywords.map(name => ({
      section: name,
      label: name,
      element: () => this.content
    }));
    return React.createElement(SettingsView, {
      onClose: this.props.close,
      onSetSection: this.changeTab,
      section: this.state.tab,
      sections: [{
        section: "HEADER",
        label: "Search"
      }, {
        section: "CUSTOM",
        element: () => this.searchBox
      }, {
        section: "DIVIDER"
      }, {
        section: "HEADER",
        label: "Categories"
      }, {
        section: "All",
        label: "All",
        element: () => this.content
      }, {
        section: "Featured",
        label: "Featured",
        element: () => this.content
      }, {
        section: "Popular",
        label: "Popular",
        element: () => this.content
      }, {
        section: "DIVIDER"
      }, {
        section: "HEADER",
        label: "Keywords"
      }, ...keywords, {
        section: "DIVIDER"
      }, {
        section: "HEADER",
        label: React.createElement("a", {
          href: "https://discordservers.com",
          target: "_blank"
        }, "DiscordServers.com")
      }, {
        section: "DIVIDER"
      }, {
        section: "CUSTOM",
        element: () => this.connection
      }],
      theme: "dark"
    });
  }
}

/***/ }),

/***/ "./src/components/search.jsx":
/*!***********************************!*\
  !*** ./src/components/search.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _icons_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/search */ "./src/components/icons/search.jsx");
const {
  React
} = BdApi;

const {
  useState,
  useCallback
} = React;
function Search({
  onChange,
  className,
  onKeyDown,
  placeholder
}) {
  const [value, setValue] = useState("");
  const change = useCallback(e => {
    onChange?.(e);
    setValue(e.target.value);
  }, [onChange]);
  return /*#__PURE__*/React.createElement("div", {
    className: "bd-search-wrapper" + (className ? ` ${className}` : "")
  }, /*#__PURE__*/React.createElement("input", {
    onChange: change,
    onKeyDown: onKeyDown,
    type: "text",
    className: "bd-search",
    placeholder: placeholder,
    maxLength: "50",
    value: value
  }), /*#__PURE__*/React.createElement(_icons_search__WEBPACK_IMPORTED_MODULE_0__["default"], null));
}

/***/ }),

/***/ "./src/components/title.jsx":
/*!**********************************!*\
  !*** ./src/components/title.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsTitle)
/* harmony export */ });
const {
  React
} = BdApi;
const {
  useCallback
} = React;
const basicClass = "bd-settings-title";
const groupClass = "bd-settings-title bd-settings-group-title";
function SettingsTitle({
  isGroup,
  className,
  button,
  onClick,
  text,
  otherChildren
}) {
  const click = useCallback(event => {
    event.stopPropagation();
    event.preventDefault();
    button?.onClick?.(event);
  }, [button]);
  const baseClass = isGroup ? groupClass : basicClass;
  const titleClass = className ? `${baseClass} ${className}` : baseClass;
  return /*#__PURE__*/React.createElement("h2", {
    className: titleClass,
    onClick: () => {
      onClick?.();
    }
  }, text, button && /*#__PURE__*/React.createElement("button", {
    className: "bd-button bd-button-title",
    onClick: click
  }, button.title), otherChildren);
}

/***/ }),

/***/ "./src/connection.js":
/*!***************************!*\
  !*** ./src/connection.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  Webpack
} = BdApi;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class PublicServersConnection {
  constructor() {
    this.cache = new Map();
    this.cache.set("featured", [betterDiscordServer]);
    this.cache.set("popular", []);
    this.cache.set("keywords", []);
    this.cache.set("accessToken", "");
  }
  get endPoint() {
    return "https://search.discordservers.com";
  }
  get joinEndPoint() {
    return "https://j.discordservers.com";
  }
  get connectEndPoint() {
    return "https://auth.discordservers.com/info";
  }
  get authorizeEndPoint() {
    return `https://auth.discordservers.com/connect?scopes=guilds.join&previousUrl=${this.connectEndPoint}`;
  }
  getDefaultAvatar() {
    return AvatarDefaults.DEFAULT_AVATARS[Math.floor(Math.random() * 5)];
  }
  hasJoined(id) {
    return SortedGuildStore.getFlattenedGuildIds().includes(id);
  }
  async search({
    term = "",
    keyword = "",
    page = 1
  } = {}) {
    if (this.cache.has(term + keyword + page)) return this.cache.get(term + keyword + page);
    const from = (page - 1) * ITEMS_PER_PAGE;
    const queries = [];
    if (keyword) queries.push(`keyword=${keyword.replace(/ /g, "%20").toLowerCase()}`);
    if (term) queries.push(`term=${term.replace(/ /g, "%20")}`);
    if (from) queries.push(`from=${from}`);
    const query = `?${queries.join("&")}`;
    try {
      const response = await fetch(`${this.endPoint}${query}`, {
        method: "GET"
      });
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
    } catch (error) {
      console.error("PublicServers", "Could not reach search endpoint.", error); // eslint-disable-line no-console
    }
  }

  async getDashboard() {
    const cachedKeywords = this.cache.get("keywords");
    if (cachedKeywords && cachedKeywords.length) return {
      featured: this.cache.get("featured"),
      popular: this.cache.get("popular"),
      keywords: cachedKeywords
    };
    try {
      const response = await fetch(`${this.endPoint}/dashboard`, {
        method: "GET"
      });
      const data = await response.json();
      const featuredFirst = data.results[0].key === "featured";
      const featuredServers = data.results[featuredFirst ? 0 : 1].response.hits;
      const popularServers = data.results[featuredFirst ? 1 : 0].response.hits;
      const mainKeywords = data.mainKeywords.map(k => k.charAt(0).toUpperCase() + k.slice(1)).sort();
      featuredServers.unshift(betterDiscordServer);
      this.cache.set("featured", featuredServers);
      this.cache.set("popular", popularServers);
      this.cache.set("keywords", mainKeywords);
      return {
        featured: this.cache.get("featured"),
        popular: this.cache.get("popular"),
        keywords: this.cache.get("keywords")
      };
    } catch (error) {
      console.error("PublicServers", "Could not download dashboard.", error); // eslint-disable-line no-console
      return {
        featured: this.cache.get("featured"),
        popular: this.cache.get("popular"),
        keywords: this.cache.get("keywords")
      };
    }
  }
  async join(id, native = false) {
    if (native) return InviteActions.acceptInvite({
      inviteKey: id
    });
    try {
      await fetch(`${this.joinEndPoint}/${id}`, {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
      return true;
    } catch (error) {
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
    } catch (error) {
      console.warn("PublicServers", "Could not verify connection.", error); // eslint-disable-line no-console
      return false;
    }
  }
  async connect() {
    const ipc = require("electron").ipcRenderer;
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
}());

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((module) => {

module.exports = "@keyframes bd-placeholder-card-pulse {\r\n    0% {\r\n        opacity: 0.6;\r\n    }\r\n\r\n    50% {\r\n        opacity: 0.8;\r\n    }\r\n\r\n    to {\r\n        opacity: 0.6;\r\n    }\r\n}\r\n\r\n#bd-pub-li {\r\n    height: 24px;\r\n    overflow: hidden;\r\n}\r\n\r\n#bd-pub-button {\r\n    border-radius: 4px;\r\n    background-color: var(--background-primary);\r\n    color: var(--text-normal);\r\n    text-align: center;\r\n    font-size: 12px;\r\n    line-height: 24px;\r\n    height: 24px;\r\n    transition: background-color 0.15s ease-out, color 0.15s ease-out;\r\n}\r\n\r\n#bd-pub-button:hover {\r\n    color: #FFFFFF;\r\n    background-color: #3E82E5;\r\n}\r\n\r\n#bd-connection {\r\n    margin-left: 10px;\r\n}\r\n\r\n.bd-footnote {\r\n    color: #B9BBBE;\r\n    font-size: 11px;\r\n}\r\n\r\n.bd-button-next,\r\n.bd-button-reconnect {\r\n    margin: 5px 10px 10px 0;\r\n    width: 100%;\r\n    min-height: 20px;\r\n}\r\n\r\n/* Rewrite */\r\n.bd-server-search {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.bd-card-list {\r\n    display: grid;\r\n    grid-gap: 16px;\r\n    grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));\r\n}\r\n\r\n.bd-server-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 320px;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    border-radius: 8px;\r\n    position: relative;\r\n    transition: box-shadow 0.2s ease-out, transform 0.2s ease-out, background 0.2s ease-out, opacity 0.2s ease-in;\r\n    cursor: pointer;\r\n    background-color: var(--activity-card-background);\r\n}\r\n\r\n.theme-light .bd-server-card {\r\n    box-shadow: 0 0 0 1px rgba(185, 187, 190, 0.3), var(--elevation-medium);\r\n}\r\n\r\n.theme-dark .bd-server-card {\r\n    background-color: var(--background-secondary-alt);\r\n}\r\n\r\n.bd-server-card:hover,\r\n.bd-server-card:focus,\r\n.theme-light .bd-server-card:hover,\r\n.theme-light .bd-server-card:focus {\r\n    transform: translateY(-1px);\r\n    box-shadow: var(--elevation-high);\r\n}\r\n\r\n.theme-dark .bd-server-card:hover,\r\n.theme-dark .bd-server-card:focus {\r\n    background-color: var(--background-tertiary);\r\n}\r\n\r\n.bd-placeholder-card {\r\n    background-color: var(--background-secondary-alt);\r\n    animation: bd-placeholder-card-pulse 1.8s ease-in-out infinite;\r\n    height: 320px;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    border-radius: 8px;\r\n    position: relative;\r\n}\r\n\r\n.bd-server-header {\r\n    height: 143px;\r\n    position: relative;\r\n    display: block;\r\n    overflow: visible;\r\n    margin-bottom: 32px;\r\n}\r\n\r\n.bd-server-splash-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transition: opacity 0.2s, transform 0.2s ease-out;\r\n    transform: scale(1);\r\n    overflow: hidden;\r\n}\r\n\r\n.bd-server-card:hover .bd-server-splash-container {\r\n    -webkit-transform: scale(1.01) translateZ(0);\r\n    transform: scale(1.01) translateZ(0);\r\n}\r\n\r\n.bd-server-splash {\r\n    object-fit: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n    filter: blur(20px);\r\n}\r\n\r\n.bd-server-icon {\r\n    position: absolute;\r\n    bottom: -21px;\r\n    left: 12px;\r\n    width: 40px;\r\n    background: var(--background-secondary-alt);\r\n    border: 4px solid var(--background-secondary-alt);\r\n    border-radius: 25%;\r\n    transition: background 0.2s ease-out, transform 0.2s ease-out, border-color 0.2s ease-out;\r\n}\r\n\r\n.bd-server-card:hover .bd-server-icon {\r\n    border-color: var(--background-tertiary);\r\n    background: var(--background-tertiary);\r\n}\r\n\r\n.bd-server-info {\r\n    display: flex;\r\n    flex: 1 1 auto;\r\n    position: relative;\r\n    flex-direction: column;\r\n    align-content: stretch;\r\n    padding: 0 16px 16px;\r\n    overflow: hidden;\r\n}\r\n\r\n.bd-server-title {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 100%;\r\n    font-weight: 600;\r\n}\r\n\r\n.bd-server-name {\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    color: var(--header-primary);\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n}\r\n\r\n.bd-server-description {\r\n    flex: 1 1 auto;\r\n    overflow: hidden;\r\n    margin: 4px 0 16px;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 4;\r\n    -webkit-box-orient: vertical;\r\n    color: var(--header-secondary);\r\n    font-size: 14px;\r\n    line-height: normal;\r\n}\r\n\r\n.bd-server-footer {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.bd-server-count {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 0.75rem;\r\n    line-height: 1rem;\r\n    margin-right: 16px;\r\n}\r\n\r\n.bd-server-count-dot {\r\n    background-color: #43B581;\r\n    border-radius: 50%;\r\n    width: 8px;\r\n    height: 8px;\r\n    margin-right: 4px;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.bd-server-count + .bd-server-count .bd-server-count-dot {\r\n    background-color: #B9BBBE;\r\n}\r\n\r\n.bd-server-count-text {\r\n    color: var(--header-secondary);\r\n    font-size: 12px;\r\n    line-height: 16px;\r\n}\r\n\r\n.bd-server-tag {\r\n    margin-left: 5px;\r\n    font-size: 10px;\r\n    text-transform: uppercase;\r\n    vertical-align: top;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    flex-shrink: 0;\r\n    text-indent: 0;\r\n    height: 15px;\r\n    padding: 0 4px;\r\n    margin-top: 1px;\r\n    border-radius: 3px;\r\n    background: #3E82E5;\r\n    color: #FFFFFF;\r\n}\r\n\r\n.bd-pagination {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: 15px;\r\n    color: var(--header-primary);\r\n}\r\n\r\n.bd-pagination span {\r\n    font-weight: 600;\r\n}\r\n\r\n.bd-pagination button {\r\n    background: none;\r\n    opacity: 0.7;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 1px solid var(--background-tertiary);\r\n    border-radius: 3px;\r\n    padding: 0;\r\n}\r\n\r\n.bd-pagination button:hover,\r\n.bd-pagination button:active {\r\n    opacity: 1;\r\n    background: var(--background-accent);\r\n}\r\n\r\n.bd-pagination button:active {\r\n    opacity: 1;\r\n    background: var(--background-secondary);\r\n}\r\n\r\n.bd-pagination button svg {\r\n    fill: var(--header-primary);\r\n}\r\n\r\n.bd-pagination button[disabled] {\r\n    opacity: 0.2;\r\n    cursor: not-allowed;\r\n}\r\n\r\n.bd-pagination + .bd-settings-title {\r\n    margin-top: 20px;\r\n}";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PublicServers)
/* harmony export */ });
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_icons_globe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/icons/globe */ "./src/components/icons/globe.jsx");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



const {
  React,
  ReactDOM,
  Webpack,
  Patcher,
  DOM
} = new BdApi("PublicServers");
const Dispatcher = Webpack.getModule(Webpack.Filters.byProps("dispatch", "subscribe", "register"));
const LayerManager = {
  pushLayer(component) {
    Dispatcher.dispatch({
      type: "LAYER_PUSH",
      component
    });
  },
  popLayer() {
    Dispatcher.dispatch({
      type: "LAYER_POP"
    });
  },
  popAllLayers() {
    Dispatcher.dispatch({
      type: "LAYER_POP_ALL"
    });
  }
};
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
class PublicServers {
  start() {
    const PrivateChannelList = Webpack.getModule(m => m?.toString().includes("privateChannelIds"), {
      defaultExport: false
    });
    if (!PrivateChannelList || !PrivateChannelList.Z) return console.warn("Could not find PrivateChannelList", PrivateChannelList); // eslint-disable-line no-console
    const PrivateChannelButton = Webpack.getModule(m => m?.prototype?.render?.toString().includes("linkButton"), {
      searchExports: true
    });
    if (!PrivateChannelButton) return console.warn("Could not find PrivateChannelButton", PrivateChannelButton); // eslint-disable-line no-console

    Patcher.after(PrivateChannelList, "Z", (_, __, returnValue) => {
      const destination = returnValue?.props?.children?.props?.children;
      if (!destination || !Array.isArray(destination)) return;
      if (destination.find(b => b?.props?.children?.props?.id === "public-servers-button")) return; // If it exists, don't try to add again

      destination.push(React.createElement(ErrorBoundary, null, React.createElement(PrivateChannelButton, {
        id: "public-servers-button",
        onClick: () => this.openPublicServers(),
        text: "Public Servers",
        icon: () => React.createElement(_components_icons_globe__WEBPACK_IMPORTED_MODULE_1__["default"], {
          color: "currentColor"
        })
      })));
    });
    DOM.addStyle(_styles_css__WEBPACK_IMPORTED_MODULE_2__);

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
    newButton.addEventListener("click", event => {
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
    ReactDOM.render(React.createElement(_components_icons_globe__WEBPACK_IMPORTED_MODULE_1__["default"], {
      color: "currentColor"
    }), avatarSlot);
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
    LayerManager.pushLayer(() => React.createElement(_components_menu__WEBPACK_IMPORTED_MODULE_0__["default"], {
      close: LayerManager.popLayer
    }));
  }
}
})();

module.exports = __webpack_exports__["default"];
/******/ })()
;