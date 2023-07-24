import { create } from "zustand";

const useModalStore = create((set) => ({
  showModal: false,
  toggleModal: () => set((state) => ({ showModal: !state.showModal })),
}));

export default useModalStore;
