import { useState } from "react";

const animals = [{
  species: 'Boggus Doggus',
  name: 'Smith',
  dateOfBirth: (new Date(2001, 7, 22)).toDateString()
},
{
  species: 'Somethingus Idkus',
  name: 'Jack',
  dateOfBirth: (new Date(1995, 11, 17)).toDateString()
},
{
  species: 'Nopeusix',
  name: 'Spidey',
 
}];

function AnimalList() {
  const [listOfAnimals, setListOfAnimals] = useState(animals);

  // const check = (date) => date ? date : 'Nepoznato';

  const onRemove = (name) => {
    setListOfAnimals(prevState => prevState.filter(animal => animal.name !== name));
  }

  return (
      <div>
        {listOfAnimals.map((anim, index) => (
        <div key={index} style={{border: '1px solid black', padding: '5px', margin: '5px', borderRadius: '8px'}}>
          <div>
            {anim.species} 
          </div>
          <div>
            {anim.name} 
          </div>
          <div>
            {anim.dateOfBirth ? anim.dateOfBirth : "Nepoznat"}
          </div>
          <button onClick={() => onRemove(anim.name)}>Remove</button>
        </div>
        ))}
      </div>
    );
}

export default AnimalList;