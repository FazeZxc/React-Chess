import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PopUpStartWithWhichPiece = ({ firstMove, setFirstMove }) => {
    const [clickedState, setClickedState] = useState(true);
    const optionsForFirstMove = [{ name: "white" }, { name: "black" }];
    const navigate = useNavigate()
    const clickHandler = (event) => {
        const selectedFirstMove = event.target.value;
        setFirstMove(selectedFirstMove);
    };

    const switchPopUpOnOff = () => {
        setClickedState(false);
        navigate("/play")
    };

    return (
        <div className=" fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            {clickedState && (
                <div className="bg-[#EDE3D9] rounded-lg p-4 mx-4 sm:p-8 sm:w-96 md:w-[400px] lg:w-[500px]">
                    <label htmlFor="firstmove" className="block font-bold mb-2">
                        First Move
                    </label>
                    <select
                        name="firstMove"
                        id="firstmove"
                        onChange={clickHandler}
                        className="w-full border border-green-300 rounded px-3 py-2 mb-4 focus:outline-none focus:border-green-500"
                    >
                        {optionsForFirstMove.map((option, index) => (
                            <option key={index} value={option.name}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={switchPopUpOnOff}
                        className="w-full h-16 bg-green-500 hover:bg-green-600 text-4xl text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                    >
                        Play
                    </button>
                </div>
            )}
        </div>
    );
};
