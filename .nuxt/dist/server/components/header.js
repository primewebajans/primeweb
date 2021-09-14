exports.ids = [25,28];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=header.js.map