import React from 'react';
// import Grid from './Grid';
import GridItem from '../components/GridItem';
import { Grid, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false
    };
  }
  componentDidMount() {}

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
      <div className="hello">
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
              onScroll={()=> console.log('aaaaa')}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

export default App;
