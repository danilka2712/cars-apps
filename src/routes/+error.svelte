<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="h-screen sm:max-w-7xl sm:mx-auto p-4 sm:p-0">
    <h1>{$page.status}: {$page.error?.message}</h1>
</div>
