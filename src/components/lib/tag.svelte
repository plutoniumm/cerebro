<script>
    import tags from "@data/tags.json";
    import { colorChange } from "$lib/process";

    export let //
        text = "all";

    const { value, color } = tags.find((current) => current.id === text);
</script>

<div
    class="rx5 tag fw5"
    style={`--col:${color};--bg:${colorChange.lighten(color, 0.33, 0.5)}`}
>
    {value}
</div>

<style lang="scss">
    .tag {
        font-size: 0.8rem;
        display: inline;
        min-width: 50px;
        text-transform: uppercase;
        background: var(--bg);
        color: var(--col);
        padding: 5px 10px;
    }
</style>
