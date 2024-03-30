import React, { useState } from 'react'

export const PopUpStartWithWhichPiece = ({ firstMove, setFirstMove }) => {
    const [clickedState, setClickedState] = useState(true)
    const optionsForFirstMove = [{
        name: "white",
    }, {
        name: "black"
    }]

    const clickHandler = (event) => {
        console.log(event);
        const selectedFirstMove = event.target.value
        setFirstMove(selectedFirstMove)
    }

    const switchPopUpOnOff = () => [
        setClickedState(false)
    ]

    return (
        <>
            {clickedState ?
                <>

                    <label htmlFor='firstmove'>
                        First Move
                    </label>
                    <select name='firstMove' id='firstmove' onChange={clickHandler}>
                        {optionsForFirstMove.map((options, index) => <option key={index} value={options.name} id={options.name} onSelect={clickHandler}>{options.name}</option>)}
                    </select>
                    <button onClick={switchPopUpOnOff}>Play</button>
                </> : null
            }
        </>
    )
}
