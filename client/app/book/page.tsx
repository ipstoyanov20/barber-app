import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useState } from "react";

function Book() {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleToggle = (index: any) => {
    const allCheckboxes:any = document.querySelectorAll("input[type='checkbox']");

    // Uncheck all checkboxes except the current one
    allCheckboxes.forEach((checkbox:any, i:any) => {
      checkbox.checked = i === index ? !checkbox.checked : false;
    });

    // Check if any checkbox is now checked and update the button state
    const anyChecked = Array.from(allCheckboxes).some((checkbox:any) => checkbox.checked);
    setIsDisabled(!anyChecked);
  };

  const services = [
    {
      title: "Men's Haircut and Washing",
      duration: "60 min",
      description: "Haircut, washing with energizing shampoo and conditioner, application of styling products.",
      price: "45 BGN"
    },
    {
      title: "Men's Haircut and Short Beard Styling",
      duration: "60 min",
      description: "Haircut, styling of a short beard, washing with energizing shampoo and conditioner, application of moisturizing products.",
      price: "65 BGN"
    },
    {
      title: "Men's Haircut and Long Beard Styling",
      duration: "60 min",
      description: "Haircut, styling of a long beard, washing with energizing shampoo and conditioner, application of moisturizing products.",
      price: "70 BGN"
    },
    {
      title: "Men's Haircut and Royal Shaving",
      duration: "60 min",
      description: "Haircut, washing with energizing shampoo and conditioner, wet shaving with professional products.",
      price: "80 BGN"
    },
    {
      title: "Buzz Cut",
      duration: "30 min",
      description: "Clippers with a single guard.",
      price: "35 BGN"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="w-screen relative h-screen grid place-items-center">
        <h1 className="absolute z-20 left-[10%] top-[15%] font-cabinet font-bold text-bordo text-7xl">
          Services<span className="text-black">\</span>
        </h1>
        <section className="w-[80%] overflow-auto relative h-[50%] shadow-xl bg-white border-bordo border-4 rounded-xl">
          <div className="py-5 px-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-item border-b border-red-600 relative pb-4 mb-4 last:border-none last:mb-0 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <input
                  id={`checkbox-${index}`}
                  type="checkbox"
                  className="hidden" // Hide native checkbox
                />
                <label
                  htmlFor={`checkbox-${index}`}
                  className="custom-checkbox absolute right-5"
                ></label>
                <h2 className="font-cabinet font-bold mb-3 text-2xl text-gray-800">
                  {service.title}
                </h2>
                <p className="font-cabinet text-xl text-gray-600">
                  <strong>Duration:</strong> {service.duration}
                </p>
                <p className="font-cabinet text-xl text-gray-600">
                  <strong>Description:</strong> {service.description}
                </p>
                <p className="font-cabinet text-xl text-gray-600">
                  <strong>Price:</strong> {service.price}
                </p>
              </div>
            ))}
          </div>
        </section>
        <button
          disabled={isDisabled}
          className={`font-cabinet text-2xl font-bold px-5 py-3 rounded-xl absolute top-[80%] left-[85.5%] 
    ${
      isDisabled
        ? "bg-gray-400 text-gray-700 cursor-not-allowed"
        : "bg-bordo text-white cursor-pointer"
    }`}
        >
          Next
        </button>
      </main>
      <Footer />
    </>
  );
}

export default Book;
