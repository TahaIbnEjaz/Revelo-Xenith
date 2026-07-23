import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const FIELDS = [
  { name: 'name', label: 'Full Name', type: 'text', required: true },
  { name: 'email', label: 'Email Address', type: 'email', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
  { name: 'subject', label: 'Subject', type: 'text', required: true },
];

// Modern glass contact form. Submission is handled client-side only
// (no backend wired up) — shows a success state so the flow feels complete.
// Wire the `handleSubmit` fetch call up to a real endpoint when one exists.
function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with a real API call once a backend endpoint exists
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl glass-panel p-10 text-center">
        <CheckCircle2 size={48} className="text-rx-cyan" />
        <h3 className="mt-4 text-xl font-semibold text-white">Message sent</h3>
        <p className="mt-2 max-w-sm text-white/80">
          Thanks for reaching out — a member of our team will get back to you
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl glass-panel p-8 sm:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <div key={field.name} className={field.name === 'subject' ? 'sm:col-span-2' : ''}>
            <label htmlFor={field.name} className="mb-1.5 block text-sm text-white/60">
              {field.label}
              {field.required && <span className="text-rx-cyan"> *</span>}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              value={form[field.name]}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-rx-cyan/50"
              placeholder={`Enter your ${field.label.toLowerCase()}`}
            />
          </div>
        ))}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm text-white/60">
          Message <span className="text-rx-cyan">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-rx-cyan/50"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rx-blue to-rx-cyan px-6 py-3.5 text-sm font-semibold text-rx-navy-deep shadow-rx-glow transition-transform hover:scale-[1.02] sm:w-auto"
      >
        Send Message
        <Send size={16} className="transition-transform group-hover:translate-x-1" />
      </button>
    </motion.form>
  );
}

export default ContactForm;
