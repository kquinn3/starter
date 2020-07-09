const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create transporter ==>this is a service that gets defined (example with gmail)
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    // Activate in gmail "less secure app" option. GMAIL is a bad option to use. Sendgrid and mailgun are good
    // We are using a fake one for now. This is called mailtrap.
  });

  // 2) Define the email options

  const mailOptions = {
    from: 'Kevin Quinn <kevinquinn.rva@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html
  };

  // 3) Actually send the email with nodemailer
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
