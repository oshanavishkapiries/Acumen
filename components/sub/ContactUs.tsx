"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GitlabIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => (
  <Link
    href={href}
    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
    prefetch={false}
    aria-label={label}
  >
    <Icon className="h-4 w-4" />
  </Link>
);

const ContactDetail: React.FC<{ label: string; content: string }> = ({
  label,
  content,
}) => (
  <div className="grid gap-1">
    <div className="text-sm font-medium text-muted-foreground">{label}</div>
    <a href="#" className="text-lg font-medium hover:underline">
      {content}
    </a>
  </div>
);

const ContactUs: React.FC = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.section
      className="w-full py-12 bg-muted max-md:rounded-none rounded-lg"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} 
    >
      <div className="grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
        <motion.div className="space-y-4" variants={itemVariants}>
          <motion.h2
            className="h3"
            variants={itemVariants}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="max-w-[600px] text-1"
            variants={itemVariants}
          >
            Have a question or want to work together? Fill out the form or reach
            out to us directly.
          </motion.p>
          <motion.div className="grid gap-4" variants={itemVariants}>
            <ContactDetail label="Phone" content="+1 (555) 123-4567" />
            <ContactDetail label="Email" content="info@acme.com" />
            <div className="grid gap-1">
              <div className="text-sm font-medium text-muted-foreground">
                Social
              </div>
              <div className="flex items-center gap-2">
                <SocialLink href="#" icon={TwitterIcon} label="Twitter" />
                <SocialLink href="#" icon={LinkedinIcon} label="LinkedIn" />
                <SocialLink href="#" icon={GitlabIcon} label="GitHub" />
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.form className="space-y-4" variants={itemVariants}>
          <motion.div className="space-y-2" variants={itemVariants}>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </motion.div>
          <motion.div className="space-y-2" variants={itemVariants}>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              className="min-h-[150px]"
              required
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactUs;
