! function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 3)
}([function (e, t) {
    function n(t) {
        "@babel/helpers - typeof";
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function (e) {
            return typeof e
        } : e.exports = n = function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(t)
    }
    e.exports = n
}, function (e, t) {
    e.exports = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
}, function (e, t, n) {
    "use strict";
    window.wsb = window.wsb || {}, window.wsb.CookieBanner = window.wsb.CookieBanner || n(4)
}, function (e, t, n) {
    "use strict";
    var o = n(5),
        r = n(1);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = r(n(6)),
        a = r(n(7)),
        u = r(n(8)),
        c = r(n(2)),
        s = r(n(9)),
        _ = r(n(11)),
        l = r(n(12)),
        d = o(n(13)),
        E = r(n(14)),
        f = n(15),
        p = n(16),
        O = n(17),
        D = r(n(18));

    function I(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, o)
        }
        return n
    }

    function N(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? I(Object(n), !0).forEach(function (t) {
                (0, i.default)(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }

    function b(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var n, o = (0, l.default)(e);
            if (t) {
                var r = (0, l.default)(this).constructor;
                n = Reflect.construct(o, arguments, r)
            } else n = o.apply(this, arguments);
            return (0, _.default)(this, n)
        }
    }
    var h = f.constants.cookies.TERMS_ACCEPTED,
        y = f.constants.renderDevices.TABLET_RENDER_DEVICE,
        R = {
            bannerLayout: {
                padding: "medium",
                position: "fixed",
                bottom: "0",
                right: "0",
                zIndex: p.Z_INDEX_COOKIE_BANNER,
                width: "100%",
                height: "auto",
                textAlign: "left",
                backgroundColor: "section",
                borderRadius: "0",
                margin: "0",
                overflowY: "auto",
                "@sm": {
                    margin: "medium",
                    width: "400px",
                    maxHeight: "500px",
                    borderRadius: "7px"
                },
                transition: "all 1s cubic-bezier(0.49, -0.29, 0.4, 1.26)",
                boxShadow: "0 2px 6px 0px rgba(0,0,0,0.3)"
            },
            cookieTitle: {
                marginBottom: "0",
                paddingBottom: "xsmall",
                fontSize: "large"
            },
            cookieButton: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                cursor: "pointer",
                marginTop: "medium",
                marginBottom: "xxsmall",
                wordBreak: "break-word",
                flexBasis: "50%",
                flexGrow: 1,
                ":nth-child(2)": {
                    marginLeft: "medium"
                }
            },
            cookieMessage: {
                a: {
                    textDecoration: "underline"
                },
                maxHeight: "300px",
                overflowY: "auto",
                "@sm": {
                    maxHeight: "140px"
                }
            },
            buttonWrapper: {
                display: "flex",
                justifyContent: "space-between"
            }
        },
        g = function (e) {
            (0, s.default)(n, e);
            var t = b(n);

            function n() {
                var e;
                return (0, a.default)(this, n), (e = t.apply(this, arguments)).shouldShow = function () {
                    if (e.isEditMode()) {
                        var t = e.props,
                            n = t.router,
                            o = t.widgetId;
                        return n.widget === o
                    }
                }, e.state = {
                    dismissed: !1,
                    bottom: "-500px",
                    mutatorOpened: !1
                }, e.handleAcceptClicked = e.handleAcceptClicked.bind((0, c.default)(e)), e.handleDeclineClicked = e.handleDeclineClicked.bind((0, c.default)(e)), e
            }
            return (0, u.default)(n, [{
                key: "componentDidMount",
                value: function () {
                    var e = this;
                    !this.isPublishMode() || !this.isAccepted() && this.isBannerEnabled() || this.grantTrackingConsent(), this.shouldShow() && this.setState({
                        mutatorOpened: !0
                    }), setTimeout(function () {
                        e.setState({
                            bottom: "0"
                        })
                    }, 200)
                }
            }, {
                key: "grantTrackingConsent",
                value: function () {
                    "undefined" != typeof window && (window._allowCT = !0, "function" == typeof window.fbq && window.fbq("consent", "grant"), void 0 !== window.ga && void 0 !== window._gaID && (window["ga-disable-".concat(window._gaID)] = !1, window.ga("create", window._gaID, "auto"), window.ga("send", "pageview")))
                }
            }, {
                key: "isPublishMode",
                value: function () {
                    return this.props.renderMode === f.constants.renderModes.PUBLISH
                }
            }, {
                key: "isEditMode",
                value: function () {
                    return this.props.renderMode === f.constants.renderModes.EDIT
                }
            }, {
                key: "isAccepted",
                value: function () {
                    return (0, O.hasCookie)(h)
                }
            }, {
                key: "isBannerEnabled",
                value: function () {
                    return this.props.cookieBannerEnabled || this.props.enableCookieWarning
                }
            }, {
                key: "isBannerDismissed",
                value: function () {
                    return this.state.dismissed || (0, O.hasCookie)("cookie_warning_dismissed")
                }
            }, {
                key: "componentDidUpdate",
                value: function (e) {
                    var t = this.props,
                        n = t.router,
                        o = t.widgetId,
                        r = t.viewDevice;
                    if (n && e.router && n.widget !== e.router.widget) {
                        var i = e.router && "" === e.router.widget && n.widget === o;
                        this.isEditMode() && r === y && i ? this.setState({
                            mutatorOpened: !0
                        }) : this.setState({
                            mutatorOpened: !1
                        })
                    }
                }
            }, {
                key: "showBanner",
                value: function () {
                    return this.isPublishMode() ? this.isBannerEnabled() && !this.isBannerDismissed() : this.isBannerEnabled() && this.state.mutatorOpened
                }
            }, {
                key: "handleAcceptClicked",
                value: function (e) {
                    e.preventDefault(), this.isPublishMode() && (this.grantTrackingConsent(), (0, O.setCookie)("cookie_warning_dismissed"), (0, O.setCookie)(h), this.setState({
                        dismissed: !0
                    }))
                }
            }, {
                key: "handleDeclineClicked",
                value: function (e) {
                    e.preventDefault(), this.isPublishMode() && ((0, O.setCookie)("cookie_warning_dismissed"), (0, O.hasCookie)(h) && (0, O.clearCookie)(h), this.setState({
                        dismissed: !0
                    }))
                }
            }, {
                key: "render",
                value: function () {
                    if (!this.showBanner()) return null;
                    var e = this.state.bottom,
                        t = this.props,
                        n = t.cookieBannerTitle,
                        o = t.cookieBannerMessage,
                        r = t.cookieBannerButtonLabel,
                        i = t.staticContent,
                        a = t.cookieBannerDeclineLabel,
                        u = t.cookieBannerDeclineEnabled,
                        c = n || i.cookieTitle,
                        s = o || i.usingCookieMessage,
                        _ = r || i.acceptAndClose,
                        l = a || i.decline,
                        E = N(N({}, R.bannerLayout), {}, {
                            bottom: e
                        }),
                        p = f.UX2.Element,
                        O = p.Text,
                        I = p.Button,
                        b = p.Heading;
                    return d.default.createElement(f.UX2.Group, {
                        "data-aid": D.default.FOOTER_COOKIE_BANNER_RENDERED
                    }, d.default.createElement(f.UX2.Component.Background, {
                        category: "primary",
                        style: E
                    }, d.default.createElement(b, {
                        style: R.cookieTitle,
                        children: c,
                        "data-aid": D.default.FOOTER_COOKIE_TITLE_RENDERED
                    }), d.default.createElement(O, {
                        richtext: !0,
                        "data-aid": D.default.FOOTER_COOKIE_MESSAGE_RENDERED,
                        style: R.cookieMessage,
                        children: s
                    }), d.default.createElement(f.UX2.Element.Block, {
                        style: R.buttonWrapper
                    }, u && d.default.createElement(I.Primary, {
                        tag: "a",
                        href: "",
                        children: l,
                        style: R.cookieButton,
                        onMouseUp: this.handleDeclineClicked,
                        onTouchEnd: this.handleDeclineClicked,
                        "data-aid": D.default.FOOTER_COOKIE_DECLINE_RENDERED,
                        size: "small"
                    }), d.default.createElement(I.Primary, {
                        tag: "a",
                        href: "",
                        children: _,
                        style: R.cookieButton,
                        onMouseUp: this.handleAcceptClicked,
                        onTouchEnd: this.handleAcceptClicked,
                        "data-aid": D.default.FOOTER_COOKIE_CLOSE_RENDERED,
                        size: "small"
                    }))))
                }
            }]), n
        }(d.Component);
    g.propTypes = {
        router: E.default.object,
        widgetId: E.default.string,
        renderMode: E.default.string.isRequired,
        viewDevice: E.default.string.isRequired,
        cookieBannerTitle: E.default.string,
        cookieBannerButtonLabel: E.default.string,
        cookieBannerDeclineLabel: E.default.string,
        cookieBannerMessage: E.default.string,
        staticContent: E.default.object.isRequired,
        cookieBannerEnabled: E.default.bool,
        enableCookieWarning: E.default.bool,
        cookieBannerDeclineEnabled: E.default.bool
    };
    var m = g;
    t.default = m, e.exports = t.default
}, function (e, t, n) {
    var o = n(0);

    function r() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return r = function () {
            return e
        }, e
    }
    e.exports = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
            default: e
        };
        var t = r();
        if (t && t.has(e)) return t.get(e);
        var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
                var u = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                u && (u.get || u.set) ? Object.defineProperty(n, a, u) : n[a] = e[a]
            } return n.default = e, t && t.set(e, n), n
    }
}, function (e, t) {
    e.exports = function (e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
}, function (e, t) {
    e.exports = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function (e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }
    e.exports = function (e, t, o) {
        return t && n(e.prototype, t), o && n(e, o), e
    }
}, function (e, t, n) {
    var o = n(10);
    e.exports = function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && o(e, t)
    }
}, function (e, t) {
    function n(t, o) {
        return e.exports = n = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        }, n(t, o)
    }
    e.exports = n
}, function (e, t, n) {
    var o = n(0),
        r = n(2);
    e.exports = function (e, t) {
        return !t || "object" !== o(t) && "function" != typeof t ? r(e) : t
    }
}, function (e, t) {
    function n(t) {
        return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, n(t)
    }
    e.exports = n
}, function (e, t) {
    e.exports = React
}, function (e, t) {
    e.exports = PropTypes
}, function (e, t) {
    e.exports = Core
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Z_INDEX_FULL_SCREEN_OVERLAY = t.Z_INDEX_FREE_DOMAIN_TOOLTIP = t.Z_INDEX_NAV_DRAWER = t.Z_INDEX_COOKIE_BANNER = t.Z_INDEX_TOOLTIP = t.Z_INDEX_BACKUPS_OVERLAY = t.Z_INDEX_INLINE_EDITING_TOOLBAR = t.Z_INDEX_INLINE_IMAGE_TOOLBAR = t.Z_INDEX_VIEWPORT_CONTAINER = t.Z_INDEX_MODAL = t.Z_INDEX_INLINE_TOOLBAR = t.Z_INDEX_ADD_SECTION_BUTTON = t.Z_INDEX_SECTION_MANAGER = t.Z_INDEX_IN_APP_CHAT_HELPER = t.Z_INDEX_BUBBLE = t.Z_INDEX_BUBBLE_OVERLAY = t.Z_INDEX_PANEL = t.Z_INDEX_SSO_MODAL = t.Z_INDEX_MOSAIC = t.Z_INDEX_FEEDBACK = t.Z_INDEX_EDITORS = t.Z_INDEX_EDITOR_NAV = t.Z_INDEX_NAV = t.Z_INDEX_PROMO_BANNER = t.Z_INDEX_WRAPPER = t.Z_INDEX_CLICK_TO_EDIT_HIGHLIGHT = t.Z_INDEX_CONTENT = t.Z_INDEX_10000000 = t.Z_INDEX_1000000 = t.Z_INDEX_100000 = t.Z_INDEX_10000 = t.Z_INDEX_1000 = t.Z_INDEX_100 = t.Z_INDEX_10 = t.Z_INDEX_0 = void 0;
    t.Z_INDEX_0 = 0;
    t.Z_INDEX_10 = 10;
    t.Z_INDEX_100 = 100;
    t.Z_INDEX_1000 = 1e3;
    t.Z_INDEX_10000 = 1e4;
    t.Z_INDEX_100000 = 1e5;
    t.Z_INDEX_1000000 = 1e6;
    t.Z_INDEX_10000000 = 1e7;
    t.Z_INDEX_CONTENT = 1;
    t.Z_INDEX_CLICK_TO_EDIT_HIGHLIGHT = 1;
    t.Z_INDEX_WRAPPER = 2;
    t.Z_INDEX_PROMO_BANNER = 2;
    t.Z_INDEX_NAV = 2;
    t.Z_INDEX_EDITOR_NAV = 10;
    t.Z_INDEX_EDITORS = 10;
    t.Z_INDEX_FEEDBACK = 10;
    t.Z_INDEX_MOSAIC = 10;
    t.Z_INDEX_SSO_MODAL = 11;
    t.Z_INDEX_PANEL = 20;
    t.Z_INDEX_BUBBLE_OVERLAY = 100;
    t.Z_INDEX_BUBBLE = 101;
    t.Z_INDEX_IN_APP_CHAT_HELPER = 1e3;
    t.Z_INDEX_SECTION_MANAGER = 1001;
    t.Z_INDEX_ADD_SECTION_BUTTON = 1002;
    t.Z_INDEX_INLINE_TOOLBAR = 1002;
    t.Z_INDEX_MODAL = 1002;
    t.Z_INDEX_VIEWPORT_CONTAINER = 1002;
    t.Z_INDEX_INLINE_IMAGE_TOOLBAR = 1003;
    t.Z_INDEX_INLINE_EDITING_TOOLBAR = 1e4;
    t.Z_INDEX_BACKUPS_OVERLAY = 1e4;
    t.Z_INDEX_TOOLTIP = 1e4;
    t.Z_INDEX_COOKIE_BANNER = 1e4;
    t.Z_INDEX_NAV_DRAWER = 10002;
    t.Z_INDEX_FREE_DOMAIN_TOOLTIP = 1e5;
    t.Z_INDEX_FULL_SCREEN_OVERLAY = 1e6
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setCookie = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60,
            n = new Date;
        n.setTime(n.getTime() + o * t);
        var r = "expires=".concat(n.toUTCString());
        document.cookie = "".concat(e, "=true;").concat(r, ";path=/")
    }, t.hasCookie = function (e) {
        if ("undefined" == typeof document) return !1;
        return document.cookie.indexOf(e) >= 0
    }, t.clearCookie = function (e) {
        document.cookie = "".concat(e, "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/")
    };
    var o = 864e5
}, function (e, t, n) {
    "use strict";
    var o = n(1);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = (0, o(n(19)).default)({
        FOOTER_COOKIE_TITLE_RENDERED: null,
        FOOTER_COOKIE_MESSAGE_RENDERED: null,
        FOOTER_COOKIE_DECLINE_RENDERED: null,
        FOOTER_COOKIE_CLOSE_RENDERED: null,
        FOOTER_COOKIE_BANNER_RENDERED: null
    });
    t.default = r, e.exports = t.default
}, function (e, t) {
    e.exports = keyMirror
}]);