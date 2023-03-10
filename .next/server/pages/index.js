/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/PhotosList.tsx":
/*!***************************************!*\
  !*** ./src/components/PhotosList.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PhotosList\": () => (/* binding */ PhotosList)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _PhotoList_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PhotoList.module.css */ \"./src/components/PhotoList.module.css\");\n/* harmony import */ var _PhotoList_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PhotoList_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/tynguyen/Desktop/youtube-react-testing-video6-mock-http-calls-with-msw-react-testing-library-main/src/components/PhotosList.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n// unit test SWR: https://www.youtube.com/watch?v=FggwAN76lM0&list=PLYSZyzpwBEWTBdbfStjqJSGaulqcHoNkT&index=7\nfunction PhotosList() {\n  const {\n    0: refresh,\n    1: setRefresh\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n  const {\n    0: name,\n    1: setName\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: () => setRefresh(cr => ++cr),\n      children: \"Refresh\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        children: [\"Your Name:\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          name: \"Your name\",\n          value: name,\n          onChange: evt => setName(evt.target.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(List, {\n        refresh: refresh,\n        name: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n\nfunction List({\n  refresh,\n  name\n}) {\n  const {\n    0: loading,\n    1: setLoading\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n  const {\n    0: photos,\n    1: setPhotos\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const {\n    0: error,\n    1: setError\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    async function load() {\n      setLoading(l => l + 1);\n\n      try {\n        const r = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`/api/photos?name=${name}`);\n        console.log(r);\n        setPhotos(r.data);\n        setError('');\n      } catch (e) {\n        // eslint-disable-next-line\n        setError(e.response.data.message);\n      } finally {\n        setLoading(l => l - 1);\n      }\n    } // async function load() {\n    //   setLoading(l => l+1);\n    //   try {\n    //     const r = await fetch(`/api/photos?name=${name}`);\n    //     const json = await r.json();\n    //     if (!r.ok) {\n    //       throw new Error(json.message);\n    //     }\n    //     setPhotos(json);\n    //     setError('');\n    //   } catch (e) {\n    //     setError(e.message);\n    //   } finally {\n    //     setLoading(l => l-1);\n    //   }\n    // }\n\n\n    void load();\n  }, [refresh, name]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_PhotoList_module_css__WEBPACK_IMPORTED_MODULE_3___default().absolute),\n      children: [error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PhotoList_module_css__WEBPACK_IMPORTED_MODULE_3___default().error),\n        children: error\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 18\n      }, this) : null, loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PhotoList_module_css__WEBPACK_IMPORTED_MODULE_3___default().loading),\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 20\n      }, this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, this), photos.map(photo => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PhotoDetail, {\n      photo: photo\n    }, photo.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }, this))]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 5\n  }, this);\n}\n\nfunction PhotoDetail({\n  photo\n}) {\n  const {\n    0: favourite,\n    1: setFavourite\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setFavourite(false);\n  }, [photo]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_PhotoList_module_css__WEBPACK_IMPORTED_MODULE_3___default().listItem),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      className: (_PhotoList_module_css__WEBPACK_IMPORTED_MODULE_3___default().photo),\n      src: photo.thumbnailUrl,\n      \"aria-label\": photo.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: photo.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: [\"PhotoId: \", photo.id]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: () => {\n          // we already have an example with .catch for this video :)\n          void axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/favourite', _objectSpread(_objectSpread({}, photo), {}, {\n            favourite\n          })).then(response => {\n            setFavourite(response.data.favourite);\n          });\n        },\n        children: favourite ? 'Remove from Favourites' : 'Add To Favourites'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 95,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFGRSxDQUVJYixRQUFELElBQWM7QUFDbEJRLFlBQUFBLFlBQVksQ0FBQ1IsUUFBUSxDQUFDRixJQUFULENBQWNTLFNBQWYsQ0FBWjtBQUNELFdBSkUsQ0FBTDtBQUtELFNBUkg7QUFBQSxrQkFVR0EsU0FBUyxHQUFHLHdCQUFILEdBQThCO0FBVjFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBCRCIsInNvdXJjZXMiOlsid2VicGFjazovL3lvdXR1YmUtcmVhY3QtdGVzdGluZy12aWRlbzItY29uZmlnLWplc3QtcmVhY3QtdGVzdGluZy1saWJyYXJ5Ly4vc3JjL2NvbXBvbmVudHMvUGhvdG9zTGlzdC50c3g/MGQyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBjc3MgZnJvbSAnLi9QaG90b0xpc3QubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBQaG90byB9IGZyb20gJy4uL21vZGVscy9QaG90byc7XG4vLyB1bml0IHRlc3QgU1dSOiBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUZnZ3dBTjc2bE0wJmxpc3Q9UExZU1p5enB3QkVXVEJkYmZTdGpxSlNHYXVscWNIb05rVCZpbmRleD03XG5leHBvcnQgZnVuY3Rpb24gUGhvdG9zTGlzdCgpIHtcbiAgY29uc3QgW3JlZnJlc2gsIHNldFJlZnJlc2hdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFJlZnJlc2goKGNyKSA9PiArK2NyKX0+UmVmcmVzaDwvYnV0dG9uPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIFlvdXIgTmFtZTpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9XCJZb3VyIG5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gc2V0TmFtZShldnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8TGlzdCByZWZyZXNoPXtyZWZyZXNofSBuYW1lPXtuYW1lfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIExpc3QoeyByZWZyZXNoLCBuYW1lIH06IHsgcmVmcmVzaDogbnVtYmVyOyBuYW1lOiBzdHJpbmcgfSkge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Bob3Rvcywgc2V0UGhvdG9zXSA9IHVzZVN0YXRlPFBob3RvW10+KFtdKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgc2V0TG9hZGluZygobCkgPT4gbCArIDEpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByID0gYXdhaXQgYXhpb3MuZ2V0PFBob3RvW10+KGAvYXBpL3Bob3Rvcz9uYW1lPSR7bmFtZX1gKTtcbiAgICAgICAgY29uc29sZS5sb2cocik7XG4gICAgICAgIHNldFBob3RvcyhyLmRhdGEpO1xuICAgICAgICBzZXRFcnJvcignJyk7XG4gICAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHNldEVycm9yKGUucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoKGwpID0+IGwgLSAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhc3luYyBmdW5jdGlvbiBsb2FkKCkge1xuICAgIC8vICAgc2V0TG9hZGluZyhsID0+IGwrMSk7XG5cbiAgICAvLyAgIHRyeSB7XG4gICAgLy8gICAgIGNvbnN0IHIgPSBhd2FpdCBmZXRjaChgL2FwaS9waG90b3M/bmFtZT0ke25hbWV9YCk7XG4gICAgLy8gICAgIGNvbnN0IGpzb24gPSBhd2FpdCByLmpzb24oKTtcblxuICAgIC8vICAgICBpZiAoIXIub2spIHtcbiAgICAvLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoanNvbi5tZXNzYWdlKTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIHNldFBob3Rvcyhqc29uKTtcbiAgICAvLyAgICAgc2V0RXJyb3IoJycpO1xuICAgIC8vICAgfSBjYXRjaCAoZSkge1xuICAgIC8vICAgICBzZXRFcnJvcihlLm1lc3NhZ2UpO1xuICAgIC8vICAgfSBmaW5hbGx5IHtcbiAgICAvLyAgICAgc2V0TG9hZGluZyhsID0+IGwtMSk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgdm9pZCBsb2FkKCk7XG4gIH0sIFtyZWZyZXNoLCBuYW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5hYnNvbHV0ZX0+XG4gICAgICAgIHtlcnJvciA/IDxkaXYgY2xhc3NOYW1lPXtjc3MuZXJyb3J9PntlcnJvcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICB7bG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPXtjc3MubG9hZGluZ30+TG9hZGluZy4uLjwvZGl2PiA6IG51bGx9XG4gICAgICA8L2Rpdj5cblxuICAgICAge3Bob3Rvcy5tYXAoKHBob3RvKSA9PiAoXG4gICAgICAgIDxQaG90b0RldGFpbCBwaG90bz17cGhvdG99IGtleT17cGhvdG8uaWR9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUGhvdG9EZXRhaWwoeyBwaG90byB9OiB7IHBob3RvOiBQaG90byB9KSB7XG4gIGNvbnN0IFtmYXZvdXJpdGUsIHNldEZhdm91cml0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGYXZvdXJpdGUoZmFsc2UpO1xuICB9LCBbcGhvdG9dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubGlzdEl0ZW19PlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9e2Nzcy5waG90b31cbiAgICAgICAgc3JjPXtwaG90by50aHVtYm5haWxVcmx9XG4gICAgICAgIGFyaWEtbGFiZWw9e3Bob3RvLnRpdGxlfVxuICAgICAgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj57cGhvdG8udGl0bGV9PC9oMj5cbiAgICAgICAgPGgzPlBob3RvSWQ6IHtwaG90by5pZH08L2gzPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAvLyB3ZSBhbHJlYWR5IGhhdmUgYW4gZXhhbXBsZSB3aXRoIC5jYXRjaCBmb3IgdGhpcyB2aWRlbyA6KVxuICAgICAgICAgICAgdm9pZCBheGlvc1xuICAgICAgICAgICAgICAucG9zdDxQaG90bz4oJy9hcGkvZmF2b3VyaXRlJywgeyAuLi5waG90bywgZmF2b3VyaXRlIH0pXG4gICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEZhdm91cml0ZShyZXNwb25zZS5kYXRhLmZhdm91cml0ZSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7ZmF2b3VyaXRlID8gJ1JlbW92ZSBmcm9tIEZhdm91cml0ZXMnIDogJ0FkZCBUbyBGYXZvdXJpdGVzJ31cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiY3NzIiwiUGhvdG9zTGlzdCIsInJlZnJlc2giLCJzZXRSZWZyZXNoIiwibmFtZSIsInNldE5hbWUiLCJjciIsImV2dCIsInRhcmdldCIsInZhbHVlIiwiTGlzdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicGhvdG9zIiwic2V0UGhvdG9zIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWQiLCJsIiwiciIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZSIsInJlc3BvbnNlIiwibWVzc2FnZSIsImFic29sdXRlIiwibWFwIiwicGhvdG8iLCJpZCIsIlBob3RvRGV0YWlsIiwiZmF2b3VyaXRlIiwic2V0RmF2b3VyaXRlIiwibGlzdEl0ZW0iLCJ0aHVtYm5haWxVcmwiLCJ0aXRsZSIsInBvc3QiLCJ0aGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PhotosList.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PhotosList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PhotosList */ \"./src/components/PhotosList.tsx\");\n\nvar _jsxFileName = \"/Users/tynguyen/Desktop/youtube-react-testing-video6-mock-http-calls-with-msw-react-testing-library-main/src/pages/index.tsx\";\n\n\nfunction Home() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PhotosList__WEBPACK_IMPORTED_MODULE_2__.PhotosList, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNFLElBQVQsR0FBZ0I7QUFDN0Isc0JBQU8sOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95b3V0dWJlLXJlYWN0LXRlc3RpbmctdmlkZW8yLWNvbmZpZy1qZXN0LXJlYWN0LXRlc3RpbmctbGlicmFyeS8uL3NyYy9wYWdlcy9pbmRleC50c3g/NDFlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUGhvdG9zTGlzdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGhvdG9zTGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiA8UGhvdG9zTGlzdCAvPjtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBob3Rvc0xpc3QiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/components/PhotoList.module.css":
/*!*********************************************!*\
  !*** ./src/components/PhotoList.module.css ***!
  \*********************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"listItem\": \"PhotoList_listItem__3LeyW\",\n\t\"photo\": \"PhotoList_photo__2bGGA\",\n\t\"error\": \"PhotoList_error__2oiC1\",\n\t\"loading\": \"PhotoList_loading__3tPny\",\n\t\"absolute\": \"PhotoList_absolute__ncTc4\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QaG90b0xpc3QubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW91dHViZS1yZWFjdC10ZXN0aW5nLXZpZGVvMi1jb25maWctamVzdC1yZWFjdC10ZXN0aW5nLWxpYnJhcnkvLi9zcmMvY29tcG9uZW50cy9QaG90b0xpc3QubW9kdWxlLmNzcz8zNDI1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxpc3RJdGVtXCI6IFwiUGhvdG9MaXN0X2xpc3RJdGVtX18zTGV5V1wiLFxuXHRcInBob3RvXCI6IFwiUGhvdG9MaXN0X3Bob3RvX18yYkdHQVwiLFxuXHRcImVycm9yXCI6IFwiUGhvdG9MaXN0X2Vycm9yX18yb2lDMVwiLFxuXHRcImxvYWRpbmdcIjogXCJQaG90b0xpc3RfbG9hZGluZ19fM3RQbnlcIixcblx0XCJhYnNvbHV0ZVwiOiBcIlBob3RvTGlzdF9hYnNvbHV0ZV9fbmNUYzRcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PhotoList.module.css\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();