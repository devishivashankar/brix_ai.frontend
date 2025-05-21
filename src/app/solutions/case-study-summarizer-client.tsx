"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { submitCaseStudyForSummary, type FormState } from "./actions";
import { useToast } from "@/hooks/use-toast";

const initialState: FormState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Generate Summary
    </Button>
  );
}

export function CaseStudySummarizerClient() {
  const [state, formAction] = useFormState(submitCaseStudyForSummary, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && !state.summary && !state.errors) { // general message or error
      toast({
        title: state.message.startsWith("Error:") ? "Error" : "Notification",
        description: state.message,
        variant: state.message.startsWith("Error:") ? "destructive" : "default",
      });
    }
    if (state.summary) {
       toast({
        title: "Success!",
        description: "Summary generated.",
        variant: "default",
      });
    }
  }, [state, toast]);

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <form action={formAction}>
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
              <AlertDescription className="text-foreground">
                {state.summary}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
