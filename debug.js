const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});
const { token, prefix } = require('./config.json');

client.once('ready', () => {
    console.log('Bot is ready.');
    const debugChannelId = '1122019883329261742'; // Replace with your channel ID

    // Find the channel object using the channel ID
    const debugChannel = client.channels.cache.get(debugChannelId);

    if (debugChannel) {
        debugChannel.send('Bot is online and ready.'); // Send debug message
    } else {
        console.log(`Debug channel with ID ${debugChannelId} not found.`);
    }
});

client.on('messageCreate', message => {
    if (message.content === 'test') {
        message.channel.send('This is a test message.');
    }
});


client.login(token);
