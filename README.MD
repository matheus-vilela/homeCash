# SISTEMA PARA GERENCIAMENTO DE RESIDÊNCIAS
---

## HomeCash
HomeCash é um sistema que facilita o gerenciamento financeiro de uma residência, possibilitando que os moradores possam se cadastrar e adicionar despesas de forma simples e intuitiva. 

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
```

