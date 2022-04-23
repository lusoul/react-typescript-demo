import { createContext, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

//这个定义是为了<UserContext.Provider value=对象不报错
type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

// export const UserContext = createContext<UserContextType | null>(null);
export const UserContext = createContext({} as UserContextType);
//这样一来，每次useContext()返回的值，就不可能为null了，也就不用if判断了在User.tsx里头

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  //下面的value理解成把{user,setUser}放到了context里头了，provider的孩子就可以取了
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
