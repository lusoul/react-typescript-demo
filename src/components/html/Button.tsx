import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  // ...rest means rest of html element's props
  return (
    <button className={`class-width-${variant}`} {...rest}>
      {children}
    </button>
  );
};

// 现在children可以是随便东西比如<div>hello</div>. 如果想让children里头只能是string类型
type ButtonProps2 = {
  variant: "primary" | "secondary";
  children: string; // 我们还需要让React.ComponentProps<'button'> leave out children props, 使用Omit语法
} & Omit<React.ComponentProps<"button">, "children">;

export const CustomButton2 = ({ variant, children, ...rest }: ButtonProps2) => {
  // ...rest means rest of html element's props
  return (
    <button className={`class-width-${variant}`} {...rest}>
      {children}
    </button>
  );
};
