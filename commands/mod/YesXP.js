const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  message.delete();
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You don't have permission to run this command!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("**Usage:** /YesXP {user}");
  let NoXPRole = message.guild.roles.find(`name`, "NoXP")
  if(!NoXPRole) return message.reply("NoXP role was not found!");

  if(rMember.roles.has(NoXPRole.id));
  await(rMember.addRole(NoXPRole.id));

  try{
    await rMember.send(`You have been tempbanned from getting any XP on TapL's Discord V2 for: ${length}`)
  }catch(e){
    message.channel.send(`<@${rMember.id}>, You have been tempbanned from getting any XP on TapL's Discord V2 for: ${length}`)
  }

  
}

module.exports.help = {
  name: "yesxp"
}
