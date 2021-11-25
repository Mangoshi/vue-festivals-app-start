<template>
	<b-col>
		<h2>Edit Festival</h2>
		<b-form-group
			label="Title"
			label-for="title-input"
		>
		<b-form-input
			id="title-input"
			v-model="form.title"
			type="text"
			required
		>
        </b-form-input>
		</b-form-group>
		<b-form-group
			label="Description"
			label-for="desc-input"
		>
		<b-form-textarea
			id="desc-input"
			v-model="form.description"
			rows="3"
			max-rows="6"
		></b-form-textarea>
		</b-form-group>
		<b-form-group
			label="City"
			label-for="city-input"
		>
		<b-form-input
			id="city-input"
			v-model="form.city"
			type="text"
			required
		></b-form-input>
		</b-form-group>
		<b-form-group
			label="Start Date"
			label-for="start-input"
		>
		<b-form-datepicker 
			id="start-input"
			v-model="form.start_date"
			required
		></b-form-datepicker >
		</b-form-group>
		<b-form-group
			label="End Date"
			label-for="end-input"
		>
		<b-form-datepicker 
			id="end-input"
			v-model="form.end_date"
			required
		></b-form-datepicker >
		</b-form-group>
		<b-button @click="submitForm()" class="mr-2" variant="primary">Submit</b-button>
		<b-button @click="cancel()" class="float-right" variant="dark">Cancel</b-button>
	</b-col>
</template>

<script>
import axios from '@/config'

export default {
	name: "FestivalsEdit",
	data() {
		return {
            festival: {},
			form: {
				title: '',
				description: '',
				city: '',
				start_date: '',
				end_date: '',
			}
		}
	},
    mounted(){
        this.getData()
    },
	methods: {
        getData(){
			let token = localStorage.getItem('token')
			axios
				.get(`festivals/${this.$route.params.id}`,
				{
					headers: {
						"Authorization" : `Bearer ${token}`
					}
				})
				.then(response => {
						console.log(response.data)
                        
                        this.form.title = response.data.title
                        this.form.description = response.data.description
                        this.form.city = response.data.city
                        this.form.start_date = response.data.start_date
                        this.form.end_date = response.data.end_date
					}
				)
				.catch(error => console.log(error))
		},
		submitForm(){
			let token = localStorage.getItem('token')
			axios
			.put(`festivals/${this.$route.params.id}`, this.form, {
				headers: {
					"Authorization" : `Bearer ${token}`
				}
			})
			.then(response =>{
				console.log(response.data)
				this.$router.push({
					name: "festivals_show",
                    params: {
                        id: this.$route.params.id
                    }
				})
			})
			.catch(err => {
				console.log(err)
				console.log(err.response.data)
			})
		},
		cancel(){
			this.$router.go(-1)
		}
	}
}
</script>

<style>

</style>