import { atom } from 'jotai';

import { TGameBoard } from '../utils/coreGame';

export const gameBoardAtom = atom<TGameBoard | null>(null);

export const boardConfigAtom = atom({
  rows: 180,
  columns: 380,
  cellSize: 5,
  cellBorderWidth: 1,
  speed: 75,
  running: false,
});
