//Express Application 
import express from 'express'

// const express = require('express') // first we require express here by instantiating it here this is for vanilla js
const app = express() // then we put express function in a variable 
const port = 3000
// we declare route inorder to view it to our webpage 

app.get('/', (req: express.Request, res: express.Response)=>{ // we have to parameters in our callback function. Request and Response/ we use respone to send data
    res.send('Hello Node Apsii')
})

app.get('/blog', (req: express.Request, res:express.Response)=>{
    res.send('This is a Blogesssssssedadsssasds')
})



app.listen(port, ()=>{ // we listen/run here in port 3000
    console.log('Node API app is running on port 3000')
})