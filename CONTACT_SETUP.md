# Contact Form Setup Guide

Your contact form needs to be connected to an email service to receive messages. Here are the best options:

## Option 1: Formspree (Easiest - Recommended) ⭐

### Steps:
1. **Sign up for free** at https://formspree.io
2. **Create a new form**
3. **Copy your Form ID** (looks like: `abc123xyz`)
4. **Update Contact.tsx** - Replace `YOUR_FORM_ID` with your actual Form ID
5. **Test the form** - Submit a test message
6. **Check your email** - You'll receive form submissions via email

### Free Plan Includes:
- 50 submissions/month
- Email notifications
- Spam protection
- Mobile responsive

## Option 2: EmailJS (Free Alternative)

### Steps:
1. **Sign up** at https://www.emailjs.com
2. **Add email service** (Gmail, Outlook, etc.)
3. **Create email template**
4. **Get your Service ID, Template ID, and Public Key**
5. **Install**: `npm install @emailjs/browser`
6. **Update Contact.tsx** with EmailJS code

## Option 3: Netlify Forms (If deployed on Netlify)

### Steps:
1. **Add `name="contact"` to form tag**
2. **Add hidden input**: `<input type="hidden" name="bot-field" />`
3. **Add `netlify` attribute to form**
4. **Netlify automatically handles submissions**
5. **View submissions** in Netlify dashboard

## Option 4: Mailgun/SendGrid (For production)

- Requires backend API
- Use Express.js + Nodemailer
- More complex setup
- Better for high volume

## Quick Start with Formspree:

1. Go to https://formspree.io
2. Click "Get Started" (free)
3. Create new form
4. Get your form ID
5. Update line in Contact.tsx:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Replace `YOUR_FORM_ID` with your actual ID.

**That's it!** You'll receive emails when someone submits the form.

