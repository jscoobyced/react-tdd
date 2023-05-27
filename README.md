# Getting Started with React and TDD

Test Driven Development (TDD) is a software development approach where tests are written before the implementation of the code. It follows a cycle of "Red-Green-Refactor" to guide the development process.

This template project aims at:
- providing a starting point to create a React application with support for
  - Unit Test, using [Jest](https://jestjs.io/), a delightful JavaScript Testing Framework with a focus on simplicity. This project enables a watch-mode by default, so the added or modified tests are automatically run.
  - E2E Test using [Cypress](https://cypress.io). With Cypress, you can easily create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds.
- containerized environment, so all you need is the `docker` and `docker-compose` commands configured on your machine

## Quick start

Clone this repository and jump to [It's playtime](#its-playtime).

## How to start from scratch

Follow the [Start from Scratch](docs/scratch.md) to start from a blank slate.

# It's playtime

Change to the project directory, and run:
```
docker-compose up tests
```

This will run the sample test

![Unit Tests](docs/img/jest-unit-tests.png)

As you add or modify tests, they will automatically run.

Open another terminal and run

```
docker-compose up reactapp
```
to start this shell project. You can open a browser to [http://reactapp.localhost](http://reactapp.localhost), it supports hot-reload so any change made in the `src` or `public` folder will be updated in the browser automatically.

Note: this project uses [https://traefik.io/](https://traefik.io/) to proxy the React application, and it will automatically make the `http://reactapp.localhost` domain available. The application will also be available on http://reactapp.localhost:3000 for the E2E tests to run. But you don't have to use the port 3000 for development.

## End-to-end tests

### Natively
Open another terminal and run
```
yarn cypress
```
The first time, you will be presented with this screen:

![Cypress main screen](docs/img/cypress-welcome-small.png)

Click the `E2E Testing` button (it should show as `Configured` in green text below the link). The following will be presented to you:  

![Cypress choose browser](docs/img/cypress-choose-browser-small.png)

Once you have selected a browser, clink on the `Start E2E Testing in <browser name>`

A new window opens:

![Cypress E2E test screen](docs/img/cypress-e2e-main-screen-small.png)

You can click on the `configuration_check` test and the following result will show:

![Cypress E2E test screen](docs/img/cypress-e2e-result-small.png)


You are now ready to start your TDD experience!

### Cypress in docker


You can then run the following command:
```
docker-compose up cypress
```

The output will show as below:

![Cypress E2E test screen](docs/img/cypress-e2e-docker-small.png)


# Credits

This is initially inspired from https://learntdd.in/react/ and enhanced with docker compose, code coverage and code quality via GitHub actions.
