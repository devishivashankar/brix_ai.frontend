"use server";

import { z } from "zod";

// For file uploads, a more robust solution (e.g., cloud storage) would be needed in production.
// This is a simplified version.
const ApplicationSchema = z.object({
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

export async function submitApplication(
  prevState: CareerFormState,
  formData: FormData
): Promise<CareerFormState> {
  
  // Simulate file handling by just getting the name
  const resumeFile = formData.get("resume") as File | null;
  const resumeFileName = resumeFile?.name;

  const validatedFields = ApplicationSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    resumeFileName: resumeFileName,
    message: formData.get("message"),
    role: formData.get("role") || undefined,
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // In a real application, you would:
  // 1. Upload the resume to a storage service (e.g., Firebase Storage, AWS S3)
  // 2. Save the application details (including resume URL) to a database
  console.log("Application Submitted (Simulated):", validatedFields.data);

  // Simulate successful submission
  return {
    message: `Thank you, ${validatedFields.data.name}! Your application for ${validatedFields.data.role || 'a position'} has been received. We will be in touch if your profile matches our requirements.`,
    success: true,
  };
}
