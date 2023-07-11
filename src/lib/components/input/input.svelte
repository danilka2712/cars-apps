<script lang="ts">
    export let title: string = "Номер телефона";
    export let placeholder: string = "6575676";
</script>

<label class="block">
    <span class="text-gray-700"
        ><ya-tr-span
            data-index="13-0"
            data-translated="true"
            data-source-lang="en"
            data-target-lang="ru"
            data-ch="0"
            data-type="trSpan"
            data-selected="true">{title}</ya-tr-span
        ></span
    >
    <input
        type="text"
        class="
    mt-1
    block
    w-full
    rounded-md
    border-gray-300
    shadow-sm
    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
  "
        {placeholder}
    />
</label>
