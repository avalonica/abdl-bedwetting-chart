<template>
	<div id="app">
		<img
			alt="Vue logo"
			src="@/assets/logo.png"
		/>
		<Calendar/>
		<EventEditor/>
	</div>
</template>

<script>
	// import HelloWorld from "./components/HelloWorld.vue";
	import Calendar from "@/components/Calendar.vue";
	import EventEditor from "@/components/EventEditor.vue";
	

	export default {
		name: "App",
		components: {
			Calendar,
			EventEditor,
		},
	};
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
