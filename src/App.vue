<template>
    <div id="app">
        <SiteHeader></SiteHeader>

        <div class="container">
            <div class="row">
                <div class="col-xs-6 col-md-3">
                    <SideNav></SideNav>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-8">
                    <router-view/>
                </div>
            </div>
        </div>

        <ScrollTop></ScrollTop>
    </div>
</template>

<script>
    import SiteHeader from '@/components/header.vue'
    import SideNav from '@/components/side-nav.vue'
    import ScrollTop from '@/components/scroll-top.vue'

    export default {
        name: 'app',
        components: {
            SiteHeader,
            SideNav,
            ScrollTop
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        /*color: #2c3e50;*/
        /*margin-top: 60px;*/
    }
</style>
