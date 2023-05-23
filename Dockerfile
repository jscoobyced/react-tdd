FROM node:18-alpine

WORKDIR /app
COPY package.json tsconfig.json yarn.lock ./

RUN yarn

EXPOSE 3000
ENTRYPOINT [ "yarn", "start" ]