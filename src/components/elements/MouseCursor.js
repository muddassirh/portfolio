import React, { useEffect } from 'react';


const MouseCursor = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const rippleContainer = document.querySelector('.ripple-container');
            const ripple = document.createElement('div');
            ripple.className = 'ripple';

            // Randomly select an element type
            const elements = ['fire'];
            const randomElement = elements[Math.floor(Math.random() * elements.length)];
            ripple.classList.add(randomElement);

            ripple.style.left = `${e.clientX - 15}px`; // Center the ripple
            ripple.style.top = `${e.clientY - 15}px`; // Center the ripple

            rippleContainer.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 1000); // Match this with the animation duration
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup function
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div className="ripple-container"></div>;
};

export default MouseCursor;
