# Docker + Django + React App Tutorial

Code repo for a series of tutorials on setting up an app with Docker Compose, Django, and Create React App. Each tutorial has its own branch (because it was difficult to get deployments to work from subdirectories).

- Part One: [Creating an app with Docker Compose, Django, and Create React App](https://dev.to/englishcraig/creating-an-app-with-docker-compose-django-and-create-react-app-31lf): [`development`](https://github.com/cfranklin11/docker-django-rea/tree/development)
- Part Two: [Docker, Django, and React: Building Assets and Deploying to Heroku](https://dev.to/englishcraig/docker-django-react-building-assets-and-deploying-to-heroku-24jh): [`production-heroku`](https://github.com/cfranklin11/docker-django-react/tree/production-heroku)
- Part Three: Docker, Django, and React Deployed to DigitalOcean via Travis CI: TBD

## Dependencies

- All tutorials require [Docker](https://docs.docker.com/docker-for-mac/install/)
- Deploying to Heroku requires the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Setting up the app

Checkout the branch for a given tutorial, and run `docker-compose build`

## Running the app on local

Run `docker-compose up` to see messages in the terminal. Run `docker-compose start` to run the app in the background.
