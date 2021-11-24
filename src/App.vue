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
		margin-top: 60px;

		display: flex;
		flex-flow: column nowrap;
		align-items: center;
	}

	body {
		background-color: var(--dark);
		color: var(--light);
	}
</style>
