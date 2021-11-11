import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		//// HOME ////
		{
			path: "/",
			name: "home",
			component: Home
		},
		//// FESTIVALS ////
		{
			path: "/festivals",
			name: "festivals_index",
			// This is lazy-loading syntax to import the Component
			component: () => import("./pages/festivals/Index.vue")
		},
		{
			path: "/festivals/:id",
			name: "festivals_show",
			component: () => import("./pages/festivals/Show.vue")
		},
	]
});
