const express = require('express')
const fs = require('fs');
const User = require('./models/user');
const app = express();

app.use(express.static(__dirname));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/getusers',function(req,res){
    User.find(function(err,data){
    console.log(data);
    res.send(data);
    })
})

app.post('/adduser',function(req,res){
    console.log(req.body);
    const user=new User(req.body);
    user.save(function(err,data){
    if(err) console.log(err.message);
    console.log(data);
    res.send('add user!');
    })
})

app.post('/deleteuser',function(req,res){
    console.log(req.body);
    User.remove({_id:req.body.id},function(err,data){
    res.send('remove user');
    })
})

app.post('/updateuser',function(req,res){
    console.log(req.body);
    console.log('\n');
    User.findByIdAndUpdate(req.body._id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('User udpated.');
    });
})

//порт прослуховування для сервера
//автоматичний підбір для віддаленого сервера,
//або 8080 для localhost 
app.listen(process.env.PORT||8080); //повідомлення про запуск сервера 
console.log('Run server!');