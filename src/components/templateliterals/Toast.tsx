/**
 * Position props can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" | "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */
type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";
type ToastProps = {
  //   position: `${HorizontalPosition}-${VerticalPosition}`;//这个语法会遍历所有结果组合啦
  //但是我想排除center-center
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};
export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};
