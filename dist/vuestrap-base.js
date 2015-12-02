(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vuestrapBase"] = factory();
	else
		root["vuestrapBase"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * IMPORT GLOBAL STYLING
	 */
	// import normalize, grid, utilities and
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(1);
	
	/**
	 * IMPORT EACH COMPONENT
	 */
	
	var _srcDocsPagesAccordion = __webpack_require__(6);
	
	var _srcDocsPagesAccordion2 = _interopRequireDefault(_srcDocsPagesAccordion);
	
	var _srcDocsPagesAlert = __webpack_require__(27);
	
	var _srcDocsPagesAlert2 = _interopRequireDefault(_srcDocsPagesAlert);
	
	var _srcDocsPagesBreadcrumb = __webpack_require__(33);
	
	var _srcDocsPagesBreadcrumb2 = _interopRequireDefault(_srcDocsPagesBreadcrumb);
	
	var _srcDocsPagesButtonCheckbox = __webpack_require__(42);
	
	var _srcDocsPagesButtonCheckbox2 = _interopRequireDefault(_srcDocsPagesButtonCheckbox);
	
	var _srcDocsPagesButtonGroup = __webpack_require__(51);
	
	var _srcDocsPagesButtonGroup2 = _interopRequireDefault(_srcDocsPagesButtonGroup);
	
	var _srcDocsPagesButtonRadio = __webpack_require__(57);
	
	var _srcDocsPagesButtonRadio2 = _interopRequireDefault(_srcDocsPagesButtonRadio);
	
	var _srcDocsPagesButtons = __webpack_require__(63);
	
	var _srcDocsPagesButtons2 = _interopRequireDefault(_srcDocsPagesButtons);
	
	var _srcDocsPagesCard = __webpack_require__(70);
	
	var _srcDocsPagesCard2 = _interopRequireDefault(_srcDocsPagesCard);
	
	var _srcDocsPagesCarousel = __webpack_require__(83);
	
	var _srcDocsPagesCarousel2 = _interopRequireDefault(_srcDocsPagesCarousel);
	
	var _srcDocsPagesCollapse = __webpack_require__(92);
	
	var _srcDocsPagesCollapse2 = _interopRequireDefault(_srcDocsPagesCollapse);
	
	var _srcDocsPagesDropdown = __webpack_require__(96);
	
	var _srcDocsPagesDropdown2 = _interopRequireDefault(_srcDocsPagesDropdown);
	
	var _srcDocsPagesDropdownSelect = __webpack_require__(105);
	
	var _srcDocsPagesDropdownSelect2 = _interopRequireDefault(_srcDocsPagesDropdownSelect);
	
	var _srcDocsPagesFormCheckbox = __webpack_require__(111);
	
	var _srcDocsPagesFormCheckbox2 = _interopRequireDefault(_srcDocsPagesFormCheckbox);
	
	var _srcDocsPagesFormRadio = __webpack_require__(122);
	
	var _srcDocsPagesFormRadio2 = _interopRequireDefault(_srcDocsPagesFormRadio);
	
	var _srcDocsPagesFormInput = __webpack_require__(128);
	
	var _srcDocsPagesFormInput2 = _interopRequireDefault(_srcDocsPagesFormInput);
	
	var _srcDocsPagesFormSelect = __webpack_require__(134);
	
	var _srcDocsPagesFormSelect2 = _interopRequireDefault(_srcDocsPagesFormSelect);
	
	var _srcDocsPagesFormTextarea = __webpack_require__(140);
	
	var _srcDocsPagesFormTextarea2 = _interopRequireDefault(_srcDocsPagesFormTextarea);
	
	var _srcDocsPagesImages = __webpack_require__(146);
	
	var _srcDocsPagesImages2 = _interopRequireDefault(_srcDocsPagesImages);
	
	var _srcDocsPagesJumbotron = __webpack_require__(152);
	
	var _srcDocsPagesJumbotron2 = _interopRequireDefault(_srcDocsPagesJumbotron);
	
	var _srcDocsPagesLabels = __webpack_require__(161);
	
	var _srcDocsPagesLabels2 = _interopRequireDefault(_srcDocsPagesLabels);
	
	var _srcDocsPagesListGroup = __webpack_require__(167);
	
	var _srcDocsPagesListGroup2 = _interopRequireDefault(_srcDocsPagesListGroup);
	
	var _srcDocsPagesMedia = __webpack_require__(174);
	
	var _srcDocsPagesMedia2 = _interopRequireDefault(_srcDocsPagesMedia);
	
	var _srcDocsPagesModal = __webpack_require__(183);
	
	var _srcDocsPagesModal2 = _interopRequireDefault(_srcDocsPagesModal);
	
	var _srcDocsPagesNav = __webpack_require__(192);
	
	var _srcDocsPagesNav2 = _interopRequireDefault(_srcDocsPagesNav);
	
	var _srcDocsPagesNavbar = __webpack_require__(203);
	
	var _srcDocsPagesNavbar2 = _interopRequireDefault(_srcDocsPagesNavbar);
	
	var _srcDocsPagesPager = __webpack_require__(212);
	
	var _srcDocsPagesPager2 = _interopRequireDefault(_srcDocsPagesPager);
	
	var _srcDocsPagesPagination = __webpack_require__(221);
	
	var _srcDocsPagesPagination2 = _interopRequireDefault(_srcDocsPagesPagination);
	
	var _srcDocsPagesPopover = __webpack_require__(230);
	
	var _srcDocsPagesPopover2 = _interopRequireDefault(_srcDocsPagesPopover);
	
	var _srcDocsPagesProgress = __webpack_require__(239);
	
	var _srcDocsPagesProgress2 = _interopRequireDefault(_srcDocsPagesProgress);
	
	var _srcDocsPagesTables = __webpack_require__(248);
	
	var _srcDocsPagesTables2 = _interopRequireDefault(_srcDocsPagesTables);
	
	var _srcDocsPagesTabs = __webpack_require__(256);
	
	var _srcDocsPagesTabs2 = _interopRequireDefault(_srcDocsPagesTabs);
	
	var _srcDocsPagesTooltip = __webpack_require__(262);
	
	var _srcDocsPagesTooltip2 = _interopRequireDefault(_srcDocsPagesTooltip);
	
	var vuestrapBase = {
		intro: introductionPage,
		accordion: _srcDocsPagesAccordion2['default'],
		alert: _srcDocsPagesAlert2['default'],
		breadcrumb: _srcDocsPagesBreadcrumb2['default'],
		'button-checkbox': _srcDocsPagesButtonCheckbox2['default'],
		'button-group': _srcDocsPagesButtonGroup2['default'],
		'button-radio': _srcDocsPagesButtonRadio2['default'],
		buttons: _srcDocsPagesButtons2['default'],
		card: _srcDocsPagesCard2['default'],
		carousel: _srcDocsPagesCarousel2['default'],
		collapse: _srcDocsPagesCollapse2['default'],
		dropdown: _srcDocsPagesDropdown2['default'],
		'dropdown-select': _srcDocsPagesDropdownSelect2['default'],
		'form-checkbox': _srcDocsPagesFormCheckbox2['default'],
		'form-radio': _srcDocsPagesFormRadio2['default'],
		'form-input': _srcDocsPagesFormInput2['default'],
		'form-select': _srcDocsPagesFormSelect2['default'],
		'form-textarea': _srcDocsPagesFormTextarea2['default'],
		'images': _srcDocsPagesImages2['default'],
		'jumbotron': _srcDocsPagesJumbotron2['default'],
		'labels': _srcDocsPagesLabels2['default'],
		'list-group': _srcDocsPagesListGroup2['default'],
		'media': _srcDocsPagesMedia2['default'],
		'modal': _srcDocsPagesModal2['default'],
		'navigation': _srcDocsPagesNav2['default'],
		'navbar': _srcDocsPagesNavbar2['default'],
		'pager': _srcDocsPagesPager2['default'],
		'pagination': _srcDocsPagesPagination2['default'],
		'popover': _srcDocsPagesPopover2['default'],
		'progress': _srcDocsPagesProgress2['default'],
		'tables': _srcDocsPagesTables2['default'],
		'tabs': _srcDocsPagesTabs2['default'],
		'tooltip': _srcDocsPagesTooltip2['default']
	};
	
	module.exports = vuestrapBase;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// import core stuff
	'use strict';
	
	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _accordionJson = __webpack_require__(7);
	
	var _accordionJson2 = _interopRequireDefault(_accordionJson);
	
	var _accordionHtml = __webpack_require__(8);
	
	var _accordionHtml2 = _interopRequireDefault(_accordionHtml);
	
	var _snippetHtml = __webpack_require__(9);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsCollapse = __webpack_require__(10);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	exports['default'] = {
	  template: _accordionHtml2['default'],
	  data: function data() {
	    return {
	      meta: _accordionJson2['default'],
	      snippet: _snippetHtml2['default']
	    };
	  },
	  components: {
	    'collapse': _srcComponentsCollapse.collapse,
	    'collapseToggle': _srcComponentsCollapse.collapseToggle,
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
		"name": "accordion",
		"title": "Accordion",
		"description": "Extend the default collapse behavior to create an accordion. It requires both <code>id</code> and <code>group</code> for this to work.",
		"dependencies": [
			"vuestrap/collapse",
			"vuestrap/collapseToggle"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "id",
				"type": "String",
				"default": "",
				"required": true,
				"description": "You need to provide <code>id</code> for both <code>&lt;collapse></code> and <code>&lt;collapse-toggle></code> elements, so accordion knows which element to open."
			},
			{
				"name": "group",
				"type": "String",
				"default": "",
				"required": true,
				"description": "You need to provide <code>group</code> for both <code>&lt;collapse></code> and <code>&lt;collapse-toggle></code> elements, so accordion knows which elements to hide in the same group."
			}
		]
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<collapse-toggle id=\"item-1\" group=\"accordion-1\">\r\n\t\t\t<div><a href=\"#\">Collapsible Group Item #1</a></div>\r\n\t\t</collapse-toggle>\r\n\t\t<collapse id=\"item-1\" group=\"accordion-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>First</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</collapse>\r\n\t\t<collapse-toggle id=\"item-2\" group=\"accordion-1\">\r\n\t\t\t<div><a href=\"#\">Collapsible Group Item #2</a></div>\r\n\t\t</collapse-toggle>\r\n\t\t<collapse id=\"item-2\" group=\"accordion-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>Second</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</collapse>\r\n\t\t<collapse-toggle id=\"item-3\" group=\"accordion-1\">\r\n\t\t\t<div><a href=\"#\">Collapsible Group Item #3</a></div>\r\n\t\t</collapse-toggle>\r\n\t\t<collapse id=\"item-3\" group=\"accordion-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>Third</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</collapse>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- item 1 --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapse-toggle</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"item-1\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Collapsible Group Item #1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapse-toggle</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapse</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"item-1\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h5</span>&gt;</span>First<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h5</span>&gt;</span>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapse</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- item 2 --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapse-toggle</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"item-2\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Collapsible Group Item #2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapse-toggle</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapse</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"item-2\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h5</span>&gt;</span>Second<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h5</span>&gt;</span>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapse</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- item 3--&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapse-toggle</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"item-3\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Collapsible Group Item #3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapse-toggle</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapse</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"item-3\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"accordion-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h5</span>&gt;</span>Third<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h5</span>&gt;</span>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapse</span>&gt;</span>\r\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _collapseHtml = __webpack_require__(11);
	
	var _collapseHtml2 = _interopRequireDefault(_collapseHtml);
	
	var _utils = __webpack_require__(12);
	
	// import polyfill for IE9
	
	__webpack_require__(14);
	
	// for browsers that do not support transitions like IE9 just change immediately
	var TRANSITION_DURATION = (0, _utils.csstransitions)() ? 350 : 0;
	
	// export component object
	var collapse = {
	  template: _collapseHtml2['default'],
	  replace: true,
	  props: {
	    id: {
	      type: String,
	      'default': ''
	    },
	    group: {
	      type: String,
	      'default': ''
	    }
	  },
	  methods: {
	    show: function show() {
	      var _this = this;
	
	      this.$el.classList.remove('collapse');
	      var height = this.$el.scrollHeight;
	      this.$el.classList.add('collapsing');
	      this.$el.offsetWidth;
	      this.$el.style.height = height + 'px';
	      setTimeout(function () {
	        _this.$el.classList.remove('collapsing');
	        _this.$el.classList.add('collapse', 'in');
	      }, TRANSITION_DURATION);
	    },
	    hide: function hide() {
	      var _this2 = this;
	
	      this.$el.classList.remove('collapse');
	      this.$el.classList.remove('in');
	      this.$el.classList.add('collapsing');
	      this.$el.offsetWidth;
	      this.$el.style.height = '0px';
	      setTimeout(function () {
	        _this2.$el.classList.remove('collapsing');
	        _this2.$el.classList.add('collapse');
	      }, TRANSITION_DURATION);
	    }
	  },
	  events: {
	    'toggled::collapse': function toggledCollapse(data) {
	      if (data.id === this.id || data.group === this.group) {
	        if ((this.$el.className + ' ').indexOf(' in ') > -1) {
	          this.hide();
	        } else {
	          this.show();
	        }
	      }
	    },
	    'toggled::accordion': function toggledAccordion(data) {
	      // if id and group id is provided it means it is an accordion and takes priority over all
	      if (data.id && data.group && data.group === this.group) {
	        // for current element
	        if (data.id === this.id) {
	          // collapse if selected item is already opened
	          if ((this.$el.className + ' ').indexOf(' in ') > -1) {
	            this.hide();
	          } else {
	            this.show();
	          }
	        } else {
	          // ignore if non-selected item is already closed
	          if ((this.$el.className + ' ').indexOf(' in ') === -1) return;
	
	          // close all items in the group, and open the one selected
	          this.hide();
	        }
	      }
	    }
	  }
	};
	
	exports.collapse = collapse;
	// export component object
	var collapseToggle = {
	  template: '<span v-on:click.stop.prevent="toggle($event)"><slot></slot></span>',
	  replace: true,
	  computed: {},
	  props: {
	    id: {
	      type: String,
	      'default': ''
	    },
	    group: {
	      type: String,
	      'default': ''
	    }
	  },
	  methods: {
	    toggle: function toggle() {
	      // if both attributes missing, ignore
	      if (!this.id && !this.group) return;
	
	      // broadcast accordion toggle if both id and group are set otherwise broadcast collapse
	      // we also use dispatch to tell other components about the change
	      if (this.id && this.group) {
	        this.$root.$broadcast('toggled::accordion', { id: this.id, group: this.group });
	        this.$root.$dispatch('toggled::accordion', { id: this.id, group: this.group });
	      } else {
	        this.$root.$broadcast('toggled::collapse', { id: this.id, group: this.group });
	        this.$root.$dispatch('toggled::collapse', { id: this.id, group: this.group });
	      }
	    }
	  }
	};
	exports.collapseToggle = collapseToggle;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div class=\"collapse\">\r\n  <slot></slot>\r\n</div>";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Routes helper
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.makeid = makeid;
	exports.csstransitions = csstransitions;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _director = __webpack_require__(13);
	
	var _director2 = _interopRequireDefault(_director);
	
	var router = new _director2['default'].Router();
	exports.router = router;
	var handleRoute = function handleRoute(route, cb) {
	  // listen to the route changes and set currentView object for the current route
	  router.on(route.route, function () {
	    window.scrollTo(0, 0);
	    cb();
	  });
	};
	
	exports.handleRoute = handleRoute;
	/**
	 * Some common stuff used in demo pages
	 */
	var positions = [{ text: 'left', value: 'left' }, { text: 'right', value: 'right' }];
	exports.positions = positions;
	var states = [{ text: 'default', value: 'default' }, { text: 'success', value: 'success' }, { text: 'error', value: 'error' }, { text: 'warning', value: 'warning' }];
	exports.states = states;
	var variants = [{
	  text: 'default',
	  value: 'default'
	}, {
	  text: 'primary',
	  value: 'primary'
	}, {
	  text: 'success',
	  value: 'success'
	}, {
	  text: 'info',
	  value: 'info'
	}, {
	  text: 'warning',
	  value: 'warning'
	}, {
	  text: 'danger',
	  value: 'danger'
	}];
	exports.variants = variants;
	var sizes = [{
	  text: 'sm',
	  value: 'sm'
	}, {
	  text: 'md',
	  value: 'md'
	}, {
	  text: 'lg',
	  value: 'lg'
	}];
	
	exports.sizes = sizes;
	/**
	 * Other utilities for demo pages
	 *
	 */
	
	// pulled from http://stackoverflow.com/questions/1349404/generate-a-string-of-5-random-characters-in-javascript
	
	function makeid() {
	  var text = '';
	  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	
	  for (var i = 0; i < 5; i++) {
	    text += possible.charAt(Math.floor(Math.random() * possible.length));
	  }
	  return text;
	}
	
	// check if browser support css3 transitions
	
	function csstransitions() {
	  var style = document.documentElement.style;
	  return style.webkitTransition !== undefined || style.MozTransition !== undefined || style.OTransition !== undefined || style.MsTransition !== undefined || style.transition !== undefined;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
	
	//
	// Generated on Tue Dec 16 2014 12:13:47 GMT+0100 (CET) by Charlie Robbins, Paolo Fragomeni & the Contributors (Using Codesurgeon).
	// Version 1.2.6
	'use strict';
	
	(function (exports) {
	
	  /*
	   * browser.js: Browser specific functionality for director.
	   *
	   * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
	   * MIT LICENSE
	   *
	   */
	
	  var dloc = document.location;
	
	  function dlocHashEmpty() {
	    // Non-IE browsers return '' when the address bar shows '#'; Director's logic
	    // assumes both mean empty.
	    return dloc.hash === '' || dloc.hash === '#';
	  }
	
	  var listener = {
	    mode: 'modern',
	    hash: dloc.hash,
	    history: false,
	
	    check: function check() {
	      var h = dloc.hash;
	      if (h != this.hash) {
	        this.hash = h;
	        this.onHashChanged();
	      }
	    },
	
	    fire: function fire() {
	      if (this.mode === 'modern') {
	        this.history === true ? window.onpopstate() : window.onhashchange();
	      } else {
	        this.onHashChanged();
	      }
	    },
	
	    init: function init(fn, history) {
	      var self = this;
	      this.history = history;
	
	      if (!Router.listeners) {
	        Router.listeners = [];
	      }
	
	      function onchange(onChangeEvent) {
	        for (var i = 0, l = Router.listeners.length; i < l; i++) {
	          Router.listeners[i](onChangeEvent);
	        }
	      }
	
	      //note IE8 is being counted as 'modern' because it has the hashchange event
	      if ('onhashchange' in window && (document.documentMode === undefined || document.documentMode > 7)) {
	        // At least for now HTML5 history is available for 'modern' browsers only
	        if (this.history === true) {
	          // There is an old bug in Chrome that causes onpopstate to fire even
	          // upon initial page load. Since the handler is run manually in init(),
	          // this would cause Chrome to run it twise. Currently the only
	          // workaround seems to be to set the handler after the initial page load
	          // http://code.google.com/p/chromium/issues/detail?id=63040
	          setTimeout(function () {
	            window.onpopstate = onchange;
	          }, 500);
	        } else {
	          window.onhashchange = onchange;
	        }
	        this.mode = 'modern';
	      } else {
	        //
	        // IE support, based on a concept by Erik Arvidson ...
	        //
	        var frame = document.createElement('iframe');
	        frame.id = 'state-frame';
	        frame.style.display = 'none';
	        document.body.appendChild(frame);
	        this.writeFrame('');
	
	        if ('onpropertychange' in document && 'attachEvent' in document) {
	          document.attachEvent('onpropertychange', function () {
	            if (event.propertyName === 'location') {
	              self.check();
	            }
	          });
	        }
	
	        window.setInterval(function () {
	          self.check();
	        }, 50);
	
	        this.onHashChanged = onchange;
	        this.mode = 'legacy';
	      }
	
	      Router.listeners.push(fn);
	
	      return this.mode;
	    },
	
	    destroy: function destroy(fn) {
	      if (!Router || !Router.listeners) {
	        return;
	      }
	
	      var listeners = Router.listeners;
	
	      for (var i = listeners.length - 1; i >= 0; i--) {
	        if (listeners[i] === fn) {
	          listeners.splice(i, 1);
	        }
	      }
	    },
	
	    setHash: function setHash(s) {
	      // Mozilla always adds an entry to the history
	      if (this.mode === 'legacy') {
	        this.writeFrame(s);
	      }
	
	      if (this.history === true) {
	        window.history.pushState({}, document.title, s);
	        // Fire an onpopstate event manually since pushing does not obviously
	        // trigger the pop event.
	        this.fire();
	      } else {
	        dloc.hash = s[0] === '/' ? s : '/' + s;
	      }
	      return this;
	    },
	
	    writeFrame: function writeFrame(s) {
	      // IE support...
	      var f = document.getElementById('state-frame');
	      var d = f.contentDocument || f.contentWindow.document;
	      d.open();
	      d.write("<script>_hash = '" + s + "'; onload = parent.listener.syncHash;<script>");
	      d.close();
	    },
	
	    syncHash: function syncHash() {
	      // IE support...
	      var s = this._hash;
	      if (s != dloc.hash) {
	        dloc.hash = s;
	      }
	      return this;
	    },
	
	    onHashChanged: function onHashChanged() {}
	  };
	
	  var Router = exports.Router = function (routes) {
	    if (!(this instanceof Router)) return new Router(routes);
	
	    this.params = {};
	    this.routes = {};
	    this.methods = ['on', 'once', 'after', 'before'];
	    this.scope = [];
	    this._methods = {};
	
	    this._insert = this.insert;
	    this.insert = this.insertEx;
	
	    this.historySupport = (window.history != null ? window.history.pushState : null) != null;
	
	    this.configure();
	    this.mount(routes || {});
	  };
	
	  Router.prototype.init = function (r) {
	    var self = this,
	        routeTo;
	    this.handler = function (onChangeEvent) {
	      var newURL = onChangeEvent && onChangeEvent.newURL || window.location.hash;
	      var url = self.history === true ? self.getPath() : newURL.replace(/.*#/, '');
	      self.dispatch('on', url.charAt(0) === '/' ? url : '/' + url);
	    };
	
	    listener.init(this.handler, this.history);
	
	    if (this.history === false) {
	      if (dlocHashEmpty() && r) {
	        dloc.hash = r;
	      } else if (!dlocHashEmpty()) {
	        self.dispatch('on', '/' + dloc.hash.replace(/^(#\/|#|\/)/, ''));
	      }
	    } else {
	      if (this.convert_hash_in_init) {
	        // Use hash as route
	        routeTo = dlocHashEmpty() && r ? r : !dlocHashEmpty() ? dloc.hash.replace(/^#/, '') : null;
	        if (routeTo) {
	          window.history.replaceState({}, document.title, routeTo);
	        }
	      } else {
	        // Use canonical url
	        routeTo = this.getPath();
	      }
	
	      // Router has been initialized, but due to the chrome bug it will not
	      // yet actually route HTML5 history state changes. Thus, decide if should route.
	      if (routeTo || this.run_in_init === true) {
	        this.handler();
	      }
	    }
	
	    return this;
	  };
	
	  Router.prototype.explode = function () {
	    var v = this.history === true ? this.getPath() : dloc.hash;
	    if (v.charAt(1) === '/') {
	      v = v.slice(1);
	    }
	    return v.slice(1, v.length).split("/");
	  };
	
	  Router.prototype.setRoute = function (i, v, val) {
	    var url = this.explode();
	
	    if (typeof i === 'number' && typeof v === 'string') {
	      url[i] = v;
	    } else if (typeof val === 'string') {
	      url.splice(i, v, s);
	    } else {
	      url = [i];
	    }
	
	    listener.setHash(url.join('/'));
	    return url;
	  };
	
	  //
	  // ### function insertEx(method, path, route, parent)
	  // #### @method {string} Method to insert the specific `route`.
	  // #### @path {Array} Parsed path to insert the `route` at.
	  // #### @route {Array|function} Route handlers to insert.
	  // #### @parent {Object} **Optional** Parent "routes" to insert into.
	  // insert a callback that will only occur once per the matched route.
	  //
	  Router.prototype.insertEx = function (method, path, route, parent) {
	    if (method === "once") {
	      method = "on";
	      route = (function (route) {
	        var once = false;
	        return function () {
	          if (once) return;
	          once = true;
	          return route.apply(this, arguments);
	        };
	      })(route);
	    }
	    return this._insert(method, path, route, parent);
	  };
	
	  Router.prototype.getRoute = function (v) {
	    var ret = v;
	
	    if (typeof v === "number") {
	      ret = this.explode()[v];
	    } else if (typeof v === "string") {
	      var h = this.explode();
	      ret = h.indexOf(v);
	    } else {
	      ret = this.explode();
	    }
	
	    return ret;
	  };
	
	  Router.prototype.destroy = function () {
	    listener.destroy(this.handler);
	    return this;
	  };
	
	  Router.prototype.getPath = function () {
	    var path = window.location.pathname;
	    if (path.substr(0, 1) !== '/') {
	      path = '/' + path;
	    }
	    return path;
	  };
	  function _every(arr, iterator) {
	    for (var i = 0; i < arr.length; i += 1) {
	      if (iterator(arr[i], i, arr) === false) {
	        return;
	      }
	    }
	  }
	
	  function _flatten(arr) {
	    var flat = [];
	    for (var i = 0, n = arr.length; i < n; i++) {
	      flat = flat.concat(arr[i]);
	    }
	    return flat;
	  }
	
	  function _asyncEverySeries(arr, iterator, callback) {
	    if (!arr.length) {
	      return callback();
	    }
	    var completed = 0;
	    (function iterate() {
	      iterator(arr[completed], function (err) {
	        if (err || err === false) {
	          callback(err);
	          callback = function () {};
	        } else {
	          completed += 1;
	          if (completed === arr.length) {
	            callback();
	          } else {
	            iterate();
	          }
	        }
	      });
	    })();
	  }
	
	  function paramifyString(str, params, mod) {
	    mod = str;
	    for (var param in params) {
	      if (params.hasOwnProperty(param)) {
	        mod = params[param](str);
	        if (mod !== str) {
	          break;
	        }
	      }
	    }
	    return mod === str ? "([._a-zA-Z0-9-%()]+)" : mod;
	  }
	
	  function regifyString(str, params) {
	    var matches,
	        last = 0,
	        out = "";
	    while (matches = str.substr(last).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/)) {
	      last = matches.index + matches[0].length;
	      matches[0] = matches[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)");
	      out += str.substr(0, matches.index) + matches[0];
	    }
	    str = out += str.substr(last);
	    var captures = str.match(/:([^\/]+)/ig),
	        capture,
	        length;
	    if (captures) {
	      length = captures.length;
	      for (var i = 0; i < length; i++) {
	        capture = captures[i];
	        if (capture.slice(0, 2) === "::") {
	          str = capture.slice(1);
	        } else {
	          str = str.replace(capture, paramifyString(capture, params));
	        }
	      }
	    }
	    return str;
	  }
	
	  function terminator(routes, delimiter, start, stop) {
	    var last = 0,
	        left = 0,
	        right = 0,
	        start = (start || "(").toString(),
	        stop = (stop || ")").toString(),
	        i;
	    for (i = 0; i < routes.length; i++) {
	      var chunk = routes[i];
	      if (chunk.indexOf(start, last) > chunk.indexOf(stop, last) || ~chunk.indexOf(start, last) && ! ~chunk.indexOf(stop, last) || ! ~chunk.indexOf(start, last) && ~chunk.indexOf(stop, last)) {
	        left = chunk.indexOf(start, last);
	        right = chunk.indexOf(stop, last);
	        if (~left && ! ~right || ! ~left && ~right) {
	          var tmp = routes.slice(0, (i || 1) + 1).join(delimiter);
	          routes = [tmp].concat(routes.slice((i || 1) + 1));
	        }
	        last = (right > left ? right : left) + 1;
	        i = 0;
	      } else {
	        last = 0;
	      }
	    }
	    return routes;
	  }
	
	  var QUERY_SEPARATOR = /\?.*/;
	
	  Router.prototype.configure = function (options) {
	    options = options || {};
	    for (var i = 0; i < this.methods.length; i++) {
	      this._methods[this.methods[i]] = true;
	    }
	    this.recurse = options.recurse || this.recurse || false;
	    this.async = options.async || false;
	    this.delimiter = options.delimiter || "/";
	    this.strict = typeof options.strict === "undefined" ? true : options.strict;
	    this.notfound = options.notfound;
	    this.resource = options.resource;
	    this.history = options.html5history && this.historySupport || false;
	    this.run_in_init = this.history === true && options.run_handler_in_init !== false;
	    this.convert_hash_in_init = this.history === true && options.convert_hash_in_init !== false;
	    this.every = {
	      after: options.after || null,
	      before: options.before || null,
	      on: options.on || null
	    };
	    return this;
	  };
	
	  Router.prototype.param = function (token, matcher) {
	    if (token[0] !== ":") {
	      token = ":" + token;
	    }
	    var compiled = new RegExp(token, "g");
	    this.params[token] = function (str) {
	      return str.replace(compiled, matcher.source || matcher);
	    };
	    return this;
	  };
	
	  Router.prototype.on = Router.prototype.route = function (method, path, route) {
	    var self = this;
	    if (!route && typeof path == "function") {
	      route = path;
	      path = method;
	      method = "on";
	    }
	    if (Array.isArray(path)) {
	      return path.forEach(function (p) {
	        self.on(method, p, route);
	      });
	    }
	    if (path.source) {
	      path = path.source.replace(/\\\//ig, "/");
	    }
	    if (Array.isArray(method)) {
	      return method.forEach(function (m) {
	        self.on(m.toLowerCase(), path, route);
	      });
	    }
	    path = path.split(new RegExp(this.delimiter));
	    path = terminator(path, this.delimiter);
	    this.insert(method, this.scope.concat(path), route);
	  };
	
	  Router.prototype.path = function (path, routesFn) {
	    var self = this,
	        length = this.scope.length;
	    if (path.source) {
	      path = path.source.replace(/\\\//ig, "/");
	    }
	    path = path.split(new RegExp(this.delimiter));
	    path = terminator(path, this.delimiter);
	    this.scope = this.scope.concat(path);
	    routesFn.call(this, this);
	    this.scope.splice(length, path.length);
	  };
	
	  Router.prototype.dispatch = function (method, path, callback) {
	    var self = this,
	        fns = this.traverse(method, path.replace(QUERY_SEPARATOR, ""), this.routes, ""),
	        invoked = this._invoked,
	        after;
	    this._invoked = true;
	    if (!fns || fns.length === 0) {
	      this.last = [];
	      if (typeof this.notfound === "function") {
	        this.invoke([this.notfound], {
	          method: method,
	          path: path
	        }, callback);
	      }
	      return false;
	    }
	    if (this.recurse === "forward") {
	      fns = fns.reverse();
	    }
	    function updateAndInvoke() {
	      self.last = fns.after;
	      self.invoke(self.runlist(fns), self, callback);
	    }
	    after = this.every && this.every.after ? [this.every.after].concat(this.last) : [this.last];
	    if (after && after.length > 0 && invoked) {
	      if (this.async) {
	        this.invoke(after, this, updateAndInvoke);
	      } else {
	        this.invoke(after, this);
	        updateAndInvoke();
	      }
	      return true;
	    }
	    updateAndInvoke();
	    return true;
	  };
	
	  Router.prototype.invoke = function (fns, thisArg, callback) {
	    var self = this;
	    var apply;
	    if (this.async) {
	      apply = function (fn, next) {
	        if (Array.isArray(fn)) {
	          return _asyncEverySeries(fn, apply, next);
	        } else if (typeof fn == "function") {
	          fn.apply(thisArg, (fns.captures || []).concat(next));
	        }
	      };
	      _asyncEverySeries(fns, apply, function () {
	        if (callback) {
	          callback.apply(thisArg, arguments);
	        }
	      });
	    } else {
	      apply = function (fn) {
	        if (Array.isArray(fn)) {
	          return _every(fn, apply);
	        } else if (typeof fn === "function") {
	          return fn.apply(thisArg, fns.captures || []);
	        } else if (typeof fn === "string" && self.resource) {
	          self.resource[fn].apply(thisArg, fns.captures || []);
	        }
	      };
	      _every(fns, apply);
	    }
	  };
	
	  Router.prototype.traverse = function (method, path, routes, regexp, filter) {
	    var fns = [],
	        current,
	        exact,
	        match,
	        next,
	        that;
	    function filterRoutes(routes) {
	      if (!filter) {
	        return routes;
	      }
	      function deepCopy(source) {
	        var result = [];
	        for (var i = 0; i < source.length; i++) {
	          result[i] = Array.isArray(source[i]) ? deepCopy(source[i]) : source[i];
	        }
	        return result;
	      }
	      function applyFilter(fns) {
	        for (var i = fns.length - 1; i >= 0; i--) {
	          if (Array.isArray(fns[i])) {
	            applyFilter(fns[i]);
	            if (fns[i].length === 0) {
	              fns.splice(i, 1);
	            }
	          } else {
	            if (!filter(fns[i])) {
	              fns.splice(i, 1);
	            }
	          }
	        }
	      }
	      var newRoutes = deepCopy(routes);
	      newRoutes.matched = routes.matched;
	      newRoutes.captures = routes.captures;
	      newRoutes.after = routes.after.filter(filter);
	      applyFilter(newRoutes);
	      return newRoutes;
	    }
	    if (path === this.delimiter && routes[method]) {
	      next = [[routes.before, routes[method]].filter(Boolean)];
	      next.after = [routes.after].filter(Boolean);
	      next.matched = true;
	      next.captures = [];
	      return filterRoutes(next);
	    }
	    for (var r in routes) {
	      if (routes.hasOwnProperty(r) && (!this._methods[r] || this._methods[r] && typeof routes[r] === "object" && !Array.isArray(routes[r]))) {
	        current = exact = regexp + this.delimiter + r;
	        if (!this.strict) {
	          exact += "[" + this.delimiter + "]?";
	        }
	        match = path.match(new RegExp("^" + exact));
	        if (!match) {
	          continue;
	        }
	        if (match[0] && match[0] == path && routes[r][method]) {
	          next = [[routes[r].before, routes[r][method]].filter(Boolean)];
	          next.after = [routes[r].after].filter(Boolean);
	          next.matched = true;
	          next.captures = match.slice(1);
	          if (this.recurse && routes === this.routes) {
	            next.push([routes.before, routes.on].filter(Boolean));
	            next.after = next.after.concat([routes.after].filter(Boolean));
	          }
	          return filterRoutes(next);
	        }
	        next = this.traverse(method, path, routes[r], current);
	        if (next.matched) {
	          if (next.length > 0) {
	            fns = fns.concat(next);
	          }
	          if (this.recurse) {
	            fns.push([routes[r].before, routes[r].on].filter(Boolean));
	            next.after = next.after.concat([routes[r].after].filter(Boolean));
	            if (routes === this.routes) {
	              fns.push([routes["before"], routes["on"]].filter(Boolean));
	              next.after = next.after.concat([routes["after"]].filter(Boolean));
	            }
	          }
	          fns.matched = true;
	          fns.captures = next.captures;
	          fns.after = next.after;
	          return filterRoutes(fns);
	        }
	      }
	    }
	    return false;
	  };
	
	  Router.prototype.insert = function (method, path, route, parent) {
	    var methodType, parentType, isArray, nested, part;
	    path = path.filter(function (p) {
	      return p && p.length > 0;
	    });
	    parent = parent || this.routes;
	    part = path.shift();
	    if (/\:|\*/.test(part) && !/\\d|\\w/.test(part)) {
	      part = regifyString(part, this.params);
	    }
	    if (path.length > 0) {
	      parent[part] = parent[part] || {};
	      return this.insert(method, path, route, parent[part]);
	    }
	    if (!part && !path.length && parent === this.routes) {
	      methodType = typeof parent[method];
	      switch (methodType) {
	        case "function":
	          parent[method] = [parent[method], route];
	          return;
	        case "object":
	          parent[method].push(route);
	          return;
	        case "undefined":
	          parent[method] = route;
	          return;
	      }
	      return;
	    }
	    parentType = typeof parent[part];
	    isArray = Array.isArray(parent[part]);
	    if (parent[part] && !isArray && parentType == "object") {
	      methodType = typeof parent[part][method];
	      switch (methodType) {
	        case "function":
	          parent[part][method] = [parent[part][method], route];
	          return;
	        case "object":
	          parent[part][method].push(route);
	          return;
	        case "undefined":
	          parent[part][method] = route;
	          return;
	      }
	    } else if (parentType == "undefined") {
	      nested = {};
	      nested[method] = route;
	      parent[part] = nested;
	      return;
	    }
	    throw new Error("Invalid route context: " + parentType);
	  };
	
	  Router.prototype.extend = function (methods) {
	    var self = this,
	        len = methods.length,
	        i;
	    function extend(method) {
	      self._methods[method] = true;
	      self[method] = function () {
	        var extra = arguments.length === 1 ? [method, ""] : [method];
	        self.on.apply(self, extra.concat(Array.prototype.slice.call(arguments)));
	      };
	    }
	    for (i = 0; i < len; i++) {
	      extend(methods[i]);
	    }
	  };
	
	  Router.prototype.runlist = function (fns) {
	    var runlist = this.every && this.every.before ? [this.every.before].concat(_flatten(fns)) : _flatten(fns);
	    if (this.every && this.every.on) {
	      runlist.push(this.every.on);
	    }
	    runlist.captures = fns.captures;
	    runlist.source = fns.source;
	    return runlist;
	  };
	
	  Router.prototype.mount = function (routes, path) {
	    if (!routes || typeof routes !== "object" || Array.isArray(routes)) {
	      return;
	    }
	    var self = this;
	    path = path || [];
	    if (!Array.isArray(path)) {
	      path = path.split(self.delimiter);
	    }
	    function insertOrMount(route, local) {
	      var rename = route,
	          parts = route.split(self.delimiter),
	          routeType = typeof routes[route],
	          isRoute = parts[0] === "" || !self._methods[parts[0]],
	          event = isRoute ? "on" : rename;
	      if (isRoute) {
	        rename = rename.slice((rename.match(new RegExp("^" + self.delimiter)) || [""])[0].length);
	        parts.shift();
	      }
	      if (isRoute && routeType === "object" && !Array.isArray(routes[route])) {
	        local = local.concat(parts);
	        self.mount(routes[route], local);
	        return;
	      }
	      if (isRoute) {
	        local = local.concat(rename.split(self.delimiter));
	        local = terminator(local, self.delimiter);
	      }
	      self.insert(event, local, routes[route]);
	    }
	    for (var route in routes) {
	      if (routes.hasOwnProperty(route)) {
	        insertOrMount(route, path.slice(0));
	      }
	    }
	  };
	})( true ? exports : window);
	//

/***/ },
/* 14 */
/***/ function(module, exports) {

	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
	"use strict";
	
	;if ("document" in self && !("classList" in document.createElement("_"))) {
	  (function (j) {
	    "use strict";if (!("Element" in j)) {
	      return;
	    }var a = "classList",
	        f = "prototype",
	        m = j.Element[f],
	        b = Object,
	        k = String[f].trim || function () {
	      return this.replace(/^\s+|\s+$/g, "");
	    },
	        c = Array[f].indexOf || function (q) {
	      var p = 0,
	          o = this.length;for (; p < o; p++) {
	        if (p in this && this[p] === q) {
	          return p;
	        }
	      }return -1;
	    },
	        n = function n(o, p) {
	      this.name = o;this.code = DOMException[o];this.message = p;
	    },
	        g = function g(p, o) {
	      if (o === "") {
	        throw new n("SYNTAX_ERR", "An invalid or illegal string was specified");
	      }if (/\s/.test(o)) {
	        throw new n("INVALID_CHARACTER_ERR", "String contains an invalid character");
	      }return c.call(p, o);
	    },
	        d = function d(s) {
	      var r = k.call(s.getAttribute("class") || ""),
	          q = r ? r.split(/\s+/) : [],
	          p = 0,
	          o = q.length;for (; p < o; p++) {
	        this.push(q[p]);
	      }this._updateClassName = function () {
	        s.setAttribute("class", this.toString());
	      };
	    },
	        e = d[f] = [],
	        i = function i() {
	      return new d(this);
	    };n[f] = Error[f];e.item = function (o) {
	      return this[o] || null;
	    };e.contains = function (o) {
	      o += "";return g(this, o) !== -1;
	    };e.add = function () {
	      var s = arguments,
	          r = 0,
	          p = s.length,
	          q,
	          o = false;do {
	        q = s[r] + "";if (g(this, q) === -1) {
	          this.push(q);o = true;
	        }
	      } while (++r < p);if (o) {
	        this._updateClassName();
	      }
	    };e.remove = function () {
	      var t = arguments,
	          s = 0,
	          p = t.length,
	          r,
	          o = false;do {
	        r = t[s] + "";var q = g(this, r);if (q !== -1) {
	          this.splice(q, 1);o = true;
	        }
	      } while (++s < p);if (o) {
	        this._updateClassName();
	      }
	    };e.toggle = function (p, q) {
	      p += "";var o = this.contains(p),
	          r = o ? q !== true && "remove" : q !== false && "add";if (r) {
	        this[r](p);
	      }return !o;
	    };e.toString = function () {
	      return this.join(" ");
	    };if (b.defineProperty) {
	      var l = { get: i, enumerable: true, configurable: true };try {
	        b.defineProperty(m, a, l);
	      } catch (h) {
	        if (h.number === -2146823252) {
	          l.enumerable = false;b.defineProperty(m, a, l);
	        }
	      }
	    } else {
	      if (b[f].__defineGetter__) {
	        m.__defineGetter__(a, i);
	      }
	    }
	  })(self);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(16);
	
	var _demoHtml = __webpack_require__(18);
	
	var _demoHtml2 = _interopRequireDefault(_demoHtml);
	
	__webpack_require__(19);
	
	__webpack_require__(22);
	
	// export component object
	exports['default'] = {
	    template: _demoHtml2['default'],
	    replace: true,
	    props: {
	        meta: {
	            type: Object,
	            'default': {},
	            required: true
	        },
	        snippet: {
	            type: String,
	            'default': "",
	            required: true
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports) {

	module.exports = "<section class=\"vuestrap-docs-demo\" id=\"{{meta.name}}\">\r\n\r\n\t<!-- Meta title -->\r\n\t<h2>{{meta.title}}</h2>\r\n\t<p v-html=\"meta.description\"></p>\r\n\r\n\t<div class=\"m-b\"></div>\r\n\r\n\t<div class=\"alert alert-info\" role=\"alert\" v-if=\"meta.note\">\r\n  \t<icon background=\"circle-outline\" size=\"sm\" variant=\"info\" text=\"i\"></icon> <span v-html=\"meta.note\"></span>\r\n\t</div>\r\n\r\n\t<div class=\"m-b-md\"></div>\r\n\r\n\t<!-- Component manipulators -->\r\n\t<slot name=\"controls\"></slot>\r\n\r\n\t<!-- Output & Code sample -->\r\n\t<div class=\"code-demo\">\r\n\r\n\t\t<slot class=\"markup\" name=\"markup\"></slot>\r\n\r\n\t\t<div class=\"highlight\">\r\n\t\t\t<pre><code v-html=\"snippet\"></code></pre>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Options -->\r\n\t<div class=\"options\" v-if=\"meta.options.length\">\r\n\t\t<h3>Options</h3>\r\n\t\t<table class='table table-responsive'>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Name</th>\r\n\t\t\t\t<th>Type</th>\r\n\t\t\t\t<th>Default</th>\r\n\t\t\t\t<th>Required</th>\r\n\t\t\t\t<th>Description</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr v-for=\"item in meta.options\">\r\n\t\t\t\t<td>{{item.name}}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<code v-html=\"item.type\"></code>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td><code v-if=\"item.default\" v-html=\"item.default\"></code></td>\r\n\t\t\t\t<td>{{item.required == true ? 'yes' : ''}}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<p v-html=\"item.description\"></p>\r\n\t\t\t\t\t<p v-if=\"item.values\">\r\n\t\t\t\t\t\tPosible values:\r\n\t\t\t\t\t\t<code v-for=\"item in item.values\">{{item}}</code>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\t\r\n\t</div>\r\n\r\n\t<!-- Accessibility -->\r\n\t<div class=\"accessibility\" v-if=\"meta.accessibility\">\r\n\t\t<h3>Accessibility</h3>\r\n\t\t<p v-html=\"meta.accessibility\"></p>\r\n\t</div>\r\n\r\n\t<div class=\"m-b-md\"></div>\r\n\r\n\t<!-- Browser Support -->\r\n\t<div class=\"browserSupport\" v-if=\"meta.browserSupport\">\r\n\t\t<h3>Browser Support</h3>\r\n\t\t<span class=\"label label-primary\" v-for=\"item in meta.browserSupport.browsers\">{{ item }}</span>\r\n\t\t<p><small v-html=\"meta.browserSupport.note\"></small></p>\r\n\t</div>\r\n</section>\r\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(20);

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(23);
	
	__webpack_require__(25);

/***/ },
/* 23 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 24 */,
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _alertJson = __webpack_require__(28);
	
	var _alertJson2 = _interopRequireDefault(_alertJson);
	
	var _alertHtml = __webpack_require__(29);
	
	var _alertHtml2 = _interopRequireDefault(_alertHtml);
	
	var _snippetHtml = __webpack_require__(30);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsAlert = __webpack_require__(31);
	
	var _srcComponentsAlert2 = _interopRequireDefault(_srcComponentsAlert);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	exports['default'] = {
	  template: _alertHtml2['default'],
	  data: function data() {
	    return {
	      meta: _alertJson2['default'],
	      snippet: _snippetHtml2['default'],
	      show: true,
	      dismissible: true,
	      message: '<strong>Note</strong> This is an html message',
	      state: 'success',
	      states: [{ text: 'default', value: 'default' }, { text: 'success', value: 'success' }, { text: 'danger', value: 'danger' }, { text: 'warning', value: 'warning' }, { text: 'info', value: 'info' }]
	    };
	  },
	  components: {
	    'alert': _srcComponentsAlert2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = {
		"name": "alert",
		"title": "Alert",
		"description": "Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "show",
				"type": "Boolean",
				"default": false,
				"required": true,
				"description": "Show/hides the alert."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "Type of the alert."
			},
			{
				"name": "dismissible",
				"type": "Boolean",
				"default": false,
				"description": "Show/hide close button."
			}
		]
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>show <input type=\"checkbox\" v-model=\"show\"></label>\r\n\t\t<label>dismissible <input type=\"checkbox\" v-model=\"dismissible\"></label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<alert\r\n\t\t    :show.sync=\"show\"\r\n\t\t    :state=\"state\"\r\n\t\t    :message=\"message\"\r\n\t\t    :dismissible=\"dismissible\">\r\n\t\t    This is an alert\r\n\t\t</alert>\r\n\t\t<template v-if=\"!show\">\r\n\t\t\t<button href='#' v-on:click=\"show = true\">Show alert again</button>\r\n\t\t</template>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">alert</span> \r\n  <span class=\"hljs-attribute\">show.sync</span>=<span class=\"hljs-value\">\"showVariable\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"state\"</span>\r\n  <span class=\"hljs-attribute\">:message</span>=<span class=\"hljs-value\">\"message\"</span>\r\n  <span class=\"hljs-attribute\">dismissible</span>&gt;</span>\r\n  This is an alert\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">alert</span>&gt;</span>\r\n";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(22);
	
	var _alertHtml = __webpack_require__(32);
	
	var _alertHtml2 = _interopRequireDefault(_alertHtml);
	
	// export component object
	exports['default'] = {
	  template: _alertHtml2['default'],
	  replace: true,
	  computed: {
	    alertState: function alertState() {
	      return !this.state || this.state === 'default' ? 'alert-success' : 'alert-' + this.state;
	    }
	  },
	  props: {
	    show: {
	      type: Boolean,
	      'default': false,
	      required: true
	    },
	    state: {
	      type: String,
	      'default': 'success'
	    },
	    dismissible: {
	      type: Boolean,
	      'default': false
	    }
	  },
	  methods: {
	    dismiss: function dismiss() {
	      // hide an alert
	      this.show = false;
	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      this.$dispatch('dismissed::alert');
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div class=\"alert {{alertState}} {{ dismissible ? 'alert-dismissible' : '' }} fade in\" role=\"alert\" v-show=\"show\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" v-if=\"dismissible\" v-on:click.stop=\"dismiss\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n        <span class=\"sr-only\">Close</span>\r\n    </button>\r\n    <slot></slot>\r\n</div>\r\n";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _breadcrumbJson = __webpack_require__(34);
	
	var _breadcrumbJson2 = _interopRequireDefault(_breadcrumbJson);
	
	var _breadcrumbHtml = __webpack_require__(35);
	
	var _breadcrumbHtml2 = _interopRequireDefault(_breadcrumbHtml);
	
	var _snippetHtml = __webpack_require__(36);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsBreadcrumb = __webpack_require__(37);
	
	var _srcComponentsBreadcrumb2 = _interopRequireDefault(_srcComponentsBreadcrumb);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	exports['default'] = {
	  template: _breadcrumbHtml2['default'],
	  data: function data() {
	    return {
	      meta: _breadcrumbJson2['default'],
	      snippet: _snippetHtml2['default'],
	      list: [{ text: 'Home', href: '#' }, { text: 'Library', active: true }]
	    };
	  },
	  components: {
	    'breadcrumb': _srcComponentsBreadcrumb2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = {
		"name": "breadcrumb",
		"title": "Breadcrumb",
		"description": "Indicate the current page’s location within a navigational hierarchy.",
		"dependencies": [],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of links."
			}
		]
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<breadcrumb\r\n    \t\t:list=\"list\">\r\n\t\t\t</breadcrumb>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\t\r\n</docs-demo>\t\r\n";

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">breadcrumb</span> <span class=\"hljs-attribute\">:list</span>=<span class=\"hljs-value\">\"[{text: 'Home', href: '#'}, {text: 'Library', active: true}]\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">breadcrumb</span>&gt;</span>\r\n";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(38);
	
	var _breadcrumbHtml = __webpack_require__(41);
	
	var _breadcrumbHtml2 = _interopRequireDefault(_breadcrumbHtml);
	
	// export component object
	exports['default'] = {
	  template: _breadcrumbHtml2['default'],
	  replace: true,
	  props: {
	    list: {
	      type: Array,
	      'default': [],
	      required: true
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(39);

/***/ },
/* 39 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 40 */,
/* 41 */
/***/ function(module, exports) {

	module.exports = "<ol class=\"breadcrumb\" style=\"margin-bottom: 5px;\">\r\n    <li v-for=\"item in list\" v-bind:class=\"{ active: active }\">\r\n        <a href=\"{{item.href}}\" v-if=\"!active\">{{item.text}}</a>\r\n        <span v-if=\"active\">{{item.text}}</span>\r\n    </li>\r\n</ol>";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _buttonCheckboxJson = __webpack_require__(43);
	
	var _buttonCheckboxJson2 = _interopRequireDefault(_buttonCheckboxJson);
	
	var _buttonCheckboxHtml = __webpack_require__(44);
	
	var _buttonCheckboxHtml2 = _interopRequireDefault(_buttonCheckboxHtml);
	
	var _snippetHtml = __webpack_require__(45);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsButtonCheckbox = __webpack_require__(46);
	
	var _srcComponentsButtonCheckbox2 = _interopRequireDefault(_srcComponentsButtonCheckbox);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _buttonCheckboxHtml2['default'],
	  data: function data() {
	    return {
	      meta: _buttonCheckboxJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: ['second'],
	      list: [{
	        text: 'First',
	        value: 'first',
	        checked: false
	      }, {
	        text: 'Second',
	        value: 'second',
	        checked: false
	      }, {
	        text: 'Third',
	        value: 'third',
	        checked: false
	      }],
	      size: 'md',
	      sizes: _utils.sizes,
	      variant: 'primary',
	      variants: _utils.variants
	    };
	  },
	  components: {
	    'button-checkbox': _srcComponentsButtonCheckbox2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = {
		"name": "button-checkbox",
		"title": "Button Checkbox",
		"description": "Allows to elect one or more items in the nested group of buttons.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of checkbox items."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t{{model}}\r\n\t<div slot=\"markup\">\r\n\t\t\t<button-checkbox\r\n\t\t\t  :list.sync=\"list\"\r\n\t\t\t  :model.sync=\"model\"\r\n\t\t\t  :size=\"size\"\r\n\t\t\t  :variant=\"variant\">\r\n\t\t\t</button-checkbox>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button-checkbox</span> \r\n  <span class=\"hljs-attribute\">:list.sync</span>=<span class=\"hljs-value\">\" [{\r\n    text: 'First',\r\n    value: 'first',\r\n  }, {\r\n    text: 'Second',\r\n    value: 'second',\r\n  }, {\r\n    text: 'Third',\r\n    value: 'third',\r\n  }]\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button-checkbox</span>&gt;</span>\r\n";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(47);
	
	var _buttonCheckboxHtml = __webpack_require__(50);
	
	var _buttonCheckboxHtml2 = _interopRequireDefault(_buttonCheckboxHtml);
	
	// export component object
	exports['default'] = {
	  template: _buttonCheckboxHtml2['default'],
	  replace: true,
	  computed: {
	    btnVariant: function btnVariant() {
	      return !this.variant || this.variant === 'default' ? 'btn-secondary' : 'btn-' + this.variant;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    }
	  },
	  methods: {
	    checked: function checked(index) {
	      if (!this.list) return false;
	      return this.model.indexOf(this.list[index].value) !== -1;
	    }
	  },
	  props: {
	    list: {
	      type: Array,
	      'default': [],
	      twoWay: true,
	      required: true
	    },
	    model: {
	      type: Array,
	      twoWay: true,
	      'default': []
	    },
	    size: {
	      type: String,
	      'default': 'md'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    }
	  },
	  watch: {
	    list: {
	      handler: function handler() {
	        var _this = this;
	
	        this.model = [];
	        this.list.forEach(function (item) {
	          if (item.checked) {
	            _this.model.push(item.value);
	          }
	        });
	        // dispatch an event
	        this.$dispatch('changed::button-checkbox', this.model);
	      },
	      deep: true
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(48);
	
	__webpack_require__(25);

/***/ },
/* 48 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 49 */,
/* 50 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\r\n  <label class=\"btn {{btnVariant}} {{btnSize}} {{ checked($index) ? 'active' : '' }}\" v-for=\"item in list\">\r\n    <input type=\"checkbox\" autocomplete=\"off\" v-model=\"item.checked\">{{item.text}}</label>\r\n</div>\r\n";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _buttonGroupJson = __webpack_require__(52);
	
	var _buttonGroupJson2 = _interopRequireDefault(_buttonGroupJson);
	
	var _buttonGroupHtml = __webpack_require__(53);
	
	var _buttonGroupHtml2 = _interopRequireDefault(_buttonGroupHtml);
	
	var _snippetHtml = __webpack_require__(54);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsButtonGroup = __webpack_require__(55);
	
	var _srcComponentsButtonGroup2 = _interopRequireDefault(_srcComponentsButtonGroup);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	exports['default'] = {
	  template: _buttonGroupHtml2['default'],
	  data: function data() {
	    return {
	      meta: _buttonGroupJson2['default'],
	      snippet: _snippetHtml2['default']
	    };
	  },
	  components: {
	    'button-group': _srcComponentsButtonGroup2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = {
		"name": "button-group",
		"title": "Button Group",
		"description": "Group a series of buttons together on a single line with the button group.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "vertical",
				"type": "Boolean",
				"default": false,
				"required": false,
				"description": "Stacks buttons in vertical position."
			}
		]
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>vertical <input type=\"checkbox\" v-model=\"vertical\"></label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<button-group :vertical=\"vertical\">\r\n\t\t\t  <button type=\"button\" class=\"btn btn-secondary\">Left</button>\r\n\t\t\t  <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\r\n\t\t\t  <button type=\"button\" class=\"btn btn-secondary\">Right</button>\r\n\t\t\t</button-group>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n</docs-demo>\t\r\n";

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button-group</span> <span class=\"hljs-attribute\">vertical</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"button\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-secondary\"</span>&gt;</span>Left<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"button\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-secondary\"</span>&gt;</span>Middle<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"button\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-secondary\"</span>&gt;</span>Right<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button-group</span>&gt;</span>\r\n";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(47);
	
	var _buttonGroupHtml = __webpack_require__(56);
	
	var _buttonGroupHtml2 = _interopRequireDefault(_buttonGroupHtml);
	
	// export component object
	exports['default'] = {
	    template: _buttonGroupHtml2['default'],
	    replace: true,
	    props: {
	        vertical: {
	            type: Boolean,
	            'default': false
	        }
	    }
	};
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\" v-bind:class=\"{ 'btn-group-vertical': vertical }\">\r\n\t<slot></slot>\r\n</div>\r\n";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _buttonRadioJson = __webpack_require__(58);
	
	var _buttonRadioJson2 = _interopRequireDefault(_buttonRadioJson);
	
	var _buttonRadioHtml = __webpack_require__(59);
	
	var _buttonRadioHtml2 = _interopRequireDefault(_buttonRadioHtml);
	
	var _snippetHtml = __webpack_require__(60);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsButtonRadio = __webpack_require__(61);
	
	var _srcComponentsButtonRadio2 = _interopRequireDefault(_srcComponentsButtonRadio);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _buttonRadioHtml2['default'],
	  data: function data() {
	    return {
	      meta: _buttonRadioJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: 'second',
	      list: [{
	        text: 'First',
	        value: 'first'
	      }, {
	        text: 'Second',
	        value: 'second'
	      }, {
	        text: 'Third',
	        value: 'third'
	      }],
	      size: 'md',
	      sizes: _utils.sizes,
	      variant: 'primary',
	      variants: _utils.variants
	    };
	  },
	  components: {
	    'button-radio': _srcComponentsButtonRadio2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = {
		"name": "button-radio",
		"title": "Button Radio",
		"description": "Alllows to select only one item out of a group of buttons.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "model",
				"type": "String",
				"default": "''",
				"required": true,
				"description": "A result of the selection. Two way binding."
			},
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of checkbox items."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t\t<label>\r\n\t\t\t\tsize\r\n\t\t\t\t<select v-model=\"size\">\r\n\t\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\r\n\t\t\t<label>\r\n\t\t\t\tvariant\r\n\t\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<button-radio\r\n\t\t\t:model.sync=\"model\"\r\n\t    :list=\"list\"\r\n\t    :size=\"size\"\r\n\t    :variant=\"variant\">\r\n\t\t</button-radio>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\t\r\n</docs-demo>\t\r\n";

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button-radio</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">:list</span>=<span class=\"hljs-value\">\"[{\r\n      text: 'First',\r\n      value: 'first',\r\n    }, {\r\n      text: 'Second',\r\n      value: 'second',\r\n    }, {\r\n      text: 'Third',\r\n      value: 'third',\r\n    }]\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button-radio</span>&gt;</span>\r\n";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(47);
	
	var _buttonRadioHtml = __webpack_require__(62);
	
	var _buttonRadioHtml2 = _interopRequireDefault(_buttonRadioHtml);
	
	// export component object
	exports['default'] = {
	  template: _buttonRadioHtml2['default'],
	  replace: true,
	  computed: {
	    btnVariant: function btnVariant() {
	      return !this.variant || this.variant === 'default' ? 'btn-secondary' : 'btn-' + this.variant;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    },
	    btnActive: function btnActive() {
	      return item.value;
	    }
	  },
	  props: {
	    model: {
	      type: String,
	      twoWay: true,
	      required: true
	    },
	    list: {
	      type: Array,
	      'default': [],
	      required: true
	    },
	    size: {
	      type: String,
	      'default': 'md'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    }
	  },
	  watch: {
	    model: {
	      handler: function handler() {
	        // dispatch an event
	        this.$dispatch('changed::button-radio', this.model);
	      },
	      deep: true
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group\" data-toggle=\"buttons\">\r\n    <label \r\n    \tclass=\"btn {{btnVariant}} {{btnSize}} {{ model == item.value ? 'active' : '' }}\" \r\n    \tv-for=\"item in list\">\r\n      <input \r\n      \ttype=\"radio\" \r\n      \tname=\"options\" \r\n      \tvalue=\"{{item.value}}\" \r\n      \tautocomplete=\"off\" \r\n      \tv-model=\"model\"> {{item.text}}\r\n    </label>\r\n</div>\r\n";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _buttonsJson = __webpack_require__(64);
	
	var _buttonsJson2 = _interopRequireDefault(_buttonsJson);
	
	var _buttonsHtml = __webpack_require__(65);
	
	var _buttonsHtml2 = _interopRequireDefault(_buttonsHtml);
	
	var _snippetHtml = __webpack_require__(66);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsButtons = __webpack_require__(67);
	
	var _srcComponentsButtons2 = _interopRequireDefault(_srcComponentsButtons);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _buttonsHtml2['default'],
	  data: function data() {
	    return {
	      meta: _buttonsJson2['default'],
	      snippet: _snippetHtml2['default'],
	      size: 'md',
	      sizes: _utils.sizes,
	      variant: 'primary',
	      variants: _utils.variants
	    };
	  },
	  components: {
	    'btn': _srcComponentsButtons2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = {
		"name": "buttons",
		"title": "Buttons",
		"description": "Use Bootstrap’s custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "block",
				"type": "Boolean",
				"default": false,
				"description": "Button spans over full width of a parent."
			},
			{
				"name": "disabled",
				"type": "Boolean",
				"default": false,
				"description": "Make buttons look inactive by adding the disabled boolean attribute to any <code>&lt;button></code> element."
			},
			{
				"name": "href",
				"type": "String",
				"default": "",
				"description": "If <code>href</code> is provided, button is a regular <code>&lt;a></code> link with button spacing."
			},
			{
				"name": "role",
				"type": "String",
				"default": "",
				"description": "if <code>&lt;a></code> elements are used to trigger in-page functionality (like collapsing content), than these links should be given a <code>role='button'</code>"
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "type",
				"type": "String",
				"values": [
					"button",
					"submit"
				],
				"default": "button",
				"description": "Button type."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link",
					"secondary-outline",
					"primary-outline",
					"success-outline",
					"info-outline",
					"warning-outline",
					"danger-outline"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<btn :size=\"size\" variant=\"primary\">Primary</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"secondary\">Secondary</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"success\">Success</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"warning\">Warning</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"danger\">Danger</btn>\r\n\t\t\t<hr>\r\n\t\t\t<btn :size=\"size\" variant=\"primary-outline\">Primary</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"secondary-outline\">Secondary</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"success-outline\">Success</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"warning-outline\">Warning</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"danger-outline\">Danger</btn>\r\n\t\t\t<hr>\r\n\t\t\t<btn :size=\"size\" variant=\"link\">Button Link</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"link\" href=\"#\">Regular Link</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"primary\" type=\"submit\">Submit</btn>\r\n\t\t\t<btn :size=\"size\" variant=\"primary\" :disabled=\"true\">Disabled</btn>\r\n\t\t\t<hr>\r\n\t\t\t<btn :size=\"size\" variant=\"primary\" :block=\"true\">Block</btn>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- colour variants --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>&gt;</span>Primary<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"secondary\"</span>&gt;</span>Secondary<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"success\"</span>&gt;</span>Success<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"warning\"</span>&gt;</span>Warning<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"danger\"</span>&gt;</span>Danger<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">btn</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- outlined variants --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary-outline\"</span>&gt;</span>Primary<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"secondary-outline\"</span>&gt;</span>Secondary<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"success-outline\"</span>&gt;</span>Success<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"warning-outline\"</span>&gt;</span>Warning<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"danger-outline\"</span>&gt;</span>Danger<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">btn</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- button types --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"link\"</span>&gt;</span>Button Link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"link\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Regular Link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"submit\"</span>&gt;</span>Submit<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>Disabled<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">btn</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">btn</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span> <span class=\"hljs-attribute\">block</span>&gt;</span>Block<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">btn</span>&gt;</span>\r\n";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(68);
	
	var _buttonsHtml = __webpack_require__(69);
	
	var _buttonsHtml2 = _interopRequireDefault(_buttonsHtml);
	
	// export component object
	exports['default'] = {
	  template: _buttonsHtml2['default'],
	  replace: true,
	  computed: {
	    btnBlock: function btnBlock() {
	      return this.block ? 'btn-block' : '';
	    },
	    btnVariant: function btnVariant() {
	      return !this.variant || this.variant === 'default' ? 'btn-secondary' : 'btn-' + this.variant;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    }
	  },
	  props: {
	    block: {
	      type: Boolean,
	      'default': false
	    },
	    disabled: {
	      type: Boolean,
	      'default': false
	    },
	    href: {
	      type: String,
	      'default': ''
	    },
	    role: {
	      type: String,
	      'default': ''
	    },
	    size: {
	      type: String,
	      'default': 'md'
	    },
	    type: {
	      type: String,
	      'default': 'button'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    }
	  },
	  methods: {}
	};
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(25);

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<button type=\"{{type}}\" class=\"btn {{btnVariant}} {{btnSize}} {{btnBlock}}\" v-bind:disabled=\"disabled\" v-if=\"!href\"><slot></slot></button>\r\n<a v-bind:href=\"href\" class=\"btn {{btnVariant}} {{btnSize}} {{btnBlock}} {{btnDisabled}}\" v-if=\"href\" v-bind:role=\"role\"><slot></slot></a>";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _cardJson = __webpack_require__(71);
	
	var _cardJson2 = _interopRequireDefault(_cardJson);
	
	var _cardHtml = __webpack_require__(72);
	
	var _cardHtml2 = _interopRequireDefault(_cardHtml);
	
	var _snippetHtml = __webpack_require__(73);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsCard = __webpack_require__(74);
	
	var _srcComponentsCard2 = _interopRequireDefault(_srcComponentsCard);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _cardHtml2['default'],
	  data: function data() {
	    return {
	      meta: _cardJson2['default'],
	      snippet: _snippetHtml2['default'],
	      align: 'left',
	      aligns: [{ text: 'left', value: 'left' }, { text: 'center', value: 'center' }, { text: 'right', value: 'right' }],
	      type: 'default',
	      types: [{ text: 'default', value: 'default' }, { text: 'inverse', value: 'inverse' }, { text: 'image-overlay', value: 'image-overlay' }],
	      variant: 'default',
	      variants: _utils.variants
	    };
	  },
	  components: {
	    'card': _srcComponentsCard2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = {
		"name": "card",
		"title": "Card",
		"description": "A card is a flexible and extensible content container.",
		"dependencies": [
			"vuestrap/buttons",
			"vuestrap/images",
			"vuestrap/list-group"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "align",
				"type": "String",
				"values": [
					"left",
					"right",
					"center"
				],
				"default": "'left'",
				"required": false,
				"description": "Position text inside the box."
			},
			{
				"name": "type",
				"type": "String",
				"values": [
					"image-overlay",
					"inverse"
				],
				"default": "''",
				"required": false,
				"description": "When inverse is set it will change font text in div content block to bright. If 'image-overlay' is set,  it will also set the position aboslute of the block to overlay image."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"primary",
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>\r\n\t\t\tvariant\r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\r\n\t\t<label>\r\n\t\t\ttype\r\n\t\t\t<select v-model=\"type\">\r\n\t\t\t\t<option v-for=\"option in types\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\r\n\t\t<label>\r\n\t\t\talign\r\n\t\t\t<select v-model=\"align\">\r\n\t\t\t\t<option v-for=\"option in aligns\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<card style=\"max-width: 350px;\" \r\n\t\t\t\t:variant=\"variant\"\r\n\t\t\t\t:type=\"type\"\r\n\t\t\t\t:align=\"align\">\r\n\t\t\t\t<img class=\"card-img img-fluid\" v-bind:src=\"'assets/card-350x150.png'\" alt=\"Card image cap\">\r\n\t\t\t  <div class=\"card-block\">\r\n\t\t\t    <h4 class=\"card-title\">Card title</h4>\r\n\t\t\t    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n\t\t\t  </div>\r\n\t\t  </card>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">card</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"default\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"default\"</span> <span class=\"hljs-attribute\">align</span>=<span class=\"hljs-value\">\"left\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-img img-fluid\"</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"https://placehold.it/350x150\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"Card image cap\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h4</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-title\"</span>&gt;</span>Card title<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h4</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card-text\"</span>&gt;</span>Some quick example text to build on the card title and make up the bulk of the card's content.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary\"</span>&gt;</span>Button<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">card</span>&gt;</span>\r\n";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(75);
	
	var _cardHtml = __webpack_require__(82);
	
	var _cardHtml2 = _interopRequireDefault(_cardHtml);
	
	// import polyfill for IE9
	
	__webpack_require__(14);
	
	// export component object
	exports['default'] = {
	  template: _cardHtml2['default'],
	  replace: true,
	  computed: {
	    cardVariant: function cardVariant() {
	      return !this.variant || this.variant === 'default' ? 'card-default' : 'card-' + this.variant;
	    },
	    cardInverse: function cardInverse() {
	      return this.type === 'image-overlay' || this.type === 'inverse' ? 'card-inverse' : '';
	    },
	    cardAlign: function cardAlign() {
	      return 'text-' + this.align;
	    }
	  },
	  props: {
	    align: {
	      type: String,
	      'default': 'left'
	    },
	    type: {
	      type: String,
	      'default': 'default'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    }
	  },
	  watch: {
	    'type': function type(val) {
	      // get first card-block or div and apply a card-image-overlay class if image-overlay slected
	      var div = this.$el.getElementsByClassName('card-block')[0] || this.$el.getElementsByTagName('div')[0];
	      if (val === 'image-overlay') {
	        div.classList.add('card-img-overlay');
	      } else {
	        div.classList.remove('card-img-overlay');
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(76);
	
	__webpack_require__(25);
	
	__webpack_require__(78);
	
	__webpack_require__(80);

/***/ },
/* 76 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 77 */,
/* 78 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 79 */,
/* 80 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 81 */,
/* 82 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card {{cardVariant}} {{cardAlign}} {{cardInverse}}\">\r\n    <slot></slot>\r\n</div>\r\n";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _carouselJson = __webpack_require__(84);
	
	var _carouselJson2 = _interopRequireDefault(_carouselJson);
	
	var _carouselHtml = __webpack_require__(85);
	
	var _carouselHtml2 = _interopRequireDefault(_carouselHtml);
	
	var _snippetHtml = __webpack_require__(86);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsCarousel = __webpack_require__(87);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _carouselHtml2['default'],
	  data: function data() {
	    return {
	      meta: _carouselJson2['default'],
	      snippet: _snippetHtml2['default'],
	      controls: true,
	      indicators: true
	    };
	  },
	  components: {
	    'slide': _srcComponentsCarousel.slide,
	    'carousel': _srcComponentsCarousel.carousel,
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = {
		"name": "carousel",
		"title": "Carousel",
		"description": "",
		"dependencies": [
			"vuestrap/{dependency}"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "interval",
				"type": "Number",
				"default": "5000",
				"required": "false",
				"description": "Slides will be auto rotated every 5000ms (5s). To stop auto-rotation set interval to 0."
			},
			{
				"name": "indicators",
				"type": "Boolean",
				"default": true,
				"required": "false",
				"description": "Show/hide indicators."
			},
			{
				"name": "controls",
				"type": "Boolean",
				"default": true,
				"required": "false",
				"description": "Show/hide controls."
			}
		]
	};

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<!-- Html controls start-->\r\n\t<div slot=\"controls\">\r\n\t\t<label>controls <input type=\"checkbox\" v-model=\"controls\"></label>\r\n\t\t<label>indicators <input type=\"checkbox\" v-model=\"indicators\"></label>\r\n\t</div>\r\n\t<!-- Html controls end-->\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<carousel\r\n\t\t\t\t:interval=\"5000\",\r\n\t\t\t\t:controls=\"controls\"\r\n\t\t\t\t:indicators=\"indicators\">\r\n\t\t\t  <slide>\r\n\t\t\t    <img v-bind:src=\"'assets/carousel-one.png'\" class=\"img-fluid\">\r\n\t\t\t  </slide>\r\n\t\t\t  <slide>\r\n\t\t\t    <img v-bind:src=\"'assets/carousel-two.png'\" class=\"img-fluid\">\r\n\t\t\t  </slide>\r\n\t\t\t  <slide>\r\n\t\t\t    <img v-bind:src=\"'assets/carousel-three.png'\" class=\"img-fluid\">\r\n\t\t\t  </slide>\r\n\t\t\t</carousel>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">carousel</span> <span class=\"hljs-attribute\">:interval</span>=<span class=\"hljs-value\">\"5000\"</span> <span class=\"hljs-attribute\">controls</span>=<span class=\"hljs-value\">\"false\"</span> <span class=\"hljs-attribute\">indicators</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slide</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/1200x400?text=one\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slide</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slide</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/1200x400?text=two\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slide</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">slide</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/1200x400?text=three\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">slide</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">carousel</span>&gt;</span>\r\n";

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Carousel Notes
	 * - Ie9 does not support transitions and might require javascript fallbacks. B4 deliberately dropped support for this.
	 * - It is not accessible.
	 *
	 * How it works:
	 * - active element applies the transition to the slide but not triggers it
	 * - we need to use 'right' and 'left' classes to trigger animation
	 * - 'next' and 'prev' class makes the incoming slide positioned absolute, so it can follow outgoing slide
	 *
	 * The slide right to left we have to:
	 * - add class 'active', 'next', and right to the next slide
	 * - add class 'left' on the current slide same time as remove the 'right' class on the incoming one
	 * - remove all classes and only leave 'active' on the incoming slide
	 *
	 */
	
	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(88);
	
	var _carouselHtml = __webpack_require__(91);
	
	var _carouselHtml2 = _interopRequireDefault(_carouselHtml);
	
	var _utils = __webpack_require__(12);
	
	// import polyfill for IE9
	
	__webpack_require__(14);
	
	// this is directly linked to the bootstrap animation timing in _carusel.scss
	// for browsers that do not support transitions like IE9 just change slide immediately
	var TRANSITION_DURATION = (0, _utils.csstransitions)() ? 600 : 0;
	
	// when next is set, we want to move from right to left
	// when previous is set, we want to move from left to right
	var DIRECTION = {
	  rtl: {
	    outgoing: 'left',
	    incoming: 'right',
	    overlay: 'next'
	  },
	  ltr: {
	    outgoing: 'right',
	    incoming: 'left',
	    overlay: 'prev'
	  }
	};
	
	// export carosuel object
	var carousel = {
	  template: _carouselHtml2['default'],
	  replace: true,
	  computed: {},
	  data: function data() {
	    return {
	      index: 0,
	      slidesCount: 0,
	      animating: false,
	      slides: [],
	      direction: DIRECTION.rtl
	    };
	  },
	  props: {
	    interval: {
	      type: Number,
	      'default': 5000
	    },
	    indicators: {
	      type: Boolean,
	      'default': true
	    },
	    controls: {
	      type: Boolean,
	      'default': true
	    }
	  },
	  methods: {
	    // previous slide
	    prev: function prev() {
	      if (this.animating) return;
	      this.index--;
	      if (this.index < 0) {
	        this.index = this.slidesCount;
	      }
	    },
	    // next slide
	    next: function next() {
	      if (this.animating) return;
	      this.index++;
	      if (this.index > this.slidesCount) {
	        this.index = 0;
	      }
	    },
	    // on slide change
	    changeSlide: function changeSlide(index) {
	      this.index = index;
	    },
	    // pause auto rotation
	    pause: function pause() {
	      if (this.interval === 0 || typeof this.interval === 'undefined') return;
	      clearInterval(this._intervalId);
	    },
	    // start auto rotate slides
	    start: function start() {
	      var _this = this;
	
	      if (this.interval === 0 || typeof this.interval === 'undefined') return;
	      this._intervalId = setInterval(function () {
	        _this.next();
	      }, this.interval);
	    }
	  },
	  ready: function ready() {
	    // get all slides
	    this._items = this.$el.querySelectorAll('.carousel-item');
	    this.slidesCount = this._items.length - 1;
	    this.slides = Array.apply(null, { length: this._items.length }).map(Number.call, Number);
	
	    // set first slide as active
	    this._items[0].classList.add('active');
	
	    // auto rotate slides
	    this.start();
	  },
	  watch: {
	    index: function index(val, oldVal) {
	      var _this2 = this;
	
	      this.animating = true;
	      this.direction = DIRECTION.rtl;
	
	      // when previous is pressed we want to move from left to right
	      if (val < oldVal) {
	        this.direction = DIRECTION.ltr;
	      }
	
	      // lets animate
	      // prepare next slide to animate (position it on the opposite side of the direction as a starting point)
	      this._items[val].classList.add(this.direction.incoming, this.direction.overlay);
	      // reflow
	      this._items[val].offsetWidth;
	      // add class active
	      this._items[val].classList.add('active');
	      // trigger animation on outgoing and incoming slide
	      this._items[oldVal].classList.add(this.direction.outgoing);
	      this._items[val].classList.remove(this.direction.incoming);
	      // wait for animation to finish and cleanup classes
	      setTimeout(function () {
	        _this2._items[oldVal].classList.remove(_this2.direction.outgoing, 'active');
	        _this2._items[val].classList.remove(_this2.direction.overlay);
	        _this2.animating = false;
	        // trigger an event
	        _this2.$dispatch('slid::carousel', val);
	      }, TRANSITION_DURATION);
	    }
	  }
	};
	
	exports.carousel = carousel;
	// export slide object
	var slide = {
	  template: '<div class="carousel-item"><slot></slot></div>',
	  replace: true
	};
	exports.slide = slide;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(78);
	
	__webpack_require__(89);

/***/ },
/* 89 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 90 */,
/* 91 */
/***/ function(module, exports) {

	module.exports = "<div class=\"carousel slide\" data-ride=\"carousel\" v-on:mouseenter=\"pause()\" v-on:mouseleave=\"start()\">\r\n\r\n    <!-- Indicators -->\r\n    <ol class=\"carousel-indicators\" v-show=\"indicators\">\r\n        <li v-for=\"item in slides\" v-bind:class=\"{'active': item == index}\" v-on:click=\"changeSlide($index)\"></li>\r\n    </ol>\r\n\r\n    <!-- Wrapper for slides -->\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n        <slot></slot>\r\n    </div>\r\n\r\n    <!-- Controls -->\r\n    <a class=\"left carousel-control\" href=\"#\" role=\"button\" v-on:click.prevent=\"prev\" v-show=\"controls\">\r\n        <span class=\"icon-prev\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"right carousel-control\" href=\"#\" role=\"button\" v-on:click.prevent=\"next\" v-show=\"controls\">\r\n        <span class=\"icon-next\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n    </a>\r\n\r\n</div>";

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _collapseJson = __webpack_require__(93);
	
	var _collapseJson2 = _interopRequireDefault(_collapseJson);
	
	var _collapseHtml = __webpack_require__(94);
	
	var _collapseHtml2 = _interopRequireDefault(_collapseHtml);
	
	var _snippetHtml = __webpack_require__(95);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsCollapse = __webpack_require__(10);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	exports['default'] = {
	  template: _collapseHtml2['default'],
	  data: function data() {
	    return {
	      meta: _collapseJson2['default'],
	      snippet: _snippetHtml2['default']
	    };
	  },
	  components: {
	    'collapse': _srcComponentsCollapse.collapse,
	    'collapseToggle': _srcComponentsCollapse.collapseToggle,
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = {
		"name": "collapse",
		"title": "Collapse",
		"description": "Click the buttons below to show and hide another element. It requires either <code>id</code> or <code>group</code> (but not both) for this to work.",
		"dependencies": [
			"vuestrap/collapseToggle"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "id",
				"type": "String",
				"default": "",
				"required": "false",
				"description": "With <code>id</code> you can control individual collapse elements. Use same unique <code>id</code> for both <code>&lt;collapse></code> and <code>&lt;collapse-toggle></code> elements."
			},
			{
				"name": "group",
				"type": "String",
				"default": "",
				"required": "false",
				"description": "With <code>group</code> you can control a number of collapse elements. Use same unique <code>group</code> for all <code>&lt;collapse></code> and <code>&lt;collapse-toggle></code> elements."
			}
		]
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\r\n\t<!-- Html markup start-->\r\n\t<div slot=\"markup\">\r\n\t\t<collapse-toggle id=\"collapse-1\">\r\n\t\t\t<button class=\"btn btn-default\">Toogle first</button>\r\n\t\t</collapse-toggle>\r\n\t\t<collapse-toggle id=\"collapse-2\">\r\n\t\t\t<button class=\"btn btn-default\">Toogle second</button>\r\n\t\t</collapse-toggle>\r\n\t\t<collapse-toggle group=\"group-1\">\r\n\t\t\t<button class=\"btn btn-default\">Toogle all</button>\r\n\t\t</collapse-toggle>\r\n\t\t\r\n\t\t<div class=\"m-b\"></div>\r\n\r\n\t\t<collapse id=\"collapse-1\" group=\"group-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>First</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</collapse>\r\n\t\t<collapse id=\"collapse-2\" group=\"group-1\">\r\n\t\t\t<div class=\"card card-block\">\r\n\t\t\t\t<h5>Second</h5>\r\n\t\t    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n\t\t  </div>\r\n\t\t</collapse>\r\n\t</div>\r\n\t<!-- Html markup end-->\r\n\r\n</docs-demo>\t\r\n";

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- triggers --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapse-toggle</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"collapse-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-default\"</span>&gt;</span>Toogle first<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapse-toggle</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapse-toggle</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"collapse-2\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-default\"</span>&gt;</span>Toogle second<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapse-toggle</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapse-toggle</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"group-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-default\"</span>&gt;</span>Toogle all<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapse-toggle</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- item 1 --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapse</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"collapse-1\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"group-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h5</span>&gt;</span>First<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h5</span>&gt;</span>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapse</span>&gt;</span>\r\n\r\n<span class=\"hljs-comment\">&lt;!-- item 2 --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">collapse</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"collapse-2\"</span> <span class=\"hljs-attribute\">group</span>=<span class=\"hljs-value\">\"group-1\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"card card-block\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h5</span>&gt;</span>Second<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h5</span>&gt;</span>\r\n    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">collapse</span>&gt;</span>\r\n";

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _dropdownJson = __webpack_require__(97);
	
	var _dropdownJson2 = _interopRequireDefault(_dropdownJson);
	
	var _dropdownHtml = __webpack_require__(98);
	
	var _dropdownHtml2 = _interopRequireDefault(_dropdownHtml);
	
	var _snippetHtml = __webpack_require__(99);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsDropdown = __webpack_require__(100);
	
	var _srcComponentsDropdown2 = _interopRequireDefault(_srcComponentsDropdown);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _dropdownHtml2['default'],
	  data: function data() {
	    return {
	      meta: _dropdownJson2['default'],
	      snippet: _snippetHtml2['default'],
	      caret: true,
	      size: 'md',
	      sizes: _utils.sizes,
	      variant: 'primary',
	      variants: _utils.variants
	    };
	  },
	  components: {
	    'dropdown': _srcComponentsDropdown2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = {
		"name": "dropdown",
		"title": "Dropdown",
		"description": "Dropdowns are toggleable, contextual overlays for displaying lists of links.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "icon",
				"type": "String",
				"default": "",
				"required": false,
				"description": "Show icon to the left of the button text."
			},
			{
				"name": "caret",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "Show/hide down caret.."
			},
			{
				"name": "text",
				"type": "String",
				"default": "",
				"required": false,
				"description": "Button text.."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button.."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>caret <input type=\"checkbox\" v-model=\"caret\"></label>\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t</div>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<dropdown\r\n\t\t\t  :text=\"'Action'\"\r\n\t\t\t  :variant=\"variant\"\r\n\t\t\t  :size=\"size\"\r\n\t\t\t  :caret=\"caret\">\r\n\t\t\t  <ul class=\"dropdown-menu\">\r\n\t\t\t      <li><a class=\"dropdown-item\" href=\"#\" v-on:click.prevent=\"\">Completed</a></li>\r\n\t\t\t      <li><a class=\"dropdown-item\" href=\"#\" v-on:click.prevent=\"\">Pending</a></li>\r\n\t\t\t  </ul>\r\n\t\t\t</dropdown>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">dropdown</span> \r\n  <span class=\"hljs-attribute\">text</span>=<span class=\"hljs-value\">\"Action\"</span>\r\n  <span class=\"hljs-attribute\">icon</span>=<span class=\"hljs-value\">\"\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>\r\n  <span class=\"hljs-attribute\">caret</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"dropdown-menu\"</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"dropdown-item\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Completed<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"dropdown-item\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Pending<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">dropdown</span>&gt;</span>\r\n";

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(101);
	
	var _dropdownHtml = __webpack_require__(104);
	
	var _dropdownHtml2 = _interopRequireDefault(_dropdownHtml);
	
	// export component object
	exports['default'] = {
	  template: _dropdownHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	  computed: {
	    btnVariant: function btnVariant() {
	      return !this.variant || this.variant === 'default' ? 'btn-secondary' : 'btn-' + this.variant;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    },
	    dropdownToggle: function dropdownToggle() {
	      return this.caret ? 'dropdown-toggle' : '';
	    }
	  },
	  props: {
	    icon: {
	      type: String,
	      'default': ''
	    },
	    caret: {
	      type: Boolean,
	      'default': true
	    },
	    text: {
	      type: String,
	      'default': ''
	    },
	    size: {
	      type: String,
	      'default': 'default'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    }
	  },
	  methods: {
	    toggle: function toggle(e) {
	      // hide an alert
	      this.show = !this.show;
	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      if (this.show) {
	        this.$dispatch('shown::dropdown');
	        e.stopPropagation();
	      } else {
	        this.$dispatch('hidden::dropdown');
	      }
	    }
	  },
	  events: {
	    'hide::dropdown': function hideDropdown() {
	      this.show = false;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(102);
	
	__webpack_require__(25);

/***/ },
/* 102 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 103 */,
/* 104 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dropdown\" v-bind:class=\"{ open: show }\">\r\n    <button\r\n        id=\"dLabel\"\r\n        class=\"btn dropdown {{dropdownToggle}} {{btnVariant}} {{btnSize}}\" role=\"button\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"{{show}}\"\r\n        v-on:click=\"toggle($event)\">\r\n        <span v-html=\"text\" v-show=\"text\"></span>\r\n        <span class=\"caret\"></span>\r\n    </button>\r\n    <slot></slot>\r\n</div>\r\n";

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _dropdownSelectJson = __webpack_require__(106);
	
	var _dropdownSelectJson2 = _interopRequireDefault(_dropdownSelectJson);
	
	var _dropdownSelectHtml = __webpack_require__(107);
	
	var _dropdownSelectHtml2 = _interopRequireDefault(_dropdownSelectHtml);
	
	var _snippetHtml = __webpack_require__(108);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsDropdownSelect = __webpack_require__(109);
	
	var _srcComponentsDropdownSelect2 = _interopRequireDefault(_srcComponentsDropdownSelect);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _dropdownSelectHtml2['default'],
	  data: function data() {
	    return {
	      meta: _dropdownSelectJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: {
	        text: 'First',
	        value: 'first'
	      },
	      list: [{
	        text: 'First',
	        value: 'first'
	      }, {
	        text: 'Second',
	        value: 'second'
	      }, {
	        text: 'Third',
	        value: 'third'
	      }],
	      caret: true,
	      position: 'left',
	      positions: _utils.positions,
	      size: 'md',
	      sizes: _utils.sizes,
	      variant: 'primary',
	      variants: _utils.variants
	    };
	  },
	  components: {
	    'dropdown-select': _srcComponentsDropdownSelect2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = {
		"name": "dropdown-select",
		"title": "Dropdown Select",
		"description": "Dropdown select allows to select an item from the list and update the model.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": [
			"IE9+",
			"Android 4.3"
		],
		"options": [
			{
				"name": "model",
				"type": "String",
				"default": "''",
				"required": true,
				"description": "A result of the selection. Two way data binding."
			},
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of selectable items."
			},
			{
				"name": "position",
				"type": "String",
				"values": [
					"left",
					"right"
				],
				"default": "'left'",
				"required": false,
				"description": "Vertical position of the dropdown list against the dropdown button. It becomes handy when dropdown floats to the right."
			},
			{
				"name": "icon",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "Show icon to the left of the button text."
			},
			{
				"name": "caret",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "Show/hide down caret."
			},
			{
				"name": "default-text",
				"type": "String",
				"default": "'Plase select one'",
				"required": false,
				"description": "Default text shown before selection is made."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>caret <input type=\"checkbox\" v-model=\"caret\"></label>\r\n\t\t<label>\r\n\t\t\tsize \r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tposition \r\n\t\t\t<select v-model=\"position\">\r\n\t\t\t\t<option v-for=\"option in positions\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\" class=\"clearfix\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<div class=\"div\" v-bind:class=\"{'pull-right': position == 'right'}\">\r\n\t\t\t\t<dropdown-select\r\n\t\t\t    :list=\"list\"\r\n\t\t\t    :model.sync=\"model\"\r\n\t\t\t    :position=\"position\"\r\n\t\t\t    :size=\"size\"\r\n\t\t\t    :variant=\"variant\"\r\n\t\t\t    :caret=\"caret\">\r\n\t\t\t\t</dropdown-select>\r\n\t\t\t</div>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">dropdown-select</span> \r\n  <span class=\"hljs-attribute\">:list</span>=<span class=\"hljs-value\">\"list: [\r\n    {\r\n      name: 'First',\r\n      value: 'first',\r\n    }, {\r\n      name: 'Second',\r\n      value: 'second',\r\n    }, {\r\n      name: 'Third',\r\n      value: 'third',\r\n    },\r\n  ],\"</span>\r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>\r\n  <span class=\"hljs-attribute\">position</span>=<span class=\"hljs-value\">\"left\"</span>\r\n  <span class=\"hljs-attribute\">caret</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">dropdown-select</span>&gt;</span>\r\n";

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(101);
	
	var _dropdownSelectHtml = __webpack_require__(110);
	
	var _dropdownSelectHtml2 = _interopRequireDefault(_dropdownSelectHtml);
	
	// export component object
	exports['default'] = {
	  template: _dropdownSelectHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      show: false,
	      selected: false
	    };
	  },
	  computed: {
	    btnVariant: function btnVariant() {
	      return !this.variant || this.variant === 'default' ? 'btn-secondary' : 'btn-' + this.variant;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    },
	    dropdownToggle: function dropdownToggle() {
	      return this.caret ? 'dropdown-toggle' : '';
	    }
	  },
	  props: {
	    model: {
	      type: Object,
	      'default': false,
	      required: true
	    },
	    list: {
	      type: Array,
	      'default': [],
	      required: true
	    },
	    icon: {
	      type: String,
	      'default': ''
	    },
	    caret: {
	      type: Boolean,
	      'default': true
	    },
	    position: {
	      type: String,
	      'default': 'left'
	    },
	    size: {
	      type: String,
	      'default': ''
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    },
	    defaultText: {
	      type: String,
	      'default': 'Plase select one'
	    }
	  },
	  methods: {
	    toggle: function toggle(e) {
	      // hide an alert
	      this.show = !this.show;
	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      if (this.show) {
	        this.$dispatch('shown:dropdown');
	        e.stopPropagation();
	      } else {
	        this.$dispatch('hidden::dropdown');
	      }
	    },
	    select: function select(item) {
	      this.model = item;
	      this.show = false;
	      this.selected = true;
	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      this.$dispatch('selected::dropdown', item);
	    }
	  },
	  events: {
	    'hide::dropdown': function hideDropdown() {
	      this.show = false;
	    }
	  },
	  ready: function ready() {
	    if (this.model) {
	      this.selected = true;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = "<div class=\"dropdown dropdown-select\" v-bind:class=\"{open: show}\">\r\n    <button\r\n        id=\"dLabel\"\r\n        class=\"btn dropdown {{dropdownToggle}} {{btnVariant}} {{btnSize}}\"\r\n        role=\"button\"\r\n        aria-haspopup=\"true\"\r\n        aria-expanded=\"show\"\r\n        v-on:click=\"toggle($event)\">\r\n        <span v-if=\"selected\">{{model.text}}</span>\r\n        <span v-if=\"!selected\">{{defaultText}}</span>\r\n    </button>\r\n    <ul class=\"dropdown-menu\" v-bind:class=\"{'dropdown-menu-right' : position == 'right'}\" aria-labelledby=\"dLabel\">\r\n        <li v-for=\"item in list\">\r\n            <button class=\"dropdown-item\" v-on:click.stop=\"select(item)\">{{item.text}}</button>\r\n        </li>\r\n    </ul>\r\n</div>\r\n";

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _formCheckboxJson = __webpack_require__(112);
	
	var _formCheckboxJson2 = _interopRequireDefault(_formCheckboxJson);
	
	var _formCheckboxHtml = __webpack_require__(113);
	
	var _formCheckboxHtml2 = _interopRequireDefault(_formCheckboxHtml);
	
	var _snippetHtml = __webpack_require__(114);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsFormCheckbox = __webpack_require__(115);
	
	var _srcComponentsFormCheckbox2 = _interopRequireDefault(_srcComponentsFormCheckbox);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _formCheckboxHtml2['default'],
	  data: function data() {
	    return {
	      meta: _formCheckboxJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: ['second'],
	      list: [{
	        text: 'First',
	        checked: false,
	        value: 'first'
	      }, {
	        text: 'Second',
	        checked: false,
	        value: 'second'
	      }, {
	        text: 'Third',
	        checked: false,
	        value: 'third'
	      }],
	      custom: true,
	      vertical: true,
	      state: 'default',
	      states: _utils.states
	    };
	  },
	  components: {
	    'form-checkbox': _srcComponentsFormCheckbox2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = {
		"name": "form-checkbox",
		"title": "Form Checkbox",
		"description": "A Checkbox input for selection of one or more items.",
		"dependencies": [
			"vuestrap/forms",
			"vuestrap/custom-forms"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of checkbox items."
			},
			{
				"name": "custom",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "A custom styling overlying the default radio button."
			},
			{
				"name": "vertical",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "Stacks inputs vertically."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "A validation state."
			}
		]
	};

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>vertical <input type=\"checkbox\" v-model=\"vertical\"></label>\r\n\t\t<label>custom <input type=\"checkbox\" v-model=\"custom\"></label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<form-checkbox\r\n\t\t    :list.sync=\"list\"\r\n\t\t    :model.sync=\"model\"\r\n\t\t    :custom=\"custom\"\r\n\t\t    :vertical=\"vertical\"\r\n\t\t    :state=\"state\">\r\n\t\t\t</form-checkbox>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">form-checkbox</span> \r\n  <span class=\"hljs-attribute\">:list.sync</span>=<span class=\"hljs-value\">\" [{\r\n      text: 'First',\r\n      checked: false,\r\n    }, {\r\n      text: 'Second',\r\n      checked: true,\r\n    }, {\r\n      text: 'Third',\r\n      checked: false,\r\n      disabled: true\r\n    },\r\n  ]\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"'default'\"</span>\r\n  <span class=\"hljs-attribute\">custom</span>=<span class=\"hljs-value\">\"false\"</span>\r\n  <span class=\"hljs-attribute\">vertical</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">form-checkbox</span>&gt;</span>\r\n";

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(116);
	
	var _formCheckboxHtml = __webpack_require__(121);
	
	var _formCheckboxHtml2 = _interopRequireDefault(_formCheckboxHtml);
	
	// export component object
	exports['default'] = {
	  template: _formCheckboxHtml2['default'],
	  replace: true,
	  computed: {
	    inputState: function inputState() {
	      return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
	    }
	  },
	  props: {
	    list: {
	      type: Array,
	      twoWay: true,
	      'default': [],
	      required: true
	    },
	    model: {
	      type: Array,
	      twoWay: true,
	      'default': []
	    },
	    custom: {
	      type: Boolean,
	      'default': true
	    },
	    vertical: {
	      type: Boolean,
	      'default': false
	    },
	    state: {
	      type: String,
	      'default': 'default'
	    }
	  },
	  watch: {
	    list: {
	      handler: function handler() {
	        var _this = this;
	
	        this.model = [];
	        this.list.forEach(function (item) {
	          if (item.checked) {
	            _this.model.push(item.value);
	          }
	        });
	        // dispatch an event
	        this.$dispatch('changed::form-checkbox', this.model);
	      },
	      deep: true
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    // handle initial selection
	    Vue.nextTick(function () {
	      _this2.list.forEach(function (item) {
	        if (_this2.model.indexOf(item.value) !== -1) {
	          item.checked = true;
	        }
	      });
	    });
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(25);
	
	__webpack_require__(117);
	
	__webpack_require__(119);

/***/ },
/* 117 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 118 */,
/* 119 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 120 */,
/* 121 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n\t<div class=\"checkbox\" v-for=\"item in list\" v-bind:class=\"{ 'checkbox-inline': !vertical, disabled: item.disabled }\">\r\n\t\t<label v-bind:class=\"{ 'c-input': custom, 'c-checkbox': custom }\">\r\n\t\t\t<input \r\n\t\t\t\tid=\"{{item.id}}\" \r\n\t\t\t\ttype=\"checkbox\" \r\n\t\t\t\tvalue=\"{{item.value}}\" \r\n\t\t\t\tautocomplete=\"off\" \r\n\t\t\t\tv-model=\"item.checked\" \r\n\t\t\t\tdisabled=\"{{item.disabled}}\">\r\n\t\t\t\t<span class=\"c-indicator\" v-if=\"custom\"></span> {{item.text}}\r\n\t\t</label>\r\n\t</div>\r\n</fieldset>\r\n";

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _formRadioJson = __webpack_require__(123);
	
	var _formRadioJson2 = _interopRequireDefault(_formRadioJson);
	
	var _formRadioHtml = __webpack_require__(124);
	
	var _formRadioHtml2 = _interopRequireDefault(_formRadioHtml);
	
	var _snippetHtml = __webpack_require__(125);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsFormRadio = __webpack_require__(126);
	
	var _srcComponentsFormRadio2 = _interopRequireDefault(_srcComponentsFormRadio);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _formRadioHtml2['default'],
	  data: function data() {
	    return {
	      meta: _formRadioJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: 'second',
	      list: [{
	        name: 'First',
	        value: 'first'
	      }, {
	        name: 'Second',
	        value: 'second'
	      }, {
	        name: 'Third (disabled)',
	        value: 'third',
	        disabled: true
	      }],
	      vertical: true,
	      custom: true,
	      state: 'default',
	      states: _utils.states
	    };
	  },
	  components: {
	    'form-radio': _srcComponentsFormRadio2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = {
		"name": "form-radio",
		"title": "Form Radio",
		"description": "A radio input for selection of only one item.",
		"dependencies": [
			"vuestrap/forms",
			"vuestrap/custom-forms"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "model",
				"type": "String",
				"default": "''",
				"required": true,
				"description": "A result of the selection. Two way data binding."
			},
			{
				"name": "name",
				"type": "String",
				"default": "options",
				"description": "A name used to group radio buttons. Please make sure it is unique for each group."
			},
			{
				"name": "list",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of radio inputs."
			},
			{
				"name": "custom",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "A custom styling overlying the default radio button."
			},
			{
				"name": "vertical",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "Stacks inputs vertically."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "A validation state."
			}
		]
	};

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>vertical <input type=\"checkbox\" v-model=\"vertical\"></label>\r\n\t\t<label>custom <input type=\"checkbox\" v-model=\"custom\"></label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<form-radio\r\n\t\t    :model.sync=\"model\"\r\n\t\t    :list=\"list\"\r\n\t\t    :custom=\"custom\"\r\n\t\t    :vertical=\"vertical\"\r\n\t\t    :state=\"state\">\r\n\t\t\t</form-radio>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">form-radio</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">:list</span>=<span class=\"hljs-value\">\"[\r\n    {\r\n      name: 'First',\r\n      value: 'first',\r\n    }, {\r\n      name: 'Second',\r\n      value: 'second',\r\n    }, {\r\n      name: 'Third (disabled)',\r\n      value: 'third',\r\n      disabled: true,\r\n    },\r\n  ]\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"'success'\"</span>\r\n  <span class=\"hljs-attribute\">custom</span>=<span class=\"hljs-value\">\"false\"</span>\r\n  <span class=\"hljs-attribute\">vertical</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">form-radio</span>&gt;</span>\r\n";

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(116);
	
	var _formRadioHtml = __webpack_require__(127);
	
	var _formRadioHtml2 = _interopRequireDefault(_formRadioHtml);
	
	// export component object
	exports['default'] = {
	  template: _formRadioHtml2['default'],
	  replace: true,
	  computed: {
	    inputState: function inputState() {
	      return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
	    }
	  },
	  props: {
	    model: {
	      type: String,
	      twoWay: true,
	      required: true
	    },
	    name: {
	      type: String,
	      'default': 'options'
	    },
	    list: {
	      type: Array,
	      'default': [],
	      required: true
	    },
	    custom: {
	      type: Boolean,
	      'default': true
	    },
	    vertical: {
	      type: Boolean,
	      'default': false
	    },
	    state: {
	      type: String,
	      'default': 'default'
	    }
	  },
	  watch: {
	    model: {
	      handler: function handler() {
	        // dispatch an event
	        this.$dispatch('changed::form-radio', this.model);
	      },
	      deep: true
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n\t<div class=\"radio\" v-for=\"item in list\" v-bind:class=\"{ 'radio-inline': !vertical, disabled: item.disabled }\">\r\n\t\t<label v-bind:class=\"{ 'c-input': custom, 'c-radio': custom }\">\r\n\t\t\t<input \r\n\t\t\t\tid=\"{{item.id}}\" \r\n\t\t\t\ttype=\"radio\" \r\n\t\t\t\tname=\"{{name}}\"\r\n\t\t\t\tvalue=\"{{item.value}}\" \r\n\t\t\t\tautocomplete=\"off\" \r\n\t\t\t\tv-model=\"model\" \r\n\t\t\t\tdisabled=\"{{item.disabled}}\">\r\n\t\t \t<span class=\"c-indicator\" v-if=\"custom\"></span> {{item.name}}\r\n\t\t</label>\r\n\t</div>\r\n</fieldset>\r\n";

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _formInputJson = __webpack_require__(129);
	
	var _formInputJson2 = _interopRequireDefault(_formInputJson);
	
	var _formInputHtml = __webpack_require__(130);
	
	var _formInputHtml2 = _interopRequireDefault(_formInputHtml);
	
	var _snippetHtml = __webpack_require__(131);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsFormInput = __webpack_require__(132);
	
	var _srcComponentsFormInput2 = _interopRequireDefault(_srcComponentsFormInput);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _formInputHtml2['default'],
	  data: function data() {
	    return {
	      meta: _formInputJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: "",
	      custom: true,
	      vertical: true,
	      size: 'md',
	      sizes: _utils.sizes,
	      state: 'success',
	      states: _utils.states,
	      stateIcon: true
	    };
	  },
	  components: {
	    'form-input': _srcComponentsFormInput2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = {
		"name": "form-input",
		"title": "Form Input",
		"description": "A textual input.",
		"dependencies": [
			"vuestrap/forms"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "model",
				"type": "String",
				"default": "''",
				"required": true,
				"description": "Any text entered will be two way bound with your model variable."
			},
			{
				"name": "type",
				"type": "String",
				"default": "'text'",
				"values": [
					"text",
					"password",
					"datetime",
					"datetime-local",
					"date",
					"month",
					"time",
					"week",
					"number",
					"email",
					"url",
					"search",
					"tel",
					"color"
				],
				"required": false,
				"description": "A type of input"
			},
			{
				"name": "id",
				"type": "String",
				"default": "unqueId",
				"description": "Id used for input and corresponding label. If not set it will be auto-generated."
			},
			{
				"name": "label",
				"type": "String",
				"values": "",
				"default": "''",
				"required": false,
				"description": "A label text above the input."
			},
			{
				"name": "placeholder",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "Show Html5 placeholder."
			},
			{
				"name": "description",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "A text muted text under neath of the input."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "A validation state."
			},
			{
				"name": "state-icon",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "Show/hide icon within input. Icon is only shown when state is set."
			}
		]
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>state icon <input type=\"checkbox\" v-model=\"stateIcon\"></label>\r\n\t\t<label>size\r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<form-input\r\n\t\t    :model.sync=\"model\"\r\n\t\t    type=\"text\"\r\n\t\t    label=\"Example Label\"\r\n\t\t    placeholder=\"Placeholder\"\r\n\t\t    description=\"We'll never share your email with anyone else.\"\r\n\t\t    :size=\"size\"\r\n\t\t    :state-icon=\"stateIcon\"\r\n\t\t    :state=\"state\">\r\n\t\t\t</form-input>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">form-input</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"text\"</span>\r\n  <span class=\"hljs-attribute\">label</span>=<span class=\"hljs-value\">\"Example Label\"</span>\r\n  <span class=\"hljs-attribute\">placeholder</span>=<span class=\"hljs-value\">\"Placeholder\"</span>\r\n  <span class=\"hljs-attribute\">description</span>=<span class=\"hljs-value\">\"We'll never share your email with anyone else.\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"'success'\"</span>\r\n  <span class=\"hljs-attribute\">state-icon</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">form-input</span>&gt;</span>\r\n";

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(116);
	
	var _utils = __webpack_require__(12);
	
	var _formInputHtml = __webpack_require__(133);
	
	var _formInputHtml2 = _interopRequireDefault(_formInputHtml);
	
	// export component object
	exports['default'] = {
	  template: _formInputHtml2['default'],
	  replace: true,
	  computed: {
	    inputState: function inputState() {
	      return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
	    },
	    stateIconType: function stateIconType() {
	      return !this.stateIcon || this.stateIcon === 'default' ? '' : 'form-control-' + this.state;
	    },
	    inputSize: function inputSize() {
	      return !this.size || this.size === 'default' ? '' : 'form-control-' + this.size;
	    },
	    row: function row() {
	      return labelClass && inputClass;
	    }
	  },
	  props: {
	    model: {
	      twoWay: true,
	      required: true,
	      type: String
	    },
	    type: {
	      type: String,
	      'default': 'text',
	      required: true
	    },
	    id: {
	      type: String,
	      'default': _utils.uniqueId
	    },
	    label: {
	      type: String,
	      'default': ''
	    },
	    placeholder: {
	      type: String,
	      'default': ''
	    },
	    description: {
	      type: String,
	      'default': ''
	    },
	    size: {
	      type: String,
	      'default': ''
	    },
	    state: {
	      type: String,
	      'default': ''
	    },
	    stateIcon: {
	      type: Boolean,
	      'default': true
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n    <label for=\"{{id}}\" v-if=\"label\" class=\"control-label\">{{label}}</label>\r\n    <div class=\"inputClass\">\r\n        <input \r\n        \ttype=\"{{type}}\" \r\n        \tclass=\"form-control {{stateIconType}} {{inputSize}}\" \r\n        \tid=\"{{id}}\" \r\n        \tplaceholder=\"{{placeholder}}\" \r\n        \tv-model=\"model\">\r\n    </div>\r\n    <small class=\"text-muted\" v-if=\"description\" v-html=\"description\"></small>\r\n</fieldset>\r\n";

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _formSelectJson = __webpack_require__(135);
	
	var _formSelectJson2 = _interopRequireDefault(_formSelectJson);
	
	var _formSelectHtml = __webpack_require__(136);
	
	var _formSelectHtml2 = _interopRequireDefault(_formSelectHtml);
	
	var _snippetHtml = __webpack_require__(137);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsFormSelect = __webpack_require__(138);
	
	var _srcComponentsFormSelect2 = _interopRequireDefault(_srcComponentsFormSelect);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _formSelectHtml2['default'],
	  data: function data() {
	    return {
	      meta: _formSelectJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: 'male',
	      options: [{
	        text: 'Male',
	        value: 'male'
	      }, {
	        text: 'Female',
	        value: 'female'
	      }],
	      size: 'md',
	      sizes: _utils.sizes,
	      state: 'default',
	      states: _utils.states
	    };
	  },
	  components: {
	    'form-select': _srcComponentsFormSelect2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = {
		"name": "form-select",
		"title": "Form Select",
		"description": "A textual input.",
		"dependencies": [
			"vuestrap/forms"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "model",
				"type": "String",
				"default": "''",
				"required": true,
				"description": "A result of the selection. Two way data binding."
			},
			{
				"name": "options",
				"type": "Array",
				"default": "[]",
				"required": true,
				"description": "A list of options"
			},
			{
				"name": "id",
				"type": "String",
				"default": "unqueId",
				"description": "Id used for input and corresponding label. If not set it will be auto-generated."
			},
			{
				"name": "label",
				"type": "String",
				"values": "",
				"default": "''",
				"required": false,
				"description": "A label text above the input."
			},
			{
				"name": "default-option",
				"type": "Object",
				"default": "''",
				"required": false,
				"description": "Show default option, i.e. <code>{text: 'Please select one',value: 'default'}</code>."
			},
			{
				"name": "description",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "A text muted text under neath of the input."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "A validation state."
			}
		]
	};

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>size\r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<form-select\r\n\t\t    :model.sync=\"model\"\r\n\t\t    :options=\"options\"\r\n\t\t    type=\"text\"\r\n\t\t    label=\"Example Label\"\r\n\t\t    description=\"We'll never share your gender with anyone else.\"\r\n\t\t    :size=\"size\"\r\n\t\t    :state=\"state\">\r\n\t\t\t</form-select>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">form-select</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">:options</span>=<span class=\"hljs-value\">\"options\"</span>\r\n  <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"text\"</span>\r\n  <span class=\"hljs-attribute\">label</span>=<span class=\"hljs-value\">\"Example Label\"</span>\r\n  <span class=\"hljs-attribute\">description</span>=<span class=\"hljs-value\">\"We'll never share your gender with anyone else.\"</span>\r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"'success'\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">form-select</span>&gt;</span>\r\n";

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(116);
	
	var _utils = __webpack_require__(12);
	
	var _formSelectHtml = __webpack_require__(139);
	
	var _formSelectHtml2 = _interopRequireDefault(_formSelectHtml);
	
	// export component object
	exports['default'] = {
	  template: _formSelectHtml2['default'],
	  replace: true,
	  computed: {
	    allOptions: function allOptions() {
	      if (this.defaultOption.length) {
	        return [this.defaultOption].concat(this.options);
	      }
	      return this.options;
	    },
	    inputState: function inputState() {
	      return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
	    },
	    inputSize: function inputSize() {
	      return !this.size || this.size === 'default' ? '' : 'form-control-' + this.size;
	    }
	  },
	  props: {
	    model: {
	      twoWay: true,
	      required: true
	    },
	    options: {
	      type: Array,
	      'default': [],
	      required: true
	    },
	    id: {
	      type: String,
	      'default': _utils.uniqueId
	    },
	    label: {
	      type: String,
	      'default': false
	    },
	    defaultOption: {
	      type: Object,
	      'default': function _default() {
	        return {};
	      }
	    },
	    description: {
	      type: String,
	      'default': false
	    },
	    size: {
	      type: String,
	      'default': ''
	    },
	    state: {
	      type: String,
	      'default': ''
	    }
	  },
	  watch: {
	    model: function model(val, oldVal) {
	      if (val === oldVal) return;
	      // Dispatch an event from the current vm that propagates all the way up to it's $root
	      this.$dispatch('selected::option', val);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n    <label for=\"{{id}}\" v-if=\"label\" class=\"control-label\">{{label}}</label>\r\n    <!-- single select -->\r\n    <select class=\"form-control {{inputSize}}\" id=\"{{id}}\" v-model=\"model\" options=\"allOptions\" v-if=\"!multiple\">\r\n    \t<option v-for=\"option in allOptions\" v-bind:value=\"option.value\">{{option.text}}</option>\r\n    </select>\r\n    <small class=\"text-muted\" v-if=\"description\" v-html=\"description\"></small>\r\n</fieldset>\r\n";

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _formTextareaJson = __webpack_require__(141);
	
	var _formTextareaJson2 = _interopRequireDefault(_formTextareaJson);
	
	var _formTextareaHtml = __webpack_require__(142);
	
	var _formTextareaHtml2 = _interopRequireDefault(_formTextareaHtml);
	
	var _snippetHtml = __webpack_require__(143);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsFormTextarea = __webpack_require__(144);
	
	var _srcComponentsFormTextarea2 = _interopRequireDefault(_srcComponentsFormTextarea);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _formTextareaHtml2['default'],
	  data: function data() {
	    return {
	      meta: _formTextareaJson2['default'],
	      snippet: _snippetHtml2['default'],
	      model: '',
	      state: 'default',
	      states: _utils.states
	    };
	  },
	  components: {
	    'form-textarea': _srcComponentsFormTextarea2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = {
		"name": "form-textarea",
		"title": "Form textarea",
		"description": "A textarea input.",
		"dependencies": [
			"vuestrap/forms"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "model",
				"type": "String",
				"default": "''",
				"required": true,
				"description": "Any text entered will be two way bound with your model variable."
			},
			{
				"name": "id",
				"type": "String",
				"default": "unqueId",
				"description": "Id used for input and corresponding label. If not set it will be auto-generated."
			},
			{
				"name": "label",
				"type": "String",
				"values": "",
				"default": "''",
				"required": false,
				"description": "A label text above the input."
			},
			{
				"name": "description",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "A text muted text under neath of the input."
			},
			{
				"name": "rows",
				"type": "Number",
				"default": "3",
				"description": "Size of textearea (Html5 rows attribute)."
			},
			{
				"name": "state",
				"type": "String",
				"values": [
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "A validation state."
			}
		]
	};

/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>state\r\n\t\t\t<select v-model=\"state\">\r\n\t\t\t\t<option v-for=\"option in states\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<form-textarea\r\n\t\t    :model.sync=\"model\"\r\n\t\t    type=\"text\"\r\n\t\t    label=\"Example Label\"\r\n\t\t    description=\"Extra textarea description.\"\r\n\t\t    :rows=\"2\"\r\n\t\t    :state=\"state\">\r\n\t\t\t</form-textarea>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">form-textarea</span> \r\n  <span class=\"hljs-attribute\">:model.sync</span>=<span class=\"hljs-value\">\"model\"</span>\r\n  <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"text\"</span>\r\n  <span class=\"hljs-attribute\">label</span>=<span class=\"hljs-value\">\"Example Label\"</span>\r\n  <span class=\"hljs-attribute\">description</span>=<span class=\"hljs-value\">\"Extra textarea description.\"</span>\r\n  <span class=\"hljs-attribute\">rows</span>=<span class=\"hljs-value\">\"2\"</span>\r\n  <span class=\"hljs-attribute\">:state</span>=<span class=\"hljs-value\">\"'success'\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">form-textarea</span>&gt;</span>\r\n";

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(116);
	
	var _utils = __webpack_require__(12);
	
	var _formTextareaHtml = __webpack_require__(145);
	
	var _formTextareaHtml2 = _interopRequireDefault(_formTextareaHtml);
	
	// export component object
	exports['default'] = {
	  template: _formTextareaHtml2['default'],
	  replace: true,
	  computed: {
	    inputState: function inputState() {
	      return !this.state || this.state === 'default' ? '' : 'has-' + this.state;
	    }
	  },
	  props: {
	    model: {
	      twoWay: true,
	      required: true
	    },
	    id: {
	      type: String,
	      'default': _utils.uniqueId
	    },
	    label: {
	      type: String,
	      'default': false
	    },
	    description: {
	      type: String,
	      'default': false
	    },
	    state: {
	      type: String,
	      'default': ''
	    },
	    rows: {
	      type: Number,
	      'default': 3
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = "<fieldset class=\"form-group {{inputState}}\">\r\n    <label for=\"{{id}}\" v-if=\"label\" class=\"control-label\">{{label}}</label>\r\n    <textarea class=\"form-control\" id=\"{{id}}\" rows=\"{{rows}}\" v-model=\"model\"></textarea>\r\n    <small class=\"text-muted\" v-if=\"description\" v-html=\"description\"></small>\r\n</fieldset>";

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _imagesJson = __webpack_require__(147);
	
	var _imagesJson2 = _interopRequireDefault(_imagesJson);
	
	var _imagesHtml = __webpack_require__(148);
	
	var _imagesHtml2 = _interopRequireDefault(_imagesHtml);
	
	var _snippetHtml = __webpack_require__(149);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsImages = __webpack_require__(150);
	
	var _srcComponentsImages2 = _interopRequireDefault(_srcComponentsImages);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	exports['default'] = {
	  template: _imagesHtml2['default'],
	  data: function data() {
	    return {
	      meta: _imagesJson2['default'],
	      snippet: _snippetHtml2['default']
	    };
	  },
	  components: {
	    'images': _srcComponentsImages2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = {
		"name": "images",
		"title": "Images",
		"description": "Opt your images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes.",
		"dependencies": [
			"vuestrap/images"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": []
	};

/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<img v-bind:src=\"'assets/150x150.png'\" alt=\"...\" class=\"img-rounded\">\r\n\t\t\t<img v-bind:src=\"'assets/150x150.png'\" alt=\"...\" class=\"img-circle\">\r\n\t\t\t<img v-bind:src=\"'assets/150x150.png'\" alt=\"...\" class=\"img-thumbnail\">\r\n\t\t\t<div class=\"m-b\"></div>\r\n\t\t\t<img v-bind:src=\"'assets/responsive.png'\" alt=\"...\" class=\"img-fluid\" >\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">code</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"html\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/150x150?text=150x150\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"...\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"img-rounded\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/150x150?text=150x150\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"...\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"img-circle\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/150x150?text=150x150\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"...\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"img-thumbnail\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/1000x150?text=1000x150 - responsive\"</span> <span class=\"hljs-attribute\">alt</span>=<span class=\"hljs-value\">\"...\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"img-fluid\"</span> &gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">code</span>&gt;</span>";

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(151);

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(78);

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jumbotronJson = __webpack_require__(153);
	
	var _jumbotronJson2 = _interopRequireDefault(_jumbotronJson);
	
	var _jumbotronHtml = __webpack_require__(154);
	
	var _jumbotronHtml2 = _interopRequireDefault(_jumbotronHtml);
	
	var _snippetHtml = __webpack_require__(155);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsJumbotron = __webpack_require__(156);
	
	var _srcComponentsJumbotron2 = _interopRequireDefault(_srcComponentsJumbotron);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	exports['default'] = {
	  template: _jumbotronHtml2['default'],
	  data: function data() {
	    return {
	      meta: _jumbotronJson2['default'],
	      snippet: _snippetHtml2['default']
	    };
	  },
	  components: {
	    'jumbotron': _srcComponentsJumbotron2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports = {
		"name": "jumbotron",
		"title": "Jumbotron",
		"description": "A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.",
		"dependencies": [],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "fluid",
				"type": "Boolean",
				"default": false,
				"required": false,
				"description": "To make the jumbotron full width, and without rounded corners."
			}
		]
	};

/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>fluid <input type=\"checkbox\" v-model=\"fluid\"></label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<jumbotron :fluid=\"fluid\">\r\n\t\t\t\t<h1 class=\"display-3\">Hello, world!</h1>\r\n\t\t\t  <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\r\n\t\t\t  <hr class=\"m-y-md\">\r\n\t\t\t  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\r\n\t\t\t  <p class=\"lead\">\r\n\t\t\t    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\r\n\t\t\t  </p>\r\n\t\t\t</jumbotron>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">code</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"html\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">jumbotron</span> <span class=\"hljs-attribute\">fluid</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h1</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"display-3\"</span>&gt;</span>Hello, world!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h1</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"lead\"</span>&gt;</span>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">hr</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"m-y-md\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span>&gt;</span>It uses utility classes for typography and spacing to space content out within the larger container.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">p</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"lead\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary btn-lg\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">role</span>=<span class=\"hljs-value\">\"button\"</span>&gt;</span>Learn more<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">p</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">jumbotron</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">code</span>&gt;</span>";

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(157);
	
	var _jumbotronHtml = __webpack_require__(160);
	
	var _jumbotronHtml2 = _interopRequireDefault(_jumbotronHtml);
	
	// export component object
	exports['default'] = {
	  template: _jumbotronHtml2['default'],
	  replace: true,
	  props: {
	    fluid: {
	      type: Boolean,
	      'default': false
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(158);

/***/ },
/* 158 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 159 */,
/* 160 */
/***/ function(module, exports) {

	module.exports = "<div class=\"jumbotron\" v-bind:class=\"{ 'jumbotron-fluid': fluid }\">\r\n  <div class=\"container\">\r\n    <slot></slot>\r\n  </div>\r\n</div>";

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _labelsJson = __webpack_require__(162);
	
	var _labelsJson2 = _interopRequireDefault(_labelsJson);
	
	var _labelsHtml = __webpack_require__(163);
	
	var _labelsHtml2 = _interopRequireDefault(_labelsHtml);
	
	var _snippetHtml = __webpack_require__(164);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsLabels = __webpack_require__(165);
	
	var _srcComponentsLabels2 = _interopRequireDefault(_srcComponentsLabels);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _labelsHtml2['default'],
	  data: function data() {
	    return {
	      meta: _labelsJson2['default'],
	      snippet: _snippetHtml2['default'],
	      variant: 'primary',
	      variants: _utils.variants,
	      type: 'default',
	      types: [{ text: 'default', value: 'default' }, { text: 'pill', value: 'pill' }]
	    };
	  },
	  components: {
	    'badge': _srcComponentsLabels2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = {
		"name": "labels",
		"title": "Labels/Badges",
		"description": "Small and adaptive tag for adding context to just about any content.",
		"note": "Labels scale to match the size of the immediate parent element by using relative font sizing and em units.",
		"dependencies": [],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "variant",
				"type": "String",
				"default": "primary",
				"values": [
					"default",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"required": false,
				"description": "A color background."
			},
			{
				"name": "type",
				"type": "String",
				"values": [
					"pills"
				],
				"default": "''",
				"required": false,
				"description": "Switch to pill styling with rounded corners."
			}
		]
	};

/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>\r\n\t\t\ttype \r\n\t\t\t<select v-model=\"type\">\r\n\t\t\t\t<option v-for=\"option in types\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant \r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<badge :variant=\"variant\" :type=\"type\">open</badge>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 164 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">badge</span> <span class=\"hljs-attribute\">:variant</span>=<span class=\"hljs-value\">\"variant\"</span> <span class=\"hljs-attribute\">:type</span>=<span class=\"hljs-value\">\"type\"</span>&gt;</span>open<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">badge</span>&gt;</span>\r\n";

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(19);
	
	var _labelsHtml = __webpack_require__(166);
	
	var _labelsHtml2 = _interopRequireDefault(_labelsHtml);
	
	// export component object
	exports['default'] = {
	  template: _labelsHtml2['default'],
	  replace: true,
	  computed: {
	    labelVariant: function labelVariant() {
	      return !this.variant || this.variant === 'default' ? 'label-default' : 'label-' + this.variant;
	    },
	    labelType: function labelType() {
	      return !this.type ? '' : 'label-' + this.type;
	    }
	  },
	  props: {
	    variant: {
	      type: String,
	      'default': 'default'
	    },
	    type: {
	      type: String,
	      'default': ''
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 166 */
/***/ function(module, exports) {

	module.exports = "<span class=\"label {{labelVariant}} {{labelType}}\">\r\n\t<slot></slot>\r\n</span>\r\n";

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _listGroupJson = __webpack_require__(168);
	
	var _listGroupJson2 = _interopRequireDefault(_listGroupJson);
	
	var _listGroupHtml = __webpack_require__(169);
	
	var _listGroupHtml2 = _interopRequireDefault(_listGroupHtml);
	
	var _snippetHtml = __webpack_require__(170);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsListGroup = __webpack_require__(171);
	
	var _srcComponentsListGroup2 = _interopRequireDefault(_srcComponentsListGroup);
	
	var _srcComponentsLabels = __webpack_require__(165);
	
	var _srcComponentsLabels2 = _interopRequireDefault(_srcComponentsLabels);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _listGroupHtml2['default'],
	  data: function data() {
	    return {
	      meta: _listGroupJson2['default'],
	      snippet: _snippetHtml2['default'],
	      variant: 'primary',
	      variants: _utils.variants,
	      type: 'default',
	      types: [{ text: 'default', value: 'default' }, { text: 'pill', value: 'pill' }]
	    };
	  },
	  components: {
	    'list-group': _srcComponentsListGroup2['default'],
	    'badge': _srcComponentsLabels2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 168 */
/***/ function(module, exports) {

	module.exports = {
		"name": "list-group",
		"title": "List Group",
		"description": "List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.",
		"dependencies": [
			"vuestrap/labels"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": []
	};

/***/ },
/* 169 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<list-group style=\"width: 350px\">\r\n\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t    <badge type=\"pill\" class=\"pull-right\">14</badge>\r\n\t\t\t    Cras justo odio\r\n\t\t\t  </li>\r\n\t\t\t  <li class=\"list-group-item\">\r\n\t\t\t    <badge type=\"pill\" class=\"pull-right\">2</badge>\r\n\t\t\t    Dapibus ac facilisis in\r\n\t\t\t  </li>\r\n\t\t\t  <li class=\"list-group-item\">\r\n\t\t\t    <badge type=\"pill\" class=\"pull-right\">1</badge>\r\n\t\t\t    Morbi leo risus\r\n\t\t\t  </li>\r\n\t\t\t</list-group>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 170 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">list-group</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"list-group-item\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">badge</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"pill\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"pull-right\"</span>&gt;</span>14<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">badge</span>&gt;</span>\r\n    Cras justo odio\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"list-group-item\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">badge</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"pill\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"pull-right\"</span>&gt;</span>2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">badge</span>&gt;</span>\r\n    Dapibus ac facilisis in\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"list-group-item\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">badge</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"pill\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"pull-right\"</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">badge</span>&gt;</span>\r\n    Morbi leo risus\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">list-group</span>&gt;</span>\r\n";

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(172);
	
	var _listGroupHtml = __webpack_require__(173);
	
	var _listGroupHtml2 = _interopRequireDefault(_listGroupHtml);
	
	// export component object
	exports['default'] = {
	  template: _listGroupHtml2['default'],
	  replace: true
	};
	module.exports = exports['default'];

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(80);
	
	__webpack_require__(20);

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"list-group\">\r\n  <slot></slot>\r\n</ul>";

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mediaJson = __webpack_require__(175);
	
	var _mediaJson2 = _interopRequireDefault(_mediaJson);
	
	var _mediaHtml = __webpack_require__(176);
	
	var _mediaHtml2 = _interopRequireDefault(_mediaHtml);
	
	var _snippetHtml = __webpack_require__(177);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsMedia = __webpack_require__(178);
	
	var _srcComponentsMedia2 = _interopRequireDefault(_srcComponentsMedia);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	exports['default'] = {
	  template: _mediaHtml2['default'],
	  data: function data() {
	    return {
	      meta: _mediaJson2['default'],
	      snippet: _snippetHtml2['default'],
	      position: 'top left',
	      positions: [{ text: 'top left', value: 'top left' }, { text: 'top right', value: 'top right' }, { text: 'middle left', value: 'middle left' }, { text: 'middle right', value: 'middle right' }, { text: 'bottom left', value: 'bottom left' }, { text: 'bottom right', value: 'bottom right' }]
	    };
	  },
	  components: {
	    'media': _srcComponentsMedia2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = {
		"name": "media",
		"title": "Media",
		"description": "The media object is an abstract element used as the basis for building more complex and repetitive components (like blog comments, Tweets, etc).",
		"dependencies": [
			"vuestrap/images"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "align",
				"type": "String",
				"default": "top left",
				"required": false,
				"description": "To align media object versus body content."
			}
		]
	};

/***/ },
/* 176 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n    <div slot=\"controls\">\r\n        <!-- Html controls start-->\r\n        <label>\r\n\t\t\tposition\r\n\t\t\t<select v-model=\"position\">\r\n\t\t\t\t<option v-for=\"option in positions\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n        <!-- Html controls end-->\r\n    </div>\r\n    <div slot=\"markup\">\r\n        <!-- Html markup start-->\r\n        <media :position=\"position\">\r\n            <div slot=\"aside\">\r\n                <a href=\"#\">\r\n                \t<img class=\"media-object\" v-bind:src=\"'assets/media.png'\">\r\n                </a>\r\n            </div>\r\n            <div slot=\"body\">\r\n            \t<h4 class=\"media-heading\">Media heading</h4>\r\n                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n            </div>\r\n        </media>\r\n        <!-- Html markup end-->\r\n    </div>\r\n</docs-demo>\r\n";

/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">media</span> <span class=\"hljs-attribute\">position</span>=<span class=\"hljs-value\">\"top left\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"aside\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">img</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"media-object\"</span> <span class=\"hljs-attribute\">src</span>=<span class=\"hljs-value\">\"http://placehold.it/50x50?text=media\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"body\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h4</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"media-heading\"</span>&gt;</span>Media heading<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h4</span>&gt;</span> \r\n    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">media</span>&gt;</span>\r\n";

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(179);
	
	var _mediaHtml = __webpack_require__(182);
	
	var _mediaHtml2 = _interopRequireDefault(_mediaHtml);
	
	// export component object
	exports['default'] = {
	  template: _mediaHtml2['default'],
	  replace: true,
	  computed: {
	    align: function align() {
	      return this.position.split(' ');
	    },
	    mediaVerticalAlign: function mediaVerticalAlign() {
	      var verticalAlign = this.align[0];
	      return 'media-' + verticalAlign;
	    },
	    mediaHorizontalAlign: function mediaHorizontalAlign() {
	      var horizontalAlign = this.align[1];
	      return 'media-' + horizontalAlign;
	    }
	  },
	  props: {
	    position: {
	      type: String,
	      'default': 'top left'
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(180);
	
	__webpack_require__(78);

/***/ },
/* 180 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 181 */,
/* 182 */
/***/ function(module, exports) {

	module.exports = "<div class=\"media\">\r\n  <div class=\"{{mediaHorizontalAlign}} {{mediaVerticalAlign}}\" v-if=\"mediaHorizontalAlign == 'media-left'\">\r\n  \t<slot name=\"aside\">\r\n  </div>\r\n  <div class=\"media-body\">\r\n  \t<slot name=\"body\">\r\n  </div>\r\n  <div class=\"{{mediaHorizontalAlign}} {{mediaVerticalAlign}}\" v-if=\"mediaHorizontalAlign == 'media-right'\">\r\n  \t<slot name=\"aside\">\r\n  </div>\r\n</div>";

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _modalJson = __webpack_require__(184);
	
	var _modalJson2 = _interopRequireDefault(_modalJson);
	
	var _modalHtml = __webpack_require__(185);
	
	var _modalHtml2 = _interopRequireDefault(_modalHtml);
	
	var _snippetHtml = __webpack_require__(186);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsModal = __webpack_require__(187);
	
	var _srcComponentsModal2 = _interopRequireDefault(_srcComponentsModal);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _modalHtml2['default'],
	  data: function data() {
	    return {
	      meta: _modalJson2['default'],
	      snippet: _snippetHtml2['default'],
	      size: 'md',
	      sizes: _utils.sizes,
	      fade: true
	    };
	  },
	  components: {
	    'modal': _srcComponentsModal2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = {
		"name": "modal",
		"title": "Modal",
		"description": "Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.",
		"dependencies": [
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "id",
				"type": "String",
				"default": "default",
				"description": "Id used for the modal. If not set it will be auto-generated. To show modal from anywhere in the application use <code>$broadcast('show-modal', 'id')</code> event.<br><code>$broadcast('hide-modal', 'id')</code> hides it.<br>Thanks to event system you can have multiple modal instances on the same page."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "fade",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "If set to true modal will fade in on open and fade out on close."
			}
		]
	};

/***/ },
/* 185 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n    <div slot=\"controls\">\r\n        <!-- Html controls start-->\r\n        <label>fade <input type=\"checkbox\" v-model=\"fade\"></label>\r\n        <label>\r\n\t\t\tsize\r\n\t\t\t<select v-model=\"size\">\r\n\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n        <!-- Html controls end-->\r\n    </div>\r\n    <div slot=\"markup\">\r\n        <!-- Html markup start-->\r\n\r\n        <!-- trigger -->\r\n        <button class=\"btn btn-primary mini\" v-on:click=\"$broadcast('show::modal', 'modal1')\">\r\n        \tShow Modal\r\n        </button>\r\n\r\n        <!-- modal -->\r\n        <modal id=\"modal1\" :size=\"size\" :fade=\"fade\">\r\n            <div slot=\"modal-header\">\r\n                <h3>header</h3>\r\n            </div>\r\n            <div slot=\"modal-body\">\r\n                body\r\n            </div>\r\n            <div slot=\"modal-footer\">\r\n                <button class=\"btn btn-primary\" v-on:click=\"$broadcast('hide::modal', 'modal1')\">\r\n                    OK\r\n                </button>\r\n            </div>\r\n        </modal>\r\n        <!-- Html markup end-->\r\n    </div>\r\n</docs-demo>\r\n";

/***/ },
/* 186 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-comment\">&lt;!-- trigger --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary mini\"</span> <span class=\"hljs-attribute\">v-on:click</span>=<span class=\"hljs-value\">\"$broadcast('show-modal', 'modal1')\"</span>&gt;</span>\r\n  Show Modal\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-comment\">&lt;!-- modal --&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">modal</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"modal1\"</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">fade</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"modal-header\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">h3</span>&gt;</span>header<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">h3</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"modal-body\"</span>&gt;</span>\r\n    body\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"modal-footer\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-primary\"</span> <span class=\"hljs-attribute\">v-on:click</span>=<span class=\"hljs-value\">\"$broadcast('hide::modal', 'modal1')\"</span>&gt;</span>\r\n      OK\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">modal</span>&gt;</span>\r\n";

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(188);
	
	var _utils = __webpack_require__(12);
	
	var _modalHtml = __webpack_require__(191);
	
	var _modalHtml2 = _interopRequireDefault(_modalHtml);
	
	// this is directly linked to the bootstrap animation timing in _modal.scss
	// // for browsers that do not support transitions like IE9 just change slide immediately
	var TRANSITION_DURATION = (0, _utils.csstransitions)() ? 300 : 0;
	
	// export component object
	exports['default'] = {
	  template: _modalHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      animateBackdrop: false,
	      animateModal: false
	    };
	  },
	  props: {
	    id: {
	      type: String,
	      'default': 'default'
	    },
	    size: {
	      type: String,
	      'default': 'md'
	    },
	    fade: {
	      type: Boolean,
	      'default': true
	    }
	  },
	  methods: {
	    show: function show() {
	      this.$el.style.display = 'block';
	      var _this = this;
	      // wait for the display block, and then add class "in" class on the modal
	      setTimeout(function () {
	        _this.animateBackdrop = true;
	        setTimeout(function () {
	          _this.animateModal = true;
	          _this.$dispatch('shown::modal');
	        }, _this.fade ? TRANSITION_DURATION : 0);
	      }, 0);
	    },
	    hide: function hide() {
	      var _this = this;
	      // first animate modal out
	      this.animateModal = false;
	      setTimeout(function () {
	        // wait for animation to complete and then hide the backdrop
	        _this.animateBackdrop = false;
	        setTimeout(function () {
	          // no hide the modal wrapper
	          _this.$el.style.display = 'none';
	          _this.$dispatch('hidden::modal');
	        }, _this.fade ? TRANSITION_DURATION : 0);
	      }, _this.fade ? TRANSITION_DURATION : 0);
	    },
	    onClickOut: function onClickOut(e) {
	      // if backdrop clicked, hide modal
	      if (e.target.id && e.target.id === this.id) {
	        this.hide();
	      }
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;
	
	    // support for esc key press
	    document.addEventListener('keydown', function (e) {
	      var key = e.which || e.keyCode;
	      if (key === 27) {
	        // 27 is esc
	        _this2.hide();
	      }
	    });
	  },
	  events: {
	    // control modal from outside via events
	    'show::modal': function showModal(id) {
	      if (id === this.id) {
	        this.show();
	      }
	    },
	    'hide::modal': function hideModal(id) {
	      if (id === this.id) {
	        this.hide();
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(189);
	
	__webpack_require__(25);

/***/ },
/* 189 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 190 */,
/* 191 */
/***/ function(module, exports) {

	module.exports = "<div style=\"display: none\">\r\n\t<div id=\"{{id}}\" class=\"modal\" v-bind:class=\"{ fade: fade, in: animateModal || !fade }\" style=\"display: block\" v-on:click=\"onClickOut($event)\">\r\n\t  \t<div class=\"modal-dialog  modal-{{size}}\" role=\"document\" style=\"z-index: 9999\">\r\n\t\t    <div class=\"modal-content\">\r\n\t\t        <div class=\"modal-header\">\r\n\t\t        \t<slot name=\"modal-header\"></slot>\r\n\t\t        </div>\r\n\t\t        <div class=\"modal-body\">\r\n\t\t        \t<slot name=\"modal-body\"></slot>\r\n\t\t        </div>\r\n\t\t        <div class=\"modal-footer\">\r\n\t\t        \t<slot name=\"modal-footer\"></slot>\r\n\t\t        </div>\r\n\t\t    </div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"modal-backdrop\" v-bind:class=\"{ fade: fade, in: animateBackdrop || !fade }\"></div>\r\n</div>";

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _navJson = __webpack_require__(193);
	
	var _navJson2 = _interopRequireDefault(_navJson);
	
	var _navHtml = __webpack_require__(194);
	
	var _navHtml2 = _interopRequireDefault(_navHtml);
	
	var _snippetHtml = __webpack_require__(195);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsNav = __webpack_require__(196);
	
	var _srcComponentsNav2 = _interopRequireDefault(_srcComponentsNav);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	exports['default'] = {
	  template: _navHtml2['default'],
	  data: function data() {
	    return {
	      meta: _navJson2['default'],
	      snippet: _snippetHtml2['default'],
	      vertical: false,
	      type: 'default',
	      types: [{ text: 'default', value: 'default' }, { text: 'pills', value: 'pills' }]
	    };
	  },
	  components: {
	    'navigation': _srcComponentsNav2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 193 */
/***/ function(module, exports) {

	module.exports = {
		"name": "navigation",
		"title": "Nav",
		"description": "Roll your own navigation style by extending the base .nav component.",
		"note": "To avoid confilcts with html5 <code>&lt;nav></code> tag, please use <code>&lt;navigation></code> tag or better your own namsepaced one. Also by default, wrapping element is <code>&lt;ul></code>, so only <code>&lt;li></li></code>'s are required within <code>&lt;navigation></code> tag.",
		"dependencies": [],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "type",
				"type": "String",
				"values": [
					"default",
					"pills",
					"navbar"
				],
				"default": "default",
				"description": "Type of the navigation. Use <code>navbar</code> type in conjuction with <code>&lt;navbar></code> element."
			},
			{
				"name": "vertical",
				"type": "Boolean",
				"default": false,
				"required": false,
				"description": "Stack items in vertical position."
			}
		]
	};

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>\r\n\t\t\ttype\r\n\t\t\t<select v-model=\"type\">\r\n\t\t\t\t<option v-for=\"option in types\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>vertical <input type=\"checkbox\" v-model=\"vertical\"></label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<navigation :type=\"type\" :vertical=\"vertical\">\r\n\t\t\t  <li class=\"nav-item\">\r\n\t\t    <a href=\"#\" class=\"nav-link active\">Active</a>\r\n\t\t\t  </li>\r\n\t\t\t  <li class=\"nav-item\">\r\n\t\t\t    <a href=\"#\" class=\"nav-link\">Link</a>\r\n\t\t\t  </li>\r\n\t\t\t  <li class=\"nav-item\">\r\n\t\t\t    <a href=\"#\" class=\"nav-link\">Another link</a>\r\n\t\t\t  </li>\r\n\t\t\t  <li class=\"nav-item\">\r\n\t\t\t    <a href=\"#\" class=\"nav-link disabled\">Disabled</a>\r\n\t\t\t  </li>\r\n\t\t\t</navigation>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 195 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">navigation</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"pills\"</span> <span class=\"hljs-attribute\">vertical</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-item\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-link active\"</span>&gt;</span>Active<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-item\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-link\"</span>&gt;</span>Link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-item\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-link\"</span>&gt;</span>Another link<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-item\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-link disabled\"</span>&gt;</span>Disabled<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">navigation</span>&gt;</span>\r\n";

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(197);
	
	__webpack_require__(200);
	
	var _navHtml = __webpack_require__(202);
	
	var _navHtml2 = _interopRequireDefault(_navHtml);
	
	// export component object
	exports['default'] = {
	  template: _navHtml2['default'],
	  replace: true,
	  props: {
	    vertical: {
	      type: Boolean,
	      'default': false
	    },
	    type: {
	      type: String,
	      'default': ''
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(198);

/***/ },
/* 198 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 199 */,
/* 200 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 201 */,
/* 202 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"nav\" v-bind:class=\"{ 'nav-stacked': vertical, 'nav-pills': type == 'pills', 'navbar-nav': type == 'navbar' }\">\n  <slot></slot> \n</ul>";

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _navbarJson = __webpack_require__(204);
	
	var _navbarJson2 = _interopRequireDefault(_navbarJson);
	
	var _navbarHtml = __webpack_require__(205);
	
	var _navbarHtml2 = _interopRequireDefault(_navbarHtml);
	
	var _snippetHtml = __webpack_require__(206);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsNavbar = __webpack_require__(207);
	
	var _srcComponentsNavbar2 = _interopRequireDefault(_srcComponentsNavbar);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _navbarHtml2['default'],
	  data: function data() {
	    return {
	      meta: _navbarJson2['default'],
	      snippet: _snippetHtml2['default'],
	      fixed: '',
	      fixeds: [{ text: 'default', value: '' }, { text: 'top', value: 'top' }, { text: 'bottom', value: 'bottom' }],
	      type: 'default',
	      types: [{ text: 'default', value: 'default' }, { text: 'dark', value: 'dark' }],
	      variant: 'default',
	      variants: _utils.variants.concat([{ text: 'inverse', value: 'inverse' }])
	    };
	  },
	  components: {
	    'navbar': _srcComponentsNavbar2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  },
	  watch: {
	    type: function type(val) {
	      if (val === 'dark' && this.variant !== 'primary' && this.variant !== 'inverse') {
	        this.variant = 'inverse';
	      }
	    },
	    variant: function variant(val) {
	      if (val === 'primary' || val === 'inverse') {
	        this.type = 'dark';
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = {
		"name": "navbar",
		"title": "Navbar",
		"description": "The navbar is a simple wrapper for positioning branding, navigation, and other elements into a concise navigation header.",
		"dependencies": [
			"vuestrap/nav",
			"vuestrap/buttons",
			"vuestrap/forms"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "fixed",
				"type": "String",
				"default": "''",
				"description": "Removes rounded corners and sticks the navbar to the top/bottom."
			},
			{
				"name": "type",
				"type": "String",
				"values": [
					"light",
					"dark"
				],
				"default": "success",
				"description": "When type is set to dark, light font color will be applied."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"inverse",
					"primary",
					"success",
					"info",
					"warning",
					"danger"
				],
				"default": "success",
				"description": "Background color of the navbar."
			}
		]
	};

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>\r\n\t\t\tfixed\r\n\t\t\t<select v-model=\"fixed\">\r\n\t\t\t\t<option v-for=\"option in fixeds\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\ttype\r\n\t\t\t<select v-model=\"type\">\r\n\t\t\t\t<option v-for=\"option in types\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label>\r\n\t\t\tvariant\r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<navbar :fixed=\"fixed\" :type=\"type\" :variant=\"variant\">\r\n\t\t\t  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n\t\t\t  <ul class=\"nav navbar-nav pull-left\">\r\n\t\t\t    <li class=\"nav-item active\">\r\n\t\t\t      <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n\t\t\t    </li>\r\n\t\t\t    <li class=\"nav-item\">\r\n\t\t\t      <a class=\"nav-link\" href=\"#\">Features</a>\r\n\t\t\t    </li>\r\n\t\t\t    <li class=\"nav-item\">\r\n\t\t\t      <a class=\"nav-link\" href=\"#\">Pricing</a>\r\n\t\t\t    </li>\r\n\t\t\t    <li class=\"nav-item\">\r\n\t\t\t      <a class=\"nav-link\" href=\"#\">About</a>\r\n\t\t\t    </li>\r\n\t\t\t  </ul>\r\n\t\t\t  <form class=\"form-inline navbar-form pull-right\">\r\n\t\t\t    <input class=\"form-control\" type=\"text\" placeholder=\"Search\">\r\n\t\t\t    <button class=\"btn btn-success-outline\" type=\"submit\">Search</button>\r\n\t\t\t  </form>\r\n\t\t\t</navbar>\r\n\t\t\t<div v-if=\"fixed\">Look for navbar at the {{fixed}} :)</div>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 206 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">navbar</span> <span class=\"hljs-attribute\">fixed</span>=<span class=\"hljs-value\">\"top\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"light\"</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"default\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"navbar-brand\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Navbar<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">ul</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav navbar-nav pull-left\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-item active\"</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-link\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Home <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">span</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"sr-only\"</span>&gt;</span>(current)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-item\"</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-link\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Features<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-item\"</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-link\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Pricing<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-item\"</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"nav-link\"</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>About<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">ul</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">form</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"form-inline navbar-form pull-right\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">input</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"form-control\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"text\"</span> <span class=\"hljs-attribute\">placeholder</span>=<span class=\"hljs-value\">\"Search\"</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn btn-success-outline\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"submit\"</span>&gt;</span>Search<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">form</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">navbar</span>&gt;</span>\r\n";

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(208);
	
	var _navbarHtml = __webpack_require__(211);
	
	var _navbarHtml2 = _interopRequireDefault(_navbarHtml);
	
	// export component object
	exports['default'] = {
	  template: _navbarHtml2['default'],
	  replace: true,
	  computed: {
	    navbarType: function navbarType() {
	      return !this.type || this.type === 'default' ? 'navbar-light' : 'navbar-dark';
	    },
	    navbarVariant: function navbarVariant() {
	      return !this.variant || this.variant === 'default' ? 'bg-faded' : 'bg-' + this.variant;
	    },
	    navbarfixed: function navbarfixed() {
	      return !this.fixed ? '' : 'navbar-fixed-' + this.fixed;
	    }
	  },
	  props: {
	    type: {
	      type: String,
	      'default': 'light'
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    },
	    fixed: {
	      type: String,
	      'default': ''
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(209);
	
	__webpack_require__(25);
	
	__webpack_require__(198);
	
	__webpack_require__(117);

/***/ },
/* 209 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 210 */,
/* 211 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar {{navbarType}} {{navbarVariant}} {{navbarfixed}}\">\r\n\t<slot></slot>\r\n</nav>";

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _pagerJson = __webpack_require__(213);
	
	var _pagerJson2 = _interopRequireDefault(_pagerJson);
	
	var _pagerHtml = __webpack_require__(214);
	
	var _pagerHtml2 = _interopRequireDefault(_pagerHtml);
	
	var _snippetHtml = __webpack_require__(215);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsPager = __webpack_require__(216);
	
	var _srcComponentsPager2 = _interopRequireDefault(_srcComponentsPager);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	exports['default'] = {
	  template: _pagerHtml2['default'],
	  data: function data() {
	    return {
	      meta: _pagerJson2['default'],
	      snippet: _snippetHtml2['default'],
	      vertical: false,
	      type: 'default',
	      types: [{ text: 'default', value: 'default' }, { text: 'pills', value: 'pills' }]
	    };
	  },
	  components: {
	    'pager': _srcComponentsPager2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 213 */
/***/ function(module, exports) {

	module.exports = {
		"name": "pager",
		"title": "Pager",
		"description": "Quick previous and next links for simple pagination implementations with light markup and styles. It’s great for simple sites like blogs or magazines.",
		"dependencies": [],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": []
	};

/***/ },
/* 214 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<pager>\r\n\t\t\t\t<li><a href=\"#\">Previous</a></li>\r\n    \t\t<li><a href=\"#\">Next</a></li>\r\n    \t</pager>\r\n    \t<hr>\r\n    \t<pager>\r\n\t\t\t\t<li class=\"pager-prev\"><a href=\"#\">Older</a></li>\r\n    \t\t<li class=\"pager-next\"><a href=\"#\">Newer</a></li>\r\n    \t</pager>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 215 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pager</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Previous<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Next<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pager</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">hr</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pager</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"pager-prev\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Older<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">li</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"pager-next\"</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">a</span> <span class=\"hljs-attribute\">href</span>=<span class=\"hljs-value\">\"#\"</span>&gt;</span>Newer<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">a</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">li</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pager</span>&gt;</span>\r\n";

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(217);
	
	var _pagerHtml = __webpack_require__(220);
	
	var _pagerHtml2 = _interopRequireDefault(_pagerHtml);
	
	// export component object
	exports['default'] = {
	  template: _pagerHtml2['default'],
	  replace: true
	};
	module.exports = exports['default'];

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(218);

/***/ },
/* 218 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 219 */,
/* 220 */
/***/ function(module, exports) {

	module.exports = "<nav>\r\n  <ul class=\"pager\">\r\n  \t<slot></slot>\r\n  </ul>\r\n</nav>";

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _paginationJson = __webpack_require__(222);
	
	var _paginationJson2 = _interopRequireDefault(_paginationJson);
	
	var _paginationHtml = __webpack_require__(223);
	
	var _paginationHtml2 = _interopRequireDefault(_paginationHtml);
	
	var _snippetHtml = __webpack_require__(224);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsPagination = __webpack_require__(225);
	
	var _srcComponentsPagination2 = _interopRequireDefault(_srcComponentsPagination);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _paginationHtml2['default'],
	  data: function data() {
	    return {
	      meta: _paginationJson2['default'],
	      snippet: _snippetHtml2['default'],
	      vertical: false,
	      size: 'md',
	      sizes: _utils.sizes,
	      variant: 'primary',
	      variants: _utils.variants,
	      totalRows: 100,
	      currentPage: 1,
	      perPage: 10
	    };
	  },
	  components: {
	    'pagination': _srcComponentsPagination2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 222 */
/***/ function(module, exports) {

	module.exports = {
		"name": "pagination",
		"title": "Pagination",
		"description": "Provide pagination links for your site or app with the multi-page pagination component.",
		"dependencies": [
			"vuestrap/buttons",
			"vuestrap/button-group"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "current-page",
				"type": "Number",
				"default": "1",
				"description": "Sets the initial active page number."
			},
			{
				"name": "limit",
				"type": "Number",
				"default": "7",
				"description": "Number of visible links"
			},
			{
				"name": "per-page",
				"type": "Number",
				"default": "20",
				"description": "Number of visible links including left and right arrows."
			},
			{
				"name": "total-rows",
				"type": "Number",
				"default": "20",
				"description": "Number of all results, so the pagination can calculate page links."
			},
			{
				"name": "size",
				"type": "String",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"default": "md",
				"description": "Size of the button."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"secondary",
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Button color context."
			}
		]
	};

/***/ },
/* 223 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>\r\n\t\t\t\tsize\r\n\t\t\t\t<select v-model=\"size\">\r\n\t\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\r\n\t\t\t<label>\r\n\t\t\t\tvariant\r\n\t\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<pagination\r\n\t\t\t    :size=\"size\"\r\n\t\t\t    :variant=\"variant\"\r\n\t\t\t    :total-rows=\"totalRows\"\r\n\t\t\t    :current-page.sync=\"currentPage\"\r\n\t\t\t    :per-page=\"perPage\">\r\n\t\t\t</pagination>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 224 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pagination</span> \r\n  <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span>\r\n  <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span>\r\n  <span class=\"hljs-attribute\">total-rows</span>=<span class=\"hljs-value\">\"100\"</span>\r\n  <span class=\"hljs-attribute\">:current-page</span>=<span class=\"hljs-value\">\"currentPageVariable\"</span>\r\n  <span class=\"hljs-attribute\">per-page</span>=<span class=\"hljs-value\">\"10\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pagination</span>&gt;</span>\r\n";

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(226);
	
	var _paginationHtml = __webpack_require__(229);
	
	var _paginationHtml2 = _interopRequireDefault(_paginationHtml);
	
	// export component object
	exports['default'] = {
	  template: _paginationHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      diff: 1,
	      showPrev: false,
	      showNext: false
	    };
	  },
	  computed: {
	    numberOfPages: function numberOfPages() {
	      var result = Math.ceil(this.totalRows / this.perPage);
	      return result < 1 ? 1 : result;
	    },
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    },
	    pageLinks: function pageLinks() {
	      var result = this.limit;
	      if (this.currentPage > this.numberOfPages) {
	        this.currentPage = 1;
	      }
	      this.diff = 1;
	      this.showPrev = false;
	      this.showNext = false;
	      // if less pages than limit just show this pages
	      if (this.numberOfPages <= this.limit) {
	        return this.numberOfPages;
	      }
	      // if at the beggining of the list or at the end show full number of pages within limit - 2
	      // -2 is reserves space for two buttons: "..." and "first/last button"
	      if (this.currentPage <= this.limit - 2) {
	        this.diff = 1;
	        this.showNext = true;
	        result = this.limit - 2;
	      }
	      // at the end of the range
	      if (this.currentPage > this.numberOfPages - this.limit + 2) {
	        this.diff = this.numberOfPages - this.limit + 3;
	        this.showPrev = true;
	        result = this.limit - 2;
	      }
	      // if somehere in the middle show just limit - 4 links in the middle and one button on the left with "..." and on button on the right preceeded with "..."
	      if (this.currentPage >= this.limit - 2 && this.currentPage <= this.numberOfPages - this.limit + 2) {
	        this.diff = this.currentPage - 1;
	        this.showPrev = true;
	        this.showNext = true;
	        result = this.limit - 4;
	      }
	      return result;
	    }
	  },
	  methods: {
	    btnVariant: function btnVariant(index) {
	      return index + this.diff === this.currentPage ? 'btn-' + this.variant : 'btn-secondary';
	    }
	  },
	  props: {
	    currentPage: {
	      type: Number,
	      'default': 1
	    },
	    limit: {
	      type: Number,
	      'default': 7
	    },
	    perPage: {
	      type: Number,
	      'default': 20
	    },
	    totalRows: {
	      type: Number,
	      'default': 20
	    },
	    size: {
	      type: String,
	      'default': 'secondary'
	    },
	    variant: {
	      type: String,
	      'default': ''
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(227);
	
	__webpack_require__(25);
	
	__webpack_require__(48);

/***/ },
/* 227 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 228 */,
/* 229 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btn-group pagination\" role=\"group\" aria-label=\"Pagination\">\r\n    <button type=\"button\" class=\"btn btn-secondary {{btnSize}}\" v-bind:disabled=\"currentPage == 1 \" v-on:click=\"(currentPage == 1) ? return : currentPage--\"><span aria-hidden=\"true\">&laquo;</span></button>\r\n    <button type=\"button\" class=\"btn  btn-secondary {{btnSize}} {{ currentPage == 1 ?  'active' : '' }}\" v-on:click=\"currentPage = 1\" v-show=\"showPrev\">1</button>\r\n    <span class=\"btn btn-secondary {{btnSize}}\" v-show=\"showPrev\">...</span>\r\n    <button type=\"button\"\r\n    \tclass=\"btn {{btnSize}} {{btnVariant($index)}} {{ $index + diff == currentPage ? 'active' : '' }} {{ $index + diff != currentPage ? 'hidden-xs-down' : '' }}\"\r\n    \tv-for=\"item in pageLinks\"\r\n        v-on:click=\"currentPage = $index + diff\">{{$index + diff}}\r\n    </button>\r\n    <span class=\"btn btn-secondary {{btnSize}}\" v-show=\"showNext\">...</span>\r\n    <button type=\"button\" class=\"btn btn-secondary {{btnSize}} {{ numberOfPages == currentPage ? 'active' : '' }}\" v-show=\"showNext\" v-on:click=\"currentPage = numberOfPages\">{{numberOfPages}}</button>\r\n    <button type=\"button\" class=\"btn btn-secondary {{btnSize}}\" v-bind:disabled=\"currentPage == numberOfPages\" v-on:click=\"(currentPage == numberOfPages) ? return : currentPage++\"><span aria-hidden=\"true\">&raquo;</span></button>\r\n</div>\r\n";

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _popoverJson = __webpack_require__(231);
	
	var _popoverJson2 = _interopRequireDefault(_popoverJson);
	
	var _popoverHtml = __webpack_require__(232);
	
	var _popoverHtml2 = _interopRequireDefault(_popoverHtml);
	
	var _snippetHtml = __webpack_require__(233);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsPopover = __webpack_require__(234);
	
	var _srcComponentsPopover2 = _interopRequireDefault(_srcComponentsPopover);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	exports['default'] = {
	  template: _popoverHtml2['default'],
	  data: function data() {
	    return {
	      meta: _popoverJson2['default'],
	      snippet: _snippetHtml2['default']
	    };
	  },
	  components: {
	    'popover': _srcComponentsPopover2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 231 */
/***/ function(module, exports) {

	module.exports = {
		"name": "popover",
		"title": "Popover",
		"description": "Add small overlay content to any element for housing secondary information. Popover rely on on the 3rd party library <a href='http://github.hubspot.com/tether/'>tether</a> for positioning.",
		"dependenices": [
			"vuestrap-tether",
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "position",
				"type": "String",
				"values": [
					"top",
					"bottom",
					"left",
					"right"
				],
				"default": "top",
				"required": false,
				"description": "Position of the popover."
			},
			{
				"name": "title",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "Title."
			},
			{
				"name": "text",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "A textual content in the popover. This can be Html."
			},
			{
				"name": "triggers",
				"type": "Array",
				"values": [
					"click",
					"focus",
					"hover"
				],
				"default": "['click']",
				"description": "Opens popover based on spcified triggers. If you consider supporting mobile devices than you might need to specify both click and hover trigger, (on desktops click will take priority)."
			}
		]
	};

/***/ },
/* 232 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"markup\">\r\n\t\t<popover title=\"title\" text=\"Lorem ipsum dolor.\" position=\"top\">\r\n\t\t\t<button class=\"btn\">popover top</button>\r\n\t\t</popover>\r\n\t\t<popover title=\"title\" text=\"Lorem ipsum dolor.\" position=\"bottom\">\r\n\t\t\t<button class=\"btn\">popover bottom</button>\r\n\t\t</popover>\r\n\t\t<popover title=\"title\" text=\"Lorem ipsum dolor.\" position=\"left\">\r\n\t\t\t<button class=\"btn\">popover left</button>\r\n\t\t</popover>\r\n\t\t<popover title=\"title\" text=\"Lorem ipsum dolor.\" position=\"right\">\r\n\t\t\t<button class=\"btn\">popover right</button>\r\n\t\t</popover>\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 233 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">popover</span> \r\n  <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"popover top\"</span> \r\n  <span class=\"hljs-attribute\">text</span>=<span class=\"hljs-value\">\"Lorem ipsum dolor.\"</span> \r\n  <span class=\"hljs-attribute\">position</span>=<span class=\"hljs-value\">\"right\"</span> \r\n  <span class=\"hljs-attribute\">:triggers</span>=<span class=\"hljs-value\">\"['click']\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">input</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"text\"</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"form-control\"</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">popover</span>&gt;</span>\r\n";

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(235);
	
	// TODO import {Tether} from 'vuestrap-tether'
	
	var _popoverHtml = __webpack_require__(238);
	
	var _popoverHtml2 = _interopRequireDefault(_popoverHtml);
	
	// export component object
	exports['default'] = {
	  template: _popoverHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	  computed: {
	    popoverAlignment: function popoverAlignment() {
	      return !this.position || this.position === 'default' ? 'popover-top' : 'popover-' + this.position;
	    }
	  },
	  props: {
	    position: {
	      type: String,
	      'default': 'top'
	    },
	    triggers: {
	      type: Array,
	      'default': function _default() {
	        return ['click', 'focus'];
	      }
	    },
	    title: {
	      type: String,
	      'default': ''
	    },
	    text: {
	      type: String,
	      'default': ''
	    }
	  },
	  methods: {
	
	    /**
	     * Toggle 'show' state
	     * @param  {Object} e
	     * @param  {Boolean} newState (if set use it's value)
	     */
	    toggle: function toggle(e, newState) {
	      var _this2 = this;
	
	      // change state
	      this.show = typeof newState !== 'undefined' ? newState : !this.show;
	
	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      // element is shown
	      if (this.show) {
	        (function () {
	          var position = {
	            attachment: 'bottom center',
	            targetAttachment: 'top center'
	          };
	          if (_this2.position === 'bottom') {
	            position = {
	              attachment: 'top center',
	              targetAttachment: 'bottom center'
	            };
	          }
	          if (_this2.position === 'left') {
	            position = {
	              attachment: 'middle right',
	              targetAttachment: 'middle left'
	            };
	          }
	          if (_this2.position === 'right') {
	            position = {
	              attachment: 'middle left',
	              targetAttachment: 'middle right'
	            };
	          }
	
	          // let tether do the magic, after element is shown
	          Vue.nextTick(function () {
	            _this2._tether = new Tether({
	              element: _this2._popover,
	              target: _this2._trigger,
	              attachment: position.attachment,
	              targetAttachment: position.targetAttachment
	            });
	            _this2.$dispatch('shown::popover');
	          });
	
	          // element gets hidden
	        })();
	      } else {
	          if (this._tether) {
	            this._tether.destroy();
	          }
	          this.$dispatch('hidden::popover');
	        }
	    },
	
	    /**
	     * Handle multiple event triggers
	     * @param  {Object} e
	     */
	    _eventHandler: function _eventHandler(e) {
	      // if both click and hover are set, on desktop devices click will take precedence
	      if ((e.type === 'mouseenter' || e.type === 'mouseleave') && this.triggers.indexOf('click') !== -1) {
	        return;
	      }
	      // TODO
	      // if both click and focus are set, focus will take precedence
	      // if (e.type === 'click' && this.triggers.indexOf('focus') !== -1) {
	      //   return
	      // }
	
	      // stop propagation to avoid accidental closing on ide::popover event
	      e.stopPropagation();
	
	      // hide popover
	      if (e.type === 'click') {
	        this.toggle(e);
	      } else {
	        if (e.type === 'mouseenter' || e.type === 'focus') {
	          this.toggle(e, true);
	        } else {
	          this.toggle(e, false);
	        }
	      }
	    }
	  },
	  events: {
	    'hide::popover': function hidePopover() {
	      this.toggle(null, false);
	    }
	  },
	  ready: function ready() {
	    // TODO animations
	
	    // configure tether
	    this._trigger = this.$els.trigger.children[0];
	    this._popover = this.$els.popover;
	    var _this = this;
	
	    // add listeners for specified triggers anb complementary click event
	    this._trigger.addEventListener('click', function (e) {
	      return _this._eventHandler(e);
	    });
	
	    if (this.triggers.indexOf('hover') !== -1) {
	      this._trigger.addEventListener('mouseenter', function (e) {
	        return _this._eventHandler(e);
	      });
	      this._trigger.addEventListener('mouseleave', function (e) {
	        return _this._eventHandler(e);
	      });
	    }
	    if (this.triggers.indexOf('focus') !== -1 && this._trigger.tagName.toLowerCase() === 'input') {
	      this._trigger.addEventListener('focus', function (e) {
	        return _this._eventHandler(e);
	      });
	      this._trigger.addEventListener('blur', function (e) {
	        return _this._eventHandler(e);
	      });
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    // clean up listeners
	    this._trigger.removeEventListener('click', function () {
	      return _this._eventHandler();
	    });
	    this._trigger.removeEventListener('mouseenter', function () {
	      return _this._eventHandler();
	    });
	    this._trigger.removeEventListener('mouseleave', function () {
	      return _this._eventHandler();
	    });
	    this._trigger.removeEventListener('focus', function () {
	      return _this._eventHandler();
	    });
	    this._trigger.removeEventListener('blur', function () {
	      return _this._eventHandler();
	    });
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(236);
	
	__webpack_require__(25);

/***/ },
/* 236 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 237 */,
/* 238 */
/***/ function(module, exports) {

	module.exports = "<span v-el:trigger>\r\n\t<slot></slot>\r\n</span> \r\n<div class=\"popover {{popoverAlignment}}\" v-show=\"show\" v-el:popover>\r\n  <div class=\"popover-arrow\"></div>\r\n  <h3 class=\"popover-title\" v-if=\"title\">{{title}}</h3>\r\n  <div class=\"popover-content\">\r\n    <span v-html=\"text\"></span>\r\n  </div>\r\n</div>";

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _progressJson = __webpack_require__(240);
	
	var _progressJson2 = _interopRequireDefault(_progressJson);
	
	var _progressHtml = __webpack_require__(241);
	
	var _progressHtml2 = _interopRequireDefault(_progressHtml);
	
	var _snippetHtml = __webpack_require__(242);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsProgress = __webpack_require__(243);
	
	var _srcComponentsProgress2 = _interopRequireDefault(_srcComponentsProgress);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _progressHtml2['default'],
	  data: function data() {
	    return {
	      meta: _progressJson2['default'],
	      snippet: _snippetHtml2['default'],
	      value: 25,
	      animated: true,
	      striped: true,
	      variant: 'primary',
	      variants: _utils.variants
	    };
	  },
	  components: {
	    'progress': _srcComponentsProgress2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 240 */
/***/ function(module, exports) {

	module.exports = {
		"name": "progress",
		"title": "Progress",
		"description": "Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.",
		"dependenices": [],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "animated",
				"type": "Boolean",
				"default": false,
				"required": false,
				"description": "Makes stripes to animate right to left."
			},
			{
				"name": "max",
				"type": "Number",
				"default": "100",
				"required": false,
				"description": "Maximum value."
			},
			{
				"name": "striped",
				"type": "Boolean",
				"default": false,
				"required": false,
				"description": "Uses a gradient to create a striped effect."
			},
			{
				"name": "variant",
				"type": "String",
				"values": [
					"primary",
					"success",
					"info",
					"warning",
					"danger",
					"link"
				],
				"default": "success",
				"description": "Background color context."
			}
		]
	};

/***/ },
/* 241 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>striped <input type=\"checkbox\" v-model=\"striped\"></label>\r\n\t\t<!-- <label>animated <input type=\"checkbox\" v-model=\"animated\"></label> -->\r\n\t\t<label>\r\n\t\t\tvariant\r\n\t\t\t<select v-model=\"variant\">\r\n\t\t\t\t<option v-for=\"option in variants\" v-bind:value=\"option.value\">\r\n\t\t\t    {{ option.text }}\r\n\t\t\t  </option>\r\n\t\t\t</select>\r\n\t\t</label>\r\n\t\t<label class=\"form-control-label\">value</label> <input type=\"range\" v-model=\"value\"> {{value}}%\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<progress :variant=\"variant\" :value=\"value\" :striped=\"striped\" :animated=\"animated\">25%</progress>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 242 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">progress</span> <span class=\"hljs-attribute\">variant</span>=<span class=\"hljs-value\">\"primary\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"25\"</span> <span class=\"hljs-attribute\">striped</span>=<span class=\"hljs-value\">\"true\"</span> <span class=\"hljs-attribute\">animated</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>25%<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">progress</span>&gt;</span>\r\n";

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(244);
	
	var _progressHtml = __webpack_require__(247);
	
	var _progressHtml2 = _interopRequireDefault(_progressHtml);
	
	// export component object
	exports['default'] = {
	  template: _progressHtml2['default'],
	  replace: true,
	  computed: {
	    progressVariant: function progressVariant() {
	      return !this.variant || this.variant === 'default' ? 'progress-primary' : 'progress-' + this.variant;
	    }
	  },
	  props: {
	    animated: {
	      type: Boolean,
	      'default': false
	    },
	    max: {
	      type: Number,
	      'default': 100
	    },
	    striped: {
	      type: Boolean,
	      'default': false
	    },
	    value: {
	      type: Number,
	      'default': 0
	    },
	    variant: {
	      type: String,
	      'default': 'default'
	    }
	  },
	  ready: function ready() {
	    this._progress = this.$els.progress;
	    this._progressBar = this.$els.progressbar;
	    this._progressBar.style.width = this.value + '%';
	    this._progress.setAttribute('value', this.value);
	  },
	  watch: {
	    value: function value(val) {
	      this._progress.setAttribute('value', val);
	      this._progressBar.style.width = this.value + '%';
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(245);

/***/ },
/* 245 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 246 */,
/* 247 */
/***/ function(module, exports) {

	module.exports = "<button v-on:click=\"value = 65\">65</button>\r\n<progress \r\n\tclass=\"progress {{progressVariant}} {{ striped ? 'progress-striped' : ''}} {{ animated ? 'progres-animated' : ''}}\" \r\n\tvalue=\"{{value}}\" \r\n\tmax=\"{{max}}\" \r\n\taria-valuenow=\"{{value}}\" \r\n\taria-valuemin=\"0\" \r\n\taria-valuemax=\"{{max}}\"\r\n\tv-el:progress>\r\n  <div class=\"progress\">\r\n    <span class=\"progress-bar\" v-bind:style=\"{width: '+ value + '%'}\" v-el:progressbar></span>\r\n  </div>\r\n</progress>";

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _tablesJson = __webpack_require__(249);
	
	var _tablesJson2 = _interopRequireDefault(_tablesJson);
	
	var _tablesHtml = __webpack_require__(250);
	
	var _tablesHtml2 = _interopRequireDefault(_tablesHtml);
	
	var _snippetHtml = __webpack_require__(251);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsTables = __webpack_require__(252);
	
	var _srcComponentsTables2 = _interopRequireDefault(_srcComponentsTables);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	exports['default'] = {
	  template: _tablesHtml2['default'],
	  data: function data() {
	    return {
	      meta: _tablesJson2['default'],
	      snippet: _snippetHtml2['default']
	    };
	  },
	  components: {
	    'tables': _srcComponentsTables2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 249 */
/***/ function(module, exports) {

	module.exports = {
		"name": "tables",
		"title": "Tables",
		"description": "For tabular data.",
		"dependenices": [
			"vuestrap/tables"
		],
		"note": "This is standard html <code>&lt;table></code> markup. Please see options below on what classes can be used for styling.",
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": ".table",
				"type": "class",
				"default": "",
				"required": false,
				"description": "Adds styling to the table."
			},
			{
				"name": ".table-border",
				"type": "class",
				"default": "",
				"required": false,
				"description": "Adds borders on all sides of the table and cells."
			},
			{
				"name": ".table-inverse",
				"type": "class",
				"default": "",
				"required": false,
				"description": "<code>&lt;table></code> appear dark gray."
			},
			{
				"name": ".thead-inverse",
				"type": "class",
				"default": "",
				"required": false,
				"description": "<code>&lt;thead></code>s appear light or dark gray."
			},
			{
				"name": ".table-hover",
				"type": "class",
				"default": "",
				"required": false,
				"description": "To enable a hover state on table rows within a <code>&lt;tbody></code>."
			},
			{
				"name": ".table-sm",
				"type": "class",
				"default": "",
				"required": false,
				"description": "To make tables more compact by cutting cell padding in half."
			},
			{
				"name": ".table-responsive",
				"type": "class",
				"default": "",
				"required": false,
				"description": "To make them scroll horizontally on small devices (under 768px). When viewing on anything larger than 768px wide, you will not see any difference in these tables."
			},
			{
				"name": ".table-striped",
				"type": "class",
				"default": "",
				"required": false,
				"description": "Adds zebra-striping to any table row within the <code>&lt;tbody></code>."
			}
		]
	};

/***/ },
/* 250 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<table class=\"table table-hover\">\r\n\t\t\t  <thead>\r\n\t\t\t    <tr>\r\n\t\t\t      <th>#</th>\r\n\t\t\t      <th>First Name</th>\r\n\t\t\t      <th>Last Name</th>\r\n\t\t\t      <th>Username</th>\r\n\t\t\t    </tr>\r\n\t\t\t  </thead>\r\n\t\t\t  <tbody>\r\n\t\t\t    <tr>\r\n\t\t\t      <th scope=\"row\">1</th>\r\n\t\t\t      <td>Mark</td>\r\n\t\t\t      <td>Otto</td>\r\n\t\t\t      <td>@mdo</td>\r\n\t\t\t    </tr>\r\n\t\t\t    <tr>\r\n\t\t\t      <th scope=\"row\">2</th>\r\n\t\t\t      <td>Jacob</td>\r\n\t\t\t      <td>Thornton</td>\r\n\t\t\t      <td>@fat</td>\r\n\t\t\t    </tr>\r\n\t\t\t    <tr>\r\n\t\t\t      <th scope=\"row\">3</th>\r\n\t\t\t      <td colspan=\"2\">Larry the Bird</td>\r\n\t\t\t      <td>@twitter</td>\r\n\t\t\t    </tr>\r\n\t\t\t  </tbody>\r\n\t\t\t</table>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 251 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">table</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"table table-hover\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">thead</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tr</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span>&gt;</span>#<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span>&gt;</span>First Name<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span>&gt;</span>Last Name<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span>&gt;</span>Username<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tr</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">thead</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tbody</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tr</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span> <span class=\"hljs-attribute\">scope</span>=<span class=\"hljs-value\">\"row\"</span>&gt;</span>1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>Mark<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>Otto<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>@mdo<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tr</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tr</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span> <span class=\"hljs-attribute\">scope</span>=<span class=\"hljs-value\">\"row\"</span>&gt;</span>2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>Jacob<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>Thornton<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>@fat<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tr</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tr</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">th</span> <span class=\"hljs-attribute\">scope</span>=<span class=\"hljs-value\">\"row\"</span>&gt;</span>3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">th</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span> <span class=\"hljs-attribute\">colspan</span>=<span class=\"hljs-value\">\"2\"</span>&gt;</span>Larry the Bird<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">td</span>&gt;</span>@twitter<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">td</span>&gt;</span>\r\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tr</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tbody</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">table</span>&gt;</span>\r\n";

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(253);

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(254);

/***/ },
/* 254 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 255 */,
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _tabsJson = __webpack_require__(257);
	
	var _tabsJson2 = _interopRequireDefault(_tabsJson);
	
	var _tabsHtml = __webpack_require__(258);
	
	var _tabsHtml2 = _interopRequireDefault(_tabsHtml);
	
	var _snippetHtml = __webpack_require__(259);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsTabs = __webpack_require__(260);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	var _utils = __webpack_require__(12);
	
	exports['default'] = {
	  template: _tabsHtml2['default'],
	  data: function data() {
	    return {
	      meta: _tabsJson2['default'],
	      snippet: _snippetHtml2['default'],
	      fade: true,
	      size: 'md',
	      sizes: _utils.sizes
	    };
	  },
	  components: {
	    'tab': _srcComponentsTabs.tab,
	    'tabs': _srcComponentsTabs.tabs,
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 257 */
/***/ function(module, exports) {

	module.exports = {
		"name": "tabs",
		"title": "Tabs",
		"description": "",
		"dependenices": [
			"vuestrap/tabs"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "fade",
				"type": "Boolean",
				"default": true,
				"required": false,
				"description": "If set to true, tab panels will animate during tab change."
			},
			{
				"name": "size",
				"type": "String",
				"default": "md",
				"values": [
					"sm",
					"md",
					"lg"
				],
				"required": false,
				"description": "Size of the tab buttons."
			}
		]
	};

/***/ },
/* 258 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"controls\">\r\n\t\t<!-- Html controls start-->\r\n\t\t<label>fade <input type=\"checkbox\" v-model=\"fade\"></label>\r\n\t\t<label>\r\n\t\t\t\tsize\r\n\t\t\t\t<select v-model=\"size\">\r\n\t\t\t\t\t<option v-for=\"option in sizes\" v-bind:value=\"option.value\">\r\n\t\t\t\t    {{ option.text }}\r\n\t\t\t\t  </option>\r\n\t\t\t\t</select>\r\n\t\t\t</label>\r\n\t\t<!-- Html controls end-->\r\n\t</div>\r\n\t<div slot=\"markup\">\r\n\t\t\t<!-- Html markup start-->\r\n\t\t\t<tabs :fade=\"fade\" :size=\"size\">\r\n\t\t\t\t<tab id=\"tab-1\" title=\"Tab 1\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quidem!</tab>\r\n\t\t\t\t<tab id=\"tab-2\" title=\"Tab 2\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, corporis?</tab>\r\n\t\t\t\t<tab id=\"tab-2\" title=\"Tab 3\" disabled>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, architecto, maiores.</tab>\r\n\t\t\t</tabs>\r\n\t\t\t<!-- Html markup end-->\r\n\t</div>\r\n</example>\t\r\n";

/***/ },
/* 259 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tabs</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"md\"</span> <span class=\"hljs-attribute\">fade</span>=<span class=\"hljs-value\">\"false\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tab</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"tab-1\"</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Tab 1\"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, quidem!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tab</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tab</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"tab-2\"</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Tab 2\"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, corporis?<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tab</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tab</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"tab-2\"</span> <span class=\"hljs-attribute\">title</span>=<span class=\"hljs-value\">\"Tab 3\"</span> <span class=\"hljs-attribute\">disabled</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, architecto, maiores.<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tab</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tabs</span>&gt;</span>\r\n";

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(197);
	
	var _tabsHtml = __webpack_require__(261);
	
	var _tabsHtml2 = _interopRequireDefault(_tabsHtml);
	
	var _utils = __webpack_require__(12);
	
	// this is directly linked to the bootstrap animation timing in _carusel.scss
	// for browsers that do not support transitions like IE9 just change slide immediately
	var TRANSITION_DURATION = (0, _utils.csstransitions)() ? 150 : 0;
	
	// export component object
	var tabs = {
	  template: _tabsHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      items: []
	    };
	  },
	  computed: {
	    btnSize: function btnSize() {
	      return !this.size || this.size === 'default' ? '' : 'btn-' + this.size;
	    }
	  },
	  props: {
	    fade: {
	      type: Boolean,
	      'default': true
	    },
	    size: {
	      type: String,
	      'default': 'md'
	    }
	  },
	  methods: {
	
	    /**
	     * get an index of an active tab
	     * @return {Number}
	     */
	    getActive: function getActive() {
	      var active = -1;
	      this.items.forEach(function (item, index) {
	        if (item.active) {
	          active = index;
	        }
	      });
	      return active;
	    },
	
	    /**
	     * set active tab on the items collection and the child 'tab' component
	     */
	    setActive: function setActive(index) {
	      var _this = this;
	
	      // ignore disabled
	      if (this.items[index].disabled) return;
	
	      // deactivate previous active tab
	      var activeTab = this.getActive();
	      if (activeTab !== -1) {
	        // setting animate to false will trigger fade out effect
	        this.items[activeTab].active = false;
	        this.$children[activeTab].$set('animate', false);
	        this.$children[activeTab].$set('active', false);
	      }
	
	      // set new active tab and animate (if fade flag is set to true)
	      this.$children[index].$set('active', true);
	      setTimeout(function () {
	        // setting animate to true will trigger fade in effect
	        _this.items[index].active = true;
	        _this.$children[index].$set('animate', true);
	        _this.$dispatch('changed::tab', _this.items[index].id);
	      }, this.fade ? TRANSITION_DURATION : 0);
	    }
	  },
	  ready: function ready() {
	    // if no active tab, set the first one by default
	    if (this.getActive() === -1) {
	      this.setActive(0);
	    }
	  }
	};
	
	exports.tabs = tabs;
	// export tab object
	var tab = {
	  template: '<div role="tabpanel" class="tab-pane" v-bind:class="{ active: active, disabled: disabled, fade: fade, in: animate}"><slot></slot></div>',
	  replace: true,
	  data: function data() {
	    return {
	      fade: this.$parent.fade
	    };
	  },
	  props: {
	    id: {
	      type: String,
	      'default': ''
	    },
	    title: {
	      type: String,
	      'default': ''
	    },
	    active: {
	      type: Boolean,
	      'default': false
	    },
	    disabled: {
	      type: Boolean,
	      'default': false
	    },
	    animate: {
	      type: Boolean,
	      'default': false
	    }
	  },
	  ready: function ready() {
	    var items = this.$parent.$get('items');
	    items.push({ id: this.id, title: this.title, active: this.active, disabled: this.disabled });
	  }
	};
	exports.tab = tab;

/***/ },
/* 261 */
/***/ function(module, exports) {

	module.exports = "<div class=\"tabs\">\n  <ul class=\"nav nav-tabs\">\n    <li class=\"nav-item\" v-for=\"item in items\" v-on:click=\"setActive($index)\">\n      <span class=\"nav-link btn {{btnSize}} {{item.active ? 'active' : ''}} {{ item.disabled ? 'disabled' : '' }}\">{{item.title}}</span>\n    </li>\n  </ul>\n  <div class=\"tab-content\">\n    <slot></slot>\n  </div>\n</div>";

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _tooltipJson = __webpack_require__(263);
	
	var _tooltipJson2 = _interopRequireDefault(_tooltipJson);
	
	var _tooltipHtml = __webpack_require__(264);
	
	var _tooltipHtml2 = _interopRequireDefault(_tooltipHtml);
	
	var _snippetHtml = __webpack_require__(265);
	
	var _snippetHtml2 = _interopRequireDefault(_snippetHtml);
	
	var _srcComponentsTooltip = __webpack_require__(266);
	
	var _srcComponentsTooltip2 = _interopRequireDefault(_srcComponentsTooltip);
	
	var _vuestrapDocsSrcComponentsDemo = __webpack_require__(15);
	
	var _vuestrapDocsSrcComponentsDemo2 = _interopRequireDefault(_vuestrapDocsSrcComponentsDemo);
	
	exports['default'] = {
	  template: _tooltipHtml2['default'],
	  data: function data() {
	    return {
	      meta: _tooltipJson2['default'],
	      snippet: _snippetHtml2['default']
	    };
	  },
	  components: {
	    'tooltip': _srcComponentsTooltip2['default'],
	    'docs-demo': _vuestrapDocsSrcComponentsDemo2['default']
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 263 */
/***/ function(module, exports) {

	module.exports = {
		"name": "tooltip",
		"title": "Tooltip",
		"description": "Add small overlay content to any element for housing secondary information. Tooltips rely on on the 3rd party library <a href='http://github.hubspot.com/tether/'>tether</a> for positioning.",
		"dependenices": [
			"vuestrap-tether",
			"vuestrap/buttons"
		],
		"category": "components",
		"browserSupport": {
			"browsers": [
				"IE9+",
				"Android 4.3"
			]
		},
		"options": [
			{
				"name": "position",
				"type": "String",
				"values": [
					"top",
					"bottom",
					"left",
					"right"
				],
				"default": "top",
				"required": false,
				"description": "Position of the popover."
			},
			{
				"name": "text",
				"type": "String",
				"default": "''",
				"required": false,
				"description": "Title or a small text."
			},
			{
				"name": "triggers",
				"type": "Array",
				"values": [
					"click",
					"focus",
					"hover"
				],
				"default": "['click']",
				"description": "Opens popover based on specified triggers. If you consider supporting mobile devices than you might need to specify both click and hover trigger (on desktops click will take priority)."
			}
		]
	};

/***/ },
/* 264 */
/***/ function(module, exports) {

	module.exports = "<docs-demo :meta=\"meta\" :snippet=\"snippet\">\r\n\t<div slot=\"markup\">\r\n\t\t\t\t<tooltip text=\"tooltip top\" position=\"top\">\r\n\t\t\t\t\t<button class=\"btn\">tooltip top</button>\r\n\t\t\t\t</tooltip>\r\n\t\t\t\t<tooltip text=\"tooltip bottom\" position=\"bottom\">\r\n\t\t\t\t\t<button class=\"btn\">tooltip bottom</button>\r\n\t\t\t\t</tooltip>\r\n\t\t\t\t<tooltip text=\"tooltip left\" position=\"left\">\r\n\t\t\t\t\t<button class=\"btn\">tooltip left</button>\r\n\t\t\t\t</tooltip>\r\n\t\t\t\t<tooltip text=\"tooltip right\" position=\"right\">\r\n\t\t\t\t\t<button class=\"btn\">tooltip right</button>\r\n\t\t\t\t</tooltip>\r\n\t</div>\r\n</docs-demo>\t\r\n";

/***/ },
/* 265 */
/***/ function(module, exports) {

	module.exports = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">tooltip</span> \r\n  <span class=\"hljs-attribute\">text</span>=<span class=\"hljs-value\">\"tooltip top\"</span> \r\n  <span class=\"hljs-attribute\">position</span>=<span class=\"hljs-value\">\"top\"</span>\r\n  <span class=\"hljs-attribute\">:triggers</span>=<span class=\"hljs-value\">\"['click']\"</span>&gt;</span>\r\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">button</span> <span class=\"hljs-attribute\">class</span>=<span class=\"hljs-value\">\"btn\"</span>&gt;</span>tooltip top<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">button</span>&gt;</span>\r\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">tooltip</span>&gt;</span>\r\n";

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(267);
	
	// TODO import {Tether} from 'vuestrap-tether'
	
	var _tooltipHtml = __webpack_require__(270);
	
	var _tooltipHtml2 = _interopRequireDefault(_tooltipHtml);
	
	// export component object
	exports['default'] = {
	  template: _tooltipHtml2['default'],
	  replace: true,
	  data: function data() {
	    return {
	      show: false
	    };
	  },
	  computed: {
	    tooltipAlignment: function tooltipAlignment() {
	      return !this.position || this.position === 'default' ? 'tooltip-top' : 'tooltip-' + this.position;
	    }
	  },
	  props: {
	    position: {
	      type: String,
	      'default': 'top'
	    },
	    triggers: {
	      type: Array,
	      'default': function _default() {
	        return ['click', 'focus', 'hover'];
	      }
	    },
	    text: {
	      type: String,
	      'default': ''
	    }
	  },
	  methods: {
	
	    /**
	     * Toggle 'show' state
	     * @param  {Object} e
	     * @param  {Boolean} newState (if set use it's value)
	     */
	    toggle: function toggle(e, newState) {
	      var _this2 = this;
	
	      // change state
	      this.show = typeof newState !== 'undefined' ? newState : !this.show;
	
	      // Dispatch an event from the current vm that propagates all the way up to its $root
	      // element is shown
	      if (this.show) {
	        (function () {
	          var position = {
	            attachment: 'bottom center',
	            targetAttachment: 'top center'
	          };
	          if (_this2.position === 'bottom') {
	            position = {
	              attachment: 'top center',
	              targetAttachment: 'bottom center'
	            };
	          }
	          if (_this2.position === 'left') {
	            position = {
	              attachment: 'middle right',
	              targetAttachment: 'middle left'
	            };
	          }
	          if (_this2.position === 'right') {
	            position = {
	              attachment: 'middle left',
	              targetAttachment: 'middle right'
	            };
	          }
	
	          // let tether do the magic, after element is shown
	          Vue.nextTick(function () {
	            _this2._tether = new Tether({
	              element: _this2._tooltip,
	              target: _this2._trigger,
	              attachment: position.attachment,
	              targetAttachment: position.targetAttachment
	            });
	            _this2.$dispatch('shown::tooltip');
	          });
	
	          // element gets hidden
	        })();
	      } else {
	          // remove the tether reference from the element
	          if (this._tether) {
	            this._tether.destroy();
	          }
	          this.$dispatch('hidden::tooltip');
	        }
	    },
	
	    /**
	     * Handle multiple event triggers
	     * @param  {Object} e
	     */
	    _eventHandler: function _eventHandler(e) {
	      // stop propagation to avoid accidental closing on hide::popover event
	      e.stopPropagation();
	
	      // if both click and hover are set, on desktop devices click will take precedence
	      if ((e.type === 'mouseenter' || e.type === 'mouseleave') && this.triggers.indexOf('click') !== -1) {
	        return;
	      }
	
	      // TODO
	      // if both click and focus are set, focus will take precedence
	      // if (e.type === 'click' && this.triggers.indexOf('focus') !== -1) {
	      //   return
	      // }
	
	      // hide popover
	      if (e.type === 'click') {
	        this.toggle(e);
	      } else {
	        if (e.type === 'mouseenter' || e.type === 'focus') {
	          this.toggle(e, true);
	        } else {
	          this.toggle(e, false);
	        }
	      }
	    }
	  },
	  events: {
	    'hide::tooltip': function hideTooltip() {
	      this.toggle(null, false);
	    }
	  },
	  ready: function ready() {
	    // TODO
	    // animations
	    // configure tether
	    this._trigger = this.$els.trigger.children[0];
	    this._tooltip = this.$els.tooltip;
	    var _this = this;
	
	    // add listeners for specified triggers anb complementary click event
	    this._trigger.addEventListener('click', function (e) {
	      return _this._eventHandler(e);
	    });
	
	    if (this.triggers.indexOf('hover') !== -1) {
	      this._trigger.addEventListener('mouseenter', function (e) {
	        return _this._eventHandler(e);
	      });
	      this._trigger.addEventListener('mouseleave', function (e) {
	        return _this._eventHandler(e);
	      });
	    }
	    if (this.triggers.indexOf('focus') !== -1 && this._trigger.tagName.toLowerCase() === 'input') {
	      this._trigger.addEventListener('focus', function (e) {
	        return _this._eventHandler(e);
	      });
	      this._trigger.addEventListener('blur', function (e) {
	        return _this._eventHandler(e);
	      });
	    }
	  },
	
	  beforeDestroy: function beforeDestroy() {
	    // clean up listeners
	    this._trigger.removeEventListener('click', function () {
	      return _this._eventHandler();
	    });
	    this._trigger.removeEventListener('mouseenter', function () {
	      return _this._eventHandler();
	    });
	    this._trigger.removeEventListener('mouseleave', function () {
	      return _this._eventHandler();
	    });
	    this._trigger.removeEventListener('focus', function () {
	      return _this._eventHandler();
	    });
	    this._trigger.removeEventListener('blur', function () {
	      return _this._eventHandler();
	    });
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// import dependencies
	'use strict';
	
	__webpack_require__(268);
	
	__webpack_require__(25);

/***/ },
/* 268 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 269 */,
/* 270 */
/***/ function(module, exports) {

	module.exports = "<span v-el:trigger>\r\n\t<slot></slot>\r\n</span> \r\n<div class=\"tooltip fade in {{tooltipAlignment}}\" v-show=\"show\" v-el:tooltip>\r\n\t<div class=\"tooltip-inner\">\r\n\t\t<div class=\"tooltip-arrow\"></div>\r\n\t  <div class=\"tooltip-content\">\r\n\t    <span v-html=\"text\"></span>\r\n\t  </div>\r\n\t</div>\r\n</div>";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vuestrap-base.js.map