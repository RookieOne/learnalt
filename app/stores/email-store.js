var alt = require("../application.js")
var emailActions = require("../actions/email-actions.js")

class EmailStore {
  constructor() {
    this.bindAction(emailActions.selectEmail, this.emailSelected)
  }
  emailSelected(email) {
    this.email = email
  }
}

module.exports = alt.createStore(EmailStore)
