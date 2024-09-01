const ZombieFighter = ({ zombieFighters, handleAddFighter }) => {
  const fighters = zombieFighters.map((zombie, idx) => {
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
            handleAddFighter(zombie);
          }}
        >
          Add
        </button>
      </div>
    );
  });

  return (
    <div>
      <h2>Available Fighters</h2>
      {zombieFighters.length === 0 ? (
        <h2>No fighters available!</h2>
      ) : (
        <ul>{fighters}</ul>
      )}
    </div>
  );
};

export default ZombieFighter;
