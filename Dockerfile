FROM node:18

# Create app directory
WORKDIR /usr/dogs-api/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV docker

CMD [ "yarn", "start"]