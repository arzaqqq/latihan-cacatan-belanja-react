
export default function Footer({ items }) {
    const totalItems = items.length;
    const checkItems = items.filter((item) => item.checked).length;
    const percentage = totalItems > 0 ? Math.round((checkItems / totalItems) * 100) : 0;
  
    return (
      <footer className="stats">
        Ada {totalItems} barang di daftar belanjaan, {checkItems} barang sudah dibeli ({percentage}%)
      </footer>
    );
  }
  