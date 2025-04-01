import { useState } from "react"
import Board from "./Board"


function Game() {

  // history is an array of arrays, each array is a state of the game
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)

  const currentSquares = history[currentMove]
  const xIsNext = currentMove % 2 === 0

  const handlePlay = (nextSquares: string[]) => {
    
    const nextHistory = [...history.slice(0,currentMove + 1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1)
   
  }

  const jumpTo = (nextMove:number) => {
    
    setCurrentMove(nextMove)
    
  }

  const moves = history.map((_, move) => {
    let description;
    if (move > 0)
      description = `Ir al movimiento #${move}`
    else 
      description = `Ir al inicio del juego`

    if(move === currentMove) {
      return (
        <li key={move}>
          {`Estas en el movimiento #${move}`}
        </li>
      )
    }
    return (
      <li key={move}>
        <button onClick={()=>jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game