import './App.css'
import React, { useState, useEffect } from 'react';
import GameBoardRender from './components/GameBoardRender/GameBoardRender';
import { Tablero, inicializarTablero, siguienteEstado } from './utils/coreGame';
import { Button } from '@nextui-org/react';

function App() {
  const [gameBoard, setGameBoard] = useState<Tablero>(inicializarTablero())

  const handleNextState = () => {
    setGameBoard(currentBoard => siguienteEstado(currentBoard))
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGameBoard(currentBoard => siguienteEstado(currentBoard))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button color="primary" onClick={handleNextState}>
        Button
      </Button>
      <GameBoardRender
        board={gameBoard}
      />
    </div>
  )
}

export default App
