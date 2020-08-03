### What is React?

React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications. React’s core purpose is to build UI components; it is often referred to as just the “V” (View) in an “MVC” architecture.

### What is Virtual DOM?

The virtual DOM is an in-memory representation of Real DOM. React creates an in-memory data structure cache, computes the resulting differences, and then updates the browser’s displayed DOM efficiently. This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries only render subcomponents that actually change.

### What is the difference between state and props?

Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality concerning the component. i.e.,

- Props get passed to the component similar to function parameters
- state is managed within the component similar to variables declared within a function.

### What are the different phases of React component lifecycle?

There are four different phases of React component’s lifecycle:

1. Initialization: In this phase react component prepares setting up the initial state and default props.
2. Mounting: The react component is ready to mount in the browser DOM. This phase covers componentWillMount and componentDidMount lifecycle methods.
3. Updating: In this phase, the component gets updated in two ways, sending the new props and updating the state. This phase covers shouldComponentUpdate, componentWillUpdate and componentDidUpdate lifecycle methods.
4. Unmounting: In this last phase, the component is not needed and get unmounted from the browser DOM. This phase include componentWillUnmount lifecycle method.

### How does React Work?

React creates a virtual DOM. When state changes in a component it firstly runs a “diffing” algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.

### What is JSX?

JSX is a syntax extension to JavaScript and comes with the full power of JavaScript. JSX produces React “elements”. You can embed any JavaScript expression in JSX by wrapping it in curly braces. After compilation, JSX expressions become regular JavaScript objects. This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions.

### What is children?

In JSX expressions that contain both an opening tag and a closing tag, the content between those tags is passed to components automatically as a special prop: `props.children`.
There are some methods available in the React API to work with this prop. These include `React.Children.map`, `React.Children.forEach`, `React.Children.count`, `React.Children.only`, `React.Children.toArray`.

### What is state in React?

State is similar to props, but it is private and fully controlled by the component. State is necessarily an object that holds data and determines how the component renders and behaves.

### What are controlled components?

In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. When a user submits a form, the values from the elements mentioned above are sent with the form. With React it works differently. The component containing the form will keep track of the value of the input in its state and will re-render the component each time the callback function, e.g., `onChange` is fired as the state will be updated. An input form element whose value is controlled by React in this way is called a "controlled component".

### What is Flux?

Flux is an application design paradigm used as a replacement for the more traditional MVC pattern. It is not a framework or a library but a new kind of architecture that complements React and the concept of Unidirectional Data Flow. Facebook used this pattern internally when working with React The workflow between dispatcher, stores and views components with distinct inputs and outputs as follows:

### What is Redux?

Redux is a predictable state container for JavaScript apps based on the Flux design pattern. Redux can be used together with ReactJS, or with any other view library. It is tiny (about 2kB) and has no dependencies.

### How is state changed in Redux?

The only way to change the state is to emit an action, an object describing what happened. This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to transform the state. Because all changes are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.

### What is “store” in Redux?

Store is the object that holds the application state and provides a few helper methods to access the state, dispatch actions and register listeners. The entire state is represented by a single store. Any action returns a new state via reducers. That makes Redux very simple and predictable.

### What is a pure function?

In computer programming, a pure function is a function that has the following properties:

1. Its return value is the same for the same arguments (no variation with local static variables, non-local variables, mutable reference arguments or input streams from I/O devices).
2. Its evaluation has no side effects (no mutation of local static variables, non-local variables, mutable reference arguments or I/O streams).
3. Thus a pure function is a computational analogue of a mathematical function.

### How would you disable the store redux, so it does not accept any changes to

state?.

One way to do it is by setting an exit flag in the root state reducer, so it is set to true it just let the state pass unmodified.

