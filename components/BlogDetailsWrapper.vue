<template>
    <section class="blog-details-section section-pt-150 section-pb-150">
        <div class="container">
            <div class="row">

                <div class="col-lg-12">
                     <div class="blog-details-thumb">
                        <img src="/images/blog-details/1.jpg" alt="images_not_found" class="w-100 bdi" />
                    </div>
                </div>
                 <div class="col-lg-4">
                    <aside class="sidebar">
                        <WidgetSearchCard date="24 Temmuz 2021" />

                        <AboutBanner />

                        <WidgetTagCard />
                    </aside>
                </div>
                <div class="col-lg-8 ps-xl-7">

                    <div class="service-details">
                        <div class="service-details-list">
                            <h3 class="title">Web Sitesi Temel Kavramları Nelerdir ?</h3>
                            <p class="mb-2">Web sitesinin temel kavramları ; <b>Alan adı</b> (Domain), <b>Hosting</b> (Sunucu), <b>Dns kaydı</b> olmaktadır. </p>

                            <p class="mb-2">Alan adı, bir ada ve uzantıya sahiptır. Örneğin "primewebajans" adından ve "com" uzantısından oluşur. Günümüzde çok çeşitli uzantılar olmakla birlikte en yaygın olanı ".com" olmaktadır.</p>
                            <p class="mb-2">Alan adı kısmında dikkat etmemiz gereken önemli noktalardan birisi de ingilizce karakterlerden oluşmasıdır. Satın alırken türkçe karakter ve boşluk kullanmamanızı öneriyoruz.</p>
                            <p class="mb-2">Türkçe karakterli adlar satılsa da, aslında bunlar birer yönlendirmedir. Potansiyel sorunlar taşıdığı için Türkçe karakterli alan adlarını önermemekteyiz.</p>
                        </div>
                    </div>

                    <div class="service-details">
                        <div class="service-details-list">
                            <h3 class="title">Alan Adı Tek Başına Yeterli Mi ?</h3>
                            <p class="mb-10">Alan adı bir web sitesinin zorunlu bileşeni olsa da tek başına yeterli değildir. Alan adı sahipliğini bir çeşit marka kaydı olarak düşünmeniz gerekir. Bu da demek oluyorki bir alan adı aldığınızda, yalnızca o alan adının kullanma haklarını almış olursunuz. </p>

                            <p class="mb-2">Web sitesinin diğer bileşeni Hosting'tir. Hostingi, web sitesini oluşturan dosyaların yerleştirildiği özel hard diskler olarak düşünebilirsiniz. Web siteleri hosting üzerinde çalışır. E-postalarda hostinge bağlı olarak çalışırlar.</p>
                        </div>
                    </div>

                    <div class="service-details">
                        <div class="service-details-list d-md-flex">
                            <img class="align-self-center mr-md-5 mt-4 mt-lg-0 w-25 scd" src="/images/blog/2.png" alt="images_not_found" />

                            <div class="content flex-one">
                                <h3 class="title mt-2">Peki DNS Kaydı Nedir ?</h3>
                                <p class="mb-2">Son kavram ise Alan adı ile Hosting arasındaki bağı kuran Dns kaydı olmaktadır. Dns kaydı "ns1.alanadi.com" şeklindedir.</p>

                                <p class="mb-4"> Tarayıcıya alan adınız yazıldığında tıpkı bir köprü görevi görüp hostinge erişmenizi sağlarlar.</p>
                                
                            </div>
                        </div>
                    </div>

                    <div class="service-details">
                        <div class="service-details-list">
                                <p class="mb-2">Web siteleri bu üç temel bileşenle var olmaktadır. </p>
                        </div>
                    </div>

                    <div class="next-prev-section next-prev-section2 d-none">
                        <div class="row mb-n4 align-items-center">
                            <div class="col-md-4 mb-4 col-6 order-1 order-md-0">
                                <div class="service-prev service-media">
                                    <div class="content">
                                        <h4 class="title">Digital Marketing</h4>
                                        <n-link to="/blog-details" class="link">Previous <i class="icofont-rounded-double-right"></i></n-link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="service-dots service-dots2 text-center">
                                    <p>
                                        <strong>Tags:</strong> marketing /
                                        <span class="text-warning">company</span> / seo
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4 col-6 order-2 order-md-0">
                                <div class="service-next service-media">
                                    <div class="content">
                                        <h4 class="title">Pay Per Click</h4>
                                        <n-link to="/blog-details" class="link">Next <i class="icofont-rounded-double-right"></i></n-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

               

                </div>
               
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            CommentForm: () => import('@/components/CommentForm'),
            WidgetSearchCard: () => import('@/components/WidgetSearchCard'),
            AboutBanner: () => import('@/components/AboutBanner'),
            WidgetTagCard: () => import('@/components/WidgetTagCard'),
        },
    };
</script>