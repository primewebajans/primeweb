<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Neler Sunuyoruz ?" active-title="Ne Yapıyoruz" />


        <section class="service-details-section">
            <div class="container">
                <div class="row mtn-35">
                    <div class="col-12 mt-35">
                        <div class="service-details">
                            <div class="service-details-list">
                                <h2 class="title mt-35">Prime Web Ajans Olarak;</h2>
                                <p>Siz değerli müşterilerimize 5 adet hizmet sunmaktayız. Hizmetlerimize göz atarak neler sunduğumuz hakkında daha iyi fikir sahibi olabilirsiniz.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <p v-if="$fetchState.pending">Referans Listesi Yükleniyor...</p>

                <p v-else-if="$fetchState.error">Bir Hata Oluştu :(</p>


                <div class="service-details pt-h " :id="`${service.slug}`" v-else v-for="service in services" :key="service.id">
                    <div class="service-details-list">
                        <div class="row mtn-35">
                            <div :class="`col-lg-6 mt-30 ${service.imagep}`">
                                <img class="experience" :src="`${ service.image }`" :alt="`${ service.title }`" />
                            </div>

                            <div class="col-12 col-lg-6 mt-30">
                                <h2 class="title">{{ service.title }}</h2>
                                <v-card-text v-html="service.text"></v-card-text>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <Footer />

        <ScrollTop />

    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Neler Sunuyoruz & Ne Yapıyoruz'
            }
        },
        data() {
            return {
                services: [],
            }
        },
        async fetch() {
            this.services = await fetch(
                'http://primewebajans.com/data/services.json'
            ).then(res => res.json())
        }
    };
</script>


