const request = require('request')
const uuid = require('uuid')
import express from 'express'
import bodyParser from 'body-parser'
import {TOKEN} from './config'

const app = express()


let port = (process.env.PORT || 80)
app.set('post', port)


app.use(express.static('dist'))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())


const sessionIds = new Map()

app.get('/', function (req, res) {
    res.send('Hi, I am Alice')
})

app.post('/api/', function (req, res) {
    let data = req.body
    console.log(JSON.stringify(data))

    if (data.object === 'page') {
        // Assume all went well.
        // You must send back a 200, within 20 seconds
        res.sendStatus(200)
    }
})


app.listen(port)