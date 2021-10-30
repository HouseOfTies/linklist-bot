import { start, info, add, read, updt, remove } from './../commands/index.js';

export default async function commands({ bot }){
    // First commands
    bot.onText(/\/start/, async (message) => {
    // Whole programming logic within this section
        start(bot, message);
    });

    bot.onText(/\/info/, async (message) => {
        info(bot, message);
    });

    //Crud commands
    bot.onText(/\/add (.*?)\s(.+)/, async (message, value) => {
        add(bot, message, value);
    });

    bot.onText(/\/all/, async (message) => {
        read(bot, message);
    });

    bot.onText(/\/update (.*)\s(.*?)\s(.+)/, async (message, value) => {
        updt(bot, message, value);
    });

    bot.onText(/\/remove (.+)/, async (message, value) => {
        remove(bot, message, value);
    });
};