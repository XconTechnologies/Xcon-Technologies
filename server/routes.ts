import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactFormEmail, sendQuoteRequestEmail, sendConsultationRequestEmail } from "./email";
import { emailLogger } from "./email-logger";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
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
      
      // Log the contact form submission
      console.log("Contact form submission:", {
        firstName,
        lastName,
        email,
        phone,
        message,
        timestamp: new Date().toISOString(),
      });
      
      // Send email notification
      try {
        await sendContactFormEmail({ firstName, lastName, email, phone, message });
        res.json({ success: true, message: "Message sent successfully! We'll get back to you within 24 hours." });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        res.status(500).json({ error: "Failed to send email. Please try again or contact us directly." });
      }
      
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Quote modal endpoint
  app.post("/api/quote", async (req, res) => {
    try {
      const { name, email, phone, business, service, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }
      
      console.log("Quote request submission:", {
        name, email, phone, business, service, message,
        timestamp: new Date().toISOString(),
      });
      
      try {
        await sendQuoteRequestEmail({ name, email, phone, business, service, message });
        res.json({ success: true, message: "Quote request sent successfully! We'll get back to you within 24 hours." });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        res.status(500).json({ error: "Failed to send email. Please try again or contact us directly." });
      }
    } catch (error) {
      console.error("Quote request error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Consultation form endpoint
  app.post("/api/consultation", async (req, res) => {
    try {
      const { fullName, company, workEmail, phone, message } = req.body;
      
      if (!fullName || !workEmail || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(workEmail)) {
        return res.status(400).json({ error: "Invalid email format" });
      }
      
      console.log("Consultation request submission:", {
        fullName, company, workEmail, phone, message,
        timestamp: new Date().toISOString(),
      });
      
      try {
        await sendConsultationRequestEmail({ fullName, company, workEmail, phone, message });
        res.json({ success: true, message: "Consultation request sent successfully! We'll get back to you within 24 hours." });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        res.status(500).json({ error: "Failed to send email. Please try again or contact us directly." });
      }
    } catch (error) {
      console.error("Consultation request error:", error);
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
