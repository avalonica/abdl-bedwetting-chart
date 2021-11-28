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

		<div class="interaction">
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
	// .bedwetting-tracker {
	// }

	.interaction {
		display: flex;
		flex-flow: row wrap;
		gap: 1rem;

		justify-content: center;
		align-items: flex-start;
	}
</style>
