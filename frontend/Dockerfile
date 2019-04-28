# Use an official node runtime as a parent image
FROM node:8

WORKDIR /app/

# Install dependencies
COPY hello-world/package.json hello-world/yarn.lock /app/

RUN npm install

# Add rest of the client code
COPY . /app/
# We install node_modules in /app/, then move it to avoid overwriting it
# with the COPY above
RUN mv /app/node_modules /app/hello-world/

EXPOSE 3000

WORKDIR /app/hello-world/

CMD npm start
