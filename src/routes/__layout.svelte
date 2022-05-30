<script>
	import Navbar from "@com:top/Navbar.svelte";
</script>

<Navbar />

<main>
	<slot />
</main>

<hr class="w-50 o-50 mx-a " />
<footer class="p-abs w-100">
	<p>
		visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
	</p>
</footer>

<style>
	footer {
		color: #888;
		bottom: 0;
		left: 0;
	}
</style>
