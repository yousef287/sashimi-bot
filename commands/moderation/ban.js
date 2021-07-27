module.exports = {
  name: "ban",
  description: "Bans The user!",
  args: true,
  usage: `<user>/<userid> <reason>`,
  cooldown: 1,
  execute(message, args) {
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
        member.ban({ ression: "ban", reason: reason }).then(() => {
          message.channel.send(`banned ${member.user.tag} \nReason: ` + reason);
        });
      } else {
        message.channel.send("cannot find member");
      }
    }
  },
};
