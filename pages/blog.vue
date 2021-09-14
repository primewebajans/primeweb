<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Blog" active-title="Blog" />

        <section class="section-pt-150 section-pb-150">
            <div class="container">
                <div class="row mtn-35">
                    <div class="col-lg-8 mt-35">
                        <div class="row mtn-35">
                            <p v-if="$fetchState.pending">Blog Listesi Yükleniyor...</p>
                            <p v-else-if="$fetchState.error">Bir Hata Oluştu :(</p>
                           
                             <div class="col-12 col-md-6 mt-35" v-else v-for="blog in blogs" :key="blog.id">
                                <div class="blog-grid-card">
                                    <n-link :to="`/blog-detay/${blog.slug}`" class="blog-grid-thumb">
                                        <img :src="blog.image" :alt="blog.title" />
                                    </n-link>
                                    <div class="blog-grid-content">
                                        <ul>
                                            <li class="date">
                                                <i class="icofont-ui-calendar"></i>
                                                {{ blog.date }}
                                            </li>
                                            
                                        </ul>
                                        <h5 class="title mb-3">
                                            <n-link :to="`/blog-detay/${blog.slug}`">{{ blog.title }}</n-link>
                                        </h5>
                                        <p class="mb-4">
                                            {{ blog.description }}
                                        </p>
                                        <n-link :to="`/blog-detay/${blog.slug}`" class="btn btn-warning">Devamını Oku</n-link>
                                    </div>
                                </div>
                            </div>
                         
                        </div>

                    </div>

                    <div class="col-lg-4 mt-35">
                        <aside class="sidebar">
                            <AboutBanner />

                            <div class="sidebar-widget tag-card">
                                <h3 class="title">Etiketler</h3>
                                <ul>
                                    <li class="tag-item" v-for="tag of tags" :key="tag">
                                        <a class="tag-link" href="#">{{ tag }}</a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
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
            title: 'Blog'
        }
    },
    data() {
        return {
            blogs: [],
            tags: ["Web Site", "Alan Adı", "Domain", "Hosting", "DNS", "Prime Web"],
        }
    },
    async fetch() {
      this.blogs = await fetch(
        'http://primewebajans.com/data/blog.json'
      ).then(res => res.json())
    }
  }
</script>