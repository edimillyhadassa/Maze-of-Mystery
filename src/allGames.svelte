<script>
    import Game from './Game.svelte';
    import Game2 from './game2.svelte';
    import {proximoNivel} from './mudarFase.js';
</script>

{#if proximoNivel == 0}
    <Game/>
{:else if proximoNivel == 1}
    <Game2/>
{/if}