import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType(newType) {
    this.setState({
      filters: {
        type: newType
      }
    })
   
  }


  findPets() {
    return fetch('/api/pets')
    .then(resp => resp.json())
    .then(data => {
      const pets = data
      return pets
    })
  } 

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={() => this.handleChangeType()}
                onFindPetsClick={() => this.findPets()}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser findPets={() => this.findPets()} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
