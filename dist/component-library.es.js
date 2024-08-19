import * as E from "react";
import se, { useRef as ve, useContext as oe, useMemo as vn, useDebugValue as Es, createElement as ma, createContext as Nt, useLayoutEffect as tu, useEffect as Fe, useInsertionEffect as nu, useCallback as ga, forwardRef as ru, Fragment as va, useId as iu, Component as su, useState as ce } from "react";
import ou from "react-dom";
var _r = { exports: {} }, Yt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ss;
function au() {
  if (Ss) return Yt;
  Ss = 1;
  var e = se, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, a, c) {
    var h, u = {}, d = null, p = null;
    c !== void 0 && (d = "" + c), a.key !== void 0 && (d = "" + a.key), a.ref !== void 0 && (p = a.ref);
    for (h in a) r.call(a, h) && !o.hasOwnProperty(h) && (u[h] = a[h]);
    if (l && l.defaultProps) for (h in a = l.defaultProps, a) u[h] === void 0 && (u[h] = a[h]);
    return { $$typeof: t, type: l, key: d, ref: p, props: u, _owner: i.current };
  }
  return Yt.Fragment = n, Yt.jsx = s, Yt.jsxs = s, Yt;
}
var Kt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cs;
function lu() {
  return Cs || (Cs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = se, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = Symbol.iterator, y = "@@iterator";
    function A(f) {
      if (f === null || typeof f != "object")
        return null;
      var P = v && f[v] || f[y];
      return typeof P == "function" ? P : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(f) {
      {
        for (var P = arguments.length, S = new Array(P > 1 ? P - 1 : 0), M = 1; M < P; M++)
          S[M - 1] = arguments[M];
        w("error", f, S);
      }
    }
    function w(f, P, S) {
      {
        var M = x.ReactDebugCurrentFrame, N = M.getStackAddendum();
        N !== "" && (P += "%s", S = S.concat([N]));
        var z = S.map(function(L) {
          return String(L);
        });
        z.unshift("Warning: " + P), Function.prototype.apply.call(console[f], console, z);
      }
    }
    var b = !1, C = !1, T = !1, D = !1, k = !1, Q;
    Q = Symbol.for("react.module.reference");
    function K(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === r || f === o || k || f === i || f === c || f === h || D || f === p || b || C || T || typeof f == "object" && f !== null && (f.$$typeof === d || f.$$typeof === u || f.$$typeof === s || f.$$typeof === l || f.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === Q || f.getModuleId !== void 0));
    }
    function he(f, P, S) {
      var M = f.displayName;
      if (M)
        return M;
      var N = P.displayName || P.name || "";
      return N !== "" ? S + "(" + N + ")" : S;
    }
    function rt(f) {
      return f.displayName || "Context";
    }
    function ne(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case l:
            var P = f;
            return rt(P) + ".Consumer";
          case s:
            var S = f;
            return rt(S._context) + ".Provider";
          case a:
            return he(f, f.render, "ForwardRef");
          case u:
            var M = f.displayName || null;
            return M !== null ? M : ne(f.type) || "Memo";
          case d: {
            var N = f, z = N._payload, L = N._init;
            try {
              return ne(L(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var de = Object.assign, U = 0, ae, Ee, Re, fe, Qe, Ue, re;
    function mt() {
    }
    mt.__reactDisabledLog = !0;
    function Ut() {
      {
        if (U === 0) {
          ae = console.log, Ee = console.info, Re = console.warn, fe = console.error, Qe = console.group, Ue = console.groupCollapsed, re = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: mt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        U++;
      }
    }
    function gt() {
      {
        if (U--, U === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: de({}, f, {
              value: ae
            }),
            info: de({}, f, {
              value: Ee
            }),
            warn: de({}, f, {
              value: Re
            }),
            error: de({}, f, {
              value: fe
            }),
            group: de({}, f, {
              value: Qe
            }),
            groupCollapsed: de({}, f, {
              value: Ue
            }),
            groupEnd: de({}, f, {
              value: re
            })
          });
        }
        U < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ke = x.ReactCurrentDispatcher, He;
    function Ae(f, P, S) {
      {
        if (He === void 0)
          try {
            throw Error();
          } catch (N) {
            var M = N.stack.trim().match(/\n( *(at )?)/);
            He = M && M[1] || "";
          }
        return `
` + He + f;
      }
    }
    var xe = !1, We;
    {
      var vt = typeof WeakMap == "function" ? WeakMap : Map;
      We = new vt();
    }
    function we(f, P) {
      if (!f || xe)
        return "";
      {
        var S = We.get(f);
        if (S !== void 0)
          return S;
      }
      var M;
      xe = !0;
      var N = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = ke.current, ke.current = null, Ut();
      try {
        if (P) {
          var L = function() {
            throw Error();
          };
          if (Object.defineProperty(L.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(L, []);
            } catch (le) {
              M = le;
            }
            Reflect.construct(f, [], L);
          } else {
            try {
              L.call();
            } catch (le) {
              M = le;
            }
            f.call(L.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (le) {
            M = le;
          }
          f();
        }
      } catch (le) {
        if (le && M && typeof le.stack == "string") {
          for (var I = le.stack.split(`
`), ie = M.stack.split(`
`), W = I.length - 1, X = ie.length - 1; W >= 1 && X >= 0 && I[W] !== ie[X]; )
            X--;
          for (; W >= 1 && X >= 0; W--, X--)
            if (I[W] !== ie[X]) {
              if (W !== 1 || X !== 1)
                do
                  if (W--, X--, X < 0 || I[W] !== ie[X]) {
                    var pe = `
` + I[W].replace(" at new ", " at ");
                    return f.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", f.displayName)), typeof f == "function" && We.set(f, pe), pe;
                  }
                while (W >= 1 && X >= 0);
              break;
            }
        }
      } finally {
        xe = !1, ke.current = z, gt(), Error.prepareStackTrace = N;
      }
      var At = f ? f.displayName || f.name : "", it = At ? Ae(At) : "";
      return typeof f == "function" && We.set(f, it), it;
    }
    function Mc(f, P, S) {
      return we(f, !1);
    }
    function Oc(f) {
      var P = f.prototype;
      return !!(P && P.isReactComponent);
    }
    function Cn(f, P, S) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return we(f, Oc(f));
      if (typeof f == "string")
        return Ae(f);
      switch (f) {
        case c:
          return Ae("Suspense");
        case h:
          return Ae("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case a:
            return Mc(f.render);
          case u:
            return Cn(f.type, P, S);
          case d: {
            var M = f, N = M._payload, z = M._init;
            try {
              return Cn(z(N), P, S);
            } catch {
            }
          }
        }
      return "";
    }
    var Ht = Object.prototype.hasOwnProperty, hs = {}, ds = x.ReactDebugCurrentFrame;
    function Tn(f) {
      if (f) {
        var P = f._owner, S = Cn(f.type, f._source, P ? P.type : null);
        ds.setExtraStackFrame(S);
      } else
        ds.setExtraStackFrame(null);
    }
    function jc(f, P, S, M, N) {
      {
        var z = Function.call.bind(Ht);
        for (var L in f)
          if (z(f, L)) {
            var I = void 0;
            try {
              if (typeof f[L] != "function") {
                var ie = Error((M || "React class") + ": " + S + " type `" + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[L] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              I = f[L](P, L, M, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              I = W;
            }
            I && !(I instanceof Error) && (Tn(N), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", M || "React class", S, L, typeof I), Tn(null)), I instanceof Error && !(I.message in hs) && (hs[I.message] = !0, Tn(N), g("Failed %s type: %s", S, I.message), Tn(null));
          }
      }
    }
    var Bc = Array.isArray;
    function Cr(f) {
      return Bc(f);
    }
    function Ic(f) {
      {
        var P = typeof Symbol == "function" && Symbol.toStringTag, S = P && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return S;
      }
    }
    function Lc(f) {
      try {
        return fs(f), !1;
      } catch {
        return !0;
      }
    }
    function fs(f) {
      return "" + f;
    }
    function ps(f) {
      if (Lc(f))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ic(f)), fs(f);
    }
    var Wt = x.ReactCurrentOwner, Nc = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ms, gs, Tr;
    Tr = {};
    function Vc(f) {
      if (Ht.call(f, "ref")) {
        var P = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function Fc(f) {
      if (Ht.call(f, "key")) {
        var P = Object.getOwnPropertyDescriptor(f, "key").get;
        if (P && P.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function zc(f, P) {
      if (typeof f.ref == "string" && Wt.current && P && Wt.current.stateNode !== P) {
        var S = ne(Wt.current.type);
        Tr[S] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ne(Wt.current.type), f.ref), Tr[S] = !0);
      }
    }
    function Gc(f, P) {
      {
        var S = function() {
          ms || (ms = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        S.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function Qc(f, P) {
      {
        var S = function() {
          gs || (gs = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", P));
        };
        S.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var Uc = function(f, P, S, M, N, z, L) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: P,
        ref: S,
        props: L,
        // Record the component responsible for creating this element.
        _owner: z
      };
      return I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(I, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.defineProperty(I, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function Hc(f, P, S, M, N) {
      {
        var z, L = {}, I = null, ie = null;
        S !== void 0 && (ps(S), I = "" + S), Fc(P) && (ps(P.key), I = "" + P.key), Vc(P) && (ie = P.ref, zc(P, N));
        for (z in P)
          Ht.call(P, z) && !Nc.hasOwnProperty(z) && (L[z] = P[z]);
        if (f && f.defaultProps) {
          var W = f.defaultProps;
          for (z in W)
            L[z] === void 0 && (L[z] = W[z]);
        }
        if (I || ie) {
          var X = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          I && Gc(L, X), ie && Qc(L, X);
        }
        return Uc(f, I, ie, N, M, Wt.current, L);
      }
    }
    var Dr = x.ReactCurrentOwner, vs = x.ReactDebugCurrentFrame;
    function yt(f) {
      if (f) {
        var P = f._owner, S = Cn(f.type, f._source, P ? P.type : null);
        vs.setExtraStackFrame(S);
      } else
        vs.setExtraStackFrame(null);
    }
    var Rr;
    Rr = !1;
    function kr(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function ys() {
      {
        if (Dr.current) {
          var f = ne(Dr.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Wc(f) {
      return "";
    }
    var As = {};
    function Yc(f) {
      {
        var P = ys();
        if (!P) {
          var S = typeof f == "string" ? f : f.displayName || f.name;
          S && (P = `

Check the top-level render call using <` + S + ">.");
        }
        return P;
      }
    }
    function xs(f, P) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var S = Yc(P);
        if (As[S])
          return;
        As[S] = !0;
        var M = "";
        f && f._owner && f._owner !== Dr.current && (M = " It was passed a child from " + ne(f._owner.type) + "."), yt(f), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, M), yt(null);
      }
    }
    function ws(f, P) {
      {
        if (typeof f != "object")
          return;
        if (Cr(f))
          for (var S = 0; S < f.length; S++) {
            var M = f[S];
            kr(M) && xs(M, P);
          }
        else if (kr(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var N = A(f);
          if (typeof N == "function" && N !== f.entries)
            for (var z = N.call(f), L; !(L = z.next()).done; )
              kr(L.value) && xs(L.value, P);
        }
      }
    }
    function Kc(f) {
      {
        var P = f.type;
        if (P == null || typeof P == "string")
          return;
        var S;
        if (typeof P == "function")
          S = P.propTypes;
        else if (typeof P == "object" && (P.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        P.$$typeof === u))
          S = P.propTypes;
        else
          return;
        if (S) {
          var M = ne(P);
          jc(S, f.props, "prop", M, f);
        } else if (P.PropTypes !== void 0 && !Rr) {
          Rr = !0;
          var N = ne(P);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", N || "Unknown");
        }
        typeof P.getDefaultProps == "function" && !P.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xc(f) {
      {
        for (var P = Object.keys(f.props), S = 0; S < P.length; S++) {
          var M = P[S];
          if (M !== "children" && M !== "key") {
            yt(f), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", M), yt(null);
            break;
          }
        }
        f.ref !== null && (yt(f), g("Invalid attribute `ref` supplied to `React.Fragment`."), yt(null));
      }
    }
    var bs = {};
    function Ps(f, P, S, M, N, z) {
      {
        var L = K(f);
        if (!L) {
          var I = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = Wc();
          ie ? I += ie : I += ys();
          var W;
          f === null ? W = "null" : Cr(f) ? W = "array" : f !== void 0 && f.$$typeof === t ? (W = "<" + (ne(f.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : W = typeof f, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, I);
        }
        var X = Hc(f, P, S, N, z);
        if (X == null)
          return X;
        if (L) {
          var pe = P.children;
          if (pe !== void 0)
            if (M)
              if (Cr(pe)) {
                for (var At = 0; At < pe.length; At++)
                  ws(pe[At], f);
                Object.freeze && Object.freeze(pe);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ws(pe, f);
        }
        if (Ht.call(P, "key")) {
          var it = ne(f), le = Object.keys(P).filter(function(eu) {
            return eu !== "key";
          }), Mr = le.length > 0 ? "{key: someKey, " + le.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!bs[it + Mr]) {
            var $c = le.length > 0 ? "{" + le.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Mr, it, $c, it), bs[it + Mr] = !0;
          }
        }
        return f === r ? Xc(X) : Kc(X), X;
      }
    }
    function Zc(f, P, S) {
      return Ps(f, P, S, !0);
    }
    function Jc(f, P, S) {
      return Ps(f, P, S, !1);
    }
    var qc = Jc, _c = Zc;
    Kt.Fragment = r, Kt.jsx = qc, Kt.jsxs = _c;
  }()), Kt;
}
process.env.NODE_ENV === "production" ? _r.exports = au() : _r.exports = lu();
var m = _r.exports, Jt = {}, Xt = ou;
if (process.env.NODE_ENV === "production")
  Jt.createRoot = Xt.createRoot, Jt.hydrateRoot = Xt.hydrateRoot;
else {
  var Dn = Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Jt.createRoot = function(e, t) {
    Dn.usingClientEntryPoint = !0;
    try {
      return Xt.createRoot(e, t);
    } finally {
      Dn.usingClientEntryPoint = !1;
    }
  }, Jt.hydrateRoot = function(e, t, n) {
    Dn.usingClientEntryPoint = !0;
    try {
      return Xt.hydrateRoot(e, t, n);
    } finally {
      Dn.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function an() {
  return an = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, an.apply(this, arguments);
}
var Xe;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Xe || (Xe = {}));
const Ts = "popstate";
function cu(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let {
      pathname: o,
      search: s,
      hash: l
    } = r.location;
    return $r(
      "",
      {
        pathname: o,
        search: s,
        hash: l
      },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : ln(i);
  }
  return hu(t, n, null, e);
}
function B(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function De(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function uu() {
  return Math.random().toString(36).substr(2, 8);
}
function Ds(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function $r(e, t, n, r) {
  return n === void 0 && (n = null), an({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? Vt(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || uu()
  });
}
function ln(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Vt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
function hu(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: i = document.defaultView,
    v5Compat: o = !1
  } = r, s = i.history, l = Xe.Pop, a = null, c = h();
  c == null && (c = 0, s.replaceState(an({}, s.state, {
    idx: c
  }), ""));
  function h() {
    return (s.state || {
      idx: null
    }).idx;
  }
  function u() {
    l = Xe.Pop;
    let A = h(), x = A == null ? null : A - c;
    c = A, a && a({
      action: l,
      location: y.location,
      delta: x
    });
  }
  function d(A, x) {
    l = Xe.Push;
    let g = $r(y.location, A, x);
    c = h() + 1;
    let w = Ds(g, c), b = y.createHref(g);
    try {
      s.pushState(w, "", b);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError")
        throw C;
      i.location.assign(b);
    }
    o && a && a({
      action: l,
      location: y.location,
      delta: 1
    });
  }
  function p(A, x) {
    l = Xe.Replace;
    let g = $r(y.location, A, x);
    c = h();
    let w = Ds(g, c), b = y.createHref(g);
    s.replaceState(w, "", b), o && a && a({
      action: l,
      location: y.location,
      delta: 0
    });
  }
  function v(A) {
    let x = i.location.origin !== "null" ? i.location.origin : i.location.href, g = typeof A == "string" ? A : ln(A);
    return g = g.replace(/ $/, "%20"), B(x, "No window.location.(origin|href) available to create URL for href: " + g), new URL(g, x);
  }
  let y = {
    get action() {
      return l;
    },
    get location() {
      return e(i, s);
    },
    listen(A) {
      if (a)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(Ts, u), a = A, () => {
        i.removeEventListener(Ts, u), a = null;
      };
    },
    createHref(A) {
      return t(i, A);
    },
    createURL: v,
    encodeLocation(A) {
      let x = v(A);
      return {
        pathname: x.pathname,
        search: x.search,
        hash: x.hash
      };
    },
    push: d,
    replace: p,
    go(A) {
      return s.go(A);
    }
  };
  return y;
}
var Rs;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Rs || (Rs = {}));
function du(e, t, n) {
  return n === void 0 && (n = "/"), fu(e, t, n, !1);
}
function fu(e, t, n, r) {
  let i = typeof t == "string" ? Vt(t) : t, o = Je(i.pathname || "/", n);
  if (o == null)
    return null;
  let s = ya(e);
  pu(s);
  let l = null;
  for (let a = 0; l == null && a < s.length; ++a) {
    let c = Su(o);
    l = Pu(s[a], c, r);
  }
  return l;
}
function ya(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, l) => {
    let a = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o
    };
    a.relativePath.startsWith("/") && (B(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
    let c = je([r, a.relativePath]), h = n.concat(a);
    o.children && o.children.length > 0 && (B(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')
    ), ya(o.children, t, h, c)), !(o.path == null && !o.index) && t.push({
      path: c,
      score: wu(c, o.index),
      routesMeta: h
    });
  };
  return e.forEach((o, s) => {
    var l;
    if (o.path === "" || !((l = o.path) != null && l.includes("?")))
      i(o, s);
    else
      for (let a of Aa(o.path))
        i(o, s, a);
  }), t;
}
function Aa(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, "");
  if (r.length === 0)
    return i ? [o, ""] : [o];
  let s = Aa(r.join("/")), l = [];
  return l.push(...s.map((a) => a === "" ? o : [o, a].join("/"))), i && l.push(...s), l.map((a) => e.startsWith("/") && a === "" ? "/" : a);
}
function pu(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : bu(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const mu = /^:[\w-]+$/, gu = 3, vu = 2, yu = 1, Au = 10, xu = -2, ks = (e) => e === "*";
function wu(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(ks) && (r += xu), t && (r += vu), n.filter((i) => !ks(i)).reduce((i, o) => i + (mu.test(o) ? gu : o === "" ? yu : Au), r);
}
function bu(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Pu(e, t, n) {
  let {
    routesMeta: r
  } = e, i = {}, o = "/", s = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l], c = l === r.length - 1, h = o === "/" ? t : t.slice(o.length) || "/", u = Kn({
      path: a.relativePath,
      caseSensitive: a.caseSensitive,
      end: c
    }, h), d = a.route;
    if (!u && c && n && !r[r.length - 1].route.index && (u = Kn({
      path: a.relativePath,
      caseSensitive: a.caseSensitive,
      end: !1
    }, h)), !u)
      return null;
    Object.assign(i, u.params), s.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: je([o, u.pathname]),
      pathnameBase: Ru(je([o, u.pathnameBase])),
      route: d
    }), u.pathnameBase !== "/" && (o = je([o, u.pathnameBase]));
  }
  return s;
}
function Kn(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = Eu(e.path, e.caseSensitive, e.end), i = t.match(n);
  if (!i) return null;
  let o = i[0], s = o.replace(/(.)\/+$/, "$1"), l = i.slice(1);
  return {
    params: r.reduce((c, h, u) => {
      let {
        paramName: d,
        isOptional: p
      } = h;
      if (d === "*") {
        let y = l[u] || "";
        s = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const v = l[u];
      return p && !v ? c[d] = void 0 : c[d] = (v || "").replace(/%2F/g, "/"), c;
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e
  };
}
function Eu(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), De(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({
    paramName: l,
    isOptional: a != null
  }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
    paramName: "*"
  }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function Su(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return De(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function Je(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Cu(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof e == "string" ? Vt(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : Tu(n, t) : t,
    search: ku(r),
    hash: Mu(i)
  };
}
function Tu(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function Or(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Du(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function xa(e, t) {
  let n = Du(e);
  return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map((r) => r.pathnameBase);
}
function wa(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string" ? i = Vt(e) : (i = an({}, e), B(!i.pathname || !i.pathname.includes("?"), Or("?", "pathname", "search", i)), B(!i.pathname || !i.pathname.includes("#"), Or("#", "pathname", "hash", i)), B(!i.search || !i.search.includes("#"), Or("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "", s = o ? "/" : i.pathname, l;
  if (s == null)
    l = n;
  else {
    let u = t.length - 1;
    if (!r && s.startsWith("..")) {
      let d = s.split("/");
      for (; d[0] === ".."; )
        d.shift(), u -= 1;
      i.pathname = d.join("/");
    }
    l = u >= 0 ? t[u] : "/";
  }
  let a = Cu(i, l), c = s && s !== "/" && s.endsWith("/"), h = (o || s === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (c || h) && (a.pathname += "/"), a;
}
const je = (e) => e.join("/").replace(/\/\/+/g, "/"), Ru = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), ku = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Mu = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Ou(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const ba = ["post", "put", "patch", "delete"];
new Set(ba);
const ju = ["get", ...ba];
new Set(ju);
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function cn() {
  return cn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, cn.apply(this, arguments);
}
const yn = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (yn.displayName = "DataRouter");
const Si = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (Si.displayName = "DataRouterState");
const Bu = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (Bu.displayName = "Await");
const Pe = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (Pe.displayName = "Navigation");
const An = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (An.displayName = "Location");
const Ge = /* @__PURE__ */ E.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Ge.displayName = "Route");
const Ci = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (Ci.displayName = "RouteError");
function Iu(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  xn() || (process.env.NODE_ENV !== "production" ? B(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : B(!1));
  let {
    basename: r,
    navigator: i
  } = E.useContext(Pe), {
    hash: o,
    pathname: s,
    search: l
  } = wn(e, {
    relative: n
  }), a = s;
  return r !== "/" && (a = s === "/" ? r : je([r, s])), i.createHref({
    pathname: a,
    search: l,
    hash: o
  });
}
function xn() {
  return E.useContext(An) != null;
}
function Ft() {
  return xn() || (process.env.NODE_ENV !== "production" ? B(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : B(!1)), E.useContext(An).location;
}
const Pa = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Ea(e) {
  E.useContext(Pe).static || E.useLayoutEffect(e);
}
function Lu() {
  let {
    isDataRoute: e
  } = E.useContext(Ge);
  return e ? Ju() : Nu();
}
function Nu() {
  xn() || (process.env.NODE_ENV !== "production" ? B(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : B(!1));
  let e = E.useContext(yn), {
    basename: t,
    future: n,
    navigator: r
  } = E.useContext(Pe), {
    matches: i
  } = E.useContext(Ge), {
    pathname: o
  } = Ft(), s = JSON.stringify(xa(i, n.v7_relativeSplatPath)), l = E.useRef(!1);
  return Ea(() => {
    l.current = !0;
  }), E.useCallback(function(c, h) {
    if (h === void 0 && (h = {}), process.env.NODE_ENV !== "production" && De(l.current, Pa), !l.current) return;
    if (typeof c == "number") {
      r.go(c);
      return;
    }
    let u = wa(c, JSON.parse(s), o, h.relative === "path");
    e == null && t !== "/" && (u.pathname = u.pathname === "/" ? t : je([t, u.pathname])), (h.replace ? r.replace : r.push)(u, h.state, h);
  }, [t, r, s, o, e]);
}
function wn(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    future: r
  } = E.useContext(Pe), {
    matches: i
  } = E.useContext(Ge), {
    pathname: o
  } = Ft(), s = JSON.stringify(xa(i, r.v7_relativeSplatPath));
  return E.useMemo(() => wa(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function Vu(e, t) {
  return Fu(e, t);
}
function Fu(e, t, n, r) {
  xn() || (process.env.NODE_ENV !== "production" ? B(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : B(!1));
  let {
    navigator: i
  } = E.useContext(Pe), {
    matches: o
  } = E.useContext(Ge), s = o[o.length - 1], l = s ? s.params : {}, a = s ? s.pathname : "/", c = s ? s.pathnameBase : "/", h = s && s.route;
  if (process.env.NODE_ENV !== "production") {
    let g = h && h.path || "";
    Ca(a, !h || g.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + a + '" (under <Route path="' + g + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + g + '"> to <Route ') + ('path="' + (g === "/" ? "*" : g + "/*") + '">.'));
  }
  let u = Ft(), d;
  if (t) {
    var p;
    let g = typeof t == "string" ? Vt(t) : t;
    c === "/" || (p = g.pathname) != null && p.startsWith(c) || (process.env.NODE_ENV !== "production" ? B(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + c + '" ') + ('but pathname "' + g.pathname + '" was given in the `location` prop.')) : B(!1)), d = g;
  } else
    d = u;
  let v = d.pathname || "/", y = v;
  if (c !== "/") {
    let g = c.replace(/^\//, "").split("/");
    y = "/" + v.replace(/^\//, "").split("/").slice(g.length).join("/");
  }
  let A = du(e, {
    pathname: y
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && De(h || A != null, 'No routes matched location "' + d.pathname + d.search + d.hash + '" '), process.env.NODE_ENV !== "production" && De(A == null || A[A.length - 1].route.element !== void 0 || A[A.length - 1].route.Component !== void 0 || A[A.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + d.pathname + d.search + d.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let x = Hu(A && A.map((g) => Object.assign({}, g, {
    params: Object.assign({}, l, g.params),
    pathname: je([
      c,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(g.pathname).pathname : g.pathname
    ]),
    pathnameBase: g.pathnameBase === "/" ? c : je([
      c,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(g.pathnameBase).pathname : g.pathnameBase
    ])
  })), o, n, r);
  return t && x ? /* @__PURE__ */ E.createElement(An.Provider, {
    value: {
      location: cn({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, d),
      navigationType: Xe.Pop
    }
  }, x) : x;
}
function zu() {
  let e = Zu(), t = Ou(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", i = {
    padding: "0.5rem",
    backgroundColor: r
  }, o = {
    padding: "2px 4px",
    backgroundColor: r
  }, s = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", e), s = /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ E.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ E.createElement("code", {
    style: o
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ E.createElement("code", {
    style: o
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ E.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ E.createElement("pre", {
    style: i
  }, n) : null, s);
}
const Gu = /* @__PURE__ */ E.createElement(zu, null);
class Qu extends E.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ E.createElement(Ge.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ E.createElement(Ci.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function Uu(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, i = E.useContext(yn);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ E.createElement(Ge.Provider, {
    value: t
  }, r);
}
function Hu(e, t, n, r) {
  var i;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var o;
    if (!n)
      return null;
    if (n.errors)
      e = n.matches;
    else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else
      return null;
  }
  let s = e, l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let h = s.findIndex((u) => u.route.id && (l == null ? void 0 : l[u.route.id]) !== void 0);
    h >= 0 || (process.env.NODE_ENV !== "production" ? B(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(l).join(",")) : B(!1)), s = s.slice(0, Math.min(s.length, h + 1));
  }
  let a = !1, c = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < s.length; h++) {
      let u = s[h];
      if ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (c = h), u.route.id) {
        let {
          loaderData: d,
          errors: p
        } = n, v = u.route.loader && d[u.route.id] === void 0 && (!p || p[u.route.id] === void 0);
        if (u.route.lazy || v) {
          a = !0, c >= 0 ? s = s.slice(0, c + 1) : s = [s[0]];
          break;
        }
      }
    }
  return s.reduceRight((h, u, d) => {
    let p, v = !1, y = null, A = null;
    n && (p = l && u.route.id ? l[u.route.id] : void 0, y = u.route.errorElement || Gu, a && (c < 0 && d === 0 ? (Ca("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), v = !0, A = null) : c === d && (v = !0, A = u.route.hydrateFallbackElement || null)));
    let x = t.concat(s.slice(0, d + 1)), g = () => {
      let w;
      return p ? w = y : v ? w = A : u.route.Component ? w = /* @__PURE__ */ E.createElement(u.route.Component, null) : u.route.element ? w = u.route.element : w = h, /* @__PURE__ */ E.createElement(Uu, {
        match: u,
        routeContext: {
          outlet: h,
          matches: x,
          isDataRoute: n != null
        },
        children: w
      });
    };
    return n && (u.route.ErrorBoundary || u.route.errorElement || d === 0) ? /* @__PURE__ */ E.createElement(Qu, {
      location: n.location,
      revalidation: n.revalidation,
      component: y,
      error: p,
      children: g(),
      routeContext: {
        outlet: null,
        matches: x,
        isDataRoute: !0
      }
    }) : g();
  }, null);
}
var Sa = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Sa || {}), un = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(un || {});
function Ti(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Wu(e) {
  let t = E.useContext(yn);
  return t || (process.env.NODE_ENV !== "production" ? B(!1, Ti(e)) : B(!1)), t;
}
function Yu(e) {
  let t = E.useContext(Si);
  return t || (process.env.NODE_ENV !== "production" ? B(!1, Ti(e)) : B(!1)), t;
}
function Ku(e) {
  let t = E.useContext(Ge);
  return t || (process.env.NODE_ENV !== "production" ? B(!1, Ti(e)) : B(!1)), t;
}
function Di(e) {
  let t = Ku(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? B(!1, e + ' can only be used on routes that contain a unique "id"') : B(!1)), n.route.id;
}
function Xu() {
  return Di(un.UseRouteId);
}
function Zu() {
  var e;
  let t = E.useContext(Ci), n = Yu(un.UseRouteError), r = Di(un.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Ju() {
  let {
    router: e
  } = Wu(Sa.UseNavigateStable), t = Di(un.UseNavigateStable), n = E.useRef(!1);
  return Ea(() => {
    n.current = !0;
  }), E.useCallback(function(i, o) {
    o === void 0 && (o = {}), process.env.NODE_ENV !== "production" && De(n.current, Pa), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, cn({
      fromRouteId: t
    }, o)));
  }, [e, t]);
}
const Ms = {};
function Ca(e, t, n) {
  !t && !Ms[e] && (Ms[e] = !0, process.env.NODE_ENV !== "production" && De(!1, n));
}
function bt(e) {
  process.env.NODE_ENV !== "production" ? B(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : B(!1);
}
function qu(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Xe.Pop,
    navigator: o,
    static: s = !1,
    future: l
  } = e;
  xn() && (process.env.NODE_ENV !== "production" ? B(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : B(!1));
  let a = t.replace(/^\/*/, "/"), c = E.useMemo(() => ({
    basename: a,
    navigator: o,
    static: s,
    future: cn({
      v7_relativeSplatPath: !1
    }, l)
  }), [a, l, o, s]);
  typeof r == "string" && (r = Vt(r));
  let {
    pathname: h = "/",
    search: u = "",
    hash: d = "",
    state: p = null,
    key: v = "default"
  } = r, y = E.useMemo(() => {
    let A = Je(h, a);
    return A == null ? null : {
      location: {
        pathname: A,
        search: u,
        hash: d,
        state: p,
        key: v
      },
      navigationType: i
    };
  }, [a, h, u, d, p, v, i]);
  return process.env.NODE_ENV !== "production" && De(y != null, '<Router basename="' + a + '"> is not able to match the URL ' + ('"' + h + u + d + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), y == null ? null : /* @__PURE__ */ E.createElement(Pe.Provider, {
    value: c
  }, /* @__PURE__ */ E.createElement(An.Provider, {
    children: n,
    value: y
  }));
}
function _u(e) {
  let {
    children: t,
    location: n
  } = e;
  return Vu(ei(t), n);
}
new Promise(() => {
});
function ei(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return E.Children.forEach(e, (r, i) => {
    if (!/* @__PURE__ */ E.isValidElement(r))
      return;
    let o = [...t, i];
    if (r.type === E.Fragment) {
      n.push.apply(n, ei(r.props.children, o));
      return;
    }
    r.type !== bt && (process.env.NODE_ENV !== "production" ? B(!1, "[" + (typeof r.type == "string" ? r.type : r.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : B(!1)), !r.props.index || !r.props.children || (process.env.NODE_ENV !== "production" ? B(!1, "An index route cannot have child routes.") : B(!1));
    let s = {
      id: r.props.id || o.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (s.children = ei(r.props.children, o)), n.push(s);
  }), n;
}
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Rt() {
  return Rt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Rt.apply(this, arguments);
}
function Ri(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
const Nn = "get", Vn = "application/x-www-form-urlencoded";
function ar(e) {
  return e != null && typeof e.tagName == "string";
}
function $u(e) {
  return ar(e) && e.tagName.toLowerCase() === "button";
}
function eh(e) {
  return ar(e) && e.tagName.toLowerCase() === "form";
}
function th(e) {
  return ar(e) && e.tagName.toLowerCase() === "input";
}
function nh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function rh(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !nh(e);
}
let Rn = null;
function ih() {
  if (Rn === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Rn = !1;
    } catch {
      Rn = !0;
    }
  return Rn;
}
const sh = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function jr(e) {
  return e != null && !sh.has(e) ? (process.env.NODE_ENV !== "production" && De(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + Vn + '"')), null) : e;
}
function oh(e, t) {
  let n, r, i, o, s;
  if (eh(e)) {
    let l = e.getAttribute("action");
    r = l ? Je(l, t) : null, n = e.getAttribute("method") || Nn, i = jr(e.getAttribute("enctype")) || Vn, o = new FormData(e);
  } else if ($u(e) || th(e) && (e.type === "submit" || e.type === "image")) {
    let l = e.form;
    if (l == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let a = e.getAttribute("formaction") || l.getAttribute("action");
    if (r = a ? Je(a, t) : null, n = e.getAttribute("formmethod") || l.getAttribute("method") || Nn, i = jr(e.getAttribute("formenctype")) || jr(l.getAttribute("enctype")) || Vn, o = new FormData(l, e), !ih()) {
      let {
        name: c,
        type: h,
        value: u
      } = e;
      if (h === "image") {
        let d = c ? c + "." : "";
        o.append(d + "x", "0"), o.append(d + "y", "0");
      } else c && o.append(c, u);
    }
  } else {
    if (ar(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    n = Nn, r = null, i = Vn, s = e;
  }
  return o && i === "text/plain" && (s = o, o = void 0), {
    action: r,
    method: n.toLowerCase(),
    encType: i,
    formData: o,
    body: s
  };
}
const ah = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], lh = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], ch = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], uh = "6";
try {
  window.__reactRouterVersion = uh;
} catch {
}
const Ta = /* @__PURE__ */ E.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (Ta.displayName = "ViewTransition");
const hh = /* @__PURE__ */ E.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (hh.displayName = "Fetchers");
const dh = "startTransition", Os = E[dh];
function fh(e) {
  let {
    basename: t,
    children: n,
    future: r,
    window: i
  } = e, o = E.useRef();
  o.current == null && (o.current = cu({
    window: i,
    v5Compat: !0
  }));
  let s = o.current, [l, a] = E.useState({
    action: s.action,
    location: s.location
  }), {
    v7_startTransition: c
  } = r || {}, h = E.useCallback((u) => {
    c && Os ? Os(() => a(u)) : a(u);
  }, [a, c]);
  return E.useLayoutEffect(() => s.listen(h), [s, h]), /* @__PURE__ */ E.createElement(qu, {
    basename: t,
    children: n,
    location: l.location,
    navigationType: l.action,
    navigator: s,
    future: r
  });
}
process.env.NODE_ENV;
const ph = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", mh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Da = /* @__PURE__ */ E.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: i,
    reloadDocument: o,
    replace: s,
    state: l,
    target: a,
    to: c,
    preventScrollReset: h,
    unstable_viewTransition: u
  } = t, d = Ri(t, ah), {
    basename: p
  } = E.useContext(Pe), v, y = !1;
  if (typeof c == "string" && mh.test(c) && (v = c, ph))
    try {
      let w = new URL(window.location.href), b = c.startsWith("//") ? new URL(w.protocol + c) : new URL(c), C = Je(b.pathname, p);
      b.origin === w.origin && C != null ? c = C + b.search + b.hash : y = !0;
    } catch {
      process.env.NODE_ENV !== "production" && De(!1, '<Link to="' + c + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let A = Iu(c, {
    relative: i
  }), x = yh(c, {
    replace: s,
    state: l,
    target: a,
    preventScrollReset: h,
    relative: i,
    unstable_viewTransition: u
  });
  function g(w) {
    r && r(w), w.defaultPrevented || x(w);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ E.createElement("a", Rt({}, d, {
      href: v || A,
      onClick: y || o ? r : g,
      ref: n,
      target: a
    }))
  );
});
process.env.NODE_ENV !== "production" && (Da.displayName = "Link");
const lr = /* @__PURE__ */ E.forwardRef(function(t, n) {
  let {
    "aria-current": r = "page",
    caseSensitive: i = !1,
    className: o = "",
    end: s = !1,
    style: l,
    to: a,
    unstable_viewTransition: c,
    children: h
  } = t, u = Ri(t, lh), d = wn(a, {
    relative: u.relative
  }), p = Ft(), v = E.useContext(Si), {
    navigator: y,
    basename: A
  } = E.useContext(Pe), x = v != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  Eh(d) && c === !0, g = y.encodeLocation ? y.encodeLocation(d).pathname : d.pathname, w = p.pathname, b = v && v.navigation && v.navigation.location ? v.navigation.location.pathname : null;
  i || (w = w.toLowerCase(), b = b ? b.toLowerCase() : null, g = g.toLowerCase()), b && A && (b = Je(b, A) || b);
  const C = g !== "/" && g.endsWith("/") ? g.length - 1 : g.length;
  let T = w === g || !s && w.startsWith(g) && w.charAt(C) === "/", D = b != null && (b === g || !s && b.startsWith(g) && b.charAt(g.length) === "/"), k = {
    isActive: T,
    isPending: D,
    isTransitioning: x
  }, Q = T ? r : void 0, K;
  typeof o == "function" ? K = o(k) : K = [o, T ? "active" : null, D ? "pending" : null, x ? "transitioning" : null].filter(Boolean).join(" ");
  let he = typeof l == "function" ? l(k) : l;
  return /* @__PURE__ */ E.createElement(Da, Rt({}, u, {
    "aria-current": Q,
    className: K,
    ref: n,
    style: he,
    to: a,
    unstable_viewTransition: c
  }), typeof h == "function" ? h(k) : h);
});
process.env.NODE_ENV !== "production" && (lr.displayName = "NavLink");
const gh = /* @__PURE__ */ E.forwardRef((e, t) => {
  let {
    fetcherKey: n,
    navigate: r,
    reloadDocument: i,
    replace: o,
    state: s,
    method: l = Nn,
    action: a,
    onSubmit: c,
    relative: h,
    preventScrollReset: u,
    unstable_viewTransition: d
  } = e, p = Ri(e, ch), v = bh(), y = Ph(a, {
    relative: h
  }), A = l.toLowerCase() === "get" ? "get" : "post", x = (g) => {
    if (c && c(g), g.defaultPrevented) return;
    g.preventDefault();
    let w = g.nativeEvent.submitter, b = (w == null ? void 0 : w.getAttribute("formmethod")) || l;
    v(w || g.currentTarget, {
      fetcherKey: n,
      method: b,
      navigate: r,
      replace: o,
      state: s,
      relative: h,
      preventScrollReset: u,
      unstable_viewTransition: d
    });
  };
  return /* @__PURE__ */ E.createElement("form", Rt({
    ref: t,
    method: A,
    action: y,
    onSubmit: i ? c : x
  }, p));
});
process.env.NODE_ENV !== "production" && (gh.displayName = "Form");
process.env.NODE_ENV;
var Xn;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(Xn || (Xn = {}));
var js;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(js || (js = {}));
function vh(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Ra(e) {
  let t = E.useContext(yn);
  return t || (process.env.NODE_ENV !== "production" ? B(!1, vh(e)) : B(!1)), t;
}
function yh(e, t) {
  let {
    target: n,
    replace: r,
    state: i,
    preventScrollReset: o,
    relative: s,
    unstable_viewTransition: l
  } = t === void 0 ? {} : t, a = Lu(), c = Ft(), h = wn(e, {
    relative: s
  });
  return E.useCallback((u) => {
    if (rh(u, n)) {
      u.preventDefault();
      let d = r !== void 0 ? r : ln(c) === ln(h);
      a(e, {
        replace: d,
        state: i,
        preventScrollReset: o,
        relative: s,
        unstable_viewTransition: l
      });
    }
  }, [c, a, h, r, i, n, e, o, s, l]);
}
function Ah() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let xh = 0, wh = () => "__" + String(++xh) + "__";
function bh() {
  let {
    router: e
  } = Ra(Xn.UseSubmit), {
    basename: t
  } = E.useContext(Pe), n = Xu();
  return E.useCallback(function(r, i) {
    i === void 0 && (i = {}), Ah();
    let {
      action: o,
      method: s,
      encType: l,
      formData: a,
      body: c
    } = oh(r, t);
    if (i.navigate === !1) {
      let h = i.fetcherKey || wh();
      e.fetch(h, n, i.action || o, {
        preventScrollReset: i.preventScrollReset,
        formData: a,
        body: c,
        formMethod: i.method || s,
        formEncType: i.encType || l,
        unstable_flushSync: i.unstable_flushSync
      });
    } else
      e.navigate(i.action || o, {
        preventScrollReset: i.preventScrollReset,
        formData: a,
        body: c,
        formMethod: i.method || s,
        formEncType: i.encType || l,
        replace: i.replace,
        state: i.state,
        fromRouteId: n,
        unstable_flushSync: i.unstable_flushSync,
        unstable_viewTransition: i.unstable_viewTransition
      });
  }, [e, t, n]);
}
function Ph(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    basename: r
  } = E.useContext(Pe), i = E.useContext(Ge);
  i || (process.env.NODE_ENV !== "production" ? B(!1, "useFormAction must be used inside a RouteContext") : B(!1));
  let [o] = i.matches.slice(-1), s = Rt({}, wn(e || ".", {
    relative: n
  })), l = Ft();
  if (e == null) {
    s.search = l.search;
    let a = new URLSearchParams(s.search);
    a.has("index") && a.get("index") === "" && (a.delete("index"), s.search = a.toString() ? "?" + a.toString() : "");
  }
  return (!e || e === ".") && o.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (s.pathname = s.pathname === "/" ? r : je([r, s.pathname])), ln(s);
}
function Eh(e, t) {
  t === void 0 && (t = {});
  let n = E.useContext(Ta);
  n == null && (process.env.NODE_ENV !== "production" ? B(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : B(!1));
  let {
    basename: r
  } = Ra(Xn.useViewTransitionState), i = wn(e, {
    relative: t.relative
  });
  if (!n.isTransitioning)
    return !1;
  let o = Je(n.currentLocation.pathname, r) || n.currentLocation.pathname, s = Je(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Kn(i.pathname, s) != null || Kn(i.pathname, o) != null;
}
var q = function() {
  return q = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, q.apply(this, arguments);
};
function qe(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, o; r < i; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function Sh(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ch = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Th = /* @__PURE__ */ Sh(
  function(e) {
    return Ch.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), G = "-ms-", en = "-moz-", V = "-webkit-", ka = "comm", cr = "rule", ki = "decl", Dh = "@import", Ma = "@keyframes", Rh = "@layer", Oa = Math.abs, Mi = String.fromCharCode, ti = Object.assign;
function kh(e, t) {
  return J(e, 0) ^ 45 ? (((t << 2 ^ J(e, 0)) << 2 ^ J(e, 1)) << 2 ^ J(e, 2)) << 2 ^ J(e, 3) : 0;
}
function ja(e) {
  return e.trim();
}
function Me(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function j(e, t, n) {
  return e.replace(t, n);
}
function Fn(e, t, n) {
  return e.indexOf(t, n);
}
function J(e, t) {
  return e.charCodeAt(t) | 0;
}
function kt(e, t, n) {
  return e.slice(t, n);
}
function Se(e) {
  return e.length;
}
function Ba(e) {
  return e.length;
}
function qt(e, t) {
  return t.push(e), e;
}
function Mh(e, t) {
  return e.map(t).join("");
}
function Bs(e, t) {
  return e.filter(function(n) {
    return !Me(n, t);
  });
}
var ur = 1, Mt = 1, Ia = 0, ye = 0, Z = 0, zt = "";
function hr(e, t, n, r, i, o, s, l) {
  return { value: e, root: t, parent: n, type: r, props: i, children: o, line: ur, column: Mt, length: s, return: "", siblings: l };
}
function Ye(e, t) {
  return ti(hr("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function xt(e) {
  for (; e.root; )
    e = Ye(e.root, { children: [e] });
  qt(e, e.siblings);
}
function Oh() {
  return Z;
}
function jh() {
  return Z = ye > 0 ? J(zt, --ye) : 0, Mt--, Z === 10 && (Mt = 1, ur--), Z;
}
function be() {
  return Z = ye < Ia ? J(zt, ye++) : 0, Mt++, Z === 10 && (Mt = 1, ur++), Z;
}
function ht() {
  return J(zt, ye);
}
function zn() {
  return ye;
}
function dr(e, t) {
  return kt(zt, e, t);
}
function ni(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Bh(e) {
  return ur = Mt = 1, Ia = Se(zt = e), ye = 0, [];
}
function Ih(e) {
  return zt = "", e;
}
function Br(e) {
  return ja(dr(ye - 1, ri(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Lh(e) {
  for (; (Z = ht()) && Z < 33; )
    be();
  return ni(e) > 2 || ni(Z) > 3 ? "" : " ";
}
function Nh(e, t) {
  for (; --t && be() && !(Z < 48 || Z > 102 || Z > 57 && Z < 65 || Z > 70 && Z < 97); )
    ;
  return dr(e, zn() + (t < 6 && ht() == 32 && be() == 32));
}
function ri(e) {
  for (; be(); )
    switch (Z) {
      case e:
        return ye;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ri(Z);
        break;
      case 40:
        e === 41 && ri(e);
        break;
      case 92:
        be();
        break;
    }
  return ye;
}
function Vh(e, t) {
  for (; be() && e + Z !== 57; )
    if (e + Z === 84 && ht() === 47)
      break;
  return "/*" + dr(t, ye - 1) + "*" + Mi(e === 47 ? e : be());
}
function Fh(e) {
  for (; !ni(ht()); )
    be();
  return dr(e, ye);
}
function zh(e) {
  return Ih(Gn("", null, null, null, [""], e = Bh(e), 0, [0], e));
}
function Gn(e, t, n, r, i, o, s, l, a) {
  for (var c = 0, h = 0, u = s, d = 0, p = 0, v = 0, y = 1, A = 1, x = 1, g = 0, w = "", b = i, C = o, T = r, D = w; A; )
    switch (v = g, g = be()) {
      case 40:
        if (v != 108 && J(D, u - 1) == 58) {
          Fn(D += j(Br(g), "&", "&\f"), "&\f", Oa(c ? l[c - 1] : 0)) != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        D += Br(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        D += Lh(v);
        break;
      case 92:
        D += Nh(zn() - 1, 7);
        continue;
      case 47:
        switch (ht()) {
          case 42:
          case 47:
            qt(Gh(Vh(be(), zn()), t, n, a), a);
            break;
          default:
            D += "/";
        }
        break;
      case 123 * y:
        l[c++] = Se(D) * x;
      case 125 * y:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            A = 0;
          case 59 + h:
            x == -1 && (D = j(D, /\f/g, "")), p > 0 && Se(D) - u && qt(p > 32 ? Ls(D + ";", r, n, u - 1, a) : Ls(j(D, " ", "") + ";", r, n, u - 2, a), a);
            break;
          case 59:
            D += ";";
          default:
            if (qt(T = Is(D, t, n, c, h, i, l, w, b = [], C = [], u, o), o), g === 123)
              if (h === 0)
                Gn(D, t, T, T, b, o, u, l, C);
              else
                switch (d === 99 && J(D, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Gn(e, T, T, r && qt(Is(e, T, T, 0, 0, i, l, w, i, b = [], u, C), C), i, C, u, l, r ? b : C);
                    break;
                  default:
                    Gn(D, T, T, T, [""], C, 0, l, C);
                }
        }
        c = h = p = 0, y = x = 1, w = D = "", u = s;
        break;
      case 58:
        u = 1 + Se(D), p = v;
      default:
        if (y < 1) {
          if (g == 123)
            --y;
          else if (g == 125 && y++ == 0 && jh() == 125)
            continue;
        }
        switch (D += Mi(g), g * y) {
          case 38:
            x = h > 0 ? 1 : (D += "\f", -1);
            break;
          case 44:
            l[c++] = (Se(D) - 1) * x, x = 1;
            break;
          case 64:
            ht() === 45 && (D += Br(be())), d = ht(), h = u = Se(w = D += Fh(zn())), g++;
            break;
          case 45:
            v === 45 && Se(D) == 2 && (y = 0);
        }
    }
  return o;
}
function Is(e, t, n, r, i, o, s, l, a, c, h, u) {
  for (var d = i - 1, p = i === 0 ? o : [""], v = Ba(p), y = 0, A = 0, x = 0; y < r; ++y)
    for (var g = 0, w = kt(e, d + 1, d = Oa(A = s[y])), b = e; g < v; ++g)
      (b = ja(A > 0 ? p[g] + " " + w : j(w, /&\f/g, p[g]))) && (a[x++] = b);
  return hr(e, t, n, i === 0 ? cr : l, a, c, h, u);
}
function Gh(e, t, n, r) {
  return hr(e, t, n, ka, Mi(Oh()), kt(e, 2, -2), 0, r);
}
function Ls(e, t, n, r, i) {
  return hr(e, t, n, ki, kt(e, 0, r), kt(e, r + 1, -1), r, i);
}
function La(e, t, n) {
  switch (kh(e, t)) {
    case 5103:
      return V + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return V + e + e;
    case 4789:
      return en + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return V + e + en + e + G + e + e;
    case 5936:
      switch (J(e, t + 11)) {
        case 114:
          return V + e + G + j(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return V + e + G + j(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return V + e + G + j(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return V + e + G + e + e;
    case 6165:
      return V + e + G + "flex-" + e + e;
    case 5187:
      return V + e + j(e, /(\w+).+(:[^]+)/, V + "box-$1$2" + G + "flex-$1$2") + e;
    case 5443:
      return V + e + G + "flex-item-" + j(e, /flex-|-self/g, "") + (Me(e, /flex-|baseline/) ? "" : G + "grid-row-" + j(e, /flex-|-self/g, "")) + e;
    case 4675:
      return V + e + G + "flex-line-pack" + j(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return V + e + G + j(e, "shrink", "negative") + e;
    case 5292:
      return V + e + G + j(e, "basis", "preferred-size") + e;
    case 6060:
      return V + "box-" + j(e, "-grow", "") + V + e + G + j(e, "grow", "positive") + e;
    case 4554:
      return V + j(e, /([^-])(transform)/g, "$1" + V + "$2") + e;
    case 6187:
      return j(j(j(e, /(zoom-|grab)/, V + "$1"), /(image-set)/, V + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return j(e, /(image-set\([^]*)/, V + "$1$`$1");
    case 4968:
      return j(j(e, /(.+:)(flex-)?(.*)/, V + "box-pack:$3" + G + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + V + e + e;
    case 4200:
      if (!Me(e, /flex-|baseline/)) return G + "grid-column-align" + kt(e, t) + e;
      break;
    case 2592:
    case 3360:
      return G + j(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n && n.some(function(r, i) {
        return t = i, Me(r.props, /grid-\w+-end/);
      }) ? ~Fn(e + (n = n[t].value), "span", 0) ? e : G + j(e, "-start", "") + e + G + "grid-row-span:" + (~Fn(n, "span", 0) ? Me(n, /\d+/) : +Me(n, /\d+/) - +Me(e, /\d+/)) + ";" : G + j(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n && n.some(function(r) {
        return Me(r.props, /grid-\w+-start/);
      }) ? e : G + j(j(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(e, /(.+)-inline(.+)/, V + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Se(e) - 1 - t > 6)
        switch (J(e, t + 1)) {
          case 109:
            if (J(e, t + 4) !== 45)
              break;
          case 102:
            return j(e, /(.+:)(.+)-([^]+)/, "$1" + V + "$2-$3$1" + en + (J(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Fn(e, "stretch", 0) ? La(j(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return j(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(r, i, o, s, l, a, c) {
        return G + i + ":" + o + c + (s ? G + i + "-span:" + (l ? a : +a - +o) + c : "") + e;
      });
    case 4949:
      if (J(e, t + 6) === 121)
        return j(e, ":", ":" + V) + e;
      break;
    case 6444:
      switch (J(e, J(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return j(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + V + (J(e, 14) === 45 ? "inline-" : "") + "box$3$1" + V + "$2$3$1" + G + "$2box$3") + e;
        case 100:
          return j(e, ":", ":" + G) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return j(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Zn(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Qh(e, t, n, r) {
  switch (e.type) {
    case Rh:
      if (e.children.length) break;
    case Dh:
    case ki:
      return e.return = e.return || e.value;
    case ka:
      return "";
    case Ma:
      return e.return = e.value + "{" + Zn(e.children, r) + "}";
    case cr:
      if (!Se(e.value = e.props.join(","))) return "";
  }
  return Se(n = Zn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Uh(e) {
  var t = Ba(e);
  return function(n, r, i, o) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, i, o) || "";
    return s;
  };
}
function Hh(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Wh(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case ki:
        e.return = La(e.value, e.length, n);
        return;
      case Ma:
        return Zn([Ye(e, { value: j(e.value, "@", "@" + V) })], r);
      case cr:
        if (e.length)
          return Mh(n = e.props, function(i) {
            switch (Me(i, r = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                xt(Ye(e, { props: [j(i, /:(read-\w+)/, ":" + en + "$1")] })), xt(Ye(e, { props: [i] })), ti(e, { props: Bs(n, r) });
                break;
              case "::placeholder":
                xt(Ye(e, { props: [j(i, /:(plac\w+)/, ":" + V + "input-$1")] })), xt(Ye(e, { props: [j(i, /:(plac\w+)/, ":" + en + "$1")] })), xt(Ye(e, { props: [j(i, /:(plac\w+)/, G + "input-$1")] })), xt(Ye(e, { props: [i] })), ti(e, { props: Bs(n, r) });
                break;
            }
            return "";
          });
    }
}
var Yh = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ft = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Na = "active", Va = "data-styled-version", fr = "6.1.12", Oi = `/*!sc*/
`, Jn = typeof window < "u" && "HTMLElement" in window, Kh = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Xh = {}, Ns = /invalid hook call/i, kn = /* @__PURE__ */ new Set(), Fa = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var n = t ? ' with the id of "'.concat(t, '"') : "", r = "The component ".concat(e).concat(n, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, i = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        for (var l = [], a = 1; a < arguments.length; a++) l[a - 1] = arguments[a];
        Ns.test(s) ? (o = !1, kn.delete(r)) : i.apply(void 0, qe([s], l, !1));
      }, ve(), o && !kn.has(r) && (console.warn(r), kn.add(r));
    } catch (s) {
      Ns.test(s.message) && kn.delete(r);
    } finally {
      console.error = i;
    }
  }
}, pr = Object.freeze([]), Ot = Object.freeze({});
function za(e, t, n) {
  return n === void 0 && (n = Ot), e.theme !== n.theme && e.theme || t || n.theme;
}
var ii = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Zh = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Jh = /(^-|-$)/g;
function Vs(e) {
  return e.replace(Zh, "-").replace(Jh, "");
}
var qh = /(a)(d)/gi, Mn = 52, Fs = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function si(e) {
  var t, n = "";
  for (t = Math.abs(e); t > Mn; t = t / Mn | 0) n = Fs(t % Mn) + n;
  return (Fs(t % Mn) + n).replace(qh, "$1-$2");
}
var Ir, Ga = 5381, lt = function(e, t) {
  for (var n = t.length; n; ) e = 33 * e ^ t.charCodeAt(--n);
  return e;
}, Qa = function(e) {
  return lt(Ga, e);
};
function ji(e) {
  return si(Qa(e) >>> 0);
}
function Ua(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Lr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Ha = typeof Symbol == "function" && Symbol.for, Wa = Ha ? Symbol.for("react.memo") : 60115, _h = Ha ? Symbol.for("react.forward_ref") : 60112, $h = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, ed = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Ya = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, td = ((Ir = {})[_h] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, Ir[Wa] = Ya, Ir);
function zs(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Wa ? Ya : "$$typeof" in e ? td[e.$$typeof] : $h;
  var t;
}
var nd = Object.defineProperty, rd = Object.getOwnPropertyNames, Gs = Object.getOwnPropertySymbols, id = Object.getOwnPropertyDescriptor, sd = Object.getPrototypeOf, Qs = Object.prototype;
function Ka(e, t, n) {
  if (typeof t != "string") {
    if (Qs) {
      var r = sd(t);
      r && r !== Qs && Ka(e, r, n);
    }
    var i = rd(t);
    Gs && (i = i.concat(Gs(t)));
    for (var o = zs(e), s = zs(t), l = 0; l < i.length; ++l) {
      var a = i[l];
      if (!(a in ed || n && n[a] || s && a in s || o && a in o)) {
        var c = id(t, a);
        try {
          nd(e, a, c);
        } catch {
        }
      }
    }
  }
  return e;
}
function pt(e) {
  return typeof e == "function";
}
function Bi(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ct(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function qn(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function jt(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function oi(e, t, n) {
  if (n === void 0 && (n = !1), !n && !jt(e) && !Array.isArray(e)) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = oi(e[r], t[r]);
  else if (jt(t)) for (var r in t) e[r] = oi(e[r], t[r]);
  return e;
}
function Ii(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var od = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function ad() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  for (var n = e[0], r = [], i = 1, o = e.length; i < o; i += 1) r.push(e[i]);
  return r.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
function Be(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(ad.apply(void 0, qe([od[e]], t, !1)).trim());
}
var ld = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
    return n;
  }, e.prototype.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var r = this.groupSizes, i = r.length, o = i; t >= o; ) if ((o <<= 1) < 0) throw Be(16, "".concat(t));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(r), this.length = o;
      for (var s = i; s < o; s++) this.groupSizes[s] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), a = (s = 0, n.length); s < a; s++) this.tag.insertRule(l, n[s]) && (this.groupSizes[t]++, l++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], r = this.indexOfGroup(t), i = r + n;
      this.groupSizes[t] = 0;
      for (var o = r; o < i; o++) this.tag.deleteRule(r);
    }
  }, e.prototype.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0) return n;
    for (var r = this.groupSizes[t], i = this.indexOfGroup(t), o = i + r, s = i; s < o; s++) n += "".concat(this.tag.getRule(s)).concat(Oi);
    return n;
  }, e;
}(), cd = 1 << 30, Qn = /* @__PURE__ */ new Map(), _n = /* @__PURE__ */ new Map(), Un = 1, On = function(e) {
  if (Qn.has(e)) return Qn.get(e);
  for (; _n.has(Un); ) Un++;
  var t = Un++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > cd)) throw Be(16, "".concat(t));
  return Qn.set(e, t), _n.set(t, e), t;
}, ud = function(e, t) {
  Un = t + 1, Qn.set(e, t), _n.set(t, e);
}, hd = "style[".concat(ft, "][").concat(Va, '="').concat(fr, '"]'), dd = new RegExp("^".concat(ft, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), fd = function(e, t, n) {
  for (var r, i = n.split(","), o = 0, s = i.length; o < s; o++) (r = i[o]) && e.registerName(t, r);
}, pd = function(e, t) {
  for (var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Oi), i = [], o = 0, s = r.length; o < s; o++) {
    var l = r[o].trim();
    if (l) {
      var a = l.match(dd);
      if (a) {
        var c = 0 | parseInt(a[1], 10), h = a[2];
        c !== 0 && (ud(h, c), fd(e, h, a[3]), e.getTag().insertRules(c, i)), i.length = 0;
      } else i.push(l);
    }
  }
}, Us = function(e) {
  for (var t = document.querySelectorAll(hd), n = 0, r = t.length; n < r; n++) {
    var i = t[n];
    i && i.getAttribute(ft) !== Na && (pd(e, i), i.parentNode && i.parentNode.removeChild(i));
  }
};
function md() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Xa = function(e) {
  var t = document.head, n = e || t, r = document.createElement("style"), i = function(l) {
    var a = Array.from(l.querySelectorAll("style[".concat(ft, "]")));
    return a[a.length - 1];
  }(n), o = i !== void 0 ? i.nextSibling : null;
  r.setAttribute(ft, Na), r.setAttribute(Va, fr);
  var s = md();
  return s && r.setAttribute("nonce", s), n.insertBefore(r, o), r;
}, gd = function() {
  function e(t) {
    this.element = Xa(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(n) {
      if (n.sheet) return n.sheet;
      for (var r = document.styleSheets, i = 0, o = r.length; i < o; i++) {
        var s = r[i];
        if (s.ownerNode === n) return s;
      }
      throw Be(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n && n.cssText ? n.cssText : "";
  }, e;
}(), vd = function() {
  function e(t) {
    this.element = Xa(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var r = document.createTextNode(n);
      return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), yd = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), Hs = Jn, Ad = { isServer: !Jn, useCSSOMInjection: !Kh }, $n = function() {
  function e(t, n, r) {
    t === void 0 && (t = Ot), n === void 0 && (n = {});
    var i = this;
    this.options = q(q({}, Ad), t), this.gs = n, this.names = new Map(r), this.server = !!t.isServer, !this.server && Jn && Hs && (Hs = !1, Us(this)), Ii(this, function() {
      return function(o) {
        for (var s = o.getTag(), l = s.length, a = "", c = function(u) {
          var d = function(x) {
            return _n.get(x);
          }(u);
          if (d === void 0) return "continue";
          var p = o.names.get(d), v = s.getGroup(u);
          if (p === void 0 || !p.size || v.length === 0) return "continue";
          var y = "".concat(ft, ".g").concat(u, '[id="').concat(d, '"]'), A = "";
          p !== void 0 && p.forEach(function(x) {
            x.length > 0 && (A += "".concat(x, ","));
          }), a += "".concat(v).concat(y, '{content:"').concat(A, '"}').concat(Oi);
        }, h = 0; h < l; h++) c(h);
        return a;
      }(i);
    });
  }
  return e.registerId = function(t) {
    return On(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Jn && Us(this);
  }, e.prototype.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(q(q({}, this.options), t), this.gs, n && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(n) {
      var r = n.useCSSOMInjection, i = n.target;
      return n.isServer ? new yd(i) : r ? new gd(i) : new vd(i);
    }(this.options), new ld(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, e.prototype.registerName = function(t, n) {
    if (On(t), this.names.has(t)) this.names.get(t).add(n);
    else {
      var r = /* @__PURE__ */ new Set();
      r.add(n), this.names.set(t, r);
    }
  }, e.prototype.insertRules = function(t, n, r) {
    this.registerName(t, n), this.getTag().insertRules(On(t), r);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(On(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), xd = /&/g, wd = /^\s*\/\/.*$/gm;
function Za(e, t) {
  return e.map(function(n) {
    return n.type === "rule" && (n.value = "".concat(t, " ").concat(n.value), n.value = n.value.replaceAll(",", ",".concat(t, " ")), n.props = n.props.map(function(r) {
      return "".concat(t, " ").concat(r);
    })), Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Za(n.children, t)), n;
  });
}
function bd(e) {
  var t, n, r, i = Ot, o = i.options, s = o === void 0 ? Ot : o, l = i.plugins, a = l === void 0 ? pr : l, c = function(d, p, v) {
    return v.startsWith(n) && v.endsWith(n) && v.replaceAll(n, "").length > 0 ? ".".concat(t) : d;
  }, h = a.slice();
  h.push(function(d) {
    d.type === cr && d.value.includes("&") && (d.props[0] = d.props[0].replace(xd, n).replace(r, c));
  }), s.prefix && h.push(Wh), h.push(Qh);
  var u = function(d, p, v, y) {
    p === void 0 && (p = ""), v === void 0 && (v = ""), y === void 0 && (y = "&"), t = y, n = p, r = new RegExp("\\".concat(n, "\\b"), "g");
    var A = d.replace(wd, ""), x = zh(v || p ? "".concat(v, " ").concat(p, " { ").concat(A, " }") : A);
    s.namespace && (x = Za(x, s.namespace));
    var g = [];
    return Zn(x, Uh(h.concat(Hh(function(w) {
      return g.push(w);
    })))), g;
  };
  return u.hash = a.length ? a.reduce(function(d, p) {
    return p.name || Be(15), lt(d, p.name);
  }, Ga).toString() : "", u;
}
var Pd = new $n(), ai = bd(), Ja = se.createContext({ shouldForwardProp: void 0, styleSheet: Pd, stylis: ai });
Ja.Consumer;
se.createContext(void 0);
function li() {
  return oe(Ja);
}
var ci = function() {
  function e(t, n) {
    var r = this;
    this.inject = function(i, o) {
      o === void 0 && (o = ai);
      var s = r.name + o.hash;
      i.hasNameForId(r.id, s) || i.insertRules(r.id, s, o(r.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = n, Ii(this, function() {
      throw Be(12, String(r.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ai), this.name + t.hash;
  }, e;
}(), Ed = function(e) {
  return e >= "A" && e <= "Z";
};
function Ws(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Ed(r) ? t += "-" + r.toLowerCase() : t += r;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var qa = function(e) {
  return e == null || e === !1 || e === "";
}, _a = function(e) {
  var t, n, r = [];
  for (var i in e) {
    var o = e[i];
    e.hasOwnProperty(i) && !qa(o) && (Array.isArray(o) && o.isCss || pt(o) ? r.push("".concat(Ws(i), ":"), o, ";") : jt(o) ? r.push.apply(r, qe(qe(["".concat(i, " {")], _a(o), !1), ["}"], !1)) : r.push("".concat(Ws(i), ": ").concat((t = i, (n = o) == null || typeof n == "boolean" || n === "" ? "" : typeof n != "number" || n === 0 || t in Yh || t.startsWith("--") ? String(n).trim() : "".concat(n, "px")), ";")));
  }
  return r;
};
function Ze(e, t, n, r) {
  if (qa(e)) return [];
  if (Bi(e)) return [".".concat(e.styledComponentId)];
  if (pt(e)) {
    if (!pt(o = e) || o.prototype && o.prototype.isReactComponent || !t) return [e];
    var i = e(t);
    return process.env.NODE_ENV === "production" || typeof i != "object" || Array.isArray(i) || i instanceof ci || jt(i) || i === null || console.error("".concat(Ua(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Ze(i, t, n, r);
  }
  var o;
  return e instanceof ci ? n ? (e.inject(n, r), [e.getName(r)]) : [e] : jt(e) ? _a(e) : Array.isArray(e) ? Array.prototype.concat.apply(pr, e.map(function(s) {
    return Ze(s, t, n, r);
  })) : [e.toString()];
}
function $a(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (pt(n) && !Bi(n)) return !1;
  }
  return !0;
}
var Sd = Qa(fr), Cd = function() {
  function e(t, n, r) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && $a(t), this.componentId = n, this.baseHash = lt(Sd, n), this.baseStyle = r, $n.registerId(n);
  }
  return e.prototype.generateAndInjectStyles = function(t, n, r) {
    var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
    if (this.isStatic && !r.hash) if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) i = ct(i, this.staticRulesId);
    else {
      var o = qn(Ze(this.rules, t, n, r)), s = si(lt(this.baseHash, o) >>> 0);
      if (!n.hasNameForId(this.componentId, s)) {
        var l = r(o, ".".concat(s), void 0, this.componentId);
        n.insertRules(this.componentId, s, l);
      }
      i = ct(i, s), this.staticRulesId = s;
    }
    else {
      for (var a = lt(this.baseHash, r.hash), c = "", h = 0; h < this.rules.length; h++) {
        var u = this.rules[h];
        if (typeof u == "string") c += u, process.env.NODE_ENV !== "production" && (a = lt(a, u));
        else if (u) {
          var d = qn(Ze(u, t, n, r));
          a = lt(a, d + h), c += d;
        }
      }
      if (c) {
        var p = si(a >>> 0);
        n.hasNameForId(this.componentId, p) || n.insertRules(this.componentId, p, r(c, ".".concat(p), void 0, this.componentId)), i = ct(i, p);
      }
    }
    return i;
  }, e;
}(), hn = se.createContext(void 0);
hn.Consumer;
function mr(e) {
  var t = se.useContext(hn), n = vn(function() {
    return function(r, i) {
      if (!r) throw Be(14);
      if (pt(r)) {
        var o = r(i);
        if (process.env.NODE_ENV !== "production" && (o === null || Array.isArray(o) || typeof o != "object")) throw Be(7);
        return o;
      }
      if (Array.isArray(r) || typeof r != "object") throw Be(8);
      return i ? q(q({}, i), r) : r;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? se.createElement(hn.Provider, { value: n }, e.children) : null;
}
var Nr = {}, Ys = /* @__PURE__ */ new Set();
function Td(e, t, n) {
  var r = Bi(e), i = e, o = !Lr(e), s = t.attrs, l = s === void 0 ? pr : s, a = t.componentId, c = a === void 0 ? function(b, C) {
    var T = typeof b != "string" ? "sc" : Vs(b);
    Nr[T] = (Nr[T] || 0) + 1;
    var D = "".concat(T, "-").concat(ji(fr + T + Nr[T]));
    return C ? "".concat(C, "-").concat(D) : D;
  }(t.displayName, t.parentComponentId) : a, h = t.displayName, u = h === void 0 ? function(b) {
    return Lr(b) ? "styled.".concat(b) : "Styled(".concat(Ua(b), ")");
  }(e) : h, d = t.displayName && t.componentId ? "".concat(Vs(t.displayName), "-").concat(t.componentId) : t.componentId || c, p = r && i.attrs ? i.attrs.concat(l).filter(Boolean) : l, v = t.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var y = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var A = t.shouldForwardProp;
      v = function(b, C) {
        return y(b, C) && A(b, C);
      };
    } else v = y;
  }
  var x = new Cd(n, d, r ? i.componentStyle : void 0);
  function g(b, C) {
    return function(T, D, k) {
      var Q = T.attrs, K = T.componentStyle, he = T.defaultProps, rt = T.foldedComponentIds, ne = T.styledComponentId, de = T.target, U = se.useContext(hn), ae = li(), Ee = T.shouldForwardProp || ae.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Es(ne);
      var Re = za(D, U, he) || Ot, fe = function(gt, ke, He) {
        for (var Ae, xe = q(q({}, ke), { className: void 0, theme: He }), We = 0; We < gt.length; We += 1) {
          var vt = pt(Ae = gt[We]) ? Ae(xe) : Ae;
          for (var we in vt) xe[we] = we === "className" ? ct(xe[we], vt[we]) : we === "style" ? q(q({}, xe[we]), vt[we]) : vt[we];
        }
        return ke.className && (xe.className = ct(xe.className, ke.className)), xe;
      }(Q, D, Re), Qe = fe.as || de, Ue = {};
      for (var re in fe) fe[re] === void 0 || re[0] === "$" || re === "as" || re === "theme" && fe.theme === Re || (re === "forwardedAs" ? Ue.as = fe.forwardedAs : Ee && !Ee(re, Qe) || (Ue[re] = fe[re], Ee || process.env.NODE_ENV !== "development" || Th(re) || Ys.has(re) || !ii.has(Qe) || (Ys.add(re), console.warn('styled-components: it looks like an unknown prop "'.concat(re, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var mt = function(gt, ke) {
        var He = li(), Ae = gt.generateAndInjectStyles(ke, He.styleSheet, He.stylis);
        return process.env.NODE_ENV !== "production" && Es(Ae), Ae;
      }(K, fe);
      process.env.NODE_ENV !== "production" && T.warnTooManyClasses && T.warnTooManyClasses(mt);
      var Ut = ct(rt, ne);
      return mt && (Ut += " " + mt), fe.className && (Ut += " " + fe.className), Ue[Lr(Qe) && !ii.has(Qe) ? "class" : "className"] = Ut, Ue.ref = k, ma(Qe, Ue);
    }(w, b, C);
  }
  g.displayName = u;
  var w = se.forwardRef(g);
  return w.attrs = p, w.componentStyle = x, w.displayName = u, w.shouldForwardProp = v, w.foldedComponentIds = r ? ct(i.foldedComponentIds, i.styledComponentId) : "", w.styledComponentId = d, w.target = r ? i.target : e, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(b) {
    this._foldedDefaultProps = r ? function(C) {
      for (var T = [], D = 1; D < arguments.length; D++) T[D - 1] = arguments[D];
      for (var k = 0, Q = T; k < Q.length; k++) oi(C, Q[k], !0);
      return C;
    }({}, i.defaultProps, b) : b;
  } }), process.env.NODE_ENV !== "production" && (Fa(u, d), w.warnTooManyClasses = /* @__PURE__ */ function(b, C) {
    var T = {}, D = !1;
    return function(k) {
      if (!D && (T[k] = !0, Object.keys(T).length >= 200)) {
        var Q = C ? ' with the id of "'.concat(C, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(b).concat(Q, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), D = !0, T = {};
      }
    };
  }(u, d)), Ii(w, function() {
    return ".".concat(w.styledComponentId);
  }), o && Ka(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), w;
}
function Ks(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var Xs = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Li(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (pt(e) || jt(e)) return Xs(Ze(Ks(pr, qe([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? Ze(r) : Xs(Ze(Ks(r, t)));
}
function ui(e, t, n) {
  if (n === void 0 && (n = Ot), !t) throw Be(1, t);
  var r = function(i) {
    for (var o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s];
    return e(t, n, Li.apply(void 0, qe([i], o, !1)));
  };
  return r.attrs = function(i) {
    return ui(e, t, q(q({}, n), { attrs: Array.prototype.concat(n.attrs, i).filter(Boolean) }));
  }, r.withConfig = function(i) {
    return ui(e, t, q(q({}, n), i));
  }, r;
}
var el = function(e) {
  return ui(Td, e);
}, O = el;
ii.forEach(function(e) {
  O[e] = el(e);
});
var Dd = function() {
  function e(t, n) {
    this.rules = t, this.componentId = n, this.isStatic = $a(t), $n.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(t, n, r, i) {
    var o = i(qn(Ze(this.rules, n, r, i)), ""), s = this.componentId + t;
    r.insertRules(s, s, o);
  }, e.prototype.removeStyles = function(t, n) {
    n.clearRules(this.componentId + t);
  }, e.prototype.renderStyles = function(t, n, r, i) {
    t > 2 && $n.registerId(this.componentId + t), this.removeStyles(t, r), this.createStyles(t, n, r, i);
  }, e;
}();
function tl(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = Li.apply(void 0, qe([e], t, !1)), i = "sc-global-".concat(ji(JSON.stringify(r))), o = new Dd(r, i);
  process.env.NODE_ENV !== "production" && Fa(i);
  var s = function(a) {
    var c = li(), h = se.useContext(hn), u = se.useRef(c.styleSheet.allocateGSInstance(i)).current;
    return process.env.NODE_ENV !== "production" && se.Children.count(a.children) && console.warn("The global style component ".concat(i, " was given child JSX. createGlobalStyle does not render children.")), process.env.NODE_ENV !== "production" && r.some(function(d) {
      return typeof d == "string" && d.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), c.styleSheet.server && l(u, a, c.styleSheet, h, c.stylis), se.useLayoutEffect(function() {
      if (!c.styleSheet.server) return l(u, a, c.styleSheet, h, c.stylis), function() {
        return o.removeStyles(u, c.styleSheet);
      };
    }, [u, a, c.styleSheet, h, c.stylis]), null;
  };
  function l(a, c, h, u, d) {
    if (o.isStatic) o.renderStyles(a, Xh, h, d);
    else {
      var p = q(q({}, c), { theme: za(c, u, s.defaultProps) });
      o.renderStyles(a, p, h, d);
    }
  }
  return se.memo(s);
}
function Ni(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  var r = qn(Li.apply(void 0, qe([e], t, !1))), i = ji(r);
  return new ci(i, r);
}
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var jn = "__sc-".concat(ft, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[jn] || (window[jn] = 0), window[jn] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[jn] += 1);
const Dt = {
  body: "#FCF6F4",
  text: "#000000",
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: "252, 246, 244",
  textRgba: "0, 0, 0"
}, Bt = {
  body: "#000000",
  text: "#FCF6F4",
  fontFamily: "'Source Sans Pro', sans-serif",
  textRgba: "252, 246, 244",
  bodyRgba: "0, 0, 0"
}, Rd = tl`
  *, *::before, *::after, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    display: inline-block;
  }
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro', sans-serif;
  }
`, nl = Nt({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), gr = Nt({}), Vi = Nt(null), Fi = typeof window < "u", kd = Fi ? tu : Fe, rl = Nt({ strict: !1 }), vr = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Md = "framerAppearId", il = "data-" + vr(Md), Od = {
  skipAnimations: !1,
  useManualTiming: !1
};
function jd(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, i = !1;
  const o = /* @__PURE__ */ new WeakSet();
  let s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(c) {
    o.has(c) && (a.schedule(c), e()), c(s);
  }
  const a = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, h = !1, u = !1) => {
      const p = u && r ? t : n;
      return h && o.add(c), p.has(c) || p.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      n.delete(c), o.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (s = c, r) {
        i = !0;
        return;
      }
      r = !0, [t, n] = [n, t], n.clear(), t.forEach(l), r = !1, i && (i = !1, a.process(c));
    }
  };
  return a;
}
const Bn = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], Bd = 40;
function sl(e, t) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, s = Bn.reduce((x, g) => (x[g] = jd(o), x), {}), { read: l, resolveKeyframes: a, update: c, preRender: h, render: u, postRender: d } = s, p = () => {
    const x = performance.now();
    n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(x - i.timestamp, Bd), 1), i.timestamp = x, i.isProcessing = !0, l.process(i), a.process(i), c.process(i), h.process(i), u.process(i), d.process(i), i.isProcessing = !1, n && t && (r = !1, e(p));
  }, v = () => {
    n = !0, r = !0, i.isProcessing || e(p);
  };
  return { schedule: Bn.reduce((x, g) => {
    const w = s[g];
    return x[g] = (b, C = !1, T = !1) => (n || v(), w.schedule(b, C, T)), x;
  }, {}), cancel: (x) => {
    for (let g = 0; g < Bn.length; g++)
      s[Bn[g]].cancel(x);
  }, state: i, steps: s };
}
const { schedule: zi, cancel: lv } = sl(queueMicrotask, !1);
function Pt(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const ol = Nt({});
let Zs = !1;
function Id(e, t, n, r, i) {
  var o;
  const { visualElement: s } = oe(gr), l = oe(rl), a = oe(Vi), c = oe(nl).reducedMotion, h = ve();
  r = r || l.renderer, !h.current && r && (h.current = r(e, {
    visualState: t,
    parent: s,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const u = h.current, d = oe(ol);
  u && !u.projection && i && (u.type === "html" || u.type === "svg") && Nd(h.current, n, i, d), nu(() => {
    u && u.update(n, a);
  });
  const p = n[il], v = ve(!!p && !window.MotionHandoffIsComplete && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, p)));
  return kd(() => {
    u && (u.updateFeatures(), zi.render(u.render), v.current && u.animationState && u.animationState.animateChanges());
  }), Fe(() => {
    u && (!v.current && u.animationState && u.animationState.animateChanges(), v.current = !1, Zs || (Zs = !0, queueMicrotask(Ld)));
  }), u;
}
function Ld() {
  window.MotionHandoffIsComplete = !0;
}
function Nd(e, t, n, r) {
  const { layoutId: i, layout: o, drag: s, dragConstraints: l, layoutScroll: a, layoutRoot: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : al(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!s || l && Pt(l),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: r,
    layoutScroll: a,
    layoutRoot: c
  });
}
function al(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : al(e.parent);
}
function Vd(e, t, n) {
  return ga(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Pt(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function dn(e) {
  return typeof e == "string" || Array.isArray(e);
}
function fn(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Gi = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Qi = ["initial", ...Gi];
function yr(e) {
  return fn(e.animate) || Qi.some((t) => dn(e[t]));
}
function ll(e) {
  return !!(yr(e) || e.variants);
}
function Fd(e, t) {
  if (yr(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || dn(n) ? n : void 0,
      animate: dn(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function zd(e) {
  const { initial: t, animate: n } = Fd(e, oe(gr));
  return vn(() => ({ initial: t, animate: n }), [Js(t), Js(n)]);
}
function Js(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const qs = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, It = {};
for (const e in qs)
  It[e] = {
    isEnabled: (t) => qs[e].some((n) => !!t[n])
  };
function Gd(e) {
  for (const t in e)
    It[t] = {
      ...It[t],
      ...e[t]
    };
}
const cl = Nt({}), Qd = Symbol.for("motionComponentSymbol"), $ = (e) => e;
let Gt = $, _e = $;
process.env.NODE_ENV !== "production" && (Gt = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, _e = (e, t) => {
  if (!e)
    throw new Error(t);
});
function Ud({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
  e && Gd(e);
  function o(l, a) {
    let c;
    const h = {
      ...oe(nl),
      ...l,
      layoutId: Hd(l)
    }, { isStatic: u } = h, d = zd(l), p = r(l, u);
    if (!u && Fi) {
      Wd(h, e);
      const v = Yd(h);
      c = v.MeasureLayout, d.visualElement = Id(i, p, h, t, v.ProjectionNode);
    }
    return m.jsxs(gr.Provider, { value: d, children: [c && d.visualElement ? m.jsx(c, { visualElement: d.visualElement, ...h }) : null, n(i, l, Vd(p, d.visualElement, a), p, u, d.visualElement)] });
  }
  const s = ru(o);
  return s[Qd] = i, s;
}
function Hd({ layoutId: e }) {
  const t = oe(cl).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Wd(e, t) {
  const n = oe(rl).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Gt(!1, r) : _e(!1, r);
  }
}
function Yd(e) {
  const { drag: t, layout: n } = It;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
function Kd(e) {
  function t(r, i = {}) {
    return Ud(e(r, i));
  }
  if (typeof Proxy > "u")
    return t;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i))
  });
}
const Xd = [
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
  "view"
];
function Ui(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Xd.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
const er = {};
function Zd(e) {
  Object.assign(er, e);
}
const bn = [
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
  "skewY"
], tt = new Set(bn);
function ul(e, { layout: t, layoutId: n }) {
  return tt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!er[e] || e === "opacity");
}
const te = (e) => !!(e && e.getVelocity), hl = (e, t) => t && typeof e == "number" ? t.transform(e) : e, $e = (e, t, n) => n > t ? t : n < e ? e : n, Qt = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, tn = {
  ...Qt,
  transform: (e) => $e(0, 1, e)
}, In = {
  ...Qt,
  default: 1
}, nn = (e) => Math.round(e * 1e5) / 1e5, Hi = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu, Jd = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, qd = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function Pn(e) {
  return typeof e == "string";
}
function _d(e) {
  return e == null;
}
const En = (e) => ({
  test: (t) => Pn(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Ke = En("deg"), Ce = En("%"), R = En("px"), $d = En("vh"), ef = En("vw"), _s = {
  ...Ce,
  parse: (e) => Ce.parse(e) / 100,
  transform: (e) => Ce.transform(e * 100)
}, $s = {
  ...Qt,
  transform: Math.round
}, Wi = {
  // Border props
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
  // Positioning props
  width: R,
  maxWidth: R,
  height: R,
  maxHeight: R,
  size: R,
  top: R,
  right: R,
  bottom: R,
  left: R,
  // Spacing props
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
  // Transform props
  rotate: Ke,
  rotateX: Ke,
  rotateY: Ke,
  rotateZ: Ke,
  scale: In,
  scaleX: In,
  scaleY: In,
  scaleZ: In,
  skew: Ke,
  skewX: Ke,
  skewY: Ke,
  distance: R,
  translateX: R,
  translateY: R,
  translateZ: R,
  x: R,
  y: R,
  z: R,
  perspective: R,
  transformPerspective: R,
  opacity: tn,
  originX: _s,
  originY: _s,
  originZ: R,
  // Misc
  zIndex: $s,
  backgroundPositionX: R,
  backgroundPositionY: R,
  // SVG
  fillOpacity: tn,
  strokeOpacity: tn,
  numOctaves: $s
}, tf = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, nf = bn.length;
function rf(e, t, n) {
  let r = "", i = !0;
  for (let o = 0; o < nf; o++) {
    const s = bn[o], l = e[s];
    if (l === void 0)
      continue;
    let a = !0;
    if (typeof l == "number" ? a = l === (s.startsWith("scale") ? 1 : 0) : a = parseFloat(l) === 0, !a || n) {
      const c = hl(l, Wi[s]);
      if (!a) {
        i = !1;
        const h = tf[s] || s;
        r += `${h}(${c}) `;
      }
      n && (t[s] = c);
    }
  }
  return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
const dl = (e) => (t) => typeof t == "string" && t.startsWith(e), fl = dl("--"), sf = dl("var(--"), Yi = (e) => sf(e) ? of.test(e.split("/*")[0].trim()) : !1, of = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ki(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1, l = !1;
  for (const a in t) {
    const c = t[a];
    if (tt.has(a)) {
      s = !0;
      continue;
    } else if (fl(a)) {
      i[a] = c;
      continue;
    } else {
      const h = hl(c, Wi[a]);
      a.startsWith("origin") ? (l = !0, o[a] = h) : r[a] = h;
    }
  }
  if (t.transform || (s || n ? r.transform = rf(t, e.transform, n) : r.transform && (r.transform = "none")), l) {
    const { originX: a = "50%", originY: c = "50%", originZ: h = 0 } = o;
    r.transformOrigin = `${a} ${c} ${h}`;
  }
}
const Xi = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function pl(e, t, n) {
  for (const r in t)
    !te(t[r]) && !ul(r, n) && (e[r] = t[r]);
}
function af({ transformTemplate: e }, t) {
  return vn(() => {
    const n = Xi();
    return Ki(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function lf(e, t) {
  const n = e.style || {}, r = {};
  return pl(r, n, e), Object.assign(r, af(e, t)), r;
}
function cf(e, t) {
  const n = {}, r = lf(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const uf = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
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
  "viewport"
]);
function tr(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || uf.has(e);
}
let ml = (e) => !tr(e);
function hf(e) {
  e && (ml = (t) => t.startsWith("on") ? !tr(t) : e(t));
}
try {
  hf(require("@emotion/is-prop-valid").default);
} catch {
}
function df(e, t, n) {
  const r = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (ml(i) || n === !0 && tr(i) || !t && !tr(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
  return r;
}
function eo(e, t, n) {
  return typeof e == "string" ? e : R.transform(t + n * e);
}
function ff(e, t, n) {
  const r = eo(t, e.x, e.width), i = eo(n, e.y, e.height);
  return `${r} ${i}`;
}
const pf = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, mf = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function gf(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? pf : mf;
  e[o.offset] = R.transform(-r);
  const s = R.transform(t), l = R.transform(n);
  e[o.array] = `${s} ${l}`;
}
function Zi(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: i,
  originY: o,
  pathLength: s,
  pathSpacing: l = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, h, u) {
  if (Ki(e, c, u), h) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: p, dimensions: v } = e;
  d.transform && (v && (p.transform = d.transform), delete d.transform), v && (i !== void 0 || o !== void 0 || p.transform) && (p.transformOrigin = ff(v, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), s !== void 0 && gf(d, s, l, a, !1);
}
const gl = () => ({
  ...Xi(),
  attrs: {}
}), Ji = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function vf(e, t, n, r) {
  const i = vn(() => {
    const o = gl();
    return Zi(o, t, Ji(r), e.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [t]);
  if (e.style) {
    const o = {};
    pl(o, e.style, e), i.style = { ...o, ...i.style };
  }
  return i;
}
function yf(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (Ui(n) ? vf : cf)(r, o, s, n), c = df(r, typeof n == "string", e), h = n !== va ? { ...c, ...a, ref: i } : {}, { children: u } = r, d = vn(() => te(u) ? u.get() : u, [u]);
    return ma(n, {
      ...h,
      children: d
    });
  };
}
function vl(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n)
    e.style.setProperty(o, n[o]);
}
const yl = /* @__PURE__ */ new Set([
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
  "lengthAdjust"
]);
function Al(e, t, n, r) {
  vl(e, t, void 0, r);
  for (const i in t.attrs)
    e.setAttribute(yl.has(i) ? i : vr(i), t.attrs[i]);
}
function qi(e, t, n) {
  var r;
  const { style: i } = e, o = {};
  for (const s in i)
    (te(i[s]) || t.style && te(t.style[s]) || ul(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
  return n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), o;
}
function xl(e, t, n) {
  const r = qi(e, t, n);
  for (const i in e)
    if (te(e[i]) || te(t[i])) {
      const o = bn.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[o] = e[i];
    }
  return r;
}
function to(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function _i(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = to(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, o] = to(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function Af(e) {
  const t = ve(null);
  return t.current === null && (t.current = e()), t.current;
}
const hi = (e) => Array.isArray(e), xf = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), wf = (e) => hi(e) ? e[e.length - 1] || 0 : e;
function Hn(e) {
  const t = te(e) ? e.get() : e;
  return xf(t) ? t.toValue() : t;
}
const wl = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function bl(e) {
  if (tt.has(e))
    return "transform";
  if (wl.has(e))
    return vr(e);
}
function Ar(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function xr(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function bf({ applyWillChange: e = !1, scrapeMotionValuesFromProps: t, createRenderState: n, onMount: r }, i, o, s, l) {
  const a = {
    latestValues: Ef(i, o, s, l ? !1 : e, t),
    renderState: n()
  };
  return r && (a.mount = (c) => r(i, c, a)), a;
}
const Pl = (e) => (t, n) => {
  const r = oe(gr), i = oe(Vi), o = () => bf(e, t, r, i, n);
  return n ? o() : Af(o);
};
function Pf(e, t) {
  const n = bl(t);
  n && Ar(e, n);
}
function no(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let i = 0; i < r.length; i++) {
    const o = _i(e, r[i]);
    if (o) {
      const { transitionEnd: s, transition: l, ...a } = o;
      n(a, s);
    }
  }
}
function Ef(e, t, n, r, i) {
  var o;
  const s = {}, l = [], a = r && ((o = e.style) === null || o === void 0 ? void 0 : o.willChange) === void 0, c = i(e, {});
  for (const A in c)
    s[A] = Hn(c[A]);
  let { initial: h, animate: u } = e;
  const d = yr(e), p = ll(e);
  t && p && !d && e.inherit !== !1 && (h === void 0 && (h = t.initial), u === void 0 && (u = t.animate));
  let v = n ? n.initial === !1 : !1;
  v = v || h === !1;
  const y = v ? u : h;
  return y && typeof y != "boolean" && !fn(y) && no(e, y, (A, x) => {
    for (const g in A) {
      let w = A[g];
      if (Array.isArray(w)) {
        const b = v ? w.length - 1 : 0;
        w = w[b];
      }
      w !== null && (s[g] = w);
    }
    for (const g in x)
      s[g] = x[g];
  }), a && (u && h !== !1 && !fn(u) && no(e, u, (A) => {
    for (const x in A)
      Pf(l, x);
  }), l.length && (s.willChange = l.join(","))), s;
}
const { schedule: F, cancel: ze, state: _, steps: Vr } = sl(typeof requestAnimationFrame < "u" ? requestAnimationFrame : $, !0), Sf = {
  useVisualState: Pl({
    scrapeMotionValuesFromProps: xl,
    createRenderState: gl,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      F.read(() => {
        try {
          n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), F.render(() => {
        Zi(n, r, Ji(t.tagName), e.transformTemplate), Al(t, n);
      });
    }
  })
}, Cf = {
  useVisualState: Pl({
    applyWillChange: !0,
    scrapeMotionValuesFromProps: qi,
    createRenderState: Xi
  })
};
function Tf(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...Ui(e) ? Sf : Cf,
    preloadedFeatures: n,
    useRender: yf(t),
    createVisualElement: r,
    Component: e
  };
}
function Oe(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const El = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function wr(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const Df = (e) => (t) => El(t) && e(t, wr(t));
function Ie(e, t, n, r) {
  return Oe(e, t, Df(n), r);
}
const Rf = (e, t) => (n) => t(e(n)), Le = (...e) => e.reduce(Rf);
function Sl(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const ro = Sl("dragHorizontal"), io = Sl("dragVertical");
function Cl(e) {
  let t = !1;
  if (e === "y")
    t = io();
  else if (e === "x")
    t = ro();
  else {
    const n = ro(), r = io();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function Tl() {
  const e = Cl(!0);
  return e ? (e(), !1) : !0;
}
class nt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function so(e, t) {
  const n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd", i = (o, s) => {
    if (o.pointerType === "touch" || Tl())
      return;
    const l = e.getProps();
    e.animationState && l.whileHover && e.animationState.setActive("whileHover", t);
    const a = l[r];
    a && F.postRender(() => a(o, s));
  };
  return Ie(e.current, n, i, {
    passive: !e.getProps()[r]
  });
}
class kf extends nt {
  mount() {
    this.unmount = Le(so(this.node, !0), so(this.node, !1));
  }
  unmount() {
  }
}
class Mf extends nt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Le(Oe(this.node.current, "focus", () => this.onFocus()), Oe(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const Dl = (e, t) => t ? e === t ? !0 : Dl(e, t.parentElement) : !1;
function Fr(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, wr(n));
}
class Of extends nt {
  constructor() {
    super(...arguments), this.removeStartListeners = $, this.removeEndListeners = $, this.removeAccessibleListeners = $, this.startPointerPress = (t, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const r = this.node.getProps(), o = Ie(window, "pointerup", (l, a) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: c, onTapCancel: h, globalTapTarget: u } = this.node.getProps(), d = !u && !Dl(this.node.current, l.target) ? h : c;
        d && F.update(() => d(l, a));
      }, {
        passive: !(r.onTap || r.onPointerUp)
      }), s = Ie(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
        passive: !(r.onTapCancel || r.onPointerCancel)
      });
      this.removeEndListeners = Le(o, s), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (o) => {
        if (o.key !== "Enter" || this.isPressing)
          return;
        const s = (l) => {
          l.key !== "Enter" || !this.checkPressEnd() || Fr("up", (a, c) => {
            const { onTap: h } = this.node.getProps();
            h && F.postRender(() => h(a, c));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Oe(this.node.current, "keyup", s), Fr("down", (l, a) => {
          this.startPress(l, a);
        });
      }, n = Oe(this.node.current, "keydown", t), r = () => {
        this.isPressing && Fr("cancel", (o, s) => this.cancelPress(o, s));
      }, i = Oe(this.node.current, "blur", r);
      this.removeAccessibleListeners = Le(n, i);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && F.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Tl();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && F.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = Ie(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(t.onTapStart || t.onPointerStart)
    }), r = Oe(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Le(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const di = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap(), jf = (e) => {
  const t = di.get(e.target);
  t && t(e);
}, Bf = (e) => {
  e.forEach(jf);
};
function If({ root: e, ...t }) {
  const n = e || document;
  zr.has(n) || zr.set(n, {});
  const r = zr.get(n), i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Bf, { root: e, ...t })), r[i];
}
function Lf(e, t, n) {
  const r = If(t);
  return di.set(e, n), r.observe(e), () => {
    di.delete(e), r.unobserve(e);
  };
}
const Nf = {
  some: 0,
  all: 1
};
class Vf extends nt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: o } = t, s = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : Nf[i]
    }, l = (a) => {
      const { isIntersecting: c } = a;
      if (this.isInView === c || (this.isInView = c, o && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: h, onViewportLeave: u } = this.node.getProps(), d = c ? h : u;
      d && d(a);
    };
    return Lf(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Ff(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Ff({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const zf = {
  inView: {
    Feature: Vf
  },
  tap: {
    Feature: Of
  },
  focus: {
    Feature: Mf
  },
  hover: {
    Feature: kf
  }
};
function Rl(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function br(e, t, n) {
  const r = e.getProps();
  return _i(r, t, n !== void 0 ? n : r.custom, e);
}
const Te = (e) => e * 1e3, Ne = (e) => e / 1e3, Gf = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Qf = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Uf = {
  type: "keyframes",
  duration: 0.8
}, Hf = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Wf = (e, { keyframes: t }) => t.length > 2 ? Uf : tt.has(e) ? e.startsWith("scale") ? Qf(t[1]) : Gf : Hf;
function Yf({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: l, from: a, elapsed: c, ...h }) {
  return !!Object.keys(h).length;
}
function $i(e, t) {
  return e[t] || e.default || e;
}
const Kf = (e) => e !== null;
function Pr(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Kf), o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const kl = (e) => /^0[^.\s]+$/u.test(e);
function Xf(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || kl(e) : !0;
}
const Ml = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Zf = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Jf(e) {
  const t = Zf.exec(e);
  if (!t)
    return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
const qf = 4;
function Ol(e, t, n = 1) {
  _e(n <= qf, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, i] = Jf(e);
  if (!r)
    return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Ml(s) ? parseFloat(s) : s;
  }
  return Yi(i) ? Ol(i, t, n + 1) : i;
}
const _f = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), oo = (e) => e === Qt || e === R, ao = (e, t) => parseFloat(e.split(", ")[t]), lo = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const i = r.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return ao(i[1], t);
  {
    const o = r.match(/^matrix\((.+)\)$/u);
    return o ? ao(o[1], e) : 0;
  }
}, $f = /* @__PURE__ */ new Set(["x", "y", "z"]), ep = bn.filter((e) => !$f.has(e));
function tp(e) {
  const t = [];
  return ep.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Lt = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: lo(4, 13),
  y: lo(5, 14)
};
Lt.translateX = Lt.x;
Lt.translateY = Lt.y;
const jl = (e) => (t) => t.test(e), np = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Bl = [Qt, R, Ce, Ke, ef, $d, np], co = (e) => Bl.find(jl(e)), dt = /* @__PURE__ */ new Set();
let fi = !1, pi = !1;
function Il() {
  if (pi) {
    const e = Array.from(dt).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const i = tp(r);
      i.length && (n.set(r, i), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const i = n.get(r);
      i && i.forEach(([o, s]) => {
        var l;
        (l = r.getValue(o)) === null || l === void 0 || l.set(s);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  pi = !1, fi = !1, dt.forEach((e) => e.complete()), dt.clear();
}
function Ll() {
  dt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (pi = !0);
  });
}
function rp() {
  Ll(), Il();
}
class es {
  constructor(t, n, r, i, o, s = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (dt.add(this), fi || (fi = !0, F.read(Ll), F.resolveKeyframes(Il))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(), l = t[t.length - 1];
          if (s !== void 0)
            t[0] = s;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = l), i && s === void 0 && i.set(t[0]);
        } else
          t[o] = t[o - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), dt.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, dt.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const ts = (e, t) => (n) => !!(Pn(n) && qd.test(n) && n.startsWith(e) || t && !_d(n) && Object.prototype.hasOwnProperty.call(n, t)), Nl = (e, t, n) => (r) => {
  if (!Pn(r))
    return r;
  const [i, o, s, l] = r.match(Hi);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(o),
    [n]: parseFloat(s),
    alpha: l !== void 0 ? parseFloat(l) : 1
  };
}, ip = (e) => $e(0, 255, e), Gr = {
  ...Qt,
  transform: (e) => Math.round(ip(e))
}, ut = {
  test: ts("rgb", "red"),
  parse: Nl("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Gr.transform(e) + ", " + Gr.transform(t) + ", " + Gr.transform(n) + ", " + nn(tn.transform(r)) + ")"
};
function sp(e) {
  let t = "", n = "", r = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const mi = {
  test: ts("#"),
  parse: sp,
  transform: ut.transform
}, Et = {
  test: ts("hsl", "hue"),
  parse: Nl("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ce.transform(nn(t)) + ", " + Ce.transform(nn(n)) + ", " + nn(tn.transform(r)) + ")"
}, ee = {
  test: (e) => ut.test(e) || mi.test(e) || Et.test(e),
  parse: (e) => ut.test(e) ? ut.parse(e) : Et.test(e) ? Et.parse(e) : mi.parse(e),
  transform: (e) => Pn(e) ? e : e.hasOwnProperty("red") ? ut.transform(e) : Et.transform(e)
};
function op(e) {
  var t, n;
  return isNaN(e) && Pn(e) && (((t = e.match(Hi)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Jd)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Vl = "number", Fl = "color", ap = "var", lp = "var(", uo = "${}", cp = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function pn(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const l = t.replace(cp, (a) => (ee.test(a) ? (r.color.push(o), i.push(Fl), n.push(ee.parse(a))) : a.startsWith(lp) ? (r.var.push(o), i.push(ap), n.push(a)) : (r.number.push(o), i.push(Vl), n.push(parseFloat(a))), ++o, uo)).split(uo);
  return { values: n, split: l, indexes: r, types: i };
}
function zl(e) {
  return pn(e).values;
}
function Gl(e) {
  const { split: t, types: n } = pn(e), r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (o += t[s], i[s] !== void 0) {
        const l = n[s];
        l === Vl ? o += nn(i[s]) : l === Fl ? o += ee.transform(i[s]) : o += i[s];
      }
    return o;
  };
}
const up = (e) => typeof e == "number" ? 0 : e;
function hp(e) {
  const t = zl(e);
  return Gl(e)(t.map(up));
}
const et = {
  test: op,
  parse: zl,
  createTransformer: Gl,
  getAnimatableNone: hp
}, dp = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function fp(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Hi) || [];
  if (!r)
    return e;
  const i = n.replace(r, "");
  let o = dp.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const pp = /\b([a-z-]*)\(.*?\)/gu, gi = {
  ...et,
  getAnimatableNone: (e) => {
    const t = e.match(pp);
    return t ? t.map(fp).join(" ") : e;
  }
}, mp = {
  ...Wi,
  // Color props
  color: ee,
  backgroundColor: ee,
  outlineColor: ee,
  fill: ee,
  stroke: ee,
  // Border props
  borderColor: ee,
  borderTopColor: ee,
  borderRightColor: ee,
  borderBottomColor: ee,
  borderLeftColor: ee,
  filter: gi,
  WebkitFilter: gi
}, ns = (e) => mp[e];
function Ql(e, t) {
  let n = ns(e);
  return n !== gi && (n = et), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const gp = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function vp(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !gp.has(o) && pn(o).values.length && (i = e[r]), r++;
  }
  if (i && n)
    for (const o of t)
      e[o] = Ql(n, i);
}
class Ul extends es {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      let c = t[a];
      if (typeof c == "string" && (c = c.trim(), Yi(c))) {
        const h = Ol(c, n.current);
        h !== void 0 && (t[a] = h), a === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if (this.resolveNoneKeyframes(), !_f.has(r) || t.length !== 2)
      return;
    const [i, o] = t, s = co(i), l = co(o);
    if (s !== l)
      if (oo(s) && oo(l))
        for (let a = 0; a < t.length; a++) {
          const c = t[a];
          typeof c == "string" && (t[a] = parseFloat(c));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let i = 0; i < t.length; i++)
      Xf(t[i]) && r.push(i);
    r.length && vp(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Lt[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current)
      return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1, l = i[s];
    i[s] = Lt[r](n.measureViewportBox(), window.getComputedStyle(n.current)), l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([a, c]) => {
      n.getValue(a).set(c);
    }), this.resolveNoneKeyframes();
  }
}
function Hl(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
let Wn;
function yp() {
  Wn = void 0;
}
const Ve = {
  now: () => (Wn === void 0 && Ve.set(_.isProcessing || Od.useManualTiming ? _.timestamp : performance.now()), Wn),
  set: (e) => {
    Wn = e, queueMicrotask(yp);
  }
}, ho = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(et.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function Ap(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function xp(e, t, n, r) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const o = e[e.length - 1], s = ho(i, t), l = ho(o, t);
  return Gt(s === l, `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`), !s || !l ? !1 : Ap(e) || n === "spring" && r;
}
const wp = 40;
class Wl {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: s = "loop", ...l }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Ve.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: o,
      repeatType: s,
      ...l
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > wp ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && rp(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Ve.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: i, velocity: o, delay: s, onComplete: l, onUpdate: a, isGenerator: c } = this.options;
    if (!c && !xp(t, r, i, o))
      if (s)
        this.options.duration = 0;
      else {
        a == null || a(Pr(t, this.options, n)), l == null || l(), this.resolveFinishedPromise();
        return;
      }
    const h = this.initPlayback(t, n);
    h !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...h
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function Yl(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const bp = 5;
function Kl(e, t, n) {
  const r = Math.max(t - bp, 0);
  return Yl(n - e(r), t - r);
}
const Qr = 1e-3, Pp = 0.01, fo = 10, Ep = 0.05, Sp = 1;
function Cp({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let i, o;
  Gt(e <= Te(fo), "Spring duration must be 10 seconds or less");
  let s = 1 - t;
  s = $e(Ep, Sp, s), e = $e(Pp, fo, Ne(e)), s < 1 ? (i = (c) => {
    const h = c * s, u = h * e, d = h - n, p = vi(c, s), v = Math.exp(-u);
    return Qr - d / p * v;
  }, o = (c) => {
    const u = c * s * e, d = u * n + n, p = Math.pow(s, 2) * Math.pow(c, 2) * e, v = Math.exp(-u), y = vi(Math.pow(c, 2), s);
    return (-i(c) + Qr > 0 ? -1 : 1) * ((d - p) * v) / y;
  }) : (i = (c) => {
    const h = Math.exp(-c * e), u = (c - n) * e + 1;
    return -Qr + h * u;
  }, o = (c) => {
    const h = Math.exp(-c * e), u = (n - c) * (e * e);
    return h * u;
  });
  const l = 5 / e, a = Dp(i, o, l);
  if (e = Te(e), isNaN(a))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const c = Math.pow(a, 2) * r;
    return {
      stiffness: c,
      damping: s * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
const Tp = 12;
function Dp(e, t, n) {
  let r = n;
  for (let i = 1; i < Tp; i++)
    r = r - e(r) / t(r);
  return r;
}
function vi(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Rp = ["duration", "bounce"], kp = ["stiffness", "damping", "mass"];
function po(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Mp(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!po(e, kp) && po(e, Rp)) {
    const n = Cp(e);
    t = {
      ...t,
      ...n,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Xl({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0], o = e[e.length - 1], s = { done: !1, value: i }, { stiffness: l, damping: a, mass: c, duration: h, velocity: u, isResolvedFromDuration: d } = Mp({
    ...r,
    velocity: -Ne(r.velocity || 0)
  }), p = u || 0, v = a / (2 * Math.sqrt(l * c)), y = o - i, A = Ne(Math.sqrt(l / c)), x = Math.abs(y) < 5;
  n || (n = x ? 0.01 : 2), t || (t = x ? 5e-3 : 0.5);
  let g;
  if (v < 1) {
    const w = vi(A, v);
    g = (b) => {
      const C = Math.exp(-v * A * b);
      return o - C * ((p + v * A * y) / w * Math.sin(w * b) + y * Math.cos(w * b));
    };
  } else if (v === 1)
    g = (w) => o - Math.exp(-A * w) * (y + (p + A * y) * w);
  else {
    const w = A * Math.sqrt(v * v - 1);
    g = (b) => {
      const C = Math.exp(-v * A * b), T = Math.min(w * b, 300);
      return o - C * ((p + v * A * y) * Math.sinh(T) + w * y * Math.cosh(T)) / w;
    };
  }
  return {
    calculatedDuration: d && h || null,
    next: (w) => {
      const b = g(w);
      if (d)
        s.done = w >= h;
      else {
        let C = 0;
        v < 1 && (C = w === 0 ? Te(p) : Kl(g, w, b));
        const T = Math.abs(C) <= n, D = Math.abs(o - b) <= t;
        s.done = T && D;
      }
      return s.value = s.done ? o : b, s;
    }
  };
}
function mo({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: l, max: a, restDelta: c = 0.5, restSpeed: h }) {
  const u = e[0], d = {
    done: !1,
    value: u
  }, p = (k) => l !== void 0 && k < l || a !== void 0 && k > a, v = (k) => l === void 0 ? a : a === void 0 || Math.abs(l - k) < Math.abs(a - k) ? l : a;
  let y = n * t;
  const A = u + y, x = s === void 0 ? A : s(A);
  x !== A && (y = x - u);
  const g = (k) => -y * Math.exp(-k / r), w = (k) => x + g(k), b = (k) => {
    const Q = g(k), K = w(k);
    d.done = Math.abs(Q) <= c, d.value = d.done ? x : K;
  };
  let C, T;
  const D = (k) => {
    p(d.value) && (C = k, T = Xl({
      keyframes: [d.value, v(d.value)],
      velocity: Kl(w, k, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: c,
      restSpeed: h
    }));
  };
  return D(0), {
    calculatedDuration: null,
    next: (k) => {
      let Q = !1;
      return !T && C === void 0 && (Q = !0, b(k), D(k)), C !== void 0 && k >= C ? T.next(k - C) : (!Q && b(k), d);
    }
  };
}
const Zl = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Op = 1e-7, jp = 12;
function Bp(e, t, n, r, i) {
  let o, s, l = 0;
  do
    s = t + (n - t) / 2, o = Zl(s, r, i) - e, o > 0 ? n = s : t = s;
  while (Math.abs(o) > Op && ++l < jp);
  return s;
}
function Sn(e, t, n, r) {
  if (e === t && n === r)
    return $;
  const i = (o) => Bp(o, 0, 1, e, n);
  return (o) => o === 0 || o === 1 ? o : Zl(i(o), t, r);
}
const Ip = Sn(0.42, 0, 1, 1), Lp = Sn(0, 0, 0.58, 1), Jl = Sn(0.42, 0, 0.58, 1), Np = (e) => Array.isArray(e) && typeof e[0] != "number", ql = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, _l = (e) => (t) => 1 - e(1 - t), rs = (e) => 1 - Math.sin(Math.acos(e)), $l = _l(rs), Vp = ql(rs), ec = Sn(0.33, 1.53, 0.69, 0.99), is = _l(ec), Fp = ql(is), zp = (e) => (e *= 2) < 1 ? 0.5 * is(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), go = {
  linear: $,
  easeIn: Ip,
  easeInOut: Jl,
  easeOut: Lp,
  circIn: rs,
  circInOut: Vp,
  circOut: $l,
  backIn: is,
  backInOut: Fp,
  backOut: ec,
  anticipate: zp
}, vo = (e) => {
  if (Array.isArray(e)) {
    _e(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, i] = e;
    return Sn(t, n, r, i);
  } else if (typeof e == "string")
    return _e(go[e] !== void 0, `Invalid easing type '${e}'`), go[e];
  return e;
}, mn = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, H = (e, t, n) => e + (t - e) * n;
function Ur(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Gp({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, o = 0, s = 0;
  if (!t)
    i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - l;
    i = Ur(a, l, e + 1 / 3), o = Ur(a, l, e), s = Ur(a, l, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r
  };
}
function nr(e, t) {
  return (n) => n > 0 ? t : e;
}
const Hr = (e, t, n) => {
  const r = e * e, i = n * (t * t - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
}, Qp = [mi, ut, Et], Up = (e) => Qp.find((t) => t.test(e));
function yo(e) {
  const t = Up(e);
  if (Gt(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === Et && (n = Gp(n)), n;
}
const Ao = (e, t) => {
  const n = yo(e), r = yo(t);
  if (!n || !r)
    return nr(e, t);
  const i = { ...n };
  return (o) => (i.red = Hr(n.red, r.red, o), i.green = Hr(n.green, r.green, o), i.blue = Hr(n.blue, r.blue, o), i.alpha = H(n.alpha, r.alpha, o), ut.transform(i));
}, yi = /* @__PURE__ */ new Set(["none", "hidden"]);
function Hp(e, t) {
  return yi.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function Wp(e, t) {
  return (n) => H(e, t, n);
}
function ss(e) {
  return typeof e == "number" ? Wp : typeof e == "string" ? Yi(e) ? nr : ee.test(e) ? Ao : Xp : Array.isArray(e) ? tc : typeof e == "object" ? ee.test(e) ? Ao : Yp : nr;
}
function tc(e, t) {
  const n = [...e], r = n.length, i = e.map((o, s) => ss(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++)
      n[s] = i[s](o);
    return n;
  };
}
function Yp(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = ss(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r)
      n[o] = r[o](i);
    return n;
  };
}
function Kp(e, t) {
  var n;
  const r = [], i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o], l = e.indexes[s][i[s]], a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    r[o] = a, i[s]++;
  }
  return r;
}
const Xp = (e, t) => {
  const n = et.createTransformer(t), r = pn(e), i = pn(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? yi.has(e) && !i.values.length || yi.has(t) && !r.values.length ? Hp(e, t) : Le(tc(Kp(r, i), i.values), n) : (Gt(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), nr(e, t));
};
function nc(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? H(e, t, n) : ss(e)(e, t);
}
function Zp(e, t, n) {
  const r = [], i = n || nc, o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || $ : t;
      l = Le(a, l);
    }
    r.push(l);
  }
  return r;
}
function Jp(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if (_e(o === t.length, "Both input and output ranges must be the same length"), o === 1)
    return () => t[0];
  if (o === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const s = Zp(t, r, i), l = s.length, a = (c) => {
    let h = 0;
    if (l > 1)
      for (; h < e.length - 2 && !(c < e[h + 1]); h++)
        ;
    const u = mn(e[h], e[h + 1], c);
    return s[h](u);
  };
  return n ? (c) => a($e(e[0], e[o - 1], c)) : a;
}
function qp(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = mn(0, t, r);
    e.push(H(n, 1, i));
  }
}
function _p(e) {
  const t = [0];
  return qp(t, e.length - 1), t;
}
function $p(e, t) {
  return e.map((n) => n * t);
}
function em(e, t) {
  return e.map(() => t || Jl).splice(0, e.length - 1);
}
function rr({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = Np(r) ? r.map(vo) : vo(r), o = {
    done: !1,
    value: t[0]
  }, s = $p(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : _p(t),
    e
  ), l = Jp(s, t, {
    ease: Array.isArray(i) ? i : em(t, i)
  });
  return {
    calculatedDuration: e,
    next: (a) => (o.value = l(a), o.done = a >= e, o)
  };
}
const xo = 2e4;
function tm(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < xo; )
    t += n, r = e.next(t);
  return t >= xo ? 1 / 0 : t;
}
const nm = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => F.update(t, !0),
    stop: () => ze(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => _.isProcessing ? _.timestamp : Ve.now()
  };
}, rm = {
  decay: mo,
  inertia: mo,
  tween: rr,
  keyframes: rr,
  spring: Xl
}, im = (e) => e / 100;
class os extends Wl {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: a } = this.options;
      a && a();
    };
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options, s = (i == null ? void 0 : i.KeyframeResolver) || es, l = (a, c) => this.onKeyframesResolved(a, c);
    this.resolver = new s(o, l, n, r, i), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: o, velocity: s = 0 } = this.options, l = rm[n] || rr;
    let a, c;
    l !== rr && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && _e(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), a = Le(im, nc(t[0], t[1])), t = [0, 100]);
    const h = l({ ...this.options, keyframes: t });
    o === "mirror" && (c = l({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -s
    })), h.calculatedDuration === null && (h.calculatedDuration = tm(h));
    const { calculatedDuration: u } = h, d = u + i, p = d * (r + 1) - i;
    return {
      generator: h,
      mirroredGenerator: c,
      mapPercentToKeyframes: a,
      calculatedDuration: u,
      resolvedDuration: d,
      totalDuration: p
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: k } = this.options;
      return { done: !0, value: k[k.length - 1] };
    }
    const { finalKeyframe: i, generator: o, mirroredGenerator: s, mapPercentToKeyframes: l, keyframes: a, calculatedDuration: c, totalDuration: h, resolvedDuration: u } = r;
    if (this.startTime === null)
      return o.next(0);
    const { delay: d, repeat: p, repeatType: v, repeatDelay: y, onUpdate: A } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - h / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const x = this.currentTime - d * (this.speed >= 0 ? 1 : -1), g = this.speed >= 0 ? x < 0 : x > h;
    this.currentTime = Math.max(x, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = h);
    let w = this.currentTime, b = o;
    if (p) {
      const k = Math.min(this.currentTime, h) / u;
      let Q = Math.floor(k), K = k % 1;
      !K && k >= 1 && (K = 1), K === 1 && Q--, Q = Math.min(Q, p + 1), !!(Q % 2) && (v === "reverse" ? (K = 1 - K, y && (K -= y / u)) : v === "mirror" && (b = s)), w = $e(0, 1, K) * u;
    }
    const C = g ? { done: !1, value: a[0] } : b.next(w);
    l && (C.value = l(C.value));
    let { done: T } = C;
    !g && c !== null && (T = this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
    const D = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
    return D && i !== void 0 && (C.value = Pr(a, this.options, i)), A && A(C.value), D && this.finish(), C;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Ne(t.calculatedDuration) : 0;
  }
  get time() {
    return Ne(this.currentTime);
  }
  set time(t) {
    t = Te(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = Ne(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = nm, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
}
const rc = (e) => Array.isArray(e) && typeof e[0] == "number";
function ic(e) {
  return !!(!e || typeof e == "string" && e in as || rc(e) || Array.isArray(e) && e.every(ic));
}
const _t = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, as = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: _t([0, 0.65, 0.55, 1]),
  circOut: _t([0.55, 0, 1, 0.45]),
  backIn: _t([0.31, 0.01, 0.66, -0.59]),
  backOut: _t([0.33, 1.53, 0.69, 0.99])
};
function sm(e) {
  return sc(e) || as.easeOut;
}
function sc(e) {
  if (e)
    return rc(e) ? _t(e) : Array.isArray(e) ? e.map(sm) : as[e];
}
function om(e, t, n, { delay: r = 0, duration: i = 300, repeat: o = 0, repeatType: s = "loop", ease: l, times: a } = {}) {
  const c = { [t]: n };
  a && (c.offset = a);
  const h = sc(l);
  return Array.isArray(h) && (c.easing = h), e.animate(c, {
    delay: r,
    duration: i,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: o + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  });
}
const am = Hl(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ir = 10, lm = 2e4;
function cm(e) {
  return e.type === "spring" || !ic(e.ease);
}
function um(e, t) {
  const n = new os({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < lm; )
    r = n.sample(o), i.push(r.value), o += ir;
  return {
    times: void 0,
    keyframes: i,
    duration: o - ir,
    ease: "linear"
  };
}
class wo extends Wl {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    this.resolver = new Ul(o, (s, l) => this.onKeyframesResolved(s, l), n, r, i), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let { duration: i = 300, times: o, ease: s, type: l, motionValue: a, name: c, startTime: h } = this.options;
    if (!(!((r = a.owner) === null || r === void 0) && r.current))
      return !1;
    if (cm(this.options)) {
      const { onComplete: d, onUpdate: p, motionValue: v, element: y, ...A } = this.options, x = um(t, A);
      t = x.keyframes, t.length === 1 && (t[1] = t[0]), i = x.duration, o = x.times, s = x.ease, l = "keyframes";
    }
    const u = om(a.owner.current, c, t, { ...this.options, duration: i, times: o, ease: s });
    return u.startTime = h ?? this.calcStartTime(), this.pendingTimeline ? (u.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : u.onfinish = () => {
      const { onComplete: d } = this.options;
      a.set(Pr(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: u,
      duration: i,
      times: o,
      type: l,
      ease: s,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return Ne(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return Ne(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = Te(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t)
      return null;
    const { animation: n } = t;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n)
        return $;
      const { animation: r } = n;
      r.timeline = t, r.onfinish = null;
    }
    return $;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n, keyframes: r, duration: i, type: o, ease: s, times: l } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: c, onUpdate: h, onComplete: u, element: d, ...p } = this.options, v = new os({
        ...p,
        keyframes: r,
        duration: i,
        type: o,
        ease: s,
        times: l,
        isGenerator: !0
      }), y = Te(this.time);
      c.setWithVelocity(v.sample(y - ir).value, v.sample(y).value, ir);
    }
    const { onStop: a } = this.options;
    a && a(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: i, repeatType: o, damping: s, type: l } = t;
    return am() && r && wl.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate && !i && o !== "mirror" && s !== 0 && l !== "inertia";
  }
}
function hm(e, t) {
  let n;
  const r = () => {
    const { currentTime: i } = t, s = (i === null ? 0 : i.value) / 100;
    n !== s && e(s), n = s;
  };
  return F.update(r, !0), () => ze(r);
}
const dm = Hl(() => window.ScrollTimeline !== void 0);
class fm {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++)
      this.animations[r][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((r) => {
      if (dm() && r.attachTimeline)
        r.attachTimeline(t);
      else
        return r.pause(), hm((i) => {
          r.time = r.duration * i;
        }, t);
    });
    return () => {
      n.forEach((r, i) => {
        r && r(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
const ls = (e, t, n, r = {}, i, o, s) => (l) => {
  const a = $i(r, e) || {}, c = a.delay || r.delay || 0;
  let { elapsed: h = 0 } = r;
  h = h - Te(c);
  let u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -h,
    onUpdate: (p) => {
      t.set(p), a.onUpdate && a.onUpdate(p);
    },
    onComplete: () => {
      l(), a.onComplete && a.onComplete(), s && s();
    },
    onStop: s,
    name: e,
    motionValue: t,
    element: o ? void 0 : i
  };
  Yf(a) || (u = {
    ...u,
    ...Wf(e, u)
  }), u.duration && (u.duration = Te(u.duration)), u.repeatDelay && (u.repeatDelay = Te(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let d = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (d = !0)), d && !o && t.get() !== void 0) {
    const p = Pr(u.keyframes, a);
    if (p !== void 0)
      return F.update(() => {
        u.onUpdate(p), u.onComplete();
      }), new fm([]);
  }
  return !o && wo.supports(u) ? new wo(u) : new os(u);
};
class cs {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Ar(this.subscriptions, t), () => xr(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const bo = /* @__PURE__ */ new Set();
function us(e, t, n) {
  e || bo.has(t) || (console.warn(t), bo.add(t));
}
const Po = 30, pm = (e) => !isNaN(parseFloat(e));
class oc {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "11.3.28", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
      const o = Ve.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Ve.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = pm(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && us(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new cs());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), F.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = Ve.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Po)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Po);
    return Yl(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function gn(e, t) {
  return new oc(e, t);
}
function mm(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, gn(n));
}
function gm(e, t) {
  const n = br(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = wf(o[s]);
    mm(e, s, l);
  }
}
function ac(e) {
  return e.getProps()[il];
}
class vm extends oc {
  constructor() {
    super(...arguments), this.output = [], this.counts = /* @__PURE__ */ new Map();
  }
  add(t) {
    const n = bl(t);
    if (!n)
      return;
    const r = this.counts.get(n) || 0;
    this.counts.set(n, r + 1), r === 0 && (this.output.push(n), this.update());
    let i = !1;
    return () => {
      if (i)
        return;
      i = !0;
      const o = this.counts.get(n) - 1;
      this.counts.set(n, o), o === 0 && (xr(this.output, n), this.update());
    };
  }
  update() {
    this.set(this.output.length ? this.output.join(", ") : "auto");
  }
}
function ym(e) {
  return !!(te(e) && e.add);
}
function Ai(e, t) {
  var n;
  if (!e.applyWillChange)
    return;
  let r = e.getValue("willChange");
  if (!r && !(!((n = e.props.style) === null || n === void 0) && n.willChange) && (r = new vm("auto"), e.addValue("willChange", r)), ym(r))
    return r.add(t);
}
function Am({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function lc(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  r && (s = r);
  const c = [], h = i && e.animationState && e.animationState.getState()[i];
  for (const u in a) {
    const d = e.getValue(u, (o = e.latestValues[u]) !== null && o !== void 0 ? o : null), p = a[u];
    if (p === void 0 || h && Am(h, u))
      continue;
    const v = {
      delay: n,
      ...$i(s || {}, u)
    };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const x = ac(e);
      if (x) {
        const g = window.MotionHandoffAnimation(x, u, F);
        g !== null && (v.startTime = g, y = !0);
      }
    }
    d.start(ls(u, d, p, e.shouldReduceMotion && tt.has(u) ? { type: !1 } : v, e, y, Ai(e, u)));
    const A = d.animation;
    A && c.push(A);
  }
  return l && Promise.all(c).then(() => {
    F.update(() => {
      l && gm(e, l);
    });
  }), c;
}
function xi(e, t, n = {}) {
  var r;
  const i = br(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(lc(e, i, n)) : () => Promise.resolve(), l = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: h = 0, staggerChildren: u, staggerDirection: d } = o;
    return xm(e, t, h + c, u, d, n);
  } : () => Promise.resolve(), { when: a } = o;
  if (a) {
    const [c, h] = a === "beforeChildren" ? [s, l] : [l, s];
    return c().then(() => h());
  } else
    return Promise.all([s(), l(n.delay)]);
}
function xm(e, t, n = 0, r = 0, i = 1, o) {
  const s = [], l = (e.variantChildren.size - 1) * r, a = i === 1 ? (c = 0) => c * r : (c = 0) => l - c * r;
  return Array.from(e.variantChildren).sort(wm).forEach((c, h) => {
    c.notify("AnimationStart", t), s.push(xi(c, t, {
      ...o,
      delay: n + a(h)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(s);
}
function wm(e, t) {
  return e.sortNodePosition(t);
}
function bm(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => xi(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string")
    r = xi(e, t, n);
  else {
    const i = typeof t == "function" ? br(e, t, n.custom) : t;
    r = Promise.all(lc(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Pm = [...Gi].reverse(), Em = Gi.length;
function Sm(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => bm(e, n, r)));
}
function Cm(e) {
  let t = Sm(e), n = Eo(), r = !0;
  const i = (a) => (c, h) => {
    var u;
    const d = br(e, h, a === "exit" ? (u = e.presenceContext) === null || u === void 0 ? void 0 : u.custom : void 0);
    if (d) {
      const { transition: p, transitionEnd: v, ...y } = d;
      c = { ...c, ...y, ...v };
    }
    return c;
  };
  function o(a) {
    t = a(e);
  }
  function s(a) {
    const c = e.getProps(), h = e.getVariantContext(!0) || {}, u = [], d = /* @__PURE__ */ new Set();
    let p = {}, v = 1 / 0;
    for (let A = 0; A < Em; A++) {
      const x = Pm[A], g = n[x], w = c[x] !== void 0 ? c[x] : h[x], b = dn(w), C = x === a ? g.isActive : null;
      C === !1 && (v = A);
      let T = w === h[x] && w !== c[x] && b;
      if (T && r && e.manuallyAnimateOnMount && (T = !1), g.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !g.isActive && C === null || // If we didn't and don't have any defined prop for this animation type
      !w && !g.prevProp || // Or if the prop doesn't define an animation
      fn(w) || typeof w == "boolean")
        continue;
      let k = Tm(g.prevProp, w) || // If we're making this variant active, we want to always make it active
      x === a && g.isActive && !T && b || // If we removed a higher-priority variant (i is in reverse order)
      A > v && b, Q = !1;
      const K = Array.isArray(w) ? w : [w];
      let he = K.reduce(i(x), {});
      C === !1 && (he = {});
      const { prevResolvedValues: rt = {} } = g, ne = {
        ...rt,
        ...he
      }, de = (U) => {
        k = !0, d.has(U) && (Q = !0, d.delete(U)), g.needsAnimating[U] = !0;
        const ae = e.getValue(U);
        ae && (ae.liveStyle = !1);
      };
      for (const U in ne) {
        const ae = he[U], Ee = rt[U];
        if (p.hasOwnProperty(U))
          continue;
        let Re = !1;
        hi(ae) && hi(Ee) ? Re = !Rl(ae, Ee) : Re = ae !== Ee, Re ? ae != null ? de(U) : d.add(U) : ae !== void 0 && d.has(U) ? de(U) : g.protectedKeys[U] = !0;
      }
      g.prevProp = w, g.prevResolvedValues = he, g.isActive && (p = { ...p, ...he }), r && e.blockInitialAnimation && (k = !1), k && (!T || Q) && u.push(...K.map((U) => ({
        animation: U,
        options: { type: x }
      })));
    }
    if (d.size) {
      const A = {};
      d.forEach((x) => {
        const g = e.getBaseTarget(x), w = e.getValue(x);
        w && (w.liveStyle = !0), A[x] = g ?? null;
      }), u.push({ animation: A });
    }
    let y = !!u.length;
    return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (y = !1), r = !1, y ? t(u) : Promise.resolve();
  }
  function l(a, c) {
    var h;
    if (n[a].isActive === c)
      return Promise.resolve();
    (h = e.variantChildren) === null || h === void 0 || h.forEach((d) => {
      var p;
      return (p = d.animationState) === null || p === void 0 ? void 0 : p.setActive(a, c);
    }), n[a].isActive = c;
    const u = s(a);
    for (const d in n)
      n[d].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = Eo(), r = !0;
    }
  };
}
function Tm(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Rl(t, e) : !1;
}
function st(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Eo() {
  return {
    animate: st(!0),
    whileInView: st(),
    whileHover: st(),
    whileTap: st(),
    whileDrag: st(),
    whileFocus: st(),
    exit: st()
  };
}
class Dm extends nt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Cm(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    fn(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let Rm = 0;
class km extends nt {
  constructor() {
    super(...arguments), this.id = Rm++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const Mm = {
  animation: {
    Feature: Dm
  },
  exit: {
    Feature: km
  }
}, So = (e, t) => Math.abs(e - t);
function Om(e, t) {
  const n = So(e.x, t.x), r = So(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class cc {
  constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const u = Yr(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, p = Om(u.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !p)
        return;
      const { point: v } = u, { timestamp: y } = _;
      this.history.push({ ...v, timestamp: y });
      const { onStart: A, onMove: x } = this.handlers;
      d || (A && A(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, u);
    }, this.handlePointerMove = (u, d) => {
      this.lastMoveEvent = u, this.lastMoveEventInfo = Wr(d, this.transformPagePoint), F.update(this.updatePoint, !0);
    }, this.handlePointerUp = (u, d) => {
      this.end();
      const { onEnd: p, onSessionEnd: v, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const A = Yr(u.type === "pointercancel" ? this.lastMoveEventInfo : Wr(d, this.transformPagePoint), this.history);
      this.startEvent && p && p(u, A), v && v(u, A);
    }, !El(t))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
    const s = wr(t), l = Wr(s, this.transformPagePoint), { point: a } = l, { timestamp: c } = _;
    this.history = [{ ...a, timestamp: c }];
    const { onSessionStart: h } = n;
    h && h(t, Yr(l, this.history)), this.removeListeners = Le(Ie(this.contextWindow, "pointermove", this.handlePointerMove), Ie(this.contextWindow, "pointerup", this.handlePointerUp), Ie(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ze(this.updatePoint);
  }
}
function Wr(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Co(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Yr({ point: e }, t) {
  return {
    point: e,
    delta: Co(e, uc(t)),
    offset: Co(e, jm(t)),
    velocity: Bm(t, 0.1)
  };
}
function jm(e) {
  return e[0];
}
function uc(e) {
  return e[e.length - 1];
}
function Bm(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const i = uc(e);
  for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > Te(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const o = Ne(i.timestamp - r.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (i.x - r.x) / o,
    y: (i.y - r.y) / o
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
const hc = 1e-4, Im = 1 - hc, Lm = 1 + hc, dc = 0.01, Nm = 0 - dc, Vm = 0 + dc;
function ue(e) {
  return e.max - e.min;
}
function Fm(e, t, n) {
  return Math.abs(e - t) <= n;
}
function To(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = H(t.min, t.max, e.origin), e.scale = ue(n) / ue(t), e.translate = H(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Im && e.scale <= Lm || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Nm && e.translate <= Vm || isNaN(e.translate)) && (e.translate = 0);
}
function rn(e, t, n, r) {
  To(e.x, t.x, n.x, r ? r.originX : void 0), To(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Do(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + ue(t);
}
function zm(e, t, n) {
  Do(e.x, t.x, n.x), Do(e.y, t.y, n.y);
}
function Ro(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + ue(t);
}
function sn(e, t, n) {
  Ro(e.x, t.x, n.x), Ro(e.y, t.y, n.y);
}
function Gm(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? H(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? H(n, e, r.max) : Math.min(e, n)), e;
}
function ko(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Qm(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: ko(e.x, n, i),
    y: ko(e.y, t, r)
  };
}
function Mo(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Um(e, t) {
  return {
    x: Mo(e.x, t.x),
    y: Mo(e.y, t.y)
  };
}
function Hm(e, t) {
  let n = 0.5;
  const r = ue(e), i = ue(t);
  return i > r ? n = mn(t.min, t.max - r, e.min) : r > i && (n = mn(e.min, e.max - i, t.min)), $e(0, 1, n);
}
function Wm(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const wi = 0.35;
function Ym(e = wi) {
  return e === !1 ? e = 0 : e === !0 && (e = wi), {
    x: Oo(e, "left", "right"),
    y: Oo(e, "top", "bottom")
  };
}
function Oo(e, t, n) {
  return {
    min: jo(e, t),
    max: jo(e, n)
  };
}
function jo(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Bo = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), St = () => ({
  x: Bo(),
  y: Bo()
}), Io = () => ({ min: 0, max: 0 }), Y = () => ({
  x: Io(),
  y: Io()
});
function ge(e) {
  return [e("x"), e("y")];
}
function fc({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function Km({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Xm(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function Kr(e) {
  return e === void 0 || e === 1;
}
function bi({ scale: e, scaleX: t, scaleY: n }) {
  return !Kr(e) || !Kr(t) || !Kr(n);
}
function ot(e) {
  return bi(e) || pc(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function pc(e) {
  return Lo(e.x) || Lo(e.y);
}
function Lo(e) {
  return e && e !== "0%";
}
function sr(e, t, n) {
  const r = e - n, i = t * r;
  return n + i;
}
function No(e, t, n, r, i) {
  return i !== void 0 && (e = sr(e, i, r)), sr(e, n, r) + t;
}
function Pi(e, t = 0, n = 1, r, i) {
  e.min = No(e.min, t, n, r, i), e.max = No(e.max, t, n, r, i);
}
function mc(e, { x: t, y: n }) {
  Pi(e.x, t.translate, t.scale, t.originPoint), Pi(e.y, n.translate, n.scale, n.originPoint);
}
const Vo = 0.999999999999, Fo = 1.0000000000001;
function Zm(e, t, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    o = n[l], s = o.projectionDelta;
    const { visualElement: a } = o.options;
    a && a.props.style && a.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Tt(e, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), s && (t.x *= s.x.scale, t.y *= s.y.scale, mc(e, s)), r && ot(o.latestValues) && Tt(e, o.latestValues));
  }
  t.x < Fo && t.x > Vo && (t.x = 1), t.y < Fo && t.y > Vo && (t.y = 1);
}
function Ct(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function zo(e, t, n, r, i = 0.5) {
  const o = H(e.min, e.max, i);
  Pi(e, t, n, o, r);
}
function Tt(e, t) {
  zo(e.x, t.x, t.scaleX, t.scale, t.originX), zo(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function gc(e, t) {
  return fc(Xm(e.getBoundingClientRect(), t));
}
function Jm(e, t, n) {
  const r = gc(e, n), { scroll: i } = t;
  return i && (Ct(r.x, i.offset.x), Ct(r.y, i.offset.y)), r;
}
const vc = ({ current: e }) => e ? e.ownerDocument.defaultView : null, qm = /* @__PURE__ */ new WeakMap();
class _m {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Y(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const i = (h) => {
      const { dragSnapToOrigin: u } = this.getProps();
      u ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(wr(h, "page").point);
    }, o = (h, u) => {
      var d;
      const { drag: p, dragPropagation: v, onDragStart: y } = this.getProps();
      if (p && !v && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Cl(p), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ge((x) => {
        let g = this.getAxisMotionValue(x).get() || 0;
        if (Ce.test(g)) {
          const { projection: w } = this.visualElement;
          if (w && w.layout) {
            const b = w.layout.layoutBox[x];
            b && (g = ue(b) * (parseFloat(g) / 100));
          }
        }
        this.originPoint[x] = g;
      }), y && F.postRender(() => y(h, u)), (d = this.removeWillChange) === null || d === void 0 || d.call(this), this.removeWillChange = Ai(this.visualElement, "transform");
      const { animationState: A } = this.visualElement;
      A && A.setActive("whileDrag", !0);
    }, s = (h, u) => {
      const { dragPropagation: d, dragDirectionLock: p, onDirectionLock: v, onDrag: y } = this.getProps();
      if (!d && !this.openGlobalLock)
        return;
      const { offset: A } = u;
      if (p && this.currentDirection === null) {
        this.currentDirection = $m(A), this.currentDirection !== null && v && v(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, A), this.updateAxis("y", u.point, A), this.visualElement.render(), y && y(h, u);
    }, l = (h, u) => this.stop(h, u), a = () => ge((h) => {
      var u;
      return this.getAnimationState(h) === "paused" && ((u = this.getAxisMotionValue(h).animation) === null || u === void 0 ? void 0 : u.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new cc(t, {
      onSessionStart: i,
      onStart: o,
      onMove: s,
      onSessionEnd: l,
      resumeAnimation: a
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      contextWindow: vc(this.visualElement)
    });
  }
  stop(t, n) {
    var r;
    (r = this.removeWillChange) === null || r === void 0 || r.call(this);
    const i = this.isDragging;
    if (this.cancel(), !i)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: s } = this.getProps();
    s && F.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ln(t, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = Gm(s, this.constraints[t], this.elastic[t])), o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
    n && Pt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Qm(i.layoutBox, n) : this.constraints = !1, this.elastic = Ym(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && ge((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = Wm(i.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Pt(t))
      return !1;
    const r = t.current;
    _e(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = Jm(r, i.root, this.visualElement.getTransformPagePoint());
    let s = Um(i.layout.layoutBox, o);
    if (n) {
      const l = n(Km(s));
      this.hasMutatedConstraints = !!l, l && (s = fc(l));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: l } = this.getProps(), a = this.constraints || {}, c = ge((h) => {
      if (!Ln(h, n, this.currentDirection))
        return;
      let u = a && a[h] || {};
      s && (u = { min: 0, max: 0 });
      const d = i ? 200 : 1e6, p = i ? 40 : 1e7, v = {
        type: "inertia",
        velocity: r ? t[h] : 0,
        bounceStiffness: d,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...u
      };
      return this.startAxisValueAnimation(h, v);
    });
    return Promise.all(c).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(ls(t, r, 0, n, this.visualElement, !1, Ai(this.visualElement, t)));
  }
  stopAnimation() {
    ge((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ge((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    ge((n) => {
      const { drag: r } = this.getProps();
      if (!Ln(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - H(s, l, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!Pt(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    ge((s) => {
      const l = this.getAxisMotionValue(s);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[s] = Hm({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), ge((s) => {
      if (!Ln(s, t, null))
        return;
      const l = this.getAxisMotionValue(s), { min: a, max: c } = this.constraints[s];
      l.set(H(a, c, i[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    qm.set(this.visualElement, this);
    const t = this.visualElement.current, n = Ie(t, "pointerdown", (a) => {
      const { drag: c, dragListener: h = !0 } = this.getProps();
      c && h && this.start(a);
    }), r = () => {
      const { dragConstraints: a } = this.getProps();
      Pt(a) && a.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), F.read(r);
    const s = Oe(window, "resize", () => this.scalePositionWithinConstraints()), l = i.addEventListener("didUpdate", ({ delta: a, hasLayoutChanged: c }) => {
      this.isDragging && c && (ge((h) => {
        const u = this.getAxisMotionValue(h);
        u && (this.originPoint[h] += a[h].translate, u.set(u.get() + a[h].translate));
      }), this.visualElement.render());
    });
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = wi, dragMomentum: l = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l
    };
  }
}
function Ln(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function $m(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class e0 extends nt {
  constructor(t) {
    super(t), this.removeGroupControls = $, this.removeListeners = $, this.controls = new _m(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || $;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Go = (e) => (t, n) => {
  e && F.postRender(() => e(t, n));
};
class t0 extends nt {
  constructor() {
    super(...arguments), this.removePointerDownListener = $;
  }
  onPointerDown(t) {
    this.session = new cc(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: vc(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Go(t),
      onStart: Go(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && F.postRender(() => i(o, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Ie(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function n0() {
  const e = oe(Vi);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, i = iu();
  Fe(() => r(i), []);
  const o = ga(() => n && n(i), [i, n]);
  return !t && n ? [!1, o] : [!0];
}
const Yn = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Qo(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Zt = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (R.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Qo(e, t.target.x), r = Qo(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, r0 = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, i = et.parse(e);
    if (i.length > 5)
      return r;
    const o = et.createTransformer(e), s = typeof i[0] != "number" ? 1 : 0, l = n.x.scale * t.x, a = n.y.scale * t.y;
    i[0 + s] /= l, i[1 + s] /= a;
    const c = H(l, a, 0.5);
    return typeof i[2 + s] == "number" && (i[2 + s] /= c), typeof i[3 + s] == "number" && (i[3 + s] /= c), o(i);
  }
};
class i0 extends su {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: o } = t;
    Zd(s0), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Yn.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props, s = r.projection;
    return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || F.postRender(() => {
      const l = s.getStack();
      (!l || !l.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), zi.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: i } = t;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function yc(e) {
  const [t, n] = n0(), r = oe(cl);
  return m.jsx(i0, { ...e, layoutGroup: r, switchLayoutGroup: oe(ol), isPresent: t, safeToRemove: n });
}
const s0 = {
  borderRadius: {
    ...Zt,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Zt,
  borderTopRightRadius: Zt,
  borderBottomLeftRadius: Zt,
  borderBottomRightRadius: Zt,
  boxShadow: r0
}, Ac = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], o0 = Ac.length, Uo = (e) => typeof e == "string" ? parseFloat(e) : e, Ho = (e) => typeof e == "number" || R.test(e);
function a0(e, t, n, r, i, o) {
  i ? (e.opacity = H(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    l0(r)
  ), e.opacityExit = H(t.opacity !== void 0 ? t.opacity : 1, 0, c0(r))) : o && (e.opacity = H(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let s = 0; s < o0; s++) {
    const l = `border${Ac[s]}Radius`;
    let a = Wo(t, l), c = Wo(n, l);
    if (a === void 0 && c === void 0)
      continue;
    a || (a = 0), c || (c = 0), a === 0 || c === 0 || Ho(a) === Ho(c) ? (e[l] = Math.max(H(Uo(a), Uo(c), r), 0), (Ce.test(c) || Ce.test(a)) && (e[l] += "%")) : e[l] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = H(t.rotate || 0, n.rotate || 0, r));
}
function Wo(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const l0 = xc(0, 0.5, $l), c0 = xc(0.5, 0.95, $);
function xc(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(mn(e, t, r));
}
function Yo(e, t) {
  e.min = t.min, e.max = t.max;
}
function me(e, t) {
  Yo(e.x, t.x), Yo(e.y, t.y);
}
function Ko(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Xo(e, t, n, r, i) {
  return e -= t, e = sr(e, 1 / n, r), i !== void 0 && (e = sr(e, 1 / i, r)), e;
}
function u0(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (Ce.test(t) && (t = parseFloat(t), t = H(s.min, s.max, t / 100) - s.min), typeof t != "number")
    return;
  let l = H(o.min, o.max, r);
  e === o && (l -= t), e.min = Xo(e.min, t, n, l, i), e.max = Xo(e.max, t, n, l, i);
}
function Zo(e, t, [n, r, i], o, s) {
  u0(e, t[n], t[r], t[i], t.scale, o, s);
}
const h0 = ["x", "scaleX", "originX"], d0 = ["y", "scaleY", "originY"];
function Jo(e, t, n, r) {
  Zo(e.x, t, h0, n ? n.x : void 0, r ? r.x : void 0), Zo(e.y, t, d0, n ? n.y : void 0, r ? r.y : void 0);
}
function qo(e) {
  return e.translate === 0 && e.scale === 1;
}
function wc(e) {
  return qo(e.x) && qo(e.y);
}
function _o(e, t) {
  return e.min === t.min && e.max === t.max;
}
function f0(e, t) {
  return _o(e.x, t.x) && _o(e.y, t.y);
}
function $o(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function bc(e, t) {
  return $o(e.x, t.x) && $o(e.y, t.y);
}
function ea(e) {
  return ue(e.x) / ue(e.y);
}
function ta(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class p0 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Ar(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (xr(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0)
      return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function m0(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x, o = e.y.translate / t.y, s = (n == null ? void 0 : n.z) || 0;
  if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: c, rotate: h, rotateX: u, rotateY: d, skewX: p, skewY: v } = n;
    c && (r = `perspective(${c}px) ${r}`), h && (r += `rotate(${h}deg) `), u && (r += `rotateX(${u}deg) `), d && (r += `rotateY(${d}deg) `), p && (r += `skewX(${p}deg) `), v && (r += `skewY(${v}deg) `);
  }
  const l = e.x.scale * t.x, a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const g0 = (e, t) => e.depth - t.depth;
class v0 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Ar(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    xr(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(g0), this.isDirty = !1, this.children.forEach(t);
  }
}
function y0(e, t) {
  const n = Ve.now(), r = ({ timestamp: i }) => {
    const o = i - n;
    o >= t && (ze(r), e(o - t));
  };
  return F.read(r, !0), () => ze(r);
}
function A0(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function x0(e, t, n) {
  const r = te(e) ? e : gn(e);
  return r.start(ls("", r, t, n)), r.animation;
}
const at = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, $t = typeof window < "u" && window.MotionDebug !== void 0, Xr = ["", "X", "Y", "Z"], w0 = { visibility: "hidden" }, na = 1e3;
let b0 = 0;
function Zr(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Pc(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return !1;
  const { visualElement: t } = e.options;
  return t ? window.MotionHasOptimisedTransformAnimation(ac(t)) ? !0 : e.parent && !e.parent.hasCheckedOptimisedAppear ? Pc(e.parent) : !1 : !1;
}
function Ec({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      this.id = b0++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, $t && (at.totalNodes = at.resolvedTargetDeltas = at.recalculatedProjection = 0), this.nodes.forEach(S0), this.nodes.forEach(k0), this.nodes.forEach(M0), this.nodes.forEach(C0), $t && window.MotionDebug.record(at);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new v0());
    }
    addEventListener(s, l) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new cs()), this.eventHandlers.get(s).add(l);
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    /**
     * Lifecycles
     */
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = A0(s), this.instance = s;
      const { layoutId: a, layout: c, visualElement: h } = this.options;
      if (h && !h.current && h.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (c || a) && (this.isLayoutDirty = !0), e) {
        let u;
        const d = () => this.root.updateBlockedByResize = !1;
        e(s, () => {
          this.root.updateBlockedByResize = !0, u && u(), u = y0(d, 250), Yn.hasAnimatedSinceResize && (Yn.hasAnimatedSinceResize = !1, this.nodes.forEach(ia));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && h && (a || c) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: d, hasRelativeTargetChanged: p, layout: v }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || h.getDefaultTransition() || L0, { onLayoutAnimationStart: A, onLayoutAnimationComplete: x } = h.getProps(), g = !this.targetLayout || !bc(this.targetLayout, v) || p, w = !d && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || w || d && (g || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(u, w);
          const b = {
            ...$i(y, "layout"),
            onPlay: A,
            onComplete: x
          };
          (h.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0, b.type = !1), this.startAnimation(b);
        } else
          d || ia(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = v;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, ze(this.updateProjection);
    }
    // only on the root
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
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(O0), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionHandoffCancelAll && Pc(this) && window.MotionHandoffCancelAll(), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let h = 0; h < this.path.length; h++) {
        const u = this.path[h];
        u.shouldResetTransform = !0, u.updateScroll("snapshot"), u.options.layoutRoot && u.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ra);
        return;
      }
      this.isUpdating || this.nodes.forEach(D0), this.isUpdating = !1, this.nodes.forEach(R0), this.nodes.forEach(P0), this.nodes.forEach(E0), this.clearAllSnapshots();
      const l = Ve.now();
      _.delta = $e(0, 1e3 / 60, l - _.timestamp), _.timestamp = l, _.isProcessing = !0, Vr.update.process(_), Vr.preRender.process(_), Vr.render.process(_), _.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, zi.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(T0), this.sharedNodes.forEach(j0);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, F.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      F.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++)
          this.path[a].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Y(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l && l.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (l = !1), l) {
        const a = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, l = this.projectionDelta && !wc(this.projectionDelta), a = this.getTransformTemplate(), c = a ? a(this.latestValues, "") : void 0, h = c !== this.prevTransformTemplateValue;
      s && (l || ot(this.latestValues) || h) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return s && (a = this.removeTransform(a)), N0(a), {
        animationId: this.root.animationId,
        measuredBox: l,
        layoutBox: a,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var s;
      const { visualElement: l } = this.options;
      if (!l)
        return Y();
      const a = l.measureViewportBox();
      if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(V0))) {
        const { scroll: h } = this.root;
        h && (Ct(a.x, h.offset.x), Ct(a.y, h.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = Y();
      if (me(a, s), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
        return a;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c], { scroll: u, options: d } = h;
        h !== this.root && u && d.layoutScroll && (u.wasRoot && me(a, s), Ct(a.x, u.offset.x), Ct(a.y, u.offset.y));
      }
      return a;
    }
    applyTransform(s, l = !1) {
      const a = Y();
      me(a, s);
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        !l && h.options.layoutScroll && h.scroll && h !== h.root && Tt(a, {
          x: -h.scroll.offset.x,
          y: -h.scroll.offset.y
        }), ot(h.latestValues) && Tt(a, h.latestValues);
      }
      return ot(this.latestValues) && Tt(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = Y();
      me(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const c = this.path[a];
        if (!c.instance || !ot(c.latestValues))
          continue;
        bi(c.latestValues) && c.updateSnapshot();
        const h = Y(), u = c.measurePageBox();
        me(h, u), Jo(l, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, h);
      }
      return ot(this.latestValues) && Jo(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== _.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== a;
      if (!(s || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: u, layoutId: d } = this.options;
      if (!(!this.layout || !(u || d))) {
        if (this.resolvedRelativeTargetAt = _.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), sn(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), me(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Y(), this.targetWithTransforms = Y()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), zm(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : me(this.target, this.layout.layoutBox), mc(this.target, this.targetDelta)) : me(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), sn(this.relativeTargetOrigin, this.target, p.target), me(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          $t && at.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || bi(this.parent.latestValues) || pc(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var s;
      const l = this.getLead(), a = !!this.resumingFrom || this !== l;
      let c = !0;
      if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (c = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === _.timestamp && (c = !1), c)
        return;
      const { layout: h, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(h || u))
        return;
      me(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, p = this.treeScale.y;
      Zm(this.layoutCorrected, this.treeScale, this.path, a), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox, l.targetWithTransforms = Y());
      const { target: v } = l;
      if (!v) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ko(this.prevProjectionDelta.x, this.projectionDelta.x), Ko(this.prevProjectionDelta.y, this.projectionDelta.y)), rn(this.projectionDelta, this.layoutCorrected, v, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== p || !ta(this.projectionDelta.x, this.prevProjectionDelta.x) || !ta(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), $t && at.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var l;
      if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(), s) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = St(), this.projectionDelta = St(), this.projectionDeltaWithTransform = St();
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot, c = a ? a.latestValues : {}, h = { ...this.latestValues }, u = St();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
      const d = Y(), p = a ? a.source : void 0, v = this.layout ? this.layout.source : void 0, y = p !== v, A = this.getStack(), x = !A || A.members.length <= 1, g = !!(y && !x && this.options.crossfade === !0 && !this.path.some(I0));
      this.animationProgress = 0;
      let w;
      this.mixTargetDelta = (b) => {
        const C = b / 1e3;
        sa(u.x, s.x, C), sa(u.y, s.y, C), this.setTargetDelta(u), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (sn(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), B0(this.relativeTarget, this.relativeTargetOrigin, d, C), w && f0(this.relativeTarget, w) && (this.isProjectionDirty = !1), w || (w = Y()), me(w, this.relativeTarget)), y && (this.animationValues = h, a0(h, c, this.latestValues, C, g, x)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (ze(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = F.update(() => {
        Yn.hasAnimatedSinceResize = !0, this.currentAnimation = x0(0, na, {
          ...s,
          onUpdate: (l) => {
            this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
          },
          onComplete: () => {
            s.onComplete && s.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(na), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: l, target: a, layout: c, latestValues: h } = s;
      if (!(!l || !a || !c)) {
        if (this !== s && this.layout && c && Sc(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          a = this.target || Y();
          const u = ue(this.layout.layoutBox.x);
          a.x.min = s.target.x.min, a.x.max = a.x.min + u;
          const d = ue(this.layout.layoutBox.y);
          a.y.min = s.target.y.min, a.y.max = a.y.min + d;
        }
        me(l, a), Tt(l, h), rn(this.projectionDeltaWithTransform, this.layoutCorrected, l, h);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new p0()), this.sharedNodes.get(s).add(l);
      const c = l.options.initialPromotionConfig;
      l.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(l) : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const c = this.getStack();
      c && c.promote(this, a), s && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let l = !1;
      const { latestValues: a } = s;
      if ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (l = !0), !l)
        return;
      const c = {};
      a.z && Zr("z", s, c, this.animationValues);
      for (let h = 0; h < Xr.length; h++)
        Zr(`rotate${Xr[h]}`, s, c, this.animationValues), Zr(`skew${Xr[h]}`, s, c, this.animationValues);
      s.render();
      for (const h in c)
        s.setStaticValue(h, c[h]), this.animationValues && (this.animationValues[h] = c[h]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var l, a;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return w0;
      const c = {
        visibility: ""
      }, h = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Hn(s == null ? void 0 : s.pointerEvents) || "", c.transform = h ? h(this.latestValues, "") : "none", c;
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = Hn(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !ot(this.latestValues) && (y.transform = h ? h({}, "") : "none", this.hasProjected = !1), y;
      }
      const d = u.animationValues || u.latestValues;
      this.applyTransformsToTarget(), c.transform = m0(this.projectionDeltaWithTransform, this.treeScale, d), h && (c.transform = h(d, c.transform));
      const { x: p, y: v } = this.projectionDelta;
      c.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`, u.animationValues ? c.opacity = u === this ? (a = (l = d.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : c.opacity = u === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const y in er) {
        if (d[y] === void 0)
          continue;
        const { correct: A, applyTo: x } = er[y], g = c.transform === "none" ? d[y] : A(d[y], u);
        if (x) {
          const w = x.length;
          for (let b = 0; b < w; b++)
            c[x[b]] = g;
        } else
          c[y] = g;
      }
      return this.options.layoutId && (c.pointerEvents = u === this ? Hn(s == null ? void 0 : s.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop();
      }), this.root.nodes.forEach(ra), this.root.sharedNodes.clear();
    }
  };
}
function P0(e) {
  e.updateLayout();
}
function E0(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout, { animationType: o } = e.options, s = n.source !== e.layout.source;
    o === "size" ? ge((u) => {
      const d = s ? n.measuredBox[u] : n.layoutBox[u], p = ue(d);
      d.min = r[u].min, d.max = d.min + p;
    }) : Sc(o, n.layoutBox, r) && ge((u) => {
      const d = s ? n.measuredBox[u] : n.layoutBox[u], p = ue(r[u]);
      d.max = d.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + p);
    });
    const l = St();
    rn(l, r, n.layoutBox);
    const a = St();
    s ? rn(a, e.applyTransform(i, !0), n.measuredBox) : rn(a, r, n.layoutBox);
    const c = !wc(l);
    let h = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: d, layout: p } = u;
        if (d && p) {
          const v = Y();
          sn(v, n.layoutBox, d.layoutBox);
          const y = Y();
          sn(y, r, p.layoutBox), bc(v, y) || (h = !0), u.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = v, e.relativeParent = u);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: h
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function S0(e) {
  $t && at.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function C0(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function T0(e) {
  e.clearSnapshot();
}
function ra(e) {
  e.clearMeasurements();
}
function D0(e) {
  e.isLayoutDirty = !1;
}
function R0(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function ia(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function k0(e) {
  e.resolveTargetDelta();
}
function M0(e) {
  e.calcProjection();
}
function O0(e) {
  e.resetSkewAndRotation();
}
function j0(e) {
  e.removeLeadSnapshot();
}
function sa(e, t, n) {
  e.translate = H(t.translate, 0, n), e.scale = H(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function oa(e, t, n, r) {
  e.min = H(t.min, n.min, r), e.max = H(t.max, n.max, r);
}
function B0(e, t, n, r) {
  oa(e.x, t.x, n.x, r), oa(e.y, t.y, n.y, r);
}
function I0(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const L0 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, aa = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), la = aa("applewebkit/") && !aa("chrome/") ? Math.round : $;
function ca(e) {
  e.min = la(e.min), e.max = la(e.max);
}
function N0(e) {
  ca(e.x), ca(e.y);
}
function Sc(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Fm(ea(t), ea(n), 0.2);
}
function V0(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const F0 = Ec({
  attachResizeListener: (e, t) => Oe(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Jr = {
  current: void 0
}, Cc = Ec({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Jr.current) {
      const e = new F0({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Jr.current = e;
    }
    return Jr.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), z0 = {
  pan: {
    Feature: t0
  },
  drag: {
    Feature: e0,
    ProjectionNode: Cc,
    MeasureLayout: yc
  }
}, Ei = { current: null }, Tc = { current: !1 };
function G0() {
  if (Tc.current = !0, !!Fi)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Ei.current = e.matches;
      e.addListener(t), t();
    } else
      Ei.current = !1;
}
function Q0(e, t, n) {
  for (const r in t) {
    const i = t[r], o = n[r];
    if (te(i))
      e.addValue(r, i), process.env.NODE_ENV === "development" && us(i.version === "11.3.28", `Attempting to mix Framer Motion versions ${i.version} with 11.3.28 may not work as expected.`);
    else if (te(o))
      e.addValue(r, gn(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, gn(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const ua = /* @__PURE__ */ new WeakMap(), U0 = [...Bl, ee, et], H0 = (e) => U0.find(jl(e)), ha = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], W0 = Qi.length;
class Y0 {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: s }, l = {}) {
    this.applyWillChange = !1, this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = es, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.isRenderScheduled = !1, this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.isRenderScheduled = !1, this.scheduleRender = () => {
      this.isRenderScheduled || (this.isRenderScheduled = !0, F.render(this.render, !1, !0));
    };
    const { latestValues: a, renderState: c } = s;
    this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = n.initial ? { ...a } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = l, this.blockInitialAnimation = !!o, this.isControllingVariants = yr(n), this.isVariantNode = ll(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: h, ...u } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const d in u) {
      const p = u[d];
      a[d] !== void 0 && te(p) && p.set(a[d], !1);
    }
  }
  mount(t) {
    this.current = t, ua.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Tc.current || G0(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ei.current, process.env.NODE_ENV !== "production" && us(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    ua.delete(this.current), this.projection && this.projection.unmount(), ze(this.notifyUpdate), ze(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = tt.has(t), i = n.on("change", (s) => {
      this.latestValues[t] = s, this.props.onUpdate && F.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in It) {
      const n = It[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: i } = n;
      if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Y();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < ha.length; r++) {
      const i = ha[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    this.prevMotionValues = Q0(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
    }
    const n = {};
    for (let r = 0; r < W0; r++) {
      const i = Qi[r], o = this.props[i];
      (dn(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = gn(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return i != null && (typeof i == "string" && (Ml(i) || kl(i)) ? i = parseFloat(i) : !H0(i) && et.test(n) && (i = Ql(t, n)), this.setBaseTarget(t, te(i) ? i.get() : i)), te(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = _i(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      s && (i = s[t]);
    }
    if (r && i !== void 0)
      return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !te(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new cs()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Dc extends Y0 {
  constructor() {
    super(...arguments), this.KeyframeResolver = Ul;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function K0(e) {
  return window.getComputedStyle(e);
}
class X0 extends Dc {
  constructor() {
    super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = vl;
  }
  readValueFromInstance(t, n) {
    if (tt.has(n)) {
      const r = ns(n);
      return r && r.default || 0;
    } else {
      const r = K0(t), i = (fl(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return gc(t, n);
  }
  build(t, n, r) {
    Ki(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return qi(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    te(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class Z0 extends Dc {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Y;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (tt.has(n)) {
      const r = ns(n);
      return r && r.default || 0;
    }
    return n = yl.has(n) ? n : vr(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return xl(t, n, r);
  }
  build(t, n, r) {
    Zi(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Al(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = Ji(t.tagName), super.mount(t);
  }
}
const J0 = (e, t) => Ui(e) ? new Z0(t) : new X0(t, {
  allowProjection: e !== va
}), q0 = {
  layout: {
    ProjectionNode: Cc,
    MeasureLayout: yc
  }
}, _0 = {
  ...Mm,
  ...zf,
  ...z0,
  ...q0
}, on = /* @__PURE__ */ Kd((e, t) => Tf(e, t, _0, J0)), $0 = (e) => /* @__PURE__ */ m.jsx(
  "svg",
  {
    fill: e.fill || "#000000",
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "800px",
    height: "800px",
    viewBox: "0 0 106.059 106.059",
    xmlSpace: "preserve",
    ...e,
    children: /* @__PURE__ */ m.jsx("g", { children: /* @__PURE__ */ m.jsx("path", { d: "M90.546,15.518C69.858-5.172,36.2-5.172,15.516,15.513C-5.172,36.198-5.17,69.858,15.518,90.547c20.682,20.684,54.34,20.684,75.026-0.004C111.23,69.858,111.228,36.2,90.546,15.518z M84.757,84.758c-17.493,17.494-45.961,17.496-63.455,0.002c-17.498-17.497-17.495-45.966,0-63.46C38.796,3.807,67.262,3.805,84.759,21.302C102.253,38.796,102.251,67.265,84.757,84.758z M79.047,61.065c0.266,0.403,0.311,0.913,0.118,1.356c-4.285,9.903-14.318,16.304-25.563,16.304c-11.486,0-21.58-6.431-25.714-16.382c-0.185-0.443-0.135-0.949,0.131-1.348c0.267-0.397,0.714-0.637,1.192-0.637c0.001,0,0.001,0,0.002,0l48.637,0.061C78.333,60.42,78.783,60.662,79.047,61.065z M29.009,43.905c-0.055-0.112-0.082-0.236-0.082-0.358c0-0.184,0.062-0.363,0.175-0.507l7.695-9.755c0.158-0.196,0.392-0.308,0.645-0.308s0.486,0.111,0.641,0.304l7.697,9.757c0.189,0.237,0.229,0.58,0.1,0.859c-0.146,0.293-0.428,0.467-0.741,0.467h-3.554c-0.181,0-0.351-0.083-0.463-0.225l-3.68-4.664l-3.681,4.664c-0.112,0.141-0.281,0.225-0.462,0.225h-3.552C29.433,44.364,29.143,44.185,29.009,43.905z M61.127,43.905c-0.055-0.112-0.082-0.236-0.082-0.358c0-0.184,0.062-0.363,0.175-0.507l7.695-9.755c0.158-0.196,0.392-0.308,0.645-0.308c0.254,0,0.486,0.111,0.642,0.304l7.697,9.757c0.188,0.237,0.229,0.58,0.1,0.859c-0.146,0.293-0.428,0.467-0.741,0.467h-3.554c-0.181,0-0.351-0.083-0.463-0.225l-3.681-4.664l-3.681,4.664c-0.112,0.141-0.281,0.225-0.462,0.225h-3.552C61.551,44.364,61.261,44.185,61.127,43.905z" }) })
  }
), Rc = (e) => /* @__PURE__ */ m.jsx(
  "svg",
  {
    "aria-hidden": "true",
    "data-prefix": "fab",
    "data-icon": "github",
    className: "svg-inline--fa fa-github fa-w-16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 496 512",
    ...e,
    children: /* @__PURE__ */ m.jsx(
      "path",
      {
        fill: e.fill,
        d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      }
    )
  }
), eg = (e) => /* @__PURE__ */ m.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: e.fill || "#000000",
    ...e,
    children: [
      /* @__PURE__ */ m.jsx("title", { children: "Arrow Left" }),
      /* @__PURE__ */ m.jsxs("g", { id: "Arrow_Left", "data-name": "Arrow Left", children: [
        /* @__PURE__ */ m.jsx("path", { d: "M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Z" }),
        /* @__PURE__ */ m.jsx("polygon", { points: "10.293 14.707 5.586 10 10.293 5.293 11.707 6.707 8.414 10 11.707 13.293 10.293 14.707" }),
        /* @__PURE__ */ m.jsx("path", { d: "M16,18H14V13a1.882,1.882,0,0,0-2-2H7V9h5a3.888,3.888,0,0,1,4,4Z" })
      ] })
    ]
  }
), tg = (e) => /* @__PURE__ */ m.jsx(
  "svg",
  {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "300.000000pt",
    height: "35.000000pt",
    viewBox: "0 0 300.000000 35.000000",
    preserveAspectRatio: "xMidYMid meet",
    fill: e.fill || "#000000",
    ...e,
    children: /* @__PURE__ */ m.jsxs(
      "g",
      {
        transform: "translate(0.000000,35.000000) scale(0.100000,-0.100000)",
        stroke: "none",
        children: [
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M160 175 l0 -172 26 5 c24 4 26 8 20 41 -3 20 -6 93 -6 162 0 118 -1
        127 -20 132 -19 5 -20 0 -20 -168z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M577 336 c-75 -27 -107 -78 -107 -169 0 -85 51 -145 138 -161 29 -5
        32 -3 32 19 0 19 -5 25 -20 25 -56 0 -110 62 -110 125 0 63 54 125 110 125 15
        0 20 6 20 25 0 28 -9 30 -63 11z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M670 336 c0 -9 0 -19 -1 -23 0 -4 17 -12 38 -18 73 -21 107 -120 64
        -191 -17 -27 -36 -39 -93 -57 -22 -8 -12 -50 11 -43 9 3 28 8 42 11 39 10 86
        64 100 116 22 84 -27 183 -101 204 -14 3 -33 9 -42 11 -12 4 -18 0 -18 -10z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M900 179 l0 -169 26 0 c25 0 26 2 20 37 -3 21 -6 95 -6 164 0 118 -1
        127 -20 132 -19 5 -20 0 -20 -164z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M1200 323 c0 -23 1 -23 140 -23 139 0 140 0 140 23 0 22 -1 22 -140
        22 -139 0 -140 0 -140 -22z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M1530 178 c0 -161 1 -168 20 -168 19 0 20 7 20 168 0 161 -1 168 -20
        168 -19 0 -20 -7 -20 -168z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M1897 336 c-73 -27 -110 -80 -110 -161 0 -81 37 -134 110 -161 54
        -19 63 -17 63 11 0 19 -5 25 -20 25 -83 0 -137 109 -95 190 16 32 61 60 95 60
        15 0 20 6 20 25 0 28 -9 30 -63 11z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M1980 325 c0 -19 5 -25 20 -25 84 0 137 -108 95 -190 -16 -32 -61
        -60 -95 -60 -15 0 -20 -6 -20 -26 0 -24 2 -25 33 -19 103 22 164 116 137 215
        -16 58 -61 105 -114 119 -58 14 -56 15 -56 -14z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M2220 178 c0 -161 1 -168 20 -168 19 0 20 7 20 168 0 161 -1 168 -20
        168 -19 0 -20 -7 -20 -168z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M2500 178 c0 -161 1 -168 20 -168 19 0 20 7 20 168 0 161 -1 168 -20
        168 -19 0 -20 -7 -20 -168z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M2717 336 c-74 -27 -108 -78 -108 -161 0 -94 46 -151 139 -168 29 -6
        32 -4 32 18 0 19 -5 25 -20 25 -56 0 -110 62 -110 124 0 66 52 126 110 126 15
        0 20 6 20 25 0 28 -9 30 -63 11z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M2800 325 c0 -19 5 -25 20 -25 34 0 79 -28 95 -60 42 -82 -11 -190
        -95 -190 -13 0 -20 -7 -20 -19 0 -28 10 -31 58 -19 50 12 96 60 111 115 15 52
        13 72 -8 118 -24 52 -56 80 -106 94 -54 15 -55 15 -55 -14z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M230 320 c0 -18 7 -20 58 -20 80 0 111 -35 82 -91 -9 -16 -22 -19
        -75 -19 -63 0 -65 -1 -65 -25 0 -24 2 -25 64 -25 74 0 108 20 126 74 9 27 8
        42 -4 69 -19 46 -41 57 -120 57 -59 0 -66 -2 -66 -20z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M970 320 c0 -18 7 -20 59 -20 82 0 111 -33 81 -91 -9 -16 -22 -19
        -75 -19 -63 0 -65 -1 -65 -25 0 -22 4 -25 38 -25 34 0 40 -5 79 -64 31 -47 49
        -65 70 -69 15 -3 29 -4 30 -3 1 1 -19 32 -44 68 l-46 67 26 21 c38 30 52 80
        33 123 -19 46 -41 57 -120 57 -59 0 -66 -2 -66 -20z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M1600 320 c0 -18 7 -20 80 -20 73 0 80 2 80 20 0 18 -7 20 -80 20
        -73 0 -80 -2 -80 -20z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M1320 140 c0 -123 1 -130 20 -130 19 0 20 7 20 130 0 123 -1 130 -20
        130 -19 0 -20 -7 -20 -130z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M1600 183 c0 -22 4 -23 66 -23 61 0 65 1 62 21 -3 19 -10 21 -66 23
        -58 1 -62 0 -62 -21z`
            }
          ),
          /* @__PURE__ */ m.jsx(
            "path",
            {
              d: `M2290 30 c0 -18 7 -20 80 -20 73 0 80 2 80 20 0 18 -7 20 -80 20 -73
        0 -80 -2 -80 -20z`
            }
          )
        ]
      }
    )
  }
), ng = (e) => /* @__PURE__ */ m.jsxs(
  "svg",
  {
    width: "40px",
    height: "40px",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    fill: e.fill || "#000000",
    children: [
      /* @__PURE__ */ m.jsx("path", { d: "M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z" }),
      /* @__PURE__ */ m.jsx("polygon", { points: "142.319 241.027 164.947 263.654 240 188.602 240 376 272 376 272 188.602 347.053 263.654 369.681 241.027 256 127.347 142.319 241.027" })
    ]
  }
), rg = (e) => /* @__PURE__ */ m.jsxs(
  "svg",
  {
    width: "80px",
    height: "80px",
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    fill: e.fill || "#000000",
    children: [
      /* @__PURE__ */ m.jsx("path", { d: "M256,16.042c-132.548,0-240,107.451-240,240s107.452,240,240,240,240-107.452,240-240S388.548,16.042,256,16.042ZM403.078,403.12A207.253,207.253,0,1,1,447.667,337,207.364,207.364,0,0,1,403.078,403.12Z" }),
      /* @__PURE__ */ m.jsx("polygon", { points: "272.614 164.987 249.986 142.36 136.305 256.041 249.986 369.722 272.614 347.095 197.56 272.041 385 272.041 385 240.041 197.56 240.041 272.614 164.987" })
    ]
  }
), ig = (e) => /* @__PURE__ */ m.jsx(
  "svg",
  {
    width: "80px",
    height: "80px",
    viewBox: "0 0 75.294 75.294",
    xmlns: "http://www.w3.org/2000/svg",
    fill: e.fill || "#000000",
    children: /* @__PURE__ */ m.jsx("g", { children: /* @__PURE__ */ m.jsx(
      "path",
      {
        d: `M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
            c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
            H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
            c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
            c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
            c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
            c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z`
      }
    ) })
  }
), sg = (e) => /* @__PURE__ */ m.jsx(
  "svg",
  {
    width: "80px",
    height: "80px",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: e.fill || "#000000",
    children: /* @__PURE__ */ m.jsx("path", { d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" })
  }
), Er = O(on.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(e) => e.theme.text};
  color: ${(e) => e.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(e) => e.theme.body};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(e) => e.theme.body};
    color: ${(e) => e.theme.text};
    border: 1px solid ${(e) => e.theme.text};
  }
`, og = O.h2`
  font-size: calc(1em + 0.5vw);
`, ag = O.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: 'Karla', sans-serif;
  font-weight: 500;
`, lg = O.div`
  border-top: 2px solid ${(e) => e.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  ${Er}:hover & {
    border-top: 2px solid ${(e) => e.theme.text};
  }
`, cg = O.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`, ug = O.footer`
  display: flex;
  justify-content: space-between;
`, hg = O.a`
  background-color: ${(e) => e.theme.body};
  color: ${(e) => e.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);

  ${Er}:hover & {
    background-color: ${(e) => e.theme.text};
    color: ${(e) => e.theme.body};
  }
`, dg = O.a`
  color: inherit;
  text-decoration: none;

  ${Er}:hover & {
    & > * {
      fill: ${(e) => e.theme.text};
    }
  }
`, fg = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5
    }
  }
}, pg = (e) => {
  const { id: t, name: n, description: r, tags: i, demo: o, github: s } = e.data;
  return /* @__PURE__ */ m.jsxs(Er, { variants: fg, children: [
    /* @__PURE__ */ m.jsx(og, { children: n }),
    /* @__PURE__ */ m.jsx(ag, { children: r }),
    /* @__PURE__ */ m.jsx(lg, { children: i.map((l, a) => /* @__PURE__ */ m.jsxs(cg, { children: [
      "#",
      l
    ] }, a)) }),
    /* @__PURE__ */ m.jsxs(ug, { children: [
      /* @__PURE__ */ m.jsx(hg, { href: o, target: "_blank", children: "Visit" }),
      /* @__PURE__ */ m.jsx(dg, { href: s, target: "_blank", children: /* @__PURE__ */ m.jsx(Rc, { width: 30, height: 30 }) })
    ] })
  ] }, t);
}, mg = Ni`
  0% {
    transform: scale(30);
  }
  100% {
    transform: scale(0);
  }
`, gg = O.div`
  width: 10vw;
  height: 10vw;
  background-color: transparent;
  border: 5px solid ${({ theme: e }) => e.text}; // Use theme color for the border
  border-radius: 50%;
  margin: 0 10px;
  position: absolute;
  left: calc(50% - 5vw);
  top: calc(50% - 5vw);
  animation: ${mg} 10s linear infinite;
  animation-delay: ${({ index: e }) => `${e * 2}s`};
  transform: scale(30);
`, vg = O.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: e }) => e.body}; // Use theme background color
  z-index: 1; /* Ensures it is behind other components */
  overflow: hidden; /* Prevents overflow outside the container */
`, yg = ({ theme: e }) => {
  const t = Array.from({ length: 7 }, (n, r) => /* @__PURE__ */ m.jsx(gg, { index: r, theme: e }, r));
  return /* @__PURE__ */ m.jsx(vg, { theme: e, children: t });
}, Ag = O.span`
  position: fixed;
  width: 2rem;
  height: 2rem;
  border: 2px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s;
  mix-blend-mode: difference;
  z-index: 999;
  pointer-events: none;
`, xg = O.span`
  position: fixed;
  width: 0.8rem;
  height: 0.8rem;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s;
  mix-blend-mode: difference;
  z-index: 999;
  pointer-events: none;
`, Sr = () => {
  const [e, t] = ce({ x: 0, y: 0 }), [n, r] = ce({ x: 0, y: 0 });
  return Fe(() => {
    const i = (s) => {
      t({ x: s.clientX, y: s.clientY });
    }, o = (s) => {
      if (s.touches.length > 0) {
        const l = s.touches[0];
        t({ x: l.clientX, y: l.clientY });
      }
    };
    return document.addEventListener("mousemove", i), document.addEventListener("touchmove", o), () => {
      document.removeEventListener("mousemove", i), document.removeEventListener("touchmove", o);
    };
  }, []), Fe(() => {
    let i = e.x, o = e.y, s = n.x, l = n.y;
    const a = () => {
      i += (e.x - i) / 15, o += (e.y - o) / 15, t({ x: i, y: o });
    }, c = () => {
      s += (e.x - s) / 25, l += (e.y - l) / 25, r({ x: s, y: l });
    }, h = setInterval(a, 0.5), u = setInterval(c, 1.5);
    return () => {
      clearInterval(h), clearInterval(u);
    };
  }, [e]), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(
      Ag,
      {
        style: { left: `${e.x}px`, top: `${e.y}px` }
      }
    ),
    /* @__PURE__ */ m.jsx(
      xg,
      {
        style: {
          left: `${n.x}px`,
          top: `${n.y}px`
        }
      }
    )
  ] });
}, wg = "data:image/png;base64,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", bg = Ni`
  0% {
    transform: translate3d(0%, 0, 0);
  }
  100% {
    transform: translate3d(-99%, 0, 0);
  }
`, Pg = Ni`
  0% {
    transform: translate3d(-33%, 0, 0); /* Start from frame 4 */
  }
  100% {
    transform: translate3d(-98%, 0, 0); /* End at frame 9 */
  }
`, Eg = tl`
  :root {
    --pixel-size: 10;
  }
`, Sg = O.div`
  width: calc(7.5px * var(--pixel-size));
  height: calc(7px * var(--pixel-size));

  overflow: hidden;
  position: fixed;
  top: ${({ y: e }) => e}px;
  left: ${({ x: e }) => e}px;
  cursor: pointer; /* Make the character clickable */
`, Cg = O.img`
  width: calc(80px * var(--pixel-size));
  position: absolute;
  image-rendering: pixelated;

  animation:
    ${bg} 1.5s steps(9) 1,
    ${Pg} 0.8s steps(6) infinite;
  animation-delay: 0s, 1.5s;
  animation-fill-mode: forwards;
`, Tg = () => {
  const [e, t] = ce({ x: 20, y: 20 }), [n, r] = ce(!1), [i, o] = ce({ x: 0, y: 0 }), s = (d) => {
    if (d.button !== 0) return;
    const p = d.currentTarget.getBoundingClientRect();
    o({
      x: d.pageX - p.left,
      y: d.pageY - p.top
    }), r(!0), d.preventDefault();
  }, l = () => {
    r(!1);
  }, a = (d) => {
    n && (t({
      x: d.pageX - i.x,
      y: d.pageY - i.y
    }), d.preventDefault());
  }, c = (d) => {
    const p = d.touches[0], v = d.currentTarget.getBoundingClientRect();
    o({
      x: p.pageX - v.left,
      y: p.pageY - v.top
    }), r(!0), d.preventDefault();
  }, h = () => {
    r(!1);
  }, u = (d) => {
    if (!n) return;
    const p = d.touches[0];
    t({
      x: p.pageX - i.x,
      y: p.pageY - i.y
    }), d.preventDefault();
  };
  return Fe(() => (n ? (document.addEventListener("mousemove", a), document.addEventListener("mouseup", l), document.addEventListener("touchmove", u, {
    passive: !1
  }), document.addEventListener("touchend", h)) : (document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", l), document.removeEventListener("touchmove", u), document.removeEventListener("touchend", h)), () => {
    document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", l), document.removeEventListener("touchmove", u), document.removeEventListener("touchend", h);
  }), [n]), /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx(Eg, {}),
    /* @__PURE__ */ m.jsx(
      Sg,
      {
        x: e.x,
        y: e.y,
        onMouseDown: s,
        onTouchStart: (d) => c(d.nativeEvent),
        children: /* @__PURE__ */ m.jsx(Cg, { src: wg, alt: "Character" })
      }
    )
  ] });
}, Dg = O.canvas`
  display: block;
  margin: 0;
  background-color: black;
  overflow: hidden;
  z-index: -1;
  position: absolute;
`, Rg = () => {
  const e = ve(null), [t, n] = ce(500), [r, i] = ce(8), [o, s] = ce(window.innerWidth / 2), [l, a] = ce(window.innerHeight / 2), c = [], h = () => {
    let p, v;
    do
      p = Math.random() * window.innerWidth, v = Math.random() * window.innerHeight;
    while (Math.hypot(p - o, v - l) < 3);
    return {
      x: p,
      y: v,
      z: Math.random() * window.innerWidth,
      o: Math.random(),
      size: Math.random() * 3 + 2
      // Random size between 2 and 5
    };
  }, u = () => {
    c.length = 0;
    for (let p = 0; p < t; p++)
      c.push(h());
  };
  Fe(() => {
    const p = e.current;
    if (!p) return;
    p.width = window.innerWidth, p.height = window.innerHeight;
    const v = p.getContext("2d");
    if (!v) return;
    let y;
    const A = () => {
      v.clearRect(0, 0, p.width, p.height);
      for (const b of c) {
        b.z -= r, b.z <= 0 && (Object.assign(b, h()), b.z = p.width);
        const C = (b.x - o) * (p.width / b.z) + o, T = (b.y - l) * (p.width / b.z) + l, D = (1 - b.z / p.width) * b.size;
        v.fillStyle = "white", v.fillRect(C, T, D, D);
      }
      y = requestAnimationFrame(A);
    };
    u(), A();
    const g = d((b) => {
      s(b.clientX), a(b.clientY);
    }, 10), w = (b) => {
      b.code === "ArrowUp" || b.code === "KeyW" ? i(r + 1) : b.code === "ArrowDown" || b.code === "KeyS" ? i(Math.max(1, r - 1)) : b.code === "NumpadAdd" ? (n(t + 100), u()) : b.code === "NumpadSubtract" && (n(Math.max(100, t - 100)), u());
    };
    return document.addEventListener("mousemove", g), document.addEventListener("keydown", w), () => {
      cancelAnimationFrame(y), document.removeEventListener("mousemove", g), document.removeEventListener("keydown", w);
    };
  }, [t, r, o, l]);
  const d = (p, v) => {
    let y;
    return (...A) => {
      clearTimeout(y), y = setTimeout(() => p(...A), v);
    };
  };
  return /* @__PURE__ */ m.jsx(Dg, { ref: e });
}, kg = O.div`
  background: ${(e) => e.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }

  @media (max-width: 1200px) {
    /* Styles for screens smaller than 1200px */
  }

  @media (max-width: 768px) {
    /* Styles for screens smaller than 768px */
  }

  @media (max-width: 480px) {
    /* Styles for screens smaller than 480px */
  }
`, Mg = O.div`
  padding: 2rem;

  @media (max-width: 1200px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`, Og = O.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    bottom: 0.25rem;
  }
`, jg = O(lr)`
  color: ${(e) => e.click ? e.theme.body : e.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
  padding: 1rem; /* Add padding */
  margin: 0; /* Ensure no extra margin */

  @media (max-width: 1200px) {
    left: calc(0.5rem + 2vw);
  }

  @media (max-width: 768px) {
    left: calc(0.5rem + 1vw);
    font-size: 1rem;
    margin-left: 10px; /* Ensure no extra margin */
    top: 49%;
  }

  @media (max-width: 480px) {
    left: calc(0.25rem + 0.5vw);
    font-size: 0.8rem;
  }
`, Bg = O(lr)`
  color: ${(e) => e.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  padding: 1rem; /* Add padding */
  margin: 0; /* Ensure no extra margin */

  @media (max-width: 1200px) {
    right: calc(0.5rem + 2vw);
  }

  @media (max-width: 768px) {
    right: calc(0.5rem + 1vw);
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    right: calc(0.25rem + 0.5vw);
    font-size: 0.8rem;
  }
`, Ig = O(lr)`
  color: ${(e) => e.theme.text};
  text-decoration: none;
  z-index: 1;
  padding: 1rem; /* Add padding */
  margin: 0; /* Ensure no extra margin */

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`, Lg = O.div`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  svg {
    width: 100%; // Adjust the size of the Portfolio icon
    height: 50px;
    fill: ${(e) => e.theme.text};
  }

  @media (max-width: 768px) {
    top: 1rem;
    svg {
      height: 40px;
    }
  }

  @media (max-width: 480px) {
    top: 0.5rem;
    svg {
      height: 30px;
    }
  }
`, Ng = O.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(e) => e.click ? "50%" : "0%"};
  height: ${(e) => e.click ? "100%" : "0%"};
  z-index: 1;
  transition:
    height 0.5s ease,
    width 1s ease 0.5s;

  @media (max-width: 1200px) {
    width: ${(e) => e.click ? "40%" : "0%"};
  }

  @media (max-width: 768px) {
    width: ${(e) => e.click ? "30%" : "0%"};
  }

  @media (max-width: 480px) {
    width: ${(e) => e.click ? "20%" : "0%"};
  }
`, da = () => {
  const [e] = ce(!1);
  return /* @__PURE__ */ m.jsxs(kg, { children: [
    /* @__PURE__ */ m.jsx(Tg, {}),
    /* @__PURE__ */ m.jsx(Sr, {}),
    /* @__PURE__ */ m.jsx(Ng, { click: e }),
    /* @__PURE__ */ m.jsxs(Mg, { children: [
      /* @__PURE__ */ m.jsx(Lg, { children: /* @__PURE__ */ m.jsx(tg, {}) }),
      /* @__PURE__ */ m.jsx(jg, { to: "/work", click: e, children: /* @__PURE__ */ m.jsx(
        on.h2,
        {
          initial: { y: -200 },
          animate: { y: 0 },
          transition: { type: "spring", duration: 1, delay: 1 },
          whileHover: { scale: 1.2 },
          whileTap: { scale: 0.9 },
          children: "Work"
        }
      ) }),
      /* @__PURE__ */ m.jsx(Bg, { to: "/About", children: /* @__PURE__ */ m.jsx(
        on.h2,
        {
          initial: { y: -200 },
          animate: { y: 0 },
          transition: { type: "spring", duration: 1, delay: 1 },
          whileHover: { scale: 1.2 },
          whileTap: { scale: 0.9 },
          children: "About"
        }
      ) }),
      /* @__PURE__ */ m.jsx(Og, { children: /* @__PURE__ */ m.jsx(Ig, { to: "/skills", children: /* @__PURE__ */ m.jsx(
        on.h2,
        {
          initial: { y: 200 },
          animate: { y: 0 },
          transition: { type: "spring", duration: 1.2, delay: 1 },
          whileHover: { scale: 1.2 },
          whileTap: { scale: 0.9 },
          children: "My Skills."
        }
      ) }) })
    ] })
  ] });
}, Vg = "data:image/png;base64,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", Fg = O.div`
  perspective: 25px;
`, zg = O.div`
  width: 20em;
  height: 18em;
  background-color: white;
  background-image: url(${Vg});
  background-size: cover;
  background-position: center;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s;
`, Gg = () => {
  const e = ve(null), t = ve(null);
  return Fe(() => {
    const n = e.current, r = t.current;
    if (!n || !r) return;
    const i = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition(p) {
        this.x = p.clientX - this._x, this.y = (p.clientY - this._y) * -1;
      },
      setOrigin(p) {
        this._x = p.offsetLeft + Math.floor(p.offsetWidth / 2), this._y = p.offsetTop + Math.floor(p.offsetHeight / 2);
      }
    };
    i.setOrigin(n);
    let o = 0;
    const s = 10, l = () => o++ % s === 0, a = (p) => {
      i.updatePosition(p), c(
        (i.y / r.offsetHeight / 2).toFixed(2),
        (i.x / r.offsetWidth / 2).toFixed(2)
      );
    }, c = (p, v) => {
      const y = `rotateX(${p}deg) rotateY(${v}deg)`;
      r.style.transform = y;
    }, h = (p) => {
      a(p);
    }, u = () => {
      r.style.transform = "";
    }, d = (p) => {
      l() && a(p);
    };
    return n.addEventListener("mouseenter", h), n.addEventListener("mouseleave", u), n.addEventListener("mousemove", d), () => {
      n.removeEventListener("mouseenter", h), n.removeEventListener("mouseleave", u), n.removeEventListener("mousemove", d);
    };
  }, []), /* @__PURE__ */ m.jsx(Fg, { ref: e, children: /* @__PURE__ */ m.jsx(zg, { ref: t }) });
}, Qg = O.div`
  border: 2px solid ${(e) => e.theme.text};
  color: ${(e) => e.theme.text};
  background-color: ${(e) => e.theme.body};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(2.5px);
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  margin-right: 2rem; /* Add margin to the right to avoid being too close to the scrollbar */
  transition:
    background-color 0.5s ease,
    opacity 0.5s ease; /* Smooth transition for color inversion and opacity */
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 60vw;
    height: 50vh;
    font-size: calc(0.6rem + 0.8vw);
    margin-right: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 70vw;
    height: 40vh;
    font-size: calc(0.6rem + 0.6vw);
    margin-right: 1rem;
  }

  @media (max-width: 480px) {
    width: 90vw;
    height: 30vh;
    font-size: calc(0.6rem + 0.4vw);
    padding: 1rem;
    margin: 1.5rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.01); /* Example rgba for background */
    color: rgba(255, 255, 255, 0.99); /* Example rgba for text color */
  }
`, Ug = O.div`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1200px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column; /* Stack components vertically on smaller screens */
    margin-top: 4rem;
  }
`, Hg = O.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
`, Wg = O.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  width: 50vw;
  height: 60vh;

  @media (max-width: 1200px) {
    width: 60vw;
    height: 50vh;
  }

  @media (max-width: 768px) {
    width: 70vw;
    height: 40vh;
  }

  @media (max-width: 480px) {
    width: 60vw;
    height: 20vh;
  }
`, Yg = O.div`
  position: absolute;
  top: 1em;
  left: 3em;
  width: 40px;
  height: 40px;
  z-index: 3;
  transition:
    filter 0.3s ease,
    fill 0.3s ease;

  svg {
    fill: black;
    transition: fill 0.3s ease;
    filter: drop-shadow(0 0 2px white);
  }

  &:hover svg {
    fill: white;
    filter: none;
  }

  @media (max-width: 768px) {
    top: 0.2em;
    left: 0.5em;
    max-width: 30px;
    max-height: 30px;
  }
`, Kg = O.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`, qr = O.a`
  svg {
    width: 40px;
    height: 40px;
    fill: ${(e) => e.theme.text};
    transition: fill 0.3s ease;

    &:hover {
      fill: rgba(255, 255, 255, 0.5);
      filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1));
    }
  }

  @media (max-width: 768px) {
    svg {
      width: 30px;
      height: 30px;
    }
  }
`, Xg = () => {
  const [e, t] = ce(Bt), n = ve(null), r = () => {
    t(Dt);
  }, i = () => {
    t(Bt);
  };
  return /* @__PURE__ */ m.jsxs(mr, { theme: e, children: [
    /* @__PURE__ */ m.jsx(Hg, { children: /* @__PURE__ */ m.jsx(Rg, {}) }),
    /* @__PURE__ */ m.jsxs(Ug, { children: [
      /* @__PURE__ */ m.jsx(Wg, { children: /* @__PURE__ */ m.jsx(Gg, {}) }),
      /* @__PURE__ */ m.jsxs(Qg, { children: [
        "I'm a Full-Stack developer located in Canada. I love to create minimal websites with a focus on user experience.",
        /* @__PURE__ */ m.jsx("br", {}),
        " ",
        /* @__PURE__ */ m.jsx("br", {}),
        "I like trying new things and creatively done things that are not the norm. I'm an independent freelancer for hire.",
        /* @__PURE__ */ m.jsx("br", {}),
        " ",
        /* @__PURE__ */ m.jsx("br", {}),
        "I believe everything is an art when you put your consciousness into it. You can connect with me via social links below.",
        /* @__PURE__ */ m.jsxs(Kg, { children: [
          /* @__PURE__ */ m.jsx(
            qr,
            {
              href: "https://twitter.com",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ m.jsx(sg, {})
            }
          ),
          /* @__PURE__ */ m.jsx(
            qr,
            {
              href: "https://github.com/mcook-2",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /* @__PURE__ */ m.jsx(Rc, {})
            }
          ),
          /* @__PURE__ */ m.jsx(qr, { href: "mailto:Mckenzie.d.cook@gmail.com", children: /* @__PURE__ */ m.jsx(ig, {}) })
        ] })
      ] }),
      /* @__PURE__ */ m.jsx(
        Yg,
        {
          ref: n,
          onMouseEnter: r,
          onMouseLeave: i,
          children: /* @__PURE__ */ m.jsx("a", { href: "/", children: /* @__PURE__ */ m.jsx(
            rg,
            {
              width: 40,
              height: 40,
              fill: e.text,
              style: { cursor: "pointer" }
            }
          ) })
        }
      ),
      /* @__PURE__ */ m.jsx(Sr, {})
    ] })
  ] });
}, Zg = [
  {
    id: "1",
    name: "Botw Compendium App",
    description: "Built using Hyrule-Compendium-API. Replica of the The Legend of Zelda: Breath of the Wild Compendium in the browser",
    tags: ["Ruby on Rails", "CSS", "API"],
    demo: "",
    github: "https://github.com/mcook-2/botw-compendium-app.git"
  },
  {
    id: "2",
    name: "Kimi no Bento ",
    description: "PHP-based CMS that lets users create accounts, post pictures and forums about their favorite bento boxes. It also includes an admin panel for managing site content.",
    tags: ["PHP", "JavaScript", "CMS"],
    demo: "",
    github: "https://github.com/mcook-2/cms-kimi-no-bento.git"
  },
  {
    id: "3",
    name: "2000 Viper Corp",
    description: "E-commerce Site. Built from ground up. Clothing retailer that specializes in Y2K and vaporwave-inspired fashion",
    tags: ["Ruby on Rails", "E-commerce", "Sass"],
    demo: "",
    github: "https://github.com/mcook-2/viper_corp"
  },
  {
    id: "4",
    name: "Winnipeg Park & Open Space Map",
    description: "A dynamic map of Winnipeg's parks and open spaces using Leaflet API and AJAX to fetch and display GeoJSON data.",
    tags: ["JavaScript", "CSS", "HTML"],
    demo: "https://mcook-2.github.io/winnipeg-parks-map/",
    github: "https://github.com/mcook-2/winnipeg-parks-map.git"
  }
], Jg = O.div`
  background-color: ${(e) => e.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
  transition: background-color 0.5s ease;
`, qg = O(on.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`, kc = O.span`
  display: block;
  position: fixed;
  width: 80px;
  height: 80px;
  z-index: 1;
`, _g = O(kc)`
  top: 10px;
  left: 10px;
`, $g = O(kc)`
  right: 1rem;
  bottom: 1rem;
`, ev = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}, tv = () => {
  const [e, t] = ce(Bt), n = ve(null), r = ve(null), i = ve(null);
  Fe(() => {
    const l = n.current, a = r.current, c = i.current, h = () => {
      const u = `rotate(${-window.pageYOffset}deg)`;
      l && (l.style.transform = `translateX(${-window.pageYOffset}px)`), a && (a.style.transform = u), c && (c.style.transform = u);
    };
    return window.addEventListener("scroll", h), () => {
      window.removeEventListener("scroll", h);
    };
  }, []);
  const o = () => {
    t(Dt);
  }, s = () => {
    t(Bt);
  };
  return /* @__PURE__ */ m.jsxs(mr, { theme: e, children: [
    /* @__PURE__ */ m.jsx(Sr, {}),
    /* @__PURE__ */ m.jsxs(Jg, { children: [
      /* @__PURE__ */ m.jsx(qg, { ref: n, variants: ev, initial: "hidden", animate: "show", children: Zg.map((l) => /* @__PURE__ */ m.jsx(pg, { data: l }, l.id)) }),
      /* @__PURE__ */ m.jsx($g, { ref: r, children: /* @__PURE__ */ m.jsx($0, { width: 80, height: 80, fill: e.text }) }),
      /* @__PURE__ */ m.jsx(
        _g,
        {
          ref: i,
          onMouseEnter: o,
          onMouseLeave: s,
          children: /* @__PURE__ */ m.jsx("a", { href: "/", children: /* @__PURE__ */ m.jsx(
            eg,
            {
              width: 80,
              height: 80,
              fill: e.text,
              style: { cursor: "pointer" }
            }
          ) })
        }
      )
    ] })
  ] });
}, nv = O.div`
  position: absolute;
  top: 1em;
  left: 3em;
  width: 40px;
  height: 40px;
  z-index: 3;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:active {
    transform: scale(1.1);
  }
`, rv = O.div`
  background-color: ${(e) => e.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  overflow: hidden;
  flex-direction: row; /* Default to row layout */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack components vertically on smaller screens */
  }
`, or = O.div`
  border: 2px solid ${(e) => e.theme.text};
  color: ${(e) => e.theme.text};
  background-color: ${(e) => e.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 2;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.5s ease;

  &:hover {
    color: ${(e) => e.theme.body};
    background-color: ${(e) => e.theme.text};
  }

  @media (max-width: 1200px) {
    width: 40vw;
    height: 50vh;
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: auto;
    margin-bottom: 1rem; /* Add space between stacked components */
  }

  @media (max-width: 480px) {
    width: 90vw;
    height: auto;
  }
`, fa = O.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${or}:hover & {
    & > * {
      fill: ${(e) => e.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }

  @media (max-width: 1200px) {
    font-size: calc(0.9em + 0.9vw);
  }

  @media (max-width: 768px) {
    font-size: calc(0.8em + 0.8vw);
  }

  @media (max-width: 480px) {
    font-size: calc(0.7em + 0.7vw);
  }
`, wt = O.div`
  color: ${(e) => e.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${or}:hover & {
    color: ${(e) => e.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }

  @media (max-width: 1200px) {
    font-size: calc(0.55em + 0.9vw);
  }

  @media (max-width: 768px) {
    font-size: calc(0.5em + 0.8vw);
  }

  @media (max-width: 480px) {
    font-size: calc(0.45em + 0.7vw);
  }
`, iv = () => {
  const [e, t] = ce(Dt), [n, r] = ce(!1), i = ve(null), o = () => {
    n || t(Dt);
  }, s = () => {
    n || t(Bt);
  }, l = () => {
    r(!n), t(n ? Bt : Dt);
  };
  return /* @__PURE__ */ m.jsxs(mr, { theme: e, children: [
    /* @__PURE__ */ m.jsx(Sr, {}),
    /* @__PURE__ */ m.jsxs(rv, { children: [
      /* @__PURE__ */ m.jsx(yg, { theme: e }),
      /* @__PURE__ */ m.jsx(
        nv,
        {
          ref: i,
          onMouseEnter: o,
          onMouseLeave: s,
          onTouchStart: l,
          children: /* @__PURE__ */ m.jsx("a", { href: "/", children: /* @__PURE__ */ m.jsx(
            ng,
            {
              width: 40,
              height: 40,
              fill: e.text,
              style: { cursor: "pointer" }
            }
          ) })
        }
      ),
      /* @__PURE__ */ m.jsxs(or, { children: [
        /* @__PURE__ */ m.jsx(fa, { children: "Design Philosophy" }),
        /* @__PURE__ */ m.jsx(wt, { children: "I love to create designs that speak, keeping them clean, minimal, and simple." }),
        /* @__PURE__ */ m.jsxs(wt, { children: [
          /* @__PURE__ */ m.jsx("strong", { children: "I like to Design" }),
          /* @__PURE__ */ m.jsxs("ul", { children: [
            /* @__PURE__ */ m.jsx("li", { children: "Web Design" }),
            /* @__PURE__ */ m.jsx("li", { children: "Mobile Apps" }),
            /* @__PURE__ */ m.jsx("li", { children: "E-commerce" })
          ] })
        ] }),
        /* @__PURE__ */ m.jsxs(wt, { children: [
          /* @__PURE__ */ m.jsx("strong", { children: "Tools" }),
          /* @__PURE__ */ m.jsx("ul", { children: /* @__PURE__ */ m.jsx("li", { children: "Figma" }) })
        ] })
      ] }),
      /* @__PURE__ */ m.jsxs(or, { children: [
        /* @__PURE__ */ m.jsx(fa, { children: "Professional Skills" }),
        /* @__PURE__ */ m.jsx(wt, { children: "I value the business or brand for which I'm creating, and I enjoy bringing new ideas to life." }),
        /* @__PURE__ */ m.jsxs(wt, { children: [
          /* @__PURE__ */ m.jsx("strong", { children: "Skills" }),
          /* @__PURE__ */ m.jsx("p", { children: "HTML, CSS, JS, PHP, React, Sass, Bootstrap, Ruby on Rails, etc." })
        ] }),
        /* @__PURE__ */ m.jsxs(wt, { children: [
          /* @__PURE__ */ m.jsx("strong", { children: "Tools" }),
          /* @__PURE__ */ m.jsx("p", { children: "VS Code, GitHub, Photoshop, etc." })
        ] })
      ] })
    ] })
  ] });
}, sv = () => /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
  /* @__PURE__ */ m.jsx(Rd, {}),
  /* @__PURE__ */ m.jsx(mr, { theme: Dt, children: /* @__PURE__ */ m.jsx(fh, { children: /* @__PURE__ */ m.jsxs(_u, { children: [
    /* @__PURE__ */ m.jsx(bt, { path: "/", element: /* @__PURE__ */ m.jsx(da, {}) }),
    /* @__PURE__ */ m.jsx(bt, { path: "/About", element: /* @__PURE__ */ m.jsx(Xg, {}) }),
    /* @__PURE__ */ m.jsx(bt, { path: "/Work", element: /* @__PURE__ */ m.jsx(tv, {}) }),
    /* @__PURE__ */ m.jsx(bt, { path: "/Skills", element: /* @__PURE__ */ m.jsx(iv, {}) }),
    /* @__PURE__ */ m.jsx(bt, { path: "*", element: /* @__PURE__ */ m.jsx(da, {}) })
  ] }) }) })
] }), pa = document.getElementById("app");
pa ? Jt.createRoot(pa).render(
  /* @__PURE__ */ m.jsx(se.StrictMode, { children: /* @__PURE__ */ m.jsx(sv, {}) })
) : console.error("Root element not found");
