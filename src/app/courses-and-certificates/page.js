"use client";
import React,{useState} from "react";
import Heading from "../components/heading";
import Background from "../../utils/background";
import { FaYoutube } from "react-icons/fa6";
import Link from "next/link";

const ast = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filtered links based on selected category
  const filteredLinks = selectedCategory === "All" 
    ? YouTubeLinks 
    : YouTubeLinks.filter(link => link.category === selectedCategory);



  return (
    <>
      <Background title={"Agriculture Skill Training"}></Background>
      <div className="-mt-10">
        <Heading value={"Agriculture Skill Training"}></Heading>
      </div>

      <div>
        <p className="text-center -mt-4 mb-20 ml-40 mr-40">
          We aim to empower farmers, rural entrepreneurs, university students,
          and Farmers Producer Organizations (FPOs) with the knowledge and
          skills they need to thrive in the agricultural sector.
        </p>
      </div>
      <div className="-mt-10">
        <Heading
          value={"Agri Skill Training for University Students"}
        ></Heading>
      </div>

      <div>
        <p className="text-center -mt-4 mb-20 ml-40 mr-40">
          Kisanlink is committed to nurturing the next generation of
          agricultural professionals. We offer specialized agri skill training
          programs for university students, providing them with
        </p>
      </div>
      <div className="flex flex-row items-center justify-center content-center text-center">
        <div className="w-1/3">
          <img
            className="justify-center items-center pl-28 contents-center h-36 -mb-16"
            src="https://www.kisanlink.in/wp-content/uploads/skill_dev-removebg-preview.png"
          ></img>
          <Heading value={"Industry-Relevant Skills"}></Heading>
          <p>
            Courses designed to equip students with the latest skills and
            techniques needed in today’s agricultural landscape.
          </p>
        </div>
        <div className="w-1/3">
          <img
            className=" pl-24 h-36 -mb-16"
            src="https://www.kisanlink.in/wp-content/uploads/career_dev-removebg-preview.png"
          ></img>
          <Heading value={"Career Development"}></Heading>
          <p>
            Guidance and support to help students transition from academic
            learning to successful careers in agriculture.
          </p>
        </div>
      </div>
      <div className="-mt-10">
        <Heading value={"FPO Training Modules"}></Heading>
      </div>

      <div>
        <p className="text-center -mt-4 mb-20 ml-40 mr-40">
          We offer training to our partner FPOs on agricultural products and
          services utilized by farmers. These modules, available both online and
          offline, are conducted by industry experts to ensure comprehensive and
          practical learning.
        </p>
      </div>

      <div className="-mt-10">
        <Heading value={"Courses"}></Heading>
      </div>
      <div className="-mt-10">
        <Heading value={"Why do we offer courses?"}></Heading>
      </div>

      <div>
        <p className="text-center -mt-4 mb-20 ml-40 mr-40">
          To enable Kisansathis to communicate well about the products and
          services offered by our collaborators and train them to become experts
          in fields of their interest to further their careers.
        </p>
      </div>
      <div className="bg-white ">
      <div className="w-full top-20 right-4 z-10">
  <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-md  p-4 flex items-center justify-center">
    <p className="text-gray-600 text-sm mb-1 mr-2">Filter by category:</p>
    <button
      onClick={() => handleCategoryClick("All")}
      className={`mr-2 px-4 py-2 rounded-md ${
        selectedCategory === "All"
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-800"
      }`}
    >
      All
    </button>
    <button
      onClick={() => handleCategoryClick("English")}
      className={`mr-2 px-4 py-2 rounded-md ${
        selectedCategory === "English"
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-800"
      }`}
    >
      English
    </button>
    <button
      onClick={() => handleCategoryClick("Telugu")}
      className={`mr-2 px-4 py-2 rounded-md ${
        selectedCategory === "Telugu"
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-800"
      }`}
    >
      Telugu
    </button>
    {/* Add more buttons for other categories */}
  </div>
</div>


      {/* Render YouTube Links */}
      <div className=" bg-white grid grid-cols-2 gap-4 mt-10 mx-40">
        {filteredLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank">
            <img
              src={link.thumbnail}
              alt={link.alt}
              className=" bg-white w-full h-auto rounded-xl"
            />
          </a>
        ))}
      </div>

      {/* Bottom Image */}
      <div className="flex justify-center mt-12 pt-12">
        <img
          src="https://www.kisanlink.in/wp-content/uploads/2022/07/agriculture-ge5750e9ae_1280-removebg-e1657976152581.png"
          alt="Bottom Image"
          className="w-full h-48"
        />
      </div>
      </div>

      
         

      <div className="flex justify-center mt-20">
        <div className="-mt-24 pr-8">
          <Heading value={"Agriculture Videos"}></Heading>
        </div>
        {/* YouTube Button */}
        <a
          href="https://www.youtube.com/@kisanlink" // Replace with actual video URL
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brown-400 text-white w-240 h-10 text-sm flex items-center justify-center px-4 py-2  hover:bg-brown-700"
          style={{ backgroundColor: "#5C431C" }} // Custom brown color
        >
          <div className="pr-2 size-4 pt-0.4">
            <FaYoutube />
          </div>
          Kisanlink Youtube Channel{" "}
        </a>
      </div>
      <div className="-mt-12">
        <Heading value={"Advantages Of Certification"}></Heading>
      </div>
      <div className="bg-white flex">
        {/* Left Section */}

        <div className="flex-1 mt-10 mx-8">
          <div className="pt-4">
            <div className="flex flex-col gap-y-16">
              <div className="gap-6">
                {/* Box 1 */}
                <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
                  <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      className="w-16 h-16"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-brown-700 text-2xl font-bold">
                      Become Eligible to sell course-specific products/services
                      to farmers.
                    </p>
                  </div>
                </div>
                <br></br>
                {/* Box 2 */}
                <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
                  <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      className="w-16 h-16"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-brown-700 text-2xl font-bold">
                      Learn technical information about agri products/services
                      offered by companies.
                    </p>
                  </div>
                </div>
                <br></br>
                {/* Box 3 */}
                <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
                  <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      className="w-16 h-16"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-brown-700 text-2xl font-bold">
                      Build career and get job opportunities from collaborative
                      partners.
                    </p>
                  </div>
                </div>
                <br></br>
                {/* Box 4 */}
                <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md">
                  <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="white"
                      className="w-16 h-16"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-brown-700 text-2xl font-bold">
                      Earn higher income on referrals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1">
          <br></br>
          <br></br>
          <br></br>
          <img
            src="https://www.kisanlink.in/wp-content/uploads/kisanlink-certificate.png"
            className="w-full h-110"
            alt="Certification Image"
          />
        </div>
      </div>

      {/* Bottom Image */}
      <div className="flex justify-center mt-12 pt-12">
        <img
          src="https://www.kisanlink.in/wp-content/uploads/2022/07/agriculture-ge5750e9ae_1280-removebg-e1657976152581.png" // Replace with the actual URL of the bottom image
          alt="Bottom Image"
          className="w-full h-48 "
        />
      </div>
    </>
  );
};

export default ast;



const YouTubeLinks = [
  {
    category: "English",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPsZfEIuwprDf937Fe0f7T3S",
    alt: "Agriculture Image 1",
    thumbnail: "https://www.kisanlink.in/wp-content/uploads/introductory-english-thumbnail.jpg"
  },
  {
    category: "Telugu",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS",
    alt: "Agriculture image 2",
    thumbnail: "https://www.kisanlink.in/wp-content/uploads/introductory-telugu-thumbnail.jpg"
  },
  {
    category: "Hindi",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPuJQuSTkqEd1qOdho6x_MPH",
    alt: "Agriculture Image 3",
    thumbnail: "https://www.kisanlink.in/wp-content/uploads/introductory-hindi-thumbnail.jpg"
  },
  {
    category: "English",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPuZ1bcWlPwrx37erWB77Mn0",
    alt: "Agriculture Image 4",
    thumbnail: "https://www.kisanlink.in/wp-content/uploads/eng.jpg"
  },
  {
    category: "Telugu",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS",
    alt: "Agriculture Image 5",
    thumbnail: "https://www.kisanlink.in/wp-content/uploads/tel.jpg"
  },
  {
    category: "Hindi",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS",
    alt: "Agriculture Image 6",
    thumbnail: "https://www.kisanlink.in/wp-content/uploads/hin.jpg"
  },
  {
    category: "English",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPs9NBIGTN9mABTBpjsGFBJm",
    alt: "Agriculture Image 7",
    thumbnail: "https://www.kisanlink.in/wp-content/uploads/advisory-english-1.jpg"
  },
  {
    category: "Telugu",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS",
    alt: "Agriculture Image 8",
    thumbnail: "https://www.kisanlink.in/wp-content/uploads/introductory-telugu-thumbnail.jpg"
  },
  {
    category: "Hindi",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS",
    alt: "Agriculture Image 9",
    thumbnail: "https://www.kisanlink.in/wp-content/uploads/introductory-hindi-thumbnail.jpg"
  },
  {
    category: "English",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS",
    alt: "Agriculture Image 10",
    thumbnail: "https://www.kisanlink.in/wp-content/uploads/mustard-english-thumbnail.jpg"
  },
  {
    category: "Telugu",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS",
    alt: "Agriculture Image 11",
    thumbnail: "https://www.kisanlink.in/wp-content/uploads/mustard-telugu-1-thumbnail.jpg"
  },
  {
    category: "Telugu",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS",
    alt: "Agriculture Image 12",
    thumbnail: "https://www.kisanlink.in/wp-content/uploads/mustard-telugu-thumbnail.jpg"
  },
  {
    category: "English",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS",
    alt: "Agriculture Image 13",
    thumbnail: "https://www.kisanlink.in/wp-content/uploads/safflower-course-english.jpg"
  },
  {
    category: "Hindi",
    href: "https://www.youtube.com/playlist?list=PL3UDtQYVvuPuGG1VociCoELxx_zJWYWHS",
    alt: "Agriculture Image 14",
    thumbnail: "https://www.kisanlink.in/wp-content/uploads/safflower-course-hin.jpg"
  }
];


