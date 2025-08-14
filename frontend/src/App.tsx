import { useState } from "react";

interface Sandwich {
  number: number;
  bread: string;
  main: string;
  sauce: string;
  spicy: string;
  vegetables: string;
}

export default function App() {
  const breads = ["Brown Bread", "Milk Bread", "White Bread", "Sugar-free Bread"];
  const mains = ["Chicken", "Beef", "Mutton"];
  const sauces = [
    "Hot Sauce",
    "Siracha",
    "Chili Garlic Sauce",
    "Mayo",
    "Ketchup",
    "Mustard",
    "Ranch"
  ];

  const [sandwiches, setSandwiches] = useState<Sandwich[]>([]);
  const [count, setCount] = useState<number>(1);
  const styles = {
    sandwich: {
      marginTop: "10px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      maxWidth: "400px",
    },
    removeBtn: {
      marginTop: "5px",
      color: "white",
      backgroundColor: "red",
      border: "none",
      padding: "5px 10px",
      cursor: "pointer",
      borderRadius: "4px",
    },
    generateBtn: {
      padding: "8px 16px",
      fontSize: "14px",
      cursor: "pointer",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "4px",
    }
  };

  function getSandwich() {
    let bread = breads[Math.floor(Math.random() * breads.length)];
    let main = mains[Math.floor(Math.random() * mains.length)];

    let Sauce1: number, Sauce2: number;
    Sauce1 = Math.floor(Math.random() * sauces.length);
    do {
      Sauce2 = Math.floor(Math.random() * sauces.length);
    } while (Sauce1 === Sauce2);

    let sauce = `${sauces[Sauce1]}, ${sauces[Sauce2]}`;
    let spicy = (Sauce1 < 3 || Sauce2 < 3) ? 'spicy' : '';

    let vegetables: string = ''
    switch (main) {
      case mains[0]:
        vegetables = 'Cucumbers, Onions';
        break;
      case mains[1]:
        vegetables = 'Lettuce, Tomatoes';
        break;
      case mains[2]:
        vegetables = 'Basil, Olives, Grated Carrot';
        break;
    }

    return { number: count, bread, main, sauce, spicy, vegetables };
  }

   function addSandwich() {
    const newSandwich = getSandwich();
    setSandwiches([...sandwiches, newSandwich]);
    setCount(count + 1);
  }

  function removeSandwich(index: number) {
    setSandwiches(sandwiches.filter((_, i) => i !== index));
  }
  return (
    <div>
      <button style={styles.generateBtn} onClick={addSandwich}>
        Generate Sandwich
      </button>

      {sandwiches.map((s, i) => (
        <div key={i} style={styles.sandwich}>
          <p style={{ whiteSpace: "pre-line", margin: 0 }}>
            Sandwich {s.number} {s.spicy}:
            {"\n"}- Bread: {s.bread}
            {"\n"}- Main: {s.main}
            {"\n"}- Sauces: {s.sauce}
            {"\n"}- Vegetables: {s.vegetables}
          </p>
          <button
            style={styles.removeBtn}
            onClick={() => removeSandwich(i)}
          >
            Remove Sandwich
          </button>
        </div>
      ))}
    </div>
  );
}