const Discord = require("discord.js");
//for .env to work locally and load the token
require("dotenv").config();
//important imports
const fs = require("fs");
const client = new Discord.Client();
const mongoose = require("mongoose");

client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord)
})

mongoose
  .connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

//login token should be with heroku secret env key
let token = process.env.token;
client.login(token);
