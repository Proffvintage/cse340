/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const path = require("node:path")
require("dotenv").config({ path: path.join(__dirname, ".env") })
const expressLayouts = require("express-ejs-layouts")
const app = express()
const static = require("./routes/static")

/* ***********************
 * View Engine and Templates
 *************************/
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/layout")

/* ***********************
 * Routes
 *************************/
app.use(static)

// Default route: supply data to the index view and shared partials.
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    studentName: process.env.STUDENT_NAME || "Hate-Uchiha",
  })
})

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = Number(process.env.PORT || 5500)
const host = process.env.HOST || "0.0.0.0"

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, host, () => {
  console.log(`app listening on ${host}:${port}`)
})
