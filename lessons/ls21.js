function ls21() {

    const TelegramBot = require('node-telegram-bot-api') ;
    const TOKEN = '589505065:AAFbOWPpU3bhOJBNLBwwynoHFtLFVv1uv_o';

    const fs = require('fs')
    const debug = require('../config.js');

    console.log('\n' + 'bot successfully started...');

    const bot = new TelegramBot(TOKEN, {

        polling: { // технология, которая позволяет общаться клиенту с сервером
            interval: 300,
            autoStart: true,
            params: {
                timeout: 10
            }
        }
    })

//------------------------------- 1 вариант
//     bot.onText(/\/doc/, msg =>{
//
//         bot.sendDocument(msg.chat.id, './public/file/telegram_file.docx')
//
//
//     })

//------------------------------- 2 вариант (более правильный)
bot.onText(/\/doc/, msg =>{

    bot.sendMessage(msg.chat.id, 'Upload start...')

    fs.readFile('./public/file/telegram_file.docx', (err, file) =>{

        bot.sendDocument(msg.chat.id,file, {
            caption: 'Additional text'
        })
            .then( () => {
                bot.sendMessage(msg.chat.id, 'Upload finish')
            })
    })

})








}


module.exports = ls21