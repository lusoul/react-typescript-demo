import React from "react";
import { Greet } from "../Greet";

//只是使用其他component的props而已，这个用的比较少
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>;
};
