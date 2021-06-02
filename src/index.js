const { Client } = require('discord.js');
const client = new Client({
    messageCacheLifetime: 35,
    /** required for v13
     * intents: [Intents.FLAGS.GUILD_MESSAGES]
     */
})


const config = require('../config.json');
client.login(config.client.token);