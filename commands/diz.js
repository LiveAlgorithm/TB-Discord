const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
  message.delete().catch(O_o => {}); // opcional para funções em roles
  message.channel.send(sayMessage);
};
