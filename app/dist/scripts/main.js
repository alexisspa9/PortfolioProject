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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/MobileMenu */ \"./app/assets/scripts/modules/MobileMenu.js\");\n/* harmony import */ var _modules_FooterDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/FooterDate */ \"./app/assets/scripts/modules/FooterDate.js\");\n/* harmony import */ var _modules_GoToTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/GoToTop */ \"./app/assets/scripts/modules/GoToTop.js\");\n/* harmony import */ var _modules_Projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Projects */ \"./app/assets/scripts/modules/Projects.js\");\n/* harmony import */ var _modules_ProjectModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ProjectModal */ \"./app/assets/scripts/modules/ProjectModal.js\");\n/* harmony import */ var _projects_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects.json */ \"./app/assets/scripts/projects.json\");\nvar _projects_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./projects.json */ \"./app/assets/scripts/projects.json\", 1);\n\n\n\n\n\n\nnew _modules_Projects__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_projects_json__WEBPACK_IMPORTED_MODULE_5__);\nnew _modules_ProjectModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_projects_json__WEBPACK_IMPORTED_MODULE_5__);\nnew _modules_FooterDate__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"date\");\nnew _modules_GoToTop__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"goToTop\");\nnew _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack:///./app/assets/scripts/App.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nclass ProjectModal {\n  constructor(project_list) {\n    this.project_list = project_list;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectModal);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/ProjectModal.js?");

/***/ }),

/***/ "./app/assets/scripts/modules/Projects.js":
/*!************************************************!*\
  !*** ./app/assets/scripts/modules/Projects.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Projects {\n  constructor(project_list) {\n    this.project_list = project_list;\n    this.parent = document.getElementById(\"projectsContainer\");\n    this.printProjects();\n  }\n\n  printProjects() {\n    this.project_list.forEach(project => {\n      //create footer\n      const subTitle = document.createElement(\"h5\");\n      subTitle.innerText = project.subtitle;\n      const projectFooter = document.createElement(\"div\");\n      projectFooter.classList.add(\"project__footer\");\n      projectFooter.appendChild(subTitle); //create title\n\n      const Title = document.createElement(\"h3\");\n      Title.innerText = project.title;\n      const projectTitle = document.createElement(\"div\");\n      projectTitle.classList.add(\"project__title\");\n      projectTitle.appendChild(Title); //create content element\n\n      const projectContent = document.createElement(\"div\");\n      projectContent.classList.add(\"project-content\");\n      projectContent.appendChild(projectTitle);\n      projectContent.appendChild(projectFooter); //create img element\n\n      const img_ele = document.createElement(\"img\");\n      img_ele.src = project.coverImage;\n      const img_container = document.createElement(\"div\");\n      img_container.classList.add(\"project__image\");\n      img_container.appendChild(img_ele); //create project div\n\n      const pp = document.createElement(\"div\");\n      pp.classList.add(\"project\");\n      pp.classList.add(\"col\");\n      pp.classList.add(\"col--xs-12\");\n      pp.classList.add(\"col--md-6\");\n      pp.setAttribute('data-project_id', project.id);\n      pp.appendChild(img_container);\n      pp.appendChild(projectContent); //append to parent element\n\n      this.parent.appendChild(pp);\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\n//# sourceURL=webpack:///./app/assets/scripts/modules/Projects.js?");

/***/ }),

/***/ "./app/assets/scripts/projects.json":
/*!******************************************!*\
  !*** ./app/assets/scripts/projects.json ***!
  \******************************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"id\\\":1,\\\"title\\\":\\\"Todoist\\\",\\\"subtitle\\\":\\\"Demo Project\\\",\\\"url\\\":\\\"https://google.com\\\",\\\"coverImage\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"gifImage\\\":\\\"assets/images/todoist/anim.gif\\\",\\\"description\\\":\\\"dfas fasdf asdf as dfasd f asd f\\\",\\\"tags\\\":\\\"Postgresql, Express, Node, React\\\"},{\\\"id\\\":2,\\\"title\\\":\\\"Todoist2\\\",\\\"subtitle\\\":\\\"Demo Project\\\",\\\"url\\\":\\\"https://google.com\\\",\\\"coverImage\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"gifImage\\\":\\\"assets/images/todoist/anim.gif\\\",\\\"description\\\":\\\"dfas fasdf asdf as dfasd f asd f\\\",\\\"tags\\\":\\\"Postgresql, Express, Node, React\\\"},{\\\"id\\\":3,\\\"title\\\":\\\"Todoist3\\\",\\\"subtitle\\\":\\\"Demo Project\\\",\\\"url\\\":\\\"https://google.com\\\",\\\"coverImage\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"gifImage\\\":\\\"assets/images/todoist/anim.gif\\\",\\\"description\\\":\\\"dfas fasdf asdf as dfasd f asd f\\\",\\\"tags\\\":\\\"Postgresql, Express, Node, React\\\"},{\\\"id\\\":4,\\\"title\\\":\\\"Todoist4\\\",\\\"subtitle\\\":\\\"Demo Project\\\",\\\"url\\\":\\\"https://google.com\\\",\\\"coverImage\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"gifImage\\\":\\\"assets/images/todoist/anim.gif\\\",\\\"description\\\":\\\"dfas fasdf asdf as dfasd f asd f\\\",\\\"tags\\\":\\\"Postgresql, Express, Node, React\\\"},{\\\"id\\\":5,\\\"title\\\":\\\"Todoist5\\\",\\\"subtitle\\\":\\\"Demo Project\\\",\\\"url\\\":\\\"https://google.com\\\",\\\"coverImage\\\":\\\"assets/images/projects/demo/demo.jpg\\\",\\\"gifImage\\\":\\\"assets/images/todoist/anim.gif\\\",\\\"description\\\":\\\"dfas fasdf asdf as dfasd f asd f\\\",\\\"tags\\\":\\\"Postgresql, Express, Node, React\\\"}]\");\n\n//# sourceURL=webpack:///./app/assets/scripts/projects.json?");

/***/ })

/******/ });