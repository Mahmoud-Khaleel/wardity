import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      icon: <Mail size={28} className="text-pink-400" />,
      title: "Email",
      value: "hello@wardity.com",
      desc: "We’re always here to help you with your floral needs or special orders.",
    },
    {
      icon: <Phone size={28} className="text-pink-400" />,
      title: "Phone",
      value: "+20 109 969 1539",
      desc: "Call us daily from 9 AM to 9 PM for inquiries or bouquet requests.",
    },
    {
      icon: <MapPin size={28} className="text-pink-400" />,
      title: "Address",
      value: "Alexandria, Egypt",
      desc: "Visit our floral studio and discover the beauty of fresh blooms.",
    },
    {
      icon: <Clock size={28} className="text-pink-400" />,
      title: "Working Hours",
      value: "Daily: 9 AM – 9 PM",
      desc: "We deliver flowers 7 days a week, including weekends and holidays.",
    },
  ];

  return (
    <div className="font-poppins">
      {/* Header Section */}
      <section className="flex items-center justify-center min-h-[60vh] text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900">
            Contact <span className="text-pink-400">Wardity</span>
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            Have a question, a special request, or want to collaborate? We’d
            love to hear from you — let’s make every moment bloom beautifully.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-gradient-to-r from-rose-900 via-rose-800 to-rose-900 text-white py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((card) => (
            <div
              key={card.title}
              className="bg-rose-950/60 p-6 rounded-2xl shadow-md border border-rose-800 hover:border-pink-400 transition"
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h3 className="text-lg font-semibold text-pink-400 text-center">
                {card.title}
              </h3>
              <p className="text-center text-gray-100 font-medium mt-1">
                {card.value}
              </p>
              <p className="text-gray-300 text-sm mt-2 text-center leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white text-gray-900 py-14 text-center">
        <h2 className="text-2xl font-semibold">Visit Our Flower Studio</h2>
        <p className="text-gray-600 mt-2">
          Drop by and explore our hand-crafted bouquets and floral arrangements
          in person.
        </p>
        <div className="mt-8">
          <iframe
            title="Wardity studio"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110497.57519865367!2d29.91873994777489!3d31.20009236664077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3c3f2ef1e17%3A0x5cbb44bfe3da5c22!2sAlexandria%2C%20Egypt!5e0!3m2!1sen!2seg!4v1671012345678"
            className="w-full max-w-4xl h-80 mx-auto rounded-lg border border-rose-300 shadow-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
