const router = require('express').Router();
const withAuth = require('../utils/auth');

// get all posts for add-post
router.get('/', withAuth, (req, res) => {
  res.render('add-post', { loggedIn: true, title: 'Your Dashboard' });
});
module.exports = router;
