const Discord = require('discord.js');
const translate = require('google-translate-api');
const Langs = ['afrikaans','albanian','amharic','arabic','armenian','azerbaijani','bangla','basque','belarusian','bengali','bosnian','bulgarian','burmese','catalan','cebuano','chichewa','chinese simplified','chinese traditional','corsican','croatian','czech','danish','dutch','english','esperanto','estonian','filipino','finnish','french','frisian','galician','georgian','german','greek','gujarati','haitian creole','hausa','hawaiian','hebrew','hindi','hmong','hungarian','icelandic','igbo','indonesian','irish','italian','japanese','javanese','kannada','kazakh','khmer','korean','kurdish (kurmanji)','kyrgyz','lao','latin','latvian','lithuanian','luxembourgish','macedonian','malagasy','malay','malayalam','maltese','maori','marathi','mongolian','myanmar (burmese)','nepali','norwegian','nyanja','pashto','persian','polish','portugese','punjabi','romanian','russian','samoan','scottish gaelic','serbian','sesotho','shona','sindhi','sinhala','slovak','slovenian','somali','spanish','sundanese','swahili','swedish','tajik','tamil','telugu','thai','turkish','ukrainian','urdu','uzbek','vietnamese','welsh','xhosa','yiddish','yoruba','zulu'];

module.exports.run = async (bot, message, args) => {

  message.delete();
  if (args[0] === undefined) {

    const embed = new Discord.RichEmbed()
    .setColor("FFFFFF")
    .setDescription("**Provide a language and some text for bot to translate.**\nUsage: `/translate <language> <text>`");

    return message.channel.send(embed).then(msg => msg.delete(5000));

  } else {

    if (args[1] === undefined) {

      return message.channel.send('**Please give me something to translate.** `/translate <language> <text>`').then(msg => msg.delete(5000));

    } else {

      let transArg = args[0].toLowerCase();

      args = args.join(' ').slice(1);
      let translation;

      if (!Langs.includes(transArg)) return message.channel.send(`**Language not found.**`).then(msg => msg.delete(5000));
      args = args.slice(transArg.length);

      translate(args, {to: transArg}).then(res => {

        const switchEmbed = new Discord.RichEmbed()
        .setDescription(res.text)
        .setFooter(`english -> ${transArg}`)
        .setColor(`RANDOM`)
        .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL);
        return message.channel.send(switchEmbed).then(msg => msg.delete(10000));

      });

    }

  }

}

module.exports.help = {
  name: "translate"
}
