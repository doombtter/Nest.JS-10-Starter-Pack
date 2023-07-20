FROM node:16
RUN mkdir -p /var/app
WORKDIR /var/app
COPY . .
RUN npm install
RUN npm run build
RUN npm install --global pm2
EXPOSE 3000
CMD [ "pm2-runtime", "start" , "ecosystem.config.js" ]