import { IReceita } from "./interfaces/IAluno";
import { AlunoManager } from "./managers/AlunoManager"
import { Receita } from "./models/Aluno"
import { promptMenuPrincipal } from "./utils/prompts";
import { promptParaDetalhesDoAluno } from "./utils/prompts";

async function main() {
  const alunoManager = new AlunoManager();

  while (true) {
    const escolha = await promptMenuPrincipal();

    if (escolha === 'Adicionar Receita') {
      const novoAluno = await promptParaDetalhesDoAluno();
      alunoManager.adicionarReceita(novoAluno);
    } else if (escolha === 'Listar Receitas') {
      alunoManager.listarReceita();
    } else if (escolha === 'Sair') {
      console.log('Saindo do gerenciador de alunos. Até mais!');
    } else if (escolha === 'Deletar Receita') {
      const alunoParaDeletar = await promptParaDetalhesDoAluno();
      await alunoManager.deletarAluno(alunoParaDeletar.id);
    break;
    } 
    }
  }

main();