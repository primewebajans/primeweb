(window.webpackJsonp=window.webpackJsonp||[]).push([[17,2,3,4],{241:function(t,e,n){"use strict";n.r(e);var r=n(47),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-banner"},[n("n-link",{staticClass:"logo brand-logo",attrs:{to:"/"}},[n("img",{attrs:{src:"/images/logo/logo-white.svg",alt:"logo_not_found"}})]),t._v(" "),n("h4",{staticClass:"title"},[t._v("Diğerlerinden Farklıyız.")]),t._v(" "),t._m(0),t._v(" "),n("n-link",{staticClass:"btn btn-warning",attrs:{to:"/iletisim"}},[t._v("\n        Bize Ulaşın "),n("i",{staticClass:"icofont-rounded-double-right"})])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("E-Mail: "),n("a",{attrs:{href:"mailto:info@primewebajans.com"}},[t._v("info@primewebajans.com")])])}],!1,null,null,null);e.default=component.exports},243:function(t,e,n){"use strict";n.r(e);var r={props:["date"]},l=n(47),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-widget search-card"},[n("li",{staticClass:"social-share-item"},[n("i",{staticClass:"icofont-calendar"}),t._v(" "),n("span",[t._v(t._s(t.date))])])])}),[],!1,null,null,null);e.default=component.exports},244:function(t,e,n){"use strict";n.r(e);var r=n(25),l=(n(62),n(19),n(40),n(48),n(95),{props:["link"],components:{WidgetProfileCard:function(){return n.e(1).then(n.bind(null,277))},WidgetSearchCard:function(){return n.e(2).then(n.bind(null,243))},WidgetPostCategoryCard:function(){return n.e(0).then(n.bind(null,276))},AboutBanner:function(){return n.e(4).then(n.bind(null,241))},WidgetTagCard:function(){return Promise.resolve().then(n.bind(null,244))}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,n=t.redirect,r=link,e.next=4,fetch("http://primewebajans.com/blog.json").then((function(t){return t.json()}));case 4:if(l=e.sent,!(c=l.find((function(t){return"web-sitesi-temel-kavramlari"===t.slug})))){e.next=10;break}return e.abrupt("return",{tags:c.tag[0]});case 10:n("/");case 11:return e.abrupt("return",{slug:r});case 12:case"end":return e.stop()}}),e)})))()}}),c=n(47),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-widget tag-card"},[n("h3",{staticClass:"title"},[t._v("Etiketler")]),t._v(" "),n("ul",[n("li",[t._v(" "+t._s(t.tags)+" ")]),t._v(" "),t._l(t.tags,(function(e){return n("li",{key:e,staticClass:"tag-item"},[n("a",{staticClass:"tag-link",attrs:{href:"#"}},[t._v(t._s(e))])])}))],2)])}),[],!1,null,null,null);e.default=component.exports},246:function(t,e,n){"use strict";n.r(e);n(19),n(40),n(48);var r={components:{CommentForm:function(){return n.e(8).then(n.bind(null,256))},WidgetSearchCard:function(){return Promise.resolve().then(n.bind(null,243))},AboutBanner:function(){return Promise.resolve().then(n.bind(null,241))},WidgetTagCard:function(){return Promise.resolve().then(n.bind(null,244))}}},l=n(47),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"blog-details-section section-pt-150 section-pb-150"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("aside",{staticClass:"sidebar"},[n("WidgetSearchCard",{attrs:{date:"24 Temmuz 2021"}}),t._v(" "),n("AboutBanner"),t._v(" "),n("WidgetTagCard")],1)]),t._v(" "),n("div",{staticClass:"col-lg-8 ps-xl-7"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("div",{staticClass:"next-prev-section next-prev-section2 d-none"},[n("div",{staticClass:"row mb-n4 align-items-center"},[n("div",{staticClass:"col-md-4 mb-4 col-6 order-1 order-md-0"},[n("div",{staticClass:"service-prev service-media"},[n("div",{staticClass:"content"},[n("h4",{staticClass:"title"},[t._v("Digital Marketing")]),t._v(" "),n("n-link",{staticClass:"link",attrs:{to:"/blog-details"}},[t._v("Previous "),n("i",{staticClass:"icofont-rounded-double-right"})])],1)])]),t._v(" "),t._m(5),t._v(" "),n("div",{staticClass:"col-md-4 mb-4 col-6 order-2 order-md-0"},[n("div",{staticClass:"service-next service-media"},[n("div",{staticClass:"content"},[n("h4",{staticClass:"title"},[t._v("Pay Per Click")]),t._v(" "),n("n-link",{staticClass:"link",attrs:{to:"/blog-details"}},[t._v("Next "),n("i",{staticClass:"icofont-rounded-double-right"})])],1)])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-12"},[e("div",{staticClass:"blog-details-thumb"},[e("img",{staticClass:"w-100 bdi",attrs:{src:"/images/blog-details/1.jpg",alt:"images_not_found"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"service-details"},[n("div",{staticClass:"service-details-list"},[n("h3",{staticClass:"title"},[t._v("Web Sitesi Temel Kavramları Nelerdir ?")]),t._v(" "),n("p",{staticClass:"mb-2"},[t._v("Web sitesinin temel kavramları ; "),n("b",[t._v("Alan adı")]),t._v(" (Domain), "),n("b",[t._v("Hosting")]),t._v(" (Sunucu), "),n("b",[t._v("Dns kaydı")]),t._v(" olmaktadır. ")]),t._v(" "),n("p",{staticClass:"mb-2"},[t._v('Alan adı, bir ada ve uzantıya sahiptır. Örneğin "primewebajans" adından ve "com" uzantısından oluşur. Günümüzde çok çeşitli uzantılar olmakla birlikte en yaygın olanı ".com" olmaktadır.')]),t._v(" "),n("p",{staticClass:"mb-2"},[t._v("Alan adı kısmında dikkat etmemiz gereken önemli noktalardan birisi de ingilizce karakterlerden oluşmasıdır. Satın alırken türkçe karakter ve boşluk kullanmamanızı öneriyoruz.")]),t._v(" "),n("p",{staticClass:"mb-2"},[t._v("Türkçe karakterli adlar satılsa da, aslında bunlar birer yönlendirmedir. Potansiyel sorunlar taşıdığı için Türkçe karakterli alan adlarını önermemekteyiz.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"service-details"},[n("div",{staticClass:"service-details-list"},[n("h3",{staticClass:"title"},[t._v("Alan Adı Tek Başına Yeterli Mi ?")]),t._v(" "),n("p",{staticClass:"mb-10"},[t._v("Alan adı bir web sitesinin zorunlu bileşeni olsa da tek başına yeterli değildir. Alan adı sahipliğini bir çeşit marka kaydı olarak düşünmeniz gerekir. Bu da demek oluyorki bir alan adı aldığınızda, yalnızca o alan adının kullanma haklarını almış olursunuz. ")]),t._v(" "),n("p",{staticClass:"mb-2"},[t._v("Web sitesinin diğer bileşeni Hosting'tir. Hostingi, web sitesini oluşturan dosyaların yerleştirildiği özel hard diskler olarak düşünebilirsiniz. Web siteleri hosting üzerinde çalışır. E-postalarda hostinge bağlı olarak çalışırlar.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"service-details"},[n("div",{staticClass:"service-details-list d-md-flex"},[n("img",{staticClass:"align-self-center mr-md-5 mt-4 mt-lg-0 w-25 scd",attrs:{src:"/images/blog/2.png",alt:"images_not_found"}}),t._v(" "),n("div",{staticClass:"content flex-one"},[n("h3",{staticClass:"title mt-2"},[t._v("Peki DNS Kaydı Nedir ?")]),t._v(" "),n("p",{staticClass:"mb-2"},[t._v('Son kavram ise Alan adı ile Hosting arasındaki bağı kuran Dns kaydı olmaktadır. Dns kaydı "ns1.alanadi.com" şeklindedir.')]),t._v(" "),n("p",{staticClass:"mb-4"},[t._v(" Tarayıcıya alan adınız yazıldığında tıpkı bir köprü görevi görüp hostinge erişmenizi sağlarlar.")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"service-details"},[n("div",{staticClass:"service-details-list"},[n("p",{staticClass:"mb-2"},[t._v("Web siteleri bu üç temel bileşenle var olmaktadır. ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-4 mb-4"},[n("div",{staticClass:"service-dots service-dots2 text-center"},[n("p",[n("strong",[t._v("Tags:")]),t._v(" marketing /\n                                    "),n("span",{staticClass:"text-warning"},[t._v("company")]),t._v(" / seo\n                                ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{WidgetSearchCard:n(243).default,AboutBanner:n(241).default,WidgetTagCard:n(244).default})}}]);