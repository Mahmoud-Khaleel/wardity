import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Ahmed",
    title: "Bride-to-be",
    text: "Wardity made my wedding day magical. The bouquet and venue flowers were beyond perfect — fresh, fragrant, and full of life. Every detail showed care and artistry. I’ll never forget how beautiful it all looked.",
  },
  {
    id: 2,
    name: "Omar Khaled",
    title: "Corporate Client",
    text: "We’ve been ordering floral arrangements for our office for months, and they always arrive on time and beautifully designed. Wardity adds a touch of nature and positivity to our workspace every week.",
  },
  {
    id: 3,
    name: "Laila Mansour",
    title: "Event Planner",
    text: "I’ve worked with many florists, but Wardity stands out. Their creativity, color sense, and professionalism are unmatched. They understand how to capture emotions through flowers — every arrangement tells a story.",
  },
];

export default function ReviewsSlider() {
  const [current, setCurrent] = useState(0);

  const nextReview = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prevReview = () =>
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const interval = setInterval(nextReview, 6000);
    return () => clearInterval(interval);
  }, []);

  const { name, title, text } = reviews[current];

  return (
    <section className="py-16 relative bg-gradient-to-r from-rose-50 to-pink-100">
      <div className="mx-auto px-6 text-center relative">
        {/* Quote Icon */}
        <Quote className="w-10 h-10 text-pink-400 mx-auto mb-6" />

        {/* Review Text */}
        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed italic mb-6">
          “{text}”
        </p>

        {/* Author */}
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-500 text-sm">{title}</p>

        {/* Navigation Arrows */}
        <button
          onClick={prevReview}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-pink-200 p-2 rounded-full shadow-md transition"
        >
          <ChevronLeft className="w-5 h-5 text-pink-600" />
        </button>

        <button
          onClick={nextReview}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-pink-200 p-2 rounded-full shadow-md transition"
        >
          <ChevronRight className="w-5 h-5 text-pink-600" />
        </button>
      </div>
    </section>
  );
}
