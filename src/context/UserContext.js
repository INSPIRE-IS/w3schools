

import { useState, useContext, createContext } from "react";


const UserContext = createContext()

export const useAuth = () => {
    return useContext(UserContext);
}

export const UserProvider = ({children}) => {
    const [user, setUser] = useState("Jesse Hall");
  
    return (
      <UserContext.Provider value={user}>
        {children}
      </UserContext.Provider>
    );
  }
  
  