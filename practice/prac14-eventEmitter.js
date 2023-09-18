const EventEmitter = require("events");

const customEvents = new EventEmitter();

customEvents.on("response", () => {
  console.log(`Response received`);
});

customEvents.emit("response");
