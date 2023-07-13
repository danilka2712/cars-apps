<script>
    const menus = [
        {
            name: "Быстрая продажа авто без объявления на «Авито» и «Дроме»",
            href: "/",
        },
        {
            name: "Выкуп запретного авто с ограничениями и без документов",
            href: "vykup-zapretnogo-avto-s-ogranicheniyami-i-bez-dokumentov",
        },
        {
            name: "Выкуп битого авто",
            href: "/vykup-bitogo-avto",
        },
        {
            name: "Выкуп авто на металлолом",
            href: "/vykup-avto-na-metallolom",
        },
        {
            name: "Выкуп спецтехники и большегрузов",
            href: "/vykup-spectehniki-i-bolshegruzov",
        },
    ];
</script>

<footer class="bg-white">
    <div class="max-w-7xl lg:mx-auto mx-4 py-14">
        <div class="">
            <img class="mb-8" src="/logotype.svg" alt="" />
        </div>
        <div class="lg:flex">
            <div class="lg:w-1/3">
                <a
                    class="lg:text-lg font-semibold text-black/70"
                    href="tel:+73812592639">+7 3812 592 639</a
                >
                <p class="w-80 mt-3 lg:text-lg">
                    Работаем с 8:00 до 22:00, без выходных, для вашего удобства.
                </p>
                <p class="lg:text-lg font-semibold mt-4 text-black/70">
                    Омская область, г. Омск
                </p>
            </div>
            <div
                class="lg:w-2/3 grid lg:grid-cols-2 lg:gap-4 lg:pl-12 mt-8 lg:mt-0 divide-y lg:divide-y-0"
            >
                {#each menus as menu}
                    <a class="lg:py-0 py-3" href={menu.href}>{menu.name}</a>
                {/each}
            </div>
        </div>
    </div>
</footer>
