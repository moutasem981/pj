import { create } from "zustand";


export const    Usecounterstore = create((set)=>({
    Counter:1,
    increment:()=>{
        set((state)=>({
            Counter:state.Counter + 1
        }))
    }
}));