// $ npm init --yes
// $ npm install express
// $ npm install pg
// $ npm install nodemon
// add .gitignore file and throw in     node_modules/
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
//Router  Shit
const tacoRouter = require('relative-path', tacoRouter)

app.use('/relative-path', bookRouter);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log('Server is running');
})
//----------------SERVER SETUP COMPLETE----------------\\



//-------------------Server Side Code------------------\\
    //get data from server
    app.get('/-u-r-l', (req, res) => {
        console.log(':SENDING:');
        res.send(); //sends data
    });
    //send data to server
    app.post('/u-r-l', (req, res) => {
        console.log(req.body); //req.body will equal whatever was sent. 
        if(!req.body.key || !req.body.key){ //data Validation
            res.sendStatus(400); //bad data (RTFM) https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
            return; 
        }
        res.sendStatus(201)
    });
//-----------------------------------------------------\\

