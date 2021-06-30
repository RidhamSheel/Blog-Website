const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express();

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views', path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.status(200).render('Website.pug');
});

app.post('/', (req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let msg = req.body.msg;

    let data = `Name:${name} E-Mail:${email} Message:${msg}`;
    fs.appendFileSync('formdata.txt', data+"\r\n");
    console.log(req.body);
    res.status(200).render('Website.pug');
});

app.listen(process.env.PORT || 80,()=>{
    console.log("Server running at port 80");
});