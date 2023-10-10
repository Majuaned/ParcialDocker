FROM node:18-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER root
RUN npm install
USER node
COPY --chown=node:node . .
EXPOSE 4000
CMD [ "node", "index.js" ]

# docker build -t imagen-parcial .
# docker run -d --name contenedor-parcial -v C:\Users\TSDSM_041\Desktop\ParcialDocker\server:/app/node_modules -p 8000:4000 imagen-parcial