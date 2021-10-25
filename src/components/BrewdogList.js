import React from 'react';
import ListItem from './ListItem';

const BrewdogList = ({brewdog, onBrewdogClick}) => {

    const brewdogItems = brewdog.map((brewdog, index) => {
      return <ListItem brewdog={brewdog} key={index} onBrewdogClick={onBrewdogClick}/>
    })

  return (
    <div>
    <ul>
      {brewdogItems}
    </ul>
  </div>
  )
}

export default BrewdogList;