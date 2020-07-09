const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createContact = (req, res) => {
  console.log('In create Contact');
  res.status(201).json({
    status: 'success',
    data: {
      data: 'Kevin Quinn',
    },
  });
  // res.status(500).json({
  //   status: 'error',
  //   message: 'This route is not defined! Please use /signup instead',
  // });
};
