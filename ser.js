const express=require('express')
const hbs=require('hbs')
var app = express()
const port = process.env.PORT||3000

app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials')

hbs.registerHelper('setTime',()=>{
    return new Date().getFullYear()
    
})


app.get('/',(req,res)=>{
    res.render('home.hbs')
})

app.get('/about',(req,res)=>{
//    res.send("Git test Page")
    res.render('about.hbs')
})
app.get('/project',(req,res)=>{
    res.render('project.hbs',{
        projects:"Project Page"
    })
    
})
app.use((req,res,next)=>{
    res.render('profile.hbs')
    
})



app.listen(port,()=>{
    console.log(`server listen on local host 3000`)
})