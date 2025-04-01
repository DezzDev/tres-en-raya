
import { JSX } from "react";
import Square from "./Square"

interface BoardProps {
  xIsNext: boolean,
  squares: string[],
  onPlay: (squares: string[]) => void
}

function Board({ xIsNext, squares, onPlay }: BoardProps) {



  const winner = calculateWinner(squares)
  let status;
  if (winner) {
    status = "Ganador: " + winner;
  } else {
    status = "Siguiente jugador: " + (xIsNext ? "X" : "O")

  }

  const handleClick = (i: number) => {
    // check if square is already filled or if there is a winner
    if (squares[i] || calculateWinner(squares))
      return

    const newSquares = squares.slice()
    if (xIsNext) {
      newSquares[i] = 'X'
    } else {
      newSquares[i] = 'O'
    }
    onPlay(newSquares)
  }

  const renderSquares = () => {
    const board = [];
    for (let row = 0; row < 3; row++) {
      const squaresRow = [];
      for (let col = 0; col < 3; col++) {
        const index = row * 3 + col;
        squaresRow.push(
          <Square
            key={index}
            value={squares[index]}
            onSquareClick={() => handleClick(index)}
          />
        );
      }
      board.push(
        <div key={row} className="board-row">
          {squaresRow}
        </div>
      );
    }
    return board;
  };

  return (
    <>
      <div className="status">{status}</div>
      {renderSquares()}
    </>
  )
}

function calculateWinner(squares: string[]) {
  console.log("calculate");
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  return null
}

export default Board