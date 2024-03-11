require('dotenv').config();
const express = require('express');
const session = require("express-session");
const cors = require("cors");
const genuuid = require("uuid").v4;
const { registerUser, verifyLogin } = require("./Controllers/auth.js");

//express app
const app = express();
app.use(cors());

// Use express-session middleware
app.use(session({
  // store: new (require('connect-pg-simple')(session))({
  //   // Insert connect-pg-simple options here
  //   pgPromise: require("../Database/database.js").db,
  //   createTableIfMissing: true
  // }),
  genid: function (req) {
    console.log("session id created");
    return genuuid();
  },
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: false, 
    // sameSite: 'None',
    expires: 60000 },
  // cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}));

app.use(express.urlencoded({extended: false}));    //middleware for accessing req.body
app.use(express.json());    //for accessing req.body


//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

const isAuthenticated = (req, res, next) => {
  if(req.session.isAuth)  next();
  else{
    res.redirect("/");
    console.log("You are not authorised!");
    // res.send("You are not authorised!");
  }
}


//routes
app.get('/', (req, res) => {
    // res.send('Hello World');
    res.json({ message: "Welcome to the server" });
});

app.post('/register', async (req, res) => await registerUser(req, res));

app.post('/login', async (req,res) => await verifyLogin(req,res));

app.get('/dash', (req, res)=>{
    res.send("hiii");
})

//listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});