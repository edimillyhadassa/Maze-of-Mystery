<svelte:head>
	<link rel="stylesheet" href="/styles/jogar.css">
</svelte:head>

<script>
	import VoltarMenu from './VoltarMenu.svelte'
	import { estado } from "./Estado.js"
	import { trocarEstadoDoJogo } from './Estado.js'

	// Esta classe representa o estado da tela jogar,
	// ela guarda o estado da tabela com trues e false,
	// a quantidade de atual de elementos verdadeiros,
	// e quantidade verdadeiros necessária para ganhar.
	class EstadoTabela {
		constructor(limiteVerdadeiros, tabela) {
			this.limiteVerdadeiros = limiteVerdadeiros
			this.tabela = tabela
			this.verdadeiros = computarVerdadeiros(tabela)
		}
	}

	// não seria melhor gerar aleatoriamente?
	let tabela = [
		["P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P"],
		["A", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "P", " ", " ", " ", "P"],
		["p", " ", "P", "P", "P", "P", "P", "P", "P", "P", "P", " ", "P", " ", "p", "P", "P"],
		["p", " ", " ", " ", " ", " ", " ", " ", " ", " ", "P", " ", " ", " ", " ", "p", "P"],
		["p", " ", "P", "P", "P", "P", "P", "P", "P", " ", "P", "P", "P", "P", " ", " ", "P"],
		["p", " ", " ", " ", "P", " ", " ", " ", "P", " ", "P", " ", " ", " ", " ", " ", "P"],
		["p", " ", "P", " ", "P", "P", " ", "P", "P", " ", "P", "P", "P", "P", "p", " ", "P"],
		["p", " ", "P", " ", " ", " ", " ", "P", " ", " ", " ", " ", " ", " ", "P", " ", "P"],
		["p", " ", "P", "P", "P", "P", "P", "P", " ", "P", "P", "P", " ", "P", "P", "p", "P"],
		["p", " ", "p", " ", " ", " ", " ", "p", " ", " ", "p", " ", " ", " ", " ", " ", "P"],
		["p", " ", "p", "p", "p", "p", " ", "p", "p", " ", "p", " ", "p", "p", "p", " ", "P"],
		["p", " ", " ", "P", " ", " ", " ", "p", " ", " ", "p", " ", "p", " ", "p", " ", "P"],
		["p", " ", " ", " ", "P", " ", "p", "p", " ", "p", "p", " ", "p", " ", "p", " ", "P"],
		["p", "p", "P", " ", "P", " ", " ", "P", " ", "p", " ", " ", "p", " ", "p", " ", "P"],
		["p", " ", "P", " ", "P", " ", "P", " ", " ", "P", " ", " ", "P", " ", "P", " ", "P"],
		["P", " ", "P", " ", "P", " ", "P", " ", "P", "P", " ", "P", "P", " ", "P", " ", "P"],
		["P", " ", "P", " ", "P", " ", "P", " ", " ", "P", " ", " ", "P", " ", " ", " ", "P"],
		["P", " ", "P", " ", "P", " ", "P", "P", "P", "P", "P", " ", "P", "P", "P", "P", "P"],
		["P", " ", "P", " ", "P", " ", " ", " ", " ", " ", "P", " ", " ", " ", " ", " ", "P"],
		["P", " ", "P", " ", "P", " ", "P", "P", "P", " ", "P", "P", "P", "P", "P", " ", "P"],
		["P", " ", "P", " ", " ", " ", "P", " ", " ", " ", "P", " ", " ", " ", "P", " ", "B"],
		["P", " ", "P", " ", "P", " ", "P", " ", "P", "P", "P", " ", "P", "P", " ", " ", "P"],
		["P", " ", " ", " ", "P", " ", "P", " ", " ", " ", " ", " ", "P", " ", " ", " ", "P"],
		["P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P"]
	]

	// toda vez que entramos na tela de jogar o estado do jogo é resetado
	let estadoTabela = new EstadoTabela(10, tabela)

	// não ficaria melhor com POO?
	function computarVerdadeiros(tabela) {
		let verdadeiros = 0
		
		for (let i = 0; i < tabela.length; i++) {
			for (let j = 0; j < tabela[i].length; j++) {
				if (tabela[i][j]) {
					verdadeiros++
				}
			}
		}

		return verdadeiros
	}

	// esta função contém a lógica do jogo
	function atualizarTabela(i, j) {
		
		// atualiza o número de verdadeiros presentes na tabela
		if (estadoTabela.tabela[i][j]) {
			estadoTabela.verdadeiros--
		} else {
			estadoTabela.verdadeiros++
		}

		// troca o estado do índice na tabela que o jogador clicou
		// após a execução desta linha, o html da página é reconstruído automáticamente pelo svelte.
		estadoTabela.tabela[i][j] = !estadoTabela.tabela[i][j]

		// testa se a condição de vitória foi atendida
		if (chegouAoFim(estadoTabela)) {
			alert("Parabéns, você venceu!")
			trocarEstadoDoJogo("menu")
		}

	}

	function chegouAoFim(estadoTabela) {
		return estadoTabela.verdadeiros === estadoTabela.limiteVerdadeiros
	}

</script>

<!-- notem como utilizamos o '{' e '}' para inserir indicar ao svelte como criar o HTML dinâmicamente -->
<h1>
	Falta trocar {estadoTabela.limiteVerdadeiros - estadoTabela.verdadeiros}
</h1>

<!-- criação da tabela de forma dinâmica, similar aos laços duplos do node que vocês já estão cansados de ver -->
<table>
	{#each estadoTabela.tabela as linha, i}
		<tr>
			{#each linha as dado, j}
				<td>
					<button class="cell" on:click={() => atualizarTabela(i,j)}>
						{dado ? "V" : "F"}
					</button>
					
				</td>
			{/each}
		</tr>
	{/each}
</table>

<br>

<!-- reaproveita o botão de voltar para o menu -->
<VoltarMenu/>