import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import News from '@/pages/News/News'
import Vip from '@/pages/Vip/Vip'
import Shopcar from '@/pages/Shopcar/Shopcar'
import Search from '@/pages/Search/Search'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/home',
        name: 'Home',
        component: Home
    }, {
        path: '/news',
        name: 'News',
        component: News
    }, {
        path: '/shopcar',
        name: 'Shopcar',
        component: Shopcar
    }, {
        path: '/vip',
        name: 'Vip',
        component: Vip
    }, {
        path: '/search',
        name: 'Search',
        component: Search
    }]
})