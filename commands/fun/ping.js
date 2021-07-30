module.exports = {
  name: "ping",
  description: "The test works!",
  cooldown: 5,
  execute(client, message, args, Discord) {
    message.channel.send(`<:emoji_1:870481549924139049>
      <:emoji_2:870483118845485096> 
      <:emoji_3:870483156279627776> 
      <:emoji_4:870483179755171890>` );
  },
};
