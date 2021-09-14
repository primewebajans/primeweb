exports.ids = [21];
exports.modules = {

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CaseStudies.vue?vue&type=template&id=696bcffe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"case-studies-section"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\"><div data-aos=\"fade-up\" data-aos-delay=\"100\" class=\"col-12\"><div class=\"section-title primary text-center pb-100\"><div class=\"icon\"><img src=\"/images/icon/webpack.png\" alt=\"Icon_not_found\"></div> <h3 class=\"title\">Referanslara Göz Atın</h3> <span class=\"hr-secondary\"></span></div></div></div> "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"900\" class=\"case-carousel\">","</div>",[_c('swiper',{attrs:{"options":_vm.caseCarousel}},_vm._l((_vm.caseStudies),function(caseStudy,index){return _c('div',{key:index,staticClass:"swiper-slide"},[_c('div',{staticClass:"case-card"},[_c('div',{staticClass:"thumb"},[_c('n-link',{attrs:{"to":"/case-details"}},[_c('img',{staticClass:"case-shap case-shape1",attrs:{"src":"/images/case/shape1.png","alt":"shape image"}}),_vm._v(" "),_c('img',{staticClass:"case-shape case-shape2",attrs:{"src":"/images/case/shape2.png","alt":"shape image"}}),_vm._v(" "),_c('img',{staticClass:"case-image",attrs:{"src":caseStudy.imgSrc,"alt":caseStudy.title}})])],1),_vm._v(" "),_c('div',{staticClass:"case-content"},[_c('h3',{staticClass:"title"},[_c('n-link',{attrs:{"to":"/case-details"}},[_vm._v(_vm._s(caseStudy.title))])],1),_vm._v(" "),_c('p',[_vm._v(_vm._s(caseStudy.category))])])])])}),0),_vm._ssrNode(" <div class=\"case-carousel-navigation\"><div class=\"case-carousel swiper-button-prev\"><i class=\"icofont-rounded-double-left\"></i></div> <div class=\"case-carousel swiper-button-next\"><i class=\"icofont-rounded-double-right\"></i></div></div>")],2)])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CaseStudies.vue?vue&type=template&id=696bcffe&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CaseStudies.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CaseStudiesvue_type_script_lang_js_ = ({
  data() {
    return {
      caseCarousel: {
        loop: true,
        speed: 800,
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
          nextEl: ".case-carousel .swiper-button-next",
          prevEl: ".case-carousel .swiper-button-prev"
        },
        // Responsive breakpoints
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          992: {
            slidesPerView: 3
          }
        }
      },
      caseStudies: [{
        imgSrc: "/images/case/1.png",
        title: "Pakset Plastik",
        category: "Web Site"
      }, {
        imgSrc: "/images/case/2.png",
        title: "Gürel Lojistik",
        category: "Kurumsal Kimlik"
      }, {
        imgSrc: "/images/case/3.png",
        title: "Alkan Otel",
        category: "Web Site"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/CaseStudies.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CaseStudiesvue_type_script_lang_js_ = (CaseStudiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CaseStudies.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CaseStudiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1ff91896"
  
)

/* harmony default export */ var CaseStudies = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=case-studies.js.map