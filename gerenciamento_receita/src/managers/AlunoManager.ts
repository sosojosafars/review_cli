import { IReceita } from "../interfaces/IAluno";
import { Receita } from "../models/Aluno";
import * as fs from 'fs';
import * as path from 'path';

export class AlunoManager {

private receitas: IReceita[] = [];

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
    this.receitas = JSON.parse(dados);
  }
}

salvarReceitasNoArquivo(): void {
  const caminho = this.caminhoArquivo;
  fs.writeFileSync(caminho, JSON.stringify(this.receitas, null, 2));
}

adicionarReceita(novaReceita: IReceita): void {
    const existe = this.receitas.find(p => p.id === novaReceita.id);
    if (existe) {
      console.log(`Erro: A receita '${novaReceita.id}' já está cadastrada!`);
      return;
    }

    this.receitas.push(novaReceita);
    this.salvarReceitasNoArquivo();
    console.log(`Receita '${novaReceita.id}' cadastrada com sucesso!`);
  }

 public async deletarAluno(id: number): Promise<void> {
  const quantidadeAntes = this.receitas.length;

  this.receitas = this.receitas.filter((receita) => receita.id !== id);

  const quantidadeDepois = this.receitas.length;

  if (quantidadeDepois === quantidadeAntes) {
    console.log(`Nenhuma receita com id "${id}" foi encontrado.`);
  } else {
    await this.salvarReceitasNoArquivo();
    console.log(` Receita com id "${id}" foi removida com sucesso.`);
  }
}



public listarReceita(): void {
  if (this.receitas.length === 0) {
    console.log('Nenhum aluno cadastrado.');
    return;
  }

  console.log('--- Lista de Alunos ---');

  this.receitas.forEach(receita => {
    const alunoObj = new Receita(receita.id, receita.nome, receita.listaIngredientes, receita.calorias, receita.tempo_preparo);
    alunoObj.exibirDetalhes();
  });
}
  }

