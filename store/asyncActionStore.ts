import create from 'zustand';

interface AsyncActionsState {
  loading: boolean;
  data: any | null;
  error: string | null;
  fetchData: () => Promise<void>;
}

const useAsyncActionsStore = create<AsyncActionsState>(set => ({
  loading: false,
  data: null,
  error: null,
  fetchData: async () => {
    set({ loading: true });
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      set({ data, loading: false, error: null });
    } catch (error) {
      set({ error: 'Errore durante il recupero dei dati', loading: false });
    }
  },
}));

export default useAsyncActionsStore;
