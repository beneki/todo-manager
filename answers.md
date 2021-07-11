1. What are the ways of evaluating FE performance?

Answer:

There are two ways to evaluating FE performance one is Synthetic (lab-style) environment and the other is In the Wild
Synthetic lab-style environment where we have defined test setup in known conditions and In the Wild is putting ourselves as end user and test it with real browsers and different devices.
(I explained more in detial regarding tools that can leverage for performance evaluating)
but the most key in performance test is E2E becuase but if we wanna take action towards have a good performance is using test like lots of unit test average numbr of integration test and few good e2e test.
And beside these we also should do test coverage to be aware of not covered whereabouts in our tests and sort them out.

2. What are the tools that are essential in developing FE applications with high quality?

Answer:

Typescript
UI Framewrok (React or React Hooks approach, Angular.io, Vue for website)
if we are using auto chache (Apollo client , React-Query, Redux Toolkit Query)
If we are managing state by oursevles (Zustand for react, Recoil, Redux Toolkit)
If we are using redux (if neweset version better to use built in thunk middle ware if not can go with Redux-observables,Redux-Saga)
UI Library like Bootstrap, Semantic UI or A utility-first CSS framework like Tailwind
Preprocessor like SCSS, SASS, LESS or successor of CSS Modules like Styled Components (css in js)
ESLint
unit test and assertion library (JEST or Chai with Mocha, ...)
integration test tools (RTL(React-testing-library))
E2E test tools (like Cypress, TestCafe, Selenium)
Prettier
Husky (to ommit conflicts and mistakes before commit)
Module Bundler (can be as fast as Cutting Edge like Snowpack which just supports modern browsers or Webpack which is stable bundler, parcell, ...)
Optimizer plugins (Gzip compression or uglifying js which webpack do these stuffs under the hood for you, ...)
React-Dev-Tool
Redux-Dev-Tool
Lighthouse (plugin with cypress)

3. What are the different ways of rendering pages and what are the use-case/pros and cons for each one?

Answer:

Server side rendering , client side rendering
in server side rendering we will have more secure web app which end uesr will see just simple HTML
but in client based application(client side rendering) we are more exposed to security attacks but at the other hand we will have more faster and mroe interactive app.
other downside for client side rendering is initial load time and bootstraping the Front end framework (like react, angular or vue), SEO, Browser support, client side performance
but at other hand with client side rendering you will have pros like fast data exchange with backend (just raw data), less requests to backend (bring down cost of waiting time per each interaction with the app), totally is pretty fast

at the other hand we also have appraoches like SSR (like Gatsby) and mix of all of it like Next.js.

4. How can we ensure that FE is working well in production?

Answer:

First of all we should being sure of test that all are passed, E2E tests are passing properly.
Using react dev tool to check memory leaks or rendering problems or do profiling if any component gets sluggish.
apart from In the Wild approach (test with different browsers and devices with different type of networks speed) we can exploit test tools like google lighthouse (chrome devtool have light house built in to it) when you start using Lighthouse, it will start to examin the performance, accessibility and SEO of the page, you can also choose to have a test page in a mobile scenario where it uses an emulated mobile devices(which has slowed down cpu, slower network and etc)
another way to bring google lighthouse into your development process is to exploit your exisitng automation test for instance in Cyprss you can use Cypruss-audit plugin to allows you to use light house in your automation test and also can use lots of other feature of cypress like full network stubbing (should take automated e2e into account).
doing other performance tests like profiling using react devtool (ind dev) or using browser's own profiling panel.
if you are using llight house there are some factor that can boost performance like (first contentfull paint, speed index , time to interactive) these factors let you to evaluate user's experience and also there are lots of other tools like https://www.webpagetest.org/ which gives your better features than Lighthouse that you can and etc.
other tools like webpack can boost our performance with using optimizatins like bundlings and uglifying and other plugins.

5. What are the parameters to take into account before adding a new library to the project?

Answer:

in the first place and befire it all we should check if we can sort out the problem with not adding that library if yes how much (time or money-wise) does it cost ? then if we decided to use that library we go first with reputation check (like git stars or ...),checking bundle size, then bug reports and active support, well documented guides, then we check it move on to security check phase with tools like npm audit or snyk to check libarry vulnerabalities and then we can add it to the project.

6. Choose one component from CheapTickets.nl and explain what information do you need in order to be able to implement that component.

Answer:

For instance for implementing AirLine tickets component I need (optional: if there is a figma Ui for it )to know after clicking on find your flight how component should react, after selecting start and end date other elements behaviour , knowing edge cases for date picking or adding people to the tickets knowing edge case for multiple destination ( how many destination can be selected by end user) , validating Inputs (which is kindda trivial but in case company has its own policy) and whcih endpoints should be called, how many times is allowed to be called.
