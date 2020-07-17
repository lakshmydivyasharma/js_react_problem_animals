import React from 'react';
import _ from 'lodash';
import FormRow from './FormRow.jsx';
import Animal from './Animal.js';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: ['panda','cat','capybara','iguana','muskrat'].map((name) => {
        return new Animal(name); //instantiating an object of that class. animal is a class that has a constructor that takes in one variable which is name and it's creating a bunch of objects which are instances of that class
      }),
      error: ''
    };
  }

  render() {
    console.log(this.state.animals)
    const rows = this.state.animals.map((animal) => {
      return (
        <FormRow
          animalRank={animal.rank}
          selectButton={(updatedRank) => {
            animal.setRank(updatedRank)
            this.setState ({animals: this.state.animals})
          }
        }
          animalName={animal.name}
          key={animal.name}
        />
      );
    });

    const headers = _.range(1, 6).map((i) => <th key={`header-${i}`}>{i}</th>);
    let disabled = false
    this.state.animals.forEach((animal) => {
      if (!animal.rank){
        disabled = true
      }
    })
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              {headers}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
        <div>{this.state.error}</div>
        <input type="submit" disabled={disabled} /> {/*disabled is a prop of the input tag*/}
      </div>
    );
  }
}

export default MainPage;
