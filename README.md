# Mongoose - Exercise 2

## Prepare an Express App

* Install express
* Add an express app to your previous mongoose script
* Copy the code for generating the fake data into a GET route /seed

* Implement middleware for parsing incoming JSON data (into req.body):
    => app.use(express.json())

* Create all following CRUD routes for a user
    * GET /user (=> get all users)
    * GET /user/:id (=> get single user by ID)
    * POST /user (=> create user)
    * PATCH /user/:id (=> update user with given ID)
    * DELETE /user/:id (=> remove user with given ID)

* Implement dummy responses
    * All routes should return dummy JSON data
    * For routes POST & PATCH
        * console.log the received body (req.body)
    * For routes GET /user/:id, PATCH /user/:id, DELETE /user/:id
        * console.log the received ID parameter

* Test your routes
    * Start your app with nodemon
    * Write Fetch statement for all your routes
        (you can write those in a javascript comment into your code file)
    * Test the fetch statements in the browser JS console
        * Check if you receive your dummy JSON response in the browser console
        * Check on the VSCode terminal, if you receive the URL parameters and the sent body

