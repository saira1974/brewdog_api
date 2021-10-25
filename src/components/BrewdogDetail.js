import React from 'react';

const BrewdogDetail = ({selectedBrewdog}) => {
    return (
        <div>
            <h3>{selectedBrewdog.name}</h3>
            <p>{selectedBrewdog.tagline}</p>
            <p>{selectedBrewdog.first_brewed}</p>
        </div>
    )

}

export default BrewdogDetail;