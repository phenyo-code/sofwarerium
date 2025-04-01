/* eslint-disable @typescript-eslint/no-unused-vars */
// app/actions/sendMail.ts
'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

// Define schema for form validation
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

export async function sendMail(formData: FormData) {
  // Extract form data
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  // Validate form data
  try {
    contactSchema.parse({ name, email, subject, message });
  } catch (error) {
    return { success: false, error: 'Invalid form data' };
  }

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Adjust if using a different service (e.g., Outlook, SendGrid)
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your app-specific password
    },
  });

  // Email options
  const mailOptions = {
    from: email, // Sender's email (user's input)
    to: process.env.EMAIL_USER, // Your email address (recipient)
    subject: `Contact Form Submission: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}