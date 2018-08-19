// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import axios from 'axios'
import utill from './assets/js/util.js'
import store from './vuex/store'
import filter from './assets/js/utils/fitter.js'
import '@/assets/css/cssrest.css'
import '@/assets/css/public.css'

Vue.use(Element)
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.prototype.$utill = utill
Vue.prototype.$store = store
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