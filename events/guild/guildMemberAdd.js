const profileModel = require("../../models/profileSchema");

module.exports = async (client, discord, member) => {
  let profileData;

  try {
    profileData = await profileModel.findOne({ userID: member.user.id });
    if (!profileData) {
      let profile = await profileModel.create({
        userID: member.user.id,
        serverID: member.guild.id,
        coins: 1000,
        bank: 0,
      });
      profile.save();
      console.log(`Created a profile for ${member.user.tag}`);
    } else {
      return console.log(`profile exists ${profileData}`);
    }
  } catch (err) {
    console.error(err);
  }
};
