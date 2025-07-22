import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { storage } from "./storage";
import { sendContactFormEmail, sendQuoteRequestEmail, sendConsultationRequestEmail } from "./email";
import { sendContactFormEmailSG, sendQuoteRequestEmailSG, sendConsultationRequestEmailSG } from "./sendgrid-email";
import { sendContactFormEmailResend, sendQuoteRequestEmailResend, sendConsultationRequestEmailResend, sendInternshipApplicationEmailResend, sendPartnershipApplicationEmailResend } from "./resend-email";
import { emailLogger } from "./email-logger";

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit per file
    files: 10, // Max 10 files per request
  },
  fileFilter: (req, file, cb) => {
    // Allow common file types
    const allowedMimeTypes = [
      'image/jpeg', 'image/jpg', 'image/png', 'image/gif',
      'application/pdf',
      'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain', 'text/csv',
      'application/zip', 'application/x-rar-compressed',
      'application/json'
    ];
    
    const allowedExtensions = /\.(jpeg|jpg|png|gif|pdf|doc|docx|txt|csv|zip|rar|json)$/i;
    
    const validMimeType = allowedMimeTypes.includes(file.mimetype);
    const validExtension = allowedExtensions.test(file.originalname);
    
    if (validMimeType || validExtension) {
      return cb(null, true);
    } else {
      cb(new Error(`Invalid file type: ${file.originalname}. Only images, PDFs, documents, and archives are allowed.`));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Test email endpoint
  app.post("/api/test-email", async (req, res) => {
    try {
      console.log("Testing email with Resend...");
      await sendContactFormEmailResend({
        firstName: "Test",
        lastName: "Email",
        email: "test@example.com",
        phone: "+1 (513) 302-4718",
        message: "This is a test email to verify that the email system is working properly. If you receive this email, the Resend integration is successful!"
      });
      res.json({ success: true, message: "Test email sent successfully to askforquote@xcontechnologies.com" });
    } catch (error) {
      console.error("Test email failed:", error);
      res.status(500).json({ error: "Failed to send test email", details: error.message });
    }
  });

  // Contact form endpoint with multiple file upload
  app.post("/api/contact", upload.fields([
    { name: 'file0', maxCount: 1 },
    { name: 'file1', maxCount: 1 },
    { name: 'file2', maxCount: 1 },
    { name: 'file3', maxCount: 1 },
    { name: 'file4', maxCount: 1 }
  ]), async (req, res) => {
    try {
      const { firstName, lastName, email, phone, company, service, message } = req.body;
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };
      
      // Validate required fields
      if (!firstName || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }
      
      // Log the contact form submission
      console.log("Contact form submission:", {
        firstName,
        lastName,
        email,
        phone,
        company,
        service,
        message,
        fileAttached: !!file,
        fileName: file?.originalname,
        timestamp: new Date().toISOString(),
      });
      
      // Prepare contact data with optional file
      const contactData: any = { firstName, lastName, email, phone, company, service, message };
      
      if (file) {
        contactData.file = {
          filename: file.originalname,
          content: file.buffer.toString('base64'),
          contentType: file.mimetype
        };
      }
      
      // Send email notification using Resend
      try {
        await sendContactFormEmailResend(contactData);
        res.json({ success: true, message: "Message sent successfully! We'll get back to you within 24 hours." });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Always log the submission even if email fails
        res.json({ success: true, message: "Your message has been received! We'll contact you within 24 hours." });
      }
      
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Quote modal endpoint with file upload
  app.post("/api/quote", upload.single('file'), async (req, res) => {
    try {
      const { name, email, phone, business, service, message } = req.body;
      const file = req.file;
      
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }
      
      console.log("Quote request submission:", {
        name, email, phone, business, service, message,
        fileAttached: !!file,
        fileName: file?.originalname,
        timestamp: new Date().toISOString(),
      });
      
      // Prepare quote data with optional file
      const quoteData: any = { name, email, phone, business, service, message };
      
      if (file) {
        quoteData.file = {
          filename: file.originalname,
          content: file.buffer.toString('base64'),
          contentType: file.mimetype
        };
      }
      
      try {
        await sendQuoteRequestEmailResend(quoteData);
        res.json({ success: true, message: "Quote request sent successfully! We'll get back to you within 24 hours." });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Always log the submission even if email fails
        res.json({ success: true, message: "Your quote request has been received! We'll contact you within 24 hours." });
      }
    } catch (error) {
      console.error("Quote request error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Consultation form endpoint with file upload
  app.post("/api/consultation", upload.single('file'), async (req, res) => {
    try {
      const { fullName, company, workEmail, phone, service, message } = req.body;
      const file = req.file;
      
      if (!fullName || !workEmail || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(workEmail)) {
        return res.status(400).json({ error: "Invalid email format" });
      }
      
      console.log("Consultation request submission:", {
        fullName, company, workEmail, phone, service, message,
        fileAttached: !!file,
        fileName: file?.originalname,
        timestamp: new Date().toISOString(),
      });
      
      // Prepare consultation data with optional file
      const consultationData: any = { fullName, company, workEmail, phone, service, message };
      
      if (file) {
        consultationData.file = {
          filename: file.originalname,
          content: file.buffer.toString('base64'),
          contentType: file.mimetype
        };
      }
      
      try {
        await sendConsultationRequestEmailResend(consultationData);
        res.json({ success: true, message: "Consultation request sent successfully! We'll get back to you within 24 hours." });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Always log the submission even if email fails
        res.json({ success: true, message: "Your consultation request has been received! We'll contact you within 24 hours." });
      }
    } catch (error) {
      console.error("Consultation request error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Internship application endpoint
  app.post("/api/internship", async (req, res) => {
    try {
      const { firstName, lastName, email, phone, message } = req.body;
      
      // Validate required fields
      if (!firstName || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }
      
      // Log the internship application submission
      console.log("Internship application submission:", {
        firstName,
        lastName,
        email,
        phone,
        message,
        timestamp: new Date().toISOString(),
      });
      
      // Send email notification using Resend
      try {
        await sendInternshipApplicationEmailResend({ firstName, lastName, email, phone, message });
        res.json({ success: true, message: "Internship application sent successfully! We'll review your application and get back to you within 2-3 business days." });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Always log the submission even if email fails
        res.json({ success: true, message: "Your internship application has been received! We'll review and contact you within 2-3 business days." });
      }
      
    } catch (error) {
      console.error("Internship application error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Partnership application endpoint
  app.post("/api/partnership", async (req, res) => {
    try {
      const { name, email, phone, company, partnershipType, experience, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !partnershipType) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }
      
      // Log the partnership application submission
      console.log("Partnership application submission:", {
        name,
        email,
        phone,
        company,
        partnershipType,
        experience,
        message,
        timestamp: new Date().toISOString(),
      });
      
      // Send email notification using Resend
      try {
        await sendPartnershipApplicationEmailResend({ name, email, phone, company, partnershipType, experience, message });
        res.json({ success: true, message: "Partnership application sent successfully! We'll review your application and get back to you within 24 hours." });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Always log the submission even if email fails
        res.json({ success: true, message: "Your partnership application has been received! We'll review and contact you within 24 hours." });
      }
      
    } catch (error) {
      console.error("Partnership application error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Newsletter subscription endpoint
  app.post('/api/newsletter', upload.none(), async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email) {
        return res.status(400).json({ error: 'Email is required' });
      }
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }
      
      // Send confirmation email to subscriber
      const subscriberEmailData = {
        from: 'XCon Technologies <no-reply@xcontechnologies.com>',
        to: email,
        subject: 'Welcome to XCon Technologies Newsletter!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #7CB342; font-size: 28px; margin: 0;">XCon Technologies</h1>
                <p style="color: #666; font-size: 16px; margin-top: 5px;">Your Technology Partner</p>
              </div>
              
              <h2 style="color: #333; font-size: 24px; margin-bottom: 20px;">Welcome to Our Newsletter!</h2>
              
              <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                Thank you for subscribing to the XCon Technologies newsletter! You'll now receive:
              </p>
              
              <ul style="color: #666; font-size: 16px; line-height: 1.8; margin-bottom: 25px; padding-left: 20px;">
                <li>Latest technology trends and insights</li>
                <li>Partnership opportunities and announcements</li>
                <li>Industry news and expert analysis</li>
                <li>Exclusive content and early access to resources</li>
                <li>Notifications about new blog posts and articles</li>
              </ul>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <p style="color: #666; font-size: 14px; margin: 0; text-align: center;">
                  <strong>Stay Connected:</strong> Follow us on social media for daily updates and insights.
                </p>
              </div>
              
              <div style="text-align: center; margin-top: 30px;">
                <p style="color: #666; font-size: 14px; margin: 0;">
                  Best regards,<br>
                  <strong>The XCon Technologies Team</strong>
                </p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px;">
              <p style="color: #999; font-size: 12px;">
                © 2025 XCon Technologies. All rights reserved.
              </p>
            </div>
          </div>
        `
      };
      
      // Send notification email to company
      const companyEmailData = {
        from: 'XCon Technologies <no-reply@xcontechnologies.com>',
        to: 'askforquote@xcontechnologies.com',
        subject: 'New Newsletter Subscription',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #7CB342;">New Newsletter Subscription</h2>
            <p style="font-size: 16px; color: #333;">
              Someone has subscribed to the XCon Technologies newsletter.
            </p>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 0; font-size: 16px;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0 0 0; font-size: 14px; color: #666;"><strong>Subscribed:</strong> ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `
      };
      
      // Send emails using existing Resend functionality
      // We'll create a dedicated newsletter email function
      const { Resend } = await import('resend');
      const resendInstance = new Resend(process.env.RESEND_API_KEY || 're_XzcqVNwT_7CA8WS5NgxVp1dX79TowURDG');
      
      await resendInstance.emails.send(subscriberEmailData);
      await resendInstance.emails.send(companyEmailData);
      
      // Log the subscription
      console.log(`Newsletter subscription: ${email} at ${new Date().toISOString()}`);
      
      res.json({ 
        success: true, 
        message: 'Successfully subscribed to newsletter!' 
      });
      
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      res.status(500).json({ 
        error: 'Failed to subscribe to newsletter. Please try again.' 
      });
    }
  });

  // Admin endpoint to view form submissions
  app.get("/admin/submissions", async (req, res) => {
    try {
      const submissions = await emailLogger.getSubmissions();
      res.json({
        success: true,
        total: submissions.length,
        submissions: submissions.slice(-50) // Show last 50 submissions
      });
    } catch (error) {
      console.error("Error fetching submissions:", error);
      res.status(500).json({ error: "Failed to fetch submissions" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
