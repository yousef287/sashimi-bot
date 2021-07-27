module.exports = {
  name: "unban",
  description: "Unbans user with id",
  usage: `<UserID> [Reason]`,
  args: true,
  cooldown: 1,
  execute(message, args) {
    const Discord = new require("discord.js");
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        `**${message.author.username}**, You do not have perms to unban someone`
      );
    }

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        `**${message.author.username}**, I do not have perms to unban someone`
      );
    }

    //An ID was specified
    //Because first arg is a number and is 18 chars long
    if (isNaN(args[0])) {
      return message.channel.send("Please provide a valid id");
    }
    if (args[0].length != 18) return message.channel.send("Please provide a valid id");

    let userID = args[0];
    message.guild.fetchBans().then((bans) => {
      if (bans.size == 0)
        return message.channel.send("User not banned (IF valid)");
      let bUser = bans.find((b) => b.user.id == userID);
      if (!bUser) return message.channel.send("User is not banned (IF valid)");
      let unbanEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(bUser.user.displayAvatarURL({ dynamic: true }))
        .setTitle(`Unbanned **${bUser.user.tag}**`)
        .setTimestamp();
      message.guild.members.unban(bUser.user);
      message.channel.send(unbanEmbed);
    });
  },
};
