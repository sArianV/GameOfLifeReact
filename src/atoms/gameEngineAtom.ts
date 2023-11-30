import { atom } from 'jotai';

import { initializeRandomBoard, TGameBoard } from '../utils/coreGame';

export const gameBoardAtom = atom<TGameBoard>(initializeRandomBoard());
