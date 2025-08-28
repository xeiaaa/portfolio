# Contact Form Setup Guide

Your portfolio now includes a contact form that allows potential clients to reach out to you. Here's how to set it up to actually send emails:

## Current Status

The contact form is fully functional and will:

- ✅ Validate all form inputs
- ✅ Show success/error messages
- ✅ Log form submissions to the console (for development)

## To Enable Email Sending

### Option 1: Resend (Recommended)

1. **Install Resend:**

   ```bash
   npm install resend
   ```

2. **Sign up for Resend:**

   - Go to [resend.com](https://resend.com)
   - Create a free account
   - Get your API key

3. **Set up environment variables:**
   Create a `.env.local` file in your project root:

   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Update the API route:**
   In `app/api/contact/route.ts`, uncomment the Resend code and update the email addresses:

   ```typescript
   import { Resend } from "resend";

   const resend = new Resend(process.env.RESEND_API_KEY);

   await resend.emails.send({
     from: "your-portfolio@yourdomain.com", // Update this
     to: "cosmicdevcs@gmail.com",
     subject: `Portfolio Contact: ${subject}`,
     text: emailContent,
   });
   ```

### Option 2: EmailJS (Client-side)

1. **Install EmailJS:**

   ```bash
   npm install @emailjs/browser
   ```

2. **Sign up for EmailJS:**

   - Go to [emailjs.com](https://emailjs.com)
   - Create a free account
   - Set up an email service (Gmail, Outlook, etc.)
   - Create an email template

3. **Update the ContactForm component:**
   Replace the fetch call with EmailJS implementation.

### Option 3: SendGrid

1. **Install SendGrid:**

   ```bash
   npm install @sendgrid/mail
   ```

2. **Set up SendGrid account and API key**

3. **Update the API route to use SendGrid**

## Features

The contact form includes:

- **Form validation** for all fields
- **Email format validation**
- **Loading states** during submission
- **Success/error feedback**
- **Responsive design** that matches your portfolio
- **Accessibility features** with proper labels and ARIA attributes

## Customization

You can customize:

- **Form fields** by modifying the `FormData` interface
- **Validation rules** in the `validateForm` function
- **Styling** by updating the Tailwind classes
- **Email template** by modifying the `emailContent` in the API route

## Security Notes

- The form includes basic validation on both client and server side
- Consider adding rate limiting to prevent spam
- Use environment variables for sensitive data like API keys
- Consider adding CAPTCHA for additional spam protection

## Testing

To test the form:

1. Fill out all fields
2. Submit the form
3. Check the browser console for the logged submission
4. Once email service is set up, you'll receive actual emails
