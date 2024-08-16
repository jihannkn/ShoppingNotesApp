import { useState } from 'react';
import Header from '../components/fragments/Header';
import Form from '../components/fragments/Form';
import GroceryList from '../components/fragments/GroceryList';
import Footer from '../components/fragments/Footer';


const initialItems = [
    { id: 1, name: 'Kopi Bubuk', quantity: 2, checked: true },
    { id: 2, name: 'Gula Pasir', quantity: 5, checked: false },
    { id: 3, name: 'Air Mineral', quantity: 3, checked: false },
];

export default function Home() {
    const [items, setItems] = useState(initialItems);

    const handleAddItem = (item: { name: string; quantity: number; checked: boolean; id: number }) => {
        setItems([...items, item]);
    };

    const handleDeleteItem = (id: number) => {
        setItems(items.filter((item) => item.id !== id));
    };

    const handleToggleItem = (id: number) => {
        setItems(items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        ));
    };

    const handleClearItems = () => {
        setItems([]);
    };

    return (
        <div className="w-full font-comfortaa text-[#283618] bg-[#fefae0] h-screen flex items-center justify-center">
            <div className="app w-[70%] h-full mx-auto grid grid-rows-[auto_auto_1fr_auto]">
                <Header />
                <Form onAddItem={handleAddItem} />
                <GroceryList
                    items={items}
                    onDeleteItem={handleDeleteItem}
                    onToggleItem={handleToggleItem}
                    onClearItems={handleClearItems}
                />
                <Footer items={items} />
            </div>
        </div>
    );
};
