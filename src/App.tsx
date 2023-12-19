import { Box, Button, useColorMode } from '@chakra-ui/react';

import GameOfLife from './components/GameOfLife/GameOfLife';
function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      w="100%"
      minH="100vh"
      pt="4rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      gap={4}
    >
      {/*  <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button> */}
      <GameOfLife theme={colorMode} />
    </Box>
  );
}

export default App;
