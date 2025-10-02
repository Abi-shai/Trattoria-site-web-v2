import { createContext } from 'react';

const FullScreenStateContext = createContext({
  state: 'closed', // une valeur d'état
  toggleState: () => { }
});

export default FullScreenStateContext;