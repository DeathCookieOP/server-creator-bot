const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  let coin = ["Heads", "Tails"];
  let flip = Math.floor(Math.random() * coin.length);
  let coinembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .addField(`You Flipped`, coin[flip])
    .setFooter(`Requested by ${message.author.tag} 🍑`, message.author.avatarURL);

  message.channel.send(coinembed).then(msg => msg.delete(1000));

}

module.exports.help = {
  name: "coinflip"
}
