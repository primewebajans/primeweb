exports.ids = [18,4];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AboutBanner.vue?vue&type=template&id=697573b8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about-banner"},[_c('n-link',{staticClass:"logo brand-logo",attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/images/logo/logo-white.svg","alt":"logo_not_found"}})]),_vm._ssrNode(" <h4 class=\"title\">Diğerlerinden Farklıyız.</h4> <p>E-Mail: <a href=\"mailto:info@primewebajans.com\">info@primewebajans.com</a></p> "),_c('n-link',{staticClass:"btn btn-warning",attrs:{"to":"/iletisim"}},[_vm._v("\n        Bize Ulaşın "),_c('i',{staticClass:"icofont-rounded-double-right"})])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/AboutBanner.vue?vue&type=template&id=697573b8&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AboutBanner.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0c3561d8"
  
)

/* harmony default export */ var AboutBanner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogWrapper.vue?vue&type=template&id=3b49fe2f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"section-pt-150 section-pb-150"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row mtn-35\">","</div>",[_vm._ssrNode("<div class=\"col-lg-8 mt-35\">","</div>",[_vm._ssrNode("<div class=\"row mtn-35\">","</div>",_vm._l((_vm.blogs),function(blog){return _vm._ssrNode("<div class=\"col-12 col-md-6 mt-35\">","</div>",[_vm._ssrNode(_vm._ssrEscape("\n                        "+_vm._s(_vm.blogs)+"\n                        ")),_vm._ssrNode("<div class=\"blog-grid-card\">","</div>",[_c('n-link',{staticClass:"blog-grid-thumb",attrs:{"to":((blog.folder) + "/" + (blog.link))}},[_c('img',{attrs:{"src":blog.imgSrc,"alt":blog.title}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"blog-grid-content\">","</div>",[_vm._ssrNode("<ul><li class=\"date\"><i class=\"icofont-ui-calendar\"></i>"+_vm._ssrEscape("\n                                        "+_vm._s(blog.date)+"\n                                    ")+"</li> <li></li></ul> "),_vm._ssrNode("<h5 class=\"title mb-3\">","</h5>",[_c('n-link',{attrs:{"to":((blog.folder) + "/" + (blog.link))}},[_vm._v(_vm._s(blog.title))])],1),_vm._ssrNode(" <p class=\"mb-4\">"+_vm._ssrEscape("\n                                    "+_vm._s(blog.excerpt)+"\n                                ")+"</p> "),_c('n-link',{staticClass:"btn btn-warning",attrs:{"to":((blog.folder) + "/" + (blog.link))}},[_vm._v("Devamını Oku")])],2)],2)],2)}),0)]),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("col-lg-4 mt-35",_vm.orderClass))+">","</div>",[_vm._ssrNode("<aside class=\"sidebar\">","</aside>",[_c('AboutBanner'),_vm._ssrNode(" <div class=\"sidebar-widget tag-card\"><h3 class=\"title\">Etiketler</h3> <ul>"+(_vm._ssrList((_vm.tags),function(tag){return ("<li class=\"tag-item\"><a href=\"#\" class=\"tag-link\">"+_vm._ssrEscape(_vm._s(tag))+"</a></li>")}))+"</ul></div>")],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogWrapper.vue?vue&type=template&id=3b49fe2f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogWrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogWrappervue_type_script_lang_js_ = ({
  props: ["orderClass"],
  components: {
    WidgetProfileCard: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 67)),
    WidgetSearchCard: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 33)),
    WidgetPostCategoryCard: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 66)),
    AboutBanner: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 31)),
    WidgetTagCard: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 34))
  },

  data() {
    return {
      tags: ["Web Site", "Alan Adı", "Domain", "Hosting", "DNS", "Prime Web"]
    };
  },

  async asyncData() {
    const blogs = await fetch('http://primewebajans.com/blog.json').then(res => res.json());
    return {
      blogs
    };
  }

});
// CONCATENATED MODULE: ./components/BlogWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogWrappervue_type_script_lang_js_ = (BlogWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "13213160"
  
)

/* harmony default export */ var BlogWrapper = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AboutBanner: __webpack_require__(31).default})


/***/ })

};;
//# sourceMappingURL=blog-wrapper.js.map