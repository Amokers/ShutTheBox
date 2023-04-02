import React, { useState } from 'react';
import Button from './Button';

export default function MainMenu() {

  const [numPlayers, setNumPlayers] = useState(0);
  const [playerNames, setPlayerNames] = useState([]);

  const handleNumPlayersChange = (e) => {
    const newNumPlayers = parseInt(e.target.value);
    setNumPlayers(newNumPlayers);
    setPlayerNames(Array(newNumPlayers).fill(''));
  };

  const handlePlayerNameChange = (index, e) => {
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = e.target.value;
    setPlayerNames(newPlayerNames);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const playerInputs = playerNames.map((name, index) => (
    <div key={index}>
      <label>
        Joueur {index + 1} :
        <input
          type="text"
          value={name}
          onChange={(e) => handlePlayerNameChange(index, e)}
        />
      </label>
    </div>
  ));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de joueurs :
          <input
            type="number"
            value={numPlayers}
            onChange={handleNumPlayersChange}
          />
        </label>
        <Button type="submit" label="OK" />
      </form>
      {playerInputs}
    </>
  );
}
