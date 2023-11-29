import { Tablero } from '../../utils/coreGame';

export interface IGameBoardRenderProps {
  board?: Tablero;
  theme?: 'dark' | 'light';
}
