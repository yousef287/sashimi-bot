const { Client } = require("discord.js");

module.exports = {
  name: "kick",
  description: "Kicks The user!",
  args: true,
  usage: `<user or userid> <reason>`,
  cooldown: 1,
  execute(message, args) {
    const Discord = new require("discord.js");
    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send("you don't have permissions to kick.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
      return message.channel.send("i don't have permissions to kick.");

    let user =
      message.guild.member(message.mentions.members.first()) ||
      message.guild.members.cache.get(args[0]);

    if (user) {
      const member = message.guild.member(user.id);

      if (member) {
        if (!member.kickable)
          return message.channel.send("you can't kick a moderator/admin.");

        let reason = args.slice(1).join(" ");
        let kickEmbed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setThumbnail(member.user.displayAvatarURL({dynamic:true}))
          .setTitle(`Kicked **${member.user.tag}**`)
          .setDescription(`**Reason:** ` + reason)
          .setTimestamp();

        member.kick({ ression: "kick", reason: reason }).then(() => {
          message.channel.send(kickEmbed);
        });
      } else {
        message.channel.send("cannot find member");
      }
    }
  },
};
