const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, //all problem here
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.on(
  "messageCreate",

  (message) => {
    if (message.author.bot) return;
    message.reply({
      content: "Hi from Bot",
    });
  }
);

client.login(
  "MTIwODY1MDQ5ODc4NjQ2Nzg5MQ.GCNsI0.78UfQ8GVmZYVWyQsGIingyg4X6hGm3PlrI4fMY"
);
