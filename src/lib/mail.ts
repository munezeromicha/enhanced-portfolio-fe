import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

/**
 * Sends a beautifully formatted contact email
 * @param name Sender's name
 * @param email Sender's email
 * @param subject Email subject
 * @param message Email message content
 * @returns Email send information
 */
export async function sendContactEmail(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  try {
    // Format the current date
    const date = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Create HTML email template with modern design
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Message</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .email-container {
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .email-header {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            color: white;
            padding: 20px;
            text-align: center;
          }
          .email-header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          .email-body {
            background-color: #ffffff;
            padding: 30px;
          }
          .email-footer {
            background-color: #f9fafb;
            padding: 15px;
            text-align: center;
            font-size: 14px;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
          }
          .label {
            font-weight: 600;
            color: #4f46e5;
            display: block;
            margin-top: 15px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .value {
            background-color: #f3f4f6;
            padding: 12px 15px;
            border-radius: 6px;
            margin-top: 5px;
            font-size: 16px;
            border-left: 4px solid #6366f1;
          }
          .message-content {
            white-space: pre-line;
            line-height: 1.8;
          }
          .timestamp {
            font-size: 13px;
            color: #9ca3af;
            margin-top: 20px;
            text-align: right;
            font-style: italic;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <h1>New Portfolio Contact</h1>
          </div>
          <div class="email-body">
            <div class="label">From</div>
            <div class="value">${name} (${email})</div>
            
            <div class="label">Subject</div>
            <div class="value">${subject}</div>
            
            <div class="label">Message</div>
            <div class="value message-content">${message.replace(/\n/g, '<br>')}</div>
            
            <div class="timestamp">Received on ${date}</div>
          </div>
          <div class="email-footer">
            This message was sent from your portfolio contact form.
          </div>
        </div>
      </body>
      </html>
    `;

    // Email sending options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `✉️ Portfolio Contact: ${subject}`,
      html: htmlContent,
      // Add reply-to header so you can reply directly to the sender
      replyTo: email,
    };

    // Send email and return info
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}

// Add a method to send confirmation emails to the person who contacted you
export async function sendContactConfirmation(
  name: string,
  email: string
) {
  try {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Me</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .email-container {
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .email-header {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            color: white;
            padding: 30px;
            text-align: center;
          }
          .email-header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          .email-body {
            background-color: #ffffff;
            padding: a30px;
          }
          .email-footer {
            background-color: #f9fafb;
            padding: 15px;
            text-align: center;
            font-size: 14px;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
          }
          .content {
            line-height: 1.8;
          }
          .signature {
            margin-top: 30px;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <h1>Thank You for Reaching Out!</h1>
          </div>
          <div class="email-body">
            <div class="content">
              <p>Hello ${name},</p>
              
              <p>Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
              
              <p>In the meantime, feel free to check out more of my work on my portfolio or connect with me on LinkedIn.</p>
              
              <p class="signature">Warm regards,<br>Michael</p>
            </div>
          </div>
          <div class="email-footer">
            © ${new Date().getFullYear()} Michael's Portfolio
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"Michael" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting me`,
      html: htmlContent,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    // Don't throw here to prevent blocking the main flow if confirmation fails
    return null;
  }
}