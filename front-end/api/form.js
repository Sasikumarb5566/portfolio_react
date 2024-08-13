// api/form.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mr.inspiring5566@gmail.com",
    pass: "xvhx gfja yvmz teyv",
  },
});

const sendEmail = async (name, email, phone) => {
  const mailOptions = {
    from: "mr.inspiring5566@gmail.com",
    to: "mr.inspiring5566@gmail.com",
    subject: "Contact you through Portfolio",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}`,
  };
  await transporter.sendMail(mailOptions);
};

module.exports = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    await sendEmail(name, email, phone);
    return res.status(200).json({ success: true, message: "Mail sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ success: false, message: "Can't send form" });
  }
};
