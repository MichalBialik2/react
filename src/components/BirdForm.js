import React, { useState } from 'react';

const BirdForm = ({ addBird }) => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBird({ name, species, color, size, location, image });
    setName('');
    setSpecies('');
    setColor('');
    setSize('');
    setLocation('');
    setImage('');
  };

  return (
    <form className="bird-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Species</label>
        <input type="text" value={species} onChange={(e) => setSpecies(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Color</label>
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Size</label>
        <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Location</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Image URL</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <button type="submit">Add Bird</button>
    </form>
  );
};

export default BirdForm;
