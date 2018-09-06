import React from 'react';
import GridItem from '../components/GridItem';
import { Grid } from 'react-virtualized';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false
    };
  }

  render() {
    const state = this.state;

    return !state.started ? (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column has-text-centered">
                <h1 className="title">Landbot Frontend Challenge</h1>
                <h2 className="subtitle">Click START</h2>
              </div>
              <div className="column has-text-centered">
                <a
                  className="button is-rounded is-large"
                  onClick={() => this.setState({ started: true })}
                >
                  START
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    ) : (
      <Grid
        height={4000}
        width={4000}
        cellRenderer={() => <GridItem className="grid-item active" />}
        columnCount={40}
        columnWidth={100}
        rowCount={40}
        rowHeight={100}
        onScroll={() => console.log('aaa')}
      />
    );
  }
}

export default App;
