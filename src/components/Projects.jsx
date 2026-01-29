export default function Projects() {
  const imgs = ["ll.PNG","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH99R-yCaaxw8NJILSb5nknmKs-HMyd57C9g&s","https://www.loomsolar.com/cdn/shop/articles/2_74ca57e2-5e1d-4fe6-9dae-1cb4aad94e98.jpg?v=1622191491"];

  return (
    <div className="p-8" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-6">Our Installations</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {imgs.map((img,i)=>(
          <img key={i} src={img} className="rounded w-full h-64 object-cover" />
        ))}
      </div>
    </div>
  );
}