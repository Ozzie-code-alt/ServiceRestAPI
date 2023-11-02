//Express Application 

const express = require('express') // first we require express here by instantiating it here
const app = express() // then we put express function in a variable 

// we declare route inorder to view it to our webpage 

app.get('/', (req, res)=>{ // we have to parameters in our callback function. Request and Response/ we use respone to send data
    res.send('Hello Node Api')
})


app.listen(3000, ()=>{ // we listen/run here in port 3000
    console.log('Node API app is running on port 3000')
})