<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container">
			<a class="navbar-brand" href="#">FestivalCloud</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div class="navbar-nav">
					<router-link class="nav-link" to="/">Home</router-link>
					<router-link class="nav-link" :to="{name: 'festivals_index'}">Festivals</router-link>
				</div>
			</div>
			<button v-if="$store.state.loggedIn" @click="logout()" class="btn btn-sm btn-outline-danger">Log Out</button>
		</div>
	</nav>
</template>

<script>
export default {
	name: "MyNavBar",
	props:{
		msg: String
	},
	methods:{
		logout(){
			this.$store.dispatch('logout')
		}
	}
};
</script>

<style></style>
