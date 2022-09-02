const Discord = require("discord.js");
const apikey = require ("../../keys.json");
const Client = require("fortnite");
const config = require("../../botconfig.json");
const fortnite = new Client(apikey.fortnite);

module.exports.run = async (bot, message, args) => {
    await message.delete();

    let infoEmbed = new Discord.RichEmbed()
    .setTitle("Command: /fortnite")
    .setColor("#999999")
    .setDescription("**Description:** Shows the stats of a fortnite user. \n**Usage:** /fortnite [username] [platform]\n**Examples:**\n ");

    let username = args[0];
    let platform = args[1] || 'pc';

    if(!username) return message.channel.send(infoEmbed)

    let data = fortnite.user(username, platform).then(data => {
        console.log(data);
        let stats = data.stats;
        let lifetime = stats.lifetime;
        console.log(lifetime);

        let score = lifetime[6]['Score'];
        let mplayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];

        let embed = new Discord.RichEmbed()
        .setTitle("Fortnite Tracker")
        .setAuthor(data.username)
        .setColor('RANDOMs')
        .addField("Wins", wins, true)
        .addField("Win Percentage",  winper, true)
        .addField("Kills", kills, true)
        .addField("Score", score, true)
        .addField("Matches Played", mplayed, true)
        .addField("K/D", kd, true);

        message.channel.send(embed)
    });


}

module.exports.help = {
  name: "tfortnite"
}
