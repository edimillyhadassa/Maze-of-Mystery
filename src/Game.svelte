<svelte:head>
	<link rel="stylesheet" href="/styles/game.css">
</svelte:head>
<h1 class='nivel'>Nível 1</h1>
<link href="https://fonts.cdnfonts.com/css/the-wild-breath-of-zelda" rel="stylesheet">

                
<script>
  	import VoltarMenu from './VoltarMenu.svelte'
    import {proximaFase} from './mudarFase.js';
    import Swal from 'sweetalert2';
    import Historia from './Historia.svelte';
  let trocar = true;

    let maze = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],  //utilizamos array para formar o labirinto
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
      x: 0,        //define as coordenadas do player, onde vai começar
      y: 1
    }; 
    function chegada(x,y) {//função de chegada do labirinto 
      if(maze[y][x] === 3){  
        Swal.fire({
        title: "VOCÊ VENCEU!",
        text: "Agora ajude Thomas na próxima fase!",
        icon: "success",
      })
      .then(response => {
        if(response.isConfirmed){
          proximaFase(1);  //utilizamos para trocar de fase
        }
      })
      }
    }
  //função para movimentação do personagem, utilizando o evento das arrow keys
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
 
      
  
{#if trocar}  <!--utilizamos para inserir a historia do jogo-->
<section>
  <div>
    <Historia></Historia>
  </div>

  <button class='historia' on:click={() => {trocar = false}} >Próximo</button>
</section>
{:else}
<section>  <!--faz a leitura do array com foreach, em linhas e colunas-->
  <div class="maze" on:keydown={movePlayer}>
    {#each maze as row, y}
      {#each row as cell, x}
        <div
          class={`maze-cell ${cell === 1 ? "wall" : ""} ${
            x === playerPosition.x && y === playerPosition.y ? "player" : ""
          }`}
        />
      {/each}
    {/each}  <!--também temos a definição das corrdenadas x e y-->
  </div>
<VoltarMenu/>
</section>
{/if}

  
  
