export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-10 mt-10">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">

        {/* Shop Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            Varshney Solar
          </h2>
          <p>
            Best Solar & Inverter dealer in town.  
            Certified partner of multiple companies with award-winning service.
          </p>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            Contact
          </h2>
          <p>Varshney Solar, Main Market</p>
          <p>Your City, State</p>
          <p>📞 +91 XXXXXXXXXX</p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            Services
          </h2>
          <p>Solar Installation</p>
          <p>Inverter Repair</p>
          <p>Stabilizer Repair</p>
          <p>Battery Replacement</p>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Varshney Solar. All rights reserved.
      </div>

    </footer>
  );
}