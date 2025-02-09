﻿import { devtools, persist } from "zustand/middleware";
import {create} from "zustand/react";
import {
    PastPaper,
    PastPaperState,
    SpacedRepetitionCard,
    SpacedRepetitionCardState,
    UserData,
    UserDetailsState
} from "./Models/Types";

export interface Tokenstore{
    token: string;
    setToken: (data: string) => void; //THIS IS A FUNCTION
}

const useTokenStore = create<Tokenstore>()(
    devtools(
        persist(
            (set) => ({
                token: '',
                setToken: (data: string) => set(() => ({ token: data })),
            }),
            { name: 'token-store' }
        )
    )
);

export const useUserDetails = create<UserDetailsState>((set) => ({
    email: "",
    userId: 0,
    name: "",
    usertype: "",
    isUserDataComplete: false,
    updateUserDetails: (userData: UserData) =>
      set({
        email: userData.email,
        userId: typeof userData.userId === "string" ? parseInt(userData.userId, 10) : userData.userId,
        name: userData.name,
        usertype: userData.userType,

        isUserDataComplete: userData.isUserDataComplete === "1" || userData.isUserDataComplete === true || userData.isUserDataComplete === "True",
      }),
    clearUserDetails: () =>
      set({
        email: "",
        userId: 0,
        name: "",
        usertype: "",
        isUserDataComplete: false,
      }),
  }));

export const usePastPaperStore = create<PastPaperState>((set) => ({
    pastPapers: [],
    setPastPapers: (data: PastPaper[]) => set({ pastPapers: data }),
    clearPastPapers: () => set({ pastPapers: [] }),
}));

export const useLearningCardStore = create<SpacedRepetitionCardState>((set) => ({
    Cards: [],
    setCards: (data: SpacedRepetitionCard[]) => set({ Cards: data }),
}));


export default useTokenStore;
