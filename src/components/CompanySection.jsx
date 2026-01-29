import { Link } from "react-router-dom";

export default function CompanySection() {
  const companies = [
    "LUMINOUS",
    "MICROTEK",
    "LIVGUARD",
    "EASTMAN",
    "AMAZE",
    "LIVFAST",
    "APEX",
    "DURACHARGE"
  ];

  return (
    <div data-aos="fade-up" className="px-6 py-10 text-center">
      
      <h2 className="text-3xl font-bold mb-8 text-[#36BDEF]">
        -- Our Brands --
      </h2>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {companies.map((c) => (
          <div 
            key={c}
            className="bg-[#1e293b] p-6 rounded-xl border border-gray-700 hover:border-[#36BDEF] transition"
          >
            <h3 className="text-xl mb-4 text-[#31D4A9] font-semibold">
              {c}
            </h3>

            <Link to={`/products/${c}`}>
              <button className="bg-[#3b82f6] hover:bg-[#2563eb] px-4 py-2 rounded text-sm font-medium transition">
                View Products
              </button>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}