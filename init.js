const mongoose = require("mongoose")
//const path=require("path")
const Chat=require("./models/chat.js")


main()
    .then(()=>{
        console.log("connection successful")
    })

    .catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats=[
  
    {
      from: "Alice",
      to: "Bob",
      message: "Thinking of you",
      created_at: new Date()
    },
    {
      from: "Michael",
      to: "Jennifer",
      message: "You're my sunshine",
      created_at: new Date()
    },
    {
      from: "David",
      to: "Emma",
      message: "Forever and always",
      created_at: new Date()
    },
    {
      from: "Sophia",
      to: "Ethan",
      message: "You make me smile",
      created_at: new Date()
    },
    {
      from: "Olivia",
      to: "Noah",
      message: "Can't stop thinking about you",
      created_at: new Date()
    },
    {
      from: "Ava",
      to: "Liam",
      message: "You're my everything",
      created_at: new Date()
    },
    {
      from: "Charlotte",
      to: "William",
      message: "You complete me",
      created_at: new Date()
    },
    {
      from: "Elijah",
      to: "Amelia",
      message: "Thinking of our future together",
      created_at: new Date()
    },
    {
      from: "James",
      to: "Mia",
      message: "Every moment with you is precious",
      created_at: new Date()
    }
  ]
  

 Chat.insertMany(allChats)
 