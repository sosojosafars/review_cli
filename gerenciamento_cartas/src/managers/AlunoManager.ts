import { ICartaPokemon } from "../interfaces/IAluno";
import { Carta } from "../models/Aluno";
import * as fs from 'fs';
import * as path from 'path';

export class AlunoManager {

private cartas: ICartaPokemon[] = [];

private get caminhoArquivo(): string {
  const dir = path.join(__dirname, '../../database');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  return path.join(dir, 'alunos.json');
}

constructor() {
  this.carregarReceitasDoArquivo();
}

carregarReceitasDoArquivo(): void {
  const caminho = this.caminhoArquivo;
  if (fs.existsSync(caminho)) {
    const dados = fs.readFileSync(caminho, 'utf-8');
    this.cartas = JSON.parse(dados);
  }
}

salvarCartasNoArquivo(): void {
  const caminho = this.caminhoArquivo;
  fs.writeFileSync(caminho, JSON.stringify(this.cartas, null, 2));
}

adicionarCarta(novaCarta: ICartaPokemon): void {
    const existe = this.cartas.find(p => p.id === novaCarta.id);
    if (existe) {
      console.log(`Erro: A carta '${novaCarta.id}' já está cadastrada!`);
      return;
    }

    this.cartas.push(novaCarta);
    this.salvarCartasNoArquivo();
    console.log(`Carta '${novaCarta.id}' cadastrada com sucesso!`);
  }

 public async deletarCarta(id: number): Promise<void> {
  const quantidadeAntes = this.cartas.length;

  this.cartas = this.cartas.filter((carta) => carta.id !== id);

  const quantidadeDepois = this.cartas.length;

  if (quantidadeDepois === quantidadeAntes) {
    console.log(`Nenhuma carta com id "${id}" foi encontrado.`);
  } else {
    await this.salvarCartasNoArquivo();
    console.log(` Carta com id "${id}" foi removida com sucesso.`);
  }
}

public editarCarta(id: number, novaCarta: ICartaPokemon): void {
  const index = this.cartas.findIndex(carta => carta.id === id);
  if (index === -1) {
    console.log(`Nenhuma carta com id "${id}" foi encontrada.`);
    return;
  }

  this.cartas[index] = novaCarta;
  this.salvarCartasNoArquivo();
  console.log(`Carta com id "${id}" foi atualizada com sucesso.`);
}


public listarCartas(): void {
  if (this.cartas.length === 0) {
    console.log('Nenhuma carta cadastrada.');
    return;
  }

  console.log('--- Lista de Cartas ---');

  this.cartas.forEach(carta => {
    const cartaObj = new Carta(carta.id, carta.nome, carta.tipo, carta.hp, carta.ataque);
    cartaObj.exibirDetalhes();
  });
}
  }

