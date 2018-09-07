import React from 'react';

const ACTIVE_CLASSNAME = 'active';
class GridItem extends React.Component {
  constructor() {
    super();
    this.state = {
      className: 'grid-item',
    };
  }

  /** We attach the classname to the state of the component and we modify it
   * when the component gets mounted (when it gets inside the viewport).
   * To achieve the nice fade-in transition when the 'active' class is set, we
   * modify the state as a callback for a setTimeout within the lifecycle
   * method componentDidMount. This sends the setState function to the task
   * queue and gets executed at the end of the event loop.
   */

  componentDidMount() {
    this.timeoutId = setTimeout(
      () => this.setState({
        className: `grid-item ${ACTIVE_CLASSNAME}`,
      }),
      0,
    );
  }

  componentWillUnmount() {
    /* this is 'garbage collection' for when you scroll fast around the screen.
    * If the disappearing component unmounts before the task queue has
    * executed the callback from the timeout, it provokes a memory leak.
    * Clearing the timeout before unmount solves this issue and improves
    * performace.
    */

    clearTimeout(this.timeoutId);
  }

  render() {
    const { className } = this.state;
    const { style } = this.props;
    return <div className={className} style={style} />;
  }
}

export default GridItem;
