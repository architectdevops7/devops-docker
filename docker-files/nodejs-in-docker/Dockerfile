FROM node:14-alpine

ARG NODE_ENV=production

ENV APP_HOME=/app
WORKDIR $APP_HOME

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]

