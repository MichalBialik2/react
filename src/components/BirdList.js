import React from 'react';

const BirdsInPoland = () => {
  const birds = [
    { name: 'Bocian', description: 'Bocian biały to ptak wędrowny, znany ze swojej długiej szyi i nóg.', image: 'bocian_image_url' },
    { name: 'Sójka', description: 'Sójka zwyczajna to ptak z rodziny krukowatych, rozpoznawalny po swojej kolorowej szacie.', image: 'https://www.lasy.gov.pl/++theme++lasy/cache/img/static_171420280475/5e95860c-a6fe-4317-800d-1a85f1a5087f.jpeg' },
    // dodaj więcej ptaków
  ];

  return (
    <div>
      <h1>Ptaki w Polsce</h1>
      {birds.map((bird, idx) => (
        <div key={idx} className="bird-info">
          <h2>{bird.name}</h2>
          <p>{bird.description}</p>
          <img src={bird.image} alt={bird.name} />
        </div>
      ))}
    </div>
  );
};

export default BirdsInPoland;
