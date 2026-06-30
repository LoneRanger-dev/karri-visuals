"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Send } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { NeoInput, NeoTextarea } from "@/components/ui/NeoInput";
import ClayButton from "@/components/ui/ClayButton";
import LightSweep from "@/components/three/LightSweep";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Tell us a bit more (min 10 characters)"),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  "Ad Making & Advertising",
  "Social Impact & Awareness Videos",
  "Digital Marketing & Online Promotions",
  "Celebrity Launch & Inauguration Services",
  "Documentary Films & Campaigning Videos",
  "Event Planning & Coordination",
  "Professional Photo Shoots",
  "Dream & Fantasy Visualization Videos",
  "Strategic Promotions",
  "Film Production & Distribution",
  "Music Videos",
  "Digital Content for Platforms",
  "Other / Multiple Services",
];

const socials = [
  { href: "https://facebook.com/karrivisuals", label: "Facebook", Icon: FacebookIcon },
  { href: "https://www.instagram.com/karribalaji2", label: "Instagram", Icon: InstagramIcon },
  { href: "https://youtube.com/@karrivisuals", label: "YouTube", Icon: YoutubeIcon },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    // TODO: Wire up to a real form endpoint (e.g. Resend, Formspree, or a Next.js API route)
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form submitted:", data);
    reset();
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="section-pad relative bg-navy"
      aria-label="Contact Karri Visuals"
    >
      <LightSweep className="absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            className="text-gold/80 text-xs tracking-[0.3em] uppercase mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
          >
            Get In Touch
          </motion.p>
          <motion.h2
            className="font-heading font-light text-4xl sm:text-5xl text-cream"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Start Your Project
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form — wider col */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {isSubmitSuccessful ? (
              <div className="neo rounded-2xl p-10 text-center">
                <div className="w-16 h-16 mx-auto rounded-full gradient-gold clay flex items-center justify-center mb-4">
                  <Send size={24} className="text-navy-deep" />
                </div>
                <h3 className="font-heading text-2xl text-cream mb-2">Message Sent!</h3>
                <p className="text-cream/60">
                  Thank you! We&apos;ll be in touch within 24 hours to discuss your project.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
                aria-label="Contact form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <NeoInput
                    label="Your Name"
                    type="text"
                    placeholder="Arjun Sharma"
                    autoComplete="name"
                    error={errors.name?.message}
                    {...register("name")}
                  />
                  <NeoInput
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    error={errors.email?.message}
                    {...register("email")}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <NeoInput
                    label="Phone (optional)"
                    type="tel"
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    {...register("phone")}
                  />

                  {/* Service select — neumorphic */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="service"
                      className="text-cream/70 text-sm font-medium pl-1"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      className={`
                        w-full bg-navy text-cream rounded-xl px-4 py-3.5 text-sm
                        border border-transparent neo-inset
                        focus:outline-none focus:border-gold/50
                        transition-all duration-200
                        ${errors.service ? "border-red-500/70" : ""}
                      `}
                      {...register("service")}
                    >
                      <option value="" className="bg-navy">Select a service…</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s} className="bg-navy">{s}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <p role="alert" className="text-red-400 text-xs pl-1">
                        {errors.service.message}
                      </p>
                    )}
                  </div>
                </div>

                <NeoTextarea
                  label="Tell Us About Your Project"
                  placeholder="Share your vision, goals, timeline, and any key details…"
                  rows={5}
                  error={errors.message?.message}
                  {...register("message")}
                />

                <ClayButton
                  type="submit"
                  variant="gold"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full justify-center"
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                  {!isSubmitting && <Send size={16} />}
                </ClayButton>
              </form>
            )}
          </motion.div>

          {/* Info — right col */}
          <motion.aside
            className="lg:col-span-2 flex flex-col gap-8"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            aria-label="Contact information"
          >
            {/* Address */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="text-gold font-semibold text-sm uppercase tracking-widest">
                Visit Us
              </h3>
              <address className="not-italic flex gap-3 text-cream/60 text-sm leading-relaxed">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>
                  Flat No 302, Virat Niwas,<br />
                  Road No 5i, Panchavati Colony,<br />
                  Manikonda, Hyderabad – 500089
                </span>
              </address>

              <div className="w-full h-72 sm:h-56 rounded-xl overflow-hidden border border-white/5">
                <iframe
                  src="https://www.google.com/maps?q=17.4101284,78.3823784&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  title="Karri Visuals location — Virat Niwas, Manikonda, Hyderabad"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="glass rounded-2xl p-6 space-y-3">
              <h3 className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">
                Call Us
              </h3>
              <a
                href="tel:+914035814983"
                className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors text-sm"
              >
                <Phone size={16} className="text-gold" />
                40 3581 4983
              </a>
              <a
                href="tel:+919849814249"
                className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors text-sm"
              >
                <Phone size={16} className="text-gold" />
                9849814249
              </a>
            </div>

            {/* Socials */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Karri Visuals on ${label}`}
                    className="flex-1 py-3 glass rounded-xl flex flex-col items-center gap-1 text-cream/60 hover:text-gold hover:border-gold/30 transition-all text-xs"
                  >
                    <Icon size={20} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      <LightSweep className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
