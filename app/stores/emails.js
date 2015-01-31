var alt = require("../application.js")

var emails = [{
  id: 1,
  unread: false,
  subject: "Good news everyone!",
  from: "Doctor Farnsworth",
  previewText: "You are now worth more dead than alive! So for...",
  open: false
}, {
  id: 2,
  unread: false,
  subject: "Good news everyone!",
  from: "Doctor Farnsworth (doc@planetexpress.com)",
  previewText: "You are now worth more dead than alive! So for...",
  open: true
}, {
  id: 3,
  unread: true,
  subject: "Good news everyone!",
  from: "Doctor Farnsworth (doc@planetexpress.com)",
  previewText: "You are now worth more dead than alive! So for...",
  open: false
}, {
  id: 4,
  unread: true,
  subject: "Good news everyone!",
  from: "Doctor Farnsworth (doc@planetexpress.com)",
  previewText: "You are now worth more dead than alive! So for...",
  open: false
}]

class EmailsStore {
  constructor() {
    this.emails = emails
  }
}

module.exports = alt.createStore(EmailsStore)
