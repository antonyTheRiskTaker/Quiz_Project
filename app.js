// basic modules
const express = require("express")
const app = express();
const { engine } = require("express-handlebars")

// setting handlebars
app.engine("handlebars", engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.use(express.static('public'))

// setting port
const port = 3080

// this is for home page
app.get("/", (req, res) => {
    res.render('home')
})

// this is for signup page
app.get("/signin", (req, res) => {
    res.render('signin')
})

// this is for admin page
app.get("/admin", (req, res) => {
    res.render('admin')
})

// this is for quizarea "test"
app.get("/quizarea", (req, res) => {
    res.render('quizarea')
})

// this is for quiz adding area
app.get("/addquiz", (req, res) => {
    res.render("addquiz")
})

// this is for viewing profile page
app.get("/profile", (req, res) => {
    res.render("profile")
})

app.listen(port, () => {
    console.log("server running on RTX3080")
})