import './../../loaders/connection.js';
import LinkModel from './../../models/Links.js';
import validUrl from 'valid-url';

export default function add(bot, message, value){
    if (validUrl.isUri(value[2])){
        const link = new LinkModel({
            name: value[1],
            url: value[2],
        });
        link.save();
        bot.sendMessage(message.chat.id, `Nombre: ${value[1]}\nURL: ${value[2]}\n\nLink agregado 📝`);
    } 
    else {
        bot.sendMessage(message.chat.id, `Introduce una url existente`);
    }; 
}
