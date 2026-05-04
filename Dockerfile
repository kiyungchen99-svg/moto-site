FROM node:22-alpine
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install --omit=dev
COPY server/ ./
COPY client/dist /app/client/dist

ENV NODE_ENV=production
EXPOSE 5000
CMD ["node", "src/index.js"]
