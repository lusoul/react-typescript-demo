import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  //useState<>的泛型是告诉setUser里头的参数可以接受什么类型
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({ name: "Ling", email: "lusoul00@gmail.com" });
  };
  //比如使用useEffect hook，用户被设置以后就再也不会logout了，此时使用现在这种写法
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};
