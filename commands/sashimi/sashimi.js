const Discord = require("discord.js");
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};
module.exports = {
  name: "sashimi",
  description: "Sashimi pics!",
  cooldown: 3,
  execute(message) {
    var pics = [
      "https://cdn.discordapp.com/attachments/712097156541972511/716837536764264538/image0.jpg",
      "https://cdn.discordapp.com/attachments/712097156541972511/716838080820150373/image0.jpg",
      "https://cdn.discordapp.com/attachments/⁸/716543721964830751/image0.jpg",
      "https://cdn.discordapp.com/attachments/712097156541972511/716839280106012762/image0.jpg",
      "https://cdn.discordapp.com/attachments/712097156541972511/716839731144687636/image0.jpg",
      "https://cdn.discordapp.com/attachments/712097156541972511/716840026184482856/image0.jpg",
      "https://cdn.discordapp.com/attachments/715063621113348158/716142663224787014/image0.jpg",
      "https://cdn.discordapp.com/attachments/715063621113348158/715687672148131850/image0.jpg",
      "https://cdn.discordapp.com/attachments/715063621113348158/715476850922487818/image0.jpg",
      "https://cdn.discordapp.com/attachments/712097156541972511/716840423322026024/image0.jpg",
      "https://cdn.discordapp.com/attachments/712097156541972511/716841126879035482/image0.jpg",
      "https://cdn.discordapp.com/attachments/698967193211240588/717279162217398272/image0.jpg",
      "https://cdn.discordapp.com/attachments/715063621113348158/715134112419020820/image0.jpg",
      "https://cdn.discordapp.com/attachments/715063621113348158/715134286394687538/image0.jpg",
      "https://cdn.discordapp.com/attachments/712097156541972511/717572001769848842/image0.jpg",
      "https://cdn.discordapp.com/attachments/715063621113348158/715962243145007174/image0.jpg",
      "https://cdn.discordapp.com/attachments/715063621113348158/717087550094704711/image0.jpg",
      "https://cdn.discordapp.com/attachments/715063621113348158/717103731644301352/image0.jpg",
      "https://cdn.discordapp.com/attachments/712097135444623391/717277377713012756/image0.jpg",
      "https://cdn.discordapp.com/attachments/698967193211240588/717278716459221012/image0.jpg",
      "https://cdn.discordapp.com/attachments/705142970147536966/717577654630613082/image0.jpg",
      "https://cdn.discordapp.com/attachments/712097135444623391/718066206493638666/image0.jpg",
      "https://cdn.discordapp.com/attachments/717881053670277190/717984755798376478/image0.jpg",
      "https://cdn.discordapp.com/attachments/717881053670277190/717894487501832232/image0.jpg",
      "https://cdn.discordapp.com/attachments/717881053670277190/717882847490342962/image0.jpg",
      "https://cdn.discordapp.com/attachments/712097135444623391/718067077210177569/image0-35.jpg",
      "https://cdn.discordapp.com/attachments/717881053670277190/718068144035463219/image0.jpg",
    ];
    const sashimiEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("here a sashimi pic for you.")
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setImage(pics.random())
      .setTimestamp()
      .setFooter("Stop wanking to sashimi bruv");

    message.channel.send(sashimiEmbed);
  },
};
