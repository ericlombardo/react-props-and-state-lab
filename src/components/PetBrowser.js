import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return this.props.pets.map(pet => {
      return (
        <div className="ui cards" key={pet.id}> 
          < Pet name={pet.name} type={pet.type} age={pet.age} weight={pet.weight}/>
        </div>        
      )}
    )
  }
}

export default PetBrowser
