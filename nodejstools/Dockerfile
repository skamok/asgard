FROM node:latest
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package.json package-lock.json /home/node/app/
USER root
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "backendapp.js" ]