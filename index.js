const express = require("express");
const app = express()
const PORT = 3000
const bodyParser = require("body-parser")
const session = require("express-session")
const passport = require("passport")
require("./passport")

app.use(bodyParser.json({limit: "5mb"}));

//handle Session
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true
    })
)
//Passport Configaration
app.use(passport.initialize());
app.use(passport.session());


const authRoutes = require("./routes/authRoutes")
app.use("/auth", authRoutes)

app.listen(PORT,()=>{
    console.log(`App Running on port No ${PORT}`);
})