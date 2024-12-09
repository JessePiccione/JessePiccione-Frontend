FROM node:latest
WORKDIR /
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY dist/ dist/
COPY build/ build/
RUN npm run install-prod
ENTRYPOINT ["npm","start"]