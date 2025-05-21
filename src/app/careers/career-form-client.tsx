"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, CheckCircle } from "lucide-react";
import { submitApplication, type CareerFormState } from "./actions";
import { useToast } from "@/hooks/use-toast";

const initialState: CareerFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Submit Application
    </Button>
  );
}

type CareerFormClientProps = {
  openRoles: { value: string; label: string }[];
};

export function CareerFormClient({ openRoles }: CareerFormClientProps) {
  const [state, formAction] = useFormState(submitApplication, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Application Submitted!" : "Error",
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

      {openRoles.length > 0 && (
        <div>
          <Label htmlFor="role">Applying for</Label>
          <Select name="role">
            <SelectTrigger id="role" className="mt-1">
              <SelectValue placeholder="Select a role (optional)" />
            </SelectTrigger>
            <SelectContent>
              {openRoles.map((role) => (
                <SelectItem key={role.value} value={role.value}>
                  {role.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
           {state.errors?.role && <p className="text-sm text-destructive mt-1">{state.errors.role.join(", ")}</p>}
        </div>
      )}

      <div>
        <Label htmlFor="resume">Resume/CV (PDF, DOCX)</Label>
        <Input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" className="mt-1 file:text-primary file:font-medium" />
        <p className="text-xs text-muted-foreground mt-1">Max file size: 5MB. We only capture the filename for this demo.</p>
        {state.errors?.resumeFileName && <p className="text-sm text-destructive mt-1">{state.errors.resumeFileName.join(", ")}</p>}
      </div>

      <div>
        <Label htmlFor="message">Cover Letter / Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us why you're a great fit for Brix AI..."
          rows={5}
          required
          className="mt-1"
        />
        {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message.join(", ")}</p>}
      </div>
      
      <SubmitButton />
    </form>
  );
}
