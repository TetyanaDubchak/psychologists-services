import { create } from "zustand";
import { Psychologist } from "@/components/PsychologistsItem";

interface PsychologistsListState {
  psychologistsList: Psychologist[];
  setPsychologistsList: (list: Psychologist[]) => void;
}

interface ModalFormState {
  isLoginFormOpen: boolean;
  isRegistrationFormOpen: boolean;
  isMeetingFormOpen: boolean;
  setIsLoginFormOpen: () => void;
  setIsLoginFormClose: () => void;
  setIsRegistrationFormOpen: () => void;
  setIsRegistrationFormClose: () => void;
  setIsMeetingFormOpen: () => void;
  setIsMeetingFormClose: () => void;
}

interface PsychologistsForMeetingsState {
  psychologistsClicked: Psychologist | null;
  setPsychologistsClicked: (item: Psychologist) => void;
}


export const usePsychologistsList = create<PsychologistsListState>((set) => ({
    psychologistsList: [],
        
    setPsychologistsList:(list)=> set(()=>({psychologistsList: list})),
}))

export const useModalForm = create<ModalFormState>((set) => ({
  isLoginFormOpen: false,
  isRegistrationFormOpen: false,
  isMeetingFormOpen: false,

  setIsLoginFormOpen: () => set(() => ({ isLoginFormOpen: true })),
  setIsLoginFormClose: () => set(() => ({ isLoginFormOpen: false })),

  setIsRegistrationFormOpen: () => set(() => ({ isRegistrationFormOpen: true })),
  setIsRegistrationFormClose: () => set(() => ({ isRegistrationFormOpen: false })),
  
  setIsMeetingFormOpen: () => set(() => ({ isMeetingFormOpen: true })),
  setIsMeetingFormClose:()=> set(()=>({isMeetingFormOpen: false})),
}))

export const usePsychologistsForMeetings= create<PsychologistsForMeetingsState>((set) => ({
    psychologistsClicked: null,
    setPsychologistsClicked:(item)=> set(()=>({psychologistsClicked: item})),
}))