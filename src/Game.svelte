<script>
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
      [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1],
      [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
  
    let playerPosition = {
      x: 0,
      y: 1
    };
  
    function movePlayer(event) {
      const { key } = event;
      let { x, y } = playerPosition;
  
      if (key === "ArrowUp" && maze[y - 1][x] === 0) {
        y -= 1;
      } else if (key === "ArrowDown" && maze[y + 1][x] === 0) {
        y += 1;
      } else if (key === "ArrowLeft" && maze[y][x - 1] === 0) {
        x -= 1;
      } else if (key === "ArrowRight" && maze[y][x + 1] === 0) {
        x += 1;
      }
  
      playerPosition = { x, y };
    }
        
  </script>
        <svelte:window on:keydown={movePlayer}/>
  <style>
    .maze {
      display: grid;
      grid-template-columns: repeat(17, 40px);
      grid-template-rows: repeat(23, 40px);
      gap: 2px;
      background-color: #000;
    }
  
    .maze-cell {
      background-color: #fff;
    }
  
    .wall {
      background-color: #333;
    }
  
    .player {
      background-color: #00f;
    }
  </style>
  
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
  