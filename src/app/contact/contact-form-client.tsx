"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { validateContactForm, type ContactFormState } from "./actions";
import { useToast } from "@/hooks/use-toast";

const initialState: ContactFormState = {
  message: "",
  success: false,
};

export function ContactFormClient() {
  const [state, setState] = useState<ContactFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    // Simulate async processing
    await new Promise(resolve => setTimeout(resolve, 1000));

    const result = validateContactForm(data);
    setState(result);

    toast({
      title: result.success ? "Message Sent!" : "Error",
      description: result.message,
      variant: result.success ? "default" : "destructive",
    });

    if (result.success) {
      event.currentTarget.reset();
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
      
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        Send Message
      </Button>
    </form>
  );
}
