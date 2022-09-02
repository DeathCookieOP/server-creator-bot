const db = require('quick.db');
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

let user = message.mentions.users.first()
if (!user) return message.channel.send('**Please mention a user!**')

const numberwarn = new db.table('WARNNUMBERs')
numberwarn.fetch(`user_${user.id}_${message.guild.id}`).then(async i => {


//if (i === null) i = '0'
if (i === null) return message.channel.send(`**This user don't have any warnings**`)


const userwarns = new db.table('USERWARNINGs')

const warns1 = await userwarns.fetch(`warn_${user.id}_${message.guild.id}`)

let embed0 = new Discord.RichEmbed()
.setAuthor(`${user.username}'s has ${i} warnings!`)
.setDescription(`Reasons: **${warns1}**`)
.setColor('BLUE');

if (!args[1]) return message.channel.send(embed0);

if (!args[1]) return;
 const warns = await userwarns.fetch(`warn_${user.id}_${args[1]}_${message.guild.id}`)




    const embed1 = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s has ${args[1]} warnings`)
    .setDescription(`Reason: **${warns}**`)
    .setColor('BLUE');


    const embed2 = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s has ${args[1]} warnings`)
    .setDescription(`Reason: **${warns}**`)
    .setColor('BLUE');


    const embed3 = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s has ${args[1]} warnings`)
    .setDescription(`Reason: **${warns}**`)
    .setColor('BLUE');


    const embed4 = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s has ${args[1]} warnings`)
    .setDescription(`Reason: **${warns}**`)
    .setColor('BLUE');


    if (args[1] === '1') return message.channel.send(embed1)
    if (args[1] === '2') return message.channel.send(embed2)
    if (args[1] === '3') return message.channel.send(embed3)

    else {
        message.channel.send(embed4)
    }



//message.channel.send(`warn${user.id}_${args[1]}`)




  //console.log(`${warns}`);
})

}

module.exports.help = {
  name: "warningstest"
}
