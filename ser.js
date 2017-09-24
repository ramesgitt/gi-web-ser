const express=require('express')
const hbs=require('hbs')
var app = express()
const port = process.env.PORT||3000

app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.use((req,res,next)=>{
    res.render('error.hbs')
})



app.get('/',(req,res)=>{
    res.send("Welcome Home")
})

app.get('/about',(req,res)=>{
//    res.send("Git test Page")
    res.render('about.hbs')
})

app.listen(port,()=>{
    console.log(`server listen on local host 3000`)
})