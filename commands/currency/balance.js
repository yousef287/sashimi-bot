const profileModel = require("../../models/profileSchema");
module.exports = {
  name: "balance",
  aliases: ["bal", "bl"],
  permissions: [],
  description: "Check the user balance",
  async execute(client, message, args, Discord) {
    let user;
    let stop;
    if (!args.length) {
      user = message.author;
      stop = true;
    }
    if (!isNaN(args[0]) && args[0].length == 18) {
      //An ID was specified
      //Because first arg is a number and is 18 chars long

      //Use message.member if a user with that ID is not found
      let member = message.guild.members.cache.get(args[0]) || message.member;
      user = member.user;
    } else if (!stop && args[0].match(/.+#[0-9]{4}\b/g)) {
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

    let profileData = await profileModel.findOne({
      userID: user.id,
    });
    try {
      if (!profileData) {
        await profileModel.create({
          userID: user.id,
          serverID: message.guild.id,
          coins: 1000,
          bank: 0,
        });
        profileData = await profileModel.findOne({
          userID: user.id,
        });
      }
    } catch (err) {
      console.log(err);
    }

    const coins = profileData.coins;
    const bank = profileData.bank;
    const net = +coins + +bank;
    const moneyEmoji = '<:emoji_3:870483156279627776> '
    const balEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .setTitle(`**${user.tag}\'s Balance**`)
      .setDescription(
        `**Wallet:  ${moneyEmoji} ${coins.toLocaleString("en-US")}\nBank:     ${moneyEmoji} ${bank.toLocaleString("en-US")}\nNet:       ${moneyEmoji} ${net.toLocaleString("en-US")}**`
        )
      .setTimestamp();

    message.channel.send(balEmbed);
  },
};
