<script>
	import Navbar from "@com:top/Navbar.svelte";
	import Footer from "@com:top/Footer.svelte";
</script>

<Navbar />
<main class="w-100 h-100 †c">
	<slot />
</main>
<Footer />

<style>
	:global(body) {
		min-height: 100vh;
		min-width: 100vw;
		background: #f5f5f7;
	}
</style>
