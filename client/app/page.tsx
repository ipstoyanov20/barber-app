import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/placeholder-hero.jpg" // Replace with the actual hero image URL
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="absolute inset-0 z-0"
        />
        
        {/* Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <div className="relative z-10 text-center text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Discover Your Style
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Explore our new collection of exclusive products tailored just for you.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg md:text-xl px-8 py-3 rounded-full shadow-lg transition duration-200">
            Explore Collection
          </button>
        </div>
      </section>

      {/* Main Product Listing Section */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 px-2">
        {/* Example Product Items */}
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800"
          >
            <Image
              src={`/product-${index + 1}.jpg`} // Replace with actual product image URLs
              alt={`Product ${index + 1}`}
              width={300}
              height={300}
              className="rounded-lg mb-4 shadow-md"
            />
            <h2 className="text-xl font-semibold mb-2">Product Name</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">$49.99</p>
            <button className="bg-blue-600 text-white rounded-full px-6 py-2 hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </main>

      {/* Footer Section */}
      <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center text-sm p-4 border-t border-gray-200 dark:border-gray-700 w-full">
        <p className="text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Your Store. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="#"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </a>
          <a
            href="#"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
          <a
            href="#"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
