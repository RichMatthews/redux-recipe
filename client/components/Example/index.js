import React from 'react';
import { connect } from 'react-redux';
// import './index.scss';

export const Example = ({myState}) => (
  <div>
    I am working and I am stateless, this is my state: <b>{myState}</b>
  </div>
)

const mapStateToProps = state => ({
  myState: state.myState
});

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
