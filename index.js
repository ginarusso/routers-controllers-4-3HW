const express = require("express")
const app = express()
const port = 2000

const userRoutes = require('./routes/userRoutes'); // Import userRoutes
const userController = require('./controllers/userController')

// middleware to parse JSON in request body
app.use(express.json())
// Use the userRoutes
app.use('/user', userRoutes)

//define routes
// The server file would have "/user" as it's root route for all user routes.
app.get('/user', (req, res) => {
    // res.json("this is the get response")
    // respond with json object
    res.status(200).json(userController.users)
})

app.listen(port, () => {
    console.log("The server is running.")
})