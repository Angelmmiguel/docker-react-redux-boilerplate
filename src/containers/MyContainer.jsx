import React from 'react';

// Components
import MyTitle from '../components/MyTitle';

class MyContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      title: 'React rocks!',
    }
  }

  // Layout
  render() {
    return (
      <section>
        <MyTitle title={ this.state.title } />
      </section>
    );
  }
}

export default MyContainer;
