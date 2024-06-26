### STAGE 1: Build ###
FROM node:20.11-alpine3.19 AS build
WORKDIR /usr/src/app
###COPY package.json package-lock.json ./
###RUN npm install
COPY . .
###RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/241-cc341-sigcon-frontend /usr/share/nginx/html
