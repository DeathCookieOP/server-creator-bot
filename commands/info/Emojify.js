const mapping = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:'
  };

  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  const Discord = require("discord.js");

  module.exports.run = async (bot, message, args, level) => { // eslint-disable-line no-unused-vars

    let infoEmbed = new Discord.RichEmbed()
    .setTitle("Command: /emojify")
    .setColor("#999999")
    .setDescription("**Description:** sends text as emojis!\n**Usage:** /emojify [text]\n**Examples:**\n  /emojify Hello!");

    message.delete();
    if (args.length < 1) {
      message.channel.send(infoEmbed);

      if(!message.member.hasPermission("MANAGE_MEMBERS")) return;
  }

  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => mapping[c] || c)
          .join('')
  ).then(msg => msg.delete(10000));
  };


  module.exports.help = {
    name: "emojify"
  }
