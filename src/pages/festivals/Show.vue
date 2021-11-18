<template>
	<b-col>
		<h2>Show Festivals page</h2>
		<hr>
		<p>
			{{festival.title}}
		</p>
		<p>
			{{festival.city}}
		</p>
	</b-col>
</template>

<script>
import axios from 'axios'

export default {
	name: "FestivalsShow",
	components: {
		
	},
	data(){
		return{
			festival: {}
		}
	},
	mounted(){
		this.getData()
	},
	methods: {
		getData(){
			let token = localStorage.getItem('token')
			axios
				.get(`http://festivals-api.herokuapp.com/api/festivals/${this.$route.params.id}`,
				{
					headers: {
						"Authorization" : `Bearer ${token}`
					}
				})
				.then(response => {
						console.log(response.data)
						this.festival = response.data
					}
				)
				.catch(error => console.log(error))
		}
	}
};
</script>
