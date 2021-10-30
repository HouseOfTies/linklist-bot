const add = "Este comando requiere de 2 parametros [nombre] [url] a pasar para ser desencadenado. Ejemplo: /add google https://google.com \nNota: La url ha de contener el protocolo https:// para poder ser ejecutado",
read = "El comando read no requiere de ningun parametro, leera todos los links disponibles",
update = "Este comando require de tres 3 parametros [id] [nombre] [url] para poder ser desencadenado. Ejemplo: /update 1 facebook https://facebook.com \nNota: El protocolo https:// tambien es obligatorio en la url",
remove = "Este comando solo requiere de el id a borrar. Ejemplo: /remove 1";

export default function info(bot, message){
    bot.sendMessage(message.chat.id, `Los comandos para manipular links son: \n\n/add\n/read\n/update\n/remove\n\n${add}\n\n${read}\n\n${update}\n\n${remove}`,{disable_web_page_preview: true});
}