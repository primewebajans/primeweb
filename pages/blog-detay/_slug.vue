<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb :title="`${blogTitle}`" :active-title="`${blogTitle}`" />

        <section class="blog-details-section section-pt-150 section-pb-150">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12">
                        <div class="blog-details-thumb">
                            <img :src="`${image}`" alt="images_not_found" class="w-100 bdi" />
                        </div>
                    </div>
                    <div class="col-lg-4">
                    <aside class="sidebar">
                        <AboutBanner />

                        <div class="sidebar-widget tag-card">
                            <h3 class="title">Etiketler</h3>
                            <ul>
                                <li class="tag-item" v-for="tag in tags" :key="tag">
                                    <a class="tag-link" href="#">{{ tag }}</a>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    </div>
                    <div class="col-lg-8 ps-xl-7">

                         <v-card-text v-html="text"></v-card-text>

                        <div class="next-prev-section next-prev-section2">
                            <div class="row mb-n4 align-items-center">
                                <div class="col-md-4 mb-4 col-6 order-1 order-md-0">
                                    <div class="service-prev service-media">
                                        <div class="content">
                                            <h4 class="title">{{ prevTitle }}</h4>
                                            <n-link :to="`/blog-detay/${ prevSlug }`" class="link"> <i class="icofont-rounded-double-left"></i> Önceki Yazı</n-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                    
                                </div>
                                <div class="col-md-4 mb-4 col-6 order-2 order-md-0">
                                    <div class="service-next service-media">
                                        <div class="content">
                                            <h4 class="title">{{ nextTitle }}</h4>
                                            <n-link :to="`/blog-detay/${ nextSlug }`" class="link">Sonraki Yazı <i class="icofont-rounded-double-right"></i></n-link>
                                        </div>
                                    </div>
                                </div>
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
            WidgetTagCard: () => import('@/components/WidgetTagCard'),
        },

        head() {
          
            return {
                title: this.blogTitle
            }
        },
        data() {
            return {
                blogs: [],
            }
        },
        async fetch() {
            this.blogs = await fetch(
                'http://primewebajans.com/data/blog.json'
            ).then(res => res.json())
            
            const single = blogs.find(
                (el) =>
                el.slug === params.slug
            )

            if (single) {
                return {
                    blogTitle: single.title,
                    text: single.text,
                    image: single.image,
                    tags: single.tag,
                    date: single.date,
                    slugLink: single.slug,
                    nextTitle: single.nextTitle,
                    nextSlug: single.nextSlug,
                    prevTitle: single.prevTitle,
                    prevSlug: single.prevSlug,
                }
            }
            else {
                redirect('/')
            }
        }
    };
</script>


