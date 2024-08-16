import { useState } from "react";
import Item from "./Item";

type Item  = {
    id: number;
    name: string;
    quantity: number;
    checked: boolean;
}

type GroceryListProps = {
    items: Item[];
    onDeleteItem: (id: number) => void;
    onToggleItem: (id: number) => void;
    onClearItems: () => void;
}

export default function GroceryList({ items, onDeleteItem, onToggleItem, onClearItems }: GroceryListProps) {
  const [sortBy, setSortBy] = useState<string>('input');

  let sortedItems;

  switch (sortBy) {
    case 'name':
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'checked':
      sortedItems = items.slice().sort((a, b) => Number(a.checked) - Number(b.checked));
      break;
    default:
      sortedItems = items;
  }

  return (
    <>
      <div className="bg-[url('../../../public/assets/images/paper-bg.jpg')] bg-repeat-y bg-cover text-[#fefae0] py-9 flex flex-col items-center gap-8 overflow-y-scroll">
        <ul className="list-none w-[80%] flex flex-col items-center mt-[-1rem]">
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <div className="actions bg-[#606c38] w-full py-3 text-center">
        <select
          className="py-2 px-6 text-[18px] mr-3 bg-[#fefae0] font-inherit border-none rounded-full cursor-pointer"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button
          className="py-2 px-6 text-[18px] bg-[#283618] text-[#fefae0] font-bold rounded-full"
          onClick={onClearItems}>
          Bersihkan Daftar
        </button>
      </div>
    </>
  );
};
