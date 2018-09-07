import React from 'react';
import GridItem from '../components/GridItem';


// This component is no longer in use I just leave it here to illustrate how
// the exercise was solved using the react-virtualized library instead of this.

class Grid extends React.Component {
  render() {
    return (
      <div className="grid">
        { Array(40 * 40)
          .fill(null)
          .map((g, i) => <GridItem key={i} />)
        }
      </div>
    );
  }
}

export default Grid;
