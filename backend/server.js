import dotenv from "dotenv";
import bodyParser from "body-parser";
// import chatbotModel from "./Models/chatbotModel.js";
import {connectDB, mongoose} from "./config/db.js";
import express from "express";
import session from "express-session";
import MongoStore from 'connect-mongo';
// import { DB_NAME } from './constants.js';
import cors from "cors";
// import guuid from "uuid";
import { registerUser, verifyLogin } from "./Controllers/auth.js";
import { printMessage } from "./Controllers/chat.js";
// import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes.js";

//config
dotenv.config();
await connectDB();
// const MongoStore = new connectMongo(session);
// const genuuid = guuid.v4;

//express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// app.post('/api/chat', (req, res) => {
//   const userMessage = req.body.message;

//   // Run the Python script with the user's message
//   const options = {
//     mode: 'text',
//     pythonPath: 'python3', // Change this to the path of your Python executable
//     pythonOptions: ['-u'],
//     scriptPath: './path/to/your/python-scripts', // Replace with the actual path
//     args: [userMessage],
//   };

//   PythonShell.run('chatbot_script.py', options, (err, results) => {
//     if (err) {
//       console.error('Error:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     } else {
//       const chatbotReply = results[0];
//       res.json({ reply: chatbotReply });
//     }
//   });
// });


// Use express-session middleware
app.use(session({
  store: MongoStore.create({
    client: mongoose.connection.getClient()
  }),
  // genid: function (req) {
  //   console.log("session id created");
  //   return genuuid();
  // },
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    // sameSite: 'None',
    expires: 60000
  },
  // cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
})
);

//middleware
app.use(bodyParser.urlencoded({ extended: false }));    //middleware for accessing req.body
// app.use(express.json());    //for accessing req.body

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const isAuthenticated = (req, res, next) => {
  if (req.session.isAuth) next();
  else {
    res.redirect("/");
    console.log("You are not authorised!");
    // res.send("You are not authorised!");
  }
}


//routes
app.get('/api/', (req, res) => {
  res.json({ message: "Welcome to the server" });
});

app.post('/api/register', async (req, res) => await registerUser(req, res));

app.post('/api/login', async (req, res) => await verifyLogin(req, res));

app.post('/api/chat', (req, res) => {
  printMessage(req, res) ;
})

app.get('/api/dash', isAuthenticated, (req, res) => {
  console.log(req.session);
  res.send("hiii");
})

//listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});