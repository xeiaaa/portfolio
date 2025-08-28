"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import SectionTitle from "./SectionTitle";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="flex flex-col scroll-mt-11">
      <SectionTitle title="Get In Touch" />

      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-secondary leading-relaxed text-sm sm:text-base">
            I&apos;m always interested in hearing about new opportunities and
            exciting projects. Whether you have a question or just want to say
            hi, feel free to reach out!
          </p>

          <div className="flex items-center gap-3 text-highlight">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-medium">
              cosmicdevcs@gmail.com
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-primary"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-highlight/20 text-sm sm:text-base ${
                  errors.name
                    ? "border-red-500 bg-red-50/10"
                    : "border-muted bg-transparent focus:border-highlight"
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <span className="text-xs sm:text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.name}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-primary"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-highlight/20 text-sm sm:text-base ${
                  errors.email
                    ? "border-red-500 bg-red-50/10"
                    : "border-muted bg-transparent focus:border-highlight"
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <span className="text-xs sm:text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium text-primary"
            >
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-highlight/20 text-sm sm:text-base ${
                errors.subject
                  ? "border-red-500 bg-red-50/10"
                  : "border-muted bg-transparent focus:border-highlight"
              }`}
              placeholder="What's this about?"
            />
            {errors.subject && (
              <span className="text-xs sm:text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.subject}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-primary"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-highlight/20 resize-none text-sm sm:text-base ${
                errors.message
                  ? "border-red-500 bg-red-50/10"
                  : "border-muted bg-transparent focus:border-highlight"
              }`}
              placeholder="Tell me about your project, opportunity, or just say hello!"
            />
            {errors.message && (
              <span className="text-xs sm:text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.message}
              </span>
            )}
          </div>

          <div className="flex flex-col items-end gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-highlight text-white font-medium rounded-lg hover:bg-highlight/90 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed group text-sm sm:text-base"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <div className="flex items-center gap-2 text-green-500">
                <CheckCircle className="w-4 h-4" />
                <span className="text-xs sm:text-sm">
                  Message sent successfully!
                </span>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="flex items-center gap-2 text-red-500">
                <AlertCircle className="w-4 h-4" />
                <span className="text-xs sm:text-sm">
                  Failed to send message. Please try again.
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
