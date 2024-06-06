import React from 'react';

const BirdsInPoland = () => {
  const birds = [
    {
      name: "Bocian",
      image: "https://www.pap.pl/sites/default/files/styles/main_image/public/202402/pap_20240220_04P.jpg?h=82c14adf&itok=SrkQ2GsO",
      description: "Bocian biały to ptak wędrowny, znany ze swojej długiej szyi i nóg."
    },
    {
      name: "Sójka",
      image: "https://www.lasy.gov.pl/++theme++lasy/cache/img/static_171420280475/5e95860c-a6fe-4317-800d-1a85f1a5087f.jpeg",
      description: "Sójka zwyczajna to ptak z rodziny krukowatych, rozpoznawalny po swojej kolorowej szacie."
    },
    {
      name: "Orzeł",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Aquila_chrysaetos_Flickr.jpg/1200px-Aquila_chrysaetos_Flickr.jpg",
      description: "Głównie w polsce zamieszkuje w Karpatyach i jest jeden na godle"
    },
    {
      name: "Gołąb",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Pigeon_shot.jpg",
      description: "Pierwotnie zasiedlał południową Europę, północną Afrykę oraz zachodnią i centralną Azję."
    },
    {
      name: "Dzięcioł",
      image: "https://www.lasy.gov.pl/pl/edukacja/lesnoteka-1/ptaki/dzieciol-duzy/@@images/image",
      description: "Pospolity, nie jest zagrożony. Zamieszkuje głównie lasy"
    },
  ];

  return (
    <div className="bird-gallery-page">
      <h1>Ptaki żyjące w Polsce</h1>
      {birds.map((bird, index) => (
        <div key={index} className="gallery-item">
          <h3>{bird.name}</h3>
          <p>{bird.description}</p>
          <img src={bird.image} alt={bird.name} />
        </div>
      ))}
    </div>
  );
};

export default BirdsInPoland;