<template>
	<div>
		<MyNavBar :loggedIn="loggedIn" v-on:logout="setLoggedOut" v-on:invalid-token="setLoggedOut"/>
		<b-container>
			<br />
			<b-row>
				<router-view :loggedIn="loggedIn" v-on:login="setLoggedIn" v-on:invalid-token="setLoggedOut" />
			</b-row>
			<MyFooter />
		</b-container>
	</div>
</template>

<script>
import MyNavBar from "@/components/MyNavBar.vue"
import MyFooter from "@/components/MyFooter.vue"

export default {
	name: "App",
	components: {
		MyNavBar,
		MyFooter
	},
	data(){
		return {
			loggedIn: false
		}
	},
	created(){
		// Terniary operator saying: if token exists, loggedIn = true, else loggedIn = false
		localStorage.getItem('token') ? this.loggedIn = true : this.loggedIn = false
	},
	methods:{
		setLoggedIn(token){
			this.loggedIn = true
			localStorage.setItem('token', token)
		},
		setLoggedOut(){
			this.loggedIn = false
			localStorage.removeItem('token')
			this.$router.push({name: 'home'})
		}
	}
};
</script>

<style>

</style>
