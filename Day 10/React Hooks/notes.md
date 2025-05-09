# React Hooks

## Introduction to Hooks
- Hooks were introduced in React 16.8
- They allow you to use state and other React features without writing class components
- Hooks work with functional components only
- Hooks must be called at the top level of React functions

## What are Hooks?
- Functions that "hook into" React state and lifecycle features
- Always start with the word "use"
- Built-in hooks include:
  - useState
  - useEffect
  - useContext
  - useReducer
  - useRef
  - useMemo
  - useCallback

## Why Use Hooks?
1. Simpler code organization
   - Avoid complex class components
   - No need to understand 'this' binding
   - Group related logic together

2. Reuse stateful logic
   - Create custom hooks
   - Share logic between components
   - Better code reusability

## Common Hooks

### useState Hook
```jsx
const [state, setState] = useState(initialValue);

// Example
const [count, setCount] = useState(0);
const [name, setName] = useState('');
```

### useEffect Hook
```jsx
useEffect(() => {
  // Side effect code
  return () => {
    // Cleanup code
  };
}, [dependencies]);

// Example
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

### useRef Hook
```jsx
// Used to persist values between renders and access DOM elements directly
const myRef = useRef(initialValue);

// Example
function TextInputWithFocusButton() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

### useContext Hook
```jsx
// Create a context
const ThemeContext = React.createContext(defaultValue);

// Provider component
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

// Consumer component using useContext
function ChildComponent() {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}
```

### useMemo Hook
```jsx
// Used for performance optimization by memoizing expensive calculations
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// Example
function ExpensiveCalculation({ numbers }) {
  const sum = useMemo(() => {
    console.log("Calculating sum...");
    return numbers.reduce((total, num) => total + num, 0);
  }, [numbers]);

  return <div>Sum: {sum}</div>;
}
```

Key Points:
- **useRef**: 
  - Persists values between renders
  - Doesn't trigger re-render when value changes
  - Commonly used for DOM references
  - Can store mutable values

- **useContext**:
  - Subscribes to React context
  - Avoids prop drilling
  - Useful for global state management
  - Updates when provider value changes

- **useMemo**:
  - Memoizes computed values
  - Optimizes performance
  - Only recomputes when dependencies change
  - Use for expensive calculations

## CRUD Operations using React Hooks

### Example of Todo List with CRUD Operations
```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Create
  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput('');
  };

  // Read
  const readTodos = () => {
    return todos.map(todo => (
      <div key={todo.id}>
        {todo.text}
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    ));
  };

  // Update
  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  // Delete
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
}
```

## Best Practices
1. Only call hooks at the top level
2. Only call hooks from React functions
3. Use meaningful names for state variables
4. Keep dependencies array in useEffect up-to-date
5. Use multiple useEffect hooks for different concerns
6. Always handle cleanup in useEffect when needed

## Custom Hooks
```jsx
// Example custom hook
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
```