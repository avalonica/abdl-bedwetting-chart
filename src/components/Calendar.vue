<template>
	<div class="foo">
		<DatePicker
			v-model="date"
			is-dark
			first-day-of-week="2"
		/>
	</div>
</template>

<script>
	import { DatePicker } from "v-calendar";


	export default {
		name: "Calendar",
		components: {
			DatePicker,
		},
		data: () => ({
			date: new Date(),
		}),
	};
</script>

<style scoped lang="scss">
	.foo {
		font-size: 3rem;
		> * {
			// transform: scale(1.3);
			zoom: 1.3;
		}
	}
</style>
