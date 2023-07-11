<script>
    import "../app.css";
    import Footer from "../lib/components/footer/footer.svelte";
    import Navbar from "../lib/components/navbar/navbar.svelte";
</script>

<div class="">
    <Navbar />

    <slot />

    <Footer />
</div>
