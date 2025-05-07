# react js 

react.js is a js library which is used for creating ui

react dom is used to interact with dom and react


in react js 
    - real dom -- copy --> virtual dom

react js uses the concept of virtual dom


react.js --> library which is used for creating UI 
React DOM - to interact with DOM and React 



# to initiate with react 

> npm create react-app
    (useful but slow)

instead we use

> npm create vite

vite - bundler 
(tool used for creating react folder)




JSX - JavaScript XML
javascript and html code ko saath mein use krne ke liye jsx ka ham use karte hain


main.jsx 



1. what ?

facebook ko ek problem najar aai ki real time mein wo notifications and reactions ko nahi show nahi kar paa rahe hai, unhe reactions, notifications and other data deliver karne mein page reload karna pad raha hai, and wo isliye kyoki they were using something called php, ab is problem se nipatne ke liye 2013 mein ek facebook ke engineer ne ek library banayi, ye library khaas thi, kyuki ye data ko real time mein dikha paa rahi thi, par is library ke kaam karne ka tareeka different tha


browsers ka nature hota hai jab bhi page mein kuchh bhi change ho to poora DOM tree refresh karo, jiski wajah se poora page re-render hoga, jo ki kaafi inefficient hai, matlab ki socho agar ek change par DOM ek baar refresh ho raha hai to 1 lakh change par 1 lakh baar refresh hoga, browser crash ho sakta hai

* facebook ko ek problem najar aai ki real time mein wo notifications and reactions ko nahi show nahi kar paa rahe hai, unhe reactions, notifications and other data deliver karne mein page reload karna pad raha hai, and wo isliye kyoki they were using something called php, ab is problem se nipatne ke liye 2013 mein ek facebook ke engineer ne ek library banayi, ye library khaas thi, kyuki ye data ko real time mein dikha paa rahi thi, par is library ke kaam karne ka tareeka different tha,
ye main DOM tree ko update nahi krti hai directly, matlab ki agar page mein kuchh bhi change hua to directly main DOM tree update nahi hoga, is library ka khud ka ek DOM tree hai uska naam hai virtual DOM. ye DOM tree exact copy hai real DOM tree ka, bas ek difference hai, wo hai ki jab bhi virtual DOM mein kuchh change hoga to sirf use change kiya jaayega jo ki change hua hai naa ki poore tree ko refresh kiya jaayega.

hence react became so famous and useful for big application.

> Advantages:-
a) react - very very very less page reloads
b) extreme use of reusable components
c) very very efficient 


* react is a js library to maintain the frontend efficiently

mvc - model view controller

2. why ?

nowadays applications is bigger in size
- very decent library to create frontend - react.js
- efficient and lightweight
that's why companies use react

3. how ?
create components, and make data if you need it, link the data and change data whenever you want, react will react jab bhi data change hoga 


4. when ?
jab aapko ek thoda bade level par app create karna ho, jismein khoob saari cheejein ho rahi hai, and khoob saara reusable component structure hai


# KUCH KAAM KARLO
------------------

1. code karne ki jagah banana - vs code 
2. code chalaane ki jagah banana - brave/chrome
3. default code lekar aana
    - vite install karo
    - vite se naya app banao
    >npm create vite@latest
    yeh command sirf tab chalega jab node and npm install hoga

4. code chalana - npm run dev
5. output dikhana
6. code ke folder structure ko samajhna




* react coding mein saara code khud se nahi likhna padta hai, react waalo ne aapko ek tool diya hai uska naam hai create-react-app

raw format mein react sikhna hai to --> vite

vite - react raw app create kar paoge (koi next.js wagerah involve nahi hoga)







# Components
aap components banate ho aur yeh saare components jaate hai ek parent component par, aur parent component ko body mein put kar diya jata hai

component ek function hai jo ki return karega jsx



# JSX
jsx html ki tarah dikhne waala syntax hai but uske paas kuchh superpowers hai jo html ke paas nahi hai

<h1>{2+2}</h1> 
in html => <h1>{2+2}</h1>
in jsx => <h1>4</h1>

jsx is very similar to html with superpowers





# styling karna react mein
- module css, tailwind css, material ui



1. go to tailwindcss.com
2. get started
3. framework guides 
4. click on vite




# more on components:-

* component banana
* components jodna
* component mein reaction of data change samajhna
* component mein data bhejna and recieve karna
* component mein khud ka data banana
* component mein bane huye data ko update karna


a -> a
{a} -> 69(any value from state)
* react will react when state changes




# imp
react ka naam react isliye hai kyuki wo react karta hai jab bhi state change hoti hai, aur yahi main model hai poore react ka, yahi uska heart hai aur yahi uske kaam karne ka tareeka hai



<!-- Fragments -->
<> </>
bina extra div ya parent banaye aap cheezon ko wrap kar sakte ho 

fragment khud mein kuch nahi hota but uske andar ki cheezon ko couple up kar sakta hai





## what is state?
state ek data hota hai, react is data ka khyal rakhta hai, jab bhi ye data change hota hai react page ko update karta hai


state koi bhi data ho sakta hai, jaise ki score = 0

useState(0)


maan lete hain aapke game mein score by default 0 se shuru hota hai and future mein wo score badhega by 10 aur aapko page pe show bhi karna hai jab score badhe, to use case mein aapka score variable ek state mein rakhna jaruri hai, kyuki react sirf use change karta hai jo state mein hota hai


jo value hame access karni hai, use access karne ke liye hame array ka 0th member element access karna jaruri hai