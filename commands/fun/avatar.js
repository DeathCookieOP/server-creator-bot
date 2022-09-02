const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    // Define user, if nobody is mentioned it will store author
    let user = message.mentions.users.first() || message.author;

    // Form Embed
    const embed = new Discord.RichEmbed()
        .setColor(0xffffff) // This will set the embed sidebar color
        .setTitle(user.username) // This will set the embed title
        .setImage(user.avatarURL({size: 2048})); // This will set the embed image

    // Send Message
    message.channel.send(embed)

}

module.exports.help = {
  name: "avatar"
}
