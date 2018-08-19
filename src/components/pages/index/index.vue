<template>
	<div class="index">
		this is index
	</div>
</template>

<script>
	export default {
		name: 'index',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App',
			}
		},
		created(){
			console.log($utill)
			console.log($store)
			$store.commit('user', {'name': '王刚'})
			console.log('-----------------------------------')
			console.log($store.state.user)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
