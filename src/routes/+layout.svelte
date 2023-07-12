<script>
    import "../app.css";
    import Footer from "../lib/components/footer/footer.svelte";
    import Navbar from "../lib/components/navbar/navbar.svelte";
</script>

<Navbar />
<main>
    <slot />
</main>

<Footer />
