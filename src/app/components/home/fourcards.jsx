import React from 'react';
import Heading from './heading';


const FourCards = () => {
    return (
        <div className='bg-[#E5E8E9]  large:-mt-24 small:-mt-24 small:pt-20 small:-mb-[630px] large:-mb-0  large:pt-20'>
           <div className='small:-mb-28 large:-mb-8'>
            <Heading value={"Our Solutions To Farmers"} />
            </div> 
            <div className="flex justify-center items-center large:h-[690px] small:h-[1000px] ">
      <div className="w-full sm:w-2/3 aspect-video small:-mt-[500px] large:-mt-12 ">
        <iframe
                src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/0814.mp4"
          
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full shadow-lg rounded-lg"
        ></iframe>
      </div>
    </div>

           
            {/* <div className="large:flex medium:flex justify-between mt-8 small:grid-cols-4">
                <div className="relative large: h-1/3 medium:w-1/4 large:w-1/4 mx-2" style={{ backgroundColor: '#24A033' }}>
                    <div className=" overflow-hidden"style={{ backgroundColor: '#24A033' }} >
                        <div className="h-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/agrisetu.com_.png)' }}></div>
                        
                        <img src="./product.png" alt="Card 1" className="w-40 h-40 p-4" />
                        
                        <div className="p-4 relative" style={{ backgroundColor: '#24A033' }}>

                            <h2 className="text-white text-2xl font-bold mb-2 font-poppins">Products</h2>
                            <br />
                            <p className="text-white font-poppins medium:mt-8 large:mt-0">

                                We provide Agri Inputs and the latest equipment and machinery to farmers at their
                                doorstep, enabling them to
                                improve their yield.</p>
                            <br />
                            <br />
                            <br />
                            

                            
                        </div>
                    </div>
                    <a href="/page1" className="absolute bottom-4 right-4 bg-white text-green-500 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.293 4.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586L9.293 5.707a1 1 0 0 1 0-1.414z" />
                                </svg>
                            </a>
                </div>
                <div className="relative large:w-[390px] medium:w-1/4 mx-2" style={{ backgroundColor: '#24A033' }}>
                    <div className=" overflow-hidden" style={{ backgroundColor: '#24A033' }}>
                        <div className="h-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/agrisetu.com_.png)' }}></div>
                        <img src="./farm.png" alt="Card 1" className="w-40 h-40 p-4" />
                        <div className="p-4 relative" style={{ backgroundColor: '#24A033' }}>

                            <h2 className="text-white text-2xl font-bold mb-2 font-poppins">Farm Mechanization Service</h2>
                            <br />
                            <p className="text-white  font-poppins">
                                We facilitate farm
                                mechanization services such
                                as drone service etc.</p>
                            <br />
                            <br />
                            <br />
                            
                        </div>
                    </div>
                    <a href="/page1" className="absolute bottom-4 right-4 bg-white text-green-500 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.293 4.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586L9.293 5.707a1 1 0 0 1 0-1.414z" />
                                </svg>
                            </a>
                </div>
                <div className="relative medium:w-1/4 large:w-1/4 mx-2" style={{ backgroundColor: '#24A033' }}>
                    <div className=" overflow-hidden" style={{ backgroundColor: '#24A033' }}>
                        <div className="h-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/agrisetu.com_.png)' }}></div>
                        <img src="./output.png" alt="Card 1" className="w-40 h-40 p-4" />
                        <div className="p-4 relative" style={{ backgroundColor: '#24A033' }}>

                            <h2 className="text-white text-2xl font-bold mb-2 font-poppins">Output Purchase Service</h2>
                            <br />
                            <p className="text-white font-poppins">We assist farmers in realizing better value through
                                our trading platform.</p>
                            <br />
                            <br />
                            <br />
                            
                        </div>
                    </div>
                    <a href="/page1" className="absolute bottom-4 right-4 bg-white text-green-500 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.293 4.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586L9.293 5.707a1 1 0 0 1 0-1.414z" />
                                </svg>
                            </a>
                </div>
                <div className="relative medium:w-1/4 large:w-1/4 mx-2 " style={{ backgroundColor: '#24A033' }}>
                    <div className=" overflow-hidden" style={{ backgroundColor: '#24A033' }}>
                        <div className="h-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/agrisetu.com_.png)' }}></div>
                        <img src="./other.png" alt="Card 1" className="w-40 h-40 p-4" />
                        <div className="p-4 relative" style={{ backgroundColor: '#24A033' }}>

                            <h2 className="text-white text-2xl font-bold mb-2 font-poppins">Other Agri Related Services</h2>
                            <br />
                            <p className="text-white font-poppins">We also facilitate soil testing, advisory and government-
                                based services to farmers.</p>
                            <br />
                            <br />
                            <br />
                    

                            
                        </div> */}
                    {/* </div>
                    <a href="/page1" className="absolute bottom-4 right-4 bg-white text-green-500 rounded-full p-2 ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M9.293 4.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586L9.293 5.707a1 1 0 0 1 0-1.414z" />
                                </svg>
                            </a>
                </div>
            </div> */}
        </div>
    );
};

export default FourCards;
