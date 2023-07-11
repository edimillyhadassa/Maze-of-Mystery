import { writable } from "svelte/store"
let proximoNivel = writable(0)
let proximaFase = function(value) {
    proximoNivel.set(value)  //utilizado para mudar os niveis do jogo
}
export {proximoNivel, proximaFase}