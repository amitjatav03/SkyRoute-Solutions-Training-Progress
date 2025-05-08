# React Components, Props, and State - Revision Notes

## Mission 12: Core React Concepts

### 1. Functional vs Class Components
- **Functional Components**
  - Modern approach using hooks
  - Simpler syntax and easier to understand
  ```javascript
  const MyComponent = () => {
    return <div>Hello World</div>;
  }
  ```

- **Class Components**
  - Traditional approach
  - Uses lifecycle methods
  ```javascript
  class MyComponent extends React.Component {
    render() {
      return <div>Hello World</div>;
    }
  }
  ```

### 2. Props
- Used to pass data from parent to child components
- Immutable (read-only)
```javascript
// Parent Component
const Parent = () => {
  return <Child name="John" age={25} />;
}

// Child Component
const Child = (props) => {
  return <div>Name: {props.name}, Age: {props.age}</div>;
}
```

### 3. State
- Manages local component data
- Can be updated using setState (class) or useState (functional)
```javascript
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### 4. Component Lifecycle
- **Mount**: Component created and inserted into DOM
- **Update**: Props or state changes
- **Unmount**: Component removed from DOM

## Mission 13: Events and Lists

### 1. Event Handling
- Common events: onClick, onChange, onSubmit
```javascript
const Button = () => {
  const handleClick = (e) => {
    console.log('Button clicked!');
  }
  return <button onClick={handleClick}>Click me</button>;
}
```

### 2. List Rendering
- Use `.map()` to render arrays
```javascript
const ItemList = () => {
  const items = ['Apple', 'Banana', 'Orange'];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

### 3. Keys in Lists
- **Important Rules**:
  - Must be unique among siblings
  - Help React identify changed items
  - Avoid using index as key when list order may change

### 4. Conditional Rendering
- **Methods**:
  - Ternary operator: `condition ? true : false`
  - Logical AND (&&)
```javascript
const Greeting = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in</h1>}
      {isLoggedIn && <button>Logout</button>}
    </div>
  );
}
```