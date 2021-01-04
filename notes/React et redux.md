---
tags: [JS/React]
title: React et redux
created: '2020-12-25T15:54:06.568Z'
modified: '2020-12-26T22:09:17.564Z'
---

# React et redux



# Config React 
Add react
```html
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script> 
```
Add JSX

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script> 
```

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Test</title>
        <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
        <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin>
        </script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script> 
    </head>
    <body>
        
        <div id="container"></div>
        
        <script type="text/babel">
        ReactDOM.render(
          <h1>Hello, React!</h1>,
          document.getElementById('container')
        )
        </script>
    </body>
</html>
```



# Crée un app react

```bash
npx create-react-app my-app
cd my-app
npm start                                  
```

# File tree/Structure

```Markdown
public:
  index.html
src:
  index.css
  index.js
```
index.html: The HTML page template.
index.js: The entry point of our app.
style.css: the stylesheet for our project.
package.json: holds various metadata relevant to the project, like dependencies.

(Can use "StackBlitz")
https://stackblitz.com/edit/react-nnnnol

# Changer la sortie

```js
ReactDOM.render(
  <h1>Hello, React!</h1>,
  document.getElementById('root')
);
```

# JSX 

## Vaiables

```js
const name = "David";
const el = <p>Hello, {name}</p>;

ReactDOM.render(
  el,
  document.getElementById('root')
);
```

```html
<div id="name"></div>
<div id={user.id}></div>

const x = "myClass";
const el = <div className={x}></div>;
```

```js
let counter = 0;

function show() {
  counter++;
  const el = <p>{counter}</p>;
  ReactDOM.render(
    el, document.getElementById('root')
  );
}

setInterval(show, 1000); 
```

```js
function Hello() {
  return <h1>Hello world.</h1>;
}

const el = <Hello />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);
```

React.Component peut etre utilisé 

```js
class Hello extends React.Component {
  render() {
    return <h1>Hello world.</h1>;
  }
} 
```
# Props
props permet de recuperer les propriétées
```js
function Hello(props) {
  return <p>Hello, {props.name}!</p>;
}

const el = <Hllo name="David" />; 
```

use `this.props.[...]`
```js
class Hello extends React.Component {
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
} 
```

```js
function Item(props) {
  return <div className="item">
    <b>Name:</b> {props.name} <br />
    <b>Price:</b> {props.price}
  </div>;
}
<Item name="Cheese" price="4.99" />
```

# State

```js
class Hello extends React.Component {
  state = {
    name: "James"
  }

  render() {
    return <h1>Hello {this.state.name}.</h1>;
  }
}
```

Et changer ses valeurs

```js
this.setState({ 
  name: "James",
  age: 25
}); 

```

faire un compteur

```js
class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({
     counter: this.state.counter+1});
  }
  render() {
    return <div>
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}
```

## useState


attribuer une variable en utilisant useState
```js
// faut importer useState 
import React, { useState } from 'react'; 


function Hello() {
  const [name, setName] = useState("David");

  return <h1>Hello {name}.</h1>;
}
```

Counter avec hooks

```js
function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter+1);
  }

  return <div>
  <p>{counter}</p>
  <button onClick={increment}>
    Increment
  </button>
  </div>;
} 

```

# Mount and Unmont and UseEffect

Se set a chaque fois que le composent est rendu sur la page
```js
componentDidMount () {
  this.setState ({compteur: 42});
}
```

A chaque fois que le composent s'actualise
```js
componentDidUpdate() {
  alert("Number of clicks: " + this.state.counter);
}
```

A chaque fois que le composent se décharge 
```js
componentWillUnmount 
```

## Use Effect
C'est la combinaison de `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`
```js
// faut importer useEffect 
import React, { useState, useEffect } from 'react'; 

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("Number of clicks: " + counter);
  });

  function increment() {
    setCounter(counter+1);
  }
  return <div>
  <p>{counter}</p>
  <button onClick={increment}>Increment</button>
  </div>;
}

```

# Handling Events

