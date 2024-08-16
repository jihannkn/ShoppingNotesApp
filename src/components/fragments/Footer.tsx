interface FooterProps {
    items: { id: number; name: string; quantity: number; checked: boolean }[];
}

export default function Footer({ items }: FooterProps) {
    if (items.length === 0) {
        return (
            <footer className="bg-[#bc6c25] text-white text-center py-5 font-bold">
                Daftar belanja masih kosong!
            </footer>
        );
    }

    const totalitems = items.length;
    const checkedItems = items.filter((item) => item.checked).length;
    const percentage = Math.round((checkedItems / totalitems) * 100);

    return (
        <footer className="bg-[#bc6c25] text-white text-center py-4 font-bold">
            Ada {totalitems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentage}%)
        </footer>
    );
};
