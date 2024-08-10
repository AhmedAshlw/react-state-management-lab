import "./App.css";
import { useState } from "react";
import ZombieFighter from "./components/ZombieFighter/ZombieFighter.jsx";

const team = "";
const money = 100;
// const [team, setTeam] = useState([]);
// const [money, setMoney] = useState(100);

function App() {
  const handleAddFighter = () => {
    // filter the item out of the inventory
    const newFighter = zombieFighters.filter(
      (item) => item._id !== selectedItem._id
    );
    setzombieFighters(newFighter);
    // add the incoming item to the user list
    setUserFighter([...userFighter, selectedItem]);
  };

  const handleRemoveFighter = (selectedItem) => {
    // filter the item out of the inventory
    const newUserFighters = userFighter.filter(
      (item) => item._id !== selectedItem._id
    );
    setUserFighter(newUserFighters);
    // add the incoming item to the user list
    setzombieFighters([...zombieFighters, selectedItem]);
  };

  const [userFighter, setUserFighter] = useState([]);
  const [zombieFighters, setzombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  const addTeam = (newTeam) => {
    const newTeamsArray = [...zombieFighters, newTeam];
    setTeam(newTeamsArray);
  };
  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {team}</h2>
      <h2>Team Agility: {team}</h2>
      <h2>Team: </h2>
      <h3>Pick some team member </h3>

      <section>
        {zombieFighters.map((zombie, index) => (
          <ZombieFighter
            key={index}
            title="Shop ZombieFighter"
            zombie={zombieFighters}
            handleItemClick={handleAddFighter}
          />
        ))}
        {zombieFighters.map((zombie, index) => (
          <ZombieFighter
            key={index}
            title="User ZombieFighter"
            zombie={zombie}
            handleItemClick={handleRemoveFighter}
          />
        ))}
      </section>
    </>
  );
}
//I didnt know how to do add and remove .. It was very time consuming
export default App;
