import create from 'zustand';

const useStore = create((set) => ({
  status: 'loading',
  setStatus: (newState) => set((state) => ({ status: newState })),
}));

export default useStore;
