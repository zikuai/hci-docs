<template>
    <div class="side-nav">
        <ul>
            <li class="nav-item" v-for="nav in navs">

                <template v-if="nav.groups">
                    <a> {{ nav.name }} </a>
                    <div class="nav-group" v-for="group in nav.groups">
                        <div class="nav-group__title">{{ group.groupName }}</div>

                        <ul class="pure-menu-list">
                            <li class="nav-item" v-for="nav in group.list">
                                <router-link
                                    :to="nav.path"
                                    :class="{active: activeRoute === nav.path}"
                                    @click.native="changeRoute(nav.path)">
                                    {{ nav.name || nav.title }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </template>

                <template v-else-if="nav.children">
                    <a> {{ nav.name }} </a>
                    <ul class="pure-menu-list sub-nav">
                        <li class="nav-item"v-for="nav in nav.children">
                            <router-link
                                :to="nav.path"
                                :class="{active: activeRoute === nav.path}"
                                @click.native="changeRoute(nav.path)">
                                {{ nav.name || nav.title }}
                            </router-link>
                        </li>
                    </ul>
                </template>

                <template v-else>
                    <router-link
                        :to="nav.path"
                        :class="{active: activeRoute === nav.path}"
                        @click.native="changeRoute(nav.path)">
                        {{ nav.name || nav.title }}
                    </router-link>
                </template>

            </li>
        </ul>
    </div>
</template>

<script>
    import navs from '@/router/nav.json'

    export default {
        data () {
            return {
                activeRoute: this.$route.path || '/installation',
                navs: navs
            }
        },

        methods: {
            changeRoute (path) {
                this.activeRoute = path
            }
        }
    }
</script>

<style>
    .side-nav {
        width: 100%;
        box-sizing: border-box;
        padding-right: 30px;
        transition: opacity .3s
    }

    .side-nav li {
        list-style: none
    }

    .side-nav ul {
        padding: 0;
        margin: 0;
        overflow: hidden
    }

    .side-nav > ul > .nav-item > a {
        margin-top: 15px
    }

    .side-nav > ul > .nav-item:nth-child(-n+4) > a {
        margin-top: 0;
    }

    .side-nav .nav-item a {
        font-size: 16px;
        color: #333;
        line-height: 40px;
        height: 40px;
        margin: 0;
        padding: 0;
        text-decoration: none;
        display: block;
        position: relative;
        transition: .15s ease-out;
        font-weight: 700
    }

    .side-nav .nav-item a.active {
        color: #409eff
    }

    .side-nav .nav-item .nav-item a {
        display: block;
        height: 40px;
        color: #444;
        line-height: 40px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 400
    }

    .side-nav .nav-item .nav-item a.active,
    .side-nav .nav-item .nav-item a:hover {
        color: #409eff
    }

    .side-nav .nav-group__title {
        font-size: 12px;
        color: #999;
        line-height: 26px;
        margin-top: 15px
    }

    .side-nav #code-sponsor-widget {
        margin: 0 0 0 -20px
    }

    .side-nav.is-fade {
        transition: opacity 3s
    }
</style>
