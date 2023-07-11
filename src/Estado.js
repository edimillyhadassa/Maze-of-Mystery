import { writable } from 'svelte/store'

export let estado = writable('menu')

export function trocarEstadoDoJogo(novoEstado) {
	estado.set(novoEstado)
}
