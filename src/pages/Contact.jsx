import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';
import SectionReveal from '../components/SectionReveal.jsx';
import GlowBackground from '../components/GlowBackground.jsx';

const INFO = [
  { icon: MapPin, label: 'Office', value: 'Karachi, Pakistan' },
  { icon: Phone, label: 'Phone', value: '+92 326 3321658' },
  { icon: Mail, label: 'Email', value: 'reveloxenith@gmail.com' },
];

// Contact page: split layout — info on the left, glass contact form
// on the right — per the brief's Contact page spec.
function Contact() {
  return (
    <div className="relative overflow-hidden pt-40 pb-24">
      <GlowBackground />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Let's <span className="text-gradient">Talk</span>
          </h1>
          <p className="mt-4 text-white/60">
            Tell us about your project and we'll get back to you within one business day.
          </p>
        </SectionReveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left: contact information */}
          <SectionReveal>
            <h2 className="text-xl font-semibold text-white">Contact Information</h2>
            <p className="mt-2 text-white/55">
              Prefer to reach out directly? Here's how to find us.
            </p>

            <div className="mt-8 space-y-6">
              {INFO.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rx-blue/30 to-rx-cyan/20">
                    <item.icon size={18} className="text-rx-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-white/45">{item.label}</p>
                    <p className="font-medium text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Right: form */}
          <SectionReveal delay={0.1}>
            <ContactForm />
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}

export default Contact;
