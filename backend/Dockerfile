FROM node:16-alpine AS builder
WORKDIR ./
COPY *.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npx prisma migrate dev --name init
RUN npm run build

FROM node:16-alpine
WORKDIR ./
COPY --from=builder ./ ./
EXPOSE 8000
CMD ["npm", "run", "start"]