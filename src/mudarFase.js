import { writable } from "svelte/store"
let proximoNivel = writable(0)
let proximaFase = function(value) {
    proximoNivel.set(value)
}
export {proximoNivel, proximaFase}