var radpack = function () {
    "use strict";
    var e = e => e.load ? e.load : e.load = e.url ? new Promise((r, t) => {
            e.resolve = r, e.reject = t;
            const s = document,
                n = s.createElement("script");
            n.crossOrigin = "Anonymous", n.addEventListener("error", t), n.src = e.url, s.head.appendChild(n)
        }) : Promise.resolve(),
        r = e => {
            const [r, t = 0, s = 0, n = ""] = e, o = `${r}.${t}.${s}${n}`;
            return {
                major: r,
                minor: t,
                patch: s,
                release: n,
                version: o,
                array: e,
                short: n ? o : e.join("."),
                tilde: `~${e.slice(0,2).join(".")}`,
                caret: `^${r}`
            }
        },
        t = ({
            major: e,
            minor: r,
            patch: t,
            release: s
        }) => {
            if (s) return [e, r, t, s];
            const n = [e];
            return t ? (n.push(r), n.push(t)) : r && n.push(r), n
        };
    const s = /^([~^]|)(\d+)(?:\.(\d+))?(?:\.(\d+))?([^+]+|)/;
    var n = ({
            exp: e,
            tmp: n
        }, o) => {
            let a = e.get(o);
            if (!a) {
                const {
                    id: i,
                    name: c,
                    path: l,
                    version: d
                } = ((e, r) => {
                    const t = "$e:" + e;
                    let s = r && r.get(t);
                    if (!s) {
                        const n = e.split("/"),
                            o = n[0].startsWith("@") ? n.shift() + "/" : "",
                            [a, i] = (n.shift() || "").split("@"),
                            c = o + a,
                            l = n.join("/") || "index",
                            d = "index" === l ? "" : `/${l}`;
                        s = {
                            id: c + d,
                            version: i,
                            name: c,
                            entry: l,
                            path: d
                        }, r && r.set(t, s)
                    }
                    return s
                })(o, n);
                if (d) try {
                    let h = [];
                    const {
                        prefix: u,
                        release: f,
                        short: p,
                        tilde: v,
                        caret: m
                    } = ((e, n) => {
                        const o = "$v:" + e;
                        let a = n && n.get(o);
                        if (!a) {
                            const [, i, c, l = 0, d = 0, h] = e.match(s);
                            a = {
                                prefix: i,
                                ...r(t({
                                    major: +c,
                                    minor: +l,
                                    patch: +d,
                                    release: h
                                }))
                            }, n && n.set(o, a)
                        }
                        return a
                    })(d, n), g = e => `${c}@${e}${l}`, y = g(p);
                    if (f) h = [y];
                    else {
                        const e = g(v),
                            r = g(m);
                        u ? "~" === u ? h = [e, y, r, i] : "^" === u && (h = [r, e, y, i]) : h = [y, e, r, i]
                    }
                    let $;
                    for ($ of h)
                        if (a = e.get($)) break;
                    a && console.warn(`resolve called with '${o}', change to '${$}'`)
                } catch {} else a = e.get(i), a && console.warn(`resolve called with '${o}', change to '${i}'`)
            }
            return a
        },
        o = ({
            cache: e
        }, r, t = !0) => {
            const {
                id: s,
                url: n
            } = r, o = n || s;
            let a = e.get(o);
            return t && !a && (a = {
                url: n
            }, e.set(o, a)), a
        };

    function a(e, r) {
        if (Array.isArray(r)) return Promise.all(r.map(r => a(e, r)));
        const t = n(e, r);
        if (!t) return Promise.reject(new Error(`Unable to resolve ${r}`));
        const s = o(e, t);
        return (s.load ? s.load : e.loader(e, t, s)).then(() => s.result || {})
    }
    var i = (e, r) => {
            const t = n(e, r);
            if (!t) throw new Error(`Unknown export ${r}`);
            return (o(e, t, !1) || {}).result
        },
        c = (e, r, t) => {
            const s = n(e, r);
            if (!s) throw new Error(`Unknown export ${r}`);
            const a = o(e, s);
            a.result = t, a.load || (a.load = Promise.resolve())
        };
    const l = (e, r, t) => {
        const s = n(e, r);
        if (!s) throw new Error(`Unable to resolve ${r}`);
        const {
            id: o = r,
            url: a = !1,
            data: {
                statics: i = []
            }
        } = s;
        t.has(o) || (t.set(o, a), i.forEach(r => {
            l(e, r, t)
        }))
    };
    var d = (e, r) => {
        const t = new Map;
        return [].concat(r || Array.from(e.exp.keys())).forEach(r => l(e, r, t)), Array.from(t.values()).filter(Boolean)
    };

    function h(e, r = [], t, s) {
        const n = {},
            o = this(r.filter(e => "require" !== e && "exports" !== e && "radpack" !== e));
        t && o.then(() => {
            t(...r.map(e => {
                switch (e) {
                    case "require":
                        return this.require;
                    case "exports":
                        return n;
                    case "radpack":
                        return this;
                    default:
                        return this.static(e)
                }
            }))
        }), s && o.catch(s)
    }

    function u(e, r, t = [], s, a) {
        const i = n(e, r);
        if (!i) return void(a && a(new Error(`Unable to resolve ${r}`)));
        const c = o(e, i, !1) || {},
            l = e.define = Promise.all([e.define, new Promise((e, n) => {
                this.require(["exports"].concat(t), (t, ...n) => {
                    s && s(...n), this.set(r, t), e(), c.resolve && c.resolve()
                }, e => {
                    a && a(e), n(e), c.reject && c.reject(e)
                })
            })]).then(() => {
                l === e.define && (e.define = Promise.resolve())
            })
    }
    const f = ({
        fetch: e,
        loader: r,
        register: t,
        hydrate: s,
        dehydrate: n,
        exp: o = new Map,
        cache: l = new Map,
        tmp: p = new Map,
        registers: v = []
    }) => {
        const m = {
                fetch: e,
                loader: r,
                exp: o,
                cache: l,
                tmp: p,
                registers: v,
                register: Promise.resolve(),
                define: Promise.resolve()
            },
            g = e => g.register().then(() => a(m, e));
        return m.loader = r.bind(g), g.create = o => f({
            fetch: e,
            loader: r,
            register: t,
            hydrate: s,
            dehydrate: n,
            ...o
        }), g.clone = () => g.register().then(() => g.create({
            exp: new Map(o),
            cache: new Map(l),
            tmp: new Map(p),
            registers: [...v]
        })), g.register = t.bind(g, m), g.hydrate = s && s.bind(g, m), g.dehydrate = n && (e => g.register().then(() => n.call(g, m, e))), g.require = h.bind(g, m), g.define = u.bind(g, m), g.static = i.bind(g, m), g.set = c.bind(g, m), g.getDepsSync = d.bind(g, m), g.getDeps = e => g.register().then(() => g.getDeps(e)), g
    };
    const p = /\${\s*(\w+)\s*}/g;
    var v = (e, r) => "index" === r ? e : `${e}/${r}`,
        m = {
            url: "${baseUrl}/${file}"
        },
        g = (e, {
            resolveEntry: r,
            resolveVersion: t
        }) => Object.keys(e.exports).reduce((s, n) => {
            const o = e.exports[n],
                a = o.v.map(e => t(e)),
                i = o.d.slice(0),
                c = i.findIndex(e => !Array.isArray(e)),
                l = i.slice(0, ~c ? c : void 0),
                d = {
                    vars: {
                        ...m,
                        ...e.vars
                    },
                    name: n
                };
            return l.forEach(([e], t) => {
                i[t] = r(e, d)
            }), l.forEach(([e, r]) => {
                const t = ((e, r, {
                    name: t,
                    vars: s
                }) => ({
                    id: v(t, e),
                    vars: s,
                    name: t,
                    entry: e,
                    versions: r
                }))(e, r.reduce((e, {
                    v: r,
                    u: t = null,
                    f: s = null,
                    s: n = [],
                    d: o = []
                }) => {
                    const c = n.map(e => i[e]),
                        l = o.map(e => i[e]);
                    return [].concat(r).forEach(r => {
                        e.push(((e, {
                            version: r
                        }) => ({
                            version: r,
                            statics: [],
                            dynamics: [],
                            ...e
                        }))({
                            url: t,
                            file: s,
                            statics: c,
                            dynamics: l
                        }, {
                            version: a[r]
                        }))
                    }), e
                }, []), d);
                s.push(t)
            }), s
        }, []);
    const y = (e, {
            name: r
        }) => v(r, e),
        $ = e => {
            const {
                version: t,
                release: s,
                short: n,
                caret: o,
                tilde: a
            } = r(e);
            return {
                version: t,
                versions: s ? [n] : [n, o, a]
            }
        };
    var w = (e, r) => {
        if (!r || !r.exports) return;
        const {
            register: t = !0
        } = r;
        "_index" in r && (e.registers[r._index] = r), (({
            exp: e,
            cache: r
        }, t) => {
            const s = {};
            Object.keys(t).forEach(r => {
                const n = e.get(r);
                !n || n.url in s || (s[n.url] = !0);
                const o = t[r];
                s[o.url] = !1, e.set(r, o)
            }), Object.keys(s).forEach(e => {
                s[e] && r.delete(e)
            })
        })(e, g(r, {
            resolveEntry: y,
            resolveVersion: $
        }).reduce((e, {
            vars: r,
            name: s,
            entry: n,
            versions: o
        }) => {
            const a = {
                    ...r,
                    name: s,
                    entry: n
                },
                i = v("", n);
            return o.forEach(n => {
                const {
                    version: o,
                    file: c
                } = n;
                let l = n.url || c && r.url;
                l = !!l && ((e, r = {}) => e.replace(p, (e, t) => r[t] || ""))(l, {
                    ...a,
                    file: c
                });
                const d = {
                    url: l,
                    data: n,
                    internal: !t
                };
                let h = !1;
                c && (h = !0, e[d.id = `${s}/${c}`] = d), [s + i].concat(o.versions.map(e => `${s}@${e}${i}`)).forEach(r => {
                    r in e || (e[r] = h ? d : {
                        id: r,
                        ...d
                    })
                })
            }), e
        }, {}))
    };
    const x = ["register", "_index"],
        b = ["vars", "exports"];
    var E = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : Function("return this")();
    const P = f({
        fetch: E.fetch,
        loader: (r, t, s) => {
            const {
                data: {
                    statics: n = []
                }
            } = t;
            return Promise.all([e(s), a(r, n)])
        },
        register: (e, r) => {
            if ((r = [].concat(r || [])).length) {
                const t = Promise.all(r.map(r => {
                    const t = "string" == typeof r ? {
                            url: r
                        } : r,
                        {
                            url: s
                        } = t;
                    if (s) {
                        const r = s.slice(0, s.lastIndexOf("/"));
                        return ((e, r, t = !1) => {
                            const {
                                fetch: s
                            } = e, n = o(e, {
                                url: r
                            }), a = t ? "json" : "text";
                            return n.fetch ? n.fetch : n.fetch = s(r).then(e => {
                                if (!e.ok) throw new Error(`${r} returned ${e.status}`);
                                return e[a]()
                            }).then(e => n[a] = e)
                        })(e, s, !0).then(e => ((e, r) => [].concat(r).map(r => (e = e || {}, r = r || {}, x.forEach(t => {
                            r[t] = null != e[t] ? e[t] : r[t]
                        }), b.forEach(t => {
                            r[t] = Object.assign(r[t] || {}, e[t])
                        }), r)))(t, e).map(e => (e.vars.baseUrl = e.vars.baseUrl || r, e))).catch(e => (console.error("radpack.register.error:", e.message), !1))
                    }
                    return Promise.resolve(t).then(e => [].concat(e))
                }));
                e.register = e.register.then(() => Promise.all([t, Promise.all(Array.from(e.cache.values()).map(e => e.load))]).then(([r]) => {
                    r.forEach(r => [].concat(r || []).forEach(r => w(e, r)))
                }))
            }
            const t = e.register;
            return Promise.resolve(t).then(() => {
                e.register === t && (e.register = Promise.resolve())
            })
        },
        hydrate: function (e, r) {
            return this.register(r || [])
        }
    });
    return E.define = P.define, P
}();