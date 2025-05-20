HW:
{props.className} ?
read react documentation


# why const in useState hook?

1. destructuring with const prevents reassignment of the reference

> const [count, setCount] = useState(0);

you're using array destructuring to get two things:
* count: the current state value
* setCount: the function to update the state

const ensures that you don't accidentally reassign count or setCount themselves

count = 5; // error if declared with const
setCount = null; // error if declared with const



2. state changes go through setCount, not direct mutation

react's state system depends on calling the updater function 'setCount' to trigger re-renders.
you never mutate the state directly - and using const reinforces that idea

// good 
setCount(prev => prev + 1)

// bad
count = count + 1; // no re-render, are not allowed with const


3. using let or var serves no benefit in the case

but since you're never reassigning count or setCount, let gives you no advantage - and can introduce accidental bugs by allowing reassignment.




# setTitle('popcorn') - is this immediiate or time taking schedule ?

* it is scheduled, not immediate

when you call setTitle(new value):
- react schedules the state update
- it does not update the state value immediately
- the updated state is applied in the next render cycle, not during the current one

* example:
'''
const [title, setTitle] = useState("Hello");

console.log(title); // "Hello"
setTitle("World");
console.log(title); // still "Hello" - not "World"
'''

here:
- setTitle("World") schedules the update.
- title still "Hello" because the re-render hasn't happended yet.


* why it works this way
- react batches state updates to improve performance.
- updates are processed asynchronously in the render cycle.
- this prevents unnecessary re-renders for every small state change.


* to response immediately after the update: use:
- useEffect
- or a callback pattern (with useEffect watching title)

'''
useEffect(() => {
    console.log("Title updated: ", title);
}, [title]);
'''


state - per component instance basis 




1. addeventlistner -- props - onClick  
2. ui data ko reflect krwana haii -- we use state






 <!-- App.jsx -->
<NewProduct product={printProductData} /> 
function printProductData(data) {
    console.log("i am inside App.jsx")
    console.log(data)
}


<!-- NewProductData.jsx -->
<ProductForm onSaveProduct={saveProduct} />
function saveProduct(data) {
    console.log("i am inside new product")
    console.log(data)

    props.product(data)
}


<!-- ProductFormData.jsx -->
function submitHander(event) {
    event.preventDefault();

    const productData = {
        title: newTitle,
        data: newDate
    }

    props.onSaveProduct(productData);

    setTitle('');
    setDate('');
}





# Updater function in React

in react's useState hook,
the update function is the second value returned by the hook

const [count, setCount] = useState(0);


count: the current state
setCount: the updater function - it tells react to update count and trigger a re-render


> you can use setCount in two ways

1. direct update

setCount(count + 1);

// this sets count to count+1 based n the current value at the time of rendering.



2. functional update 
(recommended for multiple updates or async cases)

setCount(prev => prev + 1);

// this sets count to the value of prev+1, where prev is guaranteed to be the latest state value at the time the update is applied


*so what's the difference?*

* example:
setCount(count + 1);
setCount(count + 1);

you might expect this to increase count by 2 - but it only increases it by 1! why ?

- because both setCount(count+1) are using the same state value of count.
- react batches updates, so they don't get the new value in between.

- uses value from render-time (count)
- best for: simple one-off updates


✅ correct way
set(prev => prev + 1);
set(prev => prev + 1);

this will correctly increase count by 2, because:
- each update gets the most recent state, even within a batch.

- uses latest value at update-time (prev)
- best for: multiple updates, async updates, loops