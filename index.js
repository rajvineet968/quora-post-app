const express = require("express");
const app = express();
const port = 8080;
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

//important
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //ejs

app.use(express.static(path.join(__dirname, "public"))); //css,html files

app.use(express.urlencoded({ encoded: true })); //middlewares
app.use(express.json());

app.use(methodOverride('_method'));//methodoverride 
//till here

let posts = [
  {
    id:uuidv4() ,
    username: "Vineet Raj",
    content: "I love coding!!",
  },
  {
    id:uuidv4() ,
    username: "Raj",
    content: "coding madtini!!",
  },
  {
    id:uuidv4(),
    username: "Baigan",
    content: "ondu kelsa madtaiddinini",
  },
];

//INDEX ROUTE
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });//sending posts as parameters
});

//CREATE ROUTE
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})
app.post("/posts",(req,res)=>{ 
    let id=uuidv4(); 
    let {username,content}=req.body;
    posts.push({id,username,content});//*** */
    res.redirect("http://localhost:8080/posts");
})

//SHOW ROUTE
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((posts)=>id===posts.id);//array find function
    res.render("show.ejs",{post});
})

//PATCH ROUTE i.e. UPDATING
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let nc=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=nc;
    res.redirect("http://localhost:8080/posts");
    
})
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
})

//DESTROY ROUTE i.e. DELETE
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((posts)=>id!==posts.id);//array find function
    res.redirect("http://localhost:8080/posts");
})




app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
