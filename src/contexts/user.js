import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({"username": "mallionaire"})

    const logOut = () => {
        setUser(null)
    }

    return (
        <UserContext.Provider value={{user, setUser, logOut}}>
            {children}
        </UserContext.Provider>
    )
}