import React, { useState, useEffect } from 'react';
import BrewdogList from '../components/BrewdogList';
import BrewdogDetail from '../components/BrewdogDetail';
import BrewdogSelector from '../components/BrewdogSelect';
import './BrewdogContainer.css';



const BrewdogContainer = () => {
    const [brewdog, setBrewdog] = useState([]);
    const [selectedBrewdog, setSelectedBrewdog] = useState(null);

    useEffect(() => {
      getBrewdog();
    }, [])

    const getBrewdog = function(){
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(brewdog => setBrewdog(brewdog))
    }

    const onBrewdogClick = function(brewdog){
        setSelectedBrewdog(brewdog);

    }

    


    return (
        <div className="main-container">
            <BrewdogSelector brewdog={brewdog} onBrewdogSelected={onBrewdogClick}/>
            {selectedBrewdog ? <BrewdogDetail selectedBrewdog={selectedBrewdog} /> : null}
        </div>
    )
}

export default BrewdogContainer;


