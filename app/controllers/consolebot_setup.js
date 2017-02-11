/* eslint-disable brace-style */
/* eslint-disable camelcase */

module.exports = function (controller) {

        controller.log('Successfully subscribed to Consolebot events:')
        console.log('Botkit can now receive messages')

        // start ticking to send conversation messages
        controller.startTicking()

        console.log('All Set----------------->')
}

/* eslint-disable brace-style */
/* eslint-disable camelcase */
