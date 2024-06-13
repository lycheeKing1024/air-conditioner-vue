FROM node:lts-alpine as builder


WORKDIR /app
COPY . .

RUN npm install && npm run build

FROM nginx:alpine

# ENV AC_NGINX_PORT=8877 AC_NGINX_DOMAIN=localhost
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 8877