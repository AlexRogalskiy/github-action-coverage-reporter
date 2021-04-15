FROM node:lts-alpine

LABEL version="0.0.0-dev"
LABEL repository="https://github.com/AlexRogalskiy/github-action-coverage-reporter"
LABEL homepage="https://github.com/AlexRogalskiy/github-action-coverage-reporter"
LABEL maintainer="Nullables, Inc. <hello@nullables.io> (https://nullables.io)"

LABEL "com.github.actions.name"="GitHub action for test coverage reports"
LABEL "com.github.actions.description"="Automatically generate information on test coverage reports by provided parameters"
LABEL "com.github.actions.icon"="code"
LABEL "com.github.actions.color"="white"

# Copy project sources
COPY dist/index.js .

COPY package.json .
COPY package-lock.json .

# Install project dependencies
RUN npm install

# Run package bundle
ENTRYPOINT ["node", "/index.js"]
