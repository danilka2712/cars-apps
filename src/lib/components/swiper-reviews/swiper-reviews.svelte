<script lang="ts">
    import Swiper from "swiper";
    import { Navigation, Pagination, Grid } from "swiper/modules";
    // import Swiper and modules styles
    import Youtube from "svelte-youtube-embed";
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
        <div class="swiper-slide">
            <Youtube
                id="RpzmtDH3u0Q"
                animations={false}
                --overlay-bg-color="#ffffff0"
            >
                <img
                    slot="thumbnail"
                    alt="A video on svelte"
                    class="w-full h-full object-cover rounded-lg"
                    src="/img/photos_627e0b4b0ec0d.png"
                />
                <button type="button" name="play">
                    <img class="w-16" src="/icons/youtube.svg" alt="youtube" />
                </button>
            </Youtube>
        </div>
        <div class="swiper-slide">
            <Youtube
                id="NaTjoNHdd3Q"
                animations={false}
                --overlay-bg-color="#ffffff0"
            >
                <img
                    slot="thumbnail"
                    alt="A video on svelte"
                    class="w-full h-full object-cover rounded-lg"
                    src="/img/photos_62cd590d8fbde.png"
                />
                <button type="button" name="play">
                    <img class="w-16" src="/icons/youtube.svg" alt="youtube" />
                </button>
            </Youtube>
        </div>
        <div class="swiper-slide">
            <Youtube
                id="F-x6TnxsUbA"
                animations={false}
                --overlay-bg-color="#ffffff0"
            >
                <img
                    slot="thumbnail"
                    alt="A video on svelte"
                    class="w-full h-full object-cover rounded-lg"
                    src="/img/photos_62bc714584778.png"
                />
                <button type="button" name="play">
                    <img class="w-16" src="/icons/youtube.svg" alt="youtube" />
                </button>
            </Youtube>
        </div>
        <div class="swiper-slide">
            <Youtube
                id="W8IX8XouZE4"
                animations={false}
                --title-color="#111111"
                --overlay-bg-color="#ffffff0"
            >
                <img
                    slot="thumbnail"
                    alt="A video on svelte"
                    class="w-full h-full object-cover rounded-lg"
                    src="/img/photos_62bc714584778.png"
                />
                <button type="button" name="play">
                    <img class="w-16" src="/icons/youtube.svg" alt="youtube" />
                </button>
            </Youtube>
        </div>
    </div>
</div>

<style>
    .swiper {
        width: 100%;
        height: fit;
        margin-left: auto;
        margin-right: auto;
    }

    .swiper-slide {
        border-radius: 20px;
        font-size: 16px;
        background: #ffffff;
    }
</style>
