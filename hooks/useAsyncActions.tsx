import React, { createContext, useContext, ReactNode } from 'react';
import useAsyncActionsStore from '@/store/asyncActionStore';

// Definisci il tipo per il contesto
interface AsyncActionsContextProps {
  loading: boolean;
  data: any | null;
  error: string | null;
  fetchData: () => Promise<void>;
}

// Crea il contesto con il tipo definito
const AsyncActionsContext = createContext<AsyncActionsContextProps | undefined>(undefined);

// Definisci i tipi per il provider
interface AsyncActionsProviderProps {
  children: ReactNode;
}

export const AsyncActionsProvider: React.FC<AsyncActionsProviderProps> = ({ children }) => {
  const asyncActionsStore = useAsyncActionsStore();

  return (
    <AsyncActionsContext.Provider value={asyncActionsStore}>
      {children}
    </AsyncActionsContext.Provider>
  );
};

// Custom hook per utilizzare il contesto
export const useAsyncActions = () => {
  const context = useContext(AsyncActionsContext);
  if (context === undefined) {
    throw new Error('useAsyncActions must be used within an AsyncActionsProvider');
  }
  return context;
};
