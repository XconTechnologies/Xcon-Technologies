import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, phone, message } = req.body;
      
      // Validate required fields
      if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      
      // TODO: Implement email sending logic with Nodemailer
      // For now, just log the contact form submission
      console.log("Contact form submission:", {
        firstName,
        lastName,
        email,
        phone,
        message,
        timestamp: new Date().toISOString(),
      });
      
      res.json({ success: true, message: "Contact form submitted successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
