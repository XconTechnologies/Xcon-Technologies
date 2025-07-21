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

interface FileAttachment {
  filename: string;
  content: Buffer;
  contentType: string;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  files?: FileAttachment[];
}

interface QuoteRequestData {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  service?: string;
  message: string;
  files?: FileAttachment[];
}

interface ConsultationRequestData {
  fullName: string;
  company?: string;
  workEmail: string;
  phone?: string;
  service?: string;
  message: string;
  files?: FileAttachment[];
}

interface InternshipApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  files?: FileAttachment[];
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
    // Prepare email data with optional attachment
    const emailData: any = {
      from: 'XCon Technologies <noreply@xcontechnologies.com>',
      to: 'askforquote@xcontechnologies.com',
      subject: `📞 Contact Form Submission - ${formData.firstName} ${formData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7CB342; border-bottom: 2px solid #7CB342; padding-bottom: 10px; text-align: center;">
            📞 New Contact Form Submission
          </h2>
          
          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #7CB342;">
            <h3 style="color: #2e7d2e; margin-top: 0; text-align: center;">🏢 CONTACT FORM - XCon Technologies Website</h3>
            <p style="color: #333; margin: 0; text-align: center; font-weight: bold;">Customer inquiry from main contact form</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
            ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
            ${formData.service ? `<p><strong>Service Required:</strong> ${formData.service}</p>` : ''}
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
          </div>
          
          ${formData.files && formData.files.length > 0 ? `
          <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196F3;">
            <h3 style="color: #1976D2; margin-top: 0;">📎 File Attachments (${formData.files.length}):</h3>
            ${formData.files.map(file => `
              <div style="background-color: white; padding: 10px; margin: 5px 0; border-radius: 4px; border: 1px solid #ddd;">
                <p style="margin: 0;"><strong>📄 ${file.filename}</strong></p>
                <p style="margin: 0; color: #666; font-size: 14px;">Type: ${file.contentType}</p>
              </div>
            `).join('')}
            <p style="margin-top: 10px; color: #1976D2;"><em>All files are attached to this email for download.</em></p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
            <p>This message was sent from your XCon Technologies website contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Add attachments if files exist
    if (formData.files && formData.files.length > 0) {
      emailData.attachments = formData.files.map(file => ({
        filename: file.filename,
        content: file.content,
        type: file.contentType,
        disposition: 'attachment'
      }));
    }

    // Send the email
    await resend.emails.send(emailData);

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
    // Prepare email data with optional attachment
    const emailData: any = {
      from: 'XCon Technologies <noreply@xcontechnologies.com>',
      to: 'askforquote@xcontechnologies.com',
      subject: `💰 Quote Request - ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7CB342; border-bottom: 2px solid #7CB342; padding-bottom: 10px; text-align: center;">
            💰 New Quote Request
          </h2>
          
          <div style="background-color: #fff3e0; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ff9800;">
            <h3 style="color: #e65100; margin-top: 0; text-align: center;">💼 QUOTE POPUP MODAL - XCon Technologies Website</h3>
            <p style="color: #333; margin: 0; text-align: center; font-weight: bold;">Quote request from popup modal form</p>
          </div>
          
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
          
          ${formData.files && formData.files.length > 0 ? `
          <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196F3;">
            <h3 style="color: #1976D2; margin-top: 0;">📎 File Attachments (${formData.files.length}):</h3>
            ${formData.files.map(file => `
              <div style="background-color: white; padding: 10px; margin: 5px 0; border-radius: 4px; border: 1px solid #ddd;">
                <p style="margin: 0;"><strong>📄 ${file.filename}</strong></p>
                <p style="margin: 0; color: #666; font-size: 14px;">Type: ${file.contentType}</p>
              </div>
            `).join('')}
            <p style="margin-top: 10px; color: #1976D2;"><em>All files are attached to this email for download.</em></p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
            <p>This quote request was sent from your XCon Technologies website.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Add attachments if files exist
    if (formData.files && formData.files.length > 0) {
      emailData.attachments = formData.files.map(file => ({
        filename: file.filename,
        content: file.content,
        type: file.contentType,
        disposition: 'attachment'
      }));
    }

    // Send the email
    await resend.emails.send(emailData);

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
      subject: `🔍 Consultation Request - ${formData.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7CB342; border-bottom: 2px solid #7CB342; padding-bottom: 10px; text-align: center;">
            🔍 New Consultation Request
          </h2>
          
          <div style="background-color: #f3e5f5; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #9c27b0;">
            <h3 style="color: #6a1b9a; margin-top: 0; text-align: center;">🏗️ CONSULTATION FORM - XCon Technologies Website</h3>
            <p style="color: #333; margin: 0; text-align: center; font-weight: bold;">Development consultation request from homepage</p>
          </div>
          
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
          
          ${formData.files && formData.files.length > 0 ? `
          <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196F3;">
            <h3 style="color: #1976D2; margin-top: 0;">📎 File Attachments (${formData.files.length}):</h3>
            ${formData.files.map(file => `
              <div style="background-color: white; padding: 10px; margin: 5px 0; border-radius: 4px; border: 1px solid #ddd;">
                <p style="margin: 0;"><strong>📄 ${file.filename}</strong></p>
                <p style="margin: 0; color: #666; font-size: 14px;">Type: ${file.contentType}</p>
              </div>
            `).join('')}
            <p style="margin-top: 10px; color: #1976D2;"><em>All files are attached to this email for download.</em></p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
            <p>This consultation request was sent from your XCon Technologies website.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Add attachments if files exist
    if (formData.files && formData.files.length > 0) {
      emailData.attachments = formData.files.map(file => ({
        filename: file.filename,
        content: file.content,
        type: file.contentType,
        disposition: 'attachment'
      }));
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

export async function sendInternshipApplicationEmailResend(formData: InternshipApplicationData): Promise<boolean> {
  // Log submission to file for reliable tracking
  await emailLogger.logSubmission({
    type: 'internship',
    data: formData,
    timestamp: new Date().toISOString(),
    email: formData.email
  });

  if (!resend || !RESEND_API_KEY) {
    console.log('⚠️  Resend API key not configured, but internship application logged');
    return true;
  }

  try {
    // Parse the message to extract structured data for table format
    const messageLines = formData.message.split('\n');
    let personalDetails = '';
    let internshipPreferences = '';
    let motivation = '';
    let previousExperience = '';
    
    let currentSection = '';
    
    messageLines.forEach(line => {
      line = line.trim();
      if (line.includes('Personal Details:')) {
        currentSection = 'personal';
      } else if (line.includes('Internship Preferences:')) {
        currentSection = 'preferences';
      } else if (line.includes('Previous Experience:')) {
        currentSection = 'experience';
      } else if (line.includes('Motivation:')) {
        currentSection = 'motivation';
      } else if (line && line !== '---' && !line.includes('Note:')) {
        if (currentSection === 'personal') {
          personalDetails += line + '<br>';
        } else if (currentSection === 'preferences') {
          internshipPreferences += line + '<br>';
        } else if (currentSection === 'experience') {
          previousExperience += line + '<br>';
        } else if (currentSection === 'motivation') {
          motivation += line + '<br>';
        }
      }
    });

    // Send email to both addresses
    const emailAddresses = ['askforquote@xcontechnologies.com', 'nouman.ali@xcontechnologies.com'];
    
    for (const toEmail of emailAddresses) {
      await resend.emails.send({
        from: 'XCon Technologies <noreply@xcontechnologies.com>',
        to: toEmail,
        subject: `New Internship Application - ${formData.firstName} ${formData.lastName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #7CB342; border-bottom: 2px solid #7CB342; padding-bottom: 10px; text-align: center;">
              🎓 New Internship Application
            </h2>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background-color: #f9f9f9; border-radius: 8px;">
              <tr style="background-color: #7CB342; color: white;">
                <th colspan="2" style="padding: 15px; text-align: left; border-radius: 8px 8px 0 0;">
                  👤 Personal Information
                </th>
              </tr>
              <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; width: 30%;">Full Name:</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">${formData.firstName} ${formData.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">${formData.email}</td>
              </tr>
              ${formData.phone ? `
              <tr>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">${formData.phone}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 12px 15px; font-weight: bold;">Details:</td>
                <td style="padding: 12px 15px;">${personalDetails || 'Not provided'}</td>
              </tr>
            </table>

            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background-color: #f0f8ff; border-radius: 8px;">
              <tr style="background-color: #2196F3; color: white;">
                <th colspan="2" style="padding: 15px; text-align: left; border-radius: 8px 8px 0 0;">
                  🎯 Internship Preferences
                </th>
              </tr>
              <tr>
                <td style="padding: 12px 15px; font-weight: bold; width: 30%;">Preferences:</td>
                <td style="padding: 12px 15px;">${internshipPreferences || 'Not provided'}</td>
              </tr>
            </table>

            ${previousExperience ? `
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background-color: #fff8e1; border-radius: 8px;">
              <tr style="background-color: #ff9800; color: white;">
                <th style="padding: 15px; text-align: left; border-radius: 8px 8px 0 0;">
                  💼 Previous Experience
                </th>
              </tr>
              <tr>
                <td style="padding: 15px;">${previousExperience}</td>
              </tr>
            </table>` : ''}

            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background-color: #f3e5f5; border-radius: 8px;">
              <tr style="background-color: #9c27b0; color: white;">
                <th style="padding: 15px; text-align: left; border-radius: 8px 8px 0 0;">
                  💡 Motivation
                </th>
              </tr>
              <tr>
                <td style="padding: 15px; line-height: 1.6;">${motivation || 'Not provided'}</td>
              </tr>
            </table>
            
            <div style="margin-top: 30px; padding: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px; text-align: center;">
              <p><strong>📧 This internship application was submitted from XCon Technologies website</strong></p>
              <p>Submitted on: ${new Date().toLocaleString()}</p>
              <p style="color: #7CB342; font-weight: bold;">For HR inquiries: nouman.ali@xcontechnologies.com</p>
            </div>
          </div>
        `
      });
    }

    // Auto-reply to the student
    await resend.emails.send({
      from: 'XCon Technologies <noreply@xcontechnologies.com>',
      to: formData.email,
      subject: 'Internship Application Received - XCon Technologies',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7CB342; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
            🎓 Thank You for Your Internship Application
          </h2>
          
          <p>Dear ${formData.firstName},</p>
          
          <p>Thank you for applying to the XCon Technologies Internship Program. We have successfully received your application and are excited to review your profile.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">What's Next:</h3>
            <ul style="line-height: 1.6;">
              <li>Our HR team will review your application within 2-3 business days</li>
              <li>If selected, we'll contact you to schedule an initial interview</li>
              <li>You'll receive an email with next steps or additional information needed</li>
              <li>Successful candidates will be invited for a technical assessment</li>
            </ul>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #7CB342;">
            <h3 style="color: #2e7d2e; margin-top: 0;">💡 Tips While You Wait:</h3>
            <ul style="line-height: 1.6; color: #333;">
              <li>Keep improving your technical skills related to your chosen track</li>
              <li>Update your portfolio with recent projects</li>
              <li>Connect with us on LinkedIn for updates and tips</li>
              <li>Prepare for potential technical questions in your field</li>
            </ul>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #7CB342; color: white; border-radius: 8px;">
            <h3 style="margin-top: 0;">Contact Information:</h3>
            <p><strong>HR Team:</strong> nouman.ali@xcontechnologies.com</p>
            <p><strong>General:</strong> askforquote@xcontechnologies.com</p>
            <p><strong>Phone:</strong> +1 (513) 302-4718</p>
            <p><strong>Address:</strong> Ohio City, USA</p>
          </div>
          
          <p>Best regards,<br>
          <strong>XCon Technologies Internship Team</strong></p>
        </div>
      `
    });

    console.log('✅ Internship application emails sent successfully via Resend');
    return true;

  } catch (error) {
    console.log('⚠️  Resend sending failed, but internship application logged');
    console.error('Resend error:', error);
    return true;
  }
}

export const sendPartnershipApplicationEmailResend = async ({
  name,
  email,
  phone,
  company,
  partnershipType,
  experience,
  message
}: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  partnershipType: string;
  experience?: string;
  message?: string;
}) => {
  // Log submission to file for reliable tracking
  await emailLogger.logSubmission({
    type: 'partnership',
    data: { name, email, phone, company, partnershipType, experience, message },
    timestamp: new Date().toISOString(),
    email: email
  });

  if (!resend || !RESEND_API_KEY) {
    console.log('⚠️  Resend API key not configured, but partnership application logged');
    return true;
  }

  try {
    // Send email to company
    await resend.emails.send({
      from: 'XCon Technologies <noreply@xcontechnologies.com>',
      to: 'askforquote@xcontechnologies.com',
      subject: `🤝 Partnership Application - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7CB342; border-bottom: 2px solid #7CB342; padding-bottom: 10px; text-align: center;">
            🤝 New Partnership Application
          </h2>
          
          <div style="background-color: #f0f8ff; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196F3;">
            <h3 style="color: #1976D2; margin-top: 0; text-align: center;">Partnership Application from Blog</h3>
            <p style="color: #333; margin: 0; text-align: center; font-weight: bold;">Application submitted via blog partnership form</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background-color: #f9f9f9; border-radius: 8px;">
            <tr style="background-color: #7CB342; color: white;">
              <th colspan="2" style="padding: 15px; text-align: left; border-radius: 8px 8px 0 0;">
                👤 Applicant Details
              </th>
            </tr>
            <tr>
              <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">${email}</td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
              <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">${phone}</td>
            </tr>` : ''}
            ${company ? `
            <tr>
              <td style="padding: 12px 15px; border-bottom: 1px solid #ddd; font-weight: bold;">Company:</td>
              <td style="padding: 12px 15px; border-bottom: 1px solid #ddd;">${company}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 12px 15px; font-weight: bold;">Partnership Type:</td>
              <td style="padding: 12px 15px;">${partnershipType}</td>
            </tr>
          </table>

          ${experience ? `
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background-color: #fff8e1; border-radius: 8px;">
            <tr style="background-color: #ff9800; color: white;">
              <th style="padding: 15px; text-align: left; border-radius: 8px 8px 0 0;">
                💼 Relevant Experience
              </th>
            </tr>
            <tr>
              <td style="padding: 15px; line-height: 1.6;">${experience}</td>
            </tr>
          </table>` : ''}

          ${message ? `
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background-color: #f3e5f5; border-radius: 8px;">
            <tr style="background-color: #9c27b0; color: white;">
              <th style="padding: 15px; text-align: left; border-radius: 8px 8px 0 0;">
                💡 Partnership Goals
              </th>
            </tr>
            <tr>
              <td style="padding: 15px; line-height: 1.6;">${message}</td>
            </tr>
          </table>` : ''}
          
          <div style="margin-top: 30px; padding: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px; text-align: center;">
            <p><strong>🤝 This partnership application was submitted from XCon Technologies blog</strong></p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    });

    // Auto-reply to the applicant
    await resend.emails.send({
      from: 'XCon Technologies <noreply@xcontechnologies.com>',
      to: email,
      subject: 'Partnership Application Received - XCon Technologies',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7CB342; border-bottom: 2px solid #7CB342; padding-bottom: 10px;">
            🤝 Thank You for Your Partnership Interest!
          </h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for your interest in partnering with XCon Technologies! We've received your partnership application and are excited about the potential opportunity to work together.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">What's Next:</h3>
            <ul style="line-height: 1.6;">
              <li>Our partnership team will review your application within 24 hours</li>
              <li>We'll evaluate your background and partnership type preference</li>
              <li>A partnership specialist will reach out to discuss opportunities</li>
              <li>If approved, we'll guide you through our partner onboarding process</li>
            </ul>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #7CB342;">
            <h3 style="color: #2e7d2e; margin-top: 0;">📋 Application Summary:</h3>
            <ul style="line-height: 1.6; color: #333;">
              <li>Partnership Type: ${partnershipType}</li>
              <li>Submitted: ${new Date().toLocaleString()}</li>
            </ul>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #7CB342; color: white; border-radius: 8px;">
            <h3 style="margin-top: 0;">Contact Information:</h3>
            <p><strong>Email:</strong> askforquote@xcontechnologies.com</p>
            <p><strong>Phone:</strong> +1 (513) 302-4718</p>
            <p><strong>Address:</strong> Ohio City, USA</p>
          </div>
          
          <p>Best regards,<br>
          <strong>XCon Technologies Partnership Team</strong></p>
        </div>
      `
    });

    console.log('✅ Partnership application emails sent successfully via Resend');
    return true;

  } catch (error) {
    console.log('⚠️  Resend sending failed, but partnership application logged');
    console.error('Resend error:', error);
    return true;
  }
}