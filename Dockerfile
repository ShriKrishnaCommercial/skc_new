FROM node:18-alpine AS base
LABEL authors="yashc"
COPY . /skc_new
WORKDIR /skc_new
RUN ls
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm","run","start"]