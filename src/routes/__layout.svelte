<script>
	import Navbar from "@com:top/Navbar.svelte";
	import Footer from "@com:top/Footer.svelte";
</script>

<Navbar />
<main class="w-100 †c">
	<slot />
</main>
<Footer />

<style>
	:global(body) {
		background: #f5f5f7;
	}
</style>
