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
                    pagination: {
                        el: ".swiper-pagination",
                        dynamicBullets: true,
                    },
                },
                640: {
                    slidesPerView: 3,
                    grid: {
                        rows: 1,
                    },
                    spaceBetween: 30,
                },
                1024: {
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
    let items = [
        { title: "Toyota Rav 4", img: "/img/photo_2023-07-12_23-42-37.webp" },
        { title: "Toyota Platz", img: "/img/photo_2023-07-13_00-02-46.webp" },
        { title: "Suzuki Aerio", img: "/img/photo_2023-07-13_00-03-04.webp" },
        { title: "Audi 100", img: "/img/photo_2023-07-13_13-33-15.webp" },
        {
            title: "Mercedes-Benz MB100",
            img: "/img/photo_2023-07-13_13-31-09.webp",
        },
        { title: "Ford Escape", img: "/img/photo_2023-07-13_00-02-38.webp" },
        { title: "BYD F3", img: "/img/photo_2023-07-13_13-33-10.webp" },
        { title: "Honda CR-V", img: "/img/photo_2023-07-13_13-31-19.webp" },
        { title: "Honda Civic", img: "/img/photo_2023-07-13_13-31-23.webp" },
        { title: "Nissan Navara", img: "/img/photo_2023-07-13_13-33-21.webp" },
        { title: "УАЗ-3303", img: "/img/photo_2023-07-13_13-38-54.webp" },
        { title: "ВАЗ-2114", img: "/img/photo_2023-07-13_13-38-49.webp" },
    ];
</script>

<div class="swiper mySwiper lg:mt-20 mt-6">
    <!-- Additional required wrappper -->
    <div class="swiper-wrapper">
        {#each items as item}
            <div class="swiper-slide">
                <div class="h-3/4">
                    <img
                        class="h-full w-full object-cover rounded-t-xl"
                        src={item.img}
                        alt=""
                    />
                </div>
                <p class="lg:pt-2 lg:text-lg lg:p-0 p-6 text-xl font-semibold">
                    {item.title}
                </p>
            </div>
        {/each}
    </div>
    <div class="swiper-pagination" />
</div>

<style>
    @media (max-width: 1024px) {
        .swiper {
            width: 100%;
            height: 45vh;
            margin-left: auto;
            margin-right: auto;
            padding-bottom: 50px;
        }
        .swiper-pagination {
            --swiper-theme-color: #16a34a;
        }
        .swiper-slide {
            border-radius: 20px;
            text-align: start;
            font-size: 18px;
            background: #ffffff;

            display: flex;
            flex-direction: column;
        }
    }
    @media (min-width: 1024px) {
        .swiper-slide:nth-child(4n + 3) {
            margin-top: 100px;
        }
        .swiper {
            width: 100%;
            height: 80vh;
            min-height: 80vh;
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
            flex-direction: column;
        }
    }
</style>
