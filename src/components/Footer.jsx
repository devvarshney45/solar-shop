import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer data-aos="fade-up" className="bg-[#0b1220] text-[#cbd5e1] pt-14 pb-8">

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-sm">

        {/* About */}
        <div>
          <h2 className="text-lg font-semibold text-[#38bdf8] mb-4 tracking-wide">
            Varshney Solar
          </h2>
          <p className="leading-relaxed">
            Best Solar & Inverter dealer in town. Certified partner of multiple
            leading companies, delivering reliable solar energy solutions with
            award-winning service and customer satisfaction.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-[#38bdf8] mb-4 tracking-wide">
            Contact
          </h2>
          <p>PANKAJ ELECTRICALS, 
           <br /> Main Market</p>
          <p>Wazirganj, Uttar Pradesh</p>
          <p className="mt-2 text-[#f97316] font-medium">
            📞 +91 6397003690
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold text-[#38bdf8] mb-4 tracking-wide">
            Services
          </h2>
          <ul className="space-y-2">
            <li>Solar Installation</li>
            <li>Inverter Repair</li>
            <li>Stabilizer Repair</li>
            <li>Battery Replacement</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-[#38bdf8] mb-4 tracking-wide">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[#38bdf8]">Home</Link></li>
            <li><Link to="/products/Luminous" className="hover:text-[#38bdf8]">Products</Link></li>
            <li><Link to="/cart" className="hover:text-[#38bdf8]">Cart</Link></li>
            <li><Link to="/myorders" className="hover:text-[#38bdf8]">My Orders</Link></li>
            <li><Link to="/admin" className="hover:text-[#38bdf8]">Admin Panel</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Varshney Solar. All rights reserved.
      </div>

    </footer>
  );
}