import React from 'react';
import './ListItem.css';

const ListItem = ({brewdog, onBrewdogClick}) => {
  
  const handleClick = function(){
    onBrewdogClick(brewdog);
  }
  
  return <li onClick={handleClick}>{brewdog.name}</li>
}

export default ListItem;




