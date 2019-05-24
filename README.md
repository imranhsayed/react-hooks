# React Hooks

:anchor: A demo app for React Hooks

## What are React Hooks?

> * A Hook is a special function that lets you “hook into” React state and lifecycle features.
> * Hooks are a new addition in React 16.8, which allow you to use state and other React features without writing a class.
> * For example, useState is a Hook that lets you add React state to function components. Hooks dont work inside classes

## When would I use a Hook?
 * If you write a function component and realize you need to add some state to it, previously you had to convert it to a class 

## Why use React Hooks?

* They avoid the confusion of `this` keyword and bind this.
* Classes don’t minify very well, and they make hot reloading flaky and unreliable
* Allow you to reuse stateful logic, without changing your component hierarchy( or wrapping them into a HOC ).
* Complex components become hard to understand.
> * Example components might perform some data fetching in `componentDidMount` and `componentDidUpdate`, 
> * However, the same `componentDidMount` method might also contain some unrelated logic that sets up event listeners, with cleanup performed in `componentWillUnmount`

* Sometimes its difficult to break components into smaller ones because the stateful logic is all over the place, making them difficult to test.

## Difference between State of a Class Vs Hook?

* Unlike this.state, the state in hooks doesn’t have to be an object. We can keep it a number, string or an array.
* You can use the State Hook more than once in a single component

```ruby
function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
``` 

## Features of Hooks?

* Completely opt-in
* 100% backwards-compatible
* Split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data)
* Hooks let you use more of React’s features without classes.
* Reuse functionality between components. 

## Rules of Hooks

* Hooks should be called at the top level. Don’t call Hooks inside loops, conditions, or nested functions
* Hooks should be called from React function components. Don’t call Hooks from regular JavaScript functions
* There are linter plugins for check this rule [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

## Types of Hooks?

#### 1. State Hook : `useState()`
   * `useState` takes initialState and returns a pair ( an array with two items ): the current state value
    and a function that lets you update it
   
   ```ruby
   const [count, setCount] = useState( initialState );
   ```
   
   * Calling `useState()` like above, declares a state variable (count).The first time our component renders, its value will be equal to initialState.
    The next time our component renders its value will be equal to current State ( which will be same as initial state 
    unless the setCount() updates its value )
    
   * When `setCount( 1 )` is called with a new value, React re-renders your component, passing new state (count) value to it.  
   
   * `useState` is similar to this.setState in a class, except it doesn’t merge the old and new state together
   
#### 2. Effect Hook: `useEffect()`

  * Operations like data fetching, subscriptions, or manually changing the DOM from React components are called “side effects” or "effects",
  because they can affect other components and can’t be done during rendering.
  
  * `useEffect`, adds the ability to perform side effects from a function component. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes
  * By default, React runs the effects after every render — including the first render.
  * Just like with useState, you can use more than a single effect in a component
  
#### 3. `useConText()`

  * `useConText` lets you subscribe to React context without introducing nesting 

#### 4. `useReducer()`
  
  * `useReducer` lets you manage local state of complex components with a reducer   
  
## How does React associate Hook calls with components?

  * React keeps track of the currently rendering component.
  * There is an internal list of `“memory cells”` associated with each component. They’re just JavaScript objects where we can put some data.
  * When you call a Hook like `useState()`, it reads the current cell (or initializes it during the first render), and then moves the pointer to the next one.
  * This is how multiple useState() calls each get independent local state.

## How do lifecycle methods correspond to Hooks?

* `constructor`: Function components don’t need a constructor. You can initialize the state in the useState call.
* `getDerivedStateFromProps`: Schedule an update while rendering instead.
* `render`: This is the function component body itself.
* `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`: The useEffect Hook can express all combinations of these (including less common cases).
* `componentDidCatch` and `getDerivedStateFromError`: There are no Hook equivalents for these methods yet, but they will be added soon.



## Installation :wrench:

* Clone this repo in `git clone https://github.com/imranhsayed/react-hooks`

* `cd react-hooks`

* Run `npm install`

## Branches Information

1. [increment-counter](https://github.com/imranhsayed/react-hooks/tree/increment-counter) Simple Example for a State Hook `useState`,  by incrementing counter on click of a button.
2. [todo-app](https://github.com/imranhsayed/react-hooks/tree/todo-app) Example of creating a Todo App using React Hooks

### Todo App Demo :video_camera:

![](todo-app-demo.gif)

## Commands :computer:

- `dev` Runs webpack dev server for development ( in watch mode )
- `prod` Runs webpack in production mode

