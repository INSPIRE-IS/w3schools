

import { useState, useContext, createContext } from "react";


const UserContext = createContext()

export const useAuth = () => {
    return useContext(UserContext);
}
// type UserDetail = {
//   name: string | undefined;
//   isConnected: boolean | null;
//   age: number | null;
// };
export const UserProvider = ({children}) => {
  //const [user, setUser] = useState({name:"Jesse Hall",isConnected:true,age:23});
  //const [user, setUser] = useState("Jesse Hall");
  const user = {name:"Jesse Hall"};

    // const updateUser = (userDetail) =>{
    //   setUser({name:userDetail.name,isConnected:userDetail.isConnected,age:userDetail.age});
    // }

//const value = useMemo(() => ({user}), [user]);
const value = {user};
  //  const value = {user, onUpdate: updateUser,};
  
    return (
      <UserContext.Provider value={value}>
        {children}
      </UserContext.Provider>
    );
  }
  
  