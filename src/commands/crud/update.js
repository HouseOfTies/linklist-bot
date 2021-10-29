import './../../loaders/connection.js';
import LinkModel from './../../models/Links.js';
import validUrl from 'valid-url';

export default async function updt(bot, message, value){
    if (validUrl.isUri(value[3])){
        const link = await LinkModel.updateOne({
            id: value[1]
        },
        {
            name: value[2],
            url: value[3],
        });
        link.matchedCount == 0 ? bot.sendMessage(message.chat.id, `No he encontrado un id para actualizar ❌`) : bot.sendMessage(message.chat.id, `He actualizado tu link ✅`) 
    } 
    else {
        bot.sendMessage(message.chat.id, `Introduce una url existente`);
    }; 
}