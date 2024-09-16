"use client";
import Head from "next/head";
import React from "react";
import Heading from "./heading";

// const imagesLeft = [
//   {
//     src:"./kisan.png",
//     alt: "Kisanlink App Image",
//   },
// ];

// const imagesRight = [
//   {
//     src: "./academy.png",
//     alt: "Academy App Image",
//   },
// ];

const Screenshot = () => {
  return (
    <div className="bg-[#E5E8E9] -mt-12" >
      <Heading value={"Technology"}></Heading>
      <div className="flex items-center justify-center large:h-[670px] small:-mb-[100px] small:h-[360px] ">
      <div className="w-full sm:w-2/3 aspect-video -mt-24">
        <img
          src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/kisanlink-web-motion-gif-1.gif"
          alt="Centered GIF"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
    </div>
//     <div className="overflow-hidden min-h-screen py-8 -mt-8  px-4 md:px-2 bg-[#E5E8E9] ">
//       <Head>
//         <title>Kisanlink & Academy Apps</title>
//         <meta name="description" content="Kisanlink & Academy Apps" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="max-w-8xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-2">
//         {/* Kisanlink App Section */}
//         <div className="w-full md:w-1/2 flex flex-col items-center">
//           <div className="text-center  ">
//             {/* <h1 className="text-lg lg:text-4xl font-bold text-brown-700 mb-4">
//               Kisanlink App
//             </h1> */}
//             <Heading value={"Kisanlink App"} ></Heading>
//             <div className="border-b-2 border-brown-700 large:w-100 small:w-96 mx-0 "></div>
//           </div>
//           <div className="flex justify-center items-center mt-4">
//             <img
//               src={imagesLeft[0].src}
//               alt={imagesLeft[0].alt}
//               className="w-100 h-100 object-contain" // Larger image size
//             />
//           </div>
//           <div className="large:mt-2 large:flex large:space-x-4 medium:mt-6 medium:flex lg:ml-0 medium:ml-0  medium:space-x-4 small:ml-16 small:grid-rows-none">
//             <DownloadButton
//               platform="App Store"
//               url="https://apps.apple.com/in/app/kisanlink/id1642947613"
             
              
//             />
//             <DownloadButton
//               platform="Google Play"
//               url="https://play.google.com/store/apps/details?id=com.kisanlink"
               
//             />
//           </div>
//         </div>

//         {/* Academy App Section */}
//         <div className="w-full md:w-1/2 flex flex-col items-center">
//           <div className="text-center ">
//             {/* <h1 className="text-lg lg:text-4xl font-bold text-brown-700 mb-4">
//               Academy App
//             </h1> */}
//             <Heading value={"Academy App"}></Heading>
//                 <div className="border-b-2 border-brown-700 large:w-100 small:w-96 mx-0 mb-4"></div>
//           </div>
//           <div className="flex justify-center items-center">
//             <img
//               src={imagesRight[0].src}
//               alt={imagesRight[0].alt}
//               className="w-100 h-100 object-contain" // Larger image size
//             />
//           </div>
//                     <div className="large:mt-2 medium:mt-6 medium:flex lg:ml-0 medium:ml-0 medium:space-x-4 large:flex large:space-x-4 small:ml-16 small:grid-rows-none">
//             <DownloadButton
//               platform="App Store"
//               url=""
//             />
//             <DownloadButton
//               platform="Google Play"
//               url="https://play.google.com/store/apps/details?id=com.meherprasadverdeneni.learners"
//             />
//           </div>
//         </div>
//       </main>
//     </div>
  );
};

// const DownloadButton = ({ platform, url }) => {
//   const logos = {
//     "App Store":
//       "M255.9 120.9l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5 9.8 5.6 13.1 18.1 7.5 27.9l-87.5 151.5h63.3c20.5 0 32 24.1 23.1 40.8H113.8c-11.3 0-20.4-9.1-20.4-20.4 0-11.3 9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5-9.8-5.6-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6zm168.9-61.7h53.1c11.3 0 20.4 9.1 20.4 20.4 0 11.3-9.1 20.4-20.4 20.4h-29.5l19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9-9.8 5.6-22.2 2.3-27.9-7.5-33.5-58.1-58.7-101.6-75.4-130.6-17.1-29.5-4.9-59.1 7.2-69.1 13.4 23 33.4 57.7 60.1 104zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z",
//     "Google Play":
//       "M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z",
//   };

//   return (
//     <a
//       href={url}
      
//       rel="noopener noreferrer"
//       className="flex items-center justify-center bg-[#F9F1E1] mt-4 text-green-800 mr-64 px-4 py-2 rounded-full shadow-lg hover:bg-[#fdba74] transition-all duration-300 ease-in-out"
//     >
//       {/* <img
//         src={logos[platform]}
//         alt={`${platform} Logo`}
//         className="w-6 h-6 mr-2"
//       /> */}
//       <svg width={22} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#166534" d={logos[platform]} /></svg>
      
//       <div className="pl-2">Download </div>
//     </a>
//   );
// };

export default Screenshot;
