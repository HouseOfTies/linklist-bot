import './../../loaders/connection.js';
import LinkModel from './../../models/Links.js';

export default async function remove(bot, message, value){
    const result = await LinkModel.findOneAndDelete({
        id: value[1],
    });

    if (!result){
        bot.sendMessage(message.chat.id, "No existe un link con ese id ❌");
    }else{
        bot.sendMessage(message.chat.id, `He eliminado: 📤\n\nid: ${result.id}\nnombre: ${result.name}\nURL: ${result.url}`);
    };
}