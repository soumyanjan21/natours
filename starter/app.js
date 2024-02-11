const express = require('express');
const port = 8080;
const app = express();
const fs = require('fs')

app.use(express.static('../natours/dist/natours/browser/'))
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.sendFile('index.html',{root:__dirname})
});

app.get('/api/v1/tours', (req,res)=>{

})

app.listen(port, () => {
    console.log("Server is listening on port "+port);
});