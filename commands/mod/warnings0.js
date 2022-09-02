const { RichEmbed } = require("discord.js");
const { warns } = require("../../index");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return;

  const user = message.mentions.members.first() || message.guild.members.get(args[0]);
  if(!user) return message.reply("**Usage:** /warnings {user}");

  const userWarns = await warns.findAll({ where: { user_id: user.id } });
  message.reply(`<@${user.id}> has ${userWarns.length} warning/s.`, { embed: new RichEmbed()
    .setAuthor(user.tag, user.displayAvatarURL)
    .setDescription(`${userWarns.length === 0 ? 'Cannot display last 5 warnings because they do not have any!' : userWarns.map((w, i) => `${i + 1}. ${w.reason}`)}`),
  });
};

module.exports.help = {
  name: "warnings0",
};
