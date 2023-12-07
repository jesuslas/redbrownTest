FROM node:20-alpine

COPY ./package*.json /app/

WORKDIR /app
RUN npm i 
COPY . /app/

EXPOSE 3000

CMD npm run start