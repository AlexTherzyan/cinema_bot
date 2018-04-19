function ls23() {

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

// https://www.youtube.com/watch?v=CPvxOusCg5k

// 1 variant
    bot.onText(/\/v1/, msg => {

        bot.sendMessage(msg.chat.id, 'Sending video..')

        bot.sendVideo(msg.chat.id, './public/videos/video.mp4')
    })

// 2 variant
//     bot.onText(/\/v2/, msg => {
//
//         bot.sendMessage(msg.chat.id, 'Sending video..')
//         fs.readFile('./public/videos/video.mp4', (err,video) =>{
//             bot.sendSticker(msg.chat.id, video)
//         })
//     })

}


module.exports = ls23