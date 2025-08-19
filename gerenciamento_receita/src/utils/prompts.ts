import inquirer from 'inquirer';
import { IReceita } from '../interfaces/IAluno';
import { AlunoManager } from '../managers/AlunoManager';

export async function promptParaDetalhesDoAluno(): Promise<IReceita> {
  return await inquirer.prompt([
            {
            type: 'input',
            name: 'id',
            message: 'Qual é o ID da receita?',
          },
        {
            type: 'input',
            name: 'nome',
            message: 'Qual é o nome da receita?',
          },
          {
            type: 'input',
            name: 'listaIngredientes',
            message: 'Quais são os ingredientes da receita?',
          },
          {
            type: 'input',
            name: 'calorias',
            message: 'Quantas calorias a receita tem?',
          },
          {
            type: 'input',
            name: 'tempo_preparo',
            message: 'Qual é o tempo de preparo da receita (em minutos)?',
            validate: input => input.trim() !== '' ? true : 'O tempo de preparo não pode ser vazio'
          },
    ]);
}

export async function promptMenuPrincipal(): Promise<string> {
  const resposta = await inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'O que você gostaria de fazer?',
      choices: ['Adicionar Receita', 'Listar Receitas', 'Deletar Receita', 'Sair'],
    },
  ]);

  return resposta.menu;
}
