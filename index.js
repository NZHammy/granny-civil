const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});
const { token, prefix } = require('./config.json');

client.once('ready', () => {
    console.log('Bot is ready.');
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'calmdown') {
        const profanityList = ['badword1', 'badword2', 'badword3'];

        if (args.some(word => profanityList.includes(word.toLowerCase()))) {
            message.channel.send("Oh dear, dearie! Please mind your language and remember, I'm just a sweet grandmother trying to keep things civil.");
        }
    }
});

client.login(token);
