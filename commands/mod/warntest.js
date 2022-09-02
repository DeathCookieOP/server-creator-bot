const Discord = require('discord.js');
const db = require('quick.db')
const send = require('quick.hook')

module.exports.run = async (bot, message, args) => {

    let noUser = new Discord.RichEmbed()
    .addField("**Warn Error**", "Couldn't find a user!")
    .setThumbnail('https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png');

    let noPerms = new Discord.RichEmbed()
    .addField("**Warn Error**", "Sorry, but you do not have valid permissions! If you believe this is an error, contact an owner.")
    .setThumbnail('https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png');

    let sameRole = new Discord.RichEmbed()
    .addField("**Warn Error**", "The user you are trying to warn is either the same, or higher role than you.")
    .setThumbnail('https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png');

    let noReason = new Discord.RichEmbed()
    .addField("**Warn Error**", "Please specify a reason for the warn.")
    .setThumbnail('https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png');

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(noPerms);
    const modlog = message.guild.channels.find(channel => channel.name === 'warnings');
    const mod = message.author;

    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send(noUser);
    if (user.hasPermission("KICK_MEMBERS")) return message.channel.send(sameRole);

    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) return message.channel.send(noReason)

    const casenumbers = new db.table('CASENUMBERs')
    const guildcasenumber = await casenumbers.fetch(`case_${message.guild.id}`)
    const a = guildcasenumber
    const b = a + 1
    casenumbers.set(`case_${message.guild.id}`, b)
    //  console.log(guildcasenumber)
    const numberwarn = new db.table('WARNNUMBERs')
    const num1 = await numberwarn.fetch(`user_${user.id}_${message.guild.id}`)
    const y = 1
    const m = y + num1
    numberwarn.set(`user_${user.id}_${message.guild.id}`, m)
    // console.log(num1)


    if (!modlog) return message.channel.send('**Please create a channel with the name `mod-log`**')


    if (user) {

        //user.kick({ reason: `${reason}`})
        const userwarn = new db.table('USERWARNINGs')
        const num2 = await numberwarn.fetch(`user_${user.id}_${message.guild.id}`)
        const warns = await userwarn.fetch(`warn_${user.id}_${num2}_${message.guild.id}`)
        userwarn.set(`warn_${user.id}_${num2}_${message.guild.id}`, reason)

        const embed = new Discord.RichEmbed()
            .setAuthor('Warn')
            .addField('Moderator', `${mod}`)
            .addField('User', `<@${user.id}>`)

            .addField('Reason', `${reason}`)
            .addField('Case Number', `${guildcasenumber}`)
            .setColor('BLUE')
            .setTimestamp()
            .setFooter(`ID ${user.id}`);
        modlog.send(embed);
        message.channel.send(`${user} has been warned!`);
        user.send(`**You have been warned in ${message.guild.name}: ${reason}!**`);


    }
}

module.exports.help = {
  name: "warntest"
}
