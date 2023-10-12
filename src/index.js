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
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizza = pizzaData;
  const numPizza = pizza.length;
  return (
    <main className="menu">
      <h2>Our Menu!</h2>
      {numPizza > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>All pizzas are sold out come visit tomorrow!</p>
      )}
    </main>
  );
}
function Pizza({pizzaObj}) {
  return (
    <li className={`pizza ${pizzaObj.soldOut?"sold-out":""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut?"sold-out":Number(pizzaObj.price)}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const OpenHour = 12;
  const closeHour = 22;
  const isOpen = hour >= OpenHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()}.We're currently Open */}
      
        {isOpen ? (
         <Order  closeHour={closeHour}/>
        ) : (
          <p>
            We're happy to welcome you between {OpenHour}:00 and {closeHour}:00
          </p>
        )}
       
    </footer>
  );
}
function Order({closeHour}){
  return ( <div className="order">
  <p>We're open until {closeHour}:00.come visit us or order online</p>
  <button className="btn">order now</button>
  </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import pizzaData from "./pizzaData";
// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }
// function Header() {
//   const style = {};
//   return (
//     <header className="header">
//       <h1 style={style}>Fast React Pizza co.</h1>
//     </header>
//   );
// }
// function Menu() {
//   let pizzas=pizzaData;
//  //pizzas=[];
//   const numPizza=pizzas.length;
//     return(
//       <main className="menu">
//         <h2>Our Menu</h2>
//        {numPizza>0?(
//         <>
//         <p>Authentic italian Cusisine , 6 creative dishes to choose from.All
//           from our stone oven,all organic,all delecious.
//         </p>
//         <ul className="pizzas">
//           {pizzas.map((pizza)=>(
//             <Pizza pizzaObj={pizza} key={pizza.name}/>
//           ))}
//         </ul>
//         </>
//        ):<p>We're still working on our menu please come back later</p>}
//       </main>
//     )
//           }

// function Pizza({pizzaObj}) {

//   // if(pizzaObj.soldOut){
//   //   return null;
//   // }
//     console.log(pizzaObj);
//   return (
//     <li className={`pizza ${pizzaObj.soldOut?"sold-out":""}`}>
//       <img src={pizzaObj.photoName} alt={pizzaObj.name} />
//       <div>
//       <h3>{pizzaObj.name}</h3>
//       <p>{pizzaObj.ingredients}</p>
//       <span>{ pizzaObj.soldOut?"SOLD OUT":pizzaObj.price+3}</span>
//       </div>
//     </li>
//   );
// }
// function Footer() {
//   const hours=new Date().getHours();
//   const OpenHour=9;
//   const closeHour=22;
//   const isOpen=hours>=OpenHour&&hours<=closeHour;
// //   if(!isOpen){
// //     return (
// // <p>We're happy to asist uou between {OpenHour}:00 and {closeHour}:00 </p>
// //     )
// //   }
//   return (
//     <footer className="footer">
//      {isOpen?
//      (
//         <Orders closeHour={closeHour}/>
//       ):<p>We're happy to asist you between {OpenHour}:00 and {closeHour}:00 </p>}
//     </footer>
//   );
// }
// function Orders({closeHour}){
//   console.log(closeHour);
//   return (
//     <div className="order">
//      <p>We're open until {closeHour}:00.Come visit us or order Online</p>
//      <button className="btn">Orders</button>
//      </div>
//      )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//  /* <Pizza
// //         name="Pizza spinanci"
// //         ingredients="Tomato, mozarella, spinach, and ricotta cheese"
// //         photoName="pizzas/spinaci.jpg"
// //         price={10}
// //       />

// // <Pizza
// //        name="Pizza Funghi"
// //        ingredients= "Tomato, mozarella, mushrooms, and onion"
// //        price={12}
// //        photoName="pizzas/funghi.jpg"
// //       />
// //        <Pizza
// //         name="Pizza Margherita"
// //         ingredients= "Tomato and mozarella"
// //         price={10}
// //         photoName= "pizzas/margherita.jpg"
// //         /> */
