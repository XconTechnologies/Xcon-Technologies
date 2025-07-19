import { Resend } from 'resend';
import { emailLogger } from './email-logger';

// Check if Resend API key is available
const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_XzcqVNwT_7CA8WS5NgxVp1dX79TowURDG';
let resend: Resend | null = null;

if (RESEND_API_KEY) {
  resend = new Resend(RESEND_API_KEY);
  console.log('✅ Resend initialized with API key');
} else {
  console.log('❌ Resend API key not found');
}

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
  service?: string;
  message: string;
  file?: {
    filename: string;
    content: Buffer;
    contentType: string;
  };
}

export async function sendContactFormEmailResend(formData: ContactFormData): Promise<boolean> {
  // Log submission to file for reliable tracking
  await emailLogger.logSubmission({
    type: 'contact',
    data: formData,
    timestamp: new Date().toISOString(),
    email: formData.email
  });

  if (!resend || !RESEND_API_KEY) {
    console.log('⚠️  Resend API key not configured, but contact form submission logged');
    return true;
  }

  try {
    // Email to you (the business owner)
    await resend.emails.send({
      from: 'XCon Technologies <noreply@xcontechnologies.com>',
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
            <p>This message was sent from your XCon Technologies website contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    });

    // Auto-reply to the customer
    await resend.emails.send({
      from: 'XCon Technologies <noreply@xcontechnologies.com>',
      to: formData.email,
      subject: 'Thank You for Contacting XCon Technologies',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7CB342; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
            Thank You for Your Message
          </h2>
          
          <p>Dear ${formData.firstName},</p>
          
          <p>Thank you for contacting XCon Technologies. We have received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">What's Next:</h3>
            <ul style="line-height: 1.6;">
              <li>Our team will review your inquiry</li>
              <li>We'll prepare a personalized response</li>
              <li>You'll hear back from us within 24 hours</li>
              <li>We'll discuss next steps for your project</li>
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
    });

    console.log('✅ Contact form emails sent successfully via Resend');
    return true;

  } catch (error) {
    console.log('⚠️  Resend sending failed, but contact form submission logged');
    console.error('Resend error:', error);
    return true;
  }
}

export async function sendQuoteRequestEmailResend(formData: QuoteRequestData): Promise<boolean> {
  // Log submission to file for reliable tracking
  await emailLogger.logSubmission({
    type: 'quote',
    data: formData,
    timestamp: new Date().toISOString(),
    email: formData.email
  });

  if (!resend || !RESEND_API_KEY) {
    console.log('⚠️  Resend API key not configured, but quote request logged');
    return true;
  }

  try {
    // Email to you (the business owner)
    await resend.emails.send({
      from: 'XCon Technologies <noreply@xcontechnologies.com>',
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
            ${formData.business ? `<p><strong>Company:</strong> ${formData.business}</p>` : ''}
            ${formData.service ? `<p><strong>Service Required:</strong> ${formData.service}</p>` : ''}
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Project Details:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
            <p>This quote request was sent from your XCon Technologies website.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    });

    // Auto-reply to the customer
    await resend.emails.send({
      from: 'XCon Technologies <noreply@xcontechnologies.com>',
      to: formData.email,
      subject: 'Quote Request Received - XCon Technologies',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7CB342; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
            Thank You for Your Quote Request
          </h2>
          
          <p>Dear ${formData.name},</p>
          
          <p>Thank you for requesting a quote from XCon Technologies. We have received your project details and will prepare a comprehensive proposal for you.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">What's Next:</h3>
            <ul style="line-height: 1.6;">
              <li>Our team will analyze your project requirements</li>
              <li>We'll prepare a detailed proposal with timeline and pricing</li>
              <li>You'll receive your custom quote within 24 hours</li>
              <li>We'll schedule a consultation call to discuss details</li>
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
    });

    console.log('✅ Quote request emails sent successfully via Resend');
    return true;

  } catch (error) {
    console.log('⚠️  Resend sending failed, but quote request logged');
    console.error('Resend error:', error);
    return true;
  }
}

export async function sendConsultationRequestEmailResend(formData: ConsultationRequestData): Promise<boolean> {
  // Log submission to file for reliable tracking
  await emailLogger.logSubmission({
    type: 'consultation',
    data: formData,
    timestamp: new Date().toISOString(),
    email: formData.workEmail
  });

  if (!resend || !RESEND_API_KEY) {
    console.log('⚠️  Resend API key not configured, but consultation request logged');
    return true;
  }

  try {
    // Prepare email data with optional attachment
    const emailData: any = {
      from: 'XCon Technologies <noreply@xcontechnologies.com>',
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
            ${formData.service ? `<p><strong>Service Required:</strong> ${formData.service}</p>` : ''}
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Consultation Details:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
          </div>
          
          ${formData.file ? `
          <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196F3;">
            <h3 style="color: #1976D2; margin-top: 0;">📎 File Attachment:</h3>
            <p><strong>Filename:</strong> ${formData.file.filename}</p>
            <p><strong>File Type:</strong> ${formData.file.contentType}</p>
            <p><em>File is attached to this email for download.</em></p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
            <p>This consultation request was sent from your XCon Technologies website.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Add attachment if file exists
    if (formData.file) {
      emailData.attachments = [{
        filename: formData.file.filename,
        content: formData.file.content,
        type: formData.file.contentType,
        disposition: 'attachment'
      }];
    }

    // Send the email
    await resend.emails.send(emailData);

    // Auto-reply to the customer
    await resend.emails.send({
      from: 'XCon Technologies <noreply@xcontechnologies.com>',
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
    });

    console.log('✅ Consultation request emails sent successfully via Resend');
    return true;

  } catch (error) {
    console.log('⚠️  Resend sending failed, but consultation request logged');
    console.error('Resend error:', error);
    return true;
  }
}