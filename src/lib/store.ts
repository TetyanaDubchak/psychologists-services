import { create } from "zustand";
import {MobileMenuState,PsychologistsListState,ModalFormState,PsychologistsForMeetingsState,UserStore } from "@/lib/stateTypes";

export const usePsychologistsList = create<PsychologistsListState>((set) => ({
    psychologistsList: [],
        
    setPsychologistsList:(list)=> set(()=>({psychologistsList: list})),
}))

export const useMobileMenu = create<MobileMenuState>((set) => ({
  isMobileMenuOpen: false,

  setMobileMenuOpen: () => set(() => ({ isMobileMenuOpen: true })),
  setMobileMenuClose: () => set(() => ({ isMobileMenuOpen: false })),
}))

export const useModalForm = create<ModalFormState>((set) => ({
  isLoginFormOpen: false,
  isRegistrationFormOpen: false,
  isMeetingFormOpen: false,
  isResetPasswordFormOpen: false,

  setIsLoginFormOpen: () => set(() => ({ isLoginFormOpen: true })),
  setIsLoginFormClose: () => set(() => ({ isLoginFormOpen: false })),

  setIsRegistrationFormOpen: () => set(() => ({ isRegistrationFormOpen: true })),
  setIsRegistrationFormClose: () => set(() => ({ isRegistrationFormOpen: false })),
  
  setIsMeetingFormOpen: () => set(() => ({ isMeetingFormOpen: true })),
  setIsMeetingFormClose:()=> set(()=>({isMeetingFormOpen: false})),

  setIsResetPasswordFormOpen: () => set(() => ({ isResetPasswordFormOpen: true })),
  setIsResetPasswordFormClose:()=> set(()=>({isResetPasswordFormOpen: false})),
}))

export const usePsychologistsForMeetings= create<PsychologistsForMeetingsState>((set) => ({
    psychologistsClicked: null,
    setPsychologistsClicked:(item)=> set(()=>({psychologistsClicked: item})),
}))

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  updateFavorites: (favorites)=> set((state)=> (state.user? {user: {...state.user, favorites}}: {})),
}));