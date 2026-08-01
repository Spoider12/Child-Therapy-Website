import nodemailer from 'nodemailer';

const hasEmailConfig = () => Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);

const getTransporter = () => nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendContactNotification(contact) {
  if (!hasEmailConfig()) {
    return { sent: false, reason: 'Email credentials are not configured.' };
  }

  const ownerEmail = process.env.OWNER_EMAIL || process.env.ADMIN_EMAIL || process.env.EMAIL_USER;
  const subject = `New contact form submission from ${contact.name}`;
  const text = [
    'New contact form submission',
    '',
    `Name: ${contact.name}`,
    `Phone: ${contact.phone}`,
    `Email: ${contact.email}`,
    `Service: ${contact.service || 'Not selected'}`,
    '',
    'Message:',
    contact.message,
  ].join('\n');

  await getTransporter().sendMail({
    from: `Child Therapy Website <${process.env.EMAIL_USER}>`,
    replyTo: contact.email,
    to: ownerEmail,
    subject,
    text,
  });

  return { sent: true };
}