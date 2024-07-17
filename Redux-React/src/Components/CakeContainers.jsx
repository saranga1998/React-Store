import React from 'react'
import { buyCake } from '../Redux';
import { connect } from 'react-redux';



function CakeContainers(props) {
  return (
    <div>
      <p>Number of Cakes -{props.numOfCakes}</p>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  )
}

const mapStateToProps = state => {

  return {
    numOfCakes: state.numOfCakes

  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapDispatchToProps, mapStateToProps)(CakeContainers)
