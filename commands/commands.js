const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
        .setDescription("These are the commands for the SADPJ bot Prefix is *")
        .setColor("#00fff2")
        .addField("General", "**hello** - returns a hello message. \n **report** - Report a member to moderation, format: [@person] [reason]. \n **botinfo** - returns information about The Bot \n")
        .addField("Info", "**ip** - returns a hello message. \n **report** - Report a member to moderation, format: [@person] [reason]. \n **botinfo** - returns information about FaxBot \n")
        .addField("Misc", "**ping** - returns the bots ping \n **uptime** - Returns the bots uptime \n")
        .addField("Moderation", "**purge** - clears the amount of messages specified \n **ban** - ban a user \n **kick** - kick a user \n **tempmute** - mute a user temporary \n **addrole** - give a role to a user \n **removerole** - remove a role from a user \n **say** - make the bot say a message \n")
        .setFooter("This Bot is still in devlopment if you have any Suggestions");                

        return message.channel.send(botembed);
}

module.exports.help = {
    name: "commands"
}