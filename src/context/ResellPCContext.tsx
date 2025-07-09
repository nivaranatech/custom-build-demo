import React, { createContext, useState, useContext, ReactNode } from 'react';

type ResellPC = {
  brand: string;
  model: string;
  year: string;
  condition: string;
  processor: string;
  ram: string;
  storage: string;
  graphics: string;
  description: string;
  expectedPrice: string;
  contactNumber: string;
  email: string;
  images: File[];
};

type ResellPCContextType = {
  resellPCs: ResellPC[];
  addResellPC: (pc: ResellPC) => void;
};

const ResellPCContext = createContext<ResellPCContextType | undefined>(undefined);

export const ResellPCProvider = ({ children }: { children: ReactNode }) => {
  const [resellPCs, setResellPCs] = useState<ResellPC[]>([]);

  const addResellPC = (pc: ResellPC) => {
    setResellPCs([...resellPCs, pc]);
  };

  return (
    <ResellPCContext.Provider value={{ resellPCs, addResellPC }}>
      {children}
    </ResellPCContext.Provider>
  );
};

export const useResellPC = () => {
  const context = useContext(ResellPCContext);
  if (!context) {
    throw new Error("useResellPC must be used within a ResellPCProvider");
  }
  return context;
};
