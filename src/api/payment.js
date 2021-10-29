const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get(
  '/payment',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send('you have total $500');
  }
);

module.exports = router;