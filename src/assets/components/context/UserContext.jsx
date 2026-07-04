import { createContext } from "react";

export const UserContext = createContext();

const UserContextProvider= ({children})=>{

    const userName = "moutasem";
    const userAge = 22;

    return <UserContext.Provider value={{userName,userAge}}>
        {children}
    </UserContext.Provider>

}
export default UserContextProvider;