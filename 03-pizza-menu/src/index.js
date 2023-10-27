import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHours = 22;
  const isOpen = hour >= openHour && hour <= closeHours;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHours) alert("We're currently open!");
  // else alert("Sorry we're closed");

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.We're currently Open
    </footer>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            pizzaObj={pizza}
            key={pizza.name}
            // name={pizza.name}
            // photoName={pizza.photoName}
            // ingredients={pizza.ingredients}
            // price={pizza.price}
            // soldOut={pizza.soldOut}
          />
        ))}
      </ul>
      {/* <Pizza
        name="Pizza spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h1>{props.pizzaObj.name}</h1>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price * 3}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
