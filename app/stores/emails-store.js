var alt = require("../application.js")
var EmailActions = require("../actions/email-actions.js")
var _ = require("underscore")

class EmailsStore {
  constructor() {
    this.emails = []

    this.bindAction(EmailActions.loadEmails, this.emailsLoaded)
    this.bindAction(EmailActions.selectEmail, this.emailSelected)
    this.bindAction(EmailActions.addEmail, this.emailAdded)
  }
  emailsLoaded(emails) {
    this.emails = this.emails.concat(emails)
  }
  emailSelected(email) {
    this.emails.forEach((email) => {
      email.open = false
    })
    let foundEmail = _.findWhere(this.emails, { id: email.id })
    foundEmail.open = true
    foundEmail.unread = false
  }
  emailAdded(email) {
    this.emails = [email].concat(this.emails)
  }
}

module.exports = alt.createStore(EmailsStore)
