<script lang="ts">
    import { page } from "$app/stores";
</script>

<div
    class="h-[75%] sm:max-w-7xl sm:mx-auto p-4 sm:p-0 flex justify-center items-center"
>
    <h1 class="sm:text-6xl text-lg">{$page.status}: {$page.error?.message}</h1>
</div>
