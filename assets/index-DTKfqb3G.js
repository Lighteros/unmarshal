function r1(e, t) {
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
function i1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var d0 = { exports: {} },
  Is = {},
  f0 = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var li = Symbol.for("react.element"),
  s1 = Symbol.for("react.portal"),
  o1 = Symbol.for("react.fragment"),
  l1 = Symbol.for("react.strict_mode"),
  a1 = Symbol.for("react.profiler"),
  u1 = Symbol.for("react.provider"),
  c1 = Symbol.for("react.context"),
  d1 = Symbol.for("react.forward_ref"),
  f1 = Symbol.for("react.suspense"),
  h1 = Symbol.for("react.memo"),
  p1 = Symbol.for("react.lazy"),
  Ru = Symbol.iterator;
function m1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ru && e[Ru]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var h0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  p0 = Object.assign,
  m0 = {};
function or(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = m0),
    (this.updater = n || h0);
}
or.prototype.isReactComponent = {};
or.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
or.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function g0() {}
g0.prototype = or.prototype;
function ma(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = m0),
    (this.updater = n || h0);
}
var ga = (ma.prototype = new g0());
ga.constructor = ma;
p0(ga, or.prototype);
ga.isPureReactComponent = !0;
var Du = Array.isArray,
  x0 = Object.prototype.hasOwnProperty,
  xa = { current: null },
  v0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function y0(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      x0.call(t, r) && !v0.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: li,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: xa.current,
  };
}
function g1(e, t) {
  return {
    $$typeof: li,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function va(e) {
  return typeof e == "object" && e !== null && e.$$typeof === li;
}
function x1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Fu = /\/+/g;
function xo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? x1("" + e.key)
    : t.toString(36);
}
function Ui(e, t, n, r, i) {
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
          case li:
          case s1:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + xo(o, 0) : r),
      Du(i)
        ? ((n = ""),
          e != null && (n = e.replace(Fu, "$&/") + "/"),
          Ui(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (va(i) &&
            (i = g1(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Fu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Du(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var u = r + xo(s, a);
      o += Ui(s, t, n, u, i);
    }
  else if (((u = m1(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (u = r + xo(s, a++)), (o += Ui(s, t, n, u, i));
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
function wi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ui(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function v1(e) {
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
var Ne = { current: null },
  Hi = { transition: null },
  y1 = {
    ReactCurrentDispatcher: Ne,
    ReactCurrentBatchConfig: Hi,
    ReactCurrentOwner: xa,
  };
function w0() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = {
  map: wi,
  forEach: function (e, t, n) {
    wi(
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
      wi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!va(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = or;
B.Fragment = o1;
B.Profiler = a1;
B.PureComponent = ma;
B.StrictMode = l1;
B.Suspense = f1;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = y1;
B.act = w0;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = p0({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = xa.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      x0.call(t, u) &&
        !v0.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: li, type: e.type, key: i, ref: s, props: r, _owner: o };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: c1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: u1, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = y0;
B.createFactory = function (e) {
  var t = y0.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: d1, render: e };
};
B.isValidElement = va;
B.lazy = function (e) {
  return { $$typeof: p1, _payload: { _status: -1, _result: e }, _init: v1 };
};
B.memo = function (e, t) {
  return { $$typeof: h1, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = Hi.transition;
  Hi.transition = {};
  try {
    e();
  } finally {
    Hi.transition = t;
  }
};
B.unstable_act = w0;
B.useCallback = function (e, t) {
  return Ne.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Ne.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Ne.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Ne.current.useEffect(e, t);
};
B.useId = function () {
  return Ne.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return Ne.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return Ne.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Ne.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Ne.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return Ne.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return Ne.current.useRef(e);
};
B.useState = function (e) {
  return Ne.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return Ne.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return Ne.current.useTransition();
};
B.version = "18.3.1";
f0.exports = B;
var C = f0.exports;
const ai = i1(C),
  w1 = r1({ __proto__: null, default: ai }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var C1 = C,
  k1 = Symbol.for("react.element"),
  j1 = Symbol.for("react.fragment"),
  S1 = Object.prototype.hasOwnProperty,
  P1 = C1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  E1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function C0(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) S1.call(t, r) && !E1.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: k1,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: P1.current,
  };
}
Is.Fragment = j1;
Is.jsx = C0;
Is.jsxs = C0;
d0.exports = Is;
var l = d0.exports,
  sl = {},
  k0 = { exports: {} },
  ze = {},
  j0 = { exports: {} },
  S0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, V) {
    var D = T.length;
    T.push(V);
    e: for (; 0 < D; ) {
      var N = (D - 1) >>> 1,
        F = T[N];
      if (0 < i(F, V)) (T[N] = V), (T[D] = F), (D = N);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var V = T[0],
      D = T.pop();
    if (D !== V) {
      T[0] = D;
      e: for (var N = 0, F = T.length, H = F >>> 1; N < H; ) {
        var W = 2 * (N + 1) - 1,
          He = T[W],
          ce = W + 1,
          Te = T[ce];
        if (0 > i(He, D))
          ce < F && 0 > i(Te, He)
            ? ((T[N] = Te), (T[ce] = D), (N = ce))
            : ((T[N] = He), (T[W] = D), (N = W));
        else if (ce < F && 0 > i(Te, D)) (T[N] = Te), (T[ce] = D), (N = ce);
        else break e;
      }
    }
    return V;
  }
  function i(T, V) {
    var D = T.sortIndex - V.sortIndex;
    return D !== 0 ? D : T.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    c = [],
    d = 1,
    f = null,
    h = 3,
    g = !1,
    v = !1,
    y = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    x = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(T) {
    for (var V = n(c); V !== null; ) {
      if (V.callback === null) r(c);
      else if (V.startTime <= T)
        r(c), (V.sortIndex = V.expirationTime), t(u, V);
      else break;
      V = n(c);
    }
  }
  function w(T) {
    if (((y = !1), m(T), !v))
      if (n(u) !== null) (v = !0), G(j);
      else {
        var V = n(c);
        V !== null && ve(w, V.startTime - T);
      }
  }
  function j(T, V) {
    (v = !1), y && ((y = !1), x(S), (S = -1)), (g = !0);
    var D = h;
    try {
      for (
        m(V), f = n(u);
        f !== null && (!(f.expirationTime > V) || (T && !X()));

      ) {
        var N = f.callback;
        if (typeof N == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var F = N(f.expirationTime <= V);
          (V = e.unstable_now()),
            typeof F == "function" ? (f.callback = F) : f === n(u) && r(u),
            m(V);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var H = !0;
      else {
        var W = n(c);
        W !== null && ve(w, W.startTime - V), (H = !1);
      }
      return H;
    } finally {
      (f = null), (h = D), (g = !1);
    }
  }
  var L = !1,
    P = null,
    S = -1,
    A = 5,
    _ = -1;
  function X() {
    return !(e.unstable_now() - _ < A);
  }
  function b() {
    if (P !== null) {
      var T = e.unstable_now();
      _ = T;
      var V = !0;
      try {
        V = P(!0, T);
      } finally {
        V ? Q() : ((L = !1), (P = null));
      }
    } else L = !1;
  }
  var Q;
  if (typeof p == "function")
    Q = function () {
      p(b);
    };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(),
      he = I.port2;
    (I.port1.onmessage = b),
      (Q = function () {
        he.postMessage(null);
      });
  } else
    Q = function () {
      k(b, 0);
    };
  function G(T) {
    (P = T), L || ((L = !0), Q());
  }
  function ve(T, V) {
    S = k(function () {
      T(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || g || ((v = !0), G(j));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (T) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = h;
      }
      var D = h;
      h = V;
      try {
        return T();
      } finally {
        h = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, V) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var D = h;
      h = T;
      try {
        return V();
      } finally {
        h = D;
      }
    }),
    (e.unstable_scheduleCallback = function (T, V, D) {
      var N = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? N + D : N))
          : (D = N),
        T)
      ) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return (
        (F = D + F),
        (T = {
          id: d++,
          callback: V,
          priorityLevel: T,
          startTime: D,
          expirationTime: F,
          sortIndex: -1,
        }),
        D > N
          ? ((T.sortIndex = D),
            t(c, T),
            n(u) === null &&
              T === n(c) &&
              (y ? (x(S), (S = -1)) : (y = !0), ve(w, D - N)))
          : ((T.sortIndex = F), t(u, T), v || g || ((v = !0), G(j))),
        T
      );
    }),
    (e.unstable_shouldYield = X),
    (e.unstable_wrapCallback = function (T) {
      var V = h;
      return function () {
        var D = h;
        h = V;
        try {
          return T.apply(this, arguments);
        } finally {
          h = D;
        }
      };
    });
})(S0);
j0.exports = S0;
var N1 = j0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var L1 = C,
  Oe = N1;
function E(e) {
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
var P0 = new Set(),
  Ur = {};
function kn(e, t) {
  Qn(e, t), Qn(e + "Capture", t);
}
function Qn(e, t) {
  for (Ur[e] = t, e = 0; e < t.length; e++) P0.add(t[e]);
}
var jt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ol = Object.prototype.hasOwnProperty,
  T1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bu = {},
  Bu = {};
function M1(e) {
  return ol.call(Bu, e)
    ? !0
    : ol.call(bu, e)
    ? !1
    : T1.test(e)
    ? (Bu[e] = !0)
    : ((bu[e] = !0), !1);
}
function A1(e, t, n, r) {
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
function V1(e, t, n, r) {
  if (t === null || typeof t > "u" || A1(e, t, n, r)) return !0;
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
function Le(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Le(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  xe[t] = new Le(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  xe[e] = new Le(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  xe[e] = new Le(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Le(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  xe[e] = new Le(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  xe[e] = new Le(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  xe[e] = new Le(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  xe[e] = new Le(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ya = /[\-:]([a-z])/g;
function wa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ya, wa);
    xe[t] = new Le(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ya, wa);
    xe[t] = new Le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ya, wa);
  xe[t] = new Le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  xe[e] = new Le(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new Le(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  xe[e] = new Le(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ca(e, t, n, r) {
  var i = xe.hasOwnProperty(t) ? xe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (V1(t, n, i, r) && (n = null),
    r || i === null
      ? M1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Nt = L1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ci = Symbol.for("react.element"),
  Ln = Symbol.for("react.portal"),
  Tn = Symbol.for("react.fragment"),
  ka = Symbol.for("react.strict_mode"),
  ll = Symbol.for("react.profiler"),
  E0 = Symbol.for("react.provider"),
  N0 = Symbol.for("react.context"),
  ja = Symbol.for("react.forward_ref"),
  al = Symbol.for("react.suspense"),
  ul = Symbol.for("react.suspense_list"),
  Sa = Symbol.for("react.memo"),
  Vt = Symbol.for("react.lazy"),
  L0 = Symbol.for("react.offscreen"),
  Ou = Symbol.iterator;
function cr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ou && e[Ou]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var te = Object.assign,
  vo;
function Cr(e) {
  if (vo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      vo = (t && t[1]) || "";
    }
  return (
    `
` +
    vo +
    e
  );
}
var yo = !1;
function wo(e, t) {
  if (!e || yo) return "";
  yo = !0;
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
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
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
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (yo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Cr(e) : "";
}
function _1(e) {
  switch (e.tag) {
    case 5:
      return Cr(e.type);
    case 16:
      return Cr("Lazy");
    case 13:
      return Cr("Suspense");
    case 19:
      return Cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = wo(e.type, !1)), e;
    case 11:
      return (e = wo(e.type.render, !1)), e;
    case 1:
      return (e = wo(e.type, !0)), e;
    default:
      return "";
  }
}
function cl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Tn:
      return "Fragment";
    case Ln:
      return "Portal";
    case ll:
      return "Profiler";
    case ka:
      return "StrictMode";
    case al:
      return "Suspense";
    case ul:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case N0:
        return (e.displayName || "Context") + ".Consumer";
      case E0:
        return (e._context.displayName || "Context") + ".Provider";
      case ja:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Sa:
        return (
          (t = e.displayName || null), t !== null ? t : cl(e.type) || "Memo"
        );
      case Vt:
        (t = e._payload), (e = e._init);
        try {
          return cl(e(t));
        } catch {}
    }
  return null;
}
function R1(e) {
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
      return cl(t);
    case 8:
      return t === ka ? "StrictMode" : "Mode";
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
function Kt(e) {
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
function T0(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function D1(e) {
  var t = T0(e) ? "checked" : "value",
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
function ki(e) {
  e._valueTracker || (e._valueTracker = D1(e));
}
function M0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = T0(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ss(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function dl(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Iu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function A0(e, t) {
  (t = t.checked), t != null && Ca(e, "checked", t, !1);
}
function fl(e, t) {
  A0(e, t);
  var n = Kt(t.value),
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
    ? hl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && hl(e, t.type, Kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function zu(e, t, n) {
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
function hl(e, t, n) {
  (t !== "number" || ss(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var kr = Array.isArray;
function Wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Kt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function pl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Uu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (kr(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Kt(n) };
}
function V0(e, t) {
  var n = Kt(t.value),
    r = Kt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Hu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function _0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ml(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? _0(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ji,
  R0 = (function (e) {
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
        ji = ji || document.createElement("div"),
          ji.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ji.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Hr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Er = {
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
  F1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Er).forEach(function (e) {
  F1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Er[t] = Er[e]);
  });
});
function D0(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Er.hasOwnProperty(e) && Er[e])
    ? ("" + t).trim()
    : t + "px";
}
function F0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = D0(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var b1 = te(
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
function gl(e, t) {
  if (t) {
    if (b1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function xl(e, t) {
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
var vl = null;
function Pa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var yl = null,
  $n = null,
  Gn = null;
function Wu(e) {
  if ((e = di(e))) {
    if (typeof yl != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = $s(t)), yl(e.stateNode, e.type, t));
  }
}
function b0(e) {
  $n ? (Gn ? Gn.push(e) : (Gn = [e])) : ($n = e);
}
function B0() {
  if ($n) {
    var e = $n,
      t = Gn;
    if (((Gn = $n = null), Wu(e), t)) for (e = 0; e < t.length; e++) Wu(t[e]);
  }
}
function O0(e, t) {
  return e(t);
}
function I0() {}
var Co = !1;
function z0(e, t, n) {
  if (Co) return e(t, n);
  Co = !0;
  try {
    return O0(e, t, n);
  } finally {
    (Co = !1), ($n !== null || Gn !== null) && (I0(), B0());
  }
}
function Wr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = $s(n);
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
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var wl = !1;
if (jt)
  try {
    var dr = {};
    Object.defineProperty(dr, "passive", {
      get: function () {
        wl = !0;
      },
    }),
      window.addEventListener("test", dr, dr),
      window.removeEventListener("test", dr, dr);
  } catch {
    wl = !1;
  }
function B1(e, t, n, r, i, s, o, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Nr = !1,
  os = null,
  ls = !1,
  Cl = null,
  O1 = {
    onError: function (e) {
      (Nr = !0), (os = e);
    },
  };
function I1(e, t, n, r, i, s, o, a, u) {
  (Nr = !1), (os = null), B1.apply(O1, arguments);
}
function z1(e, t, n, r, i, s, o, a, u) {
  if ((I1.apply(this, arguments), Nr)) {
    if (Nr) {
      var c = os;
      (Nr = !1), (os = null);
    } else throw Error(E(198));
    ls || ((ls = !0), (Cl = c));
  }
}
function jn(e) {
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
function U0(e) {
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
function $u(e) {
  if (jn(e) !== e) throw Error(E(188));
}
function U1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jn(e)), t === null)) throw Error(E(188));
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
        if (s === n) return $u(i), e;
        if (s === r) return $u(i), t;
        s = s.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function H0(e) {
  return (e = U1(e)), e !== null ? W0(e) : null;
}
function W0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = W0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $0 = Oe.unstable_scheduleCallback,
  Gu = Oe.unstable_cancelCallback,
  H1 = Oe.unstable_shouldYield,
  W1 = Oe.unstable_requestPaint,
  se = Oe.unstable_now,
  $1 = Oe.unstable_getCurrentPriorityLevel,
  Ea = Oe.unstable_ImmediatePriority,
  G0 = Oe.unstable_UserBlockingPriority,
  as = Oe.unstable_NormalPriority,
  G1 = Oe.unstable_LowPriority,
  Z0 = Oe.unstable_IdlePriority,
  zs = null,
  ct = null;
function Z1(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(zs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var rt = Math.clz32 ? Math.clz32 : X1,
  Y1 = Math.log,
  K1 = Math.LN2;
function X1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Y1(e) / K1) | 0)) | 0;
}
var Si = 64,
  Pi = 4194304;
function jr(e) {
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
function us(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = jr(a)) : ((s &= o), s !== 0 && (r = jr(s)));
  } else (o = n & ~i), o !== 0 ? (r = jr(o)) : s !== 0 && (r = jr(s));
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
      (n = 31 - rt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Q1(e, t) {
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
function q1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - rt(s),
      a = 1 << o,
      u = i[o];
    u === -1
      ? (!(a & n) || a & r) && (i[o] = Q1(a, t))
      : u <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function kl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Y0() {
  var e = Si;
  return (Si <<= 1), !(Si & 4194240) && (Si = 64), e;
}
function ko(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ui(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rt(t)),
    (e[t] = n);
}
function J1(e, t) {
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
    var i = 31 - rt(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function Na(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - rt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var U = 0;
function K0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var X0,
  La,
  Q0,
  q0,
  J0,
  jl = !1,
  Ei = [],
  It = null,
  zt = null,
  Ut = null,
  $r = new Map(),
  Gr = new Map(),
  Dt = [],
  ep =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Zu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      It = null;
      break;
    case "dragenter":
    case "dragleave":
      zt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ut = null;
      break;
    case "pointerover":
    case "pointerout":
      $r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gr.delete(t.pointerId);
  }
}
function fr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = di(t)), t !== null && La(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function tp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (It = fr(It, e, t, n, r, i)), !0;
    case "dragenter":
      return (zt = fr(zt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Ut = fr(Ut, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return $r.set(s, fr($r.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Gr.set(s, fr(Gr.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function e2(e) {
  var t = cn(e.target);
  if (t !== null) {
    var n = jn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = U0(n)), t !== null)) {
          (e.blockedOn = t),
            J0(e.priority, function () {
              Q0(n);
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
function Wi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Sl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (vl = r), n.target.dispatchEvent(r), (vl = null);
    } else return (t = di(n)), t !== null && La(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Yu(e, t, n) {
  Wi(e) && n.delete(t);
}
function np() {
  (jl = !1),
    It !== null && Wi(It) && (It = null),
    zt !== null && Wi(zt) && (zt = null),
    Ut !== null && Wi(Ut) && (Ut = null),
    $r.forEach(Yu),
    Gr.forEach(Yu);
}
function hr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    jl ||
      ((jl = !0),
      Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, np)));
}
function Zr(e) {
  function t(i) {
    return hr(i, e);
  }
  if (0 < Ei.length) {
    hr(Ei[0], e);
    for (var n = 1; n < Ei.length; n++) {
      var r = Ei[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    It !== null && hr(It, e),
      zt !== null && hr(zt, e),
      Ut !== null && hr(Ut, e),
      $r.forEach(t),
      Gr.forEach(t),
      n = 0;
    n < Dt.length;
    n++
  )
    (r = Dt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
    e2(n), n.blockedOn === null && Dt.shift();
}
var Zn = Nt.ReactCurrentBatchConfig,
  cs = !0;
function rp(e, t, n, r) {
  var i = U,
    s = Zn.transition;
  Zn.transition = null;
  try {
    (U = 1), Ta(e, t, n, r);
  } finally {
    (U = i), (Zn.transition = s);
  }
}
function ip(e, t, n, r) {
  var i = U,
    s = Zn.transition;
  Zn.transition = null;
  try {
    (U = 4), Ta(e, t, n, r);
  } finally {
    (U = i), (Zn.transition = s);
  }
}
function Ta(e, t, n, r) {
  if (cs) {
    var i = Sl(e, t, n, r);
    if (i === null) Vo(e, t, r, ds, n), Zu(e, r);
    else if (tp(i, e, t, n, r)) r.stopPropagation();
    else if ((Zu(e, r), t & 4 && -1 < ep.indexOf(e))) {
      for (; i !== null; ) {
        var s = di(i);
        if (
          (s !== null && X0(s),
          (s = Sl(e, t, n, r)),
          s === null && Vo(e, t, r, ds, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Vo(e, t, r, null, n);
  }
}
var ds = null;
function Sl(e, t, n, r) {
  if (((ds = null), (e = Pa(r)), (e = cn(e)), e !== null))
    if (((t = jn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = U0(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ds = e), null;
}
function t2(e) {
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
      switch ($1()) {
        case Ea:
          return 1;
        case G0:
          return 4;
        case as:
        case G1:
          return 16;
        case Z0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var bt = null,
  Ma = null,
  $i = null;
function n2() {
  if ($i) return $i;
  var e,
    t = Ma,
    n = t.length,
    r,
    i = "value" in bt ? bt.value : bt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return ($i = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Gi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ni() {
  return !0;
}
function Ku() {
  return !1;
}
function Ue(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ni
        : Ku),
      (this.isPropagationStopped = Ku),
      this
    );
  }
  return (
    te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ni));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ni));
      },
      persist: function () {},
      isPersistent: Ni,
    }),
    t
  );
}
var lr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Aa = Ue(lr),
  ci = te({}, lr, { view: 0, detail: 0 }),
  sp = Ue(ci),
  jo,
  So,
  pr,
  Us = te({}, ci, {
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
    getModifierState: Va,
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
        : (e !== pr &&
            (pr && e.type === "mousemove"
              ? ((jo = e.screenX - pr.screenX), (So = e.screenY - pr.screenY))
              : (So = jo = 0),
            (pr = e)),
          jo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : So;
    },
  }),
  Xu = Ue(Us),
  op = te({}, Us, { dataTransfer: 0 }),
  lp = Ue(op),
  ap = te({}, ci, { relatedTarget: 0 }),
  Po = Ue(ap),
  up = te({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cp = Ue(up),
  dp = te({}, lr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  fp = Ue(dp),
  hp = te({}, lr, { data: 0 }),
  Qu = Ue(hp),
  pp = {
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
  mp = {
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
  gp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function xp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gp[e]) ? !!t[e] : !1;
}
function Va() {
  return xp;
}
var vp = te({}, ci, {
    key: function (e) {
      if (e.key) {
        var t = pp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Gi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? mp[e.keyCode] || "Unidentified"
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
    getModifierState: Va,
    charCode: function (e) {
      return e.type === "keypress" ? Gi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Gi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  yp = Ue(vp),
  wp = te({}, Us, {
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
  qu = Ue(wp),
  Cp = te({}, ci, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Va,
  }),
  kp = Ue(Cp),
  jp = te({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sp = Ue(jp),
  Pp = te({}, Us, {
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
  Ep = Ue(Pp),
  Np = [9, 13, 27, 32],
  _a = jt && "CompositionEvent" in window,
  Lr = null;
jt && "documentMode" in document && (Lr = document.documentMode);
var Lp = jt && "TextEvent" in window && !Lr,
  r2 = jt && (!_a || (Lr && 8 < Lr && 11 >= Lr)),
  Ju = " ",
  ec = !1;
function i2(e, t) {
  switch (e) {
    case "keyup":
      return Np.indexOf(t.keyCode) !== -1;
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
function s2(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Mn = !1;
function Tp(e, t) {
  switch (e) {
    case "compositionend":
      return s2(t);
    case "keypress":
      return t.which !== 32 ? null : ((ec = !0), Ju);
    case "textInput":
      return (e = t.data), e === Ju && ec ? null : e;
    default:
      return null;
  }
}
function Mp(e, t) {
  if (Mn)
    return e === "compositionend" || (!_a && i2(e, t))
      ? ((e = n2()), ($i = Ma = bt = null), (Mn = !1), e)
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
      return r2 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ap = {
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
function tc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ap[e.type] : t === "textarea";
}
function o2(e, t, n, r) {
  b0(r),
    (t = fs(t, "onChange")),
    0 < t.length &&
      ((n = new Aa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Tr = null,
  Yr = null;
function Vp(e) {
  x2(e, 0);
}
function Hs(e) {
  var t = _n(e);
  if (M0(t)) return e;
}
function _p(e, t) {
  if (e === "change") return t;
}
var l2 = !1;
if (jt) {
  var Eo;
  if (jt) {
    var No = "oninput" in document;
    if (!No) {
      var nc = document.createElement("div");
      nc.setAttribute("oninput", "return;"),
        (No = typeof nc.oninput == "function");
    }
    Eo = No;
  } else Eo = !1;
  l2 = Eo && (!document.documentMode || 9 < document.documentMode);
}
function rc() {
  Tr && (Tr.detachEvent("onpropertychange", a2), (Yr = Tr = null));
}
function a2(e) {
  if (e.propertyName === "value" && Hs(Yr)) {
    var t = [];
    o2(t, Yr, e, Pa(e)), z0(Vp, t);
  }
}
function Rp(e, t, n) {
  e === "focusin"
    ? (rc(), (Tr = t), (Yr = n), Tr.attachEvent("onpropertychange", a2))
    : e === "focusout" && rc();
}
function Dp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Hs(Yr);
}
function Fp(e, t) {
  if (e === "click") return Hs(t);
}
function bp(e, t) {
  if (e === "input" || e === "change") return Hs(t);
}
function Bp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var st = typeof Object.is == "function" ? Object.is : Bp;
function Kr(e, t) {
  if (st(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ol.call(t, i) || !st(e[i], t[i])) return !1;
  }
  return !0;
}
function ic(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function sc(e, t) {
  var n = ic(e);
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
    n = ic(n);
  }
}
function u2(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? u2(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function c2() {
  for (var e = window, t = ss(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ss(e.document);
  }
  return t;
}
function Ra(e) {
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
function Op(e) {
  var t = c2(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    u2(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ra(n)) {
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
          (i = sc(n, s));
        var o = sc(n, r);
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
var Ip = jt && "documentMode" in document && 11 >= document.documentMode,
  An = null,
  Pl = null,
  Mr = null,
  El = !1;
function oc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  El ||
    An == null ||
    An !== ss(r) ||
    ((r = An),
    "selectionStart" in r && Ra(r)
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
    (Mr && Kr(Mr, r)) ||
      ((Mr = r),
      (r = fs(Pl, "onSelect")),
      0 < r.length &&
        ((t = new Aa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = An))));
}
function Li(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Vn = {
    animationend: Li("Animation", "AnimationEnd"),
    animationiteration: Li("Animation", "AnimationIteration"),
    animationstart: Li("Animation", "AnimationStart"),
    transitionend: Li("Transition", "TransitionEnd"),
  },
  Lo = {},
  d2 = {};
jt &&
  ((d2 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vn.animationend.animation,
    delete Vn.animationiteration.animation,
    delete Vn.animationstart.animation),
  "TransitionEvent" in window || delete Vn.transitionend.transition);
function Ws(e) {
  if (Lo[e]) return Lo[e];
  if (!Vn[e]) return e;
  var t = Vn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in d2) return (Lo[e] = t[n]);
  return e;
}
var f2 = Ws("animationend"),
  h2 = Ws("animationiteration"),
  p2 = Ws("animationstart"),
  m2 = Ws("transitionend"),
  g2 = new Map(),
  lc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Jt(e, t) {
  g2.set(e, t), kn(t, [e]);
}
for (var To = 0; To < lc.length; To++) {
  var Mo = lc[To],
    zp = Mo.toLowerCase(),
    Up = Mo[0].toUpperCase() + Mo.slice(1);
  Jt(zp, "on" + Up);
}
Jt(f2, "onAnimationEnd");
Jt(h2, "onAnimationIteration");
Jt(p2, "onAnimationStart");
Jt("dblclick", "onDoubleClick");
Jt("focusin", "onFocus");
Jt("focusout", "onBlur");
Jt(m2, "onTransitionEnd");
Qn("onMouseEnter", ["mouseout", "mouseover"]);
Qn("onMouseLeave", ["mouseout", "mouseover"]);
Qn("onPointerEnter", ["pointerout", "pointerover"]);
Qn("onPointerLeave", ["pointerout", "pointerover"]);
kn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
kn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
kn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
kn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
kn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Sr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Hp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));
function ac(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), z1(r, t, void 0, e), (e.currentTarget = null);
}
function x2(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== s && i.isPropagationStopped())) break e;
          ac(i, a, c), (s = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== s && i.isPropagationStopped())
          )
            break e;
          ac(i, a, c), (s = u);
        }
    }
  }
  if (ls) throw ((e = Cl), (ls = !1), (Cl = null), e);
}
function Z(e, t) {
  var n = t[Al];
  n === void 0 && (n = t[Al] = new Set());
  var r = e + "__bubble";
  n.has(r) || (v2(t, e, 2, !1), n.add(r));
}
function Ao(e, t, n) {
  var r = 0;
  t && (r |= 4), v2(n, e, r, t);
}
var Ti = "_reactListening" + Math.random().toString(36).slice(2);
function Xr(e) {
  if (!e[Ti]) {
    (e[Ti] = !0),
      P0.forEach(function (n) {
        n !== "selectionchange" && (Hp.has(n) || Ao(n, !1, e), Ao(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ti] || ((t[Ti] = !0), Ao("selectionchange", !1, t));
  }
}
function v2(e, t, n, r) {
  switch (t2(t)) {
    case 1:
      var i = rp;
      break;
    case 4:
      i = ip;
      break;
    default:
      i = Ta;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !wl ||
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
function Vo(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
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
        for (; a !== null; ) {
          if (((o = cn(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  z0(function () {
    var c = s,
      d = Pa(n),
      f = [];
    e: {
      var h = g2.get(e);
      if (h !== void 0) {
        var g = Aa,
          v = e;
        switch (e) {
          case "keypress":
            if (Gi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = yp;
            break;
          case "focusin":
            (v = "focus"), (g = Po);
            break;
          case "focusout":
            (v = "blur"), (g = Po);
            break;
          case "beforeblur":
          case "afterblur":
            g = Po;
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
            g = Xu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = lp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = kp;
            break;
          case f2:
          case h2:
          case p2:
            g = cp;
            break;
          case m2:
            g = Sp;
            break;
          case "scroll":
            g = sp;
            break;
          case "wheel":
            g = Ep;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = fp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = qu;
        }
        var y = (t & 4) !== 0,
          k = !y && e === "scroll",
          x = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var p = c, m; p !== null; ) {
          m = p;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              x !== null && ((w = Wr(p, x)), w != null && y.push(Qr(p, w, m)))),
            k)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((h = new g(h, v, null, n, d)), f.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h &&
            n !== vl &&
            (v = n.relatedTarget || n.fromElement) &&
            (cn(v) || v[St]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = c),
              (v = v ? cn(v) : null),
              v !== null &&
                ((k = jn(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((g = null), (v = c)),
          g !== v)
        ) {
          if (
            ((y = Xu),
            (w = "onMouseLeave"),
            (x = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = qu),
              (w = "onPointerLeave"),
              (x = "onPointerEnter"),
              (p = "pointer")),
            (k = g == null ? h : _n(g)),
            (m = v == null ? h : _n(v)),
            (h = new y(w, p + "leave", g, n, d)),
            (h.target = k),
            (h.relatedTarget = m),
            (w = null),
            cn(d) === c &&
              ((y = new y(x, p + "enter", v, n, d)),
              (y.target = m),
              (y.relatedTarget = k),
              (w = y)),
            (k = w),
            g && v)
          )
            t: {
              for (y = g, x = v, p = 0, m = y; m; m = Nn(m)) p++;
              for (m = 0, w = x; w; w = Nn(w)) m++;
              for (; 0 < p - m; ) (y = Nn(y)), p--;
              for (; 0 < m - p; ) (x = Nn(x)), m--;
              for (; p--; ) {
                if (y === x || (x !== null && y === x.alternate)) break t;
                (y = Nn(y)), (x = Nn(x));
              }
              y = null;
            }
          else y = null;
          g !== null && uc(f, h, g, y, !1),
            v !== null && k !== null && uc(f, k, v, y, !0);
        }
      }
      e: {
        if (
          ((h = c ? _n(c) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var j = _p;
        else if (tc(h))
          if (l2) j = bp;
          else {
            j = Dp;
            var L = Rp;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (j = Fp);
        if (j && (j = j(e, c))) {
          o2(f, j, n, d);
          break e;
        }
        L && L(e, h, c),
          e === "focusout" &&
            (L = h._wrapperState) &&
            L.controlled &&
            h.type === "number" &&
            hl(h, "number", h.value);
      }
      switch (((L = c ? _n(c) : window), e)) {
        case "focusin":
          (tc(L) || L.contentEditable === "true") &&
            ((An = L), (Pl = c), (Mr = null));
          break;
        case "focusout":
          Mr = Pl = An = null;
          break;
        case "mousedown":
          El = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (El = !1), oc(f, n, d);
          break;
        case "selectionchange":
          if (Ip) break;
        case "keydown":
        case "keyup":
          oc(f, n, d);
      }
      var P;
      if (_a)
        e: {
          switch (e) {
            case "compositionstart":
              var S = "onCompositionStart";
              break e;
            case "compositionend":
              S = "onCompositionEnd";
              break e;
            case "compositionupdate":
              S = "onCompositionUpdate";
              break e;
          }
          S = void 0;
        }
      else
        Mn
          ? i2(e, n) && (S = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (S = "onCompositionStart");
      S &&
        (r2 &&
          n.locale !== "ko" &&
          (Mn || S !== "onCompositionStart"
            ? S === "onCompositionEnd" && Mn && (P = n2())
            : ((bt = d),
              (Ma = "value" in bt ? bt.value : bt.textContent),
              (Mn = !0))),
        (L = fs(c, S)),
        0 < L.length &&
          ((S = new Qu(S, e, null, n, d)),
          f.push({ event: S, listeners: L }),
          P ? (S.data = P) : ((P = s2(n)), P !== null && (S.data = P)))),
        (P = Lp ? Tp(e, n) : Mp(e, n)) &&
          ((c = fs(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new Qu("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = P)));
    }
    x2(f, t);
  });
}
function Qr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Wr(e, n)),
      s != null && r.unshift(Qr(e, s, i)),
      (s = Wr(e, t)),
      s != null && r.push(Qr(e, s, i))),
      (e = e.return);
  }
  return r;
}
function Nn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function uc(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((u = Wr(n, s)), u != null && o.unshift(Qr(n, u, a)))
        : i || ((u = Wr(n, s)), u != null && o.push(Qr(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Wp = /\r\n?/g,
  $p = /\u0000|\uFFFD/g;
function cc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Wp,
      `
`
    )
    .replace($p, "");
}
function Mi(e, t, n) {
  if (((t = cc(t)), cc(e) !== t && n)) throw Error(E(425));
}
function hs() {}
var Nl = null,
  Ll = null;
function Tl(e, t) {
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
var Ml = typeof setTimeout == "function" ? setTimeout : void 0,
  Gp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  dc = typeof Promise == "function" ? Promise : void 0,
  Zp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof dc < "u"
      ? function (e) {
          return dc.resolve(null).then(e).catch(Yp);
        }
      : Ml;
function Yp(e) {
  setTimeout(function () {
    throw e;
  });
}
function _o(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Zr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Zr(t);
}
function Ht(e) {
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
function fc(e) {
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
var ar = Math.random().toString(36).slice(2),
  ut = "__reactFiber$" + ar,
  qr = "__reactProps$" + ar,
  St = "__reactContainer$" + ar,
  Al = "__reactEvents$" + ar,
  Kp = "__reactListeners$" + ar,
  Xp = "__reactHandles$" + ar;
function cn(e) {
  var t = e[ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[St] || n[ut])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fc(e); e !== null; ) {
          if ((n = e[ut])) return n;
          e = fc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function di(e) {
  return (
    (e = e[ut] || e[St]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function _n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function $s(e) {
  return e[qr] || null;
}
var Vl = [],
  Rn = -1;
function en(e) {
  return { current: e };
}
function Y(e) {
  0 > Rn || ((e.current = Vl[Rn]), (Vl[Rn] = null), Rn--);
}
function $(e, t) {
  Rn++, (Vl[Rn] = e.current), (e.current = t);
}
var Xt = {},
  ke = en(Xt),
  Ve = en(!1),
  xn = Xt;
function qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Xt;
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
function _e(e) {
  return (e = e.childContextTypes), e != null;
}
function ps() {
  Y(Ve), Y(ke);
}
function hc(e, t, n) {
  if (ke.current !== Xt) throw Error(E(168));
  $(ke, t), $(Ve, n);
}
function y2(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(E(108, R1(e) || "Unknown", i));
  return te({}, n, r);
}
function ms(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xt),
    (xn = ke.current),
    $(ke, e),
    $(Ve, Ve.current),
    !0
  );
}
function pc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = y2(e, t, xn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Y(Ve),
      Y(ke),
      $(ke, e))
    : Y(Ve),
    $(Ve, n);
}
var gt = null,
  Gs = !1,
  Ro = !1;
function w2(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
function Qp(e) {
  (Gs = !0), w2(e);
}
function tn() {
  if (!Ro && gt !== null) {
    Ro = !0;
    var e = 0,
      t = U;
    try {
      var n = gt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (gt = null), (Gs = !1);
    } catch (i) {
      throw (gt !== null && (gt = gt.slice(e + 1)), $0(Ea, tn), i);
    } finally {
      (U = t), (Ro = !1);
    }
  }
  return null;
}
var Dn = [],
  Fn = 0,
  gs = null,
  xs = 0,
  Ge = [],
  Ze = 0,
  vn = null,
  xt = 1,
  vt = "";
function sn(e, t) {
  (Dn[Fn++] = xs), (Dn[Fn++] = gs), (gs = e), (xs = t);
}
function C2(e, t, n) {
  (Ge[Ze++] = xt), (Ge[Ze++] = vt), (Ge[Ze++] = vn), (vn = e);
  var r = xt;
  e = vt;
  var i = 32 - rt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - rt(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (xt = (1 << (32 - rt(t) + i)) | (n << i) | r),
      (vt = s + e);
  } else (xt = (1 << s) | (n << i) | r), (vt = e);
}
function Da(e) {
  e.return !== null && (sn(e, 1), C2(e, 1, 0));
}
function Fa(e) {
  for (; e === gs; )
    (gs = Dn[--Fn]), (Dn[Fn] = null), (xs = Dn[--Fn]), (Dn[Fn] = null);
  for (; e === vn; )
    (vn = Ge[--Ze]),
      (Ge[Ze] = null),
      (vt = Ge[--Ze]),
      (Ge[Ze] = null),
      (xt = Ge[--Ze]),
      (Ge[Ze] = null);
}
var Be = null,
  be = null,
  K = !1,
  tt = null;
function k2(e, t) {
  var n = Ye(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function mc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Be = e), (be = Ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Be = e), (be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = vn !== null ? { id: xt, overflow: vt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ye(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Be = e),
            (be = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function _l(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Rl(e) {
  if (K) {
    var t = be;
    if (t) {
      var n = t;
      if (!mc(e, t)) {
        if (_l(e)) throw Error(E(418));
        t = Ht(n.nextSibling);
        var r = Be;
        t && mc(e, t)
          ? k2(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (K = !1), (Be = e));
      }
    } else {
      if (_l(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (K = !1), (Be = e);
    }
  }
}
function gc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Be = e;
}
function Ai(e) {
  if (e !== Be) return !1;
  if (!K) return gc(e), (K = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Tl(e.type, e.memoizedProps))),
    t && (t = be))
  ) {
    if (_l(e)) throw (j2(), Error(E(418)));
    for (; t; ) k2(e, t), (t = Ht(t.nextSibling));
  }
  if ((gc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              be = Ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      be = null;
    }
  } else be = Be ? Ht(e.stateNode.nextSibling) : null;
  return !0;
}
function j2() {
  for (var e = be; e; ) e = Ht(e.nextSibling);
}
function Jn() {
  (be = Be = null), (K = !1);
}
function ba(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
var qp = Nt.ReactCurrentBatchConfig;
function mr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Vi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function xc(e) {
  var t = e._init;
  return t(e._payload);
}
function S2(e) {
  function t(x, p) {
    if (e) {
      var m = x.deletions;
      m === null ? ((x.deletions = [p]), (x.flags |= 16)) : m.push(p);
    }
  }
  function n(x, p) {
    if (!e) return null;
    for (; p !== null; ) t(x, p), (p = p.sibling);
    return null;
  }
  function r(x, p) {
    for (x = new Map(); p !== null; )
      p.key !== null ? x.set(p.key, p) : x.set(p.index, p), (p = p.sibling);
    return x;
  }
  function i(x, p) {
    return (x = Zt(x, p)), (x.index = 0), (x.sibling = null), x;
  }
  function s(x, p, m) {
    return (
      (x.index = m),
      e
        ? ((m = x.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((x.flags |= 2), p) : m)
            : ((x.flags |= 2), p))
        : ((x.flags |= 1048576), p)
    );
  }
  function o(x) {
    return e && x.alternate === null && (x.flags |= 2), x;
  }
  function a(x, p, m, w) {
    return p === null || p.tag !== 6
      ? ((p = zo(m, x.mode, w)), (p.return = x), p)
      : ((p = i(p, m)), (p.return = x), p);
  }
  function u(x, p, m, w) {
    var j = m.type;
    return j === Tn
      ? d(x, p, m.props.children, w, m.key)
      : p !== null &&
        (p.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === Vt &&
            xc(j) === p.type))
      ? ((w = i(p, m.props)), (w.ref = mr(x, p, m)), (w.return = x), w)
      : ((w = Ji(m.type, m.key, m.props, null, x.mode, w)),
        (w.ref = mr(x, p, m)),
        (w.return = x),
        w);
  }
  function c(x, p, m, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = Uo(m, x.mode, w)), (p.return = x), p)
      : ((p = i(p, m.children || [])), (p.return = x), p);
  }
  function d(x, p, m, w, j) {
    return p === null || p.tag !== 7
      ? ((p = mn(m, x.mode, w, j)), (p.return = x), p)
      : ((p = i(p, m)), (p.return = x), p);
  }
  function f(x, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = zo("" + p, x.mode, m)), (p.return = x), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ci:
          return (
            (m = Ji(p.type, p.key, p.props, null, x.mode, m)),
            (m.ref = mr(x, null, p)),
            (m.return = x),
            m
          );
        case Ln:
          return (p = Uo(p, x.mode, m)), (p.return = x), p;
        case Vt:
          var w = p._init;
          return f(x, w(p._payload), m);
      }
      if (kr(p) || cr(p))
        return (p = mn(p, x.mode, m, null)), (p.return = x), p;
      Vi(x, p);
    }
    return null;
  }
  function h(x, p, m, w) {
    var j = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return j !== null ? null : a(x, p, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ci:
          return m.key === j ? u(x, p, m, w) : null;
        case Ln:
          return m.key === j ? c(x, p, m, w) : null;
        case Vt:
          return (j = m._init), h(x, p, j(m._payload), w);
      }
      if (kr(m) || cr(m)) return j !== null ? null : d(x, p, m, w, null);
      Vi(x, m);
    }
    return null;
  }
  function g(x, p, m, w, j) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (x = x.get(m) || null), a(p, x, "" + w, j);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ci:
          return (x = x.get(w.key === null ? m : w.key) || null), u(p, x, w, j);
        case Ln:
          return (x = x.get(w.key === null ? m : w.key) || null), c(p, x, w, j);
        case Vt:
          var L = w._init;
          return g(x, p, m, L(w._payload), j);
      }
      if (kr(w) || cr(w)) return (x = x.get(m) || null), d(p, x, w, j, null);
      Vi(p, w);
    }
    return null;
  }
  function v(x, p, m, w) {
    for (
      var j = null, L = null, P = p, S = (p = 0), A = null;
      P !== null && S < m.length;
      S++
    ) {
      P.index > S ? ((A = P), (P = null)) : (A = P.sibling);
      var _ = h(x, P, m[S], w);
      if (_ === null) {
        P === null && (P = A);
        break;
      }
      e && P && _.alternate === null && t(x, P),
        (p = s(_, p, S)),
        L === null ? (j = _) : (L.sibling = _),
        (L = _),
        (P = A);
    }
    if (S === m.length) return n(x, P), K && sn(x, S), j;
    if (P === null) {
      for (; S < m.length; S++)
        (P = f(x, m[S], w)),
          P !== null &&
            ((p = s(P, p, S)), L === null ? (j = P) : (L.sibling = P), (L = P));
      return K && sn(x, S), j;
    }
    for (P = r(x, P); S < m.length; S++)
      (A = g(P, x, S, m[S], w)),
        A !== null &&
          (e && A.alternate !== null && P.delete(A.key === null ? S : A.key),
          (p = s(A, p, S)),
          L === null ? (j = A) : (L.sibling = A),
          (L = A));
    return (
      e &&
        P.forEach(function (X) {
          return t(x, X);
        }),
      K && sn(x, S),
      j
    );
  }
  function y(x, p, m, w) {
    var j = cr(m);
    if (typeof j != "function") throw Error(E(150));
    if (((m = j.call(m)), m == null)) throw Error(E(151));
    for (
      var L = (j = null), P = p, S = (p = 0), A = null, _ = m.next();
      P !== null && !_.done;
      S++, _ = m.next()
    ) {
      P.index > S ? ((A = P), (P = null)) : (A = P.sibling);
      var X = h(x, P, _.value, w);
      if (X === null) {
        P === null && (P = A);
        break;
      }
      e && P && X.alternate === null && t(x, P),
        (p = s(X, p, S)),
        L === null ? (j = X) : (L.sibling = X),
        (L = X),
        (P = A);
    }
    if (_.done) return n(x, P), K && sn(x, S), j;
    if (P === null) {
      for (; !_.done; S++, _ = m.next())
        (_ = f(x, _.value, w)),
          _ !== null &&
            ((p = s(_, p, S)), L === null ? (j = _) : (L.sibling = _), (L = _));
      return K && sn(x, S), j;
    }
    for (P = r(x, P); !_.done; S++, _ = m.next())
      (_ = g(P, x, S, _.value, w)),
        _ !== null &&
          (e && _.alternate !== null && P.delete(_.key === null ? S : _.key),
          (p = s(_, p, S)),
          L === null ? (j = _) : (L.sibling = _),
          (L = _));
    return (
      e &&
        P.forEach(function (b) {
          return t(x, b);
        }),
      K && sn(x, S),
      j
    );
  }
  function k(x, p, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Tn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Ci:
          e: {
            for (var j = m.key, L = p; L !== null; ) {
              if (L.key === j) {
                if (((j = m.type), j === Tn)) {
                  if (L.tag === 7) {
                    n(x, L.sibling),
                      (p = i(L, m.props.children)),
                      (p.return = x),
                      (x = p);
                    break e;
                  }
                } else if (
                  L.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === Vt &&
                    xc(j) === L.type)
                ) {
                  n(x, L.sibling),
                    (p = i(L, m.props)),
                    (p.ref = mr(x, L, m)),
                    (p.return = x),
                    (x = p);
                  break e;
                }
                n(x, L);
                break;
              } else t(x, L);
              L = L.sibling;
            }
            m.type === Tn
              ? ((p = mn(m.props.children, x.mode, w, m.key)),
                (p.return = x),
                (x = p))
              : ((w = Ji(m.type, m.key, m.props, null, x.mode, w)),
                (w.ref = mr(x, p, m)),
                (w.return = x),
                (x = w));
          }
          return o(x);
        case Ln:
          e: {
            for (L = m.key; p !== null; ) {
              if (p.key === L)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(x, p.sibling),
                    (p = i(p, m.children || [])),
                    (p.return = x),
                    (x = p);
                  break e;
                } else {
                  n(x, p);
                  break;
                }
              else t(x, p);
              p = p.sibling;
            }
            (p = Uo(m, x.mode, w)), (p.return = x), (x = p);
          }
          return o(x);
        case Vt:
          return (L = m._init), k(x, p, L(m._payload), w);
      }
      if (kr(m)) return v(x, p, m, w);
      if (cr(m)) return y(x, p, m, w);
      Vi(x, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(x, p.sibling), (p = i(p, m)), (p.return = x), (x = p))
          : (n(x, p), (p = zo(m, x.mode, w)), (p.return = x), (x = p)),
        o(x))
      : n(x, p);
  }
  return k;
}
var er = S2(!0),
  P2 = S2(!1),
  vs = en(null),
  ys = null,
  bn = null,
  Ba = null;
function Oa() {
  Ba = bn = ys = null;
}
function Ia(e) {
  var t = vs.current;
  Y(vs), (e._currentValue = t);
}
function Dl(e, t, n) {
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
function Yn(e, t) {
  (ys = e),
    (Ba = bn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ae = !0), (e.firstContext = null));
}
function Xe(e) {
  var t = e._currentValue;
  if (Ba !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), bn === null)) {
      if (ys === null) throw Error(E(308));
      (bn = e), (ys.dependencies = { lanes: 0, firstContext: e });
    } else bn = bn.next = e;
  return t;
}
var dn = null;
function za(e) {
  dn === null ? (dn = [e]) : dn.push(e);
}
function E2(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), za(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Pt(e, r)
  );
}
function Pt(e, t) {
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
var _t = !1;
function Ua(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function N2(e, t) {
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
function wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Pt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), za(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Pt(e, n)
  );
}
function Zi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Na(e, n);
  }
}
function vc(e, t) {
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
function ws(e, t, n, r) {
  var i = e.updateQueue;
  _t = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var u = a,
      c = u.next;
    (u.next = null), o === null ? (s = c) : (o.next = c), (o = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = u)));
  }
  if (s !== null) {
    var f = i.baseState;
    (o = 0), (d = c = u = null), (a = s);
    do {
      var h = a.lane,
        g = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            y = a;
          switch (((h = t), (g = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                f = v.call(g, f, h);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (h = typeof v == "function" ? v.call(g, f, h) : v),
                h == null)
              )
                break e;
              f = te({}, f, h);
              break e;
            case 2:
              _t = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a));
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = g), (u = f)) : (d = d.next = g),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (u = f),
      (i.baseState = u),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (wn |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function yc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(E(191, i));
        i.call(r);
      }
    }
}
var fi = {},
  dt = en(fi),
  Jr = en(fi),
  ei = en(fi);
function fn(e) {
  if (e === fi) throw Error(E(174));
  return e;
}
function Ha(e, t) {
  switch (($(ei, t), $(Jr, e), $(dt, fi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ml(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ml(t, e));
  }
  Y(dt), $(dt, t);
}
function tr() {
  Y(dt), Y(Jr), Y(ei);
}
function L2(e) {
  fn(ei.current);
  var t = fn(dt.current),
    n = ml(t, e.type);
  t !== n && ($(Jr, e), $(dt, n));
}
function Wa(e) {
  Jr.current === e && (Y(dt), Y(Jr));
}
var q = en(0);
function Cs(e) {
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
var Do = [];
function $a() {
  for (var e = 0; e < Do.length; e++)
    Do[e]._workInProgressVersionPrimary = null;
  Do.length = 0;
}
var Yi = Nt.ReactCurrentDispatcher,
  Fo = Nt.ReactCurrentBatchConfig,
  yn = 0,
  ee = null,
  ae = null,
  de = null,
  ks = !1,
  Ar = !1,
  ti = 0,
  Jp = 0;
function ye() {
  throw Error(E(321));
}
function Ga(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!st(e[n], t[n])) return !1;
  return !0;
}
function Za(e, t, n, r, i, s) {
  if (
    ((yn = s),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Yi.current = e === null || e.memoizedState === null ? rm : im),
    (e = n(r, i)),
    Ar)
  ) {
    s = 0;
    do {
      if (((Ar = !1), (ti = 0), 25 <= s)) throw Error(E(301));
      (s += 1),
        (de = ae = null),
        (t.updateQueue = null),
        (Yi.current = sm),
        (e = n(r, i));
    } while (Ar);
  }
  if (
    ((Yi.current = js),
    (t = ae !== null && ae.next !== null),
    (yn = 0),
    (de = ae = ee = null),
    (ks = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function Ya() {
  var e = ti !== 0;
  return (ti = 0), e;
}
function at() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return de === null ? (ee.memoizedState = de = e) : (de = de.next = e), de;
}
function Qe() {
  if (ae === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = de === null ? ee.memoizedState : de.next;
  if (t !== null) (de = t), (ae = e);
  else {
    if (e === null) throw Error(E(310));
    (ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      de === null ? (ee.memoizedState = de = e) : (de = de.next = e);
  }
  return de;
}
function ni(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bo(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = ae,
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
    var a = (o = null),
      u = null,
      c = s;
    do {
      var d = c.lane;
      if ((yn & d) === d)
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
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((a = u = f), (o = r)) : (u = u.next = f),
          (ee.lanes |= d),
          (wn |= d);
      }
      c = c.next;
    } while (c !== null && c !== s);
    u === null ? (o = r) : (u.next = a),
      st(r, t.memoizedState) || (Ae = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (ee.lanes |= s), (wn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Bo(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    st(s, t.memoizedState) || (Ae = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function T2() {}
function M2(e, t) {
  var n = ee,
    r = Qe(),
    i = t(),
    s = !st(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ae = !0)),
    (r = r.queue),
    Ka(_2.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ri(9, V2.bind(null, n, r, i, t), void 0, null),
      fe === null)
    )
      throw Error(E(349));
    yn & 30 || A2(n, t, i);
  }
  return i;
}
function A2(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function V2(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), R2(t) && D2(e);
}
function _2(e, t, n) {
  return n(function () {
    R2(t) && D2(e);
  });
}
function R2(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !st(e, n);
  } catch {
    return !0;
  }
}
function D2(e) {
  var t = Pt(e, 1);
  t !== null && it(t, e, 1, -1);
}
function wc(e) {
  var t = at();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ni,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = nm.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function ri(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function F2() {
  return Qe().memoizedState;
}
function Ki(e, t, n, r) {
  var i = at();
  (ee.flags |= e),
    (i.memoizedState = ri(1 | t, n, void 0, r === void 0 ? null : r));
}
function Zs(e, t, n, r) {
  var i = Qe();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ae !== null) {
    var o = ae.memoizedState;
    if (((s = o.destroy), r !== null && Ga(r, o.deps))) {
      i.memoizedState = ri(t, n, s, r);
      return;
    }
  }
  (ee.flags |= e), (i.memoizedState = ri(1 | t, n, s, r));
}
function Cc(e, t) {
  return Ki(8390656, 8, e, t);
}
function Ka(e, t) {
  return Zs(2048, 8, e, t);
}
function b2(e, t) {
  return Zs(4, 2, e, t);
}
function B2(e, t) {
  return Zs(4, 4, e, t);
}
function O2(e, t) {
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
function I2(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Zs(4, 4, O2.bind(null, t, e), n)
  );
}
function Xa() {}
function z2(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ga(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function U2(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ga(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function H2(e, t, n) {
  return yn & 21
    ? (st(n, t) || ((n = Y0()), (ee.lanes |= n), (wn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ae = !0)), (e.memoizedState = n));
}
function em(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Fo.transition;
  Fo.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (Fo.transition = r);
  }
}
function W2() {
  return Qe().memoizedState;
}
function tm(e, t, n) {
  var r = Gt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    $2(e))
  )
    G2(t, n);
  else if (((n = E2(e, t, n, r)), n !== null)) {
    var i = Ee();
    it(n, e, r, i), Z2(n, t, r);
  }
}
function nm(e, t, n) {
  var r = Gt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($2(e)) G2(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), st(a, o))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), za(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = E2(e, t, i, r)),
      n !== null && ((i = Ee()), it(n, e, r, i), Z2(n, t, r));
  }
}
function $2(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function G2(e, t) {
  Ar = ks = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Z2(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Na(e, n);
  }
}
var js = {
    readContext: Xe,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useInsertionEffect: ye,
    useLayoutEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useMutableSource: ye,
    useSyncExternalStore: ye,
    useId: ye,
    unstable_isNewReconciler: !1,
  },
  rm = {
    readContext: Xe,
    useCallback: function (e, t) {
      return (at().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Xe,
    useEffect: Cc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ki(4194308, 4, O2.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ki(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ki(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = at();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = at();
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
        (e = e.dispatch = tm.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = at();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: wc,
    useDebugValue: Xa,
    useDeferredValue: function (e) {
      return (at().memoizedState = e);
    },
    useTransition: function () {
      var e = wc(!1),
        t = e[0];
      return (e = em.bind(null, e[1])), (at().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        i = at();
      if (K) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), fe === null)) throw Error(E(349));
        yn & 30 || A2(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Cc(_2.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        ri(9, V2.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = at(),
        t = fe.identifierPrefix;
      if (K) {
        var n = vt,
          r = xt;
        (n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ti++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Jp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  im = {
    readContext: Xe,
    useCallback: z2,
    useContext: Xe,
    useEffect: Ka,
    useImperativeHandle: I2,
    useInsertionEffect: b2,
    useLayoutEffect: B2,
    useMemo: U2,
    useReducer: bo,
    useRef: F2,
    useState: function () {
      return bo(ni);
    },
    useDebugValue: Xa,
    useDeferredValue: function (e) {
      var t = Qe();
      return H2(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = bo(ni)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: T2,
    useSyncExternalStore: M2,
    useId: W2,
    unstable_isNewReconciler: !1,
  },
  sm = {
    readContext: Xe,
    useCallback: z2,
    useContext: Xe,
    useEffect: Ka,
    useImperativeHandle: I2,
    useInsertionEffect: b2,
    useLayoutEffect: B2,
    useMemo: U2,
    useReducer: Bo,
    useRef: F2,
    useState: function () {
      return Bo(ni);
    },
    useDebugValue: Xa,
    useDeferredValue: function (e) {
      var t = Qe();
      return ae === null ? (t.memoizedState = e) : H2(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Bo(ni)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: T2,
    useSyncExternalStore: M2,
    useId: W2,
    unstable_isNewReconciler: !1,
  };
function Je(e, t) {
  if (e && e.defaultProps) {
    (t = te({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Fl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ys = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      i = Gt(e),
      s = wt(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Wt(e, s, i)),
      t !== null && (it(t, e, i, r), Zi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ee(),
      i = Gt(e),
      s = wt(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Wt(e, s, i)),
      t !== null && (it(t, e, i, r), Zi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ee(),
      r = Gt(e),
      i = wt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Wt(e, i, r)),
      t !== null && (it(t, e, r, n), Zi(t, e, r));
  },
};
function kc(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Kr(n, r) || !Kr(i, s)
      : !0
  );
}
function Y2(e, t, n) {
  var r = !1,
    i = Xt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Xe(s))
      : ((i = _e(t) ? xn : ke.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? qn(e, i) : Xt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ys),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function jc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ys.enqueueReplaceState(t, t.state, null);
}
function bl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Ua(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Xe(s))
    : ((s = _e(t) ? xn : ke.current), (i.context = qn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Fl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ys.enqueueReplaceState(i, i.state, null),
      ws(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function nr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += _1(r)), (r = r.return);
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
function Oo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Bl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var om = typeof WeakMap == "function" ? WeakMap : Map;
function K2(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ps || ((Ps = !0), (Yl = r)), Bl(e, t);
    }),
    n
  );
}
function X2(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Bl(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Bl(e, t),
          typeof r != "function" &&
            ($t === null ? ($t = new Set([this])) : $t.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Sc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new om();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = wm.bind(null, e, t, n)), t.then(e, e));
}
function Pc(e) {
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
function Ec(e, t, n, r, i) {
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
              : ((t = wt(-1, 1)), (t.tag = 2), Wt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var lm = Nt.ReactCurrentOwner,
  Ae = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? P2(t, null, n, r) : er(t, e.child, n, r);
}
function Nc(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Yn(t, i),
    (r = Za(e, t, n, r, s, i)),
    (n = Ya()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Et(e, t, i))
      : (K && n && Da(t), (t.flags |= 1), Pe(e, t, r, i), t.child)
  );
}
function Lc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !iu(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Q2(e, t, s, r, i))
      : ((e = Ji(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Kr), n(o, r) && e.ref === t.ref)
    )
      return Et(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Zt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Q2(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Kr(s, r) && e.ref === t.ref)
      if (((Ae = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ae = !0);
      else return (t.lanes = e.lanes), Et(e, t, i);
  }
  return Ol(e, t, n, r, i);
}
function q2(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        $(On, Fe),
        (Fe |= n);
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
          $(On, Fe),
          (Fe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        $(On, Fe),
        (Fe |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      $(On, Fe),
      (Fe |= r);
  return Pe(e, t, i, n), t.child;
}
function J2(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ol(e, t, n, r, i) {
  var s = _e(n) ? xn : ke.current;
  return (
    (s = qn(t, s)),
    Yn(t, i),
    (n = Za(e, t, n, r, s, i)),
    (r = Ya()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Et(e, t, i))
      : (K && r && Da(t), (t.flags |= 1), Pe(e, t, n, i), t.child)
  );
}
function Tc(e, t, n, r, i) {
  if (_e(n)) {
    var s = !0;
    ms(t);
  } else s = !1;
  if ((Yn(t, i), t.stateNode === null))
    Xi(e, t), Y2(t, n, r), bl(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Xe(c))
      : ((c = _e(n) ? xn : ke.current), (c = qn(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && jc(t, o, r, c)),
      (_t = !1);
    var h = t.memoizedState;
    (o.state = h),
      ws(t, r, o, i),
      (u = t.memoizedState),
      a !== r || h !== u || Ve.current || _t
        ? (typeof d == "function" && (Fl(t, n, d, r), (u = t.memoizedState)),
          (a = _t || kc(t, n, a, r, h, u, c))
            ? (f ||
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
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      N2(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Je(t.type, a)),
      (o.props = c),
      (f = t.pendingProps),
      (h = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Xe(u))
        : ((u = _e(n) ? xn : ke.current), (u = qn(t, u)));
    var g = n.getDerivedStateFromProps;
    (d =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || h !== u) && jc(t, o, r, u)),
      (_t = !1),
      (h = t.memoizedState),
      (o.state = h),
      ws(t, r, o, i);
    var v = t.memoizedState;
    a !== f || h !== v || Ve.current || _t
      ? (typeof g == "function" && (Fl(t, n, g, r), (v = t.memoizedState)),
        (c = _t || kc(t, n, c, r, h, v, u) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = u),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Il(e, t, n, r, s, i);
}
function Il(e, t, n, r, i, s) {
  J2(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && pc(t, n, !1), Et(e, t, s);
  (r = t.stateNode), (lm.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = er(t, e.child, null, s)), (t.child = er(t, null, a, s)))
      : Pe(e, t, a, s),
    (t.memoizedState = r.state),
    i && pc(t, n, !0),
    t.child
  );
}
function ef(e) {
  var t = e.stateNode;
  t.pendingContext
    ? hc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hc(e, t.context, !1),
    Ha(e, t.containerInfo);
}
function Mc(e, t, n, r, i) {
  return Jn(), ba(i), (t.flags |= 256), Pe(e, t, n, r), t.child;
}
var zl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ul(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function tf(e, t, n) {
  var r = t.pendingProps,
    i = q.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    $(q, i & 1),
    e === null)
  )
    return (
      Rl(t),
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
                : (s = Qs(o, r, 0, null)),
              (e = mn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Ul(n)),
              (t.memoizedState = zl),
              e)
            : Qa(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return am(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Zt(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Zt(a, s)) : ((s = mn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ul(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = zl),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Zt(s, { mode: "visible", children: r.children })),
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
function Qa(e, t) {
  return (
    (t = Qs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function _i(e, t, n, r) {
  return (
    r !== null && ba(r),
    er(t, e.child, null, n),
    (e = Qa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function am(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Oo(Error(E(422)))), _i(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Qs({ mode: "visible", children: r.children }, i, 0, null)),
        (s = mn(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && er(t, e.child, null, o),
        (t.child.memoizedState = Ul(o)),
        (t.memoizedState = zl),
        s);
  if (!(t.mode & 1)) return _i(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(E(419))), (r = Oo(s, r, void 0)), _i(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Ae || a)) {
    if (((r = fe), r !== null)) {
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
          ((s.retryLane = i), Pt(e, i), it(r, e, i, -1));
    }
    return ru(), (r = Oo(Error(E(421)))), _i(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Cm.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (be = Ht(i.nextSibling)),
      (Be = t),
      (K = !0),
      (tt = null),
      e !== null &&
        ((Ge[Ze++] = xt),
        (Ge[Ze++] = vt),
        (Ge[Ze++] = vn),
        (xt = e.id),
        (vt = e.overflow),
        (vn = t)),
      (t = Qa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ac(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Dl(e.return, t, n);
}
function Io(e, t, n, r, i) {
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
function nf(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Pe(e, t, r.children, n), (r = q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ac(e, n, t);
        else if (e.tag === 19) Ac(e, n, t);
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
  if (($(q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Cs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Io(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Cs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Io(t, !0, n, null, s);
        break;
      case "together":
        Io(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Xi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Et(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (wn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Zt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Zt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function um(e, t, n) {
  switch (t.tag) {
    case 3:
      ef(t), Jn();
      break;
    case 5:
      L2(t);
      break;
    case 1:
      _e(t.type) && ms(t);
      break;
    case 4:
      Ha(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      $(vs, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? ($(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? tf(e, t, n)
          : ($(q, q.current & 1),
            (e = Et(e, t, n)),
            e !== null ? e.sibling : null);
      $(q, q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return nf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        $(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), q2(e, t, n);
  }
  return Et(e, t, n);
}
var rf, Hl, sf, of;
rf = function (e, t) {
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
Hl = function () {};
sf = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), fn(dt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = dl(e, i)), (r = dl(e, r)), (s = []);
        break;
      case "select":
        (i = te({}, i, { value: void 0 })),
          (r = te({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = pl(e, i)), (r = pl(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = hs);
    }
    gl(n, r);
    var o;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Ur.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((a = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && u !== a && (u != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (s || (s = []), s.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (s = s || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (s = s || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Ur.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && Z("scroll", e),
                  s || a === u || (s = []))
                : (s = s || []).push(c, u));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
of = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gr(e, t) {
  if (!K)
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
function we(e) {
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
function cm(e, t, n) {
  var r = t.pendingProps;
  switch ((Fa(t), t.tag)) {
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
      return we(t), null;
    case 1:
      return _e(t.type) && ps(), we(t), null;
    case 3:
      return (
        (r = t.stateNode),
        tr(),
        Y(Ve),
        Y(ke),
        $a(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ai(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tt !== null && (Ql(tt), (tt = null)))),
        Hl(e, t),
        we(t),
        null
      );
    case 5:
      Wa(t);
      var i = fn(ei.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        sf(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return we(t), null;
        }
        if (((e = fn(dt.current)), Ai(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[ut] = t), (r[qr] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Z("cancel", r), Z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Sr.length; i++) Z(Sr[i], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Z("error", r), Z("load", r);
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              Iu(r, s), Z("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                Z("invalid", r);
              break;
            case "textarea":
              Uu(r, s), Z("invalid", r);
          }
          gl(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Mi(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Mi(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Ur.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  Z("scroll", r);
            }
          switch (n) {
            case "input":
              ki(r), zu(r, s, !0);
              break;
            case "textarea":
              ki(r), Hu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = hs);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = _0(n)),
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
            (e[ut] = t),
            (e[qr] = r),
            rf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = xl(n, r)), n)) {
              case "dialog":
                Z("cancel", e), Z("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Sr.length; i++) Z(Sr[i], e);
                i = r;
                break;
              case "source":
                Z("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Z("error", e), Z("load", e), (i = r);
                break;
              case "details":
                Z("toggle", e), (i = r);
                break;
              case "input":
                Iu(e, r), (i = dl(e, r)), Z("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = te({}, r, { value: void 0 })),
                  Z("invalid", e);
                break;
              case "textarea":
                Uu(e, r), (i = pl(e, r)), Z("invalid", e);
                break;
              default:
                i = r;
            }
            gl(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var u = a[s];
                s === "style"
                  ? F0(e, u)
                  : s === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && R0(e, u))
                  : s === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Hr(e, u)
                    : typeof u == "number" && Hr(e, "" + u)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Ur.hasOwnProperty(s)
                      ? u != null && s === "onScroll" && Z("scroll", e)
                      : u != null && Ca(e, s, u, o));
              }
            switch (n) {
              case "input":
                ki(e), zu(e, r, !1);
                break;
              case "textarea":
                ki(e), Hu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Wn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Wn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = hs);
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
      return we(t), null;
    case 6:
      if (e && t.stateNode != null) of(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = fn(ei.current)), fn(dt.current), Ai(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ut] = t),
            (s = r.nodeValue !== n) && ((e = Be), e !== null))
          )
            switch (e.tag) {
              case 3:
                Mi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Mi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ut] = t),
            (t.stateNode = r);
      }
      return we(t), null;
    case 13:
      if (
        (Y(q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (K && be !== null && t.mode & 1 && !(t.flags & 128))
          j2(), Jn(), (t.flags |= 98560), (s = !1);
        else if (((s = Ai(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(E(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(E(317));
            s[ut] = t;
          } else
            Jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          we(t), (s = !1);
        } else tt !== null && (Ql(tt), (tt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? ue === 0 && (ue = 3) : ru())),
          t.updateQueue !== null && (t.flags |= 4),
          we(t),
          null);
    case 4:
      return (
        tr(), Hl(e, t), e === null && Xr(t.stateNode.containerInfo), we(t), null
      );
    case 10:
      return Ia(t.type._context), we(t), null;
    case 17:
      return _e(t.type) && ps(), we(t), null;
    case 19:
      if ((Y(q), (s = t.memoizedState), s === null)) return we(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) gr(s, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Cs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    gr(s, !1),
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
                return $(q, (q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            se() > rr &&
            ((t.flags |= 128), (r = !0), gr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Cs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !K)
            )
              return we(t), null;
          } else
            2 * se() - s.renderingStartTime > rr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), gr(s, !1), (t.lanes = 4194304));
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
          (s.renderingStartTime = se()),
          (t.sibling = null),
          (n = q.current),
          $(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (we(t), null);
    case 22:
    case 23:
      return (
        nu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Fe & 1073741824 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : we(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function dm(e, t) {
  switch ((Fa(t), t.tag)) {
    case 1:
      return (
        _e(t.type) && ps(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        tr(),
        Y(Ve),
        Y(ke),
        $a(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Wa(t), null;
    case 13:
      if ((Y(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        Jn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Y(q), null;
    case 4:
      return tr(), null;
    case 10:
      return Ia(t.type._context), null;
    case 22:
    case 23:
      return nu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ri = !1,
  Ce = !1,
  fm = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Bn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        re(e, t, r);
      }
    else n.current = null;
}
function Wl(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var Vc = !1;
function hm(e, t) {
  if (((Nl = cs), (e = c2()), Ra(e))) {
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
            a = -1,
            u = -1,
            c = 0,
            d = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (u = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (h = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++c === i && (a = o),
                h === s && ++d === r && (u = o),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = g;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ll = { focusedElem: e, selectionRange: n }, cs = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    k = v.memoizedState,
                    x = t.stateNode,
                    p = x.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Je(t.type, y),
                      k
                    );
                  x.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (w) {
          re(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (v = Vc), (Vc = !1), v;
}
function Vr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Wl(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ks(e, t) {
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
function $l(e) {
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
function lf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), lf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ut], delete t[qr], delete t[Al], delete t[Kp], delete t[Xp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function af(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _c(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || af(e.return)) return null;
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
function Gl(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = hs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gl(e, t, n), e = e.sibling; e !== null; ) Gl(e, t, n), (e = e.sibling);
}
function Zl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zl(e, t, n), e = e.sibling; e !== null; ) Zl(e, t, n), (e = e.sibling);
}
var pe = null,
  et = !1;
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) uf(e, t, n), (n = n.sibling);
}
function uf(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(zs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ce || Bn(n, t);
    case 6:
      var r = pe,
        i = et;
      (pe = null),
        Lt(e, t, n),
        (pe = r),
        (et = i),
        pe !== null &&
          (et
            ? ((e = pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null &&
        (et
          ? ((e = pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? _o(e.parentNode, n)
              : e.nodeType === 1 && _o(e, n),
            Zr(e))
          : _o(pe, n.stateNode));
      break;
    case 4:
      (r = pe),
        (i = et),
        (pe = n.stateNode.containerInfo),
        (et = !0),
        Lt(e, t, n),
        (pe = r),
        (et = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ce &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Wl(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      Lt(e, t, n);
      break;
    case 1:
      if (
        !Ce &&
        (Bn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          re(n, t, a);
        }
      Lt(e, t, n);
      break;
    case 21:
      Lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ce = (r = Ce) || n.memoizedState !== null), Lt(e, t, n), (Ce = r))
        : Lt(e, t, n);
      break;
    default:
      Lt(e, t, n);
  }
}
function Rc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new fm()),
      t.forEach(function (r) {
        var i = km.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (pe = a.stateNode), (et = !1);
              break e;
            case 3:
              (pe = a.stateNode.containerInfo), (et = !0);
              break e;
            case 4:
              (pe = a.stateNode.containerInfo), (et = !0);
              break e;
          }
          a = a.return;
        }
        if (pe === null) throw Error(E(160));
        uf(s, o, i), (pe = null), (et = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (c) {
        re(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) cf(t, e), (t = t.sibling);
}
function cf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((qe(t, e), lt(e), r & 4)) {
        try {
          Vr(3, e, e.return), Ks(3, e);
        } catch (y) {
          re(e, e.return, y);
        }
        try {
          Vr(5, e, e.return);
        } catch (y) {
          re(e, e.return, y);
        }
      }
      break;
    case 1:
      qe(t, e), lt(e), r & 512 && n !== null && Bn(n, n.return);
      break;
    case 5:
      if (
        (qe(t, e),
        lt(e),
        r & 512 && n !== null && Bn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Hr(i, "");
        } catch (y) {
          re(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && A0(i, s),
              xl(a, o);
            var c = xl(a, s);
            for (o = 0; o < u.length; o += 2) {
              var d = u[o],
                f = u[o + 1];
              d === "style"
                ? F0(i, f)
                : d === "dangerouslySetInnerHTML"
                ? R0(i, f)
                : d === "children"
                ? Hr(i, f)
                : Ca(i, d, f, c);
            }
            switch (a) {
              case "input":
                fl(i, s);
                break;
              case "textarea":
                V0(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? Wn(i, !!s.multiple, g, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Wn(i, !!s.multiple, s.defaultValue, !0)
                      : Wn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[qr] = s;
          } catch (y) {
            re(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((qe(t, e), lt(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (y) {
          re(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (qe(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Zr(t.containerInfo);
        } catch (y) {
          re(e, e.return, y);
        }
      break;
    case 4:
      qe(t, e), lt(e);
      break;
    case 13:
      qe(t, e),
        lt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (eu = se())),
        r & 4 && Rc(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ce = (c = Ce) || d), qe(t, e), (Ce = c)) : qe(t, e),
        lt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (M = e, d = e.child; d !== null; ) {
            for (f = M = d; M !== null; ) {
              switch (((h = M), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vr(4, h, h.return);
                  break;
                case 1:
                  Bn(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      re(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Bn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Fc(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (M = g)) : Fc(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (u = f.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = D0("display", o)));
              } catch (y) {
                re(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (y) {
                re(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      qe(t, e), lt(e), r & 4 && Rc(e);
      break;
    case 21:
      break;
    default:
      qe(t, e), lt(e);
  }
}
function lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (af(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Hr(i, ""), (r.flags &= -33));
          var s = _c(e);
          Zl(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = _c(e);
          Gl(e, a, o);
          break;
        default:
          throw Error(E(161));
      }
    } catch (u) {
      re(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pm(e, t, n) {
  (M = e), df(e);
}
function df(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ri;
      if (!o) {
        var a = i.alternate,
          u = (a !== null && a.memoizedState !== null) || Ce;
        a = Ri;
        var c = Ce;
        if (((Ri = o), (Ce = u) && !c))
          for (M = i; M !== null; )
            (o = M),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? bc(i)
                : u !== null
                ? ((u.return = o), (M = u))
                : bc(i);
        for (; s !== null; ) (M = s), df(s), (s = s.sibling);
        (M = i), (Ri = a), (Ce = c);
      }
      Dc(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (M = s)) : Dc(e);
  }
}
function Dc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ce || Ks(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ce)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Je(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && yc(t, s, r);
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
                yc(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
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
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Zr(f);
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
              throw Error(E(163));
          }
        Ce || (t.flags & 512 && $l(t));
      } catch (h) {
        re(t, t.return, h);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Fc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function bc(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ks(4, t);
          } catch (u) {
            re(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              re(t, i, u);
            }
          }
          var s = t.return;
          try {
            $l(t);
          } catch (u) {
            re(t, s, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            $l(t);
          } catch (u) {
            re(t, o, u);
          }
      }
    } catch (u) {
      re(t, t.return, u);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (M = a);
      break;
    }
    M = t.return;
  }
}
var mm = Math.ceil,
  Ss = Nt.ReactCurrentDispatcher,
  qa = Nt.ReactCurrentOwner,
  Ke = Nt.ReactCurrentBatchConfig,
  O = 0,
  fe = null,
  le = null,
  ge = 0,
  Fe = 0,
  On = en(0),
  ue = 0,
  ii = null,
  wn = 0,
  Xs = 0,
  Ja = 0,
  _r = null,
  Me = null,
  eu = 0,
  rr = 1 / 0,
  mt = null,
  Ps = !1,
  Yl = null,
  $t = null,
  Di = !1,
  Bt = null,
  Es = 0,
  Rr = 0,
  Kl = null,
  Qi = -1,
  qi = 0;
function Ee() {
  return O & 6 ? se() : Qi !== -1 ? Qi : (Qi = se());
}
function Gt(e) {
  return e.mode & 1
    ? O & 2 && ge !== 0
      ? ge & -ge
      : qp.transition !== null
      ? (qi === 0 && (qi = Y0()), qi)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : t2(e.type))),
        e)
    : 1;
}
function it(e, t, n, r) {
  if (50 < Rr) throw ((Rr = 0), (Kl = null), Error(E(185)));
  ui(e, n, r),
    (!(O & 2) || e !== fe) &&
      (e === fe && (!(O & 2) && (Xs |= n), ue === 4 && Ft(e, ge)),
      Re(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((rr = se() + 500), Gs && tn()));
}
function Re(e, t) {
  var n = e.callbackNode;
  q1(e, t);
  var r = us(e, e === fe ? ge : 0);
  if (r === 0)
    n !== null && Gu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Gu(n), t === 1))
      e.tag === 0 ? Qp(Bc.bind(null, e)) : w2(Bc.bind(null, e)),
        Zp(function () {
          !(O & 6) && tn();
        }),
        (n = null);
    else {
      switch (K0(r)) {
        case 1:
          n = Ea;
          break;
        case 4:
          n = G0;
          break;
        case 16:
          n = as;
          break;
        case 536870912:
          n = Z0;
          break;
        default:
          n = as;
      }
      n = yf(n, ff.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ff(e, t) {
  if (((Qi = -1), (qi = 0), O & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (Kn() && e.callbackNode !== n) return null;
  var r = us(e, e === fe ? ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ns(e, r);
  else {
    t = r;
    var i = O;
    O |= 2;
    var s = pf();
    (fe !== e || ge !== t) && ((mt = null), (rr = se() + 500), pn(e, t));
    do
      try {
        vm();
        break;
      } catch (a) {
        hf(e, a);
      }
    while (!0);
    Oa(),
      (Ss.current = s),
      (O = i),
      le !== null ? (t = 0) : ((fe = null), (ge = 0), (t = ue));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = kl(e)), i !== 0 && ((r = i), (t = Xl(e, i)))), t === 1)
    )
      throw ((n = ii), pn(e, 0), Ft(e, r), Re(e, se()), n);
    if (t === 6) Ft(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !gm(i) &&
          ((t = Ns(e, r)),
          t === 2 && ((s = kl(e)), s !== 0 && ((r = s), (t = Xl(e, s)))),
          t === 1))
      )
        throw ((n = ii), pn(e, 0), Ft(e, r), Re(e, se()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          on(e, Me, mt);
          break;
        case 3:
          if (
            (Ft(e, r), (r & 130023424) === r && ((t = eu + 500 - se()), 10 < t))
          ) {
            if (us(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ee(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ml(on.bind(null, e, Me, mt), t);
            break;
          }
          on(e, Me, mt);
          break;
        case 4:
          if ((Ft(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - rt(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = se() - r),
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
                : 1960 * mm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ml(on.bind(null, e, Me, mt), r);
            break;
          }
          on(e, Me, mt);
          break;
        case 5:
          on(e, Me, mt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Re(e, se()), e.callbackNode === n ? ff.bind(null, e) : null;
}
function Xl(e, t) {
  var n = _r;
  return (
    e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256),
    (e = Ns(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && Ql(t)),
    e
  );
}
function Ql(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function gm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!st(s(), i)) return !1;
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
function Ft(e, t) {
  for (
    t &= ~Ja,
      t &= ~Xs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - rt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Bc(e) {
  if (O & 6) throw Error(E(327));
  Kn();
  var t = us(e, 0);
  if (!(t & 1)) return Re(e, se()), null;
  var n = Ns(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = kl(e);
    r !== 0 && ((t = r), (n = Xl(e, r)));
  }
  if (n === 1) throw ((n = ii), pn(e, 0), Ft(e, t), Re(e, se()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    on(e, Me, mt),
    Re(e, se()),
    null
  );
}
function tu(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((rr = se() + 500), Gs && tn());
  }
}
function Cn(e) {
  Bt !== null && Bt.tag === 0 && !(O & 6) && Kn();
  var t = O;
  O |= 1;
  var n = Ke.transition,
    r = U;
  try {
    if (((Ke.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (Ke.transition = n), (O = t), !(O & 6) && tn();
  }
}
function nu() {
  (Fe = On.current), Y(On);
}
function pn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Gp(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch ((Fa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ps();
          break;
        case 3:
          tr(), Y(Ve), Y(ke), $a();
          break;
        case 5:
          Wa(r);
          break;
        case 4:
          tr();
          break;
        case 13:
          Y(q);
          break;
        case 19:
          Y(q);
          break;
        case 10:
          Ia(r.type._context);
          break;
        case 22:
        case 23:
          nu();
      }
      n = n.return;
    }
  if (
    ((fe = e),
    (le = e = Zt(e.current, null)),
    (ge = Fe = t),
    (ue = 0),
    (ii = null),
    (Ja = Xs = wn = 0),
    (Me = _r = null),
    dn !== null)
  ) {
    for (t = 0; t < dn.length; t++)
      if (((n = dn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    dn = null;
  }
  return e;
}
function hf(e, t) {
  do {
    var n = le;
    try {
      if ((Oa(), (Yi.current = js), ks)) {
        for (var r = ee.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ks = !1;
      }
      if (
        ((yn = 0),
        (de = ae = ee = null),
        (Ar = !1),
        (ti = 0),
        (qa.current = null),
        n === null || n.return === null)
      ) {
        (ue = 1), (ii = t), (le = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = ge),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = Pc(o);
          if (g !== null) {
            (g.flags &= -257),
              Ec(g, o, a, s, t),
              g.mode & 1 && Sc(s, c, t),
              (t = g),
              (u = c);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(u), (t.updateQueue = y);
            } else v.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Sc(s, c, t), ru();
              break e;
            }
            u = Error(E(426));
          }
        } else if (K && a.mode & 1) {
          var k = Pc(o);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Ec(k, o, a, s, t),
              ba(nr(u, a));
            break e;
          }
        }
        (s = u = nr(u, a)),
          ue !== 4 && (ue = 2),
          _r === null ? (_r = [s]) : _r.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var x = K2(s, u, t);
              vc(s, x);
              break e;
            case 1:
              a = u;
              var p = s.type,
                m = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    ($t === null || !$t.has(m))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var w = X2(s, a, t);
                vc(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      gf(n);
    } catch (j) {
      (t = j), le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function pf() {
  var e = Ss.current;
  return (Ss.current = js), e === null ? js : e;
}
function ru() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    fe === null || (!(wn & 268435455) && !(Xs & 268435455)) || Ft(fe, ge);
}
function Ns(e, t) {
  var n = O;
  O |= 2;
  var r = pf();
  (fe !== e || ge !== t) && ((mt = null), pn(e, t));
  do
    try {
      xm();
      break;
    } catch (i) {
      hf(e, i);
    }
  while (!0);
  if ((Oa(), (O = n), (Ss.current = r), le !== null)) throw Error(E(261));
  return (fe = null), (ge = 0), ue;
}
function xm() {
  for (; le !== null; ) mf(le);
}
function vm() {
  for (; le !== null && !H1(); ) mf(le);
}
function mf(e) {
  var t = vf(e.alternate, e, Fe);
  (e.memoizedProps = e.pendingProps),
    t === null ? gf(e) : (le = t),
    (qa.current = null);
}
function gf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = dm(n, t)), n !== null)) {
        (n.flags &= 32767), (le = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ue = 6), (le = null);
        return;
      }
    } else if (((n = cm(n, t, Fe)), n !== null)) {
      le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function on(e, t, n) {
  var r = U,
    i = Ke.transition;
  try {
    (Ke.transition = null), (U = 1), ym(e, t, n, r);
  } finally {
    (Ke.transition = i), (U = r);
  }
  return null;
}
function ym(e, t, n, r) {
  do Kn();
  while (Bt !== null);
  if (O & 6) throw Error(E(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (J1(e, s),
    e === fe && ((le = fe = null), (ge = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Di ||
      ((Di = !0),
      yf(as, function () {
        return Kn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Ke.transition), (Ke.transition = null);
    var o = U;
    U = 1;
    var a = O;
    (O |= 4),
      (qa.current = null),
      hm(e, n),
      cf(n, e),
      Op(Ll),
      (cs = !!Nl),
      (Ll = Nl = null),
      (e.current = n),
      pm(n),
      W1(),
      (O = a),
      (U = o),
      (Ke.transition = s);
  } else e.current = n;
  if (
    (Di && ((Di = !1), (Bt = e), (Es = i)),
    (s = e.pendingLanes),
    s === 0 && ($t = null),
    Z1(n.stateNode),
    Re(e, se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ps) throw ((Ps = !1), (e = Yl), (Yl = null), e);
  return (
    Es & 1 && e.tag !== 0 && Kn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Kl ? Rr++ : ((Rr = 0), (Kl = e))) : (Rr = 0),
    tn(),
    null
  );
}
function Kn() {
  if (Bt !== null) {
    var e = K0(Es),
      t = Ke.transition,
      n = U;
    try {
      if (((Ke.transition = null), (U = 16 > e ? 16 : e), Bt === null))
        var r = !1;
      else {
        if (((e = Bt), (Bt = null), (Es = 0), O & 6)) throw Error(E(331));
        var i = O;
        for (O |= 4, M = e.current; M !== null; ) {
          var s = M,
            o = s.child;
          if (M.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (M = c; M !== null; ) {
                  var d = M;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vr(8, d, s);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (M = f);
                  else
                    for (; M !== null; ) {
                      d = M;
                      var h = d.sibling,
                        g = d.return;
                      if ((lf(d), d === c)) {
                        M = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (M = h);
                        break;
                      }
                      M = g;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var k = y.sibling;
                    (y.sibling = null), (y = k);
                  } while (y !== null);
                }
              }
              M = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (M = o);
          else
            e: for (; M !== null; ) {
              if (((s = M), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vr(9, s, s.return);
                }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (M = x);
                break e;
              }
              M = s.return;
            }
        }
        var p = e.current;
        for (M = p; M !== null; ) {
          o = M;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (M = m);
          else
            e: for (o = p; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ks(9, a);
                  }
                } catch (j) {
                  re(a, a.return, j);
                }
              if (a === o) {
                M = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (M = w);
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((O = i), tn(), ct && typeof ct.onPostCommitFiberRoot == "function")
        )
          try {
            ct.onPostCommitFiberRoot(zs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (Ke.transition = t);
    }
  }
  return !1;
}
function Oc(e, t, n) {
  (t = nr(n, t)),
    (t = K2(e, t, 1)),
    (e = Wt(e, t, 1)),
    (t = Ee()),
    e !== null && (ui(e, 1, t), Re(e, t));
}
function re(e, t, n) {
  if (e.tag === 3) Oc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Oc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            ($t === null || !$t.has(r)))
        ) {
          (e = nr(n, e)),
            (e = X2(t, e, 1)),
            (t = Wt(t, e, 1)),
            (e = Ee()),
            t !== null && (ui(t, 1, e), Re(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function wm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ee()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (ge & n) === n &&
      (ue === 4 || (ue === 3 && (ge & 130023424) === ge && 500 > se() - eu)
        ? pn(e, 0)
        : (Ja |= n)),
    Re(e, t);
}
function xf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Pi), (Pi <<= 1), !(Pi & 130023424) && (Pi = 4194304))
      : (t = 1));
  var n = Ee();
  (e = Pt(e, t)), e !== null && (ui(e, t, n), Re(e, n));
}
function Cm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), xf(e, n);
}
function km(e, t) {
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
      throw Error(E(314));
  }
  r !== null && r.delete(t), xf(e, n);
}
var vf;
vf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) Ae = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ae = !1), um(e, t, n);
      Ae = !!(e.flags & 131072);
    }
  else (Ae = !1), K && t.flags & 1048576 && C2(t, xs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Xi(e, t), (e = t.pendingProps);
      var i = qn(t, ke.current);
      Yn(t, n), (i = Za(null, t, r, e, i, n));
      var s = Ya();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            _e(r) ? ((s = !0), ms(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ua(t),
            (i.updater = Ys),
            (t.stateNode = i),
            (i._reactInternals = t),
            bl(t, r, e, n),
            (t = Il(null, t, r, !0, s, n)))
          : ((t.tag = 0), K && s && Da(t), Pe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Xi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Sm(r)),
          (e = Je(r, e)),
          i)
        ) {
          case 0:
            t = Ol(null, t, r, e, n);
            break e;
          case 1:
            t = Tc(null, t, r, e, n);
            break e;
          case 11:
            t = Nc(null, t, r, e, n);
            break e;
          case 14:
            t = Lc(null, t, r, Je(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        Ol(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        Tc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((ef(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          N2(e, t),
          ws(t, r, null, n);
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
            (i = nr(Error(E(423)), t)), (t = Mc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = nr(Error(E(424)), t)), (t = Mc(e, t, r, n, i));
            break e;
          } else
            for (
              be = Ht(t.stateNode.containerInfo.firstChild),
                Be = t,
                K = !0,
                tt = null,
                n = P2(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Jn(), r === i)) {
            t = Et(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        L2(t),
        e === null && Rl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Tl(r, i) ? (o = null) : s !== null && Tl(r, s) && (t.flags |= 32),
        J2(e, t),
        Pe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Rl(t), null;
    case 13:
      return tf(e, t, n);
    case 4:
      return (
        Ha(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = er(t, null, r, n)) : Pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        Nc(e, t, r, i, n)
      );
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          $(vs, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (st(s.value, o)) {
            if (s.children === i.children && !Ve.current) {
              t = Et(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (s.tag === 1) {
                      (u = wt(-1, n & -n)), (u.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (c.pending = u);
                      }
                    }
                    (s.lanes |= n),
                      (u = s.alternate),
                      u !== null && (u.lanes |= n),
                      Dl(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(E(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Dl(o, n, t),
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
        Pe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Yn(t, n),
        (i = Xe(i)),
        (r = r(i)),
        (t.flags |= 1),
        Pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Je(r, t.pendingProps)),
        (i = Je(r.type, i)),
        Lc(e, t, r, i, n)
      );
    case 15:
      return Q2(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        Xi(e, t),
        (t.tag = 1),
        _e(r) ? ((e = !0), ms(t)) : (e = !1),
        Yn(t, n),
        Y2(t, r, i),
        bl(t, r, i, n),
        Il(null, t, r, !0, e, n)
      );
    case 19:
      return nf(e, t, n);
    case 22:
      return q2(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function yf(e, t) {
  return $0(e, t);
}
function jm(e, t, n, r) {
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
function Ye(e, t, n, r) {
  return new jm(e, t, n, r);
}
function iu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Sm(e) {
  if (typeof e == "function") return iu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ja)) return 11;
    if (e === Sa) return 14;
  }
  return 2;
}
function Zt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ye(e.tag, t, e.key, e.mode)),
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
function Ji(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) iu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Tn:
        return mn(n.children, i, s, t);
      case ka:
        (o = 8), (i |= 8);
        break;
      case ll:
        return (
          (e = Ye(12, n, t, i | 2)), (e.elementType = ll), (e.lanes = s), e
        );
      case al:
        return (e = Ye(13, n, t, i)), (e.elementType = al), (e.lanes = s), e;
      case ul:
        return (e = Ye(19, n, t, i)), (e.elementType = ul), (e.lanes = s), e;
      case L0:
        return Qs(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case E0:
              o = 10;
              break e;
            case N0:
              o = 9;
              break e;
            case ja:
              o = 11;
              break e;
            case Sa:
              o = 14;
              break e;
            case Vt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ye(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function mn(e, t, n, r) {
  return (e = Ye(7, e, r, t)), (e.lanes = n), e;
}
function Qs(e, t, n, r) {
  return (
    (e = Ye(22, e, r, t)),
    (e.elementType = L0),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function zo(e, t, n) {
  return (e = Ye(6, e, null, t)), (e.lanes = n), e;
}
function Uo(e, t, n) {
  return (
    (t = Ye(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Pm(e, t, n, r, i) {
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
    (this.eventTimes = ko(0)),
    (this.expirationTimes = ko(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ko(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function su(e, t, n, r, i, s, o, a, u) {
  return (
    (e = new Pm(e, t, n, a, u)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ye(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ua(s),
    e
  );
}
function Em(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ln,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function wf(e) {
  if (!e) return Xt;
  e = e._reactInternals;
  e: {
    if (jn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (_e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (_e(n)) return y2(e, n, t);
  }
  return t;
}
function Cf(e, t, n, r, i, s, o, a, u) {
  return (
    (e = su(n, r, !0, e, i, s, o, a, u)),
    (e.context = wf(null)),
    (n = e.current),
    (r = Ee()),
    (i = Gt(n)),
    (s = wt(r, i)),
    (s.callback = t ?? null),
    Wt(n, s, i),
    (e.current.lanes = i),
    ui(e, i, r),
    Re(e, r),
    e
  );
}
function qs(e, t, n, r) {
  var i = t.current,
    s = Ee(),
    o = Gt(i);
  return (
    (n = wf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = wt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Wt(i, t, o)),
    e !== null && (it(e, i, o, s), Zi(e, i, o)),
    o
  );
}
function Ls(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ic(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ou(e, t) {
  Ic(e, t), (e = e.alternate) && Ic(e, t);
}
function Nm() {
  return null;
}
var kf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function lu(e) {
  this._internalRoot = e;
}
Js.prototype.render = lu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  qs(e, t, null, null);
};
Js.prototype.unmount = lu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cn(function () {
      qs(null, e, null, null);
    }),
      (t[St] = null);
  }
};
function Js(e) {
  this._internalRoot = e;
}
Js.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = q0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
    Dt.splice(n, 0, e), n === 0 && e2(e);
  }
};
function au(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function eo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function zc() {}
function Lm(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = Ls(o);
        s.call(c);
      };
    }
    var o = Cf(t, r, e, 0, null, !1, !1, "", zc);
    return (
      (e._reactRootContainer = o),
      (e[St] = o.current),
      Xr(e.nodeType === 8 ? e.parentNode : e),
      Cn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Ls(u);
      a.call(c);
    };
  }
  var u = su(e, 0, !1, null, null, !1, !1, "", zc);
  return (
    (e._reactRootContainer = u),
    (e[St] = u.current),
    Xr(e.nodeType === 8 ? e.parentNode : e),
    Cn(function () {
      qs(t, u, n, r);
    }),
    u
  );
}
function to(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var u = Ls(o);
        a.call(u);
      };
    }
    qs(t, o, e, i);
  } else o = Lm(n, t, e, i, r);
  return Ls(o);
}
X0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = jr(t.pendingLanes);
        n !== 0 &&
          (Na(t, n | 1), Re(t, se()), !(O & 6) && ((rr = se() + 500), tn()));
      }
      break;
    case 13:
      Cn(function () {
        var r = Pt(e, 1);
        if (r !== null) {
          var i = Ee();
          it(r, e, 1, i);
        }
      }),
        ou(e, 1);
  }
};
La = function (e) {
  if (e.tag === 13) {
    var t = Pt(e, 134217728);
    if (t !== null) {
      var n = Ee();
      it(t, e, 134217728, n);
    }
    ou(e, 134217728);
  }
};
Q0 = function (e) {
  if (e.tag === 13) {
    var t = Gt(e),
      n = Pt(e, t);
    if (n !== null) {
      var r = Ee();
      it(n, e, t, r);
    }
    ou(e, t);
  }
};
q0 = function () {
  return U;
};
J0 = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
yl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((fl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = $s(r);
            if (!i) throw Error(E(90));
            M0(r), fl(r, i);
          }
        }
      }
      break;
    case "textarea":
      V0(e, n);
      break;
    case "select":
      (t = n.value), t != null && Wn(e, !!n.multiple, t, !1);
  }
};
O0 = tu;
I0 = Cn;
var Tm = { usingClientEntryPoint: !1, Events: [di, _n, $s, b0, B0, tu] },
  xr = {
    findFiberByHostInstance: cn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Mm = {
    bundleType: xr.bundleType,
    version: xr.version,
    rendererPackageName: xr.rendererPackageName,
    rendererConfig: xr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = H0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: xr.findFiberByHostInstance || Nm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fi.isDisabled && Fi.supportsFiber)
    try {
      (zs = Fi.inject(Mm)), (ct = Fi);
    } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tm;
ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!au(t)) throw Error(E(200));
  return Em(e, t, null, n);
};
ze.createRoot = function (e, t) {
  if (!au(e)) throw Error(E(299));
  var n = !1,
    r = "",
    i = kf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = su(e, 1, !1, null, null, n, !1, r, i)),
    (e[St] = t.current),
    Xr(e.nodeType === 8 ? e.parentNode : e),
    new lu(t)
  );
};
ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = H0(t)), (e = e === null ? null : e.stateNode), e;
};
ze.flushSync = function (e) {
  return Cn(e);
};
ze.hydrate = function (e, t, n) {
  if (!eo(t)) throw Error(E(200));
  return to(null, e, t, !0, n);
};
ze.hydrateRoot = function (e, t, n) {
  if (!au(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = kf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Cf(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[St] = t.current),
    Xr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Js(t);
};
ze.render = function (e, t, n) {
  if (!eo(t)) throw Error(E(200));
  return to(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function (e) {
  if (!eo(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Cn(function () {
        to(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[St] = null);
        });
      }),
      !0)
    : !1;
};
ze.unstable_batchedUpdates = tu;
ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!eo(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return to(e, t, n, !1, r);
};
ze.version = "18.3.1-next-f1338f8080-20240426";
function jf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jf);
    } catch (e) {
      console.error(e);
    }
}
jf(), (k0.exports = ze);
var Am = k0.exports,
  Uc = Am;
(sl.createRoot = Uc.createRoot), (sl.hydrateRoot = Uc.hydrateRoot);
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ts() {
  return (
    (Ts = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ts.apply(this, arguments)
  );
}
var Ot;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ot || (Ot = {}));
const Hc = "popstate";
function Vm(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return ql(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Pf(i);
  }
  return Rm(t, n, null, e);
}
function De(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Sf(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function _m() {
  return Math.random().toString(36).substr(2, 8);
}
function Wc(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ql(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ts(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? no(t) : t,
      { state: n, key: (t && t.key) || r || _m() }
    )
  );
}
function Pf(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function no(e) {
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
function Rm(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = Ot.Pop,
    u = null,
    c = d();
  c == null && ((c = 0), o.replaceState(Ts({}, o.state, { idx: c }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    a = Ot.Pop;
    let k = d(),
      x = k == null ? null : k - c;
    (c = k), u && u({ action: a, location: y.location, delta: x });
  }
  function h(k, x) {
    a = Ot.Push;
    let p = ql(y.location, k, x);
    c = d() + 1;
    let m = Wc(p, c),
      w = y.createHref(p);
    try {
      o.pushState(m, "", w);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      i.location.assign(w);
    }
    s && u && u({ action: a, location: y.location, delta: 1 });
  }
  function g(k, x) {
    a = Ot.Replace;
    let p = ql(y.location, k, x);
    c = d();
    let m = Wc(p, c),
      w = y.createHref(p);
    o.replaceState(m, "", w),
      s && u && u({ action: a, location: y.location, delta: 0 });
  }
  function v(k) {
    let x = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof k == "string" ? k : Pf(k);
    return (
      (p = p.replace(/ $/, "%20")),
      De(
        x,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, x)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(i, o);
    },
    listen(k) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Hc, f),
        (u = k),
        () => {
          i.removeEventListener(Hc, f), (u = null);
        }
      );
    },
    createHref(k) {
      return t(i, k);
    },
    createURL: v,
    encodeLocation(k) {
      let x = v(k);
      return { pathname: x.pathname, search: x.search, hash: x.hash };
    },
    push: h,
    replace: g,
    go(k) {
      return o.go(k);
    },
  };
  return y;
}
var $c;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})($c || ($c = {}));
function Dm(e, t, n) {
  return n === void 0 && (n = "/"), Fm(e, t, n, !1);
}
function Fm(e, t, n, r) {
  let i = typeof t == "string" ? no(t) : t,
    s = Lf(i.pathname || "/", n);
  if (s == null) return null;
  let o = Ef(e);
  bm(o);
  let a = null;
  for (let u = 0; a == null && u < o.length; ++u) {
    let c = Ym(s);
    a = Gm(o[u], c, r);
  }
  return a;
}
function Ef(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, a) => {
    let u = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    u.relativePath.startsWith("/") &&
      (De(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = Xn([r, u.relativePath]),
      d = n.concat(u);
    s.children &&
      s.children.length > 0 &&
      (De(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Ef(s.children, t, d, c)),
      !(s.path == null && !s.index) &&
        t.push({ path: c, score: Wm(c, s.index), routesMeta: d });
  };
  return (
    e.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let u of Nf(s.path)) i(s, o, u);
    }),
    t
  );
}
function Nf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = Nf(r.join("/")),
    a = [];
  return (
    a.push(...o.map((u) => (u === "" ? s : [s, u].join("/")))),
    i && a.push(...o),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function bm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : $m(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Bm = /^:[\w-]+$/,
  Om = 3,
  Im = 2,
  zm = 1,
  Um = 10,
  Hm = -2,
  Gc = (e) => e === "*";
function Wm(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Gc) && (r += Hm),
    t && (r += Im),
    n
      .filter((i) => !Gc(i))
      .reduce((i, s) => i + (Bm.test(s) ? Om : s === "" ? zm : Um), r)
  );
}
function $m(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Gm(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      c = a === r.length - 1,
      d = s === "/" ? t : t.slice(s.length) || "/",
      f = Zc(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        d
      ),
      h = u.route;
    if (
      (!f &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (f = Zc(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          d
        )),
      !f)
    )
      return null;
    Object.assign(i, f.params),
      o.push({
        params: i,
        pathname: Xn([s, f.pathname]),
        pathnameBase: Km(Xn([s, f.pathnameBase])),
        route: h,
      }),
      f.pathnameBase !== "/" && (s = Xn([s, f.pathnameBase]));
  }
  return o;
}
function Zc(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Zm(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((c, d, f) => {
      let { paramName: h, isOptional: g } = d;
      if (h === "*") {
        let y = a[f] || "";
        o = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[f];
      return (
        g && !v ? (c[h] = void 0) : (c[h] = (v || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function Zm(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Sf(
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
          (o, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
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
function Ym(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Sf(
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
function Lf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Xn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Km = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function Xm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Tf = ["post", "put", "patch", "delete"];
new Set(Tf);
const Qm = ["get", ...Tf];
new Set(Qm);
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ms() {
  return (
    (Ms = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ms.apply(this, arguments)
  );
}
const qm = C.createContext(null),
  Jm = C.createContext(null),
  Mf = C.createContext(null),
  ro = C.createContext(null),
  io = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Af = C.createContext(null);
function uu() {
  return C.useContext(ro) != null;
}
function e3() {
  return uu() || De(!1), C.useContext(ro).location;
}
function t3(e, t) {
  return n3(e, t);
}
function n3(e, t, n, r) {
  uu() || De(!1);
  let { navigator: i } = C.useContext(Mf),
    { matches: s } = C.useContext(io),
    o = s[s.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let c = e3(),
    d;
  if (t) {
    var f;
    let k = typeof t == "string" ? no(t) : t;
    u === "/" || ((f = k.pathname) != null && f.startsWith(u)) || De(!1),
      (d = k);
  } else d = c;
  let h = d.pathname || "/",
    g = h;
  if (u !== "/") {
    let k = u.replace(/^\//, "").split("/");
    g = "/" + h.replace(/^\//, "").split("/").slice(k.length).join("/");
  }
  let v = Dm(e, { pathname: g }),
    y = l3(
      v &&
        v.map((k) =>
          Object.assign({}, k, {
            params: Object.assign({}, a, k.params),
            pathname: Xn([
              u,
              i.encodeLocation
                ? i.encodeLocation(k.pathname).pathname
                : k.pathname,
            ]),
            pathnameBase:
              k.pathnameBase === "/"
                ? u
                : Xn([
                    u,
                    i.encodeLocation
                      ? i.encodeLocation(k.pathnameBase).pathname
                      : k.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && y
    ? C.createElement(
        ro.Provider,
        {
          value: {
            location: Ms(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: Ot.Pop,
          },
        },
        y
      )
    : y;
}
function r3() {
  let e = d3(),
    t = Xm(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement("h2", null, "Unexpected Application Error!"),
    C.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? C.createElement("pre", { style: i }, n) : null,
    null
  );
}
const i3 = C.createElement(r3, null);
class s3 extends C.Component {
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
      ? C.createElement(
          io.Provider,
          { value: this.props.routeContext },
          C.createElement(Af.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function o3(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = C.useContext(qm);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    C.createElement(io.Provider, { value: t }, r)
  );
}
function l3(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let d = o.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    d >= 0 || De(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let f = o[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d),
        f.route.id)
      ) {
        let { loaderData: h, errors: g } = n,
          v =
            f.route.loader &&
            h[f.route.id] === void 0 &&
            (!g || g[f.route.id] === void 0);
        if (f.route.lazy || v) {
          (u = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((d, f, h) => {
    let g,
      v = !1,
      y = null,
      k = null;
    n &&
      ((g = a && f.route.id ? a[f.route.id] : void 0),
      (y = f.route.errorElement || i3),
      u &&
        (c < 0 && h === 0
          ? ((v = !0), (k = null))
          : c === h &&
            ((v = !0), (k = f.route.hydrateFallbackElement || null))));
    let x = t.concat(o.slice(0, h + 1)),
      p = () => {
        let m;
        return (
          g
            ? (m = y)
            : v
            ? (m = k)
            : f.route.Component
            ? (m = C.createElement(f.route.Component, null))
            : f.route.element
            ? (m = f.route.element)
            : (m = d),
          C.createElement(o3, {
            match: f,
            routeContext: { outlet: d, matches: x, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? C.createElement(s3, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: g,
          children: p(),
          routeContext: { outlet: null, matches: x, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Jl = (function (e) {
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
})(Jl || {});
function a3(e) {
  let t = C.useContext(Jm);
  return t || De(!1), t;
}
function u3(e) {
  let t = C.useContext(io);
  return t || De(!1), t;
}
function c3(e) {
  let t = u3(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || De(!1), n.route.id;
}
function d3() {
  var e;
  let t = C.useContext(Af),
    n = a3(Jl.UseRouteError),
    r = c3(Jl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function es(e) {
  De(!1);
}
function f3(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Ot.Pop,
    navigator: s,
    static: o = !1,
    future: a,
  } = e;
  uu() && De(!1);
  let u = t.replace(/^\/*/, "/"),
    c = C.useMemo(
      () => ({
        basename: u,
        navigator: s,
        static: o,
        future: Ms({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, s, o]
    );
  typeof r == "string" && (r = no(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: h = "",
      state: g = null,
      key: v = "default",
    } = r,
    y = C.useMemo(() => {
      let k = Lf(d, u);
      return k == null
        ? null
        : {
            location: { pathname: k, search: f, hash: h, state: g, key: v },
            navigationType: i,
          };
    }, [u, d, f, h, g, v, i]);
  return y == null
    ? null
    : C.createElement(
        Mf.Provider,
        { value: c },
        C.createElement(ro.Provider, { children: n, value: y })
      );
}
function h3(e) {
  let { children: t, location: n } = e;
  return t3(ea(t), n);
}
new Promise(() => {});
function ea(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, i) => {
      if (!C.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === C.Fragment) {
        n.push.apply(n, ea(r.props.children, s));
        return;
      }
      r.type !== es && De(!1), !r.props.index || !r.props.children || De(!1);
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
      r.props.children && (o.children = ea(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const p3 = "6";
try {
  window.__reactRouterVersion = p3;
} catch {}
const m3 = "startTransition",
  Yc = w1[m3];
function g3(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = C.useRef();
  s.current == null && (s.current = Vm({ window: i, v5Compat: !0 }));
  let o = s.current,
    [a, u] = C.useState({ action: o.action, location: o.location }),
    { v7_startTransition: c } = r || {},
    d = C.useCallback(
      (f) => {
        c && Yc ? Yc(() => u(f)) : u(f);
      },
      [u, c]
    );
  return (
    C.useLayoutEffect(() => o.listen(d), [o, d]),
    C.createElement(f3, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
var Kc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Kc || (Kc = {}));
var Xc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Xc || (Xc = {}));
const Vf = "/assets/Logo-CHOK9LHd.svg";
function x3() {
  return l.jsx(l.Fragment, {
    children: l.jsx("footer", {
      className: "bg-gradient-to-b from-[#141517] to-[#0D0E10] pt-12 pb-32",
      children: l.jsxs("div", {
        className: "mx-auto max-w-7xl px-4",
        children: [
          l.jsx("div", {
            children: l.jsxs("div", {
              className: "grid md:grid-cols-3",
              children: [
                l.jsxs("div", {
                  children: [
                    l.jsx("img", { src: Vf }),
                    l.jsx("p", {
                      className: "text-white text-base mt-4",
                      children:
                        "The easiest way to query Blockchain data from 45+ chains including Ethereum, BSC, Polygon",
                    }),
                    l.jsxs("div", {
                      className:
                        "mt-12 inline-grid grid-cols-5 gap-x-6 w-auto social-links",
                      children: [
                        l.jsx("a", {
                          href: "https://x.com",
                          children: l.jsx("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: l.jsx("path", {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M11.6781 7.4714L11.7264 8.26798L10.9213 8.17044C7.99059 7.79654 5.43027 6.52852 3.25641 4.3989L2.19364 3.34222L1.91989 4.12254C1.3402 5.862 1.71056 7.699 2.91826 8.9345C3.56236 9.61728 3.41744 9.71482 2.30636 9.30841C1.91989 9.17835 1.58174 9.08081 1.54953 9.12958C1.43681 9.24338 1.82328 10.7227 2.12923 11.308C2.5479 12.1208 3.40134 12.9174 4.33529 13.3888L5.12432 13.7627L4.19037 13.779C3.28862 13.779 3.25641 13.7952 3.35303 14.1366C3.67508 15.1933 4.94719 16.315 6.36423 16.8027L7.36259 17.1441L6.49305 17.6643C5.20483 18.4121 3.69118 18.8348 2.17753 18.8673C1.45291 18.8836 0.857117 18.9486 0.857117 18.9974C0.857117 19.1599 2.82164 20.0703 3.96493 20.4279C7.3948 21.4846 11.4688 21.0294 14.5283 19.225C16.7021 17.9407 18.876 15.3884 19.8905 12.9174C20.4379 11.6006 20.9854 9.19461 20.9854 8.04039C20.9854 7.29258 21.0337 7.19504 21.9355 6.30093C22.4669 5.78071 22.9661 5.21173 23.0627 5.04916C23.2237 4.74029 23.2076 4.74029 22.3864 5.01665C21.0176 5.50435 20.8244 5.43932 21.5007 4.70778C21.9999 4.18756 22.5957 3.24468 22.5957 2.96831C22.5957 2.91954 22.3542 3.00083 22.0804 3.14714C21.7906 3.3097 21.1465 3.55355 20.6634 3.69986L19.7938 3.97623L19.0048 3.43976C18.57 3.14714 17.9581 2.822 17.6361 2.72446C16.8148 2.49687 15.5588 2.52938 14.8181 2.78949C12.8053 3.52104 11.5332 5.40681 11.6781 7.4714Z",
                              fill: "white",
                            }),
                          }),
                        }),                        
                        l.jsx("a", {
                          href: "https://t.me",
                          children: l.jsxs("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              l.jsx("g", {
                                "clip-path": "url(#clip0_40_2502)",
                                children: l.jsx("path", {
                                  d: "M11.9427 1C9.03033 1.01517 6.24283 2.1847 4.1915 4.25212C2.14017 6.31954 0.992453 9.11609 1.00004 12.0285C1.00762 14.9409 2.16989 17.7314 4.23196 19.7881C6.29403 21.8449 9.08758 22.9999 12 22.9999C14.9124 22.9999 17.706 21.8449 19.768 19.7881C21.8301 17.7314 22.9924 14.9409 23 12.0285C23.0075 9.11609 21.8598 6.31954 19.8085 4.25212C17.7572 2.1847 14.9697 1.01517 12.0573 1M8.90625 13.3177C8.10417 13.8333 7.64583 13.776 6.95833 13.6042C6.27083 13.4323 5.75521 13.2604 5.06771 13.0312C4.38021 12.8021 4.15104 12.2865 5.35417 11.8281C11.7326 9.03993 15.4375 7.49306 16.4688 7.1875C17.5573 6.84375 17.8438 7.30208 17.7292 8.16146C17.4618 10.4531 17.0035 13.3368 16.3542 16.8125C16.1823 17.7865 15.724 18.5885 14.2917 17.6146L10.7396 15.2083C10.2049 14.8264 10.1094 14.4444 10.4531 14.0625C11.1979 13.2031 12.5156 12.1719 14.2917 10.3385C14.4826 10.1476 14.5399 9.99479 14.4635 9.88021C14.3872 9.76562 14.2344 9.78472 14.0052 9.9375",
                                  fill: "white",
                                }),
                              }),
                              l.jsx("defs", {
                                children: l.jsx("clipPath", {
                                  id: "clip0_40_2502",
                                  children: l.jsx("rect", {
                                    width: "24",
                                    height: "24",
                                    fill: "white",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),                       
                        l.jsx("a", {
                          href: "https://mighty-2.gitbook.io/unmarshal",
                          children: l.jsxs("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              l.jsx("g", {
                                "clip-path": "url(#clip0_40_2507)",
                                children: l.jsx("path", {
                                  d: "M12.2641 1C6.04392 1 1 6.04299 1 12.2641C1 17.2409 4.22751 21.4631 8.70307 22.9526C9.26602 23.0568 9.47269 22.7082 9.47269 22.4107C9.47269 22.1421 9.46225 21.2548 9.4574 20.3136C6.32371 20.9949 5.66247 18.9845 5.66247 18.9845C5.15008 17.6826 4.4118 17.3364 4.4118 17.3364C3.38981 16.6373 4.48883 16.6516 4.48883 16.6516C5.61994 16.7311 6.21553 17.8124 6.21553 17.8124C7.22017 19.5344 8.85062 19.0366 9.4934 18.7488C9.59449 18.0207 9.88641 17.5238 10.2085 17.2425C7.70664 16.9577 5.07658 15.9919 5.07658 11.6758C5.07658 10.446 5.51661 9.44117 6.23717 8.65234C6.12021 8.36863 5.73466 7.22297 6.34628 5.67142C6.34628 5.67142 7.29217 5.36869 9.44471 6.82604C10.3432 6.57646 11.3068 6.4513 12.2641 6.44701C13.2214 6.4513 14.1857 6.57646 15.0859 6.82604C17.2358 5.36869 18.1804 5.67142 18.1804 5.67142C18.7935 7.22297 18.4078 8.36863 18.2908 8.65234C19.0131 9.44117 19.4501 10.446 19.4501 11.6758C19.4501 16.0021 16.815 16.9547 14.3068 17.2336C14.7108 17.5831 15.0708 18.2686 15.0708 19.3195C15.0708 20.8267 15.0577 22.0397 15.0577 22.4107C15.0577 22.7104 15.2605 23.0617 15.8315 22.9511C20.3046 21.46 23.528 17.2392 23.528 12.2641C23.528 6.04299 18.4848 1 12.2641 1ZM5.21877 17.0459C5.19396 17.1019 5.10592 17.1187 5.02571 17.0803C4.94401 17.0435 4.89813 16.9672 4.92461 16.9111C4.94886 16.8534 5.03709 16.8374 5.1186 16.876C5.20049 16.9128 5.24712 16.9898 5.21877 17.0459ZM5.77284 17.5403C5.71912 17.5901 5.6141 17.567 5.54285 17.4883C5.46917 17.4098 5.45537 17.3047 5.50983 17.2542C5.56523 17.2044 5.66708 17.2277 5.74094 17.3062C5.81462 17.3857 5.82898 17.49 5.77284 17.5403ZM6.15295 18.1729C6.08393 18.2208 5.97108 18.1759 5.90132 18.0757C5.83231 17.9755 5.83231 17.8554 5.90281 17.8073C5.97276 17.7592 6.08393 17.8024 6.15463 17.9019C6.22346 18.0037 6.22346 18.1238 6.15295 18.1729ZM6.7958 18.9055C6.73406 18.9735 6.60256 18.9553 6.50631 18.8624C6.40782 18.7715 6.3804 18.6426 6.44233 18.5746C6.50482 18.5063 6.63706 18.5255 6.73406 18.6176C6.8318 18.7083 6.86164 18.8381 6.7958 18.9055ZM7.62662 19.1528C7.59939 19.241 7.47274 19.2811 7.34515 19.2436C7.21775 19.205 7.13437 19.1017 7.16011 19.0125C7.1866 18.9237 7.31381 18.8819 7.44233 18.922C7.56954 18.9605 7.65311 19.0631 7.62662 19.1528ZM8.57213 19.2577C8.5753 19.3506 8.46712 19.4276 8.33319 19.4293C8.19851 19.4323 8.08958 19.3571 8.08809 19.2657C8.08809 19.1719 8.19385 19.0956 8.32853 19.0933C8.46245 19.0907 8.57213 19.1653 8.57213 19.2577ZM9.50099 19.2221C9.51703 19.3127 9.42395 19.4058 9.29096 19.4306C9.1602 19.4545 9.03914 19.3985 9.02254 19.3086C9.00632 19.2157 9.10107 19.1227 9.23164 19.0986C9.36482 19.0755 9.48402 19.1299 9.50099 19.2221Z",
                                  fill: "white",
                                }),
                              }),
                              l.jsx("defs", {
                                children: l.jsx("clipPath", {
                                  id: "clip0_40_2507",
                                  children: l.jsx("rect", {
                                    width: "22.528",
                                    height: "22",
                                    fill: "white",
                                    transform: "translate(1 1)",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                l.jsx("div", {}),
                l.jsxs("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    l.jsxs("div", {
                      children: [ 
                        l.jsxs("ul", {
                          class: "text-[#C5C5C5] footer-links",
                          children: [
                            l.jsx("li", {
                              children: l.jsx("a", {
                                href: "/about",
                                class: "hover:underline",
                                children: "About Us",
                              }),
                            }),                                                                                                            
                            l.jsx("li", {
                              children: l.jsx("a", {
                                href: "#product-suit",
                                class: "hover:underline",
                                children: "Products",
                              }),
                            }),
                            l.jsx("li", {
                              children: l.jsx("a", {
                                href: "/about",
                                class: "hover:underline",
                                children: "Company",
                              }),
                            }),
                            l.jsx("li", {
                              children: l.jsx("a", {
                                href: "https://mighty-2.gitbook.io/unmarshal",
                                target: "_blank",
                                class: "hover:underline",
                                children: "Whitepaper",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),                    
                  ],
                }),
              ],
            }),
          }),
          l.jsxs("div", {
            className: "pt-8 grid md:grid-cols-2 md:justify-between",
            children: [
              l.jsx("div", {
                className: "text-[#C5C5C5]",
                children: "© 2024 Unmarshal. All Rights Reserved",
              }),              
            ],
          }),
        ],
      }),
    }),
  });
}
const v3 = "/assets/buit-it-BhUUHJ3w.svg",
  y3 =
    "data:image/svg+xml,%3csvg%20width='613'%20height='393'%20viewBox='0%200%20613%20393'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_40_2425)'%3e%3cpath%20opacity='0.6'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M318.239%20132.068H277.403V-94.7969H272.866V132.068H254.716V-94.7969H250.179V132.068H232.03V-94.7969H227.493V132.068H209.343V-94.7969H204.806V132.068H-22.0592V136.606H204.806V154.755H-22.0592V159.292H204.806V177.441H-22.0592V181.979H204.806V200.128H-22.0592V204.665H204.806V245.501C204.806%20308.148%20255.592%20358.934%20318.239%20358.934C380.886%20358.934%20431.671%20308.148%20431.671%20245.501C431.671%20182.854%20380.886%20132.068%20318.239%20132.068ZM227.493%20154.755H209.343V136.606H227.493V154.755ZM232.03%20154.755H250.179V136.606H232.03V154.755ZM254.716%20154.755H272.866V136.606H254.716V154.755ZM277.403%20154.755V136.606H318.239C378.38%20136.606%20427.134%20185.36%20427.134%20245.501C427.134%20305.642%20378.38%20354.396%20318.239%20354.396C258.097%20354.396%20209.343%20305.642%20209.343%20245.501V204.665H227.493V245.501C227.493%20295.619%20268.121%20336.247%20318.239%20336.247C368.356%20336.247%20408.985%20295.619%20408.985%20245.501C408.985%20195.383%20368.356%20154.755%20318.239%20154.755H277.403ZM227.493%20200.128H209.343V181.979H227.493V200.128ZM232.03%20204.665V245.501C232.03%20293.113%20270.627%20331.71%20318.239%20331.71C365.85%20331.71%20404.447%20293.113%20404.447%20245.501C404.447%20197.889%20365.85%20159.292%20318.239%20159.292H277.403V177.441H318.239C355.827%20177.441%20386.298%20207.913%20386.298%20245.501C386.298%20283.089%20355.827%20313.561%20318.239%20313.561C280.65%20313.561%20250.179%20283.089%20250.179%20245.501V204.665H232.03ZM254.716%20177.441H272.866V159.292H254.716V177.441ZM250.179%20159.292V177.441H232.03V159.292H250.179ZM250.179%20181.979V200.128H232.03V181.979H250.179ZM254.716%20245.501V204.665H272.866V245.501C272.866%20270.56%20293.18%20290.874%20318.239%20290.874C343.297%20290.874%20363.612%20270.56%20363.612%20245.501C363.612%20220.442%20343.297%20200.128%20318.239%20200.128H277.403V181.979H318.239C353.321%20181.979%20381.761%20210.419%20381.761%20245.501C381.761%20280.583%20353.321%20309.023%20318.239%20309.023C283.156%20309.023%20254.716%20280.583%20254.716%20245.501ZM277.403%20245.501C277.403%20268.054%20295.686%20286.337%20318.239%20286.337C340.792%20286.337%20359.074%20268.054%20359.074%20245.501C359.074%20222.948%20340.792%20204.665%20318.239%20204.665H277.403V245.501ZM272.866%20200.128V181.979H254.716V200.128H272.866ZM227.493%20177.441H209.343V159.292H227.493V177.441Z'%20fill='url(%23paint0_linear_40_2425)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_40_2425'%20x1='419.926'%20y1='311.223'%20x2='96.845'%20y2='23.3346'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_40_2425'%3e%3crect%20width='612.315'%20height='392.629'%20fill='white'%20transform='translate(-0.00012207%200.167969)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  w3 = "/assets/gain-insight-CerVL8Un.png",
  C3 = "/assets/access-detailed-D7VdfEzk.png",
  k3 = "/assets/monitor-analyze-GsLSjWve.png",
  j3 = "/assets/track-manage-RLZITlZf.png";
function S3(e) {
  let t = l.jsx(l.Fragment, {});
  return (
    e.activeTab == 0 &&
      (t = l.jsxs("div", {
        className: "grid md:grid-cols-12 gap-y-2 md:gap-2 mt-16",
        children: [
          l.jsx("div", {
            className: "col-span-12 md:col-span-5 max-w-[415px]",
            children: l.jsxs("div", {
              className: "grid",
              children: [
                l.jsxs("div", {
                  children: [
                    l.jsx("div", {
                      children: l.jsxs("svg", {
                        width: "64",
                        height: "64",
                        viewBox: "0 0 64 64",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          l.jsx("rect", {
                            width: "64",
                            height: "64",
                            rx: "32",
                            fill: "#212227",
                          }),
                          l.jsxs("g", {
                            "clip-path": "url(#clip0_40_2590)",
                            children: [
                              l.jsx("path", {
                                d: "M29 44C32.866 44 36 38.6274 36 32C36 25.3726 32.866 20 29 20C25.134 20 22 25.3726 22 32C22 38.6274 25.134 44 29 44Z",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M29 20H35C38.8663 20 42 25.375 42 32C42 38.625 38.8663 44 35 44H29",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M34.2175 24H40.2175",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M36 32H42",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M34.2175 40H40.2175",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                            ],
                          }),
                          l.jsx("defs", {
                            children: l.jsx("clipPath", {
                              id: "clip0_40_2590",
                              children: l.jsx("rect", {
                                width: "32",
                                height: "32",
                                fill: "white",
                                transform: "translate(16 16)",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("h3", {
                      className:
                        "text-3xl md:text-[40px] pt-6 text-white leading-tight",
                      children: "Gain instant insight into your balances.",
                    }),
                  ],
                }),
                l.jsx("div", {
                  className: "flex items-end",
                  children: l.jsx("a", {
                    href: "https://docs.unmarshal.io/reference/fungibleerc20tokenbalances",
                    target: "_blank",
                    className: "btn-gradient mt-8 mb-8 md:mt-12",
                    children: l.jsxs("span", {
                      className: "bg",
                      children: [
                        l.jsx("span", { children: "Try It Out" }),
                        l.jsxs("svg", {
                          width: "16",
                          height: "16",
                          viewBox: "0 0 16 16",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            l.jsxs("g", {
                              "clip-path": "url(#clip0_6_231)",
                              children: [
                                l.jsx("path", {
                                  d: "M2.5 8H13.5",
                                  stroke: "white",
                                  strokeWidth: "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M9 3.5L13.5 8L9 12.5",
                                  stroke: "white",
                                  strokeWidth: "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                              ],
                            }),
                            l.jsx("defs", {
                              children: l.jsx("clipPath", {
                                id: "clip0_6_231",
                                children: l.jsx("rect", {
                                  width: "16",
                                  height: "16",
                                  fill: "white",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
          l.jsx("div", {
            className: "col-span-12 md:col-span-7",
            children: l.jsx("div", {
              className: "",
              children: l.jsx("div", {
                className: "h-full",
                children: l.jsx("img", { src: w3, className: "w-full" }),
              }),
            }),
          }),
        ],
      })),
    e.activeTab == 1 &&
      (t = l.jsxs("div", {
        className: "grid md:grid-cols-12 gap-y-2 md:gap-2 mt-16 ",
        children: [
          l.jsx("div", {
            className: "col-span-12 md:col-span-5 max-w-[415px]",
            children: l.jsxs("div", {
              className: "grid",
              children: [
                l.jsxs("div", {
                  children: [
                    l.jsx("div", {
                      children: l.jsxs("svg", {
                        width: "64",
                        height: "64",
                        viewBox: "0 0 64 64",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          l.jsx("rect", {
                            width: "64",
                            height: "64",
                            rx: "32",
                            fill: "#212227",
                          }),
                          l.jsxs("g", {
                            "clip-path": "url(#clip0_40_2590)",
                            children: [
                              l.jsx("path", {
                                d: "M29 44C32.866 44 36 38.6274 36 32C36 25.3726 32.866 20 29 20C25.134 20 22 25.3726 22 32C22 38.6274 25.134 44 29 44Z",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M29 20H35C38.8663 20 42 25.375 42 32C42 38.625 38.8663 44 35 44H29",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M34.2175 24H40.2175",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M36 32H42",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M34.2175 40H40.2175",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                            ],
                          }),
                          l.jsx("defs", {
                            children: l.jsx("clipPath", {
                              id: "clip0_40_2590",
                              children: l.jsx("rect", {
                                width: "32",
                                height: "32",
                                fill: "white",
                                transform: "translate(16 16)",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("h3", {
                      className:
                        "text-3xl md:text-[40px] pt-6 text-white leading-tight",
                      children:
                        "Monitor and analyze real-time blockchain transactions with ease.",
                    }),
                  ],
                }),
                l.jsx("div", {
                  className: "flex items-end",
                  children: l.jsx("a", {
                    href: "https://docs.unmarshal.io/reference/get-v3-chain-address-address-transactions",
                    target: "_blank",
                    className: "btn-gradient mt-8 mb-8 md:mt-12",
                    children: l.jsxs("span", {
                      className: "bg",
                      children: [
                        l.jsx("span", { children: "Try It Out" }),
                        l.jsxs("svg", {
                          width: "16",
                          height: "16",
                          viewBox: "0 0 16 16",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            l.jsxs("g", {
                              "clip-path": "url(#clip0_6_231)",
                              children: [
                                l.jsx("path", {
                                  d: "M2.5 8H13.5",
                                  stroke: "white",
                                  strokeWidth: "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M9 3.5L13.5 8L9 12.5",
                                  stroke: "white",
                                  strokeWidth: "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                              ],
                            }),
                            l.jsx("defs", {
                              children: l.jsx("clipPath", {
                                id: "clip0_6_231",
                                children: l.jsx("rect", {
                                  width: "16",
                                  height: "16",
                                  fill: "white",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
          l.jsx("div", {
            className: "col-span-12 md:col-span-7",
            children: l.jsx("div", {
              className: "",
              children: l.jsx("div", {
                className: "h-full",
                children: l.jsx("img", { src: k3, className: "w-full" }),
              }),
            }),
          }),
        ],
      })),
    e.activeTab == 2 &&
      (t = l.jsxs("div", {
        className: "grid md:grid-cols-12 gap-y-2 md:gap-2 mt-16",
        children: [
          l.jsx("div", {
            className: "col-span-12 md:col-span-5 max-w-[415px]",
            children: l.jsxs("div", {
              className: "grid",
              children: [
                l.jsxs("div", {
                  children: [
                    l.jsx("div", {
                      children: l.jsxs("svg", {
                        width: "64",
                        height: "64",
                        viewBox: "0 0 64 64",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          l.jsx("rect", {
                            width: "64",
                            height: "64",
                            rx: "32",
                            fill: "#212227",
                          }),
                          l.jsxs("g", {
                            "clip-path": "url(#clip0_40_2590)",
                            children: [
                              l.jsx("path", {
                                d: "M29 44C32.866 44 36 38.6274 36 32C36 25.3726 32.866 20 29 20C25.134 20 22 25.3726 22 32C22 38.6274 25.134 44 29 44Z",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M29 20H35C38.8663 20 42 25.375 42 32C42 38.625 38.8663 44 35 44H29",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M34.2175 24H40.2175",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M36 32H42",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M34.2175 40H40.2175",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                            ],
                          }),
                          l.jsx("defs", {
                            children: l.jsx("clipPath", {
                              id: "clip0_40_2590",
                              children: l.jsx("rect", {
                                width: "32",
                                height: "32",
                                fill: "white",
                                transform: "translate(16 16)",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("h3", {
                      className:
                        "text-3xl md:text-[40px] pt-6 text-white leading-tight",
                      children:
                        "Track and manage your NFT holdings effortlessly.",
                    }),
                  ],
                }),
                l.jsx("div", {
                  className: "flex items-end",
                  children: l.jsx("a", {
                    href: "https://docs.unmarshal.io/reference/get-v3-chain-address-address-nft-assets",
                    target: "_blank",
                    className: "btn-gradient mt-8 mb-8 md:mt-12",
                    children: l.jsxs("span", {
                      className: "bg",
                      children: [
                        l.jsx("span", { children: "Try It Out" }),
                        l.jsxs("svg", {
                          width: "16",
                          height: "16",
                          viewBox: "0 0 16 16",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            l.jsxs("g", {
                              "clip-path": "url(#clip0_6_231)",
                              children: [
                                l.jsx("path", {
                                  d: "M2.5 8H13.5",
                                  stroke: "white",
                                  strokeWidth: "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M9 3.5L13.5 8L9 12.5",
                                  stroke: "white",
                                  strokeWidth: "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                              ],
                            }),
                            l.jsx("defs", {
                              children: l.jsx("clipPath", {
                                id: "clip0_6_231",
                                children: l.jsx("rect", {
                                  width: "16",
                                  height: "16",
                                  fill: "white",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
          l.jsx("div", {
            className: "col-span-12 md:col-span-7",
            children: l.jsx("div", {
              className: "",
              children: l.jsx("div", {
                className: "h-full",
                children: l.jsx("img", { src: j3, className: "w-full" }),
              }),
            }),
          }),
        ],
      })),
    e.activeTab == 3 &&
      (t = l.jsxs("div", {
        className: "grid md:grid-cols-12 gap-y-2 md:gap-2 mt-16",
        children: [
          l.jsx("div", {
            className: "col-span-12 md:col-span-5 max-w-[415px]",
            children: l.jsxs("div", {
              className: "grid",
              children: [
                l.jsxs("div", {
                  children: [
                    l.jsx("div", {
                      children: l.jsxs("svg", {
                        width: "64",
                        height: "64",
                        viewBox: "0 0 64 64",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          l.jsx("rect", {
                            width: "64",
                            height: "64",
                            rx: "32",
                            fill: "#212227",
                          }),
                          l.jsxs("g", {
                            "clip-path": "url(#clip0_40_2590)",
                            children: [
                              l.jsx("path", {
                                d: "M29 44C32.866 44 36 38.6274 36 32C36 25.3726 32.866 20 29 20C25.134 20 22 25.3726 22 32C22 38.6274 25.134 44 29 44Z",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M29 20H35C38.8663 20 42 25.375 42 32C42 38.625 38.8663 44 35 44H29",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M34.2175 24H40.2175",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M36 32H42",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M34.2175 40H40.2175",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                            ],
                          }),
                          l.jsx("defs", {
                            children: l.jsx("clipPath", {
                              id: "clip0_40_2590",
                              children: l.jsx("rect", {
                                width: "32",
                                height: "32",
                                fill: "white",
                                transform: "translate(16 16)",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    l.jsx("h3", {
                      className:
                        "text-3xl md:text-[40px] pt-6 text-white leading-tight",
                      children:
                        "Access detailed history of all your NFT transactions.",
                    }),
                  ],
                }),
                l.jsx("div", {
                  className: "flex items-end",
                  children: l.jsx("a", {
                    href: "https://docs.unmarshal.io/reference/get-v2-chain-address-address-nft-transactions",
                    target: "_blank",
                    className: "btn-gradient mt-8 mb-8 md:mt-12",
                    children: l.jsxs("span", {
                      className: "bg",
                      children: [
                        l.jsx("span", { children: "Try It Out" }),
                        l.jsxs("svg", {
                          width: "16",
                          height: "16",
                          viewBox: "0 0 16 16",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            l.jsxs("g", {
                              "clip-path": "url(#clip0_6_231)",
                              children: [
                                l.jsx("path", {
                                  d: "M2.5 8H13.5",
                                  stroke: "white",
                                  strokeWidth: "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M9 3.5L13.5 8L9 12.5",
                                  stroke: "white",
                                  strokeWidth: "2",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                              ],
                            }),
                            l.jsx("defs", {
                              children: l.jsx("clipPath", {
                                id: "clip0_6_231",
                                children: l.jsx("rect", {
                                  width: "16",
                                  height: "16",
                                  fill: "white",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
          l.jsx("div", {
            className: "col-span-12 md:col-span-7",
            children: l.jsx("div", {
              className: "",
              children: l.jsx("div", {
                className: "h-full",
                children: l.jsx("img", { src: C3, className: "w-full" }),
              }),
            }),
          }),
        ],
      })),
    l.jsx(
      "div",
      { class: "", id: `feature-tab-${e.activeTab}`, children: t },
      e.activeTab
    )
  );
}
function P3() {
  const [e, t] = C.useState(0),
    [n, r] = C.useState(!1);
  return (
    C.useEffect(() => {
      n == !1 && r(!0);
    }, [n]),
    l.jsxs(l.Fragment, {
      children: [
      ],
    })
  );
}
function E3() {
  return l.jsx(l.Fragment, {
    children: l.jsx("section", {
      className: "bg-gradient-to-b from-[#141517] to-[#0D0E10] pt-16 pb-32",
      "data-aos": "fade-up",
      "data-aos-duration": "1500",
      children: l.jsxs("div", {
        className: "mx-auto max-w-7xl px-4",
        children: [
          l.jsxs("div", {
            className: "text-center",
            children: [
              l.jsx("span", {
                "data-aos": "fade-up",
                "data-aos-duration": "1500",
                className:
                  "inline-flex px-3 py-1 bg-white/[.1] uppercase text-white/[.8] text-xs rounded-full font-semibold mb-6 ",
                children: "What we do differently at Unmarshal?",
              }),
              l.jsx("h2", {
                "data-aos": "fade-up",
                "data-aos-duration": "1500",
                className:
                  "text-5xl md:text-[56px] mx-auto text-white max-w-[680px] leading-tight ",
                children: "Why choose us?",
              }),
            ],
          }),
          l.jsxs("div", {
            className: "grid md:grid-cols-3 gap-4 mt-16 why-choose",
            children: [
              l.jsx("div", {
                className:
                  "p-[1px] rounded-[20px] bg-white/[.07] backdrop-blur-lg group why-choose-border",
                "data-aos": "fade-up",
                "data-aos-duration": "1500",
                children: l.jsx("div", {
                  className:
                    "bg-[#141518] p-8 rounded-[20px] h-full why-choose-bg",
                  children: l.jsxs("div", {
                    class: "",
                    children: [
                      l.jsx("div", {
                        children: l.jsxs("svg", {
                          width: "48",
                          height: "48",
                          viewBox: "0 0 48 48",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            l.jsxs("g", {
                              "clip-path": "url(#clip0_40_2092)",
                              children: [
                                l.jsx("path", {
                                  d: "M28.5 19.5H19.5V28.5H28.5V19.5Z",
                                  stroke: "#00EC97",
                                  "stroke-width": "3",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M37.5 9H10.5C9.67157 9 9 9.67157 9 10.5V37.5C9 38.3284 9.67157 39 10.5 39H37.5C38.3284 39 39 38.3284 39 37.5V10.5C39 9.67157 38.3284 9 37.5 9Z",
                                  stroke: "#00EC97",
                                  "stroke-width": "3",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M39 19.5H43.5",
                                  stroke: "#00EC97",
                                  "stroke-width": "3",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M39 28.5H43.5",
                                  stroke: "#00EC97",
                                  "stroke-width": "3",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M4.5 19.5H9",
                                  stroke: "#00EC97",
                                  "stroke-width": "3",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M4.5 28.5H9",
                                  stroke: "#00EC97",
                                  "stroke-width": "3",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M28.5 39V43.5",
                                  stroke: "#00EC97",
                                  "stroke-width": "3",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M19.5 39V43.5",
                                  stroke: "#00EC97",
                                  "stroke-width": "3",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M28.5 4.5V9",
                                  stroke: "#00EC97",
                                  "stroke-width": "3",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M19.5 4.5V9",
                                  stroke: "#00EC97",
                                  "stroke-width": "3",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                              ],
                            }),
                            l.jsx("defs", {
                              children: l.jsx("clipPath", {
                                id: "clip0_40_2092",
                                children: l.jsx("rect", {
                                  width: "48",
                                  height: "48",
                                  fill: "white",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      l.jsxs("h3", {
                        class: "text-2xl text-white mt-12",
                        children: ["Deep", l.jsx("br", {}), "Indexing"],
                      }),
                      l.jsx("p", {
                        class: "mt-4 text-white/[.7]",
                        children:
                          "We’re best in class data decoders extract rich information. It synthesises on-chain & off-chain data to get contextual meaning.",
                      }),       
                    ],
                  }),
                }),
              }),
              l.jsx("div", {
                className:
                  "p-[1px] rounded-[20px] bg-white/[.07] backdrop-blur-lg group why-choose-border",
                "data-aos": "fade-up",
                "data-aos-duration": "1500",
                children: l.jsx("div", {
                  className:
                    "bg-[#141518] p-8 rounded-[20px] h-full why-choose-bg",
                  children: l.jsxs("div", {
                    class: "",
                    children: [
                      l.jsx("div", {
                        children: l.jsxs("svg", {
                          width: "49",
                          height: "48",
                          viewBox: "0 0 49 48",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            l.jsxs("g", {
                              "clip-path": "url(#clip0_40_2117)",
                              children: [
                                l.jsx("path", {
                                  d: "M36.3334 34.5C37.9902 34.5 39.3334 33.1569 39.3334 31.5C39.3334 29.8431 37.9902 28.5 36.3334 28.5C34.6765 28.5 33.3334 29.8431 33.3334 31.5C33.3334 33.1569 34.6765 34.5 36.3334 34.5Z",
                                  fill: "#00EC97",
                                }),
                                l.jsx("path", {
                                  d: "M24.3334 15C25.9902 15 27.3334 13.6569 27.3334 12C27.3334 10.3431 25.9902 9 24.3334 9C22.6765 9 21.3334 10.3431 21.3334 12C21.3334 13.6569 22.6765 15 24.3334 15Z",
                                  fill: "#00EC97",
                                }),
                                l.jsx("path", {
                                  d: "M12.3334 34.5C13.9902 34.5 15.3334 33.1569 15.3334 31.5C15.3334 29.8431 13.9902 28.5 12.3334 28.5C10.6765 28.5 9.33337 29.8431 9.33337 31.5C9.33337 33.1569 10.6765 34.5 12.3334 34.5Z",
                                  fill: "#00EC97",
                                }),
                                l.jsx("path", {
                                  d: "M6.33337 27C5.62034 27.9507 5.14343 29.0573 4.94195 30.2284C4.74047 31.3996 4.82018 32.6019 5.17452 33.7363C5.52886 34.8706 6.14768 35.9045 6.97999 36.7527C7.8123 37.601 8.83426 38.2393 9.96167 38.6151C11.0891 38.9909 12.2896 39.0934 13.4644 38.9142C14.6392 38.735 15.7546 38.2792 16.7187 37.5843C17.6828 36.8895 18.4679 35.9754 19.0094 34.9176C19.551 33.8598 19.8334 32.6884 19.8334 31.5H36.3334",
                                  stroke: "#00EC97",
                                  "stroke-width": "3",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M31.2071 8.99735C30.7356 7.91975 30.0172 6.96817 29.11 6.21946C28.2028 5.47076 27.1323 4.94592 25.9848 4.68736C24.8373 4.42879 23.6451 4.44374 22.5045 4.73101C21.3639 5.01827 20.3068 5.56978 19.4187 6.341C18.5305 7.11223 17.8362 8.08153 17.3919 9.17061C16.9475 10.2597 16.7656 11.438 16.8607 12.6104C16.9558 13.7828 17.3254 14.9164 17.9395 15.9196C18.5536 16.9228 19.395 17.7675 20.3959 18.3855L12.3334 31.4973",
                                  stroke: "#00EC97",
                                  "stroke-width": "3",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M36.3334 39C37.4923 38.9988 38.6351 38.729 39.6722 38.2119C40.7094 37.6947 41.6125 36.9443 42.3109 36.0194C43.0092 35.0945 43.4837 34.0204 43.6972 32.8813C43.9106 31.7423 43.8572 30.5692 43.5411 29.4543C43.225 28.3393 42.6548 27.3128 41.8753 26.4552C41.0957 25.5977 40.1281 24.9324 39.0483 24.5117C37.9684 24.091 36.8058 23.9262 35.6516 24.0303C34.4974 24.1345 33.383 24.5047 32.3959 25.1119L24.3334 12",
                                  stroke: "#00EC97",
                                  "stroke-width": "3",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                              ],
                            }),
                            l.jsx("defs", {
                              children: l.jsx("clipPath", {
                                id: "clip0_40_2117",
                                children: l.jsx("rect", {
                                  width: "48",
                                  height: "48",
                                  fill: "white",
                                  transform: "translate(0.333374)",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      l.jsxs("h3", {
                        class: "text-2xl text-white mt-12",
                        children: ["Rich ", l.jsx("br", {}), "API suite"],
                      }),
                      l.jsx("p", {
                        class: "mt-4 text-white/[.7]",
                        children:
                          "Unmarshal Indexertracks every single data bit that flows into blockchain and helps retrieve it easily. Token balances etc.",
                      }),                                           
                    ],
                  }),
                }),
              }),
              l.jsx("div", {
                className:
                  "p-[1px] rounded-[20px] bg-white/[.07] backdrop-blur-lg group why-choose-border",
                "data-aos": "fade-up",
                "data-aos-duration": "1500",
                children: l.jsx("div", {
                  className:
                    "bg-[#141518] p-8 rounded-[20px] h-full why-choose-bg",
                  children: l.jsxs("div", {
                    className: "",
                    children: [
                      l.jsx("div", {
                        children: l.jsxs("svg", {
                          width: "49",
                          height: "48",
                          viewBox: "0 0 49 48",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            l.jsxs("g", {
                              "clip-path": "url(#clip0_40_2138)",
                              children: [
                                l.jsx("path", {
                                  d: "M16.4166 30C21.8014 30 26.1666 25.6348 26.1666 20.25C26.1666 14.8652 21.8014 10.5 16.4166 10.5C11.0318 10.5 6.66663 14.8652 6.66663 20.25C6.66663 25.6348 11.0318 30 16.4166 30Z",
                                  stroke: "#00EC97",
                                  "stroke-width": "3",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M2.58472 37.502C4.08301 35.1983 6.13296 33.3053 8.54846 31.9949C10.964 30.6844 13.6685 29.998 16.4166 29.998C19.1647 29.998 21.8692 30.6844 24.2847 31.9949C26.7002 33.3053 28.7502 35.1983 30.2485 37.502",
                                  stroke: "#00EC97",
                                  "stroke-width": "3",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M32.9166 30C35.6646 29.9984 38.3693 30.6837 40.785 31.9935C43.2007 33.3033 45.2506 35.1962 46.7485 37.5",
                                  stroke: "#00EC97",
                                  "stroke-width": "3",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                                l.jsx("path", {
                                  d: "M29.296 11.1937C30.6297 10.6618 32.0645 10.431 33.4977 10.5179C34.931 10.6047 36.3274 11.007 37.5871 11.6961C38.8469 12.3852 39.9388 13.344 40.785 14.5041C41.6312 15.6641 42.2108 16.9968 42.4822 18.4068C42.7537 19.8168 42.7104 21.2693 42.3554 22.6606C42.0003 24.0519 41.3424 25.3476 40.4286 26.4552C39.5147 27.5627 38.3675 28.4548 37.069 29.0676C35.7704 29.6803 34.3525 29.9987 32.9166 30",
                                  stroke: "#00EC97",
                                  "stroke-width": "3",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                              ],
                            }),
                            l.jsx("defs", {
                              children: l.jsx("clipPath", {
                                id: "clip0_40_2138",
                                children: l.jsx("rect", {
                                  width: "48",
                                  height: "48",
                                  fill: "white",
                                  transform: "translate(0.666626)",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      l.jsx("h3", {
                        className: "text-2xl text-white mt-12",
                        children: "Customer Centric and True SAAS",
                      }),
                      l.jsx("p", {
                        className: "mt-4 text-white/[.7]",
                        children:
                          "We offer 24X7 support assistance and dedicated channels for enterprise clients with flexible pricing plans.",
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
  });
}
const N3 = "/assets/DefiAPi-PEVCLH_e.mp4",
  L3 = "/assets/Nft-kiC4ErmU.mp4",
  T3 = "/assets/notificationS-B9USsXDf.mp4",
  M3 = "/assets/insight-BGoE_0R8.mp4";
function A3() {
  return l.jsx(l.Fragment, {
    children: l.jsx("section", {
      className: "bg-[#0D0E10] pt-12 pb-12",
      children: l.jsxs("div", {
        className: "max-w-7xl mx-auto px-4",
        children: [
          l.jsx("div", {
            "data-aos": "fade-up",
            "data-aos-duration": "1500",
            children: l.jsx("span", {
              className:
                "inline-flex px-3 py-1 bg-white/[.1] uppercase text-white/[.8] text-xs rounded-full font-semibold mb-6 ",
              children: "Unmarshal Features",
            }),
          }),
          l.jsxs("div", {
            className: "grid md:grid-cols-12 md:gap-12 mb-16",
            "data-aos": "fade-up",
            "data-aos-duration": "1500",
            children: [
              l.jsx("h2", {
                className:
                  "text-3xl mb-6 md:mb-0 md:text-[56px] mx-auto text-white leading-tight col-span-12 md:col-span-9",
                children:
                  "Product suite that supports 360° view of blockchain data",
              }),             
            ],
          }),
          l.jsxs("div", {
            className: "grid md:grid-cols-12 gap-y-2 md:gap-2",
            children: [
              l.jsx("div", {
                className:
                  "col-span-12 md:col-span-7 p-[1px] rounded-[20px] bg-white/[.07] backdrop-blur-lg video-bg",
                "data-aos": "fade-up",
                "data-aos-duration": "1500",
                children: l.jsxs("div", {
                  className: "bg-[#141518] p-4 rounded-[20px] h-full",
                  children: [
                    l.jsx("video", {
                      className: "w-full",
                      autoPlay: !0,
                      loop: !0,
                      muted: !0,
                      children: l.jsx("source", { src: N3, type: "video/mp4" }),
                    }),
                    l.jsxs("div", {
                      className: "px-4 mb-4",
                      children: [
                        l.jsx("h3", {
                          className: "text-2xl font-medium text-white mt-4",
                          children: "DeFi APIs",
                        }),
                        l.jsx("p", {
                          className: "text-white/[.8] mt-2",
                          children:
                            "Experience the power of the Unmarshal Network, where blockchain indexing meets decentralization via our Proof of Staked Authority model.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              l.jsx("div", {
                className:
                  "col-span-12 md:col-span-5 p-[1px] rounded-[20px] bg-white/[.07] backdrop-blur-lg video-bg",
                "data-aos": "fade-up",
                "data-aos-duration": "1500",
                children: l.jsxs("div", {
                  className: "bg-[#141518] p-4 rounded-[20px] h-full",
                  children: [
                    l.jsx("div", {
                      className: "px-6",
                      children: l.jsx("video", {
                        className: "w-full",
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        children: l.jsx("source", {
                          src: L3,
                          type: "video/mp4",
                        }),
                      }),
                    }),
                    l.jsxs("div", {
                      className: "px-4 mb-4",
                      children: [
                        l.jsx("h3", {
                          className: "text-2xl font-medium text-white mt-4",
                          children: "NFT/Metaverse APIs",
                        }),
                        l.jsx("p", {
                          className: "text-white/[.8] mt-2",
                          children:
                            "Our Proof of Staked Authority model empowers community members to run indexers.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              l.jsx("div", {
                className:
                  "col-span-12 md:col-span-5 p-[1px] rounded-[20px] bg-white/[.07] backdrop-blur-lg video-bg",
                "data-aos": "fade-up",
                "data-aos-duration": "1500",
                children: l.jsxs("div", {
                  className: "bg-[#141518] p-4 rounded-[20px] h-full",
                  children: [
                    l.jsx("div", {
                      className: "px-6",
                      children: l.jsx("video", {
                        className: "w-full",
                        autoPlay: !0,
                        loop: !0,
                        muted: !0,
                        children: l.jsx("source", {
                          src: T3,
                          type: "video/mp4",
                        }),
                      }),
                    }),
                    l.jsxs("div", {
                      className: "px-4 mb-4",
                      children: [
                        l.jsx("h3", {
                          className: "text-2xl font-medium text-white mt-4",
                          children: "Notification service",
                        }),
                        l.jsx("p", {
                          className: "text-white/[.8] mt-2",
                          children:
                            "Unmarshal Indexertrack every single data bit that flows.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              l.jsx("div", {
                className:
                  "col-span-12 md:col-span-7 p-[1px] rounded-[20px] bg-white/[.07] backdrop-blur-lg video-bg",
                "data-aos": "fade-up",
                "data-aos-duration": "1500",
                children: l.jsxs("div", {
                  className: "bg-[#141518] p-4 rounded-[20px] h-full",
                  children: [
                    l.jsx("video", {
                      className: "w-full",
                      autoPlay: !0,
                      loop: !0,
                      muted: !0,
                      children: l.jsx("source", { src: M3, type: "video/mp4" }),
                    }),
                    l.jsxs("div", {
                      className: "px-4 mb-4",
                      children: [
                        l.jsx("h3", {
                          className: "text-2xl font-medium text-white mt-4",
                          children: "Insights & Analytics",
                        }),
                        l.jsx("p", {
                          className: "text-white/[.8] mt-2",
                          children:
                            "Unmarshal Indexertracks every single data bit that flows into blockchain and helps retrieve it easily. Token balances etc.",
                        }),      
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function V3() {
  return l.jsx(l.Fragment, {
    children: l.jsx("section", {
      className: "py-24 community-bg",
      "data-aos": "fade-up",
      "data-aos-duration": "1500",
      children: l.jsx("div", {
        className: "mx-auto max-w-7xl px-4",
        children: l.jsxs("div", {
          className: "grid md:grid-cols-2 md:gap-8",
          children: [
          ],
        }),
      }),
    }),
  });
}
const _3 = "/assets/advance-blockchain-tfpvG1aX.svg";
function R3() {
  return l.jsx(l.Fragment, {
    children: l.jsx("section", {
      className: "py-24",
      "data-aos": "fade-up",
      "data-aos-duration": "1500",
      children: l.jsxs("div", {
        className: "mx-auto max-w-7xl px-4",
        children: [
          l.jsxs("div", {
            className: "grid md:grid-cols-2 gap-2",
            children: [
              l.jsxs("div", {
                children: [
                  l.jsx("div", {
                    className:
                      "pt-8 text-xs uppercase text-white font-semibold border-t border-[#343840]/[.5] relative before:inline-block before:absolute before:border-l before:border-[#343840]/[.5] before:left-[-16px] before:h-10 before:top-[8px]",
                    "data-aos": "fade-up",
                    "data-aos-duration": "1500",
                    children: "Blockchain indexing",
                  }),
                  l.jsx("h2", {
                    className:
                      "text-5xl md:text-[56px] text-white max-w-[620px] leading-tight pt-20",
                    "data-aos": "fade-up",
                    "data-aos-duration": "1500",
                    children:
                      "Your Gateway to Advanced Blockchain Data Indexing",
                  }),
                  l.jsx("p", {
                    className: "text-white/[.8] max-w-[424px] text-md mt-4",
                    "data-aos": "fade-up",
                    "data-aos-duration": "1500",
                    children:
                      "Experience the power of the Unmarshal Network, where blockchain indexing meets decentralization. Our Proof of Staked Authority model empowers community members to run indexers, enhancing reliability and trust.",
                  }),
                  l.jsx("div", {
                    className: "mx-auto flex items-center mt-6",
                    "data-aos": "fade-up",
                    "data-aos-duration": "1500",
                  }),
                ],
              }),
              l.jsx("div", {
                children: l.jsx("img", {
                  src: _3,
                  className: "w-100",
                  "data-aos": "fade-up",
                  "data-aos-duration": "1500",
                }),
              }),
            ],
          }),
          l.jsxs("div", {
            className: "grid md:grid-cols-4 gap-8",
            children: [
              l.jsxs("div", {
                "data-aos": "fade-up",
                "data-aos-duration": "1500",
                className:
                  "border-t border-[#343840]/[.5] relative before:inline-block before:absolute before:border-l before:border-[#343840]/[.5] before:left-[-16px] before:h-10 before:top-[8px] px-4",
                children: [
                  l.jsx("div", {
                    className: "pt-16",
                    children: l.jsxs("svg", {
                      width: "32",
                      height: "32",
                      viewBox: "0 0 32 32",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        l.jsxs("g", {
                          clipPath: "url(#clip0_25_1279)",
                          children: [
                            l.jsx("path", {
                              d: "M19 13H13V19H19V13Z",
                              stroke: "#00EC97",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                            l.jsx("path", {
                              d: "M25 6H7C6.44772 6 6 6.44772 6 7V25C6 25.5523 6.44772 26 7 26H25C25.5523 26 26 25.5523 26 25V7C26 6.44772 25.5523 6 25 6Z",
                              stroke: "#00EC97",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                            l.jsx("path", {
                              d: "M26 13H29",
                              stroke: "#00EC97",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                            l.jsx("path", {
                              d: "M26 19H29",
                              stroke: "#00EC97",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                            l.jsx("path", {
                              d: "M3 13H6",
                              stroke: "#00EC97",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                            l.jsx("path", {
                              d: "M3 19H6",
                              stroke: "#00EC97",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                            l.jsx("path", {
                              d: "M19 26V29",
                              stroke: "#00EC97",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                            l.jsx("path", {
                              d: "M13 26V29",
                              stroke: "#00EC97",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                            l.jsx("path", {
                              d: "M19 3V6",
                              stroke: "#00EC97",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                            l.jsx("path", {
                              d: "M13 3V6",
                              stroke: "#00EC97",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                          ],
                        }),
                        l.jsx("defs", {
                          children: l.jsx("clipPath", {
                            id: "clip0_25_1279",
                            children: l.jsx("rect", {
                              width: "32",
                              height: "32",
                              fill: "white",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  l.jsx("h3", {
                    className: "text-lg text-white font-medium mt-6",
                    children: "Deep Indexing",
                  }),
                  l.jsx("p", {
                    className: "text-[13px] text-white/[.7] mt-2",
                    children:
                      "We’re best in className data decoders extract rich information. It synthesises on-chain & off-chain data to get contextual meaning.",
                  }),
                ],
              }),
              l.jsxs("div", {
                "data-aos": "fade-up",
                "data-aos-duration": "1500",
                className:
                  "border-t border-[#343840]/[.5] relative before:inline-block before:absolute before:border-l before:border-[#343840]/[.5] before:left-[-16px] before:h-10 before:top-[8px] px-4",
                children: [
                  l.jsx("div", {
                    className: "pt-16",
                    children: l.jsxs("svg", {
                      width: "32",
                      height: "32",
                      viewBox: "0 0 32 32",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        l.jsxs("g", {
                          clipPath: "url(#clip0_25_1307)",
                          children: [
                            l.jsx("path", {
                              d: "M24 23C25.1046 23 26 22.1046 26 21C26 19.8954 25.1046 19 24 19C22.8954 19 22 19.8954 22 21C22 22.1046 22.8954 23 24 23Z",
                              fill: "#00EC97",
                            }),
                            l.jsx("path", {
                              d: "M16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10Z",
                              fill: "#00EC97",
                            }),
                            l.jsx("path", {
                              d: "M8 23C9.10457 23 10 22.1046 10 21C10 19.8954 9.10457 19 8 19C6.89543 19 6 19.8954 6 21C6 22.1046 6.89543 23 8 23Z",
                              fill: "#00EC97",
                            }),
                            l.jsx("path", {
                              d: "M4 18C3.52464 18.6338 3.20671 19.3715 3.07239 20.1523C2.93806 20.9331 2.99121 21.7346 3.22743 22.4908C3.46366 23.2471 3.87621 23.9363 4.43108 24.5018C4.98595 25.0673 5.66726 25.4929 6.41886 25.7434C7.17047 25.994 7.97084 26.0623 8.75404 25.9428C9.53724 25.8233 10.2808 25.5195 10.9236 25.0562C11.5663 24.593 12.0897 23.9836 12.4507 23.2784C12.8117 22.5732 13 21.7923 13 21H24",
                              stroke: "#00EC97",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                            l.jsx("path", {
                              d: "M20.5825 5.99954C20.2681 5.28114 19.7892 4.64675 19.1844 4.14761C18.5796 3.64847 17.8659 3.29858 17.1009 3.12621C16.336 2.95383 15.5412 2.9638 14.7807 3.15531C14.0203 3.34681 13.3156 3.71449 12.7235 4.22864C12.1314 4.74279 11.6686 5.38899 11.3723 6.11504C11.0761 6.8411 10.9548 7.62665 11.0182 8.40825C11.0816 9.18985 11.328 9.94557 11.7374 10.6144C12.1468 11.2832 12.7078 11.8463 13.375 12.2583L8 20.9995",
                              stroke: "#00EC97",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                            l.jsx("path", {
                              d: "M24 26C24.7726 25.9992 25.5345 25.8193 26.2259 25.4746C26.9173 25.1298 27.5194 24.6295 27.985 24.0129C28.4506 23.3964 28.7669 22.6803 28.9092 21.9209C29.0515 21.1615 29.0159 20.3795 28.8051 19.6362C28.5944 18.8929 28.2143 18.2085 27.6946 17.6368C27.1749 17.0651 26.5298 16.6216 25.8099 16.3411C25.09 16.0606 24.3149 15.9508 23.5455 16.0202C22.776 16.0897 22.0331 16.3364 21.375 16.7412L16 8",
                              stroke: "#00EC97",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                          ],
                        }),
                        l.jsx("defs", {
                          children: l.jsx("clipPath", {
                            id: "clip0_25_1307",
                            children: l.jsx("rect", {
                              width: "32",
                              height: "32",
                              fill: "white",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  l.jsx("h3", {
                    className: "text-lg text-white font-medium mt-6",
                    children: "Rich API suite",
                  }),
                  l.jsx("p", {
                    className: "text-[13px] text-white/[.7] mt-2",
                    children:
                      "Unmarshal Indexertracks every single data bit that flows into blockchain and helps retrieve it easily. Token balances etc.",
                  }),
                ],
              }),
              l.jsxs("div", {
                "data-aos": "fade-up",
                "data-aos-duration": "1500",
                className:
                  "border-t border-[#343840]/[.5] relative before:inline-block before:absolute before:border-l before:border-[#343840]/[.5] before:left-[-16px] before:h-10 before:top-[8px] px-4",
                children: [
                  l.jsx("div", {
                    className: "pt-16",
                    children: l.jsxs("svg", {
                      width: "32",
                      height: "32",
                      viewBox: "0 0 32 32",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        l.jsxs("g", {
                          clipPath: "url(#clip0_25_1331)",
                          children: [
                            l.jsx("path", {
                              d: "M10.5 20C14.0899 20 17 17.0899 17 13.5C17 9.91015 14.0899 7 10.5 7C6.91015 7 4 9.91015 4 13.5C4 17.0899 6.91015 20 10.5 20Z",
                              stroke: "#00EC97",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                            l.jsx("path", {
                              d: "M1.27881 25.0007C2.27767 23.4649 3.6443 22.2029 5.25464 21.3293C6.86497 20.4556 8.66801 19.998 10.5001 19.998C12.3321 19.998 14.1351 20.4556 15.7455 21.3293C17.3558 22.2029 18.7224 23.4649 19.7213 25.0007",
                              stroke: "#00EC97",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                            l.jsx("path", {
                              d: "M21.5 20C23.332 19.9989 25.1351 20.4558 26.7456 21.329C28.356 22.2022 29.7227 23.4641 30.7213 25",
                              stroke: "#00EC97",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                            l.jsx("path", {
                              d: "M19.0863 7.4625C19.9754 7.10787 20.9319 6.954 21.8875 7.0119C22.843 7.0698 23.7739 7.33802 24.6137 7.79742C25.4535 8.25681 26.1815 8.89602 26.7456 9.66939C27.3098 10.4428 27.6961 11.3312 27.8771 12.2712C28.0581 13.2112 28.0292 14.1795 27.7925 15.1071C27.5559 16.0346 27.1172 16.8984 26.508 17.6368C25.8988 18.3752 25.134 18.9698 24.2683 19.3784C23.4026 19.7869 22.4573 19.9992 21.5001 20",
                              stroke: "#00EC97",
                              strokeWidth: "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                            }),
                          ],
                        }),
                        l.jsx("defs", {
                          children: l.jsx("clipPath", {
                            id: "clip0_25_1331",
                            children: l.jsx("rect", {
                              width: "32",
                              height: "32",
                              fill: "white",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  l.jsx("h3", {
                    className: "text-lg text-white font-medium mt-6",
                    children: "Customer centric",
                  }),
                  l.jsx("p", {
                    className: "text-[13px] text-white/[.7] mt-2",
                    children:
                      "We offer 24X7 support assistance and dedicated channels for enterprise clients with flexible pricing plans.",
                  }),
                ],
              }),
              l.jsxs("div", {
                "data-aos": "fade-up",
                "data-aos-duration": "1500",
                className:
                  "border-t border-[#343840]/[.5] relative before:inline-block before:absolute before:border-l before:border-[#343840]/[.5] before:left-[-16px] before:h-10 before:top-[8px] px-4",
                children: [
                  l.jsx("div", {
                    className: "pt-16",
                    children: l.jsxs("svg", {
                      width: "32",
                      height: "32",
                      viewBox: "0 0 32 32",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        l.jsx("g", {
                          clipPath: "url(#clip0_25_1353)",
                          children: l.jsx("path", {
                            d: "M10 16C10 14.0222 10.5865 12.0888 11.6853 10.4443C12.7841 8.79981 14.3459 7.51809 16.1732 6.76121C18.0005 6.00433 20.0111 5.8063 21.9509 6.19215C23.8907 6.578 25.6726 7.53041 27.0711 8.92894C28.4696 10.3275 29.422 12.1093 29.8079 14.0491C30.1937 15.9889 29.9957 17.9996 29.2388 19.8268C28.482 21.6541 27.2002 23.2159 25.5557 24.3147C23.9112 25.4135 21.9778 26 20 26H9.00003C8.00748 25.9988 7.02654 25.7865 6.12229 25.3772C5.21805 24.968 4.41118 24.3711 3.75522 23.6262C3.09927 22.8813 2.60922 22.0054 2.31761 21.0566C2.02599 20.1079 1.93947 19.108 2.06379 18.1232C2.18811 17.1385 2.52043 16.1915 3.03869 15.345C3.55695 14.4985 4.2493 13.7719 5.06981 13.2134C5.89032 12.6549 6.82022 12.2772 7.79781 12.1055C8.77539 11.9338 9.77832 11.972 10.74 12.2175",
                            stroke: "#00EC97",
                            strokeWidth: "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                          }),
                        }),
                        l.jsx("defs", {
                          children: l.jsx("clipPath", {
                            id: "clip0_25_1353",
                            children: l.jsx("rect", {
                              width: "32",
                              height: "32",
                              fill: "white",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  l.jsx("h3", {
                    className: "text-lg text-white font-medium mt-6",
                    children: "True saas",
                  }),
                  l.jsx("p", {
                    className: "text-[13px] text-white/[.7] mt-2",
                    children:
                      "Unmarshal Indexertracks every single data bit that flows into blockchain and helps retrieve it easily.",
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
var _f = {};
function D3(e) {
  if (typeof window > "u") return;
  const t = document.createElement("style");
  return (
    t.setAttribute("type", "text/css"),
    (t.innerHTML = e),
    document.head.appendChild(t),
    e
  );
}
Object.defineProperty(_f, "__esModule", { value: !0 });
var ne = C;
function F3(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
var Tt = F3(ne);
D3(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);
const b3 = ne.forwardRef(function (
  {
    style: t = {},
    className: n = "",
    autoFill: r = !1,
    play: i = !0,
    pauseOnHover: s = !1,
    pauseOnClick: o = !1,
    direction: a = "left",
    speed: u = 50,
    delay: c = 0,
    loop: d = 0,
    gradient: f = !1,
    gradientColor: h = "white",
    gradientWidth: g = 200,
    onFinish: v,
    onCycleComplete: y,
    onMount: k,
    children: x,
  },
  p
) {
  const [m, w] = ne.useState(0),
    [j, L] = ne.useState(0),
    [P, S] = ne.useState(1),
    [A, _] = ne.useState(!1),
    X = ne.useRef(null),
    b = p || X,
    Q = ne.useRef(null),
    I = ne.useCallback(() => {
      if (Q.current && b.current) {
        const N = b.current.getBoundingClientRect(),
          F = Q.current.getBoundingClientRect();
        let H = N.width,
          W = F.width;
        (a === "up" || a === "down") && ((H = N.height), (W = F.height)),
          S(r && H && W && W < H ? Math.ceil(H / W) : 1),
          w(H),
          L(W);
      }
    }, [r, b, a]);
  ne.useEffect(() => {
    if (A && (I(), Q.current && b.current)) {
      const N = new ResizeObserver(() => I());
      return (
        N.observe(b.current),
        N.observe(Q.current),
        () => {
          N && N.disconnect();
        }
      );
    }
  }, [I, b, A]),
    ne.useEffect(() => {
      I();
    }, [I, x]),
    ne.useEffect(() => {
      _(!0);
    }, []),
    ne.useEffect(() => {
      typeof k == "function" && k();
    }, []);
  const he = ne.useMemo(
      () => (r ? (j * P) / u : j < m ? m / u : j / u),
      [r, m, j, P, u]
    ),
    G = ne.useMemo(
      () =>
        Object.assign(Object.assign({}, t), {
          "--pause-on-hover": !i || s ? "paused" : "running",
          "--pause-on-click": !i || (s && !o) || o ? "paused" : "running",
          "--width": a === "up" || a === "down" ? "100vh" : "100%",
          "--transform":
            a === "up"
              ? "rotate(-90deg)"
              : a === "down"
              ? "rotate(90deg)"
              : "none",
        }),
      [t, i, s, o, a]
    ),
    ve = ne.useMemo(
      () => ({
        "--gradient-color": h,
        "--gradient-width": typeof g == "number" ? `${g}px` : g,
      }),
      [h, g]
    ),
    T = ne.useMemo(
      () => ({
        "--play": i ? "running" : "paused",
        "--direction": a === "left" ? "normal" : "reverse",
        "--duration": `${he}s`,
        "--delay": `${c}s`,
        "--iteration-count": d ? `${d}` : "infinite",
        "--min-width": r ? "auto" : "100%",
      }),
      [i, a, he, c, d, r]
    ),
    V = ne.useMemo(
      () => ({
        "--transform":
          a === "up"
            ? "rotate(90deg)"
            : a === "down"
            ? "rotate(-90deg)"
            : "none",
      }),
      [a]
    ),
    D = ne.useCallback(
      (N) =>
        [...Array(Number.isFinite(N) && N >= 0 ? N : 0)].map((F, H) =>
          Tt.default.createElement(
            ne.Fragment,
            { key: H },
            ne.Children.map(x, (W) =>
              Tt.default.createElement(
                "div",
                { style: V, className: "rfm-child" },
                W
              )
            )
          )
        ),
      [V, x]
    );
  return A
    ? Tt.default.createElement(
        "div",
        { ref: b, style: G, className: "rfm-marquee-container " + n },
        f &&
          Tt.default.createElement("div", {
            style: ve,
            className: "rfm-overlay",
          }),
        Tt.default.createElement(
          "div",
          {
            className: "rfm-marquee",
            style: T,
            onAnimationIteration: y,
            onAnimationEnd: v,
          },
          Tt.default.createElement(
            "div",
            { className: "rfm-initial-child-container", ref: Q },
            ne.Children.map(x, (N) =>
              Tt.default.createElement(
                "div",
                { style: V, className: "rfm-child" },
                N
              )
            )
          ),
          D(P - 1)
        ),
        Tt.default.createElement(
          "div",
          { className: "rfm-marquee", style: T },
          D(P)
        )
      )
    : null;
});
var Qc = (_f.default = b3);
const B3 = "/assets/supported-1-DfKdTJzx.svg",
  O3 =
    "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40%2080C62.0914%2080%2080.0001%2062.0914%2080.0001%2040C80.0001%2017.9086%2062.0914%200%2040%200C17.9086%200%203.05176e-05%2017.9086%203.05176e-05%2040C3.05176e-05%2062.0914%2017.9086%2080%2040%2080Z'%20fill='%23627EEA'/%3e%3cpath%20d='M40.7456%209.99634V32.1683L59.4896%2040.5443L40.7456%209.99634Z'%20fill='white'%20fill-opacity='0.6'/%3e%3cpath%20d='M40.7465%209.99634L22.0025%2040.5443L40.7465%2032.1683V9.99634Z'%20fill='white'/%3e%3cpath%20d='M40.7456%2054.9184V69.9824L59.5016%2044.0344L40.7456%2054.9184Z'%20fill='white'%20fill-opacity='0.6'/%3e%3cpath%20d='M40.7465%2069.9824V54.9144L22.0025%2044.0344L40.7465%2069.9824Z'%20fill='white'/%3e%3cpath%20d='M40.7456%2051.4308L59.4896%2040.5468L40.7456%2032.1748V51.4308Z'%20fill='white'%20fill-opacity='0.2'/%3e%3cpath%20d='M22.0025%2040.5468L40.7465%2051.4308V32.1748L22.0025%2040.5468Z'%20fill='white'%20fill-opacity='0.6'/%3e%3c/svg%3e",
  I3 =
    "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40.0001%2080C62.0915%2080%2080.0001%2062.0914%2080.0001%2040C80.0001%2017.9086%2062.0915%200%2040.0001%200C17.9087%200%206.10352e-05%2017.9086%206.10352e-05%2040C6.10352e-05%2062.0914%2017.9087%2080%2040.0001%2080Z'%20fill='%23F3BA2F'/%3e%3cpath%20d='M31.2929%2037.0101L41.0009%2027.3021L50.7128%2037.014L56.365%2031.3661L41.0009%2016.0021L25.641%2031.362L31.2929%2037.0101ZM16.0048%2041.0101L21.6529%2035.3581L27.3048%2041.0101L21.6529%2046.6581L16.0048%2041.0101ZM31.2929%2045.0101L41.0009%2054.7021L50.7128%2044.9861L56.365%2050.6341L41.0009%2066.0021L25.641%2050.6421L31.2929%2045.0101ZM54.7048%2041.0101L60.3529%2035.3581L66.0048%2041.0101L60.3529%2046.6581L54.7048%2041.0101ZM46.733%2041.0101L41.0009%2046.7341L35.273%2041.0101L36.273%2040.006L36.7609%2039.5181L41.0009%2035.2822L46.733%2041.014V41.0101Z'%20fill='white'/%3e%3c/svg%3e",
  z3 =
    "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40.0001%2080C62.0915%2080%2080.0001%2062.0914%2080.0001%2040C80.0001%2017.9086%2062.0915%200%2040.0001%200C17.9087%200%209.15527e-05%2017.9086%209.15527e-05%2040C9.15527e-05%2062.0914%2017.9087%2080%2040.0001%2080Z'%20fill='%23EDF0F4'/%3e%3cpath%20d='M51.2982%2031.5765C50.8484%2031.336%2050.3464%2031.2101%2049.8363%2031.2101C49.3262%2031.2101%2048.824%2031.336%2048.3742%2031.5765L41.5502%2035.6246L36.9181%2038.2005L30.2181%2042.2486C29.7689%2042.4908%2029.2666%2042.6175%2028.7562%2042.6175C28.2458%2042.6175%2027.7435%2042.4908%2027.2943%2042.2486L22.0543%2039.0486C21.6081%2038.7827%2021.2386%2038.4054%2020.982%2037.9539C20.7254%2037.5023%2020.5904%2036.992%2020.5902%2036.4726V30.3406C20.5931%2029.8217%2020.7292%2029.3124%2020.9855%2028.8613C21.2419%2028.4102%2021.61%2028.0326%2022.0543%2027.7646L27.2943%2024.6964C27.7441%2024.4559%2028.2462%2024.33%2028.7562%2024.33C29.2663%2024.33%2029.7684%2024.4559%2030.2181%2024.6964L35.4582%2027.8964C35.9038%2028.1616%2036.2727%2028.5383%2036.5287%2028.9892C36.7847%2029.4402%2036.9189%2029.95%2036.9181%2030.4685V34.5165L41.5502%2031.8205V27.6486C41.5465%2027.1299%2041.4102%2026.6208%2041.1539%2026.1699C40.8976%2025.7189%2040.5301%2025.3412%2040.0863%2025.0726L30.3382%2019.3085C29.8885%2019.068%2029.3862%2018.9421%2028.8761%2018.9421C28.3661%2018.9421%2027.864%2019.068%2027.4142%2019.3085L17.4142%2025.1964C16.9664%2025.4283%2016.5923%2025.7809%2016.3343%2026.2142C16.0763%2026.6475%2015.9448%2027.1444%2015.9543%2027.6486V39.1765C15.9574%2039.6943%2016.0932%2040.2026%2016.3488%2040.6529C16.6044%2041.1032%2016.9713%2041.4805%2017.4142%2041.7486L27.2863%2047.5165C27.7361%2047.7571%2028.2382%2047.883%2028.7482%2047.883C29.2583%2047.883%2029.7604%2047.7571%2030.2101%2047.5165L36.8982%2043.5765L41.5302%2040.8804L48.2302%2036.9566C48.6795%2036.7143%2049.1818%2036.5874%2049.6922%2036.5874C50.2025%2036.5874%2050.705%2036.7143%2051.1543%2036.9566L56.3943%2040.0205C56.8404%2040.2864%2057.2098%2040.6636%2057.4664%2041.1152C57.723%2041.5667%2057.858%2042.0771%2057.8582%2042.5964V48.7285C57.8557%2049.2474%2057.7197%2049.757%2057.4633%2050.2081C57.2069%2050.6593%2056.8389%2051.0367%2056.3943%2051.3044L51.2982%2054.3765C50.8484%2054.6171%2050.3464%2054.7429%2049.8363%2054.7429C49.3262%2054.7429%2048.824%2054.6171%2048.3742%2054.3765L43.1342%2051.3085C42.688%2051.0426%2042.3187%2050.6654%2042.0621%2050.2138C41.8055%2049.7623%2041.6705%2049.2519%2041.6703%2048.7326V44.8085L37.0422%2047.5085V51.5765C37.0446%2052.095%2037.1803%2052.6042%2037.4359%2053.0552C37.6915%2053.5063%2038.0586%2053.884%2038.5021%2054.1525L48.3742%2059.9205C48.824%2060.161%2049.3262%2060.2869%2049.8363%2060.2869C50.3464%2060.2869%2050.8484%2060.161%2051.2982%2059.9205L61.1662%2054.1525C61.6129%2053.8872%2061.9827%2053.5102%2062.2394%2053.0585C62.4961%2052.6069%2062.6309%2052.096%2062.6303%2051.5765V39.9246C62.6271%2039.4063%2062.4907%2038.8976%2062.2344%2038.4472C61.978%2037.9968%2061.6102%2037.6198%2061.1662%2037.3525L51.2982%2031.5765Z'%20fill='%238247E5'/%3e%3c/svg%3e",
  U3 = "/assets/supported-5-C3zPOaSD.svg",
  H3 =
    "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40.0001%2080C62.0916%2080%2080.0002%2062.0914%2080.0002%2040C80.0002%2017.9086%2062.0916%200%2040.0001%200C17.9087%200%200.00012207%2017.9086%200.00012207%2040C0.00012207%2062.0914%2017.9087%2080%2040.0001%2080Z'%20fill='url(%23paint0_linear_0_628)'/%3e%3cpath%20d='M51.4321%2019.9929C49.1505%2020.0193%2046.9684%2020.9308%2045.346%2022.5353C43.7236%2024.1398%2042.7877%2026.3117%2042.736%2028.5929V38.1929C41.864%2038.1929%2040.9961%2038.3209%2040.0001%2038.3209C39.0876%2038.2975%2038.1746%2038.3389%2037.2681%2038.4449V28.6009C37.258%2027.4617%2037.0204%2026.3359%2036.5692%2025.2898C36.118%2024.2437%2035.4623%2023.2983%2034.6407%2022.5091C33.8191%2021.7199%2032.8481%2021.1028%2031.7847%2020.6941C30.7212%2020.2854%2029.5868%2020.0931%2028.4481%2020.1289C23.8521%2020.1289%2020.1281%2023.9889%2020.0001%2028.6009V51.525C20.0209%2052.6612%2020.2657%2053.782%2020.7206%2054.8234C21.1754%2055.8648%2021.8313%2056.8063%2022.6507%2057.5937C23.47%2058.3811%2024.4367%2058.9992%2025.4954%2059.4123C26.5541%2059.8253%2027.6839%2060.0253%2028.82%2060.0009C31.0573%2059.9748%2033.1952%2059.0726%2034.7747%2057.4878C36.3542%2055.9031%2037.2494%2053.7623%2037.2681%2051.525V41.925C38.1401%2041.925%2039.0081%2041.8009%2040.0001%2041.8009C40.9139%2041.8244%2041.8281%2041.7829%2042.736%2041.6769V51.3929C42.736%2053.6823%2043.6455%2055.8778%2045.2644%2057.4966C46.8832%2059.1154%2049.0787%2060.025%2051.3681%2060.025C53.6574%2060.025%2055.853%2059.1154%2057.4718%2057.4966C59.0906%2055.8778%2060.0001%2053.6823%2060.0001%2051.3929V28.5929C60.0001%2026.3176%2059.0984%2024.1349%2057.4925%2022.523C55.8866%2020.9111%2053.7074%2020.0014%2051.4321%2019.9929ZM28.696%2023.4849C29.3682%2023.4779%2030.0351%2023.6053%2030.6573%2023.8597C31.2795%2024.1141%2031.8445%2024.4903%2032.3192%2024.9662C32.794%2025.442%2033.1689%2026.008%2033.4218%2026.6308C33.6747%2027.2536%2033.8006%2027.9208%2033.7921%2028.5929V38.6849C31.2691%2039.0825%2028.8059%2039.7946%2026.46%2040.8048C25.4389%2041.2645%2024.4793%2041.8506%2023.604%2042.549V28.5929C23.6082%2027.2426%2024.1456%2025.9487%2025.0993%2024.9927C26.053%2024.0368%2027.3457%2023.4964%2028.696%2023.489V23.4849ZM33.7921%2051.5169C33.8112%2052.1979%2033.6936%2052.8758%2033.4462%2053.5105C33.1988%2054.1452%2032.8266%2054.7239%2032.3516%2055.2123C31.8767%2055.7007%2031.3087%2056.089%2030.6811%2056.3541C30.0536%2056.6192%2029.3794%2056.7556%2028.6981%2056.7556C28.0169%2056.7556%2027.3425%2056.6192%2026.7149%2056.3541C26.0874%2056.089%2025.5195%2055.7007%2025.0446%2055.2123C24.5697%2054.7239%2024.1975%2054.1452%2023.9501%2053.5105C23.7027%2052.8758%2023.5849%2052.1979%2023.604%2051.5169V49.2769C23.604%2047.2769%2025.204%2045.2769%2027.952%2044.1689C29.8547%2043.3269%2031.86%2042.7391%2033.9161%2042.4209L33.7921%2051.5169ZM51.4321%2056.6289C50.7598%2056.6353%2050.0928%2056.5075%2049.4706%2056.2527C48.8484%2055.9979%2048.2834%2055.6213%2047.8087%2055.1451C47.334%2054.6689%2046.959%2054.1027%2046.7062%2053.4796C46.4533%2052.8566%2046.3275%2052.1893%2046.336%2051.5169V41.425C48.8584%2041.0269%2051.3214%2040.3161%2053.6681%2039.3089C54.6884%2038.8477%2055.6478%2038.262%2056.5241%2037.565V51.5169C56.522%2052.869%2055.9855%2054.1655%2055.0317%2055.1238C54.0779%2056.0821%2052.7842%2056.6245%2051.4321%2056.633V56.6289ZM52.1761%2036.0689C50.2733%2036.9096%2048.268%2037.496%2046.212%2037.8128V28.5929C46.1929%2027.912%2046.3107%2027.2341%2046.5581%2026.5994C46.8055%2025.9647%2047.1777%2025.386%2047.6526%2024.8976C48.1275%2024.4092%2048.6954%2024.0209%2049.3229%2023.7558C49.9505%2023.4907%2050.6249%2023.3542%2051.3062%2023.3542C51.9874%2023.3542%2052.6616%2023.4907%2053.2892%2023.7558C53.9167%2024.0209%2054.4848%2024.4092%2054.9597%2024.8976C55.4346%2025.386%2055.8068%2025.9647%2056.0542%2026.5994C56.3016%2027.2341%2056.4192%2027.912%2056.4001%2028.5929V30.833C56.5241%2032.957%2054.9081%2034.825%2052.1841%2036.073L52.1761%2036.0689Z'%20fill='white'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_0_628'%20x1='59.9842'%20y1='20.116'%20x2='4.62416'%20y2='75.156'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2300E8A2'/%3e%3cstop%20offset='1'%20stop-color='%2300ADE8'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
  W3 =
    "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40.0002%2080C62.0916%2080%2080.0002%2062.0914%2080.0002%2040C80.0002%2017.9086%2062.0916%200%2040.0002%200C17.9088%200%200.000183105%2017.9086%200.000183105%2040C0.000183105%2062.0914%2017.9088%2080%2040.0002%2080Z'%20fill='%230D0E10'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M19.6442%2036.0578H54.7963C55.2251%2036.0529%2055.6401%2036.2084%2055.9602%2036.4937L61.5203%2041.5377C62.5483%2042.4697%2061.8162%2044.0578%2060.3602%2044.0578H25.2043C24.7762%2044.0613%2024.3622%2043.9043%2024.0442%2043.6177L18.4842%2038.5738C17.4482%2037.6458%2018.1882%2036.0578%2019.6442%2036.0578ZM18.4842%2029.5377L24.0442%2024.4937C24.3653%2024.21%2024.7798%2024.0548%2025.2082%2024.0578H60.3563C61.8123%2024.0578%2062.5522%2025.6578%2061.5162%2026.5738L55.9643%2031.6258C55.6432%2031.9099%2055.229%2032.0665%2054.8002%2032.0658H19.6442C18.1882%2032.0578%2017.4482%2030.4697%2018.4842%2029.5377ZM61.5162%2052.5738L55.9563%2057.6177C55.6356%2057.9026%2055.2211%2058.0592%2054.7922%2058.0578H19.6442C18.1882%2058.0578%2017.4482%2056.4577%2018.4842%2055.5377L24.0442%2050.4937C24.3653%2050.21%2024.7798%2050.0549%2025.2082%2050.0578H60.3563C61.8123%2050.0578%2062.5522%2051.6458%2061.5162%2052.5738Z'%20fill='url(%23paint0_linear_0_632)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_0_632'%20x1='20.5002'%20y1='52.0938'%20x2='52.0625'%20y2='22.2204'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23CB4EE8'/%3e%3cstop%20offset='1'%20stop-color='%2310F4B1'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",
  $3 = "/assets/supported-8-DxQvXQHg.svg",
  G3 =
    "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40%2080C62.0914%2080%2080%2062.0914%2080%2040C80%2017.9086%2062.0914%200%2040%200C17.9086%200%200%2017.9086%200%2040C0%2062.0914%2017.9086%2080%2040%2080Z'%20fill='%230F1319'/%3e%3cpath%20d='M36.6696%2018.0059V31.3339L29.9977%2038.0059V24.6779L36.6696%2018.0059Z'%20fill='white'/%3e%3cpath%20d='M56.6697%2044.6743C56.6697%2048.2113%2055.2646%2051.6032%2052.7637%2054.1042C50.2627%2056.6052%2046.8705%2058.0103%2043.3336%2058.0103C39.7967%2058.0103%2036.4047%2056.6052%2033.9037%2054.1042C31.4027%2051.6032%2029.9977%2048.2113%2029.9977%2044.6743V37.9943H36.6697V44.6663C36.6697%2046.4359%2037.3726%2048.1329%2038.6238%2049.3841C39.8751%2050.6353%2041.5721%2051.3382%2043.3416%2051.3382C45.1111%2051.3382%2046.8083%2050.6353%2048.0596%2049.3841C49.3108%2048.1329%2050.0137%2046.4359%2050.0137%2044.6663L56.6697%2044.6743Z'%20fill='white'/%3e%3cpath%20d='M56.6696%2031.3357L49.9976%2038.0077H29.9977L36.6696%2031.3357H56.6696Z'%20fill='%2300E8B5'/%3e%3c/svg%3e",
  Z3 = "/assets/supported-10-DQBXQXDR.svg",
  Y3 =
    "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40%2080C62.0914%2080%2080%2062.0914%2080%2040C80%2017.9086%2062.0914%200%2040%200C17.9086%200%200%2017.9086%200%2040C0%2062.0914%2017.9086%2080%2040%2080Z'%20fill='%23516FFA'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M40.7172%2014.0034L51.4343%2019.9849V35.0852L46.226%2032.0884V22.9938L40.7291%2019.8608L29.2148%2026.5154V54.2438L40.7291%2060.8984L52.2395%2054.2637L52.2957%2042.8695L35.9375%2033.3784L41.1898%2030.614L57.4841%2040.1132L57.444%2057.0843L40.7291%2066.7519L24.0024%2057.0804V23.6348H24.0225L40.7172%2014.0034ZM35.9336%2034.6804L40.1403%2037.1604V41.2871L43.8742%2039.2839L47.9047%2041.5995L35.9336%2048.4104V34.6804Z'%20fill='white'/%3e%3c/svg%3e",
  K3 = "/assets/supported-13-BV7vPPTI.svg",
  X3 =
    "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40%2080C62.0914%2080%2080%2062.0914%2080%2040C80%2017.9086%2062.0914%200%2040%200C17.9086%200%200%2017.9086%200%2040C0%2062.0914%2017.9086%2080%2040%2080Z'%20fill='%23E84142'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M42.3968%2011.8822C41.0128%209.48215%2038.7968%209.48215%2037.4208%2011.8822L12.257%2056.1982C10.869%2058.6222%2012.0049%2060.5462%2014.7769%2060.5462H27.4048C28.6583%2060.469%2029.8759%2060.098%2030.9593%2059.4628C32.0427%2058.8277%2032.9614%2057.9462%2033.641%2056.8902L48.841%2030.5302C49.3839%2029.4077%2049.6658%2028.177%2049.6658%2026.9302C49.6658%2025.6834%2049.3839%2024.4527%2048.841%2023.3302L44.3048%2015.3583L42.3968%2011.8822ZM59.1208%2041.0503C57.7368%2038.6503%2055.5208%2038.6503%2054.1128%2041.0503L45.3128%2056.1982C43.9608%2058.5982%2045.0929%2060.5462%2047.833%2060.5462H65.2208C67.9928%2060.5462%2069.125%2058.5942%2067.741%2056.1982L59.1208%2041.0503Z'%20fill='white'/%3e%3c/svg%3e",
  Q3 =
    "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M40%2080C62.0914%2080%2080%2062.0914%2080%2040C80%2017.9086%2062.0914%200%2040%200C17.9086%200%200%2017.9086%200%2040C0%2062.0914%2017.9086%2080%2040%2080Z'%20fill='%230D0E10'/%3e%3cpath%20d='M24.7445%2058.5848L30.4925%2048.6649L36.2406%2038.7809L41.9525%2028.861L42.9005%2027.2889L43.3005%2028.861L45.0525%2035.3928L43.0884%2038.7809L37.3765%2048.6649L31.6646%2058.5848H38.5326L44.2845%2048.6649L47.2605%2043.529L48.6646%2048.6649L51.3284%2058.5848H57.4964L54.8326%2048.6649L52.1685%2038.7809L51.4685%2036.2329L55.7445%2028.861H49.5044L49.2964%2028.129L47.1204%2020.0249L46.8406%2018.9768H40.8406L40.7005%2019.1848L35.1005%2028.861L29.3365%2038.7729L23.6204%2048.6569L17.8726%2058.5768L24.7445%2058.5848Z'%20fill='white'/%3e%3c/svg%3e",
  q3 =
    "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='40'%20cy='40'%20r='40'%20fill='white'/%3e%3cpath%20d='M53.0263%2027.0748H49.3158V32.1812C49.3158%2037.1774%2045.2013%2041.2184%2040.0949%2041.2551H31.7558C25.2533%2041.2551%2020%2046.4351%2020%2052.7907V57.897H31.1313V52.7539C31.1313%2047.7576%2035.2458%2043.7167%2040.3522%2043.6799H48.6914C55.1571%2043.6799%2060.4105%2038.5367%2060.4105%2032.1814V27.0748H53.0263Z'%20fill='%231D70EA'/%3e%3cpath%20d='M25.584%2037.168C28.668%2037.168%2031.168%2034.668%2031.168%2031.584C31.168%2028.5001%2028.668%2026%2025.584%2026C22.5001%2026%2020%2028.5001%2020%2031.584C20%2034.668%2022.5001%2037.168%2025.584%2037.168Z'%20fill='%231D70EA'/%3e%3c/svg%3e",
  J3 =
    "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='40'%20cy='40'%20r='40'%20fill='%2334373C'/%3e%3cpath%20d='M41.0954%2042.1713L46.9096%2025H56.2844V55H49.9888V40.0507L52.5044%2031.5226L50.7128%2030.8539L42.537%2054.9992H37.7475L29.5716%2030.8539L27.78%2031.5226L30.2957%2040.0507V55H24V25H33.3749L39.189%2042.1713V47.2093H41.0954V42.1713Z'%20fill='%23DFFE00'/%3e%3c/svg%3e",
  e4 =
    "data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='40'%20cy='40'%20r='40'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.0185%2060.0793C18.9087%2055.5141%2014.9446%2048.2175%2014.9446%2040C14.9446%2026.1674%2026.1674%2014.9446%2040%2014.9446C51.4207%2014.9446%2063.8913%2021.7696%2066.9043%2032.2239C63.5336%2020.5446%2052.7675%2012%2040%2012C24.5391%2012%2012%2024.5391%2012%2040C12%2055.4609%2024.5391%2068%2040%2068C55.4609%2068%2068%2055.4609%2068%2040V38.5239H66.463C66.4175%2038.5239%2066.3489%2038.5239%2066.2575%2038.5239C66.075%2038.5239%2065.8163%2038.5164%2065.4816%2038.5011C64.8195%2038.4782%2063.9066%2038.4325%2062.8793%2038.3414C60.7793%2038.1587%2058.3825%2037.8011%2056.7543%2037.1468C54.1293%2036.0968%2052.6457%2034.712%2050.9566%2033.0837L50.8575%2032.9925C49.1609%2031.3641%2047.2587%2029.5305%2043.9489%2027.9783C40.6925%2026.4489%2037.0934%2026.6924%2034.4532%2027.2402C33.1141%2027.5141%2031.9575%2027.8793%2031.1434%2028.1761C30.7325%2028.3207%2030.4055%2028.4576%2030.1773%2028.5489C28.8457%2029.112%2027.5522%2029.7739%2026.2511%2030.3902C26.2511%2030.3902%2028.8152%2031.0902%2030.0782%2031.4859C30.1239%2031.5011%2030.1925%2031.5239%2030.2913%2031.5543C30.4816%2031.6152%2030.7554%2031.7141%2031.0825%2031.8511C31.7522%2032.125%2032.6273%2032.5282%2033.4946%2033.0914C34.8641%2033.9664%2035.9978%2035.0773%2036.462%2036.4316C33.563%2036.812%2030.8391%2038.0902%2028.8%2039.2848C27.5674%2040.0075%2026.5402%2040.738%2025.8174%2041.2782C25.4598%2041.5523%2025.1707%2041.7804%2024.9728%2041.9402C24.8054%2042.0772%2022.188%2044.3825%2022.188%2044.3825C22.188%2044.3825%2025.5663%2044.7402%2027.2326%2045.075C28.3435%2045.2957%2029.8348%2045.6609%2031.4022%2046.2011C32.9695%2046.7489%2034.5523%2047.4641%2035.8684%2048.3848C37.1848%2049.3054%2038.1511%2050.363%2038.6228%2051.5804C40.0075%2055.1261%2038.6457%2058.5728%2035.9141%2060.513C33.213%2062.4305%2029.112%2062.887%2025.0109%2060.0718L25.0185%2060.0793ZM34.575%2064.462C35.6782%2064.1043%2036.7055%2063.5793%2037.6337%2062.925C41.3468%2060.2848%2043.3023%2055.4457%2041.3773%2050.5152C40.6164%2048.575%2039.1707%2047.0989%2037.5652%2045.9728C35.9522%2044.8468%2034.1032%2044.025%2032.3837%2043.4239C31.2575%2043.0282%2030.162%2042.7239%2029.2109%2042.4957C29.5532%2042.275%2029.9109%2042.0468%2030.2989%2041.8184C32.5664%2040.487%2035.4272%2039.262%2038.1663%2039.262C42.2977%2039.262%2045.3718%2040.5325%2048.3087%2041.887C48.575%2042.0087%2048.8414%2042.138%2049.1152%2042.2598C51.7402%2043.4925%2054.4946%2044.7859%2057.6978%2044.7859C60.9011%2044.7859%2063.2218%2043.9109%2064.888%2042.9977C63.4043%2055.4152%2052.8359%2065.0477%2040.0152%2065.0477C38.1511%2065.0477%2036.3325%2064.8425%2034.5902%2064.462H34.575ZM61.6925%2041.1946C60.5891%2041.5675%2059.25%2041.8414%2057.6902%2041.8414C55.1793%2041.8414%2053.0184%2040.837%2050.2793%2039.5586C50.0359%2039.4445%2049.7925%2039.3305%2049.5413%2039.2164C46.7945%2037.9457%2043.6218%2036.5989%2039.4902%2036.3555C38.9348%2033.6239%2036.8652%2031.7522%2035.0848%2030.6109C34.887%2030.4816%2034.6891%2030.3598%2034.4913%2030.2457C34.6663%2030.2075%2034.8489%2030.162%2035.0391%2030.1239C37.4282%2029.6293%2040.2739%2029.5075%2042.6859%2030.6489C45.5468%2031.9957%2047.1675%2033.5478%2048.8489%2035.1609L48.9098%2035.2141C50.637%2036.8727%2052.4707%2038.6152%2055.6586%2039.8934C57.4316%2040.6011%2059.7293%2040.9816%2061.6925%2041.1946Z'%20fill='url(%23paint0_linear_213_69)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_213_69'%20x1='11.4978'%20y1='40.5175'%20x2='68.5023'%20y2='39.475'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2329CCB9'/%3e%3cstop%20offset='0.49'%20stop-color='%230091FF'/%3e%3cstop%20offset='1'%20stop-color='%23FF66B7'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
function t4() {
  return l.jsx(l.Fragment, {
    children: l.jsx("section", {
      className: "bg-gradient-to-b from-[#141517] to-[#0D0E10] py-28",
      children: l.jsxs("div", {
        className: "mx-auto max-w-7xl px-4",
        children: [
          l.jsxs("div", {
            className: "text-center",
            children: [
              l.jsx("span", {
                "data-aos": "fade-up",
                "data-aos-duration": "1500",
                className:
                  "inline-flex px-3 py-1 bg-white/[.1] uppercase text-white/[.8] text-xs rounded-full font-semibold mb-6 ",
                children: "Supported Blockchains",
              }),
              l.jsx("h2", {
                "data-aos": "fade-up",
                "data-aos-duration": "1500",
                className:
                  "text-5xl md:text-[56px] mx-auto text-white max-w-[840px] leading-tight",
                children: "Hear the heartbeat of every chain",
              }),
              l.jsx("p", {
                "data-aos": "fade-up",
                "data-aos-duration": "1500",
                className: "mt-6 max-w-[630px] mx-auto text-white/[.7]",
                children:
                  "The easiest way to query Blockchain data from 35+ chains including Ethereum, BSC, Polygon” to “AI Powered Blockchain Data.",
              }),
            ],
          }),
          l.jsx("div", {
            "data-aos": "fade-up",
            "data-aos-duration": "1500",
            className: "mt-24",
            children: l.jsx(Qc, {
              speed: "15",
              className: "max-w-[1000px] mx-auto",
              children: l.jsxs("div", {
                className:
                  "mx-auto flex flex-wrap gap-x-12 gap-y-10 items-center justify-center  marquee-gradient",
                children: [
                  l.jsx("img", { className: "h-20", src: B3 }),
                  l.jsx("img", { className: "h-20", src: q3 }),
                  l.jsx("img", { className: "h-20", src: J3 }),
                  l.jsx("img", { className: "h-20", src: O3 }),
                  l.jsx("img", { className: "h-20", src: I3 }),
                  l.jsx("img", { className: "h-20", src: z3 }),
                  l.jsx("img", { className: "h-20", src: U3 }),
                  l.jsx("img", { className: "h-20", src: H3 }),
                  l.jsx("img", { className: "h-20", src: W3 }),
                  l.jsx("img", { className: "h-20", src: $3 }),
                ],
              }),
            }),
          }),
          l.jsx("div", {
            "data-aos": "fade-up",
            "data-aos-duration": "1500",
            children: l.jsx(Qc, {
              direction: "right",
              speed: "15",
              className: "max-w-[900px] mx-auto",
              children: l.jsxs("div", {
                className:
                  " mx-auto flex flex-wrap gap-x-12 gap-y-10 items-center justify-center mt-10",
                children: [
                  l.jsx("img", { className: "h-20", src: G3 }),
                  l.jsx("img", { className: "h-20", src: Z3 }),
                  l.jsx("img", { className: "h-20", src: Y3 }),
                  l.jsx("img", { className: "h-20", src: e4 }),
                  l.jsx("img", { className: "h-20", src: K3 }),
                  l.jsx("img", { className: "h-20", src: X3 }),
                  l.jsx("img", { className: "h-20", src: Q3 }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
const n4 = "/assets/Mantle-6ALgvNQ_.svg",
  r4 = "/assets/optimisn-ft91XcoU.svg",
  i4 = "/assets/Manta-nlSlCU6g.svg",
  s4 = "/assets/partisia-BP2iXnLe.svg",
  o4 = "/assets/polygon-yEoy26JU.svg",
  l4 = "/assets/hero-video-DVXjiiFr.mp4",
  cu = C.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  so = C.createContext({}),
  oo = C.createContext(null),
  lo = typeof document < "u",
  hi = lo ? C.useLayoutEffect : C.useEffect,
  Rf = C.createContext({ strict: !1 }),
  du = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  a4 = "framerAppearId",
  Df = "data-" + du(a4);
function u4(e, t, n, r) {
  const { visualElement: i } = C.useContext(so),
    s = C.useContext(Rf),
    o = C.useContext(oo),
    a = C.useContext(cu).reducedMotion,
    u = C.useRef();
  (r = r || s.renderer),
    !u.current &&
      r &&
      (u.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const c = u.current;
  C.useInsertionEffect(() => {
    c && c.update(n, o);
  });
  const d = C.useRef(!!(n[Df] && !window.HandoffComplete));
  return (
    hi(() => {
      c &&
        (c.render(),
        d.current && c.animationState && c.animationState.animateChanges());
    }),
    C.useEffect(() => {
      c &&
        (c.updateFeatures(),
        !d.current && c.animationState && c.animationState.animateChanges(),
        d.current && ((d.current = !1), (window.HandoffComplete = !0)));
    }),
    c
  );
}
function In(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function c4(e, t, n) {
  return C.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : In(n) && (n.current = r));
    },
    [t]
  );
}
function si(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ao(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const fu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  hu = ["initial", ...fu];
function uo(e) {
  return ao(e.animate) || hu.some((t) => si(e[t]));
}
function Ff(e) {
  return !!(uo(e) || e.variants);
}
function d4(e, t) {
  if (uo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || si(n) ? n : void 0,
      animate: si(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function f4(e) {
  const { initial: t, animate: n } = d4(e, C.useContext(so));
  return C.useMemo(() => ({ initial: t, animate: n }), [qc(t), qc(n)]);
}
function qc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Jc = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  oi = {};
for (const e in Jc) oi[e] = { isEnabled: (t) => Jc[e].some((n) => !!t[n]) };
function h4(e) {
  for (const t in e) oi[t] = { ...oi[t], ...e[t] };
}
const pu = C.createContext({}),
  bf = C.createContext({}),
  p4 = Symbol.for("motionComponentSymbol");
function m4({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && h4(e);
  function s(a, u) {
    let c;
    const d = { ...C.useContext(cu), ...a, layoutId: g4(a) },
      { isStatic: f } = d,
      h = f4(a),
      g = r(a, f);
    if (!f && lo) {
      h.visualElement = u4(i, g, d, t);
      const v = C.useContext(bf),
        y = C.useContext(Rf).strict;
      h.visualElement && (c = h.visualElement.loadFeatures(d, y, e, v));
    }
    return C.createElement(
      so.Provider,
      { value: h },
      c && h.visualElement
        ? C.createElement(c, { visualElement: h.visualElement, ...d })
        : null,
      n(i, a, c4(g, h.visualElement, u), g, f, h.visualElement)
    );
  }
  const o = C.forwardRef(s);
  return (o[p4] = i), o;
}
function g4({ layoutId: e }) {
  const t = C.useContext(pu).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function x4(e) {
  function t(r, i = {}) {
    return m4(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const v4 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function mu(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(v4.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const As = {};
function y4(e) {
  Object.assign(As, e);
}
const pi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Sn = new Set(pi);
function Bf(e, { layout: t, layoutId: n }) {
  return (
    Sn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!As[e] || e === "opacity"))
  );
}
const je = (e) => !!(e && e.getVelocity),
  w4 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  C4 = pi.length;
function k4(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let s = "";
  for (let o = 0; o < C4; o++) {
    const a = pi[o];
    if (e[a] !== void 0) {
      const u = w4[a] || a;
      s += `${u}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (s += "translateZ(0)"),
    (s = s.trim()),
    i ? (s = i(e, r ? "" : s)) : n && r && (s = "none"),
    s
  );
}
const Of = (e) => (t) => typeof t == "string" && t.startsWith(e),
  If = Of("--"),
  ta = Of("var(--"),
  j4 =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  S4 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Qt = (e, t, n) => Math.min(Math.max(n, e), t),
  Pn = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Dr = { ...Pn, transform: (e) => Qt(0, 1, e) },
  bi = { ...Pn, default: 1 },
  Fr = (e) => Math.round(e * 1e5) / 1e5,
  co = /(-)?([\d]*\.?[\d])+/g,
  zf =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  P4 =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function mi(e) {
  return typeof e == "string";
}
const gi = (e) => ({
    test: (t) => mi(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Mt = gi("deg"),
  ft = gi("%"),
  R = gi("px"),
  E4 = gi("vh"),
  N4 = gi("vw"),
  ed = {
    ...ft,
    parse: (e) => ft.parse(e) / 100,
    transform: (e) => ft.transform(e * 100),
  },
  td = { ...Pn, transform: Math.round },
  Uf = {
    borderWidth: R,
    borderTopWidth: R,
    borderRightWidth: R,
    borderBottomWidth: R,
    borderLeftWidth: R,
    borderRadius: R,
    radius: R,
    borderTopLeftRadius: R,
    borderTopRightRadius: R,
    borderBottomRightRadius: R,
    borderBottomLeftRadius: R,
    width: R,
    maxWidth: R,
    height: R,
    maxHeight: R,
    size: R,
    top: R,
    right: R,
    bottom: R,
    left: R,
    padding: R,
    paddingTop: R,
    paddingRight: R,
    paddingBottom: R,
    paddingLeft: R,
    margin: R,
    marginTop: R,
    marginRight: R,
    marginBottom: R,
    marginLeft: R,
    rotate: Mt,
    rotateX: Mt,
    rotateY: Mt,
    rotateZ: Mt,
    scale: bi,
    scaleX: bi,
    scaleY: bi,
    scaleZ: bi,
    skew: Mt,
    skewX: Mt,
    skewY: Mt,
    distance: R,
    translateX: R,
    translateY: R,
    translateZ: R,
    x: R,
    y: R,
    z: R,
    perspective: R,
    transformPerspective: R,
    opacity: Dr,
    originX: ed,
    originY: ed,
    originZ: R,
    zIndex: td,
    fillOpacity: Dr,
    strokeOpacity: Dr,
    numOctaves: td,
  };
function gu(e, t, n, r) {
  const { style: i, vars: s, transform: o, transformOrigin: a } = e;
  let u = !1,
    c = !1,
    d = !0;
  for (const f in t) {
    const h = t[f];
    if (If(f)) {
      s[f] = h;
      continue;
    }
    const g = Uf[f],
      v = S4(h, g);
    if (Sn.has(f)) {
      if (((u = !0), (o[f] = v), !d)) continue;
      h !== (g.default || 0) && (d = !1);
    } else f.startsWith("origin") ? ((c = !0), (a[f] = v)) : (i[f] = v);
  }
  if (
    (t.transform ||
      (u || r
        ? (i.transform = k4(e.transform, n, d, r))
        : i.transform && (i.transform = "none")),
    c)
  ) {
    const { originX: f = "50%", originY: h = "50%", originZ: g = 0 } = a;
    i.transformOrigin = `${f} ${h} ${g}`;
  }
}
const xu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Hf(e, t, n) {
  for (const r in t) !je(t[r]) && !Bf(r, n) && (e[r] = t[r]);
}
function L4({ transformTemplate: e }, t, n) {
  return C.useMemo(() => {
    const r = xu();
    return (
      gu(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function T4(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    Hf(i, r, e),
    Object.assign(i, L4(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function M4(e, t, n) {
  const r = {},
    i = T4(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const A4 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Vs(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    A4.has(e)
  );
}
let Wf = (e) => !Vs(e);
function V4(e) {
  e && (Wf = (t) => (t.startsWith("on") ? !Vs(t) : e(t)));
}
try {
  V4(require("@emotion/is-prop-valid").default);
} catch {}
function _4(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Wf(i) ||
        (n === !0 && Vs(i)) ||
        (!t && !Vs(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function nd(e, t, n) {
  return typeof e == "string" ? e : R.transform(t + n * e);
}
function R4(e, t, n) {
  const r = nd(t, e.x, e.width),
    i = nd(n, e.y, e.height);
  return `${r} ${i}`;
}
const D4 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  F4 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function b4(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? D4 : F4;
  e[s.offset] = R.transform(-r);
  const o = R.transform(t),
    a = R.transform(n);
  e[s.array] = `${o} ${a}`;
}
function vu(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: u = 0,
    ...c
  },
  d,
  f,
  h
) {
  if ((gu(e, c, d, h), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: g, style: v, dimensions: y } = e;
  g.transform && (y && (v.transform = g.transform), delete g.transform),
    y &&
      (i !== void 0 || s !== void 0 || v.transform) &&
      (v.transformOrigin = R4(
        y,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    t !== void 0 && (g.x = t),
    n !== void 0 && (g.y = n),
    r !== void 0 && (g.scale = r),
    o !== void 0 && b4(g, o, a, u, !1);
}
const $f = () => ({ ...xu(), attrs: {} }),
  yu = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function B4(e, t, n, r) {
  const i = C.useMemo(() => {
    const s = $f();
    return (
      vu(s, t, { enableHardwareAcceleration: !1 }, yu(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    Hf(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function O4(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const u = (mu(n) ? B4 : M4)(r, s, o, n),
      d = { ..._4(r, typeof n == "string", e), ...u, ref: i },
      { children: f } = r,
      h = C.useMemo(() => (je(f) ? f.get() : f), [f]);
    return C.createElement(n, { ...d, children: h });
  };
}
function Gf(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const Zf = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Yf(e, t, n, r) {
  Gf(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Zf.has(i) ? i : du(i), t.attrs[i]);
}
function wu(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (je(n[i]) || (t.style && je(t.style[i])) || Bf(i, e)) && (r[i] = n[i]);
  return r;
}
function Kf(e, t) {
  const n = wu(e, t);
  for (const r in e)
    if (je(e[r]) || je(t[r])) {
      const i =
        pi.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function Cu(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function xi(e) {
  const t = C.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const _s = (e) => Array.isArray(e),
  I4 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  z4 = (e) => (_s(e) ? e[e.length - 1] || 0 : e);
function ts(e) {
  const t = je(e) ? e.get() : e;
  return I4(t) ? t.toValue() : t;
}
function U4(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  s
) {
  const o = { latestValues: H4(r, i, s, e), renderState: t() };
  return n && (o.mount = (a) => n(r, a, o)), o;
}
const Xf = (e) => (t, n) => {
  const r = C.useContext(so),
    i = C.useContext(oo),
    s = () => U4(e, t, r, i);
  return n ? s() : xi(s);
};
function H4(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const h in s) i[h] = ts(s[h]);
  let { initial: o, animate: a } = e;
  const u = uo(e),
    c = Ff(e);
  t &&
    c &&
    !u &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || o === !1;
  const f = d ? a : o;
  return (
    f &&
      typeof f != "boolean" &&
      !ao(f) &&
      (Array.isArray(f) ? f : [f]).forEach((g) => {
        const v = Cu(e, g);
        if (!v) return;
        const { transitionEnd: y, transition: k, ...x } = v;
        for (const p in x) {
          let m = x[p];
          if (Array.isArray(m)) {
            const w = d ? m.length - 1 : 0;
            m = m[w];
          }
          m !== null && (i[p] = m);
        }
        for (const p in y) i[p] = y[p];
      }),
    i
  );
}
const ie = (e) => e;
class rd {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function W4(e) {
  let t = new rd(),
    n = new rd(),
    r = 0,
    i = !1,
    s = !1;
  const o = new WeakSet(),
    a = {
      schedule: (u, c = !1, d = !1) => {
        const f = d && i,
          h = f ? t : n;
        return c && o.add(u), h.add(u) && f && i && (r = t.order.length), u;
      },
      cancel: (u) => {
        n.remove(u), o.delete(u);
      },
      process: (u) => {
        if (i) {
          s = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let c = 0; c < r; c++) {
            const d = t.order[c];
            d(u), o.has(d) && (a.schedule(d), e());
          }
        (i = !1), s && ((s = !1), a.process(u));
      },
    };
  return a;
}
const Bi = ["prepare", "read", "update", "preRender", "render", "postRender"],
  $4 = 40;
function G4(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = Bi.reduce((f, h) => ((f[h] = W4(() => (n = !0))), f), {}),
    o = (f) => s[f].process(i),
    a = () => {
      const f = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, $4), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        Bi.forEach(o),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    u = () => {
      (n = !0), (r = !0), i.isProcessing || e(a);
    };
  return {
    schedule: Bi.reduce((f, h) => {
      const g = s[h];
      return (f[h] = (v, y = !1, k = !1) => (n || u(), g.schedule(v, y, k))), f;
    }, {}),
    cancel: (f) => Bi.forEach((h) => s[h].cancel(f)),
    state: i,
    steps: s,
  };
}
const {
    schedule: z,
    cancel: ot,
    state: me,
    steps: Ho,
  } = G4(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ie, !0),
  Z4 = {
    useVisualState: Xf({
      scrapeMotionValuesFromProps: Kf,
      createRenderState: $f,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        z.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          z.render(() => {
            vu(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              yu(t.tagName),
              e.transformTemplate
            ),
              Yf(t, n);
          });
      },
    }),
  },
  Y4 = {
    useVisualState: Xf({
      scrapeMotionValuesFromProps: wu,
      createRenderState: xu,
    }),
  };
function K4(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(mu(e) ? Z4 : Y4),
    preloadedFeatures: n,
    useRender: O4(t),
    createVisualElement: r,
    Component: e,
  };
}
function yt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Qf = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function fo(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const X4 = (e) => (t) => Qf(t) && e(t, fo(t));
function Ct(e, t, n, r) {
  return yt(e, t, X4(n), r);
}
const Q4 = (e, t) => (n) => t(e(n)),
  Yt = (...e) => e.reduce(Q4);
function qf(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const id = qf("dragHorizontal"),
  sd = qf("dragVertical");
function Jf(e) {
  let t = !1;
  if (e === "y") t = sd();
  else if (e === "x") t = id();
  else {
    const n = id(),
      r = sd();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function eh() {
  const e = Jf(!0);
  return e ? (e(), !1) : !0;
}
class nn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function od(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (s, o) => {
      if (s.pointerType === "touch" || eh()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t),
        a[r] && z.update(() => a[r](s, o));
    };
  return Ct(e.current, n, i, { passive: !e.getProps()[r] });
}
class q4 extends nn {
  mount() {
    this.unmount = Yt(od(this.node, !0), od(this.node, !1));
  }
  unmount() {}
}
class J4 extends nn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Yt(
      yt(this.node.current, "focus", () => this.onFocus()),
      yt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const th = (e, t) => (t ? (e === t ? !0 : th(e, t.parentElement)) : !1);
function Wo(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, fo(n));
}
class e5 extends nn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = ie),
      (this.removeEndListeners = ie),
      (this.removeAccessibleListeners = ie),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          s = Ct(
            window,
            "pointerup",
            (a, u) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: c,
                onTapCancel: d,
                globalTapTarget: f,
              } = this.node.getProps();
              z.update(() => {
                !f && !th(this.node.current, a.target)
                  ? d && d(a, u)
                  : c && c(a, u);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = Ct(window, "pointercancel", (a, u) => this.cancelPress(a, u), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Yt(s, o)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (s) => {
            if (s.key !== "Enter" || this.isPressing) return;
            const o = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Wo("up", (u, c) => {
                  const { onTap: d } = this.node.getProps();
                  d && z.update(() => d(u, c));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = yt(this.node.current, "keyup", o)),
              Wo("down", (a, u) => {
                this.startPress(a, u);
              });
          },
          n = yt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Wo("cancel", (s, o) => this.cancelPress(s, o));
          },
          i = yt(this.node.current, "blur", r);
        this.removeAccessibleListeners = Yt(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && z.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !eh()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && z.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Ct(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = yt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Yt(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const na = new WeakMap(),
  $o = new WeakMap(),
  t5 = (e) => {
    const t = na.get(e.target);
    t && t(e);
  },
  n5 = (e) => {
    e.forEach(t5);
  };
function r5({ root: e, ...t }) {
  const n = e || document;
  $o.has(n) || $o.set(n, {});
  const r = $o.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(n5, { root: e, ...t })), r[i];
}
function i5(e, t, n) {
  const r = r5(t);
  return (
    na.set(e, n),
    r.observe(e),
    () => {
      na.delete(e), r.unobserve(e);
    }
  );
}
const s5 = { some: 0, all: 1 };
class o5 extends nn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : s5[i],
      },
      a = (u) => {
        const { isIntersecting: c } = u;
        if (
          this.isInView === c ||
          ((this.isInView = c), s && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(),
          h = c ? d : f;
        h && h(u);
      };
    return i5(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(l5(t, n)) && this.startObserver();
  }
  unmount() {}
}
function l5({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const a5 = {
  inView: { Feature: o5 },
  tap: { Feature: e5 },
  focus: { Feature: J4 },
  hover: { Feature: q4 },
};
function nh(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function u5(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function c5(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function ho(e, t, n) {
  const r = e.getProps();
  return Cu(r, t, n !== void 0 ? n : r.custom, u5(e), c5(e));
}
let d5 = ie,
  Rs = ie;
const gn = (e) => e * 1e3,
  kt = (e) => e / 1e3,
  f5 = { current: !1 },
  rh = (e) => Array.isArray(e) && typeof e[0] == "number";
function ih(e) {
  return !!(
    !e ||
    (typeof e == "string" && sh[e]) ||
    rh(e) ||
    (Array.isArray(e) && e.every(ih))
  );
}
const Pr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  sh = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Pr([0, 0.65, 0.55, 1]),
    circOut: Pr([0.55, 0, 1, 0.45]),
    backIn: Pr([0.31, 0.01, 0.66, -0.59]),
    backOut: Pr([0.33, 1.53, 0.69, 0.99]),
  };
function oh(e) {
  if (e) return rh(e) ? Pr(e) : Array.isArray(e) ? e.map(oh) : sh[e];
}
function h5(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a,
    times: u,
  } = {}
) {
  const c = { [t]: n };
  u && (c.offset = u);
  const d = oh(a);
  return (
    Array.isArray(d) && (c.easing = d),
    e.animate(c, {
      delay: r,
      duration: i,
      easing: Array.isArray(d) ? "linear" : d,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
function p5(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const lh = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  m5 = 1e-7,
  g5 = 12;
function x5(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (s = lh(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > m5 && ++a < g5);
  return o;
}
function vi(e, t, n, r) {
  if (e === t && n === r) return ie;
  const i = (s) => x5(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : lh(i(s), t, r));
}
const v5 = vi(0.42, 0, 1, 1),
  y5 = vi(0, 0, 0.58, 1),
  ah = vi(0.42, 0, 0.58, 1),
  w5 = (e) => Array.isArray(e) && typeof e[0] != "number",
  uh = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  ch = (e) => (t) => 1 - e(1 - t),
  ku = (e) => 1 - Math.sin(Math.acos(e)),
  dh = ch(ku),
  C5 = uh(ku),
  fh = vi(0.33, 1.53, 0.69, 0.99),
  ju = ch(fh),
  k5 = uh(ju),
  j5 = (e) =>
    (e *= 2) < 1 ? 0.5 * ju(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  ld = {
    linear: ie,
    easeIn: v5,
    easeInOut: ah,
    easeOut: y5,
    circIn: ku,
    circInOut: C5,
    circOut: dh,
    backIn: ju,
    backInOut: k5,
    backOut: fh,
    anticipate: j5,
  },
  ad = (e) => {
    if (Array.isArray(e)) {
      Rs(e.length === 4);
      const [t, n, r, i] = e;
      return vi(t, n, r, i);
    } else if (typeof e == "string") return Rs(ld[e] !== void 0), ld[e];
    return e;
  },
  Su = (e, t) => (n) =>
    !!(
      (mi(n) && P4.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  hh = (e, t, n) => (r) => {
    if (!mi(r)) return r;
    const [i, s, o, a] = r.match(co);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  S5 = (e) => Qt(0, 255, e),
  Go = { ...Pn, transform: (e) => Math.round(S5(e)) },
  hn = {
    test: Su("rgb", "red"),
    parse: hh("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Go.transform(e) +
      ", " +
      Go.transform(t) +
      ", " +
      Go.transform(n) +
      ", " +
      Fr(Dr.transform(r)) +
      ")",
  };
function P5(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const ra = { test: Su("#"), parse: P5, transform: hn.transform },
  zn = {
    test: Su("hsl", "hue"),
    parse: hh("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      ft.transform(Fr(t)) +
      ", " +
      ft.transform(Fr(n)) +
      ", " +
      Fr(Dr.transform(r)) +
      ")",
  },
  Se = {
    test: (e) => hn.test(e) || ra.test(e) || zn.test(e),
    parse: (e) =>
      hn.test(e) ? hn.parse(e) : zn.test(e) ? zn.parse(e) : ra.parse(e),
    transform: (e) =>
      mi(e) ? e : e.hasOwnProperty("red") ? hn.transform(e) : zn.transform(e),
  },
  J = (e, t, n) => -n * e + n * t + e;
function Zo(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function E5({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      u = 2 * n - a;
    (i = Zo(u, a, e + 1 / 3)), (s = Zo(u, a, e)), (o = Zo(u, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
const Yo = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  N5 = [ra, hn, zn],
  L5 = (e) => N5.find((t) => t.test(e));
function ud(e) {
  const t = L5(e);
  let n = t.parse(e);
  return t === zn && (n = E5(n)), n;
}
const ph = (e, t) => {
  const n = ud(e),
    r = ud(t),
    i = { ...n };
  return (s) => (
    (i.red = Yo(n.red, r.red, s)),
    (i.green = Yo(n.green, r.green, s)),
    (i.blue = Yo(n.blue, r.blue, s)),
    (i.alpha = J(n.alpha, r.alpha, s)),
    hn.transform(i)
  );
};
function T5(e) {
  var t, n;
  return (
    isNaN(e) &&
    mi(e) &&
    (((t = e.match(co)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(zf)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const mh = { regex: j4, countKey: "Vars", token: "${v}", parse: ie },
  gh = { regex: zf, countKey: "Colors", token: "${c}", parse: Se.parse },
  xh = { regex: co, countKey: "Numbers", token: "${n}", parse: Pn.parse };
function Ko(e, { regex: t, countKey: n, token: r, parse: i }) {
  const s = e.tokenised.match(t);
  s &&
    ((e["num" + n] = s.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...s.map(i)));
}
function Ds(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && Ko(n, mh), Ko(n, gh), Ko(n, xh), n;
}
function vh(e) {
  return Ds(e).values;
}
function yh(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = Ds(e),
    s = t.length;
  return (o) => {
    let a = i;
    for (let u = 0; u < s; u++)
      u < r
        ? (a = a.replace(mh.token, o[u]))
        : u < r + n
        ? (a = a.replace(gh.token, Se.transform(o[u])))
        : (a = a.replace(xh.token, Fr(o[u])));
    return a;
  };
}
const M5 = (e) => (typeof e == "number" ? 0 : e);
function A5(e) {
  const t = vh(e);
  return yh(e)(t.map(M5));
}
const qt = {
    test: T5,
    parse: vh,
    createTransformer: yh,
    getAnimatableNone: A5,
  },
  wh = (e, t) => (n) => `${n > 0 ? t : e}`;
function Ch(e, t) {
  return typeof e == "number"
    ? (n) => J(e, t, n)
    : Se.test(e)
    ? ph(e, t)
    : e.startsWith("var(")
    ? wh(e, t)
    : jh(e, t);
}
const kh = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((s, o) => Ch(s, t[o]));
    return (s) => {
      for (let o = 0; o < r; o++) n[o] = i[o](s);
      return n;
    };
  },
  V5 = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ch(e[i], t[i]));
    return (i) => {
      for (const s in r) n[s] = r[s](i);
      return n;
    };
  },
  jh = (e, t) => {
    const n = qt.createTransformer(t),
      r = Ds(e),
      i = Ds(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? Yt(kh(r.values, i.values), n)
      : wh(e, t);
  },
  ir = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  cd = (e, t) => (n) => J(e, t, n);
function _5(e) {
  return typeof e == "number"
    ? cd
    : typeof e == "string"
    ? Se.test(e)
      ? ph
      : jh
    : Array.isArray(e)
    ? kh
    : typeof e == "object"
    ? V5
    : cd;
}
function R5(e, t, n) {
  const r = [],
    i = n || _5(e[0]),
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const u = Array.isArray(t) ? t[o] || ie : t;
      a = Yt(u, a);
    }
    r.push(a);
  }
  return r;
}
function po(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((Rs(s === t.length), s === 1)) return () => t[0];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = R5(t, r, i),
    a = o.length,
    u = (c) => {
      let d = 0;
      if (a > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = ir(e[d], e[d + 1], c);
      return o[d](f);
    };
  return n ? (c) => u(Qt(e[0], e[s - 1], c)) : u;
}
function D5(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = ir(0, t, r);
    e.push(J(n, 1, i));
  }
}
function Sh(e) {
  const t = [0];
  return D5(t, e.length - 1), t;
}
function F5(e, t) {
  return e.map((n) => n * t);
}
function b5(e, t) {
  return e.map(() => t || ah).splice(0, e.length - 1);
}
function Fs({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = w5(r) ? r.map(ad) : ad(r),
    s = { done: !1, value: t[0] },
    o = F5(n && n.length === t.length ? n : Sh(t), e),
    a = po(o, t, { ease: Array.isArray(i) ? i : b5(t, i) });
  return {
    calculatedDuration: e,
    next: (u) => ((s.value = a(u)), (s.done = u >= e), s),
  };
}
function Pu(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const B5 = 5;
function Ph(e, t, n) {
  const r = Math.max(t - B5, 0);
  return Pu(n - e(r), t - r);
}
const Xo = 0.001,
  O5 = 0.01,
  I5 = 10,
  z5 = 0.05,
  U5 = 1;
function H5({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    s,
    o = 1 - t;
  (o = Qt(z5, U5, o)),
    (e = Qt(O5, I5, kt(e))),
    o < 1
      ? ((i = (c) => {
          const d = c * o,
            f = d * e,
            h = d - n,
            g = ia(c, o),
            v = Math.exp(-f);
          return Xo - (h / g) * v;
        }),
        (s = (c) => {
          const f = c * o * e,
            h = f * n + n,
            g = Math.pow(o, 2) * Math.pow(c, 2) * e,
            v = Math.exp(-f),
            y = ia(Math.pow(c, 2), o);
          return ((-i(c) + Xo > 0 ? -1 : 1) * ((h - g) * v)) / y;
        }))
      : ((i = (c) => {
          const d = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -Xo + d * f;
        }),
        (s = (c) => {
          const d = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return d * f;
        }));
  const a = 5 / e,
    u = $5(i, s, a);
  if (((e = gn(e)), isNaN(u)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const c = Math.pow(u, 2) * r;
    return { stiffness: c, damping: o * 2 * Math.sqrt(r * c), duration: e };
  }
}
const W5 = 12;
function $5(e, t, n) {
  let r = n;
  for (let i = 1; i < W5; i++) r = r - e(r) / t(r);
  return r;
}
function ia(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const G5 = ["duration", "bounce"],
  Z5 = ["stiffness", "damping", "mass"];
function dd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Y5(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!dd(e, Z5) && dd(e, G5)) {
    const n = H5(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Eh({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    s = e[e.length - 1],
    o = { done: !1, value: i },
    {
      stiffness: a,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: h,
    } = Y5({ ...r, velocity: -kt(r.velocity || 0) }),
    g = f || 0,
    v = u / (2 * Math.sqrt(a * c)),
    y = s - i,
    k = kt(Math.sqrt(a / c)),
    x = Math.abs(y) < 5;
  n || (n = x ? 0.01 : 2), t || (t = x ? 0.005 : 0.5);
  let p;
  if (v < 1) {
    const m = ia(k, v);
    p = (w) => {
      const j = Math.exp(-v * k * w);
      return (
        s - j * (((g + v * k * y) / m) * Math.sin(m * w) + y * Math.cos(m * w))
      );
    };
  } else if (v === 1) p = (m) => s - Math.exp(-k * m) * (y + (g + k * y) * m);
  else {
    const m = k * Math.sqrt(v * v - 1);
    p = (w) => {
      const j = Math.exp(-v * k * w),
        L = Math.min(m * w, 300);
      return (
        s - (j * ((g + v * k * y) * Math.sinh(L) + m * y * Math.cosh(L))) / m
      );
    };
  }
  return {
    calculatedDuration: (h && d) || null,
    next: (m) => {
      const w = p(m);
      if (h) o.done = m >= d;
      else {
        let j = g;
        m !== 0 && (v < 1 ? (j = Ph(p, m, w)) : (j = 0));
        const L = Math.abs(j) <= n,
          P = Math.abs(s - w) <= t;
        o.done = L && P;
      }
      return (o.value = o.done ? s : w), o;
    },
  };
}
function fd({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: u,
  restDelta: c = 0.5,
  restSpeed: d,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    g = (S) => (a !== void 0 && S < a) || (u !== void 0 && S > u),
    v = (S) =>
      a === void 0
        ? u
        : u === void 0 || Math.abs(a - S) < Math.abs(u - S)
        ? a
        : u;
  let y = n * t;
  const k = f + y,
    x = o === void 0 ? k : o(k);
  x !== k && (y = x - f);
  const p = (S) => -y * Math.exp(-S / r),
    m = (S) => x + p(S),
    w = (S) => {
      const A = p(S),
        _ = m(S);
      (h.done = Math.abs(A) <= c), (h.value = h.done ? x : _);
    };
  let j, L;
  const P = (S) => {
    g(h.value) &&
      ((j = S),
      (L = Eh({
        keyframes: [h.value, v(h.value)],
        velocity: Ph(m, S, h.value),
        damping: i,
        stiffness: s,
        restDelta: c,
        restSpeed: d,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (S) => {
        let A = !1;
        return (
          !L && j === void 0 && ((A = !0), w(S), P(S)),
          j !== void 0 && S > j ? L.next(S - j) : (!A && w(S), h)
        );
      },
    }
  );
}
const K5 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => z.update(t, !0),
      stop: () => ot(t),
      now: () => (me.isProcessing ? me.timestamp : performance.now()),
    };
  },
  hd = 2e4;
function pd(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < hd; ) (t += n), (r = e.next(t));
  return t >= hd ? 1 / 0 : t;
}
const X5 = { decay: fd, inertia: fd, tween: Fs, keyframes: Fs, spring: Eh };
function bs({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = K5,
  keyframes: r,
  type: i = "keyframes",
  repeat: s = 0,
  repeatDelay: o = 0,
  repeatType: a = "loop",
  onPlay: u,
  onStop: c,
  onComplete: d,
  onUpdate: f,
  ...h
}) {
  let g = 1,
    v = !1,
    y,
    k;
  const x = () => {
    k = new Promise((N) => {
      y = N;
    });
  };
  x();
  let p;
  const m = X5[i] || Fs;
  let w;
  m !== Fs &&
    typeof r[0] != "number" &&
    ((w = po([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const j = m({ ...h, keyframes: r });
  let L;
  a === "mirror" &&
    (L = m({
      ...h,
      keyframes: [...r].reverse(),
      velocity: -(h.velocity || 0),
    }));
  let P = "idle",
    S = null,
    A = null,
    _ = null;
  j.calculatedDuration === null && s && (j.calculatedDuration = pd(j));
  const { calculatedDuration: X } = j;
  let b = 1 / 0,
    Q = 1 / 0;
  X !== null && ((b = X + o), (Q = b * (s + 1) - o));
  let I = 0;
  const he = (N) => {
      if (A === null) return;
      g > 0 && (A = Math.min(A, N)),
        g < 0 && (A = Math.min(N - Q / g, A)),
        S !== null ? (I = S) : (I = Math.round(N - A) * g);
      const F = I - t * (g >= 0 ? 1 : -1),
        H = g >= 0 ? F < 0 : F > Q;
      (I = Math.max(F, 0)), P === "finished" && S === null && (I = Q);
      let W = I,
        He = j;
      if (s) {
        const ur = Math.min(I, Q) / b;
        let En = Math.floor(ur),
          pt = ur % 1;
        !pt && ur >= 1 && (pt = 1),
          pt === 1 && En--,
          (En = Math.min(En, s + 1)),
          !!(En % 2) &&
            (a === "reverse"
              ? ((pt = 1 - pt), o && (pt -= o / b))
              : a === "mirror" && (He = L)),
          (W = Qt(0, 1, pt) * b);
      }
      const ce = H ? { done: !1, value: r[0] } : He.next(W);
      w && (ce.value = w(ce.value));
      let { done: Te } = ce;
      !H && X !== null && (Te = g >= 0 ? I >= Q : I <= 0);
      const ht = S === null && (P === "finished" || (P === "running" && Te));
      return f && f(ce.value), ht && T(), ce;
    },
    G = () => {
      p && p.stop(), (p = void 0);
    },
    ve = () => {
      (P = "idle"), G(), y(), x(), (A = _ = null);
    },
    T = () => {
      (P = "finished"), d && d(), G(), y();
    },
    V = () => {
      if (v) return;
      p || (p = n(he));
      const N = p.now();
      u && u(),
        S !== null ? (A = N - S) : (!A || P === "finished") && (A = N),
        P === "finished" && x(),
        (_ = A),
        (S = null),
        (P = "running"),
        p.start();
    };
  e && V();
  const D = {
    then(N, F) {
      return k.then(N, F);
    },
    get time() {
      return kt(I);
    },
    set time(N) {
      (N = gn(N)),
        (I = N),
        S !== null || !p || g === 0 ? (S = N) : (A = p.now() - N / g);
    },
    get duration() {
      const N = j.calculatedDuration === null ? pd(j) : j.calculatedDuration;
      return kt(N);
    },
    get speed() {
      return g;
    },
    set speed(N) {
      N === g || !p || ((g = N), (D.time = kt(I)));
    },
    get state() {
      return P;
    },
    play: V,
    pause: () => {
      (P = "paused"), (S = I);
    },
    stop: () => {
      (v = !0), P !== "idle" && ((P = "idle"), c && c(), ve());
    },
    cancel: () => {
      _ !== null && he(_), ve();
    },
    complete: () => {
      P = "finished";
    },
    sample: (N) => ((A = 0), he(N)),
  };
  return D;
}
function Q5(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const q5 = Q5(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  J5 = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Oi = 10,
  eg = 2e4,
  tg = (e, t) => t.type === "spring" || e === "backgroundColor" || !ih(t.ease);
function ng(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      q5() &&
      J5.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let o = !1,
    a,
    u,
    c = !1;
  const d = () => {
    u = new Promise((m) => {
      a = m;
    });
  };
  d();
  let { keyframes: f, duration: h = 300, ease: g, times: v } = i;
  if (tg(t, i)) {
    const m = bs({ ...i, repeat: 0, delay: 0 });
    let w = { done: !1, value: f[0] };
    const j = [];
    let L = 0;
    for (; !w.done && L < eg; ) (w = m.sample(L)), j.push(w.value), (L += Oi);
    (v = void 0), (f = j), (h = L - Oi), (g = "linear");
  }
  const y = h5(e.owner.current, t, f, { ...i, duration: h, ease: g, times: v }),
    k = () => {
      (c = !1), y.cancel();
    },
    x = () => {
      (c = !0), z.update(k), a(), d();
    };
  return (
    (y.onfinish = () => {
      c || (e.set(p5(f, i)), r && r(), x());
    }),
    {
      then(m, w) {
        return u.then(m, w);
      },
      attachTimeline(m) {
        return (y.timeline = m), (y.onfinish = null), ie;
      },
      get time() {
        return kt(y.currentTime || 0);
      },
      set time(m) {
        y.currentTime = gn(m);
      },
      get speed() {
        return y.playbackRate;
      },
      set speed(m) {
        y.playbackRate = m;
      },
      get duration() {
        return kt(h);
      },
      play: () => {
        o || (y.play(), ot(k));
      },
      pause: () => y.pause(),
      stop: () => {
        if (((o = !0), y.playState === "idle")) return;
        const { currentTime: m } = y;
        if (m) {
          const w = bs({ ...i, autoplay: !1 });
          e.setWithVelocity(w.sample(m - Oi).value, w.sample(m).value, Oi);
        }
        x();
      },
      complete: () => {
        c || y.finish();
      },
      cancel: x,
    }
  );
}
function rg({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: ie,
      pause: ie,
      stop: ie,
      then: (s) => (s(), Promise.resolve()),
      cancel: ie,
      complete: ie,
    }
  );
  return t
    ? bs({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const ig = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  sg = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  og = { type: "keyframes", duration: 0.8 },
  lg = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  ag = (e, { keyframes: t }) =>
    t.length > 2
      ? og
      : Sn.has(e)
      ? e.startsWith("scale")
        ? sg(t[1])
        : ig
      : lg,
  sa = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (qt.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  ug = new Set(["brightness", "contrast", "saturate", "opacity"]);
function cg(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(co) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = ug.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const dg = /([a-z-]*)\(.*?\)/g,
  oa = {
    ...qt,
    getAnimatableNone: (e) => {
      const t = e.match(dg);
      return t ? t.map(cg).join(" ") : e;
    },
  },
  fg = {
    ...Uf,
    color: Se,
    backgroundColor: Se,
    outlineColor: Se,
    fill: Se,
    stroke: Se,
    borderColor: Se,
    borderTopColor: Se,
    borderRightColor: Se,
    borderBottomColor: Se,
    borderLeftColor: Se,
    filter: oa,
    WebkitFilter: oa,
  },
  Eu = (e) => fg[e];
function Nh(e, t) {
  let n = Eu(e);
  return (
    n !== oa && (n = qt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Lh = (e) => /^0[^.\s]+$/.test(e);
function hg(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || Lh(e);
}
function pg(e, t, n, r) {
  const i = sa(t, n);
  let s;
  Array.isArray(n) ? (s = [...n]) : (s = [null, n]);
  const o = r.from !== void 0 ? r.from : e.get();
  let a;
  const u = [];
  for (let c = 0; c < s.length; c++)
    s[c] === null && (s[c] = c === 0 ? o : s[c - 1]),
      hg(s[c]) && u.push(c),
      typeof s[c] == "string" && s[c] !== "none" && s[c] !== "0" && (a = s[c]);
  if (i && u.length && a)
    for (let c = 0; c < u.length; c++) {
      const d = u[c];
      s[d] = Nh(t, a);
    }
  return s;
}
function mg({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: u,
  elapsed: c,
  ...d
}) {
  return !!Object.keys(d).length;
}
function Nu(e, t) {
  return e[t] || e.default || e;
}
const gg = { skipAnimations: !1 },
  Lu =
    (e, t, n, r = {}) =>
    (i) => {
      const s = Nu(r, e) || {},
        o = s.delay || r.delay || 0;
      let { elapsed: a = 0 } = r;
      a = a - gn(o);
      const u = pg(t, e, n, s),
        c = u[0],
        d = u[u.length - 1],
        f = sa(e, c),
        h = sa(e, d);
      let g = {
        keyframes: u,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...s,
        delay: -a,
        onUpdate: (v) => {
          t.set(v), s.onUpdate && s.onUpdate(v);
        },
        onComplete: () => {
          i(), s.onComplete && s.onComplete();
        },
      };
      if (
        (mg(s) || (g = { ...g, ...ag(e, g) }),
        g.duration && (g.duration = gn(g.duration)),
        g.repeatDelay && (g.repeatDelay = gn(g.repeatDelay)),
        !f || !h || f5.current || s.type === !1 || gg.skipAnimations)
      )
        return rg(g);
      if (
        !r.isHandoff &&
        t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate
      ) {
        const v = ng(t, e, g);
        if (v) return v;
      }
      return bs(g);
    };
function Bs(e) {
  return !!(je(e) && e.add);
}
const Th = (e) => /^\-?\d*\.?\d+$/.test(e);
function Tu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Mu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Au {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Tu(this.subscriptions, t), () => Mu(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const xg = (e) => !isNaN(parseFloat(e)),
  br = { current: void 0 };
class vg {
  constructor(t, n = {}) {
    (this.version = "10.18.0"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: s, timestamp: o } = me;
        this.lastUpdated !== o &&
          ((this.timeDelta = s),
          (this.lastUpdated = o),
          z.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => z.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = xg(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Au());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            z.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return br.current && br.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? Pu(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function nt(e, t) {
  return new vg(e, t);
}
const Mh = (e) => (t) => t.test(e),
  yg = { test: (e) => e === "auto", parse: (e) => e },
  Ah = [Pn, R, ft, Mt, N4, E4, yg],
  vr = (e) => Ah.find(Mh(e)),
  wg = [...Ah, Se, qt],
  Cg = (e) => wg.find(Mh(e));
function kg(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, nt(n));
}
function jg(e, t) {
  const n = ho(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...s
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = z4(s[o]);
    kg(e, o, a);
  }
}
function Sg(e, t, n) {
  var r, i;
  const s = Object.keys(t).filter((a) => !e.hasValue(a)),
    o = s.length;
  if (o)
    for (let a = 0; a < o; a++) {
      const u = s[a],
        c = t[u];
      let d = null;
      Array.isArray(c) && (d = c[0]),
        d === null &&
          (d =
            (i = (r = n[u]) !== null && r !== void 0 ? r : e.readValue(u)) !==
              null && i !== void 0
              ? i
              : t[u]),
        d != null &&
          (typeof d == "string" && (Th(d) || Lh(d))
            ? (d = parseFloat(d))
            : !Cg(d) && qt.test(c) && (d = Nh(u, c)),
          e.addValue(u, nt(d, { owner: e })),
          n[u] === void 0 && (n[u] = d),
          d !== null && e.setBaseTarget(u, d));
    }
}
function Pg(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function Eg(e, t, n) {
  const r = {};
  for (const i in e) {
    const s = Pg(i, t);
    if (s !== void 0) r[i] = s;
    else {
      const o = n.getValue(i);
      o && (r[i] = o.get());
    }
  }
  return r;
}
function Ng({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Lg(e, t) {
  const n = e.get();
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
  } else return n !== t;
}
function Vh(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: s = e.getDefaultTransition(),
    transitionEnd: o,
    ...a
  } = e.makeTargetAnimatable(t);
  const u = e.getValue("willChange");
  r && (s = r);
  const c = [],
    d = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const h = e.getValue(f),
      g = a[f];
    if (!h || g === void 0 || (d && Ng(d, f))) continue;
    const v = { delay: n, elapsed: 0, ...Nu(s || {}, f) };
    if (window.HandoffAppearAnimations) {
      const x = e.getProps()[Df];
      if (x) {
        const p = window.HandoffAppearAnimations(x, f, h, z);
        p !== null && ((v.elapsed = p), (v.isHandoff = !0));
      }
    }
    let y = !v.isHandoff && !Lg(h, g);
    if (
      (v.type === "spring" && (h.getVelocity() || v.velocity) && (y = !1),
      h.animation && (y = !1),
      y)
    )
      continue;
    h.start(Lu(f, h, g, e.shouldReduceMotion && Sn.has(f) ? { type: !1 } : v));
    const k = h.animation;
    Bs(u) && (u.add(f), k.then(() => u.remove(f))), c.push(k);
  }
  return (
    o &&
      Promise.all(c).then(() => {
        o && jg(e, o);
      }),
    c
  );
}
function la(e, t, n = {}) {
  const r = ho(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = r ? () => Promise.all(Vh(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return Tg(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [s, o] : [o, s];
    return u().then(() => c());
  } else return Promise.all([s(), o(n.delay)]);
}
function Tg(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    u = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(Mg)
      .forEach((c, d) => {
        c.notify("AnimationStart", t),
          o.push(
            la(c, t, { ...s, delay: n + u(d) }).then(() =>
              c.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function Mg(e, t) {
  return e.sortNodePosition(t);
}
function Ag(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => la(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = la(e, t, n);
  else {
    const i = typeof t == "function" ? ho(e, t, n.custom) : t;
    r = Promise.all(Vh(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const Vg = [...fu].reverse(),
  _g = fu.length;
function Rg(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Ag(e, n, r)));
}
function Dg(e) {
  let t = Rg(e);
  const n = bg();
  let r = !0;
  const i = (u, c) => {
    const d = ho(e, c);
    if (d) {
      const { transition: f, transitionEnd: h, ...g } = d;
      u = { ...u, ...g, ...h };
    }
    return u;
  };
  function s(u) {
    t = u(e);
  }
  function o(u, c) {
    const d = e.getProps(),
      f = e.getVariantContext(!0) || {},
      h = [],
      g = new Set();
    let v = {},
      y = 1 / 0;
    for (let x = 0; x < _g; x++) {
      const p = Vg[x],
        m = n[p],
        w = d[p] !== void 0 ? d[p] : f[p],
        j = si(w),
        L = p === c ? m.isActive : null;
      L === !1 && (y = x);
      let P = w === f[p] && w !== d[p] && j;
      if (
        (P && r && e.manuallyAnimateOnMount && (P = !1),
        (m.protectedKeys = { ...v }),
        (!m.isActive && L === null) ||
          (!w && !m.prevProp) ||
          ao(w) ||
          typeof w == "boolean")
      )
        continue;
      let A =
          Fg(m.prevProp, w) ||
          (p === c && m.isActive && !P && j) ||
          (x > y && j),
        _ = !1;
      const X = Array.isArray(w) ? w : [w];
      let b = X.reduce(i, {});
      L === !1 && (b = {});
      const { prevResolvedValues: Q = {} } = m,
        I = { ...Q, ...b },
        he = (G) => {
          (A = !0),
            g.has(G) && ((_ = !0), g.delete(G)),
            (m.needsAnimating[G] = !0);
        };
      for (const G in I) {
        const ve = b[G],
          T = Q[G];
        if (v.hasOwnProperty(G)) continue;
        let V = !1;
        _s(ve) && _s(T) ? (V = !nh(ve, T)) : (V = ve !== T),
          V
            ? ve !== void 0
              ? he(G)
              : g.add(G)
            : ve !== void 0 && g.has(G)
            ? he(G)
            : (m.protectedKeys[G] = !0);
      }
      (m.prevProp = w),
        (m.prevResolvedValues = b),
        m.isActive && (v = { ...v, ...b }),
        r && e.blockInitialAnimation && (A = !1),
        A &&
          (!P || _) &&
          h.push(
            ...X.map((G) => ({ animation: G, options: { type: p, ...u } }))
          );
    }
    if (g.size) {
      const x = {};
      g.forEach((p) => {
        const m = e.getBaseTarget(p);
        m !== void 0 && (x[p] = m);
      }),
        h.push({ animation: x });
    }
    let k = !!h.length;
    return (
      r &&
        (d.initial === !1 || d.initial === d.animate) &&
        !e.manuallyAnimateOnMount &&
        (k = !1),
      (r = !1),
      k ? t(h) : Promise.resolve()
    );
  }
  function a(u, c, d) {
    var f;
    if (n[u].isActive === c) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((g) => {
        var v;
        return (v = g.animationState) === null || v === void 0
          ? void 0
          : v.setActive(u, c);
      }),
      (n[u].isActive = c);
    const h = o(d, u);
    for (const g in n) n[g].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
  };
}
function Fg(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !nh(t, e) : !1;
}
function rn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function bg() {
  return {
    animate: rn(!0),
    whileInView: rn(),
    whileHover: rn(),
    whileTap: rn(),
    whileDrag: rn(),
    whileFocus: rn(),
    exit: rn(),
  };
}
class Bg extends nn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Dg(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), ao(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let Og = 0;
class Ig extends nn {
  constructor() {
    super(...arguments), (this.id = Og++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const s = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && s.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const zg = { animation: { Feature: Bg }, exit: { Feature: Ig } },
  md = (e, t) => Math.abs(e - t);
function Ug(e, t) {
  const n = md(e.x, t.x),
    r = md(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class _h {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = qo(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          g = Ug(f.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !g) return;
        const { point: v } = f,
          { timestamp: y } = me;
        this.history.push({ ...v, timestamp: y });
        const { onStart: k, onMove: x } = this.handlers;
        h ||
          (k && k(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          x && x(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, h) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Qo(h, this.transformPagePoint)),
          z.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, h) => {
        this.end();
        const { onEnd: g, onSessionEnd: v, resumeAnimation: y } = this.handlers;
        if (
          (this.dragSnapToOrigin && y && y(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const k = qo(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Qo(h, this.transformPagePoint),
          this.history
        );
        this.startEvent && g && g(f, k), v && v(f, k);
      }),
      !Qf(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const o = fo(t),
      a = Qo(o, this.transformPagePoint),
      { point: u } = a,
      { timestamp: c } = me;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: d } = n;
    d && d(t, qo(a, this.history)),
      (this.removeListeners = Yt(
        Ct(this.contextWindow, "pointermove", this.handlePointerMove),
        Ct(this.contextWindow, "pointerup", this.handlePointerUp),
        Ct(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ot(this.updatePoint);
  }
}
function Qo(e, t) {
  return t ? { point: t(e.point) } : e;
}
function gd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function qo({ point: e }, t) {
  return {
    point: e,
    delta: gd(e, Rh(t)),
    offset: gd(e, Hg(t)),
    velocity: Wg(t, 0.1),
  };
}
function Hg(e) {
  return e[0];
}
function Rh(e) {
  return e[e.length - 1];
}
function Wg(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Rh(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > gn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = kt(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function Ie(e) {
  return e.max - e.min;
}
function aa(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function xd(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = J(t.min, t.max, e.origin)),
    (e.scale = Ie(n) / Ie(t)),
    (aa(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = J(n.min, n.max, e.origin) - e.originPoint),
    (aa(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Br(e, t, n, r) {
  xd(e.x, t.x, n.x, r ? r.originX : void 0),
    xd(e.y, t.y, n.y, r ? r.originY : void 0);
}
function vd(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ie(t));
}
function $g(e, t, n) {
  vd(e.x, t.x, n.x), vd(e.y, t.y, n.y);
}
function yd(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ie(t));
}
function Or(e, t, n) {
  yd(e.x, t.x, n.x), yd(e.y, t.y, n.y);
}
function Gg(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? J(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? J(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function wd(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function Zg(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: wd(e.x, n, i), y: wd(e.y, t, r) };
}
function Cd(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Yg(e, t) {
  return { x: Cd(e.x, t.x), y: Cd(e.y, t.y) };
}
function Kg(e, t) {
  let n = 0.5;
  const r = Ie(e),
    i = Ie(t);
  return (
    i > r
      ? (n = ir(t.min, t.max - r, e.min))
      : r > i && (n = ir(e.min, e.max - i, t.min)),
    Qt(0, 1, n)
  );
}
function Xg(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const ua = 0.35;
function Qg(e = ua) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = ua),
    { x: kd(e, "left", "right"), y: kd(e, "top", "bottom") }
  );
}
function kd(e, t, n) {
  return { min: jd(e, t), max: jd(e, n) };
}
function jd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Sd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Un = () => ({ x: Sd(), y: Sd() }),
  Pd = () => ({ min: 0, max: 0 }),
  oe = () => ({ x: Pd(), y: Pd() });
function $e(e) {
  return [e("x"), e("y")];
}
function Dh({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function qg({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Jg(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Jo(e) {
  return e === void 0 || e === 1;
}
function ca({ scale: e, scaleX: t, scaleY: n }) {
  return !Jo(e) || !Jo(t) || !Jo(n);
}
function ln(e) {
  return ca(e) || Fh(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Fh(e) {
  return Ed(e.x) || Ed(e.y);
}
function Ed(e) {
  return e && e !== "0%";
}
function Os(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Nd(e, t, n, r, i) {
  return i !== void 0 && (e = Os(e, i, r)), Os(e, n, r) + t;
}
function da(e, t = 0, n = 1, r, i) {
  (e.min = Nd(e.min, t, n, r, i)), (e.max = Nd(e.max, t, n, r, i));
}
function bh(e, { x: t, y: n }) {
  da(e.x, t.translate, t.scale, t.originPoint),
    da(e.y, n.translate, n.scale, n.originPoint);
}
function e6(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const u = s.instance;
    (u && u.style && u.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Hn(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), bh(e, o)),
      r && ln(s.latestValues) && Hn(e, s.latestValues));
  }
  (t.x = Ld(t.x)), (t.y = Ld(t.y));
}
function Ld(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Rt(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Td(e, t, [n, r, i]) {
  const s = t[i] !== void 0 ? t[i] : 0.5,
    o = J(e.min, e.max, s);
  da(e, t[n], t[r], o, t.scale);
}
const t6 = ["x", "scaleX", "originX"],
  n6 = ["y", "scaleY", "originY"];
function Hn(e, t) {
  Td(e.x, t, t6), Td(e.y, t, n6);
}
function Bh(e, t) {
  return Dh(Jg(e.getBoundingClientRect(), t));
}
function r6(e, t, n) {
  const r = Bh(e, n),
    { scroll: i } = t;
  return i && (Rt(r.x, i.offset.x), Rt(r.y, i.offset.y)), r;
}
const Oh = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  i6 = new WeakMap();
class s6 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = oe()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (d) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(fo(d, "page").point);
      },
      s = (d, f) => {
        const { drag: h, dragPropagation: g, onDragStart: v } = this.getProps();
        if (
          h &&
          !g &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Jf(h)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          $e((k) => {
            let x = this.getAxisMotionValue(k).get() || 0;
            if (ft.test(x)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const m = p.layout.layoutBox[k];
                m && (x = Ie(m) * (parseFloat(x) / 100));
              }
            }
            this.originPoint[k] = x;
          }),
          v && z.update(() => v(d, f), !1, !0);
        const { animationState: y } = this.visualElement;
        y && y.setActive("whileDrag", !0);
      },
      o = (d, f) => {
        const {
          dragPropagation: h,
          dragDirectionLock: g,
          onDirectionLock: v,
          onDrag: y,
        } = this.getProps();
        if (!h && !this.openGlobalLock) return;
        const { offset: k } = f;
        if (g && this.currentDirection === null) {
          (this.currentDirection = o6(k)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, k),
          this.updateAxis("y", f.point, k),
          this.visualElement.render(),
          y && y(d, f);
      },
      a = (d, f) => this.stop(d, f),
      u = () =>
        $e((d) => {
          var f;
          return (
            this.getAnimationState(d) === "paused" &&
            ((f = this.getAxisMotionValue(d).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new _h(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: Oh(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && z.update(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ii(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = Gg(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      s = this.constraints;
    n && In(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = Zg(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = Qg(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        $e((o) => {
          this.getAxisMotionValue(o) &&
            (this.constraints[o] = Xg(i.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !In(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = r6(r, i.root, this.visualElement.getTransformPagePoint());
    let o = Yg(i.layout.layoutBox, s);
    if (n) {
      const a = n(qg(o));
      (this.hasMutatedConstraints = !!a), a && (o = Dh(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      u = this.constraints || {},
      c = $e((d) => {
        if (!Ii(d, n, this.currentDirection)) return;
        let f = (u && u[d]) || {};
        o && (f = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: h,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(d, v);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Lu(t, r, 0, n));
  }
  stopAnimation() {
    $e((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    $e((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    $e((n) => {
      const { drag: r } = this.getProps();
      if (!Ii(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - J(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!In(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    $e((o) => {
      const a = this.getAxisMotionValue(o);
      if (a) {
        const u = a.get();
        i[o] = Kg({ min: u, max: u }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      $e((o) => {
        if (!Ii(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: u, max: c } = this.constraints[o];
        a.set(J(u, c, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    i6.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Ct(t, "pointerdown", (u) => {
        const { drag: c, dragListener: d = !0 } = this.getProps();
        c && d && this.start(u);
      }),
      r = () => {
        const { dragConstraints: u } = this.getProps();
        In(u) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const o = yt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            ($e((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += u[d].translate),
                f.set(f.get() + u[d].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = ua,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function Ii(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function o6(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class l6 extends nn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = ie),
      (this.removeListeners = ie),
      (this.controls = new s6(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ie);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Md = (e) => (t, n) => {
  e && z.update(() => e(t, n));
};
class a6 extends nn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ie);
  }
  onPointerDown(t) {
    this.session = new _h(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Oh(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Md(t),
      onStart: Md(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && z.update(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ct(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function u6() {
  const e = C.useContext(oo);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = C.useId();
  return C.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const ns = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ad(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const yr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (R.test(e)) e = parseFloat(e);
        else return e;
      const n = Ad(e, t.target.x),
        r = Ad(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  c6 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = qt.parse(e);
      if (i.length > 5) return r;
      const s = qt.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        u = n.y.scale * t.y;
      (i[0 + o] /= a), (i[1 + o] /= u);
      const c = J(a, u, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= c),
        typeof i[3 + o] == "number" && (i[3 + o] /= c),
        s(i)
      );
    },
  };
class d6 extends ai.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    y4(f6),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ns.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              z.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Ih(e) {
  const [t, n] = u6(),
    r = C.useContext(pu);
  return ai.createElement(d6, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: C.useContext(bf),
    isPresent: t,
    safeToRemove: n,
  });
}
const f6 = {
    borderRadius: {
      ...yr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: yr,
    borderTopRightRadius: yr,
    borderBottomLeftRadius: yr,
    borderBottomRightRadius: yr,
    boxShadow: c6,
  },
  zh = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  h6 = zh.length,
  Vd = (e) => (typeof e == "string" ? parseFloat(e) : e),
  _d = (e) => typeof e == "number" || R.test(e);
function p6(e, t, n, r, i, s) {
  i
    ? ((e.opacity = J(0, n.opacity !== void 0 ? n.opacity : 1, m6(r))),
      (e.opacityExit = J(t.opacity !== void 0 ? t.opacity : 1, 0, g6(r))))
    : s &&
      (e.opacity = J(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < h6; o++) {
    const a = `border${zh[o]}Radius`;
    let u = Rd(t, a),
      c = Rd(n, a);
    if (u === void 0 && c === void 0) continue;
    u || (u = 0),
      c || (c = 0),
      u === 0 || c === 0 || _d(u) === _d(c)
        ? ((e[a] = Math.max(J(Vd(u), Vd(c), r), 0)),
          (ft.test(c) || ft.test(u)) && (e[a] += "%"))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = J(t.rotate || 0, n.rotate || 0, r));
}
function Rd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const m6 = Uh(0, 0.5, dh),
  g6 = Uh(0.5, 0.95, ie);
function Uh(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(ir(e, t, r)));
}
function Dd(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function We(e, t) {
  Dd(e.x, t.x), Dd(e.y, t.y);
}
function Fd(e, t, n, r, i) {
  return (
    (e -= t), (e = Os(e, 1 / n, r)), i !== void 0 && (e = Os(e, 1 / i, r)), e
  );
}
function x6(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (ft.test(t) &&
      ((t = parseFloat(t)), (t = J(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = J(s.min, s.max, r);
  e === s && (a -= t),
    (e.min = Fd(e.min, t, n, a, i)),
    (e.max = Fd(e.max, t, n, a, i));
}
function bd(e, t, [n, r, i], s, o) {
  x6(e, t[n], t[r], t[i], t.scale, s, o);
}
const v6 = ["x", "scaleX", "originX"],
  y6 = ["y", "scaleY", "originY"];
function Bd(e, t, n, r) {
  bd(e.x, t, v6, n ? n.x : void 0, r ? r.x : void 0),
    bd(e.y, t, y6, n ? n.y : void 0, r ? r.y : void 0);
}
function Od(e) {
  return e.translate === 0 && e.scale === 1;
}
function Hh(e) {
  return Od(e.x) && Od(e.y);
}
function w6(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Wh(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Id(e) {
  return Ie(e.x) / Ie(e.y);
}
class C6 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Tu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Mu(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function zd(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y;
  if (
    ((i || s) && (r = `translate3d(${i}px, ${s}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: u, rotateX: c, rotateY: d } = n;
    u && (r += `rotate(${u}deg) `),
      c && (r += `rotateX(${c}deg) `),
      d && (r += `rotateY(${d}deg) `);
  }
  const o = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (o !== 1 || a !== 1) && (r += `scale(${o}, ${a})`), r || "none";
}
const k6 = (e, t) => e.depth - t.depth;
class j6 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Tu(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Mu(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(k6),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function S6(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (ot(r), e(s - t));
    };
  return z.read(r, !0), () => ot(r);
}
function P6(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function E6(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function N6(e, t, n) {
  const r = je(e) ? e : nt(e);
  return r.start(Lu("", r, t, n)), r.animation;
}
const Ud = ["", "X", "Y", "Z"],
  L6 = { visibility: "hidden" },
  Hd = 1e3;
let T6 = 0;
const an = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function $h({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = T6++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (an.totalNodes =
              an.resolvedTargetDeltas =
              an.recalculatedProjection =
                0),
            this.nodes.forEach(V6),
            this.nodes.forEach(b6),
            this.nodes.forEach(B6),
            this.nodes.forEach(_6),
            P6(an);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new j6());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Au()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const u = this.eventHandlers.get(o);
      u && u.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = E6(o)), (this.instance = o);
      const { layoutId: u, layout: c, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || u) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = S6(h, 250)),
            ns.hasAnimatedSinceResize &&
              ((ns.hasAnimatedSinceResize = !1), this.nodes.forEach($d));
        });
      }
      u && this.root.registerSharedNode(u, this),
        this.options.animate !== !1 &&
          d &&
          (u || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: g,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const y =
                  this.options.transition || d.getDefaultTransition() || H6,
                { onLayoutAnimationStart: k, onLayoutAnimationComplete: x } =
                  d.getProps(),
                p = !this.targetLayout || !Wh(this.targetLayout, v) || g,
                m = !h && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (h && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m);
                const w = { ...Nu(y, "layout"), onPlay: k, onComplete: x };
                (d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                h || $d(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        ot(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(O6),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: u } = this.options;
      if (a === void 0 && !u) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Wd);
        return;
      }
      this.isUpdating || this.nodes.forEach(D6),
        (this.isUpdating = !1),
        this.nodes.forEach(F6),
        this.nodes.forEach(M6),
        this.nodes.forEach(A6),
        this.clearAllSnapshots();
      const a = performance.now();
      (me.delta = Qt(0, 1e3 / 60, a - me.timestamp)),
        (me.timestamp = a),
        (me.isProcessing = !0),
        Ho.update.process(me),
        Ho.preRender.process(me),
        Ho.render.process(me),
        (me.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(R6), this.sharedNodes.forEach(I6);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        z.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      z.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let u = 0; u < this.path.length; u++) this.path[u].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = oe()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === o &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: o,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const o = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !Hh(this.projectionDelta),
        u = this.getTransformTemplate(),
        c = u ? u(this.latestValues, "") : void 0,
        d = c !== this.prevTransformTemplateValue;
      o &&
        (a || ln(this.latestValues) || d) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let u = this.removeElementScroll(a);
      return (
        o && (u = this.removeTransform(u)),
        W6(u),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: u,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o) return oe();
      const a = o.measureViewportBox(),
        { scroll: u } = this.root;
      return u && (Rt(a.x, u.offset.x), Rt(a.y, u.offset.y)), a;
    }
    removeElementScroll(o) {
      const a = oe();
      We(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        if (c !== this.root && d && f.layoutScroll) {
          if (d.isRoot) {
            We(a, o);
            const { scroll: h } = this.root;
            h && (Rt(a.x, -h.offset.x), Rt(a.y, -h.offset.y));
          }
          Rt(a.x, d.offset.x), Rt(a.y, d.offset.y);
        }
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const u = oe();
      We(u, o);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        !a &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          Hn(u, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          ln(d.latestValues) && Hn(u, d.latestValues);
      }
      return ln(this.latestValues) && Hn(u, this.latestValues), u;
    }
    removeTransform(o) {
      const a = oe();
      We(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!c.instance || !ln(c.latestValues)) continue;
        ca(c.latestValues) && c.updateSnapshot();
        const d = oe(),
          f = c.measurePageBox();
        We(d, f),
          Bd(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d);
      }
      return ln(this.latestValues) && Bd(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== me.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const u = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = u.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = u.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = u.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== u;
      if (
        !(
          o ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: h } = this.options;
      if (!(!this.layout || !(f || h))) {
        if (
          ((this.resolvedRelativeTargetAt = me.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = oe()),
              (this.relativeTargetOrigin = oe()),
              Or(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              We(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = oe()), (this.targetWithTransforms = oe())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                $g(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : We(this.target, this.layout.layoutBox),
                bh(this.target, this.targetDelta))
              : We(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = oe()),
                (this.relativeTargetOrigin = oe()),
                Or(this.relativeTargetOrigin, this.target, g.target),
                We(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          an.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          ca(this.parent.latestValues) ||
          Fh(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        u = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (c = !1),
        u &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === me.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || f))
      )
        return;
      We(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        g = this.treeScale.y;
      e6(this.layoutCorrected, this.treeScale, this.path, u),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (a.target = a.layout.layoutBox);
      const { target: v } = a;
      if (!v) {
        this.projectionTransform &&
          ((this.projectionDelta = Un()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Un()),
        (this.projectionDeltaWithTransform = Un()));
      const y = this.projectionTransform;
      Br(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.projectionTransform = zd(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== y ||
          this.treeScale.x !== h ||
          this.treeScale.y !== g) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        an.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), o)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(o, a = !1) {
      const u = this.snapshot,
        c = u ? u.latestValues : {},
        d = { ...this.latestValues },
        f = Un();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const h = oe(),
        g = u ? u.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        y = g !== v,
        k = this.getStack(),
        x = !k || k.members.length <= 1,
        p = !!(y && !x && this.options.crossfade === !0 && !this.path.some(U6));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (w) => {
        const j = w / 1e3;
        Gd(f.x, o.x, j),
          Gd(f.y, o.y, j),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Or(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            z6(this.relativeTarget, this.relativeTargetOrigin, h, j),
            m && w6(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = oe()),
            We(m, this.relativeTarget)),
          y &&
            ((this.animationValues = d), p6(d, c, this.latestValues, j, p, x)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = j);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (ot(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = z.update(() => {
          (ns.hasAnimatedSinceResize = !0),
            (this.currentAnimation = N6(0, Hd, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Hd),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: u,
        layout: c,
        latestValues: d,
      } = o;
      if (!(!a || !u || !c)) {
        if (
          this !== o &&
          this.layout &&
          c &&
          Gh(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          u = this.target || oe();
          const f = Ie(this.layout.layoutBox.x);
          (u.x.min = o.target.x.min), (u.x.max = u.x.min + f);
          const h = Ie(this.layout.layoutBox.y);
          (u.y.min = o.target.y.min), (u.y.max = u.y.min + h);
        }
        We(a, u),
          Hn(a, d),
          Br(this.projectionDeltaWithTransform, this.layoutCorrected, a, d);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new C6()),
        this.sharedNodes.get(o).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: u } = {}) {
      const c = this.getStack();
      c && c.promote(this, u),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: u } = o;
      if (((u.rotate || u.rotateX || u.rotateY || u.rotateZ) && (a = !0), !a))
        return;
      const c = {};
      for (let d = 0; d < Ud.length; d++) {
        const f = "rotate" + Ud[d];
        u[f] && ((c[f] = u[f]), o.setStaticValue(f, 0));
      }
      o.render();
      for (const d in c) o.setStaticValue(d, c[d]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, u;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return L6;
      const c = { visibility: "" },
        d = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = ts(o == null ? void 0 : o.pointerEvents) || ""),
          (c.transform = d ? d(this.latestValues, "") : "none"),
          c
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const y = {};
        return (
          this.options.layoutId &&
            ((y.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (y.pointerEvents = ts(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !ln(this.latestValues) &&
            ((y.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          y
        );
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = zd(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h
        )),
        d && (c.transform = d(h, c.transform));
      const { x: g, y: v } = this.projectionDelta;
      (c.transformOrigin = `${g.origin * 100}% ${v.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (u =
                    (a = h.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && u !== void 0
                  ? u
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : h.opacityExit)
          : (c.opacity =
              f === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                ? h.opacityExit
                : 0);
      for (const y in As) {
        if (h[y] === void 0) continue;
        const { correct: k, applyTo: x } = As[y],
          p = c.transform === "none" ? h[y] : k(h[y], f);
        if (x) {
          const m = x.length;
          for (let w = 0; w < m; w++) c[x[w]] = p;
        } else c[y] = p;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents =
            f === this
              ? ts(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Wd),
        this.root.sharedNodes.clear();
    }
  };
}
function M6(e) {
  e.updateLayout();
}
function A6(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? $e((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            g = Ie(h);
          (h.min = r[f].min), (h.max = h.min + g);
        })
      : Gh(s, n.layoutBox, r) &&
        $e((f) => {
          const h = o ? n.measuredBox[f] : n.layoutBox[f],
            g = Ie(r[f]);
          (h.max = h.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g));
        });
    const a = Un();
    Br(a, r, n.layoutBox);
    const u = Un();
    o ? Br(u, e.applyTransform(i, !0), n.measuredBox) : Br(u, r, n.layoutBox);
    const c = !Hh(a);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: g } = f;
        if (h && g) {
          const v = oe();
          Or(v, n.layoutBox, h.layoutBox);
          const y = oe();
          Or(y, r, g.layoutBox),
            Wh(v, y) || (d = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = y),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: u,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function V6(e) {
  an.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function _6(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function R6(e) {
  e.clearSnapshot();
}
function Wd(e) {
  e.clearMeasurements();
}
function D6(e) {
  e.isLayoutDirty = !1;
}
function F6(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function $d(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function b6(e) {
  e.resolveTargetDelta();
}
function B6(e) {
  e.calcProjection();
}
function O6(e) {
  e.resetRotation();
}
function I6(e) {
  e.removeLeadSnapshot();
}
function Gd(e, t, n) {
  (e.translate = J(t.translate, 0, n)),
    (e.scale = J(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Zd(e, t, n, r) {
  (e.min = J(t.min, n.min, r)), (e.max = J(t.max, n.max, r));
}
function z6(e, t, n, r) {
  Zd(e.x, t.x, n.x, r), Zd(e.y, t.y, n.y, r);
}
function U6(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const H6 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Yd = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  Kd = Yd("applewebkit/") && !Yd("chrome/") ? Math.round : ie;
function Xd(e) {
  (e.min = Kd(e.min)), (e.max = Kd(e.max));
}
function W6(e) {
  Xd(e.x), Xd(e.y);
}
function Gh(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !aa(Id(t), Id(n), 0.2))
  );
}
const $6 = $h({
    attachResizeListener: (e, t) => yt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  el = { current: void 0 },
  Zh = $h({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!el.current) {
        const e = new $6({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (el.current = e);
      }
      return el.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  G6 = {
    pan: { Feature: a6 },
    drag: { Feature: l6, ProjectionNode: Zh, MeasureLayout: Ih },
  },
  Z6 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Y6(e) {
  const t = Z6.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function fa(e, t, n = 1) {
  const [r, i] = Y6(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return Th(o) ? parseFloat(o) : o;
  } else return ta(i) ? fa(i, t, n + 1) : i;
}
function K6(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const s = i.get();
      if (!ta(s)) return;
      const o = fa(s, r);
      o && i.set(o);
    });
  for (const i in t) {
    const s = t[i];
    if (!ta(s)) continue;
    const o = fa(s, r);
    o && ((t[i] = o), n || (n = {}), n[i] === void 0 && (n[i] = s));
  }
  return { target: t, transitionEnd: n };
}
const X6 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Yh = (e) => X6.has(e),
  Q6 = (e) => Object.keys(e).some(Yh),
  Qd = (e) => e === Pn || e === R,
  qd = (e, t) => parseFloat(e.split(", ")[t]),
  Jd =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return qd(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/);
        return s ? qd(s[1], e) : 0;
      }
    },
  q6 = new Set(["x", "y", "z"]),
  J6 = pi.filter((e) => !q6.has(e));
function e8(e) {
  const t = [];
  return (
    J6.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const sr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Jd(4, 13),
  y: Jd(5, 14),
};
sr.translateX = sr.x;
sr.translateY = sr.y;
const t8 = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      s = getComputedStyle(i),
      { display: o } = s,
      a = {};
    o === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((c) => {
        a[c] = sr[c](r, s);
      }),
      t.render();
    const u = t.measureViewportBox();
    return (
      n.forEach((c) => {
        const d = t.getValue(c);
        d && d.jump(a[c]), (e[c] = sr[c](u, s));
      }),
      e
    );
  },
  n8 = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(Yh);
    let s = [],
      o = !1;
    const a = [];
    if (
      (i.forEach((u) => {
        const c = e.getValue(u);
        if (!e.hasValue(u)) return;
        let d = n[u],
          f = vr(d);
        const h = t[u];
        let g;
        if (_s(h)) {
          const v = h.length,
            y = h[0] === null ? 1 : 0;
          (d = h[y]), (f = vr(d));
          for (let k = y; k < v && h[k] !== null; k++)
            g ? Rs(vr(h[k]) === g) : (g = vr(h[k]));
        } else g = vr(h);
        if (f !== g)
          if (Qd(f) && Qd(g)) {
            const v = c.get();
            typeof v == "string" && c.set(parseFloat(v)),
              typeof h == "string"
                ? (t[u] = parseFloat(h))
                : Array.isArray(h) && g === R && (t[u] = h.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            g != null &&
            g.transform &&
            (d === 0 || h === 0)
              ? d === 0
                ? c.set(g.transform(d))
                : (t[u] = f.transform(h))
              : (o || ((s = e8(e)), (o = !0)),
                a.push(u),
                (r[u] = r[u] !== void 0 ? r[u] : t[u]),
                c.jump(h));
      }),
      a.length)
    ) {
      const u = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        c = t8(t, e, a);
      return (
        s.length &&
          s.forEach(([d, f]) => {
            e.getValue(d).set(f);
          }),
        e.render(),
        lo && u !== null && window.scrollTo({ top: u }),
        { target: c, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function r8(e, t, n, r) {
  return Q6(t) ? n8(e, t, n, r) : { target: t, transitionEnd: r };
}
const i8 = (e, t, n, r) => {
    const i = K6(e, t, r);
    return (t = i.target), (r = i.transitionEnd), r8(e, t, n, r);
  },
  ha = { current: null },
  Kh = { current: !1 };
function s8() {
  if (((Kh.current = !0), !!lo))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (ha.current = e.matches);
      e.addListener(t), t();
    } else ha.current = !1;
}
function o8(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const s = t[i],
      o = n[i];
    if (je(s)) e.addValue(i, s), Bs(r) && r.add(i);
    else if (je(o)) e.addValue(i, nt(s, { owner: e })), Bs(r) && r.remove(i);
    else if (o !== s)
      if (e.hasValue(i)) {
        const a = e.getValue(i);
        !a.hasAnimated && a.set(s);
      } else {
        const a = e.getStaticValue(i);
        e.addValue(i, nt(a !== void 0 ? a : s, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const e0 = new WeakMap(),
  Xh = Object.keys(oi),
  l8 = Xh.length,
  t0 = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  a8 = hu.length;
class u8 {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: s,
    },
    o = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => z.render(this.render, !1, !0));
    const { latestValues: a, renderState: u } = s;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = o),
      (this.isControllingVariants = uo(n)),
      (this.isVariantNode = Ff(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in d) {
      const h = d[f];
      a[f] !== void 0 && je(h) && (h.set(a[f], !1), Bs(c) && c.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      e0.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Kh.current || s8(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : ha.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    e0.delete(this.current),
      this.projection && this.projection.unmount(),
      ot(this.notifyUpdate),
      ot(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Sn.has(t),
      i = n.on("change", (o) => {
        (this.latestValues[t] = o),
          this.props.onUpdate && z.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), s();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, s) {
    let o, a;
    for (let u = 0; u < l8; u++) {
      const c = Xh[u],
        {
          isEnabled: d,
          Feature: f,
          ProjectionNode: h,
          MeasureLayout: g,
        } = oi[c];
      h && (o = h),
        d(n) &&
          (!this.features[c] && f && (this.features[c] = new f(this)),
          g && (a = g));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      o
    ) {
      this.projection = new o(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: u,
        layout: c,
        drag: d,
        dragConstraints: f,
        layoutScroll: h,
        layoutRoot: g,
      } = n;
      this.projection.setOptions({
        layoutId: u,
        layout: c,
        alwaysMeasureLayout: !!d || (f && In(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: s,
        layoutScroll: h,
        layoutRoot: g,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : oe();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < t0.length; r++) {
      const i = t0[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = t["on" + i];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = o8(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < a8; r++) {
      const i = hu[r],
        s = this.props[i];
      (si(s) || s === !1) && (n[i] = s);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = nt(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = Cu(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !je(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Au()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Qh extends u8 {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    s
  ) {
    let o = Eg(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), o && (o = i(o))), s)) {
      Sg(this, r, o);
      const a = i8(this, r, o, n);
      (n = a.transitionEnd), (r = a.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function c8(e) {
  return window.getComputedStyle(e);
}
class d8 extends Qh {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (Sn.has(n)) {
      const r = Eu(n);
      return (r && r.default) || 0;
    } else {
      const r = c8(t),
        i = (If(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Bh(t, n);
  }
  build(t, n, r, i) {
    gu(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return wu(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    je(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    Gf(t, n, r, i);
  }
}
class f8 extends Qh {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Sn.has(n)) {
      const r = Eu(n);
      return (r && r.default) || 0;
    }
    return (n = Zf.has(n) ? n : du(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return oe();
  }
  scrapeMotionValuesFromProps(t, n) {
    return Kf(t, n);
  }
  build(t, n, r, i) {
    vu(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Yf(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = yu(t.tagName)), super.mount(t);
  }
}
const h8 = (e, t) =>
    mu(e)
      ? new f8(t, { enableHardwareAcceleration: !1 })
      : new d8(t, { enableHardwareAcceleration: !0 }),
  p8 = { layout: { ProjectionNode: Zh, MeasureLayout: Ih } },
  m8 = { ...zg, ...a5, ...G6, ...p8 },
  Ir = x4((e, t) => K4(e, t, m8, h8));
function qh() {
  const e = C.useRef(!1);
  return (
    hi(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function g8() {
  const e = qh(),
    [t, n] = C.useState(0),
    r = C.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [C.useCallback(() => z.postRender(r), [r]), t];
}
class x8 extends C.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function v8({ children: e, isPresent: t }) {
  const n = C.useId(),
    r = C.useRef(null),
    i = C.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    C.useInsertionEffect(() => {
      const { width: s, height: o, top: a, left: u } = i.current;
      if (t || !r.current || !s || !o) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    C.createElement(
      x8,
      { isPresent: t, childRef: r, sizeRef: i },
      C.cloneElement(e, { ref: r })
    )
  );
}
const tl = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
}) => {
  const a = xi(y8),
    u = C.useId(),
    c = C.useMemo(
      () => ({
        id: u,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (d) => {
          a.set(d, !0);
          for (const f of a.values()) if (!f) return;
          r && r();
        },
        register: (d) => (a.set(d, !1), () => a.delete(d)),
      }),
      s ? void 0 : [n]
    );
  return (
    C.useMemo(() => {
      a.forEach((d, f) => a.set(f, !1));
    }, [n]),
    C.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === "popLayout" && (e = C.createElement(v8, { isPresent: n }, e)),
    C.createElement(oo.Provider, { value: c }, e)
  );
};
function y8() {
  return new Map();
}
function w8(e) {
  return C.useEffect(() => () => e(), []);
}
const un = (e) => e.key || "";
function C8(e, t) {
  e.forEach((n) => {
    const r = un(n);
    t.set(r, n);
  });
}
function k8(e) {
  const t = [];
  return (
    C.Children.forEach(e, (n) => {
      C.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const j8 = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: i,
  presenceAffectsLayout: s = !0,
  mode: o = "sync",
}) => {
  const a = C.useContext(pu).forceRender || g8()[0],
    u = qh(),
    c = k8(e);
  let d = c;
  const f = C.useRef(new Map()).current,
    h = C.useRef(d),
    g = C.useRef(new Map()).current,
    v = C.useRef(!0);
  if (
    (hi(() => {
      (v.current = !1), C8(c, g), (h.current = d);
    }),
    w8(() => {
      (v.current = !0), g.clear(), f.clear();
    }),
    v.current)
  )
    return C.createElement(
      C.Fragment,
      null,
      d.map((p) =>
        C.createElement(
          tl,
          {
            key: un(p),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: s,
            mode: o,
          },
          p
        )
      )
    );
  d = [...d];
  const y = h.current.map(un),
    k = c.map(un),
    x = y.length;
  for (let p = 0; p < x; p++) {
    const m = y[p];
    k.indexOf(m) === -1 && !f.has(m) && f.set(m, void 0);
  }
  return (
    o === "wait" && f.size && (d = []),
    f.forEach((p, m) => {
      if (k.indexOf(m) !== -1) return;
      const w = g.get(m);
      if (!w) return;
      const j = y.indexOf(m);
      let L = p;
      if (!L) {
        const P = () => {
          f.delete(m);
          const S = Array.from(g.keys()).filter((A) => !k.includes(A));
          if (
            (S.forEach((A) => g.delete(A)),
            (h.current = c.filter((A) => {
              const _ = un(A);
              return _ === m || S.includes(_);
            })),
            !f.size)
          ) {
            if (u.current === !1) return;
            a(), r && r();
          }
        };
        (L = C.createElement(
          tl,
          {
            key: un(w),
            isPresent: !1,
            onExitComplete: P,
            custom: t,
            presenceAffectsLayout: s,
            mode: o,
          },
          w
        )),
          f.set(m, L);
      }
      d.splice(j, 0, L);
    }),
    (d = d.map((p) => {
      const m = p.key;
      return f.has(m)
        ? p
        : C.createElement(
            tl,
            { key: un(p), isPresent: !0, presenceAffectsLayout: s, mode: o },
            p
          );
    })),
    C.createElement(
      C.Fragment,
      null,
      f.size ? d : d.map((p) => C.cloneElement(p))
    )
  );
};
function S8(e) {
  const t = xi(() => nt(e)),
    { isStatic: n } = C.useContext(cu);
  if (n) {
    const [, r] = C.useState(e);
    C.useEffect(() => t.on("change", r), []);
  }
  return t;
}
const P8 = (e) => e && typeof e == "object" && e.mix,
  E8 = (e) => (P8(e) ? e.mix : void 0);
function N8(...e) {
  const t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    s = e[2 + n],
    o = e[3 + n],
    a = po(i, s, { mixer: E8(s[0]), ...o });
  return t ? a(r) : a;
}
function Vu(e, t) {
  const n = S8(t()),
    r = () => n.set(t());
  return (
    r(),
    hi(() => {
      const i = () => z.update(r, !1, !0),
        s = e.map((o) => o.on("change", i));
      return () => {
        s.forEach((o) => o()), ot(r);
      };
    }),
    n
  );
}
function L8(e) {
  (br.current = []), e();
  const t = Vu(br.current, e);
  return (br.current = void 0), t;
}
function T8(e, t, n, r) {
  if (typeof e == "function") return L8(e);
  const i = typeof t == "function" ? t : N8(t, n, r);
  return Array.isArray(e) ? n0(e, i) : n0([e], ([s]) => i(s));
}
function n0(e, t) {
  const n = xi(() => []);
  return Vu(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
function M8(e, ...t) {
  const n = e.length;
  function r() {
    let i = "";
    for (let s = 0; s < n; s++) {
      i += e[s];
      const o = t[s];
      o && (i += je(o) ? o.get() : o);
    }
    return i;
  }
  return Vu(t.filter(je), r);
}
function A8(e, t, n) {
  return (
    typeof e == "string"
      ? (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
const rs = new WeakMap();
let At;
function V8(e, t) {
  if (t) {
    const { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function _8({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = rs.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return V8(e, n);
        },
      });
    });
}
function R8(e) {
  e.forEach(_8);
}
function D8() {
  typeof ResizeObserver > "u" || (At = new ResizeObserver(R8));
}
function F8(e, t) {
  At || D8();
  const n = A8(e);
  return (
    n.forEach((r) => {
      let i = rs.get(r);
      i || ((i = new Set()), rs.set(r, i)),
        i.add(t),
        At == null || At.observe(r);
    }),
    () => {
      n.forEach((r) => {
        const i = rs.get(r);
        i == null || i.delete(t),
          (i != null && i.size) || At == null || At.unobserve(r);
      });
    }
  );
}
const is = new Set();
let zr;
function b8() {
  (zr = () => {
    const e = { width: window.innerWidth, height: window.innerHeight },
      t = { target: window, size: e, contentSize: e };
    is.forEach((n) => n(t));
  }),
    window.addEventListener("resize", zr);
}
function B8(e) {
  return (
    is.add(e),
    zr || b8(),
    () => {
      is.delete(e), !is.size && zr && (zr = void 0);
    }
  );
}
function O8(e, t) {
  return typeof e == "function" ? B8(e) : F8(e, t);
}
const I8 = 50,
  r0 = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  z8 = () => ({ time: 0, x: r0(), y: r0() }),
  U8 = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function i0(e, t, n, r) {
  const i = n[t],
    { length: s, position: o } = U8[t],
    a = i.current,
    u = n.time;
  (i.current = e["scroll" + o]),
    (i.scrollLength = e["scroll" + s] - e["client" + s]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = ir(0, i.scrollLength, i.current));
  const c = r - u;
  i.velocity = c > I8 ? 0 : Pu(i.current - a, c);
}
function H8(e, t, n) {
  i0(e, "x", t, n), i0(e, "y", t, n), (t.time = n);
}
function W8(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      const i = r.getBoundingClientRect();
      r = r.parentElement;
      const s = r.getBoundingClientRect();
      (n.x += i.left - s.left), (n.y += i.top - s.top);
    } else if (r instanceof SVGGraphicsElement) {
      const { x: i, y: s } = r.getBBox();
      (n.x += i), (n.y += s);
      let o = null,
        a = r.parentNode;
      for (; !o; ) a.tagName === "svg" && (o = a), (a = r.parentNode);
      r = o;
    } else break;
  return n;
}
const $8 = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  pa = { start: 0, center: 0.5, end: 1 };
function s0(e, t, n = 0) {
  let r = 0;
  if ((pa[e] !== void 0 && (e = pa[e]), typeof e == "string")) {
    const i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
      ? (e = i / 100)
      : e.endsWith("vw")
      ? (r = (i / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (i / 100) * document.documentElement.clientHeight)
      : (e = i);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
const G8 = [0, 0];
function Z8(e, t, n, r) {
  let i = Array.isArray(e) ? e : G8,
    s = 0,
    o = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, pa[e] ? e : "0"])),
    (s = s0(i[0], n, r)),
    (o = s0(i[1], t)),
    s - o
  );
}
const Y8 = { x: 0, y: 0 };
function K8(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function X8(e, t, n) {
  let { offset: r = $8.All } = n;
  const { target: i = e, axis: s = "y" } = n,
    o = s === "y" ? "height" : "width",
    a = i !== e ? W8(i, e) : Y8,
    u = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : K8(i),
    c = { width: e.clientWidth, height: e.clientHeight };
  t[s].offset.length = 0;
  let d = !t[s].interpolate;
  const f = r.length;
  for (let h = 0; h < f; h++) {
    const g = Z8(r[h], c[o], u[o], a[s]);
    !d && g !== t[s].interpolatorOffsets[h] && (d = !0), (t[s].offset[h] = g);
  }
  d &&
    ((t[s].interpolate = po(t[s].offset, Sh(r))),
    (t[s].interpolatorOffsets = [...t[s].offset])),
    (t[s].progress = t[s].interpolate(t[s].current));
}
function Q8(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function q8(e, t, n, r = {}) {
  return {
    measure: () => Q8(e, r.target, n),
    update: (i) => {
      H8(e, n, i), (r.offset || r.target) && X8(e, n, r);
    },
    notify: () => t(n),
  };
}
const wr = new WeakMap(),
  o0 = new WeakMap(),
  nl = new WeakMap(),
  l0 = (e) => (e === document.documentElement ? window : e);
function J8(e, { container: t = document.documentElement, ...n } = {}) {
  let r = nl.get(t);
  r || ((r = new Set()), nl.set(t, r));
  const i = z8(),
    s = q8(t, e, i, n);
  if ((r.add(s), !wr.has(t))) {
    const a = () => {
        for (const h of r) h.measure();
      },
      u = () => {
        for (const h of r) h.update(me.timestamp);
      },
      c = () => {
        for (const h of r) h.notify();
      },
      d = () => {
        z.read(a, !1, !0), z.read(u, !1, !0), z.update(c, !1, !0);
      };
    wr.set(t, d);
    const f = l0(t);
    window.addEventListener("resize", d, { passive: !0 }),
      t !== document.documentElement && o0.set(t, O8(t, d)),
      f.addEventListener("scroll", d, { passive: !0 });
  }
  const o = wr.get(t);
  return (
    z.read(o, !1, !0),
    () => {
      var a;
      ot(o);
      const u = nl.get(t);
      if (!u || (u.delete(s), u.size)) return;
      const c = wr.get(t);
      wr.delete(t),
        c &&
          (l0(t).removeEventListener("scroll", c),
          (a = o0.get(t)) === null || a === void 0 || a(),
          window.removeEventListener("resize", c));
    }
  );
}
function a0(e, t) {
  d5(!!(!t || t.current));
}
const ex = () => ({
  scrollX: nt(0),
  scrollY: nt(0),
  scrollXProgress: nt(0),
  scrollYProgress: nt(0),
});
function tx({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  const i = xi(ex);
  return (
    (n ? hi : C.useEffect)(
      () => (
        a0("target", t),
        a0("container", e),
        J8(
          ({ x: o, y: a }) => {
            i.scrollX.set(o.current),
              i.scrollXProgress.set(o.progress),
              i.scrollY.set(a.current),
              i.scrollYProgress.set(a.progress);
          },
          {
            ...r,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    i
  );
}
const u0 = [
    {
      id: 0,
      content: l.jsx("div", {
        className: "mx-auto max-w-7xl pt-14 px-4",
        children: l.jsxs("div", {
          className: "text-center mx-auto max-w-[926px] pt-6",
          children: [
            l.jsxs("span", {
              className:
                "inline-flex gap-x-3 uppercase py-1 px-6 text-[20px] text-[#E8E288] font-semibold bg-[#18191C] rounded-full border border-[#FFFFFF]/[.1]",
              children: [
                l.jsx("span", { children: "✦" }),
                " Powered by AI ",
                l.jsx("span", { children: "✦" }),
              ],
            }),
            l.jsx("h1", {
              className: "text-white text-3xl md:text-7xl pt-10",
              children: "Unmarshal's Decentralised Indexer Network",
            }),
            l.jsx("p", {
              className:
                "text-[#FAFAFA]/[.7] text-lg pt-8 max-w-[630px] mx-auto font-medium",
              children:
                "Transitioning to a first of a kind Community-Owned AVS-Based Hybrid Blockchain.",
            }),            
          ],
        }),
      }),
    },
  ],
  nx = () => {
    const [e, t] = C.useState(0),
      [n, r] = C.useState(!0);
    return (
      C.useEffect(() => {
        let i;
        return (
          n &&
            (i = setInterval(() => {
              t((s) => (s === u0.length - 1 ? 0 : s + 1));
            }, 5e3)),
          () => clearInterval(i)
        );
      }, [n]),
      l.jsxs("div", {
        className: "slider",
        children: [
          l.jsx("div", {
            className: "slides-container",
            children: l.jsx(j8, {
              children: u0.map(
                (i, s) =>
                  s === e &&
                  l.jsx(
                    Ir.div,
                    {
                      className: `slide ${s === e ? "active" : ""}`,
                      initial: { opacity: 0 },
                      animate: {
                        opacity: 1,
                        transition: { duration: 3, ease: "easeInOut" },
                      },
                      exit: { opacity: 0 },
                      children: i.content,
                    },
                    i.id
                  )
              ),
            }),
          }),
          l.jsx("div", { className: "flex justify-center" }),
        ],
      })
    );
  },
  rx = ({ isOpen: e, toggleMenu: t }) =>
    l.jsxs("div", {
      className: `fixed inset-0 bg-black bg-opacity-95 z-50 transform transition-transform duration-300 ${
        e ? "translate-x-0" : "translate-x-full"
      }`,
      children: [
        l.jsx("button", {
          onClick: t,
          className:
            "absolute top-4 right-4 text-3xl text-white focus:outline-none",
          children: "×",
        }),
        l.jsxs("div", {
          className:
            "flex flex-col items-center justify-center h-full space-y-8",
          children: [            
            l.jsx("a", {
              href: "#product-suit",              
              onClick: t,
              className: "text-2xl text-white",
              children: "Products",
            }),            
            l.jsx("a", {
              href: "/about/",
              onClick: t,
              className: "text-2xl text-white",
              children: "Company",
            }),
            l.jsx("a", {
              href: "https://mighty-2.gitbook.io/unmarshal",
              target: "_blank",
              onClick: t,
              className: "text-2xl text-white",
              children: "Whitepaper",
            }),
            l.jsx("a", {
              href: "https://app-unmarshal.vercel.app/",
              target: "_blank",
              onClick: t,
              className: "text-2xl text-white",
              children: "Explorer",
            }),
          ],
        }),
      ],
    });
function ix() {
  const [e, t] = ai.useState(!1);
  return l.jsx(l.Fragment, {
    children: l.jsxs("section", {
      className: "bg-gradient-to-b from-[#18191C] to-[#0D0E10] video-sec",
      children: [
        l.jsx("div", {
          className: "hero-video",
          children: l.jsx("video", {
            className: "h-full",
            autoPlay: !0,
            loop: !0,
            muted: !0,
            children: l.jsx("source", { src: l4, type: "video/mp4" }),
          }),
        }),
        l.jsxs("div", {
          className: "py-2 bg-[#000] text-center",
          children: [
          ],
        }),
        l.jsxs("header", {
          children: [
            l.jsxs("nav", {
              className:
                "mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 ",
              "aria-label": "Global",
              children: [
                l.jsx("div", {
                  className: "flex lg:flex-1",
                  children: l.jsxs("a", {
                    href: "#",
                    className: "-m-1.5 p-1.5",
                    children: [
                      l.jsx("span", {
                        className: "sr-only",
                        children: "Your Company",
                      }),
                      l.jsx("img", {
                        className: "mr-6 h-8 md:h-auto w-auto",
                        src: Vf,
                        alt: "",
                      }),
                    ],
                  }),
                }),
                l.jsx("div", {
                  className: "flex lg:hidden",
                  children: l.jsxs("button", {
                    type: "button",
                    className:
                      "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
                    onClick: () => {
                      t(!e);
                    },
                    children: [
                      l.jsx("span", {
                        className: "sr-only",
                        children: "Open main menu",
                      }),
                      l.jsxs("svg", {
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          l.jsxs("g", {
                            "clip-path": "url(#clip0_6_100)",
                            children: [
                              l.jsx("path", {
                                d: "M5 16H27",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M5 8H27",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                              l.jsx("path", {
                                d: "M5 24H27",
                                stroke: "white",
                                strokeWidth: "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                            ],
                          }),
                          l.jsx("defs", {
                            children: l.jsx("clipPath", {
                              id: "clip0_6_100",
                              children: l.jsx("rect", {
                                width: "32",
                                height: "32",
                                fill: "white",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                l.jsxs("div", {
                  className:
                    "hidden lg:flex lg:gap-x-6 text bg-white/[.04] h-11 rounded-full px-8 border border-white/[.1] items-center",
                  children: [                    
                    l.jsx("a", {
                      href: "#product-suit",           
                      className:
                        "transition duration-150 ease-out text-base font-medium leading-6 text-white hover:text-[#00EC97]",
                      children: "Products",
                    }),                         
                    l.jsx("a", {
                      href: "/about/",
                      className:
                        "transition duration-150 ease-out text-base font-medium leading-6 text-white hover:text-[#00EC97]",
                      children: "Company",
                    }),
                    l.jsx("a", {
                      href: "https://mighty-2.gitbook.io/unmarshal",
                      target: "_blank",
                      className:
                        "transition duration-150 ease-out text-base font-medium leading-6 text-white hover:text-[#00EC97]",
                      children: "Whitepaper",
                    }),
                  ],
                }),
                l.jsx("div", {
                  className: "hidden lg:flex lg:flex-1 lg:justify-end",
                  children: l.jsxs("a", {
                    href: "https://app-unmarshal.vercel.app/",
                    target: "_blank",
                    className: "btn-signin px-7 flex gap-2",
                    children: [
                      "Explorer",
                      l.jsx("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: l.jsxs("g", {
                          children: [
                            l.jsx("path", {
                              d: "M2.5 8H13.5",
                              stroke: "#0D0E10",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            }),
                            l.jsx("path", {
                              d: "M9 3.5L13.5 8L9 12.5",
                              stroke: "#0D0E10",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            l.jsx(rx, {
              isOpen: e,
              toggleMenu: () => {
                t(!e);
              },
            }),
            l.jsx(nx, {}),
          ],
        }),
        l.jsx("div", {
          className: "mx-auto max-w-7xl",
          "data-aos": "fade-up",
          "data-aos-duration": "1500",
          children: l.jsxs("div", {
            className: "pt-36 supported-chain pb-16",
            children: [],
          }),
        }),
      ],
    }),
  });
}
const sx = ({ children: e }) => {
    const t = C.useRef(),
      { scrollYProgress: n } = tx({
        target: t,
        offset: ["start end", "end center"],
      }),
      r = T8(n, [0, 1], ["100%", "0%"]),
      i = M8`inset(0% ${r} 0% 0%)`;
    return l.jsxs("span", {
      className: "text-container",
      ref: t,
      children: [
        l.jsx(Ir.span, {
          style: { clipPath: i },
          className: "highlighted-text",
          children: e,
        }),
        l.jsx("span", { className: "static-text", children: e }),
      ],
    });
  },
  ox = ({ content: e }) =>
    l.jsx(l.Fragment, {
      children: e.map((t, n) => l.jsx(sx, { children: t }, n)),
    }),
  lx = "/assets/blockchain-1-BUJQBHWW.svg",
  ax =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA4CAYAAAChbZtkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXjSURBVHgB1ZtfaFt1FMfP7yY2cWu7CLYm22C3IBI71HS4WpTBxRcHylZfuuJLiw92e7Lvq+wO9U1hPkkLwvoyRB8cdsoQGcF/DbW4gFOi4BJha+NW6W0tNWmT/PY7N7vp7f2T3r/5833J7c296f3knN/5nd85vxDwWdmsGA5LECVFGi0HSZRQiHJAwxRIRH0dAZAoBxKpQAHKkKMhyMcGxBx4LAI+CCE7/gWeq8BQBRgggTA4UIVCIUAgx1Ga6R28mAYP5CmwbM0VBklhyCmkmSh6AIPfF4DkYwOiBA7lCbCfoCZKhoOQdgLuGnhlUYwXKzDcINCa0OJBSpN2Xd0xMFo1dB8EQmAImihKIbW1CUleEAtWrncEvHpTjPxfglF2cxRaQGjtR4Nw2YqL2wauwtJxoplWmi2r0LaAWxVWkRVoy8CtDqtoL2jOyodggGoHWBSzoBxfcknRcNawBCxH4zaAVYTBtGMfCEbv7Ql8b0FMNHvqcSJ8ZswRtOfrAuO4LREqQJtqi8JJrWvXBS6UINFOrqwVjufQ/t3eaQqM1mUvArS50LXVVg6aXbhZBsFSRHOou/fXw98v/G0rU8M59Myrz+Ts3MNSz/BDKyeVzzDU0s8XJv105xden3l7baNg+/MPdIWlq9Oj07Gebku5M4pZuVDYgEuYbxsaUY7MPsJ+9tWvvBNY1Np/hch3Nj0DrdzZCTweGwJvE4iDjzoxeCTf3RlyvIh3om1C5eBlPIYp+zZ8Kf5Uhe648MXER2hpMP7/kL2zGrkyd+uV4lbJk3U2oSSKwUsHvDwvImxDFvMjhgGIwi+/LUc+/GT+tFew8qdi8DqABUSNyh20iWvcKuy5qWtjTsd4PbGKqB6YVAgPTZExbHdXSHpz5NhV8EBlagDc6NpUVeaw0++dmj0S614DD0SMgAmlDU4lzWFnGOxAf9SzaI4NAE7/7xuZO9eHTfTHPJ26kM119njz9+XI8MSVM29Mfn4aj+3c20hYRa6AEfDs+bmxzO2VOHv4xNmpuTGr0Hhdo2FRDoHRFZdkWPUDY9qH0PienD2Y3Kt8UY2GRemDFiuC1b+l/lyJ0OfeuTaG1+ihq/c2C5YAlXTArNtXZxViHmTUubExtPMAdWKQr+XeeL3dJWLt6bEdqz35z6I4zJpiCbABiw+Mx2+d/3JsfaNYew+Xch+/+9rssaMxyX2AomyVdYt/iS08DtlYGqpFApAJaE9OTggRjsKTYAMWHzja01U4/uyhP7754a94cassJy+YC3/74+14V2coP/XBjVF3bkzg6FNPSN37QyVwKLYuXtRZWF48BGEcbMCq70+zgKS1tFZKBjXg85jViRXodWO4WIQ8dt6rf9kfd3hu5v1Ts2br3WbBYtUDt1DogOUySADyboKMGfROuthgy6I4yFVfDFQp0JTbIKOFbtTUY6ZSiWbwVTeGBUGA4vrS03fvbfzk1VyJlQ030dWtKJt/Dx6/eAmPd1U8EDadTvdR4L5mf3qWGIw4nDe9EiUkpxzvcumHsDfYIa+ca7YreqGtQLUmjaoB8zwPBrCr7Q7LlOxT9YprwCuSJIAKljlC9vDhrhef64/loE2FzfFCENLqczVgNpjTCFm9jmZZov3y/PyfGdiG69CmqlC6y7ooXZSORCICe0lLTMq5pQXxZLv1iAMUUr2Dos5Yuro040xqz+E+qI79wLfKNqW9hK682bsTqNSyVADA7KsYhE/pnmvl5gufkT3rZZ433qhmq6GSZT1jtlYZJ6o5upWkwPZ5sW1JUatCW4FFOWqZtRo0g83jkOvzY+uhIuzE4dagZkdvjMYYoMzGrFaum6J3Fi4kOEKERltbDqAErh98XszYuc+bDeLMxcMluQ4mgM/C4gTrf6WKPZCyalW1vP0JAAPvKDM3p5T3esuEW1BFvvX50dWDhMRZi5J38yMPlijkH+EgtfE45NyAKvJxY8OOsDBYJhANBoCnHA2zxnTE6Gc8WBOnBPK0BHkWjPLFGOS9gFTrAbzTawumtrfQAAAAAElFTkSuQmCC",
  ux =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAtCAYAAAD2g9hxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYmSURBVHgB3VpNaBNbFD5J0xpLF6V2kUXFLLSIoPZtNLh504JQf6AVFd6m2C6UV4q03QiuTFbluUmLVNtV8xShC8UIVRGkydtIXL1YNw8tvHngTxUtfSgx1p94vpvc6TiZNJnJpGn9IJ0708nNfPec851z7x0XlYmLFzO+hgbyc9OHz7dv5HW5qJGcRZo/C5kMpd1uUj98IPXcOdcClQEX2cDUVKaRf7yNHyLAp16qAnhwl/igbt5M8b4+1xJZhCXiIJxKUTc3/bSOwIOQtDoAJRFnwl62cIAtrNA6BodZ/OxZV7yUe4sSh5U/fqReji+n47YiQAiw9SPFrL8q8UuXMjvZynDtqsRxGUiz9aNs/X8K3VCQ+Ph4po0P3bSxER0YcCXN/uE2uwhL08YnDXRfuZLxm/0jjzhiOufePwXY5X8DJ+P1PFe/fDkzVC0hS6WW6NGjCM3P/0XPn2c9tKnJT3v2dNHu3d3U3OwnO4DgvXlDE8GgK61d09/ALq5UK2XFYqM0MxOidLqwGB89GqRDhy6QHRhTnUY8V5wMURVw/XofPXwYKenelpY2GhyMUX29daesr6dRmeY88iLnaoWqACNpEAsETgnXhvVfvEjS7OyY5vo43rsXouPHw2QVuaozgraweLWsDfe+cWNYO+/oGCpI6M6dEN29G9TOh4ZitGOHQlYhrS5UvVrWTqX+19qHDwdXteKRIxdY5FaSTSLxJ9kBJlc4Slf3U4UBxcYHkOrc3j4o3LmpaRu3iztcR8cgzc1FRTt7nCKryM0o4x52cx+7ecXSF9x5bu42PX0a1655vY3U1tYtYtlKrMK18V0MFgbx7VvVTorzYg3Bw27upwoADzU21k6Li2re//DgiUREfFaLazNAzVdLeaXA6yW/m5O7nxwGlHdk5Jc80ihGjGlodnZUDFApwGDq+7Rb0Hg85PNgqYgcBEiHw+2aVUBUUYZEPEvSuCcWGxMWBxAGN28OF7X8kydRrb19u0J28fUr+aDqPnIIRtKwyPnzfwtFRkxeu9YnHh65uqdnSii5BCwvxc8MsDYqO4kDB06RXdTUkBfEHbG4GWlUWHBvYHLymLDwxMQxjSAGpLVV0fqAF5hB6oW+7/37e8kuMBdxkwMoRhrQC5LesooyqLXn5+N5fRtFEuGCvstF2cTxYMVIy+sSr16trA1s3dr2Q1/Gvs1IG/u2AzebvazcYHTBQg+mFyPU3hLIyxINDSvtQqShDw6A1+fdlCabwNy5VGtA1SWg4phoyO+dOXOL9u3rpdOnb4lrFSYNLNR0dgZbOJfbUnakoHfvVNHu6hqhXbs6C95bW+sVtbmqJsQ5yC8u/kdbtviFwKGSY++jBw/+oKtX++j9++xGSQVI43cWPCzt2JqxBX0Zundv8dWqkyfD9PJlUvuerN7g7nBzY4xXgjTAtYvq5jVolWxAX0HBvUsVHBBBQaMHNMJIWtYATpPO/h4T57kpfMp2nGc7sqaPsDzm04FAb14JCxE8cSJModC/jqi3ERBzbDiKaSmbPmF1rQ0PpZ8pPXsWL2lhALM1xDbWznp6cP+UZm27tbcVYLdVHPHnyxdKkg1AkCTi8bGi90PJseKC8lRfpYHwWpAGPn2iOI6C+PCwWIBTySIwn5ZIJqNaijIDMsDMTFA7b27eRmsN7KrmuFKNvHjwYFBlhQ9Y6EekImOKwqJDXV22/F9eTotcPz3dT48fr8ysENv6CcpaYXmZpu/fDwk9K3tdHfGNYkOughYDSGNmttZgXvH+/pV19R9q9YYGSlgtYaHKSDvFLIj7oNbVIA1OetJA3hZSOJxprKuj38nGdBW5HS6dTN7W8jzycGvrr2IaaWcTwAGk2cUnZGxLmG4TY4eRU1wv/QRgHtNm++Sm01J2C5UPUdrgqK0t/HLAqm9ETE5mdnKO35BvRLCYTecMaIqi78Ag5nnkeivw7lpFACH7/Jkixpg2ouTXvTjuFY4XhdYxkLJev6aEfh+8ECy95wbrb9pECo+q81Om8qCyckeLWVkPW282ygFgD/BXMQQQxwmeYiatEJawRVyP8fGMD7sx+OQ2J7Ca46gYIm5zS2SYQmPhRB0YKO9d1u8aSfkjLELpxQAAAABJRU5ErkJggg==";
function cx() {
  const e = [
    l.jsxs(l.Fragment, {
      children: [
        l.jsx("span", { children: "Unmarshal is " }),
        " ",
        l.jsx("span", {
          className: "inline-block h-8 md:h-12",
          children: l.jsx("img", { className: "h-8 md:h-12", src: lx }),
        }),
        " revolutionizing the intersection of blockchain and artificial intelligence, ushering in a new era of  blockchain data indexing.  ",
        l.jsxs("span", {
          className: "inline-block h-8 md:h-12",
          children: [" ", l.jsx("img", { className: "h-8 md:h-12", src: ax })],
        }),
        " Our mission is to seamlessly integrate ",
        l.jsxs("span", {
          className: "inline-block h-8 md:h-10",
          children: [" ", l.jsx("img", { className: "h-8 md:h-12", src: ux })],
        }),
        " these key technologies to unlock new possibilities and drive innovations in web3.",
      ],
    }),
  ];
  return l.jsx(l.Fragment, {
    children: l.jsx("section", {
      className: "bg-gradient-to-b from-[#141517] to-[#0D0E10] py-32",
      "data-aos": "fade-up",
      "data-aos-duration": "1500",
      children: l.jsxs("div", {
        className: "mx-auto max-w-7xl text-center px-4",
        children: [
          l.jsx("span", {
            className:
              "inline-flex px-3 py-1 bg-white/[.1] uppercase text-white/[.8] text-xs rounded-full font-semibold mb-6 ",
            "data-aos": "fade-up",
            "data-aos-duration": "1500",
            children: "Unmarshal 2.0",
          }),
          l.jsxs("div", {
            className:
              "supported-chain-h max-w-[1200px] mx-auto items-center text-[#fff]/[.7]",
            "data-aos": "fade-up",
            "data-aos-duration": "1500",
            children: [
              l.jsx("div", { className: "left-img" }),
              l.jsx("div", {
                className: "w-[280px] text-xl text-white normal-case",
                children: "Blockchain and AI Integration",
              }),
              l.jsx("div", { className: "right-img" }),
            ],
          }),
          l.jsx("div", {
            className:
              "text-3xl md:text-5xl text-white/[.5] pt-16 leading-normal",
            "data-aos": "fade-up",
            "data-aos-duration": "1500",
            children: l.jsx(ox, { content: e }),
          }),
          l.jsxs("a", {
            href: "https://blog.unmarshal.io/unmarshals-3rd-year-triumph-leading-the-way-in-blockchain-and-ai-integration-d69e41d4fb3d",
            target: "_blank",
            className:
              "inline-flex font-semibold gap-4 text-white items-center mx-auto uppercase pt-16 group hover:text-[#00EC97] link-btn",
            "data-aos": "fade-up",
            "data-aos-duration": "1500",
          children: [],
          }),
        ],
      }),
    }),
  });
}
const dx = "/assets/aiintegration-_Xu2s2p3.png",
  fx = "/assets/our-ecosystem-u0rZfTdl.png",
  hx = "/assets/our-ecosystem-2-BkMZDLIP.png";
var Jh = C.forwardRef(({ transition: e, ...t }, n) => {
  let r = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transition: e ? `clip-path ${e}` : void 0,
    userSelect: "none",
    willChange: "clip-path, transition",
    KhtmlUserSelect: "none",
    MozUserSelect: "none",
    WebkitUserSelect: "none",
  };
  return l.jsx("div", { ...t, style: r, "data-rcs": "clip-item", ref: n });
});
Jh.displayName = "ContainerClip";
var e1 = C.forwardRef(
  (
    { children: e, disabled: t, portrait: n, position: r, transition: i },
    s
  ) => {
    let o = {
      position: "absolute",
      top: 0,
      width: n ? "100%" : void 0,
      height: n ? void 0 : "100%",
      background: "none",
      border: 0,
      padding: 0,
      pointerEvents: "all",
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      outline: 0,
      transform: n ? "translate3d(0, -50% ,0)" : "translate3d(-50%, 0, 0)",
      transition: i ? `${n ? "top" : "left"} ${i}` : void 0,
    };
    return l.jsx("button", {
      ref: s,
      "aria-label": "Drag to move or focus and use arrow keys",
      "aria-orientation": n ? "vertical" : "horizontal",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": r,
      "data-rcs": "handle-container",
      disabled: t,
      role: "slider",
      style: o,
      children: e,
    });
  }
);
e1.displayName = "ThisHandleContainer";
var c0 = ({ flip: e }) =>
    l.jsx("div", {
      className: "__rcs-handle-arrow",
      style: {
        width: 0,
        height: 0,
        borderTop: "8px solid transparent",
        borderRight: "10px solid",
        borderBottom: "8px solid transparent",
        transform: e ? "rotate(180deg)" : void 0,
      },
    }),
  px = ({
    className: e = "__rcs-handle-root",
    disabled: t,
    buttonStyle: n,
    linesStyle: r,
    portrait: i,
    style: s,
    ...o
  }) => {
    let a = {
        display: "flex",
        flexDirection: i ? "row" : "column",
        placeItems: "center",
        height: "100%",
        cursor: t ? "not-allowed" : i ? "ns-resize" : "ew-resize",
        pointerEvents: "none",
        color: "#fff",
        ...s,
      },
      u = {
        flexGrow: 1,
        height: i ? 2 : "100%",
        width: i ? "100%" : 2,
        backgroundColor: "currentColor",
        pointerEvents: "auto",
        boxShadow: "0 0 4px rgba(0,0,0,.5)",
        ...r,
      },
      c = {
        display: "grid",
        gridAutoFlow: "column",
        gap: 8,
        placeContent: "center",
        flexShrink: 0,
        width: 56,
        height: 56,
        borderRadius: "50%",
        borderStyle: "solid",
        borderWidth: 2,
        pointerEvents: "auto",
        backdropFilter: "blur(7px)",
        WebkitBackdropFilter: "blur(7px)",
        backgroundColor: "rgba(0, 0, 0, 0.125)",
        boxShadow: "0 0 4px rgba(0,0,0,.35)",
        transform: i ? "rotate(90deg)" : void 0,
        ...n,
      };
    return l.jsxs("div", {
      ...o,
      className: e,
      style: a,
      children: [
        l.jsx("div", { className: "__rcs-handle-line", style: u }),
        l.jsxs("div", {
          className: "__rcs-handle-button",
          style: c,
          children: [l.jsx(c0, {}), l.jsx(c0, { flip: !0 })],
        }),
        l.jsx("div", { className: "__rcs-handle-line", style: u }),
      ],
    });
  },
  t1 = ((e) => (
    (e.ARROW_LEFT = "ArrowLeft"),
    (e.ARROW_RIGHT = "ArrowRight"),
    (e.ARROW_UP = "ArrowUp"),
    (e.ARROW_DOWN = "ArrowDown"),
    e
  ))(t1 || {}),
  mx = ({
    boxSizing: e = "border-box",
    objectFit: t = "cover",
    objectPosition: n = "center center",
    ...r
  } = {}) => ({
    display: "block",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    boxSizing: e,
    objectFit: t,
    objectPosition: n,
    ...r,
  }),
  gx = (e) => {
    let t = C.useRef(e);
    return (
      C.useEffect(() => {
        t.current = e;
      }),
      t.current
    );
  },
  rl = (e, t, n, r) => {
    let i = C.useRef();
    C.useEffect(() => {
      i.current = t;
    }, [t]),
      C.useEffect(() => {
        if (!(n && n.addEventListener)) return;
        let s = (o) => i.current && i.current(o);
        return (
          n.addEventListener(e, s, r),
          () => {
            n.removeEventListener(e, s, r);
          }
        );
      }, [e, n, r]);
  },
  xx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? C.useLayoutEffect
      : C.useEffect,
  vx = (e, t) => {
    let n = C.useRef(),
      r = C.useCallback(() => {
        e.current && n.current && n.current.observe(e.current);
      }, [e]);
    xx(
      () => (
        (n.current = new ResizeObserver(([i]) => t(i.contentRect))),
        r(),
        () => {
          n.current && n.current.disconnect();
        }
      ),
      [t, r]
    );
  },
  zi = { capture: !1, passive: !0 },
  il = { capture: !0, passive: !1 },
  yx = (e) => {
    e.preventDefault(), e.currentTarget.focus();
  },
  n1 = C.forwardRef(
    (
      {
        boundsPadding: e = 0,
        browsingContext: t = globalThis,
        changePositionOnHover: n = !1,
        disabled: r = !1,
        handle: i,
        itemOne: s,
        itemTwo: o,
        keyboardIncrement: a = "5%",
        onlyHandleDraggable: u = !1,
        onPositionChange: c,
        portrait: d = !1,
        position: f = 50,
        style: h,
        transition: g,
        ...v
      },
      y
    ) => {
      let k = C.useRef(null),
        x = C.useRef(null),
        p = C.useRef(null),
        m = C.useRef(f),
        [w, j] = C.useState(!1),
        [L, P] = C.useState(!0),
        S = C.useRef(!1),
        [A, _] = C.useState(),
        X = gx(f),
        b = C.useCallback(
          function ({ x: N, y: F, isOffset: H }) {
            let W = k.current,
              He = p.current,
              ce = x.current,
              {
                width: Te,
                height: ht,
                left: ur,
                top: En,
              } = W.getBoundingClientRect();
            if (Te === 0 || ht === 0) return;
            let pt = d
                ? H
                  ? F - En - t.scrollY
                  : F
                : H
                ? N - ur - t.scrollX
                : N,
              mo = Math.min(Math.max((pt / (d ? ht : Te)) * 100, 0), 100),
              go = d ? ht / (W.offsetHeight || 1) : Te / (W.offsetWidth || 1),
              _u = ((e * go) / (d ? ht : Te)) * 100,
              yi = Math.min(Math.max(mo, _u * go), 100 - _u * go);
            (m.current = mo),
              He.setAttribute("aria-valuenow", `${Math.round(m.current)}`),
              (He.style.top = d ? `${yi}%` : "0"),
              (He.style.left = d ? "0" : `${yi}%`),
              (ce.style.clipPath = d
                ? `inset(${yi}% 0 0 0)`
                : `inset(0 0 0 ${yi}%)`),
              c && c(m.current);
          },
          [e, c, d, t]
        );
      C.useEffect(() => {
        let { width: N, height: F } = k.current.getBoundingClientRect(),
          H = f === X ? m.current : f;
        b({ x: (N / 100) * H, y: (F / 100) * H });
      }, [e, f, d, X, b]);
      let Q = C.useCallback(
          (N) => {
            N.preventDefault(),
              !(r || N.button !== 0) &&
                (b({ isOffset: !0, x: N.pageX, y: N.pageY }), j(!0), P(!0));
          },
          [r, b]
        ),
        I = C.useCallback(
          function (N) {
            b({ isOffset: !0, x: N.pageX, y: N.pageY }), P(!1);
          },
          [b]
        ),
        he = C.useCallback(() => {
          j(!1), P(!0);
        }, []),
        G = C.useCallback(
          ({ width: N, height: F }) => {
            let { width: H, height: W } = k.current.getBoundingClientRect();
            b({
              x: ((N / 100) * m.current * H) / N,
              y: ((F / 100) * m.current * W) / F,
            });
          },
          [b]
        ),
        ve = C.useCallback(
          (N) => {
            if (!Object.values(t1).includes(N.key)) return;
            N.preventDefault(), P(!0);
            let { top: F, left: H } = p.current.getBoundingClientRect(),
              { width: W, height: He } = k.current.getBoundingClientRect(),
              ce = typeof a == "string" ? parseFloat(a) : (a / W) * 100,
              Te = d
                ? N.key === "ArrowLeft" || N.key === "ArrowDown"
                : N.key === "ArrowRight" || N.key === "ArrowUp",
              ht = Math.min(
                Math.max(Te ? m.current + ce : m.current - ce, 0),
                100
              );
            b({ x: d ? H : (W * ht) / 100, y: d ? (He * ht) / 100 : F });
          },
          [a, d, b]
        );
      C.useEffect(() => {
        _(u ? p.current : k.current);
      }, [u]),
        C.useEffect(() => {
          let N = k.current,
            F = () => {
              w || he();
            };
          return (
            n &&
              (N.addEventListener("pointermove", I, zi),
              N.addEventListener("pointerleave", F, zi)),
            () => {
              N.removeEventListener("pointermove", I),
                N.removeEventListener("pointerleave", F);
            }
          );
        }, [n, I, he, w]),
        C.useEffect(
          () => (
            w &&
              !S.current &&
              (t.addEventListener("pointermove", I, zi),
              t.addEventListener("pointerup", he, zi),
              (S.current = !0)),
            () => {
              S.current &&
                (t.removeEventListener("pointermove", I),
                t.removeEventListener("pointerup", he),
                (S.current = !1));
            }
          ),
          [I, he, w, t]
        ),
        C.useImperativeHandle(
          y,
          () => ({
            rootContainer: k.current,
            handleContainer: p.current,
            setPosition(N) {
              let { width: F, height: H } = k.current.getBoundingClientRect();
              b({ x: (F / 100) * N, y: (H / 100) * N });
            },
          }),
          [b]
        ),
        vx(k, G),
        rl("keydown", ve, p.current, il),
        rl("click", yx, p.current, il),
        rl("pointerdown", Q, A, il);
      let T = i || l.jsx(px, { disabled: r, portrait: d }),
        V = L ? g : void 0,
        D = {
          position: "relative",
          display: "flex",
          overflow: "hidden",
          cursor: w ? (d ? "ns-resize" : "ew-resize") : void 0,
          touchAction: "none",
          userSelect: "none",
          KhtmlUserSelect: "none",
          msUserSelect: "none",
          MozUserSelect: "none",
          WebkitUserSelect: "none",
          ...h,
        };
      return l.jsxs("div", {
        ...v,
        ref: k,
        style: D,
        "data-rcs": "root",
        children: [
          s,
          l.jsx(Jh, { ref: x, transition: V, children: o }),
          l.jsx(e1, {
            disabled: r,
            portrait: d,
            position: Math.round(m.current),
            ref: p,
            transition: V,
            children: T,
          }),
        ],
      });
    }
  );
n1.displayName = "ReactCompareSlider";
var wx = C.forwardRef(({ style: e, ...t }, n) => {
  let r = mx(e);
  return l.jsx("img", { ref: n, ...t, style: r, "data-rcs": "image" });
});
wx.displayName = "ReactCompareSliderImage";
function Cx() {
  return l.jsx("h1", { children: "Hello" });
}
function kx() {
  return l.jsx(l.Fragment, {
    children: l.jsx(n1, {
      CustomHandle: l.jsx(Cx, {}),
      itemOne: l.jsx("div", {
        className: "bg-[#17181A]/[.24] py-14 md:py-28 relative w-full",
        children: l.jsxs("div", {
          className: "mx-auto max-w-7xl px-4",
          children: [
            l.jsxs("div", {
              className: "text-center",
              children: [
                l.jsx("span", {
                  className:
                    "inline-flex px-3 py-1 bg-white/[.1] uppercase text-white/[.8] text-xs rounded-full font-semibold mb-6 ",
                  children: "Unmarshal Tech",
                }),
                l.jsx("h2", {
                  className:
                    "text-5xl md:text-[56px] mx-auto text-white max-w-[840px] leading-tight",
                  children: "What we do in backend",
                }),
              ],
            }),
            l.jsx("div", {
              className: "compare-img mt-8",
              children: l.jsx("img", { src: fx, className: "w-full" }),
            }),
          ],
        }),
      }),
      itemTwo: l.jsx("div", {
        className: "bg-[#0F1012] py-14 md:py-28 relative w-full",
        children: l.jsxs("div", {
          className: "mx-auto max-w-7xl px-4",
          children: [
            l.jsxs("div", {
              className: "text-center",
              children: [
                l.jsx("span", {
                  "data-aos": "fade-up",
                  "data-aos-duration": "1500",
                  className:
                    "inline-flex px-3 py-1 bg-white/[.1] uppercase text-white/[.8] text-xs rounded-full font-semibold mb-6 ",
                  children: "Unmarshal Tech",
                }),
                l.jsx("h2", {
                  "data-aos": "fade-up",
                  "data-aos-duration": "1500",
                  className:
                    "text-5xl md:text-[56px] mx-auto text-white max-w-[840px] leading-tight",
                  children: "Get the refined blockchain data",
                }),
              ],
            }),
            l.jsx("div", {
              className: "compare-img mt-8",
              children: l.jsx("img", { src: hx, className: "w-full" }),
            }),
          ],
        }),
      }),
    }),
  });
}
const jx = "/assets/deointoolkit-C0qURnvg.png",
  Sx = "/assets/layerchains-CTBBGNGQ.png";
function Px() {
  const e = [
      {
        title: "Decentralized Unmarshal Indexers",
        body: "Experience the power of the Unmarshal Network, where blockchain indexing meets decentralization.",
        image: dx,
      },
      {
        title: "Unmarshal and Depin Toolkit",
        body: "Explore our custom GPTs leading the charge in blockchain data indexing.",
        image: Sx,
      },
      {
        title: "Support for RWA and Layer 3 Chains",
        body: "Unmarshal is expanding its support to encompass Real-World Assets (RWA) chains and Layer 3 chains, seamlessly integrating them with our advanced blockchain data infrastructure for enhanced management efficiency and transparency.",
        image: jx,
      },
    ],
    [t, n] = C.useState(1);
  return (
    C.useEffect(() => {
      const r = setTimeout(() => {
        n(t < e.length ? t + 1 : 1);
      }, 6e3);
      return () => {
        clearTimeout(r);
      };
    }, [t, e.length]),
    l.jsx("section", {
      className: "bg-[#0D0E10] pt-12 pb-20",
      children: l.jsxs("div", {
        className: "max-w-7xl mx-auto",
        children: [
          l.jsxs("div", {
            className: "text-center",
            children: [
              l.jsx("span", {
                className:
                  "inline-flex px-3 py-1 bg-white/[.1] uppercase text-white/[.8] text-xs rounded-full font-semibold mb-6",
                children: "Features",
              }),
              l.jsx("h2", {
                className:
                  "text-[56px] mx-auto text-white max-w-[680px] leading-tight",
                id: "product-suit",
                children: "Revolutionizing Blockchain & AI Integration",
              }),
            ],
          }),
          l.jsx("div", {
            className: "bg-[#17181A] p-8 rounded-xl mt-16",
            children: l.jsxs("div", {
              className: "grid grid-cols-12 md:gap-x-12",
              children: [
                l.jsx("div", {
                  className: "col-span-12 md:col-span-7",
                  children: l.jsx(
                    Ir.div,
                    {
                      className:
                        "relative h-full w-full flex items-baseline	 justify-center",
                      initial: { opacity: 0.1 },
                      animate: { y: -10, type: "spring", opacity: 1 },
                      transition: { duration: 1 },
                      children: l.jsx("img", {
                        src: e[t - 1].image,
                        className: "w-full ease-in",
                        alt: "AI Integration",
                      }),
                    },
                    t
                  ),
                }),
                l.jsx("div", {
                  className: "col-span-12 md:col-span-5",
                  children: l.jsxs("div", {
                    className: "grid grid-cols-1 space-between h-full",
                    children: [
                      l.jsxs("div", {
                        children: [
                          l.jsx("span", {
                            className:
                              "inline-flex px-3 py-1 border border-white/[.2] uppercase text-white/[.8] text-xs rounded-[8px] mb-6 mt-4 md:mt-0",
                            children: "Features",
                          }),
                          l.jsx("h2", {
                            className:
                              "text-3xl md:text-4xl text-white max-w-[400px] leading-tight",
                            children:
                              "Your Gateway to Advanced Blockchain Data Indexing",
                          }),
                        ],
                      }),
                      l.jsx("div", {
                        className: "grid items-end",
                        children: l.jsx(Ir.div, {
                          children: e.map((r, i) =>
                            l.jsxs(
                              "div",
                              {
                                className: "cursor-pointer",
                                onClick: () => n(i + 1),
                                children: [
                                  l.jsxs("svg", {
                                    className: "w-full h-1 mt-4",
                                    children: [
                                      i + 1 === t &&
                                        l.jsx(
                                          Ir.line,
                                          {
                                            x1: "0%",
                                            y1: "0%",
                                            x2: "100%",
                                            y2: "0%",
                                            strokeWidth: 4.5,
                                            stroke: "#34D399",
                                            initial: { pathLength: 0 },
                                            animate: { pathLength: 1 },
                                            transition: {
                                              type: "tween",
                                              duration: 5,
                                            },
                                            className: "z-10",
                                          },
                                          t
                                        ),
                                      l.jsx("line", {
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "100%",
                                        y2: "0%",
                                        strokeWidth: 2.5,
                                        stroke: "#333333",
                                      }),
                                    ],
                                  }),
                                  l.jsxs("div", {
                                    className: "tab-sec relative py-6",
                                    children: [
                                      l.jsx("h3", {
                                        className:
                                          "text-xl text-white font-semibold",
                                        children: r.title,
                                      }),
                                      i + 1 === t &&
                                        l.jsx("p", {
                                          className:
                                            "text-base text-[#C5C5C5] mt-2",
                                          children: r.body,
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              i
                            )
                          ),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    })
  );
}
function Ex() {
  return l.jsxs(l.Fragment, {
    children: [
      l.jsx(ix, {}),
      l.jsx(cx, {}),
      l.jsx(V3, {}),
      l.jsx(kx, {}),
      l.jsx(R3, {}),
      l.jsx(t4, {}),
      l.jsx(Px, {}),
      l.jsx(A3, {}),
      l.jsx(P3, {}),
      l.jsx(E3, {}),
      l.jsx(x3, {}),
    ],
  });
}
function Nx() {
  return l.jsx(l.Fragment, {
    children: l.jsx("main", {
      children: l.jsx("section", {
        className: "bg-dark",
        children: l.jsx("div", {
          className:
            "flex flex-col items-center justify-center min-h-screen text-white layout",
          children: l.jsx("h1", { children: "Hello World From about Page" }),
        }),
      }),
    }),
  });
}
function Lx() {
  return l.jsx(g3, {
    children: l.jsx(h3, {
      children: l.jsxs(es, {
        path: "/",
        children: [
          l.jsx(es, { index: !0, element: l.jsx(Ex, {}) }),
          l.jsx(es, { path: "about", element: l.jsx(Nx, {}) }),
        ],
      }),
    }),
  });
}
function Tx() {
  return l.jsx(Lx, {});
}
sl.createRoot(document.getElementById("root")).render(
  l.jsx(ai.StrictMode, { children: l.jsx(Tx, {}) })
);
