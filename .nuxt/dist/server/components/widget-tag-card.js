exports.ids = [3];
exports.modules = {

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetTagCard.vue?vue&type=template&id=4bd4000e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar-widget tag-card"},[_vm._ssrNode("<h3 class=\"title\">Etiketler</h3> <ul><li>"+_vm._ssrEscape(" "+_vm._s(_vm.tags)+" ")+"</li> "+(_vm._ssrList((_vm.tags),function(tag){return ("<li class=\"tag-item\"><a href=\"#\" class=\"tag-link\">"+_vm._ssrEscape(_vm._s(tag))+"</a></li>")}))+"</ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/WidgetTagCard.vue?vue&type=template&id=4bd4000e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetTagCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var WidgetTagCardvue_type_script_lang_js_ = ({
  props: ["link"],
  components: {
    WidgetProfileCard: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 67)),
    WidgetSearchCard: () => __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(null, 33)),
    WidgetPostCategoryCard: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 66)),
    AboutBanner: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 31)),
    WidgetTagCard: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 34))
  },

  async asyncData({
    params,
    redirect
  }) {
    const slug = link;
    const blogs = await fetch('http://primewebajans.com/blog.json').then(res => res.json());
    const single = blogs.find(el => el.slug === "web-sitesi-temel-kavramlari");

    if (single) {
      return {
        tags: single.tag[0]
      };
    } else {
      redirect('/');
    }

    return {
      slug
    };
  }

});
// CONCATENATED MODULE: ./components/WidgetTagCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WidgetTagCardvue_type_script_lang_js_ = (WidgetTagCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/WidgetTagCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WidgetTagCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5cf3ef65"
  
)

/* harmony default export */ var WidgetTagCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=widget-tag-card.js.map