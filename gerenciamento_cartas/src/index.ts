import { ICartaPokemon } from "./interfaces/IAluno";
import { AlunoManager } from "./managers/AlunoManager"
import { Carta } from "./models/Aluno"
import { promptMenuPrincipal } from "./utils/prompts";
import { promptParaDetalhesDoAluno } from "./utils/prompts";

async function main() {
  const alunoManager = new AlunoManager();

  while (true) {
    const escolha = await promptMenuPrincipal();

    if (escolha === 'Adicionar Carta') {
      const novaCarta = await promptParaDetalhesDoAluno();
      alunoManager.adicionarCarta(novaCarta);
    } else if (escolha === 'Listar Cartas') {
      alunoManager.listarCartas();
    } else if (escolha === 'Editar Carta') {
      const cartaParaEditar = await promptParaDetalhesDoAluno();
      alunoManager.editarCarta(cartaParaEditar.id, cartaParaEditar);
    } else if (escolha === 'Sair') {
      console.log('Saindo do gerenciador de alunos. Até mais!');
    } else if (escolha === 'Deletar Carta') {
      const cartaParaDeletar = await promptParaDetalhesDoAluno();
      await alunoManager.deletarCarta(cartaParaDeletar.id);
    break;
    } 
    }
  }

main();