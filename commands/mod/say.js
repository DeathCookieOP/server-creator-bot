const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let specifyEmbed = new Discord.RichEmbed()
        .setColor("#0xF55D5D")
        .setDescription(`${message.author}, Please specify a word or message to embed.`)
        .setTimestamp();

    if (!args[0]) return message.channel.send(specifyEmbed);

    let embedSay = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`${args[0]}`);

    message.channel.send(embedSay);
}

module.exports.help = {
  name: "say"
}
