const express = require("express")
const config = require('./config')
const controller = require('./controller')

const port = 8080
const root = "/public"
const log = config.log

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + root))

app.use(express.json())


app.get('/', (req, res) => {
    log.infoLog('\'/\' requested')
    res.send(`<h>Hello from Kathy's Server</h>`)
})

app.get('/addtwonums', (req, res) => {
    log.infoLog('addtwonums requested')
    controller.functions.calculator(req.query, res)
})


app.listen(port, () => {
    log.infoLog(`server started and listening on port: ${port}`)
})