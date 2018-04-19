function ls22() {

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

// 1 variant
//     bot.onText(/\/s1/, msg => {
//         bot.sendSticker(msg.chat.id, './public/images/sticker/sticker.webp' )
//     })

// 2 variant
    bot.onText(/\/s2/, msg => {

        fs.readFile('./public/images/sticker/sticker.webp', (err,sticker) =>{
            bot.sendSticker(msg.chat.id, sticker)
        })
    })

}


module.exports = ls22