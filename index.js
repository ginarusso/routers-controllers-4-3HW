const express = require("express")
const app = express()
const port = 2000

const user = [
    {
        id: 1,
        username: "bsmithw3",
        email: "bsmith@mail.com",
        password: "bsmithw3_2023",
        name: "Brandon Smith"
    },
    {
        id: 2,
        username: "swoow3",
        email: "swoo@mail.com",
        password: "swoo_w3schools",
        name: "Samantha Woo"
    }
]

// middleware to parse JSON in request body
app.use(express.json())

//define routes
// The server file would have "/user" as it's root route for all user routes.
app.get('/user', (req, res) => {
    // res.json("this is the get response")
    // respond with json object
    res.status(200).json(user)
})


// app.get('/user', (req, res) => {
//     res.status(200).json(user)
// })

// // create dynamic route to get information fron the browser
// // app.get('/user/:username/pw/:password', (req, res) => {
// app.get('/user/:username', (req, res) => {
//     // get parameters of dynamic route
//     // console.log(req.params) // { username: 'bsmithw3' }
//     let userToFind = req.params.username
//     console.log(userToFind) // bsmithw3
// })

app.post('/user/login', (req, res) => {
// compare a username / password combination to the existing users and returns "Login successful" or "Login failed" as needed.
const { username, password } = req.body
const userData = user.find(u => u.username === username && u.password === password)
if (userData) {
    console.log(userData)
    res.status(200).json({ message: "Login successful" });
} else {
    res.status(401).json({ message: "Login failed" });
}
})


// On Register, the function would create a new user and add it to the array. Make sure to add an ID field and check if all the fields exists before a user can be added.
app.post('/user/register', (req, res) => {
    const { username, email, password, name } = req.body
        // Check if all fields exist
    if (!username || !email || !password || !name) {
    res.status(400).json({ message: "All fields are required" })
    } else {
    // Generate a unique ID for the new user
    const id = user.length + 1
    
    // Create a new user object
    const newUser = {
        id,
        username,
        email,
        password,
        name
    }

    // Add the new user to the array
    user.push(newUser)

    res.status(201).json({ message: "User registered successfully", user: newUser });
}
})
app.listen(port, () => {
    console.log("The server is running.")
})