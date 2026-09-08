(() => {
  "use strict";
  var e = {
      540: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return (e.setAttributes(n, e.attributes), e.insert(n, e.options), n);
        };
      },
      1113: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
      1601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      4503: (e, n, t) => {
        t.d(n, {
          A: () => i,
        });
        var r = t(1601),
          o = t.n(r),
          a = t(6314),
          c = t.n(a)()(o());
        c.push([
          e.id,
          "#error-screen {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 10px;\n\tbox-sizing: border-box;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tz-index: 1000;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: var(--surface-color);\n}\n\n#error-screen > .title {\n\tfont-size: 28px;\n\tcolor: var(--text-color);\n}\n\n#error-screen > .version, #error-screen > .platform, #error-screen > .user-agent {\n\tfont-size: 20px;\n\tcolor: var(--text-color);\n\topacity: 0.5;\n}\n\n#error-screen > textarea {\n\tmargin: 10px 0;\n\theight: 100%;\n\tflex-grow: 1;\n\tbackground-color: var(--surface-tertiary-color);\n\tborder: none;\n\tresize: none;\n\tcolor: var(--text-color);\n\tword-break: break-word;\n\tfont-size: 20px;\n}\n#error-screen > textarea:focus-visible {\n\toutline: none;\n}\n\n#error-screen > button {\n\talign-self: flex-start;\n}\n",
          "",
        ]);
        const i = c;
      },
      5056: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      5072: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, c = [], i = 0; i < e.length; i++) {
            var s = e[i],
              l = r.base ? s[0] + r.base : s[0],
              d = a[l] || 0,
              u = "".concat(l, " ").concat(d);
            a[l] = d + 1;
            var p = t(u),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) (n[p].references++, n[p].updater(f));
            else {
              var m = o(f, r);
              ((r.byIndex = i),
                n.splice(i, 0, {
                  identifier: u,
                  updater: m,
                  references: 1,
                }));
            }
            c.push(u);
          }
          return c;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          t.update(e);
          return function (n) {
            if (n) {
              if (
                n.css === e.css &&
                n.media === e.media &&
                n.sourceMap === e.sourceMap &&
                n.supports === e.supports &&
                n.layer === e.layer
              )
                return;
              t.update((e = n));
            } else t.remove();
          };
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var c = 0; c < a.length; c++) {
              var i = t(a[c]);
              n[i].references--;
            }
            for (var s = r(e, o), l = 0; l < a.length; l++) {
              var d = t(a[l]);
              0 === n[d].references && (n[d].updater(), n.splice(d, 1));
            }
            a = s;
          };
        };
      },
      6314: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {",
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var c = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var s = this[i][0];
                  null != s && (c[s] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var d = [].concat(e[l]);
                (r && c[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  n.push(d));
              }
            }),
            n
          );
        };
      },
      7659: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
        };
      },
      7825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return {
              update: function () {},
              remove: function () {},
            };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                (t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {")));
                var o = void 0 !== t.layer;
                (o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}"));
                var a = t.sourceMap;
                (a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  n.styleTagTransform(r, e, n.options));
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = {
      id: r,
      exports: {},
    });
    return (e[r](a, a.exports, t), a.exports);
  }
  ((t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return (
      t.d(n, {
        a: n,
      }),
      n
    );
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, {
            enumerable: !0,
            get: n[r],
          });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.nc = void 0));
  var r = t(5072),
    o = t.n(r),
    a = t(7825),
    c = t.n(a),
    i = t(7659),
    s = t.n(i),
    l = t(5056),
    d = t.n(l),
    u = t(540),
    p = t.n(u),
    f = t(1113),
    m = t.n(f),
    v = t(4503),
    h = {};
  ((h.styleTagTransform = m()),
    (h.setAttributes = d()),
    (h.insert = s().bind(null, "head")),
    (h.domAPI = c()),
    (h.insertStyleElement = p()));
  o()(v.A, h);
  v.A && v.A.locals && v.A.locals;
  let x = null,
    g = !1;
  function y(e) {
    if (!g) {
      if (null == x) {
        const e = document.createElement("div");
        ((e.id = "error-screen"), document.body.appendChild(e));
        const n = document.createElement("div");
        ((n.className = "title"),
          (n.textContent = "Oh no! PolyTrack encountered an unexpected error!"),
          e.appendChild(n));
        const t = document.createElement("div");
        ((t.className = "version"),
          (t.textContent = "Version: 0.6.0"),
          null != window.polytrackModConfiguration?.modName &&
            (t.textContent += " (Modded)"),
          e.appendChild(t));
        const r = document.createElement("div");
        ((r.className = "platform"),
          (r.textContent =
            "Platform: electron (" + window.location.hostname + ")"),
          e.appendChild(r));
        const o = document.createElement("div");
        ((o.className = "user-agent"),
          (o.textContent = "User Agent: " + navigator.userAgent),
          e.appendChild(o));
        const a = document.createElement("textarea");
        ((a.readOnly = !0), e.appendChild(a));
        const c = document.createElement("button");
        ((c.className = "button"),
          (c.textContent = "Close"),
          c.addEventListener("click", () => {
            (document.body.removeChild(e), (x = null), (g = !0));
          }),
          e.appendChild(c),
          (x = {
            element: e,
            textArea: a,
          }));
      }
      x.textArea.value = e + "\n" + x.textArea.value;
    }
  }
  (window.addEventListener("error", (e) => {
    y(
      `${e.message}\nSource: ${e.filename}\nLine: ${e.lineno.toString()}\nColumn: ${e.colno.toString()}\n`,
    );
  }),
    window.addEventListener("unhandledrejection", (e) => {
      let n;
      (e.reason instanceof Error
        ? ((n = `Unhandled Rejection:\n${e.reason.message}`),
          null != e.reason.stack && (n += `\nStack:\n${e.reason.stack}`))
        : (n = `Unhandled Rejection:\n${String(e.reason)}`),
        y(n));
    }));
})();
