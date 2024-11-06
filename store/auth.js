import { create } from 'zustand'

export const useAuth = create((set) => ({
 email: undefined,
 handleChangeEmail: (email) => set((state) => ({ email })),
}))