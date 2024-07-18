import React,{useState} from 'react'
import { buyCake } from '../Redux';
import { connect } from 'react-redux';



function NewCakeContainers(props) {
    const [number,setNumber] = useState(1)
  return (
    <div>
      <p>Number of Cakes -{props.numOfCakes}</p>
      <input type='text' value={number} onChange={e => setNumber(e.target.value)}></input>
      <button onClick={()=>props.buyCake(number)}>Buy {number} cake</button>
    </div>
  )
}

const mapStateToProps = state => {

  return {
    numOfCakes: state.cake.numOfCakes

  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number))
  };
};

export default connect( mapStateToProps,mapDispatchToProps)(NewCakeContainers)
