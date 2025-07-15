import nodemailer from 'nodemailer';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

// Create transporter with Gmail SMTP (you can use other providers too)
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'askforquote@xcontechnologies.com',
      pass: process.env.EMAIL_PASS || 'your-app-password-here'
    }
  });
};

export async function sendContactFormEmail(formData: ContactFormData): Promise<boolean> {
  try {
    const transporter = createTransporter();

    // Email to you (the business owner)
    const emailToOwner = {
      from: process.env.EMAIL_USER || 'askforquote@xcontechnologies.com',
      to: 'askforquote@xcontechnologies.com',
      subject: `New Contact Form Submission - ${formData.firstName} ${formData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7CB342; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
            <p>This email was sent from your XCon Technologies website contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Auto-reply to the customer
    const autoReply = {
      from: process.env.EMAIL_USER || 'askforquote@xcontechnologies.com',
      to: formData.email,
      subject: 'Thank you for contacting XCon Technologies',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7CB342; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
            Thank You for Contacting XCon Technologies
          </h2>
          
          <p>Dear ${formData.firstName},</p>
          
          <p>Thank you for reaching out to XCon Technologies. We have received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
          </div>
          
          <p>In the meantime, feel free to explore our services and solutions on our website.</p>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #7CB342; color: white; border-radius: 8px;">
            <h3 style="margin-top: 0;">Contact Information:</h3>
            <p><strong>Email:</strong> askforquote@xcontechnologies.com</p>
            <p><strong>Phone:</strong> +1 (513) 302-4718</p>
            <p><strong>Address:</strong> Ohio City, USA</p>
          </div>
          
          <p>Best regards,<br>
          <strong>XCon Technologies Team</strong></p>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(emailToOwner);
    await transporter.sendMail(autoReply);

    console.log('Contact form emails sent successfully');
    return true;

  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}