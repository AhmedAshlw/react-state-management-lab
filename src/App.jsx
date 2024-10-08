import { useState } from "react";
import ZombieFighter from "./components/ZombieFighter/ZombieFighter";

import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
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

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      setTotalStrength(totalStrength + fighter.strength);
      setTotalAgility(totalAgility + fighter.agility);
    } else {
      console.log("Not enough money");
    }
  };

  const handleRemoveFighter = (fighter) => {
    try {
      const deletedFighter = team.filter((zombie) => zombie.id !== fighter.id);
      setTeam(deletedFighter);
      setMoney(money + fighter.price);
      setTotalStrength(totalStrength - fighter.strength);
      setTotalAgility(totalAgility - fighter.agility);
    } catch (error) {
      console.log(error);
    }
  };

  const teamFighters = team.map((zombie, idx) => {
    return (
      <div className="zombie" key={idx}>
        <img src={zombie.img} alt={zombie.name} />
        <p>
          <span>Name: {zombie.name}</span>
        </p>
        <p>
          <span>Price: {zombie.price}</span>
        </p>
        <p>
          <span>Strength: {zombie.strength}</span>
        </p>
        <p>
          <span>Agility: {zombie.agility}</span>
        </p>
        <button
          onClick={() => {
            handleRemoveFighter(zombie);
          }}
        >
          Remove
        </button>
      </div>
    );
  });

  return (
    <>
      <h1>Zombie Fighters</h1>
      <div>
        <h3>Money: ${money}</h3>
        <h3>Team Strength: {totalStrength}</h3>
        <h3>Team Agility: {totalAgility}</h3>
        <h2>Team</h2>
        <div className="TeamCont">
          {team.length === 0 ? (
            <h4>Pick some team members!</h4>
          ) : (
            <ul>{teamFighters}</ul>
          )}
        </div>
      </div>
      <ZombieFighter
        zombieFighters={zombieFighters}
        handleAddFighter={handleAddFighter}
      />
    </>
  );
};

export default App;
