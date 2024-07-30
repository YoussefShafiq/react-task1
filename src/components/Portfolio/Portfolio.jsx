import React, { useState } from 'react';
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'

export default function Portfolio() {
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const images = [
        `${img1}`,
        `${img2}`,
        `${img3}`,
        `${img1}`,
        `${img2}`,
        `${img3}`

    ];

    const ImageClick = (image) => {
        setCurrentImage(image);
        setOverlayVisible(true);
    };

    const CloseOverlay = () => {
        setOverlayVisible(false);
        setCurrentImage('');
    };

    return (
        <>
            <div className="bg-gray-200 min-h-[calc(100vh-270px)]">
                <div className="container m-auto flex flex-col items-center">
                    <h1 className="uppercase text-orange-600 font-extrabold text-4xl mb-5 p-5 after relative">
                        Portfolio
                        <i className="fa-solid fa-star text-[20px] bg-gray-200 px-2 absolute text-orange-600 bottom-0 translate-y-1/4 w-11 text-center left-1/2 translate-x-[-50%]"></i>
                    </h1>
                    <div className="flex flex-wrap justify-around">
                        {images.map((image, index) => (
                            <div key={index} className="w-full md:w-1/3 p-5">
                                <div className="imgCont relative">
                                    <img src={image} alt="photo" />
                                    <div
                                        className="portfolioImg absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
                                        onClick={() => ImageClick(image)}
                                    >
                                        <i className="fa-solid fa-plus text-8xl text-sky-50"></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`fixed inset-0 bg-black bg-opacity-75 ${overlayVisible ? `flex` : `hidden`} items-center justify-center z-50`}>
                <div className="relative">
                    <button className="absolute top-2 right-2 text-white text-3xl" onClick={() => { CloseOverlay() }} >
                        <i className="fa-solid fa-xmark hover:text-red-600 duration-500"></i>
                    </button>
                    <img src={currentImage} alt="Enlarged" className="max-w-full max-h-full" />
                </div>
            </div>
        </>
    );
}
