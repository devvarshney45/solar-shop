export default function Services() {
  const services = [
    "Battery Sales",
    "Inverter Sales",
    "Solar Installation",
    "Maintenance & Repair"
  ];

  return (
    <div className="p-8 bg-[#1e293b]" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#36BDEF]">--Our Services--</h2>

      <div className="grid md:grid-cols-4 gap-6 text-center">
        {services.map((s) => (
          <div data-aos="fade-up" key={s} className="p-4 border border-gray-600 rounded text-[#31D4A9] font-bold">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}