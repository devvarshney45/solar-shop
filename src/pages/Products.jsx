import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {

  const { company } = useParams();   // 👈 URL se brand

  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState(company || "All");

  const brands = ["All", "Luminous", "Microtek", "Livguard", "Eastman"];

  // URL change hone par brand update
  useEffect(() => {
    if (company) {
      setBrand(company);
    } else {
      setBrand("All");
    }
  }, [company]);

  // Filtering logic
  const filteredProducts = products.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchBrand = brand === "All" || item.brand === brand;
    return matchSearch && matchBrand;
  });

  return (
    <div className="bg-[#081426] min-h-screen text-white py-10">

      <h1 className="text-3xl font-bold text-center mb-8">
        Our Products
      </h1>

      {/* Search + Filter Bar */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 mb-8">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search product..."
          className="bg-[#0f1f33] px-4 py-2 rounded w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Brand Filter */}
        <select
          className="bg-[#0f1f33] px-4 py-2 rounded w-full md:w-1/4"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          {brands.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 grid 
                      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}

        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-gray-400">
            No products found
          </p>
        )}

      </div>
    </div>
  );
}