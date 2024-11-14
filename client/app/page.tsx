import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/barber-shop-hero.jpg" // Replace with an actual barber shop hero image URL
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="absolute inset-0 z-0"
        />
        
        {/* Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <div className="relative z-10 text-center text-white max-w-xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Look Your Best, Feel Your Best
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Traditional craftsmanship meets modern style. Experience the finest cuts and grooming.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold text-lg md:text-xl px-8 py-3 rounded-full shadow-lg transition duration-200">
            Book an Appointment
          </button>
        </div>
      </section>

      {/* Service Listing Section */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-4 lg:px-8 py-8">
        {/* Example Services */}
        {[
          { name: "Classic Haircut", price: "$30", img: "/service-1.jpg" },
          { name: "Beard Trim", price: "$15", img: "/service-2.jpg" },
          { name: "Shave", price: "$25", img: "/service-3.jpg" },
          { name: "Deluxe Package", price: "$60", img: "/service-4.jpg" },
          { name: "Kids' Haircut", price: "$20", img: "/service-5.jpg" },
          { name: "Grooming Package", price: "$40", img: "/service-6.jpg" },
        ].map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800"
          >
            <Image
              src={service.img} // Replace with actual service image URLs
              alt={service.name}
              width={300}
              height={300}
              className="rounded-lg mb-4 shadow-md"
            />
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{service.price}</p>
            <button className="bg-red-500 text-white rounded-full px-6 py-2 hover:bg-red-600 transition-colors">
              Book Now
            </button>
          </div>
        ))}
      </main>

      {/* Footer Section */}
      <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center text-sm p-4 border-t border-gray-200 dark:border-gray-700 w-full bg-gray-100 dark:bg-gray-800">
        <p className="text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Barber Shop. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="hover:text-red-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:text-red-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-red-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
