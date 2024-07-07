FROM node:22.4.0-alpine3.19
WORKDIR /app/node-app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "container"]