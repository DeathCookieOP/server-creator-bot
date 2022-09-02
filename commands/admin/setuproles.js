const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  if(!message.member.hasPermission("ADMINISTRATOR")) return;

  let starting = new Discord.RichEmbed()
  .setColor("#898989")
  .addField("***Creating Roles...***", "Hold on, this shouldn't take long")
  .setThumbnail("https://cdn.discordapp.com/attachments/456005521863081984/456233538342223882/Cookiebot.png");

  let MakingOver = new Discord.RichEmbed()
  .setColor("#4286f4")
  .addField(":white_check_mark: ***Done!***", "Now do __***/setupchannels!***__")
  .setThumbnail("https://images-ext-2.discordapp.net/external/DZuzKE4jxltVPezE4CKj0utB1ZZzkFywfAzJ987_LGU/https/cdn.discordapp.com/attachments/442799460775493636/453608272025354251/image.png?width=80&height=80")
  .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL);

  message.channel.send(starting)

  message.guild.everyone.edit({
    permissions: 104139841,
  })

  message.guild.createRole({
    name:'∞',
    hoist: false,
    permissions: 2146958847,
    mentionable: false
  })

  message.guild.createRole({
    name:'▬▬▬▬▬▬▬▬▬▬',
    hoist: false,
    mentionable: false
  })

  message.guild.createRole({
    name: '♛ | Owner',
    color: [255, 0, 0],
    hoist: true,
    permissions: 2146958847,
    mentionable: false
  })

  message.guild.createRole({
    name: '♚ | Co-Owner',
    color: [255, 0, 0],
    hoist: true,
    permissions: 2146958847,
    mentionable: false
  })

  message.guild.createRole({
    name: '♠ | Administrator',
    color: "#ff5700",
    hoist: true,
    permissions: 1609952727,
    mentionable: false
  })

  message.guild.createRole({
    name: '♣ | Moderator',
    color: "#ff8800",
    hoist: true,
    permissions: 267779271,
    mentionable: false
  })

  message.guild.createRole({
    name: '⍟ | Trial-Mod',
    color: "#fffc00",
    hoist: true,
    permissions: 108358723,
    mentionable: false
  })

  message.guild.createRole({
    name: 'Staff',
    hoist: false,
    permissions: 108358723,
    mentionable: false
  })

  message.guild.createRole({
    name:'▬▬▬▬▬▬▬▬▬▬',
    hoist: false,
    mentionable: false
  })

  message.guild.createRole({
    name: '❃ Bots',
    color: "#bc57f3",
    hoist: false,
    permissions: 104156225,
    mentionable: false
  })

  message.guild.createRole({
    name: '✾ Famous',
    color: "#f95a5a",
    hoist: false,
    permissions: 104156225,
    mentionable: false
  })

  message.guild.createRole({
    name: 'VIP',
    color: "#",
    hoist: false,
    permissions: 104139841,
    mentionable: false
  })

  message.guild.createRole({
    name:'▬▬▬▬▬▬▬▬▬▬',
    hoist: false,
    mentionable: false
  })

  message.guild.createRole({
    name: 'Level 30',
    color: "#",
    hoist: false,
    permissions: 104139841,
    mentionable: false
  })

  message.guild.createRole({
    name: 'Level 25',
    color: "#",
    hoist: false,
    permissions: 104139841,
    mentionable: false
  })

  message.guild.createRole({
    name: 'Level 20',
    color: "#",
    hoist: false,

    permissions: 104139841,
    mentionable: false
  })

  message.guild.createRole({
    name: 'Level 15',
    color: "#",
    hoist: false,
    permissions: 104139841,
    mentionable: false
  })

  message.guild.createRole({
    name: 'Level 10',
    color: "#",
    hoist: false,
    permissions: 104139841,
    mentionable: false
  })

  message.guild.createRole({
    name: 'Level 7',
    color: "#",
    hoist: false,
    permissions: 104139841,
    mentionable: false
  })

  message.guild.createRole({
    name: 'Level 3',
    color: "#",
    hoist: false,

    permissions: 104139841,
    mentionable: false
  })

  message.guild.createRole({
    name:'▬▬▬▬▬▬▬▬▬▬',
    hoist: false,
    mentionable: false
  })


  message.guild.createRole({
    name: 'Muted',
    color: "#707070",
    permissions: 68248577,
    mentionable: false
  })

  message.channel.send(MakingOver)

}

module.exports.help = {
  name: "setuproles"
}
