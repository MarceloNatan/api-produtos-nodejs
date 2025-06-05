# API de Gerenciamento de Produtos / Product Management API

## Descrição Geral / Overview

Esta API permite o gerenciamento completo de produtos, incluindo criação, atualização, listagem, consulta e remoção. É ideal para sistemas de e-commerce, inventário ou qualquer aplicação que necessite de controle de produtos.

This API enables full product management, including creation, update, listing, retrieval, and deletion. It is ideal for e-commerce systems, inventory, or any application requiring product control.

---

## Objetivos / Objectives

- Facilitar o gerenciamento de produtos de forma segura e eficiente.
- Permitir integração fácil com outros sistemas.
- Garantir escalabilidade e manutenção simples.

- Facilitate secure and efficient product management.
- Allow easy integration with other systems.
- Ensure scalability and simple maintenance.

---

## Funcionalidades / Features

- Cadastro de produtos / Product registration
- Atualização de produtos / Product update
- Listagem de produtos / Product listing
- Consulta de produto por ID / Product retrieval by ID
- Remoção de produtos / Product deletion

---

## Tecnologias Utilizadas / Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT para autenticação / JWT for authentication

---

## Exemplos de Requisições e Respostas / Request and Response Examples

### 1. Criar Produto / Create Product

**Requisição / Request:**
```http
POST /api/products
Content-Type: application/json

{
    "name": "Notebook",
    "price": 3500,
    "description": "Notebook 15 polegadas",
    "stock": 10
}
```

**Resposta / Response:**
```json
{
    "id": "60f7c2b5e1b1c8a1d4e8a123",
    "name": "Notebook",
    "price": 3500,
    "description": "Notebook 15 polegadas",
    "stock": 10,
    "createdAt": "2024-06-01T12:00:00Z"
}
```

### 2. Listar Produtos / List Products

**Requisição / Request:**
```http
GET /api/products
```

**Resposta / Response:**
```json
[
    {
        "id": "60f7c2b5e1b1c8a1d4e8a123",
        "name": "Notebook",
        "price": 3500,
        "description": "Notebook 15 polegadas",
        "stock": 10
    }
]
```

---

## Instruções de Instalação / Installation Instructions

1. Clone o repositório / Clone the repository:
     ```bash
     git clone https://github.com/seu-usuario/seu-repositorio.git
     cd seu-repositorio
     ```

2. Instale as dependências / Install dependencies:
     ```bash
     npm install
     ```

3. Configure as variáveis de ambiente / Configure environment variables:
     - Crie um arquivo `.env` com as informações do banco de dados e JWT.

4. Inicie o servidor / Start the server:
     ```bash
     npm start
     ```

5. Acesse a API em / Access the API at:
     ```
     http://localhost:3000/api/products
     ```

---

## Contribuição / Contribution

Contribuições são bem-vindas! Siga as diretrizes no arquivo `CONTRIBUTING.md`.

Contributions are welcome! Please follow the guidelines in the `CONTRIBUTING.md` file.

---

## Licença / License

Este projeto está licenciado sob a licença MIT.

This project is licensed under the MIT license.