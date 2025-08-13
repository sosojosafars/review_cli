import { v4 as uuidv4 } from 'uuid';

import {
  promptMenuPrincipal,
  promptParaAdicionarCarta,
  promptBuscarEvento,
  promptEditarCarta,
  promptIdSimples
} from '../src/view/Menu'; // substitua com o caminho real

import {
  adicionarCarta,
  listarTodasAsCartas,
  iniciarLuta,
  editarCarta,
  deletarCarta,
} from '../src/controller/GerenciadorDeCartas'; // substitua com o caminho real

import { ICartaPokemon } from '../src/model/ICartaPokemon'; // substitua com o caminho real

async function main() {
  while (true) {
    const escolha = await promptMenuPrincipal();

    if (escolha === 'Adicionar Nova Carta') {
      const dados = await promptParaAdicionarCarta();

      const novaCarta: ICartaPokemon = {
        ...dados,
        idCarta: uuidv4(),
        hp: 0,
        ataque: 0
      };

      adicionarCarta(novaCarta);

    } else if (escolha === 'Listar Todas as Cartas') {
      listarTodasAsCartas();

    } else if (escolha === 'Buscar Carta') {
      const { idCarta1, idCarta2 } = await promptBuscarEvento();
      const resultados = iniciarLuta(idCarta1, idCarta2);

      if (resultados.length === 0) {
        console.log("Nenhuma carta encontrada.");
      } else {
        resultados.forEach((e) => {
          console.log(e);
        });
      }

    } else if (escolha === 'Editar Carta') {
      const cartaEditada = await promptEditarCarta();
      editarCarta(cartaEditada); // <- Essa função salva as edições

    } else if (escolha === 'Deletar Carta') {
      const { id: idCarta } = await promptIdSimples("Digite o ID da carta que deseja cancelar:");
      deletarCarta(idCarta);

    } else if (escolha === 'Sair') {
      console.log('Saindo do sistema de gerenciamento de cartas Pokémon.');
      break;
    }
  }
}

main();
