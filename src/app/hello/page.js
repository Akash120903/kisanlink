"use client";
import React, { useState, useEffect } from "react";
import { LuDot } from "react-icons/lu";

const content = [
  {
    id: "farm-mechanization-service",
    title: "Farm Mechanization Service",
    description: (
      <>
        Farm mechanization services involve the utilization of innovative
        technologies like drones, which offer farmers an efficient method for
        applying agricultural products.
        <br />
        <br />
        <ol>
          <li className="flex flex-row">
            <LuDot />
            Cost-effective compared to traditional methods
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Time-saving and less labor-intensive
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Less harmful to health than traditional methods
          </li>
        </ol>
      </>
    ),
    imageSrc:
      "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/drone-2.png",
  },
  // {
  //   id: "soil-testing-service",
  //   title: "Soil Testing Service",
  //   description: (
  //     <>
  //       Understanding soil health is essential for a healthy yield. We make
  //       reliable soil testing services easily accessible by connecting farmers
  //       with nearby testing laboratories.
  //       <br />
  //       <br />
  //       <ol>
  //         <li className="flex flex-row">
  //           <LuDot />
  //           Soil sample collected by Kisansathi
  //         </li>
  //         <br />
  //         <li className="flex flex-row">
  //           <LuDot />
  //           Faster and digitized process
  //         </li>
  //         <br />
  //         <li className="flex flex-row">
  //           <LuDot />
  //           Reliable soil testing report
  //         </li>
  //         <br />
  //         <li className="flex flex-row">
  //           <LuDot />
  //           Reliable recommendations report
  //         </li>
  //       </ol>
  //     </>
  //   ),
  //   imageSrc:
  //     "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/soil.png",
  // },

  {
    id: "output-purchase-services",
    title: "Output Purchase Services",
    description: (
      <>
        We assist farmers in realizing better value through our trading
        platform, enabling them to access buyers in the market to bid on the
        yield.
        <br />
        <br />
        <ol>
          <li className="flex flex-row">
            <LuDot />
            Realize better price for the produce
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Encourages competition among buyers
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Easy process and clear payment terms
          </li>
        </ol>
      </>
    ),
    imageSrc: "./ops.png",
  },

  {
    id: "advisory-services",
    title: "Advisory Services",
    description: (
      <>
        We help farmers to enhance their crop quality and yield by providing
        reliable solutions offered by agronomists or other technical experts.
        <br />
        <br />
        <ol>
          <li className="flex flex-row">
            <LuDot />
            Quick resolution turnaround time
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Encourages competition among buyers
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Reliable solutions offered{" "}
          </li>
        </ol>
      </>
    ),
    imageSrc: "./advc.png",
  },
  {
    id: "government-subsidy-schemes",
    title: "Facilitation of Government Subsidy/Schemes",
    description: (
      <>
        We educate farmers about the latest government schemes & subsidies and
        help with the documentation process to avail these benefits.
        <br />
        <br />
        <ol>
          <li className="flex flex-row">
            <LuDot />
            Information about latest schemes/subsidies
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Hassle-free application process
          </li>
          <br />
          <li className="flex flex-row">
            <LuDot />
            Faster approvals
          </li>
        </ol>
      </>
    ),
    imageSrc:
      "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/subscidies.png",
  },
];

const StickyScrollRevealDemo = () => {
  const [activeSection, setActiveSection] = useState(
    "farm-mechanization-service"
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // useEffect to handle scroll and update activeSection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Adjust scroll position as needed
      const sections = document.querySelectorAll("section[data-id]");
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.getAttribute("data-id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle click and show content without scrolling
  const handleItemClick = (id) => {
    setActiveSection(id);
  };

  return (
    <div id="services" className="p-10">
      {/* Navbar */}

      {/* Main Content */}
      <div className="sticky top-0 w-full z-50 bg-white">
        {isMobile ? (
          <div className="relative bg-white">
            <button
              onClick={toggleDropdown}
              className="w-full px-4 py-2 text-left bg-[#e5deb9] text-brown-600 font-bold border border-gray-400 rounded"
            >
              {content.find((item) => item.id === activeSection)?.title ||
                "Menu"}
            </button>
            {isDropdownOpen && (
              <ul className="absolute w-full mt-1 bg-white border border-gray-400 rounded shadow-lg">
                {content.map((item) => (
                  <li key={item.id} className="cursor-pointer">
                    <a
                      className={`block px-4 py-2 ${
                        activeSection === item.id
                          ? "bg-[#e5deb9] text-brown-600 font-bold"
                          : "text-brown-600 hover:bg-[#e5deb9]"
                      }`}
                      onClick={() => {
                        handleItemClick(item.id);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <ul className="flex justify-center space-x-6 py-4">
            {content.map((item) => (
              <li id={item.id} key={item.id} className="cursor-pointer">
                <a
                  className={`block px-4 py-2 rounded transition-colors duration-200 ${
                    activeSection === item.id
                      ? "bg-[#e5deb9] text-brown-600 font-bold border border-gray-400"
                      : "text-brown-600 hover:bg-[#e5deb9] border border-transparent"
                  }`}
                  onClick={() => handleItemClick(item.id)}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-full  bg-white mt-12 content-center justify-center">
        {content.map((item) => (
          <section
            key={item.id}
            id={item.id}
            data-id={item.id}
            className=" lg:flex"
            style={{ display: activeSection === item.id ? "flex" : "none" }}
          >
            <div className="object-center items-center justify-center lg:flex lg:flex-row lg:ml-48">
              <div className="lg:w-2/3">
                <h3 className="text-xl font-semibold mb-2 text-brown-700">
                  {item.title}
                </h3>
                <div className="text-gray-700 mb-4">{item.description}</div>
              </div>
              <div className="lg:w-1/3 lg:ml-16">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="h-80 object-cover"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default StickyScrollRevealDemo;
