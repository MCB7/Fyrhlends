//NAME
 // = name 
 // = nickname
//STATS
    // = strength 
    // = dexterity
    // = constitution
    // = wisdom
    // = intelligence
    // = charisma
    // = hitpoints - HEALTH
    // = actionpoints - ACTIONS
    // = endurancepoints -BLOCKING
    // = temp
    // = hunger
    // = health
        // - disease
        //- maimed
        // - scars
        // - enviromental

    // = sleep
    // = thirst
    // = reputation
            // - general
            // - faction1
            // - faction2
            // - faction3
            // - etc...
    // = alignment 
            // - chaos
            // - order
            // - good
            // - evil

//INVENTORY

    // = weapon 
    // = armor 
    // = shield
    // = helmet
    // = ring 1
     // = ring 2
    // = amulet
    // = boots
    // = bracers

//LOCATION

// = coordinates 
// = danger level
// = territory claim

//APPEARANCE

// = model
// = potrait

import React from "react";
import { useCharacterContext } from "../context/CharacterContext";

const Character: React.FC = () => {
  const { name } = useCharacterContext();

  return (
    <div>
      <p>Name: {name}</p>
    </div>
  );
};

export default Character;