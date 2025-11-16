import { Link } from "react-router-dom";
import BouquetImage from "../assets/flower1.jpg";
import ArrangementImage from "../assets/flower3.webp";
import GiftBoxImage from "../assets/flower2.jpg";

const features = [
  {
    id: 1,
    title: "FRESH BOUQUETS",
    text: "Discover our hand-crafted bouquets designed to express every emotion — love, gratitude, celebration, or comfort. Each bouquet is freshly arranged using premium blooms and thoughtful combinations that brighten any moment.",
    image: BouquetImage,
    reverse: false,
  },
  {
    id: 2,
    title: "ELEGANT ARRANGEMENTS",
    text: "From minimalist vases to grand floral displays, our arrangements are designed to bring nature’s beauty indoors. Perfect for home décor, offices, or gifting, every piece reflects care, color harmony, and timeless elegance.",
    image: ArrangementImage,
    reverse: true,
  },
  {
    id: 3,
    title: "GIFT BOXES & SURPRISES",
    text: "Make every occasion unforgettable with our curated gift boxes that combine flowers, candles, and personalized notes. Whether it’s a birthday, anniversary, or a ‘just because’ gesture, Wardity helps you say it beautifully.",
    image: GiftBoxImage,
    reverse: false,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`flex flex-col md:flex-row items-center gap-50 ${
              feature.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="flex-1">
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-lg shadow-md hover:shadow-xl transition duration-500 object-cover w-full h-[400px]"
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                {feature.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{feature.text}</p>
              <Link
                to="/products"
                className="hover:text-pink-400 inline-block border border-gray-700 text-gray-900 px-6 py-2 rounded-sm hover:bg-gray-900 hover:text-white transition duration-300"
              >
                View more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
