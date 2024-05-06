const express = require("express")
const mongoose = require("mongoose")
const path=require("path")
const Chat=require("./models/chat.js")
const methodOverride=require("method-override")
const app=express();

const port =3000;
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
main()
    .then(()=>{
        console.log("connection successful")
    })

    .catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let chat1=new Chat({
    from:"kamal",
    to:"Shraddha",
    message:"Love is love",
    created_at: new Date()

    //Date() is a class which gives a random
    // day and time and it ends with Z saying its 
    // generated acc to UTC standard of time
})
/*
chat1.save().then((res)=>{
    console.log(res)
})*/

app.get("/",(req,res)=>{
    res.send("hello love!")
})


//Index route
app.get("/chats", async (req,res)=>{
 let chats= await Chat.find();
 //console.log(chats)
 res.render("index.ejs",{chats});
 //this find() is an asynch fn so we hva to wait for it
 // so we willl b using await()
})

// for mongo shell working
// use db.chats.find()

// add new chat
app.get("/chats/new",(req,res)=>{
res.render("new.ejs")
})

// create route

app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let newChat= new Chat ({
        from:from,
        to:to,
        message:msg,
        created_at:new Date()
    })
    //console.log(newChat)
    newChat
    .save()
    .then(res=>{
        // where we use then()
        // system understands it is a  async fn , so need of using await()  again
        console.log("Chat was saved")
    })
    .catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats")
})

// edit chat

app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
   let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat})
})

//  update 

app.put("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let {msg:newMsg}=req.body;
    //console.log(newMsg)
    let updatedchat = await Chat.findByIdAndUpdate(
        id,
        {message:newMsg},
        {runValidators:true},
        {new:true}
    );
   // console.log(updatedchat)
    res.redirect("/chats")
})

// destrot / delete chat

app.delete("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let deletedChat=await Chat.findByIdAndDelete(id);
    console.log(deletedChat)
    res.redirect("/chats")
})

app.listen(port,()=>{
console.log(`Server is listening on port ${port} `)
})