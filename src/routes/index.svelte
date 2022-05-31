<script context="module">
</script>

<script>
	import Filter from "@com:gen/filter.svelte";

	const tags = [
		{ value: "Everything", color: "black" },
		{ value: "System Design", color: "ui:blue" },
		{ value: "Decision Tree", color: "ui:green" },
		{ value: "Problem Solving", color: "ui:purple" },
		{ value: "Communication", color: "ui:orange" },
	];

	let filter = 0;
</script>

<section>
	<div>
		<Filter {tags} bind:filter />
	</div>
	{tags[filter].value}
</section>

<style>
	section {
		margin-top: 5rem;
	}
</style>
