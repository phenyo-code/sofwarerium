/* eslint-disable @typescript-eslint/no-unused-vars */
// app/actions/sendMail.ts
'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

// Define schema for form validation
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  services: z.array(z.string()).min(1, 'At least one service is required'), // Multi-select services
  budget: z.string().min(1, 'Budget is required'),
  support: z.string().min(1, 'Support preference is required'),
  description: z.string().optional(), // Optional field
});

export async function sendMail(formData: FormData) {
  // Extract form data
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const services = formData.getAll('services') as string[]; // Get all selected services
  const budget = formData.get('budget') as string;
  const support = formData.get('support') as string;
  const description = formData.get('description') as string | null;

  // Validate form data
  try {
    contactSchema.parse({ name, email, services, budget, support, description });
  } catch (error) {
    return { success: false, error: 'Invalid form data' };
  }

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Adjust if using a different service
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your app-specific password
    },
  });

  // Email options
  const mailOptions = {
    from: email, // Sender's email (user's input)
    to: process.env.EMAIL_USER, // Your email address (recipient)
    subject: `Contact Form Submission: ${services.join(', ')}`, // Subject is now a list of services
    text: `
      Name: ${name}
      Email: ${email}
      Services: ${services.join(', ')}
      Budget: ${budget}
      Continuous Support: ${support}
      Description: ${description || 'Not provided'}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Services:</strong> ${services.join(', ')}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Continuous Support:</strong> ${support}</p>
      <p><strong>Description:</strong> ${description || 'Not provided'}</p>
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