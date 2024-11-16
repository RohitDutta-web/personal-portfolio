import  { createContext, useRef, useContext } from 'react';

const ScrollContext = createContext(); // Create a context

export const ScrollProvider = ({ children }) => {
    const sectionRef = useRef(null); // Create a ref using useRef
    return (
      <ScrollContext.Provider value={sectionRef}> 
        
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => {
    return useContext(ScrollContext); // Custom hook to use the context
};
