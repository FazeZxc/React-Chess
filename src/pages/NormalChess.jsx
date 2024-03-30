
import { PopUpStartWithWhichPiece } from "../components/PopUpStartWithWhichPiece";
import { Board } from "../components/Board";
import { useState } from "react";
import { Timer } from "../components/Timer";

export function NormalChess() {
    const [firstMove, setFirstMove] = useState("white")
    const [playerTimerSwitch , setPlayerTimerSelect] = useState(true)

    const switchTimer=()=>{
        if(playerTimerSwitch == false){
            setPlayerTimerSelect(true)
        }else{
            setPlayerTimerSelect(false)
        }
    }
    const Players = [
        {
            name: "Abhinav",
            color: "white"
        },
        {
            name: "bot",
            color: "black"
        }
    ]

    return <>
        <PopUpStartWithWhichPiece firstMove={firstMove} setFirstMove={setFirstMove}></PopUpStartWithWhichPiece>
        <button onClick={switchTimer}>Change</button>
        <Timer shouldTick={playerTimerSwitch}/>
        <Timer shouldTick={!playerTimerSwitch}/>
        <Board switchTimer={switchTimer} firstMove={firstMove} />
    </>
}