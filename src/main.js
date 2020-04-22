// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import '../static/css/global.css'
import MintUI from 'mint-ui'
import Icon from 'vue-svg-icon/Icon.vue'
import Axios from 'axios'
import './mock/mock'
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.component('icon', Icon)

Vue.prototype.$axios = Axios

Vue.component('Navbar', Navbar)
Vue.component('Header', Header)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})