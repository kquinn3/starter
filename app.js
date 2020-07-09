const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const userRouter = require('./routes/userRoutes');
const contactRouter = require('./routes/contactRoutes');

const app = express();

// Global Middleware
//Cookie Parser
app.use(cookieParser());

// Set security http headers
app.use(helmet());

//Use cors middleware
app.use(cors());

// Development Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// Limit requests from the same IP address. max is in number of hits per id
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour',
});
app.use('/api', limiter);

// Body parser, reading data from body, into req.body
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS (Cross Site Scripting attacks)
app.use(xss());

// Prevent parameter pollution. This will allow anything that's whitelisted and deny every other parameter
app.use(
  hpp({
    whitelist: ['duration'],
  })
);

// Service status files
app.use(express.static(`${__dirname}/public`));

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/contact', contactRouter);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  );
} else {
  app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on the server`, 404));
  });
}

app.use(globalErrorHandler);

module.exports = app;
