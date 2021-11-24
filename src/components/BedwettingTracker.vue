<template>
	<div class="bedwetting-tracker">
		<h1>
			ABDL Bedwetting Tracker (WIP)
			<button
				type="button"
				@click="exportData"
			>
				Export
			</button>
		</h1>

		<Calendar
			:wetting-events="flattenedWettingEvents"
			@day-selected="onDaySelected"
		/>
		<EventEditor
			:wetting-event="selectedEvent"
			@change="addWettingEvent($event)"
			@delete="deleteSelectedEvent"
		/>
	</div>
</template>

<script>
	import Vue from "vue";

	import Calendar from "@/components/Calendar.vue";
	import EventEditor from "@/components/EventEditor.vue";
	import { WettingEvent, WettingType } from "@/types/WettingEvent";


	const lsKey = "bt-events";

	export default Vue.extend({
		name: "BedwettingTracker",
		components: {
			Calendar,
			EventEditor,
		},
		data: () => ({
			selectedEvent: null,
			wettingEvents: {},
		}),
		computed: {
			flattenedWettingEvents: {
				get() {
					return Object.values(this.wettingEvents);
				},
				set(wettingEvents) {
					this.wettingEvents = {};
					wettingEvents.forEach(
						(wettingEvent) => {
							this.addWettingEvent(wettingEvent);
						},
					);
				},
			},
		},
		watch: {
			flattenedWettingEvents(newValue) {
				localStorage.setItem(
					lsKey,
					JSON.stringify(newValue),
				);
			},
		},
		created() {
			const savedEventsJSON = localStorage.getItem(lsKey);

			if (savedEventsJSON) {
				const savedEvents = WettingEvent.listFromJSONString(
					savedEventsJSON,
				);
				this.flattenedWettingEvents = savedEvents;
			}


			// this.addWettingEvent(
			// 	new WettingEvent({
			// 		date: new Date(),
			// 		type: WettingType.WOKE_UP_WET,
			// 		note: "was wet",
			// 	}),
			// );
			// this.addWettingEvent(
			// 	new WettingEvent({
			// 		date: new Date("2021-11-18"),
			// 		type: WettingType.DRY,
			// 		note: "was not wet",
			// 	}),
			// );
			// this.addWettingEvent(
			// 	new WettingEvent({
			// 		date: new Date("2021-11-5"),
			// 		type: WettingType.WOKE_UP_AND_WET,
			// 		note: "was maybe wet",
			// 	}),
			// );
		},
		methods: {
			addWettingEvent(
				/** @type {WettingEvent} */ event,
			) {
				const eventKey = event.date.toDateString();
				this.$set(
					this.wettingEvents,
					eventKey,
					event,
				);
			},
			deleteSelectedEvent() {
				const eventKey = this.selectedEvent?.date.toDateString();
				if (this.wettingEvents[eventKey]) {
					this.$delete(this.wettingEvents, eventKey);
				}
			},
			exportData() {
				navigator.clipboard.writeText(
					localStorage.getItem(lsKey) ?? "",
				);
			},
			onDaySelected(/** @type {Date} */ day) {
				this.selectedEvent = this.wettingEvents[day.toDateString()] ?? (
					new WettingEvent({
						date: day,
						type: WettingType.WOKE_UP_WET,
						note: "",
					})
				);
			},
		},
	});
</script>

<style scoped lang="scss">
	.bedwetting-tracker {
		> :nth-child(2) {
			margin-bottom: 1rem;
		}
	}
</style>
