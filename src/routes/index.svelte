<script context="module">
</script>

<script>
	import Card from "@com:lib/card.svelte";

	import Filter from "@com:gen/filter.svelte";
	import tags from "@data/tags.json";

	import methods from "@data/methods.json";

	let filter = 0;
</script>

<section>
	<Filter {tags} bind:filter />
	<!-- VALUE: {tags[filter].value} -->
</section>
<section>
	<div class="ƒ ƒ∑ ∆-ar">
		{#each methods as method}
			<Card data={method} />
		{/each}
	</div>
</section>

<style>
	section {
		margin-top: 5rem;
	}
</style>
