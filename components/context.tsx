import React, { createContext, useState } from 'react';

interface MyContextType {
    savedCardIds: string[];
    setSavedCardIds: React.Dispatch<React.SetStateAction<string[]>>;
}

const MyContext = createContext<MyContextType>({ savedCardIds: [], setSavedCardIds: () => { } });

export const MyContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [savedCardIds, setSavedCardIds] = useState<string[]>([]);

    return (
        <MyContext.Provider value={{ savedCardIds, setSavedCardIds }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContext;