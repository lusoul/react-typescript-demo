import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  //useState<>的泛型是告诉setUser里头的参数可以接受什么类型。用户没登入之前肯定为null
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({ name: "Ling", email: "lusoul00@gmail.com" });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
