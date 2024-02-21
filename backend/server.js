require('dotenv').config();

const express = require('express');

//express app
const app = express();


//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.get('/', (req, res) => {
    // res.send('Hello World');
    res.json({ message: "Welcome to the server" });
});


//listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});