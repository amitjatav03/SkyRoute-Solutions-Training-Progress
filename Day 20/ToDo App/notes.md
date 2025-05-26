# folder structure

1. index.js
2. routes
3. controller
4. models


127.0.0.1
- this ip address -> loop back address 
- act as a local host



agar mujhe apne DATABASE_URL ko process wale object ke andar feed karna hai
to mein dotenv library use karna padega 
> npm i dotenv



# controller
har path ek path se link hota hai

createTodo ka controller banayenge
    - todo type ka object ek banao aur usko database mein insert karo


route ko hame map karwana padhta hai controller ke saath

agar hame kisi route ko controller ke saath map karwana hai to hame controller import/fetch krna padega







# mongoose library
bohot saare functions provide karti hai
eg. create, findOne, findById, etc..


https://mongoosejs.com/docs/queries.html




>HOMEWORK
Create a Blog App
1. define routes for creating and retrieving post
    creating - /posts/create
    retrieving - /posts
2. define routes for liking and unliking post
    liking - /likes/like
    unliking - /likes/unlike
3. define route for creating and retrieving comments
    creating - /comments/create
    retrieving - /comments


# FLOW:-

# index.js
- server creation and initiation
- add middleware to parse json
- mount api routes
- db connection import and established
- default '/' home page route

# database.js
- database ko node.js application se connect karwayegi

# .env
- PORT
- DB_URL

# routes
- controller ko import karwana
- path se controller ko map karna

# controllers
- post 
- like - sochna update jesa kuch toh nahi ho raha
- comment

# models
- includes post content, like flag, time etc.


commentSchema -> user, body
likeSchema -> user
postSchema -> title, likes, body, post, comments