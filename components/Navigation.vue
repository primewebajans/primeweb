<template>
    <ul class="main-menu">
        <li>
            <n-link to="/">Ana Sayfa</n-link>
        </li>
        <li>
            <n-link to="/biz-kimiz">Biz Kimiz</n-link>
        </li>
        <li>
            <n-link to="/ne-yapiyoruz">Ne Yapıyoruz</n-link>
        </li>
        <li>
            <n-link to="/ne-yaptik">Ne Yaptık</n-link>
        </li>
        <li class="has-children">
            <n-link to="/blog">Blog</n-link>
            <!-- <ul class="sub-menu">
                <li>
                    <n-link to="/blog-left-sidebar">Blog Left Sidebar</n-link>
                </li>
                <li>
                    <n-link to="/blog-right-sidebar">Blog Right Sidebar</n-link>
                </li>
                <li> 
                    <n-link to="/blog-details">Blog Detay</n-link>
                </li>
            </ul> -->
        </li>
       
    </ul>
</template>