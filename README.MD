<div>

  <h1 align="center">React Hooks, Typescript with Redux Toolkit</h1>
  <p>
    This project is implemented with auto cache approach plus using state management with redux toolkit
    Over this project  Im using Jest, RTL , Cypress (unit, integraiton, E2E tests)
  </p>
  <p>
        Using React Hooks, Typescript, Redux Toolkit (RTK), Styled Components, Storybook, Jest, RTL, Cypres
        Webpack, ESLint, Husky, Prettier
  </p>
  <p>
    At first load, data will be fetched form backend through RTK Query feature of Redux-Toolkit.
    When you write down your task and hit enter redux state will be updated and all of the communicaiton are handled with redux state management and just when you hit on 'Sync with Data Base' Button app will leverages RTK Query (redux toolkit query) to send request to backend
    Note: Just for the sake of this assignment, I'm using both automatic caching approach (with RTK Query) and state management approach
  </P>
  <a href="https://mahyarek.site">Demo</a>
</div>

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
