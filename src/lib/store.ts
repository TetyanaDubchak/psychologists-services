import { create } from "zustand";
import { Psychologist } from "@/components/PsychologistsItem";

interface PsychologistsState {
  psychologistsList: Psychologist[];
  setPsychologistsList: (list: Psychologist[]) => void;
}

export const usePsychologistsList = create<PsychologistsState>((set) => ({
    psychologistsList: [],
        
    setPsychologistsList:(list)=> set(()=>({psychologistsList: list})),
}))