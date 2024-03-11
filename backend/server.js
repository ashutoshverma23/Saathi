import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
//express app

dotenv.config();
connectDB();
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