import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import News from '@/pages/News/News'

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
    }]
})