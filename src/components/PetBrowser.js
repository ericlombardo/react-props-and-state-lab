import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const pets = this.props.findPets
    return( // map through pets and and create pet component for each
      <div className="ui cards"> 
        {pets}
      </div>
    )
  }
}

export default PetBrowser
