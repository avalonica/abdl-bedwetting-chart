<template>
	<form
		class="event-editor"
		@submit.prevent="onSave"
	>
		<h2 class="header">
			Day Editor
			<span v-if="dateString">
				({{ dateString }})
			</span>
		</h2>

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

		<label class="note">
			Note
			<textarea
				v-model="note"
			/>
		</label>

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
			:disabled="!dirty"
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
			dirty: false,
			note: "",
			type: WettingType.WOKE_UP_WET,
		}),
		computed: {
			// Make WettingType available to template
			WettingType() { return WettingType; },

			dateString() {
				return this.wettingEvent?.date.toISOString().split("T")[0];
			},
		},
		watch: {
			wettingEvent(/** @type {WettingEvent} */ newValue) {
				this.note = newValue.note;
				this.type = newValue.type;
				this.dirty = false;
			},
			note() {
				this.dirty = true;
			},
			type() {
				this.dirty = true;
			},
		},
		methods: {
			onSave() {
				const newEvent = new WettingEvent({
					date: this.wettingEvent.date,
					note: this.note,
					type: this.type,
				});
				this.$emit("change", newEvent);

				this.dirty = false;
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
		height: 6em;
		width: 50ch;
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
