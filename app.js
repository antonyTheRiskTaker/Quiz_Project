const express = require("express")
const app = express();
const { engine } = require("express-handlebars")

app.engine("handlebars", engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.use(express.static('public'))

const port = 3080

app.get("/", (req, res) => {
    res.render('home')
})

app.get("/signin", (req, res) => {
    res.render('signin')
})
app.get("/admin", (req, res) => {
    res.render('admin')
})
app.get("/quizarea", (req, res) => {
    res.render('quizarea')
})
app.get("/addquiz", (req, res) => {
    res.render("addquiz")
})

app.listen(port, () => {
    console.log("server running on RTX3080")
})