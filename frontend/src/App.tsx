import { useState } from "react";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Header from "./Header";
import { Container, Typography } from "@mui/material";


interface Sandwich {
  number: number;
  bread: string;
  main: string;
  sauce: string;
  spicy: string;
  vegetables: string;
};
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

export default function App() {


  const [sandwiches, setSandwiches] = useState<Sandwich[]>([]);
  const [count, setCount] = useState<number>(1);
  const styles = {
    sandwich: {
      marginTop: "10px",
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      maxWidth: "400px",
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
    setSandwiches(prevSandwiches => [...prevSandwiches, newSandwich]);
    setCount(prevcount => prevcount + 1);
  }

  function removeSandwich(index: number) {
    setSandwiches(sandwiches.filter((_, i) => i !== index));
  }
  return (

    <Container>
      <Header />
      <Button variant="contained" color="success" onClick={addSandwich}>
        Generate Sandwich
      </Button>

      {sandwiches.map((sandwich, i) => (
        <Container key={i} style={styles.sandwich}>
          <Typography sx={{  whiteSpace: 'pre-line',   width: "300px",}} >
            Sandwich {sandwich.number} {sandwich.spicy}:
            {"\n"}- Bread: {sandwich.bread}
            {"\n"}- Main: {sandwich.main}
            {"\n"}- Sauces: {sandwich.sauce}
            {"\n"}- Vegetables: {sandwich.vegetables}
          </Typography>
          <Button variant="outlined" color="error"
            onClick={() => removeSandwich(i)}>
            Remove Sandwich
          </Button>
        </Container>
      ))}
    </Container>
  );
}