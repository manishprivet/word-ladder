<script lang="ts">
	import type { PathData } from 'src/utils/algo';

	export let pathData: PathData;
</script>

<div>
	{#each pathData.path as node, node_index}
		<span class="word">
			{#each node as letter, letter_index}
				<span
					class={`letter ${
						node_index !== 0 && pathData.path[node_index - 1][letter_index] !== letter ? 'coloured' : ''
					}`}>{letter}</span
				>
			{/each}
            {#if node_index !== pathData.path.length - 1}
                {`--->`}
            {/if}
		</span>
	{/each}
</div>

<style lang="scss">
    div {
        margin: 30px auto;
        max-width: 300px;

        span {
            font-size: 1.3rem;
            display: inline-block;
            margin: 3px 0;

            &.coloured {
                color: #ff3e00;
            }
        }
    }
</style>
