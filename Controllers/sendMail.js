const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const sendMailEthereal = async (req, res) => {
  let testAccounr = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "jerrod.raynor@ethereal.email",
      pass: "HM6akFb1XmhuUy3jAr",
    },
  });

  let sendEmail = await transporter.sendMail({
    from: '"Nannu-Coder" <test@test.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello world", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  res.json(sendEmail);
};

const sendMail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "nazmulhasannannu74@gmail.com", // Change to your recipient
    from: "nazmulnannu42@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<h1>This Is Awesome! I Love This Very Much</h1>",
  };

  const info = await sgMail.send(msg);

  res.json(info);
};

module.exports = sendMail;
