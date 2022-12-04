const logUpdate = require("log-update")
// const logUpdate = require("log-update")
console.log("123");

const frames = ["loading", "loading.", "loading..", "loading..."]

// let i = 0
// setInterval(() => {
//   const frame = frames[i++ % frames.length]
//   // console.log(frame);
//   logUpdate(frame)
// }, 200)

const cahr = "▮"
const min = 0
const max = 100
const steps = 5
let num = 1

const mInterval = setInterval(() => {
  let progress = ""
  for (let i = 0; i < num; i++) {
    progress += cahr
  }
  const progressString = `Lodaing: [ ${progress} ${num * steps}% ]`
  logUpdate(progressString)
  num++
  if (num > max / steps) {
    logUpdate.done()
    clearInterval(mInterval)
  }
}, 50);