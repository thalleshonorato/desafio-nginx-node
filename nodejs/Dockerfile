FROM node:alpine

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./server.js ./
COPY ./db.js ./
RUN npm install

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

EXPOSE 5000

CMD /wait && npm start