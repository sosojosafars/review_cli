import inquirer from 'inquirer';
import { ICartaPokemon } from '../model/ICartaPokemon'; 
import '../controller/GerenciadorDeCartas'

export async function promptParaAdicionarCarta(): Promise<ICartaPokemon> {
    const respostas = await inquirer.prompt([
          {
              type: 'input',
              name: 'nome',
              message: 'Digite o nome pokemon?',
              validate: input => input.trim() !== '' ? true : 'Nome não pode ser vazio.'
  
            },
            {
              type: 'input',
              name: 'tipo',
              message: 'Qual o tipo da carta?',
              validate: input => input.trim() !== '' ? true : 'Tipo não pode ser vazia.'
            },
            {
              type: 'number',
              name: 'hp',
              message: 'Quais são os pontos de vida (hp)?',
              validate: input => input.trim() !== '' ? true : 'O HP não pode ser vazio.'
            },
            {
              type: 'number',
              name: 'ataque',
              message: 'Qual o valor do ataque?',
            },
      ]);
      return respostas as ICartaPokemon;
  }
  
  export async function promptBuscarEvento(): Promise<{ idCarta1: string; idCarta2: string }> {
    return await inquirer.prompt([
      { type: 'input', name: 'idCarta1', message: 'Digite o id da carta 1:' },
      { type: 'input', name: 'idCarta2', message: 'Digite o id da carta 2:' },
    ]);
  }
  
  export async function promptEditarCarta(): Promise<ICartaPokemon> {
    const respostas = await inquirer.prompt([
      { type: 'input', name: 'id', message: 'ID da carta a editar:' },
      { type: 'input', name: 'nome', message: 'Novo nome da carta pokemon:' },
      { type: 'input', name: 'tipo', message: 'Tipo:' },
      { type: 'number', name: 'hp', message: 'Pontos de vida:' },
      { type: 'number', name: 'ataque', message: 'Valor do Ataque:' },
      {
        type: 'list',
      },
    ]);
  
    return {
      ...respostas,
      exibirDetalhes: true
    };
  }
  
  export async function promptIdSimples(mensagem: string): Promise<{ id: string }> {
    return await inquirer.prompt([
      {
        type: 'input',
        name: 'id',
        message: mensagem
      }
    ]);
  }
  
  export async function promptMenuPrincipal(): Promise<string> {
      const resposta = await inquirer.prompt([
        {
          type: 'list',
          name: 'menu',
          message: 'O que você gostaria de fazer?',
          choices: ['Adicionar Nova Carta', 'Listar Todas as Cartas', 'Editar Carta', 'Deletar Carta', 'Sair'],
        },
      ]);
    
      return resposta.menu;
    }