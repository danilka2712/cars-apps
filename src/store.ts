import { writable } from 'svelte/store';

export const message = writable({
    car: "Acura",
    year: 2000,
    condition: "С автомобилем все в порядке",
    connection: "По номеру телефона",
    phone: "",
});

