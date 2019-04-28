# Use an official node runtime as a parent image
FROM node:8

# Install dependencies
COPY hello-world/package.json hello-world/yarn.lock /app/
WORKDIR /app/

RUN npm install

# Add rest of the client code
COPY ./hello-world/ /app/

EXPOSE 3000

CMD npm start
