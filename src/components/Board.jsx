import { useEffect, useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { ResultPopUp } from "./ResultPopUp";
import { useNavigate } from "react-router-dom";

export function Board({ firstMove, position, onPieceDrop, switchTimer }) {
    const [game, setGame] = useState(new Chess());
    const [turn, setTurn] = useState("white")
    const [isMatchOver, setIsMatachOver] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        if (firstMove == "black") {
            setTurn("black")
        }
    }, [firstMove])

    useEffect(() => {
        setTimeout(() => {
            if (turn === "black") {
                makeRandomMove()
            }
        }, 1000)
    }, [turn])

    const changeTurns = () => {
        if (turn === "white") {
            setTurn("black")
        } else {
            setTurn("white")
        }
    }
    const makeMove = (move) => {
        const gameCopy = new Chess();
        gameCopy.loadPgn(game.pgn());
        gameCopy.move(move);
        setGame(gameCopy);
        changeTurns()
        switchTimer()
    }

    function makeRandomMove() {
        const possibleMoves = game.moves();
        console.log(possibleMoves);
        if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0) {
            setIsMatachOver(true)
            navigate("/result")
            return; // exit if the game is over
        }
        const randomIndex = Math.floor(Math.random() * possibleMoves.length);
        makeMove(possibleMoves[randomIndex]);
    }
    const onDrop = (startSquare, endSquare) => {
        console.log(startSquare);
        makeMove({
            from: startSquare,
            to: endSquare,
        });
    }
    console.log(isMatchOver);
    return (
        <>
            {isMatchOver ==true ? <ResultPopUp /> : null}
            <Chessboard position={game.fen()} onPieceDrop={onDrop} snapToCursor={false} id="Board" />
        </>

    );
}