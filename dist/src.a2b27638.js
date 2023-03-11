// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/plyr/dist/plyr.min.js":[function(require,module,exports) {
var define;
var global = arguments[3];
var _excluded = ["premium", "referrerPolicy"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
"object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) && function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Plyr = t();
}(this, function () {
  "use strict";

  function e(e, t, i) {
    return (t = function (e) {
      var t = function (e, t) {
        if ("object" != _typeof(e) || null === e) return e;
        var i = e[Symbol.toPrimitive];
        if (void 0 !== i) {
          var s = i.call(e, t || "default");
          if ("object" != _typeof(s)) return s;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }(e, "string");
      return "symbol" == _typeof(t) ? t : String(t);
    }(t)) in e ? Object.defineProperty(e, t, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = i, e;
  }
  function t(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
    }
  }
  function i(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = i, e;
  }
  function s(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      t && (s = s.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, s);
    }
    return i;
  }
  function n(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(Object(n), !0).forEach(function (t) {
        i(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  var a = {
    addCSS: !0,
    thumbWidth: 15,
    watch: !0
  };
  var l = function l(e) {
      return null != e ? e.constructor : null;
    },
    r = function r(e, t) {
      return !!(e && t && e instanceof t);
    },
    o = function o(e) {
      return null == e;
    },
    c = function c(e) {
      return l(e) === Object;
    },
    u = function u(e) {
      return l(e) === String;
    },
    h = function h(e) {
      return Array.isArray(e);
    },
    d = function d(e) {
      return r(e, NodeList);
    },
    m = {
      nullOrUndefined: o,
      object: c,
      number: function number(e) {
        return l(e) === Number && !Number.isNaN(e);
      },
      string: u,
      boolean: function boolean(e) {
        return l(e) === Boolean;
      },
      function: function _function(e) {
        return l(e) === Function;
      },
      array: h,
      nodeList: d,
      element: function element(e) {
        return r(e, Element);
      },
      event: function event(e) {
        return r(e, Event);
      },
      empty: function empty(e) {
        return o(e) || (u(e) || h(e) || d(e)) && !e.length || c(e) && !Object.keys(e).length;
      }
    };
  function p(e, t) {
    if (1 > t) {
      var i = function (e) {
        var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
      }(t);
      return parseFloat(e.toFixed(i));
    }
    return Math.round(e / t) * t;
  }
  var g = function () {
    function e(t, i) {
      (function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      })(this, e), m.element(t) ? this.element = t : m.string(t) && (this.element = document.querySelector(t)), m.element(this.element) && m.empty(this.element.rangeTouch) && (this.config = n({}, a, {}, i), this.init());
    }
    return function (e, i, s) {
      i && t(e.prototype, i), s && t(e, s);
    }(e, [{
      key: "init",
      value: function value() {
        e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this);
      }
    }, {
      key: "destroy",
      value: function value() {
        e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null);
      }
    }, {
      key: "listeners",
      value: function value(e) {
        var t = this,
          i = e ? "addEventListener" : "removeEventListener";
        ["touchstart", "touchmove", "touchend"].forEach(function (e) {
          t.element[i](e, function (e) {
            return t.set(e);
          }, !1);
        });
      }
    }, {
      key: "get",
      value: function value(t) {
        if (!e.enabled || !m.event(t)) return null;
        var i,
          s = t.target,
          n = t.changedTouches[0],
          a = parseFloat(s.getAttribute("min")) || 0,
          l = parseFloat(s.getAttribute("max")) || 100,
          r = parseFloat(s.getAttribute("step")) || 1,
          o = s.getBoundingClientRect(),
          c = 100 / o.width * (this.config.thumbWidth / 2) / 100;
        return 0 > (i = 100 / o.width * (n.clientX - o.left)) ? i = 0 : 100 < i && (i = 100), 50 > i ? i -= (100 - 2 * i) * c : 50 < i && (i += 2 * (i - 50) * c), a + p(i / 100 * (l - a), r);
      }
    }, {
      key: "set",
      value: function value(t) {
        e.enabled && m.event(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function (e, t) {
          if (e && t) {
            var i = new Event(t, {
              bubbles: !0
            });
            e.dispatchEvent(i);
          }
        }(t.target, "touchend" === t.type ? "change" : "input"));
      }
    }], [{
      key: "setup",
      value: function value(t) {
        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          s = null;
        if (m.empty(t) || m.string(t) ? s = Array.from(document.querySelectorAll(m.string(t) ? t : 'input[type="range"]')) : m.element(t) ? s = [t] : m.nodeList(t) ? s = Array.from(t) : m.array(t) && (s = t.filter(m.element)), m.empty(s)) return null;
        var l = n({}, a, {}, i);
        if (m.string(t) && l.watch) {
          var r = new MutationObserver(function (i) {
            Array.from(i).forEach(function (i) {
              Array.from(i.addedNodes).forEach(function (i) {
                m.element(i) && function (e, t) {
                  return function () {
                    return Array.from(document.querySelectorAll(t)).includes(this);
                  }.call(e, t);
                }(i, t) && new e(i, l);
              });
            });
          });
          r.observe(document.body, {
            childList: !0,
            subtree: !0
          });
        }
        return s.map(function (t) {
          return new e(t, i);
        });
      }
    }, {
      key: "enabled",
      get: function get() {
        return "ontouchstart" in document.documentElement;
      }
    }]), e;
  }();
  var f = function f(e) {
      return null != e ? e.constructor : null;
    },
    y = function y(e, t) {
      return Boolean(e && t && e instanceof t);
    },
    b = function b(e) {
      return null == e;
    },
    v = function v(e) {
      return f(e) === Object;
    },
    w = function w(e) {
      return f(e) === String;
    },
    T = function T(e) {
      return "function" == typeof e;
    },
    k = function k(e) {
      return Array.isArray(e);
    },
    C = function C(e) {
      return y(e, NodeList);
    },
    A = function A(e) {
      return b(e) || (w(e) || k(e) || C(e)) && !e.length || v(e) && !Object.keys(e).length;
    };
  var S = {
    nullOrUndefined: b,
    object: v,
    number: function number(e) {
      return f(e) === Number && !Number.isNaN(e);
    },
    string: w,
    boolean: function boolean(e) {
      return f(e) === Boolean;
    },
    function: T,
    array: k,
    weakMap: function weakMap(e) {
      return y(e, WeakMap);
    },
    nodeList: C,
    element: function element(e) {
      return null !== e && "object" == _typeof(e) && 1 === e.nodeType && "object" == _typeof(e.style) && "object" == _typeof(e.ownerDocument);
    },
    textNode: function textNode(e) {
      return f(e) === Text;
    },
    event: function event(e) {
      return y(e, Event);
    },
    keyboardEvent: function keyboardEvent(e) {
      return y(e, KeyboardEvent);
    },
    cue: function cue(e) {
      return y(e, window.TextTrackCue) || y(e, window.VTTCue);
    },
    track: function track(e) {
      return y(e, TextTrack) || !b(e) && w(e.kind);
    },
    promise: function promise(e) {
      return y(e, Promise) && T(e.then);
    },
    url: function url(e) {
      if (y(e, window.URL)) return !0;
      if (!w(e)) return !1;
      var t = e;
      e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));
      try {
        return !A(new URL(t).hostname);
      } catch (e) {
        return !1;
      }
    },
    empty: A
  };
  var E = function () {
    var e = document.createElement("span"),
      t = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      },
      i = Object.keys(t).find(function (t) {
        return void 0 !== e.style[t];
      });
    return !!S.string(i) && t[i];
  }();
  function P(e, t) {
    setTimeout(function () {
      try {
        e.hidden = !0, e.offsetHeight, e.hidden = !1;
      } catch (e) {}
    }, t);
  }
  var M = {
    isIE: Boolean(window.document.documentMode),
    isEdge: /Edge/g.test(navigator.userAgent),
    isWebKit: "WebkitAppearance" in document.documentElement.style && !/Edge/g.test(navigator.userAgent),
    isIPhone: /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1,
    isIPadOS: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
    isIos: /iPad|iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1
  };
  function N(e, t) {
    return t.split(".").reduce(function (e, t) {
      return e && e[t];
    }, e);
  }
  function x(e = {}, ...t) {
    if (!t.length) return e;
    var i = t.shift();
    return S.object(i) ? (Object.keys(i).forEach(function (t) {
      S.object(i[t]) ? (Object.keys(e).includes(t) || Object.assign(e, _defineProperty({}, t, {})), x(e[t], i[t])) : Object.assign(e, _defineProperty({}, t, i[t]));
    }), x.apply(void 0, [e].concat(t))) : e;
  }
  function L(e, t) {
    var i = e.length ? e : [e];
    Array.from(i).reverse().forEach(function (e, i) {
      var s = i > 0 ? t.cloneNode(!0) : t,
        n = e.parentNode,
        a = e.nextSibling;
      s.appendChild(e), a ? n.insertBefore(s, a) : n.appendChild(s);
    });
  }
  function I(e, t) {
    S.element(e) && !S.empty(t) && Object.entries(t).filter(function ([, e]) {
      return !S.nullOrUndefined(e);
    }).forEach(function ([t, i]) {
      return e.setAttribute(t, i);
    });
  }
  function $(e, t, i) {
    var s = document.createElement(e);
    return S.object(t) && I(s, t), S.string(i) && (s.innerText = i), s;
  }
  function _(e, t, i, s) {
    S.element(t) && t.appendChild($(e, i, s));
  }
  function O(e) {
    S.nodeList(e) || S.array(e) ? Array.from(e).forEach(O) : S.element(e) && S.element(e.parentNode) && e.parentNode.removeChild(e);
  }
  function j(e) {
    if (!S.element(e)) return;
    var t = e.childNodes.length;
    for (; t > 0;) e.removeChild(e.lastChild), t -= 1;
  }
  function D(e, t) {
    return S.element(t) && S.element(t.parentNode) && S.element(e) ? (t.parentNode.replaceChild(e, t), e) : null;
  }
  function q(e, t) {
    if (!S.string(e) || S.empty(e)) return {};
    var i = {},
      s = x({}, t);
    return e.split(",").forEach(function (e) {
      var t = e.trim(),
        n = t.replace(".", ""),
        a = t.replace(/[[\]]/g, "").split("="),
        _a = _slicedToArray(a, 1),
        l = _a[0],
        r = a.length > 1 ? a[1].replace(/["']/g, "") : "";
      switch (t.charAt(0)) {
        case ".":
          S.string(s.class) ? i.class = "".concat(s.class, " ").concat(n) : i.class = n;
          break;
        case "#":
          i.id = t.replace("#", "");
          break;
        case "[":
          i[l] = r;
      }
    }), x(s, i);
  }
  function H(e, t) {
    if (!S.element(e)) return;
    var i = t;
    S.boolean(i) || (i = !e.hidden), e.hidden = i;
  }
  function F(e, t, i) {
    if (S.nodeList(e)) return Array.from(e).map(function (e) {
      return F(e, t, i);
    });
    if (S.element(e)) {
      var _s2 = "toggle";
      return void 0 !== i && (_s2 = i ? "add" : "remove"), e.classList[_s2](t), e.classList.contains(t);
    }
    return !1;
  }
  function R(e, t) {
    return S.element(e) && e.classList.contains(t);
  }
  function V(e, t) {
    var _Element = Element,
      i = _Element.prototype;
    return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function () {
      return Array.from(document.querySelectorAll(t)).includes(this);
    }).call(e, t);
  }
  function U(e) {
    return this.elements.container.querySelectorAll(e);
  }
  function B(e) {
    return this.elements.container.querySelector(e);
  }
  function W(e = null, t = !1) {
    S.element(e) && (e.focus({
      preventScroll: !0
    }), t && F(e, this.config.classNames.tabFocus));
  }
  var z = {
      "audio/ogg": "vorbis",
      "audio/wav": "1",
      "video/webm": "vp8, vorbis",
      "video/mp4": "avc1.42E01E, mp4a.40.2",
      "video/ogg": "theora"
    },
    K = {
      audio: "canPlayType" in document.createElement("audio"),
      video: "canPlayType" in document.createElement("video"),
      check: function check(e, t) {
        var i = K[e] || "html5" !== t;
        return {
          api: i,
          ui: i && K.rangeInput
        };
      },
      pip: !(M.isIPhone || !S.function($("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || $("video").disablePictureInPicture)),
      airplay: S.function(window.WebKitPlaybackTargetAvailabilityEvent),
      playsinline: "playsInline" in document.createElement("video"),
      mime: function mime(e) {
        if (S.empty(e)) return !1;
        var _e$split = e.split("/"),
          _e$split2 = _slicedToArray(_e$split, 1),
          t = _e$split2[0];
        var i = e;
        if (!this.isHTML5 || t !== this.type) return !1;
        Object.keys(z).includes(i) && (i += "; codecs=\"".concat(z[e], "\""));
        try {
          return Boolean(i && this.media.canPlayType(i).replace(/no/, ""));
        } catch (e) {
          return !1;
        }
      },
      textTracks: "textTracks" in document.createElement("video"),
      rangeInput: function () {
        var e = document.createElement("input");
        return e.type = "range", "range" === e.type;
      }(),
      touch: "ontouchstart" in document.documentElement,
      transitions: !1 !== E,
      reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
    },
    Y = function () {
      var e = !1;
      try {
        var _t = Object.defineProperty({}, "passive", {
          get: function get() {
            return e = !0, null;
          }
        });
        window.addEventListener("test", null, _t), window.removeEventListener("test", null, _t);
      } catch (e) {}
      return e;
    }();
  function Q(e, t, i, s = !1, n = !0, a = !1) {
    var _this = this;
    if (!e || !("addEventListener" in e) || S.empty(t) || !S.function(i)) return;
    var l = t.split(" ");
    var r = a;
    Y && (r = {
      passive: n,
      capture: a
    }), l.forEach(function (t) {
      _this && _this.eventListeners && s && _this.eventListeners.push({
        element: e,
        type: t,
        callback: i,
        options: r
      }), e[s ? "addEventListener" : "removeEventListener"](t, i, r);
    });
  }
  function X(e, t = "", i, s = !0, n = !1) {
    Q.call(this, e, t, i, !0, s, n);
  }
  function J(e, t = "", i, s = !0, n = !1) {
    Q.call(this, e, t, i, !1, s, n);
  }
  function G(e, t = "", i, s = !0, n = !1) {
    var _this2 = this;
    var a = function a(...l) {
      J(e, t, a, s, n), i.apply(_this2, l);
    };
    Q.call(this, e, t, a, !0, s, n);
  }
  function Z(e, t = "", i = !1, s = {}) {
    if (!S.element(e) || S.empty(t)) return;
    var n = new CustomEvent(t, {
      bubbles: i,
      detail: _objectSpread(_objectSpread({}, s), {}, {
        plyr: this
      })
    });
    e.dispatchEvent(n);
  }
  function ee() {
    this && this.eventListeners && (this.eventListeners.forEach(function (e) {
      var t = e.element,
        i = e.type,
        s = e.callback,
        n = e.options;
      t.removeEventListener(i, s, n);
    }), this.eventListeners = []);
  }
  function te() {
    var _this3 = this;
    return new Promise(function (e) {
      return _this3.ready ? setTimeout(e, 0) : X.call(_this3, _this3.elements.container, "ready", e);
    }).then(function () {});
  }
  function ie(e) {
    S.promise(e) && e.then(null, function () {});
  }
  function se(e) {
    return S.array(e) ? e.filter(function (t, i) {
      return e.indexOf(t) === i;
    }) : e;
  }
  function ne(e, t) {
    return S.array(e) && e.length ? e.reduce(function (e, i) {
      return Math.abs(i - t) < Math.abs(e - t) ? i : e;
    }) : null;
  }
  function ae(e) {
    return !(!window || !window.CSS) && window.CSS.supports(e);
  }
  var le = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce(function (e, [t, i]) {
    return _objectSpread(_objectSpread({}, e), {}, _defineProperty({}, t / i, [t, i]));
  }, {});
  function re(e) {
    if (!(S.array(e) || S.string(e) && e.includes(":"))) return !1;
    return (S.array(e) ? e : e.split(":")).map(Number).every(S.number);
  }
  function oe(e) {
    if (!S.array(e) || !e.every(S.number)) return null;
    var _e2 = _slicedToArray(e, 2),
      t = _e2[0],
      i = _e2[1],
      s = function s(e, t) {
        return 0 === t ? e : s(t, e % t);
      },
      n = s(t, i);
    return [t / n, i / n];
  }
  function ce(e) {
    var _this$embed;
    var t = function t(e) {
      return re(e) ? e.split(":").map(Number) : null;
    };
    var i = t(e);
    if (null === i && (i = t(this.config.ratio)), null === i && !S.empty(this.embed) && S.array(this.embed.ratio) && (_this$embed = this.embed, i = _this$embed.ratio, _this$embed), null === i && this.isHTML5) {
      var _this$media = this.media,
        _e3 = _this$media.videoWidth,
        _t2 = _this$media.videoHeight;
      i = [_e3, _t2];
    }
    return oe(i);
  }
  function ue(e) {
    if (!this.isVideo) return {};
    var t = this.elements.wrapper,
      i = ce.call(this, e);
    if (!S.array(i)) return {};
    var _oe = oe(i),
      _oe2 = _slicedToArray(_oe, 2),
      s = _oe2[0],
      n = _oe2[1],
      a = 100 / s * n;
    if (ae("aspect-ratio: ".concat(s, "/").concat(n)) ? t.style.aspectRatio = "".concat(s, "/").concat(n) : t.style.paddingBottom = "".concat(a, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
      var _e4 = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
        _i2 = (_e4 - a) / (_e4 / 50);
      this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = "translateY(-".concat(_i2, "%)");
    } else this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
    return {
      padding: a,
      ratio: i
    };
  }
  function he(e, t, i = .05) {
    var s = e / t,
      n = ne(Object.keys(le), s);
    return Math.abs(n - s) <= i ? le[n] : [e, t];
  }
  var de = {
    getSources: function getSources() {
      var _this4 = this;
      if (!this.isHTML5) return [];
      return Array.from(this.media.querySelectorAll("source")).filter(function (e) {
        var t = e.getAttribute("type");
        return !!S.empty(t) || K.mime.call(_this4, t);
      });
    },
    getQualityOptions: function getQualityOptions() {
      return this.config.quality.forced ? this.config.quality.options : de.getSources.call(this).map(function (e) {
        return Number(e.getAttribute("size"));
      }).filter(Boolean);
    },
    setup: function setup() {
      if (!this.isHTML5) return;
      var e = this;
      e.options.speed = e.config.speed.options, S.empty(this.config.ratio) || ue.call(e), Object.defineProperty(e.media, "quality", {
        get: function get() {
          var t = de.getSources.call(e).find(function (t) {
            return t.getAttribute("src") === e.source;
          });
          return t && Number(t.getAttribute("size"));
        },
        set: function set(t) {
          if (e.quality !== t) {
            if (e.config.quality.forced && S.function(e.config.quality.onChange)) e.config.quality.onChange(t);else {
              var _i3 = de.getSources.call(e).find(function (e) {
                return Number(e.getAttribute("size")) === t;
              });
              if (!_i3) return;
              var _e$media = e.media,
                _s3 = _e$media.currentTime,
                _n2 = _e$media.paused,
                _a2 = _e$media.preload,
                _l = _e$media.readyState,
                _r2 = _e$media.playbackRate;
              e.media.src = _i3.getAttribute("src"), ("none" !== _a2 || _l) && (e.once("loadedmetadata", function () {
                e.speed = _r2, e.currentTime = _s3, _n2 || ie(e.play());
              }), e.media.load());
            }
            Z.call(e, e.media, "qualitychange", !1, {
              quality: t
            });
          }
        }
      });
    },
    cancelRequests: function cancelRequests() {
      this.isHTML5 && (O(de.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
    }
  };
  function me(e, ...t) {
    return S.empty(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, i) {
      return t[i].toString();
    });
  }
  var pe = function pe(e = "", t = "", i = "") {
      return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString());
    },
    ge = function ge(e = "") {
      return e.toString().replace(/\w\S*/g, function (e) {
        return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
      });
    };
  function fe(e = "") {
    var t = e.toString();
    return t = function (e = "") {
      var t = e.toString();
      return t = pe(t, "-", " "), t = pe(t, "_", " "), t = ge(t), pe(t, " ", "");
    }(t), t.charAt(0).toLowerCase() + t.slice(1);
  }
  function ye(e) {
    var t = document.createElement("div");
    return t.appendChild(e), t.innerHTML;
  }
  var be = {
      pip: "PIP",
      airplay: "AirPlay",
      html5: "HTML5",
      vimeo: "Vimeo",
      youtube: "YouTube"
    },
    ve = {
      get: function get(e = "", t = {}) {
        if (S.empty(e) || S.empty(t)) return "";
        var i = N(t.i18n, e);
        if (S.empty(i)) return Object.keys(be).includes(e) ? be[e] : "";
        var s = {
          "{seektime}": t.seekTime,
          "{title}": t.title
        };
        return Object.entries(s).forEach(function ([e, t]) {
          i = pe(i, e, t);
        }), i;
      }
    };
  var we = /*#__PURE__*/function () {
    function we(t) {
      var _this5 = this;
      _classCallCheck(this, we);
      e(this, "get", function (e) {
        if (!we.supported || !_this5.enabled) return null;
        var t = window.localStorage.getItem(_this5.key);
        if (S.empty(t)) return null;
        var i = JSON.parse(t);
        return S.string(e) && e.length ? i[e] : i;
      }), e(this, "set", function (e) {
        if (!we.supported || !_this5.enabled) return;
        if (!S.object(e)) return;
        var t = _this5.get();
        S.empty(t) && (t = {}), x(t, e);
        try {
          window.localStorage.setItem(_this5.key, JSON.stringify(t));
        } catch (e) {}
      }), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key;
    }
    _createClass(we, null, [{
      key: "supported",
      get: function get() {
        try {
          if (!("localStorage" in window)) return !1;
          var _e5 = "___test";
          return window.localStorage.setItem(_e5, _e5), window.localStorage.removeItem(_e5), !0;
        } catch (e) {
          return !1;
        }
      }
    }]);
    return we;
  }();
  function Te(e, t = "text") {
    return new Promise(function (i, s) {
      try {
        var _s4 = new XMLHttpRequest();
        if (!("withCredentials" in _s4)) return;
        _s4.addEventListener("load", function () {
          if ("text" === t) try {
            i(JSON.parse(_s4.responseText));
          } catch (e) {
            i(_s4.responseText);
          } else i(_s4.response);
        }), _s4.addEventListener("error", function () {
          throw new Error(_s4.status);
        }), _s4.open("GET", e, !0), _s4.responseType = t, _s4.send();
      } catch (e) {
        s(e);
      }
    });
  }
  function ke(e, t) {
    if (!S.string(e)) return;
    var i = "cache",
      s = S.string(t);
    var n = !1;
    var a = function a() {
        return null !== document.getElementById(t);
      },
      l = function l(e, t) {
        e.innerHTML = t, s && a() || document.body.insertAdjacentElement("afterbegin", e);
      };
    if (!s || !a()) {
      var _a3 = we.supported,
        _r3 = document.createElement("div");
      if (_r3.setAttribute("hidden", ""), s && _r3.setAttribute("id", t), _a3) {
        var _e6 = window.localStorage.getItem("".concat(i, "-").concat(t));
        if (n = null !== _e6, n) {
          var _t3 = JSON.parse(_e6);
          l(_r3, _t3.content);
        }
      }
      Te(e).then(function (e) {
        if (!S.empty(e)) {
          if (_a3) try {
            window.localStorage.setItem("".concat(i, "-").concat(t), JSON.stringify({
              content: e
            }));
          } catch (e) {}
          l(_r3, e);
        }
      }).catch(function () {});
    }
  }
  var Ce = function Ce(e) {
      return Math.trunc(e / 60 / 60 % 60, 10);
    },
    Ae = function Ae(e) {
      return Math.trunc(e / 60 % 60, 10);
    },
    Se = function Se(e) {
      return Math.trunc(e % 60, 10);
    };
  function Ee(e = 0, t = !1, i = !1) {
    if (!S.number(e)) return Ee(void 0, t, i);
    var s = function s(e) {
      return "0".concat(e).slice(-2);
    };
    var n = Ce(e);
    var a = Ae(e),
      l = Se(e);
    return n = t || n > 0 ? "".concat(n, ":") : "", "".concat(i && e > 0 ? "-" : "").concat(n).concat(s(a), ":").concat(s(l));
  }
  var Pe = {
    getIconUrl: function getIconUrl() {
      var e = new URL(this.config.iconUrl, window.location),
        t = window.location.host ? window.location.host : window.top.location.host,
        i = e.host !== t || M.isIE && !window.svg4everybody;
      return {
        url: this.config.iconUrl,
        cors: i
      };
    },
    findElements: function findElements() {
      try {
        return this.elements.controls = B.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
          play: U.call(this, this.config.selectors.buttons.play),
          pause: B.call(this, this.config.selectors.buttons.pause),
          restart: B.call(this, this.config.selectors.buttons.restart),
          rewind: B.call(this, this.config.selectors.buttons.rewind),
          fastForward: B.call(this, this.config.selectors.buttons.fastForward),
          mute: B.call(this, this.config.selectors.buttons.mute),
          pip: B.call(this, this.config.selectors.buttons.pip),
          airplay: B.call(this, this.config.selectors.buttons.airplay),
          settings: B.call(this, this.config.selectors.buttons.settings),
          captions: B.call(this, this.config.selectors.buttons.captions),
          fullscreen: B.call(this, this.config.selectors.buttons.fullscreen)
        }, this.elements.progress = B.call(this, this.config.selectors.progress), this.elements.inputs = {
          seek: B.call(this, this.config.selectors.inputs.seek),
          volume: B.call(this, this.config.selectors.inputs.volume)
        }, this.elements.display = {
          buffer: B.call(this, this.config.selectors.display.buffer),
          currentTime: B.call(this, this.config.selectors.display.currentTime),
          duration: B.call(this, this.config.selectors.display.duration)
        }, S.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0;
      } catch (e) {
        return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1;
      }
    },
    createIcon: function createIcon(e, t) {
      var i = "http://www.w3.org/2000/svg",
        s = Pe.getIconUrl.call(this),
        n = "".concat(s.cors ? "" : s.url, "#").concat(this.config.iconPrefix),
        a = document.createElementNS(i, "svg");
      I(a, x(t, {
        "aria-hidden": "true",
        focusable: "false"
      }));
      var l = document.createElementNS(i, "use"),
        r = "".concat(n, "-").concat(e);
      return "href" in l && l.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r), a.appendChild(l), a;
    },
    createLabel: function createLabel(e, t = {}) {
      var i = ve.get(e, this.config);
      return $("span", _objectSpread(_objectSpread({}, t), {}, {
        class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
      }), i);
    },
    createBadge: function createBadge(e) {
      if (S.empty(e)) return null;
      var t = $("span", {
        class: this.config.classNames.menu.value
      });
      return t.appendChild($("span", {
        class: this.config.classNames.menu.badge
      }, e)), t;
    },
    createButton: function createButton(e, t) {
      var _this6 = this;
      var i = x({}, t);
      var s = fe(e);
      var n = {
        element: "button",
        toggle: !1,
        label: null,
        icon: null,
        labelPressed: null,
        iconPressed: null
      };
      switch (["element", "icon", "label"].forEach(function (e) {
        Object.keys(i).includes(e) && (n[e] = i[e], delete i[e]);
      }), "button" !== n.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some(function (e) {
        return e === _this6.config.classNames.control;
      }) || x(i, {
        class: "".concat(i.class, " ").concat(this.config.classNames.control)
      }) : i.class = this.config.classNames.control, e) {
        case "play":
          n.toggle = !0, n.label = "play", n.labelPressed = "pause", n.icon = "play", n.iconPressed = "pause";
          break;
        case "mute":
          n.toggle = !0, n.label = "mute", n.labelPressed = "unmute", n.icon = "volume", n.iconPressed = "muted";
          break;
        case "captions":
          n.toggle = !0, n.label = "enableCaptions", n.labelPressed = "disableCaptions", n.icon = "captions-off", n.iconPressed = "captions-on";
          break;
        case "fullscreen":
          n.toggle = !0, n.label = "enterFullscreen", n.labelPressed = "exitFullscreen", n.icon = "enter-fullscreen", n.iconPressed = "exit-fullscreen";
          break;
        case "play-large":
          i.class += " ".concat(this.config.classNames.control, "--overlaid"), s = "play", n.label = "play", n.icon = "play";
          break;
        default:
          S.empty(n.label) && (n.label = s), S.empty(n.icon) && (n.icon = e);
      }
      var a = $(n.element);
      return n.toggle ? (a.appendChild(Pe.createIcon.call(this, n.iconPressed, {
        class: "icon--pressed"
      })), a.appendChild(Pe.createIcon.call(this, n.icon, {
        class: "icon--not-pressed"
      })), a.appendChild(Pe.createLabel.call(this, n.labelPressed, {
        class: "label--pressed"
      })), a.appendChild(Pe.createLabel.call(this, n.label, {
        class: "label--not-pressed"
      }))) : (a.appendChild(Pe.createIcon.call(this, n.icon)), a.appendChild(Pe.createLabel.call(this, n.label))), x(i, q(this.config.selectors.buttons[s], i)), I(a, i), "play" === s ? (S.array(this.elements.buttons[s]) || (this.elements.buttons[s] = []), this.elements.buttons[s].push(a)) : this.elements.buttons[s] = a, a;
    },
    createRange: function createRange(e, t) {
      var i = $("input", x(q(this.config.selectors.inputs[e]), {
        type: "range",
        min: 0,
        max: 100,
        step: .01,
        value: 0,
        autocomplete: "off",
        role: "slider",
        "aria-label": ve.get(e, this.config),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": 0
      }, t));
      return this.elements.inputs[e] = i, Pe.updateRangeFill.call(this, i), g.setup(i), i;
    },
    createProgress: function createProgress(e, t) {
      var i = $("progress", x(q(this.config.selectors.display[e]), {
        min: 0,
        max: 100,
        value: 0,
        role: "progressbar",
        "aria-hidden": !0
      }, t));
      if ("volume" !== e) {
        i.appendChild($("span", null, "0"));
        var _t4 = {
            played: "played",
            buffer: "buffered"
          }[e],
          _s5 = _t4 ? ve.get(_t4, this.config) : "";
        i.innerText = "% ".concat(_s5.toLowerCase());
      }
      return this.elements.display[e] = i, i;
    },
    createTime: function createTime(e, t) {
      var i = q(this.config.selectors.display[e], t),
        s = $("div", x(i, {
          class: "".concat(i.class ? i.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
          "aria-label": ve.get(e, this.config)
        }), "00:00");
      return this.elements.display[e] = s, s;
    },
    bindMenuItemShortcuts: function bindMenuItemShortcuts(e, t) {
      var _this7 = this;
      X.call(this, e, "keydown keyup", function (i) {
        if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(i.key)) return;
        if (i.preventDefault(), i.stopPropagation(), "keydown" === i.type) return;
        var s = V(e, '[role="menuitemradio"]');
        if (!s && [" ", "ArrowRight"].includes(i.key)) Pe.showMenuPanel.call(_this7, t, !0);else {
          var _t5;
          " " !== i.key && ("ArrowDown" === i.key || s && "ArrowRight" === i.key ? (_t5 = e.nextElementSibling, S.element(_t5) || (_t5 = e.parentNode.firstElementChild)) : (_t5 = e.previousElementSibling, S.element(_t5) || (_t5 = e.parentNode.lastElementChild)), W.call(_this7, _t5, !0));
        }
      }, !1), X.call(this, e, "keyup", function (e) {
        "Return" === e.key && Pe.focusFirstMenuItem.call(_this7, null, !0);
      });
    },
    createMenuItem: function createMenuItem({
      value: e,
      list: t,
      type: i,
      title: s,
      badge: n = null,
      checked: a = !1
    }) {
      var _this8 = this;
      var l = q(this.config.selectors.inputs[i]),
        r = $("button", x(l, {
          type: "button",
          role: "menuitemradio",
          class: "".concat(this.config.classNames.control, " ").concat(l.class ? l.class : "").trim(),
          "aria-checked": a,
          value: e
        })),
        o = $("span");
      o.innerHTML = s, S.element(n) && o.appendChild(n), r.appendChild(o), Object.defineProperty(r, "checked", {
        enumerable: !0,
        get: function get() {
          return "true" === r.getAttribute("aria-checked");
        },
        set: function set(e) {
          e && Array.from(r.parentNode.children).filter(function (e) {
            return V(e, '[role="menuitemradio"]');
          }).forEach(function (e) {
            return e.setAttribute("aria-checked", "false");
          }), r.setAttribute("aria-checked", e ? "true" : "false");
        }
      }), this.listeners.bind(r, "click keyup", function (t) {
        if (!S.keyboardEvent(t) || " " === t.key) {
          switch (t.preventDefault(), t.stopPropagation(), r.checked = !0, i) {
            case "language":
              _this8.currentTrack = Number(e);
              break;
            case "quality":
              _this8.quality = e;
              break;
            case "speed":
              _this8.speed = parseFloat(e);
          }
          Pe.showMenuPanel.call(_this8, "home", S.keyboardEvent(t));
        }
      }, i, !1), Pe.bindMenuItemShortcuts.call(this, r, i), t.appendChild(r);
    },
    formatTime: function formatTime(e = 0, t = !1) {
      if (!S.number(e)) return e;
      return Ee(e, Ce(this.duration) > 0, t);
    },
    updateTimeDisplay: function updateTimeDisplay(e = null, t = 0, i = !1) {
      S.element(e) && S.number(t) && (e.innerText = Pe.formatTime(t, i));
    },
    updateVolume: function updateVolume() {
      this.supported.ui && (S.element(this.elements.inputs.volume) && Pe.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), S.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
    },
    setRange: function setRange(e, t = 0) {
      S.element(e) && (e.value = t, Pe.updateRangeFill.call(this, e));
    },
    updateProgress: function updateProgress(e) {
      var _this9 = this;
      if (!this.supported.ui || !S.event(e)) return;
      var t = 0;
      var i = function i(e, t) {
        var i = S.number(t) ? t : 0,
          s = S.element(e) ? e : _this9.elements.display.buffer;
        if (S.element(s)) {
          s.value = i;
          var _e7 = s.getElementsByTagName("span")[0];
          S.element(_e7) && (_e7.childNodes[0].nodeValue = i);
        }
      };
      if (e) switch (e.type) {
        case "timeupdate":
        case "seeking":
        case "seeked":
          s = this.currentTime, n = this.duration, t = 0 === s || 0 === n || Number.isNaN(s) || Number.isNaN(n) ? 0 : (s / n * 100).toFixed(2), "timeupdate" === e.type && Pe.setRange.call(this, this.elements.inputs.seek, t);
          break;
        case "playing":
        case "progress":
          i(this.elements.display.buffer, 100 * this.buffered);
      }
      var s, n;
    },
    updateRangeFill: function updateRangeFill(e) {
      var t = S.event(e) ? e.target : e;
      if (S.element(t) && "range" === t.getAttribute("type")) {
        if (V(t, this.config.selectors.inputs.seek)) {
          t.setAttribute("aria-valuenow", this.currentTime);
          var _e8 = Pe.formatTime(this.currentTime),
            _i4 = Pe.formatTime(this.duration),
            _s6 = ve.get("seekLabel", this.config);
          t.setAttribute("aria-valuetext", _s6.replace("{currentTime}", _e8).replace("{duration}", _i4));
        } else if (V(t, this.config.selectors.inputs.volume)) {
          var _e9 = 100 * t.value;
          t.setAttribute("aria-valuenow", _e9), t.setAttribute("aria-valuetext", "".concat(_e9.toFixed(1), "%"));
        } else t.setAttribute("aria-valuenow", t.value);
        (M.isWebKit || M.isIPadOS) && t.style.setProperty("--value", t.value / t.max * 100 + "%");
      }
    },
    updateSeekTooltip: function updateSeekTooltip(e) {
      var t, i;
      if (!this.config.tooltips.seek || !S.element(this.elements.inputs.seek) || !S.element(this.elements.display.seekTooltip) || 0 === this.duration) return;
      var s = this.elements.display.seekTooltip,
        n = "".concat(this.config.classNames.tooltip, "--visible"),
        a = function a(e) {
          return F(s, n, e);
        };
      if (this.touch) return void a(!1);
      var l = 0;
      var r = this.elements.progress.getBoundingClientRect();
      if (S.event(e)) l = 100 / r.width * (e.pageX - r.left);else {
        if (!R(s, n)) return;
        l = parseFloat(s.style.left, 10);
      }
      l < 0 ? l = 0 : l > 100 && (l = 100);
      var o = this.duration / 100 * l;
      s.innerText = Pe.formatTime(o);
      var c = null === (t = this.config.markers) || void 0 === t || null === (i = t.points) || void 0 === i ? void 0 : i.find(function ({
        time: e
      }) {
        return e === Math.round(o);
      });
      c && s.insertAdjacentHTML("afterbegin", "".concat(c.label, "<br>")), s.style.left = "".concat(l, "%"), S.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && a("mouseenter" === e.type);
    },
    timeUpdate: function timeUpdate(e) {
      var t = !S.element(this.elements.display.duration) && this.config.invertTime;
      Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || Pe.updateProgress.call(this, e);
    },
    durationUpdate: function durationUpdate() {
      if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
      if (this.duration >= Math.pow(2, 32)) return H(this.elements.display.currentTime, !0), void H(this.elements.progress, !0);
      S.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
      var e = S.element(this.elements.display.duration);
      !e && this.config.displayDuration && this.paused && Pe.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && Pe.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && Pe.setMarkers.call(this), Pe.updateSeekTooltip.call(this);
    },
    toggleMenuButton: function toggleMenuButton(e, t) {
      H(this.elements.settings.buttons[e], !t);
    },
    updateSetting: function updateSetting(e, t, i) {
      var s = this.elements.settings.panels[e];
      var n = null,
        a = t;
      if ("captions" === e) n = this.currentTrack;else {
        if (n = S.empty(i) ? this[e] : i, S.empty(n) && (n = this.config[e].default), !S.empty(this.options[e]) && !this.options[e].includes(n)) return void this.debug.warn("Unsupported value of '".concat(n, "' for ").concat(e));
        if (!this.config[e].options.includes(n)) return void this.debug.warn("Disabled value of '".concat(n, "' for ").concat(e));
      }
      if (S.element(a) || (a = s && s.querySelector('[role="menu"]')), !S.element(a)) return;
      this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = Pe.getLabel.call(this, e, n);
      var l = a && a.querySelector("[value=\"".concat(n, "\"]"));
      S.element(l) && (l.checked = !0);
    },
    getLabel: function getLabel(e, t) {
      switch (e) {
        case "speed":
          return 1 === t ? ve.get("normal", this.config) : "".concat(t, "&times;");
        case "quality":
          if (S.number(t)) {
            var _e10 = ve.get("qualityLabel.".concat(t), this.config);
            return _e10.length ? _e10 : "".concat(t, "p");
          }
          return ge(t);
        case "captions":
          return xe.getLabel.call(this);
        default:
          return null;
      }
    },
    setQualityMenu: function setQualityMenu(e) {
      var _this10 = this;
      if (!S.element(this.elements.settings.panels.quality)) return;
      var t = "quality",
        i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
      S.array(e) && (this.options.quality = se(e).filter(function (e) {
        return _this10.config.quality.options.includes(e);
      }));
      var s = !S.empty(this.options.quality) && this.options.quality.length > 1;
      if (Pe.toggleMenuButton.call(this, t, s), j(i), Pe.checkMenu.call(this), !s) return;
      var n = function n(e) {
        var t = ve.get("qualityBadge.".concat(e), _this10.config);
        return t.length ? Pe.createBadge.call(_this10, t) : null;
      };
      this.options.quality.sort(function (e, t) {
        var i = _this10.config.quality.options;
        return i.indexOf(e) > i.indexOf(t) ? 1 : -1;
      }).forEach(function (e) {
        Pe.createMenuItem.call(_this10, {
          value: e,
          list: i,
          type: t,
          title: Pe.getLabel.call(_this10, "quality", e),
          badge: n(e)
        });
      }), Pe.updateSetting.call(this, t, i);
    },
    setCaptionsMenu: function setCaptionsMenu() {
      var _this11 = this;
      if (!S.element(this.elements.settings.panels.captions)) return;
      var e = "captions",
        t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
        i = xe.getTracks.call(this),
        s = Boolean(i.length);
      if (Pe.toggleMenuButton.call(this, e, s), j(t), Pe.checkMenu.call(this), !s) return;
      var n = i.map(function (e, i) {
        return {
          value: i,
          checked: _this11.captions.toggled && _this11.currentTrack === i,
          title: xe.getLabel.call(_this11, e),
          badge: e.language && Pe.createBadge.call(_this11, e.language.toUpperCase()),
          list: t,
          type: "language"
        };
      });
      n.unshift({
        value: -1,
        checked: !this.captions.toggled,
        title: ve.get("disabled", this.config),
        list: t,
        type: "language"
      }), n.forEach(Pe.createMenuItem.bind(this)), Pe.updateSetting.call(this, e, t);
    },
    setSpeedMenu: function setSpeedMenu() {
      var _this12 = this;
      if (!S.element(this.elements.settings.panels.speed)) return;
      var e = "speed",
        t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
      this.options.speed = this.options.speed.filter(function (e) {
        return e >= _this12.minimumSpeed && e <= _this12.maximumSpeed;
      });
      var i = !S.empty(this.options.speed) && this.options.speed.length > 1;
      Pe.toggleMenuButton.call(this, e, i), j(t), Pe.checkMenu.call(this), i && (this.options.speed.forEach(function (i) {
        Pe.createMenuItem.call(_this12, {
          value: i,
          list: t,
          type: e,
          title: Pe.getLabel.call(_this12, "speed", i)
        });
      }), Pe.updateSetting.call(this, e, t));
    },
    checkMenu: function checkMenu() {
      var e = this.elements.settings.buttons,
        t = !S.empty(e) && Object.values(e).some(function (e) {
          return !e.hidden;
        });
      H(this.elements.settings.menu, !t);
    },
    focusFirstMenuItem: function focusFirstMenuItem(e, t = !1) {
      if (this.elements.settings.popup.hidden) return;
      var i = e;
      S.element(i) || (i = Object.values(this.elements.settings.panels).find(function (e) {
        return !e.hidden;
      }));
      var s = i.querySelector('[role^="menuitem"]');
      W.call(this, s, t);
    },
    toggleMenu: function toggleMenu(e) {
      var t = this.elements.settings.popup,
        i = this.elements.buttons.settings;
      if (!S.element(t) || !S.element(i)) return;
      var s = t.hidden;
      var n = s;
      if (S.boolean(e)) n = e;else if (S.keyboardEvent(e) && "Escape" === e.key) n = !1;else if (S.event(e)) {
        var _s7 = S.function(e.composedPath) ? e.composedPath()[0] : e.target,
          _a4 = t.contains(_s7);
        if (_a4 || !_a4 && e.target !== i && n) return;
      }
      i.setAttribute("aria-expanded", n), H(t, !n), F(this.elements.container, this.config.classNames.menu.open, n), n && S.keyboardEvent(e) ? Pe.focusFirstMenuItem.call(this, null, !0) : n || s || W.call(this, i, S.keyboardEvent(e));
    },
    getMenuSize: function getMenuSize(e) {
      var t = e.cloneNode(!0);
      t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
      var i = t.scrollWidth,
        s = t.scrollHeight;
      return O(t), {
        width: i,
        height: s
      };
    },
    showMenuPanel: function showMenuPanel(e = "", t = !1) {
      var _this13 = this;
      var i = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(e));
      if (!S.element(i)) return;
      var s = i.parentNode,
        n = Array.from(s.children).find(function (e) {
          return !e.hidden;
        });
      if (K.transitions && !K.reducedMotion) {
        s.style.width = "".concat(n.scrollWidth, "px"), s.style.height = "".concat(n.scrollHeight, "px");
        var _e11 = Pe.getMenuSize.call(this, i),
          _t6 = function _t6(e) {
            e.target === s && ["width", "height"].includes(e.propertyName) && (s.style.width = "", s.style.height = "", J.call(_this13, s, E, _t6));
          };
        X.call(this, s, E, _t6), s.style.width = "".concat(_e11.width, "px"), s.style.height = "".concat(_e11.height, "px");
      }
      H(n, !0), H(i, !1), Pe.focusFirstMenuItem.call(this, i, t);
    },
    setDownloadUrl: function setDownloadUrl() {
      var e = this.elements.buttons.download;
      S.element(e) && e.setAttribute("href", this.download);
    },
    create: function create(e) {
      var _this14 = this;
      var t = Pe.bindMenuItemShortcuts,
        i = Pe.createButton,
        s = Pe.createProgress,
        n = Pe.createRange,
        a = Pe.createTime,
        l = Pe.setQualityMenu,
        r = Pe.setSpeedMenu,
        o = Pe.showMenuPanel;
      this.elements.controls = null, S.array(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
      var c = $("div", q(this.config.selectors.controls.wrapper));
      this.elements.controls = c;
      var u = {
        class: "plyr__controls__item"
      };
      return se(S.array(this.config.controls) ? this.config.controls : []).forEach(function (l) {
        if ("restart" === l && c.appendChild(i.call(_this14, "restart", u)), "rewind" === l && c.appendChild(i.call(_this14, "rewind", u)), "play" === l && c.appendChild(i.call(_this14, "play", u)), "fast-forward" === l && c.appendChild(i.call(_this14, "fast-forward", u)), "progress" === l) {
          var _t7 = $("div", {
              class: "".concat(u.class, " plyr__progress__container")
            }),
            _i5 = $("div", q(_this14.config.selectors.progress));
          if (_i5.appendChild(n.call(_this14, "seek", {
            id: "plyr-seek-".concat(e.id)
          })), _i5.appendChild(s.call(_this14, "buffer")), _this14.config.tooltips.seek) {
            var _e12 = $("span", {
              class: _this14.config.classNames.tooltip
            }, "00:00");
            _i5.appendChild(_e12), _this14.elements.display.seekTooltip = _e12;
          }
          _this14.elements.progress = _i5, _t7.appendChild(_this14.elements.progress), c.appendChild(_t7);
        }
        if ("current-time" === l && c.appendChild(a.call(_this14, "currentTime", u)), "duration" === l && c.appendChild(a.call(_this14, "duration", u)), "mute" === l || "volume" === l) {
          var _t8 = _this14.elements.volume;
          if (S.element(_t8) && c.contains(_t8) || (_t8 = $("div", x({}, u, {
            class: "".concat(u.class, " plyr__volume").trim()
          })), _this14.elements.volume = _t8, c.appendChild(_t8)), "mute" === l && _t8.appendChild(i.call(_this14, "mute")), "volume" === l && !M.isIos && !M.isIPadOS) {
            var _i6 = {
              max: 1,
              step: .05,
              value: _this14.config.volume
            };
            _t8.appendChild(n.call(_this14, "volume", x(_i6, {
              id: "plyr-volume-".concat(e.id)
            })));
          }
        }
        if ("captions" === l && c.appendChild(i.call(_this14, "captions", u)), "settings" === l && !S.empty(_this14.config.settings)) {
          var _s8 = $("div", x({}, u, {
            class: "".concat(u.class, " plyr__menu").trim(),
            hidden: ""
          }));
          _s8.appendChild(i.call(_this14, "settings", {
            "aria-haspopup": !0,
            "aria-controls": "plyr-settings-".concat(e.id),
            "aria-expanded": !1
          }));
          var _n3 = $("div", {
              class: "plyr__menu__container",
              id: "plyr-settings-".concat(e.id),
              hidden: ""
            }),
            _a5 = $("div"),
            _l2 = $("div", {
              id: "plyr-settings-".concat(e.id, "-home")
            }),
            _r4 = $("div", {
              role: "menu"
            });
          _l2.appendChild(_r4), _a5.appendChild(_l2), _this14.elements.settings.panels.home = _l2, _this14.config.settings.forEach(function (i) {
            var s = $("button", x(q(_this14.config.selectors.buttons.settings), {
              type: "button",
              class: "".concat(_this14.config.classNames.control, " ").concat(_this14.config.classNames.control, "--forward"),
              role: "menuitem",
              "aria-haspopup": !0,
              hidden: ""
            }));
            t.call(_this14, s, i), X.call(_this14, s, "click", function () {
              o.call(_this14, i, !1);
            });
            var n = $("span", null, ve.get(i, _this14.config)),
              l = $("span", {
                class: _this14.config.classNames.menu.value
              });
            l.innerHTML = e[i], n.appendChild(l), s.appendChild(n), _r4.appendChild(s);
            var c = $("div", {
                id: "plyr-settings-".concat(e.id, "-").concat(i),
                hidden: ""
              }),
              u = $("button", {
                type: "button",
                class: "".concat(_this14.config.classNames.control, " ").concat(_this14.config.classNames.control, "--back")
              });
            u.appendChild($("span", {
              "aria-hidden": !0
            }, ve.get(i, _this14.config))), u.appendChild($("span", {
              class: _this14.config.classNames.hidden
            }, ve.get("menuBack", _this14.config))), X.call(_this14, c, "keydown", function (e) {
              "ArrowLeft" === e.key && (e.preventDefault(), e.stopPropagation(), o.call(_this14, "home", !0));
            }, !1), X.call(_this14, u, "click", function () {
              o.call(_this14, "home", !1);
            }), c.appendChild(u), c.appendChild($("div", {
              role: "menu"
            })), _a5.appendChild(c), _this14.elements.settings.buttons[i] = s, _this14.elements.settings.panels[i] = c;
          }), _n3.appendChild(_a5), _s8.appendChild(_n3), c.appendChild(_s8), _this14.elements.settings.popup = _n3, _this14.elements.settings.menu = _s8;
        }
        if ("pip" === l && K.pip && c.appendChild(i.call(_this14, "pip", u)), "airplay" === l && K.airplay && c.appendChild(i.call(_this14, "airplay", u)), "download" === l) {
          var _e13 = x({}, u, {
            element: "a",
            href: _this14.download,
            target: "_blank"
          });
          _this14.isHTML5 && (_e13.download = "");
          var _t9 = _this14.config.urls.download;
          !S.url(_t9) && _this14.isEmbed && x(_e13, {
            icon: "logo-".concat(_this14.provider),
            label: _this14.provider
          }), c.appendChild(i.call(_this14, "download", _e13));
        }
        "fullscreen" === l && c.appendChild(i.call(_this14, "fullscreen", u));
      }), this.isHTML5 && l.call(this, de.getQualityOptions.call(this)), r.call(this), c;
    },
    inject: function inject() {
      var _this15 = this;
      if (this.config.loadSprite) {
        var _e14 = Pe.getIconUrl.call(this);
        _e14.cors && ke(_e14.url, "sprite-plyr");
      }
      this.id = Math.floor(1e4 * Math.random());
      var e = null;
      this.elements.controls = null;
      var t = {
        id: this.id,
        seektime: this.config.seekTime,
        title: this.config.title
      };
      var i = !0;
      S.function(this.config.controls) && (this.config.controls = this.config.controls.call(this, t)), this.config.controls || (this.config.controls = []), S.element(this.config.controls) || S.string(this.config.controls) ? e = this.config.controls : (e = Pe.create.call(this, {
        id: this.id,
        seektime: this.config.seekTime,
        speed: this.speed,
        quality: this.quality,
        captions: xe.getLabel.call(this)
      }), i = !1);
      var s;
      i && S.string(this.config.controls) && (e = function (e) {
        var i = e;
        return Object.entries(t).forEach(function ([e, t]) {
          i = pe(i, "{".concat(e, "}"), t);
        }), i;
      }(e)), S.string(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)), S.element(s) || (s = this.elements.container);
      if (s[S.element(e) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", e), S.element(this.elements.controls) || Pe.findElements.call(this), !S.empty(this.elements.buttons)) {
        var _e15 = function _e15(e) {
          var t = _this15.config.classNames.controlPressed;
          e.setAttribute("aria-pressed", "false"), Object.defineProperty(e, "pressed", {
            configurable: !0,
            enumerable: !0,
            get: function get() {
              return R(e, t);
            },
            set: function set(i = !1) {
              F(e, t, i), e.setAttribute("aria-pressed", i ? "true" : "false");
            }
          });
        };
        Object.values(this.elements.buttons).filter(Boolean).forEach(function (t) {
          S.array(t) || S.nodeList(t) ? Array.from(t).filter(Boolean).forEach(_e15) : _e15(t);
        });
      }
      if (M.isEdge && P(s), this.config.tooltips.controls) {
        var _this$config = this.config,
          _e16 = _this$config.classNames,
          _t10 = _this$config.selectors,
          _i7 = "".concat(_t10.controls.wrapper, " ").concat(_t10.labels, " .").concat(_e16.hidden),
          _s9 = U.call(this, _i7);
        Array.from(_s9).forEach(function (e) {
          F(e, _this15.config.classNames.hidden, !1), F(e, _this15.config.classNames.tooltip, !0);
        });
      }
    },
    setMediaMetadata: function setMediaMetadata() {
      try {
        "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({
          title: this.config.mediaMetadata.title,
          artist: this.config.mediaMetadata.artist,
          album: this.config.mediaMetadata.album,
          artwork: this.config.mediaMetadata.artwork
        }));
      } catch (e) {}
    },
    setMarkers: function setMarkers() {
      var _this16 = this;
      var e, t;
      if (!this.duration || this.elements.markers) return;
      var i = null === (e = this.config.markers) || void 0 === e || null === (t = e.points) || void 0 === t ? void 0 : t.filter(function ({
        time: e
      }) {
        return e > 0 && e < _this16.duration;
      });
      if (null == i || !i.length) return;
      var s = document.createDocumentFragment(),
        n = document.createDocumentFragment();
      var a = null;
      var l = "".concat(this.config.classNames.tooltip, "--visible"),
        r = function r(e) {
          return F(a, l, e);
        };
      i.forEach(function (e) {
        var t = $("span", {
            class: _this16.config.classNames.marker
          }, ""),
          i = e.time / _this16.duration * 100 + "%";
        a && (t.addEventListener("mouseenter", function () {
          e.label || (a.style.left = i, a.innerHTML = e.label, r(!0));
        }), t.addEventListener("mouseleave", function () {
          r(!1);
        })), t.addEventListener("click", function () {
          _this16.currentTime = e.time;
        }), t.style.left = i, n.appendChild(t);
      }), s.appendChild(n), this.config.tooltips.seek || (a = $("span", {
        class: this.config.classNames.tooltip
      }, ""), s.appendChild(a)), this.elements.markers = {
        points: n,
        tip: a
      }, this.elements.progress.appendChild(s);
    }
  };
  function Me(e, t = !0) {
    var i = e;
    if (t) {
      var _e17 = document.createElement("a");
      _e17.href = i, i = _e17.href;
    }
    try {
      return new URL(i);
    } catch (e) {
      return null;
    }
  }
  function Ne(e) {
    var t = new URLSearchParams();
    return S.object(e) && Object.entries(e).forEach(function ([e, i]) {
      t.set(e, i);
    }), t;
  }
  var xe = {
      setup: function setup() {
        var _i8, _i9, _this$config$captions;
        if (!this.supported.ui) return;
        if (!this.isVideo || this.isYouTube || this.isHTML5 && !K.textTracks) return void (S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this));
        var e, t;
        if (S.element(this.elements.captions) || (this.elements.captions = $("div", q(this.config.selectors.captions)), this.elements.captions.setAttribute("dir", "auto"), e = this.elements.captions, t = this.elements.wrapper, S.element(e) && S.element(t) && t.parentNode.insertBefore(e, t.nextSibling)), M.isIE && window.URL) {
          var _e18 = this.media.querySelectorAll("track");
          Array.from(_e18).forEach(function (e) {
            var t = e.getAttribute("src"),
              i = Me(t);
            null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && Te(t, "blob").then(function (t) {
              e.setAttribute("src", window.URL.createObjectURL(t));
            }).catch(function () {
              O(e);
            });
          });
        }
        var i = se((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function (e) {
          return e.split("-")[0];
        }));
        var s = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
        "auto" === s && (_i8 = i, _i9 = _slicedToArray(_i8, 1), s = _i9[0], _i8);
        var n = this.storage.get("captions");
        if (S.boolean(n) || (_this$config$captions = this.config.captions, n = _this$config$captions.active, _this$config$captions), Object.assign(this.captions, {
          toggled: !1,
          active: n,
          language: s,
          languages: i
        }), this.isHTML5) {
          var _e19 = this.config.captions.update ? "addtrack removetrack" : "removetrack";
          X.call(this, this.media.textTracks, _e19, xe.update.bind(this));
        }
        setTimeout(xe.update.bind(this), 0);
      },
      update: function update() {
        var _this17 = this;
        var e = xe.getTracks.call(this, !0),
          _this$captions = this.captions,
          t = _this$captions.active,
          i = _this$captions.language,
          s = _this$captions.meta,
          n = _this$captions.currentTrackNode,
          a = Boolean(e.find(function (e) {
            return e.language === i;
          }));
        this.isHTML5 && this.isVideo && e.filter(function (e) {
          return !s.get(e);
        }).forEach(function (e) {
          _this17.debug.log("Track added", e), s.set(e, {
            default: "showing" === e.mode
          }), "showing" === e.mode && (e.mode = "hidden"), X.call(_this17, e, "cuechange", function () {
            return xe.updateCues.call(_this17);
          });
        }), (a && this.language !== i || !e.includes(n)) && (xe.setLanguage.call(this, i), xe.toggle.call(this, t && a)), this.elements && F(this.elements.container, this.config.classNames.captions.enabled, !S.empty(e)), S.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Pe.setCaptionsMenu.call(this);
      },
      toggle: function toggle(e, t = !0) {
        var _this18 = this;
        if (!this.supported.ui) return;
        var i = this.captions.toggled,
          s = this.config.classNames.captions.active,
          n = S.nullOrUndefined(e) ? !i : e;
        if (n !== i) {
          if (t || (this.captions.active = n, this.storage.set({
            captions: n
          })), !this.language && n && !t) {
            var _e20 = xe.getTracks.call(this),
              _t11 = xe.findTrack.call(this, [this.captions.language].concat(_toConsumableArray(this.captions.languages)), !0);
            return this.captions.language = _t11.language, void xe.set.call(this, _e20.indexOf(_t11));
          }
          this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n), F(this.elements.container, s, n), this.captions.toggled = n, Pe.updateSetting.call(this, "captions"), Z.call(this, this.media, n ? "captionsenabled" : "captionsdisabled");
        }
        setTimeout(function () {
          n && _this18.captions.toggled && (_this18.captions.currentTrackNode.mode = "hidden");
        });
      },
      set: function set(e, t = !0) {
        var i = xe.getTracks.call(this);
        if (-1 !== e) {
          if (S.number(e)) {
            if (e in i) {
              if (this.captions.currentTrack !== e) {
                this.captions.currentTrack = e;
                var _s10 = i[e],
                  _ref = _s10 || {},
                  _n4 = _ref.language;
                this.captions.currentTrackNode = _s10, Pe.updateSetting.call(this, "captions"), t || (this.captions.language = _n4, this.storage.set({
                  language: _n4
                })), this.isVimeo && this.embed.enableTextTrack(_n4), Z.call(this, this.media, "languagechange");
              }
              xe.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && xe.updateCues.call(this);
            } else this.debug.warn("Track not found", e);
          } else this.debug.warn("Invalid caption argument", e);
        } else xe.toggle.call(this, !1, t);
      },
      setLanguage: function setLanguage(e, t = !0) {
        if (!S.string(e)) return void this.debug.warn("Invalid language argument", e);
        var i = e.toLowerCase();
        this.captions.language = i;
        var s = xe.getTracks.call(this),
          n = xe.findTrack.call(this, [i]);
        xe.set.call(this, s.indexOf(n), t);
      },
      getTracks: function getTracks(e = !1) {
        var _this19 = this;
        return Array.from((this.media || {}).textTracks || []).filter(function (t) {
          return !_this19.isHTML5 || e || _this19.captions.meta.has(t);
        }).filter(function (e) {
          return ["captions", "subtitles"].includes(e.kind);
        });
      },
      findTrack: function findTrack(e, t = !1) {
        var _this20 = this;
        var i = xe.getTracks.call(this),
          s = function s(e) {
            return Number((_this20.captions.meta.get(e) || {}).default);
          },
          n = Array.from(i).sort(function (e, t) {
            return s(t) - s(e);
          });
        var a;
        return e.every(function (e) {
          return a = n.find(function (t) {
            return t.language === e;
          }), !a;
        }), a || (t ? n[0] : void 0);
      },
      getCurrentTrack: function getCurrentTrack() {
        return xe.getTracks.call(this)[this.currentTrack];
      },
      getLabel: function getLabel(e) {
        var t = e;
        return !S.track(t) && K.textTracks && this.captions.toggled && (t = xe.getCurrentTrack.call(this)), S.track(t) ? S.empty(t.label) ? S.empty(t.language) ? ve.get("enabled", this.config) : e.language.toUpperCase() : t.label : ve.get("disabled", this.config);
      },
      updateCues: function updateCues(e) {
        if (!this.supported.ui) return;
        if (!S.element(this.elements.captions)) return void this.debug.warn("No captions element to render to");
        if (!S.nullOrUndefined(e) && !Array.isArray(e)) return void this.debug.warn("updateCues: Invalid input", e);
        var t = e;
        if (!t) {
          var _e21 = xe.getCurrentTrack.call(this);
          t = Array.from((_e21 || {}).activeCues || []).map(function (e) {
            return e.getCueAsHTML();
          }).map(ye);
        }
        var i = t.map(function (e) {
          return e.trim();
        }).join("\n");
        if (i !== this.elements.captions.innerHTML) {
          j(this.elements.captions);
          var _e22 = $("span", q(this.config.selectors.caption));
          _e22.innerHTML = i, this.elements.captions.appendChild(_e22), Z.call(this, this.media, "cuechange");
        }
      }
    },
    Le = {
      enabled: !0,
      title: "",
      debug: !1,
      autoplay: !1,
      autopause: !0,
      playsinline: !0,
      seekTime: 10,
      volume: 1,
      muted: !1,
      duration: null,
      displayDuration: !0,
      invertTime: !0,
      toggleInvert: !0,
      ratio: null,
      clickToPlay: !0,
      hideControls: !0,
      resetOnEnd: !1,
      disableContextMenu: !0,
      loadSprite: !0,
      iconPrefix: "plyr",
      iconUrl: "https://cdn.plyr.io/3.7.6/plyr.svg",
      blankVideo: "https://cdn.plyr.io/static/blank.mp4",
      quality: {
        default: 576,
        options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
        forced: !1,
        onChange: null
      },
      loop: {
        active: !1
      },
      speed: {
        selected: 1,
        options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
      },
      keyboard: {
        focused: !0,
        global: !1
      },
      tooltips: {
        controls: !1,
        seek: !0
      },
      captions: {
        active: !1,
        language: "auto",
        update: !1
      },
      fullscreen: {
        enabled: !0,
        fallback: !0,
        iosNative: !1
      },
      storage: {
        enabled: !0,
        key: "plyr"
      },
      controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
      settings: ["captions", "quality", "speed"],
      i18n: {
        restart: "Restart",
        rewind: "Rewind {seektime}s",
        play: "Play",
        pause: "Pause",
        fastForward: "Forward {seektime}s",
        seek: "Seek",
        seekLabel: "{currentTime} of {duration}",
        played: "Played",
        buffered: "Buffered",
        currentTime: "Current time",
        duration: "Duration",
        volume: "Volume",
        mute: "Mute",
        unmute: "Unmute",
        enableCaptions: "Enable captions",
        disableCaptions: "Disable captions",
        download: "Download",
        enterFullscreen: "Enter fullscreen",
        exitFullscreen: "Exit fullscreen",
        frameTitle: "Player for {title}",
        captions: "Captions",
        settings: "Settings",
        pip: "PIP",
        menuBack: "Go back to previous menu",
        speed: "Speed",
        normal: "Normal",
        quality: "Quality",
        loop: "Loop",
        start: "Start",
        end: "End",
        all: "All",
        reset: "Reset",
        disabled: "Disabled",
        enabled: "Enabled",
        advertisement: "Ad",
        qualityBadge: {
          2160: "4K",
          1440: "HD",
          1080: "HD",
          720: "HD",
          576: "SD",
          480: "SD"
        }
      },
      urls: {
        download: null,
        vimeo: {
          sdk: "https://player.vimeo.com/api/player.js",
          iframe: "https://player.vimeo.com/video/{0}?{1}",
          api: "https://vimeo.com/api/oembed.json?url={0}"
        },
        youtube: {
          sdk: "https://www.youtube.com/iframe_api",
          api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
        },
        googleIMA: {
          sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
        }
      },
      listeners: {
        seek: null,
        play: null,
        pause: null,
        restart: null,
        rewind: null,
        fastForward: null,
        mute: null,
        volume: null,
        captions: null,
        download: null,
        fullscreen: null,
        pip: null,
        airplay: null,
        speed: null,
        quality: null,
        loop: null,
        language: null
      },
      events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
      selectors: {
        editable: "input, textarea, select, [contenteditable]",
        container: ".plyr",
        controls: {
          container: null,
          wrapper: ".plyr__controls"
        },
        labels: "[data-plyr]",
        buttons: {
          play: '[data-plyr="play"]',
          pause: '[data-plyr="pause"]',
          restart: '[data-plyr="restart"]',
          rewind: '[data-plyr="rewind"]',
          fastForward: '[data-plyr="fast-forward"]',
          mute: '[data-plyr="mute"]',
          captions: '[data-plyr="captions"]',
          download: '[data-plyr="download"]',
          fullscreen: '[data-plyr="fullscreen"]',
          pip: '[data-plyr="pip"]',
          airplay: '[data-plyr="airplay"]',
          settings: '[data-plyr="settings"]',
          loop: '[data-plyr="loop"]'
        },
        inputs: {
          seek: '[data-plyr="seek"]',
          volume: '[data-plyr="volume"]',
          speed: '[data-plyr="speed"]',
          language: '[data-plyr="language"]',
          quality: '[data-plyr="quality"]'
        },
        display: {
          currentTime: ".plyr__time--current",
          duration: ".plyr__time--duration",
          buffer: ".plyr__progress__buffer",
          loop: ".plyr__progress__loop",
          volume: ".plyr__volume--display"
        },
        progress: ".plyr__progress",
        captions: ".plyr__captions",
        caption: ".plyr__caption"
      },
      classNames: {
        type: "plyr--{0}",
        provider: "plyr--{0}",
        video: "plyr__video-wrapper",
        embed: "plyr__video-embed",
        videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
        embedContainer: "plyr__video-embed__container",
        poster: "plyr__poster",
        posterEnabled: "plyr__poster-enabled",
        ads: "plyr__ads",
        control: "plyr__control",
        controlPressed: "plyr__control--pressed",
        playing: "plyr--playing",
        paused: "plyr--paused",
        stopped: "plyr--stopped",
        loading: "plyr--loading",
        hover: "plyr--hover",
        tooltip: "plyr__tooltip",
        cues: "plyr__cues",
        marker: "plyr__progress__marker",
        hidden: "plyr__sr-only",
        hideControls: "plyr--hide-controls",
        isTouch: "plyr--is-touch",
        uiSupported: "plyr--full-ui",
        noTransition: "plyr--no-transition",
        display: {
          time: "plyr__time"
        },
        menu: {
          value: "plyr__menu__value",
          badge: "plyr__badge",
          open: "plyr--menu-open"
        },
        captions: {
          enabled: "plyr--captions-enabled",
          active: "plyr--captions-active"
        },
        fullscreen: {
          enabled: "plyr--fullscreen-enabled",
          fallback: "plyr--fullscreen-fallback"
        },
        pip: {
          supported: "plyr--pip-supported",
          active: "plyr--pip-active"
        },
        airplay: {
          supported: "plyr--airplay-supported",
          active: "plyr--airplay-active"
        },
        tabFocus: "plyr__tab-focus",
        previewThumbnails: {
          thumbContainer: "plyr__preview-thumb",
          thumbContainerShown: "plyr__preview-thumb--is-shown",
          imageContainer: "plyr__preview-thumb__image-container",
          timeContainer: "plyr__preview-thumb__time-container",
          scrubbingContainer: "plyr__preview-scrubbing",
          scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
        }
      },
      attributes: {
        embed: {
          provider: "data-plyr-provider",
          id: "data-plyr-embed-id",
          hash: "data-plyr-embed-hash"
        }
      },
      ads: {
        enabled: !1,
        publisherId: "",
        tagUrl: ""
      },
      previewThumbnails: {
        enabled: !1,
        src: ""
      },
      vimeo: {
        byline: !1,
        portrait: !1,
        title: !1,
        speed: !0,
        transparent: !1,
        customControls: !0,
        referrerPolicy: null,
        premium: !1
      },
      youtube: {
        rel: 0,
        showinfo: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        customControls: !0,
        noCookie: !1
      },
      mediaMetadata: {
        title: "",
        artist: "",
        album: "",
        artwork: []
      },
      markers: {
        enabled: !1,
        points: []
      }
    },
    Ie = "picture-in-picture",
    $e = "inline",
    _e = {
      html5: "html5",
      youtube: "youtube",
      vimeo: "vimeo"
    },
    Oe = "audio",
    je = "video";
  var De = function De() {};
  var qe = /*#__PURE__*/function () {
    function qe(e = !1) {
      _classCallCheck(this, qe);
      this.enabled = window.console && e, this.enabled && this.log("Debugging enabled");
    }
    _createClass(qe, [{
      key: "log",
      get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.log, console) : De;
      }
    }, {
      key: "warn",
      get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.warn, console) : De;
      }
    }, {
      key: "error",
      get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.error, console) : De;
      }
    }]);
    return qe;
  }();
  var He = /*#__PURE__*/function () {
    function He(t) {
      var _this21 = this;
      _classCallCheck(this, He);
      e(this, "onChange", function () {
        if (!_this21.supported) return;
        var e = _this21.player.elements.buttons.fullscreen;
        S.element(e) && (e.pressed = _this21.active);
        var t = _this21.target === _this21.player.media ? _this21.target : _this21.player.elements.container;
        Z.call(_this21.player, t, _this21.active ? "enterfullscreen" : "exitfullscreen", !0);
      }), e(this, "toggleFallback", function (e = !1) {
        var _window$scrollX, _window$scrollY;
        if (e ? _this21.scrollPosition = {
          x: (_window$scrollX = window.scrollX) !== null && _window$scrollX !== void 0 ? _window$scrollX : 0,
          y: (_window$scrollY = window.scrollY) !== null && _window$scrollY !== void 0 ? _window$scrollY : 0
        } : window.scrollTo(_this21.scrollPosition.x, _this21.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", F(_this21.target, _this21.player.config.classNames.fullscreen.fallback, e), M.isIos) {
          var _t12 = document.head.querySelector('meta[name="viewport"]');
          var _i10 = "viewport-fit=cover";
          _t12 || (_t12 = document.createElement("meta"), _t12.setAttribute("name", "viewport"));
          var _s11 = S.string(_t12.content) && _t12.content.includes(_i10);
          e ? (_this21.cleanupViewport = !_s11, _s11 || (_t12.content += ",".concat(_i10))) : _this21.cleanupViewport && (_t12.content = _t12.content.split(",").filter(function (e) {
            return e.trim() !== _i10;
          }).join(","));
        }
        _this21.onChange();
      }), e(this, "trapFocus", function (e) {
        if (M.isIos || M.isIPadOS || !_this21.active || "Tab" !== e.key) return;
        var t = document.activeElement,
          i = U.call(_this21.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
          _i11 = _slicedToArray(i, 1),
          s = _i11[0],
          n = i[i.length - 1];
        t !== n || e.shiftKey ? t === s && e.shiftKey && (n.focus(), e.preventDefault()) : (s.focus(), e.preventDefault());
      }), e(this, "update", function () {
        if (_this21.supported) {
          var _e23;
          _e23 = _this21.forceFallback ? "Fallback (forced)" : He.nativeSupported ? "Native" : "Fallback", _this21.player.debug.log("".concat(_e23, " fullscreen enabled"));
        } else _this21.player.debug.log("Fullscreen not supported and fallback disabled");
        F(_this21.player.elements.container, _this21.player.config.classNames.fullscreen.enabled, _this21.supported);
      }), e(this, "enter", function () {
        _this21.supported && (M.isIos && _this21.player.config.fullscreen.iosNative ? _this21.player.isVimeo ? _this21.player.embed.requestFullscreen() : _this21.target.webkitEnterFullscreen() : !He.nativeSupported || _this21.forceFallback ? _this21.toggleFallback(!0) : _this21.prefix ? S.empty(_this21.prefix) || _this21.target["".concat(_this21.prefix, "Request").concat(_this21.property)]() : _this21.target.requestFullscreen({
          navigationUI: "hide"
        }));
      }), e(this, "exit", function () {
        if (_this21.supported) if (M.isIos && _this21.player.config.fullscreen.iosNative) _this21.player.isVimeo ? _this21.player.embed.exitFullscreen() : _this21.target.webkitEnterFullscreen(), ie(_this21.player.play());else if (!He.nativeSupported || _this21.forceFallback) _this21.toggleFallback(!1);else if (_this21.prefix) {
          if (!S.empty(_this21.prefix)) {
            var _e24 = "moz" === _this21.prefix ? "Cancel" : "Exit";
            document["".concat(_this21.prefix).concat(_e24).concat(_this21.property)]();
          }
        } else (document.cancelFullScreen || document.exitFullscreen).call(document);
      }), e(this, "toggle", function () {
        _this21.active ? _this21.exit() : _this21.enter();
      }), this.player = t, this.prefix = He.prefix, this.property = He.property, this.scrollPosition = {
        x: 0,
        y: 0
      }, this.forceFallback = "force" === t.config.fullscreen.fallback, this.player.elements.fullscreen = t.config.fullscreen.container && function (e, t) {
        var _Element2 = Element,
          i = _Element2.prototype;
        return (i.closest || function () {
          var e = this;
          do {
            if (V.matches(e, t)) return e;
            e = e.parentElement || e.parentNode;
          } while (null !== e && 1 === e.nodeType);
          return null;
        }).call(e, t);
      }(this.player.elements.container, t.config.fullscreen.container), X.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), function () {
        _this21.onChange();
      }), X.call(this.player, this.player.elements.container, "dblclick", function (e) {
        S.element(_this21.player.elements.controls) && _this21.player.elements.controls.contains(e.target) || _this21.player.listeners.proxy(e, _this21.toggle, "fullscreen");
      }), X.call(this, this.player.elements.container, "keydown", function (e) {
        return _this21.trapFocus(e);
      }), this.update();
    }
    _createClass(He, [{
      key: "useNative",
      get: function get() {
        return He.nativeSupported && !this.forceFallback;
      }
    }, {
      key: "supported",
      get: function get() {
        return [this.player.config.fullscreen.enabled, this.player.isVideo, He.nativeSupported || this.player.config.fullscreen.fallback, !this.player.isYouTube || He.nativeSupported || !M.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative].every(Boolean);
      }
    }, {
      key: "active",
      get: function get() {
        if (!this.supported) return !1;
        if (!He.nativeSupported || this.forceFallback) return R(this.target, this.player.config.classNames.fullscreen.fallback);
        var e = this.prefix ? this.target.getRootNode()["".concat(this.prefix).concat(this.property, "Element")] : this.target.getRootNode().fullscreenElement;
        return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target;
      }
    }, {
      key: "target",
      get: function get() {
        var _this$player$elements;
        return M.isIos && this.player.config.fullscreen.iosNative ? this.player.media : (_this$player$elements = this.player.elements.fullscreen) !== null && _this$player$elements !== void 0 ? _this$player$elements : this.player.elements.container;
      }
    }], [{
      key: "nativeSupported",
      get: function get() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
      }
    }, {
      key: "prefix",
      get: function get() {
        if (S.function(document.exitFullscreen)) return "";
        var e = "";
        return ["webkit", "moz", "ms"].some(function (t) {
          return !(!S.function(document["".concat(t, "ExitFullscreen")]) && !S.function(document["".concat(t, "CancelFullScreen")])) && (e = t, !0);
        }), e;
      }
    }, {
      key: "property",
      get: function get() {
        return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
      }
    }]);
    return He;
  }();
  function Fe(e, t = 1) {
    return new Promise(function (i, s) {
      var n = new Image(),
        a = function a() {
          delete n.onload, delete n.onerror, (n.naturalWidth >= t ? i : s)(n);
        };
      Object.assign(n, {
        onload: a,
        onerror: a,
        src: e
      });
    });
  }
  var Re = {
    addStyleHook: function addStyleHook() {
      F(this.elements.container, this.config.selectors.container.replace(".", ""), !0), F(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
    },
    toggleNativeControls: function toggleNativeControls(e = !1) {
      e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
    },
    build: function build() {
      var _this22 = this;
      if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void Re.toggleNativeControls.call(this, !0);
      S.element(this.elements.controls) || (Pe.inject.call(this), this.listeners.controls()), Re.toggleNativeControls.call(this), this.isHTML5 && xe.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, Pe.updateVolume.call(this), Pe.timeUpdate.call(this), Pe.durationUpdate.call(this), Re.checkPlaying.call(this), F(this.elements.container, this.config.classNames.pip.supported, K.pip && this.isHTML5 && this.isVideo), F(this.elements.container, this.config.classNames.airplay.supported, K.airplay && this.isHTML5), F(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function () {
        Z.call(_this22, _this22.media, "ready");
      }, 0), Re.setTitle.call(this), this.poster && Re.setPoster.call(this, this.poster, !1).catch(function () {}), this.config.duration && Pe.durationUpdate.call(this), this.config.mediaMetadata && Pe.setMediaMetadata.call(this);
    },
    setTitle: function setTitle() {
      var e = ve.get("play", this.config);
      if (S.string(this.config.title) && !S.empty(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach(function (t) {
        t.setAttribute("aria-label", e);
      }), this.isEmbed) {
        var _e25 = B.call(this, "iframe");
        if (!S.element(_e25)) return;
        var _t13 = S.empty(this.config.title) ? "video" : this.config.title,
          _i12 = ve.get("frameTitle", this.config);
        _e25.setAttribute("title", _i12.replace("{title}", _t13));
      }
    },
    togglePoster: function togglePoster(e) {
      F(this.elements.container, this.config.classNames.posterEnabled, e);
    },
    setPoster: function setPoster(e, t = !0) {
      var _this23 = this;
      return t && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), te.call(this).then(function () {
        return Fe(e);
      }).catch(function (t) {
        throw e === _this23.poster && Re.togglePoster.call(_this23, !1), t;
      }).then(function () {
        if (e !== _this23.poster) throw new Error("setPoster cancelled by later call to setPoster");
      }).then(function () {
        return Object.assign(_this23.elements.poster.style, {
          backgroundImage: "url('".concat(e, "')"),
          backgroundSize: ""
        }), Re.togglePoster.call(_this23, !0), e;
      }));
    },
    checkPlaying: function checkPlaying(e) {
      var _this24 = this;
      F(this.elements.container, this.config.classNames.playing, this.playing), F(this.elements.container, this.config.classNames.paused, this.paused), F(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function (e) {
        Object.assign(e, {
          pressed: _this24.playing
        }), e.setAttribute("aria-label", ve.get(_this24.playing ? "pause" : "play", _this24.config));
      }), S.event(e) && "timeupdate" === e.type || Re.toggleControls.call(this);
    },
    checkLoading: function checkLoading(e) {
      var _this25 = this;
      this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
        F(_this25.elements.container, _this25.config.classNames.loading, _this25.loading), Re.toggleControls.call(_this25);
      }, this.loading ? 250 : 0);
    },
    toggleControls: function toggleControls(e) {
      var t = this.elements.controls;
      if (t && this.config.hideControls) {
        var _i13 = this.touch && this.lastSeekTime + 2e3 > Date.now();
        this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || _i13));
      }
    },
    migrateStyles: function migrateStyles() {
      var _this26 = this;
      Object.values(_objectSpread({}, this.media.style)).filter(function (e) {
        return !S.empty(e) && S.string(e) && e.startsWith("--plyr");
      }).forEach(function (e) {
        _this26.elements.container.style.setProperty(e, _this26.media.style.getPropertyValue(e)), _this26.media.style.removeProperty(e);
      }), S.empty(this.media.style) && this.media.removeAttribute("style");
    }
  };
  var Ve = /*#__PURE__*/function () {
    function Ve(t) {
      var _this27 = this;
      _classCallCheck(this, Ve);
      e(this, "firstTouch", function () {
        var e = _this27.player,
          t = e.elements;
        e.touch = !0, F(t.container, e.config.classNames.isTouch, !0);
      }), e(this, "setTabFocus", function (e) {
        var t = _this27.player,
          i = t.elements,
          s = e.key,
          n = e.type,
          a = e.timeStamp;
        if (clearTimeout(_this27.focusTimer), "keydown" === n && "Tab" !== s) return;
        "keydown" === n && (_this27.lastKeyDown = a);
        var l = a - _this27.lastKeyDown <= 20;
        ("focus" !== n || l) && (function () {
          var e = t.config.classNames.tabFocus;
          F(U.call(t, ".".concat(e)), e, !1);
        }(), "focusout" !== n && (_this27.focusTimer = setTimeout(function () {
          var e = document.activeElement;
          i.container.contains(e) && F(document.activeElement, t.config.classNames.tabFocus, !0);
        }, 10)));
      }), e(this, "global", function (e = !0) {
        var t = _this27.player;
        t.config.keyboard.global && Q.call(t, window, "keydown keyup", _this27.handleKey, e, !1), Q.call(t, document.body, "click", _this27.toggleMenu, e), G.call(t, document.body, "touchstart", _this27.firstTouch), Q.call(t, document.body, "keydown focus blur focusout", _this27.setTabFocus, e, !1, !0);
      }), e(this, "container", function () {
        var e = _this27.player,
          t = e.config,
          i = e.elements,
          s = e.timers;
        !t.keyboard.global && t.keyboard.focused && X.call(e, i.container, "keydown keyup", _this27.handleKey, !1), X.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (t) {
          var n = i.controls;
          n && "enterfullscreen" === t.type && (n.pressed = !1, n.hover = !1);
          var a = 0;
          ["touchstart", "touchmove", "mousemove"].includes(t.type) && (Re.toggleControls.call(e, !0), a = e.touch ? 3e3 : 2e3), clearTimeout(s.controls), s.controls = setTimeout(function () {
            return Re.toggleControls.call(e, !1);
          }, a);
        });
        var n = function n() {
            if (!e.isVimeo || e.config.vimeo.premium) return;
            var t = i.wrapper,
              s = e.fullscreen.active,
              _ce$call = ce.call(e),
              _ce$call2 = _slicedToArray(_ce$call, 2),
              n = _ce$call2[0],
              a = _ce$call2[1],
              l = ae("aspect-ratio: ".concat(n, " / ").concat(a));
            if (!s) return void (l ? (t.style.width = null, t.style.height = null) : (t.style.maxWidth = null, t.style.margin = null));
            var _ref2 = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)],
              r = _ref2[0],
              o = _ref2[1],
              c = r / o > n / a;
            l ? (t.style.width = c ? "auto" : "100%", t.style.height = c ? "100%" : "auto") : (t.style.maxWidth = c ? o / a * n + "px" : null, t.style.margin = c ? "0 auto" : null);
          },
          a = function a() {
            clearTimeout(s.resized), s.resized = setTimeout(n, 50);
          };
        X.call(e, i.container, "enterfullscreen exitfullscreen", function (t) {
          var s = e.fullscreen.target;
          if (s !== i.container) return;
          if (!e.isEmbed && S.empty(e.config.ratio)) return;
          n();
          ("enterfullscreen" === t.type ? X : J).call(e, window, "resize", a);
        });
      }), e(this, "media", function () {
        var e = _this27.player,
          t = e.elements;
        if (X.call(e, e.media, "timeupdate seeking seeked", function (t) {
          return Pe.timeUpdate.call(e, t);
        }), X.call(e, e.media, "durationchange loadeddata loadedmetadata", function (t) {
          return Pe.durationUpdate.call(e, t);
        }), X.call(e, e.media, "ended", function () {
          e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(), e.pause());
        }), X.call(e, e.media, "progress playing seeking seeked", function (t) {
          return Pe.updateProgress.call(e, t);
        }), X.call(e, e.media, "volumechange", function (t) {
          return Pe.updateVolume.call(e, t);
        }), X.call(e, e.media, "playing play pause ended emptied timeupdate", function (t) {
          return Re.checkPlaying.call(e, t);
        }), X.call(e, e.media, "waiting canplay seeked playing", function (t) {
          return Re.checkLoading.call(e, t);
        }), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
          var _i14 = B.call(e, ".".concat(e.config.classNames.video));
          if (!S.element(_i14)) return;
          X.call(e, t.container, "click", function (s) {
            ([t.container, _i14].includes(s.target) || _i14.contains(s.target)) && (e.touch && e.config.hideControls || (e.ended ? (_this27.proxy(s, e.restart, "restart"), _this27.proxy(s, function () {
              ie(e.play());
            }, "play")) : _this27.proxy(s, function () {
              ie(e.togglePlay());
            }, "play")));
          });
        }
        e.supported.ui && e.config.disableContextMenu && X.call(e, t.wrapper, "contextmenu", function (e) {
          e.preventDefault();
        }, !1), X.call(e, e.media, "volumechange", function () {
          e.storage.set({
            volume: e.volume,
            muted: e.muted
          });
        }), X.call(e, e.media, "ratechange", function () {
          Pe.updateSetting.call(e, "speed"), e.storage.set({
            speed: e.speed
          });
        }), X.call(e, e.media, "qualitychange", function (t) {
          Pe.updateSetting.call(e, "quality", null, t.detail.quality);
        }), X.call(e, e.media, "ready qualitychange", function () {
          Pe.setDownloadUrl.call(e);
        });
        var i = e.config.events.concat(["keyup", "keydown"]).join(" ");
        X.call(e, e.media, i, function (i) {
          var _i$detail = i.detail,
            s = _i$detail === void 0 ? {} : _i$detail;
          "error" === i.type && (s = e.media.error), Z.call(e, t.container, i.type, !0, s);
        });
      }), e(this, "proxy", function (e, t, i) {
        var s = _this27.player,
          n = s.config.listeners[i];
        var a = !0;
        S.function(n) && (a = n.call(s, e)), !1 !== a && S.function(t) && t.call(s, e);
      }), e(this, "bind", function (e, t, i, s, n = !0) {
        var a = _this27.player,
          l = a.config.listeners[s],
          r = S.function(l);
        X.call(a, e, t, function (e) {
          return _this27.proxy(e, i, s);
        }, n && !r);
      }), e(this, "controls", function () {
        var e = _this27.player,
          t = e.elements,
          i = M.isIE ? "change" : "input";
        if (t.buttons.play && Array.from(t.buttons.play).forEach(function (t) {
          _this27.bind(t, "click", function () {
            ie(e.togglePlay());
          }, "play");
        }), _this27.bind(t.buttons.restart, "click", e.restart, "restart"), _this27.bind(t.buttons.rewind, "click", function () {
          e.lastSeekTime = Date.now(), e.rewind();
        }, "rewind"), _this27.bind(t.buttons.fastForward, "click", function () {
          e.lastSeekTime = Date.now(), e.forward();
        }, "fastForward"), _this27.bind(t.buttons.mute, "click", function () {
          e.muted = !e.muted;
        }, "mute"), _this27.bind(t.buttons.captions, "click", function () {
          return e.toggleCaptions();
        }), _this27.bind(t.buttons.download, "click", function () {
          Z.call(e, e.media, "download");
        }, "download"), _this27.bind(t.buttons.fullscreen, "click", function () {
          e.fullscreen.toggle();
        }, "fullscreen"), _this27.bind(t.buttons.pip, "click", function () {
          e.pip = "toggle";
        }, "pip"), _this27.bind(t.buttons.airplay, "click", e.airplay, "airplay"), _this27.bind(t.buttons.settings, "click", function (t) {
          t.stopPropagation(), t.preventDefault(), Pe.toggleMenu.call(e, t);
        }, null, !1), _this27.bind(t.buttons.settings, "keyup", function (t) {
          [" ", "Enter"].includes(t.key) && ("Enter" !== t.key ? (t.preventDefault(), t.stopPropagation(), Pe.toggleMenu.call(e, t)) : Pe.focusFirstMenuItem.call(e, null, !0));
        }, null, !1), _this27.bind(t.settings.menu, "keydown", function (t) {
          "Escape" === t.key && Pe.toggleMenu.call(e, t);
        }), _this27.bind(t.inputs.seek, "mousedown mousemove", function (e) {
          var i = t.progress.getBoundingClientRect(),
            s = 100 / i.width * (e.pageX - i.left);
          e.currentTarget.setAttribute("seek-value", s);
        }), _this27.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (t) {
          var i = t.currentTarget,
            s = "play-on-seeked";
          if (S.keyboardEvent(t) && !["ArrowLeft", "ArrowRight"].includes(t.key)) return;
          e.lastSeekTime = Date.now();
          var n = i.hasAttribute(s),
            a = ["mouseup", "touchend", "keyup"].includes(t.type);
          n && a ? (i.removeAttribute(s), ie(e.play())) : !a && e.playing && (i.setAttribute(s, ""), e.pause());
        }), M.isIos) {
          var _t14 = U.call(e, 'input[type="range"]');
          Array.from(_t14).forEach(function (e) {
            return _this27.bind(e, i, function (e) {
              return P(e.target);
            });
          });
        }
        _this27.bind(t.inputs.seek, i, function (t) {
          var i = t.currentTarget;
          var s = i.getAttribute("seek-value");
          S.empty(s) && (s = i.value), i.removeAttribute("seek-value"), e.currentTime = s / i.max * e.duration;
        }, "seek"), _this27.bind(t.progress, "mouseenter mouseleave mousemove", function (t) {
          return Pe.updateSeekTooltip.call(e, t);
        }), _this27.bind(t.progress, "mousemove touchmove", function (t) {
          var i = e.previewThumbnails;
          i && i.loaded && i.startMove(t);
        }), _this27.bind(t.progress, "mouseleave touchend click", function () {
          var t = e.previewThumbnails;
          t && t.loaded && t.endMove(!1, !0);
        }), _this27.bind(t.progress, "mousedown touchstart", function (t) {
          var i = e.previewThumbnails;
          i && i.loaded && i.startScrubbing(t);
        }), _this27.bind(t.progress, "mouseup touchend", function (t) {
          var i = e.previewThumbnails;
          i && i.loaded && i.endScrubbing(t);
        }), M.isWebKit && Array.from(U.call(e, 'input[type="range"]')).forEach(function (t) {
          _this27.bind(t, "input", function (t) {
            return Pe.updateRangeFill.call(e, t.target);
          });
        }), e.config.toggleInvert && !S.element(t.display.duration) && _this27.bind(t.display.currentTime, "click", function () {
          0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, Pe.timeUpdate.call(e));
        }), _this27.bind(t.inputs.volume, i, function (t) {
          e.volume = t.target.value;
        }, "volume"), _this27.bind(t.controls, "mouseenter mouseleave", function (i) {
          t.controls.hover = !e.touch && "mouseenter" === i.type;
        }), t.fullscreen && Array.from(t.fullscreen.children).filter(function (e) {
          return !e.contains(t.container);
        }).forEach(function (i) {
          _this27.bind(i, "mouseenter mouseleave", function (i) {
            t.controls && (t.controls.hover = !e.touch && "mouseenter" === i.type);
          });
        }), _this27.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", function (e) {
          t.controls.pressed = ["mousedown", "touchstart"].includes(e.type);
        }), _this27.bind(t.controls, "focusin", function () {
          var i = e.config,
            s = e.timers;
          F(t.controls, i.classNames.noTransition, !0), Re.toggleControls.call(e, !0), setTimeout(function () {
            F(t.controls, i.classNames.noTransition, !1);
          }, 0);
          var n = _this27.touch ? 3e3 : 4e3;
          clearTimeout(s.controls), s.controls = setTimeout(function () {
            return Re.toggleControls.call(e, !1);
          }, n);
        }), _this27.bind(t.inputs.volume, "wheel", function (t) {
          var i = t.webkitDirectionInvertedFromDevice,
            _map = [t.deltaX, -t.deltaY].map(function (e) {
              return i ? -e : e;
            }),
            _map2 = _slicedToArray(_map, 2),
            s = _map2[0],
            n = _map2[1],
            a = Math.sign(Math.abs(s) > Math.abs(n) ? s : n);
          e.increaseVolume(a / 50);
          var l = e.media.volume;
          (1 === a && l < 1 || -1 === a && l > 0) && t.preventDefault();
        }, "volume", !1);
      }), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this);
    }
    _createClass(Ve, [{
      key: "handleKey",
      value: function handleKey(e) {
        var t = this.player,
          i = t.elements,
          s = e.key,
          n = e.type,
          a = e.altKey,
          l = e.ctrlKey,
          r = e.metaKey,
          o = e.shiftKey,
          c = "keydown" === n,
          u = c && s === this.lastKey;
        if (a || l || r || o) return;
        if (!s) return;
        if (c) {
          var _n5 = document.activeElement;
          if (S.element(_n5)) {
            var _s12 = t.config.selectors.editable,
              _a6 = i.inputs.seek;
            if (_n5 !== _a6 && V(_n5, _s12)) return;
            if (" " === e.key && V(_n5, 'button, [role^="menuitem"]')) return;
          }
          switch ([" ", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"].includes(s) && (e.preventDefault(), e.stopPropagation()), s) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              u || (h = parseInt(s, 10), t.currentTime = t.duration / 10 * h);
              break;
            case " ":
            case "k":
              u || ie(t.togglePlay());
              break;
            case "ArrowUp":
              t.increaseVolume(.1);
              break;
            case "ArrowDown":
              t.decreaseVolume(.1);
              break;
            case "m":
              u || (t.muted = !t.muted);
              break;
            case "ArrowRight":
              t.forward();
              break;
            case "ArrowLeft":
              t.rewind();
              break;
            case "f":
              t.fullscreen.toggle();
              break;
            case "c":
              u || t.toggleCaptions();
              break;
            case "l":
              t.loop = !t.loop;
          }
          "Escape" === s && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = s;
        } else this.lastKey = null;
        var h;
      }
    }, {
      key: "toggleMenu",
      value: function toggleMenu(e) {
        Pe.toggleMenu.call(this.player, e);
      }
    }]);
    return Ve;
  }();
  "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
  var Ue = function (e, t) {
    return e(t = {
      exports: {}
    }, t.exports), t.exports;
  }(function (e, t) {
    e.exports = function () {
      var e = function e() {},
        t = {},
        i = {},
        s = {};
      function n(e, t) {
        e = e.push ? e : [e];
        var n,
          a,
          l,
          r = [],
          o = e.length,
          c = o;
        for (n = function n(e, i) {
          i.length && r.push(e), --c || t(r);
        }; o--;) a = e[o], (l = i[a]) ? n(a, l) : (s[a] = s[a] || []).push(n);
      }
      function a(e, t) {
        if (e) {
          var n = s[e];
          if (i[e] = t, n) for (; n.length;) n[0](e, t), n.splice(0, 1);
        }
      }
      function l(t, i) {
        t.call && (t = {
          success: t
        }), i.length ? (t.error || e)(i) : (t.success || e)(t);
      }
      function r(t, i, s, n) {
        var a,
          l,
          o = document,
          c = s.async,
          u = (s.numRetries || 0) + 1,
          h = s.before || e,
          d = t.replace(/[\?|#].*$/, ""),
          m = t.replace(/^(css|img)!/, "");
        n = n || 0, /(^css!|\.css$)/.test(d) ? ((l = o.createElement("link")).rel = "stylesheet", l.href = m, (a = "hideFocus" in l) && l.relList && (a = 0, l.rel = "preload", l.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d) ? (l = o.createElement("img")).src = m : ((l = o.createElement("script")).src = t, l.async = void 0 === c || c), l.onload = l.onerror = l.onbeforeload = function (e) {
          var o = e.type[0];
          if (a) try {
            l.sheet.cssText.length || (o = "e");
          } catch (e) {
            18 != e.code && (o = "e");
          }
          if ("e" == o) {
            if ((n += 1) < u) return r(t, i, s, n);
          } else if ("preload" == l.rel && "style" == l.as) return l.rel = "stylesheet";
          i(t, o, e.defaultPrevented);
        }, !1 !== h(t, l) && o.head.appendChild(l);
      }
      function o(e, t, i) {
        var s,
          n,
          a = (e = e.push ? e : [e]).length,
          l = a,
          o = [];
        for (s = function s(e, i, _s13) {
          if ("e" == i && o.push(e), "b" == i) {
            if (!_s13) return;
            o.push(e);
          }
          --a || t(o);
        }, n = 0; n < l; n++) r(e[n], s, i);
      }
      function c(e, i, s) {
        var n, r;
        if (i && i.trim && (n = i), r = (n ? s : i) || {}, n) {
          if (n in t) throw "LoadJS";
          t[n] = !0;
        }
        function c(t, i) {
          o(e, function (e) {
            l(r, e), t && l({
              success: t,
              error: i
            }, e), a(n, e);
          }, r);
        }
        if (r.returnPromise) return new Promise(c);
        c();
      }
      return c.ready = function (e, t) {
        return n(e, function (e) {
          l(t, e);
        }), c;
      }, c.done = function (e) {
        a(e, []);
      }, c.reset = function () {
        t = {}, i = {}, s = {};
      }, c.isDefined = function (e) {
        return e in t;
      }, c;
    }();
  });
  function Be(e) {
    return new Promise(function (t, i) {
      Ue(e, {
        success: t,
        error: i
      });
    });
  }
  function We(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Z.call(this, this.media, e ? "play" : "pause"));
  }
  var ze = {
    setup: function setup() {
      var e = this;
      F(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, ue.call(e), S.object(window.Vimeo) ? ze.ready.call(e) : Be(e.config.urls.vimeo.sdk).then(function () {
        ze.ready.call(e);
      }).catch(function (t) {
        e.debug.warn("Vimeo SDK (player.js) failed to load", t);
      });
    },
    ready: function ready() {
      var _this28 = this;
      var e = this,
        t = e.config.vimeo,
        i = t.premium,
        s = t.referrerPolicy,
        n = _objectWithoutProperties(t, _excluded);
      var a = e.media.getAttribute("src"),
        l = "";
      S.empty(a) ? (a = e.media.getAttribute(e.config.attributes.embed.id), l = e.media.getAttribute(e.config.attributes.embed.hash)) : l = function (e) {
        var t = e.match(/^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/);
        return t && 5 === t.length ? t[4] : null;
      }(a);
      var r = l ? {
        h: l
      } : {};
      i && Object.assign(n, {
        controls: !1,
        sidedock: !1
      });
      var o = Ne(_objectSpread(_objectSpread({
          loop: e.config.loop.active,
          autoplay: e.autoplay,
          muted: e.muted,
          gesture: "media",
          playsinline: e.config.playsinline
        }, r), n)),
        c = (u = a, S.empty(u) ? null : S.number(Number(u)) ? u : u.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : u);
      var u;
      var h = $("iframe"),
        d = me(e.config.urls.vimeo.iframe, c, o);
      if (h.setAttribute("src", d), h.setAttribute("allowfullscreen", ""), h.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), S.empty(s) || h.setAttribute("referrerPolicy", s), i || !t.customControls) h.setAttribute("data-poster", e.poster), e.media = D(h, e.media);else {
        var _t15 = $("div", {
          class: e.config.classNames.embedContainer,
          "data-poster": e.poster
        });
        _t15.appendChild(h), e.media = D(_t15, e.media);
      }
      t.customControls || Te(me(e.config.urls.vimeo.api, d)).then(function (t) {
        !S.empty(t) && t.thumbnail_url && Re.setPoster.call(e, t.thumbnail_url).catch(function () {});
      }), e.embed = new window.Vimeo.Player(h, {
        autopause: e.config.autopause,
        muted: e.muted
      }), e.media.paused = !0, e.media.currentTime = 0, e.supported.ui && e.embed.disableTextTrack(), e.media.play = function () {
        return We.call(e, !0), e.embed.play();
      }, e.media.pause = function () {
        return We.call(e, !1), e.embed.pause();
      }, e.media.stop = function () {
        e.pause(), e.currentTime = 0;
      };
      var m = e.media.currentTime;
      Object.defineProperty(e.media, "currentTime", {
        get: function get() {
          return m;
        },
        set: function set(t) {
          var i = e.embed,
            s = e.media,
            n = e.paused,
            a = e.volume,
            l = n && !i.hasPlayed;
          s.seeking = !0, Z.call(e, s, "seeking"), Promise.resolve(l && i.setVolume(0)).then(function () {
            return i.setCurrentTime(t);
          }).then(function () {
            return l && i.pause();
          }).then(function () {
            return l && i.setVolume(a);
          }).catch(function () {});
        }
      });
      var p = e.config.speed.selected;
      Object.defineProperty(e.media, "playbackRate", {
        get: function get() {
          return p;
        },
        set: function set(t) {
          e.embed.setPlaybackRate(t).then(function () {
            p = t, Z.call(e, e.media, "ratechange");
          }).catch(function () {
            e.options.speed = [1];
          });
        }
      });
      var g = e.config.volume;
      Object.defineProperty(e.media, "volume", {
        get: function get() {
          return g;
        },
        set: function set(t) {
          e.embed.setVolume(t).then(function () {
            g = t, Z.call(e, e.media, "volumechange");
          });
        }
      });
      var f = e.config.muted;
      Object.defineProperty(e.media, "muted", {
        get: function get() {
          return f;
        },
        set: function set(t) {
          var i = !!S.boolean(t) && t;
          e.embed.setMuted(!!i || e.config.muted).then(function () {
            f = i, Z.call(e, e.media, "volumechange");
          });
        }
      });
      var y,
        b = e.config.loop;
      Object.defineProperty(e.media, "loop", {
        get: function get() {
          return b;
        },
        set: function set(t) {
          var i = S.boolean(t) ? t : e.config.loop.active;
          e.embed.setLoop(i).then(function () {
            b = i;
          });
        }
      }), e.embed.getVideoUrl().then(function (t) {
        y = t, Pe.setDownloadUrl.call(e);
      }).catch(function (e) {
        _this28.debug.warn(e);
      }), Object.defineProperty(e.media, "currentSrc", {
        get: function get() {
          return y;
        }
      }), Object.defineProperty(e.media, "ended", {
        get: function get() {
          return e.currentTime === e.duration;
        }
      }), Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then(function (t) {
        var _t16 = _slicedToArray(t, 2),
          i = _t16[0],
          s = _t16[1];
        e.embed.ratio = he(i, s), ue.call(_this28);
      }), e.embed.setAutopause(e.config.autopause).then(function (t) {
        e.config.autopause = t;
      }), e.embed.getVideoTitle().then(function (t) {
        e.config.title = t, Re.setTitle.call(_this28);
      }), e.embed.getCurrentTime().then(function (t) {
        m = t, Z.call(e, e.media, "timeupdate");
      }), e.embed.getDuration().then(function (t) {
        e.media.duration = t, Z.call(e, e.media, "durationchange");
      }), e.embed.getTextTracks().then(function (t) {
        e.media.textTracks = t, xe.setup.call(e);
      }), e.embed.on("cuechange", function ({
        cues: t = []
      }) {
        var i = t.map(function (e) {
          return function (e) {
            var t = document.createDocumentFragment(),
              i = document.createElement("div");
            return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText;
          }(e.text);
        });
        xe.updateCues.call(e, i);
      }), e.embed.on("loaded", function () {
        if (e.embed.getPaused().then(function (t) {
          We.call(e, !t), t || Z.call(e, e.media, "playing");
        }), S.element(e.embed.element) && e.supported.ui) {
          e.embed.element.setAttribute("tabindex", -1);
        }
      }), e.embed.on("bufferstart", function () {
        Z.call(e, e.media, "waiting");
      }), e.embed.on("bufferend", function () {
        Z.call(e, e.media, "playing");
      }), e.embed.on("play", function () {
        We.call(e, !0), Z.call(e, e.media, "playing");
      }), e.embed.on("pause", function () {
        We.call(e, !1);
      }), e.embed.on("timeupdate", function (t) {
        e.media.seeking = !1, m = t.seconds, Z.call(e, e.media, "timeupdate");
      }), e.embed.on("progress", function (t) {
        e.media.buffered = t.percent, Z.call(e, e.media, "progress"), 1 === parseInt(t.percent, 10) && Z.call(e, e.media, "canplaythrough"), e.embed.getDuration().then(function (t) {
          t !== e.media.duration && (e.media.duration = t, Z.call(e, e.media, "durationchange"));
        });
      }), e.embed.on("seeked", function () {
        e.media.seeking = !1, Z.call(e, e.media, "seeked");
      }), e.embed.on("ended", function () {
        e.media.paused = !0, Z.call(e, e.media, "ended");
      }), e.embed.on("error", function (t) {
        e.media.error = t, Z.call(e, e.media, "error");
      }), t.customControls && setTimeout(function () {
        return Re.build.call(e);
      }, 0);
    }
  };
  function Ke(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Z.call(this, this.media, e ? "play" : "pause"));
  }
  function Ye(e) {
    return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
  }
  var Qe = {
      setup: function setup() {
        var _this29 = this;
        if (F(this.elements.wrapper, this.config.classNames.embed, !0), S.object(window.YT) && S.function(window.YT.Player)) Qe.ready.call(this);else {
          var _e26 = window.onYouTubeIframeAPIReady;
          window.onYouTubeIframeAPIReady = function () {
            S.function(_e26) && _e26(), Qe.ready.call(_this29);
          }, Be(this.config.urls.youtube.sdk).catch(function (e) {
            _this29.debug.warn("YouTube API failed to load", e);
          });
        }
      },
      getTitle: function getTitle(e) {
        var _this30 = this;
        Te(me(this.config.urls.youtube.api, e)).then(function (e) {
          if (S.object(e)) {
            var _t17 = e.title,
              _i15 = e.height,
              _s14 = e.width;
            _this30.config.title = _t17, Re.setTitle.call(_this30), _this30.embed.ratio = he(_s14, _i15);
          }
          ue.call(_this30);
        }).catch(function () {
          ue.call(_this30);
        });
      },
      ready: function ready() {
        var e = this,
          t = e.config.youtube,
          i = e.media && e.media.getAttribute("id");
        if (!S.empty(i) && i.startsWith("youtube-")) return;
        var s = e.media.getAttribute("src");
        S.empty(s) && (s = e.media.getAttribute(this.config.attributes.embed.id));
        var n = (a = s, S.empty(a) ? null : a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a);
        var a;
        var l = $("div", {
          id: "".concat(e.provider, "-").concat(Math.floor(1e4 * Math.random())),
          "data-poster": t.customControls ? e.poster : void 0
        });
        if (e.media = D(l, e.media), t.customControls) {
          var _t18 = function _t18(e) {
            return "https://i.ytimg.com/vi/".concat(n, "/").concat(e, "default.jpg");
          };
          Fe(_t18("maxres"), 121).catch(function () {
            return Fe(_t18("sd"), 121);
          }).catch(function () {
            return Fe(_t18("hq"));
          }).then(function (t) {
            return Re.setPoster.call(e, t.src);
          }).then(function (t) {
            t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
          }).catch(function () {});
        }
        e.embed = new window.YT.Player(e.media, {
          videoId: n,
          host: Ye(t),
          playerVars: x({}, {
            autoplay: e.config.autoplay ? 1 : 0,
            hl: e.config.hl,
            controls: e.supported.ui && t.customControls ? 0 : 1,
            disablekb: 1,
            playsinline: e.config.playsinline && !e.config.fullscreen.iosNative ? 1 : 0,
            cc_load_policy: e.captions.active ? 1 : 0,
            cc_lang_pref: e.config.captions.language,
            widget_referrer: window ? window.location.href : null
          }, t),
          events: {
            onError: function onError(t) {
              if (!e.media.error) {
                var _i16 = t.data,
                  _s15 = {
                    2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                    5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                    100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                    101: "The owner of the requested video does not allow it to be played in embedded players.",
                    150: "The owner of the requested video does not allow it to be played in embedded players."
                  }[_i16] || "An unknown error occurred";
                e.media.error = {
                  code: _i16,
                  message: _s15
                }, Z.call(e, e.media, "error");
              }
            },
            onPlaybackRateChange: function onPlaybackRateChange(t) {
              var i = t.target;
              e.media.playbackRate = i.getPlaybackRate(), Z.call(e, e.media, "ratechange");
            },
            onReady: function onReady(i) {
              if (S.function(e.media.play)) return;
              var s = i.target;
              Qe.getTitle.call(e, n), e.media.play = function () {
                Ke.call(e, !0), s.playVideo();
              }, e.media.pause = function () {
                Ke.call(e, !1), s.pauseVideo();
              }, e.media.stop = function () {
                s.stopVideo();
              }, e.media.duration = s.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                get: function get() {
                  return Number(s.getCurrentTime());
                },
                set: function set(t) {
                  e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, Z.call(e, e.media, "seeking"), s.seekTo(t);
                }
              }), Object.defineProperty(e.media, "playbackRate", {
                get: function get() {
                  return s.getPlaybackRate();
                },
                set: function set(e) {
                  s.setPlaybackRate(e);
                }
              });
              var a = e.config.volume;
              Object.defineProperty(e.media, "volume", {
                get: function get() {
                  return a;
                },
                set: function set(t) {
                  a = t, s.setVolume(100 * a), Z.call(e, e.media, "volumechange");
                }
              });
              var l = e.config.muted;
              Object.defineProperty(e.media, "muted", {
                get: function get() {
                  return l;
                },
                set: function set(t) {
                  var i = S.boolean(t) ? t : l;
                  l = i, s[i ? "mute" : "unMute"](), s.setVolume(100 * a), Z.call(e, e.media, "volumechange");
                }
              }), Object.defineProperty(e.media, "currentSrc", {
                get: function get() {
                  return s.getVideoUrl();
                }
              }), Object.defineProperty(e.media, "ended", {
                get: function get() {
                  return e.currentTime === e.duration;
                }
              });
              var r = s.getAvailablePlaybackRates();
              e.options.speed = r.filter(function (t) {
                return e.config.speed.options.includes(t);
              }), e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1), Z.call(e, e.media, "timeupdate"), Z.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function () {
                e.media.buffered = s.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && Z.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), Z.call(e, e.media, "canplaythrough"));
              }, 200), t.customControls && setTimeout(function () {
                return Re.build.call(e);
              }, 50);
            },
            onStateChange: function onStateChange(i) {
              var s = i.target;
              clearInterval(e.timers.playing);
              switch (e.media.seeking && [1, 2].includes(i.data) && (e.media.seeking = !1, Z.call(e, e.media, "seeked")), i.data) {
                case -1:
                  Z.call(e, e.media, "timeupdate"), e.media.buffered = s.getVideoLoadedFraction(), Z.call(e, e.media, "progress");
                  break;
                case 0:
                  Ke.call(e, !1), e.media.loop ? (s.stopVideo(), s.playVideo()) : Z.call(e, e.media, "ended");
                  break;
                case 1:
                  t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (Ke.call(e, !0), Z.call(e, e.media, "playing"), e.timers.playing = setInterval(function () {
                    Z.call(e, e.media, "timeupdate");
                  }, 50), e.media.duration !== s.getDuration() && (e.media.duration = s.getDuration(), Z.call(e, e.media, "durationchange")));
                  break;
                case 2:
                  e.muted || e.embed.unMute(), Ke.call(e, !1);
                  break;
                case 3:
                  Z.call(e, e.media, "waiting");
              }
              Z.call(e, e.elements.container, "statechange", !1, {
                code: i.data
              });
            }
          }
        });
      }
    },
    Xe = {
      setup: function setup() {
        this.media ? (F(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), F(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && F(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = $("div", {
          class: this.config.classNames.video
        }), L(this.media, this.elements.wrapper), this.elements.poster = $("div", {
          class: this.config.classNames.poster
        }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? de.setup.call(this) : this.isYouTube ? Qe.setup.call(this) : this.isVimeo && ze.setup.call(this)) : this.debug.warn("No media element found!");
      }
    };
  var Je = /*#__PURE__*/function () {
    function Je(t) {
      var _this31 = this;
      _classCallCheck(this, Je);
      e(this, "load", function () {
        _this31.enabled && (S.object(window.google) && S.object(window.google.ima) ? _this31.ready() : Be(_this31.player.config.urls.googleIMA.sdk).then(function () {
          _this31.ready();
        }).catch(function () {
          _this31.trigger("error", new Error("Google IMA SDK failed to load"));
        }));
      }), e(this, "ready", function () {
        var e;
        _this31.enabled || ((e = _this31).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), _this31.startSafetyTimer(12e3, "ready()"), _this31.managerPromise.then(function () {
          _this31.clearSafetyTimer("onAdsManagerLoaded()");
        }), _this31.listeners(), _this31.setupIMA();
      }), e(this, "setupIMA", function () {
        _this31.elements.container = $("div", {
          class: _this31.player.config.classNames.ads
        }), _this31.player.elements.container.appendChild(_this31.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(_this31.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(_this31.player.config.playsinline), _this31.elements.displayContainer = new google.ima.AdDisplayContainer(_this31.elements.container, _this31.player.media), _this31.loader = new google.ima.AdsLoader(_this31.elements.displayContainer), _this31.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (e) {
          return _this31.onAdsManagerLoaded(e);
        }, !1), _this31.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
          return _this31.onAdError(e);
        }, !1), _this31.requestAds();
      }), e(this, "requestAds", function () {
        var e = _this31.player.elements.container;
        try {
          var _t19 = new google.ima.AdsRequest();
          _t19.adTagUrl = _this31.tagUrl, _t19.linearAdSlotWidth = e.offsetWidth, _t19.linearAdSlotHeight = e.offsetHeight, _t19.nonLinearAdSlotWidth = e.offsetWidth, _t19.nonLinearAdSlotHeight = e.offsetHeight, _t19.forceNonLinearFullSlot = !1, _t19.setAdWillPlayMuted(!_this31.player.muted), _this31.loader.requestAds(_t19);
        } catch (e) {
          _this31.onAdError(e);
        }
      }), e(this, "pollCountdown", function (e = !1) {
        if (!e) return clearInterval(_this31.countdownTimer), void _this31.elements.container.removeAttribute("data-badge-text");
        _this31.countdownTimer = setInterval(function () {
          var e = Ee(Math.max(_this31.manager.getRemainingTime(), 0)),
            t = "".concat(ve.get("advertisement", _this31.player.config), " - ").concat(e);
          _this31.elements.container.setAttribute("data-badge-text", t);
        }, 100);
      }), e(this, "onAdsManagerLoaded", function (e) {
        if (!_this31.enabled) return;
        var t = new google.ima.AdsRenderingSettings();
        t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, _this31.manager = e.getAdsManager(_this31.player, t), _this31.cuePoints = _this31.manager.getCuePoints(), _this31.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
          return _this31.onAdError(e);
        }), Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
          _this31.manager.addEventListener(google.ima.AdEvent.Type[e], function (e) {
            return _this31.onAdEvent(e);
          });
        }), _this31.trigger("loaded");
      }), e(this, "addCuePoints", function () {
        S.empty(_this31.cuePoints) || _this31.cuePoints.forEach(function (e) {
          if (0 !== e && -1 !== e && e < _this31.player.duration) {
            var _t20 = _this31.player.elements.progress;
            if (S.element(_t20)) {
              var _i17 = 100 / _this31.player.duration * e,
                _s16 = $("span", {
                  class: _this31.player.config.classNames.cues
                });
              _s16.style.left = "".concat(_i17.toString(), "%"), _t20.appendChild(_s16);
            }
          }
        });
      }), e(this, "onAdEvent", function (e) {
        var t = _this31.player.elements.container,
          i = e.getAd(),
          s = e.getAdData();
        switch (function (e) {
          Z.call(_this31.player, _this31.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase()));
        }(e.type), e.type) {
          case google.ima.AdEvent.Type.LOADED:
            _this31.trigger("loaded"), _this31.pollCountdown(!0), i.isLinear() || (i.width = t.offsetWidth, i.height = t.offsetHeight);
            break;
          case google.ima.AdEvent.Type.STARTED:
            _this31.manager.setVolume(_this31.player.volume);
            break;
          case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            _this31.player.ended ? _this31.loadAds() : _this31.loader.contentComplete();
            break;
          case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            _this31.pauseContent();
            break;
          case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            _this31.pollCountdown(), _this31.resumeContent();
            break;
          case google.ima.AdEvent.Type.LOG:
            s.adError && _this31.player.debug.warn("Non-fatal ad error: ".concat(s.adError.getMessage()));
        }
      }), e(this, "onAdError", function (e) {
        _this31.cancel(), _this31.player.debug.warn("Ads error", e);
      }), e(this, "listeners", function () {
        var e = _this31.player.elements.container;
        var t;
        _this31.player.on("canplay", function () {
          _this31.addCuePoints();
        }), _this31.player.on("ended", function () {
          _this31.loader.contentComplete();
        }), _this31.player.on("timeupdate", function () {
          t = _this31.player.currentTime;
        }), _this31.player.on("seeked", function () {
          var e = _this31.player.currentTime;
          S.empty(_this31.cuePoints) || _this31.cuePoints.forEach(function (i, s) {
            t < i && i < e && (_this31.manager.discardAdBreak(), _this31.cuePoints.splice(s, 1));
          });
        }), window.addEventListener("resize", function () {
          _this31.manager && _this31.manager.resize(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL);
        });
      }), e(this, "play", function () {
        var e = _this31.player.elements.container;
        _this31.managerPromise || _this31.resumeContent(), _this31.managerPromise.then(function () {
          _this31.manager.setVolume(_this31.player.volume), _this31.elements.displayContainer.initialize();
          try {
            _this31.initialized || (_this31.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), _this31.manager.start()), _this31.initialized = !0;
          } catch (e) {
            _this31.onAdError(e);
          }
        }).catch(function () {});
      }), e(this, "resumeContent", function () {
        _this31.elements.container.style.zIndex = "", _this31.playing = !1, ie(_this31.player.media.play());
      }), e(this, "pauseContent", function () {
        _this31.elements.container.style.zIndex = 3, _this31.playing = !0, _this31.player.media.pause();
      }), e(this, "cancel", function () {
        _this31.initialized && _this31.resumeContent(), _this31.trigger("error"), _this31.loadAds();
      }), e(this, "loadAds", function () {
        _this31.managerPromise.then(function () {
          _this31.manager && _this31.manager.destroy(), _this31.managerPromise = new Promise(function (e) {
            _this31.on("loaded", e), _this31.player.debug.log(_this31.manager);
          }), _this31.initialized = !1, _this31.requestAds();
        }).catch(function () {});
      }), e(this, "trigger", function (e, ...t) {
        var i = _this31.events[e];
        S.array(i) && i.forEach(function (e) {
          S.function(e) && e.apply(_this31, t);
        });
      }), e(this, "on", function (e, t) {
        return S.array(_this31.events[e]) || (_this31.events[e] = []), _this31.events[e].push(t), _this31;
      }), e(this, "startSafetyTimer", function (e, t) {
        _this31.player.debug.log("Safety timer invoked from: ".concat(t)), _this31.safetyTimer = setTimeout(function () {
          _this31.cancel(), _this31.clearSafetyTimer("startSafetyTimer()");
        }, e);
      }), e(this, "clearSafetyTimer", function (e) {
        S.nullOrUndefined(_this31.safetyTimer) || (_this31.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(_this31.safetyTimer), _this31.safetyTimer = null);
      }), this.player = t, this.config = t.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
        container: null,
        displayContainer: null
      }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
        _this31.on("loaded", e), _this31.on("error", t);
      }), this.load();
    }
    _createClass(Je, [{
      key: "enabled",
      get: function get() {
        var e = this.config;
        return this.player.isHTML5 && this.player.isVideo && e.enabled && (!S.empty(e.publisherId) || S.url(e.tagUrl));
      }
    }, {
      key: "tagUrl",
      get: function get() {
        var e = this.config;
        if (S.url(e.tagUrl)) return e.tagUrl;
        return "https://go.aniview.com/api/adserver6/vast/?".concat(Ne({
          AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
          AV_CHANNELID: "5a0458dc28a06145e4519d21",
          AV_URL: window.location.hostname,
          cb: Date.now(),
          AV_WIDTH: 640,
          AV_HEIGHT: 480,
          AV_CDIM2: e.publisherId
        }));
      }
    }]);
    return Je;
  }();
  function Ge(e = 0, t = 0, i = 255) {
    return Math.min(Math.max(e, t), i);
  }
  var Ze = function Ze(e) {
      var t = [];
      return e.split(/\r\n\r\n|\n\n|\r\r/).forEach(function (e) {
        var i = {};
        e.split(/\r\n|\n|\r/).forEach(function (e) {
          if (S.number(i.startTime)) {
            if (!S.empty(e.trim()) && S.empty(i.text)) {
              var _t22, _t21$1$split, _t21$1$split2;
              var _t21 = e.trim().split("#xywh=");
              (_t22 = _slicedToArray(_t21, 1), i.text = _t22[0]), _t21[1] && (_t21$1$split = _t21[1].split(","), _t21$1$split2 = _slicedToArray(_t21$1$split, 4), i.x = _t21$1$split2[0], i.y = _t21$1$split2[1], i.w = _t21$1$split2[2], i.h = _t21$1$split2[3], _t21$1$split);
            }
          } else {
            var _t23 = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
            _t23 && (i.startTime = 60 * Number(_t23[1] || 0) * 60 + 60 * Number(_t23[2]) + Number(_t23[3]) + Number("0.".concat(_t23[4])), i.endTime = 60 * Number(_t23[6] || 0) * 60 + 60 * Number(_t23[7]) + Number(_t23[8]) + Number("0.".concat(_t23[9])));
          }
        }), i.text && t.push(i);
      }), t;
    },
    et = function et(e, t) {
      var i = {};
      return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, i.width = e * t.height), i;
    };
  var tt = /*#__PURE__*/function () {
    function tt(t) {
      var _this32 = this;
      _classCallCheck(this, tt);
      e(this, "load", function () {
        _this32.player.elements.display.seekTooltip && (_this32.player.elements.display.seekTooltip.hidden = _this32.enabled), _this32.enabled && _this32.getThumbnails().then(function () {
          _this32.enabled && (_this32.render(), _this32.determineContainerAutoSizing(), _this32.listeners(), _this32.loaded = !0);
        });
      }), e(this, "getThumbnails", function () {
        return new Promise(function (e) {
          var t = _this32.player.config.previewThumbnails.src;
          if (S.empty(t)) throw new Error("Missing previewThumbnails.src config attribute");
          var i = function i() {
            _this32.thumbnails.sort(function (e, t) {
              return e.height - t.height;
            }), _this32.player.debug.log("Preview thumbnails", _this32.thumbnails), e();
          };
          if (S.function(t)) t(function (e) {
            _this32.thumbnails = e, i();
          });else {
            var _e27 = (S.string(t) ? [t] : t).map(function (e) {
              return _this32.getThumbnail(e);
            });
            Promise.all(_e27).then(i);
          }
        });
      }), e(this, "getThumbnail", function (e) {
        return new Promise(function (t) {
          Te(e).then(function (i) {
            var s = {
              frames: Ze(i),
              height: null,
              urlPrefix: ""
            };
            s.frames[0].text.startsWith("/") || s.frames[0].text.startsWith("http://") || s.frames[0].text.startsWith("https://") || (s.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
            var n = new Image();
            n.onload = function () {
              s.height = n.naturalHeight, s.width = n.naturalWidth, _this32.thumbnails.push(s), t();
            }, n.src = s.urlPrefix + s.frames[0].text;
          });
        });
      }), e(this, "startMove", function (e) {
        if (_this32.loaded && S.event(e) && ["touchmove", "mousemove"].includes(e.type) && _this32.player.media.duration) {
          if ("touchmove" === e.type) _this32.seekTime = _this32.player.media.duration * (_this32.player.elements.inputs.seek.value / 100);else {
            var t, i;
            var _s17 = _this32.player.elements.progress.getBoundingClientRect(),
              _n6 = 100 / _s17.width * (e.pageX - _s17.left);
            _this32.seekTime = _this32.player.media.duration * (_n6 / 100), _this32.seekTime < 0 && (_this32.seekTime = 0), _this32.seekTime > _this32.player.media.duration - 1 && (_this32.seekTime = _this32.player.media.duration - 1), _this32.mousePosX = e.pageX, _this32.elements.thumb.time.innerText = Ee(_this32.seekTime);
            var _a7 = null === (t = _this32.player.config.markers) || void 0 === t || null === (i = t.points) || void 0 === i ? void 0 : i.find(function ({
              time: e
            }) {
              return e === Math.round(_this32.seekTime);
            });
            _a7 && _this32.elements.thumb.time.insertAdjacentHTML("afterbegin", "".concat(_a7.label, "<br>"));
          }
          _this32.showImageAtCurrentTime();
        }
      }), e(this, "endMove", function () {
        _this32.toggleThumbContainer(!1, !0);
      }), e(this, "startScrubbing", function (e) {
        (S.nullOrUndefined(e.button) || !1 === e.button || 0 === e.button) && (_this32.mouseDown = !0, _this32.player.media.duration && (_this32.toggleScrubbingContainer(!0), _this32.toggleThumbContainer(!1, !0), _this32.showImageAtCurrentTime()));
      }), e(this, "endScrubbing", function () {
        _this32.mouseDown = !1, Math.ceil(_this32.lastTime) === Math.ceil(_this32.player.media.currentTime) ? _this32.toggleScrubbingContainer(!1) : G.call(_this32.player, _this32.player.media, "timeupdate", function () {
          _this32.mouseDown || _this32.toggleScrubbingContainer(!1);
        });
      }), e(this, "listeners", function () {
        _this32.player.on("play", function () {
          _this32.toggleThumbContainer(!1, !0);
        }), _this32.player.on("seeked", function () {
          _this32.toggleThumbContainer(!1);
        }), _this32.player.on("timeupdate", function () {
          _this32.lastTime = _this32.player.media.currentTime;
        });
      }), e(this, "render", function () {
        _this32.elements.thumb.container = $("div", {
          class: _this32.player.config.classNames.previewThumbnails.thumbContainer
        }), _this32.elements.thumb.imageContainer = $("div", {
          class: _this32.player.config.classNames.previewThumbnails.imageContainer
        }), _this32.elements.thumb.container.appendChild(_this32.elements.thumb.imageContainer);
        var e = $("div", {
          class: _this32.player.config.classNames.previewThumbnails.timeContainer
        });
        _this32.elements.thumb.time = $("span", {}, "00:00"), e.appendChild(_this32.elements.thumb.time), _this32.elements.thumb.imageContainer.appendChild(e), S.element(_this32.player.elements.progress) && _this32.player.elements.progress.appendChild(_this32.elements.thumb.container), _this32.elements.scrubbing.container = $("div", {
          class: _this32.player.config.classNames.previewThumbnails.scrubbingContainer
        }), _this32.player.elements.wrapper.appendChild(_this32.elements.scrubbing.container);
      }), e(this, "destroy", function () {
        _this32.elements.thumb.container && _this32.elements.thumb.container.remove(), _this32.elements.scrubbing.container && _this32.elements.scrubbing.container.remove();
      }), e(this, "showImageAtCurrentTime", function () {
        _this32.mouseDown ? _this32.setScrubbingContainerSize() : _this32.setThumbContainerSizeAndPos();
        var e = _this32.thumbnails[0].frames.findIndex(function (e) {
            return _this32.seekTime >= e.startTime && _this32.seekTime <= e.endTime;
          }),
          t = e >= 0;
        var i = 0;
        _this32.mouseDown || _this32.toggleThumbContainer(t), t && (_this32.thumbnails.forEach(function (t, s) {
          _this32.loadedImages.includes(t.frames[e].text) && (i = s);
        }), e !== _this32.showingThumb && (_this32.showingThumb = e, _this32.loadImage(i)));
      }), e(this, "loadImage", function (e = 0) {
        var t = _this32.showingThumb,
          i = _this32.thumbnails[e],
          s = i.urlPrefix,
          n = i.frames[t],
          a = i.frames[t].text,
          l = s + a;
        if (_this32.currentImageElement && _this32.currentImageElement.dataset.filename === a) _this32.showImage(_this32.currentImageElement, n, e, t, a, !1), _this32.currentImageElement.dataset.index = t, _this32.removeOldImages(_this32.currentImageElement);else {
          _this32.loadingImage && _this32.usingSprites && (_this32.loadingImage.onload = null);
          var _i18 = new Image();
          _i18.src = l, _i18.dataset.index = t, _i18.dataset.filename = a, _this32.showingThumbFilename = a, _this32.player.debug.log("Loading image: ".concat(l)), _i18.onload = function () {
            return _this32.showImage(_i18, n, e, t, a, !0);
          }, _this32.loadingImage = _i18, _this32.removeOldImages(_i18);
        }
      }), e(this, "showImage", function (e, t, i, s, n, a = !0) {
        _this32.player.debug.log("Showing thumb: ".concat(n, ". num: ").concat(s, ". qual: ").concat(i, ". newimg: ").concat(a)), _this32.setImageSizeAndOffset(e, t), a && (_this32.currentImageContainer.appendChild(e), _this32.currentImageElement = e, _this32.loadedImages.includes(n) || _this32.loadedImages.push(n)), _this32.preloadNearby(s, !0).then(_this32.preloadNearby(s, !1)).then(_this32.getHigherQuality(i, e, t, n));
      }), e(this, "removeOldImages", function (e) {
        Array.from(_this32.currentImageContainer.children).forEach(function (t) {
          if ("img" !== t.tagName.toLowerCase()) return;
          var i = _this32.usingSprites ? 500 : 1e3;
          if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
            t.dataset.deleting = !0;
            var _e28 = _this32.currentImageContainer;
            setTimeout(function () {
              _e28.removeChild(t), _this32.player.debug.log("Removing thumb: ".concat(t.dataset.filename));
            }, i);
          }
        });
      }), e(this, "preloadNearby", function (e, t = !0) {
        return new Promise(function (i) {
          setTimeout(function () {
            var s = _this32.thumbnails[0].frames[e].text;
            if (_this32.showingThumbFilename === s) {
              var _n7;
              _n7 = t ? _this32.thumbnails[0].frames.slice(e) : _this32.thumbnails[0].frames.slice(0, e).reverse();
              var _a8 = !1;
              _n7.forEach(function (e) {
                var t = e.text;
                if (t !== s && !_this32.loadedImages.includes(t)) {
                  _a8 = !0, _this32.player.debug.log("Preloading thumb filename: ".concat(t));
                  var _e29 = _this32.thumbnails[0].urlPrefix,
                    _s18 = _e29 + t,
                    _n8 = new Image();
                  _n8.src = _s18, _n8.onload = function () {
                    _this32.player.debug.log("Preloaded thumb filename: ".concat(t)), _this32.loadedImages.includes(t) || _this32.loadedImages.push(t), i();
                  };
                }
              }), _a8 || i();
            }
          }, 300);
        });
      }), e(this, "getHigherQuality", function (e, t, i, s) {
        if (e < _this32.thumbnails.length - 1) {
          var _n9 = t.naturalHeight;
          _this32.usingSprites && (_n9 = i.h), _n9 < _this32.thumbContainerHeight && setTimeout(function () {
            _this32.showingThumbFilename === s && (_this32.player.debug.log("Showing higher quality thumb for: ".concat(s)), _this32.loadImage(e + 1));
          }, 300);
        }
      }), e(this, "toggleThumbContainer", function (e = !1, t = !1) {
        var i = _this32.player.config.classNames.previewThumbnails.thumbContainerShown;
        _this32.elements.thumb.container.classList.toggle(i, e), !e && t && (_this32.showingThumb = null, _this32.showingThumbFilename = null);
      }), e(this, "toggleScrubbingContainer", function (e = !1) {
        var t = _this32.player.config.classNames.previewThumbnails.scrubbingContainerShown;
        _this32.elements.scrubbing.container.classList.toggle(t, e), e || (_this32.showingThumb = null, _this32.showingThumbFilename = null);
      }), e(this, "determineContainerAutoSizing", function () {
        (_this32.elements.thumb.imageContainer.clientHeight > 20 || _this32.elements.thumb.imageContainer.clientWidth > 20) && (_this32.sizeSpecifiedInCSS = !0);
      }), e(this, "setThumbContainerSizeAndPos", function () {
        var e = _this32.elements.thumb.imageContainer;
        if (_this32.sizeSpecifiedInCSS) {
          if (e.clientHeight > 20 && e.clientWidth < 20) {
            var _t24 = Math.floor(e.clientHeight * _this32.thumbAspectRatio);
            e.style.width = "".concat(_t24, "px");
          } else if (e.clientHeight < 20 && e.clientWidth > 20) {
            var _t25 = Math.floor(e.clientWidth / _this32.thumbAspectRatio);
            e.style.height = "".concat(_t25, "px");
          }
        } else {
          var _t26 = Math.floor(_this32.thumbContainerHeight * _this32.thumbAspectRatio);
          e.style.height = "".concat(_this32.thumbContainerHeight, "px"), e.style.width = "".concat(_t26, "px");
        }
        _this32.setThumbContainerPos();
      }), e(this, "setThumbContainerPos", function () {
        var e = _this32.player.elements.progress.getBoundingClientRect(),
          t = _this32.player.elements.container.getBoundingClientRect(),
          i = _this32.elements.thumb.container,
          s = t.left - e.left + 10,
          n = t.right - e.left - i.clientWidth - 10,
          a = _this32.mousePosX - e.left - i.clientWidth / 2,
          l = Ge(a, s, n);
        i.style.left = "".concat(l, "px"), i.style.setProperty("--preview-arrow-offset", a - l + "px");
      }), e(this, "setScrubbingContainerSize", function () {
        var _et = et(_this32.thumbAspectRatio, {
            width: _this32.player.media.clientWidth,
            height: _this32.player.media.clientHeight
          }),
          e = _et.width,
          t = _et.height;
        _this32.elements.scrubbing.container.style.width = "".concat(e, "px"), _this32.elements.scrubbing.container.style.height = "".concat(t, "px");
      }), e(this, "setImageSizeAndOffset", function (e, t) {
        if (!_this32.usingSprites) return;
        var i = _this32.thumbContainerHeight / t.h;
        e.style.height = e.naturalHeight * i + "px", e.style.width = e.naturalWidth * i + "px", e.style.left = "-".concat(t.x * i, "px"), e.style.top = "-".concat(t.y * i, "px");
      }), this.player = t, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
        thumb: {},
        scrubbing: {}
      }, this.load();
    }
    _createClass(tt, [{
      key: "enabled",
      get: function get() {
        return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
      }
    }, {
      key: "currentImageContainer",
      get: function get() {
        return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
      }
    }, {
      key: "usingSprites",
      get: function get() {
        return Object.keys(this.thumbnails[0].frames[0]).includes("w");
      }
    }, {
      key: "thumbAspectRatio",
      get: function get() {
        return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
      }
    }, {
      key: "thumbContainerHeight",
      get: function get() {
        if (this.mouseDown) {
          var _et2 = et(this.thumbAspectRatio, {
              width: this.player.media.clientWidth,
              height: this.player.media.clientHeight
            }),
            _e30 = _et2.height;
          return _e30;
        }
        return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
      }
    }, {
      key: "currentImageElement",
      get: function get() {
        return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
      },
      set: function set(e) {
        this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e;
      }
    }]);
    return tt;
  }();
  var it = {
    insertElements: function insertElements(e, t) {
      var _this33 = this;
      S.string(t) ? _(e, this.media, {
        src: t
      }) : S.array(t) && t.forEach(function (t) {
        _(e, _this33.media, t);
      });
    },
    change: function change(e) {
      var _this34 = this;
      N(e, "sources.length") ? (de.cancelRequests.call(this), this.destroy.call(this, function () {
        _this34.options.quality = [], O(_this34.media), _this34.media = null, S.element(_this34.elements.container) && _this34.elements.container.removeAttribute("class");
        var t = e.sources,
          i = e.type,
          _t27 = _slicedToArray(t, 1),
          _t27$ = _t27[0],
          _t27$$provider = _t27$.provider,
          s = _t27$$provider === void 0 ? _e.html5 : _t27$$provider,
          n = _t27$.src,
          a = "html5" === s ? i : "div",
          l = "html5" === s ? {} : {
            src: n
          };
        Object.assign(_this34, {
          provider: s,
          type: i,
          supported: K.check(i, s, _this34.config.playsinline),
          media: $(a, l)
        }), _this34.elements.container.appendChild(_this34.media), S.boolean(e.autoplay) && (_this34.config.autoplay = e.autoplay), _this34.isHTML5 && (_this34.config.crossorigin && _this34.media.setAttribute("crossorigin", ""), _this34.config.autoplay && _this34.media.setAttribute("autoplay", ""), S.empty(e.poster) || (_this34.poster = e.poster), _this34.config.loop.active && _this34.media.setAttribute("loop", ""), _this34.config.muted && _this34.media.setAttribute("muted", ""), _this34.config.playsinline && _this34.media.setAttribute("playsinline", "")), Re.addStyleHook.call(_this34), _this34.isHTML5 && it.insertElements.call(_this34, "source", t), _this34.config.title = e.title, Xe.setup.call(_this34), _this34.isHTML5 && Object.keys(e).includes("tracks") && it.insertElements.call(_this34, "track", e.tracks), (_this34.isHTML5 || _this34.isEmbed && !_this34.supported.ui) && Re.build.call(_this34), _this34.isHTML5 && _this34.media.load(), S.empty(e.previewThumbnails) || (Object.assign(_this34.config.previewThumbnails, e.previewThumbnails), _this34.previewThumbnails && _this34.previewThumbnails.loaded && (_this34.previewThumbnails.destroy(), _this34.previewThumbnails = null), _this34.config.previewThumbnails.enabled && (_this34.previewThumbnails = new tt(_this34))), _this34.fullscreen.update();
      }, !0)) : this.debug.warn("Invalid source format");
    }
  };
  var st = /*#__PURE__*/function () {
    function st(t, i) {
      var _this35 = this;
      _classCallCheck(this, st);
      if (e(this, "play", function () {
        return S.function(_this35.media.play) ? (_this35.ads && _this35.ads.enabled && _this35.ads.managerPromise.then(function () {
          return _this35.ads.play();
        }).catch(function () {
          return ie(_this35.media.play());
        }), _this35.media.play()) : null;
      }), e(this, "pause", function () {
        return _this35.playing && S.function(_this35.media.pause) ? _this35.media.pause() : null;
      }), e(this, "togglePlay", function (e) {
        return (S.boolean(e) ? e : !_this35.playing) ? _this35.play() : _this35.pause();
      }), e(this, "stop", function () {
        _this35.isHTML5 ? (_this35.pause(), _this35.restart()) : S.function(_this35.media.stop) && _this35.media.stop();
      }), e(this, "restart", function () {
        _this35.currentTime = 0;
      }), e(this, "rewind", function (e) {
        _this35.currentTime -= S.number(e) ? e : _this35.config.seekTime;
      }), e(this, "forward", function (e) {
        _this35.currentTime += S.number(e) ? e : _this35.config.seekTime;
      }), e(this, "increaseVolume", function (e) {
        var t = _this35.media.muted ? 0 : _this35.volume;
        _this35.volume = t + (S.number(e) ? e : 0);
      }), e(this, "decreaseVolume", function (e) {
        _this35.increaseVolume(-e);
      }), e(this, "airplay", function () {
        K.airplay && _this35.media.webkitShowPlaybackTargetPicker();
      }), e(this, "toggleControls", function (e) {
        if (_this35.supported.ui && !_this35.isAudio) {
          var _t28 = R(_this35.elements.container, _this35.config.classNames.hideControls),
            _i19 = void 0 === e ? void 0 : !e,
            _s19 = F(_this35.elements.container, _this35.config.classNames.hideControls, _i19);
          if (_s19 && S.array(_this35.config.controls) && _this35.config.controls.includes("settings") && !S.empty(_this35.config.settings) && Pe.toggleMenu.call(_this35, !1), _s19 !== _t28) {
            var _e31 = _s19 ? "controlshidden" : "controlsshown";
            Z.call(_this35, _this35.media, _e31);
          }
          return !_s19;
        }
        return !1;
      }), e(this, "on", function (e, t) {
        X.call(_this35, _this35.elements.container, e, t);
      }), e(this, "once", function (e, t) {
        G.call(_this35, _this35.elements.container, e, t);
      }), e(this, "off", function (e, t) {
        J(_this35.elements.container, e, t);
      }), e(this, "destroy", function (e, t = !1) {
        if (!_this35.ready) return;
        var i = function i() {
          document.body.style.overflow = "", _this35.embed = null, t ? (Object.keys(_this35.elements).length && (O(_this35.elements.buttons.play), O(_this35.elements.captions), O(_this35.elements.controls), O(_this35.elements.wrapper), _this35.elements.buttons.play = null, _this35.elements.captions = null, _this35.elements.controls = null, _this35.elements.wrapper = null), S.function(e) && e()) : (ee.call(_this35), de.cancelRequests.call(_this35), D(_this35.elements.original, _this35.elements.container), Z.call(_this35, _this35.elements.original, "destroyed", !0), S.function(e) && e.call(_this35.elements.original), _this35.ready = !1, setTimeout(function () {
            _this35.elements = null, _this35.media = null;
          }, 200));
        };
        _this35.stop(), clearTimeout(_this35.timers.loading), clearTimeout(_this35.timers.controls), clearTimeout(_this35.timers.resized), _this35.isHTML5 ? (Re.toggleNativeControls.call(_this35, !0), i()) : _this35.isYouTube ? (clearInterval(_this35.timers.buffering), clearInterval(_this35.timers.playing), null !== _this35.embed && S.function(_this35.embed.destroy) && _this35.embed.destroy(), i()) : _this35.isVimeo && (null !== _this35.embed && _this35.embed.unload().then(i), setTimeout(i, 200));
      }), e(this, "supports", function (e) {
        return K.mime.call(_this35, e);
      }), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = K.touch, this.media = t, S.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || S.nodeList(this.media) || S.array(this.media)) && (this.media = this.media[0]), this.config = x({}, Le, st.defaults, i || {}, function () {
        try {
          return JSON.parse(_this35.media.getAttribute("data-plyr-config"));
        } catch (e) {
          return {};
        }
      }()), this.elements = {
        container: null,
        fullscreen: null,
        captions: null,
        buttons: {},
        display: {},
        progress: {},
        inputs: {},
        settings: {
          popup: null,
          menu: null,
          panels: {},
          buttons: {}
        }
      }, this.captions = {
        active: null,
        currentTrack: -1,
        meta: new WeakMap()
      }, this.fullscreen = {
        active: !1
      }, this.options = {
        speed: [],
        quality: []
      }, this.debug = new qe(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", K), S.nullOrUndefined(this.media) || !S.element(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
      if (this.media.plyr) return void this.debug.warn("Target already setup");
      if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
      if (!K.check().api) return void this.debug.error("Setup failed: no support");
      var s = this.media.cloneNode(!0);
      s.autoplay = !1, this.elements.original = s;
      var n = this.media.tagName.toLowerCase();
      var a = null,
        l = null;
      switch (n) {
        case "div":
          if (a = this.media.querySelector("iframe"), S.element(a)) {
            if (l = Me(a.getAttribute("src")), this.provider = function (e) {
              return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? _e.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? _e.vimeo : null;
            }(l.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", l.search.length) {
              var _e32 = ["1", "true"];
              _e32.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), _e32.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = _e32.includes(l.searchParams.get("playsinline")), this.config.youtube.hl = l.searchParams.get("hl")) : this.config.playsinline = !0;
            }
          } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
          if (S.empty(this.provider) || !Object.values(_e).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
          this.type = je;
          break;
        case "video":
        case "audio":
          this.type = n, this.provider = _e.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
          break;
        default:
          return void this.debug.error("Setup failed: unsupported type");
      }
      this.supported = K.check(this.type, this.provider), this.supported.api ? (this.eventListeners = [], this.listeners = new Ve(this), this.storage = new we(this), this.media.plyr = this, S.element(this.elements.container) || (this.elements.container = $("div", {
        tabindex: 0
      }), L(this.media, this.elements.container)), Re.migrateStyles.call(this), Re.addStyleHook.call(this), Xe.setup.call(this), this.config.debug && X.call(this, this.elements.container, this.config.events.join(" "), function (e) {
        _this35.debug.log("event: ".concat(e.type));
      }), this.fullscreen = new He(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && Re.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Je(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", function () {
        return ie(_this35.play());
      }), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this))) : this.debug.error("Setup failed: no support");
    }
    _createClass(st, [{
      key: "isHTML5",
      get: function get() {
        return this.provider === _e.html5;
      }
    }, {
      key: "isEmbed",
      get: function get() {
        return this.isYouTube || this.isVimeo;
      }
    }, {
      key: "isYouTube",
      get: function get() {
        return this.provider === _e.youtube;
      }
    }, {
      key: "isVimeo",
      get: function get() {
        return this.provider === _e.vimeo;
      }
    }, {
      key: "isVideo",
      get: function get() {
        return this.type === je;
      }
    }, {
      key: "isAudio",
      get: function get() {
        return this.type === Oe;
      }
    }, {
      key: "playing",
      get: function get() {
        return Boolean(this.ready && !this.paused && !this.ended);
      }
    }, {
      key: "paused",
      get: function get() {
        return Boolean(this.media.paused);
      }
    }, {
      key: "stopped",
      get: function get() {
        return Boolean(this.paused && 0 === this.currentTime);
      }
    }, {
      key: "ended",
      get: function get() {
        return Boolean(this.media.ended);
      }
    }, {
      key: "currentTime",
      get: function get() {
        return Number(this.media.currentTime);
      },
      set: function set(e) {
        if (!this.duration) return;
        var t = S.number(e) && e > 0;
        this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
      }
    }, {
      key: "buffered",
      get: function get() {
        var e = this.media.buffered;
        return S.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
      }
    }, {
      key: "seeking",
      get: function get() {
        return Boolean(this.media.seeking);
      }
    }, {
      key: "duration",
      get: function get() {
        var e = parseFloat(this.config.duration),
          t = (this.media || {}).duration,
          i = S.number(t) && t !== 1 / 0 ? t : 0;
        return e || i;
      }
    }, {
      key: "volume",
      get: function get() {
        return Number(this.media.volume);
      },
      set: function set(e) {
        var _this$config2;
        var t = e;
        S.string(t) && (t = Number(t)), S.number(t) || (t = this.storage.get("volume")), S.number(t) || (_this$config2 = this.config, t = _this$config2.volume, _this$config2), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !S.empty(e) && this.muted && t > 0 && (this.muted = !1);
      }
    }, {
      key: "muted",
      get: function get() {
        return Boolean(this.media.muted);
      },
      set: function set(e) {
        var t = e;
        S.boolean(t) || (t = this.storage.get("muted")), S.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t;
      }
    }, {
      key: "hasAudio",
      get: function get() {
        return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
      }
    }, {
      key: "speed",
      get: function get() {
        return Number(this.media.playbackRate);
      },
      set: function set(e) {
        var _this36 = this;
        var t = null;
        S.number(e) && (t = e), S.number(t) || (t = this.storage.get("speed")), S.number(t) || (t = this.config.speed.selected);
        var i = this.minimumSpeed,
          s = this.maximumSpeed;
        t = Ge(t, i, s), this.config.speed.selected = t, setTimeout(function () {
          _this36.media && (_this36.media.playbackRate = t);
        }, 0);
      }
    }, {
      key: "minimumSpeed",
      get: function get() {
        return this.isYouTube ? Math.min.apply(Math, _toConsumableArray(this.options.speed)) : this.isVimeo ? .5 : .0625;
      }
    }, {
      key: "maximumSpeed",
      get: function get() {
        return this.isYouTube ? Math.max.apply(Math, _toConsumableArray(this.options.speed)) : this.isVimeo ? 2 : 16;
      }
    }, {
      key: "quality",
      get: function get() {
        return this.media.quality;
      },
      set: function set(e) {
        var t = this.config.quality,
          i = this.options.quality;
        if (!i.length) return;
        var s = [!S.empty(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(S.number),
          n = !0;
        if (!i.includes(s)) {
          var _e33 = ne(i, s);
          this.debug.warn("Unsupported quality option: ".concat(s, ", using ").concat(_e33, " instead")), s = _e33, n = !1;
        }
        t.selected = s, this.media.quality = s, n && this.storage.set({
          quality: s
        });
      }
    }, {
      key: "loop",
      get: function get() {
        return Boolean(this.media.loop);
      },
      set: function set(e) {
        var t = S.boolean(e) ? e : this.config.loop.active;
        this.config.loop.active = t, this.media.loop = t;
      }
    }, {
      key: "source",
      get: function get() {
        return this.media.currentSrc;
      },
      set: function set(e) {
        it.change.call(this, e);
      }
    }, {
      key: "download",
      get: function get() {
        var e = this.config.urls.download;
        return S.url(e) ? e : this.source;
      },
      set: function set(e) {
        S.url(e) && (this.config.urls.download = e, Pe.setDownloadUrl.call(this));
      }
    }, {
      key: "poster",
      get: function get() {
        return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
      },
      set: function set(e) {
        this.isVideo ? Re.setPoster.call(this, e, !1).catch(function () {}) : this.debug.warn("Poster can only be set for video");
      }
    }, {
      key: "ratio",
      get: function get() {
        if (!this.isVideo) return null;
        var e = oe(ce.call(this));
        return S.array(e) ? e.join(":") : e;
      },
      set: function set(e) {
        this.isVideo ? S.string(e) && re(e) ? (this.config.ratio = oe(e), ue.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video");
      }
    }, {
      key: "autoplay",
      get: function get() {
        return Boolean(this.config.autoplay);
      },
      set: function set(e) {
        this.config.autoplay = S.boolean(e) ? e : this.config.autoplay;
      }
    }, {
      key: "toggleCaptions",
      value: function toggleCaptions(e) {
        xe.toggle.call(this, e, !1);
      }
    }, {
      key: "currentTrack",
      get: function get() {
        var _this$captions2 = this.captions,
          e = _this$captions2.toggled,
          t = _this$captions2.currentTrack;
        return e ? t : -1;
      },
      set: function set(e) {
        xe.set.call(this, e, !1), xe.setup.call(this);
      }
    }, {
      key: "language",
      get: function get() {
        return (xe.getCurrentTrack.call(this) || {}).language;
      },
      set: function set(e) {
        xe.setLanguage.call(this, e, !1);
      }
    }, {
      key: "pip",
      get: function get() {
        return K.pip ? S.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Ie : null;
      },
      set: function set(e) {
        if (!K.pip) return;
        var t = S.boolean(e) ? e : !this.pip;
        S.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? Ie : $e), S.function(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture());
      }
    }, {
      key: "setPreviewThumbnails",
      value: function setPreviewThumbnails(e) {
        this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e), this.config.previewThumbnails.enabled && (this.previewThumbnails = new tt(this));
      }
    }], [{
      key: "supported",
      value: function supported(e, t) {
        return K.check(e, t);
      }
    }, {
      key: "loadSprite",
      value: function loadSprite(e, t) {
        return ke(e, t);
      }
    }, {
      key: "setup",
      value: function setup(e, t = {}) {
        var i = null;
        return S.string(e) ? i = Array.from(document.querySelectorAll(e)) : S.nodeList(e) ? i = Array.from(e) : S.array(e) && (i = e.filter(S.element)), S.empty(i) ? null : i.map(function (e) {
          return new st(e, t);
        });
      }
    }]);
    return st;
  }();
  var nt;
  return st.defaults = (nt = Le, JSON.parse(JSON.stringify(nt))), st;
});
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

var _plyr = _interopRequireDefault(require("plyr"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var player = new _plyr.default("#videoplayer", {
  debug: true,
  title: "View From A Blue Moon",
  iconUrl: "dist/demo.svg",
  keyboard: {
    global: true
  },
  tooltips: {
    controls: true
  },
  captions: {
    active: true
  },
  vimeo: {
    // Prevent Vimeo blocking plyr.io demo site
    referrerPolicy: "no-referrer"
  },
  mediaMetadata: {
    title: "View From A Blue Moon",
    album: "Sports",
    artist: "Brainfarm",
    artwork: [{
      src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
      type: "image/jpeg"
    }]
  },
  markers: {
    enabled: true,
    points: [{
      time: 40,
      label: "first marker"
    }, {
      time: 80,
      label: "second marker"
    }, {
      time: 120,
      label: "<strong>third</strong> marker"
    }]
  }
});
},{"plyr":"node_modules/plyr/dist/plyr.min.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45703" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map