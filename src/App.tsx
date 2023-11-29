import { Box, Button, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import GameBoardRender from './components/GameBoardRender/GameBoardRender';
import { inicializarTablero, siguienteEstado, Tablero } from './utils/coreGame';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);

  return (
    <Box w="100%" minH="100vh" p={4}>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      <GameBoardRender theme={colorMode} />
    </Box>
  );
}

export default App;
