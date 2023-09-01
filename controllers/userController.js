const users = [
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
];

function login(req, res) {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        res.status(200).json({ message: "Login successful" });
    } else {
        res.status(401).json({ message: "Login failed" });
    }
}

function register(req, res) {
    const { username, email, password, name } = req.body;

    if (!username || !email || !password || !name) {
        return res.status(400).json({ message: "All fields are required for registration" });
    }

    const newUser = {
        id: users.length + 1,
        username: username,
        email: email,
        password: password,
        name: name
    };

    users.push(newUser);
    res.status(201).json({ message: "User registered successfully", user: newUser });
}

module.exports = {
    login,
    register
};
