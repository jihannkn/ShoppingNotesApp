import React, { useState } from 'react';

type FormProps = {
    onAddItem: (item: { name: string; quantity: number; checked: boolean; id: number }) => void;
}

export default function Form({ onAddItem }: FormProps) {
    const [name, setName] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(1);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!name) return;

        const newItem = {
            name,
            quantity,
            checked: false,
            id: Date.now(),
        };

        onAddItem(newItem);

        setName('');
        setQuantity(1);
    }

    const quantityNum = [...Array(20)].map((_, i) => (
        <option key={i + 1} value={i + 1}>{i + 1}</option>
    ));

    return (
        <form onSubmit={handleSubmit} className="add-form bg-[#dda15e] py-2 flex items-center justify-center gap-3">
            <h3 className="mr-8 text-xl">Hari ini belanja apa kita?</h3>
            <div className="my-4 flex">
                <select className="mr-4 bg-[#fefae0] font-inherit border-none rounded-full py-3 px-6 text-[18px] cursor-pointer"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                >
                    {quantityNum}
                </select>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="nama barang..."
                    className="bg-[#fefae0] font-inherit border-none rounded-full py-3 px-6 text-[18px]"
                />
            </div>
            <button className="bg-[#283618] text-[#fefae0] font-bold rounded-full py-3 px-6 text-[18px]">
                Tambah
            </button>
        </form>
    );
};
