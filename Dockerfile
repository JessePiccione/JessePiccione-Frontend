FROM node:latest
WORKDIR /
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY dist/ dist/
COPY build/ build/
RUN npm run install-prod
ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["npm","start"]