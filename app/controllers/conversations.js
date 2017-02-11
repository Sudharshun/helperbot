/* eslint-disable brace-style */
/* eslint-disable camelcase */

module.exports = function (controller) {

  // user said hello
  controller.hears(['hello','hi'], 'message_received', function (bot, message) {
    console.log("Hello received")
    bot.reply(message, 'Hey there.')
  })

 controller.hears(['sai'], 'message_received', function (bot, message) {
     console.log("Sai received")
  bot.reply(message, 'OM SAI RAM')
  })

  // user says anything else
  controller.hears('(.*)', 'message_received', function (bot, message) {
    bot.reply(message, 'you said ' + message.match[1])
  })

    controller.on('tick', function(bot, event) {});
}
