FROM node:latest
WORKDIR /
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY dist/ dist/
COPY build/ build/
COPY node_modules/ node_modules/
ENTRYPOINT ["start","start"]
EXPOSE 8080