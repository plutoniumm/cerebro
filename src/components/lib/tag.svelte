<script>
    export let //
        text = "Button",
        color = "#afa";

    import { createEventDispatcher } from "svelte";

    const dispatcher = createEventDispatcher();

    const dispatchData = () =>
        dispatcher("click", {
            event: "click",
            component: "Button",
            value: text,
        });
</script>

<button class="rx5 fw5" on:click={dispatchData} style="--col:{color}">
    {text}
</button>

<style lang="scss">
    button {
        min-width: 100px;
        font-size: 1.2rem;
        text-transform: uppercase;
        background: transparent;
        border: 2px solid var(--col);
        color: var(--col);
        cursor: pointer;
        padding: 5px 10px;
        transition: all 0.1s ease;
        &:hover {
            background: var(--col);
            color: #fff;
        }
    }
</style>
