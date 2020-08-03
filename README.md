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
- Composition vs Inheritance
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