import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const { company } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("All");

const brands = ["All", "LUMINOUS", "MICROTEK", "LIVGUARD", "EASTMAN"];

  // 🔥 Fetch all products once
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log("Error fetching products:", err));
  }, []);

  // 🔗 Sync URL param with brand filter
  useEffect(() => {
    if (company) {
      setBrand(company);
    } else {
      setBrand("All");
    }
  }, [company]);

  // 🔁 When dropdown brand changes → update URL
  function handleBrandChange(e) {
    const selected = e.target.value;
    setBrand(selected);

    if (selected === "All") {
      navigate("/products");
    } else {
      navigate(`/products/${selected}`);
    }
  }

  // 🧠 Filtering
  const filteredProducts = products.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchBrand =
      brand === "All" || item.brand.toLowerCase() === brand.toLowerCase();

    return matchSearch && matchBrand;
  });

  return (
    <div className="bg-[#081426] min-h-screen text-white py-10">

      <h1 className="text-3xl font-bold text-center mb-8 text-[#36BDEF]">
        Our Products
      </h1>

      {/* 🔍 Search + Brand Filter */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 mb-8 justify-center">

        {/* Search */}
        <input
          type="text"
          placeholder="Search product..."
          className="bg-[#0f1f33] px-4 py-2 rounded w-full md:w-1/2 border border-gray-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Brand Filter */}
        <select
          className="bg-[#0f1f33] px-4 py-2 rounded w-full md:w-1/4 border border-gray-600"
          value={brand}
          onChange={handleBrandChange}
        >
          {brands.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

      </div>

      {/* 📦 Products Grid */}
      <div className="max-w-7xl mx-auto px-6 grid 
                      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard key={item._id} product={item} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}