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
			axios
				.get(`http://festivals-api.herokuapp.com/api/festivals/${this.$route.params.id}`,
				{
					headers: {
						"Authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGZlc3RpdmFscy5pZSIsIl9pZCI6IjYxODAzYTMxNGM2OTczOGEyMGQxOTMyMyIsImlhdCI6MTYzNjYzMDY2MX0.X2n591lJ5rzV-gYkSW1PSaQroCD0E5QCeQtU53lr0GE'
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
