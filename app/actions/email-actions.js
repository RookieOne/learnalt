var alt = require("../application.js")
var uuid = require('node-uuid')

class EmailActions {
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
