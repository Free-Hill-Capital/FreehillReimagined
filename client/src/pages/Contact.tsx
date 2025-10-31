import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, User, MessageSquare, AlertCircle } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    address: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const phoneNumber = value.replace(/\D/g, '');
    
    // Format as xxx-xxx-xxxx
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    } else {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const detectSpam = (data: typeof formData): { isSpam: boolean; reason?: string } => {
    const { fullName, email, phone, message, address } = data;
    
    // Check for suspicious patterns
    const spamKeywords = ['viagra', 'casino', 'lottery', 'prize', 'winner', 'click here', 'buy now', 'limited time', 'act now', 'free money', 'make money fast', 'work from home', 'congratulations'];
    const messageText = `${fullName} ${email} ${message} ${address}`.toLowerCase();
    
    // Check for spam keywords
    if (spamKeywords.some(keyword => messageText.includes(keyword))) {
      return { isSpam: true, reason: "Suspicious content detected" };
    }
    
    // Check for excessive URLs
    const urlCount = (messageText.match(/https?:\/\//g) || []).length;
    if (urlCount > 3) {
      return { isSpam: true, reason: "Too many URLs detected" };
    }
    
    // Check for suspicious email patterns
    if (email.match(/[0-9]{5,}@/) || email.includes('temp') || email.includes('fake')) {
      return { isSpam: true, reason: "Suspicious email address" };
    }
    
    // Check for excessive capital letters (more than 50% capitals)
    const capitalRatio = (message.match(/[A-Z]/g) || []).length / message.length;
    if (capitalRatio > 0.5 && message.length > 20) {
      return { isSpam: true, reason: "Excessive use of capital letters" };
    }
    
    // Check for very short or nonsense messages
    if (message.trim().length < 10) {
      return { isSpam: true, reason: "Message is too short" };
    }
    
    // Check for repetitive characters
    if (/(.)\1{10,}/.test(message)) {
      return { isSpam: true, reason: "Repetitive content detected" };
    }
    
    return { isSpam: false };
  };

  const validateField = (field: string, value: string) => {
    switch (field) {
      case 'fullName':
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < 2) return "Name is too short";
        break;
      case 'address':
        if (!value.trim()) return "Address is required";
        if (value.trim().length < 5) return "Address is too short";
        break;
      case 'email':
        if (!value.trim()) return "Email address is required";
        if (!validateEmail(value)) return "Please enter a valid email address";
        break;
      case 'phone':
        if (!value.trim()) return "Phone number is required";
        const digits = value.replace(/\D/g, '');
        if (digits.length > 0 && digits.length < 10) return "Phone number must be 10 digits";
        break;
      case 'message':
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters";
        break;
    }
    return "";
  };

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      address: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Spam detection
    const spamCheck = detectSpam(formData);
    if (spamCheck.isSpam) {
      toast({
        title: "Submission Blocked",
        description: spamCheck.reason || "Your message appears to contain spam content.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent!",
          description: data.testMode 
            ? "Test mode: Email sent to mikeanthony595@gmail.com" 
            : "Thank you for contacting us. We'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          fullName: "",
          address: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({
          fullName: "",
          address: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-background pt-16 md:pt-20">
        <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-12 md:pt-[135px] md:py-20">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Get in touch with our team today — we're ready to help you grow.
            </p>
          </div>

          <Card className="border-none shadow-xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        const error = validateField('fullName', e.target.value);
                        setErrors({ ...errors, fullName: error });
                      }}
                      className={`h-14 pl-12 text-base md:text-lg border transition-all ${
                        errors.fullName ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <div className="flex items-center gap-2 text-red-500 text-sm animate-in slide-in-from-top-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.fullName}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Address"
                      value={formData.address}
                      onChange={(e) => {
                        setFormData({ ...formData, address: e.target.value });
                        const error = validateField('address', e.target.value);
                        setErrors({ ...errors, address: error });
                      }}
                      className={`h-14 pl-12 text-base md:text-lg border transition-all ${
                        errors.address ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'
                      }`}
                    />
                  </div>
                  {errors.address && (
                    <div className="flex items-center gap-2 text-red-500 text-sm animate-in slide-in-from-top-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.address}</span>
                    </div>
                  )}
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          const error = validateField('email', e.target.value);
                          setErrors({ ...errors, email: error });
                        }}
                        className={`h-14 pl-12 text-base md:text-lg border transition-all ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <div className="flex items-center gap-2 text-red-500 text-sm animate-in slide-in-from-top-1">
                        <AlertCircle className="h-4 w-4" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => {
                          const formatted = formatPhoneNumber(e.target.value);
                          setFormData({ ...formData, phone: formatted });
                          const error = validateField('phone', formatted);
                          setErrors({ ...errors, phone: error });
                        }}
                        className={`h-14 pl-12 text-base md:text-lg border transition-all ${
                          errors.phone ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <div className="flex items-center gap-2 text-red-500 text-sm animate-in slide-in-from-top-1">
                        <AlertCircle className="h-4 w-4" />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 h-5 w-5 text-muted-foreground" />
                    <Textarea
                      placeholder="Question / Comment"
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        const error = validateField('message', e.target.value);
                        setErrors({ ...errors, message: error });
                      }}
                      className={`min-h-[180px] pl-12 pt-5 resize-none text-base md:text-lg border transition-all ${
                        errors.message ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <div className="flex items-center gap-2 text-red-500 text-sm animate-in slide-in-from-top-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-base md:text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95"
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}
