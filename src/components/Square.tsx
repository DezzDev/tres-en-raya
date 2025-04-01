

interface SquareProps {
  value: string | null,
  onSquareClick:()=>void
}

function Square({value, onSquareClick}: SquareProps) {
 
  console.log("rendering square", new Date().toLocaleTimeString());

 
  return (
    <button 
      className="square"
      onClick={onSquareClick}
    >      
      {value}
    </button>
  )
}

export default Square