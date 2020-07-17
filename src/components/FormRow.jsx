import React from 'react';
import _ from 'lodash';

class FormRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {rank: this.props.animalRank}
  }
  componentDidUpdate() {
    if (this.props.animalRank !== this.state.rank){
      this.setState({rank: this.props.animalRank})
    } //if we rercieve new props and the animal props doesnt match whats inside the component then we should update the component
  }
  render() {
    const cells = _.range(1, 6).map((i) => { //created array 1-6, iterating over it, and for each number in that array creating a new array and returnin this HTML chunk
      return (
        <td key={`${this.props.animalName}-${i}`}>
          <input
            onClick={() => {
              this.props.selectButton(i)
            }} // i is the number clicked on
            type="radio"
            name={this.props.animalName}
            value={i}
          />
        </td>
      );
    });

    const done = this.state.rank ? "done" : null
    console.log(done)

    return (
      <tr className={done}>
        <th>{this.props.animalName}</th>
        {cells}
      </tr>
    )
  }
}

export default FormRow;
