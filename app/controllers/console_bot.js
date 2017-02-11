/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ______     ______     ______   __  __     __     ______
 /\  == \   /\  __ \   /\__  _\ /\ \/ /    /\ \   /\__  _\
 \ \  __<   \ \ \/\ \  \/_/\ \/ \ \  _"-.  \ \ \  \/_/\ \/
 \ \_____\  \ \_____\    \ \_\  \ \_\ \_\  \ \_\    \ \_\
 \/_____/   \/_____/     \/_/   \/_/\/_/   \/_/     \/_/


 This is a sample Console bot built with Botkit.

 This bot demonstrates many of the core features of Botkit:

 * Receive messages based on "spoken" patterns
 * Reply to messages
 * Use the conversation system to ask questions
 * Use the built in storage system to store and retrieve information
 for a user.

 # RUN THE BOT:

 Run your bot from the command line:

 node console_bot.js

 # USE THE BOT:

 Say: "Hello"

 The bot will reply "Hello!"

 Say: "who are you?"

 The bot will tell you its name, where it is running, and for how long.

 Say: "Call me <nickname>"

 Tell the bot your nickname. Now you are friends.

 Say: "who am I?"

 The bot will tell you your nickname, if it knows one for you.

 Say: "shutdown"

 The bot will ask if you are sure, and then shut itself down.

 Make sure to invite your bot into other channels using /invite @<my bot>!

 # EXTEND THE BOT:

 Botkit has many features for building cool and useful bots!

 Read all about it here:

 -> http://howdy.ai/botkit

 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var Botkit = require('botkit')
var os = require('os');

var controller = Botkit.consolebot({
    debug: true,
    stats_optout:true
});

var bot = controller.spawn({});


// SETUP
require('./consolebot_setup')(controller)

// Conversation logic
require('./conversations')(controller)


var handler = function (obj) {
    controller.debug('Message received for Console')

    var message = obj
    if (message) {
        var unixtime = Math.round(+new Date() / 1000);
        message = {
            text: obj,
            user: 'sai',
            channel: 'sai',
            timestamp: unixtime,
        }

        console.log("Message is", message)
        // normal message
        controller.receiveMessage(bot, message)
            console.log("After msg",bot.storedReplyNow)
        return bot.storedReplyNow
        }
    return "Ah!Didnt find that one"

}


exports.handler = handler


