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
- State Vs Props
- Events
- Life Cycle for Class based Components
- Pure Function Based Components
- Hooks in Function Based Components
- Life Cycle in Functional Based Components
- PropType
- DefaultProps

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