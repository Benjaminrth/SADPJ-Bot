const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    return message.channel.send(`Pong! Latency is: **${new Date().getTime() - message.createdTimestamp}ms**`);
}

module.exports.help = {
    name: "ping"
}