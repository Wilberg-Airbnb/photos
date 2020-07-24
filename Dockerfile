FROM node:11

WORKDIR /app/

COPY package*.json /app/

RUN npm install
COPY . /app

COPY wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/wait-for-it.sh