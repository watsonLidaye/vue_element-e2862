import Vue from 'vue'
export default (function() {
	Vue.filter('numToString', function(value) {
		const string = value.toString()
		return string
	})
})()