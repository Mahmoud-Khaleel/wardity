import { ShoppingCart, Truck, ShieldCheck, Star } from "lucide-react";
import ProductCard from "../components/ProductCard";
import HeroCarousel from "../components/HeroCarousel";
import Carousel from "../components/Carousal";
import FeaturesSection from "../components/FeaturesSection";
import { useGetProductsQuery } from "../slices/productsSlice";
import ReviewsSlider from "../components/ReviewsSlider";

function HomePage() {
  const { data, error, isLoading } = useGetProductsQuery({
    page: 8,
    limit: 3,
  });

  return (
    <div className="font-sans text-gray-800">
      <HeroCarousel></HeroCarousel>

      <section className="py-20 px-8 mt-20 mb-10 bg-gradient-to-r from-rose-50 via-pink-50 to-rose-100 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-pink-600">
            <span className="text-rose-500">Wardity</span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Wardity is more than just a flower shop — it’s a story of love,
            color, and creativity. Founded with a passion for bringing nature’s
            beauty closer to people’s hearts, we craft elegant floral
            arrangements that make every occasion unforgettable.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            From weddings and anniversaries to simple “thinking of you” moments,
            each Wardity bouquet is thoughtfully designed to express emotions
            words can’t capture. We believe every flower tells a story — and we
            make sure yours blooms beautifully.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            With fresh blooms sourced daily and crafted by our passionate
            florists in Alexandria, Wardity continues to spread joy one bouquet
            at a time. Let us help you turn life’s moments into lasting
            memories.
          </p>
        </div>
      </section>

      <Carousel></Carousel>

      <FeaturesSection></FeaturesSection>

      <section
        className="py-16 px-8 h-80 flex justify-around items-center text-center mb-20"
        style={{ background: "#EFEFEF" }}
      >
        <div>
          <Truck className="mx-auto mb-2" />
          <p>Free Shipping</p>
        </div>
        <div>
          <ShieldCheck className="mx-auto mb-2" />
          <p>Secure Payment</p>
        </div>
        <div>
          <Star className="mx-auto mb-2" />
          <p>Best Quality</p>
        </div>
      </section>

      <ReviewsSlider></ReviewsSlider>
    </div>
  );
}

export default HomePage;
