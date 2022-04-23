import React from "react";

// polymorphic component就是你指定这个component是展示html哪一个tag，比如<div> <h2> <p>等等等而不是固定的一种
// 这个是advanced feature，知道就行

type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};

// 使用
//<Text as='h1' size='lg'>Heading</Text>
//<Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>
