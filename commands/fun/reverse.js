const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {
    message.delete();
  if(!args[0]) return message.channel.send('Correct usage: **/reverse (text to reverse)**').then(msg => msg.delete(5000));

  function reverseString(str) {
      return str.split("").reverse().join("");
  }

  let sreverse = reverseString(args.join(' '))

  if(args[0] === sreverse) {

  sreverse = `${args.join(' ')}..Wait... You broke it!`

  }
  const reverseEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag}`, message.author.avatarURL)
  .setColor(0xFFF000)
  .addField('Input: ', '```' + `${args.join(' ')}` + '```')
  .addField('Output: ', '```' + `${sreverse}` + '```')
  .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
  message.channel.send({embed: reverseEmbed}).then(msg => msg.delete(5000))

}

module.exports.help = {
  name: "reverse"
}
