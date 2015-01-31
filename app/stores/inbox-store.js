var alt = require("../application.js")
var EmailActions = require("../actions/email-actions.js")
var EmailsStore = require("../stores/emails-store.js")
var _ = require("underscore")

class InboxStore {
  constructor() {
    this.unread = 0

    this.bindAction(EmailActions.addEmail, this.emailChange)
    this.bindAction(EmailActions.selectEmail, this.emailChange)
    this.bindAction(EmailActions.loadEmails, this.emailChange)
  }
  emailChange() {
    this.waitFor(EmailsStore.dispatchToken)
    let emails = EmailsStore.getState().emails
    this.unread = _.where(emails, { unread: true }).length
  }
}

module.exports = alt.createStore(InboxStore)
