var zy = Object.defineProperty;
var $y = (e, t, n) =>
  t in e
    ? zy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Wo = (e, t, n) => $y(e, typeof t != "symbol" ? t + "" : t, n);
function By(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var Vy =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Sl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Fg = { exports: {} },
  Cl = {},
  Ug = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ho = Symbol.for("react.element"),
  Hy = Symbol.for("react.portal"),
  Wy = Symbol.for("react.fragment"),
  Gy = Symbol.for("react.strict_mode"),
  Ky = Symbol.for("react.profiler"),
  Yy = Symbol.for("react.provider"),
  qy = Symbol.for("react.context"),
  Xy = Symbol.for("react.forward_ref"),
  Jy = Symbol.for("react.suspense"),
  Zy = Symbol.for("react.memo"),
  Qy = Symbol.for("react.lazy"),
  np = Symbol.iterator;
function ew(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (np && e[np]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var zg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  $g = Object.assign,
  Bg = {};
function Wi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bg),
    (this.updater = n || zg);
}
Wi.prototype.isReactComponent = {};
Wi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Wi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Vg() {}
Vg.prototype = Wi.prototype;
function Rd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bg),
    (this.updater = n || zg);
}
var Md = (Rd.prototype = new Vg());
Md.constructor = Rd;
$g(Md, Wi.prototype);
Md.isPureReactComponent = !0;
var rp = Array.isArray,
  Hg = Object.prototype.hasOwnProperty,
  Dd = { current: null },
  Wg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gg(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Hg.call(t, r) && !Wg.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: ho,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Dd.current,
  };
}
function tw(e, t) {
  return {
    $$typeof: ho,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Fd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ho;
}
function nw(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ip = /\/+/g;
function mu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? nw("" + e.key)
    : t.toString(36);
}
function ma(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ho:
          case Hy:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + mu(o, 0) : r),
      rp(i)
        ? ((n = ""),
          e != null && (n = e.replace(ip, "$&/") + "/"),
          ma(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (Fd(i) &&
            (i = tw(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ip, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), rp(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var u = r + mu(s, l);
      o += ma(s, t, n, u, i);
    }
  else if (((u = ew(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (u = r + mu(s, l++)), (o += ma(s, t, n, u, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Go(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ma(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function rw(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var it = { current: null },
  ga = { transition: null },
  iw = {
    ReactCurrentDispatcher: it,
    ReactCurrentBatchConfig: ga,
    ReactCurrentOwner: Dd,
  };
function Kg() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = {
  map: Go,
  forEach: function (e, t, n) {
    Go(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Go(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Go(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Fd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
q.Component = Wi;
q.Fragment = Wy;
q.Profiler = Ky;
q.PureComponent = Rd;
q.StrictMode = Gy;
q.Suspense = Jy;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iw;
q.act = Kg;
q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = $g({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Dd.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      Hg.call(t, u) &&
        !Wg.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: ho, type: e.type, key: i, ref: s, props: r, _owner: o };
};
q.createContext = function (e) {
  return (
    (e = {
      $$typeof: qy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Yy, _context: e }),
    (e.Consumer = e)
  );
};
q.createElement = Gg;
q.createFactory = function (e) {
  var t = Gg.bind(null, e);
  return (t.type = e), t;
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (e) {
  return { $$typeof: Xy, render: e };
};
q.isValidElement = Fd;
q.lazy = function (e) {
  return { $$typeof: Qy, _payload: { _status: -1, _result: e }, _init: rw };
};
q.memo = function (e, t) {
  return { $$typeof: Zy, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
  var t = ga.transition;
  ga.transition = {};
  try {
    e();
  } finally {
    ga.transition = t;
  }
};
q.unstable_act = Kg;
q.useCallback = function (e, t) {
  return it.current.useCallback(e, t);
};
q.useContext = function (e) {
  return it.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
  return it.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
  return it.current.useEffect(e, t);
};
q.useId = function () {
  return it.current.useId();
};
q.useImperativeHandle = function (e, t, n) {
  return it.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
  return it.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return it.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return it.current.useMemo(e, t);
};
q.useReducer = function (e, t, n) {
  return it.current.useReducer(e, t, n);
};
q.useRef = function (e) {
  return it.current.useRef(e);
};
q.useState = function (e) {
  return it.current.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
  return it.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
  return it.current.useTransition();
};
q.version = "18.3.1";
Ug.exports = q;
var R = Ug.exports;
const Pe = Sl(R),
  sw = By({ __proto__: null, default: Pe }, [R]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ow = R,
  aw = Symbol.for("react.element"),
  lw = Symbol.for("react.fragment"),
  uw = Object.prototype.hasOwnProperty,
  cw = ow.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dw = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yg(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) uw.call(t, r) && !dw.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: aw,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: cw.current,
  };
}
Cl.Fragment = lw;
Cl.jsx = Yg;
Cl.jsxs = Yg;
Fg.exports = Cl;
var f = Fg.exports,
  cc = {},
  qg = { exports: {} },
  xt = {},
  Xg = { exports: {} },
  Jg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(U, W) {
    var G = U.length;
    U.push(W);
    e: for (; 0 < G; ) {
      var se = (G - 1) >>> 1,
        J = U[se];
      if (0 < i(J, W)) (U[se] = W), (U[G] = J), (G = se);
      else break e;
    }
  }
  function n(U) {
    return U.length === 0 ? null : U[0];
  }
  function r(U) {
    if (U.length === 0) return null;
    var W = U[0],
      G = U.pop();
    if (G !== W) {
      U[0] = G;
      e: for (var se = 0, J = U.length, ee = J >>> 1; se < ee; ) {
        var Se = 2 * (se + 1) - 1,
          Ie = U[Se],
          Ne = Se + 1,
          ae = U[Ne];
        if (0 > i(Ie, G))
          Ne < J && 0 > i(ae, Ie)
            ? ((U[se] = ae), (U[Ne] = G), (se = Ne))
            : ((U[se] = Ie), (U[Se] = G), (se = Se));
        else if (Ne < J && 0 > i(ae, G)) (U[se] = ae), (U[Ne] = G), (se = Ne);
        else break e;
      }
    }
    return W;
  }
  function i(U, W) {
    var G = U.sortIndex - W.sortIndex;
    return G !== 0 ? G : U.id - W.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var u = [],
    c = [],
    h = 1,
    m = null,
    g = 3,
    y = !1,
    _ = !1,
    A = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    C = typeof clearTimeout == "function" ? clearTimeout : null,
    S = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function E(U) {
    for (var W = n(c); W !== null; ) {
      if (W.callback === null) r(c);
      else if (W.startTime <= U)
        r(c), (W.sortIndex = W.expirationTime), t(u, W);
      else break;
      W = n(c);
    }
  }
  function O(U) {
    if (((A = !1), E(U), !_))
      if (n(u) !== null) (_ = !0), Ee(L);
      else {
        var W = n(c);
        W !== null && X(O, W.startTime - U);
      }
  }
  function L(U, W) {
    (_ = !1), A && ((A = !1), C(v), (v = -1)), (y = !0);
    var G = g;
    try {
      for (
        E(W), m = n(u);
        m !== null && (!(m.expirationTime > W) || (U && !x()));

      ) {
        var se = m.callback;
        if (typeof se == "function") {
          (m.callback = null), (g = m.priorityLevel);
          var J = se(m.expirationTime <= W);
          (W = e.unstable_now()),
            typeof J == "function" ? (m.callback = J) : m === n(u) && r(u),
            E(W);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var ee = !0;
      else {
        var Se = n(c);
        Se !== null && X(O, Se.startTime - W), (ee = !1);
      }
      return ee;
    } finally {
      (m = null), (g = G), (y = !1);
    }
  }
  var D = !1,
    T = null,
    v = -1,
    b = 5,
    k = -1;
  function x() {
    return !(e.unstable_now() - k < b);
  }
  function P() {
    if (T !== null) {
      var U = e.unstable_now();
      k = U;
      var W = !0;
      try {
        W = T(!0, U);
      } finally {
        W ? I() : ((D = !1), (T = null));
      }
    } else D = !1;
  }
  var I;
  if (typeof S == "function")
    I = function () {
      S(P);
    };
  else if (typeof MessageChannel < "u") {
    var V = new MessageChannel(),
      ie = V.port2;
    (V.port1.onmessage = P),
      (I = function () {
        ie.postMessage(null);
      });
  } else
    I = function () {
      N(P, 0);
    };
  function Ee(U) {
    (T = U), D || ((D = !0), I());
  }
  function X(U, W) {
    v = N(function () {
      U(e.unstable_now());
    }, W);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (U) {
      U.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      _ || y || ((_ = !0), Ee(L));
    }),
    (e.unstable_forceFrameRate = function (U) {
      0 > U || 125 < U
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (b = 0 < U ? Math.floor(1e3 / U) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (U) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = g;
      }
      var G = g;
      g = W;
      try {
        return U();
      } finally {
        g = G;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (U, W) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var G = g;
      g = U;
      try {
        return W();
      } finally {
        g = G;
      }
    }),
    (e.unstable_scheduleCallback = function (U, W, G) {
      var se = e.unstable_now();
      switch (
        (typeof G == "object" && G !== null
          ? ((G = G.delay), (G = typeof G == "number" && 0 < G ? se + G : se))
          : (G = se),
        U)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = G + J),
        (U = {
          id: h++,
          callback: W,
          priorityLevel: U,
          startTime: G,
          expirationTime: J,
          sortIndex: -1,
        }),
        G > se
          ? ((U.sortIndex = G),
            t(c, U),
            n(u) === null &&
              U === n(c) &&
              (A ? (C(v), (v = -1)) : (A = !0), X(O, G - se)))
          : ((U.sortIndex = J), t(u, U), _ || y || ((_ = !0), Ee(L))),
        U
      );
    }),
    (e.unstable_shouldYield = x),
    (e.unstable_wrapCallback = function (U) {
      var W = g;
      return function () {
        var G = g;
        g = W;
        try {
          return U.apply(this, arguments);
        } finally {
          g = G;
        }
      };
    });
})(Jg);
Xg.exports = Jg;
var fw = Xg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hw = R,
  Ct = fw;
function F(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Zg = new Set(),
  Bs = {};
function qr(e, t) {
  Ai(e, t), Ai(e + "Capture", t);
}
function Ai(e, t) {
  for (Bs[e] = t, e = 0; e < t.length; e++) Zg.add(t[e]);
}
var Cn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  dc = Object.prototype.hasOwnProperty,
  pw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  sp = {},
  op = {};
function mw(e) {
  return dc.call(op, e)
    ? !0
    : dc.call(sp, e)
    ? !1
    : pw.test(e)
    ? (op[e] = !0)
    : ((sp[e] = !0), !1);
}
function gw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function vw(e, t, n, r) {
  if (t === null || typeof t > "u" || gw(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function st(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ve[e] = new st(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ve[t] = new st(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ve[e] = new st(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ve[e] = new st(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ve[e] = new st(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ve[e] = new st(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ve[e] = new st(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ve[e] = new st(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ve[e] = new st(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ud = /[\-:]([a-z])/g;
function zd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ud, zd);
    Ve[t] = new st(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ud, zd);
    Ve[t] = new st(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ud, zd);
  Ve[t] = new st(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ve[e] = new st(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ve.xlinkHref = new st(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ve[e] = new st(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $d(e, t, n, r) {
  var i = Ve.hasOwnProperty(t) ? Ve[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (vw(t, n, i, r) && (n = null),
    r || i === null
      ? mw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Pn = hw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ko = Symbol.for("react.element"),
  oi = Symbol.for("react.portal"),
  ai = Symbol.for("react.fragment"),
  Bd = Symbol.for("react.strict_mode"),
  fc = Symbol.for("react.profiler"),
  Qg = Symbol.for("react.provider"),
  e0 = Symbol.for("react.context"),
  Vd = Symbol.for("react.forward_ref"),
  hc = Symbol.for("react.suspense"),
  pc = Symbol.for("react.suspense_list"),
  Hd = Symbol.for("react.memo"),
  zn = Symbol.for("react.lazy"),
  t0 = Symbol.for("react.offscreen"),
  ap = Symbol.iterator;
function ds(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ap && e[ap]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _e = Object.assign,
  gu;
function ws(e) {
  if (gu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      gu = (t && t[1]) || "";
    }
  return (
    `
` +
    gu +
    e
  );
}
var vu = !1;
function yu(e, t) {
  if (!e || vu) return "";
  vu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var u =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (vu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ws(e) : "";
}
function yw(e) {
  switch (e.tag) {
    case 5:
      return ws(e.type);
    case 16:
      return ws("Lazy");
    case 13:
      return ws("Suspense");
    case 19:
      return ws("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = yu(e.type, !1)), e;
    case 11:
      return (e = yu(e.type.render, !1)), e;
    case 1:
      return (e = yu(e.type, !0)), e;
    default:
      return "";
  }
}
function mc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ai:
      return "Fragment";
    case oi:
      return "Portal";
    case fc:
      return "Profiler";
    case Bd:
      return "StrictMode";
    case hc:
      return "Suspense";
    case pc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case e0:
        return (e.displayName || "Context") + ".Consumer";
      case Qg:
        return (e._context.displayName || "Context") + ".Provider";
      case Vd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Hd:
        return (
          (t = e.displayName || null), t !== null ? t : mc(e.type) || "Memo"
        );
      case zn:
        (t = e._payload), (e = e._init);
        try {
          return mc(e(t));
        } catch {}
    }
  return null;
}
function ww(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return mc(t);
    case 8:
      return t === Bd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function hr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function n0(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function _w(e) {
  var t = n0(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Yo(e) {
  e._valueTracker || (e._valueTracker = _w(e));
}
function r0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = n0(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ja(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function gc(e, t) {
  var n = t.checked;
  return _e({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function lp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = hr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function i0(e, t) {
  (t = t.checked), t != null && $d(e, "checked", t, !1);
}
function vc(e, t) {
  i0(e, t);
  var n = hr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? yc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && yc(e, t.type, hr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function up(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function yc(e, t, n) {
  (t !== "number" || ja(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _s = Array.isArray;
function Si(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + hr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function wc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
  return _e({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function cp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(F(92));
      if (_s(n)) {
        if (1 < n.length) throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: hr(n) };
}
function s0(e, t) {
  var n = hr(t.value),
    r = hr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function dp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function o0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _c(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? o0(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var qo,
  a0 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        qo = qo || document.createElement("div"),
          qo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = qo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var bs = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
  Sw = ["Webkit", "ms", "Moz", "O"];
Object.keys(bs).forEach(function (e) {
  Sw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (bs[t] = bs[e]);
  });
});
function l0(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (bs.hasOwnProperty(e) && bs[e])
    ? ("" + t).trim()
    : t + "px";
}
function u0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = l0(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Cw = _e(
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
  }
);
function Sc(e, t) {
  if (t) {
    if (Cw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(F(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(F(62));
  }
}
function Cc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var xc = null;
function Wd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ec = null,
  Ci = null,
  xi = null;
function fp(e) {
  if ((e = go(e))) {
    if (typeof Ec != "function") throw Error(F(280));
    var t = e.stateNode;
    t && ((t = bl(t)), Ec(e.stateNode, e.type, t));
  }
}
function c0(e) {
  Ci ? (xi ? xi.push(e) : (xi = [e])) : (Ci = e);
}
function d0() {
  if (Ci) {
    var e = Ci,
      t = xi;
    if (((xi = Ci = null), fp(e), t)) for (e = 0; e < t.length; e++) fp(t[e]);
  }
}
function f0(e, t) {
  return e(t);
}
function h0() {}
var wu = !1;
function p0(e, t, n) {
  if (wu) return e(t, n);
  wu = !0;
  try {
    return f0(e, t, n);
  } finally {
    (wu = !1), (Ci !== null || xi !== null) && (h0(), d0());
  }
}
function Hs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = bl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(F(231, t, typeof n));
  return n;
}
var kc = !1;
if (Cn)
  try {
    var fs = {};
    Object.defineProperty(fs, "passive", {
      get: function () {
        kc = !0;
      },
    }),
      window.addEventListener("test", fs, fs),
      window.removeEventListener("test", fs, fs);
  } catch {
    kc = !1;
  }
function xw(e, t, n, r, i, s, o, l, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Is = !1,
  La = null,
  Ra = !1,
  Tc = null,
  Ew = {
    onError: function (e) {
      (Is = !0), (La = e);
    },
  };
function kw(e, t, n, r, i, s, o, l, u) {
  (Is = !1), (La = null), xw.apply(Ew, arguments);
}
function Tw(e, t, n, r, i, s, o, l, u) {
  if ((kw.apply(this, arguments), Is)) {
    if (Is) {
      var c = La;
      (Is = !1), (La = null);
    } else throw Error(F(198));
    Ra || ((Ra = !0), (Tc = c));
  }
}
function Xr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function m0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function hp(e) {
  if (Xr(e) !== e) throw Error(F(188));
}
function bw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xr(e)), t === null)) throw Error(F(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return hp(i), e;
        if (s === r) return hp(i), t;
        s = s.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(F(189));
      }
    }
    if (n.alternate !== r) throw Error(F(190));
  }
  if (n.tag !== 3) throw Error(F(188));
  return n.stateNode.current === n ? e : t;
}
function g0(e) {
  return (e = bw(e)), e !== null ? v0(e) : null;
}
function v0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = v0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var y0 = Ct.unstable_scheduleCallback,
  pp = Ct.unstable_cancelCallback,
  Iw = Ct.unstable_shouldYield,
  Nw = Ct.unstable_requestPaint,
  be = Ct.unstable_now,
  Pw = Ct.unstable_getCurrentPriorityLevel,
  Gd = Ct.unstable_ImmediatePriority,
  w0 = Ct.unstable_UserBlockingPriority,
  Ma = Ct.unstable_NormalPriority,
  Aw = Ct.unstable_LowPriority,
  _0 = Ct.unstable_IdlePriority,
  xl = null,
  nn = null;
function Ow(e) {
  if (nn && typeof nn.onCommitFiberRoot == "function")
    try {
      nn.onCommitFiberRoot(xl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $t = Math.clz32 ? Math.clz32 : Rw,
  jw = Math.log,
  Lw = Math.LN2;
function Rw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((jw(e) / Lw) | 0)) | 0;
}
var Xo = 64,
  Jo = 4194304;
function Ss(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Da(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = Ss(l)) : ((s &= o), s !== 0 && (r = Ss(s)));
  } else (o = n & ~i), o !== 0 ? (r = Ss(o)) : s !== 0 && (r = Ss(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - $t(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Mw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Dw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - $t(s),
      l = 1 << o,
      u = i[o];
    u === -1
      ? (!(l & n) || l & r) && (i[o] = Mw(l, t))
      : u <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function bc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function S0() {
  var e = Xo;
  return (Xo <<= 1), !(Xo & 4194240) && (Xo = 64), e;
}
function _u(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function po(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $t(t)),
    (e[t] = n);
}
function Fw(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - $t(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function Kd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $t(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var oe = 0;
function C0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var x0,
  Yd,
  E0,
  k0,
  T0,
  Ic = !1,
  Zo = [],
  er = null,
  tr = null,
  nr = null,
  Ws = new Map(),
  Gs = new Map(),
  Bn = [],
  Uw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function mp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      er = null;
      break;
    case "dragenter":
    case "dragleave":
      tr = null;
      break;
    case "mouseover":
    case "mouseout":
      nr = null;
      break;
    case "pointerover":
    case "pointerout":
      Ws.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gs.delete(t.pointerId);
  }
}
function hs(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = go(t)), t !== null && Yd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function zw(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (er = hs(er, e, t, n, r, i)), !0;
    case "dragenter":
      return (tr = hs(tr, e, t, n, r, i)), !0;
    case "mouseover":
      return (nr = hs(nr, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Ws.set(s, hs(Ws.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Gs.set(s, hs(Gs.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function b0(e) {
  var t = Ar(e.target);
  if (t !== null) {
    var n = Xr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = m0(n)), t !== null)) {
          (e.blockedOn = t),
            T0(e.priority, function () {
              E0(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function va(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Nc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (xc = r), n.target.dispatchEvent(r), (xc = null);
    } else return (t = go(n)), t !== null && Yd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function gp(e, t, n) {
  va(e) && n.delete(t);
}
function $w() {
  (Ic = !1),
    er !== null && va(er) && (er = null),
    tr !== null && va(tr) && (tr = null),
    nr !== null && va(nr) && (nr = null),
    Ws.forEach(gp),
    Gs.forEach(gp);
}
function ps(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ic ||
      ((Ic = !0),
      Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority, $w)));
}
function Ks(e) {
  function t(i) {
    return ps(i, e);
  }
  if (0 < Zo.length) {
    ps(Zo[0], e);
    for (var n = 1; n < Zo.length; n++) {
      var r = Zo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    er !== null && ps(er, e),
      tr !== null && ps(tr, e),
      nr !== null && ps(nr, e),
      Ws.forEach(t),
      Gs.forEach(t),
      n = 0;
    n < Bn.length;
    n++
  )
    (r = Bn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Bn.length && ((n = Bn[0]), n.blockedOn === null); )
    b0(n), n.blockedOn === null && Bn.shift();
}
var Ei = Pn.ReactCurrentBatchConfig,
  Fa = !0;
function Bw(e, t, n, r) {
  var i = oe,
    s = Ei.transition;
  Ei.transition = null;
  try {
    (oe = 1), qd(e, t, n, r);
  } finally {
    (oe = i), (Ei.transition = s);
  }
}
function Vw(e, t, n, r) {
  var i = oe,
    s = Ei.transition;
  Ei.transition = null;
  try {
    (oe = 4), qd(e, t, n, r);
  } finally {
    (oe = i), (Ei.transition = s);
  }
}
function qd(e, t, n, r) {
  if (Fa) {
    var i = Nc(e, t, n, r);
    if (i === null) Pu(e, t, r, Ua, n), mp(e, r);
    else if (zw(i, e, t, n, r)) r.stopPropagation();
    else if ((mp(e, r), t & 4 && -1 < Uw.indexOf(e))) {
      for (; i !== null; ) {
        var s = go(i);
        if (
          (s !== null && x0(s),
          (s = Nc(e, t, n, r)),
          s === null && Pu(e, t, r, Ua, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Pu(e, t, r, null, n);
  }
}
var Ua = null;
function Nc(e, t, n, r) {
  if (((Ua = null), (e = Wd(r)), (e = Ar(e)), e !== null))
    if (((t = Xr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = m0(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ua = e), null;
}
function I0(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Pw()) {
        case Gd:
          return 1;
        case w0:
          return 4;
        case Ma:
        case Aw:
          return 16;
        case _0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yn = null,
  Xd = null,
  ya = null;
function N0() {
  if (ya) return ya;
  var e,
    t = Xd,
    n = t.length,
    r,
    i = "value" in Yn ? Yn.value : Yn.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (ya = i.slice(e, 1 < r ? 1 - r : void 0));
}
function wa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Qo() {
  return !0;
}
function vp() {
  return !1;
}
function Et(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Qo
        : vp),
      (this.isPropagationStopped = vp),
      this
    );
  }
  return (
    _e(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Qo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Qo));
      },
      persist: function () {},
      isPersistent: Qo,
    }),
    t
  );
}
var Gi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Jd = Et(Gi),
  mo = _e({}, Gi, { view: 0, detail: 0 }),
  Hw = Et(mo),
  Su,
  Cu,
  ms,
  El = _e({}, mo, {
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
    getModifierState: Zd,
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
        : (e !== ms &&
            (ms && e.type === "mousemove"
              ? ((Su = e.screenX - ms.screenX), (Cu = e.screenY - ms.screenY))
              : (Cu = Su = 0),
            (ms = e)),
          Su);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Cu;
    },
  }),
  yp = Et(El),
  Ww = _e({}, El, { dataTransfer: 0 }),
  Gw = Et(Ww),
  Kw = _e({}, mo, { relatedTarget: 0 }),
  xu = Et(Kw),
  Yw = _e({}, Gi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qw = Et(Yw),
  Xw = _e({}, Gi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jw = Et(Xw),
  Zw = _e({}, Gi, { data: 0 }),
  wp = Et(Zw),
  Qw = {
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
  e_ = {
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
  t_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function n_(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = t_[e]) ? !!t[e] : !1;
}
function Zd() {
  return n_;
}
var r_ = _e({}, mo, {
    key: function (e) {
      if (e.key) {
        var t = Qw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = wa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? e_[e.keyCode] || "Unidentified"
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
    getModifierState: Zd,
    charCode: function (e) {
      return e.type === "keypress" ? wa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? wa(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  i_ = Et(r_),
  s_ = _e({}, El, {
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
  _p = Et(s_),
  o_ = _e({}, mo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zd,
  }),
  a_ = Et(o_),
  l_ = _e({}, Gi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  u_ = Et(l_),
  c_ = _e({}, El, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  d_ = Et(c_),
  f_ = [9, 13, 27, 32],
  Qd = Cn && "CompositionEvent" in window,
  Ns = null;
Cn && "documentMode" in document && (Ns = document.documentMode);
var h_ = Cn && "TextEvent" in window && !Ns,
  P0 = Cn && (!Qd || (Ns && 8 < Ns && 11 >= Ns)),
  Sp = " ",
  Cp = !1;
function A0(e, t) {
  switch (e) {
    case "keyup":
      return f_.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function O0(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var li = !1;
function p_(e, t) {
  switch (e) {
    case "compositionend":
      return O0(t);
    case "keypress":
      return t.which !== 32 ? null : ((Cp = !0), Sp);
    case "textInput":
      return (e = t.data), e === Sp && Cp ? null : e;
    default:
      return null;
  }
}
function m_(e, t) {
  if (li)
    return e === "compositionend" || (!Qd && A0(e, t))
      ? ((e = N0()), (ya = Xd = Yn = null), (li = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return P0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var g_ = {
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
function xp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!g_[e.type] : t === "textarea";
}
function j0(e, t, n, r) {
  c0(r),
    (t = za(t, "onChange")),
    0 < t.length &&
      ((n = new Jd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ps = null,
  Ys = null;
function v_(e) {
  H0(e, 0);
}
function kl(e) {
  var t = di(e);
  if (r0(t)) return e;
}
function y_(e, t) {
  if (e === "change") return t;
}
var L0 = !1;
if (Cn) {
  var Eu;
  if (Cn) {
    var ku = "oninput" in document;
    if (!ku) {
      var Ep = document.createElement("div");
      Ep.setAttribute("oninput", "return;"),
        (ku = typeof Ep.oninput == "function");
    }
    Eu = ku;
  } else Eu = !1;
  L0 = Eu && (!document.documentMode || 9 < document.documentMode);
}
function kp() {
  Ps && (Ps.detachEvent("onpropertychange", R0), (Ys = Ps = null));
}
function R0(e) {
  if (e.propertyName === "value" && kl(Ys)) {
    var t = [];
    j0(t, Ys, e, Wd(e)), p0(v_, t);
  }
}
function w_(e, t, n) {
  e === "focusin"
    ? (kp(), (Ps = t), (Ys = n), Ps.attachEvent("onpropertychange", R0))
    : e === "focusout" && kp();
}
function __(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return kl(Ys);
}
function S_(e, t) {
  if (e === "click") return kl(t);
}
function C_(e, t) {
  if (e === "input" || e === "change") return kl(t);
}
function x_(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Vt = typeof Object.is == "function" ? Object.is : x_;
function qs(e, t) {
  if (Vt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!dc.call(t, i) || !Vt(e[i], t[i])) return !1;
  }
  return !0;
}
function Tp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function bp(e, t) {
  var n = Tp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Tp(n);
  }
}
function M0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? M0(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function D0() {
  for (var e = window, t = ja(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ja(e.document);
  }
  return t;
}
function ef(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function E_(e) {
  var t = D0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    M0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ef(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = bp(n, s));
        var o = bp(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var k_ = Cn && "documentMode" in document && 11 >= document.documentMode,
  ui = null,
  Pc = null,
  As = null,
  Ac = !1;
function Ip(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ac ||
    ui == null ||
    ui !== ja(r) ||
    ((r = ui),
    "selectionStart" in r && ef(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (As && qs(As, r)) ||
      ((As = r),
      (r = za(Pc, "onSelect")),
      0 < r.length &&
        ((t = new Jd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ui))));
}
function ea(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ci = {
    animationend: ea("Animation", "AnimationEnd"),
    animationiteration: ea("Animation", "AnimationIteration"),
    animationstart: ea("Animation", "AnimationStart"),
    transitionend: ea("Transition", "TransitionEnd"),
  },
  Tu = {},
  F0 = {};
Cn &&
  ((F0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ci.animationend.animation,
    delete ci.animationiteration.animation,
    delete ci.animationstart.animation),
  "TransitionEvent" in window || delete ci.transitionend.transition);
function Tl(e) {
  if (Tu[e]) return Tu[e];
  if (!ci[e]) return e;
  var t = ci[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in F0) return (Tu[e] = t[n]);
  return e;
}
var U0 = Tl("animationend"),
  z0 = Tl("animationiteration"),
  $0 = Tl("animationstart"),
  B0 = Tl("transitionend"),
  V0 = new Map(),
  Np =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function yr(e, t) {
  V0.set(e, t), qr(t, [e]);
}
for (var bu = 0; bu < Np.length; bu++) {
  var Iu = Np[bu],
    T_ = Iu.toLowerCase(),
    b_ = Iu[0].toUpperCase() + Iu.slice(1);
  yr(T_, "on" + b_);
}
yr(U0, "onAnimationEnd");
yr(z0, "onAnimationIteration");
yr($0, "onAnimationStart");
yr("dblclick", "onDoubleClick");
yr("focusin", "onFocus");
yr("focusout", "onBlur");
yr(B0, "onTransitionEnd");
Ai("onMouseEnter", ["mouseout", "mouseover"]);
Ai("onMouseLeave", ["mouseout", "mouseover"]);
Ai("onPointerEnter", ["pointerout", "pointerover"]);
Ai("onPointerLeave", ["pointerout", "pointerover"]);
qr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Cs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  I_ = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cs));
function Pp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Tw(r, t, void 0, e), (e.currentTarget = null);
}
function H0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            u = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), u !== s && i.isPropagationStopped())) break e;
          Pp(i, l, c), (s = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (u = l.instance),
            (c = l.currentTarget),
            (l = l.listener),
            u !== s && i.isPropagationStopped())
          )
            break e;
          Pp(i, l, c), (s = u);
        }
    }
  }
  if (Ra) throw ((e = Tc), (Ra = !1), (Tc = null), e);
}
function fe(e, t) {
  var n = t[Mc];
  n === void 0 && (n = t[Mc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (W0(t, e, 2, !1), n.add(r));
}
function Nu(e, t, n) {
  var r = 0;
  t && (r |= 4), W0(n, e, r, t);
}
var ta = "_reactListening" + Math.random().toString(36).slice(2);
function Xs(e) {
  if (!e[ta]) {
    (e[ta] = !0),
      Zg.forEach(function (n) {
        n !== "selectionchange" && (I_.has(n) || Nu(n, !1, e), Nu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ta] || ((t[ta] = !0), Nu("selectionchange", !1, t));
  }
}
function W0(e, t, n, r) {
  switch (I0(t)) {
    case 1:
      var i = Bw;
      break;
    case 4:
      i = Vw;
      break;
    default:
      i = qd;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !kc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Pu(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Ar(l)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  p0(function () {
    var c = s,
      h = Wd(n),
      m = [];
    e: {
      var g = V0.get(e);
      if (g !== void 0) {
        var y = Jd,
          _ = e;
        switch (e) {
          case "keypress":
            if (wa(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = i_;
            break;
          case "focusin":
            (_ = "focus"), (y = xu);
            break;
          case "focusout":
            (_ = "blur"), (y = xu);
            break;
          case "beforeblur":
          case "afterblur":
            y = xu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = yp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Gw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = a_;
            break;
          case U0:
          case z0:
          case $0:
            y = qw;
            break;
          case B0:
            y = u_;
            break;
          case "scroll":
            y = Hw;
            break;
          case "wheel":
            y = d_;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Jw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = _p;
        }
        var A = (t & 4) !== 0,
          N = !A && e === "scroll",
          C = A ? (g !== null ? g + "Capture" : null) : g;
        A = [];
        for (var S = c, E; S !== null; ) {
          E = S;
          var O = E.stateNode;
          if (
            (E.tag === 5 &&
              O !== null &&
              ((E = O),
              C !== null && ((O = Hs(S, C)), O != null && A.push(Js(S, O, E)))),
            N)
          )
            break;
          S = S.return;
        }
        0 < A.length &&
          ((g = new y(g, _, null, n, h)), m.push({ event: g, listeners: A }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          g &&
            n !== xc &&
            (_ = n.relatedTarget || n.fromElement) &&
            (Ar(_) || _[xn]))
        )
          break e;
        if (
          (y || g) &&
          ((g =
            h.window === h
              ? h
              : (g = h.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          y
            ? ((_ = n.relatedTarget || n.toElement),
              (y = c),
              (_ = _ ? Ar(_) : null),
              _ !== null &&
                ((N = Xr(_)), _ !== N || (_.tag !== 5 && _.tag !== 6)) &&
                (_ = null))
            : ((y = null), (_ = c)),
          y !== _)
        ) {
          if (
            ((A = yp),
            (O = "onMouseLeave"),
            (C = "onMouseEnter"),
            (S = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((A = _p),
              (O = "onPointerLeave"),
              (C = "onPointerEnter"),
              (S = "pointer")),
            (N = y == null ? g : di(y)),
            (E = _ == null ? g : di(_)),
            (g = new A(O, S + "leave", y, n, h)),
            (g.target = N),
            (g.relatedTarget = E),
            (O = null),
            Ar(h) === c &&
              ((A = new A(C, S + "enter", _, n, h)),
              (A.target = E),
              (A.relatedTarget = N),
              (O = A)),
            (N = O),
            y && _)
          )
            t: {
              for (A = y, C = _, S = 0, E = A; E; E = ii(E)) S++;
              for (E = 0, O = C; O; O = ii(O)) E++;
              for (; 0 < S - E; ) (A = ii(A)), S--;
              for (; 0 < E - S; ) (C = ii(C)), E--;
              for (; S--; ) {
                if (A === C || (C !== null && A === C.alternate)) break t;
                (A = ii(A)), (C = ii(C));
              }
              A = null;
            }
          else A = null;
          y !== null && Ap(m, g, y, A, !1),
            _ !== null && N !== null && Ap(m, N, _, A, !0);
        }
      }
      e: {
        if (
          ((g = c ? di(c) : window),
          (y = g.nodeName && g.nodeName.toLowerCase()),
          y === "select" || (y === "input" && g.type === "file"))
        )
          var L = y_;
        else if (xp(g))
          if (L0) L = C_;
          else {
            L = __;
            var D = w_;
          }
        else
          (y = g.nodeName) &&
            y.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (L = S_);
        if (L && (L = L(e, c))) {
          j0(m, L, n, h);
          break e;
        }
        D && D(e, g, c),
          e === "focusout" &&
            (D = g._wrapperState) &&
            D.controlled &&
            g.type === "number" &&
            yc(g, "number", g.value);
      }
      switch (((D = c ? di(c) : window), e)) {
        case "focusin":
          (xp(D) || D.contentEditable === "true") &&
            ((ui = D), (Pc = c), (As = null));
          break;
        case "focusout":
          As = Pc = ui = null;
          break;
        case "mousedown":
          Ac = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ac = !1), Ip(m, n, h);
          break;
        case "selectionchange":
          if (k_) break;
        case "keydown":
        case "keyup":
          Ip(m, n, h);
      }
      var T;
      if (Qd)
        e: {
          switch (e) {
            case "compositionstart":
              var v = "onCompositionStart";
              break e;
            case "compositionend":
              v = "onCompositionEnd";
              break e;
            case "compositionupdate":
              v = "onCompositionUpdate";
              break e;
          }
          v = void 0;
        }
      else
        li
          ? A0(e, n) && (v = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (v = "onCompositionStart");
      v &&
        (P0 &&
          n.locale !== "ko" &&
          (li || v !== "onCompositionStart"
            ? v === "onCompositionEnd" && li && (T = N0())
            : ((Yn = h),
              (Xd = "value" in Yn ? Yn.value : Yn.textContent),
              (li = !0))),
        (D = za(c, v)),
        0 < D.length &&
          ((v = new wp(v, e, null, n, h)),
          m.push({ event: v, listeners: D }),
          T ? (v.data = T) : ((T = O0(n)), T !== null && (v.data = T)))),
        (T = h_ ? p_(e, n) : m_(e, n)) &&
          ((c = za(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new wp("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = T)));
    }
    H0(m, t);
  });
}
function Js(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function za(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Hs(e, n)),
      s != null && r.unshift(Js(e, s, i)),
      (s = Hs(e, t)),
      s != null && r.push(Js(e, s, i))),
      (e = e.return);
  }
  return r;
}
function ii(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ap(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      c = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
      i
        ? ((u = Hs(n, s)), u != null && o.unshift(Js(n, u, l)))
        : i || ((u = Hs(n, s)), u != null && o.push(Js(n, u, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var N_ = /\r\n?/g,
  P_ = /\u0000|\uFFFD/g;
function Op(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      N_,
      `
`
    )
    .replace(P_, "");
}
function na(e, t, n) {
  if (((t = Op(t)), Op(e) !== t && n)) throw Error(F(425));
}
function $a() {}
var Oc = null,
  jc = null;
function Lc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Rc = typeof setTimeout == "function" ? setTimeout : void 0,
  A_ = typeof clearTimeout == "function" ? clearTimeout : void 0,
  jp = typeof Promise == "function" ? Promise : void 0,
  O_ =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof jp < "u"
      ? function (e) {
          return jp.resolve(null).then(e).catch(j_);
        }
      : Rc;
function j_(e) {
  setTimeout(function () {
    throw e;
  });
}
function Au(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ks(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ks(t);
}
function rr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Lp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ki = Math.random().toString(36).slice(2),
  Zt = "__reactFiber$" + Ki,
  Zs = "__reactProps$" + Ki,
  xn = "__reactContainer$" + Ki,
  Mc = "__reactEvents$" + Ki,
  L_ = "__reactListeners$" + Ki,
  R_ = "__reactHandles$" + Ki;
function Ar(e) {
  var t = e[Zt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[xn] || n[Zt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Lp(e); e !== null; ) {
          if ((n = e[Zt])) return n;
          e = Lp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function go(e) {
  return (
    (e = e[Zt] || e[xn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function di(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(F(33));
}
function bl(e) {
  return e[Zs] || null;
}
var Dc = [],
  fi = -1;
function wr(e) {
  return { current: e };
}
function pe(e) {
  0 > fi || ((e.current = Dc[fi]), (Dc[fi] = null), fi--);
}
function ce(e, t) {
  fi++, (Dc[fi] = e.current), (e.current = t);
}
var pr = {},
  Xe = wr(pr),
  ct = wr(!1),
  Fr = pr;
function Oi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function dt(e) {
  return (e = e.childContextTypes), e != null;
}
function Ba() {
  pe(ct), pe(Xe);
}
function Rp(e, t, n) {
  if (Xe.current !== pr) throw Error(F(168));
  ce(Xe, t), ce(ct, n);
}
function G0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(F(108, ww(e) || "Unknown", i));
  return _e({}, n, r);
}
function Va(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pr),
    (Fr = Xe.current),
    ce(Xe, e),
    ce(ct, ct.current),
    !0
  );
}
function Mp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(F(169));
  n
    ? ((e = G0(e, t, Fr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      pe(ct),
      pe(Xe),
      ce(Xe, e))
    : pe(ct),
    ce(ct, n);
}
var pn = null,
  Il = !1,
  Ou = !1;
function K0(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function M_(e) {
  (Il = !0), K0(e);
}
function _r() {
  if (!Ou && pn !== null) {
    Ou = !0;
    var e = 0,
      t = oe;
    try {
      var n = pn;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (pn = null), (Il = !1);
    } catch (i) {
      throw (pn !== null && (pn = pn.slice(e + 1)), y0(Gd, _r), i);
    } finally {
      (oe = t), (Ou = !1);
    }
  }
  return null;
}
var hi = [],
  pi = 0,
  Ha = null,
  Wa = 0,
  It = [],
  Nt = 0,
  Ur = null,
  mn = 1,
  gn = "";
function br(e, t) {
  (hi[pi++] = Wa), (hi[pi++] = Ha), (Ha = e), (Wa = t);
}
function Y0(e, t, n) {
  (It[Nt++] = mn), (It[Nt++] = gn), (It[Nt++] = Ur), (Ur = e);
  var r = mn;
  e = gn;
  var i = 32 - $t(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - $t(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (mn = (1 << (32 - $t(t) + i)) | (n << i) | r),
      (gn = s + e);
  } else (mn = (1 << s) | (n << i) | r), (gn = e);
}
function tf(e) {
  e.return !== null && (br(e, 1), Y0(e, 1, 0));
}
function nf(e) {
  for (; e === Ha; )
    (Ha = hi[--pi]), (hi[pi] = null), (Wa = hi[--pi]), (hi[pi] = null);
  for (; e === Ur; )
    (Ur = It[--Nt]),
      (It[Nt] = null),
      (gn = It[--Nt]),
      (It[Nt] = null),
      (mn = It[--Nt]),
      (It[Nt] = null);
}
var wt = null,
  yt = null,
  ge = !1,
  Ut = null;
function q0(e, t) {
  var n = Pt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Dp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (wt = e), (yt = rr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (wt = e), (yt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ur !== null ? { id: mn, overflow: gn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Pt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (wt = e),
            (yt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Fc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Uc(e) {
  if (ge) {
    var t = yt;
    if (t) {
      var n = t;
      if (!Dp(e, t)) {
        if (Fc(e)) throw Error(F(418));
        t = rr(n.nextSibling);
        var r = wt;
        t && Dp(e, t)
          ? q0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ge = !1), (wt = e));
      }
    } else {
      if (Fc(e)) throw Error(F(418));
      (e.flags = (e.flags & -4097) | 2), (ge = !1), (wt = e);
    }
  }
}
function Fp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  wt = e;
}
function ra(e) {
  if (e !== wt) return !1;
  if (!ge) return Fp(e), (ge = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Lc(e.type, e.memoizedProps))),
    t && (t = yt))
  ) {
    if (Fc(e)) throw (X0(), Error(F(418)));
    for (; t; ) q0(e, t), (t = rr(t.nextSibling));
  }
  if ((Fp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              yt = rr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      yt = null;
    }
  } else yt = wt ? rr(e.stateNode.nextSibling) : null;
  return !0;
}
function X0() {
  for (var e = yt; e; ) e = rr(e.nextSibling);
}
function ji() {
  (yt = wt = null), (ge = !1);
}
function rf(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
var D_ = Pn.ReactCurrentBatchConfig;
function gs(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(F(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(F(284));
    if (!n._owner) throw Error(F(290, e));
  }
  return e;
}
function ia(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      F(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Up(e) {
  var t = e._init;
  return t(e._payload);
}
function J0(e) {
  function t(C, S) {
    if (e) {
      var E = C.deletions;
      E === null ? ((C.deletions = [S]), (C.flags |= 16)) : E.push(S);
    }
  }
  function n(C, S) {
    if (!e) return null;
    for (; S !== null; ) t(C, S), (S = S.sibling);
    return null;
  }
  function r(C, S) {
    for (C = new Map(); S !== null; )
      S.key !== null ? C.set(S.key, S) : C.set(S.index, S), (S = S.sibling);
    return C;
  }
  function i(C, S) {
    return (C = ar(C, S)), (C.index = 0), (C.sibling = null), C;
  }
  function s(C, S, E) {
    return (
      (C.index = E),
      e
        ? ((E = C.alternate),
          E !== null
            ? ((E = E.index), E < S ? ((C.flags |= 2), S) : E)
            : ((C.flags |= 2), S))
        : ((C.flags |= 1048576), S)
    );
  }
  function o(C) {
    return e && C.alternate === null && (C.flags |= 2), C;
  }
  function l(C, S, E, O) {
    return S === null || S.tag !== 6
      ? ((S = Uu(E, C.mode, O)), (S.return = C), S)
      : ((S = i(S, E)), (S.return = C), S);
  }
  function u(C, S, E, O) {
    var L = E.type;
    return L === ai
      ? h(C, S, E.props.children, O, E.key)
      : S !== null &&
        (S.elementType === L ||
          (typeof L == "object" &&
            L !== null &&
            L.$$typeof === zn &&
            Up(L) === S.type))
      ? ((O = i(S, E.props)), (O.ref = gs(C, S, E)), (O.return = C), O)
      : ((O = Ta(E.type, E.key, E.props, null, C.mode, O)),
        (O.ref = gs(C, S, E)),
        (O.return = C),
        O);
  }
  function c(C, S, E, O) {
    return S === null ||
      S.tag !== 4 ||
      S.stateNode.containerInfo !== E.containerInfo ||
      S.stateNode.implementation !== E.implementation
      ? ((S = zu(E, C.mode, O)), (S.return = C), S)
      : ((S = i(S, E.children || [])), (S.return = C), S);
  }
  function h(C, S, E, O, L) {
    return S === null || S.tag !== 7
      ? ((S = Rr(E, C.mode, O, L)), (S.return = C), S)
      : ((S = i(S, E)), (S.return = C), S);
  }
  function m(C, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (S = Uu("" + S, C.mode, E)), (S.return = C), S;
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ko:
          return (
            (E = Ta(S.type, S.key, S.props, null, C.mode, E)),
            (E.ref = gs(C, null, S)),
            (E.return = C),
            E
          );
        case oi:
          return (S = zu(S, C.mode, E)), (S.return = C), S;
        case zn:
          var O = S._init;
          return m(C, O(S._payload), E);
      }
      if (_s(S) || ds(S))
        return (S = Rr(S, C.mode, E, null)), (S.return = C), S;
      ia(C, S);
    }
    return null;
  }
  function g(C, S, E, O) {
    var L = S !== null ? S.key : null;
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return L !== null ? null : l(C, S, "" + E, O);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Ko:
          return E.key === L ? u(C, S, E, O) : null;
        case oi:
          return E.key === L ? c(C, S, E, O) : null;
        case zn:
          return (L = E._init), g(C, S, L(E._payload), O);
      }
      if (_s(E) || ds(E)) return L !== null ? null : h(C, S, E, O, null);
      ia(C, E);
    }
    return null;
  }
  function y(C, S, E, O, L) {
    if ((typeof O == "string" && O !== "") || typeof O == "number")
      return (C = C.get(E) || null), l(S, C, "" + O, L);
    if (typeof O == "object" && O !== null) {
      switch (O.$$typeof) {
        case Ko:
          return (C = C.get(O.key === null ? E : O.key) || null), u(S, C, O, L);
        case oi:
          return (C = C.get(O.key === null ? E : O.key) || null), c(S, C, O, L);
        case zn:
          var D = O._init;
          return y(C, S, E, D(O._payload), L);
      }
      if (_s(O) || ds(O)) return (C = C.get(E) || null), h(S, C, O, L, null);
      ia(S, O);
    }
    return null;
  }
  function _(C, S, E, O) {
    for (
      var L = null, D = null, T = S, v = (S = 0), b = null;
      T !== null && v < E.length;
      v++
    ) {
      T.index > v ? ((b = T), (T = null)) : (b = T.sibling);
      var k = g(C, T, E[v], O);
      if (k === null) {
        T === null && (T = b);
        break;
      }
      e && T && k.alternate === null && t(C, T),
        (S = s(k, S, v)),
        D === null ? (L = k) : (D.sibling = k),
        (D = k),
        (T = b);
    }
    if (v === E.length) return n(C, T), ge && br(C, v), L;
    if (T === null) {
      for (; v < E.length; v++)
        (T = m(C, E[v], O)),
          T !== null &&
            ((S = s(T, S, v)), D === null ? (L = T) : (D.sibling = T), (D = T));
      return ge && br(C, v), L;
    }
    for (T = r(C, T); v < E.length; v++)
      (b = y(T, C, v, E[v], O)),
        b !== null &&
          (e && b.alternate !== null && T.delete(b.key === null ? v : b.key),
          (S = s(b, S, v)),
          D === null ? (L = b) : (D.sibling = b),
          (D = b));
    return (
      e &&
        T.forEach(function (x) {
          return t(C, x);
        }),
      ge && br(C, v),
      L
    );
  }
  function A(C, S, E, O) {
    var L = ds(E);
    if (typeof L != "function") throw Error(F(150));
    if (((E = L.call(E)), E == null)) throw Error(F(151));
    for (
      var D = (L = null), T = S, v = (S = 0), b = null, k = E.next();
      T !== null && !k.done;
      v++, k = E.next()
    ) {
      T.index > v ? ((b = T), (T = null)) : (b = T.sibling);
      var x = g(C, T, k.value, O);
      if (x === null) {
        T === null && (T = b);
        break;
      }
      e && T && x.alternate === null && t(C, T),
        (S = s(x, S, v)),
        D === null ? (L = x) : (D.sibling = x),
        (D = x),
        (T = b);
    }
    if (k.done) return n(C, T), ge && br(C, v), L;
    if (T === null) {
      for (; !k.done; v++, k = E.next())
        (k = m(C, k.value, O)),
          k !== null &&
            ((S = s(k, S, v)), D === null ? (L = k) : (D.sibling = k), (D = k));
      return ge && br(C, v), L;
    }
    for (T = r(C, T); !k.done; v++, k = E.next())
      (k = y(T, C, v, k.value, O)),
        k !== null &&
          (e && k.alternate !== null && T.delete(k.key === null ? v : k.key),
          (S = s(k, S, v)),
          D === null ? (L = k) : (D.sibling = k),
          (D = k));
    return (
      e &&
        T.forEach(function (P) {
          return t(C, P);
        }),
      ge && br(C, v),
      L
    );
  }
  function N(C, S, E, O) {
    if (
      (typeof E == "object" &&
        E !== null &&
        E.type === ai &&
        E.key === null &&
        (E = E.props.children),
      typeof E == "object" && E !== null)
    ) {
      switch (E.$$typeof) {
        case Ko:
          e: {
            for (var L = E.key, D = S; D !== null; ) {
              if (D.key === L) {
                if (((L = E.type), L === ai)) {
                  if (D.tag === 7) {
                    n(C, D.sibling),
                      (S = i(D, E.props.children)),
                      (S.return = C),
                      (C = S);
                    break e;
                  }
                } else if (
                  D.elementType === L ||
                  (typeof L == "object" &&
                    L !== null &&
                    L.$$typeof === zn &&
                    Up(L) === D.type)
                ) {
                  n(C, D.sibling),
                    (S = i(D, E.props)),
                    (S.ref = gs(C, D, E)),
                    (S.return = C),
                    (C = S);
                  break e;
                }
                n(C, D);
                break;
              } else t(C, D);
              D = D.sibling;
            }
            E.type === ai
              ? ((S = Rr(E.props.children, C.mode, O, E.key)),
                (S.return = C),
                (C = S))
              : ((O = Ta(E.type, E.key, E.props, null, C.mode, O)),
                (O.ref = gs(C, S, E)),
                (O.return = C),
                (C = O));
          }
          return o(C);
        case oi:
          e: {
            for (D = E.key; S !== null; ) {
              if (S.key === D)
                if (
                  S.tag === 4 &&
                  S.stateNode.containerInfo === E.containerInfo &&
                  S.stateNode.implementation === E.implementation
                ) {
                  n(C, S.sibling),
                    (S = i(S, E.children || [])),
                    (S.return = C),
                    (C = S);
                  break e;
                } else {
                  n(C, S);
                  break;
                }
              else t(C, S);
              S = S.sibling;
            }
            (S = zu(E, C.mode, O)), (S.return = C), (C = S);
          }
          return o(C);
        case zn:
          return (D = E._init), N(C, S, D(E._payload), O);
      }
      if (_s(E)) return _(C, S, E, O);
      if (ds(E)) return A(C, S, E, O);
      ia(C, E);
    }
    return (typeof E == "string" && E !== "") || typeof E == "number"
      ? ((E = "" + E),
        S !== null && S.tag === 6
          ? (n(C, S.sibling), (S = i(S, E)), (S.return = C), (C = S))
          : (n(C, S), (S = Uu(E, C.mode, O)), (S.return = C), (C = S)),
        o(C))
      : n(C, S);
  }
  return N;
}
var Li = J0(!0),
  Z0 = J0(!1),
  Ga = wr(null),
  Ka = null,
  mi = null,
  sf = null;
function of() {
  sf = mi = Ka = null;
}
function af(e) {
  var t = Ga.current;
  pe(Ga), (e._currentValue = t);
}
function zc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ki(e, t) {
  (Ka = e),
    (sf = mi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ut = !0), (e.firstContext = null));
}
function Ot(e) {
  var t = e._currentValue;
  if (sf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), mi === null)) {
      if (Ka === null) throw Error(F(308));
      (mi = e), (Ka.dependencies = { lanes: 0, firstContext: e });
    } else mi = mi.next = e;
  return t;
}
var Or = null;
function lf(e) {
  Or === null ? (Or = [e]) : Or.push(e);
}
function Q0(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), lf(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    En(e, r)
  );
}
function En(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var $n = !1;
function uf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function e1(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function _n(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ir(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      En(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), lf(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    En(e, n)
  );
}
function _a(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Kd(e, n);
  }
}
function zp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ya(e, t, n, r) {
  var i = e.updateQueue;
  $n = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      c = u.next;
    (u.next = null), o === null ? (s = c) : (o.next = c), (o = u);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (l = h.lastBaseUpdate),
      l !== o &&
        (l === null ? (h.firstBaseUpdate = c) : (l.next = c),
        (h.lastBaseUpdate = u)));
  }
  if (s !== null) {
    var m = i.baseState;
    (o = 0), (h = c = u = null), (l = s);
    do {
      var g = l.lane,
        y = l.eventTime;
      if ((r & g) === g) {
        h !== null &&
          (h = h.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var _ = e,
            A = l;
          switch (((g = t), (y = n), A.tag)) {
            case 1:
              if (((_ = A.payload), typeof _ == "function")) {
                m = _.call(y, m, g);
                break e;
              }
              m = _;
              break e;
            case 3:
              _.flags = (_.flags & -65537) | 128;
            case 0:
              if (
                ((_ = A.payload),
                (g = typeof _ == "function" ? _.call(y, m, g) : _),
                g == null)
              )
                break e;
              m = _e({}, m, g);
              break e;
            case 2:
              $n = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (g = i.effects),
          g === null ? (i.effects = [l]) : g.push(l));
      } else
        (y = {
          eventTime: y,
          lane: g,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          h === null ? ((c = h = y), (u = m)) : (h = h.next = y),
          (o |= g);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (g = l),
          (l = g.next),
          (g.next = null),
          (i.lastBaseUpdate = g),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (u = m),
      (i.baseState = u),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = h),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    ($r |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function $p(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(F(191, i));
        i.call(r);
      }
    }
}
var vo = {},
  rn = wr(vo),
  Qs = wr(vo),
  eo = wr(vo);
function jr(e) {
  if (e === vo) throw Error(F(174));
  return e;
}
function cf(e, t) {
  switch ((ce(eo, t), ce(Qs, e), ce(rn, vo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _c(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _c(t, e));
  }
  pe(rn), ce(rn, t);
}
function Ri() {
  pe(rn), pe(Qs), pe(eo);
}
function t1(e) {
  jr(eo.current);
  var t = jr(rn.current),
    n = _c(t, e.type);
  t !== n && (ce(Qs, e), ce(rn, n));
}
function df(e) {
  Qs.current === e && (pe(rn), pe(Qs));
}
var ye = wr(0);
function qa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ju = [];
function ff() {
  for (var e = 0; e < ju.length; e++)
    ju[e]._workInProgressVersionPrimary = null;
  ju.length = 0;
}
var Sa = Pn.ReactCurrentDispatcher,
  Lu = Pn.ReactCurrentBatchConfig,
  zr = 0,
  we = null,
  Oe = null,
  Re = null,
  Xa = !1,
  Os = !1,
  to = 0,
  F_ = 0;
function Ke() {
  throw Error(F(321));
}
function hf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Vt(e[n], t[n])) return !1;
  return !0;
}
function pf(e, t, n, r, i, s) {
  if (
    ((zr = s),
    (we = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Sa.current = e === null || e.memoizedState === null ? B_ : V_),
    (e = n(r, i)),
    Os)
  ) {
    s = 0;
    do {
      if (((Os = !1), (to = 0), 25 <= s)) throw Error(F(301));
      (s += 1),
        (Re = Oe = null),
        (t.updateQueue = null),
        (Sa.current = H_),
        (e = n(r, i));
    } while (Os);
  }
  if (
    ((Sa.current = Ja),
    (t = Oe !== null && Oe.next !== null),
    (zr = 0),
    (Re = Oe = we = null),
    (Xa = !1),
    t)
  )
    throw Error(F(300));
  return e;
}
function mf() {
  var e = to !== 0;
  return (to = 0), e;
}
function Xt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Re === null ? (we.memoizedState = Re = e) : (Re = Re.next = e), Re;
}
function jt() {
  if (Oe === null) {
    var e = we.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Oe.next;
  var t = Re === null ? we.memoizedState : Re.next;
  if (t !== null) (Re = t), (Oe = e);
  else {
    if (e === null) throw Error(F(310));
    (Oe = e),
      (e = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null,
      }),
      Re === null ? (we.memoizedState = Re = e) : (Re = Re.next = e);
  }
  return Re;
}
function no(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ru(e) {
  var t = jt(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = Oe,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      u = null,
      c = s;
    do {
      var h = c.lane;
      if ((zr & h) === h)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((l = u = m), (o = r)) : (u = u.next = m),
          (we.lanes |= h),
          ($r |= h);
      }
      c = c.next;
    } while (c !== null && c !== s);
    u === null ? (o = r) : (u.next = l),
      Vt(r, t.memoizedState) || (ut = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (we.lanes |= s), ($r |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Mu(e) {
  var t = jt(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Vt(s, t.memoizedState) || (ut = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function n1() {}
function r1(e, t) {
  var n = we,
    r = jt(),
    i = t(),
    s = !Vt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (ut = !0)),
    (r = r.queue),
    gf(o1.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Re !== null && Re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ro(9, s1.bind(null, n, r, i, t), void 0, null),
      Me === null)
    )
      throw Error(F(349));
    zr & 30 || i1(n, t, i);
  }
  return i;
}
function i1(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = we.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (we.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function s1(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), a1(t) && l1(e);
}
function o1(e, t, n) {
  return n(function () {
    a1(t) && l1(e);
  });
}
function a1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Vt(e, n);
  } catch {
    return !0;
  }
}
function l1(e) {
  var t = En(e, 1);
  t !== null && Bt(t, e, 1, -1);
}
function Bp(e) {
  var t = Xt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: no,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = $_.bind(null, we, e)),
    [t.memoizedState, e]
  );
}
function ro(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = we.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (we.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function u1() {
  return jt().memoizedState;
}
function Ca(e, t, n, r) {
  var i = Xt();
  (we.flags |= e),
    (i.memoizedState = ro(1 | t, n, void 0, r === void 0 ? null : r));
}
function Nl(e, t, n, r) {
  var i = jt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Oe !== null) {
    var o = Oe.memoizedState;
    if (((s = o.destroy), r !== null && hf(r, o.deps))) {
      i.memoizedState = ro(t, n, s, r);
      return;
    }
  }
  (we.flags |= e), (i.memoizedState = ro(1 | t, n, s, r));
}
function Vp(e, t) {
  return Ca(8390656, 8, e, t);
}
function gf(e, t) {
  return Nl(2048, 8, e, t);
}
function c1(e, t) {
  return Nl(4, 2, e, t);
}
function d1(e, t) {
  return Nl(4, 4, e, t);
}
function f1(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function h1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Nl(4, 4, f1.bind(null, t, e), n)
  );
}
function vf() {}
function p1(e, t) {
  var n = jt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function m1(e, t) {
  var n = jt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function g1(e, t, n) {
  return zr & 21
    ? (Vt(n, t) || ((n = S0()), (we.lanes |= n), ($r |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ut = !0)), (e.memoizedState = n));
}
function U_(e, t) {
  var n = oe;
  (oe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Lu.transition;
  Lu.transition = {};
  try {
    e(!1), t();
  } finally {
    (oe = n), (Lu.transition = r);
  }
}
function v1() {
  return jt().memoizedState;
}
function z_(e, t, n) {
  var r = or(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    y1(e))
  )
    w1(t, n);
  else if (((n = Q0(e, t, n, r)), n !== null)) {
    var i = nt();
    Bt(n, e, r, i), _1(n, t, r);
  }
}
function $_(e, t, n) {
  var r = or(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (y1(e)) w1(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Vt(l, o))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), lf(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Q0(e, t, i, r)),
      n !== null && ((i = nt()), Bt(n, e, r, i), _1(n, t, r));
  }
}
function y1(e) {
  var t = e.alternate;
  return e === we || (t !== null && t === we);
}
function w1(e, t) {
  Os = Xa = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function _1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Kd(e, n);
  }
}
var Ja = {
    readContext: Ot,
    useCallback: Ke,
    useContext: Ke,
    useEffect: Ke,
    useImperativeHandle: Ke,
    useInsertionEffect: Ke,
    useLayoutEffect: Ke,
    useMemo: Ke,
    useReducer: Ke,
    useRef: Ke,
    useState: Ke,
    useDebugValue: Ke,
    useDeferredValue: Ke,
    useTransition: Ke,
    useMutableSource: Ke,
    useSyncExternalStore: Ke,
    useId: Ke,
    unstable_isNewReconciler: !1,
  },
  B_ = {
    readContext: Ot,
    useCallback: function (e, t) {
      return (Xt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ot,
    useEffect: Vp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ca(4194308, 4, f1.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ca(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ca(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Xt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Xt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = z_.bind(null, we, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Xt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Bp,
    useDebugValue: vf,
    useDeferredValue: function (e) {
      return (Xt().memoizedState = e);
    },
    useTransition: function () {
      var e = Bp(!1),
        t = e[0];
      return (e = U_.bind(null, e[1])), (Xt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = we,
        i = Xt();
      if (ge) {
        if (n === void 0) throw Error(F(407));
        n = n();
      } else {
        if (((n = t()), Me === null)) throw Error(F(349));
        zr & 30 || i1(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Vp(o1.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        ro(9, s1.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Xt(),
        t = Me.identifierPrefix;
      if (ge) {
        var n = gn,
          r = mn;
        (n = (r & ~(1 << (32 - $t(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = to++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = F_++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  V_ = {
    readContext: Ot,
    useCallback: p1,
    useContext: Ot,
    useEffect: gf,
    useImperativeHandle: h1,
    useInsertionEffect: c1,
    useLayoutEffect: d1,
    useMemo: m1,
    useReducer: Ru,
    useRef: u1,
    useState: function () {
      return Ru(no);
    },
    useDebugValue: vf,
    useDeferredValue: function (e) {
      var t = jt();
      return g1(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ru(no)[0],
        t = jt().memoizedState;
      return [e, t];
    },
    useMutableSource: n1,
    useSyncExternalStore: r1,
    useId: v1,
    unstable_isNewReconciler: !1,
  },
  H_ = {
    readContext: Ot,
    useCallback: p1,
    useContext: Ot,
    useEffect: gf,
    useImperativeHandle: h1,
    useInsertionEffect: c1,
    useLayoutEffect: d1,
    useMemo: m1,
    useReducer: Mu,
    useRef: u1,
    useState: function () {
      return Mu(no);
    },
    useDebugValue: vf,
    useDeferredValue: function (e) {
      var t = jt();
      return Oe === null ? (t.memoizedState = e) : g1(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Mu(no)[0],
        t = jt().memoizedState;
      return [e, t];
    },
    useMutableSource: n1,
    useSyncExternalStore: r1,
    useId: v1,
    unstable_isNewReconciler: !1,
  };
function Dt(e, t) {
  if (e && e.defaultProps) {
    (t = _e({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function $c(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : _e({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Pl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = nt(),
      i = or(e),
      s = _n(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = ir(e, s, i)),
      t !== null && (Bt(t, e, i, r), _a(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = nt(),
      i = or(e),
      s = _n(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = ir(e, s, i)),
      t !== null && (Bt(t, e, i, r), _a(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = nt(),
      r = or(e),
      i = _n(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = ir(e, i, r)),
      t !== null && (Bt(t, e, r, n), _a(t, e, r));
  },
};
function Hp(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !qs(n, r) || !qs(i, s)
      : !0
  );
}
function S1(e, t, n) {
  var r = !1,
    i = pr,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Ot(s))
      : ((i = dt(t) ? Fr : Xe.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Oi(e, i) : pr)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Pl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Wp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Pl.enqueueReplaceState(t, t.state, null);
}
function Bc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), uf(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Ot(s))
    : ((s = dt(t) ? Fr : Xe.current), (i.context = Oi(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && ($c(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Pl.enqueueReplaceState(i, i.state, null),
      Ya(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Mi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += yw(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Du(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var W_ = typeof WeakMap == "function" ? WeakMap : Map;
function C1(e, t, n) {
  (n = _n(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Qa || ((Qa = !0), (Qc = r)), Vc(e, t);
    }),
    n
  );
}
function x1(e, t, n) {
  (n = _n(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Vc(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Vc(e, t),
          typeof r != "function" &&
            (sr === null ? (sr = new Set([this])) : sr.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Gp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new W_();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = s4.bind(null, e, t, n)), t.then(e, e));
}
function Kp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Yp(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = _n(-1, 1)), (t.tag = 2), ir(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var G_ = Pn.ReactCurrentOwner,
  ut = !1;
function et(e, t, n, r) {
  t.child = e === null ? Z0(t, null, n, r) : Li(t, e.child, n, r);
}
function qp(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    ki(t, i),
    (r = pf(e, t, n, r, s, i)),
    (n = mf()),
    e !== null && !ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        kn(e, t, i))
      : (ge && n && tf(t), (t.flags |= 1), et(e, t, r, i), t.child)
  );
}
function Xp(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !kf(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), E1(e, t, s, r, i))
      : ((e = Ta(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : qs), n(o, r) && e.ref === t.ref)
    )
      return kn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = ar(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function E1(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (qs(s, r) && e.ref === t.ref)
      if (((ut = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (ut = !0);
      else return (t.lanes = e.lanes), kn(e, t, i);
  }
  return Hc(e, t, n, r, i);
}
function k1(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ce(vi, gt),
        (gt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ce(vi, gt),
          (gt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        ce(vi, gt),
        (gt |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ce(vi, gt),
      (gt |= r);
  return et(e, t, i, n), t.child;
}
function T1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Hc(e, t, n, r, i) {
  var s = dt(n) ? Fr : Xe.current;
  return (
    (s = Oi(t, s)),
    ki(t, i),
    (n = pf(e, t, n, r, s, i)),
    (r = mf()),
    e !== null && !ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        kn(e, t, i))
      : (ge && r && tf(t), (t.flags |= 1), et(e, t, n, i), t.child)
  );
}
function Jp(e, t, n, r, i) {
  if (dt(n)) {
    var s = !0;
    Va(t);
  } else s = !1;
  if ((ki(t, i), t.stateNode === null))
    xa(e, t), S1(t, n, r), Bc(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var u = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ot(c))
      : ((c = dt(n) ? Fr : Xe.current), (c = Oi(t, c)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || u !== c) && Wp(t, o, r, c)),
      ($n = !1);
    var g = t.memoizedState;
    (o.state = g),
      Ya(t, r, o, i),
      (u = t.memoizedState),
      l !== r || g !== u || ct.current || $n
        ? (typeof h == "function" && ($c(t, n, h, r), (u = t.memoizedState)),
          (l = $n || Hp(t, n, l, r, g, u, c))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = c),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      e1(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : Dt(t.type, l)),
      (o.props = c),
      (m = t.pendingProps),
      (g = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ot(u))
        : ((u = dt(n) ? Fr : Xe.current), (u = Oi(t, u)));
    var y = n.getDerivedStateFromProps;
    (h =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== m || g !== u) && Wp(t, o, r, u)),
      ($n = !1),
      (g = t.memoizedState),
      (o.state = g),
      Ya(t, r, o, i);
    var _ = t.memoizedState;
    l !== m || g !== _ || ct.current || $n
      ? (typeof y == "function" && ($c(t, n, y, r), (_ = t.memoizedState)),
        (c = $n || Hp(t, n, c, r, g, _, u) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, _, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, _, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = _)),
        (o.props = r),
        (o.state = _),
        (o.context = u),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Wc(e, t, n, r, s, i);
}
function Wc(e, t, n, r, i, s) {
  T1(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Mp(t, n, !1), kn(e, t, s);
  (r = t.stateNode), (G_.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Li(t, e.child, null, s)), (t.child = Li(t, null, l, s)))
      : et(e, t, l, s),
    (t.memoizedState = r.state),
    i && Mp(t, n, !0),
    t.child
  );
}
function b1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Rp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Rp(e, t.context, !1),
    cf(e, t.containerInfo);
}
function Zp(e, t, n, r, i) {
  return ji(), rf(i), (t.flags |= 256), et(e, t, n, r), t.child;
}
var Gc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Kc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function I1(e, t, n) {
  var r = t.pendingProps,
    i = ye.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ce(ye, i & 1),
    e === null)
  )
    return (
      Uc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = jl(o, r, 0, null)),
              (e = Rr(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Kc(n)),
              (t.memoizedState = Gc),
              e)
            : yf(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return K_(e, t, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = ar(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = ar(l, s)) : ((s = Rr(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Kc(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Gc),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = ar(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function yf(e, t) {
  return (
    (t = jl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function sa(e, t, n, r) {
  return (
    r !== null && rf(r),
    Li(t, e.child, null, n),
    (e = yf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function K_(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Du(Error(F(422)))), sa(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = jl({ mode: "visible", children: r.children }, i, 0, null)),
        (s = Rr(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Li(t, e.child, null, o),
        (t.child.memoizedState = Kc(o)),
        (t.memoizedState = Gc),
        s);
  if (!(t.mode & 1)) return sa(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(F(419))), (r = Du(s, r, void 0)), sa(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), ut || l)) {
    if (((r = Me), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), En(e, i), Bt(r, e, i, -1));
    }
    return Ef(), (r = Du(Error(F(421)))), sa(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = o4.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (yt = rr(i.nextSibling)),
      (wt = t),
      (ge = !0),
      (Ut = null),
      e !== null &&
        ((It[Nt++] = mn),
        (It[Nt++] = gn),
        (It[Nt++] = Ur),
        (mn = e.id),
        (gn = e.overflow),
        (Ur = t)),
      (t = yf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Qp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), zc(e.return, t, n);
}
function Fu(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function N1(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((et(e, t, r.children, n), (r = ye.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Qp(e, n, t);
        else if (e.tag === 19) Qp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ce(ye, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && qa(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Fu(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && qa(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Fu(t, !0, n, null, s);
        break;
      case "together":
        Fu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function xa(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function kn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    ($r |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(F(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ar(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ar(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Y_(e, t, n) {
  switch (t.tag) {
    case 3:
      b1(t), ji();
      break;
    case 5:
      t1(t);
      break;
    case 1:
      dt(t.type) && Va(t);
      break;
    case 4:
      cf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ce(Ga, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ce(ye, ye.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? I1(e, t, n)
          : (ce(ye, ye.current & 1),
            (e = kn(e, t, n)),
            e !== null ? e.sibling : null);
      ce(ye, ye.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return N1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ce(ye, ye.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), k1(e, t, n);
  }
  return kn(e, t, n);
}
var P1, Yc, A1, O1;
P1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Yc = function () {};
A1 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), jr(rn.current);
    var s = null;
    switch (n) {
      case "input":
        (i = gc(e, i)), (r = gc(e, r)), (s = []);
        break;
      case "select":
        (i = _e({}, i, { value: void 0 })),
          (r = _e({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = wc(e, i)), (r = wc(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = $a);
    }
    Sc(n, r);
    var o;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var l = i[c];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Bs.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((l = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && u !== l && (u != null || l != null))
      )
        if (c === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                l[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (s || (s = []), s.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (s = s || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (s = s || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Bs.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && fe("scroll", e),
                  s || l === u || (s = []))
                : (s = s || []).push(c, u));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
O1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vs(e, t) {
  if (!ge)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function q_(e, t, n) {
  var r = t.pendingProps;
  switch ((nf(t), t.tag)) {
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
      return Ye(t), null;
    case 1:
      return dt(t.type) && Ba(), Ye(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ri(),
        pe(ct),
        pe(Xe),
        ff(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ra(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ut !== null && (nd(Ut), (Ut = null)))),
        Yc(e, t),
        Ye(t),
        null
      );
    case 5:
      df(t);
      var i = jr(eo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        A1(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(F(166));
          return Ye(t), null;
        }
        if (((e = jr(rn.current)), ra(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Zt] = t), (r[Zs] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              fe("cancel", r), fe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              fe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Cs.length; i++) fe(Cs[i], r);
              break;
            case "source":
              fe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              fe("error", r), fe("load", r);
              break;
            case "details":
              fe("toggle", r);
              break;
            case "input":
              lp(r, s), fe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                fe("invalid", r);
              break;
            case "textarea":
              cp(r, s), fe("invalid", r);
          }
          Sc(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      na(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      na(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Bs.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  fe("scroll", r);
            }
          switch (n) {
            case "input":
              Yo(r), up(r, s, !0);
              break;
            case "textarea":
              Yo(r), dp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = $a);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = o0(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Zt] = t),
            (e[Zs] = r),
            P1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Cc(n, r)), n)) {
              case "dialog":
                fe("cancel", e), fe("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Cs.length; i++) fe(Cs[i], e);
                i = r;
                break;
              case "source":
                fe("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", e), fe("load", e), (i = r);
                break;
              case "details":
                fe("toggle", e), (i = r);
                break;
              case "input":
                lp(e, r), (i = gc(e, r)), fe("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = _e({}, r, { value: void 0 })),
                  fe("invalid", e);
                break;
              case "textarea":
                cp(e, r), (i = wc(e, r)), fe("invalid", e);
                break;
              default:
                i = r;
            }
            Sc(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var u = l[s];
                s === "style"
                  ? u0(e, u)
                  : s === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && a0(e, u))
                  : s === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Vs(e, u)
                    : typeof u == "number" && Vs(e, "" + u)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Bs.hasOwnProperty(s)
                      ? u != null && s === "onScroll" && fe("scroll", e)
                      : u != null && $d(e, s, u, o));
              }
            switch (n) {
              case "input":
                Yo(e), up(e, r, !1);
                break;
              case "textarea":
                Yo(e), dp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + hr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Si(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Si(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = $a);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ye(t), null;
    case 6:
      if (e && t.stateNode != null) O1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(F(166));
        if (((n = jr(eo.current)), jr(rn.current), ra(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Zt] = t),
            (s = r.nodeValue !== n) && ((e = wt), e !== null))
          )
            switch (e.tag) {
              case 3:
                na(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  na(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Zt] = t),
            (t.stateNode = r);
      }
      return Ye(t), null;
    case 13:
      if (
        (pe(ye),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ge && yt !== null && t.mode & 1 && !(t.flags & 128))
          X0(), ji(), (t.flags |= 98560), (s = !1);
        else if (((s = ra(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(F(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(F(317));
            s[Zt] = t;
          } else
            ji(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ye(t), (s = !1);
        } else Ut !== null && (nd(Ut), (Ut = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ye.current & 1 ? je === 0 && (je = 3) : Ef())),
          t.updateQueue !== null && (t.flags |= 4),
          Ye(t),
          null);
    case 4:
      return (
        Ri(), Yc(e, t), e === null && Xs(t.stateNode.containerInfo), Ye(t), null
      );
    case 10:
      return af(t.type._context), Ye(t), null;
    case 17:
      return dt(t.type) && Ba(), Ye(t), null;
    case 19:
      if ((pe(ye), (s = t.memoizedState), s === null)) return Ye(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) vs(s, !1);
        else {
          if (je !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = qa(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    vs(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ce(ye, (ye.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            be() > Di &&
            ((t.flags |= 128), (r = !0), vs(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = qa(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              vs(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !ge)
            )
              return Ye(t), null;
          } else
            2 * be() - s.renderingStartTime > Di &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), vs(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = be()),
          (t.sibling = null),
          (n = ye.current),
          ce(ye, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ye(t), null);
    case 22:
    case 23:
      return (
        xf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? gt & 1073741824 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function X_(e, t) {
  switch ((nf(t), t.tag)) {
    case 1:
      return (
        dt(t.type) && Ba(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ri(),
        pe(ct),
        pe(Xe),
        ff(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return df(t), null;
    case 13:
      if (
        (pe(ye), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(F(340));
        ji();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return pe(ye), null;
    case 4:
      return Ri(), null;
    case 10:
      return af(t.type._context), null;
    case 22:
    case 23:
      return xf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var oa = !1,
  qe = !1,
  J_ = typeof WeakSet == "function" ? WeakSet : Set,
  $ = null;
function gi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ce(e, t, r);
      }
    else n.current = null;
}
function qc(e, t, n) {
  try {
    n();
  } catch (r) {
    Ce(e, t, r);
  }
}
var em = !1;
function Z_(e, t) {
  if (((Oc = Fa), (e = D0()), ef(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            u = -1,
            c = 0,
            h = 0,
            m = e,
            g = null;
          t: for (;;) {
            for (
              var y;
              m !== n || (i !== 0 && m.nodeType !== 3) || (l = o + i),
                m !== s || (r !== 0 && m.nodeType !== 3) || (u = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (y = m.firstChild) !== null;

            )
              (g = m), (m = y);
            for (;;) {
              if (m === e) break t;
              if (
                (g === n && ++c === i && (l = o),
                g === s && ++h === r && (u = o),
                (y = m.nextSibling) !== null)
              )
                break;
              (m = g), (g = m.parentNode);
            }
            m = y;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (jc = { focusedElem: e, selectionRange: n }, Fa = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), ($ = e);
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var _ = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (_ !== null) {
                  var A = _.memoizedProps,
                    N = _.memoizedState,
                    C = t.stateNode,
                    S = C.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? A : Dt(t.type, A),
                      N
                    );
                  C.__reactInternalSnapshotBeforeUpdate = S;
                }
                break;
              case 3:
                var E = t.stateNode.containerInfo;
                E.nodeType === 1
                  ? (E.textContent = "")
                  : E.nodeType === 9 &&
                    E.documentElement &&
                    E.removeChild(E.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (O) {
          Ce(t, t.return, O);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($ = e);
          break;
        }
        $ = t.return;
      }
  return (_ = em), (em = !1), _;
}
function js(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && qc(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Al(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Xc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function j1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), j1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Zt], delete t[Zs], delete t[Mc], delete t[L_], delete t[R_])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function L1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function tm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || L1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Jc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = $a));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Jc(e, t, n), e = e.sibling; e !== null; ) Jc(e, t, n), (e = e.sibling);
}
function Zc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zc(e, t, n), e = e.sibling; e !== null; ) Zc(e, t, n), (e = e.sibling);
}
var ze = null,
  Ft = !1;
function Dn(e, t, n) {
  for (n = n.child; n !== null; ) R1(e, t, n), (n = n.sibling);
}
function R1(e, t, n) {
  if (nn && typeof nn.onCommitFiberUnmount == "function")
    try {
      nn.onCommitFiberUnmount(xl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      qe || gi(n, t);
    case 6:
      var r = ze,
        i = Ft;
      (ze = null),
        Dn(e, t, n),
        (ze = r),
        (Ft = i),
        ze !== null &&
          (Ft
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ze.removeChild(n.stateNode));
      break;
    case 18:
      ze !== null &&
        (Ft
          ? ((e = ze),
            (n = n.stateNode),
            e.nodeType === 8
              ? Au(e.parentNode, n)
              : e.nodeType === 1 && Au(e, n),
            Ks(e))
          : Au(ze, n.stateNode));
      break;
    case 4:
      (r = ze),
        (i = Ft),
        (ze = n.stateNode.containerInfo),
        (Ft = !0),
        Dn(e, t, n),
        (ze = r),
        (Ft = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !qe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && qc(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      Dn(e, t, n);
      break;
    case 1:
      if (
        !qe &&
        (gi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Ce(n, t, l);
        }
      Dn(e, t, n);
      break;
    case 21:
      Dn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((qe = (r = qe) || n.memoizedState !== null), Dn(e, t, n), (qe = r))
        : Dn(e, t, n);
      break;
    default:
      Dn(e, t, n);
  }
}
function nm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new J_()),
      t.forEach(function (r) {
        var i = a4.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Mt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ze = l.stateNode), (Ft = !1);
              break e;
            case 3:
              (ze = l.stateNode.containerInfo), (Ft = !0);
              break e;
            case 4:
              (ze = l.stateNode.containerInfo), (Ft = !0);
              break e;
          }
          l = l.return;
        }
        if (ze === null) throw Error(F(160));
        R1(s, o, i), (ze = null), (Ft = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (c) {
        Ce(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) M1(t, e), (t = t.sibling);
}
function M1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Mt(t, e), Gt(e), r & 4)) {
        try {
          js(3, e, e.return), Al(3, e);
        } catch (A) {
          Ce(e, e.return, A);
        }
        try {
          js(5, e, e.return);
        } catch (A) {
          Ce(e, e.return, A);
        }
      }
      break;
    case 1:
      Mt(t, e), Gt(e), r & 512 && n !== null && gi(n, n.return);
      break;
    case 5:
      if (
        (Mt(t, e),
        Gt(e),
        r & 512 && n !== null && gi(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Vs(i, "");
        } catch (A) {
          Ce(e, e.return, A);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && i0(i, s),
              Cc(l, o);
            var c = Cc(l, s);
            for (o = 0; o < u.length; o += 2) {
              var h = u[o],
                m = u[o + 1];
              h === "style"
                ? u0(i, m)
                : h === "dangerouslySetInnerHTML"
                ? a0(i, m)
                : h === "children"
                ? Vs(i, m)
                : $d(i, h, m, c);
            }
            switch (l) {
              case "input":
                vc(i, s);
                break;
              case "textarea":
                s0(i, s);
                break;
              case "select":
                var g = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var y = s.value;
                y != null
                  ? Si(i, !!s.multiple, y, !1)
                  : g !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Si(i, !!s.multiple, s.defaultValue, !0)
                      : Si(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Zs] = s;
          } catch (A) {
            Ce(e, e.return, A);
          }
      }
      break;
    case 6:
      if ((Mt(t, e), Gt(e), r & 4)) {
        if (e.stateNode === null) throw Error(F(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (A) {
          Ce(e, e.return, A);
        }
      }
      break;
    case 3:
      if (
        (Mt(t, e), Gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ks(t.containerInfo);
        } catch (A) {
          Ce(e, e.return, A);
        }
      break;
    case 4:
      Mt(t, e), Gt(e);
      break;
    case 13:
      Mt(t, e),
        Gt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Sf = be())),
        r & 4 && nm(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((qe = (c = qe) || h), Mt(t, e), (qe = c)) : Mt(t, e),
        Gt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for ($ = e, h = e.child; h !== null; ) {
            for (m = $ = h; $ !== null; ) {
              switch (((g = $), (y = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  js(4, g, g.return);
                  break;
                case 1:
                  gi(g, g.return);
                  var _ = g.stateNode;
                  if (typeof _.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (_.props = t.memoizedProps),
                        (_.state = t.memoizedState),
                        _.componentWillUnmount();
                    } catch (A) {
                      Ce(r, n, A);
                    }
                  }
                  break;
                case 5:
                  gi(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    im(m);
                    continue;
                  }
              }
              y !== null ? ((y.return = g), ($ = y)) : im(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (i = m.stateNode),
                  c
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = m.stateNode),
                      (u = m.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = l0("display", o)));
              } catch (A) {
                Ce(e, e.return, A);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (A) {
                Ce(e, e.return, A);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Mt(t, e), Gt(e), r & 4 && nm(e);
      break;
    case 21:
      break;
    default:
      Mt(t, e), Gt(e);
  }
}
function Gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (L1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Vs(i, ""), (r.flags &= -33));
          var s = tm(e);
          Zc(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = tm(e);
          Jc(e, l, o);
          break;
        default:
          throw Error(F(161));
      }
    } catch (u) {
      Ce(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Q_(e, t, n) {
  ($ = e), D1(e);
}
function D1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var i = $,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || oa;
      if (!o) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || qe;
        l = oa;
        var c = qe;
        if (((oa = o), (qe = u) && !c))
          for ($ = i; $ !== null; )
            (o = $),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? sm(i)
                : u !== null
                ? ((u.return = o), ($ = u))
                : sm(i);
        for (; s !== null; ) ($ = s), D1(s), (s = s.sibling);
        ($ = i), (oa = l), (qe = c);
      }
      rm(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), ($ = s)) : rm(e);
  }
}
function rm(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              qe || Al(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !qe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Dt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && $p(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                $p(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && Ks(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(F(163));
          }
        qe || (t.flags & 512 && Xc(t));
      } catch (g) {
        Ce(t, t.return, g);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function im(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function sm(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Al(4, t);
          } catch (u) {
            Ce(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Ce(t, i, u);
            }
          }
          var s = t.return;
          try {
            Xc(t);
          } catch (u) {
            Ce(t, s, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Xc(t);
          } catch (u) {
            Ce(t, o, u);
          }
      }
    } catch (u) {
      Ce(t, t.return, u);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), ($ = l);
      break;
    }
    $ = t.return;
  }
}
var e4 = Math.ceil,
  Za = Pn.ReactCurrentDispatcher,
  wf = Pn.ReactCurrentOwner,
  At = Pn.ReactCurrentBatchConfig,
  Q = 0,
  Me = null,
  Ae = null,
  $e = 0,
  gt = 0,
  vi = wr(0),
  je = 0,
  io = null,
  $r = 0,
  Ol = 0,
  _f = 0,
  Ls = null,
  ot = null,
  Sf = 0,
  Di = 1 / 0,
  hn = null,
  Qa = !1,
  Qc = null,
  sr = null,
  aa = !1,
  qn = null,
  el = 0,
  Rs = 0,
  ed = null,
  Ea = -1,
  ka = 0;
function nt() {
  return Q & 6 ? be() : Ea !== -1 ? Ea : (Ea = be());
}
function or(e) {
  return e.mode & 1
    ? Q & 2 && $e !== 0
      ? $e & -$e
      : D_.transition !== null
      ? (ka === 0 && (ka = S0()), ka)
      : ((e = oe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : I0(e.type))),
        e)
    : 1;
}
function Bt(e, t, n, r) {
  if (50 < Rs) throw ((Rs = 0), (ed = null), Error(F(185)));
  po(e, n, r),
    (!(Q & 2) || e !== Me) &&
      (e === Me && (!(Q & 2) && (Ol |= n), je === 4 && Vn(e, $e)),
      ft(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((Di = be() + 500), Il && _r()));
}
function ft(e, t) {
  var n = e.callbackNode;
  Dw(e, t);
  var r = Da(e, e === Me ? $e : 0);
  if (r === 0)
    n !== null && pp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && pp(n), t === 1))
      e.tag === 0 ? M_(om.bind(null, e)) : K0(om.bind(null, e)),
        O_(function () {
          !(Q & 6) && _r();
        }),
        (n = null);
    else {
      switch (C0(r)) {
        case 1:
          n = Gd;
          break;
        case 4:
          n = w0;
          break;
        case 16:
          n = Ma;
          break;
        case 536870912:
          n = _0;
          break;
        default:
          n = Ma;
      }
      n = W1(n, F1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function F1(e, t) {
  if (((Ea = -1), (ka = 0), Q & 6)) throw Error(F(327));
  var n = e.callbackNode;
  if (Ti() && e.callbackNode !== n) return null;
  var r = Da(e, e === Me ? $e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = tl(e, r);
  else {
    t = r;
    var i = Q;
    Q |= 2;
    var s = z1();
    (Me !== e || $e !== t) && ((hn = null), (Di = be() + 500), Lr(e, t));
    do
      try {
        r4();
        break;
      } catch (l) {
        U1(e, l);
      }
    while (!0);
    of(),
      (Za.current = s),
      (Q = i),
      Ae !== null ? (t = 0) : ((Me = null), ($e = 0), (t = je));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = bc(e)), i !== 0 && ((r = i), (t = td(e, i)))), t === 1)
    )
      throw ((n = io), Lr(e, 0), Vn(e, r), ft(e, be()), n);
    if (t === 6) Vn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !t4(i) &&
          ((t = tl(e, r)),
          t === 2 && ((s = bc(e)), s !== 0 && ((r = s), (t = td(e, s)))),
          t === 1))
      )
        throw ((n = io), Lr(e, 0), Vn(e, r), ft(e, be()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          Ir(e, ot, hn);
          break;
        case 3:
          if (
            (Vn(e, r), (r & 130023424) === r && ((t = Sf + 500 - be()), 10 < t))
          ) {
            if (Da(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              nt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Rc(Ir.bind(null, e, ot, hn), t);
            break;
          }
          Ir(e, ot, hn);
          break;
        case 4:
          if ((Vn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - $t(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = be() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * e4(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Rc(Ir.bind(null, e, ot, hn), r);
            break;
          }
          Ir(e, ot, hn);
          break;
        case 5:
          Ir(e, ot, hn);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return ft(e, be()), e.callbackNode === n ? F1.bind(null, e) : null;
}
function td(e, t) {
  var n = Ls;
  return (
    e.current.memoizedState.isDehydrated && (Lr(e, t).flags |= 256),
    (e = tl(e, t)),
    e !== 2 && ((t = ot), (ot = n), t !== null && nd(t)),
    e
  );
}
function nd(e) {
  ot === null ? (ot = e) : ot.push.apply(ot, e);
}
function t4(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Vt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Vn(e, t) {
  for (
    t &= ~_f,
      t &= ~Ol,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - $t(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function om(e) {
  if (Q & 6) throw Error(F(327));
  Ti();
  var t = Da(e, 0);
  if (!(t & 1)) return ft(e, be()), null;
  var n = tl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = bc(e);
    r !== 0 && ((t = r), (n = td(e, r)));
  }
  if (n === 1) throw ((n = io), Lr(e, 0), Vn(e, t), ft(e, be()), n);
  if (n === 6) throw Error(F(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ir(e, ot, hn),
    ft(e, be()),
    null
  );
}
function Cf(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((Di = be() + 500), Il && _r());
  }
}
function Br(e) {
  qn !== null && qn.tag === 0 && !(Q & 6) && Ti();
  var t = Q;
  Q |= 1;
  var n = At.transition,
    r = oe;
  try {
    if (((At.transition = null), (oe = 1), e)) return e();
  } finally {
    (oe = r), (At.transition = n), (Q = t), !(Q & 6) && _r();
  }
}
function xf() {
  (gt = vi.current), pe(vi);
}
function Lr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), A_(n)), Ae !== null))
    for (n = Ae.return; n !== null; ) {
      var r = n;
      switch ((nf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ba();
          break;
        case 3:
          Ri(), pe(ct), pe(Xe), ff();
          break;
        case 5:
          df(r);
          break;
        case 4:
          Ri();
          break;
        case 13:
          pe(ye);
          break;
        case 19:
          pe(ye);
          break;
        case 10:
          af(r.type._context);
          break;
        case 22:
        case 23:
          xf();
      }
      n = n.return;
    }
  if (
    ((Me = e),
    (Ae = e = ar(e.current, null)),
    ($e = gt = t),
    (je = 0),
    (io = null),
    (_f = Ol = $r = 0),
    (ot = Ls = null),
    Or !== null)
  ) {
    for (t = 0; t < Or.length; t++)
      if (((n = Or[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    Or = null;
  }
  return e;
}
function U1(e, t) {
  do {
    var n = Ae;
    try {
      if ((of(), (Sa.current = Ja), Xa)) {
        for (var r = we.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Xa = !1;
      }
      if (
        ((zr = 0),
        (Re = Oe = we = null),
        (Os = !1),
        (to = 0),
        (wf.current = null),
        n === null || n.return === null)
      ) {
        (je = 1), (io = t), (Ae = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          u = t;
        if (
          ((t = $e),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            h = l,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var g = h.alternate;
            g
              ? ((h.updateQueue = g.updateQueue),
                (h.memoizedState = g.memoizedState),
                (h.lanes = g.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var y = Kp(o);
          if (y !== null) {
            (y.flags &= -257),
              Yp(y, o, l, s, t),
              y.mode & 1 && Gp(s, c, t),
              (t = y),
              (u = c);
            var _ = t.updateQueue;
            if (_ === null) {
              var A = new Set();
              A.add(u), (t.updateQueue = A);
            } else _.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Gp(s, c, t), Ef();
              break e;
            }
            u = Error(F(426));
          }
        } else if (ge && l.mode & 1) {
          var N = Kp(o);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              Yp(N, o, l, s, t),
              rf(Mi(u, l));
            break e;
          }
        }
        (s = u = Mi(u, l)),
          je !== 4 && (je = 2),
          Ls === null ? (Ls = [s]) : Ls.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var C = C1(s, u, t);
              zp(s, C);
              break e;
            case 1:
              l = u;
              var S = s.type,
                E = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof S.getDerivedStateFromError == "function" ||
                  (E !== null &&
                    typeof E.componentDidCatch == "function" &&
                    (sr === null || !sr.has(E))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var O = x1(s, l, t);
                zp(s, O);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      B1(n);
    } catch (L) {
      (t = L), Ae === n && n !== null && (Ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function z1() {
  var e = Za.current;
  return (Za.current = Ja), e === null ? Ja : e;
}
function Ef() {
  (je === 0 || je === 3 || je === 2) && (je = 4),
    Me === null || (!($r & 268435455) && !(Ol & 268435455)) || Vn(Me, $e);
}
function tl(e, t) {
  var n = Q;
  Q |= 2;
  var r = z1();
  (Me !== e || $e !== t) && ((hn = null), Lr(e, t));
  do
    try {
      n4();
      break;
    } catch (i) {
      U1(e, i);
    }
  while (!0);
  if ((of(), (Q = n), (Za.current = r), Ae !== null)) throw Error(F(261));
  return (Me = null), ($e = 0), je;
}
function n4() {
  for (; Ae !== null; ) $1(Ae);
}
function r4() {
  for (; Ae !== null && !Iw(); ) $1(Ae);
}
function $1(e) {
  var t = H1(e.alternate, e, gt);
  (e.memoizedProps = e.pendingProps),
    t === null ? B1(e) : (Ae = t),
    (wf.current = null);
}
function B1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = X_(n, t)), n !== null)) {
        (n.flags &= 32767), (Ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (je = 6), (Ae = null);
        return;
      }
    } else if (((n = q_(n, t, gt)), n !== null)) {
      Ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ae = t;
      return;
    }
    Ae = t = e;
  } while (t !== null);
  je === 0 && (je = 5);
}
function Ir(e, t, n) {
  var r = oe,
    i = At.transition;
  try {
    (At.transition = null), (oe = 1), i4(e, t, n, r);
  } finally {
    (At.transition = i), (oe = r);
  }
  return null;
}
function i4(e, t, n, r) {
  do Ti();
  while (qn !== null);
  if (Q & 6) throw Error(F(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(F(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Fw(e, s),
    e === Me && ((Ae = Me = null), ($e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      aa ||
      ((aa = !0),
      W1(Ma, function () {
        return Ti(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = At.transition), (At.transition = null);
    var o = oe;
    oe = 1;
    var l = Q;
    (Q |= 4),
      (wf.current = null),
      Z_(e, n),
      M1(n, e),
      E_(jc),
      (Fa = !!Oc),
      (jc = Oc = null),
      (e.current = n),
      Q_(n),
      Nw(),
      (Q = l),
      (oe = o),
      (At.transition = s);
  } else e.current = n;
  if (
    (aa && ((aa = !1), (qn = e), (el = i)),
    (s = e.pendingLanes),
    s === 0 && (sr = null),
    Ow(n.stateNode),
    ft(e, be()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Qa) throw ((Qa = !1), (e = Qc), (Qc = null), e);
  return (
    el & 1 && e.tag !== 0 && Ti(),
    (s = e.pendingLanes),
    s & 1 ? (e === ed ? Rs++ : ((Rs = 0), (ed = e))) : (Rs = 0),
    _r(),
    null
  );
}
function Ti() {
  if (qn !== null) {
    var e = C0(el),
      t = At.transition,
      n = oe;
    try {
      if (((At.transition = null), (oe = 16 > e ? 16 : e), qn === null))
        var r = !1;
      else {
        if (((e = qn), (qn = null), (el = 0), Q & 6)) throw Error(F(331));
        var i = Q;
        for (Q |= 4, $ = e.current; $ !== null; ) {
          var s = $,
            o = s.child;
          if ($.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var c = l[u];
                for ($ = c; $ !== null; ) {
                  var h = $;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      js(8, h, s);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), ($ = m);
                  else
                    for (; $ !== null; ) {
                      h = $;
                      var g = h.sibling,
                        y = h.return;
                      if ((j1(h), h === c)) {
                        $ = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = y), ($ = g);
                        break;
                      }
                      $ = y;
                    }
                }
              }
              var _ = s.alternate;
              if (_ !== null) {
                var A = _.child;
                if (A !== null) {
                  _.child = null;
                  do {
                    var N = A.sibling;
                    (A.sibling = null), (A = N);
                  } while (A !== null);
                }
              }
              $ = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), ($ = o);
          else
            e: for (; $ !== null; ) {
              if (((s = $), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    js(9, s, s.return);
                }
              var C = s.sibling;
              if (C !== null) {
                (C.return = s.return), ($ = C);
                break e;
              }
              $ = s.return;
            }
        }
        var S = e.current;
        for ($ = S; $ !== null; ) {
          o = $;
          var E = o.child;
          if (o.subtreeFlags & 2064 && E !== null) (E.return = o), ($ = E);
          else
            e: for (o = S; $ !== null; ) {
              if (((l = $), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Al(9, l);
                  }
                } catch (L) {
                  Ce(l, l.return, L);
                }
              if (l === o) {
                $ = null;
                break e;
              }
              var O = l.sibling;
              if (O !== null) {
                (O.return = l.return), ($ = O);
                break e;
              }
              $ = l.return;
            }
        }
        if (
          ((Q = i), _r(), nn && typeof nn.onPostCommitFiberRoot == "function")
        )
          try {
            nn.onPostCommitFiberRoot(xl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (oe = n), (At.transition = t);
    }
  }
  return !1;
}
function am(e, t, n) {
  (t = Mi(n, t)),
    (t = C1(e, t, 1)),
    (e = ir(e, t, 1)),
    (t = nt()),
    e !== null && (po(e, 1, t), ft(e, t));
}
function Ce(e, t, n) {
  if (e.tag === 3) am(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        am(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (sr === null || !sr.has(r)))
        ) {
          (e = Mi(n, e)),
            (e = x1(t, e, 1)),
            (t = ir(t, e, 1)),
            (e = nt()),
            t !== null && (po(t, 1, e), ft(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function s4(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = nt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Me === e &&
      ($e & n) === n &&
      (je === 4 || (je === 3 && ($e & 130023424) === $e && 500 > be() - Sf)
        ? Lr(e, 0)
        : (_f |= n)),
    ft(e, t);
}
function V1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Jo), (Jo <<= 1), !(Jo & 130023424) && (Jo = 4194304))
      : (t = 1));
  var n = nt();
  (e = En(e, t)), e !== null && (po(e, t, n), ft(e, n));
}
function o4(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), V1(e, n);
}
function a4(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  r !== null && r.delete(t), V1(e, n);
}
var H1;
H1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ct.current) ut = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ut = !1), Y_(e, t, n);
      ut = !!(e.flags & 131072);
    }
  else (ut = !1), ge && t.flags & 1048576 && Y0(t, Wa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      xa(e, t), (e = t.pendingProps);
      var i = Oi(t, Xe.current);
      ki(t, n), (i = pf(null, t, r, e, i, n));
      var s = mf();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            dt(r) ? ((s = !0), Va(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            uf(t),
            (i.updater = Pl),
            (t.stateNode = i),
            (i._reactInternals = t),
            Bc(t, r, e, n),
            (t = Wc(null, t, r, !0, s, n)))
          : ((t.tag = 0), ge && s && tf(t), et(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (xa(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = u4(r)),
          (e = Dt(r, e)),
          i)
        ) {
          case 0:
            t = Hc(null, t, r, e, n);
            break e;
          case 1:
            t = Jp(null, t, r, e, n);
            break e;
          case 11:
            t = qp(null, t, r, e, n);
            break e;
          case 14:
            t = Xp(null, t, r, Dt(r.type, e), n);
            break e;
        }
        throw Error(F(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Dt(r, i)),
        Hc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Dt(r, i)),
        Jp(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((b1(t), e === null)) throw Error(F(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          e1(e, t),
          Ya(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Mi(Error(F(423)), t)), (t = Zp(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Mi(Error(F(424)), t)), (t = Zp(e, t, r, n, i));
            break e;
          } else
            for (
              yt = rr(t.stateNode.containerInfo.firstChild),
                wt = t,
                ge = !0,
                Ut = null,
                n = Z0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ji(), r === i)) {
            t = kn(e, t, n);
            break e;
          }
          et(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        t1(t),
        e === null && Uc(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Lc(r, i) ? (o = null) : s !== null && Lc(r, s) && (t.flags |= 32),
        T1(e, t),
        et(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Uc(t), null;
    case 13:
      return I1(e, t, n);
    case 4:
      return (
        cf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Li(t, null, r, n)) : et(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Dt(r, i)),
        qp(e, t, r, i, n)
      );
    case 7:
      return et(e, t, t.pendingProps, n), t.child;
    case 8:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          ce(Ga, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Vt(s.value, o)) {
            if (s.children === i.children && !ct.current) {
              t = kn(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (s.tag === 1) {
                      (u = _n(-1, n & -n)), (u.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (u.next = u)
                          : ((u.next = h.next), (h.next = u)),
                          (c.pending = u);
                      }
                    }
                    (s.lanes |= n),
                      (u = s.alternate),
                      u !== null && (u.lanes |= n),
                      zc(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(F(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  zc(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        et(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        ki(t, n),
        (i = Ot(i)),
        (r = r(i)),
        (t.flags |= 1),
        et(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Dt(r, t.pendingProps)),
        (i = Dt(r.type, i)),
        Xp(e, t, r, i, n)
      );
    case 15:
      return E1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Dt(r, i)),
        xa(e, t),
        (t.tag = 1),
        dt(r) ? ((e = !0), Va(t)) : (e = !1),
        ki(t, n),
        S1(t, r, i),
        Bc(t, r, i, n),
        Wc(null, t, r, !0, e, n)
      );
    case 19:
      return N1(e, t, n);
    case 22:
      return k1(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function W1(e, t) {
  return y0(e, t);
}
function l4(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Pt(e, t, n, r) {
  return new l4(e, t, n, r);
}
function kf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function u4(e) {
  if (typeof e == "function") return kf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Vd)) return 11;
    if (e === Hd) return 14;
  }
  return 2;
}
function ar(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Pt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ta(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) kf(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case ai:
        return Rr(n.children, i, s, t);
      case Bd:
        (o = 8), (i |= 8);
        break;
      case fc:
        return (
          (e = Pt(12, n, t, i | 2)), (e.elementType = fc), (e.lanes = s), e
        );
      case hc:
        return (e = Pt(13, n, t, i)), (e.elementType = hc), (e.lanes = s), e;
      case pc:
        return (e = Pt(19, n, t, i)), (e.elementType = pc), (e.lanes = s), e;
      case t0:
        return jl(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qg:
              o = 10;
              break e;
            case e0:
              o = 9;
              break e;
            case Vd:
              o = 11;
              break e;
            case Hd:
              o = 14;
              break e;
            case zn:
              (o = 16), (r = null);
              break e;
          }
        throw Error(F(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Pt(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Rr(e, t, n, r) {
  return (e = Pt(7, e, r, t)), (e.lanes = n), e;
}
function jl(e, t, n, r) {
  return (
    (e = Pt(22, e, r, t)),
    (e.elementType = t0),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Uu(e, t, n) {
  return (e = Pt(6, e, null, t)), (e.lanes = n), e;
}
function zu(e, t, n) {
  return (
    (t = Pt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function c4(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _u(0)),
    (this.expirationTimes = _u(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _u(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Tf(e, t, n, r, i, s, o, l, u) {
  return (
    (e = new c4(e, t, n, l, u)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Pt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    uf(s),
    e
  );
}
function d4(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: oi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function G1(e) {
  if (!e) return pr;
  e = e._reactInternals;
  e: {
    if (Xr(e) !== e || e.tag !== 1) throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (dt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (dt(n)) return G0(e, n, t);
  }
  return t;
}
function K1(e, t, n, r, i, s, o, l, u) {
  return (
    (e = Tf(n, r, !0, e, i, s, o, l, u)),
    (e.context = G1(null)),
    (n = e.current),
    (r = nt()),
    (i = or(n)),
    (s = _n(r, i)),
    (s.callback = t ?? null),
    ir(n, s, i),
    (e.current.lanes = i),
    po(e, i, r),
    ft(e, r),
    e
  );
}
function Ll(e, t, n, r) {
  var i = t.current,
    s = nt(),
    o = or(i);
  return (
    (n = G1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = _n(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ir(i, t, o)),
    e !== null && (Bt(e, i, o, s), _a(e, i, o)),
    o
  );
}
function nl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function lm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function bf(e, t) {
  lm(e, t), (e = e.alternate) && lm(e, t);
}
function f4() {
  return null;
}
var Y1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function If(e) {
  this._internalRoot = e;
}
Rl.prototype.render = If.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(F(409));
  Ll(e, t, null, null);
};
Rl.prototype.unmount = If.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Br(function () {
      Ll(null, e, null, null);
    }),
      (t[xn] = null);
  }
};
function Rl(e) {
  this._internalRoot = e;
}
Rl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = k0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Bn.length && t !== 0 && t < Bn[n].priority; n++);
    Bn.splice(n, 0, e), n === 0 && b0(e);
  }
};
function Nf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ml(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function um() {}
function h4(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = nl(o);
        s.call(c);
      };
    }
    var o = K1(t, r, e, 0, null, !1, !1, "", um);
    return (
      (e._reactRootContainer = o),
      (e[xn] = o.current),
      Xs(e.nodeType === 8 ? e.parentNode : e),
      Br(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = nl(u);
      l.call(c);
    };
  }
  var u = Tf(e, 0, !1, null, null, !1, !1, "", um);
  return (
    (e._reactRootContainer = u),
    (e[xn] = u.current),
    Xs(e.nodeType === 8 ? e.parentNode : e),
    Br(function () {
      Ll(t, u, n, r);
    }),
    u
  );
}
function Dl(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = nl(o);
        l.call(u);
      };
    }
    Ll(t, o, e, i);
  } else o = h4(n, t, e, i, r);
  return nl(o);
}
x0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ss(t.pendingLanes);
        n !== 0 &&
          (Kd(t, n | 1), ft(t, be()), !(Q & 6) && ((Di = be() + 500), _r()));
      }
      break;
    case 13:
      Br(function () {
        var r = En(e, 1);
        if (r !== null) {
          var i = nt();
          Bt(r, e, 1, i);
        }
      }),
        bf(e, 1);
  }
};
Yd = function (e) {
  if (e.tag === 13) {
    var t = En(e, 134217728);
    if (t !== null) {
      var n = nt();
      Bt(t, e, 134217728, n);
    }
    bf(e, 134217728);
  }
};
E0 = function (e) {
  if (e.tag === 13) {
    var t = or(e),
      n = En(e, t);
    if (n !== null) {
      var r = nt();
      Bt(n, e, t, r);
    }
    bf(e, t);
  }
};
k0 = function () {
  return oe;
};
T0 = function (e, t) {
  var n = oe;
  try {
    return (oe = e), t();
  } finally {
    oe = n;
  }
};
Ec = function (e, t, n) {
  switch (t) {
    case "input":
      if ((vc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = bl(r);
            if (!i) throw Error(F(90));
            r0(r), vc(r, i);
          }
        }
      }
      break;
    case "textarea":
      s0(e, n);
      break;
    case "select":
      (t = n.value), t != null && Si(e, !!n.multiple, t, !1);
  }
};
f0 = Cf;
h0 = Br;
var p4 = { usingClientEntryPoint: !1, Events: [go, di, bl, c0, d0, Cf] },
  ys = {
    findFiberByHostInstance: Ar,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  m4 = {
    bundleType: ys.bundleType,
    version: ys.version,
    rendererPackageName: ys.rendererPackageName,
    rendererConfig: ys.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Pn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = g0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ys.findFiberByHostInstance || f4,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var la = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!la.isDisabled && la.supportsFiber)
    try {
      (xl = la.inject(m4)), (nn = la);
    } catch {}
}
xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = p4;
xt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Nf(t)) throw Error(F(200));
  return d4(e, t, null, n);
};
xt.createRoot = function (e, t) {
  if (!Nf(e)) throw Error(F(299));
  var n = !1,
    r = "",
    i = Y1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Tf(e, 1, !1, null, null, n, !1, r, i)),
    (e[xn] = t.current),
    Xs(e.nodeType === 8 ? e.parentNode : e),
    new If(t)
  );
};
xt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(F(188))
      : ((e = Object.keys(e).join(",")), Error(F(268, e)));
  return (e = g0(t)), (e = e === null ? null : e.stateNode), e;
};
xt.flushSync = function (e) {
  return Br(e);
};
xt.hydrate = function (e, t, n) {
  if (!Ml(t)) throw Error(F(200));
  return Dl(null, e, t, !0, n);
};
xt.hydrateRoot = function (e, t, n) {
  if (!Nf(e)) throw Error(F(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Y1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = K1(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[xn] = t.current),
    Xs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Rl(t);
};
xt.render = function (e, t, n) {
  if (!Ml(t)) throw Error(F(200));
  return Dl(null, e, t, !1, n);
};
xt.unmountComponentAtNode = function (e) {
  if (!Ml(e)) throw Error(F(40));
  return e._reactRootContainer
    ? (Br(function () {
        Dl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[xn] = null);
        });
      }),
      !0)
    : !1;
};
xt.unstable_batchedUpdates = Cf;
xt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ml(n)) throw Error(F(200));
  if (e == null || e._reactInternals === void 0) throw Error(F(38));
  return Dl(e, t, n, !1, r);
};
xt.version = "18.3.1-next-f1338f8080-20240426";
function q1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q1);
    } catch (e) {
      console.error(e);
    }
}
q1(), (qg.exports = xt);
var g4 = qg.exports,
  cm = g4;
(cc.createRoot = cm.createRoot), (cc.hydrateRoot = cm.hydrateRoot);
/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function so() {
  return (
    (so = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    so.apply(this, arguments)
  );
}
var Xn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Xn || (Xn = {}));
const dm = "popstate";
function v4(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: l } = r.location;
    return rd(
      "",
      { pathname: s, search: o, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : rl(i);
  }
  return w4(t, n, null, e);
}
function xe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function X1(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function y4() {
  return Math.random().toString(36).substr(2, 8);
}
function fm(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function rd(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    so(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Yi(t) : t,
      { state: n, key: (t && t.key) || r || y4() }
    )
  );
}
function rl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Yi(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function w4(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    l = Xn.Pop,
    u = null,
    c = h();
  c == null && ((c = 0), o.replaceState(so({}, o.state, { idx: c }), ""));
  function h() {
    return (o.state || { idx: null }).idx;
  }
  function m() {
    l = Xn.Pop;
    let N = h(),
      C = N == null ? null : N - c;
    (c = N), u && u({ action: l, location: A.location, delta: C });
  }
  function g(N, C) {
    l = Xn.Push;
    let S = rd(A.location, N, C);
    c = h() + 1;
    let E = fm(S, c),
      O = A.createHref(S);
    try {
      o.pushState(E, "", O);
    } catch (L) {
      if (L instanceof DOMException && L.name === "DataCloneError") throw L;
      i.location.assign(O);
    }
    s && u && u({ action: l, location: A.location, delta: 1 });
  }
  function y(N, C) {
    l = Xn.Replace;
    let S = rd(A.location, N, C);
    c = h();
    let E = fm(S, c),
      O = A.createHref(S);
    o.replaceState(E, "", O),
      s && u && u({ action: l, location: A.location, delta: 0 });
  }
  function _(N) {
    let C = i.location.origin !== "null" ? i.location.origin : i.location.href,
      S = typeof N == "string" ? N : rl(N);
    return (
      (S = S.replace(/ $/, "%20")),
      xe(
        C,
        "No window.location.(origin|href) available to create URL for href: " +
          S
      ),
      new URL(S, C)
    );
  }
  let A = {
    get action() {
      return l;
    },
    get location() {
      return e(i, o);
    },
    listen(N) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(dm, m),
        (u = N),
        () => {
          i.removeEventListener(dm, m), (u = null);
        }
      );
    },
    createHref(N) {
      return t(i, N);
    },
    createURL: _,
    encodeLocation(N) {
      let C = _(N);
      return { pathname: C.pathname, search: C.search, hash: C.hash };
    },
    push: g,
    replace: y,
    go(N) {
      return o.go(N);
    },
  };
  return A;
}
var hm;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(hm || (hm = {}));
function _4(e, t, n) {
  return n === void 0 && (n = "/"), S4(e, t, n, !1);
}
function S4(e, t, n, r) {
  let i = typeof t == "string" ? Yi(t) : t,
    s = Fi(i.pathname || "/", n);
  if (s == null) return null;
  let o = J1(e);
  C4(o);
  let l = null;
  for (let u = 0; l == null && u < o.length; ++u) {
    let c = j4(s);
    l = A4(o[u], c, r);
  }
  return l;
}
function J1(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, l) => {
    let u = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    u.relativePath.startsWith("/") &&
      (xe(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = lr([r, u.relativePath]),
      h = n.concat(u);
    s.children &&
      s.children.length > 0 &&
      (xe(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      J1(s.children, t, h, c)),
      !(s.path == null && !s.index) &&
        t.push({ path: c, score: N4(c, s.index), routesMeta: h });
  };
  return (
    e.forEach((s, o) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) i(s, o);
      else for (let u of Z1(s.path)) i(s, o, u);
    }),
    t
  );
}
function Z1(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = Z1(r.join("/")),
    l = [];
  return (
    l.push(...o.map((u) => (u === "" ? s : [s, u].join("/")))),
    i && l.push(...o),
    l.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function C4(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : P4(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const x4 = /^:[\w-]+$/,
  E4 = 3,
  k4 = 2,
  T4 = 1,
  b4 = 10,
  I4 = -2,
  pm = (e) => e === "*";
function N4(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(pm) && (r += I4),
    t && (r += k4),
    n
      .filter((i) => !pm(i))
      .reduce((i, s) => i + (x4.test(s) ? E4 : s === "" ? T4 : b4), r)
  );
}
function P4(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function A4(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    o = [];
  for (let l = 0; l < r.length; ++l) {
    let u = r[l],
      c = l === r.length - 1,
      h = s === "/" ? t : t.slice(s.length) || "/",
      m = il(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        h
      ),
      g = u.route;
    if (
      (!m &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (m = il(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          h
        )),
      !m)
    )
      return null;
    Object.assign(i, m.params),
      o.push({
        params: i,
        pathname: lr([s, m.pathname]),
        pathnameBase: D4(lr([s, m.pathnameBase])),
        route: g,
      }),
      m.pathnameBase !== "/" && (s = lr([s, m.pathnameBase]));
  }
  return o;
}
function il(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = O4(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((c, h, m) => {
      let { paramName: g, isOptional: y } = h;
      if (g === "*") {
        let A = l[m] || "";
        o = s.slice(0, s.length - A.length).replace(/(.)\/+$/, "$1");
      }
      const _ = l[m];
      return (
        y && !_ ? (c[g] = void 0) : (c[g] = (_ || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function O4(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    X1(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, l, u) => (
            r.push({ paramName: l, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function j4(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      X1(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Fi(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function L4(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Yi(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : R4(n, t)) : t,
    search: F4(r),
    hash: U4(i),
  };
}
function R4(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function $u(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function M4(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Q1(e, t) {
  let n = M4(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function ev(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Yi(e))
    : ((i = so({}, e)),
      xe(
        !i.pathname || !i.pathname.includes("?"),
        $u("?", "pathname", "search", i)
      ),
      xe(
        !i.pathname || !i.pathname.includes("#"),
        $u("#", "pathname", "hash", i)
      ),
      xe(!i.search || !i.search.includes("#"), $u("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    l;
  if (o == null) l = n;
  else {
    let m = t.length - 1;
    if (!r && o.startsWith("..")) {
      let g = o.split("/");
      for (; g[0] === ".."; ) g.shift(), (m -= 1);
      i.pathname = g.join("/");
    }
    l = m >= 0 ? t[m] : "/";
  }
  let u = L4(i, l),
    c = o && o !== "/" && o.endsWith("/"),
    h = (s || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || h) && (u.pathname += "/"), u;
}
const lr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  D4 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  F4 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  U4 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function z4(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const tv = ["post", "put", "patch", "delete"];
new Set(tv);
const $4 = ["get", ...tv];
new Set($4);
/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function oo() {
  return (
    (oo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oo.apply(this, arguments)
  );
}
const Fl = R.createContext(null),
  nv = R.createContext(null),
  Sr = R.createContext(null),
  Ul = R.createContext(null),
  Cr = R.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  rv = R.createContext(null);
function B4(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  yo() || xe(!1);
  let { basename: r, navigator: i } = R.useContext(Sr),
    { hash: s, pathname: o, search: l } = zl(e, { relative: n }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : lr([r, o])),
    i.createHref({ pathname: u, search: l, hash: s })
  );
}
function yo() {
  return R.useContext(Ul) != null;
}
function ln() {
  return yo() || xe(!1), R.useContext(Ul).location;
}
function iv(e) {
  R.useContext(Sr).static || R.useLayoutEffect(e);
}
function wo() {
  let { isDataRoute: e } = R.useContext(Cr);
  return e ? n3() : V4();
}
function V4() {
  yo() || xe(!1);
  let e = R.useContext(Fl),
    { basename: t, future: n, navigator: r } = R.useContext(Sr),
    { matches: i } = R.useContext(Cr),
    { pathname: s } = ln(),
    o = JSON.stringify(Q1(i, n.v7_relativeSplatPath)),
    l = R.useRef(!1);
  return (
    iv(() => {
      l.current = !0;
    }),
    R.useCallback(
      function (c, h) {
        if ((h === void 0 && (h = {}), !l.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let m = ev(c, JSON.parse(o), s, h.relative === "path");
        e == null &&
          t !== "/" &&
          (m.pathname = m.pathname === "/" ? t : lr([t, m.pathname])),
          (h.replace ? r.replace : r.push)(m, h.state, h);
      },
      [t, r, o, s, e]
    )
  );
}
function H4() {
  let { matches: e } = R.useContext(Cr),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function zl(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = R.useContext(Sr),
    { matches: i } = R.useContext(Cr),
    { pathname: s } = ln(),
    o = JSON.stringify(Q1(i, r.v7_relativeSplatPath));
  return R.useMemo(() => ev(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
function W4(e, t) {
  return G4(e, t);
}
function G4(e, t, n, r) {
  yo() || xe(!1);
  let { navigator: i } = R.useContext(Sr),
    { matches: s } = R.useContext(Cr),
    o = s[s.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let c = ln(),
    h;
  if (t) {
    var m;
    let N = typeof t == "string" ? Yi(t) : t;
    u === "/" || ((m = N.pathname) != null && m.startsWith(u)) || xe(!1),
      (h = N);
  } else h = c;
  let g = h.pathname || "/",
    y = g;
  if (u !== "/") {
    let N = u.replace(/^\//, "").split("/");
    y = "/" + g.replace(/^\//, "").split("/").slice(N.length).join("/");
  }
  let _ = _4(e, { pathname: y }),
    A = J4(
      _ &&
        _.map((N) =>
          Object.assign({}, N, {
            params: Object.assign({}, l, N.params),
            pathname: lr([
              u,
              i.encodeLocation
                ? i.encodeLocation(N.pathname).pathname
                : N.pathname,
            ]),
            pathnameBase:
              N.pathnameBase === "/"
                ? u
                : lr([
                    u,
                    i.encodeLocation
                      ? i.encodeLocation(N.pathnameBase).pathname
                      : N.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && A
    ? R.createElement(
        Ul.Provider,
        {
          value: {
            location: oo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              h
            ),
            navigationType: Xn.Pop,
          },
        },
        A
      )
    : A;
}
function K4() {
  let e = t3(),
    t = z4(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return R.createElement(
    R.Fragment,
    null,
    R.createElement("h2", null, "Unexpected Application Error!"),
    R.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? R.createElement("pre", { style: i }, n) : null,
    null
  );
}
const Y4 = R.createElement(K4, null);
class q4 extends R.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? R.createElement(
          Cr.Provider,
          { value: this.props.routeContext },
          R.createElement(rv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function X4(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = R.useContext(Fl);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    R.createElement(Cr.Provider, { value: t }, r)
  );
}
function J4(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if ((s = n) != null && s.errors) e = n.matches;
    else return null;
  }
  let o = e,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let h = o.findIndex(
      (m) => m.route.id && (l == null ? void 0 : l[m.route.id]) !== void 0
    );
    h >= 0 || xe(!1), (o = o.slice(0, Math.min(o.length, h + 1)));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < o.length; h++) {
      let m = o[h];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (c = h),
        m.route.id)
      ) {
        let { loaderData: g, errors: y } = n,
          _ =
            m.route.loader &&
            g[m.route.id] === void 0 &&
            (!y || y[m.route.id] === void 0);
        if (m.route.lazy || _) {
          (u = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((h, m, g) => {
    let y,
      _ = !1,
      A = null,
      N = null;
    n &&
      ((y = l && m.route.id ? l[m.route.id] : void 0),
      (A = m.route.errorElement || Y4),
      u &&
        (c < 0 && g === 0
          ? ((_ = !0), (N = null))
          : c === g &&
            ((_ = !0), (N = m.route.hydrateFallbackElement || null))));
    let C = t.concat(o.slice(0, g + 1)),
      S = () => {
        let E;
        return (
          y
            ? (E = A)
            : _
            ? (E = N)
            : m.route.Component
            ? (E = R.createElement(m.route.Component, null))
            : m.route.element
            ? (E = m.route.element)
            : (E = h),
          R.createElement(X4, {
            match: m,
            routeContext: { outlet: h, matches: C, isDataRoute: n != null },
            children: E,
          })
        );
      };
    return n && (m.route.ErrorBoundary || m.route.errorElement || g === 0)
      ? R.createElement(q4, {
          location: n.location,
          revalidation: n.revalidation,
          component: A,
          error: y,
          children: S(),
          routeContext: { outlet: null, matches: C, isDataRoute: !0 },
        })
      : S();
  }, null);
}
var sv = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(sv || {}),
  sl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(sl || {});
function Z4(e) {
  let t = R.useContext(Fl);
  return t || xe(!1), t;
}
function Q4(e) {
  let t = R.useContext(nv);
  return t || xe(!1), t;
}
function e3(e) {
  let t = R.useContext(Cr);
  return t || xe(!1), t;
}
function ov(e) {
  let t = e3(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || xe(!1), n.route.id;
}
function t3() {
  var e;
  let t = R.useContext(rv),
    n = Q4(sl.UseRouteError),
    r = ov(sl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function n3() {
  let { router: e } = Z4(sv.UseNavigateStable),
    t = ov(sl.UseNavigateStable),
    n = R.useRef(!1);
  return (
    iv(() => {
      n.current = !0;
    }),
    R.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, oo({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
function bt(e) {
  xe(!1);
}
function r3(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Xn.Pop,
    navigator: s,
    static: o = !1,
    future: l,
  } = e;
  yo() && xe(!1);
  let u = t.replace(/^\/*/, "/"),
    c = R.useMemo(
      () => ({
        basename: u,
        navigator: s,
        static: o,
        future: oo({ v7_relativeSplatPath: !1 }, l),
      }),
      [u, l, s, o]
    );
  typeof r == "string" && (r = Yi(r));
  let {
      pathname: h = "/",
      search: m = "",
      hash: g = "",
      state: y = null,
      key: _ = "default",
    } = r,
    A = R.useMemo(() => {
      let N = Fi(h, u);
      return N == null
        ? null
        : {
            location: { pathname: N, search: m, hash: g, state: y, key: _ },
            navigationType: i,
          };
    }, [u, h, m, g, y, _, i]);
  return A == null
    ? null
    : R.createElement(
        Sr.Provider,
        { value: c },
        R.createElement(Ul.Provider, { children: n, value: A })
      );
}
function i3(e) {
  let { children: t, location: n } = e;
  return W4(id(t), n);
}
new Promise(() => {});
function id(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    R.Children.forEach(e, (r, i) => {
      if (!R.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === R.Fragment) {
        n.push.apply(n, id(r.props.children, s));
        return;
      }
      r.type !== bt && xe(!1), !r.props.index || !r.props.children || xe(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = id(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ol() {
  return (
    (ol = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ol.apply(this, arguments)
  );
}
function av(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function s3(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function o3(e, t) {
  return e.button === 0 && (!t || t === "_self") && !s3(e);
}
const a3 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  l3 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  u3 = "6";
try {
  window.__reactRouterVersion = u3;
} catch {}
const c3 = R.createContext({ isTransitioning: !1 }),
  d3 = "startTransition",
  mm = sw[d3];
function f3(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = R.useRef();
  s.current == null && (s.current = v4({ window: i, v5Compat: !0 }));
  let o = s.current,
    [l, u] = R.useState({ action: o.action, location: o.location }),
    { v7_startTransition: c } = r || {},
    h = R.useCallback(
      (m) => {
        c && mm ? mm(() => u(m)) : u(m);
      },
      [u, c]
    );
  return (
    R.useLayoutEffect(() => o.listen(h), [o, h]),
    R.createElement(r3, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: o,
      future: r,
    })
  );
}
const h3 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  p3 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  he = R.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: l,
        target: u,
        to: c,
        preventScrollReset: h,
        unstable_viewTransition: m,
      } = t,
      g = av(t, a3),
      { basename: y } = R.useContext(Sr),
      _,
      A = !1;
    if (typeof c == "string" && p3.test(c) && ((_ = c), h3))
      try {
        let E = new URL(window.location.href),
          O = c.startsWith("//") ? new URL(E.protocol + c) : new URL(c),
          L = Fi(O.pathname, y);
        O.origin === E.origin && L != null
          ? (c = L + O.search + O.hash)
          : (A = !0);
      } catch {}
    let N = B4(c, { relative: i }),
      C = g3(c, {
        replace: o,
        state: l,
        target: u,
        preventScrollReset: h,
        relative: i,
        unstable_viewTransition: m,
      });
    function S(E) {
      r && r(E), E.defaultPrevented || C(E);
    }
    return R.createElement(
      "a",
      ol({}, g, { href: _ || N, onClick: A || s ? r : S, ref: n, target: u })
    );
  }),
  ua = R.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: s = "",
        end: o = !1,
        style: l,
        to: u,
        unstable_viewTransition: c,
        children: h,
      } = t,
      m = av(t, l3),
      g = zl(u, { relative: m.relative }),
      y = ln(),
      _ = R.useContext(nv),
      { navigator: A, basename: N } = R.useContext(Sr),
      C = _ != null && v3(g) && c === !0,
      S = A.encodeLocation ? A.encodeLocation(g).pathname : g.pathname,
      E = y.pathname,
      O =
        _ && _.navigation && _.navigation.location
          ? _.navigation.location.pathname
          : null;
    i ||
      ((E = E.toLowerCase()),
      (O = O ? O.toLowerCase() : null),
      (S = S.toLowerCase())),
      O && N && (O = Fi(O, N) || O);
    const L = S !== "/" && S.endsWith("/") ? S.length - 1 : S.length;
    let D = E === S || (!o && E.startsWith(S) && E.charAt(L) === "/"),
      T =
        O != null &&
        (O === S || (!o && O.startsWith(S) && O.charAt(S.length) === "/")),
      v = { isActive: D, isPending: T, isTransitioning: C },
      b = D ? r : void 0,
      k;
    typeof s == "function"
      ? (k = s(v))
      : (k = [
          s,
          D ? "active" : null,
          T ? "pending" : null,
          C ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let x = typeof l == "function" ? l(v) : l;
    return R.createElement(
      he,
      ol({}, m, {
        "aria-current": b,
        className: k,
        ref: n,
        style: x,
        to: u,
        unstable_viewTransition: c,
      }),
      typeof h == "function" ? h(v) : h
    );
  });
var sd;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(sd || (sd = {}));
var gm;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(gm || (gm = {}));
function m3(e) {
  let t = R.useContext(Fl);
  return t || xe(!1), t;
}
function g3(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    u = wo(),
    c = ln(),
    h = zl(e, { relative: o });
  return R.useCallback(
    (m) => {
      if (o3(m, n)) {
        m.preventDefault();
        let g = r !== void 0 ? r : rl(c) === rl(h);
        u(e, {
          replace: g,
          state: i,
          preventScrollReset: s,
          relative: o,
          unstable_viewTransition: l,
        });
      }
    },
    [c, u, h, r, i, n, e, s, o, l]
  );
}
function v3(e, t) {
  t === void 0 && (t = {});
  let n = R.useContext(c3);
  n == null && xe(!1);
  let { basename: r } = m3(sd.useViewTransitionState),
    i = zl(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let s = Fi(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = Fi(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return il(i.pathname, o) != null || il(i.pathname, s) != null;
}
var lv = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var s = "", o = 0; o < arguments.length; o++) {
        var l = arguments[o];
        l && (s = i(s, r(l)));
      }
      return s;
    }
    function r(s) {
      if (typeof s == "string" || typeof s == "number") return s;
      if (typeof s != "object") return "";
      if (Array.isArray(s)) return n.apply(null, s);
      if (
        s.toString !== Object.prototype.toString &&
        !s.toString.toString().includes("[native code]")
      )
        return s.toString();
      var o = "";
      for (var l in s) t.call(s, l) && s[l] && (o = i(o, l));
      return o;
    }
    function i(s, o) {
      return o ? (s ? s + " " + o : s + o) : s;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(lv);
var y3 = lv.exports;
const uv = Sl(y3),
  w3 = ["xxl", "xl", "lg", "md", "sm", "xs"],
  _3 = "xs",
  Pf = R.createContext({ prefixes: {}, breakpoints: w3, minBreakpoint: _3 });
function cv(e, t) {
  const { prefixes: n } = R.useContext(Pf);
  return e || n[t] || t;
}
function S3() {
  const { breakpoints: e } = R.useContext(Pf);
  return e;
}
function C3() {
  const { minBreakpoint: e } = R.useContext(Pf);
  return e;
}
var dv = { exports: {} },
  x3 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  E3 = x3,
  k3 = E3;
function fv() {}
function hv() {}
hv.resetWarningCache = fv;
var T3 = function () {
  function e(r, i, s, o, l, u) {
    if (u !== k3) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: hv,
    resetWarningCache: fv,
  };
  return (n.PropTypes = n), n;
};
dv.exports = T3();
var b3 = dv.exports;
const Y = Sl(b3),
  De = R.forwardRef(
    ({ bsPrefix: e, fluid: t = !1, as: n = "div", className: r, ...i }, s) => {
      const o = cv(e, "container"),
        l = typeof t == "string" ? `-${t}` : "-fluid";
      return f.jsx(n, { ref: s, ...i, className: uv(r, t ? `${o}${l}` : o) });
    }
  );
De.displayName = "Container";
const Jr = R.forwardRef(
  ({ bsPrefix: e, className: t, as: n = "div", ...r }, i) => {
    const s = cv(e, "row"),
      o = S3(),
      l = C3(),
      u = `${s}-cols`,
      c = [];
    return (
      o.forEach((h) => {
        const m = r[h];
        delete r[h];
        let g;
        m != null && typeof m == "object" ? ({ cols: g } = m) : (g = m);
        const y = h !== l ? `-${h}` : "";
        g != null && c.push(`${u}${y}-${g}`);
      }),
      f.jsx(n, { ref: i, ...r, className: uv(t, s, ...c) })
    );
  }
);
Jr.displayName = "Row";
function I3() {
  const e = ln();
  return f.jsx(f.Fragment, {
    children: f.jsxs("div", {
      className: "header__navBlock",
      children: [
        f.jsx("nav", {
          children: f.jsxs("ol", {
            children: [
              f.jsx(ua, {
                to: "/new-featured",
                activeClassName: "active",
                children: f.jsx("li", { children: "NEW & FEATURED" }),
              }),
              f.jsx(ua, {
                to: "/men",
                activeClassName: "active",
                children: f.jsx("li", { children: "MEN" }),
              }),
              f.jsx(ua, {
                to: "/women",
                activeClassName: "active",
                children: f.jsx("li", { children: "WOMEN" }),
              }),
              f.jsx(ua, {
                to: "/AboutUs",
                activeClassName: "active",
                children: f.jsx("li", { children: "About us" }),
              }),
            ],
          }),
        }),
        f.jsxs("div", {
          className: "header__navIc",
          children: [
            f.jsx(he, {
              to: "/log",
              children: f.jsx("div", {
                className: `header__navIcon ${
                  e.pathname === "/log" ? "active" : ""
                }`,
                children: f.jsxs("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "rgba(255,254,254,1)",
                  children: [
                    f.jsx("defs", {
                      children: f.jsxs("linearGradient", {
                        id: "gradient",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                          f.jsx("stop", {
                            offset: "0%",
                            style: {
                              stopColor: "rgb(6, 193, 252)",
                              stopOpacity: 1,
                            },
                          }),
                          f.jsx("stop", {
                            offset: "33%",
                            style: {
                              stopColor: "rgb(172, 66, 255)",
                              stopOpacity: 1,
                            },
                          }),
                          f.jsx("stop", {
                            offset: "57%",
                            style: {
                              stopColor: "rgb(255, 0, 214)",
                              stopOpacity: 1,
                            },
                          }),
                          f.jsx("stop", {
                            offset: "90%",
                            style: {
                              stopColor: "rgb(255, 0, 61)",
                              stopOpacity: 1,
                            },
                          }),
                        ],
                      }),
                    }),
                    f.jsx("path", {
                      d: "M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z",
                    }),
                  ],
                }),
              }),
            }),
            f.jsx(he, {
              to: "/basket",
              children: f.jsx("div", {
                className: `header__navIcon ${
                  e.pathname === "/basket" ? "active" : ""
                }`,
                children: f.jsxs("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "rgba(255,255,255,1)",
                  children: [
                    f.jsx("defs", {
                      children: f.jsxs("linearGradient", {
                        id: "gradient",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                          f.jsx("stop", {
                            offset: "0%",
                            style: {
                              stopColor: "rgb(6, 193, 252)",
                              stopOpacity: 1,
                            },
                          }),
                          f.jsx("stop", {
                            offset: "33%",
                            style: {
                              stopColor: "rgb(172, 66, 255)",
                              stopOpacity: 1,
                            },
                          }),
                          f.jsx("stop", {
                            offset: "57%",
                            style: {
                              stopColor: "rgb(255, 0, 214)",
                              stopOpacity: 1,
                            },
                          }),
                          f.jsx("stop", {
                            offset: "90%",
                            style: {
                              stopColor: "rgb(255, 0, 61)",
                              stopOpacity: 1,
                            },
                          }),
                        ],
                      }),
                    }),
                    f.jsx("path", {
                      d: "M12.0049 2C15.3186 2 18.0049 4.68629 18.0049 8V9H22.0049V11H20.8379L20.0813 20.083C20.0381 20.6013 19.6048 21 19.0847 21H4.92502C4.40493 21 3.97166 20.6013 3.92847 20.083L3.17088 11H2.00488V9H6.00488V8C6.00488 4.68629 8.69117 2 12.0049 2ZM13.0049 13H11.0049V17H13.0049V13ZM9.00488 13H7.00488V17H9.00488V13ZM17.0049 13H15.0049V17H17.0049V13ZM12.0049 4C9.86269 4 8.1138 5.68397 8.00978 7.80036L8.00488 8V9H16.0049V8C16.0049 5.8578 14.3209 4.10892 12.2045 4.0049L12.0049 4Z",
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const N3 = () => {
    const [e, t] = R.useState(!1),
      n = () => {
        t(!e);
      },
      r = () => {
        t(!1);
      },
      i = (s) => {
        s.target.classList.contains("blur-background") && t(!1);
      };
    return f.jsxs("div", {
      className: "burger_menu",
      children: [
        f.jsx("button", {
          id: "burger__btn",
          type: "button",
          onClick: n,
          children: f.jsx("span", {
            id: "burgerSpan",
            className: e ? "btn-open-animation" : "",
          }),
        }),
        f.jsx("aside", {
          className: `burger__container ${e ? "open" : ""}`,
          children: f.jsx("div", {
            className: "burger__content",
            children: f.jsx("nav", {
              className: "burger__nav",
              children: f.jsxs("ol", {
                className: "burgerMenu_list",
                children: [
                  f.jsx(he, {
                    to: "/",
                    onClick: r,
                    children: f.jsx("li", { children: "home" }),
                  }),
                  f.jsx(he, {
                    to: "/new-featured",
                    onClick: r,
                    children: f.jsx("li", { children: "new & Featured" }),
                  }),
                  f.jsx(he, {
                    to: "/men",
                    onClick: r,
                    children: f.jsx("li", { children: "men" }),
                  }),
                  f.jsx(he, {
                    to: "/women",
                    onClick: r,
                    children: f.jsx("li", { children: "women" }),
                  }),
                  f.jsx(he, {
                    to: "/aboutus",
                    onClick: r,
                    children: f.jsx("li", { children: "About us" }),
                  }),
                  f.jsxs("div", {
                    className: "header__navIc burger_menu__bavIcon",
                    children: [
                      f.jsx(he, {
                        to: "/Log",
                        onClick: r,
                        children: f.jsx("div", {
                          className: "header__navIcon",
                          children: f.jsxs("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24",
                            fill: "rgba(255,254,254,1)",
                            children: [
                              f.jsx("defs", {
                                children: f.jsxs("linearGradient", {
                                  id: "gradient",
                                  x1: "0%",
                                  y1: "0%",
                                  x2: "100%",
                                  children: [
                                    f.jsx("stop", {
                                      offset: "0%",
                                      style: {
                                        stopColor: "rgb(6, 193, 252)",
                                        stopOpacity: 1,
                                      },
                                    }),
                                    f.jsx("stop", {
                                      offset: "33%",
                                      style: {
                                        stopColor: "rgb(172, 66, 255)",
                                        stopOpacity: 1,
                                      },
                                    }),
                                    f.jsx("stop", {
                                      offset: "57%",
                                      style: {
                                        stopColor: "rgb(255, 0, 214)",
                                        stopOpacity: 1,
                                      },
                                    }),
                                    f.jsx("stop", {
                                      offset: "90%",
                                      style: {
                                        stopColor: "rgb(255, 0, 61)",
                                        stopOpacity: 1,
                                      },
                                    }),
                                  ],
                                }),
                              }),
                              f.jsx("path", {
                                d: "M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z",
                              }),
                            ],
                          }),
                        }),
                      }),
                      f.jsx(he, {
                        to: "/basket",
                        onClick: r,
                        children: f.jsx("div", {
                          className: "header__navIcon",
                          children: f.jsxs("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "24",
                            height: "24",
                            fill: "rgba(255,255,255,1)",
                            children: [
                              f.jsx("defs", {
                                children: f.jsxs("linearGradient", {
                                  id: "gradient",
                                  x1: "0%",
                                  y1: "0%",
                                  x2: "100%",
                                  children: [
                                    f.jsx("stop", {
                                      offset: "0%",
                                      style: {
                                        stopColor: "rgb(6, 193, 252)",
                                        stopOpacity: 1,
                                      },
                                    }),
                                    f.jsx("stop", {
                                      offset: "33%",
                                      style: {
                                        stopColor: "rgb(172, 66, 255)",
                                        stopOpacity: 1,
                                      },
                                    }),
                                    f.jsx("stop", {
                                      offset: "57%",
                                      style: {
                                        stopColor: "rgb(255, 0, 214)",
                                        stopOpacity: 1,
                                      },
                                    }),
                                    f.jsx("stop", {
                                      offset: "90%",
                                      style: {
                                        stopColor: "rgb(255, 0, 61)",
                                        stopOpacity: 1,
                                      },
                                    }),
                                  ],
                                }),
                              }),
                              f.jsx("path", {
                                d: "M12.0049 2C15.3186 2 18.0049 4.68629 18.0049 8V9H22.0049V11H20.8379L20.0813 20.083C20.0381 20.6013 19.6048 21 19.0847 21H4.92502C4.40493 21 3.97166 20.6013 3.92847 20.083L3.17088 11H2.00488V9H6.00488V8C6.00488 4.68629 8.69117 2 12.0049 2ZM13.0049 13H11.0049V17H13.0049V13ZM9.00488 13H7.00488V17H9.00488V13ZM17.0049 13H15.0049V17H17.0049V13ZM12.0049 4C9.86269 4 8.1138 5.68397 8.00978 7.80036L8.00488 8V9H16.0049V8C16.0049 5.8578 14.3209 4.10892 12.2045 4.0049L12.0049 4Z",
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
        f.jsx("div", {
          className: `blur-background ${e ? "show" : ""}`,
          onClick: i,
        }),
      ],
    });
  },
  P3 =
    "data:image/svg+xml,%3csvg%20width='78'%20height='67'%20viewBox='0%200%2078%2067'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M77.4222%2058.9601V61.64C77.4222%2063.0616%2076.8596%2064.4249%2075.8583%2065.4301C74.8569%2066.4353%2073.4987%2067%2072.0826%2067H41.1494C39.7416%2067.0028%2038.3903%2066.445%2037.3917%2065.449L1.59274%2030.6261L1.56271%2030.5959C0.562087%2029.5908%200%2028.228%200%2026.8071C0%2025.3862%200.562087%2024.0234%201.56271%2023.0183L22.9212%201.5383L22.9713%201.4914C23.9767%200.519122%2025.3232%20-0.0165391%2026.7192%200.000389368C28.1152%200.0173178%2029.4484%200.585473%2030.4301%201.58185L33.17%204.35562C34.1073%205.29782%2034.6617%206.55649%2034.7252%207.88649C35.1023%2015.5512%2040.3985%2020.7202%2048.5114%2021.3768C49.8406%2021.4915%2051.0789%2022.1014%2051.9825%2023.0866C52.8861%2024.0717%2053.3896%2025.3608%2053.3939%2026.6999V34.8403C53.3939%2037.6834%2054.519%2040.41%2056.5218%2042.4204C58.5245%2044.4308%2061.2408%2045.5602%2064.0731%2045.5602C67.6135%2045.5602%2071.0089%2046.972%2073.5124%2049.4849C76.0158%2051.9979%2077.4222%2055.4062%2077.4222%2058.9601ZM72.0826%2058.9601C72.0826%2056.8278%2071.2387%2054.7828%2069.7367%2053.275C68.2346%2051.7672%2066.1974%2050.9202%2064.0731%2050.9202C60.9272%2050.9239%2057.8507%2049.9913%2055.2327%2048.2402H45.3844C44.6763%2048.2402%2043.9973%2047.9578%2043.4966%2047.4552C42.9959%2046.9526%2042.7146%2046.271%2042.7146%2045.5602C42.7146%2044.8494%2042.9959%2044.1678%2043.4966%2043.6652C43.9973%2043.1626%2044.6763%2042.8802%2045.3844%2042.8802H50.2101C49.252%2041.2242%2048.5986%2039.4086%2048.2812%2037.5203H42.7146C42.0065%2037.5203%2041.3274%2037.2379%2040.8267%2036.7353C40.3261%2036.2327%2040.0448%2035.5511%2040.0448%2034.8403C40.0448%2034.1295%2040.3261%2033.4479%2040.8267%2032.9453C41.3274%2032.4427%2042.0065%2032.1603%2042.7146%2032.1603H48.0542V26.6999C42.9048%2026.2778%2038.4162%2024.3549%2035.0789%2021.139C31.6115%2017.789%2029.6458%2013.2967%2029.4056%208.13103L26.6523%205.36061L5.33716%2026.8004L41.1194%2061.6065L41.1494%2061.6333H72.0826V58.9601Z'%20fill='url(%23paint0_linear_26_330)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_26_330'%20x1='6.45174e-07'%20y1='10.05'%20x2='84.8667'%20y2='67'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2306C1FC'/%3e%3cstop%20offset='0.367462'%20stop-color='%23AF3EE2'/%3e%3cstop%20offset='0.65287'%20stop-color='%23FF00D6'/%3e%3cstop%20offset='0.994792'%20stop-color='%23FF003D'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
function A3() {
  const [e, t] = R.useState(!0),
    n = R.useRef(0);
  return (
    R.useEffect(() => {
      const r = () => {
        const i = window.pageYOffset;
        t(i === 0 ? !0 : i < n.current), (n.current = i);
      };
      return (
        window.addEventListener("scroll", r),
        () => {
          window.removeEventListener("scroll", r);
        }
      );
    }, [e]),
    f.jsx("header", {
      className: `header ${e ? "header--visible" : "header--hidden"}`,
      children: f.jsxs(De, {
        className: "header__container",
        children: [
          f.jsx("div", {
            className: "header__logo",
            children: f.jsx(he, {
              to: "/",
              children: f.jsx("img", { src: P3, alt: "Logo" }),
            }),
          }),
          f.jsx(I3, {}),
          f.jsx(N3, {}),
        ],
      }),
    })
  );
}
class O3 extends R.Component {
  render() {
    return f.jsx("footer", {
      className: "footer",
      children: f.jsxs(De, {
        className: "footer__container",
        children: [
          f.jsxs("div", {
            className: "footer__links",
            children: [
              f.jsx("div", {
                className: "footer__linkTitle",
                children: "Shoesy",
              }),
              f.jsx("ol", {
                children: f.jsx("li", { children: "Download Now :" }),
              }),
              f.jsxs("div", {
                className: "footer__dowlandIcons",
                children: [
                  f.jsx("svg", {
                    width: "33",
                    height: "39",
                    viewBox: "0 0 33 39",
                    fill: "none",
                    xmlns: "http://www.w3.org/20˛00/svg",
                    children: f.jsx("path", {
                      d: "M21.7823 3.57989L23.4862 0.509665C23.508 0.470324 23.5218 0.427081 23.5269 0.382405C23.532 0.33773 23.5282 0.292496 23.5157 0.249287C23.5033 0.206078 23.4824 0.16574 23.4544 0.130576C23.4263 0.0954122 23.3916 0.066111 23.3522 0.0443454C23.3128 0.0225798 23.2695 0.00877611 23.2248 0.00372248C23.1801 -0.00133115 23.1348 0.00246429 23.0915 0.014892C23.0482 0.0273197 23.0078 0.0481363 22.9726 0.0761533C22.9374 0.10417 22.9081 0.138839 22.8863 0.17818L21.1646 3.28031C19.6948 2.63675 18.1075 2.30448 16.5027 2.30448C14.8979 2.30448 13.3105 2.63675 11.8407 3.28031L10.119 0.17818C10.075 0.0982572 10.001 0.0390698 9.9133 0.0136385C9.82559 -0.0117928 9.73136 -0.00138493 9.65133 0.0425727C9.5713 0.0865303 9.51204 0.160437 9.48657 0.248034C9.46111 0.33563 9.47153 0.429742 9.51554 0.509665L11.2195 3.57989C9.59824 4.37845 8.22846 5.60744 7.26037 7.1321C6.29228 8.65677 5.76327 10.4182 5.73134 12.2233H27.274C27.2417 10.4178 26.7122 8.65614 25.7434 7.13144C24.7747 5.60674 23.4042 4.37796 21.7823 3.57989ZM11.5319 8.28626C11.3538 8.28626 11.1798 8.23351 11.0318 8.13467C10.8837 8.03584 10.7684 7.89537 10.7003 7.73105C10.6323 7.56672 10.6145 7.38593 10.6494 7.21154C10.6843 7.03716 10.7702 6.87702 10.8962 6.7514C11.0222 6.62578 11.1827 6.54033 11.3574 6.50585C11.5321 6.47137 11.7131 6.48942 11.8775 6.55772C12.0419 6.62601 12.1823 6.74148 12.281 6.88951C12.3797 7.03754 12.4321 7.21147 12.4318 7.3893C12.4313 7.62735 12.3363 7.85549 12.1676 8.02365C11.9989 8.19182 11.7703 8.28626 11.5319 8.28626ZM21.4752 8.28626C21.2971 8.28626 21.1231 8.23351 20.9751 8.13467C20.827 8.03584 20.7117 7.89537 20.6436 7.73105C20.5756 7.56672 20.5579 7.38593 20.5927 7.21154C20.6276 7.03716 20.7135 6.87702 20.8395 6.7514C20.9655 6.62578 21.1261 6.54033 21.3007 6.50585C21.4754 6.47137 21.6564 6.48942 21.8208 6.55772C21.9852 6.62601 22.1256 6.74148 22.2243 6.88951C22.323 7.03754 22.3755 7.21147 22.3751 7.3893C22.3746 7.62735 22.2796 7.85549 22.1109 8.02365C21.9422 8.19182 21.7136 8.28626 21.4752 8.28626ZM5.72779 28.6664C5.72732 29.0086 5.7945 29.3476 5.92548 29.6638C6.05646 29.9801 6.24866 30.2674 6.49106 30.5094C6.73347 30.7513 7.0213 30.943 7.33806 31.0736C7.65482 31.2042 7.99428 31.2711 8.33697 31.2704H10.064V36.5883C10.064 37.2279 10.3184 37.8414 10.7713 38.2936C11.2242 38.7459 11.8384 39 12.4788 39C13.1193 39 13.7335 38.7459 14.1864 38.2936C14.6392 37.8414 14.8937 37.2279 14.8937 36.5883V31.2704H18.1134V36.5883C18.1134 37.2277 18.3678 37.8409 18.8205 38.293C19.2732 38.7451 19.8872 38.9991 20.5274 38.9991C21.1676 38.9991 21.7816 38.7451 22.2343 38.293C22.687 37.8409 22.9413 37.2277 22.9413 36.5883V31.2704H24.6701C25.0124 31.2706 25.3513 31.2035 25.6675 31.0728C25.9838 30.9421 26.2711 30.7504 26.5131 30.5087C26.7551 30.267 26.947 29.9801 27.0779 29.6642C27.2088 29.3484 27.276 29.0099 27.2758 28.6681V13.0742H5.72779V28.6664ZM2.41394 12.6594C1.77371 12.6603 1.15999 12.9149 0.707438 13.3671C0.254889 13.8194 0.000469381 14.4325 0 15.0719V25.1211C-4.72372e-09 25.4377 0.0624383 25.7512 0.18375 26.0436C0.305062 26.3361 0.482872 26.6019 0.707027 26.8258C0.931182 27.0496 1.19729 27.2272 1.49017 27.3484C1.78304 27.4695 2.09694 27.5319 2.41394 27.5319C2.73095 27.5319 3.04484 27.4695 3.33772 27.3484C3.63059 27.2272 3.8967 27.0496 4.12086 26.8258C4.34501 26.6019 4.52282 26.3361 4.64413 26.0436C4.76544 25.7512 4.82788 25.4377 4.82788 25.1211V15.0719C4.82694 14.4329 4.57232 13.8202 4.11982 13.3683C3.66732 12.9164 3.05387 12.6621 2.41394 12.6611V12.6594ZM30.5861 12.6594C29.9458 12.6603 29.3321 12.9149 28.8796 13.3671C28.427 13.8194 28.1726 14.4325 28.1721 15.0719V25.1211C28.1721 25.4377 28.2346 25.7512 28.3559 26.0436C28.4772 26.3361 28.655 26.6019 28.8791 26.8258C29.1033 27.0496 29.3694 27.2272 29.6623 27.3484C29.9552 27.4695 30.2691 27.5319 30.5861 27.5319C30.9031 27.5319 31.217 27.4695 31.5098 27.3484C31.8027 27.2272 32.0688 27.0496 32.293 26.8258C32.5171 26.6019 32.6949 26.3361 32.8162 26.0436C32.9376 25.7512 33 25.4377 33 25.1211V15.0719C32.9991 14.4329 32.7444 13.8202 32.2919 13.3683C31.8394 12.9164 31.226 12.6621 30.5861 12.6611V12.6594Z",
                      fill: "#0FA958",
                    }),
                  }),
                  f.jsx("svg", {
                    width: "33",
                    height: "39",
                    viewBox: "0 0 33 39",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: f.jsx("path", {
                      d: "M27.4953 37.4353C25.3631 39.4934 23.035 39.1684 20.794 38.1935C18.4224 37.197 16.2466 37.1536 13.7445 38.1935C10.6114 39.5367 8.9578 39.1467 7.08664 37.4353C-3.5311 26.5383 -1.96455 9.94374 10.0892 9.33716C13.0265 9.4888 15.0717 10.9403 16.7906 11.0703C19.358 10.5503 21.8166 9.05552 24.558 9.2505C27.8434 9.51047 30.3238 10.8103 31.9556 13.15C25.1672 17.2012 26.7773 26.105 33 28.5964C31.7598 31.846 30.1498 35.0739 27.4736 37.4569L27.4953 37.4353ZM16.573 9.20717C16.2466 4.37611 20.1847 0.389951 24.7103 0C25.3413 5.58929 19.619 9.74877 16.573 9.20717Z",
                      fill: "#F0F0F0",
                    }),
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "footer__links",
            children: [
              f.jsx("div", {
                className: "footer__linkTitle",
                children: "COMPANY",
              }),
              f.jsxs("ol", {
                children: [
                  f.jsx("li", { children: "About" }),
                  f.jsx("li", { children: "Categories" }),
                  f.jsx(he, {
                    to: "men",
                    children: f.jsx("li", { children: "Men" }),
                  }),
                  f.jsx(he, {
                    to: "women",
                    children: f.jsx("li", { children: "Women" }),
                  }),
                  f.jsx("li", { children: "Find a store" }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "footer__links",
            children: [
              f.jsx("div", {
                className: "footer__linkTitle",
                children: "USEFUL LINKS",
              }),
              f.jsxs("ol", {
                children: [
                  f.jsx("li", { children: "Brands" }),
                  f.jsx("li", { children: "Send Gift" }),
                  f.jsx("li", { children: "Redeem" }),
                  f.jsx("li", { children: "Legal" }),
                  f.jsx("li", { children: "Help" }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "footer__links",
            children: [
              f.jsx("div", {
                className: "footer__linkTitle",
                children: "SOCIALIZE WITH ANGHAMI",
              }),
              f.jsxs("div", {
                className: "footer__icons",
                children: [
                  f.jsx(he, {
                    to: "https://t.me/wartsneakerbot?start=1",
                    children: f.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: "45",
                      height: "45",
                      fill: "rgba(252,247,247,1)",
                      children: f.jsx("path", {
                        d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3584 9.38246C11.3857 9.78702 9.4418 10.6244 6.5266 11.8945C6.05321 12.0827 5.80524 12.2669 5.78266 12.4469C5.74451 12.7513 6.12561 12.8711 6.64458 13.0343C6.71517 13.0565 6.78832 13.0795 6.8633 13.1039C7.37388 13.2698 8.06071 13.464 8.41776 13.4717C8.74164 13.4787 9.10313 13.3452 9.50222 13.0711C12.226 11.2325 13.632 10.3032 13.7203 10.2832C13.7826 10.269 13.8689 10.2513 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9739 10.48C13.9361 10.641 12.4401 12.0318 11.666 12.7515C11.4351 12.9661 11.2101 13.1853 10.9833 13.4039C10.509 13.8611 10.1533 14.204 11.003 14.764C11.8644 15.3317 12.7323 15.8982 13.5724 16.4971C13.9867 16.7925 14.359 17.0579 14.8188 17.0156C15.0861 16.991 15.3621 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.3821 16.6352 8.80083C16.6484 8.6623 16.6318 8.485 16.6185 8.40717C16.6052 8.32934 16.5773 8.21844 16.4762 8.13635C16.3563 8.03913 16.1714 8.01863 16.0887 8.02009C15.7125 8.02672 15.1355 8.22737 12.3584 9.38246Z",
                      }),
                    }),
                  }),
                  f.jsx(he, {
                    to: "",
                    children: f.jsxs("svg", {
                      width: "39",
                      height: "39",
                      viewBox: "0 0 39 39",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        f.jsx("path", {
                          d: "M11.31 0H27.69C33.93 0 39 5.07 39 11.31V27.69C39 30.6896 37.8084 33.5663 35.6874 35.6874C33.5663 37.8084 30.6896 39 27.69 39H11.31C5.07 39 0 33.93 0 27.69V11.31C0 8.3104 1.19159 5.43366 3.31262 3.31262C5.43366 1.19159 8.3104 0 11.31 0ZM10.92 3.9C9.05818 3.9 7.27262 4.63961 5.95611 5.95611C4.63961 7.27262 3.9 9.05818 3.9 10.92V28.08C3.9 31.9605 7.0395 35.1 10.92 35.1H28.08C29.9418 35.1 31.7274 34.3604 33.0439 33.0439C34.3604 31.7274 35.1 29.9418 35.1 28.08V10.92C35.1 7.0395 31.9605 3.9 28.08 3.9H10.92ZM29.7375 6.825C30.384 6.825 31.004 7.08181 31.4611 7.53893C31.9182 7.99605 32.175 8.61604 32.175 9.2625C32.175 9.90897 31.9182 10.529 31.4611 10.9861C31.004 11.4432 30.384 11.7 29.7375 11.7C29.091 11.7 28.471 11.4432 28.0139 10.9861C27.5568 10.529 27.3 9.90897 27.3 9.2625C27.3 8.61604 27.5568 7.99605 28.0139 7.53893C28.471 7.08181 29.091 6.825 29.7375 6.825ZM19.5 9.75C22.0859 9.75 24.5658 10.7772 26.3943 12.6057C28.2228 14.4342 29.25 16.9141 29.25 19.5C29.25 22.0859 28.2228 24.5658 26.3943 26.3943C24.5658 28.2228 22.0859 29.25 19.5 29.25C16.9141 29.25 14.4342 28.2228 12.6057 26.3943C10.7772 24.5658 9.75 22.0859 9.75 19.5C9.75 16.9141 10.7772 14.4342 12.6057 12.6057C14.4342 10.7772 16.9141 9.75 19.5 9.75ZM19.5 13.65C17.9485 13.65 16.4605 14.2663 15.3634 15.3634C14.2663 16.4605 13.65 17.9485 13.65 19.5C13.65 21.0515 14.2663 22.5395 15.3634 23.6366C16.4605 24.7337 17.9485 25.35 19.5 25.35C21.0515 25.35 22.5395 24.7337 23.6366 23.6366C24.7337 22.5395 25.35 21.0515 25.35 19.5C25.35 17.9485 24.7337 16.4605 23.6366 15.3634C22.5395 14.2663 21.0515 13.65 19.5 13.65Z",
                          fill: "url(#paint0_linear_28_527)",
                        }),
                        f.jsx("defs", {
                          children: f.jsxs("linearGradient", {
                            id: "paint0_linear_28_527",
                            x1: "19.5",
                            y1: "0",
                            x2: "19.5",
                            y2: "39",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                              f.jsx("stop", { "stop-color": "#A800AB" }),
                              f.jsx("stop", {
                                offset: "1",
                                "stop-color": "#FD3737",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  }
}
var pv = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Vy, function () {
    return (function (n) {
      function r(s) {
        if (i[s]) return i[s].exports;
        var o = (i[s] = { exports: {}, id: s, loaded: !1 });
        return (
          n[s].call(o.exports, o, o.exports, r), (o.loaded = !0), o.exports
        );
      }
      var i = {};
      return (r.m = n), (r.c = i), (r.p = "dist/"), r(0);
    })([
      function (n, r, i) {
        function s(V) {
          return V && V.__esModule ? V : { default: V };
        }
        var o =
            Object.assign ||
            function (V) {
              for (var ie = 1; ie < arguments.length; ie++) {
                var Ee = arguments[ie];
                for (var X in Ee)
                  Object.prototype.hasOwnProperty.call(Ee, X) && (V[X] = Ee[X]);
              }
              return V;
            },
          l = i(1),
          u = (s(l), i(6)),
          c = s(u),
          h = i(7),
          m = s(h),
          g = i(8),
          y = s(g),
          _ = i(9),
          A = s(_),
          N = i(10),
          C = s(N),
          S = i(11),
          E = s(S),
          O = i(14),
          L = s(O),
          D = [],
          T = !1,
          v = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1,
          },
          b = function () {
            var V =
              arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            if ((V && (T = !0), T))
              return (D = (0, E.default)(D, v)), (0, C.default)(D, v.once), D;
          },
          k = function () {
            (D = (0, L.default)()), b();
          },
          x = function () {
            D.forEach(function (V, ie) {
              V.node.removeAttribute("data-aos"),
                V.node.removeAttribute("data-aos-easing"),
                V.node.removeAttribute("data-aos-duration"),
                V.node.removeAttribute("data-aos-delay");
            });
          },
          P = function (V) {
            return (
              V === !0 ||
              (V === "mobile" && A.default.mobile()) ||
              (V === "phone" && A.default.phone()) ||
              (V === "tablet" && A.default.tablet()) ||
              (typeof V == "function" && V() === !0)
            );
          },
          I = function (V) {
            (v = o(v, V)), (D = (0, L.default)());
            var ie = document.all && !window.atob;
            return P(v.disable) || ie
              ? x()
              : (v.disableMutationObserver ||
                  y.default.isSupported() ||
                  (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                  (v.disableMutationObserver = !0)),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", v.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", v.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", v.delay),
                v.startEvent === "DOMContentLoaded" &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? b(!0)
                  : v.startEvent === "load"
                  ? window.addEventListener(v.startEvent, function () {
                      b(!0);
                    })
                  : document.addEventListener(v.startEvent, function () {
                      b(!0);
                    }),
                window.addEventListener(
                  "resize",
                  (0, m.default)(b, v.debounceDelay, !0)
                ),
                window.addEventListener(
                  "orientationchange",
                  (0, m.default)(b, v.debounceDelay, !0)
                ),
                window.addEventListener(
                  "scroll",
                  (0, c.default)(function () {
                    (0, C.default)(D, v.once);
                  }, v.throttleDelay)
                ),
                v.disableMutationObserver || y.default.ready("[data-aos]", k),
                D);
          };
        n.exports = { init: I, refresh: b, refreshHard: k };
      },
      function (n, r) {},
      ,
      ,
      ,
      ,
      function (n, r) {
        (function (i) {
          function s(P, I, V) {
            function ie(te) {
              var Le = Se,
                Lt = Ie;
              return (Se = Ie = void 0), (ht = te), (ae = P.apply(Lt, Le));
            }
            function Ee(te) {
              return (ht = te), (ke = setTimeout(W, I)), pt ? ie(te) : ae;
            }
            function X(te) {
              var Le = te - Je,
                Lt = te - ht,
                Ao = I - Le;
              return mt ? k(Ao, Ne - Lt) : Ao;
            }
            function U(te) {
              var Le = te - Je,
                Lt = te - ht;
              return Je === void 0 || Le >= I || Le < 0 || (mt && Lt >= Ne);
            }
            function W() {
              var te = x();
              return U(te) ? G(te) : void (ke = setTimeout(W, X(te)));
            }
            function G(te) {
              return (
                (ke = void 0), le && Se ? ie(te) : ((Se = Ie = void 0), ae)
              );
            }
            function se() {
              ke !== void 0 && clearTimeout(ke),
                (ht = 0),
                (Se = Je = Ie = ke = void 0);
            }
            function J() {
              return ke === void 0 ? ae : G(x());
            }
            function ee() {
              var te = x(),
                Le = U(te);
              if (((Se = arguments), (Ie = this), (Je = te), Le)) {
                if (ke === void 0) return Ee(Je);
                if (mt) return (ke = setTimeout(W, I)), ie(Je);
              }
              return ke === void 0 && (ke = setTimeout(W, I)), ae;
            }
            var Se,
              Ie,
              Ne,
              ae,
              ke,
              Je,
              ht = 0,
              pt = !1,
              mt = !1,
              le = !0;
            if (typeof P != "function") throw new TypeError(g);
            return (
              (I = h(I) || 0),
              l(V) &&
                ((pt = !!V.leading),
                (mt = "maxWait" in V),
                (Ne = mt ? b(h(V.maxWait) || 0, I) : Ne),
                (le = "trailing" in V ? !!V.trailing : le)),
              (ee.cancel = se),
              (ee.flush = J),
              ee
            );
          }
          function o(P, I, V) {
            var ie = !0,
              Ee = !0;
            if (typeof P != "function") throw new TypeError(g);
            return (
              l(V) &&
                ((ie = "leading" in V ? !!V.leading : ie),
                (Ee = "trailing" in V ? !!V.trailing : Ee)),
              s(P, I, { leading: ie, maxWait: I, trailing: Ee })
            );
          }
          function l(P) {
            var I = typeof P > "u" ? "undefined" : m(P);
            return !!P && (I == "object" || I == "function");
          }
          function u(P) {
            return !!P && (typeof P > "u" ? "undefined" : m(P)) == "object";
          }
          function c(P) {
            return (
              (typeof P > "u" ? "undefined" : m(P)) == "symbol" ||
              (u(P) && v.call(P) == _)
            );
          }
          function h(P) {
            if (typeof P == "number") return P;
            if (c(P)) return y;
            if (l(P)) {
              var I = typeof P.valueOf == "function" ? P.valueOf() : P;
              P = l(I) ? I + "" : I;
            }
            if (typeof P != "string") return P === 0 ? P : +P;
            P = P.replace(A, "");
            var V = C.test(P);
            return V || S.test(P)
              ? E(P.slice(2), V ? 2 : 8)
              : N.test(P)
              ? y
              : +P;
          }
          var m =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (P) {
                    return typeof P;
                  }
                : function (P) {
                    return P &&
                      typeof Symbol == "function" &&
                      P.constructor === Symbol &&
                      P !== Symbol.prototype
                      ? "symbol"
                      : typeof P;
                  },
            g = "Expected a function",
            y = NaN,
            _ = "[object Symbol]",
            A = /^\s+|\s+$/g,
            N = /^[-+]0x[0-9a-f]+$/i,
            C = /^0b[01]+$/i,
            S = /^0o[0-7]+$/i,
            E = parseInt,
            O =
              (typeof i > "u" ? "undefined" : m(i)) == "object" &&
              i &&
              i.Object === Object &&
              i,
            L =
              (typeof self > "u" ? "undefined" : m(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            D = O || L || Function("return this")(),
            T = Object.prototype,
            v = T.toString,
            b = Math.max,
            k = Math.min,
            x = function () {
              return D.Date.now();
            };
          n.exports = o;
        }).call(
          r,
          (function () {
            return this;
          })()
        );
      },
      function (n, r) {
        (function (i) {
          function s(x, P, I) {
            function V(le) {
              var te = ee,
                Le = Se;
              return (ee = Se = void 0), (Je = le), (Ne = x.apply(Le, te));
            }
            function ie(le) {
              return (Je = le), (ae = setTimeout(U, P)), ht ? V(le) : Ne;
            }
            function Ee(le) {
              var te = le - ke,
                Le = le - Je,
                Lt = P - te;
              return pt ? b(Lt, Ie - Le) : Lt;
            }
            function X(le) {
              var te = le - ke,
                Le = le - Je;
              return ke === void 0 || te >= P || te < 0 || (pt && Le >= Ie);
            }
            function U() {
              var le = k();
              return X(le) ? W(le) : void (ae = setTimeout(U, Ee(le)));
            }
            function W(le) {
              return (ae = void 0), mt && ee ? V(le) : ((ee = Se = void 0), Ne);
            }
            function G() {
              ae !== void 0 && clearTimeout(ae),
                (Je = 0),
                (ee = ke = Se = ae = void 0);
            }
            function se() {
              return ae === void 0 ? Ne : W(k());
            }
            function J() {
              var le = k(),
                te = X(le);
              if (((ee = arguments), (Se = this), (ke = le), te)) {
                if (ae === void 0) return ie(ke);
                if (pt) return (ae = setTimeout(U, P)), V(ke);
              }
              return ae === void 0 && (ae = setTimeout(U, P)), Ne;
            }
            var ee,
              Se,
              Ie,
              Ne,
              ae,
              ke,
              Je = 0,
              ht = !1,
              pt = !1,
              mt = !0;
            if (typeof x != "function") throw new TypeError(m);
            return (
              (P = c(P) || 0),
              o(I) &&
                ((ht = !!I.leading),
                (pt = "maxWait" in I),
                (Ie = pt ? v(c(I.maxWait) || 0, P) : Ie),
                (mt = "trailing" in I ? !!I.trailing : mt)),
              (J.cancel = G),
              (J.flush = se),
              J
            );
          }
          function o(x) {
            var P = typeof x > "u" ? "undefined" : h(x);
            return !!x && (P == "object" || P == "function");
          }
          function l(x) {
            return !!x && (typeof x > "u" ? "undefined" : h(x)) == "object";
          }
          function u(x) {
            return (
              (typeof x > "u" ? "undefined" : h(x)) == "symbol" ||
              (l(x) && T.call(x) == y)
            );
          }
          function c(x) {
            if (typeof x == "number") return x;
            if (u(x)) return g;
            if (o(x)) {
              var P = typeof x.valueOf == "function" ? x.valueOf() : x;
              x = o(P) ? P + "" : P;
            }
            if (typeof x != "string") return x === 0 ? x : +x;
            x = x.replace(_, "");
            var I = N.test(x);
            return I || C.test(x)
              ? S(x.slice(2), I ? 2 : 8)
              : A.test(x)
              ? g
              : +x;
          }
          var h =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (x) {
                    return typeof x;
                  }
                : function (x) {
                    return x &&
                      typeof Symbol == "function" &&
                      x.constructor === Symbol &&
                      x !== Symbol.prototype
                      ? "symbol"
                      : typeof x;
                  },
            m = "Expected a function",
            g = NaN,
            y = "[object Symbol]",
            _ = /^\s+|\s+$/g,
            A = /^[-+]0x[0-9a-f]+$/i,
            N = /^0b[01]+$/i,
            C = /^0o[0-7]+$/i,
            S = parseInt,
            E =
              (typeof i > "u" ? "undefined" : h(i)) == "object" &&
              i &&
              i.Object === Object &&
              i,
            O =
              (typeof self > "u" ? "undefined" : h(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            L = E || O || Function("return this")(),
            D = Object.prototype,
            T = D.toString,
            v = Math.max,
            b = Math.min,
            k = function () {
              return L.Date.now();
            };
          n.exports = s;
        }).call(
          r,
          (function () {
            return this;
          })()
        );
      },
      function (n, r) {
        function i(h) {
          var m = void 0,
            g = void 0;
          for (m = 0; m < h.length; m += 1)
            if (
              ((g = h[m]),
              (g.dataset && g.dataset.aos) || (g.children && i(g.children)))
            )
              return !0;
          return !1;
        }
        function s() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        function o() {
          return !!s();
        }
        function l(h, m) {
          var g = window.document,
            y = s(),
            _ = new y(u);
          (c = m),
            _.observe(g.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0,
            });
        }
        function u(h) {
          h &&
            h.forEach(function (m) {
              var g = Array.prototype.slice.call(m.addedNodes),
                y = Array.prototype.slice.call(m.removedNodes),
                _ = g.concat(y);
              if (i(_)) return c();
            });
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var c = function () {};
        r.default = { isSupported: o, ready: l };
      },
      function (n, r) {
        function i(g, y) {
          if (!(g instanceof y))
            throw new TypeError("Cannot call a class as a function");
        }
        function s() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var o = (function () {
            function g(y, _) {
              for (var A = 0; A < _.length; A++) {
                var N = _[A];
                (N.enumerable = N.enumerable || !1),
                  (N.configurable = !0),
                  "value" in N && (N.writable = !0),
                  Object.defineProperty(y, N.key, N);
              }
            }
            return function (y, _, A) {
              return _ && g(y.prototype, _), A && g(y, A), y;
            };
          })(),
          l =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          u =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          c =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          h =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          m = (function () {
            function g() {
              i(this, g);
            }
            return (
              o(g, [
                {
                  key: "phone",
                  value: function () {
                    var y = s();
                    return !(!l.test(y) && !u.test(y.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var y = s();
                    return !(!c.test(y) && !h.test(y.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
              g
            );
          })();
        r.default = new m();
      },
      function (n, r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var i = function (o, l, u) {
            var c = o.node.getAttribute("data-aos-once");
            l > o.position
              ? o.node.classList.add("aos-animate")
              : typeof c < "u" &&
                (c === "false" || (!u && c !== "true")) &&
                o.node.classList.remove("aos-animate");
          },
          s = function (o, l) {
            var u = window.pageYOffset,
              c = window.innerHeight;
            o.forEach(function (h, m) {
              i(h, c + u, l);
            });
          };
        r.default = s;
      },
      function (n, r, i) {
        function s(c) {
          return c && c.__esModule ? c : { default: c };
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var o = i(12),
          l = s(o),
          u = function (c, h) {
            return (
              c.forEach(function (m, g) {
                m.node.classList.add("aos-init"),
                  (m.position = (0, l.default)(m.node, h.offset));
              }),
              c
            );
          };
        r.default = u;
      },
      function (n, r, i) {
        function s(c) {
          return c && c.__esModule ? c : { default: c };
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var o = i(13),
          l = s(o),
          u = function (c, h) {
            var m = 0,
              g = 0,
              y = window.innerHeight,
              _ = {
                offset: c.getAttribute("data-aos-offset"),
                anchor: c.getAttribute("data-aos-anchor"),
                anchorPlacement: c.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              (_.offset && !isNaN(_.offset) && (g = parseInt(_.offset)),
              _.anchor &&
                document.querySelectorAll(_.anchor) &&
                (c = document.querySelectorAll(_.anchor)[0]),
              (m = (0, l.default)(c).top),
              _.anchorPlacement)
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                m += c.offsetHeight / 2;
                break;
              case "bottom-bottom":
                m += c.offsetHeight;
                break;
              case "top-center":
                m += y / 2;
                break;
              case "bottom-center":
                m += y / 2 + c.offsetHeight;
                break;
              case "center-center":
                m += y / 2 + c.offsetHeight / 2;
                break;
              case "top-top":
                m += y;
                break;
              case "bottom-top":
                m += c.offsetHeight + y;
                break;
              case "center-top":
                m += c.offsetHeight / 2 + y;
            }
            return _.anchorPlacement || _.offset || isNaN(h) || (g = h), m + g;
          };
        r.default = u;
      },
      function (n, r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var i = function (s) {
          for (
            var o = 0, l = 0;
            s && !isNaN(s.offsetLeft) && !isNaN(s.offsetTop);

          )
            (o += s.offsetLeft - (s.tagName != "BODY" ? s.scrollLeft : 0)),
              (l += s.offsetTop - (s.tagName != "BODY" ? s.scrollTop : 0)),
              (s = s.offsetParent);
          return { top: l, left: o };
        };
        r.default = i;
      },
      function (n, r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var i = function (s) {
          return (
            (s = s || document.querySelectorAll("[data-aos]")),
            Array.prototype.map.call(s, function (o) {
              return { node: o };
            })
          );
        };
        r.default = i;
      },
    ]);
  });
})(pv);
var j3 = pv.exports;
const Wt = Sl(j3),
  L3 = "/assets/image-2HirN1VD.png";
class R3 extends R.Component {
  componentDidMount() {
    Wt.init({ duration: 1e3 });
  }
  render() {
    return f.jsxs("section", {
      className: "prom",
      children: [
        f.jsxs(De, {
          className: "prom__container",
          children: [
            f.jsxs("h1", {
              className: "promo_title",
              "data-aos": "fade-up",
              children: [
                "All ",
                f.jsx("span", { children: " the sneakers " }),
                " You want are here",
              ],
            }),
            f.jsxs("p", {
              "data-aos": "fade-up",
              children: [
                "Lorem ipsum dolor sit amet consectetur. Lorem sit aenean erat tincidunt nulla potenti vulputate.",
                " ",
              ],
            }),
            f.jsx("div", {
              className: "prom__buttons",
              "data-aos": "fade-up",
              children: f.jsx("button", {
                className: "prom__shopBtn",
                children: "SHOP NOW",
              }),
            }),
          ],
        }),
        f.jsx("img", {
          "data-aos": "fade-up",
          className: "prom__hrImg",
          src: L3,
          alt: "",
        }),
      ],
    });
  }
}
const M3 = "/assets/men-l7sHb6nw.png",
  D3 = "/assets/woman-CUBkKbSw.png";
class F3 extends R.Component {
  componentDidMount() {
    Wt.init({ duration: 1e3 });
  }
  render() {
    return f.jsx("section", {
      className: "WomanMan",
      children: f.jsx(De, {
        children: f.jsxs(Jr, {
          className: "WomanMan__row",
          children: [
            f.jsx("div", {
              className: "col-xxl-5 col-sm-5 col-md-6",
              "data-aos": "fade-up",
              children: f.jsx(he, {
                to: "/men",
                children: f.jsx("div", {
                  className: "WomanMan__card",
                  children: f.jsx("div", {
                    className: "WomanMan__cardImage",
                    children: f.jsx("img", { src: M3, alt: "" }),
                  }),
                }),
              }),
            }),
            f.jsx("div", {
              className: "col-xxl-5 col-sm-5 col-md-6",
              "data-aos": "fade-up",
              children: f.jsx(he, {
                to: "/women",
                children: f.jsx("div", {
                  className: "WomanMan__card",
                  children: f.jsx("div", {
                    className: "WomanMan__cardImage",
                    children: f.jsx("img", { src: D3, alt: "" }),
                  }),
                }),
              }),
            }),
          ],
        }),
      }),
    });
  }
}
function _o(e) {
  return (
    ln(),
    R.useEffect(() => {
      Wt.init({ duration: 1e3 });
    }, []),
    f.jsx("div", {
      className: "col-xxl-4 col-sm-6 col-md-7",
      "data-aos": "fade-up",
      children: f.jsx("div", {
        className: "sneaker__card",
        children: f.jsxs(he, {
          to: `/sneaker/${e.id}`,
          children: [
            f.jsx("img", { src: e.img, alt: e.title }),
            f.jsxs("div", {
              className: "sneaker__cardText",
              children: [
                f.jsx("h2", {
                  className: "sneaker__cardTitle",
                  children: e.title,
                }),
                f.jsx("div", {
                  className: "sneaker__cardPrice",
                  children: f.jsxs("span", { children: [e.price, "₽"] }),
                }),
              ],
            }),
          ],
        }),
      }),
    })
  );
}
const Bu = "/assets/1-Bp4p4hTe.png",
  Kt = "/assets/2-ChiOcW1B.png",
  vm = "/assets/3-0JsPrHgG.png",
  al = [
    { id: 1, title: "Nike Air Jordan", price: "6299", img: Bu },
    { id: 2, title: "Air Jordan 5 x DJ Khaled", price: "7999", img: Kt },
    { id: 3, title: "Air Jordan 2 Mid", price: "9500", img: vm },
    { id: 4, title: "Nike Air Max", price: "6899", img: Bu },
    { id: 5, title: "Nike Air Force 1", price: "8599", img: Kt },
    { id: 6, title: "Dior B23", price: "14999", img: vm },
    { id: 7, title: "Zara Casual", price: "8600", img: Bu },
    { id: 8, title: "Adidas Ultraboost", price: "7899", img: Kt },
    { id: 9, title: "Adidas Ultraboost", price: "15999", img: Kt },
    { id: 10, title: "Adidas Ultraboost", price: "11599", img: Kt },
    { id: 11, title: "Adidas Ultraboost", price: "8499", img: Kt },
    { id: 12, title: "Adidas Ultraboost", price: "8999", img: Kt },
    { id: 13, title: "Adidas Ultraboost", price: "9899", img: Kt },
    { id: 14, title: "Adidas Ultraboost", price: "6799", img: Kt },
    { id: 15, title: "Adidas Ultraboost", price: "14999", img: Kt },
  ],
  ym = ["air jordan", "nike", "dior", "zara", "adidas"];
class U3 extends R.Component {
  constructor(n) {
    super(n);
    Wo(this, "handleResize", () => {
      this.setState({ isMobile: window.innerWidth <= 765 });
    });
    Wo(this, "filterSneakers", (n) => {
      const r = al.filter((i) => i.title.toLowerCase().includes(n));
      this.setState({ filteredSneakers: r, activeBrand: n });
    });
    Wo(this, "handleSelectChange", (n) => {
      const r = n.target.value;
      this.filterSneakers(r);
    });
    const r = "air jordan";
    this.state = {
      filteredSneakers: al.filter((i) => i.title.toLowerCase().includes(r)),
      activeBrand: r,
      isMobile: window.innerWidth <= 768,
    };
  }
  componentDidMount() {
    Wt.init(), window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  render() {
    const { activeBrand: n, filteredSneakers: r, isMobile: i } = this.state;
    return f.jsx(f.Fragment, {
      children: f.jsx("section", {
        className: "sneaker",
        children: f.jsxs(De, {
          className: "sneaker__container",
          children: [
            f.jsxs("div", {
              className: "sneaker__text",
              "data-aos": "fade-up",
              children: [
                f.jsx("h1", { children: "Browse our best collections" }),
                f.jsx("p", {
                  children:
                    "Lorem ipsum dolor sit amet consectetur. Est eros in commodo pellentesque neque tempus imperdiet enim a. Sit morbi convallis suscipit vitae lacus vitae id urna pharetra.",
                }),
                i
                  ? f.jsx("select", {
                      className: "sneaker__select",
                      value: n,
                      onChange: this.handleSelectChange,
                      children: ym.map((s) =>
                        f.jsx("option", { value: s, children: s }, s)
                      ),
                    })
                  : f.jsx("nav", {
                      className: "sneaker__nav",
                      children: f.jsx("ol", {
                        children: ym.map((s) =>
                          f.jsx(
                            "li",
                            {
                              className: `${n === s ? "active" : ""}`,
                              onClick: () => this.filterSneakers(s),
                              children: s,
                            },
                            s
                          )
                        ),
                      }),
                    }),
              ],
            }),
            f.jsx(Jr, {
              className: "sneaker__row",
              children: r.slice(0, 3).map((s) => f.jsx(_o, { ...s }, s.id)),
            }),
            f.jsx("div", {
              className: "sneaker__button",
              children: f.jsx("button", {
                className: "sneaker__btn",
                children: "View all",
              }),
            }),
          ],
        }),
      }),
    });
  }
}
class z3 extends R.Component {
  render() {
    return f.jsx("section", {
      className: "promoslider",
      children: f.jsx("span", {
        className: "promoslider__text",
        children: "jUST DO IT",
      }),
    });
  }
}
class $3 extends R.Component {
  render() {
    return f.jsxs(f.Fragment, {
      children: [f.jsx(R3, {}), f.jsx(F3, {}), f.jsx(U3, {}), f.jsx(z3, {})],
    });
  }
}
const Vu = "/assets/1-Bp4p4hTe.png",
  Yt = "/assets/2-ChiOcW1B.png",
  wm = "/assets/3-0JsPrHgG.png",
  mv = [
    {
      id: 1,
      title: "Nike Air Jordan 1",
      price: "6299",
      img: Vu,
      description:
        "Nike Air Jordan 1 — это классика, которая стоит в основе баскетбольной моды и уличного стиля. Созданные Майклом Джорданом в 1985 году, они остаются актуальными до сих пор благодаря своей уникальной форме, превосходной амортизации и стильному дизайну, который сочетается с любым нарядом.",
      reviews: [
        { name: "Иван", comment: "Отличные кроссовки, очень удобные!" },
        { name: "Анна", comment: "Прекрасный дизайн и амортизация." },
        { name: "Олег", comment: "Дороговато, но они того стоят." },
        { name: "Елена", comment: "Мой любимый бренд, супер удобные." },
      ],
    },
    {
      id: 2,
      title: "Nike Air Jordan 5",
      price: "7999",
      img: Yt,
      description:
        "Эти кроссовки — результат смелой коллаборации между Nike и знаменитым продюсером DJ Khaled. Nike Air Jordan 5 отличаются не только ярким дизайном, но и высококачественными материалами. Благодаря мягкой подошве и усиленной амортизации, они идеально подходят как для повседневной носки, так и для спортивных активностей.",
      reviews: [
        { name: "Дмитрий", comment: "Качество на высоте, ношу каждый день." },
        { name: "Мария", comment: "Очень стильные и комфортные, рекомендую!" },
        {
          name: "Сергей",
          comment: "Подошва очень мягкая, идеально для пробежек.",
        },
        { name: "Катерина", comment: "Чуть великоваты, но выглядят супер." },
      ],
    },
    {
      id: 3,
      title: "Nike Air Jordan 2 Mid",
      price: "9500",
      img: wm,
      description:
        "Nike Air Jordan 2 Mid — это сочетание элегантности и спорта. С их высококачественной кожаной отделкой и оригинальной подошвой, они идеально подходят для тех, кто ценит как комфорт, так и внешний вид. Эти кроссовки также обеспечивают отличную поддержку стопы во время движения, делая их незаменимыми в повседневной жизни.",
      reviews: [
        { name: "Максим", comment: "Очень качественные и стильные." },
        { name: "Людмила", comment: "Дорого, но дизайн потрясающий." },
        {
          name: "Алексей",
          comment: "Не подошли по размеру, но качество супер.",
        },
        { name: "Екатерина", comment: "Идеальны для повседневной носки." },
      ],
    },
    {
      id: 4,
      title: "Nike Air Max 90",
      price: "6899",
      img: Vu,
      description:
        "Nike Air Max 90 — это настоящая икона среди кроссовок. С момента своего выпуска в 1990 году, эта модель была любимой как среди спортсменов, так и среди любителей уличной моды. Благодаря технологии Air Max, они обеспечивают отличную амортизацию и комфорт в течение всего дня.",
      reviews: [
        {
          name: "Виктор",
          comment: "Отличный выбор для повседневного использования.",
        },
        {
          name: "Татьяна",
          comment: "Очень удобные, даже для долгих прогулок.",
        },
        {
          name: "Григорий",
          comment:
            "Немного жестковаты вначале, но со временем становятся удобными.",
        },
        { name: "Алёна", comment: "Моя новая любовь! Стильные и практичные." },
      ],
    },
    {
      id: 5,
      title: "Nike Air Force 1",
      price: "8599",
      img: Yt,
      description:
        "Nike Air Force 1 — это кроссовки, которые изменили мир баскетбольной обуви. Они оснащены мягкой и гибкой подошвой, которая обеспечивает превосходную амортизацию. Их минималистичный дизайн делает эту модель идеальной для создания различных образов, как на спортивной площадке, так и в повседневной жизни.",
      reviews: [
        {
          name: "Константин",
          comment: "Классика, которую стоит иметь в гардеробе.",
        },
        { name: "Евгения", comment: "Очень мягкие и удобные." },
        {
          name: "Денис",
          comment: "Цвет быстро теряет яркость, но всё равно доволен.",
        },
        { name: "Ольга", comment: "Отлично подходят для активного отдыха." },
      ],
    },
    {
      id: 6,
      title: "Dior B23",
      price: "14999",
      img: wm,
      description:
        "Dior B23 — это символ роскоши и современного дизайна. Эти кроссовки отличаются элегантной комбинацией прозрачных материалов и текстиля с фирменным принтом Dior. Они не только стильные, но и комфортные, благодаря мягкой подошве и поддержке стопы.",
      reviews: [
        { name: "Артур", comment: "Шикарные кроссовки, привлекают внимание." },
        { name: "Юлия", comment: "Купила мужу, он в восторге!" },
        { name: "Роман", comment: "Очень удобные и стильные, хотя и дорогие." },
        {
          name: "Ирина",
          comment: "Мягкие, но требуют ухода из-за материалов.",
        },
      ],
    },
    {
      id: 7,
      title: "Zara Casual",
      price: "8600",
      img: Vu,
      description:
        "Zara Casual — идеальные кроссовки для тех, кто ценит минимализм и удобство. Эти кроссовки отлично подходят как для повседневной носки, так и для прогулок. Легкие, с удобной стелькой, они обеспечивают комфорт на протяжении всего дня.",
      reviews: [
        {
          name: "Александр",
          comment: "Для повседневной носки отлично подходят.",
        },
        { name: "Оксана", comment: "Простые, но очень комфортные." },
        { name: "Павел", comment: "Не самые прочные, но выглядят хорошо." },
        {
          name: "Наталья",
          comment: "Лёгкие и дышащие, хорошо подходят для лета.",
        },
      ],
    },
    {
      id: 8,
      title: "Adidas Ultraboost 21",
      price: "7899",
      img: Yt,
      description:
        "Adidas Ultraboost 21 — это идеальные беговые кроссовки, которые объединяют в себе комфорт и высокие технологии. С их уникальной системой амортизации Boost, они обеспечивают отличную отдачу энергии с каждым шагом. Эти кроссовки подойдут как для профессиональных спортсменов, так и для тех, кто просто любит активный образ жизни.",
      reviews: [
        { name: "Кирилл", comment: "Отлично держатся на ноге, очень доволен." },
        {
          name: "Ольга",
          comment: "Идеальны для пробежек, отличная амортизация.",
        },
        { name: "Николай", comment: "Покупал для зала, удобные и лёгкие." },
        {
          name: "Марина",
          comment: "Немного скользят на мокром асфальте, но в целом отличные.",
        },
      ],
    },
    {
      id: 9,
      title: "Adidas Ultraboost 22",
      price: "15999",
      img: Yt,
      description:
        "Обновленная версия кроссовок Ultraboost 22 предлагает еще больше комфорта и поддержки для ног. Эти кроссовки оснащены улучшенной подошвой Boost и уникальной конструкцией, которая идеально адаптируется под форму стопы. Идеальны для долгих пробежек и активных дней.",
      reviews: [
        {
          name: "Алексей",
          comment: "Превосходный выбор для длительных пробежек.",
        },
        { name: "Наталья", comment: "Амортизация действительно на высоте." },
        { name: "Владимир", comment: "Лучшие кроссовки для занятий бегом." },
        {
          name: "Полина",
          comment: "Влюбилась в них с первого взгляда и не жалею!",
        },
      ],
    },
    {
      id: 10,
      title: "Adidas Ultraboost 20",
      price: "11599",
      img: Yt,
      description:
        "Adidas Ultraboost 20 сочетают в себе прогрессивные технологии и инновационный дизайн. Их эргономичная форма, усиленная подошва и текстильный верх делают эти кроссовки идеальными как для спорта, так и для повседневного использования.",
      reviews: [
        { name: "Михаил", comment: "Подошва мягкая, но хорошо держит форму." },
        { name: "Светлана", comment: "Лёгкие, идеальны для занятий спортом." },
        {
          name: "Дмитрий",
          comment: "Слишком тёплые для лета, но для зимы отлично.",
        },
        { name: "Алина", comment: "Современный дизайн и удобство." },
      ],
    },
    {
      id: 11,
      title: "Adidas Ultraboost DNA",
      price: "8499",
      img: Yt,
      description:
        "Adidas Ultraboost DNA — это гибридная модель, которая объединила в себе лучшее из линейки Ultraboost. Эти кроссовки обеспечивают исключительную амортизацию благодаря технологии Boost, а их стильный дизайн делает их универсальными как для спорта, так и для повседневной носки.",
      reviews: [
        { name: "Петр", comment: "Очень комфортные, ношу целый день." },
        { name: "Елена", comment: "Отличные кроссовки, хорошо сидят на ноге." },
        { name: "Игорь", comment: "Амортизация просто огонь, рекомендую!" },
        { name: "Мария", comment: "Хорошо смотрятся с любой одеждой." },
      ],
    },
    {
      id: 12,
      title: "Adidas Ultraboost Parley",
      price: "8999",
      img: Yt,
      description:
        "Adidas Ultraboost Parley созданы из переработанных океанских материалов, объединяя экологичность и передовые технологии. Эти кроссовки поддерживают природные ресурсы и обеспечивают высокий комфорт, оставаясь при этом стильными и современными.",
      reviews: [
        {
          name: "Виктория",
          comment: "Экологичность плюс удобство — лучшее сочетание.",
        },
        {
          name: "Федор",
          comment: "Поддерживаю идею переработки, качество отличное.",
        },
        {
          name: "Елизавета",
          comment: "Лёгкие и стильные, экологический бонус.",
        },
        {
          name: "Артем",
          comment: "Чуть дороже обычных моделей, но экологичность того стоит.",
        },
      ],
    },
    {
      id: 13,
      title: "Adidas Ultraboost S&L",
      price: "9899",
      img: Yt,
      description:
        "Adidas Ultraboost S&L — это стильная и удобная модель для тех, кто ценит как внешний вид, так и функциональность. Технология Boost гарантирует легкость и поддержку на протяжении всего дня, делая их идеальным выбором для повседневной носки.",
      reviews: [
        { name: "Андрей", comment: "Идеальны для бега, очень удобные." },
        { name: "Дарья", comment: "Смотрятся круто и чувствуются так же." },
        {
          name: "Станислав",
          comment: "Хорошо держат ногу при активных тренировках.",
        },
        {
          name: "Людмила",
          comment: "Для спорта и прогулок — отличный вариант.",
        },
      ],
    },
    {
      id: 14,
      title: "Adidas Ultraboost 19",
      price: "6799",
      img: Yt,
      description:
        "Adidas Ultraboost 19 — это сочетание минимализма и функциональности. С их легким весом и усиленной подошвой Boost, они предлагают отличную амортизацию и максимальный комфорт для повседневных пробежек и прогулок.",
      reviews: [
        {
          name: "Александр",
          comment: "Очень лёгкие, бегать в них одно удовольствие.",
        },
        { name: "Ирина", comment: "Подошва мягкая, но амортизация на высоте." },
        { name: "Роман", comment: "Идеальны для летних пробежек." },
        { name: "Евгений", comment: "Хорошая вентиляция, не потеют ноги." },
      ],
    },
    {
      id: 15,
      title: "Adidas Ultraboost Clima",
      price: "14999",
      img: Yt,
      description:
        "Adidas Ultraboost Clima — это инновационные кроссовки, разработанные с учетом климатических условий. Они оснащены дышащим верхом и технологией Boost, что делает их идеальными для бега в любую погоду, обеспечивая комфорт и защиту.",
      reviews: [
        { name: "Максим", comment: "Отличный выбор для бега в жару." },
        {
          name: "Анна",
          comment: "Технология Clima реально работает, ноги не потеют.",
        },
        { name: "Никита", comment: "Хорошая амортизация и дышащий материал." },
        { name: "Олеся", comment: "Дорогие, но комфорт превыше всего." },
      ],
    },
  ];
function gv() {
  return (
    Wt.init({ duration: 1e3 }),
    f.jsx(f.Fragment, {
      children: f.jsxs("section", {
        className: "slideee",
        "data-aos": "fade-up",
        children: [
          f.jsx("div", {
            className: "SlideBarCatalog",
            children: f.jsxs("div", {
              className: "SlideBarCatalog__brands",
              children: [
                f.jsx("h1", {
                  className: "SlideBarCatalog__title",
                  children: "Бренд:",
                }),
                f.jsxs("div", {
                  className: "SlideBarCatalog__filterList",
                  children: [
                    f.jsxs("div", {
                      className: "SlideBarCatalog__filterItem",
                      children: [
                        f.jsx("input", {
                          type: "checkbox",
                          readonly: !0,
                          name: "Nike",
                          className: "SlideBarCatalog__filterItemChecbox",
                        }),
                        f.jsx("label", { for: "nike", children: "Nike" }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "SlideBarCatalog__filterItem",
                      children: [
                        f.jsx("input", {
                          type: "checkbox",
                          readonly: !0,
                          name: "Osiris",
                          className: "SlideBarCatalog__filterItemChecbox",
                        }),
                        f.jsx("label", { for: "Osiris", children: "Osiris" }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "SlideBarCatalog__filterItem",
                      children: [
                        f.jsx("input", {
                          type: "checkbox",
                          readonly: !0,
                          name: "Adidas",
                          className: "SlideBarCatalog__filterItemChecbox",
                        }),
                        f.jsx("label", { for: "Adidas", children: "Adidas" }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "SlideBarCatalog__filterItem",
                      children: [
                        f.jsx("input", {
                          type: "checkbox",
                          readonly: !0,
                          name: "Puma",
                          className: "SlideBarCatalog__filterItemChecbox",
                        }),
                        f.jsx("label", { for: "Puma", children: "Puma" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          f.jsx("div", {
            className: "SlideBarCatalog",
            children: f.jsxs("div", {
              className: "SlideBarCatalog__brands",
              children: [
                f.jsx("h1", {
                  className: "SlideBarCatalog__title",
                  children: "Модель:",
                }),
                f.jsxs("div", {
                  className: "SlideBarCatalog__filterList",
                  children: [
                    f.jsxs("div", {
                      className: "SlideBarCatalog__filterItem",
                      children: [
                        f.jsx("input", {
                          type: "checkbox",
                          readonly: !0,
                          name: "Jordan",
                          className: "SlideBarCatalog__filterItemChecbox",
                        }),
                        f.jsx("label", { for: "Jordan", children: "Jordan" }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "SlideBarCatalog__filterItem",
                      children: [
                        f.jsx("input", {
                          type: "checkbox",
                          readonly: !0,
                          name: "Dunk",
                          className: "SlideBarCatalog__filterItemChecbox",
                        }),
                        f.jsx("label", { for: "Dunk", children: "Dunk" }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "SlideBarCatalog__filterItem",
                      children: [
                        f.jsx("input", {
                          type: "checkbox",
                          readonly: !0,
                          name: "Air Max",
                          className: "SlideBarCatalog__filterItemChecbox",
                        }),
                        f.jsx("label", { for: "Air Max", children: "Air Max" }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "SlideBarCatalog__filterItem",
                      children: [
                        f.jsx("input", {
                          type: "checkbox",
                          readonly: !0,
                          name: "Air Max",
                          className: "SlideBarCatalog__filterItemChecbox",
                        }),
                        f.jsx("label", { for: "Air Max", children: "Air Max" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          f.jsx("div", {
            className: "SlideBarCatalog",
            children: f.jsxs("div", {
              className: "SlideBarCatalog__brands",
              children: [
                f.jsx("h1", {
                  className: "SlideBarCatalog__title",
                  children: "Размер:",
                }),
                f.jsxs("div", {
                  className: "SlideBarCatalog__filterList",
                  children: [
                    f.jsxs("div", {
                      className: "SlideBarCatalog__filterItem",
                      children: [
                        f.jsx("input", {
                          type: "checkbox",
                          readonly: !0,
                          name: "41",
                          className: "SlideBarCatalog__filterItemChecbox",
                        }),
                        f.jsx("label", { for: "41", children: "41" }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "SlideBarCatalog__filterItem",
                      children: [
                        f.jsx("input", {
                          type: "checkbox",
                          readonly: !0,
                          name: "42",
                          className: "SlideBarCatalog__filterItemChecbox",
                        }),
                        f.jsx("label", { for: "42", children: "42" }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "SlideBarCatalog__filterItem",
                      children: [
                        f.jsx("input", {
                          type: "checkbox",
                          readonly: !0,
                          name: "43",
                          className: "SlideBarCatalog__filterItemChecbox",
                        }),
                        f.jsx("label", { for: "43", children: "43" }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "SlideBarCatalog__filterItem",
                      children: [
                        f.jsx("input", {
                          type: "checkbox",
                          readonly: !0,
                          name: "44",
                          className: "SlideBarCatalog__filterItemChecbox",
                        }),
                        f.jsx("label", { for: "44", children: "44" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    })
  );
}
function B3() {
  return (
    Wt.init({ duration: 1e3 }),
    f.jsx(f.Fragment, {
      children: f.jsxs("section", {
        className: "sneaker__cnt",
        children: [
          f.jsx(gv, {}),
          f.jsxs("div", {
            className: "sneaker__CardCont",
            children: [
              f.jsx("div", {
                className: "sneaker__PriceFiltr",
                "data-aos": "fade-up",
                children: f.jsxs("span", {
                  children: [
                    "Сортировка по: цена",
                    " ",
                    f.jsxs("select", {
                      name: "",
                      id: "",
                      children: [
                        f.jsx("option", { value: "", children: "возрастанию" }),
                        f.jsx("option", { value: "", children: "убыванию" }),
                      ],
                    }),
                  ],
                }),
              }),
              f.jsx(Jr, {
                className: "sneaker__row",
                children: mv.map((e) =>
                  f.jsx(
                    _o,
                    { id: e.id, img: e.img, title: e.title, price: e.price },
                    e.id
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function V3() {
  return f.jsx("div", {
    className: "menPage",
    children: f.jsx("h1", {
      className: "menPage__title",
      "data-aos": "fade-up",
      children: "MEN SNEAKERS",
    }),
  });
}
class H3 extends R.Component {
  render() {
    return f.jsx(f.Fragment, {
      children: f.jsx(De, {
        children: f.jsxs("div", {
          className: "men",
          children: [f.jsx(V3, {}), f.jsx(B3, {})],
        }),
      }),
    });
  }
}
const Hu = "/assets/1-Bp4p4hTe.png",
  qt = "/assets/2-ChiOcW1B.png",
  _m = "/assets/3-0JsPrHgG.png",
  vv = [
    {
      id: 16,
      title: "Nike Air Jordan 1",
      price: "6299",
      img: Hu,
      description:
        "Nike Air Jordan 1 — это классика, которая стоит в основе баскетбольной моды и уличного стиля. Созданные Майклом Джорданом в 1985 году, они остаются актуальными до сих пор благодаря своей уникальной форме, превосходной амортизации и стильному дизайну, который сочетается с любым нарядом.",
      reviews: [
        { name: "Иван", comment: "Отличные кроссовки, очень удобные!" },
        { name: "Анна", comment: "Прекрасный дизайн и амортизация." },
        { name: "Олег", comment: "Дороговато, но они того стоят." },
        { name: "Елена", comment: "Мой любимый бренд, супер удобные." },
      ],
    },
    {
      id: 17,
      title: "Nike Air Jordan 5",
      price: "7999",
      img: qt,
      description:
        "Эти кроссовки — результат смелой коллаборации между Nike и знаменитым продюсером DJ Khaled. Nike Air Jordan 5 отличаются не только ярким дизайном, но и высококачественными материалами. Благодаря мягкой подошве и усиленной амортизации, они идеально подходят как для повседневной носки, так и для спортивных активностей.",
      reviews: [
        { name: "Дмитрий", comment: "Качество на высоте, ношу каждый день." },
        { name: "Мария", comment: "Очень стильные и комфортные, рекомендую!" },
        {
          name: "Сергей",
          comment: "Подошва очень мягкая, идеально для пробежек.",
        },
        { name: "Катерина", comment: "Чуть великоваты, но выглядят супер." },
      ],
    },
    {
      id: 18,
      title: "Nike Air Jordan 2 Mid",
      price: "9500",
      img: _m,
      description:
        "Nike Air Jordan 2 Mid — это сочетание элегантности и спорта. С их высококачественной кожаной отделкой и оригинальной подошвой, они идеально подходят для тех, кто ценит как комфорт, так и внешний вид. Эти кроссовки также обеспечивают отличную поддержку стопы во время движения, делая их незаменимыми в повседневной жизни.",
      reviews: [
        { name: "Максим", comment: "Очень качественные и стильные." },
        { name: "Людмила", comment: "Дорого, но дизайн потрясающий." },
        {
          name: "Алексей",
          comment: "Не подошли по размеру, но качество супер.",
        },
        { name: "Екатерина", comment: "Идеальны для повседневной носки." },
      ],
    },
    {
      id: 19,
      title: "Nike Air Max 90",
      price: "6899",
      img: Hu,
      description:
        "Nike Air Max 90 — это настоящая икона среди кроссовок. С момента своего выпуска в 1990 году, эта модель была любимой как среди спортсменов, так и среди любителей уличной моды. Благодаря технологии Air Max, они обеспечивают отличную амортизацию и комфорт в течение всего дня.",
      reviews: [
        {
          name: "Виктор",
          comment: "Отличный выбор для повседневного использования.",
        },
        {
          name: "Татьяна",
          comment: "Очень удобные, даже для долгих прогулок.",
        },
        {
          name: "Григорий",
          comment:
            "Немного жестковаты вначале, но со временем становятся удобными.",
        },
        { name: "Алёна", comment: "Моя новая любовь! Стильные и практичные." },
      ],
    },
    {
      id: 20,
      title: "Nike Air Force 1",
      price: "8599",
      img: qt,
      description:
        "Nike Air Force 1 — это кроссовки, которые изменили мир баскетбольной обуви. Они оснащены мягкой и гибкой подошвой, которая обеспечивает превосходную амортизацию. Их минималистичный дизайн делает эту модель идеальной для создания различных образов, как на спортивной площадке, так и в повседневной жизни.",
      reviews: [
        {
          name: "Константин",
          comment: "Классика, которую стоит иметь в гардеробе.",
        },
        { name: "Евгения", comment: "Очень мягкие и удобные." },
        {
          name: "Денис",
          comment: "Цвет быстро теряет яркость, но всё равно доволен.",
        },
        { name: "Ольга", comment: "Отлично подходят для активного отдыха." },
      ],
    },
    {
      id: 21,
      title: "Dior B23",
      price: "14999",
      img: _m,
      description:
        "Dior B23 — это символ роскоши и современного дизайна. Эти кроссовки отличаются элегантной комбинацией прозрачных материалов и текстиля с фирменным принтом Dior. Они не только стильные, но и комфортные, благодаря мягкой подошве и поддержке стопы.",
      reviews: [
        { name: "Артур", comment: "Шикарные кроссовки, привлекают внимание." },
        { name: "Юлия", comment: "Купила мужу, он в восторге!" },
        { name: "Роман", comment: "Очень удобные и стильные, хотя и дорогие." },
        {
          name: "Ирина",
          comment: "Мягкие, но требуют ухода из-за материалов.",
        },
      ],
    },
    {
      id: 22,
      title: "Zara Casual",
      price: "8600",
      img: Hu,
      description:
        "Zara Casual — идеальные кроссовки для тех, кто ценит минимализм и удобство. Эти кроссовки отлично подходят как для повседневной носки, так и для прогулок. Легкие, с удобной стелькой, они обеспечивают комфорт на протяжении всего дня.",
      reviews: [
        {
          name: "Александр",
          comment: "Для повседневной носки отлично подходят.",
        },
        { name: "Оксана", comment: "Простые, но очень комфортные." },
        { name: "Павел", comment: "Не самые прочные, но выглядят хорошо." },
        {
          name: "Наталья",
          comment: "Лёгкие и дышащие, хорошо подходят для лета.",
        },
      ],
    },
    {
      id: 23,
      title: "Adidas Ultraboost 21",
      price: "7899",
      img: qt,
      description:
        "Adidas Ultraboost 21 — это идеальные беговые кроссовки, которые объединяют в себе комфорт и высокие технологии. С их уникальной системой амортизации Boost, они обеспечивают отличную отдачу энергии с каждым шагом. Эти кроссовки подойдут как для профессиональных спортсменов, так и для тех, кто просто любит активный образ жизни.",
      reviews: [
        { name: "Кирилл", comment: "Отлично держатся на ноге, очень доволен." },
        {
          name: "Ольга",
          comment: "Идеальны для пробежек, отличная амортизация.",
        },
        { name: "Николай", comment: "Покупал для зала, удобные и лёгкие." },
        {
          name: "Марина",
          comment: "Немного скользят на мокром асфальте, но в целом отличные.",
        },
      ],
    },
    {
      id: 24,
      title: "Adidas Ultraboost 22",
      price: "15999",
      img: qt,
      description:
        "Обновленная версия кроссовок Ultraboost 22 предлагает еще больше комфорта и поддержки для ног. Эти кроссовки оснащены улучшенной подошвой Boost и уникальной конструкцией, которая идеально адаптируется под форму стопы. Идеальны для долгих пробежек и активных дней.",
      reviews: [
        {
          name: "Алексей",
          comment: "Превосходный выбор для длительных пробежек.",
        },
        { name: "Наталья", comment: "Амортизация действительно на высоте." },
        { name: "Владимир", comment: "Лучшие кроссовки для занятий бегом." },
        {
          name: "Полина",
          comment: "Влюбилась в них с первого взгляда и не жалею!",
        },
      ],
    },
    {
      id: 25,
      title: "Adidas Ultraboost 20",
      price: "11599",
      img: qt,
      description:
        "Adidas Ultraboost 20 сочетают в себе прогрессивные технологии и инновационный дизайн. Их эргономичная форма, усиленная подошва и текстильный верх делают эти кроссовки идеальными как для спорта, так и для повседневного использования.",
      reviews: [
        { name: "Михаил", comment: "Подошва мягкая, но хорошо держит форму." },
        { name: "Светлана", comment: "Лёгкие, идеальны для занятий спортом." },
        {
          name: "Дмитрий",
          comment: "Слишком тёплые для лета, но для зимы отлично.",
        },
        { name: "Алина", comment: "Современный дизайн и удобство." },
      ],
    },
    {
      id: 26,
      title: "Adidas Ultraboost DNA",
      price: "8499",
      img: qt,
      description:
        "Adidas Ultraboost DNA — это гибридная модель, которая объединила в себе лучшее из линейки Ultraboost. Эти кроссовки обеспечивают исключительную амортизацию благодаря технологии Boost, а их стильный дизайн делает их универсальными как для спорта, так и для повседневной носки.",
      reviews: [
        { name: "Петр", comment: "Очень комфортные, ношу целый день." },
        { name: "Елена", comment: "Отличные кроссовки, хорошо сидят на ноге." },
        { name: "Игорь", comment: "Амортизация просто огонь, рекомендую!" },
        { name: "Мария", comment: "Хорошо смотрятся с любой одеждой." },
      ],
    },
    {
      id: 27,
      title: "Adidas Ultraboost Parley",
      price: "8999",
      img: qt,
      description:
        "Adidas Ultraboost Parley созданы из переработанных океанских материалов, объединяя экологичность и передовые технологии. Эти кроссовки поддерживают природные ресурсы и обеспечивают высокий комфорт, оставаясь при этом стильными и современными.",
      reviews: [
        {
          name: "Виктория",
          comment: "Экологичность плюс удобство — лучшее сочетание.",
        },
        {
          name: "Федор",
          comment: "Поддерживаю идею переработки, качество отличное.",
        },
        {
          name: "Елизавета",
          comment: "Лёгкие и стильные, экологический бонус.",
        },
        {
          name: "Артем",
          comment: "Чуть дороже обычных моделей, но экологичность того стоит.",
        },
      ],
    },
    {
      id: 28,
      title: "Adidas Ultraboost S&L",
      price: "9899",
      img: qt,
      description:
        "Adidas Ultraboost S&L — это стильная и удобная модель для тех, кто ценит как внешний вид, так и функциональность. Технология Boost гарантирует легкость и поддержку на протяжении всего дня, делая их идеальным выбором для повседневной носки.",
      reviews: [
        { name: "Андрей", comment: "Идеальны для бега, очень удобные." },
        { name: "Дарья", comment: "Смотрятся круто и чувствуются так же." },
        {
          name: "Станислав",
          comment: "Хорошо держат ногу при активных тренировках.",
        },
        {
          name: "Людмила",
          comment: "Для спорта и прогулок — отличный вариант.",
        },
      ],
    },
    {
      id: 29,
      title: "Adidas Ultraboost 19",
      price: "6799",
      img: qt,
      description:
        "Adidas Ultraboost 19 — это сочетание минимализма и функциональности. С их легким весом и усиленной подошвой Boost, они предлагают отличную амортизацию и максимальный комфорт для повседневных пробежек и прогулок.",
      reviews: [
        {
          name: "Александр",
          comment: "Очень лёгкие, бегать в них одно удовольствие.",
        },
        { name: "Ирина", comment: "Подошва мягкая, но амортизация на высоте." },
        { name: "Роман", comment: "Идеальны для летних пробежек." },
        { name: "Евгений", comment: "Хорошая вентиляция, не потеют ноги." },
      ],
    },
    {
      id: 30,
      title: "Adidas Ultraboost Clima",
      price: "14999",
      img: qt,
      description:
        "Adidas Ultraboost Clima — это инновационные кроссовки, разработанные с учетом климатических условий. Они оснащены дышащим верхом и технологией Boost, что делает их идеальными для бега в любую погоду, обеспечивая комфорт и защиту.",
      reviews: [
        { name: "Максим", comment: "Отличный выбор для бега в жару." },
        {
          name: "Анна",
          comment: "Технология Clima реально работает, ноги не потеют.",
        },
        { name: "Никита", comment: "Хорошая амортизация и дышащий материал." },
        { name: "Олеся", comment: "Дорогие, но комфорт превыше всего." },
      ],
    },
  ];
class W3 extends R.Component {
  render() {
    return (
      Wt.init({ duration: 1e3 }),
      f.jsx(f.Fragment, {
        children: f.jsxs("section", {
          className: "sneaker__cnt",
          children: [
            f.jsx(gv, {}),
            f.jsxs("div", {
              className: "sneaker__CardCont",
              children: [
                f.jsx("div", {
                  className: "sneaker__PriceFiltr",
                  "data-aos": "fade-up",
                  children: f.jsxs("span", {
                    children: [
                      "Сортировка по: цена",
                      " ",
                      f.jsxs("select", {
                        name: "",
                        id: "",
                        children: [
                          f.jsx("option", {
                            value: "",
                            children: "возрастанию",
                          }),
                          f.jsx("option", { value: "", children: "убыванию" }),
                        ],
                      }),
                    ],
                  }),
                }),
                f.jsx(Jr, {
                  className: "sneaker__row",
                  children: vv.map((t) =>
                    f.jsx(
                      _o,
                      { id: t.id, img: t.img, title: t.title, price: t.price },
                      t.id
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      })
    );
  }
}
function G3() {
  return (
    Wt.init({ duration: 1e3 }),
    f.jsx("div", {
      className: "menPage",
      children: f.jsx("h1", {
        className: "menPage__title",
        "data-aos": "fade-up",
        children: "WOMEN SNEAKERS",
      }),
    })
  );
}
class K3 extends R.Component {
  render() {
    return f.jsx(f.Fragment, {
      children: f.jsx(De, {
        children: f.jsxs("div", {
          className: "men",
          children: [f.jsx(G3, {}), f.jsx(W3, {})],
        }),
      }),
    });
  }
}
function Y3() {
  const [e, t] = R.useState([]),
    [n, r] = R.useState(0),
    [i, s] = R.useState([]),
    o = wo();
  R.useEffect(() => {
    const c = JSON.parse(localStorage.getItem("cart")) || [];
    t(c);
    const h = c.reduce((m, g) => m + parseFloat(g.price.replace(/\D/g, "")), 0);
    r(h);
  }, []);
  const l = (c) => {
      s([...i, c]),
        setTimeout(() => {
          const h = e.filter((g, y) => y !== c);
          localStorage.setItem("cart", JSON.stringify(h)), t(h);
          const m = h.reduce(
            (g, y) => g + parseFloat(y.price.replace(/\D/g, "")),
            0
          );
          r(m), s(i.filter((g) => g !== c));
        }, 500);
    },
    u = () => {
      o("/checkout", { state: { cartItems: e, totalPrice: n } });
    };
  return f.jsx(f.Fragment, {
    children:
      e.length === 0
        ? f.jsxs("section", {
            className: "basketCard__emty",
            children: [
              f.jsx("span", { children: "Ваша корзина пуста" }),
              f.jsx(he, {
                to: "home",
                children: f.jsx("button", { children: "Перейти к покупкам" }),
              }),
            ],
          })
        : f.jsxs(f.Fragment, {
            children: [
              f.jsx("h1", {
                className: "basketItem__title",
                children: "Корзина",
              }),
              e.map((c, h) =>
                f.jsx(
                  "div",
                  {
                    className: `col-xxl-6 basketCard__container ${
                      i.includes(h) ? "basketCard__removing" : ""
                    }`,
                    children: f.jsxs("section", {
                      className: "basketCard",
                      children: [
                        f.jsxs("div", {
                          className: "basketCard__overlay",
                          children: [
                            f.jsx("img", {
                              src: c.img,
                              alt: c.title,
                              className: "basketCard__image",
                            }),
                            f.jsxs("div", {
                              className: "basketCard__titleBl",
                              children: [
                                f.jsx("div", {
                                  className: "basketCard__title",
                                  children: c.title,
                                }),
                                f.jsxs("div", {
                                  className: "basketCard__size",
                                  children: [" ", c.size],
                                }),
                              ],
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "basketCard__priceBlock",
                          children: [
                            f.jsxs("div", {
                              className: "basketCard__price",
                              children: [c.price, "₽"],
                            }),
                            f.jsx("div", {
                              onClick: () => l(h),
                              className: "basketCard__removeButton",
                              children: f.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                width: "19",
                                height: "19",
                                fill: "rgba(255,255,255,1)",
                                children: f.jsx("path", {
                                  d: "M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  h
                )
              ),
              f.jsx("div", {
                className: "col-xxl-6",
                children: f.jsxs("section", {
                  className: "basketCardInfo",
                  children: [
                    f.jsx("div", {
                      className: "basketCardInfo__title",
                      children: "ИТОГО:",
                    }),
                    f.jsxs("div", {
                      className: "basketCardInfo__price",
                      children: [n, "₽"],
                    }),
                  ],
                }),
              }),
              f.jsx("div", {
                className: "col-xxl-6",
                children: f.jsx("button", {
                  className: "basketButton",
                  onClick: u,
                  children: "ПЕРЕЙТИ К ОФОРМЛЕНИЮ",
                }),
              }),
            ],
          }),
  });
}
function q3() {
  return f.jsx(f.Fragment, {
    children: f.jsx("section", {
      className: "basketItem",
      children: f.jsx(De, {
        className: "basketItem__container",
        children: f.jsx(Y3, {}),
      }),
    }),
  });
}
class X3 extends R.Component {
  render() {
    return f.jsx(f.Fragment, {
      children: f.jsx(De, { children: f.jsx(q3, {}) }),
    });
  }
}
const J3 = () => {
  const { pathname: e } = ln();
  return (
    R.useEffect(() => {
      window.scrollTo(0, 0);
    }, [e]),
    null
  );
};
var Sm = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const yv = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e.charCodeAt(r);
      i < 128
        ? (t[n++] = i)
        : i < 2048
        ? ((t[n++] = (i >> 6) | 192), (t[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < e.length &&
          (e.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
          (t[n++] = (i >> 18) | 240),
          (t[n++] = ((i >> 12) & 63) | 128),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128))
        : ((t[n++] = (i >> 12) | 224),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128));
    }
    return t;
  },
  Z3 = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const i = e[n++];
      if (i < 128) t[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = e[n++];
        t[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = e[n++],
          o = e[n++],
          l = e[n++],
          u =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (l & 63)) -
            65536;
        (t[r++] = String.fromCharCode(55296 + (u >> 10))),
          (t[r++] = String.fromCharCode(56320 + (u & 1023)));
      } else {
        const s = e[n++],
          o = e[n++];
        t[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63)
        );
      }
    }
    return t.join("");
  },
  wv = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < e.length; i += 3) {
        const s = e[i],
          o = i + 1 < e.length,
          l = o ? e[i + 1] : 0,
          u = i + 2 < e.length,
          c = u ? e[i + 2] : 0,
          h = s >> 2,
          m = ((s & 3) << 4) | (l >> 4);
        let g = ((l & 15) << 2) | (c >> 6),
          y = c & 63;
        u || ((y = 64), o || (g = 64)), r.push(n[h], n[m], n[g], n[y]);
      }
      return r.join("");
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(yv(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : Z3(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < e.length; ) {
        const s = n[e.charAt(i++)],
          l = i < e.length ? n[e.charAt(i)] : 0;
        ++i;
        const c = i < e.length ? n[e.charAt(i)] : 64;
        ++i;
        const m = i < e.length ? n[e.charAt(i)] : 64;
        if ((++i, s == null || l == null || c == null || m == null))
          throw new Q3();
        const g = (s << 2) | (l >> 4);
        if ((r.push(g), c !== 64)) {
          const y = ((l << 4) & 240) | (c >> 2);
          if ((r.push(y), m !== 64)) {
            const _ = ((c << 6) & 192) | m;
            r.push(_);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class Q3 extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const eS = function (e) {
    const t = yv(e);
    return wv.encodeByteArray(t, !0);
  },
  ll = function (e) {
    return eS(e).replace(/\./g, "");
  },
  _v = function (e) {
    try {
      return wv.decodeString(e, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tS() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nS = () => tS().__FIREBASE_DEFAULTS__,
  rS = () => {
    if (typeof process > "u" || typeof Sm > "u") return;
    const e = Sm.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  iS = () => {
    if (typeof document > "u") return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && _v(e[1]);
    return t && JSON.parse(t);
  },
  Af = () => {
    try {
      return nS() || rS() || iS();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  Sv = (e) => {
    var t, n;
    return (n =
      (t = Af()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e];
  },
  sS = (e) => {
    const t = Sv(e);
    if (!t) return;
    const n = t.lastIndexOf(":");
    if (n <= 0 || n + 1 === t.length)
      throw new Error(`Invalid host ${t} with no separate hostname and port!`);
    const r = parseInt(t.substring(n + 1), 10);
    return t[0] === "[" ? [t.substring(1, n - 1), r] : [t.substring(0, n), r];
  },
  Cv = () => {
    var e;
    return (e = Af()) === null || e === void 0 ? void 0 : e.config;
  },
  xv = (e) => {
    var t;
    return (t = Af()) === null || t === void 0 ? void 0 : t[`_${e}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oS {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        (this.resolve = t), (this.reject = n);
      }));
  }
  wrapCallback(t) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function aS(e, t) {
  if (e.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    );
  const n = { alg: "none", type: "JWT" },
    r = t || "demo-project",
    i = e.iat || 0,
    s = e.sub || e.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign(
    {
      iss: `https://securetoken.google.com/${r}`,
      aud: r,
      iat: i,
      exp: i + 3600,
      auth_time: i,
      sub: s,
      user_id: s,
      firebase: { sign_in_provider: "custom", identities: {} },
    },
    e
  );
  return [ll(JSON.stringify(n)), ll(JSON.stringify(o)), ""].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rt() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function lS() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())
  );
}
function uS() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function cS() {
  const e =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof e == "object" && e.id !== void 0;
}
function dS() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function fS() {
  const e = rt();
  return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function hS() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function pS() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          t(
            ((s = i.error) === null || s === void 0 ? void 0 : s.message) || ""
          );
        });
    } catch (n) {
      t(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mS = "FirebaseError";
class An extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = mS),
      Object.setPrototypeOf(this, An.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, So.prototype.create);
  }
}
class So {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${t}`,
      s = this.errors[t],
      o = s ? gS(s, r) : "Error",
      l = `${this.serviceName}: ${o} (${i}).`;
    return new An(i, l, r);
  }
}
function gS(e, t) {
  return e.replace(vS, (n, r) => {
    const i = t[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const vS = /\{\$([^}]+)}/g;
function yS(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function ul(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = e[i],
      o = t[i];
    if (Cm(s) && Cm(o)) {
      if (!ul(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function Cm(e) {
  return e !== null && typeof e == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Co(e) {
  const t = [];
  for (const [n, r] of Object.entries(e))
    Array.isArray(r)
      ? r.forEach((i) => {
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        })
      : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return t.length ? "&" + t.join("&") : "";
}
function xs(e) {
  const t = {};
  return (
    e
      .replace(/^\?/, "")
      .split("&")
      .forEach((r) => {
        if (r) {
          const [i, s] = r.split("=");
          t[decodeURIComponent(i)] = decodeURIComponent(s);
        }
      }),
    t
  );
}
function Es(e) {
  const t = e.indexOf("?");
  if (!t) return "";
  const n = e.indexOf("#", t);
  return e.substring(t, n > 0 ? n : void 0);
}
function wS(e, t) {
  const n = new _S(e, t);
  return n.subscribe.bind(n);
}
class _S {
  constructor(t, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          t(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(t) {
    this.forEachObserver((n) => {
      n.next(t);
    });
  }
  error(t) {
    this.forEachObserver((n) => {
      n.error(t);
    }),
      this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }),
      this.close();
  }
  subscribe(t, n, r) {
    let i;
    if (t === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    SS(t, ["next", "error", "complete"])
      ? (i = t)
      : (i = { next: t, error: n, complete: r }),
      i.next === void 0 && (i.next = Wu),
      i.error === void 0 && (i.error = Wu),
      i.complete === void 0 && (i.complete = Wu);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      s
    );
  }
  unsubscribeOne(t) {
    this.observers === void 0 ||
      this.observers[t] === void 0 ||
      (delete this.observers[t],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(t) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, t);
  }
  sendOne(t, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          n(this.observers[t]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(t) {
    this.finalized ||
      ((this.finalized = !0),
      t !== void 0 && (this.finalError = t),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function SS(e, t) {
  if (typeof e != "object" || e === null) return !1;
  for (const n of t) if (n in e && typeof e[n] == "function") return !0;
  return !1;
}
function Wu() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function un(e) {
  return e && e._delegate ? e._delegate : e;
}
class Vr {
  constructor(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Nr = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class CS {
  constructor(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new oS();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        t == null ? void 0 : t.identifier
      ),
      i =
        (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (ES(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Nr });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(t = Nr) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = Nr) {
    return this.instances.has(t);
  }
  getOptions(t = Nr) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const l = this.normalizeInstanceIdentifier(s);
      r === l && o.resolve(i);
    }
    return i;
  }
  onInit(t, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      s =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    s.add(t), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && t(o, i),
      () => {
        s.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: xS(t),
        options: n,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = Nr) {
    return this.component ? (this.component.multipleInstances ? t : Nr) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function xS(e) {
  return e === Nr ? void 0 : e;
}
function ES(e) {
  return e.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kS {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new CS(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var re;
(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})(re || (re = {}));
const TS = {
    debug: re.DEBUG,
    verbose: re.VERBOSE,
    info: re.INFO,
    warn: re.WARN,
    error: re.ERROR,
    silent: re.SILENT,
  },
  bS = re.INFO,
  IS = {
    [re.DEBUG]: "log",
    [re.VERBOSE]: "log",
    [re.INFO]: "info",
    [re.WARN]: "warn",
    [re.ERROR]: "error",
  },
  NS = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      i = IS[t];
    if (i) console[i](`[${r}]  ${e.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class Of {
  constructor(t) {
    (this.name = t),
      (this._logLevel = bS),
      (this._logHandler = NS),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in re))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? TS[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, re.DEBUG, ...t),
      this._logHandler(this, re.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, re.VERBOSE, ...t),
      this._logHandler(this, re.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, re.INFO, ...t),
      this._logHandler(this, re.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, re.WARN, ...t),
      this._logHandler(this, re.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, re.ERROR, ...t),
      this._logHandler(this, re.ERROR, ...t);
  }
}
const PS = (e, t) => t.some((n) => e instanceof n);
let xm, Em;
function AS() {
  return (
    xm ||
    (xm = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function OS() {
  return (
    Em ||
    (Em = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Ev = new WeakMap(),
  od = new WeakMap(),
  kv = new WeakMap(),
  Gu = new WeakMap(),
  jf = new WeakMap();
function jS(e) {
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("success", s), e.removeEventListener("error", o);
      },
      s = () => {
        n(ur(e.result)), i();
      },
      o = () => {
        r(e.error), i();
      };
    e.addEventListener("success", s), e.addEventListener("error", o);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && Ev.set(n, e);
      })
      .catch(() => {}),
    jf.set(t, e),
    t
  );
}
function LS(e) {
  if (od.has(e)) return;
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("complete", s),
          e.removeEventListener("error", o),
          e.removeEventListener("abort", o);
      },
      s = () => {
        n(), i();
      },
      o = () => {
        r(e.error || new DOMException("AbortError", "AbortError")), i();
      };
    e.addEventListener("complete", s),
      e.addEventListener("error", o),
      e.addEventListener("abort", o);
  });
  od.set(e, t);
}
let ad = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return od.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || kv.get(e);
      if (t === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return ur(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in e;
  },
};
function RS(e) {
  ad = e(ad);
}
function MS(e) {
  return e === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(Ku(this), t, ...n);
        return kv.set(r, t.sort ? t.sort() : [t]), ur(r);
      }
    : OS().includes(e)
    ? function (...t) {
        return e.apply(Ku(this), t), ur(Ev.get(this));
      }
    : function (...t) {
        return ur(e.apply(Ku(this), t));
      };
}
function DS(e) {
  return typeof e == "function"
    ? MS(e)
    : (e instanceof IDBTransaction && LS(e),
      PS(e, AS()) ? new Proxy(e, ad) : e);
}
function ur(e) {
  if (e instanceof IDBRequest) return jS(e);
  if (Gu.has(e)) return Gu.get(e);
  const t = DS(e);
  return t !== e && (Gu.set(e, t), jf.set(t, e)), t;
}
const Ku = (e) => jf.get(e);
function FS(e, t, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(e, t),
    l = ur(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (u) => {
        r(ur(o.result), u.oldVersion, u.newVersion, ur(o.transaction), u);
      }),
    n && o.addEventListener("blocked", (u) => n(u.oldVersion, u.newVersion, u)),
    l
      .then((u) => {
        s && u.addEventListener("close", () => s()),
          i &&
            u.addEventListener("versionchange", (c) =>
              i(c.oldVersion, c.newVersion, c)
            );
      })
      .catch(() => {}),
    l
  );
}
const US = ["get", "getKey", "getAll", "getAllKeys", "count"],
  zS = ["put", "add", "delete", "clear"],
  Yu = new Map();
function km(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (Yu.get(t)) return Yu.get(t);
  const n = t.replace(/FromIndex$/, ""),
    r = t !== n,
    i = zS.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || US.includes(n))
  )
    return;
  const s = async function (o, ...l) {
    const u = this.transaction(o, i ? "readwrite" : "readonly");
    let c = u.store;
    return (
      r && (c = c.index(l.shift())),
      (await Promise.all([c[n](...l), i && u.done]))[0]
    );
  };
  return Yu.set(t, s), s;
}
RS((e) => ({
  ...e,
  get: (t, n, r) => km(t, n) || e.get(t, n, r),
  has: (t, n) => !!km(t, n) || e.has(t, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $S {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (BS(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function BS(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const ld = "@firebase/app",
  Tm = "0.10.12";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Tn = new Of("@firebase/app"),
  VS = "@firebase/app-compat",
  HS = "@firebase/analytics-compat",
  WS = "@firebase/analytics",
  GS = "@firebase/app-check-compat",
  KS = "@firebase/app-check",
  YS = "@firebase/auth",
  qS = "@firebase/auth-compat",
  XS = "@firebase/database",
  JS = "@firebase/data-connect",
  ZS = "@firebase/database-compat",
  QS = "@firebase/functions",
  eC = "@firebase/functions-compat",
  tC = "@firebase/installations",
  nC = "@firebase/installations-compat",
  rC = "@firebase/messaging",
  iC = "@firebase/messaging-compat",
  sC = "@firebase/performance",
  oC = "@firebase/performance-compat",
  aC = "@firebase/remote-config",
  lC = "@firebase/remote-config-compat",
  uC = "@firebase/storage",
  cC = "@firebase/storage-compat",
  dC = "@firebase/firestore",
  fC = "@firebase/vertexai-preview",
  hC = "@firebase/firestore-compat",
  pC = "firebase",
  mC = "10.14.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ud = "[DEFAULT]",
  gC = {
    [ld]: "fire-core",
    [VS]: "fire-core-compat",
    [WS]: "fire-analytics",
    [HS]: "fire-analytics-compat",
    [KS]: "fire-app-check",
    [GS]: "fire-app-check-compat",
    [YS]: "fire-auth",
    [qS]: "fire-auth-compat",
    [XS]: "fire-rtdb",
    [JS]: "fire-data-connect",
    [ZS]: "fire-rtdb-compat",
    [QS]: "fire-fn",
    [eC]: "fire-fn-compat",
    [tC]: "fire-iid",
    [nC]: "fire-iid-compat",
    [rC]: "fire-fcm",
    [iC]: "fire-fcm-compat",
    [sC]: "fire-perf",
    [oC]: "fire-perf-compat",
    [aC]: "fire-rc",
    [lC]: "fire-rc-compat",
    [uC]: "fire-gcs",
    [cC]: "fire-gcs-compat",
    [dC]: "fire-fst",
    [hC]: "fire-fst-compat",
    [fC]: "fire-vertex",
    "fire-js": "fire-js",
    [pC]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const cl = new Map(),
  vC = new Map(),
  cd = new Map();
function bm(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    Tn.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    );
  }
}
function Ui(e) {
  const t = e.name;
  if (cd.has(t))
    return (
      Tn.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  cd.set(t, e);
  for (const n of cl.values()) bm(n, e);
  for (const n of vC.values()) bm(n, e);
  return !0;
}
function Lf(e, t) {
  const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
function Qt(e) {
  return e.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const yC = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  cr = new So("app", "Firebase", yC);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wC {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Vr("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw cr.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qi = mC;
function Tv(e, t = {}) {
  let n = e;
  typeof t != "object" && (t = { name: t });
  const r = Object.assign({ name: ud, automaticDataCollectionEnabled: !1 }, t),
    i = r.name;
  if (typeof i != "string" || !i)
    throw cr.create("bad-app-name", { appName: String(i) });
  if ((n || (n = Cv()), !n)) throw cr.create("no-options");
  const s = cl.get(i);
  if (s) {
    if (ul(n, s.options) && ul(r, s.config)) return s;
    throw cr.create("duplicate-app", { appName: i });
  }
  const o = new kS(i);
  for (const u of cd.values()) o.addComponent(u);
  const l = new wC(n, r, o);
  return cl.set(i, l), l;
}
function bv(e = ud) {
  const t = cl.get(e);
  if (!t && e === ud && Cv()) return Tv();
  if (!t) throw cr.create("no-app", { appName: e });
  return t;
}
function dr(e, t, n) {
  var r;
  let i = (r = gC[e]) !== null && r !== void 0 ? r : e;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = t.match(/\s|\//);
  if (s || o) {
    const l = [`Unable to register library "${i}" with version "${t}":`];
    s &&
      l.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      s && o && l.push("and"),
      o &&
        l.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      Tn.warn(l.join(" "));
    return;
  }
  Ui(new Vr(`${i}-version`, () => ({ library: i, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _C = "firebase-heartbeat-database",
  SC = 1,
  ao = "firebase-heartbeat-store";
let qu = null;
function Iv() {
  return (
    qu ||
      (qu = FS(_C, SC, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(ao);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((e) => {
        throw cr.create("idb-open", { originalErrorMessage: e.message });
      })),
    qu
  );
}
async function CC(e) {
  try {
    const n = (await Iv()).transaction(ao),
      r = await n.objectStore(ao).get(Nv(e));
    return await n.done, r;
  } catch (t) {
    if (t instanceof An) Tn.warn(t.message);
    else {
      const n = cr.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      Tn.warn(n.message);
    }
  }
}
async function Im(e, t) {
  try {
    const r = (await Iv()).transaction(ao, "readwrite");
    await r.objectStore(ao).put(t, Nv(e)), await r.done;
  } catch (n) {
    if (n instanceof An) Tn.warn(n.message);
    else {
      const r = cr.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      Tn.warn(r.message);
    }
  }
}
function Nv(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xC = 1024,
  EC = 30 * 24 * 60 * 60 * 1e3;
class kC {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new bC(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var t, n;
    try {
      const i = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        s = Nm();
      return (((t = this._heartbeatsCache) === null || t === void 0
        ? void 0
        : t.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === s ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === s)
        ? void 0
        : (this._heartbeatsCache.heartbeats.push({ date: s, agent: i }),
          (this._heartbeatsCache.heartbeats =
            this._heartbeatsCache.heartbeats.filter((o) => {
              const l = new Date(o.date).valueOf();
              return Date.now() - l <= EC;
            })),
          this._storage.overwrite(this._heartbeatsCache));
    } catch (r) {
      Tn.warn(r);
    }
  }
  async getHeartbeatsHeader() {
    var t;
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return "";
      const n = Nm(),
        { heartbeatsToSend: r, unsentEntries: i } = TC(
          this._heartbeatsCache.heartbeats
        ),
        s = ll(JSON.stringify({ version: 2, heartbeats: r }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = n),
        i.length > 0
          ? ((this._heartbeatsCache.heartbeats = i),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        s
      );
    } catch (n) {
      return Tn.warn(n), "";
    }
  }
}
function Nm() {
  return new Date().toISOString().substring(0, 10);
}
function TC(e, t = xC) {
  const n = [];
  let r = e.slice();
  for (const i of e) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), Pm(n) > t)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), Pm(n) > t)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class bC {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return hS()
      ? pS()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await CC(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Im(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Im(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function Pm(e) {
  return ll(JSON.stringify({ version: 2, heartbeats: e })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function IC(e) {
  Ui(new Vr("platform-logger", (t) => new $S(t), "PRIVATE")),
    Ui(new Vr("heartbeat", (t) => new kC(t), "PRIVATE")),
    dr(ld, Tm, e),
    dr(ld, Tm, "esm2017"),
    dr("fire-js", "");
}
IC("");
function Rf(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function Pv() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const NC = Pv,
  Av = new So("auth", "Firebase", Pv());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dl = new Of("@firebase/auth");
function PC(e, ...t) {
  dl.logLevel <= re.WARN && dl.warn(`Auth (${qi}): ${e}`, ...t);
}
function ba(e, ...t) {
  dl.logLevel <= re.ERROR && dl.error(`Auth (${qi}): ${e}`, ...t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ht(e, ...t) {
  throw Mf(e, ...t);
}
function sn(e, ...t) {
  return Mf(e, ...t);
}
function Ov(e, t, n) {
  const r = Object.assign(Object.assign({}, NC()), { [t]: n });
  return new So("auth", "Firebase", r).create(t, { appName: e.name });
}
function Sn(e) {
  return Ov(
    e,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
  );
}
function Mf(e, ...t) {
  if (typeof e != "string") {
    const n = t[0],
      r = [...t.slice(1)];
    return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
  }
  return Av.create(e, ...t);
}
function K(e, t, ...n) {
  if (!e) throw Mf(t, ...n);
}
function vn(e) {
  const t = "INTERNAL ASSERTION FAILED: " + e;
  throw (ba(t), new Error(t));
}
function bn(e, t) {
  e || vn(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function dd() {
  var e;
  return (
    (typeof self < "u" &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.href)) ||
    ""
  );
}
function AC() {
  return Am() === "http:" || Am() === "https:";
}
function Am() {
  var e;
  return (
    (typeof self < "u" &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function OC() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (AC() || cS() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function jC() {
  if (typeof navigator > "u") return null;
  const e = navigator;
  return (e.languages && e.languages[0]) || e.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xo {
  constructor(t, n) {
    (this.shortDelay = t),
      (this.longDelay = n),
      bn(n > t, "Short delay should be less than long delay!"),
      (this.isMobile = lS() || dS());
  }
  get() {
    return OC()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Df(e, t) {
  bn(e.emulator, "Emulator should always be set here");
  const { url: n } = e.emulator;
  return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jv {
  static initialize(t, n, r) {
    (this.fetchImpl = t),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    vn(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    vn(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u") return Response;
    vn(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const LC = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const RC = new xo(3e4, 6e4);
function xr(e, t) {
  return e.tenantId && !t.tenantId
    ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
    : t;
}
async function On(e, t, n, r, i = {}) {
  return Lv(e, i, async () => {
    let s = {},
      o = {};
    r && (t === "GET" ? (o = r) : (s = { body: JSON.stringify(r) }));
    const l = Co(Object.assign({ key: e.config.apiKey }, o)).slice(1),
      u = await e._getAdditionalHeaders();
    (u["Content-Type"] = "application/json"),
      e.languageCode && (u["X-Firebase-Locale"] = e.languageCode);
    const c = Object.assign({ method: t, headers: u }, s);
    return (
      uS() || (c.referrerPolicy = "no-referrer"),
      jv.fetch()(Rv(e, e.config.apiHost, n, l), c)
    );
  });
}
async function Lv(e, t, n) {
  e._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, LC), t);
  try {
    const i = new DC(e),
      s = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o)
      throw ca(e, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o)) return o;
    {
      const l = s.ok ? o.errorMessage : o.error.message,
        [u, c] = l.split(" : ");
      if (u === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw ca(e, "credential-already-in-use", o);
      if (u === "EMAIL_EXISTS") throw ca(e, "email-already-in-use", o);
      if (u === "USER_DISABLED") throw ca(e, "user-disabled", o);
      const h = r[u] || u.toLowerCase().replace(/[_\s]+/g, "-");
      if (c) throw Ov(e, h, c);
      Ht(e, h);
    }
  } catch (i) {
    if (i instanceof An) throw i;
    Ht(e, "network-request-failed", { message: String(i) });
  }
}
async function Eo(e, t, n, r, i = {}) {
  const s = await On(e, t, n, r, i);
  return (
    "mfaPendingCredential" in s &&
      Ht(e, "multi-factor-auth-required", { _serverResponse: s }),
    s
  );
}
function Rv(e, t, n, r) {
  const i = `${t}${n}?${r}`;
  return e.config.emulator ? Df(e.config, i) : `${e.config.apiScheme}://${i}`;
}
function MC(e) {
  switch (e) {
    case "ENFORCE":
      return "ENFORCE";
    case "AUDIT":
      return "AUDIT";
    case "OFF":
      return "OFF";
    default:
      return "ENFORCEMENT_STATE_UNSPECIFIED";
  }
}
class DC {
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(sn(this.auth, "network-request-failed")),
          RC.get()
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function ca(e, t, n) {
  const r = { appName: e.name };
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = sn(e, t, r);
  return (i.customData._tokenResponse = n), i;
}
function Om(e) {
  return e !== void 0 && e.enterprise !== void 0;
}
class FC {
  constructor(t) {
    if (
      ((this.siteKey = ""),
      (this.recaptchaEnforcementState = []),
      t.recaptchaKey === void 0)
    )
      throw new Error("recaptchaKey undefined");
    (this.siteKey = t.recaptchaKey.split("/")[3]),
      (this.recaptchaEnforcementState = t.recaptchaEnforcementState);
  }
  getProviderEnforcementState(t) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null;
    for (const n of this.recaptchaEnforcementState)
      if (n.provider && n.provider === t) return MC(n.enforcementState);
    return null;
  }
  isProviderEnabled(t) {
    return (
      this.getProviderEnforcementState(t) === "ENFORCE" ||
      this.getProviderEnforcementState(t) === "AUDIT"
    );
  }
}
async function UC(e, t) {
  return On(e, "GET", "/v2/recaptchaConfig", xr(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function zC(e, t) {
  return On(e, "POST", "/v1/accounts:delete", t);
}
async function Mv(e, t) {
  return On(e, "POST", "/v1/accounts:lookup", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ms(e) {
  if (e)
    try {
      const t = new Date(Number(e));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function $C(e, t = !1) {
  const n = un(e),
    r = await n.getIdToken(t),
    i = Ff(r);
  K(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
  const s = typeof i.firebase == "object" ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: Ms(Xu(i.auth_time)),
    issuedAtTime: Ms(Xu(i.iat)),
    expirationTime: Ms(Xu(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
  };
}
function Xu(e) {
  return Number(e) * 1e3;
}
function Ff(e) {
  const [t, n, r] = e.split(".");
  if (t === void 0 || n === void 0 || r === void 0)
    return ba("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = _v(n);
    return i
      ? JSON.parse(i)
      : (ba("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return (
      ba(
        "Caught error parsing JWT payload as JSON",
        i == null ? void 0 : i.toString()
      ),
      null
    );
  }
}
function jm(e) {
  const t = Ff(e);
  return (
    K(t, "internal-error"),
    K(typeof t.exp < "u", "internal-error"),
    K(typeof t.iat < "u", "internal-error"),
    Number(t.exp) - Number(t.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function zi(e, t, n = !1) {
  if (n) return t;
  try {
    return await t;
  } catch (r) {
    throw (
      (r instanceof An &&
        BC(r) &&
        e.auth.currentUser === e &&
        (await e.auth.signOut()),
      r)
    );
  }
}
function BC({ code: e }) {
  return e === "auth/user-disabled" || e === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class VC {
  constructor(t) {
    (this.user = t),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(t) {
    var n;
    if (t) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
          ? n
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, i);
    }
  }
  schedule(t = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(t);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (t) {
      (t == null ? void 0 : t.code) === "auth/network-request-failed" &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fd {
  constructor(t, n) {
    (this.createdAt = t), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = Ms(this.lastLoginAt)),
      (this.creationTime = Ms(this.createdAt));
  }
  _copy(t) {
    (this.createdAt = t.createdAt),
      (this.lastLoginAt = t.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function fl(e) {
  var t;
  const n = e.auth,
    r = await e.getIdToken(),
    i = await zi(e, Mv(n, { idToken: r }));
  K(i == null ? void 0 : i.users.length, n, "internal-error");
  const s = i.users[0];
  e._notifyReloadListener(s);
  const o =
      !((t = s.providerUserInfo) === null || t === void 0) && t.length
        ? Dv(s.providerUserInfo)
        : [],
    l = WC(e.providerData, o),
    u = e.isAnonymous,
    c = !(e.email && s.passwordHash) && !(l != null && l.length),
    h = u ? c : !1,
    m = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: l,
      metadata: new fd(s.createdAt, s.lastLoginAt),
      isAnonymous: h,
    };
  Object.assign(e, m);
}
async function HC(e) {
  const t = un(e);
  await fl(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t);
}
function WC(e, t) {
  return [
    ...e.filter((r) => !t.some((i) => i.providerId === r.providerId)),
    ...t,
  ];
}
function Dv(e) {
  return e.map((t) => {
    var { providerId: n } = t,
      r = Rf(t, ["providerId"]);
    return {
      providerId: n,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function GC(e, t) {
  const n = await Lv(e, {}, async () => {
    const r = Co({ grant_type: "refresh_token", refresh_token: t }).slice(1),
      { tokenApiHost: i, apiKey: s } = e.config,
      o = Rv(e, i, "/v1/token", `key=${s}`),
      l = await e._getAdditionalHeaders();
    return (
      (l["Content-Type"] = "application/x-www-form-urlencoded"),
      jv.fetch()(o, { method: "POST", headers: l, body: r })
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
async function KC(e, t) {
  return On(e, "POST", "/v2/accounts:revokeToken", xr(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bi {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    K(t.idToken, "internal-error"),
      K(typeof t.idToken < "u", "internal-error"),
      K(typeof t.refreshToken < "u", "internal-error");
    const n =
      "expiresIn" in t && typeof t.expiresIn < "u"
        ? Number(t.expiresIn)
        : jm(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, n);
  }
  updateFromIdToken(t) {
    K(t.length !== 0, "internal-error");
    const n = jm(t);
    this.updateTokensAndExpiration(t, null, n);
  }
  async getToken(t, n = !1) {
    return !n && this.accessToken && !this.isExpired
      ? this.accessToken
      : (K(this.refreshToken, t, "user-token-expired"),
        this.refreshToken
          ? (await this.refresh(t, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, n) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await GC(t, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(t, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = t || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(t, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n,
      o = new bi();
    return (
      r &&
        (K(typeof r == "string", "internal-error", { appName: t }),
        (o.refreshToken = r)),
      i &&
        (K(typeof i == "string", "internal-error", { appName: t }),
        (o.accessToken = i)),
      s &&
        (K(typeof s == "number", "internal-error", { appName: t }),
        (o.expirationTime = s)),
      o
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(t) {
    (this.accessToken = t.accessToken),
      (this.refreshToken = t.refreshToken),
      (this.expirationTime = t.expirationTime);
  }
  _clone() {
    return Object.assign(new bi(), this.toJSON());
  }
  _performRefresh() {
    return vn("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Fn(e, t) {
  K(typeof e == "string" || typeof e > "u", "internal-error", { appName: t });
}
class yn {
  constructor(t) {
    var { uid: n, auth: r, stsTokenManager: i } = t,
      s = Rf(t, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new VC(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = s.displayName || null),
      (this.email = s.email || null),
      (this.emailVerified = s.emailVerified || !1),
      (this.phoneNumber = s.phoneNumber || null),
      (this.photoURL = s.photoURL || null),
      (this.isAnonymous = s.isAnonymous || !1),
      (this.tenantId = s.tenantId || null),
      (this.providerData = s.providerData ? [...s.providerData] : []),
      (this.metadata = new fd(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(t) {
    const n = await zi(this, this.stsTokenManager.getToken(this.auth, t));
    return (
      K(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(t) {
    return $C(this, t);
  }
  reload() {
    return HC(this);
  }
  _assign(t) {
    this !== t &&
      (K(this.uid === t.uid, this.auth, "internal-error"),
      (this.displayName = t.displayName),
      (this.photoURL = t.photoURL),
      (this.email = t.email),
      (this.emailVerified = t.emailVerified),
      (this.phoneNumber = t.phoneNumber),
      (this.isAnonymous = t.isAnonymous),
      (this.tenantId = t.tenantId),
      (this.providerData = t.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(t.metadata),
      this.stsTokenManager._assign(t.stsTokenManager));
  }
  _clone(t) {
    const n = new yn(
      Object.assign(Object.assign({}, this), {
        auth: t,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(t) {
    K(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = t),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(t) {
    this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(t, n = !1) {
    let r = !1;
    t.idToken &&
      t.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(t), (r = !0)),
      n && (await fl(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (Qt(this.auth.app)) return Promise.reject(Sn(this.auth));
    const t = await this.getIdToken();
    return (
      await zi(this, zC(this.auth, { idToken: t })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((t) => Object.assign({}, t)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(t, n) {
    var r, i, s, o, l, u, c, h;
    const m = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      g = (i = n.email) !== null && i !== void 0 ? i : void 0,
      y = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0,
      _ = (o = n.photoURL) !== null && o !== void 0 ? o : void 0,
      A = (l = n.tenantId) !== null && l !== void 0 ? l : void 0,
      N = (u = n._redirectEventId) !== null && u !== void 0 ? u : void 0,
      C = (c = n.createdAt) !== null && c !== void 0 ? c : void 0,
      S = (h = n.lastLoginAt) !== null && h !== void 0 ? h : void 0,
      {
        uid: E,
        emailVerified: O,
        isAnonymous: L,
        providerData: D,
        stsTokenManager: T,
      } = n;
    K(E && T, t, "internal-error");
    const v = bi.fromJSON(this.name, T);
    K(typeof E == "string", t, "internal-error"),
      Fn(m, t.name),
      Fn(g, t.name),
      K(typeof O == "boolean", t, "internal-error"),
      K(typeof L == "boolean", t, "internal-error"),
      Fn(y, t.name),
      Fn(_, t.name),
      Fn(A, t.name),
      Fn(N, t.name),
      Fn(C, t.name),
      Fn(S, t.name);
    const b = new yn({
      uid: E,
      auth: t,
      email: g,
      emailVerified: O,
      displayName: m,
      isAnonymous: L,
      photoURL: _,
      phoneNumber: y,
      tenantId: A,
      stsTokenManager: v,
      createdAt: C,
      lastLoginAt: S,
    });
    return (
      D &&
        Array.isArray(D) &&
        (b.providerData = D.map((k) => Object.assign({}, k))),
      N && (b._redirectEventId = N),
      b
    );
  }
  static async _fromIdTokenResponse(t, n, r = !1) {
    const i = new bi();
    i.updateFromServerResponse(n);
    const s = new yn({
      uid: n.localId,
      auth: t,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return await fl(s), s;
  }
  static async _fromGetAccountInfoResponse(t, n, r) {
    const i = n.users[0];
    K(i.localId !== void 0, "internal-error");
    const s = i.providerUserInfo !== void 0 ? Dv(i.providerUserInfo) : [],
      o = !(i.email && i.passwordHash) && !(s != null && s.length),
      l = new bi();
    l.updateFromIdToken(r);
    const u = new yn({
        uid: i.localId,
        auth: t,
        stsTokenManager: l,
        isAnonymous: o,
      }),
      c = {
        uid: i.localId,
        displayName: i.displayName || null,
        photoURL: i.photoUrl || null,
        email: i.email || null,
        emailVerified: i.emailVerified || !1,
        phoneNumber: i.phoneNumber || null,
        tenantId: i.tenantId || null,
        providerData: s,
        metadata: new fd(i.createdAt, i.lastLoginAt),
        isAnonymous: !(i.email && i.passwordHash) && !(s != null && s.length),
      };
    return Object.assign(u, c), u;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Lm = new Map();
function wn(e) {
  bn(e instanceof Function, "Expected a class definition");
  let t = Lm.get(e);
  return t
    ? (bn(t instanceof e, "Instance stored in cache mismatched with class"), t)
    : ((t = new e()), Lm.set(e, t), t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fv {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(t, n) {
    this.storage[t] = n;
  }
  async _get(t) {
    const n = this.storage[t];
    return n === void 0 ? null : n;
  }
  async _remove(t) {
    delete this.storage[t];
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
Fv.type = "NONE";
const Rm = Fv;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ia(e, t, n) {
  return `firebase:${e}:${t}:${n}`;
}
class Ii {
  constructor(t, n, r) {
    (this.persistence = t), (this.auth = n), (this.userKey = r);
    const { config: i, name: s } = this.auth;
    (this.fullUserKey = Ia(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = Ia("persistence", i.apiKey, s)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    return t ? yn._fromJSON(this.auth, t) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(t) {
    if (this.persistence === t) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = t), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, n, r = "authUser") {
    if (!n.length) return new Ii(wn(Rm), t, r);
    const i = (
      await Promise.all(
        n.map(async (c) => {
          if (await c._isAvailable()) return c;
        })
      )
    ).filter((c) => c);
    let s = i[0] || wn(Rm);
    const o = Ia(r, t.config.apiKey, t.name);
    let l = null;
    for (const c of n)
      try {
        const h = await c._get(o);
        if (h) {
          const m = yn._fromJSON(t, h);
          c !== s && (l = m), (s = c);
          break;
        }
      } catch {}
    const u = i.filter((c) => c._shouldAllowMigration);
    return !s._shouldAllowMigration || !u.length
      ? new Ii(s, t, r)
      : ((s = u[0]),
        l && (await s._set(o, l.toJSON())),
        await Promise.all(
          n.map(async (c) => {
            if (c !== s)
              try {
                await c._remove(o);
              } catch {}
          })
        ),
        new Ii(s, t, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Mm(e) {
  const t = e.toLowerCase();
  if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
    return "Opera";
  if (Bv(t)) return "IEMobile";
  if (t.includes("msie") || t.includes("trident/")) return "IE";
  if (t.includes("edge/")) return "Edge";
  if (Uv(t)) return "Firefox";
  if (t.includes("silk/")) return "Silk";
  if (Hv(t)) return "Blackberry";
  if (Wv(t)) return "Webos";
  if (zv(t)) return "Safari";
  if ((t.includes("chrome/") || $v(t)) && !t.includes("edge/")) return "Chrome";
  if (Vv(t)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = e.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function Uv(e = rt()) {
  return /firefox\//i.test(e);
}
function zv(e = rt()) {
  const t = e.toLowerCase();
  return (
    t.includes("safari/") &&
    !t.includes("chrome/") &&
    !t.includes("crios/") &&
    !t.includes("android")
  );
}
function $v(e = rt()) {
  return /crios\//i.test(e);
}
function Bv(e = rt()) {
  return /iemobile/i.test(e);
}
function Vv(e = rt()) {
  return /android/i.test(e);
}
function Hv(e = rt()) {
  return /blackberry/i.test(e);
}
function Wv(e = rt()) {
  return /webos/i.test(e);
}
function Uf(e = rt()) {
  return (
    /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
  );
}
function YC(e = rt()) {
  var t;
  return (
    Uf(e) &&
    !!(!((t = window.navigator) === null || t === void 0) && t.standalone)
  );
}
function qC() {
  return fS() && document.documentMode === 10;
}
function Gv(e = rt()) {
  return Uf(e) || Vv(e) || Wv(e) || Hv(e) || /windows phone/i.test(e) || Bv(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Kv(e, t = []) {
  let n;
  switch (e) {
    case "Browser":
      n = Mm(rt());
      break;
    case "Worker":
      n = `${Mm(rt())}-${e}`;
      break;
    default:
      n = e;
  }
  const r = t.length ? t.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${qi}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class XC {
  constructor(t) {
    (this.auth = t), (this.queue = []);
  }
  pushCallback(t, n) {
    const r = (s) =>
      new Promise((o, l) => {
        try {
          const u = t(s);
          o(u);
        } catch (u) {
          l(u);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const n = [];
    try {
      for (const r of this.queue) await r(t), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function JC(e, t = {}) {
  return On(e, "GET", "/v2/passwordPolicy", xr(e, t));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ZC = 6;
class QC {
  constructor(t) {
    var n, r, i, s;
    const o = t.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (n = o.minPasswordLength) !== null && n !== void 0 ? n : ZC),
      o.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength),
      o.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          o.containsLowercaseCharacter),
      o.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          o.containsUppercaseCharacter),
      o.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          o.containsNumericCharacter),
      o.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          o.containsNonAlphanumericCharacter),
      (this.enforcementState = t.enforcementState),
      this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" &&
        (this.enforcementState = "OFF"),
      (this.allowedNonAlphanumericCharacters =
        (i =
          (r = t.allowedNonAlphanumericCharacters) === null || r === void 0
            ? void 0
            : r.join("")) !== null && i !== void 0
          ? i
          : ""),
      (this.forceUpgradeOnSignin =
        (s = t.forceUpgradeOnSignin) !== null && s !== void 0 ? s : !1),
      (this.schemaVersion = t.schemaVersion);
  }
  validatePassword(t) {
    var n, r, i, s, o, l;
    const u = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(t, u),
      this.validatePasswordCharacterOptions(t, u),
      u.isValid &&
        (u.isValid =
          (n = u.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0),
      u.isValid &&
        (u.isValid =
          (r = u.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
      u.isValid &&
        (u.isValid =
          (i = u.containsLowercaseLetter) !== null && i !== void 0 ? i : !0),
      u.isValid &&
        (u.isValid =
          (s = u.containsUppercaseLetter) !== null && s !== void 0 ? s : !0),
      u.isValid &&
        (u.isValid =
          (o = u.containsNumericCharacter) !== null && o !== void 0 ? o : !0),
      u.isValid &&
        (u.isValid =
          (l = u.containsNonAlphanumericCharacter) !== null && l !== void 0
            ? l
            : !0),
      u
    );
  }
  validatePasswordLengthOptions(t, n) {
    const r = this.customStrengthOptions.minPasswordLength,
      i = this.customStrengthOptions.maxPasswordLength;
    r && (n.meetsMinPasswordLength = t.length >= r),
      i && (n.meetsMaxPasswordLength = t.length <= i);
  }
  validatePasswordCharacterOptions(t, n) {
    this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
    let r;
    for (let i = 0; i < t.length; i++)
      (r = t.charAt(i)),
        this.updatePasswordCharacterOptionsStatuses(
          n,
          r >= "a" && r <= "z",
          r >= "A" && r <= "Z",
          r >= "0" && r <= "9",
          this.allowedNonAlphanumericCharacters.includes(r)
        );
  }
  updatePasswordCharacterOptionsStatuses(t, n, r, i, s) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (t.containsLowercaseLetter || (t.containsLowercaseLetter = n)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (t.containsUppercaseLetter || (t.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (t.containsNumericCharacter || (t.containsNumericCharacter = i)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (t.containsNonAlphanumericCharacter ||
          (t.containsNonAlphanumericCharacter = s));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ex {
  constructor(t, n, r, i) {
    (this.app = t),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = i),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new Dm(this)),
      (this.idTokenSubscription = new Dm(this)),
      (this.beforeStateQueue = new XC(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = Av),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = t.name),
      (this.clientVersion = i.sdkClientVersion);
  }
  _initializeWithPersistence(t, n) {
    return (
      n && (this._popupRedirectResolver = wn(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Ii.create(this, t)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((i = this.currentUser) === null || i === void 0
                ? void 0
                : i.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const t = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !t)) {
      if (this.currentUser && t && this.currentUser.uid === t.uid) {
        this._currentUser._assign(t), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(t, !0);
    }
  }
  async initializeCurrentUserFromIdToken(t) {
    try {
      const n = await Mv(this, { idToken: t }),
        r = await yn._fromGetAccountInfoResponse(this, n, t);
      await this.directlySetCurrentUser(r);
    } catch (n) {
      console.warn(
        "FirebaseServerApp could not login user with provided authIdToken: ",
        n
      ),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(t) {
    var n;
    if (Qt(this.app)) {
      const o = this.app.settings.authIdToken;
      return o
        ? new Promise((l) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(o).then(l, l)
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      s = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o =
          (n = this.redirectUser) === null || n === void 0
            ? void 0
            : n._redirectEventId,
        l = i == null ? void 0 : i._redirectEventId,
        u = await this.tryRedirectSignIn(t);
      (!o || o === l) && u != null && u.user && ((i = u.user), (s = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (o) {
          (i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(o)
            );
        }
      return i
        ? this.reloadAndSetCurrentUserOrClear(i)
        : this.directlySetCurrentUser(null);
    }
    return (
      K(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(t) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(t) {
    try {
      await fl(t);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = jC();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    if (Qt(this.app)) return Promise.reject(Sn(this));
    const n = t ? un(t) : null;
    return (
      n &&
        K(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(t, n = !1) {
    if (!this._deleted)
      return (
        t && K(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
        n || (await this.beforeStateQueue.runMiddleware(t)),
        this.queue(async () => {
          await this.directlySetCurrentUser(t), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return Qt(this.app)
      ? Promise.reject(Sn(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(t) {
    return Qt(this.app)
      ? Promise.reject(Sn(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(wn(t));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(t) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const n = this._getPasswordPolicyInternal();
    return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            "unsupported-password-policy-schema-version",
            {}
          )
        )
      : n.validatePassword(t);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const t = await JC(this),
      n = new QC(t);
    this.tenantId === null
      ? (this._projectPasswordPolicy = n)
      : (this._tenantPasswordPolicies[this.tenantId] = n);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(t) {
    this._errorFactory = new So("auth", "Firebase", t());
  }
  onAuthStateChanged(t, n, r) {
    return this.registerStateListener(this.authStateSubscription, t, n, r);
  }
  beforeAuthStateChanged(t, n) {
    return this.beforeStateQueue.pushCallback(t, n);
  }
  onIdTokenChanged(t, n, r) {
    return this.registerStateListener(this.idTokenSubscription, t, n, r);
  }
  authStateReady() {
    return new Promise((t, n) => {
      if (this.currentUser) t();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), t();
        }, n);
      }
    });
  }
  async revokeAccessToken(t) {
    if (this.currentUser) {
      const n = await this.currentUser.getIdToken(),
        r = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: t,
          idToken: n,
        };
      this.tenantId != null && (r.tenantId = this.tenantId), await KC(this, r);
    }
  }
  toJSON() {
    var t;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON(),
    };
  }
  async _setRedirectUser(t, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return t === null ? r.removeCurrentUser() : r.setCurrentUser(t);
  }
  async getOrInitRedirectPersistenceManager(t) {
    if (!this.redirectPersistenceManager) {
      const n = (t && wn(t)) || this._popupRedirectResolver;
      K(n, this, "argument-error"),
        (this.redirectPersistenceManager = await Ii.create(
          this,
          [wn(n._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(t) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0
        ? void 0
        : n._redirectEventId) === t
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId) === t
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(t) {
    if (t === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(t));
  }
  _notifyListenersIfCurrent(t) {
    t === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var t, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !==
        null && n !== void 0
        ? n
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(t, n, r, i) {
    if (this._deleted) return () => {};
    const s = typeof n == "function" ? n : n.next.bind(n);
    let o = !1;
    const l = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (K(l, this, "internal-error"),
      l.then(() => {
        o || s(this.currentUser);
      }),
      typeof n == "function")
    ) {
      const u = t.addObserver(n, r, i);
      return () => {
        (o = !0), u();
      };
    } else {
      const u = t.addObserver(n);
      return () => {
        (o = !0), u();
      };
    }
  }
  async directlySetCurrentUser(t) {
    this.currentUser &&
      this.currentUser !== t &&
      this._currentUser._stopProactiveRefresh(),
      t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
      (this.currentUser = t),
      t
        ? await this.assertedPersistence.setCurrentUser(t)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(t) {
    return (this.operations = this.operations.then(t, t)), this.operations;
  }
  get assertedPersistence() {
    return (
      K(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(t) {
    !t ||
      this.frameworks.includes(t) ||
      (this.frameworks.push(t),
      this.frameworks.sort(),
      (this.clientVersion = Kv(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var t;
    const n = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
    const r = await ((t = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getHeartbeatsHeader());
    r && (n["X-Firebase-Client"] = r);
    const i = await this._getAppCheckToken();
    return i && (n["X-Firebase-AppCheck"] = i), n;
  }
  async _getAppCheckToken() {
    var t;
    const n = await ((t = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getToken());
    return (
      n != null &&
        n.error &&
        PC(`Error while retrieving App Check token: ${n.error}`),
      n == null ? void 0 : n.token
    );
  }
}
function Zr(e) {
  return un(e);
}
class Dm {
  constructor(t) {
    (this.auth = t),
      (this.observer = null),
      (this.addObserver = wS((n) => (this.observer = n)));
  }
  get next() {
    return (
      K(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let $l = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function tx(e) {
  $l = e;
}
function Yv(e) {
  return $l.loadJS(e);
}
function nx() {
  return $l.recaptchaEnterpriseScript;
}
function rx() {
  return $l.gapiScript;
}
function ix(e) {
  return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
const sx = "recaptcha-enterprise",
  ox = "NO_RECAPTCHA";
class ax {
  constructor(t) {
    (this.type = sx), (this.auth = Zr(t));
  }
  async verify(t = "verify", n = !1) {
    async function r(s) {
      if (!n) {
        if (s.tenantId == null && s._agentRecaptchaConfig != null)
          return s._agentRecaptchaConfig.siteKey;
        if (
          s.tenantId != null &&
          s._tenantRecaptchaConfigs[s.tenantId] !== void 0
        )
          return s._tenantRecaptchaConfigs[s.tenantId].siteKey;
      }
      return new Promise(async (o, l) => {
        UC(s, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE",
        })
          .then((u) => {
            if (u.recaptchaKey === void 0)
              l(new Error("recaptcha Enterprise site key undefined"));
            else {
              const c = new FC(u);
              return (
                s.tenantId == null
                  ? (s._agentRecaptchaConfig = c)
                  : (s._tenantRecaptchaConfigs[s.tenantId] = c),
                o(c.siteKey)
              );
            }
          })
          .catch((u) => {
            l(u);
          });
      });
    }
    function i(s, o, l) {
      const u = window.grecaptcha;
      Om(u)
        ? u.enterprise.ready(() => {
            u.enterprise
              .execute(s, { action: t })
              .then((c) => {
                o(c);
              })
              .catch(() => {
                o(ox);
              });
          })
        : l(Error("No reCAPTCHA enterprise script loaded."));
    }
    return new Promise((s, o) => {
      r(this.auth)
        .then((l) => {
          if (!n && Om(window.grecaptcha)) i(l, s, o);
          else {
            if (typeof window > "u") {
              o(new Error("RecaptchaVerifier is only supported in browser"));
              return;
            }
            let u = nx();
            u.length !== 0 && (u += l),
              Yv(u)
                .then(() => {
                  i(l, s, o);
                })
                .catch((c) => {
                  o(c);
                });
          }
        })
        .catch((l) => {
          o(l);
        });
    });
  }
}
async function Fm(e, t, n, r = !1) {
  const i = new ax(e);
  let s;
  try {
    s = await i.verify(n);
  } catch {
    s = await i.verify(n, !0);
  }
  const o = Object.assign({}, t);
  return (
    r
      ? Object.assign(o, { captchaResp: s })
      : Object.assign(o, { captchaResponse: s }),
    Object.assign(o, { clientType: "CLIENT_TYPE_WEB" }),
    Object.assign(o, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
    o
  );
}
async function hd(e, t, n, r) {
  var i;
  if (
    !((i = e._getRecaptchaConfig()) === null || i === void 0) &&
    i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")
  ) {
    const s = await Fm(e, t, n, n === "getOobCode");
    return r(e, s);
  } else
    return r(e, t).catch(async (s) => {
      if (s.code === "auth/missing-recaptcha-token") {
        console.log(
          `${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`
        );
        const o = await Fm(e, t, n, n === "getOobCode");
        return r(e, o);
      } else return Promise.reject(s);
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function lx(e, t) {
  const n = Lf(e, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      s = n.getOptions();
    if (ul(s, t ?? {})) return i;
    Ht(i, "already-initialized");
  }
  return n.initialize({ options: t });
}
function ux(e, t) {
  const n = (t == null ? void 0 : t.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(wn);
  t != null && t.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(
      r,
      t == null ? void 0 : t.popupRedirectResolver
    );
}
function cx(e, t, n) {
  const r = Zr(e);
  K(r._canInitEmulator, r, "emulator-config-failed"),
    K(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
  const i = !1,
    s = qv(t),
    { host: o, port: l } = dx(t),
    u = l === null ? "" : `:${l}`;
  (r.config.emulator = { url: `${s}//${o}${u}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: o,
      port: l,
      protocol: s.replace(":", ""),
      options: Object.freeze({ disableWarnings: i }),
    })),
    fx();
}
function qv(e) {
  const t = e.indexOf(":");
  return t < 0 ? "" : e.substr(0, t + 1);
}
function dx(e) {
  const t = qv(e),
    n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
  if (!n) return { host: "", port: null };
  const r = n[2].split("@").pop() || "",
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: Um(r.substr(s.length + 1)) };
  } else {
    const [s, o] = r.split(":");
    return { host: s, port: Um(o) };
  }
}
function Um(e) {
  if (!e) return null;
  const t = Number(e);
  return isNaN(t) ? null : t;
}
function fx() {
  function e() {
    const t = document.createElement("p"),
      n = t.style;
    (t.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (n.position = "fixed"),
      (n.width = "100%"),
      (n.backgroundColor = "#ffffff"),
      (n.border = ".1em solid #000000"),
      (n.color = "#b50000"),
      (n.bottom = "0px"),
      (n.left = "0px"),
      (n.margin = "0px"),
      (n.zIndex = "10000"),
      (n.textAlign = "center"),
      t.classList.add("firebase-emulator-warning"),
      document.body.appendChild(t);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", e)
        : e());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zf {
  constructor(t, n) {
    (this.providerId = t), (this.signInMethod = n);
  }
  toJSON() {
    return vn("not implemented");
  }
  _getIdTokenResponse(t) {
    return vn("not implemented");
  }
  _linkToIdToken(t, n) {
    return vn("not implemented");
  }
  _getReauthenticationResolver(t) {
    return vn("not implemented");
  }
}
async function hx(e, t) {
  return On(e, "POST", "/v1/accounts:signUp", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function px(e, t) {
  return Eo(e, "POST", "/v1/accounts:signInWithPassword", xr(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function mx(e, t) {
  return Eo(e, "POST", "/v1/accounts:signInWithEmailLink", xr(e, t));
}
async function gx(e, t) {
  return Eo(e, "POST", "/v1/accounts:signInWithEmailLink", xr(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lo extends zf {
  constructor(t, n, r, i = null) {
    super("password", r),
      (this._email = t),
      (this._password = n),
      (this._tenantId = i);
  }
  static _fromEmailAndPassword(t, n) {
    return new lo(t, n, "password");
  }
  static _fromEmailAndCode(t, n, r = null) {
    return new lo(t, n, "emailLink", r);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    };
  }
  static fromJSON(t) {
    const n = typeof t == "string" ? JSON.parse(t) : t;
    if (n != null && n.email && n != null && n.password) {
      if (n.signInMethod === "password")
        return this._fromEmailAndPassword(n.email, n.password);
      if (n.signInMethod === "emailLink")
        return this._fromEmailAndCode(n.email, n.password, n.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(t) {
    switch (this.signInMethod) {
      case "password":
        const n = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return hd(t, n, "signInWithPassword", px);
      case "emailLink":
        return mx(t, { email: this._email, oobCode: this._password });
      default:
        Ht(t, "internal-error");
    }
  }
  async _linkToIdToken(t, n) {
    switch (this.signInMethod) {
      case "password":
        const r = {
          idToken: n,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return hd(t, r, "signUpPassword", hx);
      case "emailLink":
        return gx(t, {
          idToken: n,
          email: this._email,
          oobCode: this._password,
        });
      default:
        Ht(t, "internal-error");
    }
  }
  _getReauthenticationResolver(t) {
    return this._getIdTokenResponse(t);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ni(e, t) {
  return Eo(e, "POST", "/v1/accounts:signInWithIdp", xr(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vx = "http://localhost";
class Hr extends zf {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(t) {
    const n = new Hr(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (n.idToken = t.idToken),
          t.accessToken && (n.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (n.nonce = t.nonce),
          t.pendingToken && (n.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
        ? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
        : Ht("argument-error"),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(t) {
    const n = typeof t == "string" ? JSON.parse(t) : t,
      { providerId: r, signInMethod: i } = n,
      s = Rf(n, ["providerId", "signInMethod"]);
    if (!r || !i) return null;
    const o = new Hr(r, i);
    return (
      (o.idToken = s.idToken || void 0),
      (o.accessToken = s.accessToken || void 0),
      (o.secret = s.secret),
      (o.nonce = s.nonce),
      (o.pendingToken = s.pendingToken || null),
      o
    );
  }
  _getIdTokenResponse(t) {
    const n = this.buildRequest();
    return Ni(t, n);
  }
  _linkToIdToken(t, n) {
    const r = this.buildRequest();
    return (r.idToken = n), Ni(t, r);
  }
  _getReauthenticationResolver(t) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), Ni(t, n);
  }
  buildRequest() {
    const t = { requestUri: vx, returnSecureToken: !0 };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (t.postBody = Co(n));
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yx(e) {
  switch (e) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function wx(e) {
  const t = xs(Es(e)).link,
    n = t ? xs(Es(t)).deep_link_id : null,
    r = xs(Es(e)).deep_link_id;
  return (r ? xs(Es(r)).link : null) || r || n || t || e;
}
class $f {
  constructor(t) {
    var n, r, i, s, o, l;
    const u = xs(Es(t)),
      c = (n = u.apiKey) !== null && n !== void 0 ? n : null,
      h = (r = u.oobCode) !== null && r !== void 0 ? r : null,
      m = yx((i = u.mode) !== null && i !== void 0 ? i : null);
    K(c && h && m, "argument-error"),
      (this.apiKey = c),
      (this.operation = m),
      (this.code = h),
      (this.continueUrl =
        (s = u.continueUrl) !== null && s !== void 0 ? s : null),
      (this.languageCode =
        (o = u.languageCode) !== null && o !== void 0 ? o : null),
      (this.tenantId = (l = u.tenantId) !== null && l !== void 0 ? l : null);
  }
  static parseLink(t) {
    const n = wx(t);
    try {
      return new $f(n);
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xi {
  constructor() {
    this.providerId = Xi.PROVIDER_ID;
  }
  static credential(t, n) {
    return lo._fromEmailAndPassword(t, n);
  }
  static credentialWithLink(t, n) {
    const r = $f.parseLink(n);
    return K(r, "argument-error"), lo._fromEmailAndCode(t, r.code, r.tenantId);
  }
}
Xi.PROVIDER_ID = "password";
Xi.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
Xi.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xv {
  constructor(t) {
    (this.providerId = t),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(t) {
    this.defaultLanguageCode = t;
  }
  setCustomParameters(t) {
    return (this.customParameters = t), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ko extends Xv {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(t) {
    return this.scopes.includes(t) || this.scopes.push(t), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hn extends ko {
  constructor() {
    super("facebook.com");
  }
  static credential(t) {
    return Hr._fromParams({
      providerId: Hn.PROVIDER_ID,
      signInMethod: Hn.FACEBOOK_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Hn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Hn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return Hn.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Hn.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Hn.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wn extends ko {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(t, n) {
    return Hr._fromParams({
      providerId: Wn.PROVIDER_ID,
      signInMethod: Wn.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: n,
    });
  }
  static credentialFromResult(t) {
    return Wn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Wn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = t;
    if (!n && !r) return null;
    try {
      return Wn.credential(n, r);
    } catch {
      return null;
    }
  }
}
Wn.GOOGLE_SIGN_IN_METHOD = "google.com";
Wn.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gn extends ko {
  constructor() {
    super("github.com");
  }
  static credential(t) {
    return Hr._fromParams({
      providerId: Gn.PROVIDER_ID,
      signInMethod: Gn.GITHUB_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Gn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Gn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return Gn.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Gn.GITHUB_SIGN_IN_METHOD = "github.com";
Gn.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kn extends ko {
  constructor() {
    super("twitter.com");
  }
  static credential(t, n) {
    return Hr._fromParams({
      providerId: Kn.PROVIDER_ID,
      signInMethod: Kn.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(t) {
    return Kn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Kn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = t;
    if (!n || !r) return null;
    try {
      return Kn.credential(n, r);
    } catch {
      return null;
    }
  }
}
Kn.TWITTER_SIGN_IN_METHOD = "twitter.com";
Kn.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function _x(e, t) {
  return Eo(e, "POST", "/v1/accounts:signUp", xr(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wr {
  constructor(t) {
    (this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType);
  }
  static async _fromIdTokenResponse(t, n, r, i = !1) {
    const s = await yn._fromIdTokenResponse(t, r, i),
      o = zm(r);
    return new Wr({
      user: s,
      providerId: o,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(t, n, r) {
    await t._updateTokensIfNecessary(r, !0);
    const i = zm(r);
    return new Wr({
      user: t,
      providerId: i,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function zm(e) {
  return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hl extends An {
  constructor(t, n, r, i) {
    var s;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, hl.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: (s = t.tenantId) !== null && s !== void 0 ? s : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(t, n, r, i) {
    return new hl(t, n, r, i);
  }
}
function Jv(e, t, n, r) {
  return (
    t === "reauthenticate"
      ? n._getReauthenticationResolver(e)
      : n._getIdTokenResponse(e)
  ).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required"
      ? hl._fromErrorAndOperation(e, s, t, r)
      : s;
  });
}
async function Sx(e, t, n = !1) {
  const r = await zi(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
  return Wr._forOperation(e, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Cx(e, t, n = !1) {
  const { auth: r } = e;
  if (Qt(r.app)) return Promise.reject(Sn(r));
  const i = "reauthenticate";
  try {
    const s = await zi(e, Jv(r, i, t, e), n);
    K(s.idToken, r, "internal-error");
    const o = Ff(s.idToken);
    K(o, r, "internal-error");
    const { sub: l } = o;
    return K(e.uid === l, r, "user-mismatch"), Wr._forOperation(e, i, s);
  } catch (s) {
    throw (
      ((s == null ? void 0 : s.code) === "auth/user-not-found" &&
        Ht(r, "user-mismatch"),
      s)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Zv(e, t, n = !1) {
  if (Qt(e.app)) return Promise.reject(Sn(e));
  const r = "signIn",
    i = await Jv(e, r, t),
    s = await Wr._fromIdTokenResponse(e, r, i);
  return n || (await e._updateCurrentUser(s.user)), s;
}
async function xx(e, t) {
  return Zv(Zr(e), t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Qv(e) {
  const t = Zr(e);
  t._getPasswordPolicyInternal() && (await t._updatePasswordPolicy());
}
async function Ex(e, t, n) {
  if (Qt(e.app)) return Promise.reject(Sn(e));
  const r = Zr(e),
    o = await hd(
      r,
      {
        returnSecureToken: !0,
        email: t,
        password: n,
        clientType: "CLIENT_TYPE_WEB",
      },
      "signUpPassword",
      _x
    ).catch((u) => {
      throw (u.code === "auth/password-does-not-meet-requirements" && Qv(e), u);
    }),
    l = await Wr._fromIdTokenResponse(r, "signIn", o);
  return await r._updateCurrentUser(l.user), l;
}
function kx(e, t, n) {
  return Qt(e.app)
    ? Promise.reject(Sn(e))
    : xx(un(e), Xi.credential(t, n)).catch(async (r) => {
        throw (
          (r.code === "auth/password-does-not-meet-requirements" && Qv(e), r)
        );
      });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Tx(e, t) {
  return On(e, "POST", "/v1/accounts:update", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function bx(e, { displayName: t, photoURL: n }) {
  if (t === void 0 && n === void 0) return;
  const r = un(e),
    s = {
      idToken: await r.getIdToken(),
      displayName: t,
      photoUrl: n,
      returnSecureToken: !0,
    },
    o = await zi(r, Tx(r.auth, s));
  (r.displayName = o.displayName || null), (r.photoURL = o.photoUrl || null);
  const l = r.providerData.find(({ providerId: u }) => u === "password");
  l && ((l.displayName = r.displayName), (l.photoURL = r.photoURL)),
    await r._updateTokensIfNecessary(o);
}
function Ix(e, t, n, r) {
  return un(e).onIdTokenChanged(t, n, r);
}
function Nx(e, t, n) {
  return un(e).beforeAuthStateChanged(t, n);
}
function Px(e, t, n, r) {
  return un(e).onAuthStateChanged(t, n, r);
}
function Ax(e) {
  return un(e).signOut();
}
const pl = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e2 {
  constructor(t, n) {
    (this.storageRetriever = t), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(pl, "1"),
          this.storage.removeItem(pl),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(t, n) {
    return this.storage.setItem(t, JSON.stringify(n)), Promise.resolve();
  }
  _get(t) {
    const n = this.storage.getItem(t);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(t) {
    return this.storage.removeItem(t), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ox = 1e3,
  jx = 10;
class t2 extends e2 {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (t, n) => this.onStorageEvent(t, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.fallbackToPolling = Gv()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(t) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        i = this.localCache[n];
      r !== i && t(n, i, r);
    }
  }
  onStorageEvent(t, n = !1) {
    if (!t.key) {
      this.forAllChangedKeys((o, l, u) => {
        this.notifyListeners(o, u);
      });
      return;
    }
    const r = t.key;
    n ? this.detachListener() : this.stopPolling();
    const i = () => {
        const o = this.storage.getItem(r);
        (!n && this.localCache[r] === o) || this.notifyListeners(r, o);
      },
      s = this.storage.getItem(r);
    qC() && s !== t.newValue && t.newValue !== t.oldValue
      ? setTimeout(i, jx)
      : i();
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((t, n, r) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: t, oldValue: n, newValue: r }),
            !0
          );
        });
      }, Ox));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[t] ||
        ((this.listeners[t] = new Set()),
        (this.localCache[t] = this.storage.getItem(t))),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(t, n) {
    await super._set(t, n), (this.localCache[t] = JSON.stringify(n));
  }
  async _get(t) {
    const n = await super._get(t);
    return (this.localCache[t] = JSON.stringify(n)), n;
  }
  async _remove(t) {
    await super._remove(t), delete this.localCache[t];
  }
}
t2.type = "LOCAL";
const Lx = t2;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n2 extends e2 {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
n2.type = "SESSION";
const r2 = n2;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Rx(e) {
  return Promise.all(
    e.map(async (t) => {
      try {
        return { fulfilled: !0, value: await t };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bl {
  constructor(t) {
    (this.eventTarget = t),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(t) {
    const n = this.receivers.find((i) => i.isListeningto(t));
    if (n) return n;
    const r = new Bl(t);
    return this.receivers.push(r), r;
  }
  isListeningto(t) {
    return this.eventTarget === t;
  }
  async handleEvent(t) {
    const n = t,
      { eventId: r, eventType: i, data: s } = n.data,
      o = this.handlersMap[i];
    if (!(o != null && o.size)) return;
    n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i });
    const l = Array.from(o).map(async (c) => c(n.origin, s)),
      u = await Rx(l);
    n.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: i,
      response: u,
    });
  }
  _subscribe(t, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[t] || (this.handlersMap[t] = new Set()),
      this.handlersMap[t].add(n);
  }
  _unsubscribe(t, n) {
    this.handlersMap[t] && n && this.handlersMap[t].delete(n),
      (!n || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
Bl.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Bf(e = "", t = 10) {
  let n = "";
  for (let r = 0; r < t; r++) n += Math.floor(Math.random() * 10);
  return e + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mx {
  constructor(t) {
    (this.target = t), (this.handlers = new Set());
  }
  removeMessageHandler(t) {
    t.messageChannel &&
      (t.messageChannel.port1.removeEventListener("message", t.onMessage),
      t.messageChannel.port1.close()),
      this.handlers.delete(t);
  }
  async _send(t, n, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i) throw new Error("connection_unavailable");
    let s, o;
    return new Promise((l, u) => {
      const c = Bf("", 20);
      i.port1.start();
      const h = setTimeout(() => {
        u(new Error("unsupported_event"));
      }, r);
      (o = {
        messageChannel: i,
        onMessage(m) {
          const g = m;
          if (g.data.eventId === c)
            switch (g.data.status) {
              case "ack":
                clearTimeout(h),
                  (s = setTimeout(() => {
                    u(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(s), l(g.data.response);
                break;
              default:
                clearTimeout(h),
                  clearTimeout(s),
                  u(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(o),
        i.port1.addEventListener("message", o.onMessage),
        this.target.postMessage({ eventType: t, eventId: c, data: n }, [
          i.port2,
        ]);
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function on() {
  return window;
}
function Dx(e) {
  on().location.href = e;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function i2() {
  return (
    typeof on().WorkerGlobalScope < "u" &&
    typeof on().importScripts == "function"
  );
}
async function Fx() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function Ux() {
  var e;
  return (
    ((e = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    e === void 0
      ? void 0
      : e.controller) || null
  );
}
function zx() {
  return i2() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const s2 = "firebaseLocalStorageDb",
  $x = 1,
  ml = "firebaseLocalStorage",
  o2 = "fbase_key";
class To {
  constructor(t) {
    this.request = t;
  }
  toPromise() {
    return new Promise((t, n) => {
      this.request.addEventListener("success", () => {
        t(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          n(this.request.error);
        });
    });
  }
}
function Vl(e, t) {
  return e.transaction([ml], t ? "readwrite" : "readonly").objectStore(ml);
}
function Bx() {
  const e = indexedDB.deleteDatabase(s2);
  return new To(e).toPromise();
}
function pd() {
  const e = indexedDB.open(s2, $x);
  return new Promise((t, n) => {
    e.addEventListener("error", () => {
      n(e.error);
    }),
      e.addEventListener("upgradeneeded", () => {
        const r = e.result;
        try {
          r.createObjectStore(ml, { keyPath: o2 });
        } catch (i) {
          n(i);
        }
      }),
      e.addEventListener("success", async () => {
        const r = e.result;
        r.objectStoreNames.contains(ml)
          ? t(r)
          : (r.close(), await Bx(), t(await pd()));
      });
  });
}
async function $m(e, t, n) {
  const r = Vl(e, !0).put({ [o2]: t, value: n });
  return new To(r).toPromise();
}
async function Vx(e, t) {
  const n = Vl(e, !1).get(t),
    r = await new To(n).toPromise();
  return r === void 0 ? null : r.value;
}
function Bm(e, t) {
  const n = Vl(e, !0).delete(t);
  return new To(n).toPromise();
}
const Hx = 800,
  Wx = 3;
class a2 {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await pd()), this.db);
  }
  async _withRetries(t) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await t(r);
      } catch (r) {
        if (n++ > Wx) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return i2() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = Bl._getInstance(zx())),
      this.receiver._subscribe("keyChanged", async (t, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe("ping", async (t, n) => ["keyChanged"]);
  }
  async initializeSender() {
    var t, n;
    if (((this.activeServiceWorker = await Fx()), !this.activeServiceWorker))
      return;
    this.sender = new Mx(this.activeServiceWorker);
    const r = await this.sender._send("ping", {}, 800);
    r &&
      !((t = r[0]) === null || t === void 0) &&
      t.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(t) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        Ux() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: t },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const t = await pd();
      return await $m(t, pl, "1"), await Bm(t, pl), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(t) {
    this.pendingWrites++;
    try {
      await t();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(t, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => $m(r, t, n)),
        (this.localCache[t] = n),
        this.notifyServiceWorker(t)
      )
    );
  }
  async _get(t) {
    const n = await this._withRetries((r) => Vx(r, t));
    return (this.localCache[t] = n), n;
  }
  async _remove(t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => Bm(n, t)),
        delete this.localCache[t],
        this.notifyServiceWorker(t)
      )
    );
  }
  async _poll() {
    const t = await this._withRetries((i) => {
      const s = Vl(i, !1).getAll();
      return new To(s).toPromise();
    });
    if (!t) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    if (t.length !== 0)
      for (const { fbase_key: i, value: s } of t)
        r.add(i),
          JSON.stringify(this.localCache[i]) !== JSON.stringify(s) &&
            (this.notifyListeners(i, s), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] &&
        !r.has(i) &&
        (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), Hx));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
a2.type = "LOCAL";
const Gx = a2;
new xo(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Kx(e, t) {
  return t
    ? wn(t)
    : (K(e._popupRedirectResolver, e, "argument-error"),
      e._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vf extends zf {
  constructor(t) {
    super("custom", "custom"), (this.params = t);
  }
  _getIdTokenResponse(t) {
    return Ni(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, n) {
    return Ni(t, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(t) {
    return Ni(t, this._buildIdpRequest());
  }
  _buildIdpRequest(t) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return t && (n.idToken = t), n;
  }
}
function Yx(e) {
  return Zv(e.auth, new Vf(e), e.bypassAuthState);
}
function qx(e) {
  const { auth: t, user: n } = e;
  return K(n, t, "internal-error"), Cx(n, new Vf(e), e.bypassAuthState);
}
async function Xx(e) {
  const { auth: t, user: n } = e;
  return K(n, t, "internal-error"), Sx(n, new Vf(e), e.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class l2 {
  constructor(t, n, r, i, s = !1) {
    (this.auth = t),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = s),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (t, n) => {
      this.pendingPromise = { resolve: t, reject: n };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(t) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: i,
      tenantId: s,
      error: o,
      type: l,
    } = t;
    if (o) {
      this.reject(o);
      return;
    }
    const u = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(l)(u));
    } catch (c) {
      this.reject(c);
    }
  }
  onError(t) {
    this.reject(t);
  }
  getIdpTask(t) {
    switch (t) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return Yx;
      case "linkViaPopup":
      case "linkViaRedirect":
        return Xx;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return qx;
      default:
        Ht(this.auth, "internal-error");
    }
  }
  resolve(t) {
    bn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(t),
      this.unregisterAndCleanUp();
  }
  reject(t) {
    bn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(t),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Jx = new xo(2e3, 1e4);
class yi extends l2 {
  constructor(t, n, r, i, s) {
    super(t, n, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      yi.currentPopupAction && yi.currentPopupAction.cancel(),
      (yi.currentPopupAction = this);
  }
  async executeNotNull() {
    const t = await this.execute();
    return K(t, this.auth, "internal-error"), t;
  }
  async onExecution() {
    bn(this.filter.length === 1, "Popup operations only handle one event");
    const t = Bf();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      t
    )),
      (this.authWindow.associatedEvent = t),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(sn(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var t;
    return (
      ((t = this.authWindow) === null || t === void 0
        ? void 0
        : t.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(sn(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (yi.currentPopupAction = null);
  }
  pollUserCancellation() {
    const t = () => {
      var n, r;
      if (
        !(
          (r =
            (n = this.authWindow) === null || n === void 0
              ? void 0
              : n.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(sn(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(t, Jx.get());
    };
    t();
  }
}
yi.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Zx = "pendingRedirect",
  Na = new Map();
class Qx extends l2 {
  constructor(t, n, r = !1) {
    super(
      t,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      n,
      void 0,
      r
    ),
      (this.eventId = null);
  }
  async execute() {
    let t = Na.get(this.auth._key());
    if (!t) {
      try {
        const r = (await eE(this.resolver, this.auth))
          ? await super.execute()
          : null;
        t = () => Promise.resolve(r);
      } catch (n) {
        t = () => Promise.reject(n);
      }
      Na.set(this.auth._key(), t);
    }
    return (
      this.bypassAuthState ||
        Na.set(this.auth._key(), () => Promise.resolve(null)),
      t()
    );
  }
  async onAuthEvent(t) {
    if (t.type === "signInViaRedirect") return super.onAuthEvent(t);
    if (t.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (t.eventId) {
      const n = await this.auth._redirectUserForId(t.eventId);
      if (n) return (this.user = n), super.onAuthEvent(t);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function eE(e, t) {
  const n = rE(t),
    r = nE(e);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === "true";
  return await r._remove(n), i;
}
function tE(e, t) {
  Na.set(e._key(), t);
}
function nE(e) {
  return wn(e._redirectPersistence);
}
function rE(e) {
  return Ia(Zx, e.config.apiKey, e.name);
}
async function iE(e, t, n = !1) {
  if (Qt(e.app)) return Promise.reject(Sn(e));
  const r = Zr(e),
    i = Kx(r, t),
    o = await new Qx(r, i, n).execute();
  return (
    o &&
      !n &&
      (delete o.user._redirectEventId,
      await r._persistUserIfCurrent(o.user),
      await r._setRedirectUser(null, t)),
    o
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const sE = 10 * 60 * 1e3;
class oE {
  constructor(t) {
    (this.auth = t),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(t) {
    this.consumers.add(t),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, t) &&
        (this.sendToConsumer(this.queuedRedirectEvent, t),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(t) {
    this.consumers.delete(t);
  }
  onEvent(t) {
    if (this.hasEventBeenHandled(t)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(t, r) &&
          ((n = !0), this.sendToConsumer(t, r), this.saveEventToCache(t));
      }),
      this.hasHandledPotentialRedirect ||
        !aE(t) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = t), (n = !0))),
      n
    );
  }
  sendToConsumer(t, n) {
    var r;
    if (t.error && !u2(t)) {
      const i =
        ((r = t.error.code) === null || r === void 0
          ? void 0
          : r.split("auth/")[1]) || "internal-error";
      n.onError(sn(this.auth, i));
    } else n.onAuthEvent(t);
  }
  isEventForConsumer(t, n) {
    const r = n.eventId === null || (!!t.eventId && t.eventId === n.eventId);
    return n.filter.includes(t.type) && r;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= sE &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(Vm(t))
    );
  }
  saveEventToCache(t) {
    this.cachedEventUids.add(Vm(t)), (this.lastProcessedEventTime = Date.now());
  }
}
function Vm(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId]
    .filter((t) => t)
    .join("-");
}
function u2({ type: e, error: t }) {
  return (
    e === "unknown" && (t == null ? void 0 : t.code) === "auth/no-auth-event"
  );
}
function aE(e) {
  switch (e.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return u2(e);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function lE(e, t = {}) {
  return On(e, "GET", "/v1/projects", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const uE = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  cE = /^https?/;
async function dE(e) {
  if (e.config.emulator) return;
  const { authorizedDomains: t } = await lE(e);
  for (const n of t)
    try {
      if (fE(n)) return;
    } catch {}
  Ht(e, "unauthorized-domain");
}
function fE(e) {
  const t = dd(),
    { protocol: n, hostname: r } = new URL(t);
  if (e.startsWith("chrome-extension://")) {
    const o = new URL(e);
    return o.hostname === "" && r === ""
      ? n === "chrome-extension:" &&
          e.replace("chrome-extension://", "") ===
            t.replace("chrome-extension://", "")
      : n === "chrome-extension:" && o.hostname === r;
  }
  if (!cE.test(n)) return !1;
  if (uE.test(e)) return r === e;
  const i = e.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hE = new xo(3e4, 6e4);
function Hm() {
  const e = on().___jsl;
  if (e != null && e.H) {
    for (const t of Object.keys(e.H))
      if (
        ((e.H[t].r = e.H[t].r || []),
        (e.H[t].L = e.H[t].L || []),
        (e.H[t].r = [...e.H[t].L]),
        e.CP)
      )
        for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
  }
}
function pE(e) {
  return new Promise((t, n) => {
    var r, i, s;
    function o() {
      Hm(),
        gapi.load("gapi.iframes", {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            Hm(), n(sn(e, "network-request-failed"));
          },
          timeout: hE.get(),
        });
    }
    if (
      !(
        (i = (r = on().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || i === void 0
      ) &&
      i.Iframe
    )
      t(gapi.iframes.getContext());
    else if (!((s = on().gapi) === null || s === void 0) && s.load) o();
    else {
      const l = ix("iframefcb");
      return (
        (on()[l] = () => {
          gapi.load ? o() : n(sn(e, "network-request-failed"));
        }),
        Yv(`${rx()}?onload=${l}`).catch((u) => n(u))
      );
    }
  }).catch((t) => {
    throw ((Pa = null), t);
  });
}
let Pa = null;
function mE(e) {
  return (Pa = Pa || pE(e)), Pa;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gE = new xo(5e3, 15e3),
  vE = "__/auth/iframe",
  yE = "emulator/auth/iframe",
  wE = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  _E = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function SE(e) {
  const t = e.config;
  K(t.authDomain, e, "auth-domain-config-required");
  const n = t.emulator ? Df(t, yE) : `https://${e.config.authDomain}/${vE}`,
    r = { apiKey: t.apiKey, appName: e.name, v: qi },
    i = _E.get(e.config.apiHost);
  i && (r.eid = i);
  const s = e._getFrameworks();
  return s.length && (r.fw = s.join(",")), `${n}?${Co(r).slice(1)}`;
}
async function CE(e) {
  const t = await mE(e),
    n = on().gapi;
  return (
    K(n, e, "internal-error"),
    t.open(
      {
        where: document.body,
        url: SE(e),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: wE,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = sn(e, "network-request-failed"),
            l = on().setTimeout(() => {
              s(o);
            }, gE.get());
          function u() {
            on().clearTimeout(l), i(r);
          }
          r.ping(u).then(u, () => {
            s(o);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xE = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  EE = 500,
  kE = 600,
  TE = "_blank",
  bE = "http://localhost";
class Wm {
  constructor(t) {
    (this.window = t), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function IE(e, t, n, r = EE, i = kE) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let l = "";
  const u = Object.assign(Object.assign({}, xE), {
      width: r.toString(),
      height: i.toString(),
      top: s,
      left: o,
    }),
    c = rt().toLowerCase();
  n && (l = $v(c) ? TE : n), Uv(c) && ((t = t || bE), (u.scrollbars = "yes"));
  const h = Object.entries(u).reduce((g, [y, _]) => `${g}${y}=${_},`, "");
  if (YC(c) && l !== "_self") return NE(t || "", l), new Wm(null);
  const m = window.open(t || "", l, h);
  K(m, e, "popup-blocked");
  try {
    m.focus();
  } catch {}
  return new Wm(m);
}
function NE(e, t) {
  const n = document.createElement("a");
  (n.href = e), (n.target = t);
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const PE = "__/auth/handler",
  AE = "emulator/auth/handler",
  OE = encodeURIComponent("fac");
async function Gm(e, t, n, r, i, s) {
  K(e.config.authDomain, e, "auth-domain-config-required"),
    K(e.config.apiKey, e, "invalid-api-key");
  const o = {
    apiKey: e.config.apiKey,
    appName: e.name,
    authType: n,
    redirectUrl: r,
    v: qi,
    eventId: i,
  };
  if (t instanceof Xv) {
    t.setDefaultLanguage(e.languageCode),
      (o.providerId = t.providerId || ""),
      yS(t.getCustomParameters()) ||
        (o.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [h, m] of Object.entries({})) o[h] = m;
  }
  if (t instanceof ko) {
    const h = t.getScopes().filter((m) => m !== "");
    h.length > 0 && (o.scopes = h.join(","));
  }
  e.tenantId && (o.tid = e.tenantId);
  const l = o;
  for (const h of Object.keys(l)) l[h] === void 0 && delete l[h];
  const u = await e._getAppCheckToken(),
    c = u ? `#${OE}=${encodeURIComponent(u)}` : "";
  return `${jE(e)}?${Co(l).slice(1)}${c}`;
}
function jE({ config: e }) {
  return e.emulator ? Df(e, AE) : `https://${e.authDomain}/${PE}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ju = "webStorageSupport";
class LE {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = r2),
      (this._completeRedirectFn = iE),
      (this._overrideRedirectResult = tE);
  }
  async _openPopup(t, n, r, i) {
    var s;
    bn(
      (s = this.eventManagers[t._key()]) === null || s === void 0
        ? void 0
        : s.manager,
      "_initialize() not called before _openPopup()"
    );
    const o = await Gm(t, n, r, dd(), i);
    return IE(t, o, Bf());
  }
  async _openRedirect(t, n, r, i) {
    await this._originValidation(t);
    const s = await Gm(t, n, r, dd(), i);
    return Dx(s), new Promise(() => {});
  }
  _initialize(t) {
    const n = t._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: s } = this.eventManagers[n];
      return i
        ? Promise.resolve(i)
        : (bn(s, "If manager is not set, promise should be"), s);
    }
    const r = this.initAndGetManager(t);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(t) {
    const n = await CE(t),
      r = new oE(t);
    return (
      n.register(
        "authEvent",
        (i) => (
          K(i == null ? void 0 : i.authEvent, t, "invalid-auth-event"),
          { status: r.onEvent(i.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[t._key()] = { manager: r }),
      (this.iframes[t._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(t, n) {
    this.iframes[t._key()].send(
      Ju,
      { type: Ju },
      (i) => {
        var s;
        const o =
          (s = i == null ? void 0 : i[0]) === null || s === void 0
            ? void 0
            : s[Ju];
        o !== void 0 && n(!!o), Ht(t, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(t) {
    const n = t._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = dE(t)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return Gv() || zv() || Uf();
  }
}
const RE = LE;
var Km = "@firebase/auth",
  Ym = "1.7.9";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ME {
  constructor(t) {
    (this.auth = t), (this.internalListeners = new Map());
  }
  getUid() {
    var t;
    return (
      this.assertAuthConfigured(),
      ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) ||
        null
    );
  }
  async getToken(t) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(t) }
        : null
    );
  }
  addAuthTokenListener(t) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      t((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(t, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(t);
    n && (this.internalListeners.delete(t), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    K(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function DE(e) {
  switch (e) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function FE(e) {
  Ui(
    new Vr(
      "auth",
      (t, { options: n }) => {
        const r = t.getProvider("app").getImmediate(),
          i = t.getProvider("heartbeat"),
          s = t.getProvider("app-check-internal"),
          { apiKey: o, authDomain: l } = r.options;
        K(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
        const u = {
            apiKey: o,
            authDomain: l,
            clientPlatform: e,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: Kv(e),
          },
          c = new ex(r, i, s, u);
        return ux(c, n), c;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((t, n, r) => {
        t.getProvider("auth-internal").initialize();
      })
  ),
    Ui(
      new Vr(
        "auth-internal",
        (t) => {
          const n = Zr(t.getProvider("auth").getImmediate());
          return ((r) => new ME(r))(n);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    dr(Km, Ym, DE(e)),
    dr(Km, Ym, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const UE = 5 * 60,
  zE = xv("authIdTokenMaxAge") || UE;
let qm = null;
const $E = (e) => async (t) => {
  const n = t && (await t.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > zE) return;
  const i = n == null ? void 0 : n.token;
  qm !== i &&
    ((qm = i),
    await fetch(e, {
      method: i ? "POST" : "DELETE",
      headers: i ? { Authorization: `Bearer ${i}` } : {},
    }));
};
function BE(e = bv()) {
  const t = Lf(e, "auth");
  if (t.isInitialized()) return t.getImmediate();
  const n = lx(e, { popupRedirectResolver: RE, persistence: [Gx, Lx, r2] }),
    r = xv("authTokenSyncURL");
  if (r && typeof isSecureContext == "boolean" && isSecureContext) {
    const s = new URL(r, location.origin);
    if (location.origin === s.origin) {
      const o = $E(s.toString());
      Nx(n, o, () => o(n.currentUser)), Ix(n, (l) => o(l));
    }
  }
  const i = Sv("auth");
  return i && cx(n, `http://${i}`), n;
}
function VE() {
  var e, t;
  return (t =
    (e = document.getElementsByTagName("head")) === null || e === void 0
      ? void 0
      : e[0]) !== null && t !== void 0
    ? t
    : document;
}
tx({
  loadJS(e) {
    return new Promise((t, n) => {
      const r = document.createElement("script");
      r.setAttribute("src", e),
        (r.onload = t),
        (r.onerror = (i) => {
          const s = sn("internal-error");
          (s.customData = i), n(s);
        }),
        (r.type = "text/javascript"),
        (r.charset = "UTF-8"),
        VE().appendChild(r);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript:
    "https://www.google.com/recaptcha/enterprise.js?render=",
});
FE("Browser");
var HE = "firebase",
  WE = "10.14.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ dr(HE, WE, "app");
var Xm =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var c2;
(function () {
  var e;
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ function t(T, v) {
    function b() {}
    (b.prototype = v.prototype),
      (T.D = v.prototype),
      (T.prototype = new b()),
      (T.prototype.constructor = T),
      (T.C = function (k, x, P) {
        for (
          var I = Array(arguments.length - 2), V = 2;
          V < arguments.length;
          V++
        )
          I[V - 2] = arguments[V];
        return v.prototype[x].apply(k, I);
      });
  }
  function n() {
    this.blockSize = -1;
  }
  function r() {
    (this.blockSize = -1),
      (this.blockSize = 64),
      (this.g = Array(4)),
      (this.B = Array(this.blockSize)),
      (this.o = this.h = 0),
      this.s();
  }
  t(r, n),
    (r.prototype.s = function () {
      (this.g[0] = 1732584193),
        (this.g[1] = 4023233417),
        (this.g[2] = 2562383102),
        (this.g[3] = 271733878),
        (this.o = this.h = 0);
    });
  function i(T, v, b) {
    b || (b = 0);
    var k = Array(16);
    if (typeof v == "string")
      for (var x = 0; 16 > x; ++x)
        k[x] =
          v.charCodeAt(b++) |
          (v.charCodeAt(b++) << 8) |
          (v.charCodeAt(b++) << 16) |
          (v.charCodeAt(b++) << 24);
    else
      for (x = 0; 16 > x; ++x)
        k[x] = v[b++] | (v[b++] << 8) | (v[b++] << 16) | (v[b++] << 24);
    (v = T.g[0]), (b = T.g[1]), (x = T.g[2]);
    var P = T.g[3],
      I = (v + (P ^ (b & (x ^ P))) + k[0] + 3614090360) & 4294967295;
    (v = b + (((I << 7) & 4294967295) | (I >>> 25))),
      (I = (P + (x ^ (v & (b ^ x))) + k[1] + 3905402710) & 4294967295),
      (P = v + (((I << 12) & 4294967295) | (I >>> 20))),
      (I = (x + (b ^ (P & (v ^ b))) + k[2] + 606105819) & 4294967295),
      (x = P + (((I << 17) & 4294967295) | (I >>> 15))),
      (I = (b + (v ^ (x & (P ^ v))) + k[3] + 3250441966) & 4294967295),
      (b = x + (((I << 22) & 4294967295) | (I >>> 10))),
      (I = (v + (P ^ (b & (x ^ P))) + k[4] + 4118548399) & 4294967295),
      (v = b + (((I << 7) & 4294967295) | (I >>> 25))),
      (I = (P + (x ^ (v & (b ^ x))) + k[5] + 1200080426) & 4294967295),
      (P = v + (((I << 12) & 4294967295) | (I >>> 20))),
      (I = (x + (b ^ (P & (v ^ b))) + k[6] + 2821735955) & 4294967295),
      (x = P + (((I << 17) & 4294967295) | (I >>> 15))),
      (I = (b + (v ^ (x & (P ^ v))) + k[7] + 4249261313) & 4294967295),
      (b = x + (((I << 22) & 4294967295) | (I >>> 10))),
      (I = (v + (P ^ (b & (x ^ P))) + k[8] + 1770035416) & 4294967295),
      (v = b + (((I << 7) & 4294967295) | (I >>> 25))),
      (I = (P + (x ^ (v & (b ^ x))) + k[9] + 2336552879) & 4294967295),
      (P = v + (((I << 12) & 4294967295) | (I >>> 20))),
      (I = (x + (b ^ (P & (v ^ b))) + k[10] + 4294925233) & 4294967295),
      (x = P + (((I << 17) & 4294967295) | (I >>> 15))),
      (I = (b + (v ^ (x & (P ^ v))) + k[11] + 2304563134) & 4294967295),
      (b = x + (((I << 22) & 4294967295) | (I >>> 10))),
      (I = (v + (P ^ (b & (x ^ P))) + k[12] + 1804603682) & 4294967295),
      (v = b + (((I << 7) & 4294967295) | (I >>> 25))),
      (I = (P + (x ^ (v & (b ^ x))) + k[13] + 4254626195) & 4294967295),
      (P = v + (((I << 12) & 4294967295) | (I >>> 20))),
      (I = (x + (b ^ (P & (v ^ b))) + k[14] + 2792965006) & 4294967295),
      (x = P + (((I << 17) & 4294967295) | (I >>> 15))),
      (I = (b + (v ^ (x & (P ^ v))) + k[15] + 1236535329) & 4294967295),
      (b = x + (((I << 22) & 4294967295) | (I >>> 10))),
      (I = (v + (x ^ (P & (b ^ x))) + k[1] + 4129170786) & 4294967295),
      (v = b + (((I << 5) & 4294967295) | (I >>> 27))),
      (I = (P + (b ^ (x & (v ^ b))) + k[6] + 3225465664) & 4294967295),
      (P = v + (((I << 9) & 4294967295) | (I >>> 23))),
      (I = (x + (v ^ (b & (P ^ v))) + k[11] + 643717713) & 4294967295),
      (x = P + (((I << 14) & 4294967295) | (I >>> 18))),
      (I = (b + (P ^ (v & (x ^ P))) + k[0] + 3921069994) & 4294967295),
      (b = x + (((I << 20) & 4294967295) | (I >>> 12))),
      (I = (v + (x ^ (P & (b ^ x))) + k[5] + 3593408605) & 4294967295),
      (v = b + (((I << 5) & 4294967295) | (I >>> 27))),
      (I = (P + (b ^ (x & (v ^ b))) + k[10] + 38016083) & 4294967295),
      (P = v + (((I << 9) & 4294967295) | (I >>> 23))),
      (I = (x + (v ^ (b & (P ^ v))) + k[15] + 3634488961) & 4294967295),
      (x = P + (((I << 14) & 4294967295) | (I >>> 18))),
      (I = (b + (P ^ (v & (x ^ P))) + k[4] + 3889429448) & 4294967295),
      (b = x + (((I << 20) & 4294967295) | (I >>> 12))),
      (I = (v + (x ^ (P & (b ^ x))) + k[9] + 568446438) & 4294967295),
      (v = b + (((I << 5) & 4294967295) | (I >>> 27))),
      (I = (P + (b ^ (x & (v ^ b))) + k[14] + 3275163606) & 4294967295),
      (P = v + (((I << 9) & 4294967295) | (I >>> 23))),
      (I = (x + (v ^ (b & (P ^ v))) + k[3] + 4107603335) & 4294967295),
      (x = P + (((I << 14) & 4294967295) | (I >>> 18))),
      (I = (b + (P ^ (v & (x ^ P))) + k[8] + 1163531501) & 4294967295),
      (b = x + (((I << 20) & 4294967295) | (I >>> 12))),
      (I = (v + (x ^ (P & (b ^ x))) + k[13] + 2850285829) & 4294967295),
      (v = b + (((I << 5) & 4294967295) | (I >>> 27))),
      (I = (P + (b ^ (x & (v ^ b))) + k[2] + 4243563512) & 4294967295),
      (P = v + (((I << 9) & 4294967295) | (I >>> 23))),
      (I = (x + (v ^ (b & (P ^ v))) + k[7] + 1735328473) & 4294967295),
      (x = P + (((I << 14) & 4294967295) | (I >>> 18))),
      (I = (b + (P ^ (v & (x ^ P))) + k[12] + 2368359562) & 4294967295),
      (b = x + (((I << 20) & 4294967295) | (I >>> 12))),
      (I = (v + (b ^ x ^ P) + k[5] + 4294588738) & 4294967295),
      (v = b + (((I << 4) & 4294967295) | (I >>> 28))),
      (I = (P + (v ^ b ^ x) + k[8] + 2272392833) & 4294967295),
      (P = v + (((I << 11) & 4294967295) | (I >>> 21))),
      (I = (x + (P ^ v ^ b) + k[11] + 1839030562) & 4294967295),
      (x = P + (((I << 16) & 4294967295) | (I >>> 16))),
      (I = (b + (x ^ P ^ v) + k[14] + 4259657740) & 4294967295),
      (b = x + (((I << 23) & 4294967295) | (I >>> 9))),
      (I = (v + (b ^ x ^ P) + k[1] + 2763975236) & 4294967295),
      (v = b + (((I << 4) & 4294967295) | (I >>> 28))),
      (I = (P + (v ^ b ^ x) + k[4] + 1272893353) & 4294967295),
      (P = v + (((I << 11) & 4294967295) | (I >>> 21))),
      (I = (x + (P ^ v ^ b) + k[7] + 4139469664) & 4294967295),
      (x = P + (((I << 16) & 4294967295) | (I >>> 16))),
      (I = (b + (x ^ P ^ v) + k[10] + 3200236656) & 4294967295),
      (b = x + (((I << 23) & 4294967295) | (I >>> 9))),
      (I = (v + (b ^ x ^ P) + k[13] + 681279174) & 4294967295),
      (v = b + (((I << 4) & 4294967295) | (I >>> 28))),
      (I = (P + (v ^ b ^ x) + k[0] + 3936430074) & 4294967295),
      (P = v + (((I << 11) & 4294967295) | (I >>> 21))),
      (I = (x + (P ^ v ^ b) + k[3] + 3572445317) & 4294967295),
      (x = P + (((I << 16) & 4294967295) | (I >>> 16))),
      (I = (b + (x ^ P ^ v) + k[6] + 76029189) & 4294967295),
      (b = x + (((I << 23) & 4294967295) | (I >>> 9))),
      (I = (v + (b ^ x ^ P) + k[9] + 3654602809) & 4294967295),
      (v = b + (((I << 4) & 4294967295) | (I >>> 28))),
      (I = (P + (v ^ b ^ x) + k[12] + 3873151461) & 4294967295),
      (P = v + (((I << 11) & 4294967295) | (I >>> 21))),
      (I = (x + (P ^ v ^ b) + k[15] + 530742520) & 4294967295),
      (x = P + (((I << 16) & 4294967295) | (I >>> 16))),
      (I = (b + (x ^ P ^ v) + k[2] + 3299628645) & 4294967295),
      (b = x + (((I << 23) & 4294967295) | (I >>> 9))),
      (I = (v + (x ^ (b | ~P)) + k[0] + 4096336452) & 4294967295),
      (v = b + (((I << 6) & 4294967295) | (I >>> 26))),
      (I = (P + (b ^ (v | ~x)) + k[7] + 1126891415) & 4294967295),
      (P = v + (((I << 10) & 4294967295) | (I >>> 22))),
      (I = (x + (v ^ (P | ~b)) + k[14] + 2878612391) & 4294967295),
      (x = P + (((I << 15) & 4294967295) | (I >>> 17))),
      (I = (b + (P ^ (x | ~v)) + k[5] + 4237533241) & 4294967295),
      (b = x + (((I << 21) & 4294967295) | (I >>> 11))),
      (I = (v + (x ^ (b | ~P)) + k[12] + 1700485571) & 4294967295),
      (v = b + (((I << 6) & 4294967295) | (I >>> 26))),
      (I = (P + (b ^ (v | ~x)) + k[3] + 2399980690) & 4294967295),
      (P = v + (((I << 10) & 4294967295) | (I >>> 22))),
      (I = (x + (v ^ (P | ~b)) + k[10] + 4293915773) & 4294967295),
      (x = P + (((I << 15) & 4294967295) | (I >>> 17))),
      (I = (b + (P ^ (x | ~v)) + k[1] + 2240044497) & 4294967295),
      (b = x + (((I << 21) & 4294967295) | (I >>> 11))),
      (I = (v + (x ^ (b | ~P)) + k[8] + 1873313359) & 4294967295),
      (v = b + (((I << 6) & 4294967295) | (I >>> 26))),
      (I = (P + (b ^ (v | ~x)) + k[15] + 4264355552) & 4294967295),
      (P = v + (((I << 10) & 4294967295) | (I >>> 22))),
      (I = (x + (v ^ (P | ~b)) + k[6] + 2734768916) & 4294967295),
      (x = P + (((I << 15) & 4294967295) | (I >>> 17))),
      (I = (b + (P ^ (x | ~v)) + k[13] + 1309151649) & 4294967295),
      (b = x + (((I << 21) & 4294967295) | (I >>> 11))),
      (I = (v + (x ^ (b | ~P)) + k[4] + 4149444226) & 4294967295),
      (v = b + (((I << 6) & 4294967295) | (I >>> 26))),
      (I = (P + (b ^ (v | ~x)) + k[11] + 3174756917) & 4294967295),
      (P = v + (((I << 10) & 4294967295) | (I >>> 22))),
      (I = (x + (v ^ (P | ~b)) + k[2] + 718787259) & 4294967295),
      (x = P + (((I << 15) & 4294967295) | (I >>> 17))),
      (I = (b + (P ^ (x | ~v)) + k[9] + 3951481745) & 4294967295),
      (T.g[0] = (T.g[0] + v) & 4294967295),
      (T.g[1] =
        (T.g[1] + (x + (((I << 21) & 4294967295) | (I >>> 11)))) & 4294967295),
      (T.g[2] = (T.g[2] + x) & 4294967295),
      (T.g[3] = (T.g[3] + P) & 4294967295);
  }
  (r.prototype.u = function (T, v) {
    v === void 0 && (v = T.length);
    for (var b = v - this.blockSize, k = this.B, x = this.h, P = 0; P < v; ) {
      if (x == 0) for (; P <= b; ) i(this, T, P), (P += this.blockSize);
      if (typeof T == "string") {
        for (; P < v; )
          if (((k[x++] = T.charCodeAt(P++)), x == this.blockSize)) {
            i(this, k), (x = 0);
            break;
          }
      } else
        for (; P < v; )
          if (((k[x++] = T[P++]), x == this.blockSize)) {
            i(this, k), (x = 0);
            break;
          }
    }
    (this.h = x), (this.o += v);
  }),
    (r.prototype.v = function () {
      var T = Array(
        (56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h
      );
      T[0] = 128;
      for (var v = 1; v < T.length - 8; ++v) T[v] = 0;
      var b = 8 * this.o;
      for (v = T.length - 8; v < T.length; ++v) (T[v] = b & 255), (b /= 256);
      for (this.u(T), T = Array(16), v = b = 0; 4 > v; ++v)
        for (var k = 0; 32 > k; k += 8) T[b++] = (this.g[v] >>> k) & 255;
      return T;
    });
  function s(T, v) {
    var b = l;
    return Object.prototype.hasOwnProperty.call(b, T) ? b[T] : (b[T] = v(T));
  }
  function o(T, v) {
    this.h = v;
    for (var b = [], k = !0, x = T.length - 1; 0 <= x; x--) {
      var P = T[x] | 0;
      (k && P == v) || ((b[x] = P), (k = !1));
    }
    this.g = b;
  }
  var l = {};
  function u(T) {
    return -128 <= T && 128 > T
      ? s(T, function (v) {
          return new o([v | 0], 0 > v ? -1 : 0);
        })
      : new o([T | 0], 0 > T ? -1 : 0);
  }
  function c(T) {
    if (isNaN(T) || !isFinite(T)) return m;
    if (0 > T) return N(c(-T));
    for (var v = [], b = 1, k = 0; T >= b; k++)
      (v[k] = (T / b) | 0), (b *= 4294967296);
    return new o(v, 0);
  }
  function h(T, v) {
    if (T.length == 0) throw Error("number format error: empty string");
    if (((v = v || 10), 2 > v || 36 < v))
      throw Error("radix out of range: " + v);
    if (T.charAt(0) == "-") return N(h(T.substring(1), v));
    if (0 <= T.indexOf("-"))
      throw Error('number format error: interior "-" character');
    for (var b = c(Math.pow(v, 8)), k = m, x = 0; x < T.length; x += 8) {
      var P = Math.min(8, T.length - x),
        I = parseInt(T.substring(x, x + P), v);
      8 > P
        ? ((P = c(Math.pow(v, P))), (k = k.j(P).add(c(I))))
        : ((k = k.j(b)), (k = k.add(c(I))));
    }
    return k;
  }
  var m = u(0),
    g = u(1),
    y = u(16777216);
  (e = o.prototype),
    (e.m = function () {
      if (A(this)) return -N(this).m();
      for (var T = 0, v = 1, b = 0; b < this.g.length; b++) {
        var k = this.i(b);
        (T += (0 <= k ? k : 4294967296 + k) * v), (v *= 4294967296);
      }
      return T;
    }),
    (e.toString = function (T) {
      if (((T = T || 10), 2 > T || 36 < T))
        throw Error("radix out of range: " + T);
      if (_(this)) return "0";
      if (A(this)) return "-" + N(this).toString(T);
      for (var v = c(Math.pow(T, 6)), b = this, k = ""; ; ) {
        var x = O(b, v).g;
        b = C(b, x.j(v));
        var P = ((0 < b.g.length ? b.g[0] : b.h) >>> 0).toString(T);
        if (((b = x), _(b))) return P + k;
        for (; 6 > P.length; ) P = "0" + P;
        k = P + k;
      }
    }),
    (e.i = function (T) {
      return 0 > T ? 0 : T < this.g.length ? this.g[T] : this.h;
    });
  function _(T) {
    if (T.h != 0) return !1;
    for (var v = 0; v < T.g.length; v++) if (T.g[v] != 0) return !1;
    return !0;
  }
  function A(T) {
    return T.h == -1;
  }
  e.l = function (T) {
    return (T = C(this, T)), A(T) ? -1 : _(T) ? 0 : 1;
  };
  function N(T) {
    for (var v = T.g.length, b = [], k = 0; k < v; k++) b[k] = ~T.g[k];
    return new o(b, ~T.h).add(g);
  }
  (e.abs = function () {
    return A(this) ? N(this) : this;
  }),
    (e.add = function (T) {
      for (
        var v = Math.max(this.g.length, T.g.length), b = [], k = 0, x = 0;
        x <= v;
        x++
      ) {
        var P = k + (this.i(x) & 65535) + (T.i(x) & 65535),
          I = (P >>> 16) + (this.i(x) >>> 16) + (T.i(x) >>> 16);
        (k = I >>> 16), (P &= 65535), (I &= 65535), (b[x] = (I << 16) | P);
      }
      return new o(b, b[b.length - 1] & -2147483648 ? -1 : 0);
    });
  function C(T, v) {
    return T.add(N(v));
  }
  e.j = function (T) {
    if (_(this) || _(T)) return m;
    if (A(this)) return A(T) ? N(this).j(N(T)) : N(N(this).j(T));
    if (A(T)) return N(this.j(N(T)));
    if (0 > this.l(y) && 0 > T.l(y)) return c(this.m() * T.m());
    for (var v = this.g.length + T.g.length, b = [], k = 0; k < 2 * v; k++)
      b[k] = 0;
    for (k = 0; k < this.g.length; k++)
      for (var x = 0; x < T.g.length; x++) {
        var P = this.i(k) >>> 16,
          I = this.i(k) & 65535,
          V = T.i(x) >>> 16,
          ie = T.i(x) & 65535;
        (b[2 * k + 2 * x] += I * ie),
          S(b, 2 * k + 2 * x),
          (b[2 * k + 2 * x + 1] += P * ie),
          S(b, 2 * k + 2 * x + 1),
          (b[2 * k + 2 * x + 1] += I * V),
          S(b, 2 * k + 2 * x + 1),
          (b[2 * k + 2 * x + 2] += P * V),
          S(b, 2 * k + 2 * x + 2);
      }
    for (k = 0; k < v; k++) b[k] = (b[2 * k + 1] << 16) | b[2 * k];
    for (k = v; k < 2 * v; k++) b[k] = 0;
    return new o(b, 0);
  };
  function S(T, v) {
    for (; (T[v] & 65535) != T[v]; )
      (T[v + 1] += T[v] >>> 16), (T[v] &= 65535), v++;
  }
  function E(T, v) {
    (this.g = T), (this.h = v);
  }
  function O(T, v) {
    if (_(v)) throw Error("division by zero");
    if (_(T)) return new E(m, m);
    if (A(T)) return (v = O(N(T), v)), new E(N(v.g), N(v.h));
    if (A(v)) return (v = O(T, N(v))), new E(N(v.g), v.h);
    if (30 < T.g.length) {
      if (A(T) || A(v))
        throw Error("slowDivide_ only works with positive integers.");
      for (var b = g, k = v; 0 >= k.l(T); ) (b = L(b)), (k = L(k));
      var x = D(b, 1),
        P = D(k, 1);
      for (k = D(k, 2), b = D(b, 2); !_(k); ) {
        var I = P.add(k);
        0 >= I.l(T) && ((x = x.add(b)), (P = I)), (k = D(k, 1)), (b = D(b, 1));
      }
      return (v = C(T, x.j(v))), new E(x, v);
    }
    for (x = m; 0 <= T.l(v); ) {
      for (
        b = Math.max(1, Math.floor(T.m() / v.m())),
          k = Math.ceil(Math.log(b) / Math.LN2),
          k = 48 >= k ? 1 : Math.pow(2, k - 48),
          P = c(b),
          I = P.j(v);
        A(I) || 0 < I.l(T);

      )
        (b -= k), (P = c(b)), (I = P.j(v));
      _(P) && (P = g), (x = x.add(P)), (T = C(T, I));
    }
    return new E(x, T);
  }
  (e.A = function (T) {
    return O(this, T).h;
  }),
    (e.and = function (T) {
      for (
        var v = Math.max(this.g.length, T.g.length), b = [], k = 0;
        k < v;
        k++
      )
        b[k] = this.i(k) & T.i(k);
      return new o(b, this.h & T.h);
    }),
    (e.or = function (T) {
      for (
        var v = Math.max(this.g.length, T.g.length), b = [], k = 0;
        k < v;
        k++
      )
        b[k] = this.i(k) | T.i(k);
      return new o(b, this.h | T.h);
    }),
    (e.xor = function (T) {
      for (
        var v = Math.max(this.g.length, T.g.length), b = [], k = 0;
        k < v;
        k++
      )
        b[k] = this.i(k) ^ T.i(k);
      return new o(b, this.h ^ T.h);
    });
  function L(T) {
    for (var v = T.g.length + 1, b = [], k = 0; k < v; k++)
      b[k] = (T.i(k) << 1) | (T.i(k - 1) >>> 31);
    return new o(b, T.h);
  }
  function D(T, v) {
    var b = v >> 5;
    v %= 32;
    for (var k = T.g.length - b, x = [], P = 0; P < k; P++)
      x[P] =
        0 < v ? (T.i(P + b) >>> v) | (T.i(P + b + 1) << (32 - v)) : T.i(P + b);
    return new o(x, T.h);
  }
  (r.prototype.digest = r.prototype.v),
    (r.prototype.reset = r.prototype.s),
    (r.prototype.update = r.prototype.u),
    (o.prototype.add = o.prototype.add),
    (o.prototype.multiply = o.prototype.j),
    (o.prototype.modulo = o.prototype.A),
    (o.prototype.compare = o.prototype.l),
    (o.prototype.toNumber = o.prototype.m),
    (o.prototype.toString = o.prototype.toString),
    (o.prototype.getBits = o.prototype.i),
    (o.fromNumber = c),
    (o.fromString = h),
    (c2 = o);
}).apply(
  typeof Xm < "u"
    ? Xm
    : typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : {}
);
var da =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
(function () {
  var e,
    t =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, d, p) {
            return (
              a == Array.prototype || a == Object.prototype || (a[d] = p.value),
              a
            );
          };
  function n(a) {
    a = [
      typeof globalThis == "object" && globalThis,
      a,
      typeof window == "object" && window,
      typeof self == "object" && self,
      typeof da == "object" && da,
    ];
    for (var d = 0; d < a.length; ++d) {
      var p = a[d];
      if (p && p.Math == Math) return p;
    }
    throw Error("Cannot find global object");
  }
  var r = n(this);
  function i(a, d) {
    if (d)
      e: {
        var p = r;
        a = a.split(".");
        for (var w = 0; w < a.length - 1; w++) {
          var j = a[w];
          if (!(j in p)) break e;
          p = p[j];
        }
        (a = a[a.length - 1]),
          (w = p[a]),
          (d = d(w)),
          d != w &&
            d != null &&
            t(p, a, { configurable: !0, writable: !0, value: d });
      }
  }
  function s(a, d) {
    a instanceof String && (a += "");
    var p = 0,
      w = !1,
      j = {
        next: function () {
          if (!w && p < a.length) {
            var M = p++;
            return { value: d(M, a[M]), done: !1 };
          }
          return (w = !0), { done: !0, value: void 0 };
        },
      };
    return (
      (j[Symbol.iterator] = function () {
        return j;
      }),
      j
    );
  }
  i("Array.prototype.values", function (a) {
    return (
      a ||
      function () {
        return s(this, function (d, p) {
          return p;
        });
      }
    );
  });
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ var o = o || {},
    l = this || self;
  function u(a) {
    var d = typeof a;
    return (
      (d = d != "object" ? d : a ? (Array.isArray(a) ? "array" : d) : "null"),
      d == "array" || (d == "object" && typeof a.length == "number")
    );
  }
  function c(a) {
    var d = typeof a;
    return (d == "object" && a != null) || d == "function";
  }
  function h(a, d, p) {
    return a.call.apply(a.bind, arguments);
  }
  function m(a, d, p) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var w = Array.prototype.slice.call(arguments, 2);
      return function () {
        var j = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(j, w), a.apply(d, j);
      };
    }
    return function () {
      return a.apply(d, arguments);
    };
  }
  function g(a, d, p) {
    return (
      (g =
        Function.prototype.bind &&
        Function.prototype.bind.toString().indexOf("native code") != -1
          ? h
          : m),
      g.apply(null, arguments)
    );
  }
  function y(a, d) {
    var p = Array.prototype.slice.call(arguments, 1);
    return function () {
      var w = p.slice();
      return w.push.apply(w, arguments), a.apply(this, w);
    };
  }
  function _(a, d) {
    function p() {}
    (p.prototype = d.prototype),
      (a.aa = d.prototype),
      (a.prototype = new p()),
      (a.prototype.constructor = a),
      (a.Qb = function (w, j, M) {
        for (
          var z = Array(arguments.length - 2), ue = 2;
          ue < arguments.length;
          ue++
        )
          z[ue - 2] = arguments[ue];
        return d.prototype[j].apply(w, z);
      });
  }
  function A(a) {
    const d = a.length;
    if (0 < d) {
      const p = Array(d);
      for (let w = 0; w < d; w++) p[w] = a[w];
      return p;
    }
    return [];
  }
  function N(a, d) {
    for (let p = 1; p < arguments.length; p++) {
      const w = arguments[p];
      if (u(w)) {
        const j = a.length || 0,
          M = w.length || 0;
        a.length = j + M;
        for (let z = 0; z < M; z++) a[j + z] = w[z];
      } else a.push(w);
    }
  }
  class C {
    constructor(d, p) {
      (this.i = d), (this.j = p), (this.h = 0), (this.g = null);
    }
    get() {
      let d;
      return (
        0 < this.h
          ? (this.h--, (d = this.g), (this.g = d.next), (d.next = null))
          : (d = this.i()),
        d
      );
    }
  }
  function S(a) {
    return /^[\s\xa0]*$/.test(a);
  }
  function E() {
    var a = l.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  function O(a) {
    return O[" "](a), a;
  }
  O[" "] = function () {};
  var L =
    E().indexOf("Gecko") != -1 &&
    !(E().toLowerCase().indexOf("webkit") != -1 && E().indexOf("Edge") == -1) &&
    !(E().indexOf("Trident") != -1 || E().indexOf("MSIE") != -1) &&
    E().indexOf("Edge") == -1;
  function D(a, d, p) {
    for (const w in a) d.call(p, a[w], w, a);
  }
  function T(a, d) {
    for (const p in a) d.call(void 0, a[p], p, a);
  }
  function v(a) {
    const d = {};
    for (const p in a) d[p] = a[p];
    return d;
  }
  const b =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  function k(a, d) {
    let p, w;
    for (let j = 1; j < arguments.length; j++) {
      w = arguments[j];
      for (p in w) a[p] = w[p];
      for (let M = 0; M < b.length; M++)
        (p = b[M]), Object.prototype.hasOwnProperty.call(w, p) && (a[p] = w[p]);
    }
  }
  function x(a) {
    var d = 1;
    a = a.split(":");
    const p = [];
    for (; 0 < d && a.length; ) p.push(a.shift()), d--;
    return a.length && p.push(a.join(":")), p;
  }
  function P(a) {
    l.setTimeout(() => {
      throw a;
    }, 0);
  }
  function I() {
    var a = W;
    let d = null;
    return (
      a.g &&
        ((d = a.g), (a.g = a.g.next), a.g || (a.h = null), (d.next = null)),
      d
    );
  }
  class V {
    constructor() {
      this.h = this.g = null;
    }
    add(d, p) {
      const w = ie.get();
      w.set(d, p), this.h ? (this.h.next = w) : (this.g = w), (this.h = w);
    }
  }
  var ie = new C(
    () => new Ee(),
    (a) => a.reset()
  );
  class Ee {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(d, p) {
      (this.h = d), (this.g = p), (this.next = null);
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let X,
    U = !1,
    W = new V(),
    G = () => {
      const a = l.Promise.resolve(void 0);
      X = () => {
        a.then(se);
      };
    };
  var se = () => {
    for (var a; (a = I()); ) {
      try {
        a.h.call(a.g);
      } catch (p) {
        P(p);
      }
      var d = ie;
      d.j(a), 100 > d.h && (d.h++, (a.next = d.g), (d.g = a));
    }
    U = !1;
  };
  function J() {
    (this.s = this.s), (this.C = this.C);
  }
  (J.prototype.s = !1),
    (J.prototype.ma = function () {
      this.s || ((this.s = !0), this.N());
    }),
    (J.prototype.N = function () {
      if (this.C) for (; this.C.length; ) this.C.shift()();
    });
  function ee(a, d) {
    (this.type = a), (this.g = this.target = d), (this.defaultPrevented = !1);
  }
  ee.prototype.h = function () {
    this.defaultPrevented = !0;
  };
  var Se = (function () {
    if (!l.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      d = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        },
      });
    try {
      const p = () => {};
      l.addEventListener("test", p, d), l.removeEventListener("test", p, d);
    } catch {}
    return a;
  })();
  function Ie(a, d) {
    if (
      (ee.call(this, a ? a.type : ""),
      (this.relatedTarget = this.g = this.target = null),
      (this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0),
      (this.key = ""),
      (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
      (this.state = null),
      (this.pointerId = 0),
      (this.pointerType = ""),
      (this.i = null),
      a)
    ) {
      var p = (this.type = a.type),
        w =
          a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : null;
      if (
        ((this.target = a.target || a.srcElement),
        (this.g = d),
        (d = a.relatedTarget))
      ) {
        if (L) {
          e: {
            try {
              O(d.nodeName);
              var j = !0;
              break e;
            } catch {}
            j = !1;
          }
          j || (d = null);
        }
      } else
        p == "mouseover"
          ? (d = a.fromElement)
          : p == "mouseout" && (d = a.toElement);
      (this.relatedTarget = d),
        w
          ? ((this.clientX = w.clientX !== void 0 ? w.clientX : w.pageX),
            (this.clientY = w.clientY !== void 0 ? w.clientY : w.pageY),
            (this.screenX = w.screenX || 0),
            (this.screenY = w.screenY || 0))
          : ((this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX),
            (this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY),
            (this.screenX = a.screenX || 0),
            (this.screenY = a.screenY || 0)),
        (this.button = a.button),
        (this.key = a.key || ""),
        (this.ctrlKey = a.ctrlKey),
        (this.altKey = a.altKey),
        (this.shiftKey = a.shiftKey),
        (this.metaKey = a.metaKey),
        (this.pointerId = a.pointerId || 0),
        (this.pointerType =
          typeof a.pointerType == "string"
            ? a.pointerType
            : Ne[a.pointerType] || ""),
        (this.state = a.state),
        (this.i = a),
        a.defaultPrevented && Ie.aa.h.call(this);
    }
  }
  _(Ie, ee);
  var Ne = { 2: "touch", 3: "pen", 4: "mouse" };
  Ie.prototype.h = function () {
    Ie.aa.h.call(this);
    var a = this.i;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var ae = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    ke = 0;
  function Je(a, d, p, w, j) {
    (this.listener = a),
      (this.proxy = null),
      (this.src = d),
      (this.type = p),
      (this.capture = !!w),
      (this.ha = j),
      (this.key = ++ke),
      (this.da = this.fa = !1);
  }
  function ht(a) {
    (a.da = !0),
      (a.listener = null),
      (a.proxy = null),
      (a.src = null),
      (a.ha = null);
  }
  function pt(a) {
    (this.src = a), (this.g = {}), (this.h = 0);
  }
  pt.prototype.add = function (a, d, p, w, j) {
    var M = a.toString();
    (a = this.g[M]), a || ((a = this.g[M] = []), this.h++);
    var z = le(a, d, w, j);
    return (
      -1 < z
        ? ((d = a[z]), p || (d.fa = !1))
        : ((d = new Je(d, this.src, M, !!w, j)), (d.fa = p), a.push(d)),
      d
    );
  };
  function mt(a, d) {
    var p = d.type;
    if (p in a.g) {
      var w = a.g[p],
        j = Array.prototype.indexOf.call(w, d, void 0),
        M;
      (M = 0 <= j) && Array.prototype.splice.call(w, j, 1),
        M && (ht(d), a.g[p].length == 0 && (delete a.g[p], a.h--));
    }
  }
  function le(a, d, p, w) {
    for (var j = 0; j < a.length; ++j) {
      var M = a[j];
      if (!M.da && M.listener == d && M.capture == !!p && M.ha == w) return j;
    }
    return -1;
  }
  var te = "closure_lm_" + ((1e6 * Math.random()) | 0),
    Le = {};
  function Lt(a, d, p, w, j) {
    if (Array.isArray(d)) {
      for (var M = 0; M < d.length; M++) Lt(a, d[M], p, w, j);
      return null;
    }
    return (
      (p = lh(p)),
      a && a[ae]
        ? a.K(d, p, c(w) ? !!w.capture : !!w, j)
        : Ao(a, d, p, !1, w, j)
    );
  }
  function Ao(a, d, p, w, j, M) {
    if (!d) throw Error("Invalid event type");
    var z = c(j) ? !!j.capture : !!j,
      ue = ql(a);
    if ((ue || (a[te] = ue = new pt(a)), (p = ue.add(d, p, w, z, M)), p.proxy))
      return p;
    if (
      ((w = cy()),
      (p.proxy = w),
      (w.src = a),
      (w.listener = p),
      a.addEventListener)
    )
      Se || (j = z),
        j === void 0 && (j = !1),
        a.addEventListener(d.toString(), w, j);
    else if (a.attachEvent) a.attachEvent(ah(d.toString()), w);
    else if (a.addListener && a.removeListener) a.addListener(w);
    else throw Error("addEventListener and attachEvent are unavailable.");
    return p;
  }
  function cy() {
    function a(p) {
      return d.call(a.src, a.listener, p);
    }
    const d = dy;
    return a;
  }
  function oh(a, d, p, w, j) {
    if (Array.isArray(d))
      for (var M = 0; M < d.length; M++) oh(a, d[M], p, w, j);
    else
      (w = c(w) ? !!w.capture : !!w),
        (p = lh(p)),
        a && a[ae]
          ? ((a = a.i),
            (d = String(d).toString()),
            d in a.g &&
              ((M = a.g[d]),
              (p = le(M, p, w, j)),
              -1 < p &&
                (ht(M[p]),
                Array.prototype.splice.call(M, p, 1),
                M.length == 0 && (delete a.g[d], a.h--))))
          : a &&
            (a = ql(a)) &&
            ((d = a.g[d.toString()]),
            (a = -1),
            d && (a = le(d, p, w, j)),
            (p = -1 < a ? d[a] : null) && Yl(p));
  }
  function Yl(a) {
    if (typeof a != "number" && a && !a.da) {
      var d = a.src;
      if (d && d[ae]) mt(d.i, a);
      else {
        var p = a.type,
          w = a.proxy;
        d.removeEventListener
          ? d.removeEventListener(p, w, a.capture)
          : d.detachEvent
          ? d.detachEvent(ah(p), w)
          : d.addListener && d.removeListener && d.removeListener(w),
          (p = ql(d))
            ? (mt(p, a), p.h == 0 && ((p.src = null), (d[te] = null)))
            : ht(a);
      }
    }
  }
  function ah(a) {
    return a in Le ? Le[a] : (Le[a] = "on" + a);
  }
  function dy(a, d) {
    if (a.da) a = !0;
    else {
      d = new Ie(d, this);
      var p = a.listener,
        w = a.ha || a.src;
      a.fa && Yl(a), (a = p.call(w, d));
    }
    return a;
  }
  function ql(a) {
    return (a = a[te]), a instanceof pt ? a : null;
  }
  var Xl = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  function lh(a) {
    return typeof a == "function"
      ? a
      : (a[Xl] ||
          (a[Xl] = function (d) {
            return a.handleEvent(d);
          }),
        a[Xl]);
  }
  function He() {
    J.call(this), (this.i = new pt(this)), (this.M = this), (this.F = null);
  }
  _(He, J),
    (He.prototype[ae] = !0),
    (He.prototype.removeEventListener = function (a, d, p, w) {
      oh(this, a, d, p, w);
    });
  function Ze(a, d) {
    var p,
      w = a.F;
    if (w) for (p = []; w; w = w.F) p.push(w);
    if (((a = a.M), (w = d.type || d), typeof d == "string")) d = new ee(d, a);
    else if (d instanceof ee) d.target = d.target || a;
    else {
      var j = d;
      (d = new ee(w, a)), k(d, j);
    }
    if (((j = !0), p))
      for (var M = p.length - 1; 0 <= M; M--) {
        var z = (d.g = p[M]);
        j = Oo(z, w, !0, d) && j;
      }
    if (
      ((z = d.g = a), (j = Oo(z, w, !0, d) && j), (j = Oo(z, w, !1, d) && j), p)
    )
      for (M = 0; M < p.length; M++)
        (z = d.g = p[M]), (j = Oo(z, w, !1, d) && j);
  }
  (He.prototype.N = function () {
    if ((He.aa.N.call(this), this.i)) {
      var a = this.i,
        d;
      for (d in a.g) {
        for (var p = a.g[d], w = 0; w < p.length; w++) ht(p[w]);
        delete a.g[d], a.h--;
      }
    }
    this.F = null;
  }),
    (He.prototype.K = function (a, d, p, w) {
      return this.i.add(String(a), d, !1, p, w);
    }),
    (He.prototype.L = function (a, d, p, w) {
      return this.i.add(String(a), d, !0, p, w);
    });
  function Oo(a, d, p, w) {
    if (((d = a.i.g[String(d)]), !d)) return !0;
    d = d.concat();
    for (var j = !0, M = 0; M < d.length; ++M) {
      var z = d[M];
      if (z && !z.da && z.capture == p) {
        var ue = z.listener,
          Ue = z.ha || z.src;
        z.fa && mt(a.i, z), (j = ue.call(Ue, w) !== !1 && j);
      }
    }
    return j && !w.defaultPrevented;
  }
  function uh(a, d, p) {
    if (typeof a == "function") p && (a = g(a, p));
    else if (a && typeof a.handleEvent == "function") a = g(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(d) ? -1 : l.setTimeout(a, d || 0);
  }
  function ch(a) {
    a.g = uh(() => {
      (a.g = null), a.i && ((a.i = !1), ch(a));
    }, a.l);
    const d = a.h;
    (a.h = null), a.m.apply(null, d);
  }
  class fy extends J {
    constructor(d, p) {
      super(),
        (this.m = d),
        (this.l = p),
        (this.h = null),
        (this.i = !1),
        (this.g = null);
    }
    j(d) {
      (this.h = arguments), this.g ? (this.i = !0) : ch(this);
    }
    N() {
      super.N(),
        this.g &&
          (l.clearTimeout(this.g),
          (this.g = null),
          (this.i = !1),
          (this.h = null));
    }
  }
  function Zi(a) {
    J.call(this), (this.h = a), (this.g = {});
  }
  _(Zi, J);
  var dh = [];
  function fh(a) {
    D(
      a.g,
      function (d, p) {
        this.g.hasOwnProperty(p) && Yl(d);
      },
      a
    ),
      (a.g = {});
  }
  (Zi.prototype.N = function () {
    Zi.aa.N.call(this), fh(this);
  }),
    (Zi.prototype.handleEvent = function () {
      throw Error("EventHandler.handleEvent not implemented");
    });
  var Jl = l.JSON.stringify,
    hy = l.JSON.parse,
    py = class {
      stringify(a) {
        return l.JSON.stringify(a, void 0);
      }
      parse(a) {
        return l.JSON.parse(a, void 0);
      }
    };
  function Zl() {}
  Zl.prototype.h = null;
  function hh(a) {
    return a.h || (a.h = a.i());
  }
  function my() {}
  var Qi = { OPEN: "a", kb: "b", Ja: "c", wb: "d" };
  function Ql() {
    ee.call(this, "d");
  }
  _(Ql, ee);
  function eu() {
    ee.call(this, "c");
  }
  _(eu, ee);
  var Qr = {},
    ph = null;
  function tu() {
    return (ph = ph || new He());
  }
  Qr.La = "serverreachability";
  function mh(a) {
    ee.call(this, Qr.La, a);
  }
  _(mh, ee);
  function es(a) {
    const d = tu();
    Ze(d, new mh(d));
  }
  Qr.STAT_EVENT = "statevent";
  function gh(a, d) {
    ee.call(this, Qr.STAT_EVENT, a), (this.stat = d);
  }
  _(gh, ee);
  function Qe(a) {
    const d = tu();
    Ze(d, new gh(d, a));
  }
  Qr.Ma = "timingevent";
  function vh(a, d) {
    ee.call(this, Qr.Ma, a), (this.size = d);
  }
  _(vh, ee);
  function ts(a, d) {
    if (typeof a != "function")
      throw Error("Fn must not be null and must be a function");
    return l.setTimeout(function () {
      a();
    }, d);
  }
  function ns() {
    this.g = !0;
  }
  ns.prototype.xa = function () {
    this.g = !1;
  };
  function gy(a, d, p, w, j, M) {
    a.info(function () {
      if (a.g)
        if (M)
          for (var z = "", ue = M.split("&"), Ue = 0; Ue < ue.length; Ue++) {
            var ne = ue[Ue].split("=");
            if (1 < ne.length) {
              var We = ne[0];
              ne = ne[1];
              var Ge = We.split("_");
              z =
                2 <= Ge.length && Ge[1] == "type"
                  ? z + (We + "=" + ne + "&")
                  : z + (We + "=redacted&");
            }
          }
        else z = null;
      else z = M;
      return (
        "XMLHTTP REQ (" +
        w +
        ") [attempt " +
        j +
        "]: " +
        d +
        `
` +
        p +
        `
` +
        z
      );
    });
  }
  function vy(a, d, p, w, j, M, z) {
    a.info(function () {
      return (
        "XMLHTTP RESP (" +
        w +
        ") [ attempt " +
        j +
        "]: " +
        d +
        `
` +
        p +
        `
` +
        M +
        " " +
        z
      );
    });
  }
  function ei(a, d, p, w) {
    a.info(function () {
      return "XMLHTTP TEXT (" + d + "): " + wy(a, p) + (w ? " " + w : "");
    });
  }
  function yy(a, d) {
    a.info(function () {
      return "TIMEOUT: " + d;
    });
  }
  ns.prototype.info = function () {};
  function wy(a, d) {
    if (!a.g) return d;
    if (!d) return null;
    try {
      var p = JSON.parse(d);
      if (p) {
        for (a = 0; a < p.length; a++)
          if (Array.isArray(p[a])) {
            var w = p[a];
            if (!(2 > w.length)) {
              var j = w[1];
              if (Array.isArray(j) && !(1 > j.length)) {
                var M = j[0];
                if (M != "noop" && M != "stop" && M != "close")
                  for (var z = 1; z < j.length; z++) j[z] = "";
              }
            }
          }
      }
      return Jl(p);
    } catch {
      return d;
    }
  }
  var nu = {
      NO_ERROR: 0,
      gb: 1,
      tb: 2,
      sb: 3,
      nb: 4,
      rb: 5,
      ub: 6,
      Ia: 7,
      TIMEOUT: 8,
      xb: 9,
    },
    _y = {
      lb: "complete",
      Hb: "success",
      Ja: "error",
      Ia: "abort",
      zb: "ready",
      Ab: "readystatechange",
      TIMEOUT: "timeout",
      vb: "incrementaldata",
      yb: "progress",
      ob: "downloadprogress",
      Pb: "uploadprogress",
    },
    ru;
  function jo() {}
  _(jo, Zl),
    (jo.prototype.g = function () {
      return new XMLHttpRequest();
    }),
    (jo.prototype.i = function () {
      return {};
    }),
    (ru = new jo());
  function Ln(a, d, p, w) {
    (this.j = a),
      (this.i = d),
      (this.l = p),
      (this.R = w || 1),
      (this.U = new Zi(this)),
      (this.I = 45e3),
      (this.H = null),
      (this.o = !1),
      (this.m = this.A = this.v = this.L = this.F = this.S = this.B = null),
      (this.D = []),
      (this.g = null),
      (this.C = 0),
      (this.s = this.u = null),
      (this.X = -1),
      (this.J = !1),
      (this.O = 0),
      (this.M = null),
      (this.W = this.K = this.T = this.P = !1),
      (this.h = new yh());
  }
  function yh() {
    (this.i = null), (this.g = ""), (this.h = !1);
  }
  var wh = {},
    iu = {};
  function su(a, d, p) {
    (a.L = 1), (a.v = Do(cn(d))), (a.m = p), (a.P = !0), _h(a, null);
  }
  function _h(a, d) {
    (a.F = Date.now()), Lo(a), (a.A = cn(a.v));
    var p = a.A,
      w = a.R;
    Array.isArray(w) || (w = [String(w)]),
      Lh(p.i, "t", w),
      (a.C = 0),
      (p = a.j.J),
      (a.h = new yh()),
      (a.g = Zh(a.j, p ? d : null, !a.m)),
      0 < a.O && (a.M = new fy(g(a.Y, a, a.g), a.O)),
      (d = a.U),
      (p = a.g),
      (w = a.ca);
    var j = "readystatechange";
    Array.isArray(j) || (j && (dh[0] = j.toString()), (j = dh));
    for (var M = 0; M < j.length; M++) {
      var z = Lt(p, j[M], w || d.handleEvent, !1, d.h || d);
      if (!z) break;
      d.g[z.key] = z;
    }
    (d = a.H ? v(a.H) : {}),
      a.m
        ? (a.u || (a.u = "POST"),
          (d["Content-Type"] = "application/x-www-form-urlencoded"),
          a.g.ea(a.A, a.u, a.m, d))
        : ((a.u = "GET"), a.g.ea(a.A, a.u, null, d)),
      es(),
      gy(a.i, a.u, a.A, a.l, a.R, a.m);
  }
  (Ln.prototype.ca = function (a) {
    a = a.target;
    const d = this.M;
    d && dn(a) == 3 ? d.j() : this.Y(a);
  }),
    (Ln.prototype.Y = function (a) {
      try {
        if (a == this.g)
          e: {
            const Ge = dn(this.g);
            var d = this.g.Ba();
            const ri = this.g.Z();
            if (
              !(3 > Ge) &&
              (Ge != 3 || (this.g && (this.h.h || this.g.oa() || $h(this.g))))
            ) {
              this.J ||
                Ge != 4 ||
                d == 7 ||
                (d == 8 || 0 >= ri ? es(3) : es(2)),
                ou(this);
              var p = this.g.Z();
              this.X = p;
              t: if (Sh(this)) {
                var w = $h(this.g);
                a = "";
                var j = w.length,
                  M = dn(this.g) == 4;
                if (!this.h.i) {
                  if (typeof TextDecoder > "u") {
                    Er(this), rs(this);
                    var z = "";
                    break t;
                  }
                  this.h.i = new l.TextDecoder();
                }
                for (d = 0; d < j; d++)
                  (this.h.h = !0),
                    (a += this.h.i.decode(w[d], {
                      stream: !(M && d == j - 1),
                    }));
                (w.length = 0), (this.h.g += a), (this.C = 0), (z = this.h.g);
              } else z = this.g.oa();
              if (
                ((this.o = p == 200),
                vy(this.i, this.u, this.A, this.l, this.R, Ge, p),
                this.o)
              ) {
                if (this.T && !this.K) {
                  t: {
                    if (this.g) {
                      var ue,
                        Ue = this.g;
                      if (
                        (ue = Ue.g
                          ? Ue.g.getResponseHeader("X-HTTP-Initial-Response")
                          : null) &&
                        !S(ue)
                      ) {
                        var ne = ue;
                        break t;
                      }
                    }
                    ne = null;
                  }
                  if ((p = ne))
                    ei(
                      this.i,
                      this.l,
                      p,
                      "Initial handshake response via X-HTTP-Initial-Response"
                    ),
                      (this.K = !0),
                      au(this, p);
                  else {
                    (this.o = !1), (this.s = 3), Qe(12), Er(this), rs(this);
                    break e;
                  }
                }
                if (this.P) {
                  p = !0;
                  let Rt;
                  for (; !this.J && this.C < z.length; )
                    if (((Rt = Sy(this, z)), Rt == iu)) {
                      Ge == 4 && ((this.s = 4), Qe(14), (p = !1)),
                        ei(this.i, this.l, null, "[Incomplete Response]");
                      break;
                    } else if (Rt == wh) {
                      (this.s = 4),
                        Qe(15),
                        ei(this.i, this.l, z, "[Invalid Chunk]"),
                        (p = !1);
                      break;
                    } else ei(this.i, this.l, Rt, null), au(this, Rt);
                  if (
                    (Sh(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    Ge != 4 ||
                      z.length != 0 ||
                      this.h.h ||
                      ((this.s = 1), Qe(16), (p = !1)),
                    (this.o = this.o && p),
                    !p)
                  )
                    ei(this.i, this.l, z, "[Invalid Chunked Response]"),
                      Er(this),
                      rs(this);
                  else if (0 < z.length && !this.W) {
                    this.W = !0;
                    var We = this.j;
                    We.g == this &&
                      We.ba &&
                      !We.M &&
                      (We.j.info(
                        "Great, no buffering proxy detected. Bytes received: " +
                          z.length
                      ),
                      hu(We),
                      (We.M = !0),
                      Qe(11));
                  }
                } else ei(this.i, this.l, z, null), au(this, z);
                Ge == 4 && Er(this),
                  this.o &&
                    !this.J &&
                    (Ge == 4 ? Yh(this.j, this) : ((this.o = !1), Lo(this)));
              } else
                Fy(this.g),
                  p == 400 && 0 < z.indexOf("Unknown SID")
                    ? ((this.s = 3), Qe(12))
                    : ((this.s = 0), Qe(13)),
                  Er(this),
                  rs(this);
            }
          }
      } catch {
      } finally {
      }
    });
  function Sh(a) {
    return a.g ? a.u == "GET" && a.L != 2 && a.j.Ca : !1;
  }
  function Sy(a, d) {
    var p = a.C,
      w = d.indexOf(
        `
`,
        p
      );
    return w == -1
      ? iu
      : ((p = Number(d.substring(p, w))),
        isNaN(p)
          ? wh
          : ((w += 1),
            w + p > d.length
              ? iu
              : ((d = d.slice(w, w + p)), (a.C = w + p), d)));
  }
  Ln.prototype.cancel = function () {
    (this.J = !0), Er(this);
  };
  function Lo(a) {
    (a.S = Date.now() + a.I), Ch(a, a.I);
  }
  function Ch(a, d) {
    if (a.B != null) throw Error("WatchDog timer not null");
    a.B = ts(g(a.ba, a), d);
  }
  function ou(a) {
    a.B && (l.clearTimeout(a.B), (a.B = null));
  }
  Ln.prototype.ba = function () {
    this.B = null;
    const a = Date.now();
    0 <= a - this.S
      ? (yy(this.i, this.A),
        this.L != 2 && (es(), Qe(17)),
        Er(this),
        (this.s = 2),
        rs(this))
      : Ch(this, this.S - a);
  };
  function rs(a) {
    a.j.G == 0 || a.J || Yh(a.j, a);
  }
  function Er(a) {
    ou(a);
    var d = a.M;
    d && typeof d.ma == "function" && d.ma(),
      (a.M = null),
      fh(a.U),
      a.g && ((d = a.g), (a.g = null), d.abort(), d.ma());
  }
  function au(a, d) {
    try {
      var p = a.j;
      if (p.G != 0 && (p.g == a || lu(p.h, a))) {
        if (!a.K && lu(p.h, a) && p.G == 3) {
          try {
            var w = p.Da.g.parse(d);
          } catch {
            w = null;
          }
          if (Array.isArray(w) && w.length == 3) {
            var j = w;
            if (j[0] == 0) {
              e: if (!p.u) {
                if (p.g)
                  if (p.g.F + 3e3 < a.F) Vo(p), $o(p);
                  else break e;
                fu(p), Qe(18);
              }
            } else
              (p.za = j[1]),
                0 < p.za - p.T &&
                  37500 > j[2] &&
                  p.F &&
                  p.v == 0 &&
                  !p.C &&
                  (p.C = ts(g(p.Za, p), 6e3));
            if (1 >= kh(p.h) && p.ca) {
              try {
                p.ca();
              } catch {}
              p.ca = void 0;
            }
          } else Tr(p, 11);
        } else if (((a.K || p.g == a) && Vo(p), !S(d)))
          for (j = p.Da.g.parse(d), d = 0; d < j.length; d++) {
            let ne = j[d];
            if (((p.T = ne[0]), (ne = ne[1]), p.G == 2))
              if (ne[0] == "c") {
                (p.K = ne[1]), (p.ia = ne[2]);
                const We = ne[3];
                We != null && ((p.la = We), p.j.info("VER=" + p.la));
                const Ge = ne[4];
                Ge != null && ((p.Aa = Ge), p.j.info("SVER=" + p.Aa));
                const ri = ne[5];
                ri != null &&
                  typeof ri == "number" &&
                  0 < ri &&
                  ((w = 1.5 * ri),
                  (p.L = w),
                  p.j.info("backChannelRequestTimeoutMs_=" + w)),
                  (w = p);
                const Rt = a.g;
                if (Rt) {
                  const Ho = Rt.g
                    ? Rt.g.getResponseHeader("X-Client-Wire-Protocol")
                    : null;
                  if (Ho) {
                    var M = w.h;
                    M.g ||
                      (Ho.indexOf("spdy") == -1 &&
                        Ho.indexOf("quic") == -1 &&
                        Ho.indexOf("h2") == -1) ||
                      ((M.j = M.l),
                      (M.g = new Set()),
                      M.h && (uu(M, M.h), (M.h = null)));
                  }
                  if (w.D) {
                    const pu = Rt.g
                      ? Rt.g.getResponseHeader("X-HTTP-Session-Id")
                      : null;
                    pu && ((w.ya = pu), de(w.I, w.D, pu));
                  }
                }
                (p.G = 3),
                  p.l && p.l.ua(),
                  p.ba &&
                    ((p.R = Date.now() - a.F),
                    p.j.info("Handshake RTT: " + p.R + "ms")),
                  (w = p);
                var z = a;
                if (((w.qa = Jh(w, w.J ? w.ia : null, w.W)), z.K)) {
                  Th(w.h, z);
                  var ue = z,
                    Ue = w.L;
                  Ue && (ue.I = Ue), ue.B && (ou(ue), Lo(ue)), (w.g = z);
                } else Gh(w);
                0 < p.i.length && Bo(p);
              } else (ne[0] != "stop" && ne[0] != "close") || Tr(p, 7);
            else
              p.G == 3 &&
                (ne[0] == "stop" || ne[0] == "close"
                  ? ne[0] == "stop"
                    ? Tr(p, 7)
                    : du(p)
                  : ne[0] != "noop" && p.l && p.l.ta(ne),
                (p.v = 0));
          }
      }
      es(4);
    } catch {}
  }
  var Cy = class {
    constructor(a, d) {
      (this.g = a), (this.map = d);
    }
  };
  function xh(a) {
    (this.l = a || 10),
      l.PerformanceNavigationTiming
        ? ((a = l.performance.getEntriesByType("navigation")),
          (a =
            0 < a.length &&
            (a[0].nextHopProtocol == "hq" || a[0].nextHopProtocol == "h2")))
        : (a = !!(
            l.chrome &&
            l.chrome.loadTimes &&
            l.chrome.loadTimes() &&
            l.chrome.loadTimes().wasFetchedViaSpdy
          )),
      (this.j = a ? this.l : 1),
      (this.g = null),
      1 < this.j && (this.g = new Set()),
      (this.h = null),
      (this.i = []);
  }
  function Eh(a) {
    return a.h ? !0 : a.g ? a.g.size >= a.j : !1;
  }
  function kh(a) {
    return a.h ? 1 : a.g ? a.g.size : 0;
  }
  function lu(a, d) {
    return a.h ? a.h == d : a.g ? a.g.has(d) : !1;
  }
  function uu(a, d) {
    a.g ? a.g.add(d) : (a.h = d);
  }
  function Th(a, d) {
    a.h && a.h == d ? (a.h = null) : a.g && a.g.has(d) && a.g.delete(d);
  }
  xh.prototype.cancel = function () {
    if (((this.i = bh(this)), this.h)) this.h.cancel(), (this.h = null);
    else if (this.g && this.g.size !== 0) {
      for (const a of this.g.values()) a.cancel();
      this.g.clear();
    }
  };
  function bh(a) {
    if (a.h != null) return a.i.concat(a.h.D);
    if (a.g != null && a.g.size !== 0) {
      let d = a.i;
      for (const p of a.g.values()) d = d.concat(p.D);
      return d;
    }
    return A(a.i);
  }
  function xy(a) {
    if (a.V && typeof a.V == "function") return a.V();
    if (
      (typeof Map < "u" && a instanceof Map) ||
      (typeof Set < "u" && a instanceof Set)
    )
      return Array.from(a.values());
    if (typeof a == "string") return a.split("");
    if (u(a)) {
      for (var d = [], p = a.length, w = 0; w < p; w++) d.push(a[w]);
      return d;
    }
    (d = []), (p = 0);
    for (w in a) d[p++] = a[w];
    return d;
  }
  function Ey(a) {
    if (a.na && typeof a.na == "function") return a.na();
    if (!a.V || typeof a.V != "function") {
      if (typeof Map < "u" && a instanceof Map) return Array.from(a.keys());
      if (!(typeof Set < "u" && a instanceof Set)) {
        if (u(a) || typeof a == "string") {
          var d = [];
          a = a.length;
          for (var p = 0; p < a; p++) d.push(p);
          return d;
        }
        (d = []), (p = 0);
        for (const w in a) d[p++] = w;
        return d;
      }
    }
  }
  function Ih(a, d) {
    if (a.forEach && typeof a.forEach == "function") a.forEach(d, void 0);
    else if (u(a) || typeof a == "string")
      Array.prototype.forEach.call(a, d, void 0);
    else
      for (var p = Ey(a), w = xy(a), j = w.length, M = 0; M < j; M++)
        d.call(void 0, w[M], p && p[M], a);
  }
  var Nh = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );
  function ky(a, d) {
    if (a) {
      a = a.split("&");
      for (var p = 0; p < a.length; p++) {
        var w = a[p].indexOf("="),
          j = null;
        if (0 <= w) {
          var M = a[p].substring(0, w);
          j = a[p].substring(w + 1);
        } else M = a[p];
        d(M, j ? decodeURIComponent(j.replace(/\+/g, " ")) : "");
      }
    }
  }
  function kr(a) {
    if (
      ((this.g = this.o = this.j = ""),
      (this.s = null),
      (this.m = this.l = ""),
      (this.h = !1),
      a instanceof kr)
    ) {
      (this.h = a.h),
        Ro(this, a.j),
        (this.o = a.o),
        (this.g = a.g),
        Mo(this, a.s),
        (this.l = a.l);
      var d = a.i,
        p = new os();
      (p.i = d.i),
        d.g && ((p.g = new Map(d.g)), (p.h = d.h)),
        Ph(this, p),
        (this.m = a.m);
    } else
      a && (d = String(a).match(Nh))
        ? ((this.h = !1),
          Ro(this, d[1] || "", !0),
          (this.o = is(d[2] || "")),
          (this.g = is(d[3] || "", !0)),
          Mo(this, d[4]),
          (this.l = is(d[5] || "", !0)),
          Ph(this, d[6] || "", !0),
          (this.m = is(d[7] || "")))
        : ((this.h = !1), (this.i = new os(null, this.h)));
  }
  kr.prototype.toString = function () {
    var a = [],
      d = this.j;
    d && a.push(ss(d, Ah, !0), ":");
    var p = this.g;
    return (
      (p || d == "file") &&
        (a.push("//"),
        (d = this.o) && a.push(ss(d, Ah, !0), "@"),
        a.push(
          encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
        ),
        (p = this.s),
        p != null && a.push(":", String(p))),
      (p = this.l) &&
        (this.g && p.charAt(0) != "/" && a.push("/"),
        a.push(ss(p, p.charAt(0) == "/" ? Iy : by, !0))),
      (p = this.i.toString()) && a.push("?", p),
      (p = this.m) && a.push("#", ss(p, Py)),
      a.join("")
    );
  };
  function cn(a) {
    return new kr(a);
  }
  function Ro(a, d, p) {
    (a.j = p ? is(d, !0) : d), a.j && (a.j = a.j.replace(/:$/, ""));
  }
  function Mo(a, d) {
    if (d) {
      if (((d = Number(d)), isNaN(d) || 0 > d))
        throw Error("Bad port number " + d);
      a.s = d;
    } else a.s = null;
  }
  function Ph(a, d, p) {
    d instanceof os
      ? ((a.i = d), Ay(a.i, a.h))
      : (p || (d = ss(d, Ny)), (a.i = new os(d, a.h)));
  }
  function de(a, d, p) {
    a.i.set(d, p);
  }
  function Do(a) {
    return (
      de(
        a,
        "zx",
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(
            Math.floor(2147483648 * Math.random()) ^ Date.now()
          ).toString(36)
      ),
      a
    );
  }
  function is(a, d) {
    return a
      ? d
        ? decodeURI(a.replace(/%25/g, "%2525"))
        : decodeURIComponent(a)
      : "";
  }
  function ss(a, d, p) {
    return typeof a == "string"
      ? ((a = encodeURI(a).replace(d, Ty)),
        p && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a)
      : null;
  }
  function Ty(a) {
    return (
      (a = a.charCodeAt(0)),
      "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16)
    );
  }
  var Ah = /[#\/\?@]/g,
    by = /[#\?:]/g,
    Iy = /[#\?]/g,
    Ny = /[#\?@]/g,
    Py = /#/g;
  function os(a, d) {
    (this.h = this.g = null), (this.i = a || null), (this.j = !!d);
  }
  function Rn(a) {
    a.g ||
      ((a.g = new Map()),
      (a.h = 0),
      a.i &&
        ky(a.i, function (d, p) {
          a.add(decodeURIComponent(d.replace(/\+/g, " ")), p);
        }));
  }
  (e = os.prototype),
    (e.add = function (a, d) {
      Rn(this), (this.i = null), (a = ti(this, a));
      var p = this.g.get(a);
      return p || this.g.set(a, (p = [])), p.push(d), (this.h += 1), this;
    });
  function Oh(a, d) {
    Rn(a),
      (d = ti(a, d)),
      a.g.has(d) && ((a.i = null), (a.h -= a.g.get(d).length), a.g.delete(d));
  }
  function jh(a, d) {
    return Rn(a), (d = ti(a, d)), a.g.has(d);
  }
  (e.forEach = function (a, d) {
    Rn(this),
      this.g.forEach(function (p, w) {
        p.forEach(function (j) {
          a.call(d, j, w, this);
        }, this);
      }, this);
  }),
    (e.na = function () {
      Rn(this);
      const a = Array.from(this.g.values()),
        d = Array.from(this.g.keys()),
        p = [];
      for (let w = 0; w < d.length; w++) {
        const j = a[w];
        for (let M = 0; M < j.length; M++) p.push(d[w]);
      }
      return p;
    }),
    (e.V = function (a) {
      Rn(this);
      let d = [];
      if (typeof a == "string")
        jh(this, a) && (d = d.concat(this.g.get(ti(this, a))));
      else {
        a = Array.from(this.g.values());
        for (let p = 0; p < a.length; p++) d = d.concat(a[p]);
      }
      return d;
    }),
    (e.set = function (a, d) {
      return (
        Rn(this),
        (this.i = null),
        (a = ti(this, a)),
        jh(this, a) && (this.h -= this.g.get(a).length),
        this.g.set(a, [d]),
        (this.h += 1),
        this
      );
    }),
    (e.get = function (a, d) {
      return a ? ((a = this.V(a)), 0 < a.length ? String(a[0]) : d) : d;
    });
  function Lh(a, d, p) {
    Oh(a, d),
      0 < p.length &&
        ((a.i = null), a.g.set(ti(a, d), A(p)), (a.h += p.length));
  }
  e.toString = function () {
    if (this.i) return this.i;
    if (!this.g) return "";
    const a = [],
      d = Array.from(this.g.keys());
    for (var p = 0; p < d.length; p++) {
      var w = d[p];
      const M = encodeURIComponent(String(w)),
        z = this.V(w);
      for (w = 0; w < z.length; w++) {
        var j = M;
        z[w] !== "" && (j += "=" + encodeURIComponent(String(z[w]))), a.push(j);
      }
    }
    return (this.i = a.join("&"));
  };
  function ti(a, d) {
    return (d = String(d)), a.j && (d = d.toLowerCase()), d;
  }
  function Ay(a, d) {
    d &&
      !a.j &&
      (Rn(a),
      (a.i = null),
      a.g.forEach(function (p, w) {
        var j = w.toLowerCase();
        w != j && (Oh(this, w), Lh(this, j, p));
      }, a)),
      (a.j = d);
  }
  function Oy(a, d) {
    const p = new ns();
    if (l.Image) {
      const w = new Image();
      (w.onload = y(Mn, p, "TestLoadImage: loaded", !0, d, w)),
        (w.onerror = y(Mn, p, "TestLoadImage: error", !1, d, w)),
        (w.onabort = y(Mn, p, "TestLoadImage: abort", !1, d, w)),
        (w.ontimeout = y(Mn, p, "TestLoadImage: timeout", !1, d, w)),
        l.setTimeout(function () {
          w.ontimeout && w.ontimeout();
        }, 1e4),
        (w.src = a);
    } else d(!1);
  }
  function jy(a, d) {
    const p = new ns(),
      w = new AbortController(),
      j = setTimeout(() => {
        w.abort(), Mn(p, "TestPingServer: timeout", !1, d);
      }, 1e4);
    fetch(a, { signal: w.signal })
      .then((M) => {
        clearTimeout(j),
          M.ok
            ? Mn(p, "TestPingServer: ok", !0, d)
            : Mn(p, "TestPingServer: server error", !1, d);
      })
      .catch(() => {
        clearTimeout(j), Mn(p, "TestPingServer: error", !1, d);
      });
  }
  function Mn(a, d, p, w, j) {
    try {
      j &&
        ((j.onload = null),
        (j.onerror = null),
        (j.onabort = null),
        (j.ontimeout = null)),
        w(p);
    } catch {}
  }
  function Ly() {
    this.g = new py();
  }
  function Ry(a, d, p) {
    const w = p || "";
    try {
      Ih(a, function (j, M) {
        let z = j;
        c(j) && (z = Jl(j)), d.push(w + M + "=" + encodeURIComponent(z));
      });
    } catch (j) {
      throw (d.push(w + "type=" + encodeURIComponent("_badmap")), j);
    }
  }
  function Fo(a) {
    (this.l = a.Ub || null), (this.j = a.eb || !1);
  }
  _(Fo, Zl),
    (Fo.prototype.g = function () {
      return new Uo(this.l, this.j);
    }),
    (Fo.prototype.i = (function (a) {
      return function () {
        return a;
      };
    })({}));
  function Uo(a, d) {
    He.call(this),
      (this.D = a),
      (this.o = d),
      (this.m = void 0),
      (this.status = this.readyState = 0),
      (this.responseType =
        this.responseText =
        this.response =
        this.statusText =
          ""),
      (this.onreadystatechange = null),
      (this.u = new Headers()),
      (this.h = null),
      (this.B = "GET"),
      (this.A = ""),
      (this.g = !1),
      (this.v = this.j = this.l = null);
  }
  _(Uo, He),
    (e = Uo.prototype),
    (e.open = function (a, d) {
      if (this.readyState != 0)
        throw (this.abort(), Error("Error reopening a connection"));
      (this.B = a), (this.A = d), (this.readyState = 1), ls(this);
    }),
    (e.send = function (a) {
      if (this.readyState != 1)
        throw (this.abort(), Error("need to call open() first. "));
      this.g = !0;
      const d = {
        headers: this.u,
        method: this.B,
        credentials: this.m,
        cache: void 0,
      };
      a && (d.body = a),
        (this.D || l)
          .fetch(new Request(this.A, d))
          .then(this.Sa.bind(this), this.ga.bind(this));
    }),
    (e.abort = function () {
      (this.response = this.responseText = ""),
        (this.u = new Headers()),
        (this.status = 0),
        this.j && this.j.cancel("Request was aborted.").catch(() => {}),
        1 <= this.readyState &&
          this.g &&
          this.readyState != 4 &&
          ((this.g = !1), as(this)),
        (this.readyState = 0);
    }),
    (e.Sa = function (a) {
      if (
        this.g &&
        ((this.l = a),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = a.headers),
          (this.readyState = 2),
          ls(this)),
        this.g && ((this.readyState = 3), ls(this), this.g))
      )
        if (this.responseType === "arraybuffer")
          a.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
        else if (typeof l.ReadableStream < "u" && "body" in a) {
          if (((this.j = a.body.getReader()), this.o)) {
            if (this.responseType)
              throw Error(
                'responseType must be empty for "streamBinaryChunks" mode responses.'
              );
            this.response = [];
          } else
            (this.response = this.responseText = ""),
              (this.v = new TextDecoder());
          Rh(this);
        } else a.text().then(this.Ra.bind(this), this.ga.bind(this));
    });
  function Rh(a) {
    a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a));
  }
  (e.Pa = function (a) {
    if (this.g) {
      if (this.o && a.value) this.response.push(a.value);
      else if (!this.o) {
        var d = a.value ? a.value : new Uint8Array(0);
        (d = this.v.decode(d, { stream: !a.done })) &&
          (this.response = this.responseText += d);
      }
      a.done ? as(this) : ls(this), this.readyState == 3 && Rh(this);
    }
  }),
    (e.Ra = function (a) {
      this.g && ((this.response = this.responseText = a), as(this));
    }),
    (e.Qa = function (a) {
      this.g && ((this.response = a), as(this));
    }),
    (e.ga = function () {
      this.g && as(this);
    });
  function as(a) {
    (a.readyState = 4), (a.l = null), (a.j = null), (a.v = null), ls(a);
  }
  (e.setRequestHeader = function (a, d) {
    this.u.append(a, d);
  }),
    (e.getResponseHeader = function (a) {
      return (this.h && this.h.get(a.toLowerCase())) || "";
    }),
    (e.getAllResponseHeaders = function () {
      if (!this.h) return "";
      const a = [],
        d = this.h.entries();
      for (var p = d.next(); !p.done; )
        (p = p.value), a.push(p[0] + ": " + p[1]), (p = d.next());
      return a.join(`\r
`);
    });
  function ls(a) {
    a.onreadystatechange && a.onreadystatechange.call(a);
  }
  Object.defineProperty(Uo.prototype, "withCredentials", {
    get: function () {
      return this.m === "include";
    },
    set: function (a) {
      this.m = a ? "include" : "same-origin";
    },
  });
  function Mh(a) {
    let d = "";
    return (
      D(a, function (p, w) {
        (d += w),
          (d += ":"),
          (d += p),
          (d += `\r
`);
      }),
      d
    );
  }
  function cu(a, d, p) {
    e: {
      for (w in p) {
        var w = !1;
        break e;
      }
      w = !0;
    }
    w ||
      ((p = Mh(p)),
      typeof a == "string"
        ? p != null && encodeURIComponent(String(p))
        : de(a, d, p));
  }
  function Te(a) {
    He.call(this),
      (this.headers = new Map()),
      (this.o = a || null),
      (this.h = !1),
      (this.v = this.g = null),
      (this.D = ""),
      (this.m = 0),
      (this.l = ""),
      (this.j = this.B = this.u = this.A = !1),
      (this.I = null),
      (this.H = ""),
      (this.J = !1);
  }
  _(Te, He);
  var My = /^https?$/i,
    Dy = ["POST", "PUT"];
  (e = Te.prototype),
    (e.Ha = function (a) {
      this.J = a;
    }),
    (e.ea = function (a, d, p, w) {
      if (this.g)
        throw Error(
          "[goog.net.XhrIo] Object is active with another request=" +
            this.D +
            "; newUri=" +
            a
        );
      (d = d ? d.toUpperCase() : "GET"),
        (this.D = a),
        (this.l = ""),
        (this.m = 0),
        (this.A = !1),
        (this.h = !0),
        (this.g = this.o ? this.o.g() : ru.g()),
        (this.v = this.o ? hh(this.o) : hh(ru)),
        (this.g.onreadystatechange = g(this.Ea, this));
      try {
        (this.B = !0), this.g.open(d, String(a), !0), (this.B = !1);
      } catch (M) {
        Dh(this, M);
        return;
      }
      if (((a = p || ""), (p = new Map(this.headers)), w))
        if (Object.getPrototypeOf(w) === Object.prototype)
          for (var j in w) p.set(j, w[j]);
        else if (typeof w.keys == "function" && typeof w.get == "function")
          for (const M of w.keys()) p.set(M, w.get(M));
        else throw Error("Unknown input type for opt_headers: " + String(w));
      (w = Array.from(p.keys()).find((M) => M.toLowerCase() == "content-type")),
        (j = l.FormData && a instanceof l.FormData),
        !(0 <= Array.prototype.indexOf.call(Dy, d, void 0)) ||
          w ||
          j ||
          p.set(
            "Content-Type",
            "application/x-www-form-urlencoded;charset=utf-8"
          );
      for (const [M, z] of p) this.g.setRequestHeader(M, z);
      this.H && (this.g.responseType = this.H),
        "withCredentials" in this.g &&
          this.g.withCredentials !== this.J &&
          (this.g.withCredentials = this.J);
      try {
        zh(this), (this.u = !0), this.g.send(a), (this.u = !1);
      } catch (M) {
        Dh(this, M);
      }
    });
  function Dh(a, d) {
    (a.h = !1),
      a.g && ((a.j = !0), a.g.abort(), (a.j = !1)),
      (a.l = d),
      (a.m = 5),
      Fh(a),
      zo(a);
  }
  function Fh(a) {
    a.A || ((a.A = !0), Ze(a, "complete"), Ze(a, "error"));
  }
  (e.abort = function (a) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.m = a || 7),
      Ze(this, "complete"),
      Ze(this, "abort"),
      zo(this));
  }),
    (e.N = function () {
      this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        zo(this, !0)),
        Te.aa.N.call(this);
    }),
    (e.Ea = function () {
      this.s || (this.B || this.u || this.j ? Uh(this) : this.bb());
    }),
    (e.bb = function () {
      Uh(this);
    });
  function Uh(a) {
    if (a.h && typeof o < "u" && (!a.v[1] || dn(a) != 4 || a.Z() != 2)) {
      if (a.u && dn(a) == 4) uh(a.Ea, 0, a);
      else if ((Ze(a, "readystatechange"), dn(a) == 4)) {
        a.h = !1;
        try {
          const z = a.Z();
          e: switch (z) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var d = !0;
              break e;
            default:
              d = !1;
          }
          var p;
          if (!(p = d)) {
            var w;
            if ((w = z === 0)) {
              var j = String(a.D).match(Nh)[1] || null;
              !j &&
                l.self &&
                l.self.location &&
                (j = l.self.location.protocol.slice(0, -1)),
                (w = !My.test(j ? j.toLowerCase() : ""));
            }
            p = w;
          }
          if (p) Ze(a, "complete"), Ze(a, "success");
          else {
            a.m = 6;
            try {
              var M = 2 < dn(a) ? a.g.statusText : "";
            } catch {
              M = "";
            }
            (a.l = M + " [" + a.Z() + "]"), Fh(a);
          }
        } finally {
          zo(a);
        }
      }
    }
  }
  function zo(a, d) {
    if (a.g) {
      zh(a);
      const p = a.g,
        w = a.v[0] ? () => {} : null;
      (a.g = null), (a.v = null), d || Ze(a, "ready");
      try {
        p.onreadystatechange = w;
      } catch {}
    }
  }
  function zh(a) {
    a.I && (l.clearTimeout(a.I), (a.I = null));
  }
  e.isActive = function () {
    return !!this.g;
  };
  function dn(a) {
    return a.g ? a.g.readyState : 0;
  }
  (e.Z = function () {
    try {
      return 2 < dn(this) ? this.g.status : -1;
    } catch {
      return -1;
    }
  }),
    (e.oa = function () {
      try {
        return this.g ? this.g.responseText : "";
      } catch {
        return "";
      }
    }),
    (e.Oa = function (a) {
      if (this.g) {
        var d = this.g.responseText;
        return a && d.indexOf(a) == 0 && (d = d.substring(a.length)), hy(d);
      }
    });
  function $h(a) {
    try {
      if (!a.g) return null;
      if ("response" in a.g) return a.g.response;
      switch (a.H) {
        case "":
        case "text":
          return a.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in a.g)
            return a.g.mozResponseArrayBuffer;
      }
      return null;
    } catch {
      return null;
    }
  }
  function Fy(a) {
    const d = {};
    a = ((a.g && 2 <= dn(a) && a.g.getAllResponseHeaders()) || "").split(`\r
`);
    for (let w = 0; w < a.length; w++) {
      if (S(a[w])) continue;
      var p = x(a[w]);
      const j = p[0];
      if (((p = p[1]), typeof p != "string")) continue;
      p = p.trim();
      const M = d[j] || [];
      (d[j] = M), M.push(p);
    }
    T(d, function (w) {
      return w.join(", ");
    });
  }
  (e.Ba = function () {
    return this.m;
  }),
    (e.Ka = function () {
      return typeof this.l == "string" ? this.l : String(this.l);
    });
  function us(a, d, p) {
    return (p && p.internalChannelParams && p.internalChannelParams[a]) || d;
  }
  function Bh(a) {
    (this.Aa = 0),
      (this.i = []),
      (this.j = new ns()),
      (this.ia =
        this.qa =
        this.I =
        this.W =
        this.g =
        this.ya =
        this.D =
        this.H =
        this.m =
        this.S =
        this.o =
          null),
      (this.Ya = this.U = 0),
      (this.Va = us("failFast", !1, a)),
      (this.F = this.C = this.u = this.s = this.l = null),
      (this.X = !0),
      (this.za = this.T = -1),
      (this.Y = this.v = this.B = 0),
      (this.Ta = us("baseRetryDelayMs", 5e3, a)),
      (this.cb = us("retryDelaySeedMs", 1e4, a)),
      (this.Wa = us("forwardChannelMaxRetries", 2, a)),
      (this.wa = us("forwardChannelRequestTimeoutMs", 2e4, a)),
      (this.pa = (a && a.xmlHttpFactory) || void 0),
      (this.Xa = (a && a.Tb) || void 0),
      (this.Ca = (a && a.useFetchStreams) || !1),
      (this.L = void 0),
      (this.J = (a && a.supportsCrossDomainXhr) || !1),
      (this.K = ""),
      (this.h = new xh(a && a.concurrentRequestLimit)),
      (this.Da = new Ly()),
      (this.P = (a && a.fastHandshake) || !1),
      (this.O = (a && a.encodeInitMessageHeaders) || !1),
      this.P && this.O && (this.O = !1),
      (this.Ua = (a && a.Rb) || !1),
      a && a.xa && this.j.xa(),
      a && a.forceLongPolling && (this.X = !1),
      (this.ba = (!this.P && this.X && a && a.detectBufferingProxy) || !1),
      (this.ja = void 0),
      a &&
        a.longPollingTimeout &&
        0 < a.longPollingTimeout &&
        (this.ja = a.longPollingTimeout),
      (this.ca = void 0),
      (this.R = 0),
      (this.M = !1),
      (this.ka = this.A = null);
  }
  (e = Bh.prototype),
    (e.la = 8),
    (e.G = 1),
    (e.connect = function (a, d, p, w) {
      Qe(0),
        (this.W = a),
        (this.H = d || {}),
        p && w !== void 0 && ((this.H.OSID = p), (this.H.OAID = w)),
        (this.F = this.X),
        (this.I = Jh(this, null, this.W)),
        Bo(this);
    });
  function du(a) {
    if ((Vh(a), a.G == 3)) {
      var d = a.U++,
        p = cn(a.I);
      if (
        (de(p, "SID", a.K),
        de(p, "RID", d),
        de(p, "TYPE", "terminate"),
        cs(a, p),
        (d = new Ln(a, a.j, d)),
        (d.L = 2),
        (d.v = Do(cn(p))),
        (p = !1),
        l.navigator && l.navigator.sendBeacon)
      )
        try {
          p = l.navigator.sendBeacon(d.v.toString(), "");
        } catch {}
      !p && l.Image && ((new Image().src = d.v), (p = !0)),
        p || ((d.g = Zh(d.j, null)), d.g.ea(d.v)),
        (d.F = Date.now()),
        Lo(d);
    }
    Xh(a);
  }
  function $o(a) {
    a.g && (hu(a), a.g.cancel(), (a.g = null));
  }
  function Vh(a) {
    $o(a),
      a.u && (l.clearTimeout(a.u), (a.u = null)),
      Vo(a),
      a.h.cancel(),
      a.s && (typeof a.s == "number" && l.clearTimeout(a.s), (a.s = null));
  }
  function Bo(a) {
    if (!Eh(a.h) && !a.s) {
      a.s = !0;
      var d = a.Ga;
      X || G(), U || (X(), (U = !0)), W.add(d, a), (a.B = 0);
    }
  }
  function Uy(a, d) {
    return kh(a.h) >= a.h.j - (a.s ? 1 : 0)
      ? !1
      : a.s
      ? ((a.i = d.D.concat(a.i)), !0)
      : a.G == 1 || a.G == 2 || a.B >= (a.Va ? 0 : a.Wa)
      ? !1
      : ((a.s = ts(g(a.Ga, a, d), qh(a, a.B))), a.B++, !0);
  }
  e.Ga = function (a) {
    if (this.s)
      if (((this.s = null), this.G == 1)) {
        if (!a) {
          (this.U = Math.floor(1e5 * Math.random())), (a = this.U++);
          const j = new Ln(this, this.j, a);
          let M = this.o;
          if (
            (this.S && (M ? ((M = v(M)), k(M, this.S)) : (M = this.S)),
            this.m !== null || this.O || ((j.H = M), (M = null)),
            this.P)
          )
            e: {
              for (var d = 0, p = 0; p < this.i.length; p++) {
                t: {
                  var w = this.i[p];
                  if (
                    "__data__" in w.map &&
                    ((w = w.map.__data__), typeof w == "string")
                  ) {
                    w = w.length;
                    break t;
                  }
                  w = void 0;
                }
                if (w === void 0) break;
                if (((d += w), 4096 < d)) {
                  d = p;
                  break e;
                }
                if (d === 4096 || p === this.i.length - 1) {
                  d = p + 1;
                  break e;
                }
              }
              d = 1e3;
            }
          else d = 1e3;
          (d = Wh(this, j, d)),
            (p = cn(this.I)),
            de(p, "RID", a),
            de(p, "CVER", 22),
            this.D && de(p, "X-HTTP-Session-Id", this.D),
            cs(this, p),
            M &&
              (this.O
                ? (d = "headers=" + encodeURIComponent(String(Mh(M))) + "&" + d)
                : this.m && cu(p, this.m, M)),
            uu(this.h, j),
            this.Ua && de(p, "TYPE", "init"),
            this.P
              ? (de(p, "$req", d),
                de(p, "SID", "null"),
                (j.T = !0),
                su(j, p, null))
              : su(j, p, d),
            (this.G = 2);
        }
      } else
        this.G == 3 &&
          (a ? Hh(this, a) : this.i.length == 0 || Eh(this.h) || Hh(this));
  };
  function Hh(a, d) {
    var p;
    d ? (p = d.l) : (p = a.U++);
    const w = cn(a.I);
    de(w, "SID", a.K),
      de(w, "RID", p),
      de(w, "AID", a.T),
      cs(a, w),
      a.m && a.o && cu(w, a.m, a.o),
      (p = new Ln(a, a.j, p, a.B + 1)),
      a.m === null && (p.H = a.o),
      d && (a.i = d.D.concat(a.i)),
      (d = Wh(a, p, 1e3)),
      (p.I = Math.round(0.5 * a.wa) + Math.round(0.5 * a.wa * Math.random())),
      uu(a.h, p),
      su(p, w, d);
  }
  function cs(a, d) {
    a.H &&
      D(a.H, function (p, w) {
        de(d, w, p);
      }),
      a.l &&
        Ih({}, function (p, w) {
          de(d, w, p);
        });
  }
  function Wh(a, d, p) {
    p = Math.min(a.i.length, p);
    var w = a.l ? g(a.l.Na, a.l, a) : null;
    e: {
      var j = a.i;
      let M = -1;
      for (;;) {
        const z = ["count=" + p];
        M == -1
          ? 0 < p
            ? ((M = j[0].g), z.push("ofs=" + M))
            : (M = 0)
          : z.push("ofs=" + M);
        let ue = !0;
        for (let Ue = 0; Ue < p; Ue++) {
          let ne = j[Ue].g;
          const We = j[Ue].map;
          if (((ne -= M), 0 > ne)) (M = Math.max(0, j[Ue].g - 100)), (ue = !1);
          else
            try {
              Ry(We, z, "req" + ne + "_");
            } catch {
              w && w(We);
            }
        }
        if (ue) {
          w = z.join("&");
          break e;
        }
      }
    }
    return (a = a.i.splice(0, p)), (d.D = a), w;
  }
  function Gh(a) {
    if (!a.g && !a.u) {
      a.Y = 1;
      var d = a.Fa;
      X || G(), U || (X(), (U = !0)), W.add(d, a), (a.v = 0);
    }
  }
  function fu(a) {
    return a.g || a.u || 3 <= a.v
      ? !1
      : (a.Y++, (a.u = ts(g(a.Fa, a), qh(a, a.v))), a.v++, !0);
  }
  (e.Fa = function () {
    if (
      ((this.u = null),
      Kh(this),
      this.ba && !(this.M || this.g == null || 0 >= this.R))
    ) {
      var a = 2 * this.R;
      this.j.info("BP detection timer enabled: " + a),
        (this.A = ts(g(this.ab, this), a));
    }
  }),
    (e.ab = function () {
      this.A &&
        ((this.A = null),
        this.j.info("BP detection timeout reached."),
        this.j.info("Buffering proxy detected and switch to long-polling!"),
        (this.F = !1),
        (this.M = !0),
        Qe(10),
        $o(this),
        Kh(this));
    });
  function hu(a) {
    a.A != null && (l.clearTimeout(a.A), (a.A = null));
  }
  function Kh(a) {
    (a.g = new Ln(a, a.j, "rpc", a.Y)),
      a.m === null && (a.g.H = a.o),
      (a.g.O = 0);
    var d = cn(a.qa);
    de(d, "RID", "rpc"),
      de(d, "SID", a.K),
      de(d, "AID", a.T),
      de(d, "CI", a.F ? "0" : "1"),
      !a.F && a.ja && de(d, "TO", a.ja),
      de(d, "TYPE", "xmlhttp"),
      cs(a, d),
      a.m && a.o && cu(d, a.m, a.o),
      a.L && (a.g.I = a.L);
    var p = a.g;
    (a = a.ia),
      (p.L = 1),
      (p.v = Do(cn(d))),
      (p.m = null),
      (p.P = !0),
      _h(p, a);
  }
  e.Za = function () {
    this.C != null && ((this.C = null), $o(this), fu(this), Qe(19));
  };
  function Vo(a) {
    a.C != null && (l.clearTimeout(a.C), (a.C = null));
  }
  function Yh(a, d) {
    var p = null;
    if (a.g == d) {
      Vo(a), hu(a), (a.g = null);
      var w = 2;
    } else if (lu(a.h, d)) (p = d.D), Th(a.h, d), (w = 1);
    else return;
    if (a.G != 0) {
      if (d.o)
        if (w == 1) {
          (p = d.m ? d.m.length : 0), (d = Date.now() - d.F);
          var j = a.B;
          (w = tu()), Ze(w, new vh(w, p)), Bo(a);
        } else Gh(a);
      else if (
        ((j = d.s),
        j == 3 ||
          (j == 0 && 0 < d.X) ||
          !((w == 1 && Uy(a, d)) || (w == 2 && fu(a))))
      )
        switch ((p && 0 < p.length && ((d = a.h), (d.i = d.i.concat(p))), j)) {
          case 1:
            Tr(a, 5);
            break;
          case 4:
            Tr(a, 10);
            break;
          case 3:
            Tr(a, 6);
            break;
          default:
            Tr(a, 2);
        }
    }
  }
  function qh(a, d) {
    let p = a.Ta + Math.floor(Math.random() * a.cb);
    return a.isActive() || (p *= 2), p * d;
  }
  function Tr(a, d) {
    if ((a.j.info("Error code " + d), d == 2)) {
      var p = g(a.fb, a),
        w = a.Xa;
      const j = !w;
      (w = new kr(w || "//www.google.com/images/cleardot.gif")),
        (l.location && l.location.protocol == "http") || Ro(w, "https"),
        Do(w),
        j ? Oy(w.toString(), p) : jy(w.toString(), p);
    } else Qe(2);
    (a.G = 0), a.l && a.l.sa(d), Xh(a), Vh(a);
  }
  e.fb = function (a) {
    a
      ? (this.j.info("Successfully pinged google.com"), Qe(2))
      : (this.j.info("Failed to ping google.com"), Qe(1));
  };
  function Xh(a) {
    if (((a.G = 0), (a.ka = []), a.l)) {
      const d = bh(a.h);
      (d.length != 0 || a.i.length != 0) &&
        (N(a.ka, d),
        N(a.ka, a.i),
        (a.h.i.length = 0),
        A(a.i),
        (a.i.length = 0)),
        a.l.ra();
    }
  }
  function Jh(a, d, p) {
    var w = p instanceof kr ? cn(p) : new kr(p);
    if (w.g != "") d && (w.g = d + "." + w.g), Mo(w, w.s);
    else {
      var j = l.location;
      (w = j.protocol),
        (d = d ? d + "." + j.hostname : j.hostname),
        (j = +j.port);
      var M = new kr(null);
      w && Ro(M, w), d && (M.g = d), j && Mo(M, j), p && (M.l = p), (w = M);
    }
    return (
      (p = a.D),
      (d = a.ya),
      p && d && de(w, p, d),
      de(w, "VER", a.la),
      cs(a, w),
      w
    );
  }
  function Zh(a, d, p) {
    if (d && !a.J)
      throw Error("Can't create secondary domain capable XhrIo object.");
    return (
      (d = a.Ca && !a.pa ? new Te(new Fo({ eb: p })) : new Te(a.pa)),
      d.Ha(a.J),
      d
    );
  }
  e.isActive = function () {
    return !!this.l && this.l.isActive(this);
  };
  function Qh() {}
  (e = Qh.prototype),
    (e.ua = function () {}),
    (e.ta = function () {}),
    (e.sa = function () {}),
    (e.ra = function () {}),
    (e.isActive = function () {
      return !0;
    }),
    (e.Na = function () {});
  function Tt(a, d) {
    He.call(this),
      (this.g = new Bh(d)),
      (this.l = a),
      (this.h = (d && d.messageUrlParams) || null),
      (a = (d && d.messageHeaders) || null),
      d &&
        d.clientProtocolHeaderRequired &&
        (a
          ? (a["X-Client-Protocol"] = "webchannel")
          : (a = { "X-Client-Protocol": "webchannel" })),
      (this.g.o = a),
      (a = (d && d.initMessageHeaders) || null),
      d &&
        d.messageContentType &&
        (a
          ? (a["X-WebChannel-Content-Type"] = d.messageContentType)
          : (a = { "X-WebChannel-Content-Type": d.messageContentType })),
      d &&
        d.va &&
        (a
          ? (a["X-WebChannel-Client-Profile"] = d.va)
          : (a = { "X-WebChannel-Client-Profile": d.va })),
      (this.g.S = a),
      (a = d && d.Sb) && !S(a) && (this.g.m = a),
      (this.v = (d && d.supportsCrossDomainXhr) || !1),
      (this.u = (d && d.sendRawJson) || !1),
      (d = d && d.httpSessionIdParam) &&
        !S(d) &&
        ((this.g.D = d),
        (a = this.h),
        a !== null && d in a && ((a = this.h), d in a && delete a[d])),
      (this.j = new ni(this));
  }
  _(Tt, He),
    (Tt.prototype.m = function () {
      (this.g.l = this.j),
        this.v && (this.g.J = !0),
        this.g.connect(this.l, this.h || void 0);
    }),
    (Tt.prototype.close = function () {
      du(this.g);
    }),
    (Tt.prototype.o = function (a) {
      var d = this.g;
      if (typeof a == "string") {
        var p = {};
        (p.__data__ = a), (a = p);
      } else this.u && ((p = {}), (p.__data__ = Jl(a)), (a = p));
      d.i.push(new Cy(d.Ya++, a)), d.G == 3 && Bo(d);
    }),
    (Tt.prototype.N = function () {
      (this.g.l = null),
        delete this.j,
        du(this.g),
        delete this.g,
        Tt.aa.N.call(this);
    });
  function ep(a) {
    Ql.call(this),
      a.__headers__ &&
        ((this.headers = a.__headers__),
        (this.statusCode = a.__status__),
        delete a.__headers__,
        delete a.__status__);
    var d = a.__sm__;
    if (d) {
      e: {
        for (const p in d) {
          a = p;
          break e;
        }
        a = void 0;
      }
      (this.i = a) &&
        ((a = this.i), (d = d !== null && a in d ? d[a] : void 0)),
        (this.data = d);
    } else this.data = a;
  }
  _(ep, Ql);
  function tp() {
    eu.call(this), (this.status = 1);
  }
  _(tp, eu);
  function ni(a) {
    this.g = a;
  }
  _(ni, Qh),
    (ni.prototype.ua = function () {
      Ze(this.g, "a");
    }),
    (ni.prototype.ta = function (a) {
      Ze(this.g, new ep(a));
    }),
    (ni.prototype.sa = function (a) {
      Ze(this.g, new tp());
    }),
    (ni.prototype.ra = function () {
      Ze(this.g, "b");
    }),
    (Tt.prototype.send = Tt.prototype.o),
    (Tt.prototype.open = Tt.prototype.m),
    (Tt.prototype.close = Tt.prototype.close),
    (nu.NO_ERROR = 0),
    (nu.TIMEOUT = 8),
    (nu.HTTP_ERROR = 6),
    (_y.COMPLETE = "complete"),
    (my.EventType = Qi),
    (Qi.OPEN = "a"),
    (Qi.CLOSE = "b"),
    (Qi.ERROR = "c"),
    (Qi.MESSAGE = "d"),
    (He.prototype.listen = He.prototype.K),
    (Te.prototype.listenOnce = Te.prototype.L),
    (Te.prototype.getLastError = Te.prototype.Ka),
    (Te.prototype.getLastErrorCode = Te.prototype.Ba),
    (Te.prototype.getStatus = Te.prototype.Z),
    (Te.prototype.getResponseJson = Te.prototype.Oa),
    (Te.prototype.getResponseText = Te.prototype.oa),
    (Te.prototype.send = Te.prototype.ea),
    (Te.prototype.setWithCredentials = Te.prototype.Ha);
}).apply(
  typeof da < "u"
    ? da
    : typeof self < "u"
    ? self
    : typeof window < "u"
    ? window
    : {}
);
const Jm = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tt {
  constructor(t) {
    this.uid = t;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t) {
    return t.uid === this.uid;
  }
}
(tt.UNAUTHENTICATED = new tt(null)),
  (tt.GOOGLE_CREDENTIALS = new tt("google-credentials-uid")),
  (tt.FIRST_PARTY = new tt("first-party-uid")),
  (tt.MOCK_USER = new tt("mock-user"));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let bo = "10.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $i = new Of("@firebase/firestore");
function zt(e, ...t) {
  if ($i.logLevel <= re.DEBUG) {
    const n = t.map(Hf);
    $i.debug(`Firestore (${bo}): ${e}`, ...n);
  }
}
function d2(e, ...t) {
  if ($i.logLevel <= re.ERROR) {
    const n = t.map(Hf);
    $i.error(`Firestore (${bo}): ${e}`, ...n);
  }
}
function GE(e, ...t) {
  if ($i.logLevel <= re.WARN) {
    const n = t.map(Hf);
    $i.warn(`Firestore (${bo}): ${e}`, ...n);
  }
}
function Hf(e) {
  if (typeof e == "string") return e;
  try {
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ return (function (n) {
      return JSON.stringify(n);
    })(e);
  } catch {
    return e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Wf(e = "Unexpected state") {
  const t = `FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: ` + e;
  throw (d2(t), new Error(t));
}
function Ds(e, t) {
  e || Wf();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const at = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss",
};
class lt extends An {
  constructor(t, n) {
    super(t, n),
      (this.code = t),
      (this.message = n),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fs {
  constructor() {
    this.promise = new Promise((t, n) => {
      (this.resolve = t), (this.reject = n);
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class f2 {
  constructor(t, n) {
    (this.user = n),
      (this.type = "OAuth"),
      (this.headers = new Map()),
      this.headers.set("Authorization", `Bearer ${t}`);
  }
}
class KE {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(t, n) {
    t.enqueueRetryable(() => n(tt.UNAUTHENTICATED));
  }
  shutdown() {}
}
class YE {
  constructor(t) {
    (this.token = t), (this.changeListener = null);
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(t, n) {
    (this.changeListener = n), t.enqueueRetryable(() => n(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class qE {
  constructor(t) {
    (this.t = t),
      (this.currentUser = tt.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null);
  }
  start(t, n) {
    Ds(this.o === void 0);
    let r = this.i;
    const i = (u) => (this.i !== r ? ((r = this.i), n(u)) : Promise.resolve());
    let s = new Fs();
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        s.resolve(),
        (s = new Fs()),
        t.enqueueRetryable(() => i(this.currentUser));
    };
    const o = () => {
        const u = s;
        t.enqueueRetryable(async () => {
          await u.promise, await i(this.currentUser);
        });
      },
      l = (u) => {
        zt("FirebaseAuthCredentialsProvider", "Auth detected"),
          (this.auth = u),
          this.o && (this.auth.addAuthTokenListener(this.o), o());
      };
    this.t.onInit((u) => l(u)),
      setTimeout(() => {
        if (!this.auth) {
          const u = this.t.getImmediate({ optional: !0 });
          u
            ? l(u)
            : (zt("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
              s.resolve(),
              (s = new Fs()));
        }
      }, 0),
      o();
  }
  getToken() {
    const t = this.i,
      n = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((r) =>
              this.i !== t
                ? (zt(
                    "FirebaseAuthCredentialsProvider",
                    "getToken aborted due to token change."
                  ),
                  this.getToken())
                : r
                ? (Ds(typeof r.accessToken == "string"),
                  new f2(r.accessToken, this.currentUser))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.o && this.auth.removeAuthTokenListener(this.o),
      (this.o = void 0);
  }
  u() {
    const t = this.auth && this.auth.getUid();
    return Ds(t === null || typeof t == "string"), new tt(t);
  }
}
class XE {
  constructor(t, n, r) {
    (this.l = t),
      (this.h = n),
      (this.P = r),
      (this.type = "FirstParty"),
      (this.user = tt.FIRST_PARTY),
      (this.I = new Map());
  }
  T() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.I.set("X-Goog-AuthUser", this.l);
    const t = this.T();
    return (
      t && this.I.set("Authorization", t),
      this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h),
      this.I
    );
  }
}
class JE {
  constructor(t, n, r) {
    (this.l = t), (this.h = n), (this.P = r);
  }
  getToken() {
    return Promise.resolve(new XE(this.l, this.h, this.P));
  }
  start(t, n) {
    t.enqueueRetryable(() => n(tt.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class ZE {
  constructor(t) {
    (this.value = t),
      (this.type = "AppCheck"),
      (this.headers = new Map()),
      t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class QE {
  constructor(t) {
    (this.A = t),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.R = null);
  }
  start(t, n) {
    Ds(this.o === void 0);
    const r = (s) => {
      s.error != null &&
        zt(
          "FirebaseAppCheckTokenProvider",
          `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`
        );
      const o = s.token !== this.R;
      return (
        (this.R = s.token),
        zt(
          "FirebaseAppCheckTokenProvider",
          `Received ${o ? "new" : "existing"} token.`
        ),
        o ? n(s.token) : Promise.resolve()
      );
    };
    this.o = (s) => {
      t.enqueueRetryable(() => r(s));
    };
    const i = (s) => {
      zt("FirebaseAppCheckTokenProvider", "AppCheck detected"),
        (this.appCheck = s),
        this.o && this.appCheck.addTokenListener(this.o);
    };
    this.A.onInit((s) => i(s)),
      setTimeout(() => {
        if (!this.appCheck) {
          const s = this.A.getImmediate({ optional: !0 });
          s
            ? i(s)
            : zt("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
        }
      }, 0);
  }
  getToken() {
    const t = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(t)
            .then((n) =>
              n
                ? (Ds(typeof n.token == "string"),
                  (this.R = n.token),
                  new ZE(n.token))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.o && this.appCheck.removeTokenListener(this.o),
      (this.o = void 0);
  }
}
function e5(e) {
  return e.name === "IndexedDbTransactionError";
}
class gl {
  constructor(t, n) {
    (this.projectId = t), (this.database = n || "(default)");
  }
  static empty() {
    return new gl("", "");
  }
  get isDefaultDatabase() {
    return this.database === "(default)";
  }
  isEqual(t) {
    return (
      t instanceof gl &&
      t.projectId === this.projectId &&
      t.database === this.database
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Zm, Z;
((Z = Zm || (Zm = {}))[(Z.OK = 0)] = "OK"),
  (Z[(Z.CANCELLED = 1)] = "CANCELLED"),
  (Z[(Z.UNKNOWN = 2)] = "UNKNOWN"),
  (Z[(Z.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (Z[(Z.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (Z[(Z.NOT_FOUND = 5)] = "NOT_FOUND"),
  (Z[(Z.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (Z[(Z.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (Z[(Z.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (Z[(Z.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (Z[(Z.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (Z[(Z.ABORTED = 10)] = "ABORTED"),
  (Z[(Z.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (Z[(Z.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (Z[(Z.INTERNAL = 13)] = "INTERNAL"),
  (Z[(Z.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (Z[(Z.DATA_LOSS = 15)] = "DATA_LOSS");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ new c2([4294967295, 4294967295], 0);
function Zu() {
  return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t5 {
  constructor(t, n, r = 1e3, i = 1.5, s = 6e4) {
    (this.ui = t),
      (this.timerId = n),
      (this.ko = r),
      (this.qo = i),
      (this.Qo = s),
      (this.Ko = 0),
      (this.$o = null),
      (this.Uo = Date.now()),
      this.reset();
  }
  reset() {
    this.Ko = 0;
  }
  Wo() {
    this.Ko = this.Qo;
  }
  Go(t) {
    this.cancel();
    const n = Math.floor(this.Ko + this.zo()),
      r = Math.max(0, Date.now() - this.Uo),
      i = Math.max(0, n - r);
    i > 0 &&
      zt(
        "ExponentialBackoff",
        `Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`
      ),
      (this.$o = this.ui.enqueueAfterDelay(
        this.timerId,
        i,
        () => ((this.Uo = Date.now()), t())
      )),
      (this.Ko *= this.qo),
      this.Ko < this.ko && (this.Ko = this.ko),
      this.Ko > this.Qo && (this.Ko = this.Qo);
  }
  jo() {
    this.$o !== null && (this.$o.skipDelay(), (this.$o = null));
  }
  cancel() {
    this.$o !== null && (this.$o.cancel(), (this.$o = null));
  }
  zo() {
    return (Math.random() - 0.5) * this.Ko;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gf {
  constructor(t, n, r, i, s) {
    (this.asyncQueue = t),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = s),
      (this.deferred = new Fs()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {});
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(t, n, r, i, s) {
    const o = Date.now() + r,
      l = new Gf(t, n, o, i, s);
    return l.start(r), l;
  }
  start(t) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(t) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new lt(at.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((t) => this.deferred.resolve(t)))
        : Promise.resolve()
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
var Qm, eg;
((eg = Qm || (Qm = {})).ea = "default"), (eg.Cache = "cache");
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function n5(e) {
  const t = {};
  return (
    e.timeoutSeconds !== void 0 && (t.timeoutSeconds = e.timeoutSeconds), t
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tg = new Map();
function r5(e, t, n, r) {
  if (t === !0 && r === !0)
    throw new lt(at.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`);
}
function i5(e) {
  if (e === void 0) return "undefined";
  if (e === null) return "null";
  if (typeof e == "string")
    return e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e);
  if (typeof e == "number" || typeof e == "boolean") return "" + e;
  if (typeof e == "object") {
    if (e instanceof Array) return "an array";
    {
      const t = (function (r) {
        return r.constructor ? r.constructor.name : null;
      })(e);
      return t ? `a custom ${t} object` : "an object";
    }
  }
  return typeof e == "function" ? "a function" : Wf();
}
function s5(e, t) {
  if (("_delegate" in e && (e = e._delegate), !(e instanceof t))) {
    if (t.name === e.constructor.name)
      throw new lt(
        at.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
      );
    {
      const n = i5(e);
      throw new lt(
        at.INVALID_ARGUMENT,
        `Expected type '${t.name}', but it was: ${n}`
      );
    }
  }
  return e;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ng {
  constructor(t) {
    var n, r;
    if (t.host === void 0) {
      if (t.ssl !== void 0)
        throw new lt(
          at.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set"
        );
      (this.host = "firestore.googleapis.com"), (this.ssl = !0);
    } else
      (this.host = t.host),
        (this.ssl = (n = t.ssl) === null || n === void 0 || n);
    if (
      ((this.credentials = t.credentials),
      (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
      (this.localCache = t.localCache),
      t.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (t.cacheSizeBytes !== -1 && t.cacheSizeBytes < 1048576)
        throw new lt(
          at.INVALID_ARGUMENT,
          "cacheSizeBytes must be at least 1048576"
        );
      this.cacheSizeBytes = t.cacheSizeBytes;
    }
    r5(
      "experimentalForceLongPolling",
      t.experimentalForceLongPolling,
      "experimentalAutoDetectLongPolling",
      t.experimentalAutoDetectLongPolling
    ),
      (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : t.experimentalAutoDetectLongPolling === void 0
        ? (this.experimentalAutoDetectLongPolling = !0)
        : (this.experimentalAutoDetectLongPolling =
            !!t.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = n5(
        (r = t.experimentalLongPollingOptions) !== null && r !== void 0 ? r : {}
      )),
      (function (s) {
        if (s.timeoutSeconds !== void 0) {
          if (isNaN(s.timeoutSeconds))
            throw new lt(
              at.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`
            );
          if (s.timeoutSeconds < 5)
            throw new lt(
              at.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`
            );
          if (s.timeoutSeconds > 30)
            throw new lt(
              at.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`
            );
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!t.useFetchStreams);
  }
  isEqual(t) {
    return (
      this.host === t.host &&
      this.ssl === t.ssl &&
      this.credentials === t.credentials &&
      this.cacheSizeBytes === t.cacheSizeBytes &&
      this.experimentalForceLongPolling === t.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        t.experimentalAutoDetectLongPolling &&
      (function (r, i) {
        return r.timeoutSeconds === i.timeoutSeconds;
      })(
        this.experimentalLongPollingOptions,
        t.experimentalLongPollingOptions
      ) &&
      this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
      this.useFetchStreams === t.useFetchStreams
    );
  }
}
class h2 {
  constructor(t, n, r, i) {
    (this._authCredentials = t),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = i),
      (this.type = "firestore-lite"),
      (this._persistenceKey = "(lite)"),
      (this._settings = new ng({})),
      (this._settingsFrozen = !1),
      (this._terminateTask = "notTerminated");
  }
  get app() {
    if (!this._app)
      throw new lt(
        at.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== "notTerminated";
  }
  _setSettings(t) {
    if (this._settingsFrozen)
      throw new lt(
        at.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
      );
    (this._settings = new ng(t)),
      t.credentials !== void 0 &&
        (this._authCredentials = (function (r) {
          if (!r) return new KE();
          switch (r.type) {
            case "firstParty":
              return new JE(
                r.sessionIndex || "0",
                r.iamToken || null,
                r.authTokenFactory || null
              );
            case "provider":
              return r.client;
            default:
              throw new lt(
                at.INVALID_ARGUMENT,
                "makeAuthCredentialsProvider failed due to invalid credential type"
              );
          }
        })(t.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings;
  }
  _delete() {
    return (
      this._terminateTask === "notTerminated" &&
        (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  async _restart() {
    this._terminateTask === "notTerminated"
      ? await this._terminate()
      : (this._terminateTask = "notTerminated");
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (n) {
        const r = tg.get(n);
        r &&
          (zt("ComponentProvider", "Removing Datastore"),
          tg.delete(n),
          r.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function o5(e, t, n, r = {}) {
  var i;
  const s = (e = s5(e, h2))._getSettings(),
    o = `${t}:${n}`;
  if (
    (s.host !== "firestore.googleapis.com" &&
      s.host !== o &&
      GE(
        "Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."
      ),
    e._setSettings(Object.assign(Object.assign({}, s), { host: o, ssl: !1 })),
    r.mockUserToken)
  ) {
    let l, u;
    if (typeof r.mockUserToken == "string")
      (l = r.mockUserToken), (u = tt.MOCK_USER);
    else {
      l = aS(
        r.mockUserToken,
        (i = e._app) === null || i === void 0 ? void 0 : i.options.projectId
      );
      const c = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!c)
        throw new lt(
          at.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        );
      u = new tt(c);
    }
    e._authCredentials = new YE(new f2(l, u));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rg {
  constructor(t = Promise.resolve()) {
    (this.Pu = []),
      (this.Iu = !1),
      (this.Tu = []),
      (this.Eu = null),
      (this.du = !1),
      (this.Au = !1),
      (this.Ru = []),
      (this.t_ = new t5(this, "async_queue_retry")),
      (this.Vu = () => {
        const r = Zu();
        r &&
          zt("AsyncQueue", "Visibility state changed to " + r.visibilityState),
          this.t_.jo();
      }),
      (this.mu = t);
    const n = Zu();
    n &&
      typeof n.addEventListener == "function" &&
      n.addEventListener("visibilitychange", this.Vu);
  }
  get isShuttingDown() {
    return this.Iu;
  }
  enqueueAndForget(t) {
    this.enqueue(t);
  }
  enqueueAndForgetEvenWhileRestricted(t) {
    this.fu(), this.gu(t);
  }
  enterRestrictedMode(t) {
    if (!this.Iu) {
      (this.Iu = !0), (this.Au = t || !1);
      const n = Zu();
      n &&
        typeof n.removeEventListener == "function" &&
        n.removeEventListener("visibilitychange", this.Vu);
    }
  }
  enqueue(t) {
    if ((this.fu(), this.Iu)) return new Promise(() => {});
    const n = new Fs();
    return this.gu(() =>
      this.Iu && this.Au
        ? Promise.resolve()
        : (t().then(n.resolve, n.reject), n.promise)
    ).then(() => n.promise);
  }
  enqueueRetryable(t) {
    this.enqueueAndForget(() => (this.Pu.push(t), this.pu()));
  }
  async pu() {
    if (this.Pu.length !== 0) {
      try {
        await this.Pu[0](), this.Pu.shift(), this.t_.reset();
      } catch (t) {
        if (!e5(t)) throw t;
        zt("AsyncQueue", "Operation failed with retryable error: " + t);
      }
      this.Pu.length > 0 && this.t_.Go(() => this.pu());
    }
  }
  gu(t) {
    const n = this.mu.then(
      () => (
        (this.du = !0),
        t()
          .catch((r) => {
            (this.Eu = r), (this.du = !1);
            const i = (function (o) {
              let l = o.message || "";
              return (
                o.stack &&
                  (l = o.stack.includes(o.message)
                    ? o.stack
                    : o.message +
                      `
` +
                      o.stack),
                l
              );
            })(r);
            throw (d2("INTERNAL UNHANDLED ERROR: ", i), r);
          })
          .then((r) => ((this.du = !1), r))
      )
    );
    return (this.mu = n), n;
  }
  enqueueAfterDelay(t, n, r) {
    this.fu(), this.Ru.indexOf(t) > -1 && (n = 0);
    const i = Gf.createAndSchedule(this, t, n, r, (s) => this.yu(s));
    return this.Tu.push(i), i;
  }
  fu() {
    this.Eu && Wf();
  }
  verifyOperationInProgress() {}
  async wu() {
    let t;
    do (t = this.mu), await t;
    while (t !== this.mu);
  }
  Su(t) {
    for (const n of this.Tu) if (n.timerId === t) return !0;
    return !1;
  }
  bu(t) {
    return this.wu().then(() => {
      this.Tu.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
      for (const n of this.Tu)
        if ((n.skipDelay(), t !== "all" && n.timerId === t)) break;
      return this.wu();
    });
  }
  Du(t) {
    this.Ru.push(t);
  }
  yu(t) {
    const n = this.Tu.indexOf(t);
    this.Tu.splice(n, 1);
  }
}
class a5 extends h2 {
  constructor(t, n, r, i) {
    super(t, n, r, i),
      (this.type = "firestore"),
      (this._queue = new rg()),
      (this._persistenceKey = (i == null ? void 0 : i.name) || "[DEFAULT]");
  }
  async _terminate() {
    if (this._firestoreClient) {
      const t = this._firestoreClient.terminate();
      (this._queue = new rg(t)), (this._firestoreClient = void 0), await t;
    }
  }
}
function l5(e, t) {
  const n = typeof e == "object" ? e : bv(),
    r = typeof e == "string" ? e : "(default)",
    i = Lf(n, "firestore").getImmediate({ identifier: r });
  if (!i._initialized) {
    const s = sS("firestore");
    s && o5(i, ...s);
  }
  return i;
}
(function (t, n = !0) {
  (function (i) {
    bo = i;
  })(qi),
    Ui(
      new Vr(
        "firestore",
        (r, { instanceIdentifier: i, options: s }) => {
          const o = r.getProvider("app").getImmediate(),
            l = new a5(
              new qE(r.getProvider("auth-internal")),
              new QE(r.getProvider("app-check-internal")),
              (function (c, h) {
                if (
                  !Object.prototype.hasOwnProperty.apply(c.options, [
                    "projectId",
                  ])
                )
                  throw new lt(
                    at.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new gl(c.options.projectId, h);
              })(o, i),
              o
            );
          return (
            (s = Object.assign({ useFetchStreams: n }, s)), l._setSettings(s), l
          );
        },
        "PUBLIC"
      ).setMultipleInstances(!0)
    ),
    dr(Jm, "4.7.3", t),
    dr(Jm, "4.7.3", "esm2017");
})();
const u5 = {
    apiKey: "AIzaSyDkzkbwYy8DWiBiTRzH9DN2OuCk0LVOxzw",
    authDomain: "sneakerwart.firebaseapp.com",
    projectId: "sneakerwart",
    storageBucket: "sneakerwart.appspot.com",
    messagingSenderId: "822895257180",
    appId: "1:822895257180:web:e0be3a7273fcfe12f86899",
  },
  p2 = Tv(u5),
  fr = BE(p2);
l5(p2);
function c5() {
  const [e, t] = R.useState(""),
    [n, r] = R.useState(""),
    [i, s] = R.useState(null),
    [o, l] = R.useState(null),
    u = wo();
  R.useEffect(() => {
    const h = Px(fr, (m) => {
      m ? (l(m), u("/profile")) : l(null);
    });
    return () => h();
  }, [u]),
    R.useEffect(() => {
      Wt.init({ duration: 700, once: !0, offset: 50 });
    }, []);
  const c = async (h) => {
    h.preventDefault();
    try {
      await kx(fr, e, n);
    } catch (m) {
      s("Ошибка: " + m.message);
    }
  };
  return o
    ? f.jsxs("div", {
        className: "welcome-message",
        children: [
          f.jsxs("h1", {
            children: ["Добро пожаловать, ", o.displayName || o.email, "!"],
          }),
          f.jsx(he, { to: "/profile", children: "Перейти к профилю" }),
        ],
      })
    : f.jsx("section", {
        className: "login",
        children: f.jsxs("div", {
          className: "login__container",
          "data-aos": "fade-right",
          children: [
            f.jsx("h1", { className: "login__title", children: "Вход" }),
            f.jsxs("form", {
              className: "login__form",
              onSubmit: c,
              children: [
                i && f.jsx("p", { className: "error", children: i }),
                f.jsxs("div", {
                  className: "login__input",
                  children: [
                    f.jsx("i", {
                      className: "login__icon",
                      children: f.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "28",
                        height: "28",
                        fill: "rgba(255,254,254,1)",
                        children: f.jsx("path", {
                          d: "M3 6H21V18H3V6ZM2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4H2ZM13 8H19V10H13V8ZM18 12H13V14H18V12ZM10.5 10C10.5 11.3807 9.38071 12.5 8 12.5C6.61929 12.5 5.5 11.3807 5.5 10C5.5 8.61929 6.61929 7.5 8 7.5C9.38071 7.5 10.5 8.61929 10.5 10ZM8 13.5C6.067 13.5 4.5 15.067 4.5 17H11.5C11.5 15.067 9.933 13.5 8 13.5Z",
                        }),
                      }),
                    }),
                    f.jsx("input", {
                      type: "email",
                      className: "login__input",
                      placeholder: "Email",
                      value: e,
                      onChange: (h) => t(h.target.value),
                    }),
                  ],
                }),
                f.jsxs("div", {
                  className: "login__input",
                  children: [
                    f.jsx("i", {
                      className: "login__icon",
                      children: f.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "28",
                        height: "28",
                        fill: "rgba(255,255,255,1)",
                        children: f.jsx("path", {
                          d: "M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z",
                        }),
                      }),
                    }),
                    f.jsx("input", {
                      type: "password",
                      className: "login__input",
                      placeholder: "Пароль",
                      value: n,
                      onChange: (h) => r(h.target.value),
                    }),
                  ],
                }),
                f.jsxs("div", {
                  className: "login__button",
                  children: [
                    f.jsx("button", { type: "submit", children: "Войти" }),
                    f.jsxs("div", {
                      className: "login__btnText",
                      children: [
                        f.jsx(he, {
                          to: "/reg",
                          children: f.jsx("span", {
                            children: "Зарегистрироваться",
                          }),
                        }),
                        ", если первый раз на сайте",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
}
function d5() {
  return f.jsx(f.Fragment, {
    children: f.jsx("section", { className: "Log", children: f.jsx(c5, {}) }),
  });
}
function f5() {
  const [e, t] = R.useState(""),
    [n, r] = R.useState(""),
    [i, s] = R.useState(""),
    [o, l] = R.useState(""),
    [u, c] = R.useState(null),
    h = wo();
  R.useEffect(() => {
    Wt.init({ duration: 700, once: !0, offset: 50 });
  }, []);
  const m = async (g) => {
    if ((g.preventDefault(), i !== o)) {
      c("Пароли не совпадают");
      return;
    }
    try {
      const _ = (await Ex(fr, n, i)).user;
      await bx(_, { displayName: e }), h("/profile"), c(null);
    } catch (y) {
      c(y.message);
    }
  };
  return f.jsx(f.Fragment, {
    children: f.jsx("section", {
      className: "reg",
      children: f.jsxs(De, {
        className: "login__container",
        "data-aos": "fade-right",
        children: [
          f.jsx("h1", { className: "reg__title", children: "Регистрация" }),
          f.jsxs("form", {
            className: "login__form",
            onSubmit: m,
            children: [
              u && f.jsx("p", { className: "error", children: u }),
              f.jsxs("div", {
                className: "login__input",
                children: [
                  f.jsx("i", {
                    className: "login__icon",
                    children: f.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: "28",
                      height: "28",
                      fill: "rgba(255,254,254,1)",
                      children: f.jsx("path", {
                        d: "M12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2ZM5 20C5 16.6863 8.68629 14 12 14C15.3137 14 19 16.6863 19 20H5Z",
                      }),
                    }),
                  }),
                  f.jsx("input", {
                    type: "text",
                    className: "login__input",
                    placeholder: "Имя",
                    value: e,
                    onChange: (g) => t(g.target.value),
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "login__input",
                children: [
                  f.jsx("i", {
                    className: "login__icon",
                    children: f.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: "28",
                      height: "28",
                      fill: "rgba(255,254,254,1)",
                      children: f.jsx("path", {
                        d: "M3 6H21V18H3V6ZM2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4H2ZM13 8H19V10H13V8ZM18 12H13V14H18V12ZM10.5 10C10.5 11.3807 9.38071 12.5 8 12.5C6.61929 12.5 5.5 11.3807 5.5 10C5.5 8.61929 6.61929 7.5 8 7.5C9.38071 7.5 10.5 8.61929 10.5 10ZM8 13.5C6.067 13.5 4.5 15.067 4.5 17H11.5C11.5 15.067 9.933 13.5 8 13.5Z",
                      }),
                    }),
                  }),
                  f.jsx("input", {
                    type: "email",
                    className: "login__input",
                    placeholder: "Email",
                    value: n,
                    onChange: (g) => r(g.target.value),
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "login__input",
                children: [
                  f.jsx("i", {
                    className: "login__icon",
                    children: f.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: "28",
                      height: "28",
                      fill: "rgba(255,255,255,1)",
                      children: f.jsx("path", {
                        d: "M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z",
                      }),
                    }),
                  }),
                  f.jsx("input", {
                    type: "password",
                    className: "login__input",
                    placeholder: "Придумайте пароль",
                    value: i,
                    onChange: (g) => s(g.target.value),
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "login__input",
                children: [
                  f.jsx("i", {
                    className: "login__icon",
                    children: f.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: "28",
                      height: "28",
                      fill: "rgba(255,255,255,1)",
                      children: f.jsx("path", {
                        d: "M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z",
                      }),
                    }),
                  }),
                  f.jsx("input", {
                    type: "password",
                    className: "login__input",
                    placeholder: "Повторите пароль",
                    value: o,
                    onChange: (g) => l(g.target.value),
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "login__button",
                children: [
                  f.jsx("button", {
                    type: "submit",
                    children: "Зарегистрироваться",
                  }),
                  f.jsxs("div", {
                    className: "login__btnText",
                    children: [
                      f.jsx(he, {
                        to: "/log",
                        children: f.jsx("span", { children: "Войти" }),
                      }),
                      ", если уже есть аккаунт",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function h5() {
  return f.jsx(f.Fragment, {
    children: f.jsx("section", { className: "Log", children: f.jsx(f5, {}) }),
  });
}
function p5() {
  return f.jsx(f.Fragment, {
    children: f.jsxs("section", {
      className: "aboutus",
      children: [
        f.jsx("h1", { className: "aboutus__title", children: "Мы на карте" }),
        f.jsx("iframe", {
          className: "aboutus__map",
          src: "https://yandex.ru/map-widget/v1/?um=constructor%3Ae1f7f0c36befb9a52293aadb2324cf8c7583f5b2728c331e89eec73462a48792&source=constructor",
          width: "100%",
          height: "340",
          frameBorder: "0",
        }),
        f.jsx(he, {
          to: "https://yandex.ru/maps/-/CDqjbOMo",
          target: "_blank",
          rel: "noopener noreferrer",
          children: f.jsx("button", {
            className: "aboutus__btn",
            children: "ОТКРЫТЬ НА КАРТЕ",
          }),
        }),
      ],
    }),
  });
}
function m5() {
  return f.jsx(f.Fragment, {
    children: f.jsx("section", {
      children: f.jsx(De, { children: f.jsx(p5, {}) }),
    }),
  });
}
function g5() {
  const e = ln(),
    { cartItems: t, totalPrice: n } = e.state;
  return f.jsxs(f.Fragment, {
    children: [
      f.jsx("h1", {
        className: "checkoutPage__title",
        children: "Оформление заказа",
      }),
      f.jsx(De, {
        children: f.jsx("h2", {
          className: "userInfo__title",
          children: "Личные данные",
        }),
      }),
      f.jsxs(De, {
        className: "checkCont",
        children: [
          f.jsxs("div", {
            className: "userInfo",
            children: [
              f.jsx("div", {
                className: "userInfo__content",
                children: f.jsxs("form", {
                  action: "",
                  className: "userInfo__form",
                  children: [
                    f.jsxs("div", {
                      className: "login__input",
                      children: [
                        f.jsx("i", {
                          className: "login__icon",
                          children: f.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "28",
                            height: "28",
                            fill: "rgba(255,254,254,1)",
                            children: f.jsx("path", {
                              d: "M3 6H21V18H3V6ZM2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4H2ZM13 8H19V10H13V8ZM18 12H13V14H18V12ZM10.5 10C10.5 11.3807 9.38071 12.5 8 12.5C6.61929 12.5 5.5 11.3807 5.5 10C5.5 8.61929 6.61929 7.5 8 7.5C9.38071 7.5 10.5 8.61929 10.5 10ZM8 13.5C6.067 13.5 4.5 15.067 4.5 17H11.5C11.5 15.067 9.933 13.5 8 13.5Z",
                            }),
                          }),
                        }),
                        f.jsx("input", {
                          type: "text",
                          className: "login__input",
                          placeholder: "Имя и Фамилия",
                        }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "login__input",
                      children: [
                        f.jsx("i", {
                          className: "login__icon",
                          children: f.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "28",
                            height: "28",
                            fill: "rgba(255,255,255,1)",
                            children: f.jsx("path", {
                              d: "M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z",
                            }),
                          }),
                        }),
                        f.jsx("input", {
                          type: "number",
                          className: "login__input",
                          placeholder: "Номер телефона",
                        }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "login__input",
                      children: [
                        f.jsx("i", {
                          className: "login__icon",
                          children: f.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "28",
                            height: "28",
                            fill: "rgba(255,255,255,1)",
                            children: f.jsx("path", {
                              d: "M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z",
                            }),
                          }),
                        }),
                        f.jsx("input", {
                          type: "email",
                          className: "login__input",
                          placeholder: "Электронная почта",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              f.jsxs("div", {
                className: "userInfo__content",
                children: [
                  f.jsx("h2", {
                    className: "userInfo__titleAdres",
                    children: "Адрес доставки",
                  }),
                  f.jsx("form", {
                    action: "",
                    className: "userInfo__form",
                    children: f.jsxs("div", {
                      className: "login__input",
                      children: [
                        f.jsx("i", {
                          className: "login__icon",
                          children: f.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            width: "28",
                            height: "28",
                            fill: "rgba(255,255,255,1)",
                            children: f.jsx("path", {
                              d: "M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM8 15H16V17H8V15Z",
                            }),
                          }),
                        }),
                        f.jsx("input", {
                          type: "number",
                          className: "login__input",
                          placeholder: "Ваш адрес",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          f.jsx("div", {
            className: "checkoutPage",
            children:
              t.length > 0
                ? f.jsx(f.Fragment, {
                    children: f.jsxs("div", {
                      className: "checkoutPage__card",
                      children: [
                        f.jsx("div", {
                          className: "checkoutPage__items",
                          children: t.map((r, i) =>
                            f.jsxs(
                              "div",
                              {
                                className: "checkoutPage__item",
                                children: [
                                  f.jsxs("div", {
                                    className: "checkoutPage__imageee",
                                    children: [
                                      f.jsx("img", {
                                        src: r.img,
                                        alt: r.title,
                                        className: "checkoutPage__image",
                                      }),
                                      f.jsxs("div", {
                                        className: "checkoutPage__titleBl",
                                        children: [
                                          f.jsx("span", {
                                            className:
                                              "checkoutPage__itemTitle",
                                            children: r.title,
                                          }),
                                          f.jsxs("div", {
                                            className: "basketCard__size",
                                            children: [" ", r.size],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  f.jsx("div", {
                                    className: "checkoutPage__details",
                                    children: f.jsxs("span", {
                                      className: "checkoutPage__itemPrice",
                                      children: [r.price, "₽"],
                                    }),
                                  }),
                                ],
                              },
                              i
                            )
                          ),
                        }),
                        f.jsx("form", {
                          action: "",
                          className: "userInfo__form",
                          children: f.jsxs("div", {
                            className: "login__input",
                            children: [
                              f.jsx("i", {
                                className: "login__icon",
                                children: f.jsx("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 24 24",
                                  width: "28",
                                  height: "28",
                                  fill: "rgba(255,254,254,1)",
                                  children: f.jsx("path", {
                                    d: "M2.00488 9.49979V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V9.49979C20.6242 9.49979 19.5049 10.6191 19.5049 11.9998C19.5049 13.3805 20.6242 14.4998 22.0049 14.4998V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V14.4998C3.38559 14.4998 4.50488 13.3805 4.50488 11.9998C4.50488 10.6191 3.38559 9.49979 2.00488 9.49979ZM4.00488 7.96755C5.4866 8.7039 6.50488 10.2329 6.50488 11.9998C6.50488 13.7666 5.4866 15.2957 4.00488 16.032V18.9998H20.0049V16.032C18.5232 15.2957 17.5049 13.7666 17.5049 11.9998C17.5049 10.2329 18.5232 8.7039 20.0049 7.96755V4.99979H4.00488V7.96755ZM9.00488 8.99979H15.0049V10.9998H9.00488V8.99979ZM9.00488 12.9998H15.0049V14.9998H9.00488V12.9998Z",
                                  }),
                                }),
                              }),
                              f.jsx("input", {
                                type: "text",
                                className: "login__input",
                                placeholder: "Введите промокод",
                              }),
                            ],
                          }),
                        }),
                        f.jsxs("div", {
                          className: "checkoutPage__total",
                          children: [
                            f.jsx("div", { children: "К оплате:" }),
                            " ",
                            f.jsxs("span", { children: [n, "₽"] }),
                          ],
                        }),
                        f.jsx("button", {
                          className: "checkoutPage__confirmButton",
                          children: "Перейти к оплате",
                        }),
                      ],
                    }),
                  })
                : f.jsx("p", { children: "Ваша корзина пуста" }),
          }),
        ],
      }),
    ],
  });
}
function ig(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function Kf(e = {}, t = {}) {
  Object.keys(t).forEach((n) => {
    typeof e[n] > "u"
      ? (e[n] = t[n])
      : ig(t[n]) && ig(e[n]) && Object.keys(t[n]).length > 0 && Kf(e[n], t[n]);
  });
}
const m2 = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function Be() {
  const e = typeof document < "u" ? document : {};
  return Kf(e, m2), e;
}
const v5 = {
  document: m2,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Fe() {
  const e = typeof window < "u" ? window : {};
  return Kf(e, v5), e;
}
function y5(e) {
  const t = e.__proto__;
  Object.defineProperty(e, "__proto__", {
    get() {
      return t;
    },
    set(n) {
      t.__proto__ = n;
    },
  });
}
class Jn extends Array {
  constructor(t) {
    typeof t == "number" ? super(t) : (super(...(t || [])), y5(this));
  }
}
function Io(e = []) {
  const t = [];
  return (
    e.forEach((n) => {
      Array.isArray(n) ? t.push(...Io(n)) : t.push(n);
    }),
    t
  );
}
function g2(e, t) {
  return Array.prototype.filter.call(e, t);
}
function w5(e) {
  const t = [];
  for (let n = 0; n < e.length; n += 1) t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function _5(e, t) {
  if (typeof e != "string") return [e];
  const n = [],
    r = t.querySelectorAll(e);
  for (let i = 0; i < r.length; i += 1) n.push(r[i]);
  return n;
}
function B(e, t) {
  const n = Fe(),
    r = Be();
  let i = [];
  if (!t && e instanceof Jn) return e;
  if (!e) return new Jn(i);
  if (typeof e == "string") {
    const s = e.trim();
    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
      let o = "div";
      s.indexOf("<li") === 0 && (o = "ul"),
        s.indexOf("<tr") === 0 && (o = "tbody"),
        (s.indexOf("<td") === 0 || s.indexOf("<th") === 0) && (o = "tr"),
        s.indexOf("<tbody") === 0 && (o = "table"),
        s.indexOf("<option") === 0 && (o = "select");
      const l = r.createElement(o);
      l.innerHTML = s;
      for (let u = 0; u < l.childNodes.length; u += 1) i.push(l.childNodes[u]);
    } else i = _5(e.trim(), t || r);
  } else if (e.nodeType || e === n || e === r) i.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof Jn) return e;
    i = e;
  }
  return new Jn(w5(i));
}
B.fn = Jn.prototype;
function S5(...e) {
  const t = Io(e.map((n) => n.split(" ")));
  return (
    this.forEach((n) => {
      n.classList.add(...t);
    }),
    this
  );
}
function C5(...e) {
  const t = Io(e.map((n) => n.split(" ")));
  return (
    this.forEach((n) => {
      n.classList.remove(...t);
    }),
    this
  );
}
function x5(...e) {
  const t = Io(e.map((n) => n.split(" ")));
  this.forEach((n) => {
    t.forEach((r) => {
      n.classList.toggle(r);
    });
  });
}
function E5(...e) {
  const t = Io(e.map((n) => n.split(" ")));
  return (
    g2(this, (n) => t.filter((r) => n.classList.contains(r)).length > 0)
      .length > 0
  );
}
function k5(e, t) {
  if (arguments.length === 1 && typeof e == "string")
    return this[0] ? this[0].getAttribute(e) : void 0;
  for (let n = 0; n < this.length; n += 1)
    if (arguments.length === 2) this[n].setAttribute(e, t);
    else for (const r in e) (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
  return this;
}
function T5(e) {
  for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
  return this;
}
function b5(e) {
  for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
  return this;
}
function I5(e) {
  for (let t = 0; t < this.length; t += 1)
    this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
  return this;
}
function N5(...e) {
  let [t, n, r, i] = e;
  typeof e[1] == "function" && (([t, r, i] = e), (n = void 0)), i || (i = !1);
  function s(c) {
    const h = c.target;
    if (!h) return;
    const m = c.target.dom7EventData || [];
    if ((m.indexOf(c) < 0 && m.unshift(c), B(h).is(n))) r.apply(h, m);
    else {
      const g = B(h).parents();
      for (let y = 0; y < g.length; y += 1) B(g[y]).is(n) && r.apply(g[y], m);
    }
  }
  function o(c) {
    const h = c && c.target ? c.target.dom7EventData || [] : [];
    h.indexOf(c) < 0 && h.unshift(c), r.apply(this, h);
  }
  const l = t.split(" ");
  let u;
  for (let c = 0; c < this.length; c += 1) {
    const h = this[c];
    if (n)
      for (u = 0; u < l.length; u += 1) {
        const m = l[u];
        h.dom7LiveListeners || (h.dom7LiveListeners = {}),
          h.dom7LiveListeners[m] || (h.dom7LiveListeners[m] = []),
          h.dom7LiveListeners[m].push({ listener: r, proxyListener: s }),
          h.addEventListener(m, s, i);
      }
    else
      for (u = 0; u < l.length; u += 1) {
        const m = l[u];
        h.dom7Listeners || (h.dom7Listeners = {}),
          h.dom7Listeners[m] || (h.dom7Listeners[m] = []),
          h.dom7Listeners[m].push({ listener: r, proxyListener: o }),
          h.addEventListener(m, o, i);
      }
  }
  return this;
}
function P5(...e) {
  let [t, n, r, i] = e;
  typeof e[1] == "function" && (([t, r, i] = e), (n = void 0)), i || (i = !1);
  const s = t.split(" ");
  for (let o = 0; o < s.length; o += 1) {
    const l = s[o];
    for (let u = 0; u < this.length; u += 1) {
      const c = this[u];
      let h;
      if (
        (!n && c.dom7Listeners
          ? (h = c.dom7Listeners[l])
          : n && c.dom7LiveListeners && (h = c.dom7LiveListeners[l]),
        h && h.length)
      )
        for (let m = h.length - 1; m >= 0; m -= 1) {
          const g = h[m];
          (r && g.listener === r) ||
          (r &&
            g.listener &&
            g.listener.dom7proxy &&
            g.listener.dom7proxy === r)
            ? (c.removeEventListener(l, g.proxyListener, i), h.splice(m, 1))
            : r ||
              (c.removeEventListener(l, g.proxyListener, i), h.splice(m, 1));
        }
    }
  }
  return this;
}
function A5(...e) {
  const t = Fe(),
    n = e[0].split(" "),
    r = e[1];
  for (let i = 0; i < n.length; i += 1) {
    const s = n[i];
    for (let o = 0; o < this.length; o += 1) {
      const l = this[o];
      if (t.CustomEvent) {
        const u = new t.CustomEvent(s, {
          detail: r,
          bubbles: !0,
          cancelable: !0,
        });
        (l.dom7EventData = e.filter((c, h) => h > 0)),
          l.dispatchEvent(u),
          (l.dom7EventData = []),
          delete l.dom7EventData;
      }
    }
  }
  return this;
}
function O5(e) {
  const t = this;
  function n(r) {
    r.target === this && (e.call(this, r), t.off("transitionend", n));
  }
  return e && t.on("transitionend", n), this;
}
function j5(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return (
        this[0].offsetWidth +
        parseFloat(t.getPropertyValue("margin-right")) +
        parseFloat(t.getPropertyValue("margin-left"))
      );
    }
    return this[0].offsetWidth;
  }
  return null;
}
function L5(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return (
        this[0].offsetHeight +
        parseFloat(t.getPropertyValue("margin-top")) +
        parseFloat(t.getPropertyValue("margin-bottom"))
      );
    }
    return this[0].offsetHeight;
  }
  return null;
}
function R5() {
  if (this.length > 0) {
    const e = Fe(),
      t = Be(),
      n = this[0],
      r = n.getBoundingClientRect(),
      i = t.body,
      s = n.clientTop || i.clientTop || 0,
      o = n.clientLeft || i.clientLeft || 0,
      l = n === e ? e.scrollY : n.scrollTop,
      u = n === e ? e.scrollX : n.scrollLeft;
    return { top: r.top + l - s, left: r.left + u - o };
  }
  return null;
}
function M5() {
  const e = Fe();
  return this[0] ? e.getComputedStyle(this[0], null) : {};
}
function D5(e, t) {
  const n = Fe();
  let r;
  if (arguments.length === 1)
    if (typeof e == "string") {
      if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e);
    } else {
      for (r = 0; r < this.length; r += 1)
        for (const i in e) this[r].style[i] = e[i];
      return this;
    }
  if (arguments.length === 2 && typeof e == "string") {
    for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
    return this;
  }
  return this;
}
function F5(e) {
  return e
    ? (this.forEach((t, n) => {
        e.apply(t, [t, n]);
      }),
      this)
    : this;
}
function U5(e) {
  const t = g2(this, e);
  return B(t);
}
function z5(e) {
  if (typeof e > "u") return this[0] ? this[0].innerHTML : null;
  for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
  return this;
}
function $5(e) {
  if (typeof e > "u") return this[0] ? this[0].textContent.trim() : null;
  for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
  return this;
}
function B5(e) {
  const t = Fe(),
    n = Be(),
    r = this[0];
  let i, s;
  if (!r || typeof e > "u") return !1;
  if (typeof e == "string") {
    if (r.matches) return r.matches(e);
    if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
    if (r.msMatchesSelector) return r.msMatchesSelector(e);
    for (i = B(e), s = 0; s < i.length; s += 1) if (i[s] === r) return !0;
    return !1;
  }
  if (e === n) return r === n;
  if (e === t) return r === t;
  if (e.nodeType || e instanceof Jn) {
    for (i = e.nodeType ? [e] : e, s = 0; s < i.length; s += 1)
      if (i[s] === r) return !0;
    return !1;
  }
  return !1;
}
function V5() {
  let e = this[0],
    t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function H5(e) {
  if (typeof e > "u") return this;
  const t = this.length;
  if (e > t - 1) return B([]);
  if (e < 0) {
    const n = t + e;
    return n < 0 ? B([]) : B([this[n]]);
  }
  return B([this[e]]);
}
function W5(...e) {
  let t;
  const n = Be();
  for (let r = 0; r < e.length; r += 1) {
    t = e[r];
    for (let i = 0; i < this.length; i += 1)
      if (typeof t == "string") {
        const s = n.createElement("div");
        for (s.innerHTML = t; s.firstChild; ) this[i].appendChild(s.firstChild);
      } else if (t instanceof Jn)
        for (let s = 0; s < t.length; s += 1) this[i].appendChild(t[s]);
      else this[i].appendChild(t);
  }
  return this;
}
function G5(e) {
  const t = Be();
  let n, r;
  for (n = 0; n < this.length; n += 1)
    if (typeof e == "string") {
      const i = t.createElement("div");
      for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1)
        this[n].insertBefore(i.childNodes[r], this[n].childNodes[0]);
    } else if (e instanceof Jn)
      for (r = 0; r < e.length; r += 1)
        this[n].insertBefore(e[r], this[n].childNodes[0]);
    else this[n].insertBefore(e, this[n].childNodes[0]);
  return this;
}
function K5(e) {
  return this.length > 0
    ? e
      ? this[0].nextElementSibling && B(this[0].nextElementSibling).is(e)
        ? B([this[0].nextElementSibling])
        : B([])
      : this[0].nextElementSibling
      ? B([this[0].nextElementSibling])
      : B([])
    : B([]);
}
function Y5(e) {
  const t = [];
  let n = this[0];
  if (!n) return B([]);
  for (; n.nextElementSibling; ) {
    const r = n.nextElementSibling;
    e ? B(r).is(e) && t.push(r) : t.push(r), (n = r);
  }
  return B(t);
}
function q5(e) {
  if (this.length > 0) {
    const t = this[0];
    return e
      ? t.previousElementSibling && B(t.previousElementSibling).is(e)
        ? B([t.previousElementSibling])
        : B([])
      : t.previousElementSibling
      ? B([t.previousElementSibling])
      : B([]);
  }
  return B([]);
}
function X5(e) {
  const t = [];
  let n = this[0];
  if (!n) return B([]);
  for (; n.previousElementSibling; ) {
    const r = n.previousElementSibling;
    e ? B(r).is(e) && t.push(r) : t.push(r), (n = r);
  }
  return B(t);
}
function J5(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1)
    this[n].parentNode !== null &&
      (e
        ? B(this[n].parentNode).is(e) && t.push(this[n].parentNode)
        : t.push(this[n].parentNode));
  return B(t);
}
function Z5(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    let r = this[n].parentNode;
    for (; r; ) e ? B(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
  }
  return B(t);
}
function Q5(e) {
  let t = this;
  return typeof e > "u" ? B([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
}
function e9(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    const r = this[n].querySelectorAll(e);
    for (let i = 0; i < r.length; i += 1) t.push(r[i]);
  }
  return B(t);
}
function t9(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    const r = this[n].children;
    for (let i = 0; i < r.length; i += 1) (!e || B(r[i]).is(e)) && t.push(r[i]);
  }
  return B(t);
}
function n9() {
  for (let e = 0; e < this.length; e += 1)
    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
  return this;
}
const sg = {
  addClass: S5,
  removeClass: C5,
  hasClass: E5,
  toggleClass: x5,
  attr: k5,
  removeAttr: T5,
  transform: b5,
  transition: I5,
  on: N5,
  off: P5,
  trigger: A5,
  transitionEnd: O5,
  outerWidth: j5,
  outerHeight: L5,
  styles: M5,
  offset: R5,
  css: D5,
  each: F5,
  html: z5,
  text: $5,
  is: B5,
  index: V5,
  eq: H5,
  append: W5,
  prepend: G5,
  next: K5,
  nextAll: Y5,
  prev: q5,
  prevAll: X5,
  parent: J5,
  parents: Z5,
  closest: Q5,
  find: e9,
  children: t9,
  filter: U5,
  remove: n9,
};
Object.keys(sg).forEach((e) => {
  Object.defineProperty(B.fn, e, { value: sg[e], writable: !0 });
});
function r9(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function vl(e, t = 0) {
  return setTimeout(e, t);
}
function uo() {
  return Date.now();
}
function i9(e) {
  const t = Fe();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function s9(e, t = "x") {
  const n = Fe();
  let r, i, s;
  const o = i9(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (s = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((s =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = s.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = s.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = s.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function fa(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function o9(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function vt(...e) {
  const t = Object(e[0]),
    n = ["__proto__", "constructor", "prototype"];
  for (let r = 1; r < e.length; r += 1) {
    const i = e[r];
    if (i != null && !o9(i)) {
      const s = Object.keys(Object(i)).filter((o) => n.indexOf(o) < 0);
      for (let o = 0, l = s.length; o < l; o += 1) {
        const u = s[o],
          c = Object.getOwnPropertyDescriptor(i, u);
        c !== void 0 &&
          c.enumerable &&
          (fa(t[u]) && fa(i[u])
            ? i[u].__swiper__
              ? (t[u] = i[u])
              : vt(t[u], i[u])
            : !fa(t[u]) && fa(i[u])
            ? ((t[u] = {}), i[u].__swiper__ ? (t[u] = i[u]) : vt(t[u], i[u]))
            : (t[u] = i[u]));
      }
    }
  }
  return t;
}
function ha(e, t, n) {
  e.style.setProperty(t, n);
}
function v2({ swiper: e, targetPosition: t, side: n }) {
  const r = Fe(),
    i = -e.translate;
  let s = null,
    o;
  const l = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    r.cancelAnimationFrame(e.cssModeFrameID);
  const u = t > i ? "next" : "prev",
    c = (m, g) => (u === "next" && m >= g) || (u === "prev" && m <= g),
    h = () => {
      (o = new Date().getTime()), s === null && (s = o);
      const m = Math.max(Math.min((o - s) / l, 1), 0),
        g = 0.5 - Math.cos(m * Math.PI) / 2;
      let y = i + g * (t - i);
      if ((c(y, t) && (y = t), e.wrapperEl.scrollTo({ [n]: y }), c(y, t))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [n]: y });
          }),
          r.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = r.requestAnimationFrame(h);
    };
  h();
}
let Qu;
function a9() {
  const e = Fe(),
    t = Be();
  return {
    smoothScroll:
      t.documentElement && "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
    passiveListener: (function () {
      let r = !1;
      try {
        const i = Object.defineProperty({}, "passive", {
          get() {
            r = !0;
          },
        });
        e.addEventListener("testPassiveListener", null, i);
      } catch {}
      return r;
    })(),
    gestures: (function () {
      return "ongesturestart" in e;
    })(),
  };
}
function y2() {
  return Qu || (Qu = a9()), Qu;
}
let ec;
function l9({ userAgent: e } = {}) {
  const t = y2(),
    n = Fe(),
    r = n.navigator.platform,
    i = e || n.navigator.userAgent,
    s = { ios: !1, android: !1 },
    o = n.screen.width,
    l = n.screen.height,
    u = i.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = i.match(/(iPad).*OS\s([\d_]+)/);
  const h = i.match(/(iPod)(.*OS\s([\d_]+))?/),
    m = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    g = r === "Win32";
  let y = r === "MacIntel";
  const _ = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !c &&
      y &&
      t.touch &&
      _.indexOf(`${o}x${l}`) >= 0 &&
      ((c = i.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (y = !1)),
    u && !g && ((s.os = "android"), (s.android = !0)),
    (c || m || h) && ((s.os = "ios"), (s.ios = !0)),
    s
  );
}
function u9(e = {}) {
  return ec || (ec = l9(e)), ec;
}
let tc;
function c9() {
  const e = Fe();
  function t() {
    const n = e.navigator.userAgent.toLowerCase();
    return (
      n.indexOf("safari") >= 0 &&
      n.indexOf("chrome") < 0 &&
      n.indexOf("android") < 0
    );
  }
  return {
    isSafari: t(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
  };
}
function d9() {
  return tc || (tc = c9()), tc;
}
function f9({ swiper: e, on: t, emit: n }) {
  const r = Fe();
  let i = null;
  const s = () => {
      !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize"));
    },
    o = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((i = new ResizeObserver((c) => {
          const { width: h, height: m } = e;
          let g = h,
            y = m;
          c.forEach(({ contentBoxSize: _, contentRect: A, target: N }) => {
            (N && N !== e.el) ||
              ((g = A ? A.width : (_[0] || _).inlineSize),
              (y = A ? A.height : (_[0] || _).blockSize));
          }),
            (g !== h || y !== m) && s();
        })),
        i.observe(e.el));
    },
    l = () => {
      i && i.unobserve && e.el && (i.unobserve(e.el), (i = null));
    },
    u = () => {
      !e || e.destroyed || !e.initialized || n("orientationchange");
    };
  t("init", () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
      o();
      return;
    }
    r.addEventListener("resize", s), r.addEventListener("orientationchange", u);
  }),
    t("destroy", () => {
      l(),
        r.removeEventListener("resize", s),
        r.removeEventListener("orientationchange", u);
    });
}
function h9({ swiper: e, extendParams: t, on: n, emit: r }) {
  const i = [],
    s = Fe(),
    o = (c, h = {}) => {
      const m = s.MutationObserver || s.WebkitMutationObserver,
        g = new m((y) => {
          if (y.length === 1) {
            r("observerUpdate", y[0]);
            return;
          }
          const _ = function () {
            r("observerUpdate", y[0]);
          };
          s.requestAnimationFrame
            ? s.requestAnimationFrame(_)
            : s.setTimeout(_, 0);
        });
      g.observe(c, {
        attributes: typeof h.attributes > "u" ? !0 : h.attributes,
        childList: typeof h.childList > "u" ? !0 : h.childList,
        characterData: typeof h.characterData > "u" ? !0 : h.characterData,
      }),
        i.push(g);
    },
    l = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const c = e.$el.parents();
          for (let h = 0; h < c.length; h += 1) o(c[h]);
        }
        o(e.$el[0], { childList: e.params.observeSlideChildren }),
          o(e.$wrapperEl[0], { attributes: !1 });
      }
    },
    u = () => {
      i.forEach((c) => {
        c.disconnect();
      }),
        i.splice(0, i.length);
    };
  t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    n("init", l),
    n("destroy", u);
}
const p9 = {
  on(e, t, n) {
    const r = this;
    if (typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((s) => {
        r.eventsListeners[s] || (r.eventsListeners[s] = []),
          r.eventsListeners[s][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (typeof t != "function") return r;
    function i(...s) {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(r, s);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      n.eventsListeners &&
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, s) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(s, 1);
              });
        }),
      n
    );
  },
  emit(...e) {
    const t = this;
    if (!t.eventsListeners) return t;
    let n, r, i;
    return (
      typeof e[0] == "string" || Array.isArray(e[0])
        ? ((n = e[0]), (r = e.slice(1, e.length)), (i = t))
        : ((n = e[0].events), (r = e[0].data), (i = e[0].context || t)),
      r.unshift(i),
      (Array.isArray(n) ? n : n.split(" ")).forEach((o) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((l) => {
            l.apply(i, [o, ...r]);
          }),
          t.eventsListeners &&
            t.eventsListeners[o] &&
            t.eventsListeners[o].forEach((l) => {
              l.apply(i, r);
            });
      }),
      t
    );
  },
};
function m9() {
  const e = this;
  let t, n;
  const r = e.$el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r[0].clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r[0].clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(r.css("padding-left") || 0, 10) -
        parseInt(r.css("padding-right") || 0, 10)),
      (n =
        n -
        parseInt(r.css("padding-top") || 0, 10) -
        parseInt(r.css("padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function g9() {
  const e = this;
  function t(k) {
    return e.isHorizontal()
      ? k
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[k];
  }
  function n(k, x) {
    return parseFloat(k.getPropertyValue(t(x)) || 0);
  }
  const r = e.params,
    { $wrapperEl: i, size: s, rtlTranslate: o, wrongRTL: l } = e,
    u = e.virtual && r.virtual.enabled,
    c = u ? e.virtual.slides.length : e.slides.length,
    h = i.children(`.${e.params.slideClass}`),
    m = u ? e.virtual.slides.length : h.length;
  let g = [];
  const y = [],
    _ = [];
  let A = r.slidesOffsetBefore;
  typeof A == "function" && (A = r.slidesOffsetBefore.call(e));
  let N = r.slidesOffsetAfter;
  typeof N == "function" && (N = r.slidesOffsetAfter.call(e));
  const C = e.snapGrid.length,
    S = e.slidesGrid.length;
  let E = r.spaceBetween,
    O = -A,
    L = 0,
    D = 0;
  if (typeof s > "u") return;
  typeof E == "string" &&
    E.indexOf("%") >= 0 &&
    (E = (parseFloat(E.replace("%", "")) / 100) * s),
    (e.virtualSize = -E),
    o
      ? h.css({ marginLeft: "", marginBottom: "", marginTop: "" })
      : h.css({ marginRight: "", marginBottom: "", marginTop: "" }),
    r.centeredSlides &&
      r.cssMode &&
      (ha(e.wrapperEl, "--swiper-centered-offset-before", ""),
      ha(e.wrapperEl, "--swiper-centered-offset-after", ""));
  const T = r.grid && r.grid.rows > 1 && e.grid;
  T && e.grid.initSlides(m);
  let v;
  const b =
    r.slidesPerView === "auto" &&
    r.breakpoints &&
    Object.keys(r.breakpoints).filter(
      (k) => typeof r.breakpoints[k].slidesPerView < "u"
    ).length > 0;
  for (let k = 0; k < m; k += 1) {
    v = 0;
    const x = h.eq(k);
    if ((T && e.grid.updateSlide(k, x, m, t), x.css("display") !== "none")) {
      if (r.slidesPerView === "auto") {
        b && (h[k].style[t("width")] = "");
        const P = getComputedStyle(x[0]),
          I = x[0].style.transform,
          V = x[0].style.webkitTransform;
        if (
          (I && (x[0].style.transform = "none"),
          V && (x[0].style.webkitTransform = "none"),
          r.roundLengths)
        )
          v = e.isHorizontal() ? x.outerWidth(!0) : x.outerHeight(!0);
        else {
          const ie = n(P, "width"),
            Ee = n(P, "padding-left"),
            X = n(P, "padding-right"),
            U = n(P, "margin-left"),
            W = n(P, "margin-right"),
            G = P.getPropertyValue("box-sizing");
          if (G && G === "border-box") v = ie + U + W;
          else {
            const { clientWidth: se, offsetWidth: J } = x[0];
            v = ie + Ee + X + U + W + (J - se);
          }
        }
        I && (x[0].style.transform = I),
          V && (x[0].style.webkitTransform = V),
          r.roundLengths && (v = Math.floor(v));
      } else
        (v = (s - (r.slidesPerView - 1) * E) / r.slidesPerView),
          r.roundLengths && (v = Math.floor(v)),
          h[k] && (h[k].style[t("width")] = `${v}px`);
      h[k] && (h[k].swiperSlideSize = v),
        _.push(v),
        r.centeredSlides
          ? ((O = O + v / 2 + L / 2 + E),
            L === 0 && k !== 0 && (O = O - s / 2 - E),
            k === 0 && (O = O - s / 2 - E),
            Math.abs(O) < 1 / 1e3 && (O = 0),
            r.roundLengths && (O = Math.floor(O)),
            D % r.slidesPerGroup === 0 && g.push(O),
            y.push(O))
          : (r.roundLengths && (O = Math.floor(O)),
            (D - Math.min(e.params.slidesPerGroupSkip, D)) %
              e.params.slidesPerGroup ===
              0 && g.push(O),
            y.push(O),
            (O = O + v + E)),
        (e.virtualSize += v + E),
        (L = v),
        (D += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + N),
    o &&
      l &&
      (r.effect === "slide" || r.effect === "coverflow") &&
      i.css({ width: `${e.virtualSize + r.spaceBetween}px` }),
    r.setWrapperSize &&
      i.css({ [t("width")]: `${e.virtualSize + r.spaceBetween}px` }),
    T && e.grid.updateWrapperSize(v, g, t),
    !r.centeredSlides)
  ) {
    const k = [];
    for (let x = 0; x < g.length; x += 1) {
      let P = g[x];
      r.roundLengths && (P = Math.floor(P)),
        g[x] <= e.virtualSize - s && k.push(P);
    }
    (g = k),
      Math.floor(e.virtualSize - s) - Math.floor(g[g.length - 1]) > 1 &&
        g.push(e.virtualSize - s);
  }
  if ((g.length === 0 && (g = [0]), r.spaceBetween !== 0)) {
    const k = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
    h.filter((x, P) => (r.cssMode ? P !== h.length - 1 : !0)).css({
      [k]: `${E}px`,
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let k = 0;
    _.forEach((P) => {
      k += P + (r.spaceBetween ? r.spaceBetween : 0);
    }),
      (k -= r.spaceBetween);
    const x = k - s;
    g = g.map((P) => (P < 0 ? -A : P > x ? x + N : P));
  }
  if (r.centerInsufficientSlides) {
    let k = 0;
    if (
      (_.forEach((x) => {
        k += x + (r.spaceBetween ? r.spaceBetween : 0);
      }),
      (k -= r.spaceBetween),
      k < s)
    ) {
      const x = (s - k) / 2;
      g.forEach((P, I) => {
        g[I] = P - x;
      }),
        y.forEach((P, I) => {
          y[I] = P + x;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: h,
      snapGrid: g,
      slidesGrid: y,
      slidesSizesGrid: _,
    }),
    r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
  ) {
    ha(e.wrapperEl, "--swiper-centered-offset-before", `${-g[0]}px`),
      ha(
        e.wrapperEl,
        "--swiper-centered-offset-after",
        `${e.size / 2 - _[_.length - 1] / 2}px`
      );
    const k = -e.snapGrid[0],
      x = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((P) => P + k)),
      (e.slidesGrid = e.slidesGrid.map((P) => P + x));
  }
  m !== c && e.emit("slidesLengthChange"),
    g.length !== C &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    y.length !== S && e.emit("slidesGridLengthChange"),
    r.watchSlidesProgress && e.updateSlidesOffset();
}
function v9(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    s;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const o = (l) =>
    r
      ? t.slides.filter(
          (u) => parseInt(u.getAttribute("data-swiper-slide-index"), 10) === l
        )[0]
      : t.slides.eq(l)[0];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      t.visibleSlides.each((l) => {
        n.push(l);
      });
    else
      for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
        const l = t.activeIndex + s;
        if (l > t.slides.length && !r) break;
        n.push(o(l));
      }
  else n.push(o(t.activeIndex));
  for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < "u") {
      const l = n[s].offsetHeight;
      i = l > i ? l : i;
    }
  (i || i === 0) && t.$wrapperEl.css("height", `${i}px`);
}
function y9() {
  const e = this,
    t = e.slides;
  for (let n = 0; n < t.length; n += 1)
    t[n].swiperSlideOffset = e.isHorizontal()
      ? t[n].offsetLeft
      : t[n].offsetTop;
}
function w9(e = (this && this.translate) || 0) {
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: s } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let o = -e;
  i && (o = e),
    r.removeClass(n.slideVisibleClass),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  for (let l = 0; l < r.length; l += 1) {
    const u = r[l];
    let c = u.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset);
    const h =
        (o + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + n.spaceBetween),
      m =
        (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (u.swiperSlideSize + n.spaceBetween),
      g = -(o - c),
      y = g + t.slidesSizesGrid[l];
    ((g >= 0 && g < t.size - 1) ||
      (y > 1 && y <= t.size) ||
      (g <= 0 && y >= t.size)) &&
      (t.visibleSlides.push(u),
      t.visibleSlidesIndexes.push(l),
      r.eq(l).addClass(n.slideVisibleClass)),
      (u.progress = i ? -h : h),
      (u.originalProgress = i ? -m : m);
  }
  t.visibleSlides = B(t.visibleSlides);
}
function _9(e) {
  const t = this;
  if (typeof e > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * c) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: s, isEnd: o } = t;
  const l = s,
    u = o;
  r === 0
    ? ((i = 0), (s = !0), (o = !0))
    : ((i = (e - t.minTranslate()) / r), (s = i <= 0), (o = i >= 1)),
    Object.assign(t, { progress: i, isBeginning: s, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    s && !l && t.emit("reachBeginning toEdge"),
    o && !u && t.emit("reachEnd toEdge"),
    ((l && !s) || (u && !o)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
function S9() {
  const e = this,
    { slides: t, params: n, $wrapperEl: r, activeIndex: i, realIndex: s } = e,
    o = e.virtual && n.virtual.enabled;
  t.removeClass(
    `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
  );
  let l;
  o
    ? (l = e.$wrapperEl.find(
        `.${n.slideClass}[data-swiper-slide-index="${i}"]`
      ))
    : (l = t.eq(i)),
    l.addClass(n.slideActiveClass),
    n.loop &&
      (l.hasClass(n.slideDuplicateClass)
        ? r
            .children(
              `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
            )
            .addClass(n.slideDuplicateActiveClass)
        : r
            .children(
              `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
            )
            .addClass(n.slideDuplicateActiveClass));
  let u = l.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
  n.loop && u.length === 0 && ((u = t.eq(0)), u.addClass(n.slideNextClass));
  let c = l.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
  n.loop && c.length === 0 && ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
    n.loop &&
      (u.hasClass(n.slideDuplicateClass)
        ? r
            .children(
              `.${n.slideClass}:not(.${
                n.slideDuplicateClass
              })[data-swiper-slide-index="${u.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(n.slideDuplicateNextClass)
        : r
            .children(
              `.${n.slideClass}.${
                n.slideDuplicateClass
              }[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`
            )
            .addClass(n.slideDuplicateNextClass),
      c.hasClass(n.slideDuplicateClass)
        ? r
            .children(
              `.${n.slideClass}:not(.${
                n.slideDuplicateClass
              })[data-swiper-slide-index="${c.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(n.slideDuplicatePrevClass)
        : r
            .children(
              `.${n.slideClass}.${
                n.slideDuplicateClass
              }[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`
            )
            .addClass(n.slideDuplicatePrevClass)),
    e.emitSlidesClasses();
}
function C9(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    {
      slidesGrid: r,
      snapGrid: i,
      params: s,
      activeIndex: o,
      realIndex: l,
      snapIndex: u,
    } = t;
  let c = e,
    h;
  if (typeof c > "u") {
    for (let g = 0; g < r.length; g += 1)
      typeof r[g + 1] < "u"
        ? n >= r[g] && n < r[g + 1] - (r[g + 1] - r[g]) / 2
          ? (c = g)
          : n >= r[g] && n < r[g + 1] && (c = g + 1)
        : n >= r[g] && (c = g);
    s.normalizeSlideIndex && (c < 0 || typeof c > "u") && (c = 0);
  }
  if (i.indexOf(n) >= 0) h = i.indexOf(n);
  else {
    const g = Math.min(s.slidesPerGroupSkip, c);
    h = g + Math.floor((c - g) / s.slidesPerGroup);
  }
  if ((h >= i.length && (h = i.length - 1), c === o)) {
    h !== u && ((t.snapIndex = h), t.emit("snapIndexChange"));
    return;
  }
  const m = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
  Object.assign(t, {
    snapIndex: h,
    realIndex: m,
    previousIndex: o,
    activeIndex: c,
  }),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    l !== m && t.emit("realIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function x9(e) {
  const t = this,
    n = t.params,
    r = B(e).closest(`.${n.slideClass}`)[0];
  let i = !1,
    s;
  if (r) {
    for (let o = 0; o < t.slides.length; o += 1)
      if (t.slides[o] === r) {
        (i = !0), (s = o);
        break;
      }
  }
  if (r && i)
    (t.clickedSlide = r),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(B(r).attr("data-swiper-slide-index"), 10))
        : (t.clickedIndex = s);
  else {
    (t.clickedSlide = void 0), (t.clickedIndex = void 0);
    return;
  }
  n.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
const E9 = {
  updateSize: m9,
  updateSlides: g9,
  updateAutoHeight: v9,
  updateSlidesOffset: y9,
  updateSlidesProgress: w9,
  updateProgress: _9,
  updateSlidesClasses: S9,
  updateActiveIndex: C9,
  updateClickedSlide: x9,
};
function k9(e = this.isHorizontal() ? "x" : "y") {
  const t = this,
    { params: n, rtlTranslate: r, translate: i, $wrapperEl: s } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let o = s9(s[0], e);
  return r && (o = -o), o || 0;
}
function T9(e, t) {
  const n = this,
    {
      rtlTranslate: r,
      params: i,
      $wrapperEl: s,
      wrapperEl: o,
      progress: l,
    } = n;
  let u = 0,
    c = 0;
  const h = 0;
  n.isHorizontal() ? (u = r ? -e : e) : (c = e),
    i.roundLengths && ((u = Math.floor(u)), (c = Math.floor(c))),
    i.cssMode
      ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -u
          : -c)
      : i.virtualTranslate ||
        s.transform(`translate3d(${u}px, ${c}px, ${h}px)`),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? u : c);
  let m;
  const g = n.maxTranslate() - n.minTranslate();
  g === 0 ? (m = 0) : (m = (e - n.minTranslate()) / g),
    m !== l && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function b9() {
  return -this.snapGrid[0];
}
function I9() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function N9(e = 0, t = this.params.speed, n = !0, r = !0, i) {
  const s = this,
    { params: o, wrapperEl: l } = s;
  if (s.animating && o.preventInteractionOnTransition) return !1;
  const u = s.minTranslate(),
    c = s.maxTranslate();
  let h;
  if (
    (r && e > u ? (h = u) : r && e < c ? (h = c) : (h = e),
    s.updateProgress(h),
    o.cssMode)
  ) {
    const m = s.isHorizontal();
    if (t === 0) l[m ? "scrollLeft" : "scrollTop"] = -h;
    else {
      if (!s.support.smoothScroll)
        return (
          v2({ swiper: s, targetPosition: -h, side: m ? "left" : "top" }), !0
        );
      l.scrollTo({ [m ? "left" : "top"]: -h, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (s.setTransition(0),
        s.setTranslate(h),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd")))
      : (s.setTransition(t),
        s.setTranslate(h),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (g) {
              !s ||
                s.destroyed ||
                (g.target === this &&
                  (s.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  n && s.emit("transitionEnd")));
            }),
          s.$wrapperEl[0].addEventListener(
            "transitionend",
            s.onTranslateToWrapperTransitionEnd
          ),
          s.$wrapperEl[0].addEventListener(
            "webkitTransitionEnd",
            s.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
const P9 = {
  getTranslate: k9,
  setTranslate: T9,
  minTranslate: b9,
  maxTranslate: I9,
  translateTo: N9,
};
function A9(e, t) {
  const n = this;
  n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t);
}
function w2({ swiper: e, runCallbacks: t, direction: n, step: r }) {
  const { activeIndex: i, previousIndex: s } = e;
  let o = n;
  if (
    (o || (i > s ? (o = "next") : i < s ? (o = "prev") : (o = "reset")),
    e.emit(`transition${r}`),
    t && i !== s)
  ) {
    if (o === "reset") {
      e.emit(`slideResetTransition${r}`);
      return;
    }
    e.emit(`slideChangeTransition${r}`),
      o === "next"
        ? e.emit(`slideNextTransition${r}`)
        : e.emit(`slidePrevTransition${r}`);
  }
}
function O9(e = !0, t) {
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    w2({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function j9(e = !0, t) {
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      w2({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
const L9 = { setTransition: A9, transitionStart: O9, transitionEnd: j9 };
function R9(e = 0, t = this.params.speed, n = !0, r, i) {
  if (typeof e != "number" && typeof e != "string")
    throw new Error(
      `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
    );
  if (typeof e == "string") {
    const E = parseInt(e, 10);
    if (!isFinite(E))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
      );
    e = E;
  }
  const s = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: u,
    slidesGrid: c,
    previousIndex: h,
    activeIndex: m,
    rtlTranslate: g,
    wrapperEl: y,
    enabled: _,
  } = s;
  if ((s.animating && l.preventInteractionOnTransition) || (!_ && !r && !i))
    return !1;
  const A = Math.min(s.params.slidesPerGroupSkip, o);
  let N = A + Math.floor((o - A) / s.params.slidesPerGroup);
  N >= u.length && (N = u.length - 1),
    (m || l.initialSlide || 0) === (h || 0) &&
      n &&
      s.emit("beforeSlideChangeStart");
  const C = -u[N];
  if ((s.updateProgress(C), l.normalizeSlideIndex))
    for (let E = 0; E < c.length; E += 1) {
      const O = -Math.floor(C * 100),
        L = Math.floor(c[E] * 100),
        D = Math.floor(c[E + 1] * 100);
      typeof c[E + 1] < "u"
        ? O >= L && O < D - (D - L) / 2
          ? (o = E)
          : O >= L && O < D && (o = E + 1)
        : O >= L && (o = E);
    }
  if (
    s.initialized &&
    o !== m &&
    ((!s.allowSlideNext && C < s.translate && C < s.minTranslate()) ||
      (!s.allowSlidePrev &&
        C > s.translate &&
        C > s.maxTranslate() &&
        (m || 0) !== o))
  )
    return !1;
  let S;
  if (
    (o > m ? (S = "next") : o < m ? (S = "prev") : (S = "reset"),
    (g && -C === s.translate) || (!g && C === s.translate))
  )
    return (
      s.updateActiveIndex(o),
      l.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      l.effect !== "slide" && s.setTranslate(C),
      S !== "reset" && (s.transitionStart(n, S), s.transitionEnd(n, S)),
      !1
    );
  if (l.cssMode) {
    const E = s.isHorizontal(),
      O = g ? C : -C;
    if (t === 0) {
      const L = s.virtual && s.params.virtual.enabled;
      L &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        (y[E ? "scrollLeft" : "scrollTop"] = O),
        L &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""),
              (s._swiperImmediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          v2({ swiper: s, targetPosition: O, side: E ? "left" : "top" }), !0
        );
      y.scrollTo({ [E ? "left" : "top"]: O, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(t),
    s.setTranslate(C),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", t, r),
    s.transitionStart(n, S),
    t === 0
      ? s.transitionEnd(n, S)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (O) {
            !s ||
              s.destroyed ||
              (O.target === this &&
                (s.$wrapperEl[0].removeEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                s.$wrapperEl[0].removeEventListener(
                  "webkitTransitionEnd",
                  s.onSlideToWrapperTransitionEnd
                ),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(n, S)));
          }),
        s.$wrapperEl[0].addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd
        ),
        s.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function M9(e = 0, t = this.params.speed, n = !0, r) {
  const i = this;
  let s = e;
  return i.params.loop && (s += i.loopedSlides), i.slideTo(s, t, n, r);
}
function D9(e = this.params.speed, t = !0, n) {
  const r = this,
    { animating: i, enabled: s, params: o } = r;
  if (!s) return r;
  let l = o.slidesPerGroup;
  o.slidesPerView === "auto" &&
    o.slidesPerGroup === 1 &&
    o.slidesPerGroupAuto &&
    (l = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const u = r.activeIndex < o.slidesPerGroupSkip ? 1 : l;
  if (o.loop) {
    if (i && o.loopPreventsSlide) return !1;
    r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
  }
  return o.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + u, e, t, n);
}
function F9(e = this.params.speed, t = !0, n) {
  const r = this,
    {
      params: i,
      animating: s,
      snapGrid: o,
      slidesGrid: l,
      rtlTranslate: u,
      enabled: c,
    } = r;
  if (!c) return r;
  if (i.loop) {
    if (s && i.loopPreventsSlide) return !1;
    r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
  }
  const h = u ? r.translate : -r.translate;
  function m(N) {
    return N < 0 ? -Math.floor(Math.abs(N)) : Math.floor(N);
  }
  const g = m(h),
    y = o.map((N) => m(N));
  let _ = o[y.indexOf(g) - 1];
  if (typeof _ > "u" && i.cssMode) {
    let N;
    o.forEach((C, S) => {
      g >= C && (N = S);
    }),
      typeof N < "u" && (_ = o[N > 0 ? N - 1 : N]);
  }
  let A = 0;
  return (
    typeof _ < "u" &&
      ((A = l.indexOf(_)),
      A < 0 && (A = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((A = A - r.slidesPerViewDynamic("previous", !0) + 1),
        (A = Math.max(A, 0)))),
    i.rewind && r.isBeginning
      ? r.slideTo(r.slides.length - 1, e, t, n)
      : r.slideTo(A, e, t, n)
  );
}
function U9(e = this.params.speed, t = !0, n) {
  const r = this;
  return r.slideTo(r.activeIndex, e, t, n);
}
function z9(e = this.params.speed, t = !0, n, r = 0.5) {
  const i = this;
  let s = i.activeIndex;
  const o = Math.min(i.params.slidesPerGroupSkip, s),
    l = o + Math.floor((s - o) / i.params.slidesPerGroup),
    u = i.rtlTranslate ? i.translate : -i.translate;
  if (u >= i.snapGrid[l]) {
    const c = i.snapGrid[l],
      h = i.snapGrid[l + 1];
    u - c > (h - c) * r && (s += i.params.slidesPerGroup);
  } else {
    const c = i.snapGrid[l - 1],
      h = i.snapGrid[l];
    u - c <= (h - c) * r && (s -= i.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, i.slidesGrid.length - 1)),
    i.slideTo(s, e, t, n)
  );
}
function $9() {
  const e = this,
    { params: t, $wrapperEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    s;
  if (t.loop) {
    if (e.animating) return;
    (s = parseInt(B(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = n
              .children(
                `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            vl(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = n
            .children(
              `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
            )
            .eq(0)
            .index()),
          vl(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
const B9 = {
  slideTo: R9,
  slideToLoop: M9,
  slideNext: D9,
  slidePrev: F9,
  slideReset: U9,
  slideToClosest: z9,
  slideToClickedSlide: $9,
};
function V9() {
  const e = this,
    t = Be(),
    { params: n, $wrapperEl: r } = e,
    i = r.children().length > 0 ? B(r.children()[0].parentNode) : r;
  i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
  let s = i.children(`.${n.slideClass}`);
  if (n.loopFillGroupWithBlank) {
    const u = n.slidesPerGroup - (s.length % n.slidesPerGroup);
    if (u !== n.slidesPerGroup) {
      for (let c = 0; c < u; c += 1) {
        const h = B(t.createElement("div")).addClass(
          `${n.slideClass} ${n.slideBlankClass}`
        );
        i.append(h);
      }
      s = i.children(`.${n.slideClass}`);
    }
  }
  n.slidesPerView === "auto" && !n.loopedSlides && (n.loopedSlides = s.length),
    (e.loopedSlides = Math.ceil(
      parseFloat(n.loopedSlides || n.slidesPerView, 10)
    )),
    (e.loopedSlides += n.loopAdditionalSlides),
    e.loopedSlides > s.length && (e.loopedSlides = s.length);
  const o = [],
    l = [];
  s.each((u, c) => {
    const h = B(u);
    c < e.loopedSlides && l.push(u),
      c < s.length && c >= s.length - e.loopedSlides && o.push(u),
      h.attr("data-swiper-slide-index", c);
  });
  for (let u = 0; u < l.length; u += 1)
    i.append(B(l[u].cloneNode(!0)).addClass(n.slideDuplicateClass));
  for (let u = o.length - 1; u >= 0; u -= 1)
    i.prepend(B(o[u].cloneNode(!0)).addClass(n.slideDuplicateClass));
}
function H9() {
  const e = this;
  e.emit("beforeLoopFix");
  const {
    activeIndex: t,
    slides: n,
    loopedSlides: r,
    allowSlidePrev: i,
    allowSlideNext: s,
    snapGrid: o,
    rtlTranslate: l,
  } = e;
  let u;
  (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
  const h = -o[t] - e.getTranslate();
  t < r
    ? ((u = n.length - r * 3 + t),
      (u += r),
      e.slideTo(u, 0, !1, !0) &&
        h !== 0 &&
        e.setTranslate((l ? -e.translate : e.translate) - h))
    : t >= n.length - r &&
      ((u = -n.length + t + r),
      (u += r),
      e.slideTo(u, 0, !1, !0) &&
        h !== 0 &&
        e.setTranslate((l ? -e.translate : e.translate) - h)),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = s),
    e.emit("loopFix");
}
function W9() {
  const e = this,
    { $wrapperEl: t, params: n, slides: r } = e;
  t
    .children(
      `.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`
    )
    .remove(),
    r.removeAttr("data-swiper-slide-index");
}
const G9 = { loopCreate: V9, loopFix: H9, loopDestroy: W9 };
function K9(e) {
  const t = this;
  if (
    t.support.touch ||
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  (n.style.cursor = "move"),
    (n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
    (n.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
    (n.style.cursor = e ? "grabbing" : "grab");
}
function Y9() {
  const e = this;
  e.support.touch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "");
}
const q9 = { setGrabCursor: K9, unsetGrabCursor: Y9 };
function X9(e, t = this) {
  function n(r) {
    return !r || r === Be() || r === Fe()
      ? null
      : (r.assignedSlot && (r = r.assignedSlot),
        r.closest(e) || n(r.getRootNode().host));
  }
  return n(t);
}
function J9(e) {
  const t = this,
    n = Be(),
    r = Fe(),
    i = t.touchEventsData,
    { params: s, touches: o, enabled: l } = t;
  if (!l || (t.animating && s.preventInteractionOnTransition)) return;
  !t.animating && s.cssMode && s.loop && t.loopFix();
  let u = e;
  u.originalEvent && (u = u.originalEvent);
  let c = B(u.target);
  if (
    (s.touchEventsTarget === "wrapper" && !c.closest(t.wrapperEl).length) ||
    ((i.isTouchEvent = u.type === "touchstart"),
    !i.isTouchEvent && "which" in u && u.which === 3) ||
    (!i.isTouchEvent && "button" in u && u.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  !!s.noSwipingClass &&
    s.noSwipingClass !== "" &&
    u.target &&
    u.target.shadowRoot &&
    e.path &&
    e.path[0] &&
    (c = B(e.path[0]));
  const m = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    g = !!(u.target && u.target.shadowRoot);
  if (s.noSwiping && (g ? X9(m, u.target) : c.closest(m)[0])) {
    t.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !c.closest(s.swipeHandler)[0]) return;
  (o.currentX = u.type === "touchstart" ? u.targetTouches[0].pageX : u.pageX),
    (o.currentY = u.type === "touchstart" ? u.targetTouches[0].pageY : u.pageY);
  const y = o.currentX,
    _ = o.currentY,
    A = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
    N = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
  if (A && (y <= N || y >= r.innerWidth - N))
    if (A === "prevent") e.preventDefault();
    else return;
  if (
    (Object.assign(i, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
    (o.startX = y),
    (o.startY = _),
    (i.touchStartTime = uo()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    s.threshold > 0 && (i.allowThresholdMove = !1),
    u.type !== "touchstart")
  ) {
    let C = !0;
    c.is(i.focusableElements) && (C = !1),
      n.activeElement &&
        B(n.activeElement).is(i.focusableElements) &&
        n.activeElement !== c[0] &&
        n.activeElement.blur();
    const S = C && t.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || S) &&
      !c[0].isContentEditable &&
      u.preventDefault();
  }
  t.emit("touchStart", u);
}
function Z9(e) {
  const t = Be(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: s, rtlTranslate: o, enabled: l } = n;
  if (!l) return;
  let u = e;
  if ((u.originalEvent && (u = u.originalEvent), !r.isTouched)) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", u);
    return;
  }
  if (r.isTouchEvent && u.type !== "touchmove") return;
  const c =
      u.type === "touchmove" &&
      u.targetTouches &&
      (u.targetTouches[0] || u.changedTouches[0]),
    h = u.type === "touchmove" ? c.pageX : u.pageX,
    m = u.type === "touchmove" ? c.pageY : u.pageY;
  if (u.preventedByNestedSwiper) {
    (s.startX = h), (s.startY = m);
    return;
  }
  if (!n.allowTouchMove) {
    (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(s, { startX: h, startY: m, currentX: h, currentY: m }),
        (r.touchStartTime = uo()));
    return;
  }
  if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (m < s.startY && n.translate <= n.maxTranslate()) ||
        (m > s.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (h < s.startX && n.translate <= n.maxTranslate()) ||
      (h > s.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    r.isTouchEvent &&
    t.activeElement &&
    u.target === t.activeElement &&
    B(u.target).is(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (r.allowTouchCallbacks && n.emit("touchMove", u),
    u.targetTouches && u.targetTouches.length > 1)
  )
    return;
  (s.currentX = h), (s.currentY = m);
  const g = s.currentX - s.startX,
    y = s.currentY - s.startY;
  if (n.params.threshold && Math.sqrt(g ** 2 + y ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let C;
    (n.isHorizontal() && s.currentY === s.startY) ||
    (n.isVertical() && s.currentX === s.startX)
      ? (r.isScrolling = !1)
      : g * g + y * y >= 25 &&
        ((C = (Math.atan2(Math.abs(y), Math.abs(g)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? C > i.touchAngle
          : 90 - C > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", u),
    typeof r.startMoving > "u" &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (r.startMoving = !0),
    r.isScrolling)
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && u.cancelable && u.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && u.stopPropagation(),
    r.isMoved ||
      (i.loop && !i.cssMode && n.loopFix(),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
      (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", u)),
    n.emit("sliderMove", u),
    (r.isMoved = !0);
  let _ = n.isHorizontal() ? g : y;
  (s.diff = _),
    (_ *= i.touchRatio),
    o && (_ = -_),
    (n.swipeDirection = _ > 0 ? "prev" : "next"),
    (r.currentTranslate = _ + r.startTranslate);
  let A = !0,
    N = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (N = 0),
    _ > 0 && r.currentTranslate > n.minTranslate()
      ? ((A = !1),
        i.resistance &&
          (r.currentTranslate =
            n.minTranslate() -
            1 +
            (-n.minTranslate() + r.startTranslate + _) ** N))
      : _ < 0 &&
        r.currentTranslate < n.maxTranslate() &&
        ((A = !1),
        i.resistance &&
          (r.currentTranslate =
            n.maxTranslate() +
            1 -
            (n.maxTranslate() - r.startTranslate - _) ** N)),
    A && (u.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(_) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (r.currentTranslate = r.startTranslate),
          (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    n.params.freeMode &&
      i.freeMode.enabled &&
      n.freeMode &&
      n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function Q9(e) {
  const t = this,
    n = t.touchEventsData,
    { params: r, touches: i, rtlTranslate: s, slidesGrid: o, enabled: l } = t;
  if (!l) return;
  let u = e;
  if (
    (u.originalEvent && (u = u.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", u),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && r.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  r.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const c = uo(),
    h = c - n.touchStartTime;
  if (t.allowClick) {
    const N = u.path || (u.composedPath && u.composedPath());
    t.updateClickedSlide((N && N[0]) || u.target),
      t.emit("tap click", u),
      h < 300 &&
        c - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", u);
  }
  if (
    ((n.lastClickTime = uo()),
    vl(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      i.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let m;
  if (
    (r.followFinger
      ? (m = s ? t.translate : -t.translate)
      : (m = -n.currentTranslate),
    r.cssMode)
  )
    return;
  if (t.params.freeMode && r.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: m });
    return;
  }
  let g = 0,
    y = t.slidesSizesGrid[0];
  for (
    let N = 0;
    N < o.length;
    N += N < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
  ) {
    const C = N < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    typeof o[N + C] < "u"
      ? m >= o[N] && m < o[N + C] && ((g = N), (y = o[N + C] - o[N]))
      : m >= o[N] && ((g = N), (y = o[o.length - 1] - o[o.length - 2]));
  }
  const _ = (m - o[g]) / y,
    A = g < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
  if (h > r.longSwipesMs) {
    if (!r.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (_ >= r.longSwipesRatio ? t.slideTo(g + A) : t.slideTo(g)),
      t.swipeDirection === "prev" &&
        (_ > 1 - r.longSwipesRatio ? t.slideTo(g + A) : t.slideTo(g));
  } else {
    if (!r.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl)
      ? u.target === t.navigation.nextEl
        ? t.slideTo(g + A)
        : t.slideTo(g)
      : (t.swipeDirection === "next" && t.slideTo(g + A),
        t.swipeDirection === "prev" && t.slideTo(g));
  }
}
function og() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses(),
    (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
    e.isEnd &&
    !e.isBeginning &&
    !e.params.centeredSlides
      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
}
function ek(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function tk() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === -0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const s = e.maxTranslate() - e.minTranslate();
  s === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / s),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
let ag = !1;
function nk() {}
const _2 = (e, t) => {
  const n = Be(),
    {
      params: r,
      touchEvents: i,
      el: s,
      wrapperEl: o,
      device: l,
      support: u,
    } = e,
    c = !!r.nested,
    h = t === "on" ? "addEventListener" : "removeEventListener",
    m = t;
  if (!u.touch)
    s[h](i.start, e.onTouchStart, !1),
      n[h](i.move, e.onTouchMove, c),
      n[h](i.end, e.onTouchEnd, !1);
  else {
    const g =
      i.start === "touchstart" && u.passiveListener && r.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    s[h](i.start, e.onTouchStart, g),
      s[h](
        i.move,
        e.onTouchMove,
        u.passiveListener ? { passive: !1, capture: c } : c
      ),
      s[h](i.end, e.onTouchEnd, g),
      i.cancel && s[h](i.cancel, e.onTouchEnd, g);
  }
  (r.preventClicks || r.preventClicksPropagation) &&
    s[h]("click", e.onClick, !0),
    r.cssMode && o[h]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[m](
          l.ios || l.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          og,
          !0
        )
      : e[m]("observerUpdate", og, !0);
};
function rk() {
  const e = this,
    t = Be(),
    { params: n, support: r } = e;
  (e.onTouchStart = J9.bind(e)),
    (e.onTouchMove = Z9.bind(e)),
    (e.onTouchEnd = Q9.bind(e)),
    n.cssMode && (e.onScroll = tk.bind(e)),
    (e.onClick = ek.bind(e)),
    r.touch && !ag && (t.addEventListener("touchstart", nk), (ag = !0)),
    _2(e, "on");
}
function ik() {
  _2(this, "off");
}
const sk = { attachEvents: rk, detachEvents: ik },
  lg = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function ok() {
  const e = this,
    {
      activeIndex: t,
      initialized: n,
      loopedSlides: r = 0,
      params: i,
      $el: s,
    } = e,
    o = i.breakpoints;
  if (!o || (o && Object.keys(o).length === 0)) return;
  const l = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
  if (!l || e.currentBreakpoint === l) return;
  const c = (l in o ? o[l] : void 0) || e.originalParams,
    h = lg(e, i),
    m = lg(e, c),
    g = i.enabled;
  h && !m
    ? (s.removeClass(
        `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !h &&
      m &&
      (s.addClass(`${i.containerModifierClass}grid`),
      ((c.grid.fill && c.grid.fill === "column") ||
        (!c.grid.fill && i.grid.fill === "column")) &&
        s.addClass(`${i.containerModifierClass}grid-column`),
      e.emitContainerClasses());
  const y = c.direction && c.direction !== i.direction,
    _ = i.loop && (c.slidesPerView !== i.slidesPerView || y);
  y && n && e.changeDirection(), vt(e.params, c);
  const A = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    g && !A ? e.disable() : !g && A && e.enable(),
    (e.currentBreakpoint = l),
    e.emit("_beforeBreakpoint", c),
    _ &&
      n &&
      (e.loopDestroy(),
      e.loopCreate(),
      e.updateSlides(),
      e.slideTo(t - r + e.loopedSlides, 0, !1)),
    e.emit("breakpoint", c);
}
function ak(e, t = "window", n) {
  if (!e || (t === "container" && !n)) return;
  let r = !1;
  const i = Fe(),
    s = t === "window" ? i.innerHeight : n.clientHeight,
    o = Object.keys(e).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const u = parseFloat(l.substr(1));
        return { value: s * u, point: l };
      }
      return { value: l, point: l };
    });
  o.sort((l, u) => parseInt(l.value, 10) - parseInt(u.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const { point: u, value: c } = o[l];
    t === "window"
      ? i.matchMedia(`(min-width: ${c}px)`).matches && (r = u)
      : c <= n.clientWidth && (r = u);
  }
  return r || "max";
}
const lk = { setBreakpoint: ok, getBreakpoint: ak };
function uk(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function ck() {
  const e = this,
    { classNames: t, params: n, rtl: r, $el: i, device: s, support: o } = e,
    l = uk(
      [
        "initialized",
        n.direction,
        { "pointer-events": !o.touch },
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
      ],
      n.containerModifierClass
    );
  t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses();
}
function dk() {
  const e = this,
    { $el: t, classNames: n } = e;
  t.removeClass(n.join(" ")), e.emitContainerClasses();
}
const fk = { addClasses: ck, removeClasses: dk };
function hk(e, t, n, r, i, s) {
  const o = Fe();
  let l;
  function u() {
    s && s();
  }
  !B(e).parent("picture")[0] && (!e.complete || !i) && t
    ? ((l = new o.Image()),
      (l.onload = u),
      (l.onerror = u),
      r && (l.sizes = r),
      n && (l.srcset = n),
      t && (l.src = t))
    : u();
}
function pk() {
  const e = this;
  e.imagesToLoad = e.$el.find("img");
  function t() {
    typeof e > "u" ||
      e === null ||
      !e ||
      e.destroyed ||
      (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1),
      e.imagesLoaded === e.imagesToLoad.length &&
        (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
  }
  for (let n = 0; n < e.imagesToLoad.length; n += 1) {
    const r = e.imagesToLoad[n];
    e.loadImage(
      r,
      r.currentSrc || r.getAttribute("src"),
      r.srcset || r.getAttribute("srcset"),
      r.sizes || r.getAttribute("sizes"),
      !0,
      t
    );
  }
}
const mk = { loadImage: hk, preloadImages: pk };
function gk() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > s;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
const vk = { checkOverflow: gk },
  ug = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function yk(e, t) {
  return function (r = {}) {
    const i = Object.keys(r)[0],
      s = r[i];
    if (typeof s != "object" || s === null) {
      vt(t, r);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] === !0 &&
        (e[i] = { auto: !0 }),
      !(i in e && "enabled" in s))
    ) {
      vt(t, r);
      return;
    }
    e[i] === !0 && (e[i] = { enabled: !0 }),
      typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      vt(t, r);
  };
}
const nc = {
    eventsEmitter: p9,
    update: E9,
    translate: P9,
    transition: L9,
    slide: B9,
    loop: G9,
    grabCursor: q9,
    events: sk,
    breakpoints: lk,
    checkOverflow: vk,
    classes: fk,
    images: mk,
  },
  rc = {};
let Bi = class fn {
  constructor(...t) {
    let n, r;
    if (
      (t.length === 1 &&
      t[0].constructor &&
      Object.prototype.toString.call(t[0]).slice(8, -1) === "Object"
        ? (r = t[0])
        : ([n, r] = t),
      r || (r = {}),
      (r = vt({}, r)),
      n && !r.el && (r.el = n),
      r.el && B(r.el).length > 1)
    ) {
      const l = [];
      return (
        B(r.el).each((u) => {
          const c = vt({}, r, { el: u });
          l.push(new fn(c));
        }),
        l
      );
    }
    const i = this;
    (i.__swiper__ = !0),
      (i.support = y2()),
      (i.device = u9({ userAgent: r.userAgent })),
      (i.browser = d9()),
      (i.eventsListeners = {}),
      (i.eventsAnyListeners = []),
      (i.modules = [...i.__modules__]),
      r.modules && Array.isArray(r.modules) && i.modules.push(...r.modules);
    const s = {};
    i.modules.forEach((l) => {
      l({
        swiper: i,
        extendParams: yk(r, s),
        on: i.on.bind(i),
        once: i.once.bind(i),
        off: i.off.bind(i),
        emit: i.emit.bind(i),
      });
    });
    const o = vt({}, ug, s);
    return (
      (i.params = vt({}, o, rc, r)),
      (i.originalParams = vt({}, i.params)),
      (i.passedParams = vt({}, r)),
      i.params &&
        i.params.on &&
        Object.keys(i.params.on).forEach((l) => {
          i.on(l, i.params.on[l]);
        }),
      i.params && i.params.onAny && i.onAny(i.params.onAny),
      (i.$ = B),
      Object.assign(i, {
        enabled: i.params.enabled,
        el: n,
        classNames: [],
        slides: B(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return i.params.direction === "horizontal";
        },
        isVertical() {
          return i.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: i.params.allowSlideNext,
        allowSlidePrev: i.params.allowSlidePrev,
        touchEvents: (function () {
          const u = ["touchstart", "touchmove", "touchend", "touchcancel"],
            c = ["pointerdown", "pointermove", "pointerup"];
          return (
            (i.touchEventsTouch = {
              start: u[0],
              move: u[1],
              end: u[2],
              cancel: u[3],
            }),
            (i.touchEventsDesktop = { start: c[0], move: c[1], end: c[2] }),
            i.support.touch || !i.params.simulateTouch
              ? i.touchEventsTouch
              : i.touchEventsDesktop
          );
        })(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: i.params.focusableElements,
          lastClickTime: uo(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0,
        },
        allowClick: !0,
        allowTouchMove: i.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      i.emit("_swiper"),
      i.params.init && i.init(),
      i
    );
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      o = (r.maxTranslate() - i) * t + i;
    r.translateTo(o, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return t.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper-slide") === 0 ||
          r.indexOf(n.params.slideClass) === 0
      )
      .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.each((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t = "current", n = !1) {
    const r = this,
      {
        params: i,
        slides: s,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: u,
        activeIndex: c,
      } = r;
    let h = 1;
    if (i.centeredSlides) {
      let m = s[c].swiperSlideSize,
        g;
      for (let y = c + 1; y < s.length; y += 1)
        s[y] &&
          !g &&
          ((m += s[y].swiperSlideSize), (h += 1), m > u && (g = !0));
      for (let y = c - 1; y >= 0; y -= 1)
        s[y] &&
          !g &&
          ((m += s[y].swiperSlideSize), (h += 1), m > u && (g = !0));
    } else if (t === "current")
      for (let m = c + 1; m < s.length; m += 1)
        (n ? o[m] + l[m] - o[c] < u : o[m] - o[c] < u) && (h += 1);
    else for (let m = c - 1; m >= 0; m -= 1) o[c] - o[m] < u && (h += 1);
    return h;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let s;
    t.params.freeMode && t.params.freeMode.enabled
      ? (i(), t.params.autoHeight && t.updateAutoHeight())
      : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) &&
        t.isEnd &&
        !t.params.centeredSlides
          ? (s = t.slideTo(t.slides.length - 1, 0, !1, !0))
          : (s = t.slideTo(t.activeIndex, 0, !1, !0)),
        s || i()),
      r.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
      t.emit("update");
  }
  changeDirection(t, n = !0) {
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.$el
          .removeClass(`${r.params.containerModifierClass}${i}`)
          .addClass(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.each((s) => {
          t === "vertical" ? (s.style.width = "") : (s.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    const r = B(t || n.params.el);
    if (((t = r[0]), !t)) return !1;
    t.swiper = n;
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = (() => {
      if (t && t.shadowRoot && t.shadowRoot.querySelector) {
        const l = B(t.shadowRoot.querySelector(i()));
        return (l.children = (u) => r.children(u)), l;
      }
      return r.children(i());
    })();
    if (o.length === 0 && n.params.createElements) {
      const u = Be().createElement("div");
      (o = B(u)),
        (u.className = n.params.wrapperClass),
        r.append(u),
        r.children(`.${n.params.slideClass}`).each((c) => {
          o.append(c);
        });
    }
    return (
      Object.assign(n, {
        $el: r,
        el: t,
        $wrapperEl: o,
        wrapperEl: o[0],
        mounted: !0,
        rtl: t.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (t.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl"),
        wrongRTL: o.css("display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    return (
      n.initialized ||
        n.mount(t) === !1 ||
        (n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.params.loop && n.loopCreate(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.preloadImages && n.preloadImages(),
        n.params.loop
          ? n.slideTo(
              n.params.initialSlide + n.loopedSlides,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            )
          : n.slideTo(
              n.params.initialSlide,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            ),
        n.attachEvents(),
        (n.initialized = !0),
        n.emit("init"),
        n.emit("afterInit")),
      n
    );
  }
  destroy(t = !0, n = !0) {
    const r = this,
      { params: i, $el: s, $wrapperEl: o, slides: l } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          s.removeAttr("style"),
          o.removeAttr("style"),
          l &&
            l.length &&
            l
              .removeClass(
                [
                  i.slideVisibleClass,
                  i.slideActiveClass,
                  i.slideNextClass,
                  i.slidePrevClass,
                ].join(" ")
              )
              .removeAttr("style")
              .removeAttr("data-swiper-slide-index")),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((u) => {
          r.off(u);
        }),
        t !== !1 && ((r.$el[0].swiper = null), r9(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    vt(rc, t);
  }
  static get extendedDefaults() {
    return rc;
  }
  static get defaults() {
    return ug;
  }
  static installModule(t) {
    fn.prototype.__modules__ || (fn.prototype.__modules__ = []);
    const n = fn.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => fn.installModule(n)), fn)
      : (fn.installModule(t), fn);
  }
};
Object.keys(nc).forEach((e) => {
  Object.keys(nc[e]).forEach((t) => {
    Bi.prototype[t] = nc[e][t];
  });
});
Bi.use([f9, h9]);
function S2(e, t, n, r) {
  const i = Be();
  return (
    e.params.createElements &&
      Object.keys(r).forEach((s) => {
        if (!n[s] && n.auto === !0) {
          let o = e.$el.children(`.${r[s]}`)[0];
          o ||
            ((o = i.createElement("div")),
            (o.className = r[s]),
            e.$el.append(o)),
            (n[s] = o),
            (t[s] = o);
        }
      }),
    n
  );
}
function wk({ swiper: e, extendParams: t, on: n, emit: r }) {
  t({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
    },
  }),
    (e.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null,
    });
  function i(m) {
    let g;
    return (
      m &&
        ((g = B(m)),
        e.params.uniqueNavElements &&
          typeof m == "string" &&
          g.length > 1 &&
          e.$el.find(m).length === 1 &&
          (g = e.$el.find(m))),
      g
    );
  }
  function s(m, g) {
    const y = e.params.navigation;
    m &&
      m.length > 0 &&
      (m[g ? "addClass" : "removeClass"](y.disabledClass),
      m[0] && m[0].tagName === "BUTTON" && (m[0].disabled = g),
      e.params.watchOverflow &&
        e.enabled &&
        m[e.isLocked ? "addClass" : "removeClass"](y.lockClass));
  }
  function o() {
    if (e.params.loop) return;
    const { $nextEl: m, $prevEl: g } = e.navigation;
    s(g, e.isBeginning && !e.params.rewind), s(m, e.isEnd && !e.params.rewind);
  }
  function l(m) {
    m.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) && e.slidePrev();
  }
  function u(m) {
    m.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) && e.slideNext();
  }
  function c() {
    const m = e.params.navigation;
    if (
      ((e.params.navigation = S2(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(m.nextEl || m.prevEl))
    )
      return;
    const g = i(m.nextEl),
      y = i(m.prevEl);
    g && g.length > 0 && g.on("click", u),
      y && y.length > 0 && y.on("click", l),
      Object.assign(e.navigation, {
        $nextEl: g,
        nextEl: g && g[0],
        $prevEl: y,
        prevEl: y && y[0],
      }),
      e.enabled || (g && g.addClass(m.lockClass), y && y.addClass(m.lockClass));
  }
  function h() {
    const { $nextEl: m, $prevEl: g } = e.navigation;
    m &&
      m.length &&
      (m.off("click", u), m.removeClass(e.params.navigation.disabledClass)),
      g &&
        g.length &&
        (g.off("click", l), g.removeClass(e.params.navigation.disabledClass));
  }
  n("init", () => {
    c(), o();
  }),
    n("toEdge fromEdge lock unlock", () => {
      o();
    }),
    n("destroy", () => {
      h();
    }),
    n("enable disable", () => {
      const { $nextEl: m, $prevEl: g } = e.navigation;
      m &&
        m[e.enabled ? "removeClass" : "addClass"](
          e.params.navigation.lockClass
        ),
        g &&
          g[e.enabled ? "removeClass" : "addClass"](
            e.params.navigation.lockClass
          );
    }),
    n("click", (m, g) => {
      const { $nextEl: y, $prevEl: _ } = e.navigation,
        A = g.target;
      if (e.params.navigation.hideOnClick && !B(A).is(_) && !B(A).is(y)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === A || e.pagination.el.contains(A))
        )
          return;
        let N;
        y
          ? (N = y.hasClass(e.params.navigation.hiddenClass))
          : _ && (N = _.hasClass(e.params.navigation.hiddenClass)),
          r(N === !0 ? "navigationShow" : "navigationHide"),
          y && y.toggleClass(e.params.navigation.hiddenClass),
          _ && _.toggleClass(e.params.navigation.hiddenClass);
      }
    }),
    Object.assign(e.navigation, { update: o, init: c, destroy: h });
}
function si(e = "") {
  return `.${e
    .trim()
    .replace(/([\.:!\/])/g, "\\$1")
    .replace(/ /g, ".")}`;
}
function _k({ swiper: e, extendParams: t, on: n, emit: r }) {
  const i = "swiper-pagination";
  t({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (y) => y,
      formatFractionTotal: (y) => y,
      bulletClass: `${i}-bullet`,
      bulletActiveClass: `${i}-bullet-active`,
      modifierClass: `${i}-`,
      currentClass: `${i}-current`,
      totalClass: `${i}-total`,
      hiddenClass: `${i}-hidden`,
      progressbarFillClass: `${i}-progressbar-fill`,
      progressbarOppositeClass: `${i}-progressbar-opposite`,
      clickableClass: `${i}-clickable`,
      lockClass: `${i}-lock`,
      horizontalClass: `${i}-horizontal`,
      verticalClass: `${i}-vertical`,
    },
  }),
    (e.pagination = { el: null, $el: null, bullets: [] });
  let s,
    o = 0;
  function l() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      !e.pagination.$el ||
      e.pagination.$el.length === 0
    );
  }
  function u(y, _) {
    const { bulletActiveClass: A } = e.params.pagination;
    y[_]().addClass(`${A}-${_}`)[_]().addClass(`${A}-${_}-${_}`);
  }
  function c() {
    const y = e.rtl,
      _ = e.params.pagination;
    if (l()) return;
    const A =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      N = e.pagination.$el;
    let C;
    const S = e.params.loop
      ? Math.ceil((A - e.loopedSlides * 2) / e.params.slidesPerGroup)
      : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((C = Math.ceil(
            (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
          )),
          C > A - 1 - e.loopedSlides * 2 && (C -= A - e.loopedSlides * 2),
          C > S - 1 && (C -= S),
          C < 0 && e.params.paginationType !== "bullets" && (C = S + C))
        : typeof e.snapIndex < "u"
        ? (C = e.snapIndex)
        : (C = e.activeIndex || 0),
      _.type === "bullets" &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const E = e.pagination.bullets;
      let O, L, D;
      if (
        (_.dynamicBullets &&
          ((s = E.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
          N.css(
            e.isHorizontal() ? "width" : "height",
            `${s * (_.dynamicMainBullets + 4)}px`
          ),
          _.dynamicMainBullets > 1 &&
            e.previousIndex !== void 0 &&
            ((o += C - (e.previousIndex - e.loopedSlides || 0)),
            o > _.dynamicMainBullets - 1
              ? (o = _.dynamicMainBullets - 1)
              : o < 0 && (o = 0)),
          (O = Math.max(C - o, 0)),
          (L = O + (Math.min(E.length, _.dynamicMainBullets) - 1)),
          (D = (L + O) / 2)),
        E.removeClass(
          ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
            .map((T) => `${_.bulletActiveClass}${T}`)
            .join(" ")
        ),
        N.length > 1)
      )
        E.each((T) => {
          const v = B(T),
            b = v.index();
          b === C && v.addClass(_.bulletActiveClass),
            _.dynamicBullets &&
              (b >= O && b <= L && v.addClass(`${_.bulletActiveClass}-main`),
              b === O && u(v, "prev"),
              b === L && u(v, "next"));
        });
      else {
        const T = E.eq(C),
          v = T.index();
        if ((T.addClass(_.bulletActiveClass), _.dynamicBullets)) {
          const b = E.eq(O),
            k = E.eq(L);
          for (let x = O; x <= L; x += 1)
            E.eq(x).addClass(`${_.bulletActiveClass}-main`);
          if (e.params.loop)
            if (v >= E.length) {
              for (let x = _.dynamicMainBullets; x >= 0; x -= 1)
                E.eq(E.length - x).addClass(`${_.bulletActiveClass}-main`);
              E.eq(E.length - _.dynamicMainBullets - 1).addClass(
                `${_.bulletActiveClass}-prev`
              );
            } else u(b, "prev"), u(k, "next");
          else u(b, "prev"), u(k, "next");
        }
      }
      if (_.dynamicBullets) {
        const T = Math.min(E.length, _.dynamicMainBullets + 4),
          v = (s * T - s) / 2 - D * s,
          b = y ? "right" : "left";
        E.css(e.isHorizontal() ? b : "top", `${v}px`);
      }
    }
    if (
      (_.type === "fraction" &&
        (N.find(si(_.currentClass)).text(_.formatFractionCurrent(C + 1)),
        N.find(si(_.totalClass)).text(_.formatFractionTotal(S))),
      _.type === "progressbar")
    ) {
      let E;
      _.progressbarOpposite
        ? (E = e.isHorizontal() ? "vertical" : "horizontal")
        : (E = e.isHorizontal() ? "horizontal" : "vertical");
      const O = (C + 1) / S;
      let L = 1,
        D = 1;
      E === "horizontal" ? (L = O) : (D = O),
        N.find(si(_.progressbarFillClass))
          .transform(`translate3d(0,0,0) scaleX(${L}) scaleY(${D})`)
          .transition(e.params.speed);
    }
    _.type === "custom" && _.renderCustom
      ? (N.html(_.renderCustom(e, C + 1, S)), r("paginationRender", N[0]))
      : r("paginationUpdate", N[0]),
      e.params.watchOverflow &&
        e.enabled &&
        N[e.isLocked ? "addClass" : "removeClass"](_.lockClass);
  }
  function h() {
    const y = e.params.pagination;
    if (l()) return;
    const _ =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      A = e.pagination.$el;
    let N = "";
    if (y.type === "bullets") {
      let C = e.params.loop
        ? Math.ceil((_ - e.loopedSlides * 2) / e.params.slidesPerGroup)
        : e.snapGrid.length;
      e.params.freeMode &&
        e.params.freeMode.enabled &&
        !e.params.loop &&
        C > _ &&
        (C = _);
      for (let S = 0; S < C; S += 1)
        y.renderBullet
          ? (N += y.renderBullet.call(e, S, y.bulletClass))
          : (N += `<${y.bulletElement} class="${y.bulletClass}"></${y.bulletElement}>`);
      A.html(N), (e.pagination.bullets = A.find(si(y.bulletClass)));
    }
    y.type === "fraction" &&
      (y.renderFraction
        ? (N = y.renderFraction.call(e, y.currentClass, y.totalClass))
        : (N = `<span class="${y.currentClass}"></span> / <span class="${y.totalClass}"></span>`),
      A.html(N)),
      y.type === "progressbar" &&
        (y.renderProgressbar
          ? (N = y.renderProgressbar.call(e, y.progressbarFillClass))
          : (N = `<span class="${y.progressbarFillClass}"></span>`),
        A.html(N)),
      y.type !== "custom" && r("paginationRender", e.pagination.$el[0]);
  }
  function m() {
    e.params.pagination = S2(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: "swiper-pagination" }
    );
    const y = e.params.pagination;
    if (!y.el) return;
    let _ = B(y.el);
    _.length !== 0 &&
      (e.params.uniqueNavElements &&
        typeof y.el == "string" &&
        _.length > 1 &&
        ((_ = e.$el.find(y.el)),
        _.length > 1 &&
          (_ = _.filter((A) => B(A).parents(".swiper")[0] === e.el))),
      y.type === "bullets" && y.clickable && _.addClass(y.clickableClass),
      _.addClass(y.modifierClass + y.type),
      _.addClass(y.modifierClass + e.params.direction),
      y.type === "bullets" &&
        y.dynamicBullets &&
        (_.addClass(`${y.modifierClass}${y.type}-dynamic`),
        (o = 0),
        y.dynamicMainBullets < 1 && (y.dynamicMainBullets = 1)),
      y.type === "progressbar" &&
        y.progressbarOpposite &&
        _.addClass(y.progressbarOppositeClass),
      y.clickable &&
        _.on("click", si(y.bulletClass), function (N) {
          N.preventDefault();
          let C = B(this).index() * e.params.slidesPerGroup;
          e.params.loop && (C += e.loopedSlides), e.slideTo(C);
        }),
      Object.assign(e.pagination, { $el: _, el: _[0] }),
      e.enabled || _.addClass(y.lockClass));
  }
  function g() {
    const y = e.params.pagination;
    if (l()) return;
    const _ = e.pagination.$el;
    _.removeClass(y.hiddenClass),
      _.removeClass(y.modifierClass + y.type),
      _.removeClass(y.modifierClass + e.params.direction),
      e.pagination.bullets &&
        e.pagination.bullets.removeClass &&
        e.pagination.bullets.removeClass(y.bulletActiveClass),
      y.clickable && _.off("click", si(y.bulletClass));
  }
  n("init", () => {
    m(), h(), c();
  }),
    n("activeIndexChange", () => {
      (e.params.loop || typeof e.snapIndex > "u") && c();
    }),
    n("snapIndexChange", () => {
      e.params.loop || c();
    }),
    n("slidesLengthChange", () => {
      e.params.loop && (h(), c());
    }),
    n("snapGridLengthChange", () => {
      e.params.loop || (h(), c());
    }),
    n("destroy", () => {
      g();
    }),
    n("enable disable", () => {
      const { $el: y } = e.pagination;
      y &&
        y[e.enabled ? "removeClass" : "addClass"](
          e.params.pagination.lockClass
        );
    }),
    n("lock unlock", () => {
      c();
    }),
    n("click", (y, _) => {
      const A = _.target,
        { $el: N } = e.pagination;
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        N.length > 0 &&
        !B(A).hasClass(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && A === e.navigation.nextEl) ||
            (e.navigation.prevEl && A === e.navigation.prevEl))
        )
          return;
        const C = N.hasClass(e.params.pagination.hiddenClass);
        r(C === !0 ? "paginationShow" : "paginationHide"),
          N.toggleClass(e.params.pagination.hiddenClass);
      }
    }),
    Object.assign(e.pagination, { render: h, update: c, init: m, destroy: g });
}
function Sk({ swiper: e, extendParams: t, on: n, emit: r }) {
  let i;
  (e.autoplay = { running: !1, paused: !1 }),
    t({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  function s() {
    const A = e.slides.eq(e.activeIndex);
    let N = e.params.autoplay.delay;
    A.attr("data-swiper-autoplay") &&
      (N = A.attr("data-swiper-autoplay") || e.params.autoplay.delay),
      clearTimeout(i),
      (i = vl(() => {
        let C;
        e.params.autoplay.reverseDirection
          ? e.params.loop
            ? (e.loopFix(),
              (C = e.slidePrev(e.params.speed, !0, !0)),
              r("autoplay"))
            : e.isBeginning
            ? e.params.autoplay.stopOnLastSlide
              ? l()
              : ((C = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0)),
                r("autoplay"))
            : ((C = e.slidePrev(e.params.speed, !0, !0)), r("autoplay"))
          : e.params.loop
          ? (e.loopFix(),
            (C = e.slideNext(e.params.speed, !0, !0)),
            r("autoplay"))
          : e.isEnd
          ? e.params.autoplay.stopOnLastSlide
            ? l()
            : ((C = e.slideTo(0, e.params.speed, !0, !0)), r("autoplay"))
          : ((C = e.slideNext(e.params.speed, !0, !0)), r("autoplay")),
          ((e.params.cssMode && e.autoplay.running) || C === !1) && s();
      }, N));
  }
  function o() {
    return typeof i < "u" || e.autoplay.running
      ? !1
      : ((e.autoplay.running = !0), r("autoplayStart"), s(), !0);
  }
  function l() {
    return !e.autoplay.running || typeof i > "u"
      ? !1
      : (i && (clearTimeout(i), (i = void 0)),
        (e.autoplay.running = !1),
        r("autoplayStop"),
        !0);
  }
  function u(A) {
    e.autoplay.running &&
      (e.autoplay.paused ||
        (i && clearTimeout(i),
        (e.autoplay.paused = !0),
        A === 0 || !e.params.autoplay.waitForTransition
          ? ((e.autoplay.paused = !1), s())
          : ["transitionend", "webkitTransitionEnd"].forEach((N) => {
              e.$wrapperEl[0].addEventListener(N, h);
            })));
  }
  function c() {
    const A = Be();
    A.visibilityState === "hidden" && e.autoplay.running && u(),
      A.visibilityState === "visible" &&
        e.autoplay.paused &&
        (s(), (e.autoplay.paused = !1));
  }
  function h(A) {
    !e ||
      e.destroyed ||
      !e.$wrapperEl ||
      (A.target === e.$wrapperEl[0] &&
        (["transitionend", "webkitTransitionEnd"].forEach((N) => {
          e.$wrapperEl[0].removeEventListener(N, h);
        }),
        (e.autoplay.paused = !1),
        e.autoplay.running ? s() : l()));
  }
  function m() {
    e.params.autoplay.disableOnInteraction ? l() : u(),
      ["transitionend", "webkitTransitionEnd"].forEach((A) => {
        e.$wrapperEl[0].removeEventListener(A, h);
      });
  }
  function g() {
    e.params.autoplay.disableOnInteraction || ((e.autoplay.paused = !1), s());
  }
  function y() {
    e.params.autoplay.pauseOnMouseEnter &&
      (e.$el.on("mouseenter", m), e.$el.on("mouseleave", g));
  }
  function _() {
    e.$el.off("mouseenter", m), e.$el.off("mouseleave", g);
  }
  n("init", () => {
    e.params.autoplay.enabled &&
      (o(), Be().addEventListener("visibilitychange", c), y());
  }),
    n("beforeTransitionStart", (A, N, C) => {
      e.autoplay.running &&
        (C || !e.params.autoplay.disableOnInteraction
          ? e.autoplay.pause(N)
          : l());
    }),
    n("sliderFirstMove", () => {
      e.autoplay.running &&
        (e.params.autoplay.disableOnInteraction ? l() : u());
    }),
    n("touchEnd", () => {
      e.params.cssMode &&
        e.autoplay.paused &&
        !e.params.autoplay.disableOnInteraction &&
        s();
    }),
    n("destroy", () => {
      _(),
        e.autoplay.running && l(),
        Be().removeEventListener("visibilitychange", c);
    }),
    Object.assign(e.autoplay, { pause: u, run: s, start: o, stop: l });
}
function Gr(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function Zn(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Gr(t[r]) && Gr(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : Zn(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function C2(e = {}) {
  return (
    e.navigation &&
    typeof e.navigation.nextEl > "u" &&
    typeof e.navigation.prevEl > "u"
  );
}
function x2(e = {}) {
  return e.pagination && typeof e.pagination.el > "u";
}
function E2(e = {}) {
  return e.scrollbar && typeof e.scrollbar.el > "u";
}
function k2(e = "") {
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
const T2 = [
  "modules",
  "init",
  "_direction",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_preloadImages",
  "updateOnImagesReady",
  "_loop",
  "_loopAdditionalSlides",
  "_loopedSlides",
  "_loopFillGroupWithBlank",
  "loopPreventsSlide",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideBlankClass",
  "slideActiveClass",
  "slideDuplicateActiveClass",
  "slideVisibleClass",
  "slideDuplicateClass",
  "slideNextClass",
  "slideDuplicateNextClass",
  "slidePrevClass",
  "slideDuplicatePrevClass",
  "wrapperClass",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "lazy",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
];
function Ck(e = {}) {
  const t = { on: {} },
    n = {},
    r = {};
  Zn(t, Bi.defaults),
    Zn(t, Bi.extendedDefaults),
    (t._emitClasses = !0),
    (t.init = !1);
  const i = {},
    s = T2.map((o) => o.replace(/_/, ""));
  return (
    Object.keys(e).forEach((o) => {
      s.indexOf(o) >= 0
        ? Gr(e[o])
          ? ((t[o] = {}), (r[o] = {}), Zn(t[o], e[o]), Zn(r[o], e[o]))
          : ((t[o] = e[o]), (r[o] = e[o]))
        : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
        ? (n[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
        : (i[o] = e[o]);
    }),
    ["navigation", "pagination", "scrollbar"].forEach((o) => {
      t[o] === !0 && (t[o] = {}), t[o] === !1 && delete t[o];
    }),
    { params: t, passedParams: r, rest: i, events: n }
  );
}
function xk(e) {
  return new Bi(e);
}
function Ek(
  { el: e, nextEl: t, prevEl: n, paginationEl: r, scrollbarEl: i, swiper: s },
  o
) {
  C2(o) &&
    t &&
    n &&
    ((s.params.navigation.nextEl = t),
    (s.originalParams.navigation.nextEl = t),
    (s.params.navigation.prevEl = n),
    (s.originalParams.navigation.prevEl = n)),
    x2(o) &&
      r &&
      ((s.params.pagination.el = r), (s.originalParams.pagination.el = r)),
    E2(o) &&
      i &&
      ((s.params.scrollbar.el = i), (s.originalParams.scrollbar.el = i)),
    s.init(e);
}
function b2(e, t) {
  let n = t.slidesPerView;
  if (t.breakpoints) {
    const i = Bi.prototype.getBreakpoint(t.breakpoints),
      s = i in t.breakpoints ? t.breakpoints[i] : void 0;
    s && s.slidesPerView && (n = s.slidesPerView);
  }
  let r = Math.ceil(parseFloat(t.loopedSlides || n, 10));
  return (r += t.loopAdditionalSlides), r > e.length && (r = e.length), r;
}
function kk(e, t, n) {
  const r = t.map((u, c) =>
    Pe.cloneElement(u, { swiper: e, "data-swiper-slide-index": c })
  );
  function i(u, c, h) {
    return Pe.cloneElement(u, {
      key: `${u.key}-duplicate-${c}-${h}`,
      className: `${u.props.className || ""} ${n.slideDuplicateClass}`,
    });
  }
  if (n.loopFillGroupWithBlank) {
    const u = n.slidesPerGroup - (r.length % n.slidesPerGroup);
    if (u !== n.slidesPerGroup)
      for (let c = 0; c < u; c += 1) {
        const h = Pe.createElement("div", {
          className: `${n.slideClass} ${n.slideBlankClass}`,
        });
        r.push(h);
      }
  }
  n.slidesPerView === "auto" && !n.loopedSlides && (n.loopedSlides = r.length);
  const s = b2(r, n),
    o = [],
    l = [];
  return (
    r.forEach((u, c) => {
      c < s && l.push(i(u, c, "prepend")),
        c < r.length && c >= r.length - s && o.push(i(u, c, "append"));
    }),
    e && (e.loopedSlides = s),
    [...o, ...r, ...l]
  );
}
function Tk(e, t, n, r) {
  const i = [];
  if (!t) return i;
  const s = (c) => {
      i.indexOf(c) < 0 && i.push(c);
    },
    o = r.map((c) => c.key),
    l = n.map((c) => c.key);
  return (
    o.join("") !== l.join("") && s("children"),
    r.length !== n.length && s("children"),
    T2.filter((c) => c[0] === "_")
      .map((c) => c.replace(/_/, ""))
      .forEach((c) => {
        if (c in e && c in t)
          if (Gr(e[c]) && Gr(t[c])) {
            const h = Object.keys(e[c]),
              m = Object.keys(t[c]);
            h.length !== m.length
              ? s(c)
              : (h.forEach((g) => {
                  e[c][g] !== t[c][g] && s(c);
                }),
                m.forEach((g) => {
                  e[c][g] !== t[c][g] && s(c);
                }));
          } else e[c] !== t[c] && s(c);
      }),
    i
  );
}
function I2(e) {
  const t = [];
  return (
    Pe.Children.toArray(e).forEach((n) => {
      n.type && n.type.displayName === "SwiperSlide"
        ? t.push(n)
        : n.props &&
          n.props.children &&
          I2(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function bk(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    Pe.Children.toArray(e).forEach((r) => {
      if (r.type && r.type.displayName === "SwiperSlide") t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = I2(r.props.children);
        i.length > 0 ? i.forEach((s) => t.push(s)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function Ik({
  swiper: e,
  slides: t,
  passedParams: n,
  changedParams: r,
  nextEl: i,
  prevEl: s,
  scrollbarEl: o,
  paginationEl: l,
}) {
  const u = r.filter((L) => L !== "children" && L !== "direction"),
    {
      params: c,
      pagination: h,
      navigation: m,
      scrollbar: g,
      virtual: y,
      thumbs: _,
    } = e;
  let A, N, C, S, E;
  r.includes("thumbs") &&
    n.thumbs &&
    n.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (A = !0),
    r.includes("controller") &&
      n.controller &&
      n.controller.control &&
      c.controller &&
      !c.controller.control &&
      (N = !0),
    r.includes("pagination") &&
      n.pagination &&
      (n.pagination.el || l) &&
      (c.pagination || c.pagination === !1) &&
      h &&
      !h.el &&
      (C = !0),
    r.includes("scrollbar") &&
      n.scrollbar &&
      (n.scrollbar.el || o) &&
      (c.scrollbar || c.scrollbar === !1) &&
      g &&
      !g.el &&
      (S = !0),
    r.includes("navigation") &&
      n.navigation &&
      (n.navigation.prevEl || s) &&
      (n.navigation.nextEl || i) &&
      (c.navigation || c.navigation === !1) &&
      m &&
      !m.prevEl &&
      !m.nextEl &&
      (E = !0);
  const O = (L) => {
    e[L] &&
      (e[L].destroy(),
      L === "navigation"
        ? ((c[L].prevEl = void 0),
          (c[L].nextEl = void 0),
          (e[L].prevEl = void 0),
          (e[L].nextEl = void 0))
        : ((c[L].el = void 0), (e[L].el = void 0)));
  };
  u.forEach((L) => {
    if (Gr(c[L]) && Gr(n[L])) Zn(c[L], n[L]);
    else {
      const D = n[L];
      (D === !0 || D === !1) &&
      (L === "navigation" || L === "pagination" || L === "scrollbar")
        ? D === !1 && O(L)
        : (c[L] = n[L]);
    }
  }),
    r.includes("children") && y && c.virtual.enabled
      ? ((y.slides = t), y.update(!0))
      : r.includes("children") &&
        e.lazy &&
        e.params.lazy.enabled &&
        e.lazy.load(),
    A && _.init() && _.update(!0),
    N && (e.controller.control = c.controller.control),
    C && (l && (c.pagination.el = l), h.init(), h.render(), h.update()),
    S &&
      (o && (c.scrollbar.el = o), g.init(), g.updateSize(), g.setTranslate()),
    E &&
      (i && (c.navigation.nextEl = i),
      s && (c.navigation.prevEl = s),
      m.init(),
      m.update()),
    r.includes("allowSlideNext") && (e.allowSlideNext = n.allowSlideNext),
    r.includes("allowSlidePrev") && (e.allowSlidePrev = n.allowSlidePrev),
    r.includes("direction") && e.changeDirection(n.direction, !1),
    e.update();
}
function Nk(e) {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.lazy && e.params.lazy.enabled && e.lazy.load(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
}
function Pk(e, t, n) {
  if (!n) return null;
  const r = e.isHorizontal()
    ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
    : { top: `${n.offset}px` };
  return t
    .filter((i, s) => s >= n.from && s <= n.to)
    .map((i) => Pe.cloneElement(i, { swiper: e, style: r }));
}
function Us(e, t) {
  return typeof window > "u" ? R.useEffect(e, t) : R.useLayoutEffect(e, t);
}
function md() {
  return (
    (md =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    md.apply(this, arguments)
  );
}
const N2 = R.forwardRef(
  (
    {
      className: e,
      tag: t = "div",
      wrapperTag: n = "div",
      children: r,
      onSwiper: i,
      ...s
    } = {},
    o
  ) => {
    let l = !1;
    const [u, c] = R.useState("swiper"),
      [h, m] = R.useState(null),
      [g, y] = R.useState(!1),
      _ = R.useRef(!1),
      A = R.useRef(null),
      N = R.useRef(null),
      C = R.useRef(null),
      S = R.useRef(null),
      E = R.useRef(null),
      O = R.useRef(null),
      L = R.useRef(null),
      D = R.useRef(null),
      { params: T, passedParams: v, rest: b, events: k } = Ck(s),
      { slides: x, slots: P } = bk(r),
      I = () => {
        y(!g);
      };
    if (
      (Object.assign(T.on, {
        _containerClasses(X, U) {
          c(U);
        },
      }),
      !A.current &&
        (Object.assign(T.on, k),
        (l = !0),
        (N.current = xk(T)),
        (N.current.loopCreate = () => {}),
        (N.current.loopDestroy = () => {}),
        T.loop && (N.current.loopedSlides = b2(x, T)),
        N.current.virtual && N.current.params.virtual.enabled))
    ) {
      N.current.virtual.slides = x;
      const X = {
        cache: !1,
        slides: x,
        renderExternal: m,
        renderExternalUpdate: !1,
      };
      Zn(N.current.params.virtual, X), Zn(N.current.originalParams.virtual, X);
    }
    N.current && N.current.on("_beforeBreakpoint", I);
    const V = () => {
        l ||
          !k ||
          !N.current ||
          Object.keys(k).forEach((X) => {
            N.current.on(X, k[X]);
          });
      },
      ie = () => {
        !k ||
          !N.current ||
          Object.keys(k).forEach((X) => {
            N.current.off(X, k[X]);
          });
      };
    R.useEffect(() => () => {
      N.current && N.current.off("_beforeBreakpoint", I);
    }),
      R.useEffect(() => {
        !_.current &&
          N.current &&
          (N.current.emitSlidesClasses(), (_.current = !0));
      }),
      Us(() => {
        if ((o && (o.current = A.current), !!A.current))
          return (
            Ek(
              {
                el: A.current,
                nextEl: E.current,
                prevEl: O.current,
                paginationEl: L.current,
                scrollbarEl: D.current,
                swiper: N.current,
              },
              T
            ),
            i && i(N.current),
            () => {
              N.current && !N.current.destroyed && N.current.destroy(!0, !1);
            }
          );
      }, []),
      Us(() => {
        V();
        const X = Tk(v, C.current, x, S.current);
        return (
          (C.current = v),
          (S.current = x),
          X.length &&
            N.current &&
            !N.current.destroyed &&
            Ik({
              swiper: N.current,
              slides: x,
              passedParams: v,
              changedParams: X,
              nextEl: E.current,
              prevEl: O.current,
              scrollbarEl: D.current,
              paginationEl: L.current,
            }),
          () => {
            ie();
          }
        );
      }),
      Us(() => {
        Nk(N.current);
      }, [h]);
    function Ee() {
      return T.virtual
        ? Pk(N.current, x, h)
        : !T.loop || (N.current && N.current.destroyed)
        ? x.map((X) => Pe.cloneElement(X, { swiper: N.current }))
        : kk(N.current, x, T);
    }
    return Pe.createElement(
      t,
      md({ ref: A, className: k2(`${u}${e ? ` ${e}` : ""}`) }, b),
      P["container-start"],
      C2(T) &&
        Pe.createElement(
          Pe.Fragment,
          null,
          Pe.createElement("div", { ref: O, className: "swiper-button-prev" }),
          Pe.createElement("div", { ref: E, className: "swiper-button-next" })
        ),
      E2(T) &&
        Pe.createElement("div", { ref: D, className: "swiper-scrollbar" }),
      x2(T) &&
        Pe.createElement("div", { ref: L, className: "swiper-pagination" }),
      Pe.createElement(
        n,
        { className: "swiper-wrapper" },
        P["wrapper-start"],
        Ee(),
        P["wrapper-end"]
      ),
      P["container-end"]
    );
  }
);
N2.displayName = "Swiper";
function gd() {
  return (
    (gd =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    gd.apply(this, arguments)
  );
}
const vd = R.forwardRef(
  (
    {
      tag: e = "div",
      children: t,
      className: n = "",
      swiper: r,
      zoom: i,
      virtualIndex: s,
      ...o
    } = {},
    l
  ) => {
    const u = R.useRef(null),
      [c, h] = R.useState("swiper-slide");
    function m(_, A, N) {
      A === u.current && h(N);
    }
    Us(() => {
      if ((l && (l.current = u.current), !(!u.current || !r))) {
        if (r.destroyed) {
          c !== "swiper-slide" && h("swiper-slide");
          return;
        }
        return (
          r.on("_slideClass", m),
          () => {
            r && r.off("_slideClass", m);
          }
        );
      }
    }),
      Us(() => {
        r && u.current && h(r.getSlideClasses(u.current));
      }, [r]);
    let g;
    typeof t == "function" &&
      (g = {
        isActive:
          c.indexOf("swiper-slide-active") >= 0 ||
          c.indexOf("swiper-slide-duplicate-active") >= 0,
        isVisible: c.indexOf("swiper-slide-visible") >= 0,
        isDuplicate: c.indexOf("swiper-slide-duplicate") >= 0,
        isPrev:
          c.indexOf("swiper-slide-prev") >= 0 ||
          c.indexOf("swiper-slide-duplicate-prev") >= 0,
        isNext:
          c.indexOf("swiper-slide-next") >= 0 ||
          c.indexOf("swiper-slide-duplicate-next") >= 0,
      });
    const y = () => (typeof t == "function" ? t(g) : t);
    return Pe.createElement(
      e,
      gd(
        {
          ref: u,
          className: k2(`${c}${n ? ` ${n}` : ""}`),
          "data-swiper-slide-index": s,
        },
        o
      ),
      i
        ? Pe.createElement(
            "div",
            {
              className: "swiper-zoom-container",
              "data-swiper-zoom": typeof i == "number" ? i : void 0,
            },
            y()
          )
        : y()
    );
  }
);
vd.displayName = "SwiperSlide";
const cg = "/assets/men-ACBkhOlP.png",
  Ak = "/assets/image-2HirN1VD.png";
function Ok() {
  return f.jsxs(f.Fragment, {
    children: [
      f.jsx(De, {
        className: "newFeautered__container",
        children: f.jsxs("section", {
          className: "newFeautered",
          children: [
            f.jsxs("div", {
              className: "newFeautered__title",
              children: [
                f.jsx("h1", {
                  children: "Step Into Style with Our Trendy Shoes!",
                }),
                f.jsx("button", { children: "SHOP NOW" }),
              ],
            }),
            f.jsx("div", {
              className: "newFeautered__slider",
              children: f.jsxs(N2, {
                modules: [wk, _k, Sk],
                spaceBetween: 30,
                loop: !0,
                slidesPerView: 1,
                navigation: !0,
                pagination: { clickable: !0 },
                autoplay: { delay: 3e3, disableOnInteraction: !1 },
                children: [
                  f.jsx(vd, {
                    className: "newFeautered__sliderImg",
                    children: f.jsx("img", { src: cg, alt: "Slide 1" }),
                  }),
                  f.jsx(vd, {
                    className: "newFeautered__sliderImg",
                    children: f.jsx("img", { src: cg, alt: "Slide 2" }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      f.jsx("img", { className: "newFeautered__img", src: Ak, alt: "" }),
    ],
  });
}
function jk() {
  const e = al;
  return f.jsxs("section", {
    className: "newFtrends",
    children: [
      f.jsx("h1", { className: "newFtrends__title", children: "Тренды 2024" }),
      f.jsx(Jr, {
        className: "sneaker__row",
        children: e
          .slice(0, 3)
          .map((t) => f.jsx(_o, { ...t }, t.id || t.title)),
      }),
    ],
  });
}
const Lk = "/assets/main-jcEr3fft.png",
  Rk = "/assets/women--kTHnCyz.png",
  Mk = "/assets/men-ACBkhOlP.png";
function Dk() {
  return f.jsxs("section", {
    className: "our",
    children: [
      f.jsx("h1", { children: "Наши коллекции обуви" }),
      f.jsxs("div", {
        className: "our__images",
        children: [
          f.jsxs("div", {
            className: "our__mainContainer",
            children: [
              f.jsx("img", {
                className: "our__main",
                src: Lk,
                alt: "Основная коллекция",
              }),
              f.jsx("div", {
                className: "our__textOverlay",
                children: "Основная коллекция",
              }),
            ],
          }),
          f.jsxs("div", {
            className: "our__secImages",
            children: [
              f.jsx(he, {
                to: "/men",
                children: f.jsxs("div", {
                  className: "our__secImageContainer",
                  children: [
                    f.jsx("img", { src: Mk, alt: "Мужская обувь" }),
                    f.jsx("div", {
                      className: "our__textOverlay",
                      children: "Мужская обувь",
                    }),
                  ],
                }),
              }),
              f.jsx(he, {
                to: "/women",
                children: f.jsxs("div", {
                  className: "our__secImageContainer",
                  children: [
                    f.jsx("img", { src: Rk, alt: "Женская обувь" }),
                    f.jsx("div", {
                      className: "our__textOverlay",
                      children: "Женская обувь",
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Fk() {
  return f.jsx(f.Fragment, {
    children: f.jsx("section", {
      className: "SubscribeUs",
      children: f.jsxs("div", {
        className: "SubscribeUs__card",
        children: [
          f.jsxs("h1", {
            className: "SubscribeUs__title",
            children: [
              "Подпишитесь на нашу рассылку и получите скидку ",
              f.jsx("span", { children: " 25 %" }),
            ],
          }),
          f.jsx("input", { type: "email", placeholder: "Введите вашу почту" }),
          f.jsx("button", { children: "Подписаться" }),
        ],
      }),
    }),
  });
}
function Uk() {
  return f.jsx(f.Fragment, {
    children: f.jsxs("section", {
      children: [
        f.jsx(Ok, {}),
        f.jsxs(De, { children: [f.jsx(jk, {}), f.jsx(Dk, {}), f.jsx(Fk, {})] }),
      ],
    }),
  });
}
const dg = () => {};
let Yf = {},
  P2 = {},
  A2 = null,
  O2 = { mark: dg, measure: dg };
try {
  typeof window < "u" && (Yf = window),
    typeof document < "u" && (P2 = document),
    typeof MutationObserver < "u" && (A2 = MutationObserver),
    typeof performance < "u" && (O2 = performance);
} catch {}
const { userAgent: fg = "" } = Yf.navigator || {},
  mr = Yf,
  me = P2,
  hg = A2,
  pa = O2;
mr.document;
const jn =
    !!me.documentElement &&
    !!me.head &&
    typeof me.addEventListener == "function" &&
    typeof me.createElement == "function",
  j2 = ~fg.indexOf("MSIE") || ~fg.indexOf("Trident/");
var ve = "classic",
  L2 = "duotone",
  _t = "sharp",
  St = "sharp-duotone",
  zk = [ve, L2, _t, St],
  $k = {
    classic: { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" },
    sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
    "sharp-duotone": { 900: "fasds" },
  },
  pg = {
    kit: { fak: "kit", "fa-kit": "kit" },
    "kit-duotone": { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
  },
  Bk = ["kit"],
  Vk = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,
  Hk =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
  Wk = {
    "Font Awesome 5 Free": { 900: "fas", 400: "far" },
    "Font Awesome 5 Pro": { 900: "fas", 400: "far", normal: "far", 300: "fal" },
    "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 5 Duotone": { 900: "fad" },
  },
  Gk = {
    "Font Awesome 6 Free": { 900: "fas", 400: "far" },
    "Font Awesome 6 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    },
    "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 6 Duotone": { 900: "fad" },
    "Font Awesome 6 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast",
    },
    "Font Awesome 6 Sharp Duotone": { 900: "fasds" },
  },
  Kk = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    },
    "sharp-duotone": { "fa-solid": "fasds" },
  },
  Yk = {
    classic: ["fas", "far", "fal", "fat"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds"],
  },
  qk = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    },
    "sharp-duotone": { fasds: "fa-solid" },
  },
  Xk = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
    },
    sharp: { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" },
    "sharp-duotone": { solid: "fasds" },
  },
  R2 = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    },
    "sharp-duotone": { fa: "solid", fasds: "solid", "fa-solid": "solid" },
  },
  Jk = ["solid", "regular", "light", "thin", "duotone", "brands"],
  M2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Zk = M2.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  ks = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  Qk = [
    ...Object.keys(Yk),
    ...Jk,
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "beat",
    "border",
    "fade",
    "beat-fade",
    "bounce",
    "flip-both",
    "flip-horizontal",
    "flip-vertical",
    "flip",
    "fw",
    "inverse",
    "layers-counter",
    "layers-text",
    "layers",
    "li",
    "pull-left",
    "pull-right",
    "pulse",
    "rotate-180",
    "rotate-270",
    "rotate-90",
    "rotate-by",
    "shake",
    "spin-pulse",
    "spin-reverse",
    "spin",
    "stack-1x",
    "stack-2x",
    "stack",
    "ul",
    ks.GROUP,
    ks.SWAP_OPACITY,
    ks.PRIMARY,
    ks.SECONDARY,
  ]
    .concat(M2.map((e) => "".concat(e, "x")))
    .concat(Zk.map((e) => "w-".concat(e))),
  e6 = {
    "Font Awesome Kit": { 400: "fak", normal: "fak" },
    "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
  },
  t6 = {
    kit: { "fa-kit": "fak" },
    "kit-duotone": { "fa-kit-duotone": "fakd" },
  },
  n6 = { kit: { fak: "fa-kit" }, "kit-duotone": { fakd: "fa-kit-duotone" } },
  mg = { kit: { kit: "fak" }, "kit-duotone": { "kit-duotone": "fakd" } };
const In = "___FONT_AWESOME___",
  yd = 16,
  D2 = "fa",
  F2 = "svg-inline--fa",
  Kr = "data-fa-i2svg",
  wd = "data-fa-pseudo-element",
  r6 = "data-fa-pseudo-element-pending",
  qf = "data-prefix",
  Xf = "data-icon",
  gg = "fontawesome-i2svg",
  i6 = "async",
  s6 = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  U2 = (() => {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  z2 = [ve, _t, St];
function No(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[ve];
    },
  });
}
const $2 = { ...R2 };
$2[ve] = { ...R2[ve], ...pg.kit, ...pg["kit-duotone"] };
const Mr = No($2),
  _d = { ...Xk };
_d[ve] = { ..._d[ve], ...mg.kit, ...mg["kit-duotone"] };
const co = No(_d),
  Sd = { ...qk };
Sd[ve] = { ...Sd[ve], ...n6.kit };
const Dr = No(Sd),
  Cd = { ...Kk };
Cd[ve] = { ...Cd[ve], ...t6.kit };
const o6 = No(Cd),
  a6 = Vk,
  B2 = "fa-layers-text",
  l6 = Hk,
  u6 = { ...$k };
No(u6);
const c6 = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  ic = ks,
  Vi = new Set();
Object.keys(co[ve]).map(Vi.add.bind(Vi));
Object.keys(co[_t]).map(Vi.add.bind(Vi));
Object.keys(co[St]).map(Vi.add.bind(Vi));
const d6 = [...Bk, ...Qk],
  zs = mr.FontAwesomeConfig || {};
function f6(e) {
  var t = me.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function h6(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
me &&
  typeof me.querySelector == "function" &&
  [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ].forEach((t) => {
    let [n, r] = t;
    const i = h6(f6(n));
    i != null && (zs[r] = i);
  });
const V2 = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: D2,
  replacementClass: F2,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
zs.familyPrefix && (zs.cssPrefix = zs.familyPrefix);
const Hi = { ...V2, ...zs };
Hi.autoReplaceSvg || (Hi.observeMutations = !1);
const H = {};
Object.keys(V2).forEach((e) => {
  Object.defineProperty(H, e, {
    enumerable: !0,
    set: function (t) {
      (Hi[e] = t), $s.forEach((n) => n(H));
    },
    get: function () {
      return Hi[e];
    },
  });
});
Object.defineProperty(H, "familyPrefix", {
  enumerable: !0,
  set: function (e) {
    (Hi.cssPrefix = e), $s.forEach((t) => t(H));
  },
  get: function () {
    return Hi.cssPrefix;
  },
});
mr.FontAwesomeConfig = H;
const $s = [];
function p6(e) {
  return (
    $s.push(e),
    () => {
      $s.splice($s.indexOf(e), 1);
    }
  );
}
const Un = yd,
  en = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function m6(e) {
  if (!e || !jn) return;
  const t = me.createElement("style");
  t.setAttribute("type", "text/css"), (t.innerHTML = e);
  const n = me.head.childNodes;
  let r = null;
  for (let i = n.length - 1; i > -1; i--) {
    const s = n[i],
      o = (s.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (r = s);
  }
  return me.head.insertBefore(t, r), e;
}
const g6 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function fo() {
  let e = 12,
    t = "";
  for (; e-- > 0; ) t += g6[(Math.random() * 62) | 0];
  return t;
}
function Ji(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function Jf(e) {
  return e.classList
    ? Ji(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function H2(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function v6(e) {
  return Object.keys(e || {})
    .reduce((t, n) => t + "".concat(n, '="').concat(H2(e[n]), '" '), "")
    .trim();
}
function Hl(e) {
  return Object.keys(e || {}).reduce(
    (t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"),
    ""
  );
}
function Zf(e) {
  return (
    e.size !== en.size ||
    e.x !== en.x ||
    e.y !== en.y ||
    e.rotate !== en.rotate ||
    e.flipX ||
    e.flipY
  );
}
function y6(e) {
  let { transform: t, containerWidth: n, iconWidth: r } = e;
  const i = { transform: "translate(".concat(n / 2, " 256)") },
    s = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    o = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    l = "rotate(".concat(t.rotate, " 0 0)"),
    u = { transform: "".concat(s, " ").concat(o, " ").concat(l) },
    c = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: i, inner: u, path: c };
}
function w6(e) {
  let {
      transform: t,
      width: n = yd,
      height: r = yd,
      startCentered: i = !1,
    } = e,
    s = "";
  return (
    i && j2
      ? (s += "translate("
          .concat(t.x / Un - n / 2, "em, ")
          .concat(t.y / Un - r / 2, "em) "))
      : i
      ? (s += "translate(calc(-50% + "
          .concat(t.x / Un, "em), calc(-50% + ")
          .concat(t.y / Un, "em)) "))
      : (s += "translate(".concat(t.x / Un, "em, ").concat(t.y / Un, "em) ")),
    (s += "scale("
      .concat((t.size / Un) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / Un) * (t.flipY ? -1 : 1), ") ")),
    (s += "rotate(".concat(t.rotate, "deg) ")),
    s
  );
}
var _6 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function W2() {
  const e = D2,
    t = F2,
    n = H.cssPrefix,
    r = H.replacementClass;
  let i = _6;
  if (n !== e || r !== t) {
    const s = new RegExp("\\.".concat(e, "\\-"), "g"),
      o = new RegExp("\\--".concat(e, "\\-"), "g"),
      l = new RegExp("\\.".concat(t), "g");
    i = i
      .replace(s, ".".concat(n, "-"))
      .replace(o, "--".concat(n, "-"))
      .replace(l, ".".concat(r));
  }
  return i;
}
let vg = !1;
function sc() {
  H.autoAddCss && !vg && (m6(W2()), (vg = !0));
}
var S6 = {
  mixout() {
    return { dom: { css: W2, insertCss: sc } };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        sc();
      },
      beforeI2svg() {
        sc();
      },
    };
  },
};
const Nn = mr || {};
Nn[In] || (Nn[In] = {});
Nn[In].styles || (Nn[In].styles = {});
Nn[In].hooks || (Nn[In].hooks = {});
Nn[In].shims || (Nn[In].shims = []);
var tn = Nn[In];
const G2 = [],
  K2 = function () {
    me.removeEventListener("DOMContentLoaded", K2),
      (yl = 1),
      G2.map((e) => e());
  };
let yl = !1;
jn &&
  ((yl = (me.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    me.readyState
  )),
  yl || me.addEventListener("DOMContentLoaded", K2));
function C6(e) {
  jn && (yl ? setTimeout(e, 0) : G2.push(e));
}
function Po(e) {
  const { tag: t, attributes: n = {}, children: r = [] } = e;
  return typeof e == "string"
    ? H2(e)
    : "<"
        .concat(t, " ")
        .concat(v6(n), ">")
        .concat(r.map(Po).join(""), "</")
        .concat(t, ">");
}
function yg(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var oc = function (t, n, r, i) {
  var s = Object.keys(t),
    o = s.length,
    l = n,
    u,
    c,
    h;
  for (r === void 0 ? ((u = 1), (h = t[s[0]])) : ((u = 0), (h = r)); u < o; u++)
    (c = s[u]), (h = l(h, t[c], c, t));
  return h;
};
function x6(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      const s = e.charCodeAt(n++);
      (s & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (s & 1023) + 65536)
        : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
function xd(e) {
  const t = x6(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function E6(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t),
    i;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function wg(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function Ed(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { skipHooks: r = !1 } = n,
    i = wg(t);
  typeof tn.hooks.addPack == "function" && !r
    ? tn.hooks.addPack(e, wg(t))
    : (tn.styles[e] = { ...(tn.styles[e] || {}), ...i }),
    e === "fas" && Ed("fa", t);
}
const { styles: Pr, shims: k6 } = tn,
  T6 = {
    [ve]: Object.values(Dr[ve]),
    [_t]: Object.values(Dr[_t]),
    [St]: Object.values(Dr[St]),
  };
let Qf = null,
  Y2 = {},
  q2 = {},
  X2 = {},
  J2 = {},
  Z2 = {};
const b6 = {
  [ve]: Object.keys(Mr[ve]),
  [_t]: Object.keys(Mr[_t]),
  [St]: Object.keys(Mr[St]),
};
function I6(e) {
  return ~d6.indexOf(e);
}
function N6(e, t) {
  const n = t.split("-"),
    r = n[0],
    i = n.slice(1).join("-");
  return r === e && i !== "" && !I6(i) ? i : null;
}
const Q2 = () => {
  const e = (r) => oc(Pr, (i, s, o) => ((i[o] = oc(s, r, {})), i), {});
  (Y2 = e(
    (r, i, s) => (
      i[3] && (r[i[3]] = s),
      i[2] &&
        i[2]
          .filter((l) => typeof l == "number")
          .forEach((l) => {
            r[l.toString(16)] = s;
          }),
      r
    )
  )),
    (q2 = e(
      (r, i, s) => (
        (r[s] = s),
        i[2] &&
          i[2]
            .filter((l) => typeof l == "string")
            .forEach((l) => {
              r[l] = s;
            }),
        r
      )
    )),
    (Z2 = e((r, i, s) => {
      const o = i[2];
      return (
        (r[s] = s),
        o.forEach((l) => {
          r[l] = s;
        }),
        r
      );
    }));
  const t = "far" in Pr || H.autoFetchSvg,
    n = oc(
      k6,
      (r, i) => {
        const s = i[0];
        let o = i[1];
        const l = i[2];
        return (
          o === "far" && !t && (o = "fas"),
          typeof s == "string" && (r.names[s] = { prefix: o, iconName: l }),
          typeof s == "number" &&
            (r.unicodes[s.toString(16)] = { prefix: o, iconName: l }),
          r
        );
      },
      { names: {}, unicodes: {} }
    );
  (X2 = n.names),
    (J2 = n.unicodes),
    (Qf = Wl(H.styleDefault, { family: H.familyDefault }));
};
p6((e) => {
  Qf = Wl(e.styleDefault, { family: H.familyDefault });
});
Q2();
function eh(e, t) {
  return (Y2[e] || {})[t];
}
function P6(e, t) {
  return (q2[e] || {})[t];
}
function Qn(e, t) {
  return (Z2[e] || {})[t];
}
function ey(e) {
  return X2[e] || { prefix: null, iconName: null };
}
function A6(e) {
  const t = J2[e],
    n = eh("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function gr() {
  return Qf;
}
const th = () => ({ prefix: null, iconName: null, rest: [] });
function Wl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { family: n = ve } = t,
    r = Mr[n][e],
    i = co[n][e] || co[n][r],
    s = e in tn.styles ? e : null;
  return i || s || null;
}
const O6 = {
  [ve]: Object.keys(Dr[ve]),
  [_t]: Object.keys(Dr[_t]),
  [St]: Object.keys(Dr[St]),
};
function Gl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { skipLookups: n = !1 } = t,
    r = {
      [ve]: "".concat(H.cssPrefix, "-").concat(ve),
      [_t]: "".concat(H.cssPrefix, "-").concat(_t),
      [St]: "".concat(H.cssPrefix, "-").concat(St),
    };
  let i = null,
    s = ve;
  const o = zk.filter((u) => u !== L2);
  o.forEach((u) => {
    (e.includes(r[u]) || e.some((c) => O6[u].includes(c))) && (s = u);
  });
  const l = e.reduce((u, c) => {
    const h = N6(H.cssPrefix, c);
    if (
      (Pr[c]
        ? ((c = T6[s].includes(c) ? o6[s][c] : c), (i = c), (u.prefix = c))
        : b6[s].indexOf(c) > -1
        ? ((i = c), (u.prefix = Wl(c, { family: s })))
        : h
        ? (u.iconName = h)
        : c !== H.replacementClass &&
          !o.some((m) => c === r[m]) &&
          u.rest.push(c),
      !n && u.prefix && u.iconName)
    ) {
      const m = i === "fa" ? ey(u.iconName) : {},
        g = Qn(u.prefix, u.iconName);
      m.prefix && (i = null),
        (u.iconName = m.iconName || g || u.iconName),
        (u.prefix = m.prefix || u.prefix),
        u.prefix === "far" &&
          !Pr.far &&
          Pr.fas &&
          !H.autoFetchSvg &&
          (u.prefix = "fas");
    }
    return u;
  }, th());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"),
    !l.prefix &&
      s === _t &&
      (Pr.fass || H.autoFetchSvg) &&
      ((l.prefix = "fass"),
      (l.iconName = Qn(l.prefix, l.iconName) || l.iconName)),
    !l.prefix &&
      s === St &&
      (Pr.fasds || H.autoFetchSvg) &&
      ((l.prefix = "fasds"),
      (l.iconName = Qn(l.prefix, l.iconName) || l.iconName)),
    (l.prefix === "fa" || i === "fa") && (l.prefix = gr() || "fas"),
    l
  );
}
class j6 {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const i = n.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((s) => {
      (this.definitions[s] = { ...(this.definitions[s] || {}), ...i[s] }),
        Ed(s, i[s]);
      const o = Dr[ve][s];
      o && Ed(o, i[s]), Q2();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? { 0: n } : n;
    return (
      Object.keys(r).map((i) => {
        const { prefix: s, iconName: o, icon: l } = r[i],
          u = l[2];
        t[s] || (t[s] = {}),
          u.length > 0 &&
            u.forEach((c) => {
              typeof c == "string" && (t[s][c] = l);
            }),
          (t[s][o] = l);
      }),
      t
    );
  }
}
let _g = [],
  wi = {};
const Pi = {},
  L6 = Object.keys(Pi);
function R6(e, t) {
  let { mixoutsTo: n } = t;
  return (
    (_g = e),
    (wi = {}),
    Object.keys(Pi).forEach((r) => {
      L6.indexOf(r) === -1 && delete Pi[r];
    }),
    _g.forEach((r) => {
      const i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach((s) => {
          typeof i[s] == "function" && (n[s] = i[s]),
            typeof i[s] == "object" &&
              Object.keys(i[s]).forEach((o) => {
                n[s] || (n[s] = {}), (n[s][o] = i[s][o]);
              });
        }),
        r.hooks)
      ) {
        const s = r.hooks();
        Object.keys(s).forEach((o) => {
          wi[o] || (wi[o] = []), wi[o].push(s[o]);
        });
      }
      r.provides && r.provides(Pi);
    }),
    n
  );
}
function kd(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
    i < n;
    i++
  )
    r[i - 2] = arguments[i];
  return (
    (wi[e] || []).forEach((o) => {
      t = o.apply(null, [t, ...r]);
    }),
    t
  );
}
function Yr(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  (wi[e] || []).forEach((s) => {
    s.apply(null, n);
  });
}
function vr() {
  const e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return Pi[e] ? Pi[e].apply(null, t) : void 0;
}
function Td(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let { iconName: t } = e;
  const n = e.prefix || gr();
  if (t)
    return (t = Qn(n, t) || t), yg(ty.definitions, n, t) || yg(tn.styles, n, t);
}
const ty = new j6(),
  M6 = () => {
    (H.autoReplaceSvg = !1), (H.observeMutations = !1), Yr("noAuto");
  },
  D6 = {
    i2svg: function () {
      let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return jn
        ? (Yr("beforeI2svg", e), vr("pseudoElements2svg", e), vr("i2svg", e))
        : Promise.reject(new Error("Operation requires a DOM of some kind."));
    },
    watch: function () {
      let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const { autoReplaceSvgRoot: t } = e;
      H.autoReplaceSvg === !1 && (H.autoReplaceSvg = !0),
        (H.observeMutations = !0),
        C6(() => {
          U6({ autoReplaceSvgRoot: t }), Yr("watch", e);
        });
    },
  },
  F6 = {
    icon: (e) => {
      if (e === null) return null;
      if (typeof e == "object" && e.prefix && e.iconName)
        return {
          prefix: e.prefix,
          iconName: Qn(e.prefix, e.iconName) || e.iconName,
        };
      if (Array.isArray(e) && e.length === 2) {
        const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1],
          n = Wl(e[0]);
        return { prefix: n, iconName: Qn(n, t) || t };
      }
      if (
        typeof e == "string" &&
        (e.indexOf("".concat(H.cssPrefix, "-")) > -1 || e.match(a6))
      ) {
        const t = Gl(e.split(" "), { skipLookups: !0 });
        return {
          prefix: t.prefix || gr(),
          iconName: Qn(t.prefix, t.iconName) || t.iconName,
        };
      }
      if (typeof e == "string") {
        const t = gr();
        return { prefix: t, iconName: Qn(t, e) || e };
      }
    },
  },
  kt = {
    noAuto: M6,
    config: H,
    dom: D6,
    parse: F6,
    library: ty,
    findIconDefinition: Td,
    toHtml: Po,
  },
  U6 = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { autoReplaceSvgRoot: t = me } = e;
    (Object.keys(tn.styles).length > 0 || H.autoFetchSvg) &&
      jn &&
      H.autoReplaceSvg &&
      kt.dom.i2svg({ node: t });
  };
function Kl(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map((n) => Po(n));
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (!jn) return;
        const n = me.createElement("div");
        return (n.innerHTML = e.html), n.children;
      },
    }),
    e
  );
}
function z6(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: i,
    styles: s,
    transform: o,
  } = e;
  if (Zf(o) && n.found && !r.found) {
    const { width: l, height: u } = n,
      c = { x: l / u / 2, y: 0.5 };
    i.style = Hl({
      ...s,
      "transform-origin": ""
        .concat(c.x + o.x / 16, "em ")
        .concat(c.y + o.y / 16, "em"),
    });
  }
  return [{ tag: "svg", attributes: i, children: t }];
}
function $6(e) {
  let { prefix: t, iconName: n, children: r, attributes: i, symbol: s } = e;
  const o = s === !0 ? "".concat(t, "-").concat(H.cssPrefix, "-").concat(n) : s;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [{ tag: "symbol", attributes: { ...i, id: o }, children: r }],
    },
  ];
}
function nh(e) {
  const {
      icons: { main: t, mask: n },
      prefix: r,
      iconName: i,
      transform: s,
      symbol: o,
      title: l,
      maskId: u,
      titleId: c,
      extra: h,
      watchable: m = !1,
    } = e,
    { width: g, height: y } = n.found ? n : t,
    _ = r === "fak",
    A = [H.replacementClass, i ? "".concat(H.cssPrefix, "-").concat(i) : ""]
      .filter((L) => h.classes.indexOf(L) === -1)
      .filter((L) => L !== "" || !!L)
      .concat(h.classes)
      .join(" ");
  let N = {
    children: [],
    attributes: {
      ...h.attributes,
      "data-prefix": r,
      "data-icon": i,
      class: A,
      role: h.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(g, " ").concat(y),
    },
  };
  const C =
    _ && !~h.classes.indexOf("fa-fw")
      ? { width: "".concat((g / y) * 16 * 0.0625, "em") }
      : {};
  m && (N.attributes[Kr] = ""),
    l &&
      (N.children.push({
        tag: "title",
        attributes: {
          id: N.attributes["aria-labelledby"] || "title-".concat(c || fo()),
        },
        children: [l],
      }),
      delete N.attributes.title);
  const S = {
      ...N,
      prefix: r,
      iconName: i,
      main: t,
      mask: n,
      maskId: u,
      transform: s,
      symbol: o,
      styles: { ...C, ...h.styles },
    },
    { children: E, attributes: O } =
      n.found && t.found
        ? vr("generateAbstractMask", S) || { children: [], attributes: {} }
        : vr("generateAbstractIcon", S) || { children: [], attributes: {} };
  return (S.children = E), (S.attributes = O), o ? $6(S) : z6(S);
}
function Sg(e) {
  const {
      content: t,
      width: n,
      height: r,
      transform: i,
      title: s,
      extra: o,
      watchable: l = !1,
    } = e,
    u = {
      ...o.attributes,
      ...(s ? { title: s } : {}),
      class: o.classes.join(" "),
    };
  l && (u[Kr] = "");
  const c = { ...o.styles };
  Zf(i) &&
    ((c.transform = w6({
      transform: i,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (c["-webkit-transform"] = c.transform));
  const h = Hl(c);
  h.length > 0 && (u.style = h);
  const m = [];
  return (
    m.push({ tag: "span", attributes: u, children: [t] }),
    s &&
      m.push({ tag: "span", attributes: { class: "sr-only" }, children: [s] }),
    m
  );
}
function B6(e) {
  const { content: t, title: n, extra: r } = e,
    i = {
      ...r.attributes,
      ...(n ? { title: n } : {}),
      class: r.classes.join(" "),
    },
    s = Hl(r.styles);
  s.length > 0 && (i.style = s);
  const o = [];
  return (
    o.push({ tag: "span", attributes: i, children: [t] }),
    n &&
      o.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    o
  );
}
const { styles: ac } = tn;
function bd(e) {
  const t = e[0],
    n = e[1],
    [r] = e.slice(4);
  let i = null;
  return (
    Array.isArray(r)
      ? (i = {
          tag: "g",
          attributes: { class: "".concat(H.cssPrefix, "-").concat(ic.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(H.cssPrefix, "-").concat(ic.SECONDARY),
                fill: "currentColor",
                d: r[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(H.cssPrefix, "-").concat(ic.PRIMARY),
                fill: "currentColor",
                d: r[1],
              },
            },
          ],
        })
      : (i = { tag: "path", attributes: { fill: "currentColor", d: r } }),
    { found: !0, width: t, height: n, icon: i }
  );
}
const V6 = { found: !1, width: 512, height: 512 };
function H6(e, t) {
  !U2 &&
    !H.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function Id(e, t) {
  let n = t;
  return (
    t === "fa" && H.styleDefault !== null && (t = gr()),
    new Promise((r, i) => {
      if (n === "fa") {
        const s = ey(e) || {};
        (e = s.iconName || e), (t = s.prefix || t);
      }
      if (e && t && ac[t] && ac[t][e]) {
        const s = ac[t][e];
        return r(bd(s));
      }
      H6(e, t),
        r({
          ...V6,
          icon: H.showMissingIcons && e ? vr("missingIconAbstract") || {} : {},
        });
    })
  );
}
const Cg = () => {},
  Nd =
    H.measurePerformance && pa && pa.mark && pa.measure
      ? pa
      : { mark: Cg, measure: Cg },
  Ts = 'FA "6.6.0"',
  W6 = (e) => (Nd.mark("".concat(Ts, " ").concat(e, " begins")), () => ny(e)),
  ny = (e) => {
    Nd.mark("".concat(Ts, " ").concat(e, " ends")),
      Nd.measure(
        "".concat(Ts, " ").concat(e),
        "".concat(Ts, " ").concat(e, " begins"),
        "".concat(Ts, " ").concat(e, " ends")
      );
  };
var rh = { begin: W6, end: ny };
const Aa = () => {};
function xg(e) {
  return typeof (e.getAttribute ? e.getAttribute(Kr) : null) == "string";
}
function G6(e) {
  const t = e.getAttribute ? e.getAttribute(qf) : null,
    n = e.getAttribute ? e.getAttribute(Xf) : null;
  return t && n;
}
function K6(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(H.replacementClass)
  );
}
function Y6() {
  return H.autoReplaceSvg === !0
    ? Oa.replace
    : Oa[H.autoReplaceSvg] || Oa.replace;
}
function q6(e) {
  return me.createElementNS("http://www.w3.org/2000/svg", e);
}
function X6(e) {
  return me.createElement(e);
}
function ry(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { ceFn: n = e.tag === "svg" ? q6 : X6 } = t;
  if (typeof e == "string") return me.createTextNode(e);
  const r = n(e.tag);
  return (
    Object.keys(e.attributes || []).forEach(function (s) {
      r.setAttribute(s, e.attributes[s]);
    }),
    (e.children || []).forEach(function (s) {
      r.appendChild(ry(s, { ceFn: n }));
    }),
    r
  );
}
function J6(e) {
  let t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
const Oa = {
  replace: function (e) {
    const t = e[0];
    if (t.parentNode)
      if (
        (e[1].forEach((n) => {
          t.parentNode.insertBefore(ry(n), t);
        }),
        t.getAttribute(Kr) === null && H.keepOriginalSource)
      ) {
        let n = me.createComment(J6(t));
        t.parentNode.replaceChild(n, t);
      } else t.remove();
  },
  nest: function (e) {
    const t = e[0],
      n = e[1];
    if (~Jf(t).indexOf(H.replacementClass)) return Oa.replace(e);
    const r = new RegExp("".concat(H.cssPrefix, "-.*"));
    if ((delete n[0].attributes.id, n[0].attributes.class)) {
      const s = n[0].attributes.class
        .split(" ")
        .reduce(
          (o, l) => (
            l === H.replacementClass || l.match(r)
              ? o.toSvg.push(l)
              : o.toNode.push(l),
            o
          ),
          { toNode: [], toSvg: [] }
        );
      (n[0].attributes.class = s.toSvg.join(" ")),
        s.toNode.length === 0
          ? t.removeAttribute("class")
          : t.setAttribute("class", s.toNode.join(" "));
    }
    const i = n.map((s) => Po(s)).join(`
`);
    t.setAttribute(Kr, ""), (t.innerHTML = i);
  },
};
function Eg(e) {
  e();
}
function iy(e, t) {
  const n = typeof t == "function" ? t : Aa;
  if (e.length === 0) n();
  else {
    let r = Eg;
    H.mutateApproach === i6 && (r = mr.requestAnimationFrame || Eg),
      r(() => {
        const i = Y6(),
          s = rh.begin("mutate");
        e.map(i), s(), n();
      });
  }
}
let ih = !1;
function sy() {
  ih = !0;
}
function Pd() {
  ih = !1;
}
let wl = null;
function kg(e) {
  if (!hg || !H.observeMutations) return;
  const {
    treeCallback: t = Aa,
    nodeCallback: n = Aa,
    pseudoElementsCallback: r = Aa,
    observeMutationsRoot: i = me,
  } = e;
  (wl = new hg((s) => {
    if (ih) return;
    const o = gr();
    Ji(s).forEach((l) => {
      if (
        (l.type === "childList" &&
          l.addedNodes.length > 0 &&
          !xg(l.addedNodes[0]) &&
          (H.searchPseudoElements && r(l.target), t(l.target)),
        l.type === "attributes" &&
          l.target.parentNode &&
          H.searchPseudoElements &&
          r(l.target.parentNode),
        l.type === "attributes" && xg(l.target) && ~c6.indexOf(l.attributeName))
      )
        if (l.attributeName === "class" && G6(l.target)) {
          const { prefix: u, iconName: c } = Gl(Jf(l.target));
          l.target.setAttribute(qf, u || o), c && l.target.setAttribute(Xf, c);
        } else K6(l.target) && n(l.target);
    });
  })),
    jn &&
      wl.observe(i, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0,
      });
}
function Z6() {
  wl && wl.disconnect();
}
function Q6(e) {
  const t = e.getAttribute("style");
  let n = [];
  return (
    t &&
      (n = t.split(";").reduce((r, i) => {
        const s = i.split(":"),
          o = s[0],
          l = s.slice(1);
        return o && l.length > 0 && (r[o] = l.join(":").trim()), r;
      }, {})),
    n
  );
}
function eT(e) {
  const t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = Gl(Jf(e));
  return (
    i.prefix || (i.prefix = gr()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName =
          P6(i.prefix, e.innerText) || eh(i.prefix, xd(e.innerText))),
      !i.iconName &&
        H.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function tT(e) {
  const t = Ji(e.attributes).reduce(
      (i, s) => (
        i.name !== "class" && i.name !== "style" && (i[s.name] = s.value), i
      ),
      {}
    ),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return (
    H.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(H.replacementClass, "-title-")
            .concat(r || fo()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function nT() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: en,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Tg(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { styleParser: !0 };
  const { iconName: n, prefix: r, rest: i } = eT(e),
    s = tT(e),
    o = kd("parseNodeAttributes", {}, e);
  let l = t.styleParser ? Q6(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: en,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    symbol: !1,
    extra: { classes: i, styles: l, attributes: s },
    ...o,
  };
}
const { styles: rT } = tn;
function oy(e) {
  const t = H.autoReplaceSvg === "nest" ? Tg(e, { styleParser: !1 }) : Tg(e);
  return ~t.extra.classes.indexOf(B2)
    ? vr("generateLayersText", e, t)
    : vr("generateSvgReplacementMutation", e, t);
}
let an = new Set();
z2.map((e) => {
  an.add("fa-".concat(e));
});
Object.keys(Mr[ve]).map(an.add.bind(an));
Object.keys(Mr[_t]).map(an.add.bind(an));
Object.keys(Mr[St]).map(an.add.bind(an));
an = [...an];
function bg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!jn) return Promise.resolve();
  const n = me.documentElement.classList,
    r = (h) => n.add("".concat(gg, "-").concat(h)),
    i = (h) => n.remove("".concat(gg, "-").concat(h)),
    s = H.autoFetchSvg
      ? an
      : z2.map((h) => "fa-".concat(h)).concat(Object.keys(rT));
  s.includes("fa") || s.push("fa");
  const o = [".".concat(B2, ":not([").concat(Kr, "])")]
    .concat(s.map((h) => ".".concat(h, ":not([").concat(Kr, "])")))
    .join(", ");
  if (o.length === 0) return Promise.resolve();
  let l = [];
  try {
    l = Ji(e.querySelectorAll(o));
  } catch {}
  if (l.length > 0) r("pending"), i("complete");
  else return Promise.resolve();
  const u = rh.begin("onTree"),
    c = l.reduce((h, m) => {
      try {
        const g = oy(m);
        g && h.push(g);
      } catch (g) {
        U2 || (g.name === "MissingIcon" && console.error(g));
      }
      return h;
    }, []);
  return new Promise((h, m) => {
    Promise.all(c)
      .then((g) => {
        iy(g, () => {
          r("active"),
            r("complete"),
            i("pending"),
            typeof t == "function" && t(),
            u(),
            h();
        });
      })
      .catch((g) => {
        u(), m(g);
      });
  });
}
function iT(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  oy(e).then((n) => {
    n && iy([n], t);
  });
}
function sT(e) {
  return function (t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Td(t || {});
    let { mask: i } = n;
    return i && (i = (i || {}).icon ? i : Td(i || {})), e(r, { ...n, mask: i });
  };
}
const oT = function (e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = en,
    symbol: r = !1,
    mask: i = null,
    maskId: s = null,
    title: o = null,
    titleId: l = null,
    classes: u = [],
    attributes: c = {},
    styles: h = {},
  } = t;
  if (!e) return;
  const { prefix: m, iconName: g, icon: y } = e;
  return Kl(
    { type: "icon", ...e },
    () => (
      Yr("beforeDOMElementCreation", { iconDefinition: e, params: t }),
      H.autoA11y &&
        (o
          ? (c["aria-labelledby"] = ""
              .concat(H.replacementClass, "-title-")
              .concat(l || fo()))
          : ((c["aria-hidden"] = "true"), (c.focusable = "false"))),
      nh({
        icons: {
          main: bd(y),
          mask: i
            ? bd(i.icon)
            : { found: !1, width: null, height: null, icon: {} },
        },
        prefix: m,
        iconName: g,
        transform: { ...en, ...n },
        symbol: r,
        title: o,
        maskId: s,
        titleId: l,
        extra: { attributes: c, styles: h, classes: u },
      })
    )
  );
};
var aT = {
    mixout() {
      return { icon: sT(oT) };
    },
    hooks() {
      return {
        mutationObserverCallbacks(e) {
          return (e.treeCallback = bg), (e.nodeCallback = iT), e;
        },
      };
    },
    provides(e) {
      (e.i2svg = function (t) {
        const { node: n = me, callback: r = () => {} } = t;
        return bg(n, r);
      }),
        (e.generateSvgReplacementMutation = function (t, n) {
          const {
            iconName: r,
            title: i,
            titleId: s,
            prefix: o,
            transform: l,
            symbol: u,
            mask: c,
            maskId: h,
            extra: m,
          } = n;
          return new Promise((g, y) => {
            Promise.all([
              Id(r, o),
              c.iconName
                ? Id(c.iconName, c.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then((_) => {
                let [A, N] = _;
                g([
                  t,
                  nh({
                    icons: { main: A, mask: N },
                    prefix: o,
                    iconName: r,
                    transform: l,
                    symbol: u,
                    maskId: h,
                    title: i,
                    titleId: s,
                    extra: m,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(y);
          });
        }),
        (e.generateAbstractIcon = function (t) {
          let {
            children: n,
            attributes: r,
            main: i,
            transform: s,
            styles: o,
          } = t;
          const l = Hl(o);
          l.length > 0 && (r.style = l);
          let u;
          return (
            Zf(s) &&
              (u = vr("generateAbstractTransformGrouping", {
                main: i,
                transform: s,
                containerWidth: i.width,
                iconWidth: i.width,
              })),
            n.push(u || i.icon),
            { children: n, attributes: r }
          );
        });
    },
  },
  lT = {
    mixout() {
      return {
        layer(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { classes: n = [] } = t;
          return Kl({ type: "layer" }, () => {
            Yr("beforeDOMElementCreation", { assembler: e, params: t });
            let r = [];
            return (
              e((i) => {
                Array.isArray(i)
                  ? i.map((s) => {
                      r = r.concat(s.abstract);
                    })
                  : (r = r.concat(i.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(H.cssPrefix, "-layers"), ...n].join(" "),
                  },
                  children: r,
                },
              ]
            );
          });
        },
      };
    },
  },
  uT = {
    mixout() {
      return {
        counter(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            title: n = null,
            classes: r = [],
            attributes: i = {},
            styles: s = {},
          } = t;
          return Kl(
            { type: "counter", content: e },
            () => (
              Yr("beforeDOMElementCreation", { content: e, params: t }),
              B6({
                content: e.toString(),
                title: n,
                extra: {
                  attributes: i,
                  styles: s,
                  classes: ["".concat(H.cssPrefix, "-layers-counter"), ...r],
                },
              })
            )
          );
        },
      };
    },
  },
  cT = {
    mixout() {
      return {
        text(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            transform: n = en,
            title: r = null,
            classes: i = [],
            attributes: s = {},
            styles: o = {},
          } = t;
          return Kl(
            { type: "text", content: e },
            () => (
              Yr("beforeDOMElementCreation", { content: e, params: t }),
              Sg({
                content: e,
                transform: { ...en, ...n },
                title: r,
                extra: {
                  attributes: s,
                  styles: o,
                  classes: ["".concat(H.cssPrefix, "-layers-text"), ...i],
                },
              })
            )
          );
        },
      };
    },
    provides(e) {
      e.generateLayersText = function (t, n) {
        const { title: r, transform: i, extra: s } = n;
        let o = null,
          l = null;
        if (j2) {
          const u = parseInt(getComputedStyle(t).fontSize, 10),
            c = t.getBoundingClientRect();
          (o = c.width / u), (l = c.height / u);
        }
        return (
          H.autoA11y && !r && (s.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            t,
            Sg({
              content: t.innerHTML,
              width: o,
              height: l,
              transform: i,
              title: r,
              extra: s,
              watchable: !0,
            }),
          ])
        );
      };
    },
  };
const dT = new RegExp('"', "ug"),
  Ig = [1105920, 1112319],
  Ng = { FontAwesome: { normal: "fas", 400: "fas" }, ...Gk, ...Wk, ...e6 },
  Ad = Object.keys(Ng).reduce((e, t) => ((e[t.toLowerCase()] = Ng[t]), e), {}),
  fT = Object.keys(Ad).reduce((e, t) => {
    const n = Ad[t];
    return (e[t] = n[900] || [...Object.entries(n)][0][1]), e;
  }, {});
function hT(e) {
  const t = e.replace(dT, ""),
    n = E6(t, 0),
    r = n >= Ig[0] && n <= Ig[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: xd(i ? t[0] : t), isSecondary: r || i };
}
function pT(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(),
    r = parseInt(t),
    i = isNaN(r) ? "normal" : r;
  return (Ad[n] || {})[i] || fT[n];
}
function Pg(e, t) {
  const n = "".concat(r6).concat(t.replace(":", "-"));
  return new Promise((r, i) => {
    if (e.getAttribute(n) !== null) return r();
    const o = Ji(e.children).filter((g) => g.getAttribute(wd) === t)[0],
      l = mr.getComputedStyle(e, t),
      u = l.getPropertyValue("font-family"),
      c = u.match(l6),
      h = l.getPropertyValue("font-weight"),
      m = l.getPropertyValue("content");
    if (o && !c) return e.removeChild(o), r();
    if (c && m !== "none" && m !== "") {
      const g = l.getPropertyValue("content");
      let y = pT(u, h);
      const { value: _, isSecondary: A } = hT(g),
        N = c[0].startsWith("FontAwesome");
      let C = eh(y, _),
        S = C;
      if (N) {
        const E = A6(_);
        E.iconName && E.prefix && ((C = E.iconName), (y = E.prefix));
      }
      if (
        C &&
        !A &&
        (!o || o.getAttribute(qf) !== y || o.getAttribute(Xf) !== S)
      ) {
        e.setAttribute(n, S), o && e.removeChild(o);
        const E = nT(),
          { extra: O } = E;
        (O.attributes[wd] = t),
          Id(C, y)
            .then((L) => {
              const D = nh({
                  ...E,
                  icons: { main: L, mask: th() },
                  prefix: y,
                  iconName: S,
                  extra: O,
                  watchable: !0,
                }),
                T = me.createElementNS("http://www.w3.org/2000/svg", "svg");
              t === "::before"
                ? e.insertBefore(T, e.firstChild)
                : e.appendChild(T),
                (T.outerHTML = D.map((v) => Po(v)).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(i);
      } else r();
    } else r();
  });
}
function mT(e) {
  return Promise.all([Pg(e, "::before"), Pg(e, "::after")]);
}
function gT(e) {
  return (
    e.parentNode !== document.head &&
    !~s6.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(wd) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function Ag(e) {
  if (jn)
    return new Promise((t, n) => {
      const r = Ji(e.querySelectorAll("*")).filter(gT).map(mT),
        i = rh.begin("searchPseudoElements");
      sy(),
        Promise.all(r)
          .then(() => {
            i(), Pd(), t();
          })
          .catch(() => {
            i(), Pd(), n();
          });
    });
}
var vT = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return (e.pseudoElementsCallback = Ag), e;
      },
    };
  },
  provides(e) {
    e.pseudoElements2svg = function (t) {
      const { node: n = me } = t;
      H.searchPseudoElements && Ag(n);
    };
  },
};
let Og = !1;
var yT = {
  mixout() {
    return {
      dom: {
        unwatch() {
          sy(), (Og = !0);
        },
      },
    };
  },
  hooks() {
    return {
      bootstrap() {
        kg(kd("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Z6();
      },
      watch(e) {
        const { observeMutationsRoot: t } = e;
        Og
          ? Pd()
          : kg(kd("mutationObserverCallbacks", { observeMutationsRoot: t }));
      },
    };
  },
};
const jg = (e) => {
  let t = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
  return e
    .toLowerCase()
    .split(" ")
    .reduce((n, r) => {
      const i = r.toLowerCase().split("-"),
        s = i[0];
      let o = i.slice(1).join("-");
      if (s && o === "h") return (n.flipX = !0), n;
      if (s && o === "v") return (n.flipY = !0), n;
      if (((o = parseFloat(o)), isNaN(o))) return n;
      switch (s) {
        case "grow":
          n.size = n.size + o;
          break;
        case "shrink":
          n.size = n.size - o;
          break;
        case "left":
          n.x = n.x - o;
          break;
        case "right":
          n.x = n.x + o;
          break;
        case "up":
          n.y = n.y - o;
          break;
        case "down":
          n.y = n.y + o;
          break;
        case "rotate":
          n.rotate = n.rotate + o;
          break;
      }
      return n;
    }, t);
};
var wT = {
  mixout() {
    return { parse: { transform: (e) => jg(e) } };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = jg(n)), e;
      },
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function (t) {
      let { main: n, transform: r, containerWidth: i, iconWidth: s } = t;
      const o = { transform: "translate(".concat(i / 2, " 256)") },
        l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "),
        u = "scale("
          .concat((r.size / 16) * (r.flipX ? -1 : 1), ", ")
          .concat((r.size / 16) * (r.flipY ? -1 : 1), ") "),
        c = "rotate(".concat(r.rotate, " 0 0)"),
        h = { transform: "".concat(l, " ").concat(u, " ").concat(c) },
        m = { transform: "translate(".concat((s / 2) * -1, " -256)") },
        g = { outer: o, inner: h, path: m };
      return {
        tag: "g",
        attributes: { ...g.outer },
        children: [
          {
            tag: "g",
            attributes: { ...g.inner },
            children: [
              {
                tag: n.icon.tag,
                children: n.icon.children,
                attributes: { ...n.icon.attributes, ...g.path },
              },
            ],
          },
        ],
      };
    };
  },
};
const lc = { x: 0, y: 0, width: "100%", height: "100%" };
function Lg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function _T(e) {
  return e.tag === "g" ? e.children : [e];
}
var ST = {
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          const n = t.getAttribute("data-fa-mask"),
            r = n ? Gl(n.split(" ").map((i) => i.trim())) : th();
          return (
            r.prefix || (r.prefix = gr()),
            (e.mask = r),
            (e.maskId = t.getAttribute("data-fa-mask-id")),
            e
          );
        },
      };
    },
    provides(e) {
      e.generateAbstractMask = function (t) {
        let {
          children: n,
          attributes: r,
          main: i,
          mask: s,
          maskId: o,
          transform: l,
        } = t;
        const { width: u, icon: c } = i,
          { width: h, icon: m } = s,
          g = y6({ transform: l, containerWidth: h, iconWidth: u }),
          y = { tag: "rect", attributes: { ...lc, fill: "white" } },
          _ = c.children ? { children: c.children.map(Lg) } : {},
          A = {
            tag: "g",
            attributes: { ...g.inner },
            children: [
              Lg({
                tag: c.tag,
                attributes: { ...c.attributes, ...g.path },
                ..._,
              }),
            ],
          },
          N = { tag: "g", attributes: { ...g.outer }, children: [A] },
          C = "mask-".concat(o || fo()),
          S = "clip-".concat(o || fo()),
          E = {
            tag: "mask",
            attributes: {
              ...lc,
              id: C,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse",
            },
            children: [y, N],
          },
          O = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: S }, children: _T(m) },
              E,
            ],
          };
        return (
          n.push(O, {
            tag: "rect",
            attributes: {
              fill: "currentColor",
              "clip-path": "url(#".concat(S, ")"),
              mask: "url(#".concat(C, ")"),
              ...lc,
            },
          }),
          { children: n, attributes: r }
        );
      };
    },
  },
  CT = {
    provides(e) {
      let t = !1;
      mr.matchMedia &&
        (t = mr.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (e.missingIconAbstract = function () {
          const n = [],
            r = { fill: "currentColor" },
            i = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          n.push({
            tag: "path",
            attributes: {
              ...r,
              d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
            },
          });
          const s = { ...i, attributeName: "opacity" },
            o = {
              tag: "circle",
              attributes: { ...r, cx: "256", cy: "364", r: "28" },
              children: [],
            };
          return (
            t ||
              o.children.push(
                {
                  tag: "animate",
                  attributes: {
                    ...i,
                    attributeName: "r",
                    values: "28;14;28;28;14;28;",
                  },
                },
                { tag: "animate", attributes: { ...s, values: "1;0;1;1;0;1;" } }
              ),
            n.push(o),
            n.push({
              tag: "path",
              attributes: {
                ...r,
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
              },
              children: t
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: { ...s, values: "1;0;0;0;0;1;" },
                    },
                  ],
            }),
            t ||
              n.push({
                tag: "path",
                attributes: {
                  ...r,
                  opacity: "0",
                  d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                },
                children: [
                  {
                    tag: "animate",
                    attributes: { ...s, values: "0;0;1;1;0;0;" },
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: n }
          );
        });
    },
  },
  xT = {
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          const n = t.getAttribute("data-fa-symbol"),
            r = n === null ? !1 : n === "" ? !0 : n;
          return (e.symbol = r), e;
        },
      };
    },
  },
  ET = [S6, aT, lT, uT, cT, vT, yT, wT, ST, CT, xT];
R6(ET, { mixoutsTo: kt });
kt.noAuto;
kt.config;
kt.library;
kt.dom;
const Od = kt.parse;
kt.findIconDefinition;
kt.toHtml;
const kT = kt.icon;
kt.layer;
kt.text;
kt.counter;
function Rg(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rg(Object(n), !0).forEach(function (r) {
          _i(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Rg(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function _l(e) {
  "@babel/helpers - typeof";
  return (
    (_l =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    _l(e)
  );
}
function _i(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function TT(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function bT(e, t) {
  if (e == null) return {};
  var n = TT(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function jd(e) {
  return IT(e) || NT(e) || PT(e) || AT();
}
function IT(e) {
  if (Array.isArray(e)) return Ld(e);
}
function NT(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function PT(e, t) {
  if (e) {
    if (typeof e == "string") return Ld(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ld(e, t);
  }
}
function Ld(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function AT() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OT(e) {
  var t,
    n = e.beat,
    r = e.fade,
    i = e.beatFade,
    s = e.bounce,
    o = e.shake,
    l = e.flash,
    u = e.spin,
    c = e.spinPulse,
    h = e.spinReverse,
    m = e.pulse,
    g = e.fixedWidth,
    y = e.inverse,
    _ = e.border,
    A = e.listItem,
    N = e.flip,
    C = e.size,
    S = e.rotation,
    E = e.pull,
    O =
      ((t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": i,
        "fa-bounce": s,
        "fa-shake": o,
        "fa-flash": l,
        "fa-spin": u,
        "fa-spin-reverse": h,
        "fa-spin-pulse": c,
        "fa-pulse": m,
        "fa-fw": g,
        "fa-inverse": y,
        "fa-border": _,
        "fa-li": A,
        "fa-flip": N === !0,
        "fa-flip-horizontal": N === "horizontal" || N === "both",
        "fa-flip-vertical": N === "vertical" || N === "both",
      }),
      _i(t, "fa-".concat(C), typeof C < "u" && C !== null),
      _i(t, "fa-rotate-".concat(S), typeof S < "u" && S !== null && S !== 0),
      _i(t, "fa-pull-".concat(E), typeof E < "u" && E !== null),
      _i(t, "fa-swap-opacity", e.swapOpacity),
      t);
  return Object.keys(O)
    .map(function (L) {
      return O[L] ? L : null;
    })
    .filter(function (L) {
      return L;
    });
}
function jT(e) {
  return (e = e - 0), e === e;
}
function ay(e) {
  return jT(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : "";
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var LT = ["style"];
function RT(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function MT(e) {
  return e
    .split(";")
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(":"),
        i = ay(n.slice(0, r)),
        s = n.slice(r + 1).trim();
      return i.startsWith("webkit") ? (t[RT(i)] = s) : (t[i] = s), t;
    }, {});
}
function ly(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string") return t;
  var r = (t.children || []).map(function (u) {
      return ly(e, u);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (u, c) {
        var h = t.attributes[c];
        switch (c) {
          case "class":
            (u.attrs.className = h), delete t.attributes.class;
            break;
          case "style":
            u.attrs.style = MT(h);
            break;
          default:
            c.indexOf("aria-") === 0 || c.indexOf("data-") === 0
              ? (u.attrs[c.toLowerCase()] = h)
              : (u.attrs[ay(c)] = h);
        }
        return u;
      },
      { attrs: {} }
    ),
    s = n.style,
    o = s === void 0 ? {} : s,
    l = bT(n, LT);
  return (
    (i.attrs.style = Jt(Jt({}, i.attrs.style), o)),
    e.apply(void 0, [t.tag, Jt(Jt({}, i.attrs), l)].concat(jd(r)))
  );
}
var uy = !1;
try {
  uy = !0;
} catch {}
function DT() {
  if (!uy && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Mg(e) {
  if (e && _l(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (Od.icon) return Od.icon(e);
  if (e === null) return null;
  if (e && _l(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == "string") return { prefix: "fas", iconName: e };
}
function uc(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? _i({}, e, t)
    : {};
}
var Dg = {
    border: !1,
    className: "",
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: null,
    transform: null,
    swapOpacity: !1,
  },
  sh = Pe.forwardRef(function (e, t) {
    var n = Jt(Jt({}, Dg), e),
      r = n.icon,
      i = n.mask,
      s = n.symbol,
      o = n.className,
      l = n.title,
      u = n.titleId,
      c = n.maskId,
      h = Mg(r),
      m = uc("classes", [].concat(jd(OT(n)), jd((o || "").split(" ")))),
      g = uc(
        "transform",
        typeof n.transform == "string" ? Od.transform(n.transform) : n.transform
      ),
      y = uc("mask", Mg(i)),
      _ = kT(
        h,
        Jt(
          Jt(Jt(Jt({}, m), g), y),
          {},
          { symbol: s, title: l, titleId: u, maskId: c }
        )
      );
    if (!_) return DT("Could not find icon", h), null;
    var A = _.abstract,
      N = { ref: t };
    return (
      Object.keys(n).forEach(function (C) {
        Dg.hasOwnProperty(C) || (N[C] = n[C]);
      }),
      FT(A[0], N)
    );
  });
sh.displayName = "FontAwesomeIcon";
sh.propTypes = {
  beat: Y.bool,
  border: Y.bool,
  beatFade: Y.bool,
  bounce: Y.bool,
  className: Y.string,
  fade: Y.bool,
  flash: Y.bool,
  mask: Y.oneOfType([Y.object, Y.array, Y.string]),
  maskId: Y.string,
  fixedWidth: Y.bool,
  inverse: Y.bool,
  flip: Y.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: Y.oneOfType([Y.object, Y.array, Y.string]),
  listItem: Y.bool,
  pull: Y.oneOf(["right", "left"]),
  pulse: Y.bool,
  rotation: Y.oneOf([0, 90, 180, 270]),
  shake: Y.bool,
  size: Y.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: Y.bool,
  spinPulse: Y.bool,
  spinReverse: Y.bool,
  symbol: Y.oneOfType([Y.bool, Y.string]),
  title: Y.string,
  titleId: Y.string,
  transform: Y.oneOfType([Y.string, Y.object]),
  swapOpacity: Y.bool,
};
var FT = ly.bind(null, Pe.createElement);
const UT = {
    prefix: "fas",
    iconName: "plus",
    icon: [
      448,
      512,
      [10133, 61543, "add"],
      "2b",
      "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z",
    ],
  },
  zT = "/assets/user-_rRnVC0H.png";
function $T() {
  const { id: e } = H4(),
    [t, n] = R.useState(!1),
    [r, i] = R.useState(41),
    [s, o] = R.useState({ comment: "" }),
    [l, u] = R.useState("about"),
    [c, h] = R.useState([]),
    m = parseInt(e);
  R.useEffect(() => {
    Wt.init({ duration: 600 });
  }, []),
    R.useEffect(() => {
      const O = [...al].sort(() => 0.5 - Math.random());
      h(O.slice(0, 3));
    }, []);
  let g = mv.find((O) => O.id === m);
  if ((g || (g = vv.find((O) => O.id === m)), !g))
    return f.jsx("h2", { children: "Товар не найден" });
  const [y, _] = R.useState(() => {
      const O = localStorage.getItem(`reviews-${m}`);
      return O ? JSON.parse(O) : g.reviews;
    }),
    A = () => {
      const O = JSON.parse(localStorage.getItem("cart")) || [],
        L = { img: g.img, title: g.title, price: g.price, size: r };
      O.push(L),
        localStorage.setItem("cart", JSON.stringify(O)),
        n(!0),
        setTimeout(() => {
          n(!1);
        }, 3e3);
    },
    N = (O) => {
      i(O);
    },
    C = (O) => {
      const { name: L, value: D } = O.target;
      o((T) => ({ ...T, [L]: D }));
    },
    S = (O) => {
      var D;
      O.preventDefault();
      const L =
        ((D = fr == null ? void 0 : fr.currentUser) == null
          ? void 0
          : D.displayName) || "Anonymous";
      if (s.comment) {
        const T = [{ name: L, comment: s.comment }, ...y];
        _(T),
          localStorage.setItem(`reviews-${m}`, JSON.stringify(T)),
          o({ comment: "" });
      }
    },
    E = (O) => {
      u(O);
    };
  return f.jsx("section", {
    className: "SneakerDetail",
    children: f.jsxs(De, {
      className: "SneakerDetail__container",
      children: [
        f.jsxs("div", {
          className: "SneakerDetail__pageCont",
          "data-aos": "fade-down",
          children: [
            f.jsx("div", {
              className: "SneakerDetail__img",
              children: f.jsx("img", { src: g.img, alt: g.title }),
            }),
            f.jsxs("div", {
              className: "SneakerDetail__text",
              children: [
                f.jsxs("div", {
                  className: "SneakerDetail__textTitleBlock",
                  children: [
                    f.jsx("h2", {
                      className: "SneakerDetail__cardTitle",
                      children: g.title,
                    }),
                    f.jsxs("div", {
                      className: "SneakerDetail__cardRating",
                      children: [
                        f.jsx("span", { children: "Размер:" }),
                        f.jsx("div", {
                          className: "SneakerDetail__sizes",
                          children: [41, 42, 43, 44, 45].map((O) =>
                            f.jsx(
                              "div",
                              {
                                className: `SneakerDetail__size ${
                                  r === O ? "active" : ""
                                }`,
                                onClick: () => N(O),
                                children: f.jsx("span", { children: O }),
                              },
                              O
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsxs("div", {
                  className: "SneakerDetail__cardPrice",
                  children: [
                    f.jsxs("span", { children: [g.price, "₽"] }),
                    f.jsx("button", {
                      onClick: A,
                      children: f.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "22px",
                        width: "22px",
                        viewBox: "0 0 576 512",
                        children: f.jsx("path", {
                          fill: "#ffffff",
                          d: "M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        f.jsxs("div", {
          className: "SneakerDetail__choiceBtns",
          children: [
            f.jsx("div", {
              className: `SneakerDetail__choiceBtn ${
                l === "about" ? "active" : ""
              }`,
              onClick: () => E("about"),
              children: f.jsx("span", { children: " О товаре" }),
            }),
            f.jsx("div", {
              className: `SneakerDetail__choiceBtn ${
                l === "reviews" ? "active" : ""
              }`,
              onClick: () => E("reviews"),
              children: f.jsx("span", { children: " Отзывы" }),
            }),
          ],
        }),
        l === "about" &&
          f.jsxs("div", {
            className: "SneakerDetail__aboutItem",
            "data-aos": "fade-right",
            children: [
              f.jsx("h3", { children: "О кроссовках" }),
              f.jsx("p", { children: g.description }),
            ],
          }),
        l === "reviews" &&
          f.jsxs("div", {
            className: "SneakerDetail__reviews",
            "data-aos": "fade-right",
            children: [
              f.jsx("h4", { children: "Оставить отзыв" }),
              f.jsxs("form", {
                className: "SneakerDetail__reviewForm",
                onSubmit: S,
                children: [
                  f.jsx("input", {
                    name: "comment",
                    placeholder: "Ваш отзыв",
                    value: s.comment,
                    onChange: C,
                    required: !0,
                  }),
                  f.jsx("button", {
                    type: "submit",
                    children: f.jsx(sh, {
                      icon: UT,
                      style: { color: "#ffff" },
                    }),
                  }),
                ],
              }),
              y.map((O, L) =>
                f.jsxs(
                  "div",
                  {
                    className: "SneakerDetail__reviewsItem",
                    children: [
                      f.jsx("div", {
                        className: "SneakerDetail__reviewsItemImg",
                        children: f.jsx("img", { src: zT, alt: O.name }),
                      }),
                      f.jsxs("div", {
                        className: "SneakerDetail__reviewsItemText",
                        children: [
                          f.jsx("div", {
                            className: "SneakerDetail__reviewsItemTitle",
                            children: O.name,
                          }),
                          f.jsx("div", {
                            className: "SneakerDetail__reviewsItemDis",
                            children: O.comment,
                          }),
                        ],
                      }),
                    ],
                  },
                  L
                )
              ),
            ],
          }),
        f.jsxs("div", {
          className: "SneakerDetail__likes",
          children: [
            f.jsx("div", {
              className: "SneakerDetail__likeTitle",
              children: "Вам также могут понравиться:",
            }),
            f.jsx(Jr, {
              className: "sneaker__row",
              children: c.map((O) => f.jsx(_o, { ...O }, O.id)),
            }),
          ],
        }),
        t &&
          f.jsx("div", {
            className: "SneakerDetail__notification",
            "data-aos": "fade-left",
            children: "Товар добавлен в корзину!",
          }),
      ],
    }),
  });
}
function BT() {
  const [e, t] = R.useState(null),
    n = wo();
  R.useEffect(() => {
    const i = fr.onAuthStateChanged((s) => {
      s ? t(s) : n("/");
    });
    return () => i();
  }, [n]);
  const r = async () => {
    try {
      await Ax(fr), n("/log");
    } catch (i) {
      console.error("Ошибка при выходе: ", i);
    }
  };
  return e
    ? f.jsx(f.Fragment, {
        children: f.jsxs(De, {
          children: [
            f.jsx("h1", { children: "Профиль пользователя" }),
            f.jsxs("p", {
              children: ["Добро пожаловать, ", e.displayName || e.email, "!"],
            }),
            f.jsx("button", { onClick: r, children: "Выйти" }),
          ],
        }),
      })
    : null;
}
function VT() {
  return (
    ln(),
    f.jsxs(f.Fragment, {
      children: [
        f.jsx(J3, {}),
        f.jsx(A3, {}),
        f.jsx("main", {
          children: f.jsxs(i3, {
            children: [
              f.jsx(bt, { path: "/", element: f.jsx($3, {}) }),
              f.jsx(bt, { path: "/men", element: f.jsx(H3, {}) }),
              f.jsx(bt, { path: "/women", element: f.jsx(K3, {}) }),
              f.jsx(bt, { path: "/basket", element: f.jsx(X3, {}) }),
              f.jsx(bt, { path: "/log", element: f.jsx(d5, {}) }),
              f.jsx(bt, { path: "/reg", element: f.jsx(h5, {}) }),
              f.jsx(bt, { path: "/AboutUs", element: f.jsx(m5, {}) }),
              f.jsx(bt, { path: "/checkout", element: f.jsx(g5, {}) }),
              f.jsx(bt, { path: "/new-featured", element: f.jsx(Uk, {}) }),
              f.jsx(bt, { path: "/sneaker/:id", element: f.jsx($T, {}) }),
              f.jsx(bt, { path: "/profile", element: f.jsx(BT, {}) }),
            ],
          }),
        }),
        f.jsx(O3, {}),
      ],
    })
  );
}
cc.createRoot(document.getElementById("root")).render(
  f.jsx(f3, { children: f.jsx(VT, {}) })
);
