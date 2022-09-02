const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    // Lets define our array of guilds
    const guildArray = client.guilds.map((guild) => {
      return `${guild.name} : ${guild.id} : https://discord.gg/${guild.createInvite}`
    });

    // And send it
    if(message.author.id === '206516500171849729'){
      message.author.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
  }else if(message.author.id === '275098656695255041'){
      message.author.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
  }else{
    return;
  }


  }
module.exports.help = {
    name: "servers"
}
