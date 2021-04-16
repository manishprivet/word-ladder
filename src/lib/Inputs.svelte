<script lang="ts">
	import { createModel } from '../utils/index';
	import { bfsPath } from '../utils/algo';
	import type { PathData } from '../utils/algo';
	import Output from './Output.svelte';
	import { words } from '../data/words';

	let model_creation = false,
		path_calculating = false,
		word1 = '',
		word2 = '',
		error = '',
		pathData: PathData,
		calculated = false;

	let onClick = async () => {
		calculated = false;
		if (word1.length !== word2.length) return (error = 'Please enter words of Same Length');
		const wordLength = word1.length;
		if (wordLength === 0) return (error = 'Please enter all values');
		if (!words.includes(word1))
			return (error = `${word1} is not in the Dictionary. Please enter a valid English word.`);
		if (!words.includes(word2))
			return (error = `${word2} is not in the Dictionary. Please enter a valid English word.`);
		model_creation = true;
		const model = await createModel(words, wordLength);
		path_calculating = true;
		const data = await bfsPath(model, word1, word2);
		(model_creation = false), (path_calculating = false), (error = '');
		(calculated = true), (pathData = data);
	};
</script>

<div>
	<input type="text" placeholder="Enter First Word" bind:value={word1} />
	<input type="text" placeholder="Enter Second Word" bind:value={word2} />

	<button on:click={onClick}> Run </button>
</div>

{#if error}
	<p class="error">{error}</p>
{/if}

{#if model_creation}
	<p>Creating Model...</p>
{:else if path_calculating}
	<p>Calculating Path</p>
{/if}

{#if calculated}
	<Output {pathData} />
{/if}

<style lang="scss">
	div {
		display: flex;
		flex-flow: column;
		margin: 0 auto;
		max-width: 300px;
		align-items: center;
	}

	div * {
		outline: none;
	}

	p {
		font-size: 1.2em;

		&.error {
			color: red;
		}
	}

	input {
		font-size: 1.25rem;
		padding: 8px 10px;
		border-radius: 10px;
		border: 2px solid #ff3e00;
		margin-top: 20px;
	}

	button {
		border-radius: 20px;
		padding: 10px 45px;
		background: transparent;
		border: 2px solid #ff3e00;
		margin-top: 40px;
		font-size: 1.25rem;
		cursor: pointer;

        &:hover {
            background-color: #ff3e00;
            color: white;
        }
	}
</style>
