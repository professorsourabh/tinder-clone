import React, { useState } from 'react'
// import TinderCards from './TinderCards';

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
        <TinderCards/>
      ))}
    </div>
  )
}

export default TinderCards
