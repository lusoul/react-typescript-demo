import React from "react";

type ButtonProps = {
  handleClick?: () => void;
  handleClickWithEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClickWithMoreParams?: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

export const Button = (props: ButtonProps) => {
  //   return <button onClick={props.handleClick}>click</button>;
  if (props.handleClick) {
    return <button onClick={props.handleClick}>click</button>;
  } else if (props.handleClickWithEvent) {
    return <button onClick={props.handleClickWithEvent}>click</button>;
  } else {
    return (
      <button
        onClick={(event) => {
          if (props.handleClickWithMoreParams !== undefined)
            props.handleClickWithMoreParams(event, 1);
        }}
      >
        click
      </button>
    );
  }
};
