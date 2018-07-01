var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Comment = require('./models/comment.js');
var app = express();

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('Server is listening');
    res.send('Welcome to your server! It is good.');
});

app.post('/comment', (req, res) => {
    let commentData = req.body;
    console.log('commentData is: ', commentData)
    let comment = new Comment(commentData);

    comment.save((err, result) => {
        if(err) {
            console.log('There is an error saving new comment');
        } else {
            res.sendStatus(200);
        }
    })
});

app.get('/comments', async(req, res) => {
    try {
        let comments = await Comment.find();
        res.send(comments);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});



mongoose.connect('mongodb://lb-design-ng5:lb-design-ng5@ds125041.mlab.com:25041/lb-design-ng5', err => {
    if(!err) {
        console.log('Connected to Database!');
    } else {
        console.log('Error is: ', err);
    }
});

app.listen(process.env.PORT || 3000), function () {
console.log("SERVER RUNNING");
};