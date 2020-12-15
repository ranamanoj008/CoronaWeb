require('dotenv').config()
const express = require('express');
const { stat } = require('fs');
const app = express()
const port = process.env.PORT || 8000;
const path = require('path')
require('./db/conn')
const Coronadata = require('./model/data')

// console.log(path.join(__dirname, '../public'))
const viewPath = path.join(__dirname, '../views');
const staticPath = path.join(__dirname, '../public');

app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', viewPath)
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req,res)=>{
    res.render('index');
})

app.post('/contact', async(req,res)=>{
    try{
        const data = new Coronadata({
            username : req.body.username,
            email : req.body.email,
            phone : req.body.phone,
            coronaSym : req.body.coronaSym,
            msg : req.body.msg
        })
        const Cdata = await data.save();
        res.render('index')
    }catch(e){
        res.send(e)
        console.log(e)
    }
})

app.listen(port, ()=>{
    console.log(`port ${port}`);
})