import Animal from "./Animal";
import { Link } from "react-router-dom";

const AllAnimals = ({animals, onRemove, onMoveToTop}) => {
  return (
    <div class="form" style={{width: "750px", height: "fit-content"}}>
    <table style={{color: "white"}}>
        <thead>
          <tr class="input-container ic1">
            <th>Ime zivotinje</th>
            <th>Ne znam</th>
            <th>Vrsta zivotinje</th>
            <th>Datum zivotinje</th>
            <th>See Animal</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <Animal key={index} animal={animal} index={index}  onRemove={onRemove} onMoveToTop={onMoveToTop}/>
          ))}
        </tbody>
      </table>
      <div ><button class="submit" style={{width: "fit-content"}}><Link style={{color: "inherit", textDecoration: "none"}} to={`/AddAnimal`}>Add Animal</Link></button></div>
    </div>
  );
}

export default AllAnimals;