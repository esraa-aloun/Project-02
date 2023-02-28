const express = require('express')
const mongoose = require('mongoose')//
const session = require('express-session')
const cookieParser = require("cookie-parser");

const port = 4000

let app = express()


let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static('public'))


//Initilize Express Layout
const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)

//Import Routes
const indexRoute = require('./routes/index')
const authRoute = require('./routes/auth')
const listRoute = require('./routes/lists')
const profileRoute = require('./routes/profiles')

const passport = require('./lib/passportConfig')

//create a session
app.use(session({//??
    secret: 'supersecuresecret!',
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 86400}
}))
app.use(passport.initialize())
app.use(passport.session())


//Mount Routes
app.use('/', indexRoute)
app.use('/', authRoute)
app.use('/', listRoute)
app.use('/', profileRoute)


app.listen(port,() => {
    console.log(`Blog app is running on port ${port}`)
})

app.set('view engine', 'ejs')

mongoose.set('strictQuery', false)

mongoose.connect("mongodb+srv://EsraaAlOun:QkFDTywgRdvH5czS@cluster0.j6gmlfj.mongodb.net/project02?retryWrites=true&w=majority",
    {
    
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    } ,
    () => {
        console.log('MongoDB Connected')
    }
)