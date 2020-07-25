FROM node:11

WORKDIR /photoapp/

COPY package*.json /photoapp/

RUN npm install
COPY . /photoapp

RUN chmod +x /photoapp/wait-for-it.sh
COPY wait-for-it.sh /photoapp/wait-for-it.sh
