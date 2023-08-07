import { createContext } from 'react';

export type RefContextType = {
  aboutRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
  stacksRef: React.RefObject<HTMLElement>;
  handleScrollToAbout: () => void;
  handleScrollToProjects: () => void;
  handleScrollToStacks: () => void;
}

const RefContext = createContext({} as RefContextType);

export default RefContext; 
