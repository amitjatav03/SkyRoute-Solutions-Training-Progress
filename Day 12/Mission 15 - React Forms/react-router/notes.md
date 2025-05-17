React Router

- move from one page to another 

- navigatiing through multiple pages without reloading the web site 


SPA approach
single page approach


* react router dom is used to move one page to another without refreshing the webpage 


different component - same page par load ho rahe hain

react is all about components


* React Router is a framework which we use to navigate multiple pages without refreshing the page


> npm i react-router-dom




# Steps to use React Router:-

1. install react-router
    > npm install react-router-dom

2. wrap <App /> inside BrowserRouter

3. <Router>
    <Route path='/' element={<div>HomePage</div>}>
   </Router>





<NavLink> tag adds .active class to the clicked element



home - /
about - /about
support - /support
labs - /labs


Nested Routing
---------------

/about, /support, /labs are childs of home (/)
home / are parent routes


parent element - child element ko render nahi hone deta 
for this we use <Outlet />




# HOMEWORK

* 
index 
difference