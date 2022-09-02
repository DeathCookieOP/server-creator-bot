const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  message.delete();

  const title = args.join(' ');
  if (title) {
    let embed = new Discord.RichEmbed()
        .setTitle('Poll')
        .setDescription(title)
        .setFooter('Use 👍 or 👎 reactions to vote');

      message.channel.send(embed).then(function (message) {
        message.react("👍")
        message.react("👎")
      });
      
      
    }
  }    
module.exports.help = {
  name: "poll"
}