import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100).trim(),
  lastName:  z.string().min(1, "Last name is required").max(100).trim(),
  email:     z.string().email("Invalid email address").max(254).trim().toLowerCase(),
  phone:     z.string().max(25).trim().optional(),
  message:   z.string().min(1, "Message is required").max(5000).trim(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((raw: unknown) => contactSchema.parse(raw))
  .handler(async ({ data }) => {
    try {
      const { supabase } = await import("../db");

      const { error } = await supabase.from("submissions").insert({
        first_name: data.firstName,
        last_name:  data.lastName,
        email:      data.email,
        phone:      data.phone ?? null,
        message:    data.message,
      });

      if (error) throw error;

      return { success: true };
    } catch (err) {
      console.error("[submitContact] Error:", err);
      throw err;
    }
  });
