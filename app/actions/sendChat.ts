 
'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

// Define the schema with all fields, including new ones
const chatSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address').max(255, 'Email is too long'),
  services: z.array(z.string()).min(1, 'At least one service is required').max(10, 'Too many services selected'),
  budget: z.string().min(1, 'Budget is required').max(50, 'Budget description too long'),
  support: z.string().min(1, 'Support preference is required').max(50, 'Support description too long'),
  description: z.string().max(2000, 'Description is too long').optional(),
  company: z.string().max(100, 'Company name is too long').optional(),
  timeline: z.string().max(100, 'Timeline is too long').optional(),
  conversation: z.string().min(1, 'Conversation log is required').max(10000, 'Conversation log is too long'),
});

export async function sendChat(formData: FormData) {
  // Extract all fields from formData
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const services = formData.getAll('services') as string[];
  const budget = formData.get('budget') as string;
  const support = formData.get('support') as string;
  const description = formData.get('description') as string | null;
  const company = formData.get('company') as string | null;
  const timeline = formData.get('timeline') as string | null;
  const conversation = formData.get('conversation') as string;

  // Validate data against schema
  try {
    chatSchema.parse({
      name,
      email,
      services,
      budget,
      support,
      description,
      company,
      timeline,
      conversation,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => err.message).join(', ');
      return { success: false, error: `Validation failed: ${errorMessages}` };
    }
    return { success: false, error: 'Invalid chat data' };
  }

  // Ensure environment variables are set
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Email configuration missing');
    return { success: false, error: 'Server configuration error' };
  }

  // Create email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Sanitize inputs to prevent injection (basic sanitization)
  const sanitize = (input: string | null) => input?.replace(/[<>&;]/g, '') || '';

  // Prepare email content
  const mailOptions = {
    from: `"${sanitize(name)}" <${email}>`, // Sender name and email
    to: process.env.EMAIL_USER,
    subject: `ChatBot Submission: ${sanitize(services.join(', '))}`,
    text: `
      Name: ${sanitize(name)}
      Email: ${sanitize(email)}
      Services: ${sanitize(services.join(', '))}
      Budget: ${sanitize(budget)}
      Continuous Support: ${sanitize(support)}
      Company: ${sanitize(company) || 'N/A'}
      Timeline: ${sanitize(timeline) || 'Not specified'}
      Description: ${sanitize(description) || 'Not provided'}
      Full Conversation:
      ${sanitize(conversation)}
    `,
    html: `
      <h2 style="color: #6393FF;">New ChatBot Submission</h2>
      <p><strong>Name:</strong> ${sanitize(name)}</p>
      <p><strong>Email:</strong> ${sanitize(email)}</p>
      <p><strong>Services:</strong> ${sanitize(services.join(', '))}</p>
      <p><strong>Budget:</strong> ${sanitize(budget)}</p>
      <p><strong>Continuous Support:</strong> ${sanitize(support)}</p>
      <p><strong>Company:</strong> ${sanitize(company) || 'N/A'}</p>
      <p><strong>Timeline:</strong> ${sanitize(timeline) || 'Not specified'}</p>
      <p><strong>Description:</strong> ${sanitize(description) || 'Not provided'}</p>
      <h3>Full Conversation:</h3>
      <pre style="background: #f1f3f5; padding: 10px; border-radius: 5px;">${sanitize(conversation)}</pre>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Chat sent successfully!' };
  } catch (error) {
    console.error('Error sending chat:', error);
    return { 
      success: false, 
      error: error instanceof Error ? `Failed to send chat: ${error.message}` : 'Failed to send chat' 
    };
  }
}