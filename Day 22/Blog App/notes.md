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
- server creation and initiation ✅
- add middleware to parse json ✅
- mount api routes
- db connection import and established ✅
- default '/' home page route ✅

# database.js
- database ko node.js application se connect karwayegi ✅

# .env
- PORT ✅
- DB_URL ✅

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



# TASKS
1. POST BLOG
2. GET POSTS 
3. CREATE COMMENTS
4. LIKE POST
5. UNLIKE POST




> important operators
$push - to insert something
$pull - to remove something