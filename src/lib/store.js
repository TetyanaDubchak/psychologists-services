import { create } from "zustand";

export const usePsychologistsList = create((set) => ({
    psychologistsList: null,
        
    setPsychologistsList:(list)=> set(()=>({psychologistsList: list})),
}))