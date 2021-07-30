module.exports = {
  name: "avatar",
  description: "Shows user avatar",
  aliases: ["av"],
  usage: "<User/ID>",
  args: true,
  cooldown: 2,
  execute(client, message, args, Discord) {
    let user;

    if (!isNaN(args[0]) && args[0].length == 18) {
      //An ID was specified
      //Because first arg is a number and is 18 chars long

      //Use message.member if a user with that ID is not found
      let member = message.guild.members.cache.get(args[0]) || message.member;
      user = member.user;
    } else if (args[0].match(/.+#[0-9]{4}\b/g)) {
      //A tag was specified
      //Because first arg is in format {username}#{four numbers}

      //Use message.member if a user with that tag is not found
      let member =
        message.guild.members.cache.find((mem) => mem.user.tag == args[0]) ||
        message.member;
      user = member.user;
    } else {
      //Either a mention was specified or just use the message author

      user = message.mentions.users.first() || message.author;
    }

    let embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setTitle(`${user.username}'s Avatar`)
      .setImage(
        user.displayAvatarURL({ format: "png", dynamic: true, size: 256 })
      )
      .setColor("RANDOM");
    message.channel.send(embed);
  },
};
