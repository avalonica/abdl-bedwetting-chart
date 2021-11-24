<template>
	<form class="event-editor">
		<input
			v-model="date"
			type="date"
		/>

		<textarea
			v-model="note"
		/>
	</form>
</template>

<script>
	export default {
		name: "EventEditor",
		data: () => ({
			date: new Date(),
			note: "",
		}),
	};
</script>

<style scoped lang="scss">
	.event-editor {
		--input-background: #304457;
		// --input-background: #1a202c;
		background: #1a202c;
		border-radius: .5rem;
		padding: 1rem;
		border: solid 1px #4a5568;
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
