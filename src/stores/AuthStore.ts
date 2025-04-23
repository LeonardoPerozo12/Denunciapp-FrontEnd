import { create } from 'zustand'

export type User = {
    id: string
    name: string
    lastname: string
    email: string
    administrador: boolean
    password?: string
}

interface AuthStore {
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn:boolean) => void
  user: User | null
  setUser: (user:User) => void
}

const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn:boolean) => set({ isLoggedIn }),
  user: null,
  setUser: (user:User) => set({ user }),
  logout: () => {
    set({ user: null, isLoggedIn: false }); // Clear the user and set isLoggedIn to false
  },
}))

export default useAuthStore
