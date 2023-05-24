import { Link } from "react-router-dom";

const AnimalId = ({animals, index}) => {
  let animal = animals[index];
  
  return (
    <div style={{color: "white", border: "3px solid white", padding: "10px", borderRadius: "10px", fontSize: "20px"}}>
      <div>Animal name: {animal.name}</div>
      <div>Animal species: {animal.species}</div>
      <div>Animal date of birth: {animal.date_of_birth}</div>
      <div>Animal sector: {animal.sector}</div>
      <button class="submit"><Link to={`/Animals`} style={{color: "inherit", textDecoration: "none"}}>Return</Link></button>
    </div>
  );
}

export default AnimalId;