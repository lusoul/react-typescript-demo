// type ListProps = {
//   // 如果item是string类型，那今后我想要数字，怎么办？
//   items: string[];
//   onClick: (value: string) => void;
// };
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends string | number>({
  //在方法前加上这个<T extends {}>作用是让15行的ListProps知道T是什么
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
