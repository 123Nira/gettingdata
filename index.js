const express=require("express")
const path=require('path')
const app= express()
const PORT= process.env.port||4000;


app.get('/', (req,res)=>{
  res.sendFile(path.resolve(__dirname+ "/data.js"))
})

 app.listen(PORT, ()=>{
     console.log(PORT)
})