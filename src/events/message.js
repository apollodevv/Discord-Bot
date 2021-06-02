module.exports = async (client, message) => {
    if (message.author.bot) return;

    const mention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (message.content.match(mention)) {
        return message.channel.send(embed)
    }
};