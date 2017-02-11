/* eslint-disable brace-style */
/* eslint-disable camelcase */
// facebook_handler = require('../controllers/botkit').handler
var console_handler = require('../controllers/console_bot').handler

module.exports = function (app) {
  // public pages=============================================
  // root
  // app.get('/', function (req, res) {
  //   res.render('home')
  // })

  // app.get('/webhook', function (req, res) {
  //   // This enables subscription to the webhooks
  //   if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === process.env.FACEBOOK_VERIFY_TOKEN) {
  //     res.send(req.query['hub.challenge'])
  //   }
  //   else {
  //     res.send('Incorrect verify token')
  //   }
  // })
  //
  // app.post('/webhook', function (req, res) {
  //   facebook_handler(req.body)
  //
  //   res.send('ok')
  // })

  app.get('/rphelper/:question', function (req, res) {
    var botSays=console_handler(req.params.question)
      //console.log("res",res)
    res.send(botSays)
  })


}
/* eslint-disable brace-style */
/* eslint-disable camelcase */
