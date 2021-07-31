import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return( // map through pets and and create pet component for each
      <div className="ui cards">    
        { this.props.findPets }
      </div>
    )
  }
}

export default PetBrowser
