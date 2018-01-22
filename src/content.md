# React Router

## What's a Router ???

> A router connects multiple networks and routes network traffic between them. It’s

### Client-side vs Server-side router

Common:

- Run appropriate code when URL changes

Difference:

- Host environment (browser vs server)
- Serving pages/data vs Rendering component

---

## Why do we need a Router ???

- We want to avoid hard reload (It's a SPA)
- Smooth transition & animations between navigations
- Resolve the issue of URL and page resource mapping (<Route />)

### Source of truth

Redux: *App data*
Router: *URL*

### A bit history

In the past, to change URL, the *only* way we can do is through `window.location`.

But the problem is: it *hard* reloads the page.

What's the work around ???

Twitter uses the famous hashbang (#!) URL:

But,

- Ugly URL doesn't map correctly to the server side resources
- It's fragile that breaks progressive enhancement
- SEO unfriendly without hacks

### History API to rescue

The History API is notable for the ability to update the browser’s history and location ***without*** necessitating a page reload:

* pushState  —  pushes a new location onto the history stack
* replaceState  —  overwrites the current location on the stack
* back()  —  navigates to the previous location on the stack
* forward()  —  navigates to the next location on the stack
* go(index)  —  navigates to a location on the stack, in either direction.

---

## How are we gonna use it ???

### Good point for code split

The PRPL pattern from PWA (progressive web app) suggests:

- Push and render initial route
- Precache and Lazy load remaining routes

This is a common practise to ease the giant bundle issue of single page apps.

### Decision to make

React Router V3

OR

React Router V4+

### Static vs Dynamic

- Static: part of the App's initialization phase, it's **NOT** [renderable](https://github.com/ReactTraining/react-router/blob/v3/modules/Route.js#L33-L39)

Same as:

```js
export default [
  { path: '/', component: () => <Home /> },
  { path: '/task', component: () => <Task/> },
  { path: '/tasks/:id', component: () => <TaskItem /> }
];
```

- Dynamic: react component baked into App's render tree, it's [renderable](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/Route.js#L105-L126)

### Some ongoing work in our app

[Old Routes](https://github.com/itriage/employer_web_client/blob/03962b2702310a75d061c2db3e6bb96241f13c22/src/routes/index.jsx)

[New Routes](https://github.com/itriage/employer_web_client/blob/master/src/routes/index.jsx)