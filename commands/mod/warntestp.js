const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  Client.extractMember(msg, 0).then((member) => {
            if (member === null) {
                return Client.send(msg, Client.createEmbed("fail", "Not a member"));
            }

            msg.params.shift();
            let reason = msg.params.join(" ");

            Client.log(msg, member.id, "warn", reason);

            Client.db.getModlog(msg.guild.id, member.id).then((rows) => {
                Client.db.getSettings(msg.guild.id, "warntime").then((value) => {
                    let active = filterActiveWarnings(rows, value);

                    let warnMessage = `You have been warned on **${msg.guild.name}**\n\nYou have ${active}/3 active warnings.`;
                    if (reason) warnMessage += "\nReason: " + reason;

                    member.send(Client.createEmbed("warning", warnMessage)).catch((reason) => {
                        Client.send(msg, Client.createEmbed("fail", reason.message));
                    });

                    /*if (active >= 3) {
                        let spoofedMessage = msg;
                        spoofedMessage.params = [member.id, "3 active warnings"] ;
                        spoofedMessage.author = msg.client.user;
                        Client.commands.get("kick").execute(Client, spoofedMessage);
                    }*/
                });
            });
        });
      }
        module.exports.help = {
          name: "warntest"
        }
