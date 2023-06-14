<svelte:head>
	<link rel="stylesheet" href="/styles/menu.css">
</svelte:head>

<script>
	import { estado } from './Estado.js'
	import { trocarEstadoDoJogo } from './Estado.js'
</script>

<h1 class='menu-titulo'>
	<div>
	<span>Maze </span> 
	<span>of </span>
	<span>Mystery </span> 
	</div>
</h1>


<button class='menu' on:click={() => trocarEstadoDoJogo('Ajuda')}>
	Ajuda
</button>

<button class='menu' on:click={() => trocarEstadoDoJogo('jogar')}>
	Jogar
</button>


<button class='menu' on:click={() => trocarEstadoDoJogo('sobre')}>
	Sobre
</button>