# Escolha a imagem base do Ubuntu
FROM ubuntu:20.04

# Evite que o apt-get faça perguntas
ENV DEBIAN_FRONTEND=noninteractive

# Defina o fuso horário
ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Atualize o sistema e instale o Node.js e o MongoDB
RUN apt-get update && apt-get install -y nodejs npm mongodb

# Defina o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta que a aplicação vai usar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD service mongodb start && node server.js
