import { PopUpStartWithWhichPiece } from "../components/PopUpStartWithWhichPiece";
import { Board } from "../components/Board";
import { useState } from "react";
import { Timer } from "../components/Timer";
import { LoaderCirlce } from "../components/Loader";

export function NormalChess() {
    const [firstMove, setFirstMove] = useState("white");
    const [playerTimerSwitch, setPlayerTimerSelect] = useState(true);

    const switchTimer = () => {
        setPlayerTimerSelect((prev) => !prev);
    };

    const Players = [
        {
            name: "Abhinav",
            color: "white",
        },
        {
            name: "bot",
            color: "black",
        },
    ];

    return (
        <LoaderCirlce>
            <div className="flex flex-col justify-center items-center h-screen w-full border-red-200 border-4">
                <div className="w-full px-4 md:px-0 md:max-w-screen-lg lg:px-0 lg:py-0 lg:w-1/2 lg:h-half">
                    <div className="mt-2 border-4 border-gray-800">
                        <Board switchTimer={switchTimer} firstMove={firstMove} />
                    </div>
                    <div className="mt-2 md:flex md:space-x-8 md:justify-between">
                        <div className="relative flex flex-col w-full md:w-1/2">
                            <Timer shouldTick={playerTimerSwitch} setShouldTick={setPlayerTimerSelect} />
                        </div>
                        <div className="w-full md:w-1/2 mt-4 md:mt-0">
                            <Timer shouldTick={!playerTimerSwitch} setShouldTick={setPlayerTimerSelect} />
                        </div>
                    </div>

                </div>
            </div>
        </LoaderCirlce>
    );
}
