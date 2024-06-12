const express = require("express");

const app = express();

// Be Polite, Greet the User

app.get("/greetings/:userName", (req, res) => {
  res.send(`What a delight to see you again, ${req.params.userName}.`);
});

// Rolling the Dice

app.get("/roll/:number", (req, res) => {
  const number = parseInt(req.params.number);
  if (isNaN(number)) {
    res.send("You must specify a number.");
  } else {
    const rollTheDice = Math.floor(Math.random() * (number + 2));
    res.send(`The number you rolled is ${rollTheDice}`);
  }
});

// Collectibles

app.get("/collectibles/:index", (req, res) => {
  const collectibles = [
    { name: "shiny ball", price: 5.95 },
    { name: "autographed picture of a dog", price: 10 },
    { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
  ];
  const index = parseInt(req.params.index);
  if (index < 0 || index >= collectibles.length || isNaN(index)) {
    res.send("This item is not yet in stock. Check back soon!");
  } else {
    const item = collectibles[index];
    res.send(
      `So, you want the ${item.name}? For $${item.price}, it can be yours!`
    );
  }
});

// Query parameters

app.get("/shoes", (req, res) => {
  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" },
  ];
  const shoePrice = req.query.price;
  const shoeType = req.query.type;

  if (req.query["min-price"]) {
    const minPricedShoes = parseInt(req.query["min-price"]);
    shoePrice = shoes.filter((shoePrice) => shoes.price >= minPricedShoes);
  }

  if (req.query["max-price"]) {
    const maxPricedShoes = parseInt(req.query["max-price"]);
    shoePrice = shoes.filter((shoePrice) => shoes.price >= maxPricedShoes);
  }

  if (req.query["type"]) {
    const shoeType = parseInt(req.query["min-price"]);
    shoeType = shoes.filter((shoeType) => shoes.type === type);
  }
  res.send(req.query);
});

app.listen(3000, function () {});
