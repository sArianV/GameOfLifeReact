import { TGameBoard } from '../../utils/coreGame';

export interface IGameBoardRenderProps {
  board?: TGameBoard;
  theme?: 'dark' | 'light';
  cellSize: number;
  cellBorderWidth: number;
  onClick: (x: number, y: number) => void;
}
