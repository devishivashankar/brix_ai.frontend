"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, CheckCircle } from "lucide-react";
import { submitContactForm, type ContactFormState } from "./actions";
import { useToast } from "@/hooks/use-toast";

const initialState: ContactFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export function ContactFormClient() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Message Sent!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" type="text" placeholder="Your Full Name" required className="mt-1" />
        {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name.join(", ")}</p>}
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="mt-1" />
        {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email.join(", ")}</p>}
      </div>

      <div>
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you today?"
          rows={6}
          required
          className="mt-1"
        />
        {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message.join(", ")}</p>}
      </div>
      
      <SubmitButton />
    </form>
  );
}
