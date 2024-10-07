import { useState } from "react"

const PersonForm = () => {
  const [showInfo, setShowInfo] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowInfo(1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        
        <label htmlFor="name">Prénom</label>
        <input type="text" name="surname" value={formData.surname} onChange={handleChange}/>
        
        <label htmlFor="name">Âge</label>
        <input type="text" name="age" value={formData.age} onChange={handleChange} />

        <button type="submit">Soumettre</button>
      </form>
      
      {showInfo === 1 ? 
      <div>
        <br />
        <h3>Informations saisies</h3>
        <p>Nom: {formData.surname} </p>
        <p>Prénom: {formData.name} </p>
        <p>Âge: {formData.age} </p>
      </div> : ''}
    </div>
  )
}

export default PersonForm