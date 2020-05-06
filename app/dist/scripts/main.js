/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/scripts/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/scripts/App.js":
/*!***********************************!*\
  !*** ./app/assets/scripts/App.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! picturefill */ \"./node_modules/picturefill/dist/picturefill.js\");\n/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(picturefill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MobileMenu */ \"./app/assets/scripts/modules/MobileMenu.js\");\n/* harmony import */ var _modules_FooterDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/FooterDate */ \"./app/assets/scripts/modules/FooterDate.js\");\n/* harmony import */ var _modules_GoToTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/GoToTop */ \"./app/assets/scripts/modules/GoToTop.js\");\n/* harmony import */ var _modules_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Projects */ \"./app/assets/scripts/modules/Projects.js\");\n/* harmony import */ var _modules_ProjectModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ProjectModal */ \"./app/assets/scripts/modules/ProjectModal.js\");\n/* harmony import */ var _projects_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects.json */ \"./app/assets/scripts/projects.json\");\nvar _projects_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./projects.json */ \"./app/assets/scripts/projects.json\", 1);\n\n\n\n\n\n\n\nnew _modules_Projects__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_projects_json__WEBPACK_IMPORTED_MODULE_6__);\nnew _modules_ProjectModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"](_projects_json__WEBPACK_IMPORTED_MODULE_6__);\nnew _modules_FooterDate__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"date\");\nnew _modules_GoToTop__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"goToTop\");\nnew _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack:///./app/assets/scripts/App.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/FooterDate.js":
/*!**************************************************!*\
  !*** ./app/assets/scripts/modules/FooterDate.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass FooterDate {\n  constructor(id) {\n    this.element = document.getElementById(id);\n    this.assignYear(this.element);\n  }\n\n  assignYear(element) {\n    const d = new Date().getFullYear();\n    element.innerText = d;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FooterDate);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/FooterDate.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/GoToTop.js":
/*!***********************************************!*\
  !*** ./app/assets/scripts/modules/GoToTop.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GoToTop {\n  constructor(id) {\n    this.element = document.getElementById(id);\n    this.asignListeners(this.element);\n  }\n\n  asignListeners(element) {\n    window.addEventListener(\"scroll\", () => {\n      let top = window.pageYOffset || document.documentElement.scrollTop;\n\n      if (top < 300) {\n        element.style.display = \"none\";\n      } else {\n        element.style.display = \"block\";\n      }\n    });\n    element.addEventListener(\"click\", () => {\n      this.scrollToTop();\n    });\n  }\n\n  scrollToTop() {\n    window.scrollTo({\n      top: 0,\n      behavior: 'smooth'\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoToTop);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/GoToTop.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/MobileMenu.js":
/*!**************************************************!*\
  !*** ./app/assets/scripts/modules/MobileMenu.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass MobileMenu {\n  constructor() {\n    this.button = document.getElementById(\"navButton\");\n    this.links = document.querySelectorAll(\".header-navbar__navigation li\");\n    this.menuContent = document.getElementById(\"navMenu\");\n    this.buttonWrapper = document.querySelector(\".header-button\");\n    this.body = document.querySelector(\"body\");\n    this.events();\n  }\n\n  events() {\n    this.button.addEventListener(\"click\", this.toggleClasses.bind(this));\n    this.links.forEach(link => {\n      link.addEventListener(\"click\", this.removeClasses.bind(this));\n    });\n  }\n\n  toggleClasses() {\n    this.menuContent.classList.toggle(\"header-navbar--open\");\n    this.button.classList.toggle(\"header-button--open\");\n    this.body.classList.toggle(\"navbar--open\");\n    this.buttonWrapper.classList.toggle(\"header-button--is-open\");\n  }\n\n  removeClasses() {\n    this.menuContent.classList.remove(\"header-navbar--open\");\n    this.button.classList.remove(\"header-button--open\");\n    this.body.classList.remove(\"navbar--open\");\n    this.buttonWrapper.classList.remove(\"header-button--is-open\");\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/MobileMenu.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/ProjectModal.js":
/*!****************************************************!*\
  !*** ./app/assets/scripts/modules/ProjectModal.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass ProjectModal {\n  constructor(project_list) {\n    this.project_list = project_list;\n    this.project_elements = document.querySelectorAll(\".project.col.col--xs-12.col--md-6\");\n    this.modal = document.getElementById(\"modal\");\n    this.button = document.getElementById(\"closeModal\");\n    this.asignEventListeners();\n    this.listenerFunc = null;\n    this.modal_image = document.querySelector(\"[data-modal='image']\");\n    this.modal_title = document.querySelector(\"[data-modal='title']\");\n    this.modal_subtitle = document.querySelector(\"[data-modal='subtitle']\");\n    this.modal_description = document.querySelector(\"[data-modal='description']\");\n    this.modal_tags = document.querySelector(\"[data-modal='tags']\");\n    this.modal_github = document.querySelector(\"[data-modal='github']\");\n    this.modal_url = document.querySelector(\"[data-modal='url']\");\n  }\n\n  asignEventListeners() {\n    this.project_elements.forEach(project => {\n      project.addEventListener(\"click\", e => {\n        this.openModal(project.getAttribute(\"data-project_id\"));\n      });\n    });\n    this.button.addEventListener(\"click\", () => {\n      this.closeModal();\n    });\n  } // preventDefault(e) {\n  //     e.preventDefault();\n  // }\n  // disableScroll() {\n  //     window.addEventListener('DOMMouseScroll', this.preventDefault); \n  //     window.addEventListener('touchmove', this.preventDefault);\n  // }\n  // enableScroll() {\n  //     window.removeEventListener('DOMMouseScroll', this.preventDefault);\n  //     window.removeEventListener('touchmove', this.preventDefault);\n  // }\n\n\n  openModal(id) {\n    this.listenerFunc = this.escapeListener.bind(this);\n    document.addEventListener(\"keydown\", this.listenerFunc);\n    let project = this.project_list.find(item => item.id === parseInt(id));\n    this.modal.classList.add(\"open\");\n    this.addData(project);\n  }\n\n  escapeListener(e) {\n    e.code === \"Escape\" ? this.closeModal() : null;\n  }\n\n  closeModal() {\n    document.removeEventListener(\"keydown\", this.listenerFunc);\n    this.modal.classList.remove(\"open\");\n    this.clearModal();\n  }\n\n  clearModal() {\n    setTimeout(() => {\n      this.modal_image.innerHTML = \"\";\n      this.modal_title.innerText = \"\";\n      this.modal_subtitle.innerText = \"\";\n      this.modal_description.innerText = \"\";\n      this.modal_github.href = \"\";\n      this.modal_url.href = \"\";\n    }, 800);\n  }\n\n  addData(project) {\n    const img_ele = document.createElement(\"img\");\n    img_ele.src = project.coverImage;\n    img_ele.alt = project.coverImage.split(\"/\")[project.coverImage.split(\"/\").length - 1].split(\"-\").join(\" \").replace(\".jpg\", \"\");\n    const source_large = document.createElement(\"source\");\n    source_large.srcset = project.coverImageLarge;\n    source_large.media = \"(min-width: 1380px)\";\n    const source_medium = document.createElement(\"source\");\n    source_medium.srcset = project.coverImageMedium;\n    source_medium.media = \"(min-width: 990px)\";\n    const source_small = document.createElement(\"source\");\n    source_small.srcset = project.coverImage;\n    source_small.media = \"(min-width: 640px)\";\n    const picture_ele = document.createElement(\"picture\");\n    picture_ele.appendChild(source_large);\n    picture_ele.appendChild(source_medium);\n    picture_ele.appendChild(source_small);\n    picture_ele.appendChild(img_ele);\n    this.modal_image.appendChild(picture_ele);\n    this.modal_title.innerText = project.title;\n    this.modal_subtitle.innerText = project.subtitle;\n    this.modal_description.innerText = project.description;\n    this.modal_github.href = project.github;\n    this.modal_url.href = project.url;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectModal);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/ProjectModal.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/Projects.js":
/*!************************************************!*\
  !*** ./app/assets/scripts/modules/Projects.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Projects {\n  constructor(project_list) {\n    this.project_list = project_list;\n    this.parent = document.getElementById(\"projectsContainer\");\n    this.printProjects();\n  }\n\n  printProjects() {\n    this.project_list.forEach(project => {\n      //create footer\n      const subTitle = document.createElement(\"h5\");\n      subTitle.innerText = project.subtitle;\n      const projectFooter = document.createElement(\"div\");\n      projectFooter.classList.add(\"project__footer\");\n      projectFooter.appendChild(subTitle); //create title\n\n      const Title = document.createElement(\"h3\");\n      Title.innerText = project.title;\n      const projectTitle = document.createElement(\"div\");\n      projectTitle.classList.add(\"project__title\");\n      projectTitle.appendChild(Title); //create content element\n\n      const projectContent = document.createElement(\"div\");\n      projectContent.classList.add(\"project-content\");\n      projectContent.appendChild(projectTitle);\n      projectContent.appendChild(projectFooter); //create img element\n\n      const img_ele = document.createElement(\"img\");\n      img_ele.src = project.coverImage;\n      img_ele.alt = project.coverImage.split(\"/\")[project.coverImage.split(\"/\").length - 1].split(\"-\").join(\" \").replace(\".jpg\", \"\");\n      const source_large = document.createElement(\"source\");\n      source_large.srcset = project.coverImageLarge;\n      source_large.media = \"(min-width: 1380px)\";\n      const source_medium = document.createElement(\"source\");\n      source_medium.srcset = project.coverImageMedium;\n      source_medium.media = \"(min-width: 990px)\";\n      const source_small = document.createElement(\"source\");\n      source_small.srcset = project.coverImage;\n      source_small.media = \"(min-width: 640px)\";\n      const picture_ele = document.createElement(\"picture\");\n      picture_ele.appendChild(source_large);\n      picture_ele.appendChild(source_medium);\n      picture_ele.appendChild(source_small);\n      picture_ele.appendChild(img_ele);\n      const img_container = document.createElement(\"div\");\n      img_container.classList.add(\"project-image\");\n      img_container.appendChild(picture_ele); //create project div\n\n      const pp = document.createElement(\"div\");\n      pp.classList.add(\"project\");\n      pp.classList.add(\"col\");\n      pp.classList.add(\"col--xs-12\");\n      pp.classList.add(\"col--md-6\");\n      pp.setAttribute('data-project_id', project.id);\n      pp.appendChild(img_container);\n      pp.appendChild(projectContent); //append to parent element\n\n      this.parent.appendChild(pp);\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/Projects.js?");

/***/ }),

/***/ "./app/assets/scripts/projects.json":
/*!******************************************!*\
  !*** ./app/assets/scripts/projects.json ***!
  \******************************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"id\\\":1,\\\"title\\\":\\\"Todoist\\\",\\\"subtitle\\\":\\\"Demo Project\\\",\\\"url\\\":\\\"https://google.com\\\",\\\"coverImage\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"coverImageMedium\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"coverImageLarge\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"gifImage\\\":\\\"assets/images/todoist/anim.gif\\\",\\\"description\\\":\\\"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\\\",\\\"tags\\\":\\\"Postgresql, Express, Node, React\\\",\\\"github\\\":\\\"test\\\"},{\\\"id\\\":2,\\\"title\\\":\\\"Todoist2\\\",\\\"subtitle\\\":\\\"Demo Project\\\",\\\"url\\\":\\\"https://google.com\\\",\\\"coverImage\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"coverImageMedium\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"coverImageLarge\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"gifImage\\\":\\\"assets/images/todoist/anim.gif\\\",\\\"description\\\":\\\"dfas fasdf asdf as dfasd f asd f\\\",\\\"tags\\\":\\\"Postgresql, Express, Node, React\\\",\\\"github\\\":\\\"test\\\"},{\\\"id\\\":3,\\\"title\\\":\\\"Todoist3\\\",\\\"subtitle\\\":\\\"Demo Project\\\",\\\"url\\\":\\\"https://google.com\\\",\\\"coverImage\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"coverImageMedium\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"coverImageLarge\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"gifImage\\\":\\\"assets/images/todoist/anim.gif\\\",\\\"description\\\":\\\"dfas fasdf asdf as dfasd f asd f\\\",\\\"tags\\\":\\\"Postgresql, Express, Node, React\\\",\\\"github\\\":\\\"test\\\"},{\\\"id\\\":4,\\\"title\\\":\\\"Todoist4\\\",\\\"subtitle\\\":\\\"Demo Project\\\",\\\"url\\\":\\\"https://google.com\\\",\\\"coverImage\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"coverImageMedium\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"coverImageLarge\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"gifImage\\\":\\\"assets/images/todoist/anim.gif\\\",\\\"description\\\":\\\"dfas fasdf asdf as dfasd f asd f\\\",\\\"tags\\\":\\\"Postgresql, Express, Node, React\\\",\\\"github\\\":\\\"test\\\"},{\\\"id\\\":5,\\\"title\\\":\\\"Todoist5\\\",\\\"subtitle\\\":\\\"Demo Project\\\",\\\"url\\\":\\\"https://google.com\\\",\\\"coverImage\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"coverImageMedium\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"coverImageLarge\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"gifImage\\\":\\\"assets/images/todoist/anim.gif\\\",\\\"description\\\":\\\"dfas fasdf asdf as dfasd f asd f\\\",\\\"tags\\\":\\\"Postgresql, Express, Node, React\\\",\\\"github\\\":\\\"test\\\"}]\");\n\n//# sourceURL=webpack:///./app/assets/scripts/projects.json?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar charAt = __webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js/internals/string-multibyte.js\").charAt;\n\n// `AdvanceStringIndex` abstract operation\n// https://tc39.github.io/ecma262/#sec-advancestringindex\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? charAt(S, index).length : 1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/advance-string-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f;\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// TODO: Remove from `core-js@4` since it's moved to entry points\n__webpack_require__(/*! ../modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  // #replace needs built-in support for named groups.\n  // #match works fine because it just return the exec results, even if it has\n  // a \"grops\" property.\n  var re = /./;\n  re.exec = function () {\n    var result = [];\n    result.groups = { a: '7' };\n    return result;\n  };\n  return ''.replace(re, '$<a>') !== '7';\n});\n\n// IE <= 11 replaces $0 with the whole match, as if it was $&\n// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0\nvar REPLACE_KEEPS_$0 = (function () {\n  return 'a'.replace(/./, '$0') === '$0';\n})();\n\nvar REPLACE = wellKnownSymbol('replace');\n// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string\nvar REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {\n  if (/./[REPLACE]) {\n    return /./[REPLACE]('a', '$0') === '';\n  }\n  return false;\n})();\n\n// Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n// Weex JS has frozen built-in prototypes, so use try / catch wrapper\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {\n  var re = /(?:)/;\n  var originalExec = re.exec;\n  re.exec = function () { return originalExec.apply(this, arguments); };\n  var result = 'ab'.split(re);\n  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';\n});\n\nmodule.exports = function (KEY, length, exec, sham) {\n  var SYMBOL = wellKnownSymbol(KEY);\n\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  });\n\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n\n    if (KEY === 'split') {\n      // We can't use real regex here since it causes deoptimization\n      // and serious performance degradation in V8\n      // https://github.com/zloirock/core-js/issues/306\n      re = {};\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n      re.constructor[SPECIES] = function () { return re; };\n      re.flags = '';\n      re[SYMBOL] = /./[SYMBOL];\n    }\n\n    re.exec = function () { execCalled = true; return null; };\n\n    re[SYMBOL]('');\n    return !execCalled;\n  });\n\n  if (\n    !DELEGATES_TO_SYMBOL ||\n    !DELEGATES_TO_EXEC ||\n    (KEY === 'replace' && !(\n      REPLACE_SUPPORTS_NAMED_GROUPS &&\n      REPLACE_KEEPS_$0 &&\n      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE\n    )) ||\n    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)\n  ) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {\n      if (regexp.exec === regexpExec) {\n        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n          // The native String method already delegates to @@method (this\n          // polyfilled function), leasing to infinite recursion.\n          // We avoid it by directly calling the native @@method method.\n          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };\n        }\n        return { done: true, value: nativeMethod.call(str, regexp, arg2) };\n      }\n      return { done: false };\n    }, {\n      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,\n      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE\n    });\n    var stringMethod = methods[0];\n    var regexMethod = methods[1];\n\n    redefine(String.prototype, KEY, stringMethod);\n    redefine(RegExp.prototype, SYMBOL, length == 2\n      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n      // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n      ? function (string, arg) { return regexMethod.call(string, this, arg); }\n      // 21.2.5.6 RegExp.prototype[@@match](string)\n      // 21.2.5.9 RegExp.prototype[@@search](string)\n      : function (string) { return regexMethod.call(string, this); }\n    );\n  }\n\n  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/has.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\nvar functionToString = Function.toString;\n\n// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper\nif (typeof store.inspectSource != 'function') {\n  store.inspectSource = function (it) {\n    return functionToString.call(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\n// `IsRegExp` abstract operation\n// https://tc39.github.io/ecma262/#sec-isregexp\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertynames\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = global;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(String).split('String');\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);\n    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else createNonEnumerableProperty(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar regexpExec = __webpack_require__(/*! ./regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\n\n// `RegExpExec` abstract operation\n// https://tc39.github.io/ecma262/#sec-regexpexec\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n    if (typeof result !== 'object') {\n      throw TypeError('RegExp exec method returned something other than an Object or null');\n    }\n    return result;\n  }\n\n  if (classof(R) !== 'RegExp') {\n    throw TypeError('RegExp#exec called on incompatible receiver');\n  }\n\n  return regexpExec.call(R, S);\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/regexp-exec-abstract.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar regexpFlags = __webpack_require__(/*! ./regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\nvar stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ \"./node_modules/core-js/internals/regexp-sticky-helpers.js\");\n\nvar nativeExec = RegExp.prototype.exec;\n// This always refers to the native implementation, because the\n// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,\n// which loads this file before patching the method.\nvar nativeReplace = String.prototype.replace;\n\nvar patchedExec = nativeExec;\n\nvar UPDATES_LAST_INDEX_WRONG = (function () {\n  var re1 = /a/;\n  var re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1.lastIndex !== 0 || re2.lastIndex !== 0;\n})();\n\nvar UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;\n\n// nonparticipating capturing group, copied from es5-shim's String#split patch.\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\n\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n    var sticky = UNSUPPORTED_Y && re.sticky;\n    var flags = regexpFlags.call(re);\n    var source = re.source;\n    var charsAdded = 0;\n    var strCopy = str;\n\n    if (sticky) {\n      flags = flags.replace('y', '');\n      if (flags.indexOf('g') === -1) {\n        flags += 'g';\n      }\n\n      strCopy = String(str).slice(re.lastIndex);\n      // Support anchored sticky behavior.\n      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\\n')) {\n        source = '(?: ' + source + ')';\n        strCopy = ' ' + strCopy;\n        charsAdded++;\n      }\n      // ^(? + rx + ) is needed, in combination with some str slicing, to\n      // simulate the 'y' flag.\n      reCopy = new RegExp('^(?:' + source + ')', flags);\n    }\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + source + '$(?!\\\\s)', flags);\n    }\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;\n\n    match = nativeExec.call(sticky ? reCopy : re, strCopy);\n\n    if (sticky) {\n      if (match) {\n        match.input = match.input.slice(charsAdded);\n        match[0] = match[0].slice(charsAdded);\n        match.index = re.lastIndex;\n        re.lastIndex += match[0].length;\n      } else re.lastIndex = 0;\n    } else if (UPDATES_LAST_INDEX_WRONG && match) {\n      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;\n    }\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/regexp-exec.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// `RegExp.prototype.flags` getter implementation\n// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.dotAll) result += 's';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/regexp-flags.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar fails = __webpack_require__(/*! ./fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,\n// so we use an intermediate function.\nfunction RE(s, f) {\n  return RegExp(s, f);\n}\n\nexports.UNSUPPORTED_Y = fails(function () {\n  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError\n  var re = RE('a', 'y');\n  re.lastIndex = 2;\n  return re.exec('abcd') != null;\n});\n\nexports.BROKEN_CARET = fails(function () {\n  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687\n  var re = RE('^r', 'gy');\n  re.lastIndex = 2;\n  return re.exec('str') != null;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/regexp-sticky-helpers.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.6.4',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `SpeciesConstructor` abstract operation\n// https://tc39.github.io/ecma262/#sec-speciesconstructor\nmodule.exports = function (O, defaultConstructor) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\n// `String.prototype.{ codePointAt, at }` methods implementation\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = String(requireObjectCoercible($this));\n    var position = toInteger(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = S.charCodeAt(position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING ? S.charAt(position) : first\n        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/string-multibyte.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.github.io/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  // eslint-disable-next-line no-undef\n  && !Symbol.sham\n  // eslint-disable-next-line no-undef\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name)) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];\n    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar exec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\n\n$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {\n  exec: exec\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.regexp.exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"./node_modules/core-js/internals/advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"./node_modules/core-js/internals/regexp-exec-abstract.js\");\n\nvar max = Math.max;\nvar min = Math.min;\nvar floor = Math.floor;\nvar SUBSTITUTION_SYMBOLS = /\\$([$&'`]|\\d\\d?|<[^>]*>)/g;\nvar SUBSTITUTION_SYMBOLS_NO_NAMED = /\\$([$&'`]|\\d\\d?)/g;\n\nvar maybeToString = function (it) {\n  return it === undefined ? it : String(it);\n};\n\n// @@replace logic\nfixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {\n  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;\n  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;\n  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';\n\n  return [\n    // `String.prototype.replace` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.replace\n    function replace(searchValue, replaceValue) {\n      var O = requireObjectCoercible(this);\n      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];\n      return replacer !== undefined\n        ? replacer.call(searchValue, O, replaceValue)\n        : nativeReplace.call(String(O), searchValue, replaceValue);\n    },\n    // `RegExp.prototype[@@replace]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace\n    function (regexp, replaceValue) {\n      if (\n        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||\n        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)\n      ) {\n        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);\n        if (res.done) return res.value;\n      }\n\n      var rx = anObject(regexp);\n      var S = String(this);\n\n      var functionalReplace = typeof replaceValue === 'function';\n      if (!functionalReplace) replaceValue = String(replaceValue);\n\n      var global = rx.global;\n      if (global) {\n        var fullUnicode = rx.unicode;\n        rx.lastIndex = 0;\n      }\n      var results = [];\n      while (true) {\n        var result = regExpExec(rx, S);\n        if (result === null) break;\n\n        results.push(result);\n        if (!global) break;\n\n        var matchStr = String(result[0]);\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n      }\n\n      var accumulatedResult = '';\n      var nextSourcePosition = 0;\n      for (var i = 0; i < results.length; i++) {\n        result = results[i];\n\n        var matched = String(result[0]);\n        var position = max(min(toInteger(result.index), S.length), 0);\n        var captures = [];\n        // NOTE: This is equivalent to\n        //   captures = result.slice(1).map(maybeToString)\n        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in\n        // the slice polyfill when slicing native arrays) \"doesn't work\" in safari 9 and\n        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.\n        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));\n        var namedCaptures = result.groups;\n        if (functionalReplace) {\n          var replacerArgs = [matched].concat(captures, position, S);\n          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);\n          var replacement = String(replaceValue.apply(undefined, replacerArgs));\n        } else {\n          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);\n        }\n        if (position >= nextSourcePosition) {\n          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;\n          nextSourcePosition = position + matched.length;\n        }\n      }\n      return accumulatedResult + S.slice(nextSourcePosition);\n    }\n  ];\n\n  // https://tc39.github.io/ecma262/#sec-getsubstitution\n  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {\n    var tailPos = position + matched.length;\n    var m = captures.length;\n    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;\n    if (namedCaptures !== undefined) {\n      namedCaptures = toObject(namedCaptures);\n      symbols = SUBSTITUTION_SYMBOLS;\n    }\n    return nativeReplace.call(replacement, symbols, function (match, ch) {\n      var capture;\n      switch (ch.charAt(0)) {\n        case '$': return '$';\n        case '&': return matched;\n        case '`': return str.slice(0, position);\n        case \"'\": return str.slice(tailPos);\n        case '<':\n          capture = namedCaptures[ch.slice(1, -1)];\n          break;\n        default: // \\d\\d?\n          var n = +ch;\n          if (n === 0) return match;\n          if (n > m) {\n            var f = floor(n / 10);\n            if (f === 0) return match;\n            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);\n            return match;\n          }\n          capture = captures[n - 1];\n      }\n      return capture === undefined ? '' : capture;\n    });\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.string.replace.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/core-js/internals/is-regexp.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js/internals/species-constructor.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"./node_modules/core-js/internals/advance-string-index.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"./node_modules/core-js/internals/regexp-exec-abstract.js\");\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar arrayPush = [].push;\nvar min = Math.min;\nvar MAX_UINT32 = 0xFFFFFFFF;\n\n// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError\nvar SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });\n\n// @@split logic\nfixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {\n  var internalSplit;\n  if (\n    'abbc'.split(/(b)*/)[1] == 'c' ||\n    'test'.split(/(?:)/, -1).length != 4 ||\n    'ab'.split(/(?:ab)*/).length != 2 ||\n    '.'.split(/(.?)(.?)/).length != 4 ||\n    '.'.split(/()()/).length > 1 ||\n    ''.split(/.?/).length\n  ) {\n    // based on es5-shim implementation, need to rework it\n    internalSplit = function (separator, limit) {\n      var string = String(requireObjectCoercible(this));\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (separator === undefined) return [string];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) {\n        return nativeSplit.call(string, separator, lim);\n      }\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') +\n                  (separator.multiline ? 'm' : '') +\n                  (separator.unicode ? 'u' : '') +\n                  (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var match, lastIndex, lastLength;\n      while (match = regexpExec.call(separatorCopy, string)) {\n        lastIndex = separatorCopy.lastIndex;\n        if (lastIndex > lastLastIndex) {\n          output.push(string.slice(lastLastIndex, match.index));\n          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));\n          lastLength = match[0].length;\n          lastLastIndex = lastIndex;\n          if (output.length >= lim) break;\n        }\n        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string.length) {\n        if (lastLength || !separatorCopy.test('')) output.push('');\n      } else output.push(string.slice(lastLastIndex));\n      return output.length > lim ? output.slice(0, lim) : output;\n    };\n  // Chakra, V8\n  } else if ('0'.split(undefined, 0).length) {\n    internalSplit = function (separator, limit) {\n      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);\n    };\n  } else internalSplit = nativeSplit;\n\n  return [\n    // `String.prototype.split` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.split\n    function split(separator, limit) {\n      var O = requireObjectCoercible(this);\n      var splitter = separator == undefined ? undefined : separator[SPLIT];\n      return splitter !== undefined\n        ? splitter.call(separator, O, limit)\n        : internalSplit.call(String(O), separator, limit);\n    },\n    // `RegExp.prototype[@@split]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split\n    //\n    // NOTE: This cannot be properly polyfilled in engines that don't support\n    // the 'y' flag.\n    function (regexp, limit) {\n      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var C = speciesConstructor(rx, RegExp);\n\n      var unicodeMatching = rx.unicode;\n      var flags = (rx.ignoreCase ? 'i' : '') +\n                  (rx.multiline ? 'm' : '') +\n                  (rx.unicode ? 'u' : '') +\n                  (SUPPORTS_Y ? 'y' : 'g');\n\n      // ^(? + rx + ) is needed, in combination with some S slicing, to\n      // simulate the 'y' flag.\n      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];\n      var p = 0;\n      var q = 0;\n      var A = [];\n      while (q < S.length) {\n        splitter.lastIndex = SUPPORTS_Y ? q : 0;\n        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));\n        var e;\n        if (\n          z === null ||\n          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p\n        ) {\n          q = advanceStringIndex(S, q, unicodeMatching);\n        } else {\n          A.push(S.slice(p, q));\n          if (A.length === lim) return A;\n          for (var i = 1; i <= z.length - 1; i++) {\n            A.push(z[i]);\n            if (A.length === lim) return A;\n          }\n          q = p = e;\n        }\n      }\n      A.push(S.slice(p));\n      return A;\n    }\n  ];\n}, !SUPPORTS_Y);\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.string.split.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// `Symbol.prototype.description` getter\n// https://tc39.github.io/ecma262/#sec-symbol.prototype.description\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\n\nvar NativeSymbol = global.Symbol;\n\nif (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||\n  // Safari 12 bug\n  NativeSymbol().description !== undefined\n)) {\n  var EmptyStringDescriptionStore = {};\n  // wrap Symbol constructor for correct work with undefined description\n  var SymbolWrapper = function Symbol() {\n    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);\n    var result = this instanceof SymbolWrapper\n      ? new NativeSymbol(description)\n      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'\n      : description === undefined ? NativeSymbol() : NativeSymbol(description);\n    if (description === '') EmptyStringDescriptionStore[result] = true;\n    return result;\n  };\n  copyConstructorProperties(SymbolWrapper, NativeSymbol);\n  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;\n  symbolPrototype.constructor = SymbolWrapper;\n\n  var symbolToString = symbolPrototype.toString;\n  var native = String(NativeSymbol('test')) == 'Symbol(test)';\n  var regexp = /^Symbol\\((.*)\\)[^)]+$/;\n  defineProperty(symbolPrototype, 'description', {\n    configurable: true,\n    get: function description() {\n      var symbol = isObject(this) ? this.valueOf() : this;\n      var string = symbolToString.call(symbol);\n      if (has(EmptyStringDescriptionStore, symbol)) return '';\n      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');\n      return desc === '' ? undefined : desc;\n    }\n  });\n\n  $({ global: true, forced: true }, {\n    Symbol: SymbolWrapper\n  });\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.symbol.description.js?");

/***/ }),

/***/ "./node_modules/picturefill/dist/picturefill.js":
/*!******************************************************!*\
  !*** ./node_modules/picturefill/dist/picturefill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/*! picturefill - v3.0.2 - 2016-02-12\n * https://scottjehl.github.io/picturefill/\n * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT\n */\n/*! Gecko-Picture - v1.0\n * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture\n * Firefox's early picture implementation (prior to FF41) is static and does\n * not react to viewport changes. This tiny module fixes this.\n */\n(function(window) {\n\t/*jshint eqnull:true */\n\tvar ua = navigator.userAgent;\n\n\tif ( window.HTMLPictureElement && ((/ecko/).test(ua) && ua.match(/rv\\:(\\d+)/) && RegExp.$1 < 45) ) {\n\t\taddEventListener(\"resize\", (function() {\n\t\t\tvar timer;\n\n\t\t\tvar dummySrc = document.createElement(\"source\");\n\n\t\t\tvar fixRespimg = function(img) {\n\t\t\t\tvar source, sizes;\n\t\t\t\tvar picture = img.parentNode;\n\n\t\t\t\tif (picture.nodeName.toUpperCase() === \"PICTURE\") {\n\t\t\t\t\tsource = dummySrc.cloneNode();\n\n\t\t\t\t\tpicture.insertBefore(source, picture.firstElementChild);\n\t\t\t\t\tsetTimeout(function() {\n\t\t\t\t\t\tpicture.removeChild(source);\n\t\t\t\t\t});\n\t\t\t\t} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {\n\t\t\t\t\timg._pfLastSize = img.offsetWidth;\n\t\t\t\t\tsizes = img.sizes;\n\t\t\t\t\timg.sizes += \",100vw\";\n\t\t\t\t\tsetTimeout(function() {\n\t\t\t\t\t\timg.sizes = sizes;\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tvar findPictureImgs = function() {\n\t\t\t\tvar i;\n\t\t\t\tvar imgs = document.querySelectorAll(\"picture > img, img[srcset][sizes]\");\n\t\t\t\tfor (i = 0; i < imgs.length; i++) {\n\t\t\t\t\tfixRespimg(imgs[i]);\n\t\t\t\t}\n\t\t\t};\n\t\t\tvar onResize = function() {\n\t\t\t\tclearTimeout(timer);\n\t\t\t\ttimer = setTimeout(findPictureImgs, 99);\n\t\t\t};\n\t\t\tvar mq = window.matchMedia && matchMedia(\"(orientation: landscape)\");\n\t\t\tvar init = function() {\n\t\t\t\tonResize();\n\n\t\t\t\tif (mq && mq.addListener) {\n\t\t\t\t\tmq.addListener(onResize);\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tdummySrc.srcset = \"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==\";\n\n\t\t\tif (/^[c|i]|d$/.test(document.readyState || \"\")) {\n\t\t\t\tinit();\n\t\t\t} else {\n\t\t\t\tdocument.addEventListener(\"DOMContentLoaded\", init);\n\t\t\t}\n\n\t\t\treturn onResize;\n\t\t})());\n\t}\n})(window);\n\n/*! Picturefill - v3.0.2\n * http://scottjehl.github.io/picturefill\n * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;\n *  License: MIT\n */\n\n(function( window, document, undefined ) {\n\t// Enable strict mode\n\t\"use strict\";\n\n\t// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)\n\tdocument.createElement( \"picture\" );\n\n\tvar warn, eminpx, alwaysCheckWDescriptor, evalId;\n\t// local object for method references and testing exposure\n\tvar pf = {};\n\tvar isSupportTestReady = false;\n\tvar noop = function() {};\n\tvar image = document.createElement( \"img\" );\n\tvar getImgAttr = image.getAttribute;\n\tvar setImgAttr = image.setAttribute;\n\tvar removeImgAttr = image.removeAttribute;\n\tvar docElem = document.documentElement;\n\tvar types = {};\n\tvar cfg = {\n\t\t//resource selection:\n\t\talgorithm: \"\"\n\t};\n\tvar srcAttr = \"data-pfsrc\";\n\tvar srcsetAttr = srcAttr + \"set\";\n\t// ua sniffing is done for undetectable img loading features,\n\t// to do some non crucial perf optimizations\n\tvar ua = navigator.userAgent;\n\tvar supportAbort = (/rident/).test(ua) || ((/ecko/).test(ua) && ua.match(/rv\\:(\\d+)/) && RegExp.$1 > 35 );\n\tvar curSrcProp = \"currentSrc\";\n\tvar regWDesc = /\\s+\\+?\\d+(e\\d+)?w/;\n\tvar regSize = /(\\([^)]+\\))?\\s*(.+)/;\n\tvar setOptions = window.picturefillCFG;\n\t/**\n\t * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )\n\t */\n\t// baseStyle also used by getEmValue (i.e.: width: 1em is important)\n\tvar baseStyle = \"position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)\";\n\tvar fsCss = \"font-size:100%!important;\";\n\tvar isVwDirty = true;\n\n\tvar cssCache = {};\n\tvar sizeLengthCache = {};\n\tvar DPR = window.devicePixelRatio;\n\tvar units = {\n\t\tpx: 1,\n\t\t\"in\": 96\n\t};\n\tvar anchor = document.createElement( \"a\" );\n\t/**\n\t * alreadyRun flag used for setOptions. is it true setOptions will reevaluate\n\t * @type {boolean}\n\t */\n\tvar alreadyRun = false;\n\n\t// Reusable, non-\"g\" Regexes\n\n\t// (Don't use \\s, to avoid matching non-breaking space.)\n\tvar regexLeadingSpaces = /^[ \\t\\n\\r\\u000c]+/,\n\t    regexLeadingCommasOrSpaces = /^[, \\t\\n\\r\\u000c]+/,\n\t    regexLeadingNotSpaces = /^[^ \\t\\n\\r\\u000c]+/,\n\t    regexTrailingCommas = /[,]+$/,\n\t    regexNonNegativeInteger = /^\\d+$/,\n\n\t    // ( Positive or negative or unsigned integers or decimals, without or without exponents.\n\t    // Must include at least one digit.\n\t    // According to spec tests any decimal point must be followed by a digit.\n\t    // No leading plus sign is allowed.)\n\t    // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number\n\t    regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;\n\n\tvar on = function(obj, evt, fn, capture) {\n\t\tif ( obj.addEventListener ) {\n\t\t\tobj.addEventListener(evt, fn, capture || false);\n\t\t} else if ( obj.attachEvent ) {\n\t\t\tobj.attachEvent( \"on\" + evt, fn);\n\t\t}\n\t};\n\n\t/**\n\t * simple memoize function:\n\t */\n\n\tvar memoize = function(fn) {\n\t\tvar cache = {};\n\t\treturn function(input) {\n\t\t\tif ( !(input in cache) ) {\n\t\t\t\tcache[ input ] = fn(input);\n\t\t\t}\n\t\t\treturn cache[ input ];\n\t\t};\n\t};\n\n\t// UTILITY FUNCTIONS\n\n\t// Manual is faster than RegEx\n\t// http://jsperf.com/whitespace-character/5\n\tfunction isSpace(c) {\n\t\treturn (c === \"\\u0020\" || // space\n\t\t        c === \"\\u0009\" || // horizontal tab\n\t\t        c === \"\\u000A\" || // new line\n\t\t        c === \"\\u000C\" || // form feed\n\t\t        c === \"\\u000D\");  // carriage return\n\t}\n\n\t/**\n\t * gets a mediaquery and returns a boolean or gets a css length and returns a number\n\t * @param css mediaqueries or css length\n\t * @returns {boolean|number}\n\t *\n\t * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738\n\t */\n\tvar evalCSS = (function() {\n\n\t\tvar regLength = /^([\\d\\.]+)(em|vw|px)$/;\n\t\tvar replace = function() {\n\t\t\tvar args = arguments, index = 0, string = args[0];\n\t\t\twhile (++index in args) {\n\t\t\t\tstring = string.replace(args[index], args[++index]);\n\t\t\t}\n\t\t\treturn string;\n\t\t};\n\n\t\tvar buildStr = memoize(function(css) {\n\n\t\t\treturn \"return \" + replace((css || \"\").toLowerCase(),\n\t\t\t\t// interpret `and`\n\t\t\t\t/\\band\\b/g, \"&&\",\n\n\t\t\t\t// interpret `,`\n\t\t\t\t/,/g, \"||\",\n\n\t\t\t\t// interpret `min-` as >=\n\t\t\t\t/min-([a-z-\\s]+):/g, \"e.$1>=\",\n\n\t\t\t\t// interpret `max-` as <=\n\t\t\t\t/max-([a-z-\\s]+):/g, \"e.$1<=\",\n\n\t\t\t\t//calc value\n\t\t\t\t/calc([^)]+)/g, \"($1)\",\n\n\t\t\t\t// interpret css values\n\t\t\t\t/(\\d+[\\.]*[\\d]*)([a-z]+)/g, \"($1 * e.$2)\",\n\t\t\t\t//make eval less evil\n\t\t\t\t/^(?!(e.[a-z]|[0-9\\.&=|><\\+\\-\\*\\(\\)\\/])).*/ig, \"\"\n\t\t\t) + \";\";\n\t\t});\n\n\t\treturn function(css, length) {\n\t\t\tvar parsedLength;\n\t\t\tif (!(css in cssCache)) {\n\t\t\t\tcssCache[css] = false;\n\t\t\t\tif (length && (parsedLength = css.match( regLength ))) {\n\t\t\t\t\tcssCache[css] = parsedLength[ 1 ] * units[parsedLength[ 2 ]];\n\t\t\t\t} else {\n\t\t\t\t\t/*jshint evil:true */\n\t\t\t\t\ttry{\n\t\t\t\t\t\tcssCache[css] = new Function(\"e\", buildStr(css))(units);\n\t\t\t\t\t} catch(e) {}\n\t\t\t\t\t/*jshint evil:false */\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn cssCache[css];\n\t\t};\n\t})();\n\n\tvar setResolution = function( candidate, sizesattr ) {\n\t\tif ( candidate.w ) { // h = means height: || descriptor.type === 'h' do not handle yet...\n\t\t\tcandidate.cWidth = pf.calcListLength( sizesattr || \"100vw\" );\n\t\t\tcandidate.res = candidate.w / candidate.cWidth ;\n\t\t} else {\n\t\t\tcandidate.res = candidate.d;\n\t\t}\n\t\treturn candidate;\n\t};\n\n\t/**\n\t *\n\t * @param opt\n\t */\n\tvar picturefill = function( opt ) {\n\n\t\tif (!isSupportTestReady) {return;}\n\n\t\tvar elements, i, plen;\n\n\t\tvar options = opt || {};\n\n\t\tif ( options.elements && options.elements.nodeType === 1 ) {\n\t\t\tif ( options.elements.nodeName.toUpperCase() === \"IMG\" ) {\n\t\t\t\toptions.elements =  [ options.elements ];\n\t\t\t} else {\n\t\t\t\toptions.context = options.elements;\n\t\t\t\toptions.elements =  null;\n\t\t\t}\n\t\t}\n\n\t\telements = options.elements || pf.qsa( (options.context || document), ( options.reevaluate || options.reselect ) ? pf.sel : pf.selShort );\n\n\t\tif ( (plen = elements.length) ) {\n\n\t\t\tpf.setupRun( options );\n\t\t\talreadyRun = true;\n\n\t\t\t// Loop through all elements\n\t\t\tfor ( i = 0; i < plen; i++ ) {\n\t\t\t\tpf.fillImg(elements[ i ], options);\n\t\t\t}\n\n\t\t\tpf.teardownRun( options );\n\t\t}\n\t};\n\n\t/**\n\t * outputs a warning for the developer\n\t * @param {message}\n\t * @type {Function}\n\t */\n\twarn = ( window.console && console.warn ) ?\n\t\tfunction( message ) {\n\t\t\tconsole.warn( message );\n\t\t} :\n\t\tnoop\n\t;\n\n\tif ( !(curSrcProp in image) ) {\n\t\tcurSrcProp = \"src\";\n\t}\n\n\t// Add support for standard mime types.\n\ttypes[ \"image/jpeg\" ] = true;\n\ttypes[ \"image/gif\" ] = true;\n\ttypes[ \"image/png\" ] = true;\n\n\tfunction detectTypeSupport( type, typeUri ) {\n\t\t// based on Modernizr's lossless img-webp test\n\t\t// note: asynchronous\n\t\tvar image = new window.Image();\n\t\timage.onerror = function() {\n\t\t\ttypes[ type ] = false;\n\t\t\tpicturefill();\n\t\t};\n\t\timage.onload = function() {\n\t\t\ttypes[ type ] = image.width === 1;\n\t\t\tpicturefill();\n\t\t};\n\t\timage.src = typeUri;\n\t\treturn \"pending\";\n\t}\n\n\t// test svg support\n\ttypes[ \"image/svg+xml\" ] = document.implementation.hasFeature( \"http://www.w3.org/TR/SVG11/feature#Image\", \"1.1\" );\n\n\t/**\n\t * updates the internal vW property with the current viewport width in px\n\t */\n\tfunction updateMetrics() {\n\n\t\tisVwDirty = false;\n\t\tDPR = window.devicePixelRatio;\n\t\tcssCache = {};\n\t\tsizeLengthCache = {};\n\n\t\tpf.DPR = DPR || 1;\n\n\t\tunits.width = Math.max(window.innerWidth || 0, docElem.clientWidth);\n\t\tunits.height = Math.max(window.innerHeight || 0, docElem.clientHeight);\n\n\t\tunits.vw = units.width / 100;\n\t\tunits.vh = units.height / 100;\n\n\t\tevalId = [ units.height, units.width, DPR ].join(\"-\");\n\n\t\tunits.em = pf.getEmValue();\n\t\tunits.rem = units.em;\n\t}\n\n\tfunction chooseLowRes( lowerValue, higherValue, dprValue, isCached ) {\n\t\tvar bonusFactor, tooMuch, bonus, meanDensity;\n\n\t\t//experimental\n\t\tif (cfg.algorithm === \"saveData\" ){\n\t\t\tif ( lowerValue > 2.7 ) {\n\t\t\t\tmeanDensity = dprValue + 1;\n\t\t\t} else {\n\t\t\t\ttooMuch = higherValue - dprValue;\n\t\t\t\tbonusFactor = Math.pow(lowerValue - 0.6, 1.5);\n\n\t\t\t\tbonus = tooMuch * bonusFactor;\n\n\t\t\t\tif (isCached) {\n\t\t\t\t\tbonus += 0.1 * bonusFactor;\n\t\t\t\t}\n\n\t\t\t\tmeanDensity = lowerValue + bonus;\n\t\t\t}\n\t\t} else {\n\t\t\tmeanDensity = (dprValue > 1) ?\n\t\t\t\tMath.sqrt(lowerValue * higherValue) :\n\t\t\t\tlowerValue;\n\t\t}\n\n\t\treturn meanDensity > dprValue;\n\t}\n\n\tfunction applyBestCandidate( img ) {\n\t\tvar srcSetCandidates;\n\t\tvar matchingSet = pf.getSet( img );\n\t\tvar evaluated = false;\n\t\tif ( matchingSet !== \"pending\" ) {\n\t\t\tevaluated = evalId;\n\t\t\tif ( matchingSet ) {\n\t\t\t\tsrcSetCandidates = pf.setRes( matchingSet );\n\t\t\t\tpf.applySetCandidate( srcSetCandidates, img );\n\t\t\t}\n\t\t}\n\t\timg[ pf.ns ].evaled = evaluated;\n\t}\n\n\tfunction ascendingSort( a, b ) {\n\t\treturn a.res - b.res;\n\t}\n\n\tfunction setSrcToCur( img, src, set ) {\n\t\tvar candidate;\n\t\tif ( !set && src ) {\n\t\t\tset = img[ pf.ns ].sets;\n\t\t\tset = set && set[set.length - 1];\n\t\t}\n\n\t\tcandidate = getCandidateForSrc(src, set);\n\n\t\tif ( candidate ) {\n\t\t\tsrc = pf.makeUrl(src);\n\t\t\timg[ pf.ns ].curSrc = src;\n\t\t\timg[ pf.ns ].curCan = candidate;\n\n\t\t\tif ( !candidate.res ) {\n\t\t\t\tsetResolution( candidate, candidate.set.sizes );\n\t\t\t}\n\t\t}\n\t\treturn candidate;\n\t}\n\n\tfunction getCandidateForSrc( src, set ) {\n\t\tvar i, candidate, candidates;\n\t\tif ( src && set ) {\n\t\t\tcandidates = pf.parseSet( set );\n\t\t\tsrc = pf.makeUrl(src);\n\t\t\tfor ( i = 0; i < candidates.length; i++ ) {\n\t\t\t\tif ( src === pf.makeUrl(candidates[ i ].url) ) {\n\t\t\t\t\tcandidate = candidates[ i ];\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn candidate;\n\t}\n\n\tfunction getAllSourceElements( picture, candidates ) {\n\t\tvar i, len, source, srcset;\n\n\t\t// SPEC mismatch intended for size and perf:\n\t\t// actually only source elements preceding the img should be used\n\t\t// also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector\n\t\tvar sources = picture.getElementsByTagName( \"source\" );\n\n\t\tfor ( i = 0, len = sources.length; i < len; i++ ) {\n\t\t\tsource = sources[ i ];\n\t\t\tsource[ pf.ns ] = true;\n\t\t\tsrcset = source.getAttribute( \"srcset\" );\n\n\t\t\t// if source does not have a srcset attribute, skip\n\t\t\tif ( srcset ) {\n\t\t\t\tcandidates.push( {\n\t\t\t\t\tsrcset: srcset,\n\t\t\t\t\tmedia: source.getAttribute( \"media\" ),\n\t\t\t\t\ttype: source.getAttribute( \"type\" ),\n\t\t\t\t\tsizes: source.getAttribute( \"sizes\" )\n\t\t\t\t} );\n\t\t\t}\n\t\t}\n\t}\n\n\t/**\n\t * Srcset Parser\n\t * By Alex Bell |  MIT License\n\t *\n\t * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]\n\t *\n\t * Based super duper closely on the reference algorithm at:\n\t * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute\n\t */\n\n\t// 1. Let input be the value passed to this algorithm.\n\t// (TO-DO : Explain what \"set\" argument is here. Maybe choose a more\n\t// descriptive & more searchable name.  Since passing the \"set\" in really has\n\t// nothing to do with parsing proper, I would prefer this assignment eventually\n\t// go in an external fn.)\n\tfunction parseSrcset(input, set) {\n\n\t\tfunction collectCharacters(regEx) {\n\t\t\tvar chars,\n\t\t\t    match = regEx.exec(input.substring(pos));\n\t\t\tif (match) {\n\t\t\t\tchars = match[ 0 ];\n\t\t\t\tpos += chars.length;\n\t\t\t\treturn chars;\n\t\t\t}\n\t\t}\n\n\t\tvar inputLength = input.length,\n\t\t    url,\n\t\t    descriptors,\n\t\t    currentDescriptor,\n\t\t    state,\n\t\t    c,\n\n\t\t    // 2. Let position be a pointer into input, initially pointing at the start\n\t\t    //    of the string.\n\t\t    pos = 0,\n\n\t\t    // 3. Let candidates be an initially empty source set.\n\t\t    candidates = [];\n\n\t\t/**\n\t\t* Adds descriptor properties to a candidate, pushes to the candidates array\n\t\t* @return undefined\n\t\t*/\n\t\t// (Declared outside of the while loop so that it's only created once.\n\t\t// (This fn is defined before it is used, in order to pass JSHINT.\n\t\t// Unfortunately this breaks the sequencing of the spec comments. :/ )\n\t\tfunction parseDescriptors() {\n\n\t\t\t// 9. Descriptor parser: Let error be no.\n\t\t\tvar pError = false,\n\n\t\t\t// 10. Let width be absent.\n\t\t\t// 11. Let density be absent.\n\t\t\t// 12. Let future-compat-h be absent. (We're implementing it now as h)\n\t\t\t    w, d, h, i,\n\t\t\t    candidate = {},\n\t\t\t    desc, lastChar, value, intVal, floatVal;\n\n\t\t\t// 13. For each descriptor in descriptors, run the appropriate set of steps\n\t\t\t// from the following list:\n\t\t\tfor (i = 0 ; i < descriptors.length; i++) {\n\t\t\t\tdesc = descriptors[ i ];\n\n\t\t\t\tlastChar = desc[ desc.length - 1 ];\n\t\t\t\tvalue = desc.substring(0, desc.length - 1);\n\t\t\t\tintVal = parseInt(value, 10);\n\t\t\t\tfloatVal = parseFloat(value);\n\n\t\t\t\t// If the descriptor consists of a valid non-negative integer followed by\n\t\t\t\t// a U+0077 LATIN SMALL LETTER W character\n\t\t\t\tif (regexNonNegativeInteger.test(value) && (lastChar === \"w\")) {\n\n\t\t\t\t\t// If width and density are not both absent, then let error be yes.\n\t\t\t\t\tif (w || d) {pError = true;}\n\n\t\t\t\t\t// Apply the rules for parsing non-negative integers to the descriptor.\n\t\t\t\t\t// If the result is zero, let error be yes.\n\t\t\t\t\t// Otherwise, let width be the result.\n\t\t\t\t\tif (intVal === 0) {pError = true;} else {w = intVal;}\n\n\t\t\t\t// If the descriptor consists of a valid floating-point number followed by\n\t\t\t\t// a U+0078 LATIN SMALL LETTER X character\n\t\t\t\t} else if (regexFloatingPoint.test(value) && (lastChar === \"x\")) {\n\n\t\t\t\t\t// If width, density and future-compat-h are not all absent, then let error\n\t\t\t\t\t// be yes.\n\t\t\t\t\tif (w || d || h) {pError = true;}\n\n\t\t\t\t\t// Apply the rules for parsing floating-point number values to the descriptor.\n\t\t\t\t\t// If the result is less than zero, let error be yes. Otherwise, let density\n\t\t\t\t\t// be the result.\n\t\t\t\t\tif (floatVal < 0) {pError = true;} else {d = floatVal;}\n\n\t\t\t\t// If the descriptor consists of a valid non-negative integer followed by\n\t\t\t\t// a U+0068 LATIN SMALL LETTER H character\n\t\t\t\t} else if (regexNonNegativeInteger.test(value) && (lastChar === \"h\")) {\n\n\t\t\t\t\t// If height and density are not both absent, then let error be yes.\n\t\t\t\t\tif (h || d) {pError = true;}\n\n\t\t\t\t\t// Apply the rules for parsing non-negative integers to the descriptor.\n\t\t\t\t\t// If the result is zero, let error be yes. Otherwise, let future-compat-h\n\t\t\t\t\t// be the result.\n\t\t\t\t\tif (intVal === 0) {pError = true;} else {h = intVal;}\n\n\t\t\t\t// Anything else, Let error be yes.\n\t\t\t\t} else {pError = true;}\n\t\t\t} // (close step 13 for loop)\n\n\t\t\t// 15. If error is still no, then append a new image source to candidates whose\n\t\t\t// URL is url, associated with a width width if not absent and a pixel\n\t\t\t// density density if not absent. Otherwise, there is a parse error.\n\t\t\tif (!pError) {\n\t\t\t\tcandidate.url = url;\n\n\t\t\t\tif (w) { candidate.w = w;}\n\t\t\t\tif (d) { candidate.d = d;}\n\t\t\t\tif (h) { candidate.h = h;}\n\t\t\t\tif (!h && !d && !w) {candidate.d = 1;}\n\t\t\t\tif (candidate.d === 1) {set.has1x = true;}\n\t\t\t\tcandidate.set = set;\n\n\t\t\t\tcandidates.push(candidate);\n\t\t\t}\n\t\t} // (close parseDescriptors fn)\n\n\t\t/**\n\t\t* Tokenizes descriptor properties prior to parsing\n\t\t* Returns undefined.\n\t\t* (Again, this fn is defined before it is used, in order to pass JSHINT.\n\t\t* Unfortunately this breaks the logical sequencing of the spec comments. :/ )\n\t\t*/\n\t\tfunction tokenize() {\n\n\t\t\t// 8.1. Descriptor tokeniser: Skip whitespace\n\t\t\tcollectCharacters(regexLeadingSpaces);\n\n\t\t\t// 8.2. Let current descriptor be the empty string.\n\t\t\tcurrentDescriptor = \"\";\n\n\t\t\t// 8.3. Let state be in descriptor.\n\t\t\tstate = \"in descriptor\";\n\n\t\t\twhile (true) {\n\n\t\t\t\t// 8.4. Let c be the character at position.\n\t\t\t\tc = input.charAt(pos);\n\n\t\t\t\t//  Do the following depending on the value of state.\n\t\t\t\t//  For the purpose of this step, \"EOF\" is a special character representing\n\t\t\t\t//  that position is past the end of input.\n\n\t\t\t\t// In descriptor\n\t\t\t\tif (state === \"in descriptor\") {\n\t\t\t\t\t// Do the following, depending on the value of c:\n\n\t\t\t\t  // Space character\n\t\t\t\t  // If current descriptor is not empty, append current descriptor to\n\t\t\t\t  // descriptors and let current descriptor be the empty string.\n\t\t\t\t  // Set state to after descriptor.\n\t\t\t\t\tif (isSpace(c)) {\n\t\t\t\t\t\tif (currentDescriptor) {\n\t\t\t\t\t\t\tdescriptors.push(currentDescriptor);\n\t\t\t\t\t\t\tcurrentDescriptor = \"\";\n\t\t\t\t\t\t\tstate = \"after descriptor\";\n\t\t\t\t\t\t}\n\n\t\t\t\t\t// U+002C COMMA (,)\n\t\t\t\t\t// Advance position to the next character in input. If current descriptor\n\t\t\t\t\t// is not empty, append current descriptor to descriptors. Jump to the step\n\t\t\t\t\t// labeled descriptor parser.\n\t\t\t\t\t} else if (c === \",\") {\n\t\t\t\t\t\tpos += 1;\n\t\t\t\t\t\tif (currentDescriptor) {\n\t\t\t\t\t\t\tdescriptors.push(currentDescriptor);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tparseDescriptors();\n\t\t\t\t\t\treturn;\n\n\t\t\t\t\t// U+0028 LEFT PARENTHESIS (()\n\t\t\t\t\t// Append c to current descriptor. Set state to in parens.\n\t\t\t\t\t} else if (c === \"\\u0028\") {\n\t\t\t\t\t\tcurrentDescriptor = currentDescriptor + c;\n\t\t\t\t\t\tstate = \"in parens\";\n\n\t\t\t\t\t// EOF\n\t\t\t\t\t// If current descriptor is not empty, append current descriptor to\n\t\t\t\t\t// descriptors. Jump to the step labeled descriptor parser.\n\t\t\t\t\t} else if (c === \"\") {\n\t\t\t\t\t\tif (currentDescriptor) {\n\t\t\t\t\t\t\tdescriptors.push(currentDescriptor);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tparseDescriptors();\n\t\t\t\t\t\treturn;\n\n\t\t\t\t\t// Anything else\n\t\t\t\t\t// Append c to current descriptor.\n\t\t\t\t\t} else {\n\t\t\t\t\t\tcurrentDescriptor = currentDescriptor + c;\n\t\t\t\t\t}\n\t\t\t\t// (end \"in descriptor\"\n\n\t\t\t\t// In parens\n\t\t\t\t} else if (state === \"in parens\") {\n\n\t\t\t\t\t// U+0029 RIGHT PARENTHESIS ())\n\t\t\t\t\t// Append c to current descriptor. Set state to in descriptor.\n\t\t\t\t\tif (c === \")\") {\n\t\t\t\t\t\tcurrentDescriptor = currentDescriptor + c;\n\t\t\t\t\t\tstate = \"in descriptor\";\n\n\t\t\t\t\t// EOF\n\t\t\t\t\t// Append current descriptor to descriptors. Jump to the step labeled\n\t\t\t\t\t// descriptor parser.\n\t\t\t\t\t} else if (c === \"\") {\n\t\t\t\t\t\tdescriptors.push(currentDescriptor);\n\t\t\t\t\t\tparseDescriptors();\n\t\t\t\t\t\treturn;\n\n\t\t\t\t\t// Anything else\n\t\t\t\t\t// Append c to current descriptor.\n\t\t\t\t\t} else {\n\t\t\t\t\t\tcurrentDescriptor = currentDescriptor + c;\n\t\t\t\t\t}\n\n\t\t\t\t// After descriptor\n\t\t\t\t} else if (state === \"after descriptor\") {\n\n\t\t\t\t\t// Do the following, depending on the value of c:\n\t\t\t\t\t// Space character: Stay in this state.\n\t\t\t\t\tif (isSpace(c)) {\n\n\t\t\t\t\t// EOF: Jump to the step labeled descriptor parser.\n\t\t\t\t\t} else if (c === \"\") {\n\t\t\t\t\t\tparseDescriptors();\n\t\t\t\t\t\treturn;\n\n\t\t\t\t\t// Anything else\n\t\t\t\t\t// Set state to in descriptor. Set position to the previous character in input.\n\t\t\t\t\t} else {\n\t\t\t\t\t\tstate = \"in descriptor\";\n\t\t\t\t\t\tpos -= 1;\n\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// Advance position to the next character in input.\n\t\t\t\tpos += 1;\n\n\t\t\t// Repeat this step.\n\t\t\t} // (close while true loop)\n\t\t}\n\n\t\t// 4. Splitting loop: Collect a sequence of characters that are space\n\t\t//    characters or U+002C COMMA characters. If any U+002C COMMA characters\n\t\t//    were collected, that is a parse error.\n\t\twhile (true) {\n\t\t\tcollectCharacters(regexLeadingCommasOrSpaces);\n\n\t\t\t// 5. If position is past the end of input, return candidates and abort these steps.\n\t\t\tif (pos >= inputLength) {\n\t\t\t\treturn candidates; // (we're done, this is the sole return path)\n\t\t\t}\n\n\t\t\t// 6. Collect a sequence of characters that are not space characters,\n\t\t\t//    and let that be url.\n\t\t\turl = collectCharacters(regexLeadingNotSpaces);\n\n\t\t\t// 7. Let descriptors be a new empty list.\n\t\t\tdescriptors = [];\n\n\t\t\t// 8. If url ends with a U+002C COMMA character (,), follow these substeps:\n\t\t\t//\t\t(1). Remove all trailing U+002C COMMA characters from url. If this removed\n\t\t\t//         more than one character, that is a parse error.\n\t\t\tif (url.slice(-1) === \",\") {\n\t\t\t\turl = url.replace(regexTrailingCommas, \"\");\n\t\t\t\t// (Jump ahead to step 9 to skip tokenization and just push the candidate).\n\t\t\t\tparseDescriptors();\n\n\t\t\t//\tOtherwise, follow these substeps:\n\t\t\t} else {\n\t\t\t\ttokenize();\n\t\t\t} // (close else of step 8)\n\n\t\t// 16. Return to the step labeled splitting loop.\n\t\t} // (Close of big while loop.)\n\t}\n\n\t/*\n\t * Sizes Parser\n\t *\n\t * By Alex Bell |  MIT License\n\t *\n\t * Non-strict but accurate and lightweight JS Parser for the string value <img sizes=\"here\">\n\t *\n\t * Reference algorithm at:\n\t * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute\n\t *\n\t * Most comments are copied in directly from the spec\n\t * (except for comments in parens).\n\t *\n\t * Grammar is:\n\t * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>\n\t * <source-size> = <media-condition> <source-size-value>\n\t * <source-size-value> = <length>\n\t * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes\n\t *\n\t * E.g. \"(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw\"\n\t * or \"(min-width: 30em), calc(30vw - 15px)\" or just \"30vw\"\n\t *\n\t * Returns the first valid <css-length> with a media condition that evaluates to true,\n\t * or \"100vw\" if all valid media conditions evaluate to false.\n\t *\n\t */\n\n\tfunction parseSizes(strValue) {\n\n\t\t// (Percentage CSS lengths are not allowed in this case, to avoid confusion:\n\t\t// https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list\n\t\t// CSS allows a single optional plus or minus sign:\n\t\t// http://www.w3.org/TR/CSS2/syndata.html#numbers\n\t\t// CSS is ASCII case-insensitive:\n\t\t// http://www.w3.org/TR/CSS2/syndata.html#characters )\n\t\t// Spec allows exponential notation for <number> type:\n\t\t// http://dev.w3.org/csswg/css-values/#numbers\n\t\tvar regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;\n\n\t\t// (This is a quick and lenient test. Because of optional unlimited-depth internal\n\t\t// grouping parens and strict spacing rules, this could get very complicated.)\n\t\tvar regexCssCalc = /^calc\\((?:[0-9a-z \\.\\+\\-\\*\\/\\(\\)]+)\\)$/i;\n\n\t\tvar i;\n\t\tvar unparsedSizesList;\n\t\tvar unparsedSizesListLength;\n\t\tvar unparsedSize;\n\t\tvar lastComponentValue;\n\t\tvar size;\n\n\t\t// UTILITY FUNCTIONS\n\n\t\t//  (Toy CSS parser. The goals here are:\n\t\t//  1) expansive test coverage without the weight of a full CSS parser.\n\t\t//  2) Avoiding regex wherever convenient.\n\t\t//  Quick tests: http://jsfiddle.net/gtntL4gr/3/\n\t\t//  Returns an array of arrays.)\n\t\tfunction parseComponentValues(str) {\n\t\t\tvar chrctr;\n\t\t\tvar component = \"\";\n\t\t\tvar componentArray = [];\n\t\t\tvar listArray = [];\n\t\t\tvar parenDepth = 0;\n\t\t\tvar pos = 0;\n\t\t\tvar inComment = false;\n\n\t\t\tfunction pushComponent() {\n\t\t\t\tif (component) {\n\t\t\t\t\tcomponentArray.push(component);\n\t\t\t\t\tcomponent = \"\";\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tfunction pushComponentArray() {\n\t\t\t\tif (componentArray[0]) {\n\t\t\t\t\tlistArray.push(componentArray);\n\t\t\t\t\tcomponentArray = [];\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t// (Loop forwards from the beginning of the string.)\n\t\t\twhile (true) {\n\t\t\t\tchrctr = str.charAt(pos);\n\n\t\t\t\tif (chrctr === \"\") { // ( End of string reached.)\n\t\t\t\t\tpushComponent();\n\t\t\t\t\tpushComponentArray();\n\t\t\t\t\treturn listArray;\n\t\t\t\t} else if (inComment) {\n\t\t\t\t\tif ((chrctr === \"*\") && (str[pos + 1] === \"/\")) { // (At end of a comment.)\n\t\t\t\t\t\tinComment = false;\n\t\t\t\t\t\tpos += 2;\n\t\t\t\t\t\tpushComponent();\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tpos += 1; // (Skip all characters inside comments.)\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\t\t\t\t} else if (isSpace(chrctr)) {\n\t\t\t\t\t// (If previous character in loop was also a space, or if\n\t\t\t\t\t// at the beginning of the string, do not add space char to\n\t\t\t\t\t// component.)\n\t\t\t\t\tif ( (str.charAt(pos - 1) && isSpace( str.charAt(pos - 1) ) ) || !component ) {\n\t\t\t\t\t\tpos += 1;\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t} else if (parenDepth === 0) {\n\t\t\t\t\t\tpushComponent();\n\t\t\t\t\t\tpos +=1;\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// (Replace any space character with a plain space for legibility.)\n\t\t\t\t\t\tchrctr = \" \";\n\t\t\t\t\t}\n\t\t\t\t} else if (chrctr === \"(\") {\n\t\t\t\t\tparenDepth += 1;\n\t\t\t\t} else if (chrctr === \")\") {\n\t\t\t\t\tparenDepth -= 1;\n\t\t\t\t} else if (chrctr === \",\") {\n\t\t\t\t\tpushComponent();\n\t\t\t\t\tpushComponentArray();\n\t\t\t\t\tpos += 1;\n\t\t\t\t\tcontinue;\n\t\t\t\t} else if ( (chrctr === \"/\") && (str.charAt(pos + 1) === \"*\") ) {\n\t\t\t\t\tinComment = true;\n\t\t\t\t\tpos += 2;\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\tcomponent = component + chrctr;\n\t\t\t\tpos += 1;\n\t\t\t}\n\t\t}\n\n\t\tfunction isValidNonNegativeSourceSizeValue(s) {\n\t\t\tif (regexCssLengthWithUnits.test(s) && (parseFloat(s) >= 0)) {return true;}\n\t\t\tif (regexCssCalc.test(s)) {return true;}\n\t\t\t// ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:\n\t\t\t// \"-0 is equivalent to 0 and is not a negative number.\" which means that\n\t\t\t// unitless zero and unitless negative zero must be accepted as special cases.)\n\t\t\tif ((s === \"0\") || (s === \"-0\") || (s === \"+0\")) {return true;}\n\t\t\treturn false;\n\t\t}\n\n\t\t// When asked to parse a sizes attribute from an element, parse a\n\t\t// comma-separated list of component values from the value of the element's\n\t\t// sizes attribute (or the empty string, if the attribute is absent), and let\n\t\t// unparsed sizes list be the result.\n\t\t// http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values\n\n\t\tunparsedSizesList = parseComponentValues(strValue);\n\t\tunparsedSizesListLength = unparsedSizesList.length;\n\n\t\t// For each unparsed size in unparsed sizes list:\n\t\tfor (i = 0; i < unparsedSizesListLength; i++) {\n\t\t\tunparsedSize = unparsedSizesList[i];\n\n\t\t\t// 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.\n\t\t\t// ( parseComponentValues() already omits spaces outside of parens. )\n\n\t\t\t// If unparsed size is now empty, that is a parse error; continue to the next\n\t\t\t// iteration of this algorithm.\n\t\t\t// ( parseComponentValues() won't push an empty array. )\n\n\t\t\t// 2. If the last component value in unparsed size is a valid non-negative\n\t\t\t// <source-size-value>, let size be its value and remove the component value\n\t\t\t// from unparsed size. Any CSS function other than the calc() function is\n\t\t\t// invalid. Otherwise, there is a parse error; continue to the next iteration\n\t\t\t// of this algorithm.\n\t\t\t// http://dev.w3.org/csswg/css-syntax/#parse-component-value\n\t\t\tlastComponentValue = unparsedSize[unparsedSize.length - 1];\n\n\t\t\tif (isValidNonNegativeSourceSizeValue(lastComponentValue)) {\n\t\t\t\tsize = lastComponentValue;\n\t\t\t\tunparsedSize.pop();\n\t\t\t} else {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\t// 3. Remove all consecutive <whitespace-token>s from the end of unparsed\n\t\t\t// size. If unparsed size is now empty, return size and exit this algorithm.\n\t\t\t// If this was not the last item in unparsed sizes list, that is a parse error.\n\t\t\tif (unparsedSize.length === 0) {\n\t\t\t\treturn size;\n\t\t\t}\n\n\t\t\t// 4. Parse the remaining component values in unparsed size as a\n\t\t\t// <media-condition>. If it does not parse correctly, or it does parse\n\t\t\t// correctly but the <media-condition> evaluates to false, continue to the\n\t\t\t// next iteration of this algorithm.\n\t\t\t// (Parsing all possible compound media conditions in JS is heavy, complicated,\n\t\t\t// and the payoff is unclear. Is there ever an situation where the\n\t\t\t// media condition parses incorrectly but still somehow evaluates to true?\n\t\t\t// Can we just rely on the browser/polyfill to do it?)\n\t\t\tunparsedSize = unparsedSize.join(\" \");\n\t\t\tif (!(pf.matchesMedia( unparsedSize ) ) ) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\t// 5. Return size and exit this algorithm.\n\t\t\treturn size;\n\t\t}\n\n\t\t// If the above algorithm exhausts unparsed sizes list without returning a\n\t\t// size value, return 100vw.\n\t\treturn \"100vw\";\n\t}\n\n\t// namespace\n\tpf.ns = (\"pf\" + new Date().getTime()).substr(0, 9);\n\n\t// srcset support test\n\tpf.supSrcset = \"srcset\" in image;\n\tpf.supSizes = \"sizes\" in image;\n\tpf.supPicture = !!window.HTMLPictureElement;\n\n\t// UC browser does claim to support srcset and picture, but not sizes,\n\t// this extended test reveals the browser does support nothing\n\tif (pf.supSrcset && pf.supPicture && !pf.supSizes) {\n\t\t(function(image2) {\n\t\t\timage.srcset = \"data:,a\";\n\t\t\timage2.src = \"data:,a\";\n\t\t\tpf.supSrcset = image.complete === image2.complete;\n\t\t\tpf.supPicture = pf.supSrcset && pf.supPicture;\n\t\t})(document.createElement(\"img\"));\n\t}\n\n\t// Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute\n\tif (pf.supSrcset && !pf.supSizes) {\n\n\t\t(function() {\n\t\t\tvar width2 = \"data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==\";\n\t\t\tvar width1 = \"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==\";\n\t\t\tvar img = document.createElement(\"img\");\n\t\t\tvar test = function() {\n\t\t\t\tvar width = img.width;\n\n\t\t\t\tif (width === 2) {\n\t\t\t\t\tpf.supSizes = true;\n\t\t\t\t}\n\n\t\t\t\talwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;\n\n\t\t\t\tisSupportTestReady = true;\n\t\t\t\t// force async\n\t\t\t\tsetTimeout(picturefill);\n\t\t\t};\n\n\t\t\timg.onload = test;\n\t\t\timg.onerror = test;\n\t\t\timg.setAttribute(\"sizes\", \"9px\");\n\n\t\t\timg.srcset = width1 + \" 1w,\" + width2 + \" 9w\";\n\t\t\timg.src = width1;\n\t\t})();\n\n\t} else {\n\t\tisSupportTestReady = true;\n\t}\n\n\t// using pf.qsa instead of dom traversing does scale much better,\n\t// especially on sites mixing responsive and non-responsive images\n\tpf.selShort = \"picture>img,img[srcset]\";\n\tpf.sel = pf.selShort;\n\tpf.cfg = cfg;\n\n\t/**\n\t * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )\n\t */\n\tpf.DPR = (DPR  || 1 );\n\tpf.u = units;\n\n\t// container of supported mime types that one might need to qualify before using\n\tpf.types =  types;\n\n\tpf.setSize = noop;\n\n\t/**\n\t * Gets a string and returns the absolute URL\n\t * @param src\n\t * @returns {String} absolute URL\n\t */\n\n\tpf.makeUrl = memoize(function(src) {\n\t\tanchor.href = src;\n\t\treturn anchor.href;\n\t});\n\n\t/**\n\t * Gets a DOM element or document and a selctor and returns the found matches\n\t * Can be extended with jQuery/Sizzle for IE7 support\n\t * @param context\n\t * @param sel\n\t * @returns {NodeList|Array}\n\t */\n\tpf.qsa = function(context, sel) {\n\t\treturn ( \"querySelector\" in context ) ? context.querySelectorAll(sel) : [];\n\t};\n\n\t/**\n\t * Shortcut method for matchMedia ( for easy overriding in tests )\n\t * wether native or pf.mMQ is used will be decided lazy on first call\n\t * @returns {boolean}\n\t */\n\tpf.matchesMedia = function() {\n\t\tif ( window.matchMedia && (matchMedia( \"(min-width: 0.1em)\" ) || {}).matches ) {\n\t\t\tpf.matchesMedia = function( media ) {\n\t\t\t\treturn !media || ( matchMedia( media ).matches );\n\t\t\t};\n\t\t} else {\n\t\t\tpf.matchesMedia = pf.mMQ;\n\t\t}\n\n\t\treturn pf.matchesMedia.apply( this, arguments );\n\t};\n\n\t/**\n\t * A simplified matchMedia implementation for IE8 and IE9\n\t * handles only min-width/max-width with px or em values\n\t * @param media\n\t * @returns {boolean}\n\t */\n\tpf.mMQ = function( media ) {\n\t\treturn media ? evalCSS(media) : true;\n\t};\n\n\t/**\n\t * Returns the calculated length in css pixel from the given sourceSizeValue\n\t * http://dev.w3.org/csswg/css-values-3/#length-value\n\t * intended Spec mismatches:\n\t * * Does not check for invalid use of CSS functions\n\t * * Does handle a computed length of 0 the same as a negative and therefore invalid value\n\t * @param sourceSizeValue\n\t * @returns {Number}\n\t */\n\tpf.calcLength = function( sourceSizeValue ) {\n\n\t\tvar value = evalCSS(sourceSizeValue, true) || false;\n\t\tif (value < 0) {\n\t\t\tvalue = false;\n\t\t}\n\n\t\treturn value;\n\t};\n\n\t/**\n\t * Takes a type string and checks if its supported\n\t */\n\n\tpf.supportsType = function( type ) {\n\t\treturn ( type ) ? types[ type ] : true;\n\t};\n\n\t/**\n\t * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)\n\t * @param sourceSizeStr\n\t * @returns {*}\n\t */\n\tpf.parseSize = memoize(function( sourceSizeStr ) {\n\t\tvar match = ( sourceSizeStr || \"\" ).match(regSize);\n\t\treturn {\n\t\t\tmedia: match && match[1],\n\t\t\tlength: match && match[2]\n\t\t};\n\t});\n\n\tpf.parseSet = function( set ) {\n\t\tif ( !set.cands ) {\n\t\t\tset.cands = parseSrcset(set.srcset, set);\n\t\t}\n\t\treturn set.cands;\n\t};\n\n\t/**\n\t * returns 1em in css px for html/body default size\n\t * function taken from respondjs\n\t * @returns {*|number}\n\t */\n\tpf.getEmValue = function() {\n\t\tvar body;\n\t\tif ( !eminpx && (body = document.body) ) {\n\t\t\tvar div = document.createElement( \"div\" ),\n\t\t\t\toriginalHTMLCSS = docElem.style.cssText,\n\t\t\t\toriginalBodyCSS = body.style.cssText;\n\n\t\t\tdiv.style.cssText = baseStyle;\n\n\t\t\t// 1em in a media query is the value of the default font size of the browser\n\t\t\t// reset docElem and body to ensure the correct value is returned\n\t\t\tdocElem.style.cssText = fsCss;\n\t\t\tbody.style.cssText = fsCss;\n\n\t\t\tbody.appendChild( div );\n\t\t\teminpx = div.offsetWidth;\n\t\t\tbody.removeChild( div );\n\n\t\t\t//also update eminpx before returning\n\t\t\teminpx = parseFloat( eminpx, 10 );\n\n\t\t\t// restore the original values\n\t\t\tdocElem.style.cssText = originalHTMLCSS;\n\t\t\tbody.style.cssText = originalBodyCSS;\n\n\t\t}\n\t\treturn eminpx || 16;\n\t};\n\n\t/**\n\t * Takes a string of sizes and returns the width in pixels as a number\n\t */\n\tpf.calcListLength = function( sourceSizeListStr ) {\n\t\t// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%\n\t\t//\n\t\t//                           or (min-width:30em) calc(30% - 15px)\n\t\tif ( !(sourceSizeListStr in sizeLengthCache) || cfg.uT ) {\n\t\t\tvar winningLength = pf.calcLength( parseSizes( sourceSizeListStr ) );\n\n\t\t\tsizeLengthCache[ sourceSizeListStr ] = !winningLength ? units.width : winningLength;\n\t\t}\n\n\t\treturn sizeLengthCache[ sourceSizeListStr ];\n\t};\n\n\t/**\n\t * Takes a candidate object with a srcset property in the form of url/\n\t * ex. \"images/pic-medium.png 1x, images/pic-medium-2x.png 2x\" or\n\t *     \"images/pic-medium.png 400w, images/pic-medium-2x.png 800w\" or\n\t *     \"images/pic-small.png\"\n\t * Get an array of image candidates in the form of\n\t *      {url: \"/foo/bar.png\", resolution: 1}\n\t * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value\n\t * If sizes is specified, res is calculated\n\t */\n\tpf.setRes = function( set ) {\n\t\tvar candidates;\n\t\tif ( set ) {\n\n\t\t\tcandidates = pf.parseSet( set );\n\n\t\t\tfor ( var i = 0, len = candidates.length; i < len; i++ ) {\n\t\t\t\tsetResolution( candidates[ i ], set.sizes );\n\t\t\t}\n\t\t}\n\t\treturn candidates;\n\t};\n\n\tpf.setRes.res = setResolution;\n\n\tpf.applySetCandidate = function( candidates, img ) {\n\t\tif ( !candidates.length ) {return;}\n\t\tvar candidate,\n\t\t\ti,\n\t\t\tj,\n\t\t\tlength,\n\t\t\tbestCandidate,\n\t\t\tcurSrc,\n\t\t\tcurCan,\n\t\t\tcandidateSrc,\n\t\t\tabortCurSrc;\n\n\t\tvar imageData = img[ pf.ns ];\n\t\tvar dpr = pf.DPR;\n\n\t\tcurSrc = imageData.curSrc || img[curSrcProp];\n\n\t\tcurCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);\n\n\t\t// if we have a current source, we might either become lazy or give this source some advantage\n\t\tif ( curCan && curCan.set === candidates[ 0 ].set ) {\n\n\t\t\t// if browser can abort image request and the image has a higher pixel density than needed\n\t\t\t// and this image isn't downloaded yet, we skip next part and try to save bandwidth\n\t\t\tabortCurSrc = (supportAbort && !img.complete && curCan.res - 0.1 > dpr);\n\n\t\t\tif ( !abortCurSrc ) {\n\t\t\t\tcurCan.cached = true;\n\n\t\t\t\t// if current candidate is \"best\", \"better\" or \"okay\",\n\t\t\t\t// set it to bestCandidate\n\t\t\t\tif ( curCan.res >= dpr ) {\n\t\t\t\t\tbestCandidate = curCan;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif ( !bestCandidate ) {\n\n\t\t\tcandidates.sort( ascendingSort );\n\n\t\t\tlength = candidates.length;\n\t\t\tbestCandidate = candidates[ length - 1 ];\n\n\t\t\tfor ( i = 0; i < length; i++ ) {\n\t\t\t\tcandidate = candidates[ i ];\n\t\t\t\tif ( candidate.res >= dpr ) {\n\t\t\t\t\tj = i - 1;\n\n\t\t\t\t\t// we have found the perfect candidate,\n\t\t\t\t\t// but let's improve this a little bit with some assumptions ;-)\n\t\t\t\t\tif (candidates[ j ] &&\n\t\t\t\t\t\t(abortCurSrc || curSrc !== pf.makeUrl( candidate.url )) &&\n\t\t\t\t\t\tchooseLowRes(candidates[ j ].res, candidate.res, dpr, candidates[ j ].cached)) {\n\n\t\t\t\t\t\tbestCandidate = candidates[ j ];\n\n\t\t\t\t\t} else {\n\t\t\t\t\t\tbestCandidate = candidate;\n\t\t\t\t\t}\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif ( bestCandidate ) {\n\n\t\t\tcandidateSrc = pf.makeUrl( bestCandidate.url );\n\n\t\t\timageData.curSrc = candidateSrc;\n\t\t\timageData.curCan = bestCandidate;\n\n\t\t\tif ( candidateSrc !== curSrc ) {\n\t\t\t\tpf.setSrc( img, bestCandidate );\n\t\t\t}\n\t\t\tpf.setSize( img );\n\t\t}\n\t};\n\n\tpf.setSrc = function( img, bestCandidate ) {\n\t\tvar origWidth;\n\t\timg.src = bestCandidate.url;\n\n\t\t// although this is a specific Safari issue, we don't want to take too much different code paths\n\t\tif ( bestCandidate.set.type === \"image/svg+xml\" ) {\n\t\t\torigWidth = img.style.width;\n\t\t\timg.style.width = (img.offsetWidth + 1) + \"px\";\n\n\t\t\t// next line only should trigger a repaint\n\t\t\t// if... is only done to trick dead code removal\n\t\t\tif ( img.offsetWidth + 1 ) {\n\t\t\t\timg.style.width = origWidth;\n\t\t\t}\n\t\t}\n\t};\n\n\tpf.getSet = function( img ) {\n\t\tvar i, set, supportsType;\n\t\tvar match = false;\n\t\tvar sets = img [ pf.ns ].sets;\n\n\t\tfor ( i = 0; i < sets.length && !match; i++ ) {\n\t\t\tset = sets[i];\n\n\t\t\tif ( !set.srcset || !pf.matchesMedia( set.media ) || !(supportsType = pf.supportsType( set.type )) ) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\tif ( supportsType === \"pending\" ) {\n\t\t\t\tset = supportsType;\n\t\t\t}\n\n\t\t\tmatch = set;\n\t\t\tbreak;\n\t\t}\n\n\t\treturn match;\n\t};\n\n\tpf.parseSets = function( element, parent, options ) {\n\t\tvar srcsetAttribute, imageSet, isWDescripor, srcsetParsed;\n\n\t\tvar hasPicture = parent && parent.nodeName.toUpperCase() === \"PICTURE\";\n\t\tvar imageData = element[ pf.ns ];\n\n\t\tif ( imageData.src === undefined || options.src ) {\n\t\t\timageData.src = getImgAttr.call( element, \"src\" );\n\t\t\tif ( imageData.src ) {\n\t\t\t\tsetImgAttr.call( element, srcAttr, imageData.src );\n\t\t\t} else {\n\t\t\t\tremoveImgAttr.call( element, srcAttr );\n\t\t\t}\n\t\t}\n\n\t\tif ( imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset ) {\n\t\t\tsrcsetAttribute = getImgAttr.call( element, \"srcset\" );\n\t\t\timageData.srcset = srcsetAttribute;\n\t\t\tsrcsetParsed = true;\n\t\t}\n\n\t\timageData.sets = [];\n\n\t\tif ( hasPicture ) {\n\t\t\timageData.pic = true;\n\t\t\tgetAllSourceElements( parent, imageData.sets );\n\t\t}\n\n\t\tif ( imageData.srcset ) {\n\t\t\timageSet = {\n\t\t\t\tsrcset: imageData.srcset,\n\t\t\t\tsizes: getImgAttr.call( element, \"sizes\" )\n\t\t\t};\n\n\t\t\timageData.sets.push( imageSet );\n\n\t\t\tisWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || \"\");\n\n\t\t\t// add normal src as candidate, if source has no w descriptor\n\t\t\tif ( !isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x ) {\n\t\t\t\timageSet.srcset += \", \" + imageData.src;\n\t\t\t\timageSet.cands.push({\n\t\t\t\t\turl: imageData.src,\n\t\t\t\t\td: 1,\n\t\t\t\t\tset: imageSet\n\t\t\t\t});\n\t\t\t}\n\n\t\t} else if ( imageData.src ) {\n\t\t\timageData.sets.push( {\n\t\t\t\tsrcset: imageData.src,\n\t\t\t\tsizes: null\n\t\t\t} );\n\t\t}\n\n\t\timageData.curCan = null;\n\t\timageData.curSrc = undefined;\n\n\t\t// if img has picture or the srcset was removed or has a srcset and does not support srcset at all\n\t\t// or has a w descriptor (and does not support sizes) set support to false to evaluate\n\t\timageData.supported = !( hasPicture || ( imageSet && !pf.supSrcset ) || (isWDescripor && !pf.supSizes) );\n\n\t\tif ( srcsetParsed && pf.supSrcset && !imageData.supported ) {\n\t\t\tif ( srcsetAttribute ) {\n\t\t\t\tsetImgAttr.call( element, srcsetAttr, srcsetAttribute );\n\t\t\t\telement.srcset = \"\";\n\t\t\t} else {\n\t\t\t\tremoveImgAttr.call( element, srcsetAttr );\n\t\t\t}\n\t\t}\n\n\t\tif (imageData.supported && !imageData.srcset && ((!imageData.src && element.src) ||  element.src !== pf.makeUrl(imageData.src))) {\n\t\t\tif (imageData.src === null) {\n\t\t\t\telement.removeAttribute(\"src\");\n\t\t\t} else {\n\t\t\t\telement.src = imageData.src;\n\t\t\t}\n\t\t}\n\n\t\timageData.parsed = true;\n\t};\n\n\tpf.fillImg = function(element, options) {\n\t\tvar imageData;\n\t\tvar extreme = options.reselect || options.reevaluate;\n\n\t\t// expando for caching data on the img\n\t\tif ( !element[ pf.ns ] ) {\n\t\t\telement[ pf.ns ] = {};\n\t\t}\n\n\t\timageData = element[ pf.ns ];\n\n\t\t// if the element has already been evaluated, skip it\n\t\t// unless `options.reevaluate` is set to true ( this, for example,\n\t\t// is set to true when running `picturefill` on `resize` ).\n\t\tif ( !extreme && imageData.evaled === evalId ) {\n\t\t\treturn;\n\t\t}\n\n\t\tif ( !imageData.parsed || options.reevaluate ) {\n\t\t\tpf.parseSets( element, element.parentNode, options );\n\t\t}\n\n\t\tif ( !imageData.supported ) {\n\t\t\tapplyBestCandidate( element );\n\t\t} else {\n\t\t\timageData.evaled = evalId;\n\t\t}\n\t};\n\n\tpf.setupRun = function() {\n\t\tif ( !alreadyRun || isVwDirty || (DPR !== window.devicePixelRatio) ) {\n\t\t\tupdateMetrics();\n\t\t}\n\t};\n\n\t// If picture is supported, well, that's awesome.\n\tif ( pf.supPicture ) {\n\t\tpicturefill = noop;\n\t\tpf.fillImg = noop;\n\t} else {\n\n\t\t // Set up picture polyfill by polling the document\n\t\t(function() {\n\t\t\tvar isDomReady;\n\t\t\tvar regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;\n\n\t\t\tvar run = function() {\n\t\t\t\tvar readyState = document.readyState || \"\";\n\n\t\t\t\ttimerId = setTimeout(run, readyState === \"loading\" ? 200 :  999);\n\t\t\t\tif ( document.body ) {\n\t\t\t\t\tpf.fillImgs();\n\t\t\t\t\tisDomReady = isDomReady || regReady.test(readyState);\n\t\t\t\t\tif ( isDomReady ) {\n\t\t\t\t\t\tclearTimeout( timerId );\n\t\t\t\t\t}\n\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tvar timerId = setTimeout(run, document.body ? 9 : 99);\n\n\t\t\t// Also attach picturefill on resize and readystatechange\n\t\t\t// http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html\n\t\t\tvar debounce = function(func, wait) {\n\t\t\t\tvar timeout, timestamp;\n\t\t\t\tvar later = function() {\n\t\t\t\t\tvar last = (new Date()) - timestamp;\n\n\t\t\t\t\tif (last < wait) {\n\t\t\t\t\t\ttimeout = setTimeout(later, wait - last);\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttimeout = null;\n\t\t\t\t\t\tfunc();\n\t\t\t\t\t}\n\t\t\t\t};\n\n\t\t\t\treturn function() {\n\t\t\t\t\ttimestamp = new Date();\n\n\t\t\t\t\tif (!timeout) {\n\t\t\t\t\t\ttimeout = setTimeout(later, wait);\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t};\n\t\t\tvar lastClientWidth = docElem.clientHeight;\n\t\t\tvar onResize = function() {\n\t\t\t\tisVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;\n\t\t\t\tlastClientWidth = docElem.clientHeight;\n\t\t\t\tif ( isVwDirty ) {\n\t\t\t\t\tpf.fillImgs();\n\t\t\t\t}\n\t\t\t};\n\n\t\t\ton( window, \"resize\", debounce(onResize, 99 ) );\n\t\t\ton( document, \"readystatechange\", run );\n\t\t})();\n\t}\n\n\tpf.picturefill = picturefill;\n\t//use this internally for easy monkey patching/performance testing\n\tpf.fillImgs = picturefill;\n\tpf.teardownRun = noop;\n\n\t/* expose methods for testing */\n\tpicturefill._ = pf;\n\n\twindow.picturefillCFG = {\n\t\tpf: pf,\n\t\tpush: function(args) {\n\t\t\tvar name = args.shift();\n\t\t\tif (typeof pf[name] === \"function\") {\n\t\t\t\tpf[name].apply(pf, args);\n\t\t\t} else {\n\t\t\t\tcfg[name] = args[0];\n\t\t\t\tif (alreadyRun) {\n\t\t\t\t\tpf.fillImgs( { reselect: true } );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t};\n\n\twhile (setOptions && setOptions.length) {\n\t\twindow.picturefillCFG.push(setOptions.shift());\n\t}\n\n\t/* expose picturefill */\n\twindow.picturefill = picturefill;\n\n\t/* expose picturefill */\n\tif (  true && typeof module.exports === \"object\" ) {\n\t\t// CommonJS, just export\n\t\tmodule.exports = picturefill;\n\t} else if ( true ) {\n\t\t// AMD support\n\t\t!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return picturefill; }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t}\n\n\t// IE8 evals this sync, so it must be the last thing we do\n\tif ( !pf.supPicture ) {\n\t\ttypes[ \"image/webp\" ] = detectTypeSupport(\"image/webp\", \"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==\" );\n\t}\n\n} )( window, document );\n\n\n//# sourceURL=webpack:///./node_modules/picturefill/dist/picturefill.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ })

/******/ });