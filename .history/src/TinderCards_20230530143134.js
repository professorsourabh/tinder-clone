import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Mark',
      url: `https://en.wikipedia.org/wiki/Mark_Lee_%28singer%29#/media/File:181012_Mark_KBS_'%EB%AE%A4%EC%A7%81%EB%B1%85%ED%81%AC'_%EB%A6%AC%ED%97%88%EC%84%A4_%EC%B6%9C%EA%B7%BC%EA%B8%B8_%EC%A7%81%EC%BA%A0_%EC%98%81%EC%83%81.png`
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
          <div className="card" style={{backgroundImage:`url(${person.url})`}}>
            <h3>{person.name}</h3>
            {/* <img src={person.url} alt={person.name} /> */}
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
