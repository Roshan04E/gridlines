export default function Services() {
  const services = [
    {
      title: "Retained Search",
      desc: "Exclusive senior hiring partnerships",
      tags: ["C-Suite", "Board"],
    },
    {
      title: "Contingent Hiring",
      desc: "Pay on success model",
      tags: ["Mid-Senior"],
    },
    {
      title: "Success-Based",
      desc: "Zero upfront hiring",
      tags: ["Flexible"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Hiring Models Built for Excellence
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm
              hover:-translate-y-2 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{s.desc}</p>

              <div className="flex gap-2 flex-wrap">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
