// $ npm init --yes
// $ npm install express
// add .gitignore
// $ npm install nodemon
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(PORT, () => {
    console.log('Server is running');
})
//-----------------------------------------------------\\

//-------------------Client side Code-------------------\\
    //get data from server
    $.ajax({
        method: "GET",
        url: "/url"
    }).then((response) => {
        console.log(response);
        handle(response)
    });
    //send data to server
    $.ajax({
        method: 'Post',
        url: '/url',
        data: newItem,
    }).then((response) => {
        console.log('POST', response);
    });
//-----------------------------------------------------\\

//-------------------Server Side Code------------------\\
    //get data to server
    app.get('/url', (req, res) => {
        res.send();
    });
    //send data to server
    app.post('/url', (req, res) => {
        console.log(req.body);
        res.sendStatus(201)
    });