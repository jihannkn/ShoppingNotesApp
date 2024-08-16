type ItemProps = {
  item: { id: number; name: string; quantity: number; checked: boolean };
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};

export default function Item({ item, onDeleteItem, onToggleItem }: ItemProps) {
  return (
    <li
      key={item.id}
      className="text-[#283618] text-xl font-bold flex items-center mb-7">
      <input
        type="checkbox"
        className="h-9 w-9 accent-[#283618] mr-5"
        checked={item.checked}
        onChange={() => onToggleItem(item.id)}
      />
      <span className={item.checked ? "line-through" : ""}>
        {item.quantity} {item.name}
      </span>
      <button
        className="flex items-center justify-center cursor-pointer text-4xl p-0 w-9 h-9 bg-red-500 ml-4"
        onClick={() => onDeleteItem(item.id)}>
        &times;
      </button>
    </li>
  );
}
