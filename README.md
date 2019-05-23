# React Hooks

:anchor: A demo app for React Hooks

## What are React Hooks?

> Hooks are a new addition in React 16.8, which allow you to use state and other React features without writing a class.

## Why use React Hooks?

* They avoid the confusion of `this` keyword and bind this.
* Classes don’t minify very well, and they make hot reloading flaky and unreliable
* Allow you to reuse stateful logic, without changing your component hierarchy( or wrapping them into a HOC ).
* Complex components become hard to understand.
> * Example components might perform some data fetching in `componentDidMount` and `componentDidUpdate`, 
> * However, the same `componentDidMount` method might also contain some unrelated logic that sets up event listeners, with cleanup performed in `componentWillUnmount`

* Sometimes its difficult to break components into smaller ones because the stateful logic is all over the place, making them difficult to test.

## Features of Hooks?

* Completely opt-in
* 100% backwards-compatible
* Split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)
* Hooks let you use more of React’s features without classes.

## Installation :wrench:

* Clone this repo in `git clone https://github.com/imranhsayed/react-hooks`

* `cd react-hooks`

* Run `npm install`

## Branches Information

1 [increment-counter](https://github.com/imranhsayed/react-hooks/tree/increment-counter) Simple Example for using React Hooks by incrementing counter on click of a button.
2 [todo-app](https://github.com/imranhsayed/react-hooks/tree/todo-app) Example of creating a Todo App using React Hooks

### Todo App Demo :video_camera:

![](todo-app-demo.gif)

## Commands :computer:

- `dev` Runs webpack dev server for development ( in watch mode )
- `prod` Runs webpack in production mode

