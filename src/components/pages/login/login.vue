<template>
	<div class="login">
		this is login
	</div>
</template>

<script>
	export default {
		name: 'login',
		data () {
			return {
				msg: 'Welcome to Your Vue.js App',
			}
		},
		created(){
			console.log(this.$utill)
			console.log(this.$store)
			this.$store.commit('user', {'name': '李四'})
			console.log('-----------------------------------')
			console.log(this.$store.state.user)
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
