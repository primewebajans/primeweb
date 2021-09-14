<template>
    <section class="section-pt-150 section-pb-150">
        <div class="container">
            <div class="row mtn-35">
                <div class="col-lg-8 mt-35">
                    <div class="row mtn-35">
                        <div class="col-12 col-md-6 mt-35" v-for="blog in blogs" :key="blog.slug">
                            {{ blogs }}
                            <div class="blog-grid-card">
                                <n-link :to="`${blog.folder}/${blog.link}`" class="blog-grid-thumb">
                                    <img :src="blog.imgSrc" :alt="blog.title" />
                                </n-link>
                                <div class="blog-grid-content">
                                    <ul>
                                        <li class="date">
                                            <i class="icofont-ui-calendar"></i>
                                            {{ blog.date }}
                                        </li>
                                        <li>
                                            <!-- <button class="comments">{{ blog.comment }} Comments</button> -->
                                        </li>
                                    </ul>
                                    <h5 class="title mb-3">
                                        <n-link :to="`${blog.folder}/${blog.link}`">{{ blog.title }}</n-link>
                                    </h5>
                                    <p class="mb-4">
                                        {{ blog.excerpt }}
                                    </p>
                                    <n-link :to="`${blog.folder}/${blog.link}`" class="btn btn-warning">Devamını Oku</n-link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-lg-4 mt-35" :class="orderClass">
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
</template>

<script>
    export default {
        props: ["orderClass"],

        components: {
            WidgetProfileCard: () => import('@/components/WidgetProfileCard'),
            WidgetSearchCard: () => import('@/components/WidgetSearchCard'),
            WidgetPostCategoryCard: () => import('@/components/WidgetPostCategoryCard'),
            AboutBanner: () => import('@/components/AboutBanner'),
            WidgetTagCard: () => import('@/components/WidgetTagCard'),
        },
        data() {
            return {
                tags: ["Web Site", "Alan Adı", "Domain", "Hosting", "DNS", "Prime Web"]
            }
        },
        async asyncData() {
            const blogs = await fetch(
            'http://primewebajans.com/blog.json'
            ).then((res) => res.json())

            return { blogs }
        }
    };
</script>