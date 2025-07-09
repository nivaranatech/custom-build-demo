import React, { createContext, useContext, useState } from "react";
import { defaultParts, defaultReadyMadePCs } from "../lib/defaultData";

export type Part = {
    id: string;
    category: string;
    name: string;
    price: number;
    specs?: string[];
    image: string;
    sold: boolean;
};

export type ReadyMadePC = {
    id: string;
    name: string;
    type: "desktop" | "laptop";
    price: number;
    specs: string[];
    image: string;
    sold: boolean;
};

type PartsContextType = {
  parts: Part[];
  readyMadePCs: ReadyMadePC[];
  addPart: (part: Part) => void;
  addReadyMadePC: (pc: ReadyMadePC) => void;
  removePart: (id: string) => void;
  removePartsByIds: (ids: string[]) => void;
  removeReadyMadePCsByIds: (ids: string[]) => void;
  setParts: React.Dispatch<React.SetStateAction<Part[]>>;
  setReadyMadePCs: React.Dispatch<React.SetStateAction<ReadyMadePC[]>>;
  markProductsAsSold: (productIds: string[]) => void;
};

const PartsContext = createContext<PartsContextType | undefined>(undefined);

export const PartsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [parts, setParts] = useState<Part[]>(defaultParts);
    const [readyMadePCs, setReadyMadePCs] = useState<ReadyMadePC[]>(defaultReadyMadePCs);

    const addPart = (part: Part) => setParts(prev => [...prev, part]);

    const removePart = (id: string) => {
        setParts(prev => prev.filter(part => part.id !== id));
    };

    const removePartsByIds = (ids: string[]) => {
        setParts(prev => prev.filter(part => !ids.includes(part.id)));
    };

    const removeReadyMadePCsByIds = (ids: string[]) => {
        setReadyMadePCs(prev => prev.filter(pc => !ids.includes(pc.id)));
    };

    const addReadyMadePC = (pc: ReadyMadePC) => {
        setReadyMadePCs(prev => [...prev, pc]);
    };

    // ✅ Fixed TypeScript typing for productIds parameter
    const markProductsAsSold = (productIds: string[]) => {
        setParts(prevParts =>
            prevParts.map(part =>
                productIds.includes(part.id) ? { ...part, sold: true } : part
            )
        );

        setReadyMadePCs(prevPCs =>
            prevPCs.map(pc =>
                productIds.includes(pc.id) ? { ...pc, sold: true } : pc
            )
        );
    };

    return (
        <PartsContext.Provider
            value={{
                parts,
                readyMadePCs,
                addPart,
                addReadyMadePC,
                removePart,
                removePartsByIds,
                removeReadyMadePCsByIds,
                setParts,
                setReadyMadePCs,
                markProductsAsSold
            }}
        >
            {children}
        </PartsContext.Provider>
    );
};

export const useParts = () => {
    const context = useContext(PartsContext);
    if (!context) {
        throw new Error("useParts must be used within a PartsProvider");
    }
    return context;
};