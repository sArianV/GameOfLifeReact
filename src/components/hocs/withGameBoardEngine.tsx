/* eslint-disable react/display-name */

import { useEffect, useState } from 'react';

import { inicializarTablero, siguienteEstado, Tablero } from '../../utils/coreGame';
import { IGameBoardRenderProps } from '../GameBoardRender/types';

const WithGameBoardEngine =
  <T extends IGameBoardRenderProps>(WrappedComponent: React.ComponentType<T>) =>
  (props: T) => {
    const [gameBoard, setGameBoard] = useState<Tablero>(inicializarTablero());

    const handleNextState = () => {
      setGameBoard((currentBoard) => siguienteEstado(currentBoard));
    };

    useEffect(() => {
      const interval = setInterval(() => {
        setGameBoard((currentBoard) => siguienteEstado(currentBoard));
      }, 100);
      return () => clearInterval(interval);
    }, []);
    return <WrappedComponent {...props} board={gameBoard} />;
  };

export default WithGameBoardEngine;
