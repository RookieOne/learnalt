var alt = require("../application.js")

class EmailActions {
  selectEmail(email) {
    this.dispatch(email)
  }
}

module.exports = alt.createActions(EmailActions)
