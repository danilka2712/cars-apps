<script>
    let mobileMenuOpen = false;
    import { slide } from "svelte/transition";
    import { quintInOut, quintOut } from "svelte/easing";
</script>

<header class="">
    <nav
        class="mx-auto fixed lg:relative flex max-w-7xl items-center justify-between p-4 py-8 lg:py-4 lg:px-0"
        aria-label="Global"
    >
        <div class="flex lg:flex-1 z-40">
            <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Выкуп авто</span>
                <img class="h-10 w-auto" src="/logotype.svg" alt="" />
            </a>
        </div>
        <div class="flex lg:hidden z-40">
            {#if !mobileMenuOpen}
                <button
                    on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
                    type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
            {:else}
                <button
                    on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
                    type="button"
                    class=" -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                    <span class="sr-only">Close menu</span>
                    <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            {/if}
        </div>

        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
                href="tel:+73812592639"
                class=" font-semibold leading-6 text-gray-900"
                >+7 3812 592 639 | 24/7
            </a>
        </div>
    </nav>
    {#if mobileMenuOpen}
        <div class="lg:hidden" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="fixed inset-0 z-10" />
            <div
                transition:slide={{
                    delay: 100,
                    duration: 500,
                    easing: quintInOut,
                    axis: "y",
                }}
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#f8f8f8] px-4 py-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
                <div class="mt-16 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6 p-4">
                            <div class="-mx-3">
                                <a
                                    href="#"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                                    >Оставить заявку, чтобы узнать сумму выкупа
                                    автомобиля</a
                                >
                                <a
                                    href="#"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                                    >Главная страница</a
                                >
                                <a
                                    href="#"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-50"
                                    >Выкупленные авто</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
</header>
