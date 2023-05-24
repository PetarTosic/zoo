import { Link } from "react-router-dom";
import '../form.css';

const AddAnimalForm = ({handleSubmit, handleInputChange, state, clearValues}) => {
  
  const clearSmth = () => {
    state.name = "";
    state.species = "";
    state.date_of_birth = "";
    state.sector = "";
  }

  return (
    <form onSubmit={handleSubmit} class="form">
        <div class="title">Add animal</div>
        <div class="input-container ic1">
          <input id="name" class="input" placeholder=" " type="text" name="name" value={state.name} onChange={handleInputChange} />
          <div class="cut"></div>
          <label for="name" class="placeholder">Name</label>
        </div>
        <div class="input-container ic2">
          <input id="species" class="input" placeholder=" " type="text" name="species" value={state.species} onChange={handleInputChange} />
          <div class="cut"></div>
          <label for="species" class="placeholder">Species</label>
        </div>
        
        <div class="input-container ic2">
          <input id="date" type="date" class="input" placeholder=" " name="date_of_birth" value={state.date_of_birth} onChange={handleInputChange} />
          <div class="cut"></div>
          <label for="date" class="placeholder">Date</label>
        </div>
        <div class="input-container ic2">
          <select name="sector" class="input" value={state.sector} onChange={handleInputChange} >
            <option disabled defaultValue>Select sector:</option>
            <option value="bird">bird</option>
            <option value="snake">snake</option>
          </select>
        </div>
        <button type="submit" class="submit" onClick={clearSmth}>Add animal</button>
        <button class="submit"><Link to={`/Animals`} style={{color: "inherit", textDecoration: "none"}}>Return</Link></button>
    </form>
  )
}

export default AddAnimalForm;