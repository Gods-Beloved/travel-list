import { useState } from "react";
import Item from "./Item";

export default function  ParkingList({
    items,
    onHandleDeleteAllItems,
    onRemoveItems,
    onToggleItems,
  }) {
    const [sortBy, setSortBy] = useState("input");
  
    let sortedItems;
  
    if (sortBy === "input") sortedItems = items;
  
    if (sortBy === "description")
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
  
    if (sortBy === "packed")
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => {
            return (
              <Item
                item={item}
                key={item.id}
                onRemoveItems={onRemoveItems}
                onToggleItems={onToggleItems}
              />
            );
          })}
        </ul>
  
        <div className="actions">
          <select
            value={sortBy}
            onChange={(event) => {
              setSortBy((e) => event.target.value);
            }}
          >
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by parked status</option>
          </select>
  
          <button type="button" onClick={() => onHandleDeleteAllItems()}>
            Clear list
          </button>
        </div>
      </div>
    );
  }