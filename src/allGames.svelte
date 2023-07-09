<script>
    import Game from './Game.svelte';
    import Game2 from './Game2.svelte';
    import Game3 from './game3.svelte';
    import {proximoNivel, proximaFase} from './mudarFase.js';
    proximaFase(0)
</script>

{#if $proximoNivel == 0}
    <Game3 />
{:else if $proximoNivel == 1}   
    <Game2 />
{:else if $proximoNivel == 2}
    <Game3 />
{/if}