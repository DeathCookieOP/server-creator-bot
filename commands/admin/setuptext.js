const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

  message.delete();
  if(!message.member.hasPermission("ADMINISTRATOR")) return;

  //The Making Embeds
  let making = new Discord.RichEmbed()
  .setTitle("Creating...")
  .setColor("#2200ff")
  .addField("Hold on, this won'shouldn't take long.")
  .setFooter("Thanks for using Cookie Bot");

  let makingOver = new Discord.RichEmbed()
  .setTitle("Done!")
  .setColor("#2200ff")
  .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL);
  //End of making Embeds

  //Start of channel.send Embeds
  let infoEmbed = new Discord.RichEmbed()
  .setTitle(":scroll: Information :scroll:")
  .setColor("#2200ff")
  .addField("hi")
  .addField("bye")
  .setFooter(`Information of ${message.server.name}`, server);

  let annEmbed = new Discord.RichEmbed()
  .setTitle("Done!")
  .setColor("#2200ff")
  .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL);

  let rules = "asgfag"
  let rules2 = "gdfg"
  let rules3 = "gsagds"
  let rules4 = "gagasd"
    //End of channel.send Embeds


  let infoChannel = message.guild.channels.find(`name`, "information");
  let annChannel = message.guild.channels.find(`name`, "announcements");
  let rulesChannel = message.guild.channels.find(`name`, "rules");

  message.channel.send(making)
  infoChannel.send(infoEmbed)
  rulesChannel.send(rules, rules2, rules3, rules4)
  annChannel.send(annEmbed)
  message.channel.send(makingOver)



}

module.exports.help = {
  name: "test"
}
