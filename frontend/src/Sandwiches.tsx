import { useState } from "react";
import { Typography, CardContent, Button, Card, Box } from "@mui/material";
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


function SandwichGenerator() {


  const [sandwiches, setSandwiches] = useState<Sandwich[]>([]);
  const [count, setCount] = useState<number>(1);


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

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >

      <Box sx={{ flex: 1, p: 2 }}>
        <Button variant="contained" color="success" sx={{ mt: 1 }} onClick={addSandwich}>
          Generate Sandwich
        </Button>

        {sandwiches.map((sandwich, i) => (

          <Card key={i} variant="outlined"
            sx={{
              mt: 1.25,
              maxWidth: 400,
              borderRadius: "8px",
              p: 2,
            }}>
            <CardContent>
              <Typography>Sandwich {sandwich.number} {sandwich.spicy}:</Typography>
              <Typography> - Bread: {sandwich.bread}</Typography>
              <Typography>- Main: {sandwich.main}</Typography>
              <Typography> - Sauces: {sandwich.sauce}</Typography>
              <Typography> - Vegetables: {sandwich.vegetables}</Typography>
            </CardContent>
            <Button variant="outlined" color="error"
              onClick={() => removeSandwich(i)}>
              Remove Sandwich
            </Button>
          </Card>
        ))}
      </Box>
    </Box>

  );
}
export default SandwichGenerator