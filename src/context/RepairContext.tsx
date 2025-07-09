import React, { createContext, useContext, useState } from 'react';

export type RepairRequest = {
  id: string;
  productType: string;
  warranty: string;
  description: string;
  image?: File | null;
};

type RepairContextType = {
  repairs: RepairRequest[];
  addRepair: (repair: RepairRequest) => void;
};

const RepairContext = createContext<RepairContextType | undefined>(undefined);

export const RepairProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [repairs, setRepairs] = useState<RepairRequest[]>([]);

  const addRepair = (repair: RepairRequest) => {
    setRepairs(prev => [...prev, repair]);
  };

  return (
    <RepairContext.Provider value={{ repairs, addRepair }}>
      {children}
    </RepairContext.Provider>
  );
};

export const useRepairs = () => {
  const context = useContext(RepairContext);
  if (!context) {
    throw new Error('useRepairs must be used within a RepairProvider');
  }
  return context;
};
