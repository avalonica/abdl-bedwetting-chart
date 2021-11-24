<template>
	<form
		class="event-editor"
		@submit.prevent="onSave"
	>
		<h2 class="header">
			Edit wetting event
		</h2>

		<label class="date">
			Date
			<input
				v-model="dateString"
				type="date"
				readonly
			/>
		</label>

		<label class="note">
			Note
			<textarea
				v-model="note"
			/>
		</label>

		<fieldset class="type">
			<legend>Type</legend>

			<label>
				<input
					v-model="type"
					type="radio"
					:value="WettingType.WOKE_UP_WET"
				/>
				Woke up wet
			</label>
			<label>
				<input
					v-model="type"
					type="radio"
					:value="WettingType.WOKE_UP_AND_WET"
				/>
				Woke up, wet, then went back to sleep
			</label>
			<label>
				<input
					v-model="type"
					type="radio"
					:value="WettingType.DRY"
				/>
				Woke up dry
			</label>
		</fieldset>

		<button
			type="button"
			class="delete-button"
			@click="$emit('delete')"
		>
			Delete
		</button>

		<button
			type="submit"
			class="save-button"
		>
			Save
		</button>
	</form>
</template>

<script>
	import Vue from "vue";

	import { WettingEvent, WettingType } from "@/types/WettingEvent";

	
	export default Vue.extend({
		name: "EventEditor",
		props: {
			wettingEvent: {
				default: null,
				type: WettingEvent,
				required: false,
			},
		},
		data: () => ({
			date: null,
			note: "",
			type: WettingType.WOKE_UP_WET,
		}),
		computed: {
			// Make WettingType available to template
			WettingType() { return WettingType; },
			dateString() {
				return this.date?.toISOString().split("T")[0];
			},
			// adjustedDate() {
			// 	const nonAdjustedDate = new Date(this.data);
			// 	const date = new Date(this.wettingEvent?.date);
			// 	// date.setDate(nonAdjustedDate.getDate);
			// 	// date.setMonth(nonAdjustedDate.getMonth());
			// 	date.setFullYear(
			// 		nonAdjustedDate.getFullYear(),
			// 		nonAdjustedDate.getMonth(),
			// 		nonAdjustedDate.getDate()
			// 	);
			// 	return date;
			// }
		},
		watch: {
			wettingEvent(/** @type {WettingEvent} */ newValue) {
				this.date = newValue.date;
				this.note = newValue.note;
				this.type = newValue.type;
			},
		},
		methods: {
			onSave() {
				const newEvent = new WettingEvent({
					date: this.date,
					note: this.note,
					type: this.type,
				});
				this.$emit("change", newEvent);
			},
		},
	});
</script>

<style scoped lang="scss">
	.event-editor {
		--input-background: #304457;
		// --input-background: #1a202c;
		background: #1a202c;
		border-radius: .5rem;
		padding: 1rem;
		border: solid 1px #4a5568;

		display: flex;
		flex-flow: column nowrap;
		gap: .5rem;
	}

	.header {
		margin: 0;
	}

	.date, .note {
		display: flex;
		flex-flow: column nowrap;
		align-items: flex-start;
	}

	.note textarea {
		height: 4em;
		width: 30ch;
	}

	.type {
		display: flex;
		flex-flow: column nowrap;
	}

	.save-button, .delete-button {
		align-self: flex-end;
	}

	input[type=date] {
		background: var(--input-background);
		color: #fff;
	}

	textarea {
		background: var(--input-background);
		color: #fff;
	}
</style>
