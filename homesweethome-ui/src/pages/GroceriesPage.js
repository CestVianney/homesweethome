import React, { useState } from "react";
import "./GroceriesPage.css"; 

const GroceriesPage = () => {
  const [groceries, setGroceries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const suggestions = ["Pommes", "Bananes", "Carottes", "Tomates", "Pain"]; 

  const addItem = (e) => {
    e.preventDefault(); 
    if (inputValue) {
      setGroceries([...groceries, inputValue]); 
      setInputValue(""); 
    }
  };

  const deleteItem = (index) => {
    const updatedGroceries = groceries.filter((_, i) => i !== index);
    setGroceries(updatedGroceries);
  };

  const deleteAllItems = () => {
    setGroceries([]);
  };

  return (
    <div className="groceries-page">
      <h1>Liste de Courses</h1>

      {/* Barre d'ajout */}
      <form onSubmit={addItem} className="add-item-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nom de l'article"
          required
        />
        <button type="submit">Ajouter</button>
      </form>

      <div className="controls">
        <button onClick={deleteAllItems}>Supprimer Tout</button>
      </div>

      <table className="groceries-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Nom</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {groceries.map((item, index) => (
            <tr key={index}>
              <td>
                <img
                  src={`https://via.placeholder.com/50?text=${item}`}
                  alt={item}
                />
              </td>
              <td>{item}</td>
              <td>
                <div className="controls">
                  <button onClick={() => deleteItem(index)}>Supprimer</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroceriesPage;
