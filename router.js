const Express = require('express')
const Router = Express.Router()

Router.get('/', function (request, response) {
  response.render('application')
})

module.exports = Router