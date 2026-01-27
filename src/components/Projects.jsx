export default function Projects() {
  const imgs = ["/p1.jpg","/p2.jpg","/p3.jpg"];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Installations</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {imgs.map((img,i)=>(
          <img key={i} src={img} className="rounded" />
        ))}
      </div>
    </div>
  );
}