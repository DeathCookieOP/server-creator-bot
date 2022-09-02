const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete();
  if(!message.member.hasPermission("ADMINISTRATOR")) return;

  let starting = new Discord.RichEmbed()
  .setColor("#898989")
  .addField("***Creating...***", "Hold on, this shouldn't take long")
  .setThumbnail("https://cdn.discordapp.com/attachments/456005521863081984/456233538342223882/Cookiebot.png");

  let CategoryDone = new Discord.RichEmbed()
  .setTitle(":white_check_mark: ***Created Categories, moving onto channels.***")
  .setColor("#4286f4")
  .setThumbnail("https://images-ext-2.discordapp.net/external/DZuzKE4jxltVPezE4CKj0utB1ZZzkFywfAzJ987_LGU/https/cdn.discordapp.com/attachments/442799460775493636/453608272025354251/image.png?width=80&height=80");


  let MakingOver = new Discord.RichEmbed()
  .setColor("#4286f4")
  .addField(":white_check_mark: ***I have finished!***", "Now do __***/setperms!***__")
  .setThumbnail("https://images-ext-2.discordapp.net/external/DZuzKE4jxltVPezE4CKj0utB1ZZzkFywfAzJ987_LGU/https/cdn.discordapp.com/attachments/442799460775493636/453608272025354251/image.png?width=80&height=80")
  .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL);


  message.channel.send(starting);
  message.guild.createChannel("📰 ● Information", `category`).then((cat) => {
    message.guild.createChannel("announcements", 'text').then((ch) => ch.setParent(cat))
    message.guild.createChannel("rules", 'text').then((ch) => ch.setParent(cat))
    message.guild.createChannel("information", 'text').then((ch) => ch.setParent(cat))
  })

  message.guild.createChannel("👑 ● Fortnite", `category`).then((cat) => {
    message.guild.createChannel("welcome", 'text').then((ch) => ch.setParent(cat))
    message.guild.createChannel("fortnite-shop", 'text').then((ch) => ch.setParent(cat))
    message.guild.createChannel("looking-for-squad", 'text').then((ch) => ch.setParent(cat))
    message.guild.createChannel("fortnite-art", 'text').then((ch) => ch.setParent(cat))
    message.guild.createChannel("wins", 'text').then((ch) => ch.setParent(cat))
    message.guild.createChannel("locker", 'text').then((ch) => ch.setParent(cat))
  })

  message.guild.createChannel("💬 ● Chats", `category`).then((cat) => {
    message.guild.createChannel("chat", 'text').then((ch) => ch.setParent(cat))
    message.guild.createChannel("memes", 'text').then((ch) => ch.setParent(cat))
    message.guild.createChannel("media", 'text').then((ch) => ch.setParent(cat))
    message.guild.createChannel("bots", 'text').then((ch) => ch.setParent(cat))
    message.guild.createChannel("music", 'text').then((ch) => ch.setParent(cat))
  })

  message.guild.createChannel("🔓 ● Staff Chats", `category`).then((cat) => {
    message.guild.createChannel("staff-chat", 'text').then((ch) => ch.setParent(cat))
    message.guild.createChannel("staff-ideas", 'text').then((ch) => ch.setParent(cat))
    message.guild.createChannel("admin-chat", 'text').then((ch) => ch.setParent(cat))
    message.guild.createChannel("mod-log", 'text').then((ch) => ch.setParent(cat))
  })

  message.guild.createChannel("🔊 ● Voice Channels", `category`).then((cat) => {
    message.guild.createChannel("💤 Lobby / AFK", 'voice').then((ch) => ch.setParent(cat))
    message.guild.createChannel("🌎 Public Room 1", 'voice').then((ch) => ch.setParent(cat))
    message.guild.createChannel("🌎 Public Room 2", 'voice').then((ch) => ch.setParent(cat))
    message.guild.createChannel("🌎 Public Room 3", 'voice').then((ch) => ch.setParent(cat))
    message.guild.createChannel("🎧 Music Room", 'voice').then((ch) => ch.setParent(cat))
    message.guild.createChannel("🔓 Private Duos", 'voice').then((ch) => ch.setParent(cat))
    message.guild.createChannel("🔓 Private Trios", 'voice').then((ch) => ch.setParent(cat))
    message.guild.createChannel("🔓 Private Quads", 'voice').then((ch) => ch.setParent(cat))
  })

  message.channel.send(CategoryDone)


  message.channel.send(MakingOver)

}

module.exports.help = {
  name: "setupchannels"
}
