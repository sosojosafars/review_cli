
 cria um arquivo package.json ------>   npm init -y
 adicionar node modelus  ----->   npm install typescript ts-node-dev @types/node --save-dev
 cria o tsconfig.json  ------>  npx tsc --init


Configuração básica do ts.config =>

{  "compilerOptions": {
    "target": "ES2020",               // gera código moderno
    "module": "CommonJS",             // módulo padrão do Node
    "outDir": "./dist",               // saída dos .js compilados
    "rootDir": "./src",               // código fonte em src/
    "strict": true,                   // checagem mais rigorosa
    "esModuleInterop": true,          // facilitar importações CommonJS
    "skipLibCheck": true
  }
}

No package.json, adicionar:

"scripts": {
  "start": "ts-node src/index.ts",
  "build": "tsc"
}


CONECTAR VSCODE COM GITHUB

COMANDOS NO TERMINAL
git init
git add .
git commit -m "Comentar Commit"
git remote add origin link do repositório
git branch -M main
git push -u origin main 
