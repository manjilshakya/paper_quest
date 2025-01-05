import { devtools, persist } from "zustand/middleware";
import {create} from "zustand/react";

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


export default useTokenStore;
