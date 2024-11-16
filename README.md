# Lista de Filmes Favoritos
Um aplicativo de gerenciamento de filmes favoritos que permite ao usuário adicionar, editar, excluir e visualizar informações sobre seus filmes preferidos. Desenvolvido com React, Next.js, Apollo Client, GraphQL, MongoDB, e outras tecnologias modernas.

## Visão Geral
Este projeto é uma aplicação Full Stack que implementa operações CRUD para praticar habilidades de desenvolvimento front-end e back-end.

## Funcionalidades
Adicionar Filmes: Inclua novos filmes na lista. <br/>
Editar Filmes: Atualize o título e a descrição de filmes existentes.<br/>
Excluir Filmes: Remova filmes da lista.<br/>
Exibir Lista de Filmes: Visualize todos os filmes cadastrados em uma interface amigável.<br/>

## Tecnologias Utilizadas
### Front-End
React <br/>
Next.js (estrutura de pasta app) <br/>
Apollo Client (para consumo da API GraphQL)<br/>
Tailwind CSS (para estilização)<br/>
Framer Motion (para animações)<br/>

### Back-End
Node.js<br/>
Express<br/>
Apollo Server (para GraphQL)<br/>
MongoDB (banco de dados)<br/>
Mongoose (modelagem de dados)<br/>

## Como Rodar o Projeto
### Pré-requisitos
Node.js (versão 16 ou superior)<br/>
MongoDB (instância local ou Atlas)<br/>
Gerenciador de pacotes npm ou yarn<br/>

### Passo 1: Clonar o Repositório
``` git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git ``` <br/>
``` cd NOME_DO_REPOSITORIO ```

### Passo 2: Configurar o Back-End
Navegue até a pasta backend:
``` cd backend ```

Instale as dependências:
```npm install```

Configure o arquivo .env: Crie um arquivo .env na pasta backend e adicione sua string de conexão com o MongoDB:
```MONGODB_URI=mongodb://localhost:27017/listaFilmes```

Inicie o servidor:
```npm start```

### Passo 3: Configurar o Front-End
Navegue até a pasta frontend
```cd ../frontend```

Instale as dependências:
```npm install```

Inicie o servidor de desenvolvimento:
```npm run dev```

Acesse o aplicativo no navegador em: http://localhost:3000

# Como Usar
Abra a aplicação no navegador (http://localhost:3000).
Adicione um novo filme usando o formulário.
Visualize a lista de filmes na interface principal.
Edite ou exclua filmes usando os botões correspondentes na lista.

# Estrutura do Projeto
## Frontend
frontend/ <br/>
├── app/ <br/>
│   ├── components/<br/>
│   │   ├── AddMovie.tsx<br/>
│   │   ├── MoviesList.tsx<br/>
│   │   └── UpdateMovie.tsx<br/>
│   ├── page.tsx<br/>
│   └── layout.tsx<br/>
├── public/<br/>
└── styles/<br/>
## backend
backend/<br/>
├── src/<br/>
│   ├── schema.ts<br/>
│   └── server.ts<br/>
├── package.json<br/>
└── .env

# Futuras Melhorias
Adicionar busca e filtros avançados.
Implementar autenticação para proteger os dados do usuário.
Adicionar imagens para os filmes.
Melhorar as animações usando Framer Motion.

# Contribuições
Sinta-se à vontade para abrir issues ou enviar pull requests. Adoraríamos receber suas contribuições!

# Licença
Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.




















