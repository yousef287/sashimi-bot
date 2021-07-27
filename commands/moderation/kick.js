// const { Client } = require("discord.js");

module.exports = {
  name: "kick",
  description: "Kicks The user!",
  args: true,
  usage: `<User/ID> [reason]`,
  cooldown: 1,
  execute(message, args) {
    let user;
    const Discord = require("discord.js");

    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send("you don't have permissions to ban.");

    if (!message.guild.me.hasPermission("KICK_MEMBERS"))
      return message.channel.send("i don't have permissions to kick.");

    if (args[0].match(/.+#[0-9]{4}\b/g)) {
      //A tag was specified
      //Because first arg is in format {username}#{four numbers}

      //Use message.member if a user with that tag is not found
      let member = message.guild.members.cache.find(
        (mem) => mem.user.tag == args[0]
      );
      user = member.user;

      if (!member.kickable)
        return message.channel.send("you can't ban a moderator/admin.");

      let reason = args.slice(1).join(" ");
      let kickEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .setTitle(`Kicked **${user.tag}**`)
        .setDescription(`**Reason:** ` + reason)
        .setTimestamp();

      member.ban({ ression: "kick", reason: reason }).then(() => {
        message.channel.send(kickEmbed);
      });
      return;
    } else {
      let user =
        message.guild.member(message.mentions.members.first()) ||
        message.guild.members.cache.get(args[0]);

      if (user) {
        const member = message.guild.member(user.id);

        if (member) {
          if (!member.kickable)
            return message.channel.send("you can't ban a moderator/admin.");

          let reason = args.slice(1).join(" ");
          let kickEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setTitle(`Kicked **${member.user.tag}**`)
            .setDescription(`**Reason:** ` + reason)
            .setTimestamp();

          member.ban({ ression: "kick", reason: reason }).then(() => {
            message.channel.send(kickEmbed + "this works");
          });
        } else {
          message.channel.send("cannot find member");
        }
      }
    }
  },
};
