"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2, Mail, Phone, MapPin, Send } from "lucide-react";
import { useIntersectionObserver } from "../../../hooks/use-inter-section-observer";
import { useMemo, useState } from "react";

const Contact = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    | { state: "idle" }
    | { state: "submitting" }
    | { state: "error"; message: string }
  >({ state: "idle" });
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(
    "Message sent! I’ll get back to you soon.",
  );

  const isValid = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    return (
      form.firstName.trim().length > 0 &&
      form.lastName.trim().length > 0 &&
      emailOk &&
      form.subject.trim().length > 0 &&
      form.message.trim().length > 0
    );
  }, [form]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || status.state === "submitting") return;

    setStatus({ state: "submitting" });
    try {
      const res = await fetch("/api/application", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus({ state: "idle" });
      setSuccessMessage("Message sent! I’ll get back to you soon.");
      setSuccessModalOpen(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err: unknown) {
      setStatus({
        state: "error",
        message: err instanceof Error ? err.message : "Failed to send message",
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "michaels6355@gmail.com",
      link: "mailto:michaels6355@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+63 9358693624", // TODO: Change to my phone number
      link: "tel:+639358693624", // TODO: Change to my phone number
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Philippines",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6" ref={elementRef}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? "animate-fade-in opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I&apos;m always interested in hearing about new opportunities and
            exciting projects. Let&apos;s discuss how we can work together to
            bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible
                ? "animate-fade-in opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
              <p className="text-muted-foreground mb-8">
                I&apos;m always excited to discuss new opportunities, innovative
                projects, or potential collaborations. Whether you&apos;re
                looking for a developer to bring your ideas to life or want to
                chat about technology, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="gradient-card shadow-card border-border/50 hover:shadow-glow transition-smooth cursor-pointer"
                  onClick={() => window.open(info.link, "_blank")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-primary">{info.icon}</div>
                      <div>
                        <h4 className="font-medium">{info.title}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`flex w-full min-w-0 items-end transition-all duration-700 ${
              isVisible
                ? "animate-fade-in opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <Card className="gradient-card w-full min-w-0 border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Dialog
                  open={successModalOpen}
                  onOpenChange={setSuccessModalOpen}
                >
                  <DialogContent className="sm:max-w-md gradient-card shadow-card border-border/50">
                    <DialogHeader className="items-center text-center">
                      <div className="mb-2 inline-flex size-16 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                        <CheckCircle2 className="size-9 text-primary" />
                      </div>
                      <DialogTitle className="text-3xl">
                        Message sent
                      </DialogTitle>
                      <DialogDescription className="text-base leading-relaxed sm:text-lg">
                        {successMessage}
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="flex !flex-row flex-nowrap gap-3 justify-stretch sm:!flex-row [&>button]:min-w-0 [&>button]:flex-1">
                      <Button
                        type="button"
                        className="gradient-primary text-primary-foreground shadow-hero hover:shadow-glow transition-smooth"
                        onClick={() => setSuccessModalOpen(false)}
                      >
                        Got it
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-border/50 bg-secondary/30 hover:bg-secondary/50"
                        onClick={() => setSuccessModalOpen(false)}
                      >
                        Close
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <form onSubmit={handleSubmit} className="w-full space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input
                        placeholder="Enter your first name"
                        className="bg-secondary/50 border-border/50 focus:border-primary transition-smooth"
                        value={form.firstName}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, firstName: e.target.value }))
                        }
                        autoComplete="given-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input
                        placeholder="Enter your last name"
                        className="bg-secondary/50 border-border/50 focus:border-primary transition-smooth"
                        value={form.lastName}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, lastName: e.target.value }))
                        }
                        autoComplete="family-name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-secondary/50 border-border/50 focus:border-primary transition-smooth"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      autoComplete="email"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input
                      placeholder="New Project Collaboration"
                      className="bg-secondary/50 border-border/50 focus:border-primary transition-smooth"
                      value={form.subject}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, subject: e.target.value }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea
                      placeholder="Tell me about your new project..."
                      className="bg-secondary/50 border-border/50 focus:border-primary transition-smooth min-h-[120px]"
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                    />
                  </div>

                  {status.state === "error" && (
                    <p className="text-sm text-destructive">{status.message}</p>
                  )}

                  <Button
                    type="submit"
                    disabled={!isValid || status.state === "submitting"}
                    className="flex w-full gradient-primary text-primary-foreground shadow-hero transition-smooth hover:shadow-glow disabled:opacity-60"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {status.state === "submitting"
                      ? "Sending..."
                      : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
