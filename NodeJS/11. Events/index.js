import EventEmitter from "events";

const customEmitter = new EventEmitter()
// 1. on: listen/register for an event
// 2. once: listen/register for an event but only once
// 3. emit: emit/trigger an event
// 4. off: remove listener for an event

customEmitter.once("response", (name, id)=>{
    console.log(`data recieved ${name} with id ${id}`)
})

customEmitter.emit("response", "Ritik", 21)
customEmitter.emit("response", "Tikki", 2)