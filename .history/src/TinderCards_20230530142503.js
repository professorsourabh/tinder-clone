import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Mark',
      url: 'https://example.com/mark.jpg'
    },
    {
      name: 'Lewis',
      url: 'https://example.com/lewis.jpg'
    }
  ]);

  return (
    <div>
      {people.map((person, index) => (
        <TinderCard key={index}>
          <div className="card">
            <h3>{person.name}</h3>
            <img src={person.url} alt={person.name} />
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
