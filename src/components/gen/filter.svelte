<script>
    export let //
        tags = [],
        filter;
</script>

{#each tags as tag, i}
    <input
        bind:group={filter}
        id={tag.value.replaceAll(" ", "")}
        type="radio"
        name="tag"
        value={i}
    />
    <label
        class="rx5 fw5 fade-down"
        for={tag.value.replaceAll(" ", "")}
        style="--col:{tag.color}"
    >
        {tag.value}
    </label>
{/each}

<style lang="scss">
    input + label {
        margin: 0 10px;
        min-width: 100px;
        font-size: 1.2rem;
        text-transform: uppercase;
        background: transparent;
        border: 2px solid var(--col);
        color: var(--col);
        cursor: pointer;
        padding: 5px 10px;
        transition: all 0.1s ease;
    }

    input {
        display: none;
        &:checked + label,
        &:hover + label {
            background: var(--col);
            color: #fff;
        }
    }
</style>
