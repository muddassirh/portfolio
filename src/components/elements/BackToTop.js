import React, { useEffect, useState } from "react";

const BackToTop = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100 && !hasScrolled) {
                setHasScrolled(true);
            } else if (window.scrollY <= 100 && hasScrolled) {
                setHasScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [hasScrolled]);

    return (
        <>
            {hasScrolled && (
                <a className="scroll-top scroll-to-target" href="#top" style={{ bottom: '30px' }}>
                    <i className="fas fa-angle-up"></i>
                </a>
            )}
        </>
    );
};

export default BackToTop;
