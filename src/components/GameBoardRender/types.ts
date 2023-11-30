import { TGameBoard } from '../../utils/coreGame';

export interface IGameBoardRenderProps {
  board?: TGameBoard;
  theme?: 'dark' | 'light';
  onClick?: (x: number, y: number) => void;
}
