const Discord = require('discord.js');
module.exports = {
    name: "invite",
    description: "invite the bot to your server!",
    cooldown: 5,
    execute(message) {
      const invitemsg = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Tap to add me to your server!")
      .setURL("https://discord.com/oauth2/authorize?client_id=868533753188876308&scope=bot&permissions=117760");
      message.channel.send(invitemsg);
    },
  };
  