const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
require("dotenv").config()

const db = mysql.createConnection({
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  database: process.env.DBNAME,
  port: process.env.DBPORT
})

db.connect(err => {
  if (err) {
    throw err
  }
  console.log("Mysql Database connected")
})

const app = express()
app.use(cors())

const path = require("path")
const public = path.join(__dirname, "public")

// **************** CLIENT ROUTES ******************
// https://matthewviamusic.com
app.get("/", (req, res) => {
  res.sendFile(path.join(public, "index.html"))
})

app.use("/", express.static("public"))

// https://matthewviamusic.com/albums
app.get("/albums", (req, res) => {
  res.sendFile(path.join(public, "albums.html"))
})

// https://matthewviamusic.com/album/Make+Some+Space
app.get("/album/:albumName", (req, res) => {
  res.sendFile(path.join(public, `/album/[albumName].html`))
})

// https://matthewviamusic.com/search
app.get("/search", (req, res) => {
  res.sendFile(path.join(public, "search.html"))
})

// https://matthewviamusic.com/datatable
app.get("/datatable", (req, res) => {
  res.sendFile(path.join(public, "datatable.html"))
})

// https://matthewviamusic.com/docs
app.get("/docs", (req, res) => {
  res.sendFile(path.join(public, "docs.html"))
})

// https://matthewviamusic.com/styleguide
app.get("/styleguide", (req, res) => {
  res.sendFile(path.join(public, "styleguide.html"))
})

// https://matthewviamusic.com/docs/api
app.get("/docs/api", (req, res) => {
  res.json({ message: "route currently unavailable" })
})

// https://matthewviamusic.com/test
app.get("/test", (req, res) => {
  res.json({ test: "passed" })
})

// **************** API ENDPOINTS ******************

// MAIN API route
// https://matthewviamusic.com/api/tracks
app.get("/api/tracks", (req, res) => {
  let sql = "SELECT * FROM tracks;"
  db.query(sql, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

// Returns a single track by ID position
// https://matthewviamusic.com/api/tracks/300
app.get("/api/tracks/:id", (req, res) => {
  let sql = `SELECT * FROM tracks WHERE id = ${req.params.id};`
  db.query(sql, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

// https://matthewviamusic.com/api/stats
app.get("/api/stats", (req, res) => {
  let sql = "SELECT * FROM stats;"
  db.query(sql, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

// https://matthewviamusic.com/api/stats/1
app.get("/api/stats/:id", (req, res) => {
  let sql = `SELECT * FROM stats WHERE id = ${req.params.id};`
  db.query(sql, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

// https://matthewviamusic.com/api/pxa
app.get("/api/pxa", async (req, res) => {
  let sql = "SELECT * FROM pxa;"
  db.query(sql, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

// https://matthewviamusic.com/api/tracks/limit?q=2
app.get("/api/tracks/limit", (req, res) => {
  const q = parseInt(req.query.q)

  let sql = `SELECT * FROM tracks LIMIT ?;`
  db.query(sql, q, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

// https://matthewviamusic.com/api/tracks/album?q=Meow
app.get("/api/tracks/album", (req, res) => {
  const value = req.query
  const q = Object.values(value)

  let sql = `SELECT * FROM tracks WHERE albumName = ?;`
  db.query(sql, q, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

// https://matthewviamusic.com/api/tracks/albums
app.get("/api/tracks/albums", (req, res) => {
  let sql = `SELECT DISTINCT albumName FROM tracks;`
  db.query(sql, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

// https://matthewviamusic.com/api/tracks/paginate?limit=2&offset=0
app.get("/api/tracks/paginate", (req, res) => {
  const limit = parseInt(req.query.limit)
  const offset = parseInt(req.query.offset)

  const q = [limit, offset]

  let sql = `SELECT * FROM tracks LIMIT ? OFFSET ?;`
  db.query(sql, q, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

// Returns 12 tracks per page:
// https://matthewviamusic.com/api/tracks/page?q=1
app.get("/api/tracks/page", (req, res) => {
  const q = parseInt(req.query.q)

  let sql = `SELECT * FROM tracks WHERE id > ? ORDER BY id LIMIT 12;`

  db.query(sql, q, (err, result) => {
    if (err) throw err
    res.json(result)
  })
})

// Catch all - force 404/redirect
app.use(function (req, res) {
  res.status(404).sendFile(path.join(public, "404.html"))
})

app.listen("4000", (req, res) => {
  console.log(`Express server listening on port:4000`)
})
