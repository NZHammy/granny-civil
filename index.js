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

// List of forbidden words
const forbiddenWords = ['badword1', 'badword2', 'badword3'];

client.on('messageCreate', async message => {
    if (message.author.bot) return; // Ignore messages from bots

    const content = message.content.toLowerCase();
    const hasForbiddenWord = forbiddenWords.some(word => content.includes(word));

    if (hasForbiddenWord) {
        // Delete the message
        message.delete();

        // Send a warning to the user
        message.channel.send("Oh dear, dearie! Please mind your language and remember, I'm just a sweet grandmother trying to keep things civil.");

        // Optional: Log the moderation action
        console.log(`${message.author.tag}'s message was removed for using inappropriate language.`);
    }

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
