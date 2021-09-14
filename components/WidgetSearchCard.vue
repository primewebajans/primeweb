<template>
    <div class="sidebar-widget search-card">
         <li class="social-share-item">
            <i class="icofont-calendar"></i>
            <span>{{ date }}</span>
        </li>
    </div>
</template>

<script>
    export default {
        props: ["date"]
    };
</script>