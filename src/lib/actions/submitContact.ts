import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// ── Layer 1: Zod schema — validates types, formats and length limits ──────────
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100).trim(),
  lastName:  z.string().min(1, "Last name is required").max(100).trim(),
  email:     z.string().email("Invalid email address").max(254).trim().toLowerCase(),
  phone:     z.string().max(25).trim().optional(),
  message:   z.string().min(1, "Message is required").max(5000).trim(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// ── Server function (runs server-side only, never exposed as a public API) ────
export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((raw: unknown) => contactSchema.parse(raw))
  .handler(async ({ data }) => {
    try {
      const [{ default: sanitize }, { connectDB }, { Submission }] = await Promise.all([
        import("mongo-sanitize"),
        import("../db"),
        import("../models/submission"),
      ]);

      // Layer 2: mongo-sanitize — strips any MongoDB operator keys ($where, $ne …)
      const clean = sanitize({ ...data }) as ContactFormData;

      await connectDB();

      await Submission.create({
        firstName: clean.firstName,
        lastName:  clean.lastName,
        email:     clean.email,
        phone:     clean.phone ?? "",
        message:   clean.message,
      });

      return { success: true };
    } catch (err) {
      // Log full error server-side so we can diagnose in dev
      console.error("[submitContact] Error:", err);
      throw err;
    }
  });
