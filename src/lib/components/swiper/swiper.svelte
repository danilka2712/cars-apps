<script lang="ts">
    import Swiper from "swiper";
    import { Navigation, Pagination, Grid } from "swiper/modules";
    import { onMount } from "svelte";

    onMount(() => {
        new Swiper(".mySwiper", {
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
                640: {
                    slidesPerView: 5,
                    grid: {
                        rows: 2,
                    },
                    spaceBetween: 30,
                },
            },
            navigation: {
                nextEl: ".button-next",
                prevEl: ".button-prev",
            },
        });
    });
</script>

<div class="swiper mySwiper lg:mt-20 mt-6">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 12</div>
    </div>
</div>

<style>
    @media (max-width: 576px) {
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
    }
    @media (min-width: 1200px) {
        .swiper-slide:nth-child(4n + 3) {
            margin-top: 100px;
        }
        .swiper {
            width: 100%;
            height: 80vh;
            margin-left: auto;
            margin-right: auto;
        }

        .swiper-slide {
            border-radius: 20px;
            text-align: center;
            font-size: 18px;
            background: #ffffff;
            height: calc((100% - 30px) / 3) !important;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
