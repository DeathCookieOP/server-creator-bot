const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("**Usage:** /NoXP [user] [1s/1m/1h/1d/1w/1y]");
  let NoXPRole = message.guild.roles.find(`name`, "NoXP")
  if(!NoXPRole) return message.reply("NoXP role was not found!");

  if(rMember.roles.has(NoXPRole.id));
  await(rMember.addRole(NoXPRole.id));

  let time = args[1];
  if(!time) return;

  try{
    await rMember.send(`You have been tempbanned from getting any XP on TapL's Discord V2 for: ${time}`)
  }catch(e){
    message.channel.send(`<@${rMember.id}>, You have been tempbanned from getting any XP on TapL's Discord V2 for: ${time}`)
  }

  setTimeout(function(){
    rMember.removeRole(NoXPRole.id);
  }, ms(time));
}

module.exports.help = {
  name: "noxp"
}
