! function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function (t, e, n) {
    "use strict";
    window.wsb = window.wsb || {}, window.wsb.DynamicFontScaler = window.wsb.DynamicFontScaler || n(1)
}, function (t, e, n) {
    "use strict";
    var r = n(2);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var o = r(n(3)),
        i = r(n(4)),
        a = r(n(5)),
        s = r(n(7)),
        u = r(n(10)),
        c = n(11),
        l = r(n(12)),
        f = n(13),
        p = n(14);

    function d(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var n, r = (0, u.default)(t);
            if (e) {
                var o = (0, u.default)(this).constructor;
                n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments);
            return (0, s.default)(this, n)
        }
    }
    var y = f.constants.renderModes.EDIT,
        h = function (t) {
            (0, a.default)(n, t);
            var e = d(n);

            function n() {
                var t;
                (0, o.default)(this, n);
                for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                return (t = e.call.apply(e, [this].concat(i))).calculateBestFit = function () {
                    var e = t.props.prioritizeDefault;
                    if (t._container && t._target)
                        if (t._target.hasAttribute("data-font-scaled")) t.reset();
                        else {
                            var n = t.props.renderMode,
                                r = t.getScalers();
                            if (t._container.clientWidth && r.length) {
                                var o = t._container.style.width || "";
                                t._container.style.width = "100%", t.initScalers(r);
                                var i = t.getBestFit(r);
                                t.hideScalers(r), t._container.style.width = o;
                                var a = t.getComputedPropertyValue(i, "font-size");
                                if (a && a !== t._lastSize) {
                                    if (e) {
                                        var s = t.getComputedPropertyValue(t._target, "font-size");
                                        if (parseInt(a, 10) >= parseInt(s, 10)) return
                                    }
                                    t._lastSize = a, n === y ? (t._styleElement || (t._styleElement = document.createElement("style"), document.head.appendChild(t._styleElement)), t._styleElement.textContent = "#".concat(t._target.id, " { font-size: ").concat(a, " !important; }")) : t._target.style.fontSize = a
                                }
                            }
                        }
                }, t.fits = function (e) {
                    var n = t.props.maxLines;
                    return t.getContentWidth(e) <= t._container.clientWidth && t.getNumLines(e) <= n
                }, t.getBestFit = function (e) {
                    return e.find(t.fits) || (0, p.last)(e)
                }, t
            }
            return (0, i.default)(n, [{
                key: "reset",
                value: function () {
                    this._lastSize && (this._target.style.fontSize = "", this._lastSize = "", this._styleElement && (this._styleElement.parentNode.removeChild(this._styleElement), delete this._styleElement))
                }
            }, {
                key: "componentDidMount",
                value: function () {
                    var t = this;
                    this._container = this.getContainer(), this._target = this.getTarget(), this.calculateBestFit(), window.ResizeObserver ? (this._observer = new ResizeObserver(function () {
                        window.requestAnimationFrame(t.calculateBestFit)
                    }), this._observer.observe(this._container)) : window.addEventListener("resize", this.calculateBestFit)
                }
            }, {
                key: "componentDidUpdate",
                value: function () {
                    this.reset(), this.calculateBestFit()
                }
            }, {
                key: "componentWillUnmount",
                value: function () {
                    this._observer ? this._observer.disconnect() : window.removeEventListener("resize", this.calculateBestFit), this._styleElement && this._styleElement.parentNode.removeChild(this._styleElement)
                }
            }, {
                key: "getContainer",
                value: function () {
                    var t = this.props.containerId;
                    return document.getElementById(t)
                }
            }, {
                key: "getTarget",
                value: function () {
                    var t = this.props.targetId;
                    return document.getElementById(t)
                }
            }, {
                key: "getScalers",
                value: function () {
                    var t = this.props,
                        e = t.containerId,
                        n = t.fontSizes;
                    return Array.prototype.slice.call(this._container.querySelectorAll('[data-scaler-id="scaler-'.concat(e, '"]'))).sort(function (t, e) {
                        return n.indexOf(t.getAttribute("data-size")) - n.indexOf(e.getAttribute("data-size"))
                    })
                }
            }, {
                key: "getContentWidth",
                value: function (t) {
                    var e = parseInt(this.getComputedPropertyValue(t, "padding-left") || 0, 10),
                        n = parseInt(this.getComputedPropertyValue(t, "padding-right") || 0, 10);
                    return t.scrollWidth + e + n
                }
            }, {
                key: "getComputedPropertyValue",
                value: function (t, e) {
                    return document.defaultView.getComputedStyle(t).getPropertyValue(e)
                }
            }, {
                key: "getNumLines",
                value: function (t) {
                    var e = t.offsetHeight,
                        n = parseInt(this.getComputedPropertyValue(t, "line-height"), 10) || 1;
                    return Math.floor(e / n)
                }
            }, {
                key: "initScalers",
                value: function (t) {
                    var e = this;
                    t.forEach(function (t) {
                        t.style.display = "inline-block", t.style.maxWidth = "".concat(e._container.clientWidth, "px")
                    })
                }
            }, {
                key: "hideScalers",
                value: function (t) {
                    t.forEach(function (t) {
                        t.style.display = "none", t.style.maxWidth = ""
                    })
                }
            }, {
                key: "render",
                value: function () {
                    return null
                }
            }]), n
        }(c.PureComponent);
    h.propTypes = {
        renderMode: l.default.oneOf(Object.values(f.constants.renderModes)),
        containerId: l.default.string.isRequired,
        targetId: l.default.string.isRequired,
        fontSizes: l.default.arrayOf(l.default.oneOf(Object.values(f.constants.fontSizes))),
        maxLines: l.default.number,
        prioritizeDefault: l.default.bool
    }, h.defaultProps = {
        maxLines: 3
    };
    var v = h;
    e.default = v, t.exports = e.default
}, function (t, e) {
    t.exports = function (t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}, function (t, e) {
    t.exports = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
}, function (t, e) {
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }
    t.exports = function (t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), t
    }
}, function (t, e, n) {
    var r = n(6);
    t.exports = function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && r(t, e)
    }
}, function (t, e) {
    function n(e, r) {
        return t.exports = n = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        }, n(e, r)
    }
    t.exports = n
}, function (t, e, n) {
    var r = n(8),
        o = n(9);
    t.exports = function (t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? o(t) : e
    }
}, function (t, e) {
    function n(e) {
        "@babel/helpers - typeof";
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function (t) {
            return typeof t
        } : t.exports = n = function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, n(e)
    }
    t.exports = n
}, function (t, e) {
    t.exports = function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
}, function (t, e) {
    function n(e) {
        return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, n(e)
    }
    t.exports = n
}, function (t, e) {
    t.exports = React
}, function (t, e) {
    t.exports = PropTypes
}, function (t, e) {
    t.exports = Core
}, function (t, e) {
    t.exports = _
}]);