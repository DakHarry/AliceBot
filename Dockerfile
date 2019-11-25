FROM node:11-alpine AS build

RUN mkdir -p /usr/src/app

RUN npm install -g typescript

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN tsc

FROM node:11-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install --production

COPY --from=build /usr/src/app/dist .

EXPOSE 5999

ENTRYPOINT ["node", "index.js"]