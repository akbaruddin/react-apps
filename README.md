[**ReactJS**](https://reactjs.org/) is a Javascript library for building user interfaces.

## Install

```bash
yarn create react-app react-example
```

### RUN

```bash
yarn start
```

### BUILD

```bash
yarn build
```

[Online Code](https://stackblitz.com/)

Table of Content

- [JSX](#jsx)
- [Class Based Components](#class-based-components)
- [Composition vs Inheritance](#composition-vs-inheritance)
- [State Vs Props](#state-and-props)
- [Events](#events)
- [Life Cycle for Class based Components](#life-cycle-for-class-based-components)
- [Pure Function Based Components](#pure-function-based-components)
- [Hooks in Function Based Components](#hooks-in-function-based-components)
- [Life Cycle in Functional Based Components](#life-cycle-in-functional-based-components)
- [PropType](#propType)
- [DefaultProp](#defaultProps)

View Code

```bash
git checkout <sha1>
```

## JSX

`JSX` is a `preprocessor` step that adds `XML/HTML` syntax to JavaScript. React DOM uses camelCase property naming convention instead of HTML attribute names.

- It is faster because it performs optimization while compiling code to JavaScript.
- It is also type-safe and most of the errors can be caught during compilation.
- It makes it easier and faster to write templates familiar with HTML.

```javascript
const Header = <h1>Hello, world</h1>
```

`React` elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

[Online](https://stackblitz.com/edit/reactbasic-lesson1)

## Class Based Components

Components: Split UI into independent, reusable pieces, and think about each piece in isolation.

With `props`

```javascript
return <h1>Hello, {this.props.name}</h1>;
```

With `state`

```javascript
constructor(props) {
    super(props)

    this.state = {
        max: 20 
    }
}

render() {
    return <h1>Hello, World! with {this.state.max}</h1>;
}
```

## Composition vs Inheritance

React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.

### [Inheritance](https://stackblitz.com/edit/reactbasic-inheritc)

When a child class derives properties from it’s parent class, we call it inheritance. There are variety of use-cases where inheritance can be useful.

```javascript
class Label extends React.Component{
    constructor(props){
        super(props);
        this.className='plain-label';
    }
    render(){
        return (
            <span className={this.className}>
            {this.props.children} 
            </span>
        );
    }
}

class SuccessLabel extends Label{
    constructor(props){
        super(props);
        this.className = this.className + ' success-label';
    }
}

class ErrorLabel extends Label{
    constructor(props){
        super(props);
        this.className = this.className + ' error-label';
    }
}

class App extends React.Component{
    render(){
        return (
            <div>
                <Label> Plain Label </Label>
                <SuccessLabel> Success Label </SuccessLabel>
                <ErrorLabel> Error Label </ErrorLabel>
            </div>
        )
    }

}
```

### [Composition](https://stackblitz.com/edit/reactbasic-compos)

Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.

```javascript
class Label extends React.Component{
    render(){
        return (
            <span className={this.props.className + ' plain-label'}>
            {this.props.children}
            </span>
        );
    }
}

class SuccessLabel extends React.Component{
    render(){
        return <Label className='success-label'>{this.props.children}</Label>;
    }
}

class ErrorLabel extends React.Component{
    render(){
        return <Label className='error-label'>{this.props.children}</Label>;  
    }
}

class App extends React.Component{
    render(){
        return (
            <div>
                <Label> Plain Label </Label>
                <SuccessLabel> Success Label </SuccessLabel>
                <ErrorLabel> Error Label </ErrorLabel>
            </div>
        )
    }

}
```

## State and Props

React controls the data flow in the components with state and props.

### [Props](https://stackblitz.com/edit/reactbasic-prop)

Send data to components in immutable form called props.

- Props are read only
- send data to components
- every component is treated as a pure javascript function
- props are equivalent to parameters of a pure javascript function
- `Props` are `immutable`. Because these are developed in the concept of pure functions. In `pure functions` we cannot change the data of parameters. So, also cannot change the data of a prop in ReactJS.

```javascript
class Profile extends React.Component {
    render() {
        return (
            <div>
               <img style={{ width: '100%' }} src={this.props.logo_url} />
               <h1>{this.props.title}</h1>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Profile
                logo_url="https://books.agiliq.com/projects/django-design-patterns/en/latest/_static/logo.png"
                title="Mobile App, Web App and API Development and More" />
            </div>
        );
    }
}
```

### [State](https://stackblitz.com/edit/reactbasic-state)

State is used with React Component Classes to make them dynamic.

- State is like a data store to the ReactJS component. It is mostly used to update the component when user performed some action like `clicking button`, `typing some text`, `pressing some key`, etc.
- React.Component is the base class for all class based ReactJS components. Whenever a class inherits the class React.Component it’s constructor will automatically assigns attribute state to the class with intial value is set to null. we can change it by overriding the method constructor.
- In many cases we need to update the state. To do that we have to use the method setState and directly assigning like `this.state = {'key': 'value'}` is strictly prohibited.

```javascript
class Profile extends Component {
    constructor(){
        super()
        this.state = {
            "admin": 'Non Admin'
        }
        this.changePermission = this.changePermission.bind(this);
    }

    changePermission() {
        this.setState({ 
            "admin": 'Admin' 
        })
    }
  
    render(){
        return (
            <div>
              <img src={this.props.logo_url} height="250px"/>
              <h1>{this.props.title} - {this.state.admin}</h1>
              <button onClick={this.changePermission}>Admin</button>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Profile
                    logo_url="https://books.agiliq.com/projects/django-design-patterns/en/latest/_static/logo.png"
                    title="Mobile App, Web App and API Development and More" 
                />
            </div>
        );
    }
}
```

### State Correctly

#### Do not Modify Directly

```javascript
// Wrong
this.state.comment = 'Hello';

// instead, use setState()
// Correct
this.setState({comment: 'Hello'});
```

#### State with Props

```javascript
// Wrong
this.setState({
    counter: this.state.counter + this.props.increment
})

// Correct
this.setState((state, props) => ({
    counter: state.counter + props.increment
}));
```

## [Events](https://stackblitz.com/edit/reactbasic-event)

Handling events with React elements is very similar to handling events on DOM elements

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

```javascript
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      init: 0
    };
    // This binding is necessary to make `this` work in the callback
    this.less = this.less.bind(this);
    this.plus = this.plus.bind(this);
  }

  less() {
    this.setState((state) => ({
      init: state.init - 1
    }))
  }

  plus() {
    this.setState((state) => ({
      init: state.init + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.less} className="button">-</button>
        <span style={{ 'font-size': '40px', padding: '0 10px' }}>{this.state.init}</span>
        <button onClick={this.plus} className="button">+</button>
      </div>
    );
  }
}
```

### Event with arrow function and extra args pass

#### Arrow function

The problem with this syntax is that a different callback is created each time the Button renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.

```javascript
class HandleApp extends Component {
  constructor() {
    super();
  }

  handleClick(e) {
    alert(e.type)
    console.log(e.currentTarget.innerHTML)
  }
  
  handleDelete(args) {
    console.log(args)
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.handleClick(e)}>
          Alert Click
        </button>
        {/* pass an extra parameter to an event handler */}
        <button onClick={this.handleDelete.bind(this, '5')}>Delete Row</button>
      </div>
    );
  }
}
```

## Life Cycle for Class based Components

- **Initialization**: This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.
- **Mounting**: Mounting is the stage of rendering the JSX returned by the render method itself.
- **Updating**: Updating is the stage when the state of a component is updated and the application is repainted.
- **Unmounting**: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.

```javascript
class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    console.log('did mount')
    this.tickID = setInterval(
      () => this.tick(),
      1000
    )
  }
  
  componentWillMount() {
    console.log('will mount')
  }

  componentWillUnmount() {
    console.log('will unmount')
    clearInterval(this.tickID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
 }

  render() {
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
          <br />
          {this.state.date.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}
```

## [Pure Function Based Components](https://stackblitz.com/edit/reactbasic-functional)

Every component we have seen so far can be called Stateless Function Component. They just receive an input as props and return an output as JSX: `(props) => JSX`.

```javascript
// simple props pass
const Header = (props) => <h1>{props.name}</h1>

// extract method for props
const Footer = ({ name }) => <footer>{name}</footer>

const App = () => {
  return (
    <div>
      Pure Function based.
      <Header name="Functional"/>
    </div>
  )
}
```

## [Hooks in Function Based Components](https://stackblitz.com/edit/reactbasic-hooks)

React Hooks made it possible to use state (and side-effects) in Function Components.

- Completely opt-in. You can try Hooks in a few components without rewriting any existing code. But you don’t have to learn or use Hooks right now if you don’t want to.
- 100% backwards-compatible. Hooks don’t contain any breaking changes.
- Available now. Hooks are now available with the release of v16.8.0.

```javascript
const App = () => {
  // Declare a new state variable, which we'll call "count"
  // count is value holder
  // setCount is function for update value
  // useState extract into two part 1. variable(count) and 2. function(setCount), passing parameter is initial value
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('banana');
  const [user, setUser] = useState({ name: 'Gates' })

  return (
    <div>
      Pure Function based. {count}
      <br />
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <br />
      Fruit {fruit}
      <br />
      User Name: {user.name}
      <br />
      <input value={user.name} onChange={(e) => setUser({ name: e.target.value})} />
    </div>
  )
}
```

## [Life Cycle in Functional Based Components](https://stackblitz.com/edit/reactbasic-hooklifecycle)

With the useEffect Hook we can tell React that after every render, the callback passed to this `useEffect` function as its first parameter ("effect") 

We've learned that useEffect lets us express different kinds of side effects after a component renders. Some effects might require cleanup so they return a function:

```javascript
const App = () => {
  const [count, setCount] = useState(0);

  // Unlike componentDidMount or componentDidUpdate
  useEffect(() => {
    document.title = `${count} times`;
  });

  return (
    <div className="App">
      Pure Function based. {count}
      <br />
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
```

## [PropType](https://stackblitz.com/edit/reactbasic-proptype)

JavaScript extensions like Flow or TypeScript to typecheck our whole application. But even if we don’t use those, React has some built-in typechecking abilities.

**PropTypes**
    `array`
    `number`
    `string`
    `symbol`
    `object`
    `bool`
    `func`
    `node`
    `element`
    `instanceOf()`
    `any`

#### All With

`isRequired` to make sure a warning

```javascript
import PropTypes from 'prop-types';

class User extends Component {
  render() {
    return (<div>
      {this.props.name} {this.props.num}
    </div>)
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  num: PropTypes.number
}

function App() {
  return (
    <div>
      <p>
        Start editing to see some magic happen
        <User name="String" num={1} />
      </p>
    </div>
  );
}
```

## DefaultProps

Define default values for your props by assigning to the special `defaultProps` property.

```javascript
class User extends React.Component {
  render() {
    return (<div>
      {this.props.name}
    </div>)
  }
}

User.defaultProps = {
  name: 'Stranger'
}

function App() {
  return (
    <div className="App">
      <p>
        Start editing to see some magic happen
        <User />
      </p>
    </div>
  );
}
```