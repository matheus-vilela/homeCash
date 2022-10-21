# SISTEMA PARA GERENCIAMENTO DE RESIDÊNCIAS
---

## HomeCash
HomeCash é um sistema que facilita o gerenciamento financeiro de uma residência, possibilitando que os moradores possam se cadastrar e adicionar despesas de forma simples e intuitiva. 

Desenvolvido por Gabriel Geovanni e Matheus Vilela para a disciplina Engenharia de Software II da UFOP. 

Professor Igor Muzetti

---

## Links

- [Especificação de requisitos](https://github.com/matheus-vilela/homeCash/blob/main/docs/Especifica%C3%A7%C3%A3o%20de%20Requisitos%20.pdf)
- [Projeto Arquitetural](https://github.com/matheus-vilela/homeCash/blob/main/docs/Projeto%20Arquitetural%20-%20HomeCash.pdf)
- [Figma](https://www.figma.com/file/a7q5fFGwnNSC089dIaPvUc/HomeCash?node-id=0%3A1) 
- [Link da apresentação](https://drive.google.com/drive/folders/1PHVY8BrhfcjPlCRnA14A0fJfO6f9FsTn?usp=sharing)

---

## Technologies
O projeto foi desenvolvido com as seguintes tecnologias:

- Node.js
- Docker
- PostgreSQL
- Express
- Jest
- React
- Vite
- Vitest
- Axios
- StyledComponents
- Figma

---

## How to use

Para clonar e rodar essa aplicação é necessário ter o git, docker, node v16.8.0 ou superior, ... instalados na sua máquina.

```
# Clone this repository
$ git clone https://github.com/matheus-vilela/homeCash.git

# Go into the reposity
$ cd homeCash
```

```
# Create PostgreSQL container
$ sudo docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

```
# Go to docker terminal
$ docker exec -t pg bash

# Go to PostgreSQL container
$ psql -U root

# Then create the database and tables using scheme.sql to run the commands
```

Run Server:

```
# open server
$ cd server

# Install dependencies
$ npm install or yarn

# Start Server
$ yarn dev

```
Run Web:
```
# open web
$ cd web

# Install dependencies
$ npm install or yarn

# Start Web
$ yarn dev
```

