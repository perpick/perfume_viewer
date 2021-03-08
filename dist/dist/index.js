var As = Object.defineProperty,
  Bs = (e, n) => {
    for (var t in n) As(e, t, { get: n[t], enumerable: !0 });
  },
  Gr = {};
Bs(Gr, { MODE: () => Hs, NODE_ENV: () => Ws, SSR: () => $s });
var Hs = "production",
  Ws = "production",
  $s = !1;
function Et(e, n, t) {
  return (
    (t = {
      path: n,
      exports: {},
      require: function (r, l) {
        return Qs(r, l ?? t.path);
      },
    }),
    e(t, t.exports),
    t.exports
  );
}
function Qs() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var Jo = Object.getOwnPropertySymbols,
  Ys = Object.prototype.hasOwnProperty,
  Zs = Object.prototype.propertyIsEnumerable;
function Ks(e) {
  if (e == null) throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e);
}
function Xs() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var n = {}, t = 0; t < 10; t++) n["_" + String.fromCharCode(t)] = t;
    var r = Object.getOwnPropertyNames(n).map(function (a) {
      return n[a];
    });
    if (r.join("") !== "0123456789") return !1;
    var l = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (a) {
        l[a] = a;
      }),
      Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst"
    );
  } catch (a) {
    return !1;
  }
}
var U = Xs()
    ? Object.assign
    : function (e, n) {
        for (var t, r = Ks(e), l, a = 1; a < arguments.length; a++) {
          t = Object(arguments[a]);
          for (var o in t) Ys.call(t, o) && (r[o] = t[o]);
          if (Jo) {
            l = Jo(t);
            for (var u = 0; u < l.length; u++) Zs.call(t, l[u]) && (r[l[u]] = t[l[u]]);
          }
        }
        return r;
      },
  Gs = Et(function (e, n) {
    var t = 60103,
      r = 60106;
    (n.Fragment = 60107), (n.StrictMode = 60108), (n.Profiler = 60114);
    var l = 60109,
      a = 60110,
      o = 60112;
    n.Suspense = 60113;
    var u = 60115,
      i = 60116;
    if (typeof Symbol == "function" && Symbol.for) {
      var d = Symbol.for;
      (t = d("react.element")),
        (r = d("react.portal")),
        (n.Fragment = d("react.fragment")),
        (n.StrictMode = d("react.strict_mode")),
        (n.Profiler = d("react.profiler")),
        (l = d("react.provider")),
        (a = d("react.context")),
        (o = d("react.forward_ref")),
        (n.Suspense = d("react.suspense")),
        (u = d("react.memo")),
        (i = d("react.lazy"));
    }
    var w = typeof Symbol == "function" && Symbol.iterator;
    function z(p) {
      return p === null || typeof p != "object"
        ? null
        : ((p = (w && p[w]) || p["@@iterator"]), typeof p == "function" ? p : null);
    }
    function v(p) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + p, D = 1; D < arguments.length; D++)
        b += "&args[]=" + encodeURIComponent(arguments[D]);
      return (
        "Minified React error #" +
        p +
        "; visit " +
        b +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var S = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      L = {};
    function x(p, b, D) {
      (this.props = p), (this.context = b), (this.refs = L), (this.updater = D || S);
    }
    (x.prototype.isReactComponent = {}),
      (x.prototype.setState = function (p, b) {
        if (typeof p != "object" && typeof p != "function" && p != null) throw Error(v(85));
        this.updater.enqueueSetState(this, p, b, "setState");
      }),
      (x.prototype.forceUpdate = function (p) {
        this.updater.enqueueForceUpdate(this, p, "forceUpdate");
      });
    function f() {}
    f.prototype = x.prototype;
    function s(p, b, D) {
      (this.props = p), (this.context = b), (this.refs = L), (this.updater = D || S);
    }
    var c = (s.prototype = new f());
    (c.constructor = s), U(c, x.prototype), (c.isPureReactComponent = !0);
    var h = { current: null },
      m = Object.prototype.hasOwnProperty,
      N = { key: !0, ref: !0, __self: !0, __source: !0 };
    function k(p, b, D) {
      var V,
        y = {},
        E = null,
        P = null;
      if (b != null)
        for (V in (b.ref !== void 0 && (P = b.ref), b.key !== void 0 && (E = "" + b.key), b))
          m.call(b, V) && !N.hasOwnProperty(V) && (y[V] = b[V]);
      var O = arguments.length - 2;
      if (O === 1) y.children = D;
      else if (1 < O) {
        for (var I = Array(O), W = 0; W < O; W++) I[W] = arguments[W + 2];
        y.children = I;
      }
      if (p && p.defaultProps) for (V in ((O = p.defaultProps), O)) y[V] === void 0 && (y[V] = O[V]);
      return { $$typeof: t, type: p, key: E, ref: P, props: y, _owner: h.current };
    }
    function _(p, b) {
      return { $$typeof: t, type: p.type, key: b, ref: p.ref, props: p.props, _owner: p._owner };
    }
    function M(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function T(p) {
      var b = { "=": "=0", ":": "=2" };
      return (
        "$" +
        p.replace(/[=:]/g, function (D) {
          return b[D];
        })
      );
    }
    var j = /\/+/g;
    function ae(p, b) {
      return typeof p == "object" && p !== null && p.key != null ? T("" + p.key) : b.toString(36);
    }
    function gt(p, b, D, V, y) {
      var E = typeof p;
      (E === "undefined" || E === "boolean") && (p = null);
      var P = !1;
      if (p === null) P = !0;
      else
        switch (E) {
          case "string":
          case "number":
            P = !0;
            break;
          case "object":
            switch (p.$$typeof) {
              case t:
              case r:
                P = !0;
            }
        }
      if (P)
        return (
          (P = p),
          (y = y(P)),
          (p = V === "" ? "." + ae(P, 0) : V),
          Array.isArray(y)
            ? ((D = ""),
              p != null && (D = p.replace(j, "$&/") + "/"),
              gt(y, b, D, "", function (W) {
                return W;
              }))
            : y != null &&
              (M(y) &&
                (y = _(y, D + (!y.key || (P && P.key === y.key) ? "" : ("" + y.key).replace(j, "$&/") + "/") + p)),
              b.push(y)),
          1
        );
      if (((P = 0), (V = V === "" ? "." : V + ":"), Array.isArray(p)))
        for (var O = 0; O < p.length; O++) {
          E = p[O];
          var I = V + ae(E, O);
          P += gt(E, b, D, I, y);
        }
      else if (((I = z(p)), typeof I == "function"))
        for (p = I.call(p), O = 0; !(E = p.next()).done; )
          (E = E.value), (I = V + ae(E, O++)), (P += gt(E, b, D, I, y));
      else if (E === "object")
        throw (
          ((b = "" + p),
          Error(v(31, b === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : b)))
        );
      return P;
    }
    function G(p, b, D) {
      if (p == null) return p;
      var V = [],
        y = 0;
      return (
        gt(p, V, "", "", function (E) {
          return b.call(D, E, y++);
        }),
        V
      );
    }
    function q(p) {
      if (p._status === -1) {
        var b = p._result;
        (b = b()),
          (p._status = 0),
          (p._result = b),
          b.then(
            function (D) {
              p._status === 0 && ((D = D.default), (p._status = 1), (p._result = D));
            },
            function (D) {
              p._status === 0 && ((p._status = 2), (p._result = D));
            },
          );
      }
      if (p._status === 1) return p._result;
      throw p._result;
    }
    var nt = { current: null };
    function Z() {
      var p = nt.current;
      if (p === null) throw Error(v(321));
      return p;
    }
    var tt = {
      ReactCurrentDispatcher: nt,
      ReactCurrentBatchConfig: { transition: 0 },
      ReactCurrentOwner: h,
      IsSomeRendererActing: { current: !1 },
      assign: U,
    };
    (n.Children = {
      map: G,
      forEach: function (p, b, D) {
        G(
          p,
          function () {
            b.apply(this, arguments);
          },
          D,
        );
      },
      count: function (p) {
        var b = 0;
        return (
          G(p, function () {
            b++;
          }),
          b
        );
      },
      toArray: function (p) {
        return (
          G(p, function (b) {
            return b;
          }) || []
        );
      },
      only: function (p) {
        if (!M(p)) throw Error(v(143));
        return p;
      },
    }),
      (n.Component = x),
      (n.PureComponent = s),
      (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tt),
      (n.cloneElement = function (p, b, D) {
        if (p == null) throw Error(v(267, p));
        var V = U({}, p.props),
          y = p.key,
          E = p.ref,
          P = p._owner;
        if (b != null) {
          if (
            (b.ref !== void 0 && ((E = b.ref), (P = h.current)),
            b.key !== void 0 && (y = "" + b.key),
            p.type && p.type.defaultProps)
          )
            var O = p.type.defaultProps;
          for (I in b) m.call(b, I) && !N.hasOwnProperty(I) && (V[I] = b[I] === void 0 && O !== void 0 ? O[I] : b[I]);
        }
        var I = arguments.length - 2;
        if (I === 1) V.children = D;
        else if (1 < I) {
          O = Array(I);
          for (var W = 0; W < I; W++) O[W] = arguments[W + 2];
          V.children = O;
        }
        return { $$typeof: t, type: p.type, key: y, ref: E, props: V, _owner: P };
      }),
      (n.createContext = function (p, b) {
        return (
          b === void 0 && (b = null),
          (p = {
            $$typeof: a,
            _calculateChangedBits: b,
            _currentValue: p,
            _currentValue2: p,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (p.Provider = { $$typeof: l, _context: p }),
          (p.Consumer = p)
        );
      }),
      (n.createElement = k),
      (n.createFactory = function (p) {
        var b = k.bind(null, p);
        return (b.type = p), b;
      }),
      (n.createRef = function () {
        return { current: null };
      }),
      (n.forwardRef = function (p) {
        return { $$typeof: o, render: p };
      }),
      (n.isValidElement = M),
      (n.lazy = function (p) {
        return { $$typeof: i, _payload: { _status: -1, _result: p }, _init: q };
      }),
      (n.memo = function (p, b) {
        return { $$typeof: u, type: p, compare: b === void 0 ? null : b };
      }),
      (n.useCallback = function (p, b) {
        return Z().useCallback(p, b);
      }),
      (n.useContext = function (p, b) {
        return Z().useContext(p, b);
      }),
      (n.useDebugValue = function () {}),
      (n.useEffect = function (p, b) {
        return Z().useEffect(p, b);
      }),
      (n.useImperativeHandle = function (p, b, D) {
        return Z().useImperativeHandle(p, b, D);
      }),
      (n.useLayoutEffect = function (p, b) {
        return Z().useLayoutEffect(p, b);
      }),
      (n.useMemo = function (p, b) {
        return Z().useMemo(p, b);
      }),
      (n.useReducer = function (p, b, D) {
        return Z().useReducer(p, b, D);
      }),
      (n.useRef = function (p) {
        return Z().useRef(p);
      }),
      (n.useState = function (p) {
        return Z().useState(p);
      }),
      (n.version = "17.0.1");
  }),
  F = Et(function (e) {
    e.exports = Gs;
  }),
  Js = Et(function (e, n) {
    var t, r, l, a;
    if (typeof performance == "object" && typeof performance.now == "function") {
      var o = performance;
      n.unstable_now = function () {
        return o.now();
      };
    } else {
      var u = Date,
        i = u.now();
      n.unstable_now = function () {
        return u.now() - i;
      };
    }
    if (typeof window == "undefined" || typeof MessageChannel != "function") {
      var d = null,
        w = null,
        z = function () {
          if (d !== null)
            try {
              var y = n.unstable_now();
              d(!0, y), (d = null);
            } catch (E) {
              throw (setTimeout(z, 0), E);
            }
        };
      (t = function (y) {
        d !== null ? setTimeout(t, 0, y) : ((d = y), setTimeout(z, 0));
      }),
        (r = function (y, E) {
          w = setTimeout(y, E);
        }),
        (l = function () {
          clearTimeout(w);
        }),
        (n.unstable_shouldYield = function () {
          return !1;
        }),
        (a = n.unstable_forceFrameRate = function () {});
    } else {
      var v = window.setTimeout,
        S = window.clearTimeout;
      if (typeof console != "undefined") {
        var L = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame != "function" &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
          ),
          typeof L != "function" &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
            );
      }
      var x = !1,
        f = null,
        s = -1,
        c = 5,
        h = 0;
      (n.unstable_shouldYield = function () {
        return n.unstable_now() >= h;
      }),
        (a = function () {}),
        (n.unstable_forceFrameRate = function (y) {
          0 > y || 125 < y
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
              )
            : (c = 0 < y ? Math.floor(1e3 / y) : 5);
        });
      var m = new MessageChannel(),
        N = m.port2;
      (m.port1.onmessage = function () {
        if (f !== null) {
          var y = n.unstable_now();
          h = y + c;
          try {
            f(!0, y) ? N.postMessage(null) : ((x = !1), (f = null));
          } catch (E) {
            throw (N.postMessage(null), E);
          }
        } else x = !1;
      }),
        (t = function (y) {
          (f = y), x || ((x = !0), N.postMessage(null));
        }),
        (r = function (y, E) {
          s = v(function () {
            y(n.unstable_now());
          }, E);
        }),
        (l = function () {
          S(s), (s = -1);
        });
    }
    function k(y, E) {
      var P = y.length;
      y.push(E);
      e: for (;;) {
        var O = (P - 1) >>> 1,
          I = y[O];
        if (I !== void 0 && 0 < T(I, E)) (y[O] = E), (y[P] = I), (P = O);
        else break e;
      }
    }
    function _(y) {
      return (y = y[0]), y === void 0 ? null : y;
    }
    function M(y) {
      var E = y[0];
      if (E !== void 0) {
        var P = y.pop();
        if (P !== E) {
          y[0] = P;
          e: for (var O = 0, I = y.length; O < I; ) {
            var W = 2 * (O + 1) - 1,
              rt = y[W],
              Gt = W + 1,
              wt = y[Gt];
            if (rt !== void 0 && 0 > T(rt, P))
              wt !== void 0 && 0 > T(wt, rt)
                ? ((y[O] = wt), (y[Gt] = P), (O = Gt))
                : ((y[O] = rt), (y[W] = P), (O = W));
            else if (wt !== void 0 && 0 > T(wt, P)) (y[O] = wt), (y[Gt] = P), (O = Gt);
            else break e;
          }
        }
        return E;
      }
      return null;
    }
    function T(y, E) {
      var P = y.sortIndex - E.sortIndex;
      return P !== 0 ? P : y.id - E.id;
    }
    var j = [],
      ae = [],
      gt = 1,
      G = null,
      q = 3,
      nt = !1,
      Z = !1,
      tt = !1;
    function p(y) {
      for (var E = _(ae); E !== null; ) {
        if (E.callback === null) M(ae);
        else if (E.startTime <= y) M(ae), (E.sortIndex = E.expirationTime), k(j, E);
        else break;
        E = _(ae);
      }
    }
    function b(y) {
      if (((tt = !1), p(y), !Z))
        if (_(j) !== null) (Z = !0), t(D);
        else {
          var E = _(ae);
          E !== null && r(b, E.startTime - y);
        }
    }
    function D(y, E) {
      (Z = !1), tt && ((tt = !1), l()), (nt = !0);
      var P = q;
      try {
        for (p(E), G = _(j); G !== null && (!(G.expirationTime > E) || (y && !n.unstable_shouldYield())); ) {
          var O = G.callback;
          if (typeof O == "function") {
            (G.callback = null), (q = G.priorityLevel);
            var I = O(G.expirationTime <= E);
            (E = n.unstable_now()), typeof I == "function" ? (G.callback = I) : G === _(j) && M(j), p(E);
          } else M(j);
          G = _(j);
        }
        if (G !== null) var W = !0;
        else {
          var rt = _(ae);
          rt !== null && r(b, rt.startTime - E), (W = !1);
        }
        return W;
      } finally {
        (G = null), (q = P), (nt = !1);
      }
    }
    var V = a;
    (n.unstable_IdlePriority = 5),
      (n.unstable_ImmediatePriority = 1),
      (n.unstable_LowPriority = 4),
      (n.unstable_NormalPriority = 3),
      (n.unstable_Profiling = null),
      (n.unstable_UserBlockingPriority = 2),
      (n.unstable_cancelCallback = function (y) {
        y.callback = null;
      }),
      (n.unstable_continueExecution = function () {
        Z || nt || ((Z = !0), t(D));
      }),
      (n.unstable_getCurrentPriorityLevel = function () {
        return q;
      }),
      (n.unstable_getFirstCallbackNode = function () {
        return _(j);
      }),
      (n.unstable_next = function (y) {
        switch (q) {
          case 1:
          case 2:
          case 3:
            var E = 3;
            break;
          default:
            E = q;
        }
        var P = q;
        q = E;
        try {
          return y();
        } finally {
          q = P;
        }
      }),
      (n.unstable_pauseExecution = function () {}),
      (n.unstable_requestPaint = V),
      (n.unstable_runWithPriority = function (y, E) {
        switch (y) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            y = 3;
        }
        var P = q;
        q = y;
        try {
          return E();
        } finally {
          q = P;
        }
      }),
      (n.unstable_scheduleCallback = function (y, E, P) {
        var O = n.unstable_now();
        switch (
          (typeof P == "object" && P !== null
            ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? O + P : O))
            : (P = O),
          y)
        ) {
          case 1:
            var I = -1;
            break;
          case 2:
            I = 250;
            break;
          case 5:
            I = 1073741823;
            break;
          case 4:
            I = 1e4;
            break;
          default:
            I = 5e3;
        }
        return (
          (I = P + I),
          (y = { id: gt++, callback: E, priorityLevel: y, startTime: P, expirationTime: I, sortIndex: -1 }),
          P > O
            ? ((y.sortIndex = P), k(ae, y), _(j) === null && y === _(ae) && (tt ? l() : (tt = !0), r(b, P - O)))
            : ((y.sortIndex = I), k(j, y), Z || nt || ((Z = !0), t(D))),
          y
        );
      }),
      (n.unstable_wrapCallback = function (y) {
        var E = q;
        return function () {
          var P = q;
          q = E;
          try {
            return y.apply(this, arguments);
          } finally {
            q = P;
          }
        };
      });
  }),
  J = Et(function (e) {
    e.exports = Js;
  });
function g(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
if (!F) throw Error(g(227));
var qo = new Set(),
  Jt = {};
function lt(e, n) {
  kt(e, n), kt(e + "Capture", n);
}
function kt(e, n) {
  for (Jt[e] = n, e = 0; e < n.length; e++) qo.add(n[e]);
}
var Te = !(
    typeof window == "undefined" ||
    typeof window.document == "undefined" ||
    typeof window.document.createElement == "undefined"
  ),
  qs = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bo = Object.prototype.hasOwnProperty,
  ei = {},
  ti = {};
function bs(e) {
  return bo.call(ti, e) ? !0 : bo.call(ei, e) ? !1 : qs.test(e) ? (ti[e] = !0) : ((ei[e] = !0), !1);
}
function ea(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ta(e, n, t, r) {
  if (n === null || typeof n == "undefined" || ea(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function ue(e, n, t, r, l, a, o) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new ue(e, 0, !1, e, null, !1, !1);
  }),
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var n = e[0];
    ee[n] = new ue(n, 1, !1, e[1], null, !1, !1);
  }),
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ee[e] = new ue(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }),
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    ee[e] = new ue(e, 2, !1, e, null, !1, !1);
  }),
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      ee[e] = new ue(e, 3, !1, e.toLowerCase(), null, !1, !1);
    }),
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ee[e] = new ue(e, 3, !0, e, null, !1, !1);
  }),
  ["capture", "download"].forEach(function (e) {
    ee[e] = new ue(e, 4, !1, e, null, !1, !1);
  }),
  ["cols", "rows", "size", "span"].forEach(function (e) {
    ee[e] = new ue(e, 6, !1, e, null, !1, !1);
  }),
  ["rowSpan", "start"].forEach(function (e) {
    ee[e] = new ue(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
var Jr = /[\-:]([a-z])/g;
function qr(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Jr, qr);
    ee[n] = new ue(n, 1, !1, e, null, !1, !1);
  }),
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var n = e.replace(Jr, qr);
    ee[n] = new ue(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }),
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var n = e.replace(Jr, qr);
    ee[n] = new ue(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }),
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    ee[e] = new ue(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }),
  (ee.xlinkHref = new ue("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
  ["src", "href", "action", "formAction"].forEach(function (e) {
    ee[e] = new ue(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
function br(e, n, t, r) {
  var l = ee.hasOwnProperty(n) ? ee[n] : null,
    a =
      l !== null
        ? l.type === 0
        : r
        ? !1
        : !(!(2 < n.length) || (n[0] !== "o" && n[0] !== "O") || (n[1] !== "n" && n[1] !== "N"));
  a ||
    (ta(n, t, l, r) && (t = null),
    r || l === null
      ? bs(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var ot = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  qt = 60103,
  it = 60106,
  De = 60107,
  el = 60108,
  bt = 60114,
  tl = 60109,
  nl = 60110,
  Yn = 60112,
  en = 60113,
  Zn = 60120,
  Kn = 60115,
  rl = 60116,
  ll = 60121,
  ol = 60128,
  ni = 60129,
  il = 60130,
  ul = 60131;
typeof Symbol == "function" &&
  Symbol.for &&
  ((K = Symbol.for),
  (qt = K("react.element")),
  (it = K("react.portal")),
  (De = K("react.fragment")),
  (el = K("react.strict_mode")),
  (bt = K("react.profiler")),
  (tl = K("react.provider")),
  (nl = K("react.context")),
  (Yn = K("react.forward_ref")),
  (en = K("react.suspense")),
  (Zn = K("react.suspense_list")),
  (Kn = K("react.memo")),
  (rl = K("react.lazy")),
  (ll = K("react.block")),
  K("react.scope"),
  (ol = K("react.opaque.id")),
  (ni = K("react.debug_trace_mode")),
  (il = K("react.offscreen")),
  (ul = K("react.legacy_hidden")));
var K,
  ri = typeof Symbol == "function" && Symbol.iterator;
function tn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ri && e[ri]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var sl;
function nn(e) {
  if (sl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      sl = (n && n[1]) || "";
    }
  return (
    `
` +
    sl +
    e
  );
}
var al = !1;
function Xn(e, n) {
  if (!e || al) return "";
  al = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (i) {
          var r = i;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (i) {
          r = i;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (i) {
        r = i;
      }
      e();
    }
  } catch (i) {
    if (i && r && typeof i.stack == "string") {
      for (
        var l = i.stack.split(`
`),
          a = r.stack.split(`
`),
          o = l.length - 1,
          u = a.length - 1;
        1 <= o && 0 <= u && l[o] !== a[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== a[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== a[u]))
                return (
                  `
` + l[o].replace(" at new ", " at ")
                );
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (al = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? nn(e) : "";
}
function na(e) {
  switch (e.tag) {
    case 5:
      return nn(e.type);
    case 16:
      return nn("Lazy");
    case 13:
      return nn("Suspense");
    case 19:
      return nn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Xn(e.type, !1)), e;
    case 11:
      return (e = Xn(e.type.render, !1)), e;
    case 22:
      return (e = Xn(e.type._render, !1)), e;
    case 1:
      return (e = Xn(e.type, !0)), e;
    default:
      return "";
  }
}
function St(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case De:
      return "Fragment";
    case it:
      return "Portal";
    case bt:
      return "Profiler";
    case el:
      return "StrictMode";
    case en:
      return "Suspense";
    case Zn:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case nl:
        return (e.displayName || "Context") + ".Consumer";
      case tl:
        return (e._context.displayName || "Context") + ".Provider";
      case Yn:
        var n = e.render;
        return (
          (n = n.displayName || n.name || ""), e.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef")
        );
      case Kn:
        return St(e.type);
      case ll:
        return St(e._render);
      case rl:
        (n = e._payload), (e = e._init);
        try {
          return St(e(n));
        } catch (t) {}
    }
  return null;
}
function Ie(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return e;
    default:
      return "";
  }
}
function li(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function ra(e) {
  var n = li(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (!e.hasOwnProperty(n) && typeof t != "undefined" && typeof t.get == "function" && typeof t.set == "function") {
    var l = t.get,
      a = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), a.call(this, o);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function Gn(e) {
  e._valueTracker || (e._valueTracker = ra(e));
}
function oi(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return e && (r = li(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== t ? (n.setValue(e), !0) : !1;
}
function Jn(e) {
  if (((e = e || (typeof document != "undefined" ? document : void 0)), typeof e == "undefined")) return null;
  try {
    return e.activeElement || e.body;
  } catch (n) {
    return e.body;
  }
}
function fl(e, n) {
  var t = n.checked;
  return U({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function ii(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = Ie(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null,
    });
}
function ui(e, n) {
  (n = n.checked), n != null && br(e, "checked", n, !1);
}
function dl(e, n) {
  ui(e, n);
  var t = Ie(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? cl(e, n.type, t) : n.hasOwnProperty("defaultValue") && cl(e, n.type, Ie(n.defaultValue)),
    n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function si(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!((r !== "submit" && r !== "reset") || (n.value !== void 0 && n.value !== null))) return;
    (n = "" + e._wrapperState.initialValue), t || n === e.value || (e.value = n), (e.defaultValue = n);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function cl(e, n, t) {
  (n !== "number" || Jn(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
function la(e) {
  var n = "";
  return (
    F.Children.forEach(e, function (t) {
      t != null && (n += t);
    }),
    n
  );
}
function pl(e, n) {
  return (e = U({ children: void 0 }, n)), (n = la(n.children)) && (e.children = n), e;
}
function Ct(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + Ie(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function ml(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(g(91));
  return U({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ai(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(g(92));
      if (Array.isArray(t)) {
        if (!(1 >= t.length)) throw Error(g(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: Ie(t) };
}
function fi(e, n) {
  var t = Ie(n.value),
    r = Ie(n.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r);
}
function ci(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
var hl = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
};
function di(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vl(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? di(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var qn,
  pi = (function (e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== hl.svg || "innerHTML" in e) e.innerHTML = n;
    else {
      for (
        qn = qn || document.createElement("div"),
          qn.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = qn.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function rn(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var ln = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  oa = ["Webkit", "ms", "Moz", "O"];
Object.keys(ln).forEach(function (e) {
  oa.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (ln[n] = ln[e]);
  });
});
function mi(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (ln.hasOwnProperty(e) && ln[e])
    ? ("" + n).trim()
    : n + "px";
}
function hi(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = mi(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var ia = U(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function yl(e, n) {
  if (n) {
    if (ia[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(g(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(g(60));
      if (!(typeof n.dangerouslySetInnerHTML == "object" && "__html" in n.dangerouslySetInnerHTML)) throw Error(g(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(g(62));
  }
}
function gl(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
function wl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var El = null,
  _t = null,
  xt = null;
function vi(e) {
  if ((e = on(e))) {
    if (typeof El != "function") throw Error(g(280));
    var n = e.stateNode;
    n && ((n = bn(n)), El(e.stateNode, e.type, n));
  }
}
function yi(e) {
  _t ? (xt ? xt.push(e) : (xt = [e])) : (_t = e);
}
function gi() {
  if (_t) {
    var e = _t,
      n = xt;
    if (((xt = _t = null), vi(e), n)) for (e = 0; e < n.length; e++) vi(n[e]);
  }
}
function kl(e, n) {
  return e(n);
}
function wi(e, n, t, r, l) {
  return e(n, t, r, l);
}
function Sl() {}
var Ei = kl,
  ut = !1,
  Cl = !1;
function _l() {
  (_t !== null || xt !== null) && (Sl(), gi());
}
function ua(e, n, t) {
  if (Cl) return e(n, t);
  Cl = !0;
  try {
    return Ei(e, n, t);
  } finally {
    (Cl = !1), _l();
  }
}
function un(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = bn(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(g(231, n, typeof t));
  return t;
}
var xl = !1;
if (Te)
  try {
    (Nt = {}),
      Object.defineProperty(Nt, "passive", {
        get: function () {
          xl = !0;
        },
      }),
      window.addEventListener("test", Nt, Nt),
      window.removeEventListener("test", Nt, Nt);
  } catch (e) {
    xl = !1;
  }
var Nt;
function sa(e, n, t, r, l, a, o, u, i) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, d);
  } catch (w) {
    this.onError(w);
  }
}
var sn = !1,
  er = null,
  tr = !1,
  Nl = null,
  aa = {
    onError: function (e) {
      (sn = !0), (er = e);
    },
  };
function fa(e, n, t, r, l, a, o, u, i) {
  (sn = !1), (er = null), sa.apply(aa, arguments);
}
function ca(e, n, t, r, l, a, o, u, i) {
  if ((fa.apply(this, arguments), sn)) {
    if (sn) {
      var d = er;
      (sn = !1), (er = null);
    } else throw Error(g(198));
    tr || ((tr = !0), (Nl = d));
  }
}
function st(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), (n.flags & 1026) != 0 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function ki(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if ((n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)), n !== null)) return n.dehydrated;
  }
  return null;
}
function Si(e) {
  if (st(e) !== e) throw Error(g(188));
}
function da(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = st(e)), n === null)) throw Error(g(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var a = l.alternate;
    if (a === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === a.child) {
      for (a = l.child; a; ) {
        if (a === t) return Si(l), e;
        if (a === r) return Si(l), n;
        a = a.sibling;
      }
      throw Error(g(188));
    }
    if (t.return !== r.return) (t = l), (r = a);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === t) {
          (o = !0), (t = l), (r = a);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (t = a);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = a.child; u; ) {
          if (u === t) {
            (o = !0), (t = a), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = a), (t = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(g(189));
      }
    }
    if (t.alternate !== r) throw Error(g(190));
  }
  if (t.tag !== 3) throw Error(g(188));
  return t.stateNode.current === t ? e : n;
}
function Ci(e) {
  if (((e = da(e)), !e)) return null;
  for (var n = e; ; ) {
    if (n.tag === 5 || n.tag === 6) return n;
    if (n.child) (n.child.return = n), (n = n.child);
    else {
      if (n === e) break;
      for (; !n.sibling; ) {
        if (!n.return || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return null;
}
function _i(e, n) {
  for (var t = e.alternate; n !== null; ) {
    if (n === e || n === t) return !0;
    n = n.return;
  }
  return !1;
}
var xi,
  Pl,
  Ni,
  Pi,
  Ll = !1,
  Ce = [],
  Fe = null,
  Ue = null,
  Ve = null,
  an = new Map(),
  fn = new Map(),
  cn = [],
  Li = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
    " ",
  );
function Tl(e, n, t, r, l) {
  return { blockedOn: e, domEventName: n, eventSystemFlags: t | 16, nativeEvent: l, targetContainers: [r] };
}
function Ti(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      Fe = null;
      break;
    case "dragenter":
    case "dragleave":
      Ue = null;
      break;
    case "mouseover":
    case "mouseout":
      Ve = null;
      break;
    case "pointerover":
    case "pointerout":
      an.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      fn.delete(n.pointerId);
  }
}
function dn(e, n, t, r, l, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = Tl(n, t, r, l, a)), n !== null && ((n = on(n)), n !== null && Pl(n)), e)
    : ((e.eventSystemFlags |= r), (n = e.targetContainers), l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function pa(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (Fe = dn(Fe, e, n, t, r, l)), !0;
    case "dragenter":
      return (Ue = dn(Ue, e, n, t, r, l)), !0;
    case "mouseover":
      return (Ve = dn(Ve, e, n, t, r, l)), !0;
    case "pointerover":
      var a = l.pointerId;
      return an.set(a, dn(an.get(a) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return (a = l.pointerId), fn.set(a, dn(fn.get(a) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function ma(e) {
  var n = at(e.target);
  if (n !== null) {
    var t = st(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = ki(t)), n !== null)) {
          (e.blockedOn = n),
            Pi(e.lanePriority, function () {
              J.unstable_runWithPriority(e.priority, function () {
                Ni(t);
              });
            });
          return;
        }
      } else if (n === 3 && t.stateNode.hydrate) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function nr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = Ml(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t !== null) return (n = on(t)), n !== null && Pl(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function Mi(e, n, t) {
  nr(e) && t.delete(n);
}
function ha() {
  for (Ll = !1; 0 < Ce.length; ) {
    var e = Ce[0];
    if (e.blockedOn !== null) {
      (e = on(e.blockedOn)), e !== null && xi(e);
      break;
    }
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Ml(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t !== null) {
        e.blockedOn = t;
        break;
      }
      n.shift();
    }
    e.blockedOn === null && Ce.shift();
  }
  Fe !== null && nr(Fe) && (Fe = null),
    Ue !== null && nr(Ue) && (Ue = null),
    Ve !== null && nr(Ve) && (Ve = null),
    an.forEach(Mi),
    fn.forEach(Mi);
}
function pn(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null), Ll || ((Ll = !0), J.unstable_scheduleCallback(J.unstable_NormalPriority, ha)));
}
function Oi(e) {
  function n(l) {
    return pn(l, e);
  }
  if (0 < Ce.length) {
    pn(Ce[0], e);
    for (var t = 1; t < Ce.length; t++) {
      var r = Ce[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Fe !== null && pn(Fe, e), Ue !== null && pn(Ue, e), Ve !== null && pn(Ve, e), an.forEach(n), fn.forEach(n), t = 0;
    t < cn.length;
    t++
  )
    (r = cn[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < cn.length && ((t = cn[0]), t.blockedOn === null); ) ma(t), t.blockedOn === null && cn.shift();
}
function rr(e, n) {
  var t = {};
  return (t[e.toLowerCase()] = n.toLowerCase()), (t["Webkit" + e] = "webkit" + n), (t["Moz" + e] = "moz" + n), t;
}
var Pt = {
    animationend: rr("Animation", "AnimationEnd"),
    animationiteration: rr("Animation", "AnimationIteration"),
    animationstart: rr("Animation", "AnimationStart"),
    transitionend: rr("Transition", "TransitionEnd"),
  },
  Ol = {},
  zi = {};
Te &&
  ((zi = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Pt.animationend.animation, delete Pt.animationiteration.animation, delete Pt.animationstart.animation),
  "TransitionEvent" in window || delete Pt.transitionend.transition);
function lr(e) {
  if (Ol[e]) return Ol[e];
  if (!Pt[e]) return e;
  var n = Pt[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in zi) return (Ol[e] = n[t]);
  return e;
}
var Ri = lr("animationend"),
  ji = lr("animationiteration"),
  Di = lr("animationstart"),
  Ii = lr("transitionend"),
  Fi = new Map(),
  zl = new Map(),
  va = [
    "abort",
    "abort",
    Ri,
    "animationEnd",
    ji,
    "animationIteration",
    Di,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    Ii,
    "transitionEnd",
    "waiting",
    "waiting",
  ];
function Rl(e, n) {
  for (var t = 0; t < e.length; t += 2) {
    var r = e[t],
      l = e[t + 1];
    (l = "on" + (l[0].toUpperCase() + l.slice(1))), zl.set(r, n), Fi.set(r, l), lt(l, [r]);
  }
}
var ya = J.unstable_now;
ya();
var A = 8;
function Lt(e) {
  if ((1 & e) != 0) return (A = 15), 1;
  if ((2 & e) != 0) return (A = 14), 2;
  if ((4 & e) != 0) return (A = 13), 4;
  var n = 24 & e;
  return n !== 0
    ? ((A = 12), n)
    : (e & 32) != 0
    ? ((A = 11), 32)
    : ((n = 192 & e),
      n !== 0
        ? ((A = 10), n)
        : (e & 256) != 0
        ? ((A = 9), 256)
        : ((n = 3584 & e),
          n !== 0
            ? ((A = 8), n)
            : (e & 4096) != 0
            ? ((A = 7), 4096)
            : ((n = 4186112 & e),
              n !== 0
                ? ((A = 6), n)
                : ((n = 62914560 & e),
                  n !== 0
                    ? ((A = 5), n)
                    : e & 67108864
                    ? ((A = 4), 67108864)
                    : (e & 134217728) != 0
                    ? ((A = 3), 134217728)
                    : ((n = 805306368 & e),
                      n !== 0 ? ((A = 2), n) : (1073741824 & e) != 0 ? ((A = 1), 1073741824) : ((A = 8), e))))));
}
function ga(e) {
  switch (e) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function wa(e) {
  switch (e) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(g(358, e));
  }
}
function mn(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return (A = 0);
  var r = 0,
    l = 0,
    a = e.expiredLanes,
    o = e.suspendedLanes,
    u = e.pingedLanes;
  if (a !== 0) (r = a), (l = A = 15);
  else if (((a = t & 134217727), a !== 0)) {
    var i = a & ~o;
    i !== 0 ? ((r = Lt(i)), (l = A)) : ((u &= a), u !== 0 && ((r = Lt(u)), (l = A)));
  } else (a = t & ~o), a !== 0 ? ((r = Lt(a)), (l = A)) : u !== 0 && ((r = Lt(u)), (l = A));
  if (r === 0) return 0;
  if (((r = 31 - Ae(r)), (r = t & (((0 > r ? 0 : 1 << r) << 1) - 1)), n !== 0 && n !== r && (n & o) == 0)) {
    if ((Lt(n), l <= A)) return n;
    A = l;
  }
  if (((n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; ) (t = 31 - Ae(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function Ui(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function or(e, n) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return (e = Tt(24 & ~n)), e === 0 ? or(10, n) : e;
    case 10:
      return (e = Tt(192 & ~n)), e === 0 ? or(8, n) : e;
    case 8:
      return (e = Tt(3584 & ~n)), e === 0 && ((e = Tt(4186112 & ~n)), e === 0 && (e = 512)), e;
    case 2:
      return (n = Tt(805306368 & ~n)), n === 0 && (n = 268435456), n;
  }
  throw Error(g(358, e));
}
function Tt(e) {
  return e & -e;
}
function jl(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function ir(e, n, t) {
  e.pendingLanes |= n;
  var r = n - 1;
  (e.suspendedLanes &= r), (e.pingedLanes &= r), (e = e.eventTimes), (n = 31 - Ae(n)), (e[n] = t);
}
var Ae = Math.clz32 ? Math.clz32 : Ea,
  ka = Math.log,
  Sa = Math.LN2;
function Ea(e) {
  return e === 0 ? 32 : (31 - ((ka(e) / Sa) | 0)) | 0;
}
var Ca = J.unstable_UserBlockingPriority,
  _a = J.unstable_runWithPriority,
  ur = !0;
function xa(e, n, t, r) {
  ut || Sl();
  var l = Dl,
    a = ut;
  ut = !0;
  try {
    wi(l, e, n, t, r);
  } finally {
    (ut = a) || _l();
  }
}
function Na(e, n, t, r) {
  _a(Ca, Dl.bind(null, e, n, t, r));
}
function Dl(e, n, t, r) {
  if (ur) {
    var l;
    if ((l = (n & 4) == 0) && 0 < Ce.length && -1 < Li.indexOf(e)) (e = Tl(null, e, n, t, r)), Ce.push(e);
    else {
      var a = Ml(e, n, t, r);
      if (a === null) l && Ti(e, r);
      else {
        if (l) {
          if (-1 < Li.indexOf(e)) {
            (e = Tl(a, e, n, t, r)), Ce.push(e);
            return;
          }
          if (pa(a, e, n, t, r)) return;
          Ti(e, r);
        }
        Vi(e, n, r, null, t);
      }
    }
  }
}
function Ml(e, n, t, r) {
  var l = wl(r);
  if (((l = at(l)), l !== null)) {
    var a = st(l);
    if (a === null) l = null;
    else {
      var o = a.tag;
      if (o === 13) {
        if (((l = ki(a)), l !== null)) return l;
        l = null;
      } else if (o === 3) {
        if (a.stateNode.hydrate) return a.tag === 3 ? a.stateNode.containerInfo : null;
        l = null;
      } else a !== l && (l = null);
    }
  }
  return Vi(e, n, r, l, t), null;
}
var Be = null,
  Il = null,
  sr = null;
function Ai() {
  if (sr) return sr;
  var e,
    n = Il,
    t = n.length,
    r,
    l = "value" in Be ? Be.value : Be.textContent,
    a = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var o = t - e;
  for (r = 1; r <= o && n[t - r] === l[a - r]; r++);
  return (sr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ar(e) {
  var n = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && n === 13 && (e = 13)) : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fr() {
  return !0;
}
function Bi() {
  return !1;
}
function me(e) {
  function n(t, r, l, a, o) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e) e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(a) : a[u]));
    return (
      (this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? fr : Bi),
      (this.isPropagationStopped = Bi),
      this
    );
  }
  return (
    U(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = fr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = fr));
      },
      persist: function () {},
      isPersistent: fr,
    }),
    n
  );
}
var Mt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Fl = me(Mt),
  hn = U({}, Mt, { view: 0, detail: 0 }),
  Pa = me(hn),
  Ul,
  Vl,
  vn,
  cr = U({}, hn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Al,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vn &&
            (vn && e.type === "mousemove"
              ? ((Ul = e.screenX - vn.screenX), (Vl = e.screenY - vn.screenY))
              : (Vl = Ul = 0),
            (vn = e)),
          Ul);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Vl;
    },
  }),
  Hi = me(cr),
  La = U({}, cr, { dataTransfer: 0 }),
  Ta = me(La),
  Ma = U({}, hn, { relatedTarget: 0 }),
  Bl = me(Ma),
  Oa = U({}, Mt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  za = me(Oa),
  Ra = U({}, Mt, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ja = me(Ra),
  Da = U({}, Mt, { data: 0 }),
  Wi = me(Da),
  Ia = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Fa = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ua = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Va(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Ua[e]) ? !!n[e] : !1;
}
function Al() {
  return Va;
}
var Aa = U({}, hn, {
    key: function (e) {
      if (e.key) {
        var n = Ia[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = ar(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Fa[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Al,
    charCode: function (e) {
      return e.type === "keypress" ? ar(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? ar(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  Ba = me(Aa),
  Ha = U({}, cr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  $i = me(Ha),
  Wa = U({}, hn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Al,
  }),
  $a = me(Wa),
  Qa = U({}, Mt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ya = me(Qa),
  Za = U({}, cr, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ka = me(Za),
  Xa = [9, 13, 27, 32],
  Hl = Te && "CompositionEvent" in window,
  yn = null;
Te && "documentMode" in document && (yn = document.documentMode);
var Ga = Te && "TextEvent" in window && !yn,
  Qi = Te && (!Hl || (yn && 8 < yn && 11 >= yn)),
  Yi = String.fromCharCode(32),
  Zi = !1;
function Ki(e, n) {
  switch (e) {
    case "keyup":
      return Xa.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xi(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ot = !1;
function Ja(e, n) {
  switch (e) {
    case "compositionend":
      return Xi(n);
    case "keypress":
      return n.which !== 32 ? null : ((Zi = !0), Yi);
    case "textInput":
      return (e = n.data), e === Yi && Zi ? null : e;
    default:
      return null;
  }
}
function qa(e, n) {
  if (Ot) return e === "compositionend" || (!Hl && Ki(e, n)) ? ((e = Ai()), (sr = Il = Be = null), (Ot = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Qi && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var ba = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Gi(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!ba[e.type] : n === "textarea";
}
function Ji(e, n, t, r) {
  yi(r),
    (n = dr(n, "onChange")),
    0 < n.length && ((t = new Fl("onChange", "change", null, t, r)), e.push({ event: t, listeners: n }));
}
var gn = null,
  wn = null;
function ef(e) {
  qi(e, 0);
}
function pr(e) {
  var n = zt(e);
  if (oi(n)) return e;
}
function tf(e, n) {
  if (e === "change") return n;
}
var bi = !1;
Te &&
  (Te
    ? ((hr = "oninput" in document),
      hr ||
        ((Wl = document.createElement("div")),
        Wl.setAttribute("oninput", "return;"),
        (hr = typeof Wl.oninput == "function")),
      (mr = hr))
    : (mr = !1),
  (bi = mr && (!document.documentMode || 9 < document.documentMode)));
var mr, hr, Wl;
function tu() {
  gn && (gn.detachEvent("onpropertychange", eu), (wn = gn = null));
}
function eu(e) {
  if (e.propertyName === "value" && pr(wn)) {
    var n = [];
    if ((Ji(n, wn, e, wl(e)), (e = ef), ut)) e(n);
    else {
      ut = !0;
      try {
        kl(e, n);
      } finally {
        (ut = !1), _l();
      }
    }
  }
}
function nf(e, n, t) {
  e === "focusin" ? (tu(), (gn = n), (wn = t), gn.attachEvent("onpropertychange", eu)) : e === "focusout" && tu();
}
function rf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return pr(wn);
}
function lf(e, n) {
  if (e === "click") return pr(n);
}
function of(e, n) {
  if (e === "input" || e === "change") return pr(n);
}
function uf(e, n) {
  return (e === n && (e !== 0 || 1 / e == 1 / n)) || (e !== e && n !== n);
}
var ve = typeof Object.is == "function" ? Object.is : uf,
  sf = Object.prototype.hasOwnProperty;
function En(e, n) {
  if (ve(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) if (!sf.call(n, t[r]) || !ve(e[t[r]], n[t[r]])) return !1;
  return !0;
}
function nu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ru(e, n) {
  var t = nu(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n)) return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = nu(t);
  }
}
function lu(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? lu(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function ou() {
  for (var e = window, n = Jn(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch (r) {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Jn(e.document);
  }
  return n;
}
function $l(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
var af = Te && "documentMode" in document && 11 >= document.documentMode,
  Rt = null,
  Ql = null,
  kn = null,
  Yl = !1;
function iu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  Yl ||
    Rt == null ||
    Rt !== Jn(r) ||
    ((r = Rt),
    "selectionStart" in r && $l(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (kn && En(kn, r)) ||
      ((kn = r),
      (r = dr(Ql, "onSelect")),
      0 < r.length &&
        ((n = new Fl("onSelect", "select", null, n, t)), e.push({ event: n, listeners: r }), (n.target = Rt))));
}
Rl(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
    " ",
  ),
  0,
),
  Rl(
    "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
      " ",
    ),
    1,
  ),
  Rl(va, 2);
for (
  var uu = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Zl = 0;
  Zl < uu.length;
  Zl++
)
  zl.set(uu[Zl], 0);
kt("onMouseEnter", ["mouseout", "mouseover"]),
  kt("onMouseLeave", ["mouseout", "mouseover"]),
  kt("onPointerEnter", ["pointerout", "pointerover"]),
  kt("onPointerLeave", ["pointerout", "pointerover"]),
  lt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
  lt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
  lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
  lt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
  lt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
  lt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " ",
  ),
  su = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));
function au(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), ca(r, n, void 0, e), (e.currentTarget = null);
}
function qi(e, n) {
  n = (n & 4) != 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (n)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            i = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), i !== a && l.isPropagationStopped())) break e;
          au(l, u, d), (a = i);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]), (i = u.instance), (d = u.currentTarget), (u = u.listener), i !== a && l.isPropagationStopped())
          )
            break e;
          au(l, u, d), (a = i);
        }
    }
  }
  if (tr) throw ((e = Nl), (tr = !1), (Nl = null), e);
}
function B(e, n) {
  var t = cu(n),
    r = e + "__bubble";
  t.has(r) || (fu(n, e, 2, !1), t.add(r));
}
var du = "_reactListening" + Math.random().toString(36).slice(2);
function mu(e) {
  e[du] ||
    ((e[du] = !0),
    qo.forEach(function (n) {
      su.has(n) || pu(n, !1, e, null), pu(n, !0, e, null);
    }));
}
function pu(e, n, t, r) {
  var l = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
    a = t;
  if ((e === "selectionchange" && t.nodeType !== 9 && (a = t.ownerDocument), r !== null && !n && su.has(e))) {
    if (e !== "scroll") return;
    (l |= 2), (a = r);
  }
  var o = cu(a),
    u = e + "__" + (n ? "capture" : "bubble");
  o.has(u) || (n && (l |= 4), fu(a, e, l, n), o.add(u));
}
function fu(e, n, t, r) {
  var l = zl.get(n);
  switch (l === void 0 ? 2 : l) {
    case 0:
      l = xa;
      break;
    case 1:
      l = Na;
      break;
    default:
      l = Dl;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !xl || (n !== "touchstart" && n !== "touchmove" && n !== "wheel") || (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function Vi(e, n, t, r, l) {
  var a = r;
  if ((n & 1) == 0 && (n & 2) == 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var i = o.tag;
            if (
              (i === 3 || i === 4) &&
              ((i = o.stateNode.containerInfo), i === l || (i.nodeType === 8 && i.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = at(u)), o === null)) return;
          if (((i = o.tag), i === 5 || i === 6)) {
            r = a = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ua(function () {
    var d = a,
      w = wl(t),
      z = [];
    e: {
      var v = Fi.get(e);
      if (v !== void 0) {
        var S = Fl,
          L = e;
        switch (e) {
          case "keypress":
            if (ar(t) === 0) break e;
          case "keydown":
          case "keyup":
            S = Ba;
            break;
          case "focusin":
            (L = "focus"), (S = Bl);
            break;
          case "focusout":
            (L = "blur"), (S = Bl);
            break;
          case "beforeblur":
          case "afterblur":
            S = Bl;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = Hi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Ta;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = $a;
            break;
          case Ri:
          case ji:
          case Di:
            S = za;
            break;
          case Ii:
            S = Ya;
            break;
          case "scroll":
            S = Pa;
            break;
          case "wheel":
            S = Ka;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = ja;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = $i;
        }
        var x = (n & 4) != 0,
          f = !x && e === "scroll",
          s = x ? (v !== null ? v + "Capture" : null) : v;
        x = [];
        for (var c = d, h; c !== null; ) {
          h = c;
          var m = h.stateNode;
          if (
            (h.tag === 5 && m !== null && ((h = m), s !== null && ((m = un(c, s)), m != null && x.push(Cn(c, m, h)))),
            f)
          )
            break;
          c = c.return;
        }
        0 < x.length && ((v = new S(v, L, null, t, w)), z.push({ event: v, listeners: x }));
      }
    }
    if ((n & 7) == 0) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          v && (n & 16) == 0 && (L = t.relatedTarget || t.fromElement) && (at(L) || L[Dt]))
        )
          break e;
        if (
          (S || v) &&
          ((v = w.window === w ? w : (v = w.ownerDocument) ? v.defaultView || v.parentWindow : window),
          S
            ? ((L = t.relatedTarget || t.toElement),
              (S = d),
              (L = L ? at(L) : null),
              L !== null && ((f = st(L)), L !== f || (L.tag !== 5 && L.tag !== 6)) && (L = null))
            : ((S = null), (L = d)),
          S !== L)
        ) {
          if (
            ((x = Hi),
            (m = "onMouseLeave"),
            (s = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = $i), (m = "onPointerLeave"), (s = "onPointerEnter"), (c = "pointer")),
            (f = S == null ? v : zt(S)),
            (h = L == null ? v : zt(L)),
            (v = new x(m, c + "leave", S, t, w)),
            (v.target = f),
            (v.relatedTarget = h),
            (m = null),
            at(w) === d && ((x = new x(s, c + "enter", L, t, w)), (x.target = h), (x.relatedTarget = f), (m = x)),
            (f = m),
            S && L)
          )
            n: {
              for (x = S, s = L, c = 0, h = x; h; h = jt(h)) c++;
              for (h = 0, m = s; m; m = jt(m)) h++;
              for (; 0 < c - h; ) (x = jt(x)), c--;
              for (; 0 < h - c; ) (s = jt(s)), h--;
              for (; c--; ) {
                if (x === s || (s !== null && x === s.alternate)) break n;
                (x = jt(x)), (s = jt(s));
              }
              x = null;
            }
          else x = null;
          S !== null && hu(z, v, S, x, !1), L !== null && f !== null && hu(z, f, L, x, !0);
        }
      }
      e: {
        if (
          ((v = d ? zt(d) : window),
          (S = v.nodeName && v.nodeName.toLowerCase()),
          S === "select" || (S === "input" && v.type === "file"))
        )
          var N = tf;
        else if (Gi(v))
          if (bi) N = of;
          else {
            N = rf;
            var k = nf;
          }
        else
          (S = v.nodeName) && S.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (N = lf);
        if (N && (N = N(e, d))) {
          Ji(z, N, t, w);
          break e;
        }
        k && k(e, v, d),
          e === "focusout" && (k = v._wrapperState) && k.controlled && v.type === "number" && cl(v, "number", v.value);
      }
      switch (((k = d ? zt(d) : window), e)) {
        case "focusin":
          (Gi(k) || k.contentEditable === "true") && ((Rt = k), (Ql = d), (kn = null));
          break;
        case "focusout":
          kn = Ql = Rt = null;
          break;
        case "mousedown":
          Yl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Yl = !1), iu(z, t, w);
          break;
        case "selectionchange":
          if (af) break;
        case "keydown":
        case "keyup":
          iu(z, t, w);
      }
      var _;
      if (Hl)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        Ot ? Ki(e, t) && (M = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (Qi &&
          t.locale !== "ko" &&
          (Ot || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && Ot && (_ = Ai())
            : ((Be = w), (Il = "value" in Be ? Be.value : Be.textContent), (Ot = !0))),
        (k = dr(d, M)),
        0 < k.length &&
          ((M = new Wi(M, e, null, t, w)),
          z.push({ event: M, listeners: k }),
          _ ? (M.data = _) : ((_ = Xi(t)), _ !== null && (M.data = _)))),
        (_ = Ga ? Ja(e, t) : qa(e, t)) &&
          ((d = dr(d, "onBeforeInput")),
          0 < d.length &&
            ((w = new Wi("onBeforeInput", "beforeinput", null, t, w)),
            z.push({ event: w, listeners: d }),
            (w.data = _)));
    }
    qi(z, n);
  });
}
function Cn(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function dr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      a = l.stateNode;
    l.tag === 5 &&
      a !== null &&
      ((l = a), (a = un(e, t)), a != null && r.unshift(Cn(e, a, l)), (a = un(e, n)), a != null && r.push(Cn(e, a, l))),
      (e = e.return);
  }
  return r;
}
function jt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hu(e, n, t, r, l) {
  for (var a = n._reactName, o = []; t !== null && t !== r; ) {
    var u = t,
      i = u.alternate,
      d = u.stateNode;
    if (i !== null && i === r) break;
    u.tag === 5 &&
      d !== null &&
      ((u = d),
      l
        ? ((i = un(t, a)), i != null && o.unshift(Cn(t, i, u)))
        : l || ((i = un(t, a)), i != null && o.push(Cn(t, i, u)))),
      (t = t.return);
  }
  o.length !== 0 && e.push({ event: n, listeners: o });
}
function vr() {}
var Kl = null,
  Xl = null;
function vu(e, n) {
  switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!n.autoFocus;
  }
  return !1;
}
function Gl(e, n) {
  return (
    e === "textarea" ||
    e === "option" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var yu = typeof setTimeout == "function" ? setTimeout : void 0,
  ff = typeof clearTimeout == "function" ? clearTimeout : void 0;
function Jl(e) {
  e.nodeType === 1 ? (e.textContent = "") : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ""));
}
function It(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
  }
  return e;
}
function gu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ql = 0;
function cf(e) {
  return { $$typeof: ol, toString: e, valueOf: e };
}
var yr = Math.random().toString(36).slice(2),
  He = "__reactFiber$" + yr,
  gr = "__reactProps$" + yr,
  Dt = "__reactContainer$" + yr,
  wu = "__reactEvents$" + yr;
function at(e) {
  var n = e[He];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[Dt] || t[He])) {
      if (((t = n.alternate), n.child !== null || (t !== null && t.child !== null)))
        for (e = gu(e); e !== null; ) {
          if ((t = e[He])) return t;
          e = gu(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function on(e) {
  return (e = e[He] || e[Dt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function bn(e) {
  return e[gr] || null;
}
function cu(e) {
  var n = e[wu];
  return n === void 0 && (n = e[wu] = new Set()), n;
}
var bl = [],
  Ft = -1;
function We(e) {
  return { current: e };
}
function H(e) {
  0 > Ft || ((e.current = bl[Ft]), (bl[Ft] = null), Ft--);
}
function $(e, n) {
  Ft++, (bl[Ft] = e.current), (e.current = n);
}
var $e = {},
  re = We($e),
  fe = We(!1),
  ft = $e;
function Ut(e, n) {
  var t = e.type.contextTypes;
  if (!t) return $e;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    a;
  for (a in t) l[a] = n[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ce(e) {
  return (e = e.childContextTypes), e != null;
}
function wr() {
  H(fe), H(re);
}
function Eu(e, n, t) {
  if (re.current !== $e) throw Error(g(168));
  $(re, n), $(fe, t);
}
function ku(e, n, t) {
  var r = e.stateNode;
  if (((e = n.childContextTypes), typeof r.getChildContext != "function")) return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in e)) throw Error(g(108, St(n) || "Unknown", l));
  return U({}, t, r);
}
function Er(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $e),
    (ft = re.current),
    $(re, e),
    $(fe, fe.current),
    !0
  );
}
function Su(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  t ? ((e = ku(e, n, ft)), (r.__reactInternalMemoizedMergedChildContext = e), H(fe), H(re), $(re, e)) : H(fe), $(fe, t);
}
var eo = null,
  ct = null,
  df = J.unstable_runWithPriority,
  to = J.unstable_scheduleCallback,
  no = J.unstable_cancelCallback,
  pf = J.unstable_shouldYield,
  Cu = J.unstable_requestPaint,
  ro = J.unstable_now,
  mf = J.unstable_getCurrentPriorityLevel,
  kr = J.unstable_ImmediatePriority,
  _u = J.unstable_UserBlockingPriority,
  xu = J.unstable_NormalPriority,
  Nu = J.unstable_LowPriority,
  Pu = J.unstable_IdlePriority,
  lo = {},
  hf = Cu !== void 0 ? Cu : function () {},
  Me = null,
  Sr = null,
  oo = !1,
  Lu = ro(),
  le =
    1e4 > Lu
      ? ro
      : function () {
          return ro() - Lu;
        };
function Vt() {
  switch (mf()) {
    case kr:
      return 99;
    case _u:
      return 98;
    case xu:
      return 97;
    case Nu:
      return 96;
    case Pu:
      return 95;
    default:
      throw Error(g(332));
  }
}
function Tu(e) {
  switch (e) {
    case 99:
      return kr;
    case 98:
      return _u;
    case 97:
      return xu;
    case 96:
      return Nu;
    case 95:
      return Pu;
    default:
      throw Error(g(332));
  }
}
function dt(e, n) {
  return (e = Tu(e)), df(e, n);
}
function _n(e, n, t) {
  return (e = Tu(e)), to(e, n, t);
}
function _e() {
  if (Sr !== null) {
    var e = Sr;
    (Sr = null), no(e);
  }
  Mu();
}
function Mu() {
  if (!oo && Me !== null) {
    oo = !0;
    var e = 0;
    try {
      var n = Me;
      dt(99, function () {
        for (; e < n.length; e++) {
          var t = n[e];
          do t = t(!0);
          while (t !== null);
        }
      }),
        (Me = null);
    } catch (t) {
      throw (Me !== null && (Me = Me.slice(e + 1)), to(kr, _e), t);
    } finally {
      oo = !1;
    }
  }
}
var vf = ot.ReactCurrentBatchConfig;
function ke(e, n) {
  if (e && e.defaultProps) {
    (n = U({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var Cr = We(null),
  _r = null,
  At = null,
  xr = null;
function io() {
  xr = At = _r = null;
}
function uo(e) {
  var n = Cr.current;
  H(Cr), (e.type._context._currentValue = n);
}
function Ou(e, n) {
  for (; e !== null; ) {
    var t = e.alternate;
    if ((e.childLanes & n) === n) {
      if (t === null || (t.childLanes & n) === n) break;
      t.childLanes |= n;
    } else (e.childLanes |= n), t !== null && (t.childLanes |= n);
    e = e.return;
  }
}
function Bt(e, n) {
  (_r = e),
    (xr = At = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && ((e.lanes & n) != 0 && (Se = !0), (e.firstContext = null));
}
function ye(e, n) {
  if (xr !== e && n !== !1 && n !== 0)
    if (
      ((typeof n != "number" || n === 1073741823) && ((xr = e), (n = 1073741823)),
      (n = { context: e, observedBits: n, next: null }),
      At === null)
    ) {
      if (_r === null) throw Error(g(308));
      (At = n), (_r.dependencies = { lanes: 0, firstContext: n, responders: null });
    } else At = At.next = n;
  return e._currentValue;
}
var Qe = !1;
function so(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null },
    effects: null,
  };
}
function zu(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ye(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function Ze(e, n) {
  if (((e = e.updateQueue), e !== null)) {
    e = e.shared;
    var t = e.pending;
    t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)), (e.pending = n);
  }
}
function Ru(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      a = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var o = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        a === null ? (l = a = o) : (a = a.next = o), (t = t.next);
      } while (t !== null);
      a === null ? (l = a = n) : (a = a.next = n);
    } else l = a = n;
    (t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: a, shared: r.shared, effects: r.effects }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate), e === null ? (t.firstBaseUpdate = n) : (e.next = n), (t.lastBaseUpdate = n);
}
function Nn(e, n, t, r) {
  var l = e.updateQueue;
  Qe = !1;
  var a = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var i = u,
      d = i.next;
    (i.next = null), o === null ? (a = d) : (o.next = d), (o = i);
    var w = e.alternate;
    if (w !== null) {
      w = w.updateQueue;
      var z = w.lastBaseUpdate;
      z !== o && (z === null ? (w.firstBaseUpdate = d) : (z.next = d), (w.lastBaseUpdate = i));
    }
  }
  if (a !== null) {
    (z = l.baseState), (o = 0), (w = d = i = null);
    do {
      u = a.lane;
      var v = a.eventTime;
      if ((r & u) === u) {
        w !== null &&
          (w = w.next = { eventTime: v, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
        e: {
          var S = e,
            L = a;
          switch (((u = n), (v = t), L.tag)) {
            case 1:
              if (((S = L.payload), typeof S == "function")) {
                z = S.call(v, z, u);
                break e;
              }
              z = S;
              break e;
            case 3:
              S.flags = (S.flags & -4097) | 64;
            case 0:
              if (((S = L.payload), (u = typeof S == "function" ? S.call(v, z, u) : S), u == null)) break e;
              z = U({}, z, u);
              break e;
            case 2:
              Qe = !0;
          }
        }
        a.callback !== null && ((e.flags |= 32), (u = l.effects), u === null ? (l.effects = [a]) : u.push(a));
      } else
        (v = { eventTime: v, lane: u, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
          w === null ? ((d = w = v), (i = z)) : (w = w.next = v),
          (o |= u);
      if (((a = a.next), a === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (a = u.next), (u.next = null), (l.lastBaseUpdate = u), (l.shared.pending = null);
      }
    } while (1);
    w === null && (i = z),
      (l.baseState = i),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = w),
      (xn |= o),
      (e.lanes = o),
      (e.memoizedState = z);
  }
}
function ju(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != "function")) throw Error(g(191, l));
        l.call(r);
      }
    }
}
var Du = new F.Component().refs;
function Nr(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : U({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var Pr = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? st(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = he(),
      l = Ke(e),
      a = Ye(r, l);
    (a.payload = n), t != null && (a.callback = t), Ze(e, a), Xe(e, l, r);
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = he(),
      l = Ke(e),
      a = Ye(r, l);
    (a.tag = 1), (a.payload = n), t != null && (a.callback = t), Ze(e, a), Xe(e, l, r);
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = he(),
      r = Ke(e),
      l = Ye(t, r);
    (l.tag = 2), n != null && (l.callback = n), Ze(e, l), Xe(e, r, t);
  },
};
function Iu(e, n, t, r, l, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, o)
      : n.prototype && n.prototype.isPureReactComponent
      ? !En(t, r) || !En(l, a)
      : !0
  );
}
function Fu(e, n, t) {
  var r = !1,
    l = $e,
    a = n.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = ye(a))
      : ((l = ce(n) ? ft : re.current), (r = n.contextTypes), (a = (r = r != null) ? Ut(e, l) : $e)),
    (n = new n(t, a)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = Pr),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    n
  );
}
function Uu(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && Pr.enqueueReplaceState(n, n.state, null);
}
function ao(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = Du), so(e);
  var a = n.contextType;
  typeof a == "object" && a !== null ? (l.context = ye(a)) : ((a = ce(n) ? ft : re.current), (l.context = Ut(e, a))),
    Nn(e, t, l, r),
    (l.state = e.memoizedState),
    (a = n.getDerivedStateFromProps),
    typeof a == "function" && (Nr(e, n, a, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function") ||
      ((n = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
      n !== l.state && Pr.enqueueReplaceState(l, l.state, null),
      Nn(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4);
}
var Lr = Array.isArray;
function Pn(e, n, t) {
  if (((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(g(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === l
        ? n.ref
        : ((n = function (a) {
            var o = r.refs;
            o === Du && (o = r.refs = {}), a === null ? delete o[l] : (o[l] = a);
          }),
          (n._stringRef = l),
          n);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!t._owner) throw Error(g(290, e));
  }
  return e;
}
function Tr(e, n) {
  if (e.type !== "textarea")
    throw Error(
      g(
        31,
        Object.prototype.toString.call(n) === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : n,
      ),
    );
}
function Vu(e) {
  function n(f, s) {
    if (e) {
      var c = f.lastEffect;
      c !== null ? ((c.nextEffect = s), (f.lastEffect = s)) : (f.firstEffect = f.lastEffect = s),
        (s.nextEffect = null),
        (s.flags = 8);
    }
  }
  function t(f, s) {
    if (!e) return null;
    for (; s !== null; ) n(f, s), (s = s.sibling);
    return null;
  }
  function r(f, s) {
    for (f = new Map(); s !== null; ) s.key !== null ? f.set(s.key, s) : f.set(s.index, s), (s = s.sibling);
    return f;
  }
  function l(f, s) {
    return (f = Ge(f, s)), (f.index = 0), (f.sibling = null), f;
  }
  function a(f, s, c) {
    return (
      (f.index = c),
      e ? ((c = f.alternate), c !== null ? ((c = c.index), c < s ? ((f.flags = 2), s) : c) : ((f.flags = 2), s)) : s
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags = 2), f;
  }
  function u(f, s, c, h) {
    return s === null || s.tag !== 6 ? ((s = fo(c, f.mode, h)), (s.return = f), s) : ((s = l(s, c)), (s.return = f), s);
  }
  function i(f, s, c, h) {
    return s !== null && s.elementType === c.type
      ? ((h = l(s, c.props)), (h.ref = Pn(f, s, c)), (h.return = f), h)
      : ((h = Mr(c.type, c.key, c.props, null, f.mode, h)), (h.ref = Pn(f, s, c)), (h.return = f), h);
  }
  function d(f, s, c, h) {
    return s === null ||
      s.tag !== 4 ||
      s.stateNode.containerInfo !== c.containerInfo ||
      s.stateNode.implementation !== c.implementation
      ? ((s = co(c, f.mode, h)), (s.return = f), s)
      : ((s = l(s, c.children || [])), (s.return = f), s);
  }
  function w(f, s, c, h, m) {
    return s === null || s.tag !== 7
      ? ((s = Ht(c, f.mode, h, m)), (s.return = f), s)
      : ((s = l(s, c)), (s.return = f), s);
  }
  function z(f, s, c) {
    if (typeof s == "string" || typeof s == "number") return (s = fo("" + s, f.mode, c)), (s.return = f), s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case qt:
          return (c = Mr(s.type, s.key, s.props, null, f.mode, c)), (c.ref = Pn(f, null, s)), (c.return = f), c;
        case it:
          return (s = co(s, f.mode, c)), (s.return = f), s;
      }
      if (Lr(s) || tn(s)) return (s = Ht(s, f.mode, c, null)), (s.return = f), s;
      Tr(f, s);
    }
    return null;
  }
  function v(f, s, c, h) {
    var m = s !== null ? s.key : null;
    if (typeof c == "string" || typeof c == "number") return m !== null ? null : u(f, s, "" + c, h);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case qt:
          return c.key === m ? (c.type === De ? w(f, s, c.props.children, h, m) : i(f, s, c, h)) : null;
        case it:
          return c.key === m ? d(f, s, c, h) : null;
      }
      if (Lr(c) || tn(c)) return m !== null ? null : w(f, s, c, h, null);
      Tr(f, c);
    }
    return null;
  }
  function S(f, s, c, h, m) {
    if (typeof h == "string" || typeof h == "number") return (f = f.get(c) || null), u(s, f, "" + h, m);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case qt:
          return (
            (f = f.get(h.key === null ? c : h.key) || null),
            h.type === De ? w(s, f, h.props.children, m, h.key) : i(s, f, h, m)
          );
        case it:
          return (f = f.get(h.key === null ? c : h.key) || null), d(s, f, h, m);
      }
      if (Lr(h) || tn(h)) return (f = f.get(c) || null), w(s, f, h, m, null);
      Tr(s, h);
    }
    return null;
  }
  function L(f, s, c, h) {
    for (var m = null, N = null, k = s, _ = (s = 0), M = null; k !== null && _ < c.length; _++) {
      k.index > _ ? ((M = k), (k = null)) : (M = k.sibling);
      var T = v(f, k, c[_], h);
      if (T === null) {
        k === null && (k = M);
        break;
      }
      e && k && T.alternate === null && n(f, k),
        (s = a(T, s, _)),
        N === null ? (m = T) : (N.sibling = T),
        (N = T),
        (k = M);
    }
    if (_ === c.length) return t(f, k), m;
    if (k === null) {
      for (; _ < c.length; _++)
        (k = z(f, c[_], h)), k !== null && ((s = a(k, s, _)), N === null ? (m = k) : (N.sibling = k), (N = k));
      return m;
    }
    for (k = r(f, k); _ < c.length; _++)
      (M = S(k, f, _, c[_], h)),
        M !== null &&
          (e && M.alternate !== null && k.delete(M.key === null ? _ : M.key),
          (s = a(M, s, _)),
          N === null ? (m = M) : (N.sibling = M),
          (N = M));
    return (
      e &&
        k.forEach(function (j) {
          return n(f, j);
        }),
      m
    );
  }
  function x(f, s, c, h) {
    var m = tn(c);
    if (typeof m != "function") throw Error(g(150));
    if (((c = m.call(c)), c == null)) throw Error(g(151));
    for (var N = (m = null), k = s, _ = (s = 0), M = null, T = c.next(); k !== null && !T.done; _++, T = c.next()) {
      k.index > _ ? ((M = k), (k = null)) : (M = k.sibling);
      var j = v(f, k, T.value, h);
      if (j === null) {
        k === null && (k = M);
        break;
      }
      e && k && j.alternate === null && n(f, k),
        (s = a(j, s, _)),
        N === null ? (m = j) : (N.sibling = j),
        (N = j),
        (k = M);
    }
    if (T.done) return t(f, k), m;
    if (k === null) {
      for (; !T.done; _++, T = c.next())
        (T = z(f, T.value, h)), T !== null && ((s = a(T, s, _)), N === null ? (m = T) : (N.sibling = T), (N = T));
      return m;
    }
    for (k = r(f, k); !T.done; _++, T = c.next())
      (T = S(k, f, _, T.value, h)),
        T !== null &&
          (e && T.alternate !== null && k.delete(T.key === null ? _ : T.key),
          (s = a(T, s, _)),
          N === null ? (m = T) : (N.sibling = T),
          (N = T));
    return (
      e &&
        k.forEach(function (ae) {
          return n(f, ae);
        }),
      m
    );
  }
  return function (f, s, c, h) {
    var m = typeof c == "object" && c !== null && c.type === De && c.key === null;
    m && (c = c.props.children);
    var N = typeof c == "object" && c !== null;
    if (N)
      switch (c.$$typeof) {
        case qt:
          e: {
            for (N = c.key, m = s; m !== null; ) {
              if (m.key === N) {
                switch (m.tag) {
                  case 7:
                    if (c.type === De) {
                      t(f, m.sibling), (s = l(m, c.props.children)), (s.return = f), (f = s);
                      break e;
                    }
                    break;
                  default:
                    if (m.elementType === c.type) {
                      t(f, m.sibling), (s = l(m, c.props)), (s.ref = Pn(f, m, c)), (s.return = f), (f = s);
                      break e;
                    }
                }
                t(f, m);
                break;
              } else n(f, m);
              m = m.sibling;
            }
            c.type === De
              ? ((s = Ht(c.props.children, f.mode, h, c.key)), (s.return = f), (f = s))
              : ((h = Mr(c.type, c.key, c.props, null, f.mode, h)), (h.ref = Pn(f, s, c)), (h.return = f), (f = h));
          }
          return o(f);
        case it:
          e: {
            for (m = c.key; s !== null; ) {
              if (s.key === m)
                if (
                  s.tag === 4 &&
                  s.stateNode.containerInfo === c.containerInfo &&
                  s.stateNode.implementation === c.implementation
                ) {
                  t(f, s.sibling), (s = l(s, c.children || [])), (s.return = f), (f = s);
                  break e;
                } else {
                  t(f, s);
                  break;
                }
              else n(f, s);
              s = s.sibling;
            }
            (s = co(c, f.mode, h)), (s.return = f), (f = s);
          }
          return o(f);
      }
    if (typeof c == "string" || typeof c == "number")
      return (
        (c = "" + c),
        s !== null && s.tag === 6
          ? (t(f, s.sibling), (s = l(s, c)), (s.return = f), (f = s))
          : (t(f, s), (s = fo(c, f.mode, h)), (s.return = f), (f = s)),
        o(f)
      );
    if (Lr(c)) return L(f, s, c, h);
    if (tn(c)) return x(f, s, c, h);
    if ((N && Tr(f, c), typeof c == "undefined" && !m))
      switch (f.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(g(152, St(f.type) || "Component"));
      }
    return t(f, s);
  };
}
var Or = Vu(!0),
  Au = Vu(!1),
  Ln = {},
  xe = We(Ln),
  Tn = We(Ln),
  Mn = We(Ln);
function pt(e) {
  if (e === Ln) throw Error(g(174));
  return e;
}
function po(e, n) {
  switch (($(Mn, n), $(Tn, e), $(xe, Ln), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : vl(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n), (n = e.namespaceURI || null), (e = e.tagName), (n = vl(n, e));
  }
  H(xe), $(xe, n);
}
function Wt() {
  H(xe), H(Tn), H(Mn);
}
function Bu(e) {
  pt(Mn.current);
  var n = pt(xe.current),
    t = vl(n, e.type);
  n !== t && ($(Tn, e), $(xe, t));
}
function mo(e) {
  Tn.current === e && (H(xe), H(Tn));
}
var Q = We(0);
function zr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (t !== null && ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")) return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if ((n.flags & 64) != 0) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Oe = null,
  Je = null,
  Ne = !1;
function Hu(e, n) {
  var t = ge(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.type = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (t.flags = 8),
    e.lastEffect !== null ? ((e.lastEffect.nextEffect = t), (e.lastEffect = t)) : (e.firstEffect = e.lastEffect = t);
}
function Wu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n),
        n !== null ? ((e.stateNode = n), !0) : !1
      );
    case 6:
      return (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n), n !== null ? ((e.stateNode = n), !0) : !1;
    case 13:
      return !1;
    default:
      return !1;
  }
}
function ho(e) {
  if (Ne) {
    var n = Je;
    if (n) {
      var t = n;
      if (!Wu(e, n)) {
        if (((n = It(t.nextSibling)), !n || !Wu(e, n))) {
          (e.flags = (e.flags & -1025) | 2), (Ne = !1), (Oe = e);
          return;
        }
        Hu(Oe, t);
      }
      (Oe = e), (Je = It(n.firstChild));
    } else (e.flags = (e.flags & -1025) | 2), (Ne = !1), (Oe = e);
  }
}
function $u(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Oe = e;
}
function Rr(e) {
  if (e !== Oe) return !1;
  if (!Ne) return $u(e), (Ne = !0), !1;
  var n = e.type;
  if (e.tag !== 5 || (n !== "head" && n !== "body" && !Gl(n, e.memoizedProps)))
    for (n = Je; n; ) Hu(e, n), (n = It(n.nextSibling));
  if (($u(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(g(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              Je = It(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = Oe ? It(e.stateNode.nextSibling) : null;
  return !0;
}
function vo() {
  (Je = Oe = null), (Ne = !1);
}
var $t = [];
function yo() {
  for (var e = 0; e < $t.length; e++) $t[e]._workInProgressVersionPrimary = null;
  $t.length = 0;
}
var On = ot.ReactCurrentDispatcher,
  we = ot.ReactCurrentBatchConfig,
  zn = 0,
  Y = null,
  oe = null,
  te = null,
  jr = !1,
  Rn = !1;
function de() {
  throw Error(g(321));
}
function go(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++) if (!ve(e[t], n[t])) return !1;
  return !0;
}
function wo(e, n, t, r, l, a) {
  if (
    ((zn = a),
    (Y = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (On.current = e === null || e.memoizedState === null ? yf : gf),
    (e = t(r, l)),
    Rn)
  ) {
    a = 0;
    do {
      if (((Rn = !1), !(25 > a))) throw Error(g(301));
      (a += 1), (te = oe = null), (n.updateQueue = null), (On.current = wf), (e = t(r, l));
    } while (Rn);
  }
  if (((On.current = Dr), (n = oe !== null && oe.next !== null), (zn = 0), (te = oe = Y = null), (jr = !1), n))
    throw Error(g(300));
  return e;
}
function mt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return te === null ? (Y.memoizedState = te = e) : (te = te.next = e), te;
}
function ht() {
  if (oe === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var n = te === null ? Y.memoizedState : te.next;
  if (n !== null) (te = n), (oe = e);
  else {
    if (e === null) throw Error(g(310));
    (oe = e),
      (e = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null,
      }),
      te === null ? (Y.memoizedState = te = e) : (te = te.next = e);
  }
  return te;
}
function Pe(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function jn(e) {
  var n = ht(),
    t = n.queue;
  if (t === null) throw Error(g(311));
  t.lastRenderedReducer = e;
  var r = oe,
    l = r.baseQueue,
    a = t.pending;
  if (a !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = a.next), (a.next = o);
    }
    (r.baseQueue = l = a), (t.pending = null);
  }
  if (l !== null) {
    (l = l.next), (r = r.baseState);
    var u = (o = a = null),
      i = l;
    do {
      var d = i.lane;
      if ((zn & d) === d)
        u !== null &&
          (u = u.next = {
            lane: 0,
            action: i.action,
            eagerReducer: i.eagerReducer,
            eagerState: i.eagerState,
            next: null,
          }),
          (r = i.eagerReducer === e ? i.eagerState : e(r, i.action));
      else {
        var w = { lane: d, action: i.action, eagerReducer: i.eagerReducer, eagerState: i.eagerState, next: null };
        u === null ? ((o = u = w), (a = r)) : (u = u.next = w), (Y.lanes |= d), (xn |= d);
      }
      i = i.next;
    } while (i !== null && i !== l);
    u === null ? (a = r) : (u.next = o),
      ve(r, n.memoizedState) || (Se = !0),
      (n.memoizedState = r),
      (n.baseState = a),
      (n.baseQueue = u),
      (t.lastRenderedState = r);
  }
  return [n.memoizedState, t.dispatch];
}
function Dn(e) {
  var n = ht(),
    t = n.queue;
  if (t === null) throw Error(g(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    a = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var o = (l = l.next);
    do (a = e(a, o.action)), (o = o.next);
    while (o !== l);
    ve(a, n.memoizedState) || (Se = !0),
      (n.memoizedState = a),
      n.baseQueue === null && (n.baseState = a),
      (t.lastRenderedState = a);
  }
  return [a, r];
}
function Qu(e, n, t) {
  var r = n._getVersion;
  r = r(n._source);
  var l = n._workInProgressVersionPrimary;
  if (
    (l !== null
      ? (e = l === r)
      : ((e = e.mutableReadLanes), (e = (zn & e) === e) && ((n._workInProgressVersionPrimary = r), $t.push(n))),
    e)
  )
    return t(n._source);
  throw ($t.push(n), Error(g(350)));
}
function Yu(e, n, t, r) {
  var l = se;
  if (l === null) throw Error(g(349));
  var a = n._getVersion,
    o = a(n._source),
    u = On.current,
    i = u.useState(function () {
      return Qu(l, n, t);
    }),
    d = i[1],
    w = i[0];
  i = te;
  var z = e.memoizedState,
    v = z.refs,
    S = v.getSnapshot,
    L = z.source;
  z = z.subscribe;
  var x = Y;
  return (
    (e.memoizedState = { refs: v, source: n, subscribe: r }),
    u.useEffect(
      function () {
        (v.getSnapshot = t), (v.setSnapshot = d);
        var f = a(n._source);
        if (!ve(o, f)) {
          (f = t(n._source)),
            ve(w, f) || (d(f), (f = Ke(x)), (l.mutableReadLanes |= f & l.pendingLanes)),
            (f = l.mutableReadLanes),
            (l.entangledLanes |= f);
          for (var s = l.entanglements, c = f; 0 < c; ) {
            var h = 31 - Ae(c),
              m = 1 << h;
            (s[h] |= f), (c &= ~m);
          }
        }
      },
      [t, n, r],
    ),
    u.useEffect(
      function () {
        return r(n._source, function () {
          var f = v.getSnapshot,
            s = v.setSnapshot;
          try {
            s(f(n._source));
            var c = Ke(x);
            l.mutableReadLanes |= c & l.pendingLanes;
          } catch (h) {
            s(function () {
              throw h;
            });
          }
        });
      },
      [n, r],
    ),
    (ve(S, t) && ve(L, n) && ve(z, r)) ||
      ((e = { pending: null, dispatch: null, lastRenderedReducer: Pe, lastRenderedState: w }),
      (e.dispatch = d = Eo.bind(null, Y, e)),
      (i.queue = e),
      (i.baseQueue = null),
      (w = Qu(l, n, t)),
      (i.memoizedState = i.baseState = w)),
    w
  );
}
function Zu(e, n, t) {
  var r = ht();
  return Yu(r, e, n, t);
}
function In(e) {
  var n = mt();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = n.queue = { pending: null, dispatch: null, lastRenderedReducer: Pe, lastRenderedState: e }),
    (e = e.dispatch = Eo.bind(null, Y, e)),
    [n.memoizedState, e]
  );
}
function Ir(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = Y.updateQueue),
    n === null
      ? ((n = { lastEffect: null }), (Y.updateQueue = n), (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null ? (n.lastEffect = e.next = e) : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function Ku(e) {
  var n = mt();
  return (e = { current: e }), (n.memoizedState = e);
}
function Fr() {
  return ht().memoizedState;
}
function ko(e, n, t, r) {
  var l = mt();
  (Y.flags |= e), (l.memoizedState = Ir(1 | n, t, void 0, r === void 0 ? null : r));
}
function So(e, n, t, r) {
  var l = ht();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (oe !== null) {
    var o = oe.memoizedState;
    if (((a = o.destroy), r !== null && go(r, o.deps))) {
      Ir(n, t, a, r);
      return;
    }
  }
  (Y.flags |= e), (l.memoizedState = Ir(1 | n, t, a, r));
}
function Xu(e, n) {
  return ko(516, 4, e, n);
}
function Ur(e, n) {
  return So(516, 4, e, n);
}
function Gu(e, n) {
  return So(4, 2, e, n);
}
function Ju(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function qu(e, n, t) {
  return (t = t != null ? t.concat([e]) : null), So(4, 2, Ju.bind(null, n, e), t);
}
function Co() {}
function bu(e, n) {
  var t = ht();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && go(n, r[1]) ? r[0] : ((t.memoizedState = [e, n]), e);
}
function es(e, n) {
  var t = ht();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && go(n, r[1]) ? r[0] : ((e = e()), (t.memoizedState = [e, n]), e);
}
function Ef(e, n) {
  var t = Vt();
  dt(98 > t ? 98 : t, function () {
    e(!0);
  }),
    dt(97 < t ? 97 : t, function () {
      var r = we.transition;
      we.transition = 1;
      try {
        e(!1), n();
      } finally {
        we.transition = r;
      }
    });
}
function Eo(e, n, t) {
  var r = he(),
    l = Ke(e),
    a = { lane: l, action: t, eagerReducer: null, eagerState: null, next: null },
    o = n.pending;
  if (
    (o === null ? (a.next = a) : ((a.next = o.next), (o.next = a)),
    (n.pending = a),
    (o = e.alternate),
    e === Y || (o !== null && o === Y))
  )
    Rn = jr = !0;
  else {
    if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = n.lastRenderedReducer), o !== null))
      try {
        var u = n.lastRenderedState,
          i = o(u, t);
        if (((a.eagerReducer = o), (a.eagerState = i), ve(i, u))) return;
      } catch (d) {
      } finally {
      }
    Xe(e, l, r);
  }
}
var Dr = {
    readContext: ye,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useOpaqueIdentifier: de,
    unstable_isNewReconciler: !1,
  },
  yf = {
    readContext: ye,
    useCallback: function (e, n) {
      return (mt().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: ye,
    useEffect: Xu,
    useImperativeHandle: function (e, n, t) {
      return (t = t != null ? t.concat([e]) : null), ko(4, 2, Ju.bind(null, n, e), t);
    },
    useLayoutEffect: function (e, n) {
      return ko(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = mt();
      return (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e;
    },
    useReducer: function (e, n, t) {
      var r = mt();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }),
        (e = e.dispatch = Eo.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: Ku,
    useState: In,
    useDebugValue: Co,
    useDeferredValue: function (e) {
      var n = In(e),
        t = n[0],
        r = n[1];
      return (
        Xu(
          function () {
            var l = we.transition;
            we.transition = 1;
            try {
              r(e);
            } finally {
              we.transition = l;
            }
          },
          [e],
        ),
        t
      );
    },
    useTransition: function () {
      var e = In(!1),
        n = e[0];
      return (e = Ef.bind(null, e[1])), Ku(e), [e, n];
    },
    useMutableSource: function (e, n, t) {
      var r = mt();
      return (
        (r.memoizedState = { refs: { getSnapshot: n, setSnapshot: null }, source: e, subscribe: t }), Yu(r, e, n, t)
      );
    },
    useOpaqueIdentifier: function () {
      if (Ne) {
        var e = !1,
          n = cf(function () {
            throw (e || ((e = !0), t("r:" + (ql++).toString(36))), Error(g(355)));
          }),
          t = In(n)[1];
        return (
          (Y.mode & 2) == 0 &&
            ((Y.flags |= 516),
            Ir(
              5,
              function () {
                t("r:" + (ql++).toString(36));
              },
              void 0,
              null,
            )),
          n
        );
      }
      return (n = "r:" + (ql++).toString(36)), In(n), n;
    },
    unstable_isNewReconciler: !1,
  },
  gf = {
    readContext: ye,
    useCallback: bu,
    useContext: ye,
    useEffect: Ur,
    useImperativeHandle: qu,
    useLayoutEffect: Gu,
    useMemo: es,
    useReducer: jn,
    useRef: Fr,
    useState: function () {
      return jn(Pe);
    },
    useDebugValue: Co,
    useDeferredValue: function (e) {
      var n = jn(Pe),
        t = n[0],
        r = n[1];
      return (
        Ur(
          function () {
            var l = we.transition;
            we.transition = 1;
            try {
              r(e);
            } finally {
              we.transition = l;
            }
          },
          [e],
        ),
        t
      );
    },
    useTransition: function () {
      var e = jn(Pe)[0];
      return [Fr().current, e];
    },
    useMutableSource: Zu,
    useOpaqueIdentifier: function () {
      return jn(Pe)[0];
    },
    unstable_isNewReconciler: !1,
  },
  wf = {
    readContext: ye,
    useCallback: bu,
    useContext: ye,
    useEffect: Ur,
    useImperativeHandle: qu,
    useLayoutEffect: Gu,
    useMemo: es,
    useReducer: Dn,
    useRef: Fr,
    useState: function () {
      return Dn(Pe);
    },
    useDebugValue: Co,
    useDeferredValue: function (e) {
      var n = Dn(Pe),
        t = n[0],
        r = n[1];
      return (
        Ur(
          function () {
            var l = we.transition;
            we.transition = 1;
            try {
              r(e);
            } finally {
              we.transition = l;
            }
          },
          [e],
        ),
        t
      );
    },
    useTransition: function () {
      var e = Dn(Pe)[0];
      return [Fr().current, e];
    },
    useMutableSource: Zu,
    useOpaqueIdentifier: function () {
      return Dn(Pe)[0];
    },
    unstable_isNewReconciler: !1,
  },
  kf = ot.ReactCurrentOwner,
  Se = !1;
function pe(e, n, t, r) {
  n.child = e === null ? Au(n, null, t, r) : Or(n, e.child, t, r);
}
function ts(e, n, t, r, l) {
  t = t.render;
  var a = n.ref;
  return (
    Bt(n, l),
    (r = wo(e, n, t, r, a, l)),
    e !== null && !Se
      ? ((n.updateQueue = e.updateQueue), (n.flags &= -517), (e.lanes &= ~l), ze(e, n, l))
      : ((n.flags |= 1), pe(e, n, r, l), n.child)
  );
}
function rs(e, n, t, r, l, a) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" &&
      !_o(o) &&
      o.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = o), ns(e, n, o, r, l, a))
      : ((e = Mr(t.type, null, r, n, n.mode, a)), (e.ref = n.ref), (e.return = n), (n.child = e));
  }
  return (
    (o = e.child),
    (l & a) == 0 && ((l = o.memoizedProps), (t = t.compare), (t = t !== null ? t : En), t(l, r) && e.ref === n.ref)
      ? ze(e, n, a)
      : ((n.flags |= 1), (e = Ge(o, r)), (e.ref = n.ref), (e.return = n), (n.child = e))
  );
}
function ns(e, n, t, r, l, a) {
  if (e !== null && En(e.memoizedProps, r) && e.ref === n.ref)
    if (((Se = !1), (a & l) != 0)) (e.flags & 16384) != 0 && (Se = !0);
    else return (n.lanes = e.lanes), ze(e, n, a);
  return xo(e, n, t, r, a);
}
function No(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding")
    if ((n.mode & 4) == 0) (n.memoizedState = { baseLanes: 0 }), Vr(n, t);
    else if ((t & 1073741824) != 0) (n.memoizedState = { baseLanes: 0 }), Vr(n, a !== null ? a.baseLanes : t);
    else
      return (
        (e = a !== null ? a.baseLanes | t : t),
        (n.lanes = n.childLanes = 1073741824),
        (n.memoizedState = { baseLanes: e }),
        Vr(n, e),
        null
      );
  else a !== null ? ((r = a.baseLanes | t), (n.memoizedState = null)) : (r = t), Vr(n, r);
  return pe(e, n, l, t), n.child;
}
function ls(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) && (n.flags |= 128);
}
function xo(e, n, t, r, l) {
  var a = ce(t) ? ft : re.current;
  return (
    (a = Ut(n, a)),
    Bt(n, l),
    (t = wo(e, n, t, r, a, l)),
    e !== null && !Se
      ? ((n.updateQueue = e.updateQueue), (n.flags &= -517), (e.lanes &= ~l), ze(e, n, l))
      : ((n.flags |= 1), pe(e, n, t, l), n.child)
  );
}
function os(e, n, t, r, l) {
  if (ce(t)) {
    var a = !0;
    Er(n);
  } else a = !1;
  if ((Bt(n, l), n.stateNode === null))
    e !== null && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)), Fu(n, t, r), ao(n, t, r, l), (r = !0);
  else if (e === null) {
    var o = n.stateNode,
      u = n.memoizedProps;
    o.props = u;
    var i = o.context,
      d = t.contextType;
    typeof d == "object" && d !== null ? (d = ye(d)) : ((d = ce(t) ? ft : re.current), (d = Ut(n, d)));
    var w = t.getDerivedStateFromProps,
      z = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    z ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || i !== d) && Uu(n, o, r, d)),
      (Qe = !1);
    var v = n.memoizedState;
    (o.state = v),
      Nn(n, r, o, l),
      (i = n.memoizedState),
      u !== r || v !== i || fe.current || Qe
        ? (typeof w == "function" && (Nr(n, t, w, r), (i = n.memoizedState)),
          (u = Qe || Iu(n, t, u, r, v, i, d))
            ? (z ||
                (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (n.flags |= 4))
            : (typeof o.componentDidMount == "function" && (n.flags |= 4),
              (n.memoizedProps = r),
              (n.memoizedState = i)),
          (o.props = r),
          (o.state = i),
          (o.context = d),
          (r = u))
        : (typeof o.componentDidMount == "function" && (n.flags |= 4), (r = !1));
  } else {
    (o = n.stateNode),
      zu(e, n),
      (u = n.memoizedProps),
      (d = n.type === n.elementType ? u : ke(n.type, u)),
      (o.props = d),
      (z = n.pendingProps),
      (v = o.context),
      (i = t.contextType),
      typeof i == "object" && i !== null ? (i = ye(i)) : ((i = ce(t) ? ft : re.current), (i = Ut(n, i)));
    var S = t.getDerivedStateFromProps;
    (w = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") ||
      ((u !== z || v !== i) && Uu(n, o, r, i)),
      (Qe = !1),
      (v = n.memoizedState),
      (o.state = v),
      Nn(n, r, o, l);
    var L = n.memoizedState;
    u !== z || v !== L || fe.current || Qe
      ? (typeof S == "function" && (Nr(n, t, S, r), (L = n.memoizedState)),
        (d = Qe || Iu(n, t, d, r, v, L, i))
          ? (w ||
              (typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, L, i),
              typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, L, i)),
            typeof o.componentDidUpdate == "function" && (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 256))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && v === e.memoizedState) ||
              (n.flags |= 256),
            (n.memoizedProps = r),
            (n.memoizedState = L)),
        (o.props = r),
        (o.state = L),
        (o.context = i),
        (r = d))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && v === e.memoizedState) ||
          (n.flags |= 256),
        (r = !1));
  }
  return Po(e, n, t, r, a, l);
}
function Po(e, n, t, r, l, a) {
  ls(e, n);
  var o = (n.flags & 64) != 0;
  if (!r && !o) return l && Su(n, t, !1), ze(e, n, a);
  (r = n.stateNode), (kf.current = n);
  var u = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && o ? ((n.child = Or(n, e.child, null, a)), (n.child = Or(n, null, u, a))) : pe(e, n, u, a),
    (n.memoizedState = r.state),
    l && Su(n, t, !0),
    n.child
  );
}
function is(e) {
  var n = e.stateNode;
  n.pendingContext ? Eu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Eu(e, n.context, !1),
    po(e, n.containerInfo);
}
var Ar = { dehydrated: null, retryLane: 0 };
function fs(e, n, t) {
  var r = n.pendingProps,
    l = Q.current,
    a = !1,
    o;
  return (
    (o = (n.flags & 64) != 0) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) != 0),
    o
      ? ((a = !0), (n.flags &= -65))
      : (e !== null && e.memoizedState === null) ||
        r.fallback === void 0 ||
        r.unstable_avoidThisFallback === !0 ||
        (l |= 1),
    $(Q, l & 1),
    e === null
      ? (r.fallback !== void 0 && ho(n),
        (e = r.children),
        (l = r.fallback),
        a
          ? ((e = us(n, e, l, t)), (n.child.memoizedState = { baseLanes: t }), (n.memoizedState = Ar), e)
          : typeof r.unstable_expectedLoadTime == "number"
          ? ((e = us(n, e, l, t)),
            (n.child.memoizedState = { baseLanes: t }),
            (n.memoizedState = Ar),
            (n.lanes = 33554432),
            e)
          : ((t = Lo({ mode: "visible", children: e }, n.mode, t, null)), (t.return = n), (n.child = t)))
      : e.memoizedState !== null
      ? a
        ? ((r = as(e, n, r.children, r.fallback, t)),
          (a = n.child),
          (l = e.child.memoizedState),
          (a.memoizedState = l === null ? { baseLanes: t } : { baseLanes: l.baseLanes | t }),
          (a.childLanes = e.childLanes & ~t),
          (n.memoizedState = Ar),
          r)
        : ((t = ss(e, n, r.children, t)), (n.memoizedState = null), t)
      : a
      ? ((r = as(e, n, r.children, r.fallback, t)),
        (a = n.child),
        (l = e.child.memoizedState),
        (a.memoizedState = l === null ? { baseLanes: t } : { baseLanes: l.baseLanes | t }),
        (a.childLanes = e.childLanes & ~t),
        (n.memoizedState = Ar),
        r)
      : ((t = ss(e, n, r.children, t)), (n.memoizedState = null), t)
  );
}
function us(e, n, t, r) {
  var l = e.mode,
    a = e.child;
  return (
    (n = { mode: "hidden", children: n }),
    (l & 2) == 0 && a !== null ? ((a.childLanes = 0), (a.pendingProps = n)) : (a = Lo(n, l, 0, null)),
    (t = Ht(t, l, r, null)),
    (a.return = e),
    (t.return = e),
    (a.sibling = t),
    (e.child = a),
    t
  );
}
function ss(e, n, t, r) {
  var l = e.child;
  return (
    (e = l.sibling),
    (t = Ge(l, { mode: "visible", children: t })),
    (n.mode & 2) == 0 && (t.lanes = r),
    (t.return = n),
    (t.sibling = null),
    e !== null && ((e.nextEffect = null), (e.flags = 8), (n.firstEffect = n.lastEffect = e)),
    (n.child = t)
  );
}
function as(e, n, t, r, l) {
  var a = n.mode,
    o = e.child;
  e = o.sibling;
  var u = { mode: "hidden", children: t };
  return (
    (a & 2) == 0 && n.child !== o
      ? ((t = n.child),
        (t.childLanes = 0),
        (t.pendingProps = u),
        (o = t.lastEffect),
        o !== null
          ? ((n.firstEffect = t.firstEffect), (n.lastEffect = o), (o.nextEffect = null))
          : (n.firstEffect = n.lastEffect = null))
      : (t = Ge(o, u)),
    e !== null ? (r = Ge(e, r)) : ((r = Ht(r, a, l, null)), (r.flags |= 2)),
    (r.return = n),
    (t.return = n),
    (t.sibling = r),
    (n.child = t),
    r
  );
}
function cs(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  t !== null && (t.lanes |= n), Ou(e.return, n);
}
function To(e, n, t, r, l, a) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
        lastEffect: a,
      })
    : ((o.isBackwards = n),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = t),
      (o.tailMode = l),
      (o.lastEffect = a));
}
function ds(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    a = r.tail;
  if ((pe(e, n, r.children, t), (r = Q.current), (r & 2) != 0)) (r = (r & 1) | 2), (n.flags |= 64);
  else {
    if (e !== null && (e.flags & 64) != 0)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && cs(e, t);
        else if (e.tag === 19) cs(e, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if (($(Q, r), (n.mode & 2) == 0)) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate), e !== null && zr(e) === null && (l = t), (t = t.sibling);
        (t = l),
          t === null ? ((l = n.child), (n.child = null)) : ((l = t.sibling), (t.sibling = null)),
          To(n, !1, l, t, a, n.lastEffect);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && zr(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        To(n, !0, t, null, a, n.lastEffect);
        break;
      case "together":
        To(n, !1, null, null, void 0, n.lastEffect);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function ze(e, n, t) {
  if ((e !== null && (n.dependencies = e.dependencies), (xn |= n.lanes), (t & n.childLanes) != 0)) {
    if (e !== null && n.child !== e.child) throw Error(g(153));
    if (n.child !== null) {
      for (e = n.child, t = Ge(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
        (e = e.sibling), (t = t.sibling = Ge(e, e.pendingProps)), (t.return = n);
      t.sibling = null;
    }
    return n.child;
  }
  return null;
}
var ps, Mo, ms, hs;
(ps = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
}),
  (Mo = function () {}),
  (ms = function (e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      (e = n.stateNode), pt(xe.current);
      var a = null;
      switch (t) {
        case "input":
          (l = fl(e, l)), (r = fl(e, r)), (a = []);
          break;
        case "option":
          (l = pl(e, l)), (r = pl(e, r)), (a = []);
          break;
        case "select":
          (l = U({}, l, { value: void 0 })), (r = U({}, r, { value: void 0 })), (a = []);
          break;
        case "textarea":
          (l = ml(e, l)), (r = ml(e, r)), (a = []);
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = vr);
      }
      yl(t, r);
      var o;
      t = null;
      for (d in l)
        if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
          if (d === "style") {
            var u = l[d];
            for (o in u) u.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
          } else
            d !== "dangerouslySetInnerHTML" &&
              d !== "children" &&
              d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              d !== "autoFocus" &&
              (Jt.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
      for (d in r) {
        var i = r[d];
        if (((u = l != null ? l[d] : void 0), r.hasOwnProperty(d) && i !== u && (i != null || u != null)))
          if (d === "style")
            if (u) {
              for (o in u) !u.hasOwnProperty(o) || (i && i.hasOwnProperty(o)) || (t || (t = {}), (t[o] = ""));
              for (o in i) i.hasOwnProperty(o) && u[o] !== i[o] && (t || (t = {}), (t[o] = i[o]));
            } else t || (a || (a = []), a.push(d, t)), (t = i);
          else
            d === "dangerouslySetInnerHTML"
              ? ((i = i ? i.__html : void 0),
                (u = u ? u.__html : void 0),
                i != null && u !== i && (a = a || []).push(d, i))
              : d === "children"
              ? (typeof i != "string" && typeof i != "number") || (a = a || []).push(d, "" + i)
              : d !== "suppressContentEditableWarning" &&
                d !== "suppressHydrationWarning" &&
                (Jt.hasOwnProperty(d)
                  ? (i != null && d === "onScroll" && B("scroll", e), a || u === i || (a = []))
                  : typeof i == "object" && i !== null && i.$$typeof === ol
                  ? i.toString()
                  : (a = a || []).push(d, i));
      }
      t && (a = a || []).push("style", t);
      var d = a;
      (n.updateQueue = d) && (n.flags |= 4);
    }
  }),
  (hs = function (e, n, t, r) {
    t !== r && (n.flags |= 4);
  });
function Fn(e, n) {
  if (!Ne)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; ) n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (n || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function Sf(e, n, t) {
  var r = n.pendingProps;
  switch (n.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return ce(n.type) && wr(), null;
    case 3:
      return (
        Wt(),
        H(fe),
        H(re),
        yo(),
        (r = n.stateNode),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) && (Rr(n) ? (n.flags |= 4) : r.hydrate || (n.flags |= 256)),
        Mo(n),
        null
      );
    case 5:
      mo(n);
      var l = pt(Mn.current);
      if (((t = n.type), e !== null && n.stateNode != null)) ms(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 128);
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(g(166));
          return null;
        }
        if (((e = pt(xe.current)), Rr(n))) {
          (r = n.stateNode), (t = n.type);
          var a = n.memoizedProps;
          switch (((r[He] = n), (r[gr] = a), t)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (e = 0; e < Sn.length; e++) B(Sn[e], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              ii(r, a), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!a.multiple }), B("invalid", r);
              break;
            case "textarea":
              ai(r, a), B("invalid", r);
          }
          yl(t, a), (e = null);
          for (var o in a)
            a.hasOwnProperty(o) &&
              ((l = a[o]),
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l && (e = ["children", l])
                  : typeof l == "number" && r.textContent !== "" + l && (e = ["children", "" + l])
                : Jt.hasOwnProperty(o) && l != null && o === "onScroll" && B("scroll", r));
          switch (t) {
            case "input":
              Gn(r), si(r, a, !0);
              break;
            case "textarea":
              Gn(r), ci(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = vr);
          }
          (r = e), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          switch (
            ((o = l.nodeType === 9 ? l : l.ownerDocument),
            e === hl.html && (e = di(t)),
            e === hl.html
              ? t === "script"
                ? ((e = o.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(t, { is: r.is }))
                : ((e = o.createElement(t)),
                  t === "select" && ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, t)),
            (e[He] = n),
            (e[gr] = r),
            ps(e, n, !1, !1),
            (n.stateNode = e),
            (o = gl(t, r)),
            t)
          ) {
            case "dialog":
              B("cancel", e), B("close", e), (l = r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", e), (l = r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Sn.length; l++) B(Sn[l], e);
              l = r;
              break;
            case "source":
              B("error", e), (l = r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", e), B("load", e), (l = r);
              break;
            case "details":
              B("toggle", e), (l = r);
              break;
            case "input":
              ii(e, r), (l = fl(e, r)), B("invalid", e);
              break;
            case "option":
              l = pl(e, r);
              break;
            case "select":
              (e._wrapperState = { wasMultiple: !!r.multiple }), (l = U({}, r, { value: void 0 })), B("invalid", e);
              break;
            case "textarea":
              ai(e, r), (l = ml(e, r)), B("invalid", e);
              break;
            default:
              l = r;
          }
          yl(t, l);
          var u = l;
          for (a in u)
            if (u.hasOwnProperty(a)) {
              var i = u[a];
              a === "style"
                ? hi(e, i)
                : a === "dangerouslySetInnerHTML"
                ? ((i = i ? i.__html : void 0), i != null && pi(e, i))
                : a === "children"
                ? typeof i == "string"
                  ? (t !== "textarea" || i !== "") && rn(e, i)
                  : typeof i == "number" && rn(e, "" + i)
                : a !== "suppressContentEditableWarning" &&
                  a !== "suppressHydrationWarning" &&
                  a !== "autoFocus" &&
                  (Jt.hasOwnProperty(a)
                    ? i != null && a === "onScroll" && B("scroll", e)
                    : i != null && br(e, a, i, o));
            }
          switch (t) {
            case "input":
              Gn(e), si(e, r, !1);
              break;
            case "textarea":
              Gn(e), ci(e);
              break;
            case "option":
              r.value != null && e.setAttribute("value", "" + Ie(r.value));
              break;
            case "select":
              (e.multiple = !!r.multiple),
                (a = r.value),
                a != null
                  ? Ct(e, !!r.multiple, a, !1)
                  : r.defaultValue != null && Ct(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof l.onClick == "function" && (e.onclick = vr);
          }
          vu(t, r) && (n.flags |= 4);
        }
        n.ref !== null && (n.flags |= 128);
      }
      return null;
    case 6:
      if (e && n.stateNode != null) hs(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(g(166));
        (t = pt(Mn.current)),
          pt(xe.current),
          Rr(n)
            ? ((r = n.stateNode), (t = n.memoizedProps), (r[He] = n), r.nodeValue !== t && (n.flags |= 4))
            : ((r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)), (r[He] = n), (n.stateNode = r));
      }
      return null;
    case 13:
      return (
        H(Q),
        (r = n.memoizedState),
        (n.flags & 64) != 0
          ? ((n.lanes = t), n)
          : ((r = r !== null),
            (t = !1),
            e === null ? n.memoizedProps.fallback !== void 0 && Rr(n) : (t = e.memoizedState !== null),
            r &&
              !t &&
              (n.mode & 2) != 0 &&
              ((e === null && n.memoizedProps.unstable_avoidThisFallback !== !0) || (Q.current & 1) != 0
                ? ne === 0 && (ne = 3)
                : ((ne === 0 || ne === 3) && (ne = 4),
                  se === null || ((xn & 134217727) == 0 && (Qt & 134217727) == 0) || Yt(se, ie))),
            (r || t) && (n.flags |= 4),
            null)
      );
    case 4:
      return Wt(), Mo(n), e === null && mu(n.stateNode.containerInfo), null;
    case 10:
      return uo(n), null;
    case 17:
      return ce(n.type) && wr(), null;
    case 19:
      if ((H(Q), (r = n.memoizedState), r === null)) return null;
      if (((a = (n.flags & 64) != 0), (o = r.rendering), o === null))
        if (a) Fn(r, !1);
        else {
          if (ne !== 0 || (e !== null && (e.flags & 64) != 0))
            for (e = n.child; e !== null; ) {
              if (((o = zr(e)), o !== null)) {
                for (
                  n.flags |= 64,
                    Fn(r, !1),
                    a = o.updateQueue,
                    a !== null && ((n.updateQueue = a), (n.flags |= 4)),
                    r.lastEffect === null && (n.firstEffect = null),
                    n.lastEffect = r.lastEffect,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (a = t),
                    (e = r),
                    (a.flags &= 2),
                    (a.nextEffect = null),
                    (a.firstEffect = null),
                    (a.lastEffect = null),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (t = t.sibling);
                return $(Q, (Q.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          r.tail !== null && le() > Oo && ((n.flags |= 64), (a = !0), Fn(r, !1), (n.lanes = 33554432));
        }
      else {
        if (!a)
          if (((e = zr(o)), e !== null)) {
            if (
              ((n.flags |= 64),
              (a = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              Fn(r, !0),
              r.tail === null && r.tailMode === "hidden" && !o.alternate && !Ne)
            )
              return (n = n.lastEffect = r.lastEffect), n !== null && (n.nextEffect = null), null;
          } else
            2 * le() - r.renderingStartTime > Oo &&
              t !== 1073741824 &&
              ((n.flags |= 64), (a = !0), Fn(r, !1), (n.lanes = 33554432));
        r.isBackwards
          ? ((o.sibling = n.child), (n.child = o))
          : ((t = r.last), t !== null ? (t.sibling = o) : (n.child = o), (r.last = o));
      }
      return r.tail !== null
        ? ((t = r.tail),
          (r.rendering = t),
          (r.tail = t.sibling),
          (r.lastEffect = n.lastEffect),
          (r.renderingStartTime = le()),
          (t.sibling = null),
          (n = Q.current),
          $(Q, a ? (n & 1) | 2 : n & 1),
          t)
        : null;
    case 23:
    case 24:
      return (
        zo(),
        e !== null &&
          (e.memoizedState !== null) != (n.memoizedState !== null) &&
          r.mode !== "unstable-defer-without-hiding" &&
          (n.flags |= 4),
        null
      );
  }
  throw Error(g(156, n.tag));
}
function Cf(e) {
  switch (e.tag) {
    case 1:
      ce(e.type) && wr();
      var n = e.flags;
      return n & 4096 ? ((e.flags = (n & -4097) | 64), e) : null;
    case 3:
      if ((Wt(), H(fe), H(re), yo(), (n = e.flags), (n & 64) != 0)) throw Error(g(285));
      return (e.flags = (n & -4097) | 64), e;
    case 5:
      return mo(e), null;
    case 13:
      return H(Q), (n = e.flags), n & 4096 ? ((e.flags = (n & -4097) | 64), e) : null;
    case 19:
      return H(Q), null;
    case 4:
      return Wt(), null;
    case 10:
      return uo(e), null;
    case 23:
    case 24:
      return zo(), null;
    default:
      return null;
  }
}
function Ro(e, n) {
  try {
    var t = "",
      r = n;
    do (t += na(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (a) {
    l =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: n, stack: l };
}
function jo(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var _f = typeof WeakMap == "function" ? WeakMap : Map;
function vs(e, n, t) {
  (t = Ye(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      Br || ((Br = !0), (Do = r)), jo(e, n);
    }),
    t
  );
}
function ys(e, n, t) {
  (t = Ye(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function () {
      return jo(e, n), r(l);
    };
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (t.callback = function () {
        typeof r != "function" && (Le === null ? (Le = new Set([this])) : Le.add(this), jo(e, n));
        var o = n.stack;
        this.componentDidCatch(n.value, { componentStack: o !== null ? o : "" });
      }),
    t
  );
}
var xf = typeof WeakSet == "function" ? WeakSet : Set;
function gs(e) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (t) {
        qe(e, t);
      }
    else n.current = null;
}
function Nf(e, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (n.flags & 256 && e !== null) {
        var t = e.memoizedProps,
          r = e.memoizedState;
        (e = n.stateNode),
          (n = e.getSnapshotBeforeUpdate(n.elementType === n.type ? t : ke(n.type, t), r)),
          (e.__reactInternalSnapshotBeforeUpdate = n);
      }
      return;
    case 3:
      n.flags & 256 && Jl(n.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(g(163));
}
function Lf(e, n, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (((n = t.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)) {
        e = n = n.next;
        do {
          if ((e.tag & 3) == 3) {
            var r = e.create;
            e.destroy = r();
          }
          e = e.next;
        } while (e !== n);
      }
      if (((n = t.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)) {
        e = n = n.next;
        do {
          var l = e;
          (r = l.next), (l = l.tag), (l & 4) != 0 && (l & 1) != 0 && (ws(t, e), Pf(t, e)), (e = r);
        } while (e !== n);
      }
      return;
    case 1:
      (e = t.stateNode),
        t.flags & 4 &&
          (n === null
            ? e.componentDidMount()
            : ((r = t.elementType === t.type ? n.memoizedProps : ke(t.type, n.memoizedProps)),
              e.componentDidUpdate(r, n.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
        (n = t.updateQueue),
        n !== null && ju(t, n, e);
      return;
    case 3:
      if (((n = t.updateQueue), n !== null)) {
        if (((e = null), t.child !== null))
          switch (t.child.tag) {
            case 5:
              e = t.child.stateNode;
              break;
            case 1:
              e = t.child.stateNode;
          }
        ju(t, n, e);
      }
      return;
    case 5:
      (e = t.stateNode), n === null && t.flags & 4 && vu(t.type, t.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      t.memoizedState === null &&
        ((t = t.alternate),
        t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null && Oi(t))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(g(163));
}
function Es(e, n) {
  for (var t = e; ; ) {
    if (t.tag === 5) {
      var r = t.stateNode;
      if (n)
        (r = r.style),
          typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : (r.display = "none");
      else {
        r = t.stateNode;
        var l = t.memoizedProps.style;
        (l = l != null && l.hasOwnProperty("display") ? l.display : null), (r.style.display = mi("display", l));
      }
    } else if (t.tag === 6) t.stateNode.nodeValue = n ? "" : t.memoizedProps;
    else if (((t.tag !== 23 && t.tag !== 24) || t.memoizedState === null || t === e) && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
}
function Ss(e, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(eo, n);
    } catch (a) {}
  switch (n.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (((e = n.updateQueue), e !== null && ((e = e.lastEffect), e !== null))) {
        var t = (e = e.next);
        do {
          var r = t,
            l = r.destroy;
          if (((r = r.tag), l !== void 0))
            if ((r & 4) != 0) ws(n, t);
            else {
              r = n;
              try {
                l();
              } catch (a) {
                qe(r, a);
              }
            }
          t = t.next;
        } while (t !== e);
      }
      break;
    case 1:
      if ((gs(n), (e = n.stateNode), typeof e.componentWillUnmount == "function"))
        try {
          (e.props = n.memoizedProps), (e.state = n.memoizedState), e.componentWillUnmount();
        } catch (a) {
          qe(n, a);
        }
      break;
    case 5:
      gs(n);
      break;
    case 4:
      ks(e, n);
  }
}
function Cs(e) {
  (e.alternate = null),
    (e.child = null),
    (e.dependencies = null),
    (e.firstEffect = null),
    (e.lastEffect = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.return = null),
    (e.updateQueue = null);
}
function _s(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xs(e) {
  e: {
    for (var n = e.return; n !== null; ) {
      if (_s(n)) break e;
      n = n.return;
    }
    throw Error(g(160));
  }
  var t = n;
  switch (((n = t.stateNode), t.tag)) {
    case 5:
      var r = !1;
      break;
    case 3:
      (n = n.containerInfo), (r = !0);
      break;
    case 4:
      (n = n.containerInfo), (r = !0);
      break;
    default:
      throw Error(g(161));
  }
  t.flags & 16 && (rn(n, ""), (t.flags &= -17));
  e: n: for (t = e; ; ) {
    for (; t.sibling === null; ) {
      if (t.return === null || _s(t.return)) {
        t = null;
        break e;
      }
      t = t.return;
    }
    for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue n;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) {
      t = t.stateNode;
      break e;
    }
  }
  r ? Io(e, t, n) : Fo(e, t, n);
}
function Io(e, n, t) {
  var r = e.tag,
    l = r === 5 || r === 6;
  if (l)
    (e = l ? e.stateNode : e.stateNode.instance),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8 ? ((n = t.parentNode), n.insertBefore(e, t)) : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = vr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Io(e, n, t), e = e.sibling; e !== null; ) Io(e, n, t), (e = e.sibling);
}
function Fo(e, n, t) {
  var r = e.tag,
    l = r === 5 || r === 6;
  if (l) (e = l ? e.stateNode : e.stateNode.instance), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fo(e, n, t), e = e.sibling; e !== null; ) Fo(e, n, t), (e = e.sibling);
}
function ks(e, n) {
  for (var t = n, r = !1, l, a; ; ) {
    if (!r) {
      r = t.return;
      e: for (;;) {
        if (r === null) throw Error(g(160));
        switch (((l = r.stateNode), r.tag)) {
          case 5:
            a = !1;
            break e;
          case 3:
            (l = l.containerInfo), (a = !0);
            break e;
          case 4:
            (l = l.containerInfo), (a = !0);
            break e;
        }
        r = r.return;
      }
      r = !0;
    }
    if (t.tag === 5 || t.tag === 6) {
      e: for (var o = e, u = t, i = u; ; )
        if ((Ss(o, i), i.child !== null && i.tag !== 4)) (i.child.return = i), (i = i.child);
        else {
          if (i === u) break e;
          for (; i.sibling === null; ) {
            if (i.return === null || i.return === u) break e;
            i = i.return;
          }
          (i.sibling.return = i.return), (i = i.sibling);
        }
      a
        ? ((o = l), (u = t.stateNode), o.nodeType === 8 ? o.parentNode.removeChild(u) : o.removeChild(u))
        : l.removeChild(t.stateNode);
    } else if (t.tag === 4) {
      if (t.child !== null) {
        (l = t.stateNode.containerInfo), (a = !0), (t.child.return = t), (t = t.child);
        continue;
      }
    } else if ((Ss(e, t), t.child !== null)) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      (t = t.return), t.tag === 4 && (r = !1);
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
}
function Vo(e, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var t = n.updateQueue;
      if (((t = t !== null ? t.lastEffect : null), t !== null)) {
        var r = (t = t.next);
        do (r.tag & 3) == 3 && ((e = r.destroy), (r.destroy = void 0), e !== void 0 && e()), (r = r.next);
        while (r !== t);
      }
      return;
    case 1:
      return;
    case 5:
      if (((t = n.stateNode), t != null)) {
        r = n.memoizedProps;
        var l = e !== null ? e.memoizedProps : r;
        e = n.type;
        var a = n.updateQueue;
        if (((n.updateQueue = null), a !== null)) {
          for (
            t[gr] = r, e === "input" && r.type === "radio" && r.name != null && ui(t, r), gl(e, l), n = gl(e, r), l = 0;
            l < a.length;
            l += 2
          ) {
            var o = a[l],
              u = a[l + 1];
            o === "style"
              ? hi(t, u)
              : o === "dangerouslySetInnerHTML"
              ? pi(t, u)
              : o === "children"
              ? rn(t, u)
              : br(t, o, u, n);
          }
          switch (e) {
            case "input":
              dl(t, r);
              break;
            case "textarea":
              fi(t, r);
              break;
            case "select":
              (e = t._wrapperState.wasMultiple),
                (t._wrapperState.wasMultiple = !!r.multiple),
                (a = r.value),
                a != null
                  ? Ct(t, !!r.multiple, a, !1)
                  : e !== !!r.multiple &&
                    (r.defaultValue != null
                      ? Ct(t, !!r.multiple, r.defaultValue, !0)
                      : Ct(t, !!r.multiple, r.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (n.stateNode === null) throw Error(g(162));
      n.stateNode.nodeValue = n.memoizedProps;
      return;
    case 3:
      (t = n.stateNode), t.hydrate && ((t.hydrate = !1), Oi(t.containerInfo));
      return;
    case 12:
      return;
    case 13:
      n.memoizedState !== null && ((Uo = le()), Es(n.child, !0)), Ns(n);
      return;
    case 19:
      Ns(n);
      return;
    case 17:
      return;
    case 23:
    case 24:
      Es(n, n.memoizedState !== null);
      return;
  }
  throw Error(g(163));
}
function Ns(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new xf()),
      n.forEach(function (r) {
        var l = Tf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function Mf(e, n) {
  return e !== null && ((e = e.memoizedState), e === null || e.dehydrated !== null)
    ? ((n = n.memoizedState), n !== null && n.dehydrated === null)
    : !1;
}
var Of = Math.ceil,
  Hr = ot.ReactCurrentDispatcher,
  Ao = ot.ReactCurrentOwner,
  R = 0,
  se = null,
  X = null,
  ie = 0,
  vt = 0,
  Bo = We(0),
  ne = 0,
  Wr = null,
  Zt = 0,
  xn = 0,
  Qt = 0,
  Ho = 0,
  Wo = null,
  Uo = 0,
  Oo = Infinity;
function Kt() {
  Oo = le() + 500;
}
var C = null,
  Br = !1,
  Do = null,
  Le = null,
  be = !1,
  Un = null,
  Vn = 90,
  $o = [],
  Qo = [],
  Re = null,
  An = 0,
  Yo = null,
  $r = -1,
  je = 0,
  Qr = 0,
  Bn = null,
  Yr = !1;
function he() {
  return (R & 48) != 0 ? le() : $r !== -1 ? $r : ($r = le());
}
function Ke(e) {
  if (((e = e.mode), (e & 2) == 0)) return 1;
  if ((e & 4) == 0) return Vt() === 99 ? 1 : 2;
  if ((je === 0 && (je = Zt), vf.transition !== 0)) {
    Qr !== 0 && (Qr = Wo !== null ? Wo.pendingLanes : 0), (e = je);
    var n = 4186112 & ~Qr;
    return (n &= -n), n === 0 && ((e = 4186112 & ~e), (n = e & -e), n === 0 && (n = 8192)), n;
  }
  return (e = Vt()), (R & 4) != 0 && e === 98 ? (e = or(12, je)) : ((e = ga(e)), (e = or(e, je))), e;
}
function Xe(e, n, t) {
  if (50 < An) throw ((An = 0), (Yo = null), Error(g(185)));
  if (((e = Zr(e, n)), e === null)) return null;
  ir(e, n, t), e === se && ((Qt |= n), ne === 4 && Yt(e, ie));
  var r = Vt();
  n === 1
    ? (R & 8) != 0 && (R & 48) == 0
      ? Zo(e)
      : (Ee(e, t), R === 0 && (Kt(), _e()))
    : ((R & 4) == 0 || (r !== 98 && r !== 99) || (Re === null ? (Re = new Set([e])) : Re.add(e)), Ee(e, t)),
    (Wo = e);
}
function Zr(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n), (t = e.alternate), t !== null && (t.childLanes |= n), (t = e), (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
function Ee(e, n) {
  for (
    var t = e.callbackNode, r = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes;
    0 < o;

  ) {
    var u = 31 - Ae(o),
      i = 1 << u,
      d = a[u];
    if (d === -1) {
      if ((i & r) == 0 || (i & l) != 0) {
        (d = n), Lt(i);
        var w = A;
        a[u] = 10 <= w ? d + 250 : 6 <= w ? d + 5e3 : -1;
      }
    } else d <= n && (e.expiredLanes |= i);
    o &= ~i;
  }
  if (((r = mn(e, e === se ? ie : 0)), (n = A), r === 0))
    t !== null && (t !== lo && no(t), (e.callbackNode = null), (e.callbackPriority = 0));
  else {
    if (t !== null) {
      if (e.callbackPriority === n) return;
      t !== lo && no(t);
    }
    n === 15
      ? ((t = Zo.bind(null, e)), Me === null ? ((Me = [t]), (Sr = to(kr, Mu))) : Me.push(t), (t = lo))
      : n === 14
      ? (t = _n(99, Zo.bind(null, e)))
      : ((t = wa(n)), (t = _n(t, Ps.bind(null, e)))),
      (e.callbackPriority = n),
      (e.callbackNode = t);
  }
}
function Ps(e) {
  if ((($r = -1), (Qr = je = 0), (R & 48) != 0)) throw Error(g(327));
  var n = e.callbackNode;
  if (et() && e.callbackNode !== n) return null;
  var t = mn(e, e === se ? ie : 0);
  if (t === 0) return null;
  var r = t,
    l = R;
  R |= 16;
  var a = Ts();
  (se !== e || ie !== r) && (Kt(), Xt(e, r));
  do
    try {
      zf();
      break;
    } catch (u) {
      Ls(e, u);
    }
  while (1);
  if ((io(), (Hr.current = a), (R = l), X !== null ? (r = 0) : ((se = null), (ie = 0), (r = ne)), (Zt & Qt) != 0))
    Xt(e, 0);
  else if (r !== 0) {
    if (
      (r === 2 &&
        ((R |= 64), e.hydrate && ((e.hydrate = !1), Jl(e.containerInfo)), (t = Ui(e)), t !== 0 && (r = Hn(e, t))),
      r === 1)
    )
      throw ((n = Wr), Xt(e, 0), Yt(e, t), Ee(e, le()), n);
    switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = t), r)) {
      case 0:
      case 1:
        throw Error(g(345));
      case 2:
        yt(e);
        break;
      case 3:
        if ((Yt(e, t), (t & 62914560) === t && ((r = Uo + 500 - le()), 10 < r))) {
          if (mn(e, 0) !== 0) break;
          if (((l = e.suspendedLanes), (l & t) !== t)) {
            he(), (e.pingedLanes |= e.suspendedLanes & l);
            break;
          }
          e.timeoutHandle = yu(yt.bind(null, e), r);
          break;
        }
        yt(e);
        break;
      case 4:
        if ((Yt(e, t), (t & 4186112) === t)) break;
        for (r = e.eventTimes, l = -1; 0 < t; ) {
          var o = 31 - Ae(t);
          (a = 1 << o), (o = r[o]), o > l && (l = o), (t &= ~a);
        }
        if (
          ((t = l),
          (t = le() - t),
          (t =
            (120 > t
              ? 120
              : 480 > t
              ? 480
              : 1080 > t
              ? 1080
              : 1920 > t
              ? 1920
              : 3e3 > t
              ? 3e3
              : 4320 > t
              ? 4320
              : 1960 * Of(t / 1960)) - t),
          10 < t)
        ) {
          e.timeoutHandle = yu(yt.bind(null, e), t);
          break;
        }
        yt(e);
        break;
      case 5:
        yt(e);
        break;
      default:
        throw Error(g(329));
    }
  }
  return Ee(e, le()), e.callbackNode === n ? Ps.bind(null, e) : null;
}
function Yt(e, n) {
  for (n &= ~Ho, n &= ~Qt, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Ae(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function Zo(e) {
  if ((R & 48) != 0) throw Error(g(327));
  if ((et(), e === se && (e.expiredLanes & ie) != 0)) {
    var n = ie,
      t = Hn(e, n);
    (Zt & Qt) != 0 && ((n = mn(e, n)), (t = Hn(e, n)));
  } else (n = mn(e, 0)), (t = Hn(e, n));
  if (
    (e.tag !== 0 &&
      t === 2 &&
      ((R |= 64), e.hydrate && ((e.hydrate = !1), Jl(e.containerInfo)), (n = Ui(e)), n !== 0 && (t = Hn(e, n))),
    t === 1)
  )
    throw ((t = Wr), Xt(e, 0), Yt(e, n), Ee(e, le()), t);
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = n), yt(e), Ee(e, le()), null;
}
function Rf() {
  if (Re !== null) {
    var e = Re;
    (Re = null),
      e.forEach(function (n) {
        (n.expiredLanes |= 24 & n.pendingLanes), Ee(n, le());
      });
  }
  _e();
}
function Ms(e, n) {
  var t = R;
  R |= 1;
  try {
    return e(n);
  } finally {
    (R = t), R === 0 && (Kt(), _e());
  }
}
function Os(e, n) {
  var t = R;
  (R &= -2), (R |= 8);
  try {
    return e(n);
  } finally {
    (R = t), R === 0 && (Kt(), _e());
  }
}
function Vr(e, n) {
  $(Bo, vt), (vt |= n), (Zt |= n);
}
function zo() {
  (vt = Bo.current), H(Bo);
}
function Xt(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), ff(t)), X !== null))
    for (t = X.return; t !== null; ) {
      var r = t;
      switch (r.tag) {
        case 1:
          (r = r.type.childContextTypes), r != null && wr();
          break;
        case 3:
          Wt(), H(fe), H(re), yo();
          break;
        case 5:
          mo(r);
          break;
        case 4:
          Wt();
          break;
        case 13:
          H(Q);
          break;
        case 19:
          H(Q);
          break;
        case 10:
          uo(r);
          break;
        case 23:
        case 24:
          zo();
      }
      t = t.return;
    }
  (se = e), (X = Ge(e.current, null)), (ie = vt = Zt = n), (ne = 0), (Wr = null), (Ho = Qt = xn = 0);
}
function Ls(e, n) {
  do {
    var t = X;
    try {
      if ((io(), (On.current = Dr), jr)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        jr = !1;
      }
      if (((zn = 0), (te = oe = Y = null), (Rn = !1), (Ao.current = null), t === null || t.return === null)) {
        (ne = 1), (Wr = n), (X = null);
        break;
      }
      e: {
        var a = e,
          o = t.return,
          u = t,
          i = n;
        if (
          ((n = ie),
          (u.flags |= 2048),
          (u.firstEffect = u.lastEffect = null),
          i !== null && typeof i == "object" && typeof i.then == "function")
        ) {
          var d = i;
          if ((u.mode & 2) == 0) {
            var w = u.alternate;
            w
              ? ((u.updateQueue = w.updateQueue), (u.memoizedState = w.memoizedState), (u.lanes = w.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var z = (Q.current & 1) != 0,
            v = o;
          do {
            var S;
            if ((S = v.tag === 13)) {
              var L = v.memoizedState;
              if (L !== null) S = L.dehydrated !== null;
              else {
                var x = v.memoizedProps;
                S = x.fallback === void 0 ? !1 : x.unstable_avoidThisFallback !== !0 ? !0 : !z;
              }
            }
            if (S) {
              var f = v.updateQueue;
              if (f === null) {
                var s = new Set();
                s.add(d), (v.updateQueue = s);
              } else f.add(d);
              if ((v.mode & 2) == 0) {
                if (((v.flags |= 64), (u.flags |= 16384), (u.flags &= -2981), u.tag === 1))
                  if (u.alternate === null) u.tag = 17;
                  else {
                    var c = Ye(-1, 1);
                    (c.tag = 2), Ze(u, c);
                  }
                u.lanes |= 1;
                break e;
              }
              (i = void 0), (u = n);
              var h = a.pingCache;
              if (
                (h === null
                  ? ((h = a.pingCache = new _f()), (i = new Set()), h.set(d, i))
                  : ((i = h.get(d)), i === void 0 && ((i = new Set()), h.set(d, i))),
                !i.has(u))
              ) {
                i.add(u);
                var m = jf.bind(null, a, d, u);
                d.then(m, m);
              }
              (v.flags |= 4096), (v.lanes = n);
              break e;
            }
            v = v.return;
          } while (v !== null);
          i = Error(
            (St(u.type) || "A React component") +
              ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`,
          );
        }
        ne !== 5 && (ne = 2), (i = Ro(i, u)), (v = o);
        do {
          switch (v.tag) {
            case 3:
              (a = i), (v.flags |= 4096), (n &= -n), (v.lanes |= n);
              var N = vs(v, a, n);
              Ru(v, N);
              break e;
            case 1:
              a = i;
              var k = v.type,
                _ = v.stateNode;
              if (
                (v.flags & 64) == 0 &&
                (typeof k.getDerivedStateFromError == "function" ||
                  (_ !== null && typeof _.componentDidCatch == "function" && (Le === null || !Le.has(_))))
              ) {
                (v.flags |= 4096), (n &= -n), (v.lanes |= n);
                var M = ys(v, a, n);
                Ru(v, M);
                break e;
              }
          }
          v = v.return;
        } while (v !== null);
      }
      zs(t);
    } catch (T) {
      (n = T), X === t && t !== null && (X = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function Ts() {
  var e = Hr.current;
  return (Hr.current = Dr), e === null ? Dr : e;
}
function Hn(e, n) {
  var t = R;
  R |= 16;
  var r = Ts();
  (se === e && ie === n) || Xt(e, n);
  do
    try {
      Df();
      break;
    } catch (l) {
      Ls(e, l);
    }
  while (1);
  if ((io(), (R = t), (Hr.current = r), X !== null)) throw Error(g(261));
  return (se = null), (ie = 0), ne;
}
function Df() {
  for (; X !== null; ) Rs(X);
}
function zf() {
  for (; X !== null && !pf(); ) Rs(X);
}
function Rs(e) {
  var n = js(e.alternate, e, vt);
  (e.memoizedProps = e.pendingProps), n === null ? zs(e) : (X = n), (Ao.current = null);
}
function zs(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), (n.flags & 2048) == 0)) {
      if (((t = Sf(t, n, vt)), t !== null)) {
        X = t;
        return;
      }
      if (
        ((t = n),
        (t.tag !== 24 && t.tag !== 23) || t.memoizedState === null || (vt & 1073741824) != 0 || (t.mode & 4) == 0)
      ) {
        for (var r = 0, l = t.child; l !== null; ) (r |= l.lanes | l.childLanes), (l = l.sibling);
        t.childLanes = r;
      }
      e !== null &&
        (e.flags & 2048) == 0 &&
        (e.firstEffect === null && (e.firstEffect = n.firstEffect),
        n.lastEffect !== null &&
          (e.lastEffect !== null && (e.lastEffect.nextEffect = n.firstEffect), (e.lastEffect = n.lastEffect)),
        1 < n.flags &&
          (e.lastEffect !== null ? (e.lastEffect.nextEffect = n) : (e.firstEffect = n), (e.lastEffect = n)));
    } else {
      if (((t = Cf(n)), t !== null)) {
        (t.flags &= 2047), (X = t);
        return;
      }
      e !== null && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
    }
    if (((n = n.sibling), n !== null)) {
      X = n;
      return;
    }
    X = n = e;
  } while (n !== null);
  ne === 0 && (ne = 5);
}
function yt(e) {
  var n = Vt();
  return dt(99, If.bind(null, e, n)), null;
}
function If(e, n) {
  do et();
  while (Un !== null);
  if ((R & 48) != 0) throw Error(g(327));
  var t = e.finishedWork;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current)) throw Error(g(177));
  e.callbackNode = null;
  var r = t.lanes | t.childLanes,
    l = r,
    a = e.pendingLanes & ~l;
  (e.pendingLanes = l),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= l),
    (e.mutableReadLanes &= l),
    (e.entangledLanes &= l),
    (l = e.entanglements);
  for (var o = e.eventTimes, u = e.expirationTimes; 0 < a; ) {
    var i = 31 - Ae(a),
      d = 1 << i;
    (l[i] = 0), (o[i] = -1), (u[i] = -1), (a &= ~d);
  }
  if (
    (Re !== null && (r & 24) == 0 && Re.has(e) && Re.delete(e),
    e === se && ((X = se = null), (ie = 0)),
    1 < t.flags
      ? t.lastEffect !== null
        ? ((t.lastEffect.nextEffect = t), (r = t.firstEffect))
        : (r = t)
      : (r = t.firstEffect),
    r !== null)
  ) {
    if (((l = R), (R |= 32), (Ao.current = null), (Kl = ur), (o = ou()), $l(o))) {
      if ("selectionStart" in o) u = { start: o.selectionStart, end: o.selectionEnd };
      else
        e: if (
          ((u = ((u = o.ownerDocument) && u.defaultView) || window),
          (d = u.getSelection && u.getSelection()) && d.rangeCount !== 0)
        ) {
          (u = d.anchorNode), (a = d.anchorOffset), (i = d.focusNode), (d = d.focusOffset);
          try {
            u.nodeType, i.nodeType;
          } catch (T) {
            u = null;
            break e;
          }
          var w = 0,
            z = -1,
            v = -1,
            S = 0,
            L = 0,
            x = o,
            f = null;
          n: for (;;) {
            for (
              var s;
              x !== u || (a !== 0 && x.nodeType !== 3) || (z = w + a),
                x !== i || (d !== 0 && x.nodeType !== 3) || (v = w + d),
                x.nodeType === 3 && (w += x.nodeValue.length),
                (s = x.firstChild) !== null;

            )
              (f = x), (x = s);
            for (;;) {
              if (x === o) break n;
              if ((f === u && ++S === a && (z = w), f === i && ++L === d && (v = w), (s = x.nextSibling) !== null))
                break;
              (x = f), (f = x.parentNode);
            }
            x = s;
          }
          u = z === -1 || v === -1 ? null : { start: z, end: v };
        } else u = null;
      u = u || { start: 0, end: 0 };
    } else u = null;
    (Xl = { focusedElem: o, selectionRange: u }), (ur = !1), (Bn = null), (Yr = !1), (C = r);
    do
      try {
        Ff();
      } catch (T) {
        if (C === null) throw Error(g(330));
        qe(C, T), (C = C.nextEffect);
      }
    while (C !== null);
    (Bn = null), (C = r);
    do
      try {
        for (o = e; C !== null; ) {
          var c = C.flags;
          if ((c & 16 && rn(C.stateNode, ""), c & 128)) {
            var h = C.alternate;
            if (h !== null) {
              var m = h.ref;
              m !== null && (typeof m == "function" ? m(null) : (m.current = null));
            }
          }
          switch (c & 1038) {
            case 2:
              xs(C), (C.flags &= -3);
              break;
            case 6:
              xs(C), (C.flags &= -3), Vo(C.alternate, C);
              break;
            case 1024:
              C.flags &= -1025;
              break;
            case 1028:
              (C.flags &= -1025), Vo(C.alternate, C);
              break;
            case 4:
              Vo(C.alternate, C);
              break;
            case 8:
              (u = C), ks(o, u);
              var N = u.alternate;
              Cs(u), N !== null && Cs(N);
          }
          C = C.nextEffect;
        }
      } catch (T) {
        if (C === null) throw Error(g(330));
        qe(C, T), (C = C.nextEffect);
      }
    while (C !== null);
    if (
      ((m = Xl),
      (h = ou()),
      (c = m.focusedElem),
      (o = m.selectionRange),
      h !== c && c && c.ownerDocument && lu(c.ownerDocument.documentElement, c))
    ) {
      for (
        o !== null &&
          $l(c) &&
          ((h = o.start),
          (m = o.end),
          m === void 0 && (m = h),
          ("selectionStart" in c)
            ? ((c.selectionStart = h), (c.selectionEnd = Math.min(m, c.value.length)))
            : ((m = ((h = c.ownerDocument || document) && h.defaultView) || window),
              m.getSelection &&
                ((m = m.getSelection()),
                (u = c.textContent.length),
                (N = Math.min(o.start, u)),
                (o = o.end === void 0 ? N : Math.min(o.end, u)),
                !m.extend && N > o && ((u = o), (o = N), (N = u)),
                (u = ru(c, N)),
                (a = ru(c, o)),
                u &&
                  a &&
                  (m.rangeCount !== 1 ||
                    m.anchorNode !== u.node ||
                    m.anchorOffset !== u.offset ||
                    m.focusNode !== a.node ||
                    m.focusOffset !== a.offset) &&
                  ((h = h.createRange()),
                  h.setStart(u.node, u.offset),
                  m.removeAllRanges(),
                  N > o ? (m.addRange(h), m.extend(a.node, a.offset)) : (h.setEnd(a.node, a.offset), m.addRange(h)))))),
          h = [],
          m = c;
        (m = m.parentNode);

      )
        m.nodeType === 1 && h.push({ element: m, left: m.scrollLeft, top: m.scrollTop });
      for (typeof c.focus == "function" && c.focus(), c = 0; c < h.length; c++)
        (m = h[c]), (m.element.scrollLeft = m.left), (m.element.scrollTop = m.top);
    }
    (ur = !!Kl), (Xl = Kl = null), (e.current = t), (C = r);
    do
      try {
        for (c = e; C !== null; ) {
          var k = C.flags;
          if ((k & 36 && Lf(c, C.alternate, C), k & 128)) {
            h = void 0;
            var _ = C.ref;
            if (_ !== null) {
              var M = C.stateNode;
              switch (C.tag) {
                case 5:
                  h = M;
                  break;
                default:
                  h = M;
              }
              typeof _ == "function" ? _(h) : (_.current = h);
            }
          }
          C = C.nextEffect;
        }
      } catch (T) {
        if (C === null) throw Error(g(330));
        qe(C, T), (C = C.nextEffect);
      }
    while (C !== null);
    (C = null), hf(), (R = l);
  } else e.current = t;
  if (be) (be = !1), (Un = e), (Vn = n);
  else
    for (C = r; C !== null; )
      (n = C.nextEffect),
        (C.nextEffect = null),
        C.flags & 8 && ((k = C), (k.sibling = null), (k.stateNode = null)),
        (C = n);
  if (
    ((r = e.pendingLanes),
    r === 0 && (Le = null),
    r === 1 ? (e === Yo ? An++ : ((An = 0), (Yo = e))) : (An = 0),
    (t = t.stateNode),
    ct && typeof ct.onCommitFiberRoot == "function")
  )
    try {
      ct.onCommitFiberRoot(eo, t, void 0, (t.current.flags & 64) == 64);
    } catch (T) {}
  if ((Ee(e, le()), Br)) throw ((Br = !1), (e = Do), (Do = null), e);
  return (R & 8) != 0 || _e(), null;
}
function Ff() {
  for (; C !== null; ) {
    var e = C.alternate;
    Yr ||
      Bn === null ||
      ((C.flags & 8) != 0 ? _i(C, Bn) && (Yr = !0) : C.tag === 13 && Mf(e, C) && _i(C, Bn) && (Yr = !0));
    var n = C.flags;
    (n & 256) != 0 && Nf(e, C),
      (n & 512) == 0 ||
        be ||
        ((be = !0),
        _n(97, function () {
          return et(), null;
        })),
      (C = C.nextEffect);
  }
}
function et() {
  if (Vn !== 90) {
    var e = 97 < Vn ? 97 : Vn;
    return (Vn = 90), dt(e, Uf);
  }
  return !1;
}
function Pf(e, n) {
  $o.push(n, e),
    be ||
      ((be = !0),
      _n(97, function () {
        return et(), null;
      }));
}
function ws(e, n) {
  Qo.push(n, e),
    be ||
      ((be = !0),
      _n(97, function () {
        return et(), null;
      }));
}
function Uf() {
  if (Un === null) return !1;
  var e = Un;
  if (((Un = null), (R & 48) != 0)) throw Error(g(331));
  var n = R;
  R |= 32;
  var t = Qo;
  Qo = [];
  for (var r = 0; r < t.length; r += 2) {
    var l = t[r],
      a = t[r + 1],
      o = l.destroy;
    if (((l.destroy = void 0), typeof o == "function"))
      try {
        o();
      } catch (i) {
        if (a === null) throw Error(g(330));
        qe(a, i);
      }
  }
  for (t = $o, $o = [], r = 0; r < t.length; r += 2) {
    (l = t[r]), (a = t[r + 1]);
    try {
      var u = l.create;
      l.destroy = u();
    } catch (i) {
      if (a === null) throw Error(g(330));
      qe(a, i);
    }
  }
  for (u = e.current.firstEffect; u !== null; )
    (e = u.nextEffect), (u.nextEffect = null), u.flags & 8 && ((u.sibling = null), (u.stateNode = null)), (u = e);
  return (R = n), _e(), !0;
}
function Ds(e, n, t) {
  (n = Ro(t, n)), (n = vs(e, n, 1)), Ze(e, n), (n = he()), (e = Zr(e, 1)), e !== null && (ir(e, 1, n), Ee(e, n));
}
function qe(e, n) {
  if (e.tag === 3) Ds(e, e, n);
  else
    for (var t = e.return; t !== null; ) {
      if (t.tag === 3) {
        Ds(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (Le === null || !Le.has(r)))
        ) {
          e = Ro(n, e);
          var l = ys(t, e, 1);
          if ((Ze(t, l), (l = he()), (t = Zr(t, 1)), t !== null)) ir(t, 1, l), Ee(t, l);
          else if (typeof r.componentDidCatch == "function" && (Le === null || !Le.has(r)))
            try {
              r.componentDidCatch(n, e);
            } catch (a) {}
          break;
        }
      }
      t = t.return;
    }
}
function jf(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = he()),
    (e.pingedLanes |= e.suspendedLanes & t),
    se === e &&
      (ie & t) === t &&
      (ne === 4 || (ne === 3 && (ie & 62914560) === ie && 500 > le() - Uo) ? Xt(e, 0) : (Ho |= t)),
    Ee(e, n);
}
function Tf(e, n) {
  var t = e.stateNode;
  t !== null && t.delete(n),
    (n = 0),
    n === 0 &&
      ((n = e.mode),
      (n & 2) == 0
        ? (n = 1)
        : (n & 4) == 0
        ? (n = Vt() === 99 ? 1 : 2)
        : (je === 0 && (je = Zt), (n = Tt(62914560 & ~je)), n === 0 && (n = 4194304))),
    (t = he()),
    (e = Zr(e, n)),
    e !== null && (ir(e, n, t), Ee(e, t));
}
var js;
js = function (e, n, t) {
  var r = n.lanes;
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || fe.current) Se = !0;
    else if ((t & r) != 0) Se = (e.flags & 16384) != 0;
    else {
      switch (((Se = !1), n.tag)) {
        case 3:
          is(n), vo();
          break;
        case 5:
          Bu(n);
          break;
        case 1:
          ce(n.type) && Er(n);
          break;
        case 4:
          po(n, n.stateNode.containerInfo);
          break;
        case 10:
          r = n.memoizedProps.value;
          var l = n.type._context;
          $(Cr, l._currentValue), (l._currentValue = r);
          break;
        case 13:
          if (n.memoizedState !== null)
            return (t & n.child.childLanes) != 0
              ? fs(e, n, t)
              : ($(Q, Q.current & 1), (n = ze(e, n, t)), n !== null ? n.sibling : null);
          $(Q, Q.current & 1);
          break;
        case 19:
          if (((r = (t & n.childLanes) != 0), (e.flags & 64) != 0)) {
            if (r) return ds(e, n, t);
            n.flags |= 64;
          }
          if (
            ((l = n.memoizedState),
            l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
            $(Q, Q.current),
            r)
          )
            break;
          return null;
        case 23:
        case 24:
          return (n.lanes = 0), No(e, n, t);
      }
      return ze(e, n, t);
    }
  else Se = !1;
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      if (
        ((r = n.type),
        e !== null && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
        (e = n.pendingProps),
        (l = Ut(n, re.current)),
        Bt(n, t),
        (l = wo(null, n, r, e, l, t)),
        (n.flags |= 1),
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0)
      ) {
        if (((n.tag = 1), (n.memoizedState = null), (n.updateQueue = null), ce(r))) {
          var a = !0;
          Er(n);
        } else a = !1;
        (n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null), so(n);
        var o = r.getDerivedStateFromProps;
        typeof o == "function" && Nr(n, r, o, e),
          (l.updater = Pr),
          (n.stateNode = l),
          (l._reactInternals = n),
          ao(n, r, e, t),
          (n = Po(null, n, r, !0, a, t));
      } else (n.tag = 0), pe(null, n, l, t), (n = n.child);
      return n;
    case 16:
      l = n.elementType;
      e: {
        switch (
          (e !== null && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
          (e = n.pendingProps),
          (a = l._init),
          (l = a(l._payload)),
          (n.type = l),
          (a = n.tag = Vf(l)),
          (e = ke(l, e)),
          a)
        ) {
          case 0:
            n = xo(null, n, l, e, t);
            break e;
          case 1:
            n = os(null, n, l, e, t);
            break e;
          case 11:
            n = ts(null, n, l, e, t);
            break e;
          case 14:
            n = rs(null, n, l, ke(l.type, e), r, t);
            break e;
        }
        throw Error(g(306, l, ""));
      }
      return n;
    case 0:
      return (r = n.type), (l = n.pendingProps), (l = n.elementType === r ? l : ke(r, l)), xo(e, n, r, l, t);
    case 1:
      return (r = n.type), (l = n.pendingProps), (l = n.elementType === r ? l : ke(r, l)), os(e, n, r, l, t);
    case 3:
      if ((is(n), (r = n.updateQueue), e === null || r === null)) throw Error(g(282));
      if (
        ((r = n.pendingProps),
        (l = n.memoizedState),
        (l = l !== null ? l.element : null),
        zu(e, n),
        Nn(n, r, null, t),
        (r = n.memoizedState.element),
        r === l)
      )
        vo(), (n = ze(e, n, t));
      else {
        if (
          ((l = n.stateNode),
          (a = l.hydrate) && ((Je = It(n.stateNode.containerInfo.firstChild)), (Oe = n), (a = Ne = !0)),
          a)
        ) {
          if (((e = l.mutableSourceEagerHydrationData), e != null))
            for (l = 0; l < e.length; l += 2) (a = e[l]), (a._workInProgressVersionPrimary = e[l + 1]), $t.push(a);
          for (t = Au(n, null, r, t), n.child = t; t; ) (t.flags = (t.flags & -3) | 1024), (t = t.sibling);
        } else pe(e, n, r, t), vo();
        n = n.child;
      }
      return n;
    case 5:
      return (
        Bu(n),
        e === null && ho(n),
        (r = n.type),
        (l = n.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Gl(r, l) ? (o = null) : a !== null && Gl(r, a) && (n.flags |= 16),
        ls(e, n),
        pe(e, n, o, t),
        n.child
      );
    case 6:
      return e === null && ho(n), null;
    case 13:
      return fs(e, n, t);
    case 4:
      return (
        po(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = Or(n, null, r, t)) : pe(e, n, r, t),
        n.child
      );
    case 11:
      return (r = n.type), (l = n.pendingProps), (l = n.elementType === r ? l : ke(r, l)), ts(e, n, r, l, t);
    case 7:
      return pe(e, n, n.pendingProps, t), n.child;
    case 8:
      return pe(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return pe(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        (r = n.type._context), (l = n.pendingProps), (o = n.memoizedProps), (a = l.value);
        var u = n.type._context;
        if (($(Cr, u._currentValue), (u._currentValue = a), o !== null))
          if (
            ((u = o.value),
            (a = ve(u, a)
              ? 0
              : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(u, a) : 1073741823) | 0),
            a === 0)
          ) {
            if (o.children === l.children && !fe.current) {
              n = ze(e, n, t);
              break e;
            }
          } else
            for (u = n.child, u !== null && (u.return = n); u !== null; ) {
              var i = u.dependencies;
              if (i !== null) {
                o = u.child;
                for (var d = i.firstContext; d !== null; ) {
                  if (d.context === r && (d.observedBits & a) != 0) {
                    u.tag === 1 && ((d = Ye(-1, t & -t)), (d.tag = 2), Ze(u, d)),
                      (u.lanes |= t),
                      (d = u.alternate),
                      d !== null && (d.lanes |= t),
                      Ou(u.return, t),
                      (i.lanes |= t);
                    break;
                  }
                  d = d.next;
                }
              } else o = u.tag === 10 && u.type === n.type ? null : u.child;
              if (o !== null) o.return = u;
              else
                for (o = u; o !== null; ) {
                  if (o === n) {
                    o = null;
                    break;
                  }
                  if (((u = o.sibling), u !== null)) {
                    (u.return = o.return), (o = u);
                    break;
                  }
                  o = o.return;
                }
              u = o;
            }
        pe(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (a = n.pendingProps),
        (r = a.children),
        Bt(n, t),
        (l = ye(l, a.unstable_observedBits)),
        (r = r(l)),
        (n.flags |= 1),
        pe(e, n, r, t),
        n.child
      );
    case 14:
      return (l = n.type), (a = ke(l, n.pendingProps)), (a = ke(l.type, a)), rs(e, n, l, a, r, t);
    case 15:
      return ns(e, n, n.type, n.pendingProps, r, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : ke(r, l)),
        e !== null && ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
        (n.tag = 1),
        ce(r) ? ((e = !0), Er(n)) : (e = !1),
        Bt(n, t),
        Fu(n, r, l),
        ao(n, r, l, t),
        Po(null, n, r, !0, e, t)
      );
    case 19:
      return ds(e, n, t);
    case 23:
      return No(e, n, t);
    case 24:
      return No(e, n, t);
  }
  throw Error(g(156, n.tag));
};
function Af(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.flags = 0),
    (this.lastEffect = this.firstEffect = this.nextEffect = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ge(e, n, t, r) {
  return new Af(e, n, t, r);
}
function _o(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Vf(e) {
  if (typeof e == "function") return _o(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yn)) return 11;
    if (e === Kn) return 14;
  }
  return 2;
}
function Ge(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = ge(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.nextEffect = null),
        (t.firstEffect = null),
        (t.lastEffect = null)),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function Mr(e, n, t, r, l, a) {
  var o = 2;
  if (((r = e), typeof e == "function")) _o(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case De:
        return Ht(t.children, l, a, n);
      case ni:
        (o = 8), (l |= 16);
        break;
      case el:
        (o = 8), (l |= 1);
        break;
      case bt:
        return (e = ge(12, t, n, l | 8)), (e.elementType = bt), (e.type = bt), (e.lanes = a), e;
      case en:
        return (e = ge(13, t, n, l)), (e.type = en), (e.elementType = en), (e.lanes = a), e;
      case Zn:
        return (e = ge(19, t, n, l)), (e.elementType = Zn), (e.lanes = a), e;
      case il:
        return Lo(t, l, a, n);
      case ul:
        return (e = ge(24, t, n, l)), (e.elementType = ul), (e.lanes = a), e;
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case tl:
              o = 10;
              break e;
            case nl:
              o = 9;
              break e;
            case Yn:
              o = 11;
              break e;
            case Kn:
              o = 14;
              break e;
            case rl:
              (o = 16), (r = null);
              break e;
            case ll:
              o = 22;
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ""));
    }
  return (n = ge(o, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = a), n;
}
function Ht(e, n, t, r) {
  return (e = ge(7, e, r, n)), (e.lanes = t), e;
}
function Lo(e, n, t, r) {
  return (e = ge(23, e, r, n)), (e.elementType = il), (e.lanes = t), e;
}
function fo(e, n, t) {
  return (e = ge(6, e, null, n)), (e.lanes = t), e;
}
function co(e, n, t) {
  return (
    (n = ge(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    n
  );
}
function Bf(e, n, t) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.pendingContext = this.context = null),
    (this.hydrate = t),
    (this.callbackNode = null),
    (this.callbackPriority = 0),
    (this.eventTimes = jl(0)),
    (this.expirationTimes = jl(-1)),
    (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
    (this.entanglements = jl(0)),
    (this.mutableSourceEagerHydrationData = null);
}
function Hf(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: it, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function Kr(e, n, t, r) {
  var l = n.current,
    a = he(),
    o = Ke(l);
  e: if (t) {
    t = t._reactInternals;
    n: {
      if (st(t) !== t || t.tag !== 1) throw Error(g(170));
      var u = t;
      do {
        switch (u.tag) {
          case 3:
            u = u.stateNode.context;
            break n;
          case 1:
            if (ce(u.type)) {
              u = u.stateNode.__reactInternalMemoizedMergedChildContext;
              break n;
            }
        }
        u = u.return;
      } while (u !== null);
      throw Error(g(171));
    }
    if (t.tag === 1) {
      var i = t.type;
      if (ce(i)) {
        t = ku(t, i, u);
        break e;
      }
    }
    t = u;
  } else t = $e;
  return (
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = Ye(a, o)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    Ze(l, n),
    Xe(l, o, a),
    o
  );
}
function Ko(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Is(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Xo(e, n) {
  Is(e, n), (e = e.alternate) && Is(e, n);
}
function Wf() {
  return null;
}
function Go(e, n, t) {
  var r = (t != null && t.hydrationOptions != null && t.hydrationOptions.mutableSources) || null;
  if (
    ((t = new Bf(e, n, t != null && t.hydrate === !0)),
    (n = ge(3, null, null, n === 2 ? 7 : n === 1 ? 3 : 0)),
    (t.current = n),
    (n.stateNode = t),
    so(n),
    (e[Dt] = t.current),
    mu(e.nodeType === 8 ? e.parentNode : e),
    r)
  )
    for (e = 0; e < r.length; e++) {
      n = r[e];
      var l = n._getVersion;
      (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
    }
  this._internalRoot = t;
}
(Go.prototype.render = function (e) {
  Kr(e, this._internalRoot, null, null);
}),
  (Go.prototype.unmount = function () {
    var e = this._internalRoot,
      n = e.containerInfo;
    Kr(null, e, null, function () {
      n[Dt] = null;
    });
  });
function Wn(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function $f(e, n) {
  if (
    (n ||
      ((n = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
      (n = !(!n || n.nodeType !== 1 || !n.hasAttribute("data-reactroot")))),
    !n)
  )
    for (var t; (t = e.lastChild); ) e.removeChild(t);
  return new Go(e, 0, n ? { hydrate: !0 } : void 0);
}
function Xr(e, n, t, r, l) {
  var a = t._reactRootContainer;
  if (a) {
    var o = a._internalRoot;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var d = Ko(o);
        u.call(d);
      };
    }
    Kr(n, o, e, l);
  } else {
    if (((a = t._reactRootContainer = $f(t, r)), (o = a._internalRoot), typeof l == "function")) {
      var i = l;
      l = function () {
        var d = Ko(o);
        i.call(d);
      };
    }
    Os(function () {
      Kr(n, o, e, l);
    });
  }
  return Ko(o);
}
(xi = function (e) {
  if (e.tag === 13) {
    var n = he();
    Xe(e, 4, n), Xo(e, 4);
  }
}),
  (Pl = function (e) {
    if (e.tag === 13) {
      var n = he();
      Xe(e, 67108864, n), Xo(e, 67108864);
    }
  }),
  (Ni = function (e) {
    if (e.tag === 13) {
      var n = he(),
        t = Ke(e);
      Xe(e, t, n), Xo(e, t);
    }
  }),
  (Pi = function (e, n) {
    return n();
  }),
  (El = function (e, n, t) {
    switch (n) {
      case "input":
        if ((dl(e, t), (n = t.name), t.type === "radio" && n != null)) {
          for (t = e; t.parentNode; ) t = t.parentNode;
          for (
            t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0;
            n < t.length;
            n++
          ) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l = bn(r);
              if (!l) throw Error(g(90));
              oi(r), dl(r, l);
            }
          }
        }
        break;
      case "textarea":
        fi(e, t);
        break;
      case "select":
        (n = t.value), n != null && Ct(e, !!t.multiple, n, !1);
    }
  }),
  (kl = Ms),
  (wi = function (e, n, t, r, l) {
    var a = R;
    R |= 4;
    try {
      return dt(98, e.bind(null, n, t, r, l));
    } finally {
      (R = a), R === 0 && (Kt(), _e());
    }
  }),
  (Sl = function () {
    (R & 49) == 0 && (Rf(), et());
  }),
  (Ei = function (e, n) {
    var t = R;
    R |= 2;
    try {
      return e(n);
    } finally {
      (R = t), R === 0 && (Kt(), _e());
    }
  });
function Fs(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wn(n)) throw Error(g(200));
  return Hf(e, n, null, t);
}
var Qf = { Events: [on, zt, bn, yi, gi, et, { current: !1 }] },
  $n = { findFiberByHostInstance: at, bundleType: 0, version: "17.0.1", rendererPackageName: "react-dom" },
  Yf = {
    bundleType: $n.bundleType,
    version: $n.version,
    rendererPackageName: $n.rendererPackageName,
    rendererConfig: $n.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ci(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: $n.findFiberByHostInstance || Wf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  };
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" &&
  ((Qn = __REACT_DEVTOOLS_GLOBAL_HOOK__), !Qn.isDisabled && Qn.supportsFiber)
)
  try {
    (eo = Qn.inject(Yf)), (ct = Qn);
  } catch (e) {}
var Qn,
  Zf = Qf,
  Kf = Fs,
  Xf = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0) throw typeof e.render == "function" ? Error(g(188)) : Error(g(268, Object.keys(e)));
    return (e = Ci(n)), (e = e === null ? null : e.stateNode), e;
  },
  Gf = function (e, n) {
    var t = R;
    if ((t & 48) != 0) return e(n);
    R |= 1;
    try {
      if (e) return dt(99, e.bind(null, n));
    } finally {
      (R = t), _e();
    }
  },
  Jf = function (e, n, t) {
    if (!Wn(n)) throw Error(g(200));
    return Xr(null, e, n, !0, t);
  },
  qf = function (e, n, t) {
    if (!Wn(n)) throw Error(g(200));
    return Xr(null, e, n, !1, t);
  },
  bf = function (e) {
    if (!Wn(e)) throw Error(g(40));
    return e._reactRootContainer
      ? (Os(function () {
          Xr(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[Dt] = null);
          });
        }),
        !0)
      : !1;
  },
  ec = Ms,
  tc = function (e, n) {
    return Fs(e, n, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
  },
  nc = function (e, n, t, r) {
    if (!Wn(t)) throw Error(g(200));
    if (e == null || e._reactInternals === void 0) throw Error(g(38));
    return Xr(e, n, t, !1, r);
  },
  rc = "17.0.1",
  lc = {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Zf,
    createPortal: Kf,
    findDOMNode: Xf,
    flushSync: Gf,
    hydrate: Jf,
    render: qf,
    unmountComponentAtNode: bf,
    unstable_batchedUpdates: ec,
    unstable_createPortal: tc,
    unstable_renderSubtreeIntoContainer: nc,
    version: rc,
  },
  oc = Et(function (e) {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (t) {
          console.error(t);
        }
    }
    n(), (e.exports = lc);
  }),
  Us = oc;
function ic() {
  return F.createElement(
    "div",
    { className: "h-screen flex justify-center items-center bg-gray-100" },
    F.createElement(
      "div",
      { className: "flex flex-col items-center mx-2 sm:mx-4" },
      F.createElement(
        "svg",
        {
          className: "w-16 h-16 sm:w-32 sm:h-32 fill-current",
          viewBox: "0 0 256 230",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
        },
        F.createElement("path", {
          d:
            "M0.754124112,114.750341 C0.754124112,133.964682 19.5166032,151.90205 49.0972,162.012525 C43.1902309,191.75023 48.0385672,215.718618 64.2325395,225.058104 C80.878267,234.657205 105.676296,228.01262 129.212992,207.438816 C152.155865,227.182074 175.343729,234.952033 191.522612,225.586005 C208.152063,215.959037 213.210383,190.365003 207.140052,159.699094 C237.94981,149.512664 255.183937,134.217604 255.183937,114.750341 C255.183937,95.9814665 236.386646,79.743862 207.205024,69.6979922 C213.73997,37.7647117 208.20272,14.3779364 191.338416,4.65275505 C175.079459,-4.72292197 151.622419,3.44893641 128.342126,23.7092591 C104.122937,2.20452764 80.8973474,-4.36113675 64.049392,5.39238954 C47.8062377,14.7947358 43.1711096,39.1986962 49.0971999,69.4869405 C20.5154295,79.4522024 0.754124112,96.0565259 0.754124112,114.750341 Z",
          fill: "#f7fafc",
        }),
        F.createElement("path", {
          d:
            "M201.024553,79.6741178 C198.680534,78.8673056 196.251651,78.1039308 193.750774,77.3819828 C194.161823,75.7044085 194.539085,74.048553 194.87452,72.4208515 C200.380632,45.6934862 196.780544,24.1617345 184.487315,17.0725656 C172.699651,10.2749914 153.421826,17.3625515 133.952151,34.3064132 C132.079912,35.9357235 130.202444,37.6607573 128.325782,39.4686441 C127.075343,38.2725027 125.826916,37.1165813 124.581707,36.0109348 C104.176918,17.8934548 83.7242671,10.2585012 71.4431045,17.3681823 C59.6667022,24.1854643 56.1792302,44.4273621 61.135535,69.7570841 C61.6141524,72.2036638 62.1736119,74.7021273 62.8062718,77.2424195 C59.9116418,78.0641131 57.1171595,78.9401037 54.443337,79.872 C30.5209112,88.2124116 15.2429599,101.283896 15.2429599,114.842444 C15.2429599,128.845826 31.6438523,142.891438 56.5609175,151.408012 C58.527271,152.080088 60.5676292,152.715563 62.6703284,153.318862 C61.9877958,156.066288 61.3941493,158.758611 60.895824,161.384572 C56.1699796,186.27469 59.8605624,206.038372 71.6055931,212.812619 C83.7371375,219.808478 104.097282,212.617552 123.922903,195.287579 C125.489873,193.917687 127.062473,192.464943 128.637888,190.942216 C130.679856,192.908569 132.718604,194.769546 134.746495,196.515092 C153.949914,213.040264 172.916437,219.713157 184.650608,212.920007 C196.770086,205.904037 200.708827,184.673131 195.595261,158.842269 C195.204725,156.86948 194.75024,154.854058 194.239849,152.802841 C195.669668,152.380128 197.073345,151.943742 198.44203,151.490061 C224.345691,142.907526 241.199459,129.032848 241.199459,114.842444 C241.199459,101.234828 225.428813,88.0752616 201.024553,79.6741178 L201.024553,79.6741178 L201.024553,79.6741178 Z",
          fill: "#53C1DE",
        }),
        F.createElement("path", {
          d:
            "M195.406228,142.327554 C194.170671,142.73659 192.902938,143.131953 191.611073,143.515249 C188.751435,134.46214 184.891928,124.835494 180.168899,114.889502 C184.675947,105.180405 188.386237,95.6768327 191.165838,86.6824446 C193.477279,87.3513024 195.720748,88.0567605 197.882571,88.8012318 C218.792119,95.9993967 231.546671,106.641998 231.546671,114.842444 C231.546671,123.577414 217.772142,134.916625 195.406228,142.327554 L195.406228,142.327554 L195.406228,142.327554 Z M186.125876,160.71692 C188.387041,172.138985 188.710007,182.46586 187.212216,190.538809 C185.866457,197.79288 183.160056,202.629329 179.813756,204.566322 C172.692813,208.688063 157.464736,203.330363 141.041722,189.197876 C139.159026,187.577816 137.262655,185.847956 135.360251,184.017143 C141.72707,177.053863 148.090269,168.958794 154.300632,159.968427 C165.223968,158.999127 175.544007,157.41446 184.902787,155.251029 C185.363708,157.110397 185.773147,158.93397 186.125876,160.71692 L186.125876,160.71692 L186.125876,160.71692 Z M92.2766379,203.854027 C85.3193904,206.311064 79.7782875,206.381449 76.4287698,204.450086 C69.301392,200.339205 66.3383881,184.470825 70.3800911,163.184817 C70.8430228,160.747085 71.3940362,158.242992 72.0291092,155.683394 C81.2853291,157.730187 91.5297533,159.203041 102.479233,160.090696 C108.731425,168.888007 115.278429,176.974228 121.87611,184.054548 C120.434627,185.446158 118.998774,186.771004 117.570966,188.019431 C108.804223,195.682539 100.018979,201.119472 92.2766379,203.854027 L92.2766379,203.854027 L92.2766379,203.854027 Z M59.6827903,142.274061 C48.6649364,138.508267 39.5659765,133.613901 33.3290683,128.273094 C27.7248202,123.473647 24.8953464,118.708789 24.8953464,114.842444 C24.8953464,106.614649 37.1620299,96.1200565 57.6207133,88.9870479 C60.1030888,88.1215145 62.7016999,87.3058539 65.3984478,86.5396638 C68.2259104,95.7371626 71.9349945,105.353351 76.4110731,115.077329 C71.8770778,124.945696 68.1153056,134.715124 65.2600911,144.020411 C63.3375774,143.467789 61.4749914,142.886209 59.6827903,142.274061 L59.6827903,142.274061 L59.6827903,142.274061 Z M70.6085405,67.9033464 C66.3621178,46.2014643 69.182341,29.8303347 76.2791516,25.7222687 C83.8384918,21.3459356 100.554306,27.585659 118.172255,43.2292097 C119.298413,44.2290778 120.428996,45.2756009 121.562797,46.3583221 C114.997694,53.4076732 108.510618,61.4331626 102.31393,70.1785891 C91.6870133,71.1635758 81.5145828,72.7458288 72.1618351,74.8646158 C71.5738193,72.4992804 71.0529709,70.1753716 70.6085405,67.9033464 L70.6085405,67.9033464 L70.6085405,67.9033464 Z M168.075965,91.970564 C165.840139,88.1086441 163.544785,84.3380235 161.204789,80.6703661 C168.414216,81.5817502 175.321589,82.7915664 181.808264,84.2720629 C179.860813,90.5133951 177.43354,97.0390825 174.576314,103.728867 C172.526706,99.8375868 170.35885,95.9141304 168.075965,91.970564 L168.075965,91.970564 L168.075965,91.970564 Z M128.328999,53.2568484 C132.781348,58.0804274 137.240132,63.465879 141.625716,69.3090337 C137.206347,69.1002922 132.732279,68.9916983 128.22121,68.9916983 C123.752773,68.9916983 119.311686,69.097879 114.919667,69.3030007 C119.309675,63.5141429 123.80707,58.1359308 128.328999,53.2568484 L128.328999,53.2568484 L128.328999,53.2568484 Z M88.3274407,92.0373291 C86.0940267,95.9101084 83.9663912,99.8122483 81.9489584,103.721628 C79.1379858,97.0551705 76.7332349,90.4997203 74.7688924,84.1699041 C81.2157486,82.7272144 88.0905452,81.5475633 95.254121,80.6534737 C92.8811438,84.3549159 90.5668876,88.1532883 88.3274407,92.0365247 L88.3274407,92.0373291 L88.3274407,92.0373291 Z M95.4604493,149.719981 C88.0591736,148.894265 81.0810118,147.775347 74.6357643,146.372474 C76.6314784,139.92964 79.0893197,133.234225 81.9598177,126.424182 C83.9824792,130.330746 86.1185609,134.234495 88.3656497,138.115721 L88.3660518,138.115721 C90.6549694,142.069744 93.0263378,145.942925 95.4604493,149.719981 L95.4604493,149.719981 L95.4604493,149.719981 Z M128.59606,177.108562 C124.02104,172.172367 119.457684,166.712107 115.000911,160.838787 C119.327371,161.008515 123.738293,161.095391 128.22121,161.095391 C132.826797,161.095391 137.379695,160.991623 141.861003,160.792132 C137.460939,166.771231 133.018244,172.239937 128.59606,177.108562 L128.59606,177.108562 L128.59606,177.108562 Z M174.668418,126.077084 C177.688534,132.960729 180.234457,139.621153 182.255912,145.954187 C175.704484,147.44876 168.631001,148.652544 161.178244,149.547036 C163.523872,145.829907 165.839334,141.994532 168.114576,138.049357 C170.416365,134.05793 172.601917,130.060469 174.668418,126.077084 L174.668418,126.077084 L174.668418,126.077084 Z M159.75325,133.226985 C156.221134,139.351277 152.594903,145.197649 148.913571,150.71623 C142.208502,151.195651 135.28142,151.442602 128.22121,151.442602 C121.189556,151.442602 114.34975,151.224207 107.763331,150.796669 C103.933587,145.205694 100.228525,139.342027 96.7189317,133.279673 L96.7197361,133.279673 C93.2193935,127.23381 89.9977754,121.136867 87.0786112,115.074112 C89.9969709,108.997279 93.2101429,102.893499 96.6903755,96.8584949 L96.6895711,96.8597015 C100.179054,90.8086096 103.851538,84.9734988 107.645888,79.4175145 C114.365838,78.9095366 121.256723,78.6444871 128.220808,78.6444871 L128.22121,78.6444871 C135.216666,78.6444871 142.116399,78.9115475 148.834337,79.4239498 C152.570771,84.9393119 156.218319,90.7555192 159.721477,96.8074156 C163.264453,102.927284 166.519051,108.990441 169.462347,114.936962 C166.5279,120.98564 163.280541,127.109933 159.75325,133.226985 L159.75325,133.226985 L159.75325,133.226985 Z M179.665747,25.4350982 C187.232327,29.7985609 190.174818,47.3963991 185.42082,70.472597 C185.117561,71.9450495 184.776095,73.4448515 184.405266,74.9647635 C175.030799,72.8017345 164.851129,71.192132 154.193245,70.1922639 C147.98449,61.3507117 141.550504,53.3127541 135.092386,46.3538978 C136.828682,44.6835633 138.562564,43.0908531 140.289206,41.5878335 C156.970834,27.0704415 172.562099,21.338696 179.665747,25.4350982 L179.665747,25.4350982 L179.665747,25.4350982 Z",
          fill: "#f7fafc",
        }),
        F.createElement("path", {
          d:
            "M128.22121,94.6653008 C139.36455,94.6653008 148.398353,103.698702 148.398353,114.842444 C148.398353,125.985784 139.36455,135.019589 128.22121,135.019589 C117.07787,135.019589 108.044066,125.985784 108.044066,114.842444 C108.044066,103.698702 117.07787,94.6653008 128.22121,94.6653008",
          fill: "#53C1DE",
        }),
      ),
      F.createElement(
        "a",
        {
          className: "text-base sm:text-xl font-medium text-gray-900 hover:text-gray-800",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        "React",
      ),
    ),
    F.createElement(
      "svg",
      {
        className: "sm:w-8 sm:h-8 w-5 h-5 sm:mx-3 mx-2 text-gray-900 fill-current",
        "aria-hidden": "true",
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg",
      },
      F.createElement("path", {
        d: `M29.714 12.571H19.43V2.286A2.286 2.286 0 0017.143
            0h-2.286a2.286 2.286 0 00-2.286 2.286V12.57H2.286A2.286 2.286 0
            000 14.857v2.286a2.286 2.286 0 002.286 2.286H12.57v10.285A2.286
            2.286 0 0014.857 32h2.286a2.286 2.286 0
            002.286-2.286V19.43h10.285A2.286 2.286 0 0032 17.143v-2.286a2.286
            2.286 0 00-2.286-2.286z`,
      }),
    ),
    F.createElement(
      "div",
      { className: "flex flex-col items-center mx-2 sm:mx-4" },
      F.createElement(
        "svg",
        {
          className: "w-16 h-16 sm:w-32 sm:h-32 fill-current",
          "aria-hidden": "true",
          viewBox: "0 0 80 80",
          xmlns: "http://www.w3.org/2000/svg",
        },
        F.createElement("path", {
          d: `M79.365 65.838l-36-56a4 4 0 00-6.73 0l-36 56A4 4 0 004 72h72a4 4
              0 003.365-6.162zM40 19.398L50.674 36H40l-8 8-4.757-4.758L40 19.398z`,
        }),
      ),
      F.createElement(
        "a",
        {
          className: "text-base sm:text-xl font-medium text-gray-900 hover:text-gray-800",
          href: "https://www.snowpack.dev/",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        "Snowpack",
      ),
    ),
    F.createElement(
      "svg",
      {
        className: "sm:w-8 sm:h-8 w-5 h-5 sm:mx-3 mx-2 text-gray-900 fill-current",
        "aria-hidden": "true",
        viewBox: "0 0 32 32",
        xmlns: "http://www.w3.org/2000/svg",
      },
      F.createElement("path", {
        d: `M29.714 12.571H19.43V2.286A2.286 2.286 0 0017.143
            0h-2.286a2.286 2.286 0 00-2.286 2.286V12.57H2.286A2.286 2.286 0
            000 14.857v2.286a2.286 2.286 0 002.286 2.286H12.57v10.285A2.286
            2.286 0 0014.857 32h2.286a2.286 2.286 0
            002.286-2.286V19.43h10.285A2.286 2.286 0 0032 17.143v-2.286a2.286
            2.286 0 00-2.286-2.286z`,
      }),
    ),
    F.createElement(
      "div",
      { className: "flex flex-col items-center mx-2 sm:mx-4" },
      F.createElement(
        "svg",
        {
          className: "w-16 h-16 sm:w-32 sm:h-32 fill-current",
          "aria-hidden": "true",
          viewBox: "0 0 80 80",
          xmlns: "http://www.w3.org/2000/svg",
        },
        F.createElement(
          "defs",
          null,
          F.createElement(
            "linearGradient",
            { x1: "0", y1: "-21.333", y2: "85.333", id: "A", x2: "64", gradientUnits: "userSpaceOnUse" },
            F.createElement("stop", { stopColor: "#2383ae", offset: "0%" }),
            F.createElement("stop", { stopColor: "#6dd7b9", offset: "100%" }),
          ),
        ),
        F.createElement("path", {
          d: `M41.5 18c-10.266 0-16.684 5.134-19.25 15.4 3.85-5.134 8.341-7.059
              13.475-5.775 2.93.732 5.022 2.857 7.34 5.209 3.773 3.83 8.143 8.266
              17.685 8.266 10.266 0 16.684-5.134 19.25-15.4-3.85 5.134-8.341
              7.059-13.475 5.775-2.928-.732-5.022-2.857-7.34-5.21C55.412 22.436
              51.042 18 41.5 18zM22.25 41.1C11.984 41.1 5.566 46.234 3
              56.5c3.85-5.134 8.341-7.059 13.475-5.775 2.928.731 5.022 2.857 7.34
              5.209 3.773 3.83 8.143 8.266 17.685 8.266 10.266 0 16.684-5.134
              19.25-15.4-3.85 5.134-8.341 7.059-13.475
              5.775-2.928-.732-5.022-2.857-7.34-5.21-3.773-3.83-8.143-8.265-17.685-8.265z`,
          fill: "url(#A)",
        }),
      ),
      F.createElement(
        "a",
        {
          className: "text-base sm:text-xl font-medium text-gray-900 hover:text-gray-800",
          href: "https://tailwindcss.com/",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        "Tailwind",
      ),
    ),
  );
}
var Vs = ic;
(import.meta.env = Gr),
  Us.render(
    F.createElement(F.StrictMode, null, F.createElement(Vs, null)),
    document.getElementById("root"),
  ); /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
