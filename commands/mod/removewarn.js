const Discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  message.delete();
  let infoEmbed = new Discord.RichEmbed()
  .setTitle("Command: /removewarn")
  .setColor("#999999")
  .setDescription("**Description:** Removes a warning!\n**Usage:** /removewarn [user] [amount]\n**Examples:**\n  /removewarn @Nystrex 2");


  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send(infoEmbed);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
  let amount = args[1];
  if(!amount) return message.channel.send(infoEmbed);
  if(warns[wUser.id].warns <= 0) return message.channel.send("This user doesn't have any warns");
  let sender = message.author;

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };


  if(warns[wUser.id].warns < amount){
    message.channel.send("This amount is too large!");
  }

  warns[wUser.id].warns - amount;

  fs.writeFile("./warnings.json", JSON.stringify(warns, null, 4), (err) => {
    if(err) console.log(err);
  });

  message.channel.send(`Removed ${amount} warn from <@${wUser.id}>`);


}

module.exports.help = {
  name: "removewarn"
}
