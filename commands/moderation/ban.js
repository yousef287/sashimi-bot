const { Client } = require("discord.js");

module.exports = {
  name: "ban",
  description: "Bans The user!",
  args: true,
  usage: `<user or userid> <reason>`,
  cooldown: 1,
  execute(message, args) {
    const Discord = new require("discord.js");

    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send("you don't have permissions to ban.");

    if (!message.guild.me.hasPermission("BAN_MEMBERS"))
      return message.channel.send("i don't have permissions to ban.");

    let user =
      message.guild.member(message.mentions.members.first()) ||
      message.guild.members.cache.get(args[0]);

    if (user) {
      const member = message.guild.member(user.id);

      if (member) {
        if (!member.bannable)
          return message.channel.send("you can't ban a moderator/admin.");

        let reason = args.slice(1).join(" ");
        let banEmbed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
          .setTitle(`Banned **${member.user.tag}**`)
          .setDescription(`**Reason:** ` + reason)
          .setTimestamp();

        member.ban({ ression: "ban", reason: reason }).then(() => {
          message.channel.send(banEmbed);
        });
      } else {
        message.channel.send("cannot find member");
      }
    }
  },
};
