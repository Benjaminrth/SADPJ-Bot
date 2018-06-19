const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Could not file coomads.");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

// Displays the message in console
bot.on("ready", async () => {
    console.log(`${bot.user.username} is online and ready to kill!`);
    bot.user.setActivity("*Commands | https://sanandreasdpjrp.wixsite.com/sadpj", {type: "Playing"});

    bot.user.setStatus('dnd') // Online, idle, invisible & dnd
});
// Bot Start
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

// Hello Command
    if(cmd === `${prefix}hello`){
        return message.channel.send("Hello Mate!");
    }

    // Web Command
    if(cmd === `${prefix}web`){
        return message.channel.send("The website is https://sanandreasdpjrp.wixsite.com/sadpj");
    
    }

    // ip Command
    if(cmd === `${prefix}ip`){
        return message.channel.send("45.35.193.130:30120");
    
    }

    // ip Command
    if(cmd === `${prefix}cad`){
        return message.channel.send("The cad is https://sadpj-cad.bubbleapps.io/");
        
    }


});

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find("name", "Guest");

    member.addRole(role)
});

bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'welcome');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to The SADPJ Discord Server ${member}. Enjoy your stay, also be sure to check <#367811763418300417> and <#456937602277310474>`);
});

bot.on('guildMemberRemove', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'welcome');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Thanks for stopping by, ${member}. `);
});

bot.login(botconfig.token);