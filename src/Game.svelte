<svelte:head>
	<link rel="stylesheet" href="/styles/game.css">
</svelte:head>
<h1 class='nivel'>Nível 1</h1>
<script>
  	import VoltarMenu from './VoltarMenu.svelte'
    import {proximaFase} from './mudarFase.js';
    import Swal from 'sweetalert2';
    import Historia from './Historia.svelte';
  let trocar = true;

    let maze = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 3],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1],
      [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    
    let playerPosition = {
      x: 0,
      y: 1
    }; 
    function chegada(x,y) {
      if(maze[y][x] === 3){
        Swal.fire({
        title: "VOCÊ VENCEU!",
        text: "Agora ajude Thomas na próxima fase!",
        icon: "success",
      })
      .then(response => {
        if(response.isConfirmed){
          proximaFase(1);
        }
      })
      }
    }
    
  
    function movePlayer(event) {
      const { key } = event;
      let { x, y } = playerPosition;
  
      if (key === "ArrowUp" && (maze[y - 1][x] === 0 || maze[y - 1][x] === 3) ) {
        y -= 1;
        chegada(x,y)
      } else if (key === "ArrowDown" && (maze[y + 1][x] === 0 || maze[y + 1][x] === 3 )){
        y += 1;
        chegada(x,y)
      } else if (key === "ArrowLeft" && (maze[y][x - 1] === 0 || maze[y][x - 1] === 3)){
        x -= 1;
        chegada(x,y)
      } else if (key === "ArrowRight" && (maze[y][x + 1] === 0 || maze[y][x + 1] === 3)) {
        x += 1;
        chegada(x,y)
      }
  
      playerPosition = { x, y };
    }
  </script>
        <svelte:window on:keydown={movePlayer}/>
 
  
{#if trocar}
<section>
  <div>
    <Historia></Historia>
  </div>

  <button class='historia' on:click={() => {trocar = false}} >Próximo</button>
</section>
{:else}
<section>
  
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div class="maze" on:keydown={movePlayer}>
    {#each maze as row, y}
      {#each row as cell, x}
        <div
          class={`maze-cell ${cell === 1 ? "wall" : ""} ${
            x === playerPosition.x && y === playerPosition.y ? "player" : ""
          }`}
        />
      {/each}
    {/each}
  </div>
<VoltarMenu/>
</section>
{/if}
  
  