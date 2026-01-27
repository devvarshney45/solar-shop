import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

export default function SecondNavbar() {
  const [open, setOpen] = useState(false);

  const companies = [
    "Luminous","Microtek","Livguard","Livfast",
    "Eastman","Phoenix","Amaze","Windsor"
  ];

  return (
    <div className="bg-[#0f172a] border-b border-gray-700">

      {/* Desktop */}
      <div className="hidden md:flex justify-center gap-8 py-3">
        {companies.map((c) => (
          <Link key={c} to={`/products/${c}`} className="hover:text-[#3b82f6]">
            {c}
          </Link>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden px-4 py-2">
        <FiMenu size={24} onClick={() => setOpen(!open)} />
        {open && (
          <div className="flex flex-col mt-2 gap-2">
            {companies.map((c) => (
              <Link key={c} to={`/products/${c}`}>
                {c}
              </Link>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}