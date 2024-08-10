const ZombieFighter = ({ zombie, handleItemClick, title }) => {
  function deriveButtonText() {
    if (title.toLowerCase().includes("shop")) {
      return "Add Fighter";
    } else {
      return "Remove Fighter";
    }
  }

  return (
    <div className="zombie">
      <img src={zombie.img} />
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
      <button onClick={() => handleItemClick(zombie)}>
        {deriveButtonText()}
      </button>
    </div>
  );
};

export default ZombieFighter;
