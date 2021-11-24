# FROM node:16 as builder
# COPY /frontend /app
# WORKDIR /app
# RUN npm install && npm run build

FROM node:16
COPY /frontend /app/frontend
COPY /backend /app/backend
WORKDIR /app/backend
RUN npm install
RUN npm run build --workspace=frontend
EXPOSE 4000
ENTRYPOINT [ "npm", "start" ]