import { ICartaPokemon } from "../interfaces/IAluno";

export class Carta implements ICartaPokemon{
    id: number
    nome: string
    tipo: string
    hp: number
    ataque: number

    constructor(id: number, nome: string, tipo: string, hp: number, ataque: number) {
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
        this.hp = hp;
        this.ataque = ataque;
      }

    exibirDetalhes(): void {
        console.log(`Nome: ${this.nome} \nId: ${this.id} \nTipo: ${this.tipo}`);
        console.log(`HP: ${this.hp} \nAtaque: ${this.ataque}`);
        console.log(`------------------------------`);
      }

  }

