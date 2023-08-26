import { useState } from "react";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Form from "./Form";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handeLAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handelDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handelClearList() {
    const confirmd = window.confirm(
      "Are you sure you want to delet all items?"
    );

    if (confirmd) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handeLAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handelDeleteItem}
        onToggleItem={handelToggleItem}
        onClearList={handelClearList}
      />
      <Stats items={items} />
    </div>
  );
}
