"use server";

import { summarizeCaseStudy, type SummarizeCaseStudyInput } from "@/ai/flows/summarize-case-study";
import { z } from "zod";

const SummarizeSchema = z.object({
  document: z.string().min(50, "Document text must be at least 50 characters long."),
});

export type FormState = {
  message: string;
  summary?: string;
  errors?: {
    document?: string[];
  };
};

export async function submitCaseStudyForSummary(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = SummarizeSchema.safeParse({
    document: formData.get("documentText"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const input: SummarizeCaseStudyInput = {
      document: validatedFields.data.document,
    };
    const result = await summarizeCaseStudy(input);
    
    if (result && result.summary) {
      return { message: "Summary generated successfully!", summary: result.summary };
    } else {
      return { message: "Failed to generate summary. The AI returned an unexpected result." };
    }
  } catch (error) {
    console.error("Error summarizing case study:", error);
    let errorMessage = "An unexpected error occurred while generating the summary.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return { message: `Error: ${errorMessage}` };
  }
}
