FROM node:16-buster-slim AS builder
WORKDIR ./
COPY *.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.23.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /dist /usr/share/nginx/html