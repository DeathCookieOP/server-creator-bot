const Discord = require('discord.js')

module.exports.run = (client, message, args, tools) => {

  exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const msg = await message.channel.send("Pinging");
    msg.edit(':ping_pong:Pong! `' + `${msg.createdTimestamp - message.createdTimestamp}` + 'ms`' + ' API Latency `' + `${client.ping}` + 'ms`');
};

}

module.exports.help = {
    name: 'ping'
};
