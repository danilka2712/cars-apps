<script lang="ts">
    import Swiper from "swiper";
    import { Navigation, Pagination, Grid } from "swiper/modules";
    // import Swiper and modules styles

    import { onMount } from "svelte";

    let swiper;

    onMount(() => {
        swiper = new Swiper(".mySwipers", {
            modules: [Navigation, Pagination, Grid],
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    grid: {
                        rows: 1,
                    },
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
            navigation: {
                nextEl: ".next-button",
                prevEl: ".prev-button",
            },
        });
    });
</script>

<div class="swiper mySwipers">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
    </div>
</div>

<style>
    .swiper {
        width: 100%;
        height: 45vh;
        margin-left: auto;
        margin-right: auto;
    }

    .swiper-slide {
        border-radius: 20px;
        text-align: center;
        font-size: 18px;
        background: #ffffff;

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
