import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people,setPeople]=useState([
        {name:'Mark',
        url:''},{
            name:'lewis',
            url:''
        }
    ]);
    people
  return (
    <div>
      {people.map(person =>(
        <TinderCard>
        <div className="card"></div>
        </TinderCard>
      ))}
    </div>
  )
}

export default TinderCards
