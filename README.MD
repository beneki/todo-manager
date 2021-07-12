<div>

  <h1 align="center">ToDo Manager - Manage Your Daily Tasks </h1>
  <p>
    This project is implemented with auto cache approach plus using state management with redux toolkit
    Over this project  Im using Jest, RTL , Cypress (unit, integraiton, E2E tests)
  </p>
  <p>
        Using React Hooks, Typescript, Redux Toolkit (RTK), Styled Components, Storybook, Jest, RTL, Cypres
        Webpack, ESLint, Husky, Prettier.

  </p>
  <p>
    At first load, data will be fetched form backend through RTK Query feature of Redux-Toolkit.
    When you write down your task and hit enter redux state will be updated and all of the interactions with app are handled with redux state management and just when you tap on 'Sync Data Base with tasks' Button app will use RTK Query (redux toolkit query) to send data to the backend side which will be persisted to json file inside server folder.
    Note: Just for the sake of this assignment, I'm using both automatic caching approach (with RTK Query) and state management approach.
  </P>
  <a href="https://mahyarek.site">Demo</a>

  <div>
    <strong>Using of:</strong>
    <p> :heavy_check_mark: React 17+ (React @17.0.2) </p>
    <p> :heavy_check_mark: Redux (latest version of Redux) </p>
    <p> :heavy_check_mark: Good state management (Redux toolkit) </p>
    <p> :heavy_check_mark: Responsive design </p>
    <p> :heavy_check_mark: Linting (ES Lint) </p>
    <p> :heavy_check_mark: Unit tests (Jest) </p>
    <p> :heavy_check_mark: Typescript </p>
    <p> :heavy_check_mark: CSS-in-JS(Styled Components) </p>
    <p> :heavy_check_mark: Integration/E2E tests (Cypress.io) </p>
    <p> :heavy_check_mark: Automated deployment (Github Actions with node.js CI) </p>
    <p> :heavy_check_mark: Storybook </p>

  </div>
</div>

<p>
  Note: tests are located inside cypress folder :
  cypress/e2e : for End to End tests
  cypress/jest/unit : for Unit tests
  cypress/jest/integration : for Integration tests
</p>

<h2 align="center">Install</h2>

Install with yarn:

```bash
yarn install
```

Run server:

```bash
yarn start-server
```

Run the front end:

```bash
yarn start
```

Run Unit tests (with jest):

```bash
yarn test:unit
```

Run Integration tests (with jest and RTL):

```bash
yarn test:integration
```

Run End to End tests (with cypress):

```bash
yarn test:e2e
```

Run test coverage:

```bash
yarn test:coverage
```

Run storybook:

```bash
yarn storybook
```
