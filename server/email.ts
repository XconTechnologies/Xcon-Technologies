import * as nodemailer from 'nodemailer';
import { emailLogger } from './email-logger';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

interface QuoteRequestData {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  service?: string;
  message: string;
}

interface ConsultationRequestData {
  fullName: string;
  company?: string;
  workEmail: string;
  phone?: string;
  message: string;
}

// Create transporter with Gmail SMTP (you can use other providers too)
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'askforquote@xcontechnologies.com',
      pass: process.env.EMAIL_PASS || 'your-app-password-here'
    }
  });
};

export async function sendContactFormEmail(formData: ContactFormData): Promise<boolean> {
  // Log submission to file for reliable tracking
  await emailLogger.logSubmission({
    type: 'contact',
    data: formData,
    timestamp: new Date().toISOString(),
    email: formData.email
  });

  // Try to send email, but don't fail if it doesn't work
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

    console.log('✅ Contact form emails sent successfully to Gmail');
    return true;

  } catch (error) {
    console.log('⚠️  Gmail sending failed, but contact form submission logged above');
    console.error('Email sending error:', error.message);
    // Return true anyway so the contact form works
    return true;
  }
}

export async function sendQuoteRequestEmail(formData: QuoteRequestData): Promise<boolean> {
  // Log submission to file for reliable tracking
  await emailLogger.logSubmission({
    type: 'quote',
    data: formData,
    timestamp: new Date().toISOString(),
    email: formData.email
  });

  try {
    const transporter = createTransporter();

    // Email to you (the business owner)
    const emailToOwner = {
      from: process.env.EMAIL_USER || 'askforquote@xcontechnologies.com',
      to: 'askforquote@xcontechnologies.com',
      subject: `New Quote Request - ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7CB342; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
            New Quote Request
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Client Details:</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
            ${formData.business ? `<p><strong>Business:</strong> ${formData.business}</p>` : ''}
            ${formData.service ? `<p><strong>Service:</strong> ${formData.service}</p>` : ''}
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Quote Details:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
            <p>This quote request was sent from your XCon Technologies website.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Auto-reply to the customer
    const autoReply = {
      from: process.env.EMAIL_USER || 'askforquote@xcontechnologies.com',
      to: formData.email,
      subject: 'Quote Request Received - XCon Technologies',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7CB342; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
            Thank You for Your Quote Request
          </h2>
          
          <p>Dear ${formData.name},</p>
          
          <p>Thank you for requesting a quote from XCon Technologies. We have received your request and will prepare a detailed quote for you within 24 hours.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">What's Next:</h3>
            <ul style="line-height: 1.6;">
              <li>Our team will review your requirements</li>
              <li>We'll prepare a detailed quote with pricing and timeline</li>
              <li>You'll receive a personalized proposal within 24 hours</li>
              <li>We'll schedule a consultation call to discuss your project</li>
            </ul>
          </div>
          
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

    console.log('✅ Quote request emails sent successfully');
    return true;

  } catch (error) {
    console.log('⚠️  Quote request logged, email sending failed');
    console.error('Email sending error:', error.message);
    return true;
  }
}

export async function sendConsultationRequestEmail(formData: ConsultationRequestData): Promise<boolean> {
  // Log submission to file for reliable tracking
  await emailLogger.logSubmission({
    type: 'consultation',
    data: formData,
    timestamp: new Date().toISOString(),
    email: formData.workEmail
  });

  try {
    const transporter = createTransporter();

    // Email to you (the business owner)
    const emailToOwner = {
      from: process.env.EMAIL_USER || 'askforquote@xcontechnologies.com',
      to: 'askforquote@xcontechnologies.com',
      subject: `New Consultation Request - ${formData.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7CB342; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
            New Consultation Request
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Client Details:</h3>
            <p><strong>Name:</strong> ${formData.fullName}</p>
            <p><strong>Email:</strong> ${formData.workEmail}</p>
            ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
            ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Consultation Details:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
            <p>This consultation request was sent from your XCon Technologies website.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Auto-reply to the customer
    const autoReply = {
      from: process.env.EMAIL_USER || 'askforquote@xcontechnologies.com',
      to: formData.workEmail,
      subject: 'Consultation Request Received - XCon Technologies',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7CB342; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
            Thank You for Your Consultation Request
          </h2>
          
          <p>Dear ${formData.fullName},</p>
          
          <p>Thank you for requesting a consultation with XCon Technologies. We have received your request and will get back to you within 24 hours to schedule your consultation.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">What's Next:</h3>
            <ul style="line-height: 1.6;">
              <li>Our team will review your development requirements</li>
              <li>We'll schedule a consultation call at your convenience</li>
              <li>We'll discuss your project goals and technical needs</li>
              <li>You'll receive a tailored proposal and timeline</li>
            </ul>
          </div>
          
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

    console.log('✅ Consultation request emails sent successfully');
    return true;

  } catch (error) {
    console.log('⚠️  Consultation request logged, email sending failed');
    console.error('Email sending error:', error.message);
    return true;
  }
}