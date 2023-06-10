export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const numItems = items.length;
  const numpacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numpacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything. Ready to go ✈️"
          : `🧳 You have ${numItems} on your list, and you have already packed ${numpacked}${" "}
      (${percentage}%)`}
      </em>
    </footer>
  );
}
