import React from 'react';

export const ResultPopUp = () => {
    const userWon = true;
    
    let message;
    if (userWon) {
        message = <p className="text-green-700 font-extrabold">GAME OVER</p>;
    } else {
        message = <p className="text-red-700 font-bold">Sorry, you lost the chess game. Better luck next time!</p>;
    }

    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-200 p-8 rounded-lg shadow-lg sm:w-96">
            <div id="result" className="text-center">
                {message}
            </div>
        </div>
    );
}
