<template>
    <section class="about-us-section pb-0" id="prime-web-ajans">
        <div class="container">
            <div class="row mtn-30">
                <div class="col-md-6 col-xl-4 mt-30">
                    <div class="about-thumb">
                        <img src="/images/about/2.png" alt="images_not_found" />
                    </div>
                </div>
                <div class="col-md-6 col-xl-5 mt-30">
                    <div class="about-cards">
                        <div class="about-card-list">
                            <span class="sub-title text-gradient">Prime Web Ajans</span>
                            <h4 class="title">Hakkında</h4>
                            <p>
                                Sanal ajansların gözdesi olan Prime Web Ajans, yazılım ve teknik ekibiyle birlikte dijital ortamlarda size çözüm sunmak amacıyla kurulmuştur. <br> <br>
                                Uzmanlık alanımız olan web site çözümleriyle birlikte firmanıza sanal dünyada level atlatmaktayız. Bununla birlikte yeni bir kurumsal kimlik oluşturma hizmetlerimiz bulunmaktadır.
                            </p>
                        </div>
                        <div class="about-card-list">
                            <a href="/" class="brand-logo about-logo">
                                <img src="/images/logo/logo.svg" class="logo-bottom" alt="Prime Web Ajans Logo" />
                                <h1>Prime<br>Web Ajans</h1>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 offset-lg-2 offset-xl-0 col-xl-3 mt-30">
                    <AboutBanner />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            AboutBanner: () => import('@/components/AboutBanner'),
        },
    };
</script>