import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, phone, email, service, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'Get in Touch Form Details ',
    text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});