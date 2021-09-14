exports.ids = [16,2,3,4];
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetSearchCard.vue?vue&type=template&id=7a65cdf8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar-widget search-card"},[_vm._ssrNode("<li class=\"social-share-item\"><i class=\"icofont-calendar\"></i> <span>"+_vm._ssrEscape(_vm._s(_vm.date))+"</span></li>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/WidgetSearchCard.vue?vue&type=template&id=7a65cdf8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/WidgetSearchCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var WidgetSearchCardvue_type_script_lang_js_ = ({
  props: ["date"]
});
// CONCATENATED MODULE: ./components/WidgetSearchCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WidgetSearchCardvue_type_script_lang_js_ = (WidgetSearchCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/WidgetSearchCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_WidgetSearchCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "42e4448d"
  
)

/* harmony default export */ var WidgetSearchCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogDetailsWrapper.vue?vue&type=template&id=9325dd28&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"blog-details-section section-pt-150 section-pb-150"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\"><div class=\"blog-details-thumb\"><img src=\"/images/blog-details/1.jpg\" alt=\"images_not_found\" class=\"w-100 bdi\"></div></div> "),_vm._ssrNode("<div class=\"col-lg-4\">","</div>",[_vm._ssrNode("<aside class=\"sidebar\">","</aside>",[_c('WidgetSearchCard',{attrs:{"date":"24 Temmuz 2021"}}),_vm._ssrNode(" "),_c('AboutBanner'),_vm._ssrNode(" "),_c('WidgetTagCard')],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-8 ps-xl-7\">","</div>",[_vm._ssrNode("<div class=\"service-details\"><div class=\"service-details-list\"><h3 class=\"title\">Web Sitesi Temel Kavramları Nelerdir ?</h3> <p class=\"mb-2\">Web sitesinin temel kavramları ; <b>Alan adı</b> (Domain), <b>Hosting</b> (Sunucu), <b>Dns kaydı</b> olmaktadır. </p> <p class=\"mb-2\">Alan adı, bir ada ve uzantıya sahiptır. Örneğin &quot;primewebajans&quot; adından ve &quot;com&quot; uzantısından oluşur. Günümüzde çok çeşitli uzantılar olmakla birlikte en yaygın olanı &quot;.com&quot; olmaktadır.</p> <p class=\"mb-2\">Alan adı kısmında dikkat etmemiz gereken önemli noktalardan birisi de ingilizce karakterlerden oluşmasıdır. Satın alırken türkçe karakter ve boşluk kullanmamanızı öneriyoruz.</p> <p class=\"mb-2\">Türkçe karakterli adlar satılsa da, aslında bunlar birer yönlendirmedir. Potansiyel sorunlar taşıdığı için Türkçe karakterli alan adlarını önermemekteyiz.</p></div></div> <div class=\"service-details\"><div class=\"service-details-list\"><h3 class=\"title\">Alan Adı Tek Başına Yeterli Mi ?</h3> <p class=\"mb-10\">Alan adı bir web sitesinin zorunlu bileşeni olsa da tek başına yeterli değildir. Alan adı sahipliğini bir çeşit marka kaydı olarak düşünmeniz gerekir. Bu da demek oluyorki bir alan adı aldığınızda, yalnızca o alan adının kullanma haklarını almış olursunuz. </p> <p class=\"mb-2\">Web sitesinin diğer bileşeni Hosting'tir. Hostingi, web sitesini oluşturan dosyaların yerleştirildiği özel hard diskler olarak düşünebilirsiniz. Web siteleri hosting üzerinde çalışır. E-postalarda hostinge bağlı olarak çalışırlar.</p></div></div> <div class=\"service-details\"><div class=\"service-details-list d-md-flex\"><img src=\"/images/blog/2.png\" alt=\"images_not_found\" class=\"align-self-center mr-md-5 mt-4 mt-lg-0 w-25 scd\"> <div class=\"content flex-one\"><h3 class=\"title mt-2\">Peki DNS Kaydı Nedir ?</h3> <p class=\"mb-2\">Son kavram ise Alan adı ile Hosting arasındaki bağı kuran Dns kaydı olmaktadır. Dns kaydı &quot;ns1.alanadi.com&quot; şeklindedir.</p> <p class=\"mb-4\"> Tarayıcıya alan adınız yazıldığında tıpkı bir köprü görevi görüp hostinge erişmenizi sağlarlar.</p></div></div></div> <div class=\"service-details\"><div class=\"service-details-list\"><p class=\"mb-2\">Web siteleri bu üç temel bileşenle var olmaktadır. </p></div></div> "),_vm._ssrNode("<div class=\"next-prev-section next-prev-section2 d-none\">","</div>",[_vm._ssrNode("<div class=\"row mb-n4 align-items-center\">","</div>",[_vm._ssrNode("<div class=\"col-md-4 mb-4 col-6 order-1 order-md-0\">","</div>",[_vm._ssrNode("<div class=\"service-prev service-media\">","</div>",[_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<h4 class=\"title\">Digital Marketing</h4> "),_c('n-link',{staticClass:"link",attrs:{"to":"/blog-details"}},[_vm._v("Previous "),_c('i',{staticClass:"icofont-rounded-double-right"})])],2)])]),_vm._ssrNode(" <div class=\"col-md-4 mb-4\"><div class=\"service-dots service-dots2 text-center\"><p><strong>Tags:</strong> marketing /\n                                    <span class=\"text-warning\">company</span> / seo\n                                </p></div></div> "),_vm._ssrNode("<div class=\"col-md-4 mb-4 col-6 order-2 order-md-0\">","</div>",[_vm._ssrNode("<div class=\"service-next service-media\">","</div>",[_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<h4 class=\"title\">Pay Per Click</h4> "),_c('n-link',{staticClass:"link",attrs:{"to":"/blog-details"}},[_vm._v("Next "),_c('i',{staticClass:"icofont-rounded-double-right"})])],2)])])],2)])],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogDetailsWrapper.vue?vue&type=template&id=9325dd28&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogDetailsWrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogDetailsWrappervue_type_script_lang_js_ = ({
  components: {
    CommentForm: () => __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, 46)),
    WidgetSearchCard: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33)),
    AboutBanner: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 31)),
    WidgetTagCard: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 34))
  }
});
// CONCATENATED MODULE: ./components/BlogDetailsWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogDetailsWrappervue_type_script_lang_js_ = (BlogDetailsWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogDetailsWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogDetailsWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8dd22e78"
  
)

/* harmony default export */ var BlogDetailsWrapper = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {WidgetSearchCard: __webpack_require__(33).default,AboutBanner: __webpack_require__(31).default,WidgetTagCard: __webpack_require__(34).default})


/***/ })

};;
//# sourceMappingURL=blog-details-wrapper.js.map