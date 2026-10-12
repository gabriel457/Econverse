# Teste Front-End — Econverse

Projeto desenvolvido para o teste técnico da vaga de Desenvolvedor Front-End Júnior da Econverse.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Sass (SCSS)
- HTML semântico e CSS responsivo

## Funcionalidades

- Consumo dos dados de produtos fornecidos em JSON.
- Exibição de produtos em vitrines reutilizáveis.
- Navegação horizontal entre os produtos por meio de setas.
- Modal com informações do produto selecionado.
- Cabeçalho com busca, ícones e navegação.
- Seções de categorias, parceiros e marcas.
- Newsletter com campos de nome, e-mail e aceite dos termos.
- Layout adaptável a diferentes tamanhos de tela.

## Requisitos

É necessário ter o Node.js e o npm instalados.

## Como instalar e executar

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/SEU-USUARIO/teste-front-end.git
cd teste-front-end
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir a aplicação no navegador, normalmente `http://localhost:5173/`.

## Build de produção

Para verificar os tipos do TypeScript e gerar a versão de produção:

```bash
npm run build
```

Para visualizar localmente a versão compilada:

```bash
npm run preview
```

Os arquivos gerados pelo build ficam na pasta `dist`.

## Dados dos produtos

Os produtos são obtidos do JSON fornecido no teste técnico:

https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json

A configuração de proxy em `vite.config.ts` permite acessar esse recurso durante o desenvolvimento local, contornando a restrição de CORS do navegador.

Para publicar a aplicação em uma hospedagem estática, é necessário configurar uma solução equivalente para a requisição dos produtos.

## Observação

O formulário da newsletter e os controles de navegação que não possuem integração de backend são apresentados como elementos de interface. O projeto não implementa checkout nem cadastro real de usuários.

## Validação

O projeto foi validado com o comando `npm run build`, que executa a verificação TypeScript e a compilação do Vite.