### Pré requisitos

Para rodar esse app em sua máquina, é preciso o npm e o docker.
* npm
  ```sh
  npm install npm@latest -g
  ```
* Docker
    https://docs.docker.com/get-docker/

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/brenusaraujo/cashforce-desafio.git
   ```

2. Execute a aplicação

   ```sh
    cd app &&
    npm run compose:up
   ```
   ou
   ```sh
    cd app &&
    npm run compose:dev:up
   ```

A aplicação estará rodando na porta 5173.


### Desinstalação

1. Removendo os containers
   ```sh
    npm run compose:down
   ```
   ou
   ```sh
    npm run compose:dev:down
   ```
2. Excluindo as imagens
    ```sh
    docker rmi app-frontend app-node mysql:8.0.23
    ```
