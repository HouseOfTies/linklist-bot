import { start, info, add, read, updt, remove } from './../commands/index.js';

export default async function commands({ bot }){
    // First commands
    bot.onText(/\/start/, async (message) => {
    // Whole programming logic within this section
        start(bot, message);
    });

    bot.onText(/\/commands/, async (message) => {
        info(bot, message);
    });

    //Crud commands
    bot.onText(/\/add/, async (message) => {
        add(bot, message);
    });

    bot.onText(/\/all/, async (message) => {
        read(bot, message);
    });

    bot.onText(/\/update/, async (message) => {
        updt(bot, message);
    });

    bot.onText(/\/remove/, async (message) => {
        remove(bot, message);
    });
};