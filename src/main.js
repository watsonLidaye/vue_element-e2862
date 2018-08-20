// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/index'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import Lockr from 'Lockr'
import axios from 'axios'
import moment from 'moment'
import utill from './assets/js/util.js'
import store from './vuex/store'
import filter from './assets/js/utils/fitter.js'
import '@/assets/css/cssrest.css'
import '@/assets/css/public.css'

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes
})

axios.defaults.timeout = 1000 * 15
axios.defaults.headers.authKey = Lockr.get('authKey')
axios.defaults.headers.sessionId = Lockr.get('sessionId')
axios.defaults.headers['Content-Type'] = 'application/json'

Vue.use(Element)
Vue.use(VueRouter)

window.$http = axios
window.$utill = utill
window.$store = store
window.router = router
window.moment = moment

Vue.config.productionTip = false
/* eslint-disable no-new */
// router.beforeEach((to, from, next) => {
// 	console.log(to)
// 	console.log(from)
// })
// router.afterEach((to, from) => {
// 	console.log(to)
// 	console.log(from)
// })
console.log(router)
new Vue({
	el: '#app',
	router: router,
	components: {
		App
	},
	template: '<App/>',
	filters: filter,
}).$mount('#app')
//进入页面的通用方法