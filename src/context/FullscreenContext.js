import { createContext } from 'react';

const FullScreenStateContext = createContext({
  state: 'closed',
  toggleState: () => { },
  eventModal: false,
  openEventModal: () => { },
  closeEventModal: () => { },
  isBannerOpen: true,
  closeBanner: () => { }
});


export default FullScreenStateContext;