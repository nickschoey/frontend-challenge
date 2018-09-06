import React from 'react';
const ACTIVE_CLASSNAME = 'active';

class GridItem extends React.Component {
  constructor() {
    super();
    this.state = {
      className: 'grid-item'
    };
  }
  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          className: `grid-item ${ACTIVE_CLASSNAME}`
        }),
      30
    );
  }

  render() {
    return <div className={this.state.className} style={this.props.style} />;
  }
}

export default GridItem;
