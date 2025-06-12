// Client-side form validation for static export
import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(1000, "Message must be less than 1000 characters."),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success?: boolean;
};

// Client-side form handler for static hosting
export function validateContactForm(formData: {
  name: string;
  email: string;
  message: string;
}): ContactFormState {
  const validatedFields = ContactSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // For static hosting, you would typically:
  // 1. Use a service like Formspree, Netlify Forms, or EmailJS
  // 2. Send data to an external API endpoint
  // 3. Use a serverless function (Vercel Functions, Netlify Functions)
  
  // For now, we'll simulate success
  console.log("Contact Form Submitted (Client-side):", validatedFields.data);

  return {
    message: `Thank you for your message, ${validatedFields.data.name}! We will get back to you soon.`,
    success: true,
  };
}
