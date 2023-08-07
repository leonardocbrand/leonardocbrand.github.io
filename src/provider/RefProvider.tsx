import { useRef } from 'react';

import RefContext from '../contexts/RefContext';

type ProviderProps = {
  children: React.ReactNode;
}

const SCROLL_OPTIONS: ScrollIntoViewOptions = {
  behavior: 'smooth',
  block: 'start',
  inline: 'nearest',
};

function RefProvider({ children }: ProviderProps) {
  const projectsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const stacksRef = useRef<HTMLElement>(null);

  const handleScrollToProjects = () => {
    projectsRef.current?.scrollIntoView(SCROLL_OPTIONS);
  };

  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView(SCROLL_OPTIONS);
  };

  const handleScrollToStacks = () => {
    stacksRef.current?.scrollIntoView(SCROLL_OPTIONS);
  };

  return (
    <RefContext.Provider 
      value={{
        projectsRef,
        aboutRef,
        stacksRef,
        handleScrollToProjects,
        handleScrollToAbout,
        handleScrollToStacks,
      }}>
      {children}
    </RefContext.Provider>
  );
}

export default RefProvider;
