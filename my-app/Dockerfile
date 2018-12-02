FROM node:8.10

RUN mkdir -p /app
ADD . /app
WORKDIR /app

RUN npm i

EXPOSE 80
CMD ["npm", "start"]