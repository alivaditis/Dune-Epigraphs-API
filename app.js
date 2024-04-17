const express = require('express')

const app = express()
const PORT = process.env.PORT | 4001

app.listen(PORT, (error) => { 
  if(!error) 
    console.log(`Server is running on PORT:${PORT}`)
  else {
    console.log("Error occurred, server can't start", error); 
  }
}) 