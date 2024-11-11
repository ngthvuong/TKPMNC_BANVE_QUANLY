'use strict'

const express = require("express")
const path = require("path")
const hbs = require("express-handlebars")
const routes = require("./Dinh_Tuyen")
const session = require("express-session")

const app = express()

app.use('/Tai_Nguyen', express.static(__dirname + '/Tai_Nguyen'))

app.set("view engine", 'hbs')
app.set("views", path.join(__dirname, "XL_Giao_Dien"))

const sessionMiddleware = session({
    secret: "AJ_s11)9",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 20 * 60 * 1000
    }
})
app.use(sessionMiddleware)

app.engine("hbs", hbs.engine({
    extname: "hbs",
    defaultLayout: "Khung",
    layoutsDir: __dirname + "/XL_Giao_Dien/Khung",
    partialsDir: __dirname + "/XL_Giao_Dien/Thanh_Phan",
    helper: {}
}))


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(3001, () => {
    console.log("Server dang chay cong 3001")
})