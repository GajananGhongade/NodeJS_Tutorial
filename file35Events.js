// events and event emmiter

const express = require('express')

const EventEmitter = require('events');
const { count } = require('console');

const app = express();
const event = new EventEmitter();

event.on("countAPI", () => {
    count++;
    console.log("event called", count)
})


app.get('/', (req, res)=> {
    res.send(" api done")
    event.emit("countAPI")
})

app.get('/update', (req, res)=> {
    res.send(" update done")
    event.emit("countAPI")

})

app.get('/search', (req, res)=> {
    res.send(" search done")
    event.emit("countAPI")

})

app.listen(5000)