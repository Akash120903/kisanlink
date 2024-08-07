import React from 'react';

const ProfileCard = ({ photo, name, position, experience, qualification, linkedInUrl }) => {
    return (
        <div className="lg:w-[600px] small:w-[500px] h-[330px] lg:flex border small:ml-16 lg:-ml-10 rounded-lg  lg:shadow-lg p-4">
            <div className="lg:flex lg:flex-col  items-center justify-center lg:w-1/3 lg:-mt-4 pt-3">
                <img
                    src={photo}
                    alt={`${name}'s profile`}
                    className="w-24 h-24 rounded-full mb-4"
                />
                <div className="mt-2  ">

                    <p className="text-gray-500 lg:text-center">{qualification}</p>
                </div>
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className='mt-2'>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                        alt="LinkedIn"
                        className="w-6 h-6  mt-2"
                    />
                </a>
            </div>
            <div className="lg:flex lg:flex-col ml-6 w-2/3 mt-5 pt-3">
                <h2 className="text-2xl font-bold">{name}</h2>
                <h3 className="text-xl text-gray-600 mt-2">{position}</h3>

                <div className="mt-4">

                    <ul className="list-disc list-inside text-gray-500">
                        {experience.map((exp, index) => (
                            <li key={index}>{exp}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;