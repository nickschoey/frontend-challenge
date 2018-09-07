import React from 'react';
import { Grid, AutoSizer } from 'react-virtualized';
import GridItem from '../components/GridItem';
import 'react-virtualized/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
    };
  }

  /* returns components that will fill the grid with the proper class and the
   * style given by react-virtualized properly passed as props to the created
   * component.
   * */
  cellRenderer({ key, style }) {
    return <GridItem key={key} classes="grid-item" style={style} />;
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
    /* The Grid component from react-virtualized renders the grid and takes
     * care of the virtualization (rendering only the components in the
     * viewport).
     */

    /* Autosizer expands the virtualized area to the size of the parent
     * component 'grid-container' (100vh, 100vw).
     */

      <div className="grid-container">
        <AutoSizer>
          {({ height, width }) => (
            <Grid
              height={height}
              width={width}
              cellRenderer={this.cellRenderer}
              columnCount={40}
              columnWidth={100}
              rowCount={40}
              rowHeight={100}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

export default App;
