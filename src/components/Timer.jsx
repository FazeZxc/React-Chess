import React, { useEffect, useState } from 'react';

export const Timer = ({ shouldTick, setShouldTick }) => {
    const TIME_INCREMENT = 10;
    const MAX_TIME_MINUTE = 15;
    const [timer, setTimer] = useState({
        seconds: 0,
        maxTimeInMinutes: MAX_TIME_MINUTE,
        minutes: MAX_TIME_MINUTE
    });
    const [counter, setCounter] = useState(0);

    const clickHandler = () => {
        if (shouldTick == null) {
            setShouldTick(true);
            setCounter(prevCounter => prevCounter + 1);
        } else {
            setShouldTick(prevTick => !prevTick);
            setCounter(prevCounter => prevCounter - 10);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (shouldTick) {
                setCounter(prevCounter => prevCounter + 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [shouldTick]);

    useEffect(() => {
        if (counter < 0) {
            setCounter(prev => 60 - Math.abs(prev));
            setTimer(({ seconds, minutes }) => ({
                seconds: seconds,
                minutes: minutes + 1
            }));
        } else if (counter === 60) {
            setCounter(0);
        }
    }, [counter]);

    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex items-center hover:bg-gray-600 bg-gray-800 text-white rounded-lg justify-center p-4 sm:h-24 md:h-32 lg:h-24">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
                    {timer.minutes}:{counter === 0 ? "00" : counter > 50 ? `0${Math.abs(60 - counter)}` : Math.abs(60 - counter)}
                </div>
            </div>
        </div>
    );
};
