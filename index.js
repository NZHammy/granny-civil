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

client.on('messageCreate', async message => {
    if (message.content === `${prefix}calmdown`) {
        try {
            await message.channel.send("Oh dear, dearie! Please mind your language and remember, I'm just a sweet grandmother trying to keep things civil.");
            await message.delete(); // Delete the user's command message
        } catch (error) {
            console.error('Error:', error);
        }
    }
});

client.login(token);
