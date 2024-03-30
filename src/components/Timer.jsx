import React, { useEffect, useState } from 'react'

export const Timer = ({ shouldTick, setShouldTick }) => {
    const TIME_INCREMENT = 10
    const MAX_TIME_MINUTE = 15
    const [timer, setTimer] = useState({
        seconds: 0,
        maxTimeInMinutes: MAX_TIME_MINUTE,
        minutes: MAX_TIME_MINUTE
    })
    const [counter, setCounter] = useState(0)
    const clickHandler = () => {
        if (shouldTick == null) {
            setShouldTick(true)
            setCounter(prevCounter => prevCounter + 1)
        }
        if (shouldTick == true) {
            setShouldTick(false)
        } else {
            setShouldTick(true)
            setCounter(prevCounter => prevCounter - 10)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (shouldTick) {
                setCounter(prevCounter => {
                    return prevCounter + 1
                }
                )
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [shouldTick])


    useEffect(() => {
        if (counter < 0) {
            setCounter(prev => (60 - Math.abs(prev)))
            setTimer(({ seconds, minutes }) => {
                return {
                    seconds: seconds,
                    minutes: minutes + 1
                }
            })
        } else if (counter == 60) {
            setCounter(0)
        }
    }, [counter])

    return (<>
        <div>{timer.minutes}:{counter == 0 ? "00" : counter > 50 ? `0${Math.abs(60 - counter)}` : Math.abs(60 - counter)}</div>
    </>)

}
