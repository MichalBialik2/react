import React, { useState } from 'react';

const AddBird = ({ addBird, birds }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBird({ name, description, image });
    setName('');
    setDescription('');
    setImage('');
  };

  return (
    <div className="add-bird-page">
      <h1>Dodaj Ptaka</h1>
      <form onSubmit={handleSubmit}>
        <label>Nazwa:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Opis:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <label>Obraz URL:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Dodaj</button>
      </form>
      <div className="bird-list">
        <h2>Dodane Ptaki:</h2>
        {birds.map((bird, idx) => (
          <div key={idx} className="gallery-item">
            <h3>{bird.name}</h3>
            <p>{bird.description}</p>
            <img src={bird.image} alt={bird.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddBird;
