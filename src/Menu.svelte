<svelte:head>
	<link rel="stylesheet" href="/styles/menu.css">
</svelte:head>

<script>
	import { estado } from './Estado.js'
	import { trocarEstadoDoJogo } from './Estado.js'
</script>

<h1>
	Maze of Mystery
</h1>

<button class='menu' on:click={() => trocarEstadoDoJogo('jogar')}>
	Jogar
</button>

<br />

<button class='menu' on:click={() => trocarEstadoDoJogo('sobre')}>
	Sobre
</button>

<button class='menu' on:click={() => trocarEstadoDoJogo('ajuda')}>
	ajuda
</button>