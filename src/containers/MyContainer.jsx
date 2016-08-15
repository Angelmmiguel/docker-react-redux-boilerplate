import React from 'react';
import { connect } from 'react-redux';
import { updateTitle } from '../actions/actions';

// Components
import MyTitle from '../components/MyTitle';

class MyContainer extends React.Component {
  // Update the title
  toggleTitle() {
    let title = this.props.title === 'React' ? 'Redux' : 'React';
    // Dispatch the action to Redux
    this.props.dispatch(updateTitle(title));
  }
  // Layout
  render() {
    return (
      <section>
        <MyTitle title={ this.props.title } />
        <button onClick={this.toggleTitle.bind(this)}>Toggle title</button>
      </section>
    );
  }
}

// Map the state to the props of this component
const mapStateToProps = (state) => {
  return {
    title: state.title
  }
}

export default connect(
  mapStateToProps
)(MyContainer);
