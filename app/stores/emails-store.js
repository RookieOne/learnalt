var alt = require("../application.js")
var emailActions = require("../actions/email-actions.js")
var _ = require("underscore")

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

class EmailsStore {
  constructor() {
    this.emails = emails
    this.bindAction(emailActions.selectEmail, this.emailSelected)
  }
  emailSelected(email) {
    this.emails.forEach((email) => {
      email.open = false
    })
    let foundEmail = _.findWhere(this.emails, { id: email.id })
    foundEmail.open = true
  }
}

module.exports = alt.createStore(EmailsStore)