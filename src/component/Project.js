import React from 'react';
import {useState} from 'react';

function Project () {
    const images = [
        "./images/bleachImage.png",
        "./images/rimuru.jpg",
        "./images/naruto.png",
        "./images/kirito.jpg",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const handleButtonClick = () => {
        setCurrentImage((prevIndex) =>(prevIndex + 1) % images.length);
    }

    return (
        <>
            <div className="image-container">
                <img  src={images[currentImage]} 
                alt = {`images ${currentImage + 1 }`}
                />
                <br/>
            </div>
            <div className="btn" >
                <button onClick ={handleButtonClick}>Change Image</button>
            </div>
        </>
    );
}

export default Project;