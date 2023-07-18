<script lang="ts">
    import Input from "$lib/components/input/input.svelte";
    import Select from "$lib/components/select/select.svelte";
    import SwiperReviews from "$lib/components/swiper-reviews/swiper-reviews.svelte";
    import Swiper from "$lib/components/swiper/swiper.svelte";
    import { onMount } from "svelte";
    import { message } from "../../store";
    import type { telegramMessage } from "../../interface";
    import { env } from "$env/dynamic/public";
    let map;

    async function sendTelegramMessage(message: telegramMessage) {
        buttonSumbit = "Отправка...";
        buttonActive = true;
        const token = env.PUBLIC_TELEGRAM_TOKEN;
        const chatId = "596613157";

        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,

                text: `<b>${new Date().toLocaleDateString()}\nНовый заказ! </b>\n\nМарка авто: ${
                    message.car
                }\nГод: ${message.year.toFixed()}\nСостояние авто: ${
                    message.condition
                }\nСвязь: ${message.connection}\nТелефон: ${message.phone}`,
                parse_mode: "html",
            }),
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            if (data.ok) {
                buttonSumbit = "Отправлено!";
                setTimeout(() => {
                    buttonSumbit = "Отправить заявку";
                    buttonActive = false;
                }, 30000);
            } else {
                alert("Ошибка, попробуйте еще раз!");
            }
        } catch (error) {
            console.error(error);
        }
    }
    let buttonSumbit = "Отправить заявку";
    let buttonActive = false;
    onMount(() => {
        // @ts-ignore
        DG.then(function () {
            // @ts-ignore
            map = DG.map("map", {
                center: [54.99410750336992, 73.37092667653471],
                zoom: 13,
            });

            // @ts-ignore
            DG.marker([54.99410750336992, 73.37092667653471])
                .addTo(map)
                .bindPopup("Омск");
        });
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            showAll = false;
        }
    });

    const sity = [
        "Азовский район",
        "Большереченский район",
        "Большеуковский район",
        "Горьковский район",
        "Знаменский район",
        "Исилькульский район",
        "Калачинский район",
        "Колосовский район",
        "Кормиловский район",
        "Крутинский район",
        "Любинский район",
        "Марьяновский район",
        "Москаленский район",
        "Муромцевский район",
        "Называевский район",
        "Нижнеомский район",
        "Нововаршавский район",
        "Одесский район",
        "Оконешниковский район",
        "Омский район",
        "Павлоградский район",
        "Полтавский район",
        "Русско-Полянский район",
        "Саргатский район",
        "Седельниковский район",
        "Таврический район",
        "Тарский район",
        "Тевризский район",
        "Тюкалинский район",
        "Усть-Ишимский район",
        "Черлакский район",
        "Шербакульский район",
    ];
    let showAll = true;

    function toggleShowAll() {
        showAll = !showAll;
    }
</script>

<svelte:head>
    <title>Выкуп спецтехники | Омск</title>
    <meta
        name="description"
        content="Срочный выкуп спецтехники в любом состоянии. Выезжаем на осмотр сразу после обращения! · Более. 200 положительных отзывов. Выкупаем. дороже. конкурентов."
    />
    <script type="application/ld+json">
        {
          "@context": "http://www.schema.org",
          "@type": "AutomotiveBusiness",
          "name": "Выкуп авто | Омск",
          "url": "https://vykup-auto-omsk.ru/",
          "logo": "https://vykup-auto-omsk.ru/logotype.svg",
          "description": "Срочный выкуп спецтехники в любом состоянии. Выезжаем на осмотр сразу после обращения! · Более. 200 положительных отзывов. Выкупаем. дороже. конкурентов.",
          "address": {
             "@type": "PostalAddress",
             "addressRegion": "Омск",
             "addressCountry": "Россия"
          },
          "telephone": "+7 3812 592 639"
        }
    </script>
</svelte:head>
<section
    id="main"
    class="lg:mx-auto mx-4 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-0"
>
    <div class="lg:w-1/2">
        <div class="">
            <h1 class="lg:text-5xl text-3xl font-medium mb-4">
                Выкуп спецтехники и большегрузов <span class="text-green-600"
                    >в Омске</span
                >
            </h1>
            <p class="lg:text-lg text-black/70">
                Хотите продать спецтехнику или большегруз прямо сегодня? Честно
                оценим его стоимость и купим в течение часа.
            </p>
        </div>
        <div class="mt-8">
            <h1 class="mb-4 font-semibold lg:text-lg">
                Отвечаем за скорость, надежность и честность сделки
            </h1>
            <ul
                class="flex flex-col gap-1 lg:text-lg text-black/70 list-disc list-outside pl-5 marker:text-green-600 marker:text-2xl"
            >
                <li>Оформляем сделку за час.</li>
                <li>
                    Справедливо оцениваем стоимость автомобиля в интересах обеих
                    сторон.
                </li>
                <li>
                    Выплачиваем всю сумму на месте оформления договора удобным
                    для вас способом.
                </li>
                <li>
                    Бесплатно забираем авто на эвакуаторе в пределах Омской
                    области.
                </li>
                <li>Выкупаем любые марки авто от 1991 года выпуска.</li>
            </ul>
        </div>
    </div>
    <div class="lg:w-1/2 lg:flex lg:justify-end mt-14 lg:mt-0">
        <div
            class="lg:p-12 p-6 lg:w-[90%] bg-white/80 rounded-xl lg:drop-shadow-[0px_0px_100px_rgba(22,163,74,0.20)] lg:shadow-none shadow-md"
        >
            <h2
                class="text-2xl lg:font-semibold font-medium lg:leading-9 tracking-tight"
            >
                Оставьте заявку, чтобы узнать сумму выкупа вашего автомобиля
            </h2>
            <form
                method="GET"
                on:submit|preventDefault={() => sendTelegramMessage($message)}
                class="pt-6 gap-4 flex flex-col"
            >
                <Input
                    bind:text={$message.car}
                    title="Марка автомобиля*"
                    placeholder="Например, Volvo"
                />
                <div>
                    <label for="customRange2" class="text-gray-700"
                        >Год выпуска: {$message.year.toFixed()}</label
                    >
                    <input
                        type="range"
                        class="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent accent-green-600 bg-neutral-200"
                        bind:value={$message.year}
                        min="1995"
                        max="2023"
                        step="0.3"
                        id="customRange2"
                    />
                    <div>
                        <ul class="flex justify-between 1 text-[12px]">
                            <li>1991</li>
                            <li>2002</li>

                            <li>2009</li>
                            <li>2016</li>
                            <li>2023</li>
                        </ul>
                    </div>
                </div>
                <Select
                    title="Состояние автомобиля"
                    options={[
                        "С автомобилем все в порядке",
                        "Автомобиль битый",
                        "Запретный авто с ограничениями и без документов",
                        "Находится в кредите",
                        "Годен только на металлолом",
                        "Спецтехника или большегруз",
                        "Выкуп после смерти хозяина",
                        "Другое",
                    ]}
                    bind:addOption={$message.condition}
                />
                <Select
                    title="Как с вами связаться"
                    options={[
                        "По номеру телефона",
                        "По Whatsapp",
                        "По Telegram",
                        "По Viber",
                    ]}
                    bind:addOption={$message.connection}
                />
                <Input
                    title="Номер для связи*"
                    placeholder="Например, 8-999-888-888"
                    bind:text={$message.phone}
                />
                <button
                    disabled={buttonActive}
                    type="submit"
                    class="p-3 bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out disabled:bg-slate-300 rounded-lg font-medium text-white"
                    >{buttonSumbit}</button
                >
            </form>
        </div>
    </div>
</section>

<section id="purchased" class="mb-12 lg:mt-32 mt-20 mx-4 lg:mx-0">
    <div class=" max-w-7xl mx-auto flex">
        <div class="lg:w-2/3">
            <h1 class="lg:text-5xl text-3xl font-medium pb-4">
                <span class=" text-green-600">Выкупленные</span> авто
            </h1>
            <p class="lg:text-lg text-black/70">
                С 2018 года выкупили более 1000 автомобилей в Омске.
            </p>
        </div>
        <div class="lg:flex hidden justify-end items-end lg:w-1/3 gap-16">
            <button
                aria-pressed="false"
                type="button"
                name="arrow-left"
                class="flex gap-3 items-center text-green-600 hover:text-green-700 font-medium button-prev hover:-translate-x-2 p-3 transition duration-300 ease-in-out text-sm"
            >
                <img class="h-[9px]" src="/icons/arrowsleft.svg" alt="" />
                Назад
            </button>
            <button
                aria-pressed="false"
                type="button"
                name="arrow-right"
                class="flex gap-3 items-center text-green-600 hover:text-green-700 font-medium button-next hover:translate-x-2 p-3 transition duration-300 ease-in-out text-sm"
            >
                Вперед
                <img
                    class="h-[9px] rotate-180"
                    src="/icons/arrowsleft.svg"
                    alt=""
                />
            </button>
        </div>
    </div>

    <Swiper />
</section>
<section id="transaction" class="lg:mb-32 mb-24 max-w-7xl lg:mx-auto mx-4">
    <div>
        <h1 class="lg:text-5xl text-3xl font-medium lg:mb-14 mb-8">
            Как происходит сделка
        </h1>
    </div>
    <div class="flex flex-col lg:flex-row justify-between lg:gap-20 gap-8">
        <div class="flex flex-col">
            <div class="flex lg:gap-6 gap-4 items-center mb-4">
                <div
                    class="h-16 w-16 rounded-lg bg-green-100 items-center justify-center flex text-green-700 lg:text-xl text-lg font-semibold"
                >
                    1
                </div>
                <h2
                    class="lg:text-2xl
                text-xl
                font-medium"
                >
                    Совместная сделка
                </h2>
            </div>
            <p class=" text-black/70 lg:text-lg">
                Вы оставляете заявку, указываете данные об авто и контактный
                телефон. Далее связываемся с вами, задаем уточняющие вопросы и
                договариваемся о месте и времени осмотра автомобиля.
            </p>
        </div>
        <div class="flex flex-col">
            <div class="flex lg:gap-6 gap-4 items-center mb-4">
                <div
                    class="h-16 w-16 rounded-lg bg-green-100 items-center justify-center flex text-green-700 lg:text-xl text-lg font-semibold"
                >
                    2
                </div>
                <h2
                    class="lg:text-2xl
                text-xl font-medium"
                >
                    Совместная сделка
                </h2>
            </div>
            <p class=" text-black/70 lg:text-lg">
                Приезжаем в оговоренное место, проводим визуальный осмотр.
                Обращаем внимание на состояния кузова, салона, мотора, узлов,
                агрегатов. Затем озвучиваем сумму сделки.
            </p>
        </div>
        <div class="flex flex-col">
            <div class="flex lg:gap-6 gap-4 items-center mb-4">
                <div
                    class="h-16 w-16 rounded-lg bg-green-100 items-center justify-center flex text-green-700 lg:text-xl text-lg font-semibold"
                >
                    3
                </div>
                <h2
                    class="lg:text-2xl
                text-xl font-medium"
                >
                    Совместная сделка
                </h2>
            </div>
            <p class=" text-black/70 lg:text-lg">
                Заключаем договор купли-продажи и расчета удобным для вас
                способом. Оформляем все документы на месте осмотра. Нет
                необходимости ехать в офис.
            </p>
        </div>
    </div>
</section>
<section id="brand" class="lg:mb-32 mb-24 mx-4 lg:mx-0">
    <div class="flex lg:flex-row flex-col-reverse lg:pr-16 lg:space-x-20">
        <div class="lg:w-1/2 lg:mt-0 mt-8">
            <img class="h-48 object-cover lg:h-full" src="/cars.png" alt="" />
        </div>
        <div class="lg:w-1/2">
            <h2 class="lg:text-5xl text-3xl font-medium mb-4">
                <span class="text-green-600">Марки автомобилей,</span> которые мы
                выкупаем
            </h2>
            <p class="lg:text-lg text-black/70">
                На самом деле мы выкупаем любые марки автомобилей, но вы все
                равно можете найти свой любимый логотип.
            </p>
        </div>
    </div>
</section>
<section id="customers" class="max-w-7xl lg:mx-auto mx-4">
    <div class="flex lg:mb-12 mb-8">
        <div class="lg:w-2/3">
            <h1 class="lg:text-5xl text-3xl font-medium mb-4">
                <span class="text-green-600">Довольные</span> клиенты
            </h1>
            <p class="text-black/70 lg:text-lg lg:w-96">
                К нам обратились более 3500 человек. Некоторые из них оставили
                отзывы в текстовом и видео-формате.
            </p>
        </div>
        <div class="lg:flex hidden justify-end items-end w-1/3 gap-16">
            <button
                aria-pressed="false"
                type="button"
                name="arrow-left"
                class="flex gap-3 items-center text-green-600 hover:text-green-700 font-medium prev-button hover:-translate-x-2 p-3 transition duration-300 ease-in-out text-sm"
            >
                <img
                    class="h-[9px]"
                    src="/icons/arrowsleft.svg"
                    alt="arrow-left"
                />
                Назад
            </button>
            <button
                aria-pressed="false"
                type="button"
                name="arrow-right"
                class="flex gap-3 items-center text-green-600 hover:text-green-700 font-medium next-button hover:translate-x-2 p-3 transition duration-300 ease-in-out text-sm"
            >
                Вперед
                <img
                    class="h-[9px] rotate-180"
                    src="/icons/arrowsleft.svg"
                    alt="arrow-right"
                />
            </button>
        </div>
    </div>
    <SwiperReviews />
</section>

<section class="lg:mb-32 mb-24 lg:mt-24 mt-12 max-w-7xl lg:mx-auto mx-4">
    <div class="lg:w-1/2">
        <h1 class="lg:text-5xl text-3xl font-medium lg:mb-14 mb-8">
            Почему к нам стоит
            <span class=" text-green-600">обратиться</span>
        </h1>
    </div>
    <div class="flex flex-col lg:flex-row justify-between lg:gap-20 gap-8">
        <div class="flex flex-col lg:w-1/3">
            <div class="flex lg:gap-6 gap-4 items-center mb-4">
                <div
                    class="h-16 w-16 rounded-lg bg-green-100 items-center justify-center flex text-green-700 lg:text-xl text-lg font-semibold"
                >
                    <img src="icons/flash.svg" alt="flash" />
                </div>
                <h2
                    class="lg:text-2xl
                text-xl font-medium"
                >
                    Скорость
                </h2>
            </div>
            <p class=" text-black/70 lg:text-lg">
                Отвечаем в течение 10-15 минут. Приезжаем на место оценки и
                заключаем сделку в течение 1 часа.
            </p>
        </div>
        <div class="flex flex-col lg:w-1/3">
            <div class="flex lg:gap-6 gap-4 items-center mb-4">
                <div
                    class="h-16 w-16 rounded-lg bg-green-100 items-center justify-center flex text-green-700 lg:text-xl text-lg font-semibold"
                >
                    <img src="icons/thumbs-up.svg" alt="thumbs-up" />
                </div>
                <h2
                    class="lg:text-2xl
                text-xl font-medium"
                >
                    Честность
                </h2>
            </div>
            <p class=" text-black/70 lg:text-lg">
                Справедливо оцениваем автомобиль — можем предложить до 94% от
                рыночной стоимости. Работаем не только в собственных интересах,
                но и в ваших.
            </p>
        </div>
        <div class="flex flex-col lg:w-1/3">
            <div class="flex lg:gap-6 gap-4 items-center mb-4">
                <div
                    class="h-16 w-16 rounded-lg bg-green-100 items-center justify-center flex text-green-700 lg:text-xl text-lg font-semibold"
                >
                    <img
                        src="/icons/coins-stacked-02.svg"
                        alt="coins-stacked"
                    />
                </div>
                <h2
                    class="lg:text-2xl
                text-xl font-medium"
                >
                    Выгодность
                </h2>
            </div>
            <p class=" text-black/70 lg:text-lg">
                Бесплатно забираем автомобиль на эвакуаторе из любой части
                Омской области. Выплачиваем всю сумму в день сделки удобным для
                вас способом.
            </p>
        </div>
    </div>
</section>

<section class=" max-w-7xl lg:mx-auto mx-4 mb-20">
    <div class="">
        <h1
            class=" lg:text-center lg:text-5xl text-3xl font-medium lg:mb-8 mb-4"
        >
            Выкупаем автомобили <br />
            <span class=" text-green-600">по всей области</span>
        </h1>
        <p class="text-black/70 lg:text-center lg:text-lg">
            Посмотрите сами, если не верите:
        </p>
    </div>
    <div class="lg:mt-12 mt-8 w-full flex lg:flex-row flex-col justify-between">
        <ul
            class="grid list-disc marker:text-green-600 marker:text-2xl lg:grid-cols-4 grid-cols-1 list-inside w-full gap-2"
        >
            {#if !showAll}
                {#each sity.slice(0, 6) as s, i}
                    <li class="lg:text-lg text-black/70">{s}</li>
                {/each}
            {:else}
                {#each sity as s, i}
                    <li class="lg:text-lg text-black/70">{s}</li>
                {/each}
            {/if}
        </ul>
        <button
            aria-pressed="false"
            type="button"
            name="overflow"
            class="text-green-600 w-fit hover:text-green-700 font-medium mt-6 flex lg:hidden"
            on:click={toggleShowAll}
        >
            {showAll ? "Скрыть" : "Показать все"}
        </button>
    </div>
</section>

<section
    class="lg:py-20 py-10 lg:max-w-7xl lg:mx-auto mx-4 lg:flex flex-col-reverse lg:flex-row lg:space-x-20 lg:items-center"
>
    <div class="lg:w-1/2 w-full">
        <div id="map" class="h-96" />
    </div>
    <div class="lg:w-1/2">
        <h1 class=" lg:text-5xl text-3xl lg:mt-0 mt-8 font-medium mb-4">
            Наши
            <span class=" text-green-600">контакты</span>
        </h1>
        <p class="lg:text-lg lg:w-96 text-black/70">
            Работаем с 8:00 до 22:00, без выходных, для вашего удобства.
        </p>
        <div class="my-4">
            <p class="lg:text-lg lg:w-96 text-black/70">Телефон</p>
            <a class="lg:text-lg text-black/70 font-medium" href="/"
                >+7 3812 592 639</a
            >
        </div>
        <div class="mb-4">
            <p class="lg:text-lg lg:w-96 text-black/70">Адрес выкупа</p>

            <a class="lg:text-lg text-black/70 font-medium" href="/"
                >Омская область, г. Омск</a
            >
        </div>
    </div>
</section>

<style lang="postcss">
    :global(html) {
        background-color: #f8f8f8;
    }
</style>
