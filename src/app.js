const express =require("express");
const path=require("path");
const hbs=require("hbs");
const app=express();
const port=8000;

//static path
const staticPath=path.join(__dirname,"../public");
const templatesPath=path.join(__dirname,"../templates/views");
const partialsPath=path.join(__dirname,"../templates/partials");
app.set('view engine', 'hbs');
app.set("views",templatesPath);
hbs.registerPartials(partialsPath);


app.use(express.static(staticPath));

//template engine



app.get("",(req,res)=>{
    res.render("index");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("*",(req,res)=>{
    res.render("404",{
        errorcomment:"not found"
    })
});



app.listen(port,()=>{
    console.log(`server listening to the port no ${port}`);
});