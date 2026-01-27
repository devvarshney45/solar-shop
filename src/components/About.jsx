export default function About() {
  return (
    <div className="p-8 bg-[#1e293b]">
      <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>

      <div className="md:flex gap-6 items-center">
        <img src="/owner.jpg" className="w-48 rounded-full mx-auto" />

        <p className="text-gray-300">
          Varshney Solar is the best solar & inverter dealer in town. 
          Certified partner of multiple companies with award-winning service.
        </p>
      </div>
    </div>
  );
}