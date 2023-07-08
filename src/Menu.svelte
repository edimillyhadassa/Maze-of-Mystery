<svelte:head>
	<link rel="stylesheet" href="/styles/menu.css">
	<link href="https://fonts.cdnfonts.com/css/the-wild-breath-of-zelda" rel="stylesheet">
</svelte:head>

<script>
	import { estado } from './Estado.js'
	import { trocarEstadoDoJogo } from './Estado.js'
</script>

<h1 class='menu-titulo'>
	
	Maze of Mystery  
	
</h1>

<button class='menu' on:click={() => trocarEstadoDoJogo('ajuda')}>
	Como Jogar?
</button>

<button class='menu' on:click={() => trocarEstadoDoJogo('game')}>
	Jogar
</button>

<button class='menu' on:click={() => trocarEstadoDoJogo('sobre')}>
	Créditos
</button>

