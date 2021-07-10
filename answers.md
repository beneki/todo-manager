1. What are the ways of evaluating FE performance?

Answer:

there are two ways to evaluating FE performance one is Synthetic (lab-style) environment and the other is In the Wild
Synthetic lab-style environment where we have defined test setup in known conditions and In the Wild is putting ourselves as end user and test it with real browsers and different devices.
(I explained more in detial regarding tools that can leverage for performance evaluating)
but the most key in performance test is E2E becuase but if we wanna take action towards have a good performance is using test like lots of unit test average numbr of integration test and few good e2e test.

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

What are the different ways of rendering pages and what are the use-case/pros and cons for each one?

Answer:

we can render pages using conditional rendering, render props, react router (static routing and dynamic routing),
if we just wanna address render in just one page conditional rendering is a good way of handling it but it causes to cohesive code when routes grow more and it causes props drliing when we have child pages

also with react ReactDom.render we can load our page on brwoser which is good just for staring point of the application.

component's own render or return function defining other pages inside this section and handling it with conditions will lead to load a new pages.

one of the advantages of render props is that we can render out page depending on or not some conditions in child page

react router is most standard way of rendering pages when our pages grow bigger and we want do string check on address may or may not with regex, react router comes with other tools like Link and also

Redirect in react-router-dom: This is the recommended way to navigate other than the <Link> method. The downside of this method is that in cases like when we want to redirect directly from a redux action, we cannot do so.

react-router ships with new hook which called useHistory we can leverage it to access the state of the router and after this we can use push method to load other pages

History prop: every component which is immediate child of <Route> component can access history (and those childs which are not immedite child we can wrap them with withRouter to use this property) and with push function of this property we can load pages

createHistory from "history/createBrowserHistory" : if want to redirect from redux action we have to pass history to that action which increases number of arguments with this method you'll shorter a neater code

and with the dynamic approach of react-router : in static routing all the routes will be defined in single location but whith newly came dynamic routing we can load pages in nested children with routing approach this is good when we have different page loading strategy in different parts of application

How can we ensure that FE is working well in production?

Answer:

apart from In the Wild approach (test with different browsers and devices with different type of networks speed) we can exploit test tools like google lighthouse (chrome devtool have light house built in to it) when you start using Lighthouse, it will start to examin the performance, accessibility and SEO of the page, you can also choose to have a test page in a mobile scenario where it uses an emulated mobile devices(which has slowed down cpu, slower network and etc)
another way to bring google lighthouse into your development process is to exploit your exisitng automation test for instance in Cyprss you can use Cypruss-audit plugin to allows you to use light house in your automation test and also can use lots of other feature of cypress like full network stubbing (should take automated e2e into account).
doing other performance tests like profiling using react devtool (ind dev) or using browser's own profiling panel.
if you are using llight house there are some factor that can boost performance like (first contentfull paint, speed index , time to interactive) these factors let you to evaluate user's experience and also there are lots of other tools like https://www.webpagetest.org/ which gives your better features than Lighthouse that you can and etc.
other tools like webpack can boost our performance with using optimizatins like bundlings and uglifying and other plugins.

What are the parameters to take into account before adding a new library to the project?

Answer:

in the first place and befire it all we should check if we can sort out the problem with not adding that library if yes how much (time or money-wise) does it cost ? then if we decided to use that library we go first with reputation check (like git stars or ...),checking bundle size, then bug reports and active support, well documented guides, then we check it move on to security check phase with tools like npm audit or snyk to check libarry vulnerabalities and then we can add it to the project.

Choose one component from CheapTickets.nl and explain what information do you need in order to be able to implement that component.

for instance for implementing AirLine tickets component I need (optional: if there is a figma Ui for it )to know after clicking on find your flight how component should react, after selecting start and end date other elements behaviour , knowing edge cases for date picking or adding people to the tickets knowing edge case for multiple destination ( how many destination can be selected by end user) , validating Inputs (which is kindda trivial but in case company has its own policy) and whcih endpoints should be called, how many times is allowed to be called.
