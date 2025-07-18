import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Globe, Zap, Clock, Users, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  // const onSubmit = (data: ContactFormData) => {
  //   console.log("Form submitted:", data);
  //   setIsSubmitted(true);
  //   form.reset();
  //   // In a real app, you would send this data to your backend
  // };

const onSubmit = async (data: ContactFormData) => {
  try {
    const response = await fetch("https://kktek-backend.onrender.com/contact", {
                                  
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    const result = await response.text(); // Reading plain text from backend
    console.log("Server Response:", result);

    if (result === "Contact saved successfully") {
      alert("Thank you for your message! We'll get back to you soon.");
      setIsSubmitted(true);
      form.reset(); // Clear the form fields
    } else {
      alert("⚠️ Unexpected response from server: " + result);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("❌ Something went wrong. Please try again later.");
  }
};


  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "info@kktekgroup.com",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across Europe & US",
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "We reply within 24 hours",
    },
  ];

  const workProcess = [
    {
      icon: Clock,
      title: "Response Time",
      description: "Initial response within 24 hours, detailed proposal in 48-72 hours.",
    },
    {
      icon: Globe,
      title: "Time Zones",
      description: "Flexible hours to accommodate EU & US clients.",
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Regular project updates & transparent reports.",
    },
  ];

  const faqItems = [
    {
      question: "What industries do you specialize in?",
      answer: "Finance, healthcare, e-commerce, SaaS. We adapt to sector needs.",
    },
    {
      question: "How long does a project take?",
      answer: "Small: 4-6 weeks. Large: 3-6 months. We'll give clear timelines.",
    },
    {
      question: "Can you scale resources?",
      answer: "Yes, we ramp up teams as your needs grow.",
    },
    {
      question: "How do you ensure quality & security?",
      answer: "Code reviews, automated testing, global security standards, NDAs.",
    },
    {
      question: "Will I have a dedicated contact?",
      answer: "Yes, a PM ensures smooth communication.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="relative py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk bg-gradient-primary bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Area */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-space-grotesk mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-muted-foreground mb-8">
                  We're here to help you transform your ideas into reality. Get in touch with our team of experts.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="border-border/20 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-border/20 bg-card/50 backdrop-blur-sm shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-space-grotesk">Send us a Message</CardTitle>
                {isSubmitted && (
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-md">
                    <p className="text-primary font-medium">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter message subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" variant="cta">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-space-grotesk mb-4">How We Work</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workProcess.map((item, index) => (
              <Card key={index} className="border-border/20 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary">
                      <item.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-space-grotesk mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/20 rounded-lg px-6 bg-card/50 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left font-medium hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-space-grotesk mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 30+ satisfied clients who trust us with their mission-critical projects.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.location.href = 'mailto:info@kktekgroup.com'}
            className="animate-pulse-glow"
          >
            Email Us Directly
          </Button>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Contact;
