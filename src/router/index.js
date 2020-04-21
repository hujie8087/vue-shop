import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import News from '@/pages/News/News'
import NewsDetail from '@/pages/News/NewsDetail'
import Vip from '@/pages/Vip/Vip'
import Shopcar from '@/pages/Shopcar/Shopcar'
import Search from '@/pages/Search/Search'
import Products from '@/pages/Products/Products'
import Information from '@/pages/Information/Information'
import Feedback from '@/pages/Feedback/Feedback'
import Contact from '@/pages/Contact/Contact'
import PhotosList from '@/pages/Photos/PhotosList'
import PhotosDetail from '@/pages/Photos/PhotosDetail'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/news',
        name: 'news',
        component: News
    }, {
        path: '/news/:id',
        name: 'newsDetail',
        component: NewsDetail
    }, {
        path: '/shopcar',
        name: 'shopcar',
        component: Shopcar
    }, {
        path: '/vip',
        name: 'vip',
        component: Vip
    }, {
        path: '/search',
        name: 'search',
        component: Search
    }, {
        path: '/products',
        name: 'products',
        component: Products
    }, {
        path: '/photos/list/:categoryId',
        name: 'photoslist',
        component: PhotosList
    }, {
        path: '/photos/detail/:photosId',
        name: 'photosdetail',
        component: PhotosDetail
    }, {
        path: '/information',
        name: 'information',
        component: Information
    }, {
        path: '/feedback',
        name: 'feedback',
        component: Feedback
    }, {
        path: '/contact',
        name: 'contact',
        component: Contact
    }]
})