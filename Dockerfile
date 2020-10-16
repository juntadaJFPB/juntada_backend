FROM node:12.16-alpine
WORKDIR /usr/src/portarias
COPY package*.json ./
RUN npm install --silent --only=production
COPY . .
ENV NODE_ENV=production
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "production" ]