const express = require('express');
const contactController = require('../controllers/contactController');
//const authController = require('../controllers/authController');

const fs = require('fs');

const router = express.Router();

const storeContactInfo = (req, res, next) => {
  const ip = req.ip;
  const forward = req.headers['x-forwarded-for'];
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  const tracking = `Date: ${date}, ip: ${ip}, forward: ${forward}, name: ${name}, email: ${email}, message: ${message}\n`;
  fs.appendFile('./incoming_contact.txt', tracking, (err) => {
    if (err) console.log(err);
  });
  next(0);
};

router.use(storeContactInfo);

// Un protected routes
router.post('/', contactController.createContact);

// Protect all routes after this middleware
// router.use(authController.protect);

// router.use(authController.restrictTo('admin'));

// router
//   .route('/')
//   .get(userController.getContacts)

module.exports = router;
