FROM node:18-alpine

WORKDIR /app
COPY package.json tsconfig.json yarn.lock ./
COPY etc/docker/dev/entrypoint.sh ./
RUN chmod u+x /app/entrypoint.sh

EXPOSE 3000
ENTRYPOINT [ "/app/entrypoint.sh" ]