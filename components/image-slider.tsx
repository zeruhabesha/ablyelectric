"use client";

import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
    images: string[];
    interval?: number;
    showButtons?: boolean;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 3000, showButtons = false }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images, interval]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative h-full">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                style={{ width: '100%', height: 'auto' }}
            />
            {showButtons && (
                <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between items-center">
                    <button
                        onClick={goToPrevious}
                        className="bg-black text-white p-2 rounded-full focus:outline-none"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={goToNext}
                        className="bg-black text-white p-2 rounded-full focus:outline-none"
                    >
                        &gt;
                    </button>
                </div>
            )}
        </div>
    );
};

export default ImageSlider;