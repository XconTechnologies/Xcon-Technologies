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
