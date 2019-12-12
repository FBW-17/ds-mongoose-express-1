const express = require("express")
const api = express()
const mongoose = require("mongoose")
const faker = require("faker")

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    isAdmin: Boolean    
}, {versionKey: false})

const User = mongoose.model("users", userSchema)

// USE JSON MIDDLEWARE, SO WE CAN CALL OUR API WITH FETCH & JSON DATA FROM THE BROWSER
api.use(express.json())

// OPEN THE PORT
api.listen(3000, () => console.log("Listening on port 3000"))

// CONNECT TO MONGODB
mongoose.connect("mongodb://localhost/users", {useNewUrlParser: true, useUnifiedTopology: true})

// OUR SEED SCRIPT ROUTE (you can use this anytime to add new, fresh users)
api.get("/seed", (req, res, next) => {
    for(let i=0; i<5; i++) {
        let user = new User({
            name: faker.name.findName(), 
            isAdmin: faker.random.boolean()
        })
        user.save()
    }
})

api.get("/user", (req, res, next) => {
    res.send([{name: "User1"}])
})

api.get("/user/:id", (req, res, next) => {
    let id = req.params.id
    console.log(id)
    res.send({name: "Fetched User"})
})

api.post("/user", (req, res, next) => {
    let userPosted = req.body
    console.log(userPosted)
    res.send({name: "Created user"})
})

api.patch("/user/:id", (req, res, next) => {
    let id = req.params.id
    let userUpdate = req.body
    console.log(id)
    console.log(userUpdate)
    res.send({name: "Updated user"})
})

api.delete("/user/:id", (req, res, next) => {
    let id = req.params.id
    console.log(id)
    res.send({name: "Deleted user"})
})

/**
 * FETCH statements:
 * 
 * GET: fetch('http://localhost:3000/user')
 * GET: fetch('http://localhost:3000/user/15')
 * POST: fetch('http://localhost:3000/user', {
             method: "POST", headers: {"Content-Type": "application/json"},
             body: JSON.stringify({firstname: "Firstname", lastname: "Lastname"})
         })
   PATCH: fetch('http://localhost:3000/user/15', {
             method: "PATCH", headers: {"Content-Type": "application/json"},
             body: JSON.stringify({firstname: "FirstnameNew", lastname: "LastnameNew"})
         })
   DELETE: fetch('http://localhost:3000/user/7', { method: "DELETE" })
         })
*/
