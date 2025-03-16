require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.channel.type === 5) { // 5 = Announcement Channel
        try {
            await message.crosspost();
            console.log("Message published!");
        } catch (error) {
            console.error("Failed to publish:", error);
        }
    }
});

client.login(process.env.TOKEN);
