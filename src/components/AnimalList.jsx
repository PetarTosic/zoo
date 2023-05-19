function AnimalList() {

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

  const check = (date) => date ? date : 'Nepoznato';

  return (
      <div>
        {animals.map(anim => (
        <div key={anim.name} style={{border: '1px solid black', padding: '5px', margin: '5px', borderRadius: '8px'}}>
          <div>
            {anim.species} 
          </div>
          <div>
            {anim.name} 
          </div>
          <div>
            {check(anim.dateOfBirth)}
          </div>
        </div>
        ))}
      </div>
    );
}

export default AnimalList;