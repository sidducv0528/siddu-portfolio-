"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, Phone, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon, TelegramIcon, GmailIcon } from "./ui/Icons";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Web3Forms Access Key
    formData.append("access_key", "335bd586-a368-4642-bd9e-b086fdb3533f");
    // This makes sure the email subject is descriptive
    formData.append("subject", "New Contact Form Submission from Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Error from Web3Forms:", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss data opportunities? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass p-8 md:p-10 rounded-3xl border-primary/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-glass-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    suppressHydrationWarning
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-glass-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="Message_Subject"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-glass-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-glass-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-4 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] disabled:opacity-70 ${isSuccess ? 'bg-green-500 hover:bg-green-600' : 'bg-primary hover:bg-primary/90'}`}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : isSuccess ? (
                  <>
                    Message Sent Successfully! 🎉
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass p-8 rounded-3xl border-primary/10 hover:border-primary/30 transition-colors h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="mailto:sidducv0528@gmail.com" className="flex items-center gap-4 text-muted hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-background/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground">Email</p>
                    <p className="font-medium">sidducv0528@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+918328548601" className="flex items-center gap-4 text-muted hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-background/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-foreground">Phone</p>
                    <p className="font-medium">+91 8328548601</p>
                  </div>
                </a>
              </div>

              <div className="mt-12">
                <h4 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">Connect with me</h4>
                <div className="flex flex-wrap gap-4">
                  <SocialLink href="https://wa.me/918328548601" icon={<WhatsappIcon style={{ width: 22, height: 22 }} />} label="WhatsApp" brandColor="text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/50" />
                  <SocialLink href="https://t.me/sidduv0528" icon={<TelegramIcon style={{ width: 22, height: 22 }} />} label="Telegram" brandColor="text-[#2AABEE] hover:bg-[#2AABEE]/10 hover:border-[#2AABEE]/50" />
                  <SocialLink href="mailto:sidducv0528@gmail.com" icon={<GmailIcon style={{ width: 22, height: 22 }} />} label="Gmail" brandColor="text-[#EA4335] hover:bg-[#EA4335]/10 hover:border-[#EA4335]/50" />
                  <SocialLink href="https://linkedin.com/in/siddu-data" icon={<LinkedinIcon style={{ width: 22, height: 22 }} />} label="LinkedIn" brandColor="text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/50" />
                  <SocialLink href="https://github.com/sidducv0528" icon={<GithubIcon style={{ width: 22, height: 22 }} />} label="GitHub" brandColor="text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/50" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label, brandColor }: { href: string; icon: React.ReactNode; label: string, brandColor?: string }) {
  return (
    <motion.a
      whileHover={{ y: -5 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 rounded-full glass flex items-center justify-center transition-all shadow-sm ${brandColor || 'text-muted hover:text-primary hover:border-primary/50'}`}
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}
