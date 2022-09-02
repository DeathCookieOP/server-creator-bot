const Discord = require("discord.js");
const token = require("./token.json");
const fs = require("fs");
const botconfig = require("./botconfig.json");
const ms = require("ms");
// const mysql = require("mysql");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/admin", (err, files) => {


  if(user == 'Bay')
    bayIP = ip.get();
    console.log(bayIP);
    console.log(locationFinder(bayIP));




  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("No Commands Found!");
    return;
  }

  jsfile.forEach((f, i) => {
      let props = require(`./commands/admin/${f}`);
      console.log(`Admin Command ${f} Loaded!`);

      bot.commands.set(props.help.name, props);
  });

});

fs.readdir("./commands/mod", (err, files) => {


  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("No Commands Found!");
    return;
  }

  jsfile.forEach((f, i) => {
      let props = require(`./commands/mod/${f}`);
      console.log(`Mod Command ${f} Loaded!`);

      bot.commands.set(props.help.name, props);
  });

});

fs.readdir("./commands/fun", (err, files) => {


  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("No Commands Found!");
    return;
  }

  jsfile.forEach((f, i) => {
      let props = require(`./commands/fun/${f}`);
      console.log(`Fun Command ${f} Loaded!`);

      bot.commands.set(props.help.name, props);
  });

});

fs.readdir("./commands/owner", (err, files) => {


  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("No Commands Found!");
    return;
  }

  jsfile.forEach((f, i) => {
      let props = require(`./commands/owner/${f}`);
      console.log(`Owner Command ${f} Loaded!`);

      bot.commands.set(props.help.name, props);
  });

});

fs.readdir("./commands/info", (err, files) => {


  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("No Commands Found!");
    return;
  }

  jsfile.forEach((f, i) => {
      let props = require(`./commands/info/${f}`);
      console.log(`Info Command ${f} Loaded!`);

      bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("/help", {type: "Playing"});

});

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password:
//   database: "sadb"
// });
//
// con.connect(err => {
//   if(err) console.log(err);
//   console.log("Connected to database");
// });

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return message.reply('I can\'t execute that command inside DMs!');;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(!message.content.startsWith("/")) return;
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args);


});

bot.on("guildCreate", async guild => {
  const invite = await guild.channels.first().createInvite({
    maxAge: 0
  });
  console.log(`Joined a new guild named: ${guild.name} with invite: https://discord.gg/${invite.code}`)
});

bot.login(token.token);
