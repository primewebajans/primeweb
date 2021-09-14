exports.ids = [44,20,24,25,27,28,29,30];
exports.modules = {

/***/ 22:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=39617f8d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header header-area"},[_vm._ssrNode("<div class=\"header-top\"><div class=\"container\"><div class=\"row align-items-center\"><div class=\"col col-lg-4 d-none d-lg-block\"><ul class=\"header-social-links d-flex flex-wrap align-items-center\"><li class=\"social-link-item\"><a href=\"https://instagram.com/primewebajans\" target=\"_blank\" class=\"social-link\"><i class=\"icofont-instagram mr-2\"></i> Takip Et</a></li></ul></div> <div class=\"col-12 col-md-6 col-lg-4 d-none d-md-block\"><p class=\"d-flex flex-wrap align-items-center text-gradient\"><span class=\"hr-border d-none d-xl-block\"></span>Daha iyi bir web site sahibi olun.</p></div> <div class=\"col-12 col-md-6 col-lg-4\"><ul class=\"select-box d-flex flex-wrap align-items-center justify-content-center justify-content-md-end\"><li class=\"select-item cd-h\"><a href=\"javascript:void(0)\" onclick=\"jivo_api.open()\">\n                                Canlı Destek Alın <i class=\"icofont-arrow-right\"></i></a></li></ul></div></div></div></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("header-bottom",{'is-sticky': _vm.isSticky}))+">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row align-items-center flex-nowrap\">","</div>",[_vm._ssrNode("<div class=\"col\">","</div>",[_c('n-link',{staticClass:"brand-logo",attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/images/logo/logo.svg","alt":"Prime Web Ajans Logo"}}),_vm._v(" "),_c('h1',[_vm._v("Prime"),_c('br'),_vm._v("Web Ajans")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-auto\">","</div>",[_vm._ssrNode("<div class=\"main-menu-wrapper\">","</div>",[_vm._ssrNode("<nav class=\"d-none d-lg-block\">","</nav>",[_c('Navigation')],1),_vm._ssrNode(" "),_c('n-link',{staticClass:"btn btn-warning btn-hover-warning btn-lg d-none d-md-block",attrs:{"to":"/iletisim"}},[_vm._v("\n                            Bize Ulaşın "),_c('i',{staticClass:"icofont-arrow-right"})]),_vm._ssrNode(" <button class=\"btn btn-warning offcanvas-toggler d-lg-none\"><span class=\"line\"></span> <span class=\"line\"></span> <span class=\"line\"></span></button>")],2)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=39617f8d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  components: {
    Navigation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 27))
  },

  data() {
    return {
      isSticky: false
    };
  },

  mounted() {
    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY;

      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },

  methods: {
    // offcanvas mobile-menu
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0a45479e"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(27).default,Header: __webpack_require__(23).default})


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=0485d926&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer-section position-relative"},[_vm._ssrNode("<img src=\"/images/footer/shape.png\" alt=\"images_notFound\" class=\"footer-bg-shape\"> <img src=\"/images/footer/path-shape.png\" alt=\"images_notFound\" class=\"path-shape\"> "),_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 126.82 303.68\" class=\"path-svg\">","</svg>",[_vm._ssrNode("<defs>","</defs>",[_c('radialGradient',{attrs:{"id":"radial-gradient","cx":"78.77","cy":"6322.87","r":"43.8","gradientTransform":"translate(0 -3383.39) scale(1 0.58)","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0.16","stop-color":"#2647c8"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.17","stop-color":"#294ac9"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.29","stop-color":"#6179d7"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.42","stop-color":"#92a2e3"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.54","stop-color":"#b9c4ed"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.66","stop-color":"#d8def5"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.78","stop-color":"#edf0fb"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.9","stop-color":"#fbfbfe"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"1","stop-color":"#fff"}})],1),_vm._ssrNode(" "),_c('linearGradient',{attrs:{"id":"linear-gradient","x1":"45.02","y1":"258.73","x2":"112.52","y2":"258.73","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#fff"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.27","stop-color":"#f4f7fd"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.74","stop-color":"#d8e0f8"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"1","stop-color":"#c5d2f4"}})],1),_vm._ssrNode(" "),_c('linearGradient',{attrs:{"id":"linear-gradient-2","x1":"43.77","y1":"240.52","x2":"113.76","y2":"240.52","gradientUnits":"userSpaceOnUse"}},[_c('stop',{attrs:{"offset":"0","stop-color":"#c5d2f4"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.26","stop-color":"#d8e0f8"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"0.73","stop-color":"#f4f7fd"}}),_vm._v(" "),_c('stop',{attrs:{"offset":"1","stop-color":"#fff"}})],1)],2),_vm._ssrNode(" <g class=\"cls-1\"><path d=\"M111.1,297c17.86-10.25,17.86-27,0-37.28s-47-10.25-64.74,0-17.75,27,0,37.28S93.25,307.24,111.1,297Z\" transform=\"translate(0 -1)\" class=\"cls-2\"></path> <path d=\"M102.64,283.06c13.18-7.57,13.18-42.77,0-50.33s-34.69-7.57-47.79,0-13.11,42.76,0,50.33c6.47,3.74,15,7.3,23.57,7.35C87.18,290.45,96,286.89,102.64,283.06Z\" transform=\"translate(0 -1)\" class=\"cls-3\"></path> <path d=\"M113.76,240.86c0-.23,0-.45,0-.68v-5.26h-1.35c-1.59-3.18-4.54-6.18-8.88-8.67-13.67-7.85-36-7.85-49.58,0-4.32,2.49-7.25,5.49-8.83,8.67H43.89v3.9a12.1,12.1,0,0,0,0,3.4v.09h0c.7,4.56,4,9,10.05,12.48,13.6,7.85,35.91,7.85,49.58,0,6-3.47,9.41-7.92,10.11-12.48h.12Z\" transform=\"translate(0 -1)\" class=\"cls-4\"></path> <path d=\"M103.53,249.77c13.68-7.85,13.68-20.69,0-28.54s-36-7.85-49.58,0-13.6,20.69,0,28.54S89.86,257.63,103.53,249.77Z\" transform=\"translate(0 -1)\" class=\"cls-5\"></path> <path d=\"M101.52,248.61c12.56-7.21,12.56-19,0-26.22s-33.06-7.21-45.55,0-12.49,19,0,26.22S89,255.83,101.52,248.61Z\" transform=\"translate(0 -1)\" class=\"cls-6\"></path> <path d=\"M97.39,249.6c10.28-5.91,10.28-15.57,0-21.47s-27.06-5.9-37.28,0-10.23,15.56,0,21.47S87.11,255.5,97.39,249.6Z\" transform=\"translate(0 -1)\" class=\"cls-7\"></path> <path d=\"M80.79,242.55c.16-14.78.32-17.18.48-32,.07-7,.28-11.46-.21-18.41a95.41,95.41,0,0,0-3.73-19.67c-3.91-13.64-7.15-27.08-8.31-41.27a266.63,266.63,0,0,1,.2-41.63C70.4,73.74,72.55,58,74.74,42.19c.22-1.56-2.16-2.23-2.38-.66-3.85,27.69-7.7,55.65-6.22,83.68a180.79,180.79,0,0,0,6.69,40.73c1.91,6.63,4,13.22,5.09,20.05,1.07,7,1,11.67.94,18.75-.17,16.73-.36,21.08-.54,37.81a1.24,1.24,0,0,0,2.47,0Z\" transform=\"translate(0 -1)\" class=\"cls-8\"></path> <path d=\"M68.94,135.59c-5.26-5.31-10.58-10.8-14.13-17.44a28.67,28.67,0,0,1-3.46-11c-.39-4.37.39-8.74.88-13.07A37.33,37.33,0,0,0,47.76,71.3c-4.17-7.87-9.13-15.38-13.95-22.86-.86-1.33-3-.1-2.14,1.25,4.9,7.59,10,15.23,14.16,23.25A35.23,35.23,0,0,1,50,85.53c.43,4.37-.33,8.74-.84,13.07-.89,7.68,0,14.67,3.84,21.47,3.65,6.52,8.93,12,14.15,17.27,1.12,1.14,2.87-.61,1.75-1.75Z\" transform=\"translate(0 -1)\" class=\"cls-8\"></path> <path d=\"M72.51,153.29C74,142.2,86.55,136.48,93.38,129a52.06,52.06,0,0,0,13.21-31.12c.11-1.59-2.36-1.58-2.48,0a49.23,49.23,0,0,1-15.79,32.68c-7.2,6.58-16.9,12.23-18.28,22.78-.21,1.58,2.27,1.56,2.47,0Z\" transform=\"translate(0 -1)\" class=\"cls-8\"></path> <path d=\"M40.5,34.88c-1.13-7-7.14-12.12-12.74-16.53C19.15,11.57,10.33,4.67,0,1A77.52,77.52,0,0,1,8.61,22.43c1.24,5.25,2.11,11,5.84,14.88,5.2,5.42,15,6.31,17.55,13.39l5.43,7.74C36.41,50.53,41.76,42.76,40.5,34.88Z\" transform=\"translate(0 -1)\" class=\"cls-8\"></path> <path d=\"M85.33,14.47c-4,9.36-17.15,12.58-20.31,22.27-3.26,10,6.11,20.72,3.46,30.91L71,68.94c7.28-6.46,11.55-15.8,13.43-25.35S86,24.19,85.33,14.47Z\" transform=\"translate(0 -1)\" class=\"cls-8\"></path> <path d=\"M126.82,52.12C118.59,57.29,112.24,64.9,106,72.38c-1.71,2.05-3.46,4.18-4.19,6.75a19.37,19.37,0,0,0-.38,6.27l1.11,23.2.69,3c3.68-5.89,13.56-6.08,16.07-12.56.91-2.33.56-4.93.33-7.42A75.29,75.29,0,0,1,126.82,52.12Z\" transform=\"translate(0 -1)\" class=\"cls-8\"></path></g>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"footer-top position-relative\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"600\" class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"footer-card\">","</div>",[_vm._ssrNode("<div class=\"footer-row\">","</div>",[_vm._ssrNode("<div class=\"footer-col\">","</div>",[_vm._ssrNode("<div class=\"footer-widget\">","</div>",[_c('n-link',{staticClass:"footer-logo",attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/images/logo/logo-white.svg","alt":"Prime Web Ajans Logo"}}),_vm._v(" "),_c('h1',[_vm._v("Prime Web Ajans")])]),_vm._ssrNode(" <ul class=\"address\"><li><span class=\"icon\"><i class=\"icofont-send-mail\"></i></span> <a href=\"mailto:info@primewebajans.com\">info@primewebajans.com</a></li> <li><span class=\"icon\"><i class=\"icofont-chat\"></i></span> <a href=\"javascript:void(0)\" onclick=\"jivo_api.open()\" class=\"btn btn-outline-warning fbtn\">\n                                                Canlı Destek Alın <i class=\"icofont-arrow-right\"></i></a></li></ul>")],2)]),_vm._ssrNode(" <div class=\"footer-col\"><div class=\"footer-widget\"><h4 class=\"title\">Hizmetler</h4> <ul class=\"footer-menu\"><li><a href=\"/ne-yapiyoruz#kurumsal-kimlik\" class=\"footer-link\"><i class=\"icofont-rounded-double-right\"></i>\n                                                Kurumsal Kimlik\n                                            </a></li> <li><a href=\"/ne-yapiyoruz#web-site\" class=\"footer-link\"><i class=\"icofont-rounded-double-right\"></i>\n                                                Web Site\n                                            </a></li> <li><a href=\"/ne-yapiyoruz#e-ticaret\" class=\"footer-link\"><i class=\"icofont-rounded-double-right\"></i>\n                                                E-Ticaret\n                                            </a></li> <li><a href=\"/ne-yapiyoruz#hosting-sunucu\" class=\"footer-link\"><i class=\"icofont-rounded-double-right\"></i>\n                                                Hosting &amp; Sunucu\n                                            </a></li> <li><a href=\"/ne-yapiyoruz#seo-calismasi\" class=\"footer-link\"><i class=\"icofont-rounded-double-right\"></i>\n                                                Seo Çalışması\n                                            </a></li></ul></div></div> <div class=\"footer-col\"><div class=\"footer-widget\"><h4 class=\"title\">Bilgiler</h4> <ul class=\"footer-menu\"><li><a href=\"/biz-kimiz#prime-web-ajans\" class=\"footer-link\"><i class=\"icofont-rounded-double-right\"></i>\n                                                Hakkımızda\n                                            </a></li> <li><a href=\"/biz-kimiz#neden-biz\" class=\"footer-link\"><i class=\"icofont-rounded-double-right\"></i>\n                                                Neden Biz ?\n                                            </a></li></ul></div></div> <div class=\"footer-col\"><div class=\"footer-widget\"><h4 class=\"title\">Takip Edin</h4> <p>Sosyal medya üzerinde <span class=\"text-gradient\">Prime Web Ajans</span>' ı takip edin.</p> <ul class=\"footer-social\"><li class=\"footer-social-item\"><a href=\"https://instagram.com/primewebajans\" target=\"_blank\" class=\"footer-social-link\"><i class=\"icofont-instagram mr-2\"></i>\n                                                Takip Et\n                                            </a></li></ul></div></div>")],2)])])])])]),_vm._ssrNode(" <div class=\"copy-right-section\"><div class=\"container\"><div class=\"row\"><div class=\"col-12\"><p><span class=\"text-gradient\">Prime Web Ajans</span>"+_vm._ssrEscape(" © "+_vm._s(_vm.currentDate.getFullYear())+" ")+"<span class=\"white\">|</span> Tüm Hakları Saklıdır\n                    </p></div></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=0485d926&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  data() {
    return {
      currentDate: new Date()
    };
  }

});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2dda38a8"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(24).default})


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=template&id=2e5b08e9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mobile-navigation"},[_vm._ssrNode("<nav id=\"offcanvas-navigation\" class=\"offcanvas-navigation\">","</nav>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("About")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/service-details"}},[_vm._v("Service")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/case-details"}},[_vm._v("Case Details")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"has-children\">","</li>",[_c('n-link',{attrs:{"to":"/blog-left-sidebar"}},[_vm._v("Blog Left Sidebar")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-left-sidebar"}},[_vm._v("Blog Left Sidebar")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-right-sidebar"}},[_vm._v("Blog Right Sidebar")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v("Blog Details")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact"}},[_vm._v("Contact")])],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=template&id=2e5b08e9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MobileNavigationvue_type_script_lang_js_ = ({
  mounted() {
    const offCanvasNav = document.querySelector('#offcanvas-navigation');
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
    const anchorLinks = offCanvasNav.querySelectorAll('a');

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
    }

    const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    const sideMenuExpand = e => {
      e.currentTarget.parentElement.classList.toggle('active');
    };

    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
      offcanvasMobileMenu.classList.remove('active');
    };
  }

});
// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MobileNavigationvue_type_script_lang_js_ = (MobileNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MobileNavigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MobileNavigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "dbec6cb2"
  
)

/* harmony default export */ var MobileNavigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=2bab0fc8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"main-menu"},[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Ana Sayfa")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/biz-kimiz"}},[_vm._v("Biz Kimiz")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/ne-yapiyoruz"}},[_vm._v("Ne Yapıyoruz")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/ne-yaptik"}},[_vm._v("Ne Yaptık")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"has-children\">","</li>",[_c('n-link',{attrs:{"to":"/blog"}},[_vm._v("Blog")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=2bab0fc8&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navigation.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2a6e2f25"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=template&id=ff2a9884&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"offcanvas-mobile-menu",attrs:{"id":"offcanvas-menu"}},[_vm._ssrNode("<div class=\"mobile-menu-overlay\"></div> "),_vm._ssrNode("<div class=\"inner\">","</div>",[_vm._ssrNode("<div class=\"mobile-header\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/images/logo/logo-white.png","alt":"brand logo"}})])],1),_vm._ssrNode(" <button class=\"mobile-close-btn\"></button>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"menu-content\">","</div>",[_c('MobileNavigation')],1),_vm._ssrNode(" <div class=\"offcanvas-social\"><ul><li><a href=\"#\"><i class=\"icofont-facebook\"></i></a></li> <li><a href=\"#\"><i class=\"icofont-twitter\"></i></a></li> <li><a href=\"#\"><i class=\"icofont-skype\"></i></a></li> <li><a href=\"#\"><i class=\"icofont-linkedin\"></i></a></li></ul></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=template&id=ff2a9884&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var OffCanvasMobileMenuvue_type_script_lang_js_ = ({
  components: {
    MobileNavigation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 26))
  },
  methods: {
    // offcanvas menu close
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OffCanvasMobileMenuvue_type_script_lang_js_ = (OffCanvasMobileMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OffCanvasMobileMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4a6c6a67"
  
)

/* harmony default export */ var OffCanvasMobileMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MobileNavigation: __webpack_require__(26).default})


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ScrollTop.vue?vue&type=template&id=3fcd9eff&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('back-to-top',{staticClass:"scroll-top",attrs:{"bottom":"50px","right":"10px"}},[_c('i',{staticClass:"icofont-arrow-up"})])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ScrollTop.vue?vue&type=template&id=3fcd9eff&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ScrollTop.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "33341247"
  
)

/* harmony default export */ var ScrollTop = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=template&id=08c9b07b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"bread-crumb-section bg-cover"},[_vm._ssrNode("<img src=\"/images/bread/1.png\" alt=\"images_not_found\" class=\"shape shape1\"> <img src=\"/images/bread/2.png\" alt=\"images_not_found\" class=\"shape shape2\"> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<h2 class=\"title text-center\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h2> "),_vm._ssrNode("<nav aria-label=\"breadcrumb\">","</nav>",[_vm._ssrNode("<ul class=\"breadcrumb justify-content-center\">","</ul>",[_vm._ssrNode("<li class=\"breadcrumb-item\">","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Ana Sayfa")])],1),_vm._ssrNode(" <li aria-current=\"page\" class=\"breadcrumb-item active\"><span>"+_vm._ssrEscape(_vm._s(_vm.activeTitle))+"</span></li>")],2)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=template&id=08c9b07b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Breadcrumbvue_type_script_lang_js_ = ({
  props: ["title", "activeTitle"]
});
// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Breadcrumbvue_type_script_lang_js_ = (Breadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Breadcrumb.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "336cc594"
  
)

/* harmony default export */ var Breadcrumb = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ne-yaptik.vue?vue&type=template&id=0d7b98c3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-container"},[_c('Header'),_vm._ssrNode(" "),_c('OffCanvasMobileMenu'),_vm._ssrNode(" "),_c('Breadcrumb',{attrs:{"title":"Ne Yaptık ?","active-title":"Ne Yaptık"}}),_vm._ssrNode(" <div class=\"container-fluid mw-1500\"><div class=\"row mt-35 mb-35\">"+((_vm.$fetchState.pending)?("<p>Referans Listesi Yükleniyor...</p>"):(_vm.$fetchState.error)?("<p>Bir Hata Oluştu :(</p>"):((_vm._ssrList((_vm.references),function(reference){return ("<div"+(_vm._ssrClass(null,("col-12 col-md-6 mt-35 ref " + (reference.t))))+"><figure class=\"snip1477\"><img"+(_vm._ssrAttr("src",("" + (reference.image))))+" alt> <div class=\"title\"><div><h2>"+_vm._ssrEscape(_vm._s(reference.title1))+"</h2> <h4>"+_vm._ssrEscape(_vm._s(reference.title2))+"</h4></div></div> <figcaption><p>"+_vm._ssrEscape(_vm._s(reference.category))+"</p></figcaption> <a href=\"#\"></a></figure></div>")}))))+"</div></div> "),_c('Footer'),_vm._ssrNode(" "),_c('ScrollTop')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/ne-yaptik.vue?vue&type=template&id=0d7b98c3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ne-yaptik.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ne_yaptikvue_type_script_lang_js_ = ({
  components: {
    Header: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 23)),
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 28)),
    Breadcrumb: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 30)),
    CaseDetailsCarousel: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, 58)),
    CaseDetailsContent: () => __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, 59)),
    CaseDetailsNavigation: () => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 68)),
    CommentFormWrapper: () => __webpack_require__.e(/* import() */ 9).then(__webpack_require__.bind(null, 61)),
    Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 24)),
    ScrollTop: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 29))
  },

  head() {
    return {
      title: 'Ne Yaptık'
    };
  },

  data() {
    return {
      references: []
    };
  },

  async fetch() {
    this.references = await fetch('http://primewebajans.com/data/references.json').then(res => res.json());
  }

});
// CONCATENATED MODULE: ./pages/ne-yaptik.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_ne_yaptikvue_type_script_lang_js_ = (ne_yaptikvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/ne-yaptik.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_ne_yaptikvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "82cdbcd2"
  
)

/* harmony default export */ var ne_yaptik = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(23).default,OffCanvasMobileMenu: __webpack_require__(28).default,Breadcrumb: __webpack_require__(30).default,Footer: __webpack_require__(24).default,ScrollTop: __webpack_require__(29).default})


/***/ })

};;
//# sourceMappingURL=ne-yaptik.js.map