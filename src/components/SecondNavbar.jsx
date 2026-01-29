import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

export default function SecondNavbar() {
  const [open, setOpen] = useState(false);

  const companies = [
    "Luminous",
    "Microtek",
    "Livguard",
    "Livfast",
    "Eastman",
    "Amaze"
  ];

  return (
    <div data-aos="fade-up" className="w-full bg-gradient-to-r from-[#0b1220] via-[#111827] to-[#0b1220] border-t border-gray-800 text-[#30D4AE] font-medium">

      {/* ===== Desktop Navbar ===== */}
      <div className="hidden md:flex justify-evenly items-center px-6 py-3 text-[#30D4AE]">

        {companies.map((c) => (
          <Link
            key={c}
            to={"/products/" + c}
            className="
              px-5 py-2 rounded-full
              bg-[#111827]
              border border-gray-700
              hover:border-orange-400
              hover:text-orange-300
              hover:shadow-[0_0_15px_#f97316]
              transition-all duration-300
              text-sm tracking-wide
            "
          >
            {c}
          </Link>
        ))}

      </div>

      {/* ===== Mobile Navbar ===== */}
      <div className="md:hidden px-4 py-3 text-[#30D4AE]">

        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold tracking-wide text-[#31D4A9]">
            Browse Brands
          </span>

          <FiMenu
            size={26}
            className="cursor-pointer text-[#31D4A9]"
            onClick={() => setOpen(!open)}
          />
        </div>

        {open && (
          <div className="flex flex-col mt-3 gap-2 text-sm">

            {companies.map((c) => (
              <Link
s
                key={c}
                to={"/products/" + c}
                className="
                  px-4 py-2 rounded-full
                  bg-[#111827]
                  border border-gray-700
                  hover:border-orange-400
                  hover:text-orange-300
                  transition
                "
                onClick={() => setOpen(false)}
              >
                {c}
              </Link>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}