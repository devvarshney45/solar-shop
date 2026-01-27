import { useParams } from "react-router-dom";

export default function Products() {
  const { company } = useParams();

  return (
    <div className="bg-[#0f172a] text-white min-h-screen p-8">
      <h1 className="text-3xl">Products of {company}</h1>
      <p>Products will come here later.</p>
    </div>
  );
}