<template>
	<b-col>
		<h2>Welcome to the Cloud Festivals Website</h2>
		<div v-if="!loggedIn">
			Email: <input type="email" v-model="form.email" placeholder="email" />
			<br>
			Password: <input type="password" v-model="form.password" placeholder="password" />
			<br>
			<button @click="login(form)">Login</button>
		</div>
		<p v-else>
			You are logged in.
		</p>
	</b-col>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
	name: "Home",
	components: {},
	data(){
		return{
			form: {
				email: "",
				password: ""
			}
		}
	},
	computed: {
		...mapState(['loggedIn'])
	},
	methods: {
		...mapActions(['login'])
	}
};
</script>
