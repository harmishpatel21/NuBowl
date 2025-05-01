import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema, subscriptionSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactMessageSchema.parse(req.body);
      const message = await storage.saveContactMessage(data);
      res.status(201).json({ success: true, message: "Message received" });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors
        });
      }
      res.status(500).json({ message: "Server error" });
    }
  });

  // Handle newsletter subscriptions
  app.post("/api/subscribe", async (req, res) => {
    try {
      const data = subscriptionSchema.parse(req.body);
      const subscription = await storage.saveSubscription(data);
      res.status(201).json({ success: true, message: "Subscription added" });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Invalid email address", 
          errors: error.errors
        });
      }
      res.status(500).json({ message: "Server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
