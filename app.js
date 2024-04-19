const express = require('express')
const epigraphs = require('./data/epigraphs')

const app = express()
const PORT = process.env.PORT | 4001

app.listen(PORT, (error) => { 
  if(!error) 
    console.log(`Server is running on PORT:${PORT}`)
  else {
    console.log("Error occurred, server can't start", error); 
  }
}) 

app.get('/', (req, res, next) => {
  const index = Math.floor(Math.random()*epigraphs.length)
  const randomEpigraph = epigraphs[index]

  res.send(randomEpigraph)
})