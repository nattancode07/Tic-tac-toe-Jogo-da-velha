import { useState } from 'react';

export default function Player({initialName, symbol, isActive}) {

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClic(){
    setIsEditing((editing) => !editing);
  };

  function handleChange(event) {
    console.log(event)
    setPlayerName(event.target.value);
  }

  let editableplayerName = <span className="player-name">{playerName}</span>;
  //let btnCaption = 'Edit';

  if (isEditing){
    editableplayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
    //btnCaption = 'Save';
  };

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editableplayerName}
        <span className="player-symbol">
          {symbol}
        </span>
      </span>

      <button onClick={handleEditClic}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}