# syntax=docker/dockerfile:1

#BASE################################################
FROM node:16.14.2-alpine AS base
WORKDIR /app
COPY ["package.json", "yarn.lock*", "./"]

#DEV#################################################
FROM base AS dev
ENV	NODE_ENV=development
RUN yarn install --frozen-lockfile
COPY . .
CMD ["yarn", "start:dev"]

#PROD################################################
FROM base AS prod
ENV	NODE_ENV=production
RUN yarn install --frozen-lockfile --production
COPY . .
RUN yarn global add @nestjs/cli
RUN yarn build
CMD ["yarn", "start:prod"]