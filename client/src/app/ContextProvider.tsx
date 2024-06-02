import React from 'react';

interface ContextValue {
    user: { role: 'admin' | 'client' | 'endUser'; userId: string };
    setUser: React.Dispatch<React.SetStateAction<ContextValue['user']>>;
}

export const GlobalContext = React.createContext<ContextValue>(
    {} as ContextValue
);

// Step 2: Provide the Context
export function ContextProvider({ children }: any) {
    const [user, setUser] = React.useState({} as ContextValue['user']);

    return (
        <GlobalContext.Provider value={{ user: user, setUser }}>
            {children}
        </GlobalContext.Provider>
    );
}
