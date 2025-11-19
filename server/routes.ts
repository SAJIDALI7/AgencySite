import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, data: submission });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromError(error);
        return res.status(400).json({
          error: "Validation failed",
          message: validationError.toString(),
        });
      }
      console.error("Error creating contact submission:", error);
      res.status(500).json({
        error: "Internal server error",
        message: "Failed to submit contact form",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
