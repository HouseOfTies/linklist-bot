import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
import commands  from './src/loaders/commands.js';
dotenv.config();

const botToken = process.env.BOT_TOKEN;

const bot = new TelegramBot(botToken, {polling: true}); //It will take heroku TOKEN or localToken
console.log("\nRunning bot...");

// Errors detector //
bot.on('polling_error', error => {
	console.log(error);
});

commands({bot});