import React, { useState, useEffect } from 'react';
import '../style.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'https://images.unsplash.com/photo-1610989001873-03968eed0f08?q=80&w=2145&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://domani.shogakukan.co.jp/wp-content/uploads/2023/07/AdobeStock_610393920.jpeg',
        'https://th.bing.com/th/id/OIP.IhGijgoVTEs0_4rPuUXboQHaE8?rs=1&pid=ImgDetMain',
        'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202301/technology-in-the-workplace-sixteen_nine.png'
    ];

    const showImage = (index) => {
        const offset = -index * 100;
        return { transform: `translateX(${offset}%)` };
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 5000); // Cambia la imagen cada 5 segundos
        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [currentIndex]);

    return (
        <div className="carousel">
            <div className="carousel-container" style={showImage(currentIndex)}>
                {images.map((img, idx) => (
                    <img key={idx} src={img} alt={`Imagen ${idx + 1}`} />
                ))}
            </div>
            <button className="prev" onClick={handlePrev}>❮</button>
            <button className="next" onClick={handleNext}>❯</button>
        </div>
    );
};

export default Carousel;
