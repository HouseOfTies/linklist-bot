export default function info(bot, message){
    bot.sendMessage(message.chat.id, "Los comandos para manipular links son: \n\n+add\n?read\n!update\n-remove");
}