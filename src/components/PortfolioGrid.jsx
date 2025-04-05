import Image from "next/image";
import Link from "next/link";

const images = [
  "/w1.png",
  "/w2.png",
  "/w3.png",
  "/w4.png",
  "/w5.png",
  "/w6.png",
];

export default function PortfolioGrid() {
  return (
    <div className="flex flex-col items-center px-4 py-10">
      <h2 className="text-5xl py-10 font-semibold mb-6 text-center">Explore our latest work</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full mb-6">
        {images.map((src, index) => (
          <div key={index} className="shadow-lg rounded-[18px] overflow-hidden">
            <Image 
              src={src} 
              alt={`Project ${index + 1}`} 
              width={424} 
              height={530} 
              className="w-full h-110 object-fit"
            />
          </div>
        ))}
      </div>

      <Link 
        href="/portfolio" 
        className="mt-[35px] px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg inline-block"
      >
        View More Work
      </Link>
    </div>
  );
}
