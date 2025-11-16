import ExpandableText from "../../components/ExpandableText";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              About <span className="text-rose-400">Wardity</span>
            </h1>
            <p className="mt-4">
              Fresh flowers, honest pricing, and a delightful gifting experience
              — crafted for people, not just carts.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-rose-900 via-pink-800 to-rose-900 text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Happy Customers", value: "25K+" },
            { label: "Bouquets & Gifts", value: "1.2K+" },
            { label: "Cities Delivered", value: "40+" },
            { label: "Support", value: "24/7" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-rose-300">
                {s.value}
              </div>
              <div className="text-rose-100/80 mt-1 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story + Pillars */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Our Story</h2>
            <div className="mt-4 text-gray-700">
              <ExpandableText maxLines={5}>
                We started Wardity with a simple belief: flowers should make
                life brighter without the friction. No guesswork, no hidden fees
                — just fresh stems, thoughtful curation, and reliable delivery.
                From birthdays to “just because,” we hand-craft each bouquet
                with care and source responsibly to keep every petal at its
                best. Today, Wardity focuses on elevating the gifting experience
                end-to-end — from effortless selection and clear pricing to
                on-time delivery and human support. Every stem, every ribbon,
                every note — designed to help you say more with flowers.
              </ExpandableText>
            </div>
          </div>

          <div className="bg-rose-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-3">What we stand for</h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-3">
                <span className="h-2.5 w-2.5 mt-2 rounded-full bg-rose-400" />
                Freshness first — chilled storage, same-day prep where possible.
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2.5 w-2.5 mt-2 rounded-full bg-rose-400" />
                Hand-crafted bouquets — curated stems, balanced color palettes.
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2.5 w-2.5 mt-2 rounded-full bg-rose-400" />
                Transparent pricing — no surprises, clear delivery options.
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2.5 w-2.5 mt-2 rounded-full bg-rose-400" />
                On-time delivery & responsive support — we keep you in the loop.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold">Our Values</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Customer-first",
                desc: "From selection to doorstep, we obsess over the details so you don’t have to.",
              },
              {
                title: "Crafted with care",
                desc: "Each bouquet is arranged by hand with attention to color, texture, and seasonality.",
              },
              {
                title: "Bloom sustainably",
                desc: "We prioritize responsible sourcing and packaging with a lighter footprint.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold">{v.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
          <div className="mt-6 space-y-5">
            {[
              {
                q: "Where do you deliver?",
                a: "We currently deliver to most major cities and select surrounding areas. Coverage is expanding continuously.",
              },
              {
                q: "How do you keep flowers fresh?",
                a: "We source frequently, prep bouquets close to delivery time, and use care wraps with hydration packs for longer vase life.",
              },
              {
                q: "Can I add a gift note or special request?",
                a: "Yes! Add a note at checkout. For special requests (colors, stems, timing), reach us via the Contact page before ordering.",
              },
              {
                q: "What is your return or replacement policy?",
                a: "If something isn’t right on arrival, contact us within 24 hours with photos. We’ll help with a replacement or credit where appropriate.",
              },
            ].map((f) => (
              <div key={f.q} className="bg-white rounded-lg p-5 shadow-sm">
                <div className="font-medium">{f.q}</div>
                <ExpandableText className="mt-2" maxLines={3}>
                  {f.a}
                </ExpandableText>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">
              We’re here to help you say it with flowers.
            </h3>
            <p className="text-gray-300 mt-1">
              Questions? Ideas? Special occasion coming up? Let’s make it
              memorable.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-rose-400 text-black rounded-md font-medium hover:bg-rose-300 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
