<script lang="ts">
	import Inputs from '$lib/Inputs.svelte';
</script>

<svelte:head>
	<title>Word Ladder</title>
</svelte:head>

<main>
	<h1>Word Ladder</h1>
	<Inputs />
	<p>
		Made with ❤️ at <a target="__blank" href="https://github.com/manishprivet/word-ladder">Github</a
		>
	</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}
	}

	p {
		margin-top: 50px;
	}

	p a {
		text-decoration: none;
	}
</style>
