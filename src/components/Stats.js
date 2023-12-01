export function Stats({ items }) {
  const numItems = items.length;

  const numOfPacked = items.filter((item) => item.packed).length;

  const percentage = Math.round((numOfPacked / numItems) * 100);
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items to your parking list</em>
      </footer>
    );

  return (
    <footer className="stats">
      <em>
        {percentage !== 100
          ? `💼You have ${numItems} items on your list,and you already packed ${numOfPacked}  (${
              numOfPacked > 0 ? percentage : 0
            }%)`
          : "All Items packed you are good to go"}
      </em>
    </footer>
  );
}
