<template>
    <div class="sidebar-widget tag-card">
        <h3 class="title">Etiketler</h3>
        <ul>
            <li> {{ tags }} </li>
            <li class="tag-item" v-for="tag in tags" :key="tag">
                <a class="tag-link" href="#">{{ tag }}</a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {

        props: ["link"],

        components: {
            WidgetProfileCard: () => import('@/components/WidgetProfileCard'),
            WidgetSearchCard: () => import('@/components/WidgetSearchCard'),
            WidgetPostCategoryCard: () => import('@/components/WidgetPostCategoryCard'),
            AboutBanner: () => import('@/components/AboutBanner'),
            WidgetTagCard: () => import('@/components/WidgetTagCard'),
        },
        
        async asyncData({ params, redirect }) {
            const slug  = link
            const blogs = await fetch('http://primewebajans.com/blog.json').then((res) => res.json())
            
            const single = blogs.find(
                (el) =>
                el.slug === "web-sitesi-temel-kavramlari"
            )

            if (single) {
                return {
                    tags: single.tag[0],
                }
            }
            else {
                redirect('/')
            }
            return {slug}
        }

    };
</script>
