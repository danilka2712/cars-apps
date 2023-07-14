<script lang="ts">
    export let title = "";
    export let options: string[] = [];
    export let addOption = options[1];
</script>

<label class="block">
    <span class="text-gray-700">{title}</span>
    <select
        required
        bind:value={addOption}
        class="
        block
        w-full
        mt-1
        rounded-md
        border-gray-300
        shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
      "
    >
        {#each options as o}
            <option>{o}</option>
        {/each}
    </select>
</label>
