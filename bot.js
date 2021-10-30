import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import commands  from './src/loaders/commands.js';
dotenv.config();

const botToken = process.env.BOT_TOKEN;
const homeId = process.env.HOMEID,
ownerId = process.env.OWNERID;

const bot = new TelegramBot(botToken, {polling: true});
console.log("\nRunning bot...");

// Errors detector //
bot.on('polling_error', error => {
	console.log(error);
});

commands({bot});
