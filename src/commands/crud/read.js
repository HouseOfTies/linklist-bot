import './../../loaders/connection.js';
import LinkModel from './../../models/Links.js';

export default async function read(bot, message){
    const links = await LinkModel.find();
    let resTemplate = `Lista de links: Links 📖 ${links.length}\n\n`;

    if(!links){
        bot.sendMessage(message.chat.id, "0 Links");
    }else{
        links.forEach(link => {
            resTemplate += `Id: ${link.id}\nNombre: ${link.name}\nURL: ${link.url}\n\n`
        });
        bot.sendMessage(message.chat.id, resTemplate, {disable_web_page_preview: true});
    }
}