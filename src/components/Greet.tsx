import { GreetProps } from "./Greet.types";

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Welcome {props.name} here</h2>
    </div>
  );
};
