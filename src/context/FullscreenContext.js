import { createContext } from 'react';

const FullScreenStateContext = createContext({
  state: 'closed',
  toggleState: () => { },
  eventModal: false,
  openEventModal: () => { },
  closeEventModal: () => { }
});


export default FullScreenStateContext;