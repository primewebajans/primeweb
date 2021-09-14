<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Ne Yaptık ?" active-title="Ne Yaptık" />

        <div class="container-fluid mw-1500">
             <div class="row mt-35 mb-35">

                <p v-if="$fetchState.pending">Referans Listesi Yükleniyor...</p>

                <p v-else-if="$fetchState.error">Bir Hata Oluştu :(</p>

                <div :class="`col-12 col-md-6 mt-35 ref ${reference.t}`" v-else v-for="reference in references" :key="reference.id">
                   <figure class="snip1477">
                        <img :src="`${ reference.image }`" alt="" />
                        <div class="title">
                            <div>
                            <h2>{{ reference.title1 }}</h2>
                            <h4>{{ reference.title2 }}</h4>
                            </div>
                        </div>
                        <figcaption>
                            <p>{{ reference.category }}</p>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                </div>

            </div>
        </div>

        <!-- <CaseDetailsCarousel /> -->

        <!-- <CaseDetailsContent /> -->

        <!-- <CaseDetailsNavigation /> -->

        <!-- <CommentFormWrapper /> -->

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
            CaseDetailsCarousel: () => import('@/components/CaseDetailsCarousel'),
            CaseDetailsContent: () => import('@/components/CaseDetailsContent'),
            CaseDetailsNavigation: () => import('@/components/CaseDetailsNavigation'),
            CommentFormWrapper: () => import('@/components/CommentFormWrapper'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Ne Yaptık'
            }
        },
        data() {
            return {
                references: [],
            }
        },
        async fetch() {
            this.references = await fetch(
                'http://primewebajans.com/data/references.json'
            ).then(res => res.json())
        }
    };
</script>


