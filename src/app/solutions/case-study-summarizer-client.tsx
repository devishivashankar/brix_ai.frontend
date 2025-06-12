'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Loader2, CheckCircle } from "lucide-react";
import { validateCaseStudyForm, type FormState } from "./actions";
import { useToast } from "@/hooks/use-toast";

const initialState: FormState = {
  message: "",
};

export function CaseStudySummarizerClient() {
  const [state, setState] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      document: formData.get("documentText") as string,
    };

    // Simulate async processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    const result = validateCaseStudyForm(data);
    setState(result);

    if (result.message && !result.summary && !result.errors) {
      toast({
        title: result.message.startsWith("Error:") ? "Error" : "Notification",
        description: result.message,
        variant: result.message.startsWith("Error:") ? "destructive" : "default",
      });
    }
    if (result.summary) {
      toast({
        title: "Success!",
        description: "Summary generated.",
        variant: "default",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Test Our Summarizer AI</CardTitle>
          <CardDescription>
            Paste your case study or whitepaper text below to get a concise summary.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="documentText">Document Text</Label>
            <Textarea
              id="documentText"
              name="documentText"
              placeholder="Enter your document text here (min. 50 characters)..."
              rows={10}
              className="mt-1"
              aria-describedby="documentText-error"
            />
            {state.errors?.document && (
              <p id="documentText-error" className="text-sm text-destructive mt-1">
                {state.errors.document.join(", ")}
              </p>
            )}
          </div>

          {state.summary && (
            <Alert variant="default" className="bg-primary/5">
              <CheckCircle className="h-5 w-5 text-primary" />
              <AlertTitle className="font-semibold text-primary">Generated Summary</AlertTitle>
              <AlertDescription className="text-foreground whitespace-pre-line">
                {state.summary}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Generate Summary
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
