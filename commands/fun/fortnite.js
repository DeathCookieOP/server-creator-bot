const Discord = require('discord.js');
const Client = require('fortnite');
// const fortnite = new Client(process.env.fortnite);
const keys = require("../../keys.json")
const fortnite = new Client(keys.fortnite);

module.exports.run = (bot, message, args) => {


  let infoEmbed = new Discord.RichEmbed()
  .setTitle("Command: /fortnite")
  .setColor("#FFDF00")
  .setDescription("**Description:** Shows fortnite stats of any player\n**Usage:** /fortnite [user] [platform]\n**Examples:**\n  /fortnite Ninja Pc");


    let username = args[0];
    let platform = args[1] || 'pc';

    if(!username) return message.channel.send(infoEmbed);
    if(!platform) return message.channel.send(infoEmbed);

    let data = fortnite.user(username, platform).then(data => {

        let stats = data.stats;
        let lifetime = stats.lifetime;


        let score = lifetime[6]['Score'];
        let mPlayed = lifetime[7]['Matches Played'];
        let Wins = lifetime[8]['Wins'];
        let WinPercentage = lifetime[9]['Win%'];
        let Kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];

        let FortniteEmbed = new Discord.RichEmbed()
        .setTitle("Fortnite Stats")
        .setAuthor(data.username)
        .setColor("#FFDF00")
        .addField("Wins", Wins, true)
        .addField("Kills", Kills, true)
        .addField("Matches Played", mPlayed, true)
        .addField("Win Rate", WinPercentage, true)
        .addField("K/D", kd, true)
        .addField("Score", score, true);

        message.channel.send(FortniteEmbed)

    });

}

module.exports.help = {
    name: "fortnite"
}
