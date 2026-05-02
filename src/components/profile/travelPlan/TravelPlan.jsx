import { useState } from "react";
import AddItem from "@/components/profile/travelPlan/AddItem";

let nextId = 3;

const initialItems = [
  { id: 0, title: "Warm socks", packed: true },
  { id: 1, title: "Travel journal", packed: false },
  { id: 2, title: "Watercolors", packed: false },
];

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  const [total, setTotal] = useState(3);
  const [packed, setPacked] = useState(1);

  function handleAddItem(title) {
    setTotal(total + 1);
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ]);
  }

  return (
    <>
      <hr />
      <AddItem onAddItem={handleAddItem} />
      <h2>Packing List</h2>
    </>
  );
}
