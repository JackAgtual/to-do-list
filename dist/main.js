/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --sidebar-padding: 0.5rem;\\n}\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nbody {\\n    display: grid;\\n    grid-template-columns: minmax(200px, 1fr) 4.5fr;\\n    grid-template-rows: min-content 1fr;\\n    min-height: 100vh;\\n    font-family: Arial, Helvetica, sans-serif;\\n}\\n\\nbutton {\\n    border: none;\\n    padding: 0.5rem 1.75rem;\\n    border-radius: 1rem;\\n    display: block;\\n}\\n\\nli {\\n    list-style-type: none;   \\n}\\n\\n#header {\\n    grid-column: 1 / -1;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 1rem;\\n}\\n\\n#corner {\\n    display: flex;\\n    align-items: center;\\n}\\n\\n#corner > *:first-child {\\n    margin-right: 1rem;\\n}\\n\\n\\n#sidebar {\\n    padding: 0 var(--sidebar-padding) var(--sidebar-padding) var(--sidebar-padding);\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    grid-template-rows: min-content;\\n    grid-auto-rows: min-content;\\n    row-gap: 0;\\n}\\n\\n#add-project {\\n    border-radius: 50%;\\n}\\n\\n.clickable:hover {\\n    cursor: pointer;\\n    background-color: rgba(0, 0, 0, 0.05);\\n}\\n\\n.span-icon {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: var(--sidebar-padding);\\n}\\n\\nli > button {\\n    width: 100%;\\n}\\n\\n.task {\\n    margin: 0 1rem 0 1rem;\\n    padding: 1.25rem;\\n    border-bottom: 1px solid grey;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    gap: 1rem;\\n}\\n\\n.task > * {\\n    flex-grow: 0;\\n    flex-shrink: 0;\\n}\\n\\n.task-description {\\n    flex: 1\\n}\\n\\n.task-toggle {\\n    width: 1.5rem;\\n    height: 1.5rem;\\n    background-color: white;\\n    border: 1px solid grey;\\n    border-radius: 50%;\\n}\\n\\n.task-toggle.finished {\\n    background-color: grey;\\n}\\n\\n#content .task:last-child {\\n    border: none;\\n}\\n\\n.icon {\\n    height: 1.5rem;\\n    width: 1.5rem;\\n}\\n\\nform.form-new-task {\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: center;\\n    margin: 1rem 2rem;\\n    border-left: 6px solid black;\\n}\\n\\n.form-btns {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n}\\n\\n.form-btns > *:not(:last-child) {\\n    margin-right: 1rem;\\n}\\n\\n#project-name-input {\\n    padding-left: 4px;\\n}\\n\\n#project-list > * {\\n    padding: var(--sidebar-padding) 0 var(--sidebar-padding) var(--sidebar-padding);\\n}\\n.form-element {\\n    display: flex;\\n    flex-direction: column;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _taskDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskDom */ \"./src/taskDom.js\");\n/* harmony import */ var _taskMgr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskMgr */ \"./src/taskMgr.js\");\n/* harmony import */ var _sidebarDom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebarDom */ \"./src/sidebarDom.js\");\n\n\n\n\n\n\nconst domController = (0,_taskDom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst taskMgr = (0,_taskMgr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst sidebarMgr = (0,_sidebarDom__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\nconst addTask = document.querySelector('#add-task');\naddTask.addEventListener('click', domController.inputNewTask)\n\n// Adding a project\nconst addProject = document.querySelector('#add-project');\naddProject.addEventListener('click', sidebarMgr.inputNewProject);\n\nconst task1 = {\n    title: 't1',\n    description: 'd1',\n    dueDate: '',\n    project: '',\n    finished: false\n}\n\nconst task2 = {\n    title: 't2',\n    description: 'd2',\n    dueDate: '',\n    project: '',\n    finished: false\n}\n\nconst task3 = {\n    title: 't3',\n    description: 'd3',\n    dueDate: '',\n    project: '',\n    finished: true\n}\n\ndomController._addTaskToDom(task1)\ndomController._addTaskToDom(task2)\ndomController._addTaskToDom(task3)\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/sidebarDom.js":
/*!***************************!*\
  !*** ./src/sidebarDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SidebarDom)\n/* harmony export */ });\nfunction SidebarDom() {\n    // TODO: Fix alignment of project lists\n    //       probably put them in the outter sidebar div\n    const getProjects = () => {\n        const projectsList = document.querySelector('#project-list');\n        return [...projectsList.children].map(child => child.innerText);\n    }\n    \n    const inputNewProject = () => {\n        const projectsList = document.querySelector('#project-list');\n\n        const newProjectForm = document.createElement('form');\n        newProjectForm.classList.add('form-new-project')\n        newProjectForm.innerHTML = `<input id=\"project-name-input\" type=\"text\">`;\n\n        // add form\n        projectsList.appendChild(newProjectForm);\n        document.getElementById('project-name-input').select();\n\n        // add project when form is submitted\n        newProjectForm.addEventListener('submit', e => {\n            e.preventDefault();\n            _addProjectNameToList(\n                document.getElementById('project-name-input').value,\n                projectsList\n            );\n            newProjectForm.remove();\n        });\n    }\n\n    const _addProjectNameToList = (projectName, projectsList) => {\n        const newProject = document.createElement('li');\n        newProject.classList.add('clickable')\n        newProject.innerHTML = `<span>${projectName}</span>`;\n        projectsList.appendChild(newProject);\n    }\n\n    return {\n        getProjects,\n        inputNewProject\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/sidebarDom.js?");

/***/ }),

/***/ "./src/taskDom.js":
/*!************************!*\
  !*** ./src/taskDom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskDom)\n/* harmony export */ });\n/* harmony import */ var _icons_pencil_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/pencil.svg */ \"./src/icons/pencil.svg\");\n/* harmony import */ var _icons_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/trash.svg */ \"./src/icons/trash.svg\");\n/* harmony import */ var _icons_floppy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/floppy.svg */ \"./src/icons/floppy.svg\");\n/* harmony import */ var _icons_close_circle_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/close-circle.svg */ \"./src/icons/close-circle.svg\");\n/* harmony import */ var _sidebarDom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebarDom */ \"./src/sidebarDom.js\");\n/* harmony import */ var _taskMgr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskMgr */ \"./src/taskMgr.js\");\n\n\n\n\n\n\n\nconst taskMgr = (0,_taskMgr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nconst sidebarMgr = (0,_sidebarDom__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\nfunction TaskDom() {\n\n    const _getContent = () => document.getElementById('content');\n    let _currentlyInputtingTask = false;\n    const _idxAttr = 'data-idx';\n\n    const _getTaskIdx = taskDomElement => Number(taskDomElement.getAttribute(_idxAttr));\n    \n    const _addTaskToDom = (task, idx) => {\n        \n        const content = _getContent()\n\n        const taskDiv = document.createElement('div');\n        taskDiv.classList.add('task');\n\n        const taskIdx = idx === undefined ? taskMgr.getTaskList().length : idx;\n        taskDiv.setAttribute(_idxAttr, taskIdx)\n\n        const finished = task.finished ? 'finished' : '';\n\n        taskDiv.innerHTML = `\n            <span class=\"task-toggle clickable ${finished}\"></span>\n            <h3 class=\"task-title\">${task.title}</h3>\n            <p class=\"task-description\">${task.description}</p>\n            <p class=\"task-project\">${task.project}</p>\n            <p class=\"task-due-date\">${task.dueDate}</p>\n            <img class=\"icon clickable\" src=\"${_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_0__}\">\n            <img class=\"icon clickable\" src=\"${_icons_trash_svg__WEBPACK_IMPORTED_MODULE_1__}\">\n        `;\n        \n        // adding event listeners\n        _toggleTaskFinished(taskDiv);\n        _removeTaskEvent(taskDiv);\n        _editTaskEvent(taskDiv);\n\n        const referenceNode = document.querySelector(`[data-idx=\"${idx}\"]`)\n        content.insertBefore(taskDiv, referenceNode);\n\n        // Update taskMgr\n        if (idx === undefined) taskMgr.addTask(task);\n        else taskMgr.editTaskAtIdx(idx, task);\n    }\n\n    const _generateTaskForm = task => {\n        const form = document.createElement('form');\n        form.classList.add('form-new-task')\n        \n        let btn = `\n            <img class=\"icon clickable\" id=\"add-task-submit\" src=\"${_icons_floppy_svg__WEBPACK_IMPORTED_MODULE_2__}\">\n        `;\n        if (task === undefined) {\n            // Adding a new task\n            task = {\n                title: '',\n                description: '',\n                project: '',\n                dueDate: '',\n            }\n            btn = '<button id=\"add-task-submit\">Add</button>';\n        }\n\n        form.innerHTML = `\n            <div class=\"form-element\">\n                <label for=\"title\">Title:</label>\n                <input type=\"text\" id=\"title\" value=\"${task.title}\">\n            </div>\n            \n            <div class=\"form-element\">\n                <label for=\"description\">Description</label>\n                <input type=\"text\" id=\"description\" value=\"${task.description}\">\n            </div>\n\n            <div class=\"form-element\">\n                <label for=\"project\">Project:</label>\n                <select name=\"project\" id=\"project\" value=\"${task.project}\">\n                    ${_getProjectListHtml()}\n                </select>\n            </div>\n\n            <div class=\"form-element\">\n                <label for=\"due-date\">Due date:</label>\n                <input type=\"date\" id=\"due-date\" value=\"${task.dueDate}\">\n            </div>\n            <div class=\"form-btns\">\n                ${btn}\n                <img class=\"icon clickable\" id=\"discard\" src=\"${_icons_close_circle_svg__WEBPACK_IMPORTED_MODULE_3__}\">\n            </div>\n        `;\n\n        return form;\n    }\n\n    const _submitBtnEventListener = (parentElement, taskIdx) => {\n        const submitBtn = document.getElementById('add-task-submit');\n        submitBtn.addEventListener('click', e => {\n            e.preventDefault();\n\n            _currentlyInputtingTask = false;\n\n            const task = {\n                title: document.getElementById('title').value,\n                description: document.getElementById('description').value,\n                project: document.getElementById('project').value,\n                dueDate: document.getElementById('due-date').value,\n                finished: false,\n            };\n\n            \n            if (taskIdx === undefined) {\n                // Adding a new task\n                _addTaskToDom(task);\n                \n            } else {\n                // editing an existing task\n                \n                const taskIdx = _getTaskIdx(parentElement)\n                \n                // need to get finished state from taskMgr \n                task.finished = taskMgr.getTaskAtIdx(taskIdx).finished;\n\n                _addTaskToDom(task, taskIdx);\n            }\n\n            parentElement.remove();\n        });\n    }\n    \n    const _discardTaskEventListener = (parentElement, oldHTML) => {\n        const discardBtn = document.getElementById('discard');\n        discardBtn.addEventListener('click', e => {\n            e.preventDefault();\n\n            if (oldHTML === undefined) {\n                // discard new task\n                parentElement.remove();\n            }\n            else {\n                // discard existing task edits\n                \n                parentElement.innerHTML = oldHTML;\n                parentElement.classList.add('task')\n\n                // adding event listeners\n                _toggleTaskFinished(parentElement);\n                _removeTaskEvent(parentElement);\n                _editTaskEvent(parentElement);\n            }\n\n            _currentlyInputtingTask = false;\n        })\n    }\n\n    const inputNewTask = () => {\n        if (_currentlyInputtingTask) return;\n        _currentlyInputtingTask = true;\n\n        const content = _getContent();\n        const form = _generateTaskForm();        \n        content.appendChild(form);\n        document.getElementById('title').select();\n\n        _submitBtnEventListener(form);\n        _discardTaskEventListener(form)\n    }\n\n    const _getProjectListHtml = () => {\n        const projectList = sidebarMgr.getProjects();\n        \n        return projectList.reduce(\n            (prev, cur) => prev + `<option value=\"${cur}\">${cur}</option>`,\n            '<option value=\"\"></option>'\n        );\n    }\n\n    const _toggleTaskFinished = taskDomElement => {\n        // assuming toggle button (span) is the first element\n        const toggleBtn = taskDomElement.firstElementChild;\n        toggleBtn.addEventListener('click', () => {\n            toggleBtn.classList.toggle('finished');\n\n            taskMgr.toggleTaskFinished(_getTaskIdx(taskDomElement));\n        });\n    }\n\n    const _removeTaskEvent = taskDomElement => {\n        // assuming delete btn (img) is the last element\n        const deleteBtn = taskDomElement.lastElementChild;\n\n        deleteBtn.addEventListener('click', () => {\n\n            taskMgr.removeTask(_getTaskIdx(taskDomElement));\n\n            // adjust indecies of following tasks\n            let curSibling = taskDomElement.nextSibling;\n            while (curSibling) {\n                const curIdx = _getTaskIdx(curSibling);\n                curSibling.setAttribute(_idxAttr, curIdx - 1);\n                curSibling = curSibling.nextSibling;\n            }\n\n            taskDomElement.remove();\n        });\n    }\n\n    const _editTaskEvent = taskDomElement => {\n        const editBtnIdx = 5;\n        const editBtn = taskDomElement.children.item(editBtnIdx);\n\n        editBtn.addEventListener('click', () => {\n            if (_currentlyInputtingTask) return;\n\n            // get task info\n            const taskIdx = _getTaskIdx(taskDomElement);\n            const task = taskMgr.getTaskAtIdx(taskIdx);\n\n            // remove contents\n            const oldHTML = taskDomElement.innerHTML;\n            taskDomElement.innerHTML = '';\n            taskDomElement.classList.remove('task')\n\n            // add form to user can edit\n            const form = _generateTaskForm(task)\n            taskDomElement.appendChild(form)\n            document.getElementById('title').select();\n\n            _currentlyInputtingTask = true;\n\n            _submitBtnEventListener(taskDomElement, taskIdx);\n            _discardTaskEventListener(taskDomElement, oldHTML);\n        });\n    }\n\n    return {\n        inputNewTask,\n        _addTaskToDom \n    };\n}\n\n//# sourceURL=webpack://to-do-list/./src/taskDom.js?");

/***/ }),

/***/ "./src/taskMgr.js":
/*!************************!*\
  !*** ./src/taskMgr.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskMgr)\n/* harmony export */ });\nfunction TaskMgr() {\n    const _tasks = [];\n\n    const getTaskList = () => _tasks;\n\n    const getTaskAtIdx = taskIdx => _tasks[taskIdx];\n\n    const editTaskAtIdx = (idx, updatedTask) => _tasks[idx] = updatedTask;\n    \n    const toggleTaskFinished = taskIdx => _tasks[taskIdx].finished = !_tasks[taskIdx].finished;\n\n    const removeTask = taskIdx => _tasks.splice(taskIdx, 1);\n\n    const addTask = task => _tasks.push(task);\n\n    return {\n        getTaskList,\n        getTaskAtIdx, \n        editTaskAtIdx, \n        toggleTaskFinished,\n        removeTask,\n        addTask\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/taskMgr.js?");

/***/ }),

/***/ "./src/icons/close-circle.svg":
/*!************************************!*\
  !*** ./src/icons/close-circle.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ebad04c74af4fbac7c62.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/close-circle.svg?");

/***/ }),

/***/ "./src/icons/floppy.svg":
/*!******************************!*\
  !*** ./src/icons/floppy.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"562e2ff691030eff9edb.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/floppy.svg?");

/***/ }),

/***/ "./src/icons/pencil.svg":
/*!******************************!*\
  !*** ./src/icons/pencil.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8d317290131028fe10cf.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/pencil.svg?");

/***/ }),

/***/ "./src/icons/trash.svg":
/*!*****************************!*\
  !*** ./src/icons/trash.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bde675c38d54979f589e.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/trash.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;