import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import ParkingList from "./ParkingLIst";
import { Stats } from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (newItem) => {
    setItems((items) => {
      return [...items, newItem];
    });
  };

  const handleDeleteAllItems = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) {
      setItems(() => {
        return [];
      });
    }
  };

  const handleRemoveItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) => {
      return items.map((item) => {
        return item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item;
      });
    });
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ParkingList
        items={items}
        onRemoveItems={handleRemoveItems}
        onToggleItems={handleToggleItem}
        onHandleDeleteAllItems={handleDeleteAllItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
