<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Biz Kimiz ?" active-title="Biz Kimiz" />

        <AboutTwo />

        <AboutOne />

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
            AboutTwo: () => import('@/components/AboutTwo'),
            AboutOne: () => import('@/components/AboutOne'),
            TeamSection: () => import('@/components/TeamSection'),
            TestimonialOne: () => import('@/components/TestimonialOne'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Biz Kimiz & Hakkımızda'
            }
        },
    };
</script>


