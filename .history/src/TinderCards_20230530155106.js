import React, { useEffect, useState } from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
import database from './Firebase';


function TinderCards() {
  const [people, setPeople] = useState([
  ]);
  useEffect(()=>{
    database.collection('people').onSnapshot(snapshot=>(
        setPeople(snapshot.docs.map(doc=>doc.data()))
    ))
  },[]);

  return (
    <div>
        <h1>Tinder Cards</h1>
        <div className="tindercards-container">
      {people.map((person, index) => (
        <TinderCard key={person.name} className='swipe' preventSwipe={['up','down']} >
          <div className="card" style={{backgroundImage:`url(${person.url})`}}>
            <h3>{person.name}</h3>
            {/* <img src={person.url} alt={person.name} /> */}
          </div>
        </TinderCard>
      ))}
      </div>
    </div>
  );
}

export default TinderCards;
