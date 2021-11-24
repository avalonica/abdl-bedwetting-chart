<template>
	<div class="foo">
		<VCalendar
			is-dark
			:first-day-of-week="2"
			:attributes="calendarAttributes"
			@dayclick="onDayClick($event.date)"
		/>
	</div>
</template>

<script>
	import { Calendar as VCalendar } from "v-calendar";
	import Vue from "vue";

	import { WettingEvent, WettingType } from "@/types/WettingEvent";


	export default Vue.extend({
		name: "Calendar",
		components: {
			VCalendar,
		},
		props: {
			wettingEvents: {
				default: () => [],
				type: Array,
				required: true,
				validator: (items) => (
					items.every((item) => item instanceof WettingEvent)
				),
			},
		},
		data: () => ({
			date: new Date(),
		}),
		computed: {
			calendarAttributes() {
				return this.wettingEvents.map(
					(
						/** @type {WettingEvent} */ wettingEvent,
					) => {
						const typeToColour = {
							[WettingType.DRY]: "gray",
							[WettingType.WOKE_UP_AND_WET]: "green",
							[WettingType.WOKE_UP_WET]: "blue",
						};

						return {
							dates: wettingEvent.date,
							highlight: typeToColour[wettingEvent.type],
							popover: {
								label: wettingEvent.note,
							},
						};
					},
				);
			},
		},
		methods: {
			onDayClick(day) {
				this.$emit("day-selected", day);
			},
		},
	});
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
