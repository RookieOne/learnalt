var alt = require("../application.js")
var uuid = require('node-uuid')

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
  subject: "Shut up and take my money!",
  from: "Fry Farnsworth (fry@planetexpress.com)",
  previewText: "Take my money! I want it! Gimme gimme!",
  open: false
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

class EmailActions {
  loadEmails() {
    this.dispatch(emails)
  }
  selectEmail(email) {
    this.dispatch(email)
  }
  addEmail() {
    let newEmail = {
      id: uuid(),
      from: "zoidberg@planetexpress.com",
      subject: "Woop woop",
      previewText: "Woop woop woop woop woop",
      unread: true
    }
    this.dispatch(newEmail)
  }
}

module.exports = alt.createActions(EmailActions)
