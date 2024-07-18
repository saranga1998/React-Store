import React from 'react'
import { buyIce } from '../Redux'
import { connect } from 'react-redux'

function IceContainer(props) {
  return (
    <div>
      <p>Number of Ice Cream :{props.numOfIce}</p>
      <button onClick={props.buyIce}>Buy Ice Cream</button>
    </div>
  )
}


const mapStateToProps = state =>{
    return{
        numOfIce  : state.ice.numOfIce
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyIce: () => dispatch(buyIce())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (IceContainer)
