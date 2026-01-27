export default function Services() {
  const services = [
    "Inverter Repair",
    "Stabilizer Repair",
    "Solar Installation",
    "Battery Replacement"
  ];

  return (
    <div className="p-8 bg-[#1e293b]">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>

      <div className="grid md:grid-cols-4 gap-6 text-center">
        {services.map((s) => (
          <div key={s} className="p-4 border border-gray-600 rounded">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}