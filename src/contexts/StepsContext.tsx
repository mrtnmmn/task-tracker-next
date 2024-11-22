import { randomInt, randomUUID } from 'crypto';
import { createContext, useContext, useState, ReactNode } from 'react';

interface StepsContextType {
  steps: any
  addNewStep: (name: string) => void;
}

const StepsContext = createContext<StepsContextType | undefined>(undefined);

export const StepsProvider = ({ children }: { children: ReactNode }) => {
  const [steps, setSteps] = useState<Step[]>([]);

  const addNewStep = (name: string) => {
    const step: Step = { id: Math.random().toString(), name}
    setSteps(prevItems => [...prevItems, step]);
  }

  return (
    <StepsContext.Provider value={{ steps, addNewStep }}>
      {children}
    </StepsContext.Provider>
  );
};

export const useSteps = () => {
  const context = useContext(StepsContext);
  if (!context) {
    throw new Error('useSteps must be used within a StepsProvider');
  }
  return context;
};