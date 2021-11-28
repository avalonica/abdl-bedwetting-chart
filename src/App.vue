<template>
	<div id="app">
		<BedwettingTracker/>
	</div>
</template>

<script>
	import Vue from "vue";

	import BedwettingTracker from "@/components/BedwettingTracker.vue";
	

	export default Vue.extend({
		name: "App",
		components: {
			BedwettingTracker,
		},
	});
</script>

<style lang="scss">
	:root {
		--dark: #071022;
		--light: #cbd9f4;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		padding: 1rem;
	}

	body {
		background-color: var(--dark);
		color: var(--light);
		margin: 0;
	}
</style>
