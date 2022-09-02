const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  let infoEmbed = new Discord.RichEmbed()
  .setTitle("Command: /wdr")
  .setColor("#999999")
  .setDescription("**Description:** Report a player to staff!\n**Usage:** /wdr [user] [reason]\n**Examples:**\n  /wdr @derpynoob133 V1a");
  
  
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!rUser) return message.channel.send(infoEmbed);
  let reason = args[1];
  if(rUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<:false:449958501830098954> You can't report that person!`).then(msg => msg.delete(5000));
  if(!reason) return message.channel.send(infoEmbed);
  let sender = message.author;

  let wdrEmbed = new Discord.RichEmbed()
  .setTitle("Watchdog")
  .setDescription("**Punishment Type:** Report")
  .setColor("#FF00EE")
  .addField("Reported User", `<@${rUser.id}>`, true)
  .addField("Reported By", `<@${sender.id}>`, true)
  .addField("Reported In", message.channel, true)
  .addField("Time", message.createdAt, true)
  .addField("Reason", reason, true)
  .setFooter(`User ID: ${rUser.id}`);

  let wdrchannel = message.guild.channels.find(`name`, "reports");
  if(!wdrchannel) return message.reply("Couldn't Find Required Channel!");


  if (args[1] === null){
  }else if (args[1] === "1a"){ 
      await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "1b"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "1c"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "1d"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "2"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "3a"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "3b"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "3c"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "4"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "4a"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "5"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "5a"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "6"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "6a"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "6b"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "7"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "8"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "8a"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "8b"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "9"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "9a"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "10"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "M1"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "M2"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "M3"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "M3a"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "M3b"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "M3c"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "M4"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "M5"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "F1"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "F1a"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "F2"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "F2a"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "F3"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "F4"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "F5"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "F6"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "F6a"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "E1"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "E2"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "E3"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "E4"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "E5"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "V1"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "V2"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "V3"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "V3a"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "V4"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "spam"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "Spam"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "Earrape"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else if (args[1] === "earrape"){ 
    await wdrchannel.send(wdrEmbed);
      return await message.channel.send(`:dog: <@${rUser.id}> <:true:449958345642737674> has been reported!`).then(msg => msg.delete(5000));
  
  }else{
    return await message.channel.send(`${args[1]} isn't a valid rule! Please put the rule number and, or the type. Eg. /wdr @user V1 (V standing for Voice Rules, etc.)`).then(msg => msg.delete(5000));
  }
  
  
  }
  
  module.exports.help = {
  name: "wdr"
  }