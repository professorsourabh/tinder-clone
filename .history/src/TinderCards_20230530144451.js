import React, { useState } from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Mark',
      url: 'https://media1.popsugar-assets.com/files/thumbor/9S7AjhrY3Qn2UNgW2CCB064xX70/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/06/04/992/n/1922283/098360edccddc443_111311021/i/Pictures-Mark-Wahlberg-When-He-Marky-Mark.jpg'
    },
    {
      name: 'Lewis',
      url: 'https://media1.popsugar-assets.com/files/thumbor/9S7AjhrY3Qn2UNgW2CCB064xX70/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/06/04/992/n/1922283/098360edccddc443_111311021/i/Pictures-Mark-Wahlberg-When-He-Marky-Mark.jpg'
    }
  ]);

  return (
    <div>
      {people.map((person, index) => (
        <TinderCard key={person.name} className='swipe' preventSwipe={['up','down']} >
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
