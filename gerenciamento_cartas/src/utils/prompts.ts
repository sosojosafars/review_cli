import inquirer from 'inquirer';
import { ICartaPokemon } from '../interfaces/IAluno';
import { AlunoManager } from '../managers/AlunoManager';

export async function promptParaDetalhesDoAluno(): Promise<ICartaPokemon> {
  return await inquirer.prompt([
            {
            type: 'input',
            name: 'id',
            message: 'Qual é o ID da carta?',
          },
        {
            type: 'input',
            name: 'nome',
            message: 'Qual é o nome da carta?',
          },
          {
            type: 'input',
            name: 'tipo',
            message: 'Qual é o tipo da carta?',
          },
          {
            type: 'input',
            name: 'hp',
            message: 'Qual é o HP da carta?',
          },
          {
            type: 'input',
            name: 'ataque',
            message: 'Qual é o ataque da carta?',
          },
    ]);
}

export async function promptMenuPrincipal(): Promise<string> {
  const resposta = await inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'O que você gostaria de fazer?',
      choices: ['Adicionar Carta', 'Listar Cartas', 'Editar Carta', 'Deletar Carta', 'Sair'],
    },
  ]);

  return resposta.menu;
}
