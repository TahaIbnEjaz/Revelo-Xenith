import { Star } from 'lucide-react';

// Single glass testimonial card shown by the auto-slider on the Home page.
function TestimonialCard({ testimonial }) {
  return (
    <div className="mx-auto max-w-2xl rounded-3xl glass-panel p-8 text-center sm:p-10">
      <div className="flex justify-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-rx-cyan text-rx-cyan" />
        ))}
      </div>
      <p className="mt-6 text-lg leading-relaxed text-white/80">
        “{testimonial.quote}”
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div className="text-left">
          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="text-xs text-white/80">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
