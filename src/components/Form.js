import { useState } from "react";

export default function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (!description) {
        return;
      }
  
      const newItem = {
        description,
        quantity,
        packed: false,
        id: Date.now(),
      };
  
      onAddItems(newItem);
  
      console.log(newItem);
  
      // console.log(newItem)
      //   console.log(event)
  
      setDescription("");
      setQuantity(1);
    };
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip? </h3>
  
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
  
        <input
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="item"
        />
        <button type="submit"> Add </button>
      </form>
    );
  }