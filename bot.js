import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import commands  from './src/loaders/commands.js';
dotenv.config();

const botToken = process.env.BOT_TOKEN;

const bot = new TelegramBot(botToken, {polling: true});
console.log("\nRunning bot...");

// Errors detector //
bot.on('polling_error', error => {
	console.log(error);
});

bot.on('message', message => {
	console.log(message);
  });
  
commands({bot});