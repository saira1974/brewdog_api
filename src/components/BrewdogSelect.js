import React from 'react';

const BrewdogSelector = ({brewdog, onBrewdogSelected}) => {

    const handleChange = function(event){
        const chosenBrewdog = brewdog[event.target.value];
        onBrewdogSelected(chosenBrewdog);
        const handleClick = () => {
            
        }
    }

    const brewdogOptions = brewdog.map((brewdog, index) => {
        return <option value={index} key={index}>{brewdog.name}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Brewdog Beer</option>
            {brewdogOptions}
        </select>
        
    )

}

export default BrewdogSelector;