<script>
	import '../app.css';
	import Header from '$lib/components/templates/Header.svelte';
	import Footer from '$lib/components/templates/Footer.svelte';
</script>

<Header />
<slot />
<Footer />
