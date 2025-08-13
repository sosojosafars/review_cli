import { CartaPokemon } from "../model/CartaPokemon";
import { ICartaPokemon } from "../model/ICartaPokemon";
 
import fs from "fs";
import path from "path";

const Database = path.join(__dirname, "../carta.json");

  function ler(): ICartaPokemon[] {
    if (!fs.existsSync(Database)) return [];
      const info = fs.readFileSync(Database, "utf-8");
      return JSON.parse(info);
    }
      
    export function salvar(p: ICartaPokemon[]): void {
      fs.writeFileSync(Database, JSON.stringify(p, null, 2));
    }

    export function adicionarCarta(novaCarta: ICartaPokemon): void {
      const p = ler();
    const duplicado = p.find(carta => {
      if (!carta.nomePokemon || !novaCarta.nomePokemon) return false;
      return carta.nomePokemon.toLowerCase() === novaCarta.nomePokemon.toLowerCase();
    });
    
      if (duplicado) {
        console.log(`Erro: Carta com nome e tipo já existe.`);
        return;
      }
    
      p.push(novaCarta);
      salvar(p);
      console.log(`Nova Carta '${novaCarta.nomePokemon}' adicionado à coleção.`);
    }
    
    export function listarTodasAsCartas(): void {
      const p = ler();
      if (p.length === 0) {
        console.log("Nenhuma carta encontrada.");
        return;
      }
      p.forEach((carta) => {
        console.log(`\nID: ${carta.idCarta}`);
        console.log(`Nome: ${carta.nomePokemon}`);
        console.log(`Tipo: ${carta.tipo}`);
        console.log(`Pontos de Vida): ${carta.hp}`);
        console.log(`Valor do Ataque: ${carta.ataque}`);
      });
    }
    
    export function editarCarta(cartaEditada: ICartaPokemon): void {
      const cartas = ler();
      const index = cartas.findIndex(e => e.idCarta === cartaEditada.idCarta);
    
      if (index === -1) {
        console.log(`Carta  com ID '${cartaEditada.idCarta}' não encontrado.`);
        return;
      }
    
      cartas[index] = cartaEditada;
      salvar(cartas);
      console.log(`Carta '${cartaEditada.nomePokemon}' editada com sucesso.`);
    }
    
    export function deletarCarta(idCarta: string): void {
      const cartas = ler();
      const index = cartas.findIndex(e => e.idCarta === idCarta);
    
      if (index === -1) {
        console.log(`Carta com ID '${idCarta}' não encontrado.`);
        return;
      }
    
      salvar(cartas);
      console.log(`Carta '${cartas[index].nomePokemon}' foi deletado.`);
    }
    
    export function iniciarLuta(idCarta1: string, idCarta2: string): ICartaPokemon[]{
      const p = ler();
      return p.filter(carta => {
      const idCarta1Valido = carta.idCarta1 ? carta.idCarta1.toLowerCase() : '';
      const idCarta2Valido = carta.idCarta2 ? carta.idCarta2.toLowerCase() : '';
      const idCarta1Busca = idCarta1 ? idCarta1.toLowerCase() : '';
      const idCarta2Busca = idCarta2 ? idCarta2.toLowerCase() : '';
      
        return idCarta1Valido.includes(idCarta1Busca) && idCarta2Valido.includes(idCarta2Busca);
      });
      }
    
    


