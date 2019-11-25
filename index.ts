const dialogflow = require('dialogflow');
const request = require('request')
const uuid = require('uuid')
import express from 'express'
import bodyParser from 'body-parser'
import {TOKEN} from './config'

const app = express();
console.log(dialogflow);

if(!TOKEN.GOOGLE_PRIVATE_KEY) throw new Error('missing KEY')
if(!TOKEN.GOOGLE_PROJECT_ID) throw new Error('missing ID')
if(!TOKEN.GOOGLE_CLIENT_EMAIL) throw new Error('missing EMAIL')

let port = (process.env.PORT || 5999);
app.set('post', port)


app.use(express.static('dist'));
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

const sessionClient = new dialogflow.SessionsClient({
    projectId: TOKEN.GOOGLE_PROJECT_ID,
    credentials: {
        client_email: TOKEN.GOOGLE_CLIENT_EMAIL,
        private_key: TOKEN.GOOGLE_PRIVATE_KEY
    }
})

const sessionIds = new Map();

app.get('/', function (req, res) {
    res.send('Hi, I am Alice')
})

app.post('/api/', function (req, res) {
    let data = req.body;
    console.log(JSON.stringify(data));

    if (data.object === 'page') {
        // Assume all went well.
        // You must send back a 200, within 20 seconds
        res.sendStatus(200);
    }
})


app.listen(port);