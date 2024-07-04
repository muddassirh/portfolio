import React, { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';

function CounterUp({ count, time }) {
    const [counterOn, setCounterOn] = useState(false);

    const handleEnter = () => {
        setCounterOn(true);
    };

    const handleExit = () => {
        setCounterOn(false);
    };

    return (
        <>
            <ScrollTrigger
                onEnter={handleEnter}
                onExit={handleExit}
                component="span"
            >
                <CountUp end={count} duration={time} redraw={true}>
                    {({ countUpRef }) => (
                        <span ref={countUpRef}></span>
                    )}
                </CountUp>
            </ScrollTrigger>
        </>
    );
}

export default CounterUp;
