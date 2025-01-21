const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chats = [
  {
    from: "Vaibhav",
    to: "Molu",
    msg: "Hi how are you buddy",
    created_at: new Date(),
  },
  {
    from: "Rohit",
    to: "Sohan",
    msg: "Lets play Bgmi",
    created_at: new Date(),
  },
  {
    from: "Rita",
    to: "Lucy",
    msg: "Lets go to shopping",
    created_at: new Date(),
  },
  {
    from: "Natsu",
    to: "Gildarts",
    msg: "Lets train",
    created_at: new Date(),
  },
  {
    from: "Zoro",
    to: "Sanji",
    msg: "Where are the booze",
    created_at: new Date(),
  },
  {
    from: "Goku",
    to: "Vegeta",
    msg: "Lets Fight",
    created_at: new Date(),
  },
];

Chat.insertMany(chats);
