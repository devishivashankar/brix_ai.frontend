"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { validateApplication, type CareerFormState } from "./actions";
import { useToast } from "@/hooks/use-toast";

const initialState: CareerFormState = {
  message: "",
  success: false,
};

type CareerFormClientProps = {
  openRoles: { value: string; label: string }[];
};

export function CareerFormClient({ openRoles }: CareerFormClientProps) {
  const [state, setState] = useState<CareerFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const resumeFile = formData.get("resume") as File | null;
    
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      resumeFileName: resumeFile?.name,
      message: formData.get("message") as string,
      role: selectedRole || undefined,
    };

    // Simulate async processing
    await new Promise(resolve => setTimeout(resolve, 1000));

    const result = validateApplication(data);
    setState(result);

    toast({
      title: result.success ? "Application Submitted!" : "Error",
      description: result.message,
      variant: result.success ? "default" : "destructive",
    });

    if (result.success) {
      event.currentTarget.reset();
      setSelectedRole("");
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

      {openRoles.length > 0 && (
        <div>
          <Label htmlFor="role">Applying for</Label>
          <Select value={selectedRole} onValueChange={setSelectedRole}>
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
      
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        Submit Application
      </Button>
    </form>
  );
}
