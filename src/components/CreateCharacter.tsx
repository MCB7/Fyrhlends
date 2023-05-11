import React from "react";
import { useCharacterContext } from "../context/CharacterContext";

const CreateCharacter: React.FC = () => {
  const { name, setName } = useCharacterContext();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        
      />
    </div>
  );
};

export default CreateCharacter;