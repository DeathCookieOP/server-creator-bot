const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  message.delete();
  let infoEmbed = new Discord.RichEmbed()
  .setTitle("Command: /mute")
  .setColor("#999999")
  .setDescription("**Description:** Mutes a player!\n**Usage:** /mute [user] [1s/m/d]\n**Examples:**\n  /mute @DeathCookieOP 5d");
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
  let mUser =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!mUser) return message.channel.send(infoEmbed).then(msg => msg.delete(10000));
  if(mUser.id === message.author.id) return message.channel.send("You can't mute yourself!");
  if(mUser.highestRole.position >= message.member.highestRole.position) return message.channel.send("You can't mute a member who is higher or has the same role as you!").then(msg => msg.delete(5000));
  let sender = message.author;
  
  let mutedrole = message.guild.roles.find(r => r.name === "Muted");
  if(!mutedrole) {
    try{
        mutedrole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions: []
        });

        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(mutedrole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
    }catch(e){
      console.log(e.stack);

    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.channel.send(infoEmbed).then(msg => msg.delete(10000));

  await(mUser.addRole(mutedrole.id));

  
  message.channel.send(`<@${mUser.id}> has been muted!`).then(msg => msg.delete(5000));

  setTimeout(function(){
    mUser.removeRole(mutedrole.id);
    message.channel.send(`<@${mUser.id}> has been unmuted!`).then(msg => msg.delete(5000));
  }, ms(mutetime));


  let muteEmbed = new Discord.RichEmbed()
  .setTitle("Watchdog")
  .setDescription("**Punishment Type:** Mute")
  .setColor("#FF8800")
  .addField("Muted User", `<@${mUser.id}>`, true)
  .addField("Muted By", `<@${sender.id}>`, true)
  .addField("Muted In", message.channel, true)
  .addField("Muted At", message.createdAt, true)
  .addField("Muted For", mutetime, true)
  .setFooter(`User ID: ${mUser.id}`);

  let mutechannel = message.guild.channels.find(`name`, "mod-log");
  if(!mutechannel) return message.reply("Couldn't Find Required Channel!").then(msg => msg.delete(5000));


  mUser.send(`You have been muted on TapL's Discord V2 for: ${ms(ms(mutetime))}`).then(()=> {
  });

  mutechannel.send(muteEmbed);


} 

module.exports.help = {
  name: "mute"
}