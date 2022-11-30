FROM node:16-buster-slim AS builder
WORKDIR ./
COPY *.json ./
RUN npm install
COPY . .
RUN npx prisma generate
RUN npx prisma migrate dev
RUN npm run build

FROM node:16-buster-slim
WORKDIR ./
COPY --from=builder ./ ./
EXPOSE 8000
CMD ["npm", "run", "start"]