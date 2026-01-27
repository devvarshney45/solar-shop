import { Link } from "react-router-dom";

export default function CompanySection() {
  const companies = ["Luminous","Microtek","Livguard","Eastman"];

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Brands</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {companies.map((c) => (
          <div key={c} className="bg-[#1e293b] p-6 rounded">
            <h3 className="text-xl mb-4">{c}</h3>
            <Link to={`/products/${c}`}>
              <button className="bg-[#3b82f6] px-4 py-2 rounded">
                View Products
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}