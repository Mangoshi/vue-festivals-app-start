<template>
	<b-col>
		<h2>Festivals</h2>

		<b-button :to="{ name : 'festivals_create' }" variant="primary" class="mb-2 float-right">Add</b-button>

		<b-table striped hover responsive headVariant="dark" :items="festivals" :fields="headings">

			<template #cell(title)="data">
				<router-link :to="{ name: 'festivals_show', params:{ id: data.item._id }}">{{ data.value }}</router-link>
			</template>

			<template #cell(start_date)="data">
				{{new Date(data.value).toLocaleString()}}
			</template>

			<template #cell(end_date)="data">
				{{new Date(data.value).toLocaleString()}}
			</template>

		</b-table>
<!--
		<p
		v-for="festival in festivals"
		:key="festival._id" >
		
		</p>
-->

	</b-col>

</template>

<script>
import axios from '@/config'

export default {
	name: "FestivalsIndex",
	components: {
		
	},
	data(){
		return{
			headings: [
				{
					key: 'title',
					sortable: true
				},
					'description',
				{
					key: 'city',
					sortable: true
				},
				{
					key: 'start_date',
					sortable: true
				},
				{
					key: 'end_date',
					sortable: true
				},
			],
			festivals: []
		}
	},
	mounted(){
		this.getData()
	},
	methods: {
		getData(){
			axios
				.get("festivals")
				.then(response => {
						console.log(response.data)
						this.festivals = response.data
					}
				)
				.catch(error => console.log(error))
		}
	}
};
</script>
<style>

</style>