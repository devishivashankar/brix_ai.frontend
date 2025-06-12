// Client-side form validation for static export
import { z } from "zod";

// For file uploads, a more robust solution (e.g., cloud storage) would be needed in production.
// This is a simplified version.
export const ApplicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  // resume: z.instanceof(File).optional(), // File handling is complex with server actions alone
  resumeFileName: z.string().optional(), // We'll just take the file name for this example
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must be less than 500 characters."),
  role: z.string().optional(),
});

export type CareerFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    resumeFileName?: string[];
    message?: string[];
    role?: string[];
  };
  success?: boolean;
};

// Client-side form handler for static hosting
export function validateApplication(formData: {
  name: string;
  email: string;
  resumeFileName?: string;
  message: string;
  role?: string;
}): CareerFormState {
  const validatedFields = ApplicationSchema.safeParse(formData);

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
  
  console.log("Application Submitted (Client-side):", validatedFields.data);

  // Simulate successful submission
  return {
    message: `Thank you, ${validatedFields.data.name}! Your application for ${validatedFields.data.role || 'a position'} has been received. We will be in touch if your profile matches our requirements.`,
    success: true,
  };
}
