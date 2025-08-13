import { ICartaPokemon } from "./ICartaPokemon"

export class CartaPokemon implements ICartaPokemon{
    idCarta: string
    nomePokemon: string
    tipo: string
    hp: number
    ataque: number
    idCarta1: String
    idCarta2: String

    constructor(idCarta: string, nomePokemon: string, tipo: string,  hp: number, ataque: number, idCarta1: String, idCarta2: String) {
        this.idCarta = idCarta;
        this.nomePokemon = nomePokemon;
        this.tipo = tipo;
        this.hp = hp;
        this.ataque = ataque;
        this.idCarta1 = idCarta1
        this.idCarta2 = idCarta2
    }

    exibirDetalhes: boolean = true;

  }
