import React, { useEffect, useState } from 'react';

import GameBoardRender from './components/GameBoardRender/GameBoardRender';
import { inicializarTablero, siguienteEstado, Tablero } from './utils/coreGame';

function App() {
  const [gameBoard, setGameBoard] = useState<Tablero>(inicializarTablero());

  const handleNextState = () => {
    setGameBoard((currentBoard) => siguienteEstado(currentBoard));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setGameBoard((currentBoard) => siguienteEstado(currentBoard));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <button color="primary" onClick={handleNextState}>
        Button
      </button>
      <GameBoardRender board={gameBoard} />
    </>
  );
}

export default App;
