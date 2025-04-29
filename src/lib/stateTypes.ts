export interface Reviews {
  reviewer: string;
  rating: number;
  comment: string;
}


export interface Psychologist {
  id: string;
  name: string;
  avatar_url: string;
  experience: string;
  reviews?: Reviews[];
  price_per_hour: number;
  rating: number;
  license: string;
  specialization: string;
  initial_consultation: string;
  about: string;
}

export interface PsychologistsListState {
  psychologistsList: Psychologist[];
  setPsychologistsList: (list: Psychologist[]) => void;
}

export interface ModalFormState {
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

export interface PsychologistsForMeetingsState {
  psychologistsClicked: Psychologist | null;
  setPsychologistsClicked: (item: Psychologist) => void;
}

export interface User {
  uid: string;
  name: string;
  email: string;
  favorites: {[psychologistId: string]: boolean;}
}

export interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  updateFavorites: (favorites: {[psychologistId: string]: boolean})=>void
}
