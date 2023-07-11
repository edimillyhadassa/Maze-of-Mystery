<script>
	import AllGames from './AllGames.svelte'
	import Sobre from './Sobre.svelte'
	import Menu from './Menu.svelte'
	import Ajuda from './Ajuda.svelte'
	import Historia from './Historia.svelte'


	import { estado } from './Estado.js'
</script>
 

{#if $estado === 'menu'}
	<Menu/>
{:else if $estado === 'sobre'}
	<Sobre/>
{:else if $estado === 'game'}
	<AllGames/>
{:else if $estado === 'ajuda'}
	<Ajuda/>
{:else if $estado === 'historia'}
	<Historia/>
{/if}

