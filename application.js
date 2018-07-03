
const Express = require('express')
const Router = require('./router')
const Settings = require('./settings')

const application = Express()


/** configurations */

application.set('views', Settings.VIEWS_PATH)
application.set('view engine', Settings.VIEWS_ENGINE)


/** routes */

application.use('/', Router)


/** start webserver */

application.listen(8888, () => console.log('OK: webserver started.'))
