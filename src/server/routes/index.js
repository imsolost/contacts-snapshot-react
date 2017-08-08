const router = require('express').Router();
const contacts = require('./contacts')
const DbContacts = require('../../db/contacts');

router.route('/all')
  .get( (request, response) => {
    console.log('request', request);
    DbContacts.getContacts()
      // .then((contacts) => {response.render('index', { contacts })})
      .then( contacts => response.send(contacts) )
      .catch( err => console.log('err', err) )
  })

router.use('/contacts', contacts); // /contacts/search

module.exports = router;
