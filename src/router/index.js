import { createWebHistory, createRouter } from "vue-router";
import enApp from "../components/enApp.vue";
import jpApp from "../components/jpApp.vue";

const routes = [
	{
		path: "/",
		name: "English",
		component: enApp,
	},

	{
		path: "/jp",
		name: "日本語",
		component: jpApp,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;