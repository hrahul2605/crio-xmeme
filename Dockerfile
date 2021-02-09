FROM node:lts
WORKDIR /home/xmeme-server

COPY package.json yarn.lock ./

RUN yarn install

# Bundle app source
COPY . .

# Build js files
RUN yarn run build

EXPOSE 8081
EXPOSE 8080
CMD ["yarn","start"]
