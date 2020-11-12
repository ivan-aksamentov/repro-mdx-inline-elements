_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

/***/ "0sNQ":
/***/ (function(module, exports) {

"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{configurable:!0,get:function(){var t=/\((.*)\)/.exec(this.toString());return t?t[1]:void 0}}),Array.prototype.flat||(Array.prototype.flat=function(t,r){return r=this.concat.apply([],this),t>1&&r.some(Array.isArray)?r.flat(t-1):r},Array.prototype.flatMap=function(t,r){return this.map(t,r).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(t){if("function"!=typeof t)return this.then(t,t);var r=this.constructor||Promise;return this.then(function(o){return r.resolve(t()).then(function(){return o})},function(o){return r.resolve(t()).then(function(){throw o})})});


/***/ }),

/***/ "BMP1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var next = _interopRequireWildcard(__webpack_require__("IKlv"));

window.next = next;
(0, next["default"])()["catch"](console.error);

/***/ }),

/***/ "DqTX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__("J4zp");

exports.__esModule = true;
exports["default"] = initHeadManager;

var _react = __webpack_require__("q1tI");

var DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};

function reactElementToDOM(_ref) {
  var type = _ref.type,
      props = _ref.props;
  var el = document.createElement(type);

  for (var p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    var attr = DOMAttributeNames[p] || p.toLowerCase();
    el.setAttribute(attr, props[p]);
  }

  var children = props.children,
      dangerouslySetInnerHTML = props.dangerouslySetInnerHTML;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(elements, components, removeOldTags) {
  var headEl = document.getElementsByTagName('head')[0];
  var oldTags = new Set(elements);
  components.forEach(function (tag) {
    if (tag.type === 'title') {
      var title = '';

      if (tag) {
        var children = tag.props.children;
        title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
      }

      if (title !== document.title) document.title = title;
      return;
    }

    var newTag = reactElementToDOM(tag);
    var elementIter = elements.values();

    while (true) {
      // Note: We don't use for-of here to avoid needing to polyfill it.
      var _elementIter$next = elementIter.next(),
          done = _elementIter$next.done,
          value = _elementIter$next.value;

      if (value == null ? void 0 : value.isEqualNode(newTag)) {
        oldTags["delete"](value);
        return;
      }

      if (done) {
        break;
      }
    }

    elements.add(newTag);
    headEl.appendChild(newTag);
  });
  oldTags.forEach(function (oldTag) {
    if (removeOldTags) {
      oldTag.parentNode.removeChild(oldTag);
    }

    elements["delete"](oldTag);
  });
}

function initHeadManager(initialHeadEntries) {
  var headEl = document.getElementsByTagName('head')[0];
  var elements = new Set(headEl.children);
  updateElements(elements, initialHeadEntries.map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        type = _ref3[0],
        props = _ref3[1];

    return /*#__PURE__*/(0, _react.createElement)(type, props);
  }), false);
  var updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: function updateHead(head) {
      var promise = updatePromise = Promise.resolve().then(function () {
        if (promise !== updatePromise) return;
        updatePromise = null;
        updateElements(elements, head, true);
      });
    }
  };
}

/***/ }),

/***/ "FYa8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = /*#__PURE__*/_react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (false) {}

/***/ }),

/***/ "IKlv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__("o0o1");

var _asyncToGenerator = __webpack_require__("yXPU");

var _classCallCheck = __webpack_require__("lwsE");

var _createClass = __webpack_require__("W8MJ");

var _inherits = __webpack_require__("7W2i");

var _possibleConstructorReturn = __webpack_require__("a1gu");

var _getPrototypeOf = __webpack_require__("Nsbk");

var _slicedToArray = __webpack_require__("J4zp");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireWildcard3 = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.render = render;
exports.renderError = renderError;
exports["default"] = exports.emitter = exports.router = exports.version = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _interopRequireWildcard2 = _interopRequireDefault(__webpack_require__("284h"));

__webpack_require__("0sNQ");

var _react = _interopRequireDefault(__webpack_require__("q1tI"));

var _reactDom = _interopRequireDefault(__webpack_require__("i8i4"));

var _headManagerContext = __webpack_require__("FYa8");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _routerContext = __webpack_require__("qOIg");

var _router = __webpack_require__("elyg");

var _isDynamic = __webpack_require__("/jkW");

var querystring = _interopRequireWildcard3(__webpack_require__("3WeD"));

var envConfig = _interopRequireWildcard3(__webpack_require__("yLiY"));

var _utils = __webpack_require__("g/15");

var _headManager = _interopRequireDefault(__webpack_require__("DqTX"));

var _pageLoader = _interopRequireWildcard3(__webpack_require__("zmvN"));

var _performanceRelayer = _interopRequireDefault(__webpack_require__("bGXG"));

var _router2 = __webpack_require__("nOHt");
/* global location */


var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
window.__NEXT_DATA__ = data;
var version = "10.0.1";
exports.version = version;
var hydrateProps = data.props,
    hydrateErr = data.err,
    page = data.page,
    query = data.query,
    buildId = data.buildId,
    assetPrefix = data.assetPrefix,
    runtimeConfig = data.runtimeConfig,
    dynamicIds = data.dynamicIds,
    isFallback = data.isFallback,
    initialHeadData = data.head,
    locales = data.locales;
var locale = data.locale,
    defaultLocale = data.defaultLocale;
var prefix = assetPrefix || ''; // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
// So, this is how we do it in the client side at runtime

__webpack_require__.p = "".concat(prefix, "/_next/"); //eslint-disable-line
// Initialize next/config with the environment configuration

envConfig.setConfig({
  serverRuntimeConfig: {},
  publicRuntimeConfig: runtimeConfig || {}
});
var asPath = (0, _utils.getURL)(); // make sure not to attempt stripping basePath for 404s

if ((0, _router.hasBasePath)(asPath)) {
  asPath = (0, _router.delBasePath)(asPath);
}

if (false) { var detectedDomain, localePathResult, parsedAs, _require4, formatUrl, _require3, parseRelativeUrl, _require2, detectDomainLocale, _require, normalizeLocalePath; }

var pageLoader = new _pageLoader["default"](buildId, prefix, page);

var register = function register(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      r = _ref2[0],
      f = _ref2[1];

  return pageLoader.registerPage(r, f);
};

if (window.__NEXT_P) {
  // Defer page registration for another tick. This will increase the overall
  // latency in hydrating the page, but reduce the total blocking time.
  window.__NEXT_P.map(function (p) {
    return setTimeout(function () {
      return register(p);
    }, 0);
  });
}

window.__NEXT_P = [];
window.__NEXT_P.push = register;
var headManager = (0, _headManager["default"])(initialHeadData);
var appElement = document.getElementById('__next');
var lastAppProps;

var _lastRenderReject;

var webpackHMR;
var router;
exports.router = router;
var CachedComponent;
var cachedStyleSheets;
var CachedApp, onPerfEntry;

var Container = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Container, _react$default$Compon);

  var _super = _createSuper(Container);

  function Container() {
    _classCallCheck(this, Container);

    return _super.apply(this, arguments);
  }

  _createClass(Container, [{
    key: "componentDidCatch",
    value: function componentDidCatch(componentErr, info) {
      this.props.fn(componentErr, info);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash(); // We need to replace the router state if:
      // - the page was (auto) exported and has a query string or search (hash)
      // - it was auto exported and is a dynamic route (to provide params)
      // - if it is a client-side skeleton (fallback render)

      if (router.isSsr && (isFallback || data.nextExport && ((0, _isDynamic.isDynamicRoute)(router.pathname) || location.search) || hydrateProps && hydrateProps.__N_SSG && location.search)) {
        // update query on mount for exported pages
        router.replace(router.pathname + '?' + String(querystring.assign(querystring.urlQueryToSearchParams(router.query), new URLSearchParams(location.search))), asPath, {
          // @ts-ignore
          // WARNING: `_h` is an internal option for handing Next.js
          // client-side hydration. Your app should _never_ use this property.
          // It may change at any time without notice.
          _h: 1,
          // Fallback pages must trigger the data fetch, so the transition is
          // not shallow.
          // Other pages (strictly updating query) happens shallowly, as data
          // requirements would already be present.
          shallow: !isFallback
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var _location = location,
          hash = _location.hash;
      hash = hash && hash.substring(1);
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      if (true) {
        return this.props.children;
      } else { var _require5, ReactDevOverlay; }
    }
  }]);

  return Container;
}(_react["default"].Component);

var emitter = (0, _mitt["default"])();
exports.emitter = emitter;

var _default = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var opts,
        _yield$pageLoader$loa,
        app,
        mod,
        initialErr,
        _yield$pageLoader$loa2,
        _require6,
        isValidElementType,
        _require7,
        getNodeError,
        renderCtx,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};

            // This makes sure this specific lines are removed in production
            if (false) {}

            _context.next = 4;
            return pageLoader.loadPage('/_app');

          case 4:
            _yield$pageLoader$loa = _context.sent;
            app = _yield$pageLoader$loa.page;
            mod = _yield$pageLoader$loa.mod;
            CachedApp = app;

            if (mod && mod.reportWebVitals) {
              onPerfEntry = function onPerfEntry(_ref4) {
                var id = _ref4.id,
                    name = _ref4.name,
                    startTime = _ref4.startTime,
                    value = _ref4.value,
                    duration = _ref4.duration,
                    entryType = _ref4.entryType,
                    entries = _ref4.entries;
                // Combines timestamp with random number for unique ID
                var uniqueID = "".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12);
                var perfStartEntry;

                if (entries && entries.length) {
                  perfStartEntry = entries[0].startTime;
                }

                mod.reportWebVitals({
                  id: id || uniqueID,
                  name: name,
                  startTime: startTime || perfStartEntry,
                  value: value == null ? duration : value,
                  label: entryType === 'mark' || entryType === 'measure' ? 'custom' : 'web-vital'
                });
              };
            }

            initialErr = hydrateErr;
            _context.prev = 10;
            ;
            _context.next = 14;
            return pageLoader.loadPage(page);

          case 14:
            _yield$pageLoader$loa2 = _context.sent;
            CachedComponent = _yield$pageLoader$loa2.page;
            cachedStyleSheets = _yield$pageLoader$loa2.styleSheets;

            if (true) {
              _context.next = 21;
              break;
            }

            _require6 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-is'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), isValidElementType = _require6.isValidElementType;

            if (isValidElementType(CachedComponent)) {
              _context.next = 21;
              break;
            }

            throw new Error("The default export is not a React Component in page: \"".concat(page, "\""));

          case 21:
            _context.next = 28;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](10);

            if (!(_pageLoader.INITIAL_CSS_LOAD_ERROR in _context.t0)) {
              _context.next = 27;
              break;
            }

            throw _context.t0;

          case 27:
            // This catches errors like throwing in the top level of a module
            initialErr = _context.t0;

          case 28:
            if (false) {}

            if (!window.__NEXT_PRELOADREADY) {
              _context.next = 32;
              break;
            }

            _context.next = 32;
            return window.__NEXT_PRELOADREADY(dynamicIds);

          case 32:
            exports.router = router = (0, _router2.createRouter)(page, query, asPath, {
              initialProps: hydrateProps,
              pageLoader: pageLoader,
              App: CachedApp,
              Component: CachedComponent,
              initialStyleSheets: cachedStyleSheets,
              wrapApp: wrapApp,
              err: initialErr,
              isFallback: Boolean(isFallback),
              subscription: function subscription(_ref5, App) {
                var Component = _ref5.Component,
                    styleSheets = _ref5.styleSheets,
                    props = _ref5.props,
                    err = _ref5.err;
                return render({
                  App: App,
                  Component: Component,
                  styleSheets: styleSheets,
                  props: props,
                  err: err
                });
              },
              locale: locale,
              locales: locales,
              defaultLocale: defaultLocale
            }); // call init-client middleware

            if (false) {}

            renderCtx = {
              App: CachedApp,
              Component: CachedComponent,
              styleSheets: cachedStyleSheets,
              props: hydrateProps,
              err: initialErr
            };

            if (false) {}

            render(renderCtx);
            return _context.abrupt("return", emitter);

          case 40:
            return _context.abrupt("return", {
              emitter: emitter,
              render: render,
              renderCtx: renderCtx
            });

          case 41:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 23]]);
  }));

  return function _default() {
    return _ref3.apply(this, arguments);
  };
}();

exports["default"] = _default;

function render(_x) {
  return _render.apply(this, arguments);
} // This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.


function _render() {
  _render = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(renderingProps) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!renderingProps.err) {
              _context2.next = 4;
              break;
            }

            _context2.next = 3;
            return renderError(renderingProps);

          case 3:
            return _context2.abrupt("return");

          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return doRender(renderingProps);

          case 7:
            _context2.next = 16;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](4);

            if (!_context2.t0.cancelled) {
              _context2.next = 13;
              break;
            }

            throw _context2.t0;

          case 13:
            if (false) {}

            _context2.next = 16;
            return renderError((0, _extends2["default"])({}, renderingProps, {
              err: _context2.t0
            }));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 9]]);
  }));
  return _render.apply(this, arguments);
}

function renderError(renderErrorProps) {
  var App = renderErrorProps.App,
      err = renderErrorProps.err; // In development runtime errors are caught by our overlay
  // In production we catch runtime errors using componentDidCatch which will trigger renderError

  if (false) {}

  if (false) {} // Make sure we log the error to the console, otherwise users can't track down issues.


  console.error(err);
  return pageLoader.loadPage('/_error').then(function (_ref6) {
    var ErrorComponent = _ref6.page,
        styleSheets = _ref6.styleSheets;
    // In production we do a normal render with the `ErrorComponent` as component.
    // If we've gotten here upon initial render, we can use the props from the server.
    // Otherwise, we need to call `getInitialProps` on `App` before mounting.
    var AppTree = wrapApp(App);
    var appCtx = {
      Component: ErrorComponent,
      AppTree: AppTree,
      router: router,
      ctx: {
        err: err,
        pathname: page,
        query: query,
        asPath: asPath,
        AppTree: AppTree
      }
    };
    return Promise.resolve(renderErrorProps.props ? renderErrorProps.props : (0, _utils.loadGetInitialProps)(App, appCtx)).then(function (initProps) {
      return doRender((0, _extends2["default"])({}, renderErrorProps, {
        err: err,
        Component: ErrorComponent,
        styleSheets: styleSheets,
        props: initProps
      }));
    });
  });
} // If hydrate does not exist, eg in preact.


var isInitialRender = typeof _reactDom["default"].hydrate === 'function';
var reactRoot = null;

function renderReactElement(reactEl, domEl) {
  if (false) { var opts; } else {
    // mark start of hydrate/render
    if (_utils.ST) {
      performance.mark('beforeRender');
    } // The check for `.hydrate` is there to support React alternatives like preact


    if (isInitialRender) {
      _reactDom["default"].hydrate(reactEl, domEl, markHydrateComplete);

      isInitialRender = false;
    } else {
      _reactDom["default"].render(reactEl, domEl, markRenderComplete);
    }
  }
}

function markHydrateComplete() {
  if (!_utils.ST) return;
  performance.mark('afterHydrate'); // mark end of hydration

  performance.measure('Next.js-before-hydration', 'navigationStart', 'beforeRender');
  performance.measure('Next.js-hydration', 'beforeRender', 'afterHydrate');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-hydration').forEach(onPerfEntry);
  }

  clearMarks();
}

function markRenderComplete() {
  if (!_utils.ST) return;
  performance.mark('afterRender'); // mark end of render

  var navStartEntries = performance.getEntriesByName('routeChange', 'mark');

  if (!navStartEntries.length) {
    return;
  }

  performance.measure('Next.js-route-change-to-render', navStartEntries[0].name, 'beforeRender');
  performance.measure('Next.js-render', 'beforeRender', 'afterRender');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-render').forEach(onPerfEntry);
    performance.getEntriesByName('Next.js-route-change-to-render').forEach(onPerfEntry);
  }

  clearMarks();
  ['Next.js-route-change-to-render', 'Next.js-render'].forEach(function (measure) {
    return performance.clearMeasures(measure);
  });
}

function clearMarks() {
  ;
  ['beforeRender', 'afterHydrate', 'afterRender', 'routeChange'].forEach(function (mark) {
    return performance.clearMarks(mark);
  });
}

function AppContainer(_ref7) {
  var children = _ref7.children;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    fn: function fn(error) {
      return renderError({
        App: CachedApp,
        err: error
      })["catch"](function (err) {
        return console.error('Error rendering page: ', err);
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_routerContext.RouterContext.Provider, {
    value: (0, _router2.makePublicRouterInstance)(router)
  }, /*#__PURE__*/_react["default"].createElement(_headManagerContext.HeadManagerContext.Provider, {
    value: headManager
  }, children)));
}

var wrapApp = function wrapApp(App) {
  return function (wrappedAppProps) {
    var appProps = (0, _extends2["default"])({}, wrappedAppProps, {
      Component: CachedComponent,
      err: hydrateErr,
      router: router
    });
    return /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, appProps));
  };
};

function doRender(_ref8) {
  var App = _ref8.App,
      Component = _ref8.Component,
      props = _ref8.props,
      err = _ref8.err,
      styleSheets = _ref8.styleSheets;
  Component = Component || lastAppProps.Component;
  props = props || lastAppProps.props;
  var appProps = (0, _extends2["default"])({}, props, {
    Component: Component,
    err: err,
    router: router
  }); // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.

  lastAppProps = appProps;
  var canceled = false;
  var resolvePromise;
  var renderPromise = new Promise(function (resolve, reject) {
    if (_lastRenderReject) {
      _lastRenderReject();
    }

    resolvePromise = function resolvePromise() {
      _lastRenderReject = null;
      resolve();
    };

    _lastRenderReject = function lastRenderReject() {
      canceled = true;
      _lastRenderReject = null;
      var error = new Error('Cancel rendering route');
      error.cancelled = true;
      reject(error);
    };
  }); // This function has a return type to ensure it doesn't start returning a
  // Promise. It should remain synchronous.

  function onStart() {
    if ( // We can skip this during hydration. Running it wont cause any harm, but
    // we may as well save the CPU cycles.
    isInitialRender || // We use `style-loader` in development, so we don't need to do anything
    // unless we're in production:
    false) {
      return false;
    }

    var currentStyleTags = (0, _pageLoader.looseToArray)(document.querySelectorAll('style[data-n-href]'));
    var currentHrefs = new Set(currentStyleTags.map(function (tag) {
      return tag.getAttribute('data-n-href');
    }));
    styleSheets.forEach(function (_ref9) {
      var href = _ref9.href,
          text = _ref9.text;

      if (!currentHrefs.has(href)) {
        var styleTag = document.createElement('style');
        styleTag.setAttribute('data-n-href', href);
        styleTag.setAttribute('media', 'x');
        document.head.appendChild(styleTag);
        styleTag.appendChild(document.createTextNode(text));
      }
    });
    return true;
  }

  function onCommit() {
    if ( // We use `style-loader` in development, so we don't need to do anything
    // unless we're in production:
     true && // We can skip this during hydration. Running it wont cause any harm, but
    // we may as well save the CPU cycles:
    !isInitialRender && // Ensure this render was not canceled
    !canceled) {
      var desiredHrefs = new Set(styleSheets.map(function (s) {
        return s.href;
      }));
      var currentStyleTags = (0, _pageLoader.looseToArray)(document.querySelectorAll('style[data-n-href]'));
      var currentHrefs = currentStyleTags.map(function (tag) {
        return tag.getAttribute('data-n-href');
      }); // Toggle `<style>` tags on or off depending on if they're needed:

      for (var idx = 0; idx < currentHrefs.length; ++idx) {
        if (desiredHrefs.has(currentHrefs[idx])) {
          currentStyleTags[idx].removeAttribute('media');
        } else {
          currentStyleTags[idx].setAttribute('media', 'x');
        }
      } // Reorder styles into intended order:


      var referenceNode = document.querySelector('noscript[data-n-css]');

      if ( // This should be an invariant:
      referenceNode) {
        styleSheets.forEach(function (_ref10) {
          var href = _ref10.href;
          var targetTag = document.querySelector("style[data-n-href=\"".concat(href, "\"]"));

          if ( // This should be an invariant:
          targetTag) {
            referenceNode.parentNode.insertBefore(targetTag, referenceNode.nextSibling);
            referenceNode = targetTag;
          }
        });
      } // Finally, clean up server rendered stylesheets:


      (0, _pageLoader.looseToArray)(document.querySelectorAll('link[data-n-p]')).forEach(function (el) {
        el.parentNode.removeChild(el);
      }); // Force browser to recompute layout, which should prevent a flash of
      // unstyled content:

      getComputedStyle(document.body, 'height');
    }

    resolvePromise();
  }

  var elem = /*#__PURE__*/_react["default"].createElement(Root, {
    callback: onCommit
  }, /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, appProps)));

  onStart(); // We catch runtime errors using componentDidCatch which will trigger renderError

  renderReactElement( false ? /*#__PURE__*/undefined : elem, appElement);
  return renderPromise;
}

function Root(_ref11) {
  var callback = _ref11.callback,
      children = _ref11.children;

  // We use `useLayoutEffect` to guarantee the callback is executed
  // as soon as React flushes the update.
  _react["default"].useLayoutEffect(function () {
    return callback();
  }, [callback]);

  if (undefined) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    _react["default"].useEffect(function () {
      window.__NEXT_HYDRATED = true;

      if (window.__NEXT_HYDRATED_CB) {
        window.__NEXT_HYDRATED_CB();
      }
    }, []);
  } // We should ask to measure the Web Vitals after rendering completes so we
  // don't cause any hydration delay:


  _react["default"].useEffect(function () {
    (0, _performanceRelayer["default"])(onPerfEntry);
  }, []);

  return children;
}

/***/ }),

/***/ "Lab5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = getAssetPathFromRoute; // Translates a logical route into its pages asset path (relative from a common prefix)
// "asset path" being its javascript file, data file, prerendered html,...

function getAssetPathFromRoute(route) {
  var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var path = route === '/' ? '/index' : /^\/index(\/|$)/.test(route) ? "/index".concat(route) : "".concat(route);
  return path + ext;
}

/***/ }),

/***/ "bGXG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _webVitals = __webpack_require__("w6Sm");

var initialHref = location.href;
var isRegistered = false;
var userReportHandler;

function onReport(metric) {
  if (userReportHandler) {
    userReportHandler(metric);
  } // This code is not shipped, executed, or present in the client-side
  // JavaScript bundle unless explicitly enabled in your application.
  //
  // When this feature is enabled, we'll make it very clear by printing a
  // message during the build (`next build`).


  if (false) { var vitalsUrl, blob, body; }
}

var _default = function _default(onPerfEntry) {
  // Update function if it changes:
  userReportHandler = onPerfEntry; // Only register listeners once:

  if (isRegistered) {
    return;
  }

  isRegistered = true;
  (0, _webVitals.getCLS)(onReport);
  (0, _webVitals.getFID)(onReport);
  (0, _webVitals.getFCP)(onReport);
  (0, _webVitals.getLCP)(onReport);
  (0, _webVitals.getTTFB)(onReport);
};

exports["default"] = _default;

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "w6Sm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCLS", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFCP", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFID", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLCP", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTTFB", function() { return h; });
var t,n,e=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},i=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:t,value:n,delta:0,entries:[],id:e(),isFinal:!1}},a=function(t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var e=new PerformanceObserver((function(t){return t.getEntries().map(n)}));return e.observe({type:t,buffered:!0}),e}}catch(t){}},r=!1,o=!1,s=function(t){r=!t.persisted},u=function(){addEventListener("pagehide",s),addEventListener("beforeunload",(function(){}))},c=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o||(u(),o=!0),addEventListener("visibilitychange",(function(n){var e=n.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:e,isUnloading:r})}),{capture:!0,once:n})},l=function(t,n,e,i){var a;return function(){e&&n.isFinal&&e.disconnect(),n.value>=0&&(i||n.isFinal||"hidden"===document.visibilityState)&&(n.delta=n.value-(a||0),(n.delta||n.isFinal||void 0===a)&&(t(n),a=n.value))}},p=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i("CLS",0),o=function(t){t.hadRecentInput||(r.value+=t.value,r.entries.push(t),n())},s=a("layout-shift",o);s&&(n=l(t,r,s,e),c((function(t){var e=t.isUnloading;s.takeRecords().map(o),e&&(r.isFinal=!0),n()})))},d=function(){return void 0===t&&(t="hidden"===document.visibilityState?0:1/0,c((function(n){var e=n.timeStamp;return t=e}),!0)),{get timeStamp(){return t}}},v=function(t){var n,e=i("FCP"),r=d(),o=a("paint",(function(t){"first-contentful-paint"===t.name&&t.startTime<r.timeStamp&&(e.value=t.startTime,e.isFinal=!0,e.entries.push(t),n())}));o&&(n=l(t,e,o))},f=function(t){var n=i("FID"),e=d(),r=function(t){t.startTime<e.timeStamp&&(n.value=t.processingStart-t.startTime,n.entries.push(t),n.isFinal=!0,s())},o=a("first-input",r),s=l(t,n,o);o?c((function(){o.takeRecords().map(r),o.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(t,i){i.timeStamp<e.timeStamp&&(n.value=t,n.isFinal=!0,n.entries=[{entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+t}],s())}))},m=function(){return n||(n=new Promise((function(t){return["scroll","keydown","pointerdown"].map((function(n){addEventListener(n,t,{once:!0,passive:!0,capture:!0})}))}))),n},g=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i("LCP"),o=d(),s=function(t){var e=t.startTime;e<o.timeStamp?(r.value=e,r.entries.push(t)):r.isFinal=!0,n()},u=a("largest-contentful-paint",s);if(u){n=l(t,r,u,e);var p=function(){r.isFinal||(u.takeRecords().map(s),r.isFinal=!0,n())};m().then(p),c(p,!0)}},h=function(t){var n,e=i("TTFB");n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,n={entryType:"navigation",startTime:0};for(var e in t)"navigationStart"!==e&&"toJSON"!==e&&(n[e]=Math.max(t[e]-t.navigationStart,0));return n}();e.value=e.delta=n.responseStart,e.entries=[n],e.isFinal=!0,t(e)}catch(t){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("pageshow",n)};


/***/ }),

/***/ "yLiY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.setConfig = setConfig;
exports["default"] = void 0;
var runtimeConfig;

var _default = function _default() {
  return runtimeConfig;
};

exports["default"] = _default;

function setConfig(configValue) {
  runtimeConfig = configValue;
}

/***/ }),

/***/ "zmvN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__("o0o1");

var _asyncToGenerator = __webpack_require__("yXPU");

var _classCallCheck = __webpack_require__("lwsE");

var _createClass = __webpack_require__("W8MJ");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports["default"] = exports.INITIAL_CSS_LOAD_ERROR = exports.looseToArray = void 0;

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _router = __webpack_require__("elyg");

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("Lab5"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var looseToArray = function looseToArray(input) {
  return [].slice.call(input);
};

exports.looseToArray = looseToArray;

function hasRel(rel, link) {
  try {
    link = document.createElement('link');
    return link.relList.supports(rel);
  } catch (_unused) {}
}

function pageLoadError(route) {
  return (0, _router.markLoadingError)(new Error("Error loading ".concat(route)));
}

var INITIAL_CSS_LOAD_ERROR = Symbol('INITIAL_CSS_LOAD_ERROR');
exports.INITIAL_CSS_LOAD_ERROR = INITIAL_CSS_LOAD_ERROR;
var relPrefetch = hasRel('preload') && !hasRel('prefetch') ? // https://caniuse.com/#feat=link-rel-preload
// macOS and iOS (Safari does not support prefetch)
'preload' : // https://caniuse.com/#feat=link-rel-prefetch
// IE 11, Edge 12+, nearly all evergreen
'prefetch';
var relPreload = hasRel('preload') ? 'preload' : relPrefetch;
var relPreloadStyle = 'fetch';
var hasNoModule = ('noModule' in document.createElement('script'));

function normalizeRoute(route) {
  if (route[0] !== '/') {
    throw new Error("Route name should start with a \"/\", got \"".concat(route, "\""));
  }

  if (route === '/') return route;
  return route.replace(/\/$/, '');
}

function appendLink(href, rel, as, link) {
  return new Promise(function (res, rej) {
    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = rel;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

function loadScript(url) {
  return new Promise(function (res, rej) {
    var script = document.createElement('script');

    if (false) {}

    script.crossOrigin = undefined;
    script.src = url;
    script.onload = res;

    script.onerror = function () {
      return rej(pageLoadError(url));
    };

    document.body.appendChild(script);
  });
}

var PageLoader = /*#__PURE__*/function () {
  function PageLoader(buildId, assetPrefix, initialPage) {
    _classCallCheck(this, PageLoader);

    this.initialPage = void 0;
    this.buildId = void 0;
    this.assetPrefix = void 0;
    this.pageCache = void 0;
    this.pageRegisterEvents = void 0;
    this.loadingRoutes = void 0;
    this.promisedBuildManifest = void 0;
    this.promisedSsgManifest = void 0;
    this.promisedDevPagesManifest = void 0;
    this.initialPage = initialPage;
    this.buildId = buildId;
    this.assetPrefix = assetPrefix;
    this.pageCache = {};
    this.pageRegisterEvents = (0, _mitt["default"])();
    this.loadingRoutes = {
      // By default these 2 pages are being loaded in the initial html
      '/_app': true
    }; // TODO: get rid of this limitation for rendering the error page

    if (initialPage !== '/_error') {
      this.loadingRoutes[initialPage] = true;
    }

    this.promisedBuildManifest = new Promise(function (resolve) {
      if (window.__BUILD_MANIFEST) {
        resolve(window.__BUILD_MANIFEST);
      } else {
        ;

        window.__BUILD_MANIFEST_CB = function () {
          resolve(window.__BUILD_MANIFEST);
        };
      }
    });
    /** @type {Promise<Set<string>>} */

    this.promisedSsgManifest = new Promise(function (resolve) {
      if (window.__SSG_MANIFEST) {
        resolve(window.__SSG_MANIFEST);
      } else {
        ;

        window.__SSG_MANIFEST_CB = function () {
          resolve(window.__SSG_MANIFEST);
        };
      }
    });
  }

  _createClass(PageLoader, [{
    key: "getPageList",
    value: function getPageList() {
      if (true) {
        return this.promisedBuildManifest.then(function (buildManifest) {
          return buildManifest.sortedPages;
        });
      } else {}
    } // Returns a promise for the dependencies for a particular route

  }, {
    key: "getDependencies",
    value: function getDependencies(route) {
      var _this2 = this;

      return this.promisedBuildManifest.then(function (m) {
        return m[route] ? m[route].map(function (url) {
          return "".concat(_this2.assetPrefix, "/_next/").concat(encodeURI(url));
        }) : Promise.reject(pageLoadError(route));
      });
    }
    /**
    * @param {string} href the route href (file-system path)
    * @param {string} asPath the URL as shown in browser (virtual path); used for dynamic routes
    */

  }, {
    key: "getDataHref",
    value: function getDataHref(href, asPath, ssg, locale) {
      var _this3 = this;

      var _ref = (0, _parseRelativeUrl.parseRelativeUrl)(href),
          hrefPathname = _ref.pathname,
          query = _ref.query,
          search = _ref.search;

      var _ref2 = (0, _parseRelativeUrl.parseRelativeUrl)(asPath),
          asPathname = _ref2.pathname;

      var route = normalizeRoute(hrefPathname);

      var getHrefForSlug = function getHrefForSlug(path) {
        var dataRoute = (0, _router.addLocale)((0, _getAssetPathFromRoute["default"])(path, '.json'), locale);
        return (0, _router.addBasePath)("/_next/data/".concat(_this3.buildId).concat(dataRoute).concat(ssg ? '' : search));
      };

      var isDynamic = (0, _isDynamic.isDynamicRoute)(route);
      var interpolatedRoute = isDynamic ? (0, _router.interpolateAs)(hrefPathname, asPathname, query).result : '';
      return isDynamic ? interpolatedRoute && getHrefForSlug(interpolatedRoute) : getHrefForSlug(route);
    }
    /**
    * @param {string} href the route href (file-system path)
    * @param {string} asPath the URL as shown in browser (virtual path); used for dynamic routes
    */

  }, {
    key: "prefetchData",
    value: function prefetchData(href, asPath, locale) {
      var _this4 = this;

      var _ref3 = (0, _parseRelativeUrl.parseRelativeUrl)(href),
          hrefPathname = _ref3.pathname;

      var route = normalizeRoute(hrefPathname);
      return this.promisedSsgManifest.then(function (s, _dataHref) {
        return (// Check if the route requires a data file
          s.has(route) && ( // Try to generate data href, noop when falsy
          _dataHref = _this4.getDataHref(href, asPath, true, locale)) && // noop when data has already been prefetched (dedupe)
          !document.querySelector("link[rel=\"".concat(relPrefetch, "\"][href^=\"").concat(_dataHref, "\"]")) && // Inject the `<link rel=prefetch>` tag for above computed `href`.
          appendLink(_dataHref, relPrefetch, 'fetch')["catch"](function () {
            /* ignore prefetch error */
          })
        );
      });
    }
  }, {
    key: "loadPage",
    value: function loadPage(route) {
      var _this5 = this;

      route = normalizeRoute(route);
      return new Promise(function (resolve, reject) {
        // If there's a cached version of the page, let's use it.
        var cachedPage = _this5.pageCache[route];

        if (cachedPage) {
          if ('error' in cachedPage) {
            reject(cachedPage.error);
          } else {
            resolve(cachedPage);
          }

          return;
        }

        var fire = function fire(pageToCache) {
          _this5.pageRegisterEvents.off(route, fire);

          delete _this5.loadingRoutes[route];

          if ('error' in pageToCache) {
            reject(pageToCache.error);
          } else {
            resolve(pageToCache);
          }
        }; // Register a listener to get the page


        _this5.pageRegisterEvents.on(route, fire);

        if (!_this5.loadingRoutes[route]) {
          _this5.loadingRoutes[route] = true;

          if (true) {
            _this5.getDependencies(route).then(function (deps) {
              var pending = [];
              deps.forEach(function (d) {
                if (d.endsWith('.js') && !document.querySelector("script[src^=\"".concat(d, "\"]"))) {
                  pending.push(loadScript(d));
                } // Prefetch CSS as it'll be needed when the page JavaScript
                // evaluates. This will only trigger if explicit prefetching is
                // disabled for a <Link>... prefetching in this case is desirable
                // because we *know* it's going to be used very soon (page was
                // loaded).


                if (d.endsWith('.css') && !document.querySelector("link[rel=\"".concat(relPreload, "\"][href^=\"").concat(d, "\"]"))) {
                  // This is not pushed into `pending` because we don't need to
                  // wait for these to resolve. To prevent an unhandled
                  // rejection, we swallow the error which is handled later in
                  // the rendering cycle (this is just a preload optimization).
                  appendLink(d, relPreload, relPreloadStyle)["catch"](function () {
                    /* ignore preload error */
                  });
                }
              });
              return Promise.all(pending);
            })["catch"](function (err) {
              // Mark the page as failed to load if any of its required scripts
              // fail to load:
              _this5.pageCache[route] = {
                error: err
              };
              fire({
                error: err
              });
            });
          } else { var url, scriptRoute; }
        }
      });
    } // This method if called by the route code.

  }, {
    key: "registerPage",
    value: function registerPage(route, regFn) {
      var _this6 = this;

      var _this = this;

      var register = /*#__PURE__*/function () {
        var _register = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(styleSheets) {
          var mod, pageData;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return regFn();

                case 3:
                  mod = _context.sent;
                  pageData = {
                    page: mod["default"] || mod,
                    mod: mod,
                    styleSheets: styleSheets
                  };
                  _this.pageCache[route] = pageData;

                  _this.pageRegisterEvents.emit(route, pageData);

                  _context.next = 13;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](0);
                  _this.pageCache[route] = {
                    error: _context.t0
                  };

                  _this.pageRegisterEvents.emit(route, {
                    error: _context.t0
                  });

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 9]]);
        }));

        function register(_x) {
          return _register.apply(this, arguments);
        }

        return register;
      }();

      if (false) { var check; }

      function fetchStyleSheet(href) {
        return fetch(href).then(function (res) {
          if (!res.ok) throw pageLoadError(href);
          return res.text().then(function (text) {
            return {
              href: href,
              text: text
            };
          });
        });
      }

      var isInitialLoad = route === this.initialPage;
      var promisedDeps = // Shared styles will already be on the page:
      route === '/_app' || // We use `style-loader` in development:
      false ? Promise.resolve([]) : // Tests that this does not block hydration:
      // test/integration/css-fixtures/hydrate-without-deps/
      (isInitialLoad ? Promise.resolve(looseToArray(document.querySelectorAll('link[data-n-p]')).map(function (e) {
        return e.getAttribute('href');
      })) : this.getDependencies(route).then(function (deps) {
        return deps.filter(function (d) {
          return d.endsWith('.css');
        });
      })).then(function (cssFiles) {
        return (// These files should've already been fetched by now, so this
          // should resolve instantly.
          Promise.all(cssFiles.map(function (d) {
            return fetchStyleSheet(d);
          }))["catch"](function (err) {
            if (isInitialLoad) {
              Object.defineProperty(err, INITIAL_CSS_LOAD_ERROR, {});
            }

            throw err;
          })
        );
      });
      promisedDeps.then(function (deps) {
        return register(deps);
      }, function (error) {
        _this6.pageCache[route] = {
          error: error
        };

        _this6.pageRegisterEvents.emit(route, {
          error: error
        });
      });
    }
    /**
    * @param {string} route
    * @param {boolean} [isDependency]
    */

  }, {
    key: "prefetch",
    value: function prefetch(route, isDependency) {
      var _this7 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }
      /** @type {string} */


      var url;

      if (isDependency) {
        url = route;
      } else {
        if (false) { var scriptRoute, ext; }
      }

      return Promise.all(document.querySelector("link[rel=\"".concat(relPrefetch, "\"][href^=\"").concat(url, "\"]")) ? [] : [url && appendLink(url, relPrefetch, url.endsWith('.css') ? relPreloadStyle : 'script'),  true && !isDependency && this.getDependencies(route).then(function (urls) {
        return Promise.all(urls.map(function (dependencyUrl) {
          return _this7.prefetch(dependencyUrl, true);
        }));
      })]).then( // do not return any data
      function () {}, // swallow prefetch errors
      function () {});
    }
  }]);

  return PageLoader;
}();

exports["default"] = PageLoader;

/***/ })

},[["BMP1",0,1,2]]]);