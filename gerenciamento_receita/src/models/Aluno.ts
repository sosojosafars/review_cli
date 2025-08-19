import { IReceita } from "../interfaces/IAluno";

export class Receita implements IReceita{
    id: number
    nome: string
    listaIngredientes: string
    calorias: number
    tempo_preparo: number

    constructor(id: number, nome: string, listaIngredientes: string, calorias: number, tempo_preparo: number) {
        this.id = id;
        this.nome = nome;
        this.listaIngredientes = listaIngredientes;
        this.calorias = calorias;
        this.tempo_preparo = tempo_preparo;
      }

    exibirDetalhes(): void {
        console.log(`Nome: ${this.nome} \nId: ${this.id} \nLista de Ingredientes: ${this.listaIngredientes}`);
        console.log(`Calorias: ${this.calorias} \nTempo de Preparo: ${this.tempo_preparo}`);
        console.log(`------------------------------`);
      }

  }

