import { createContext } from 'react';

const FullScreenStateContext = createContext({
  state: 'closed',
  toggleState: () => { },
  isBannerOpen: true,
  closeBanner: () => { }
});


export default FullScreenStateContext;