import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Mark',
      url: 'https://cdn.britannica.com/32/181632-004-51372707/Mark-Wahlberg-producer.jpg?w=400&h=300&c=crop'
    },
    {
      name: 'Lewis',
      url: 'https://media1.popsugar-assets.com/files/thumbor/9S7AjhrY3Qn2UNgW2CCB064xX70/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/06/04/992/n/1922283/098360edccddc443_111311021/i/Pictures-Mark-Wahlberg-When-He-Marky-Mark.jpg'
    }
  ]);

  return (
    <div>
      {people.map((person, index) => (
        <TinderCard key={person.name} className='swipe'>
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
