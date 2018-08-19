// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/index'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import axios from 'axios'
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


Vue.use(Element)
Vue.use(VueRouter)

Vue.prototype.$http = axios
Vue.prototype.$utill = utill
Vue.prototype.$store = store
Vue.prototype.router = router

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>',
	filters: filter,
})
//进入页面的通用方法
router.beforeEach((to, from) => {
	console.log(to)
	console.log(from)
})
router.afterEach((to, from) => {
	console.log(to)
	console.log(from)
})